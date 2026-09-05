import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

import {
  createDiagnosticSession,
  addEvidence,
  getNextQuestion,
  getTopHypothesis,
  isDiagnosisComplete,
} from "@/lib/diagnostic/engine";

import type {
  DiagnosticState,
  Evidence,
  DiagnosticQuestion,
} from "@/lib/diagnostic/types";

export const dynamic = "force-dynamic";

/* =========================================================
   ENVIRONMENT
========================================================= */

const OLLAMA_URL = process.env.OLLAMA_URL;

const OLLAMA_MODEL =
  process.env.OLLAMA_MODEL || "gemma3:4b";

const MAX_DIAGNOSTIC_INTERACTIONS = 5;

/* =========================================================
   TYPES
========================================================= */

type ConversationMessage = {
  role: "user" | "assistant";
  content: string;
};

type Severity =
  | "low"
  | "medium"
  | "high"
  | "critical";

type UserIntent =
  | "technical_answer"
  | "technical_information"
  | "non_technical";

type IntentAnalysis = {
  intent: UserIntent;
  technicalEvidence: boolean;
  reason: string;
};

type DiagnosticAIOutput = {
  summary: string;
  check: string;
  question: string;
  severity: Severity;
  aenaAction: string;
  safetyWarning: string;
};

type EvidenceExtractionOutput = {
  evidence: {
    id: string;
    observation: string;

    domain:
      | "electrical"
      | "drive"
      | "plc"
      | "mechanical"
      | "process"
      | "sensor"
      | "communication"
      | "safety"
      | "unknown";

    polarity:
      | "supports"
      | "contradicts"
      | "neutral";

    reliability: number;
  }[];
};

/* =========================================================
   AENA ENGINEERING PROMPT
========================================================= */

const AENA_ENGINEERING_PROMPT = `
You are AENA Retrofit AI.

You are an industrial engineering diagnostic assistant
developed by AENA Technologies.

You are NOT a generic chatbot.

You diagnose real industrial machine problems.

Your diagnostic reasoning must be based on:

SYMPTOM
→ OBSERVABLE BEHAVIOR
→ EVIDENCE
→ DIFFERENTIAL DIAGNOSIS
→ HYPOTHESIS
→ MEASUREMENT
→ ENGINEERING ACTION

=========================================================
ENGINEERING DOMAINS
=========================================================

You may reason across:

* electrical
* drive
* PLC
* mechanical
* process
* sensor
* communication
* safety

=========================================================
IMPORTANT
=========================================================

The backend controls:

* diagnostic interaction count
* diagnostic question
* hypothesis probabilities
* diagnostic completion
* engineering handoff

You must NOT override backend state.

Do not invent measurements.
Do not invent alarm codes.
Do not invent parameter values.
Do not declare a component defective without evidence.

Prefer measurable observations.

Use professional industrial engineering terminology.

Respond in the same language as the user.

For Turkish users, respond in Turkish.
`;

/* =========================================================
   QUESTION CLEANER
========================================================= */

function cleanQuestion(
  question: string,
): string {

  if (!question) {
    return "";
  }

  const normalized =
    question
      .replace(/\s+/g, " ")
      .trim();

  if (!normalized) {
    return "";
  }

  const questionMarkIndex =
    normalized.indexOf("?");

  if (questionMarkIndex !== -1) {
    return normalized
      .substring(
        0,
        questionMarkIndex + 1,
      )
      .trim();
  }

  return `${normalized}?`;
}

/* =========================================================
   SERIALIZE DIAGNOSTIC STATE
========================================================= */

function serializeDiagnosticState(
  state: DiagnosticState,
) {

  return {
    interaction:
      state.interaction,

    symptom:
      state.symptom,
intent:
  state.intent,


    domain:
      state.domain,

    evidence:
      state.evidence,

    hypotheses:
      state.hypotheses,

    askedQuestions:
      state.askedQuestions,

    unansweredQuestions:
      state.unansweredQuestions,

    confidence:
      state.confidence,

    safetyCritical:
      state.safetyCritical,

    diagnosticComplete:
      state.diagnosticComplete,

    needsEngineer:
      state.needsEngineer,

    currentQuestion:
      state.currentQuestion,
  };
}

/* =========================================================
   RESTORE DIAGNOSTIC STATE
========================================================= */

function restoreDiagnosticState(
  value: unknown,
): DiagnosticState | null {

  if (
    !value ||
    typeof value !== "object"
  ) {
    return null;
  }

  const candidate =
    value as Record<string, unknown>;

 if (
  typeof candidate.interaction !== "number" ||
  typeof candidate.symptom !== "string" ||

  (
    candidate.intent !== "technical" &&
    candidate.intent !== "non_technical" &&
    candidate.intent !== "unknown"
  ) ||

  !Array.isArray(candidate.evidence) ||
  !Array.isArray(candidate.hypotheses) ||
  !Array.isArray(candidate.askedQuestions) ||
  !Array.isArray(candidate.unansweredQuestions) ||
  typeof candidate.confidence !== "number" ||
  typeof candidate.safetyCritical !== "boolean" ||
  typeof candidate.diagnosticComplete !== "boolean" ||
  typeof candidate.needsEngineer !== "boolean"
) {
  return null;
}
  const domain =
    typeof candidate.domain === "string"
      ? candidate.domain as DiagnosticState["domain"]
      : "unknown";

  const currentQuestion =
    candidate.currentQuestion &&
    typeof candidate.currentQuestion === "object"
      ? candidate.currentQuestion as DiagnosticQuestion
      : null;

  
  return {
  interaction:
    Number(candidate.interaction),

  symptom:
    String(candidate.symptom),

  intent:
    candidate.intent as DiagnosticState["intent"],

  domain,

  evidence:
    candidate.evidence as Evidence[],

  hypotheses:
    candidate.hypotheses as DiagnosticState["hypotheses"],

  askedQuestions:
    candidate.askedQuestions as DiagnosticQuestion[],

  unansweredQuestions:
    candidate.unansweredQuestions as DiagnosticQuestion[],

  confidence:
    Number(candidate.confidence),

  safetyCritical:
    Boolean(candidate.safetyCritical),

  diagnosticComplete:
    Boolean(candidate.diagnosticComplete),

  needsEngineer:
    Boolean(candidate.needsEngineer),

  currentQuestion,

} as DiagnosticState;
}

/* =========================================================
   LOAD STORED DIAGNOSTIC STATE
========================================================= */

async function loadDiagnosticState(
  caseId: string,
): Promise<DiagnosticState | null> {

  const {
    data,
    error,
  } = await supabase
    .from("retrofit_ai_cases")
    .select(
      "id, symptom, ai_recommendations",
    )
    .eq("id", caseId)
    .single();

  if (error) {

    console.warn(
      "DIAGNOSTIC STATE LOAD ERROR:",
      error,
    );

    return null;
  }

  const recommendations =
    data?.ai_recommendations;

  if (
    !recommendations ||
    typeof recommendations !== "object"
  ) {
    return null;
  }

  const storedState =
    (
      recommendations as Record<
        string,
        unknown
      >
    ).diagnosticState;

  return restoreDiagnosticState(
    storedState,
  );
}

/* =========================================================
   HARD NON-TECHNICAL MESSAGE DETECTION
========================================================= */

function isClearlyNonTechnicalMessage(
  answer: string,
): boolean {

  const normalized =
    answer
      .toLocaleLowerCase("tr-TR")
      .trim()
      .replace(/\s+/g, " ")
      .replace(/[?.!,;:]+$/g, "");

  if (!normalized) {
    return false;
  }

  /* =====================================================
     TECHNICAL SIGNALS
  ===================================================== */

  const technicalPatterns = [
    /plc/,
    /hmi/,
    /scada/,
    /servo/,
    /motor/,
    /sürücü/,
    /surucu/,
    /drive/,
    /encoder/,
    /invertör/,
    /inverter/,
    /frekans/,
    /akım/,
    /akim/,
    /gerilim/,
    /voltaj/,
    /sensör/,
    /sensor/,
    /kontaktör/,
    /kontaktor/,
    /röle/,
    /role/,
    /ethernet/,
    /modbus/,
    /profinet/,
    /profibus/,
    /canopen/,
    /can bus/,
    /alarm/,
    /arıza/,
    /ariza/,
    /fault/,
    /error/,
    /hata/,
    /problem/,
    /çalışmıyor/,
    /calismiyor/,
    /durdu/,
    /başlamıyor/,
    /baslamiyor/,
    /devreye girmiyor/,
    /hareket etmiyor/,
    /üretim durdu/,
    /uretim durdu/,
    /makine durdu/,
    /sistem durdu/,
    /hat durdu/,
  ];

  const hasTechnicalSignal =
    technicalPatterns.some(
      (pattern) =>
        pattern.test(normalized),
    );

  if (hasTechnicalSignal) {

    console.log(
      "HARD NON-TECH CHECK: TECHNICAL SIGNAL DETECTED",
      normalized,
    );

    return false;
  }

  /* =====================================================
     HELP / CONVERSATION REQUESTS
  ===================================================== */

  const normalizedHelpRequest =
    normalized
      .replace(
        /olur\s*musunuz/g,
        "olur musunuz",
      )
      .replace(
        /olur\s*musun/g,
        "olur musun",
      )
      .replace(
        /olur\s*msunuz/g,
        "olur musunuz",
      )
      .replace(
        /olur\s*msun/g,
        "olur musun",
      );

  const helpRequestPatterns = [
    /^bana\s+yardımcı\s+olur\s+musun$/,
    /^bana\s+yardimci\s+olur\s+musun$/,

    /^bana\s+yardımcı\s+olur\s+musunuz$/,
    /^bana\s+yardimci\s+olur\s+musunuz$/,

    /^yardımcı\s+olur\s+musun$/,
    /^yardimci\s+olur\s+musun$/,

    /^yardımcı\s+olur\s+musunuz$/,
    /^yardimci\s+olur\s+musunuz$/,
  ];

  if (
    helpRequestPatterns.some(
      (pattern) =>
        pattern.test(
          normalizedHelpRequest,
        ),
    )
  ) {

    console.log(
      "HARD NON-TECH CHECK: HELP REQUEST",
      normalized,
    );

    return true;
  }

  /* =====================================================
     DIRECT NON-TECHNICAL
  ===================================================== */

  const nonTechnicalPatterns = [

    /* Greetings */

    /^merhaba$/,
    /^selam$/,
    /^hello$/,
    /^hi$/,
    /^hey$/,
    /^günaydın$/,
    /^iyi akşamlar$/,
    /^iyi geceler$/,

    /* Thanks */

    /^teşekkürler$/,
    /^teşekkür ederim$/,
    /^tesekkurler$/,
    /^tesekkur ederim$/,
    /^sağ ol$/,
    /^sağol$/,
    /^sag ol$/,
    /^sagol$/,
    /^thanks$/,
    /^thank you$/,

    /* System conversation */

    /^sen neler yapabiliyorsun$/,
    /^ne yapabiliyorsun$/,
    /^neler yapabilirsin$/,
    /^sen ne yapıyorsun$/,
    /^sen ne yapiyorsun$/,

    /^nasıl çalışıyorsun$/,
    /^nasil calisiyorsun$/,

    /^bu sistem ne$/,
    /^bu sistem nedir$/,

    /^bu ai ne$/,
    /^bu ai nedir$/,

    /^bu yapay zeka ne$/,
    /^bu yapay zeka nedir$/,

    /^sen kimsin$/,
    /^sen nesin$/,

    /* Conversation control */

    /^tamam$/,
    /^ok$/,
    /^okay$/,
    /^peki$/,
    /^anladım$/,
    /^anladim$/,
    /^bekle$/,
    /^bir dakika$/,
    /^dur$/,
    /^devam$/,
    /^devam edelim$/,

    /^şimdilik başka bir şey yok$/,
    /^şimdilik başka birsey yok$/,
    /^simdilik baska bir sey yok$/,
    /^simdilik baska birsey yok$/,

    /* Starting conversation */

    /^başka bir şey soracağım$/,
    /^başka bir sey soracağım$/,
    /^baska bir sey soracagim$/,

    /^bir şey sorabilir miyim$/,
    /^bir sey sorabilir miyim$/,

    /^bir soru sorabilir miyim$/,

    /^sana bir şey sorabilir miyim$/,
    /^sana bir sey sorabilir miyim$/,

    /^sana bir soru sorabilir miyim$/,

    /* How to use */

    /^nasıl kullanılır$/,
    /^nasil kullanilir$/,

    /^nasıl kullanabilirim$/,
    /^nasil kullanabilirim$/,

    /^bunu nasıl kullanırım$/,
    /^bunu nasil kullanirim$/,

    /^bana yardımcı olabilir misin$/,
    /^bana yardimci olabilir misin$/,

    /^yardımcı olabilir misin$/,
    /^yardimci olabilir misin$/,

    /^yardım eder misin$/,
    /^yardim eder misin$/,

    /* General */

    /^nasılsın$/,
    /^nasilsin$/,
    /^iyi misin$/,
    /^nasıl gidiyor$/,
    /^nasil gidiyor$/,
  ];

  if (
    nonTechnicalPatterns.some(
      (pattern) =>
        pattern.test(normalized),
    )
  ) {

    console.log(
      "HARD NON-TECH CHECK: DIRECT NON-TECHNICAL",
      normalized,
    );

    return true;
  }

  /* =====================================================
     CONVERSATIONAL STARTERS
  ===================================================== */

  const greetingPattern =
    /^(merhaba|selam|hello|hi|hey)(\s|$)/;

  const conversationalPattern =
    /(bir sorum var|bir soru var|sana bir soru|bir şey soracağım|bir sey soracagim|bir soru soracağım|bir soru soracagim|sana bir şey danışacağım|sana bir sey danisacagim|bir şey danışmak istiyorum|bir sey danismak istiyorum|bir konuda yardım|bir konuda yardim|bir konuda soru|bir şey sormak istiyorum|bir sey sormak istiyorum|yardımcı olur musun|yardimci olur musun|yardımcı olurmusun|yardimci olurmusun|yardımcı olur musunuz|yardimci olur musunuz|yardımcı olurmsunuz|yardimci olurmsunuz)/;

  const hasGreeting =
    greetingPattern.test(normalized);

  const hasConversationalPattern =
    conversationalPattern.test(
      normalized,
    );

  if (
    hasGreeting &&
    hasConversationalPattern
  ) {

    console.log(
      "HARD NON-TECH CHECK: CONVERSATIONAL STARTER",
      normalized,
    );

    return true;
  }

  /* =====================================================
     PURE CONVERSATION
  ===================================================== */

  const pureConversationalPatterns = [
    /^bir sorum var$/,
    /^bir soru var$/,
    /^sana bir soru$/,
    /^sana bir şey soracağım$/,
    /^sana bir sey soracagim$/,

    /^bir konuda konuşmak istiyorum$/,
    /^bir konuda konusmak istiyorum$/,

    /^bir konuda yardım lazım$/,
    /^bir konuda yardim lazim$/,
  ];

  if (
    pureConversationalPatterns.some(
      (pattern) =>
        pattern.test(normalized),
    )
  ) {

    console.log(
      "HARD NON-TECH CHECK: PURE CONVERSATION",
      normalized,
    );

    return true;
  }

  console.log(
    "HARD NON-TECH CHECK: NOT CLEARLY NON-TECHNICAL",
    normalized,
  );

  return false;
}

/* =========================================================
   INITIAL DIAGNOSTIC SIGNAL DETECTION

   Bu fonksiyon özellikle ilk mesaj için kullanılır.

   Örnek:

   "PLC arızası var"
   "Motor çalışmıyor"
   "Sürücü fault veriyor"

   gibi mesajlar diagnostic problem olarak kabul edilir.

   Böylece Ollama yanlışlıkla:

   technical_information

   dese bile gerçek arıza sinyali diagnostic engine'i
   başlatabilir.

   Buna karşılık:

   "PLC nedir?"
   "Encoder ne işe yarar?"

   diagnostic problem değildir.
========================================================= */

function isDiagnosticProblemMessage(
  message: string,
): boolean {

  const normalized =
    message
      .toLocaleLowerCase("tr-TR")
      .trim()
      .replace(/\s+/g, " ");

  if (!normalized) {
    return false;
  }

  const diagnosticPatterns = [

    /* Fault / Error */

    /arıza/,
    /ariza/,
    /hata/,
    /fault/,
    /error/,
    /alarm/,

    /* Machine behavior */

    /çalışmıyor/,
    /calismiyor/,
    /durdu/,
    /başlamıyor/,
    /baslamiyor/,
    /devreye girmiyor/,
    /hareket etmiyor/,
    /dönmüyor/,
    /donmuyor/,
    /dönüş yapmıyor/,
    /donus yapmiyor/,
    /çalışıyor ama/,
    /çalışıyor fakat/,

    /* Industrial problem */

    /problem var/,
    /sorun var/,
    /problem oluştu/,
    /problem olustu/,
    /sorun oluştu/,
    /sorun olustu/,
    /problem yaşıyorum/,
    /problem yasiyorum/,
    /sorun yaşıyorum/,
    /sorun yasiyorum/,

    /* Explicit fault context */

    /arızası var/,
    /arizasi var/,
    /hatası var/,
    /hatasi var/,
    /fault veriyor/,
    /error veriyor/,
    /alarm veriyor/,
    /alarm çıkıyor/,
    /alarm cikiyor/,
    /hata veriyor/,

    /* Machine / production stop */

    /makine durdu/,
    /makine çalışmıyor/,
    /makine calismiyor/,
    /üretim durdu/,
    /uretim durdu/,
    /hat durdu/,
  ];

  return diagnosticPatterns.some(
    (pattern) =>
      pattern.test(normalized),
  );
}

/* =========================================================
   USER INTENT ANALYSIS
========================================================= */

async function analyzeUserIntent(
  symptom: string,
  question: DiagnosticQuestion | null,
  answer: string,
): Promise<IntentAnalysis> {

  if (!OLLAMA_URL) {

    throw new Error(
      "OLLAMA_URL environment variable is not configured.",
    );
  }

  const intentPrompt = `
${AENA_ENGINEERING_PROMPT}

=========================================================
USER MESSAGE INTENT CLASSIFICATION
=========================================================

Your ONLY task is to classify the user's latest message.

You must determine whether the message is:

1. technical_answer
2. technical_information
3. non_technical

Do NOT diagnose the machine.
Do NOT create a diagnostic question.
Do NOT recommend a repair.
Do NOT invent technical evidence.

=========================================================
CLASSIFICATION RULES
=========================================================

IMPORTANT:

A message can be TECHNICAL even if it does NOT contain
a measurement, alarm, fault code or machine observation.

Technical questions about industrial engineering concepts
must be classified as:

technical_information

Examples:

"PLC nedir?"
"PLC nasıl çalışır?"
"Encoder nedir?"
"Servo motor ile asenkron motor arasındaki fark nedir?"
"Frekans invertörü ne işe yarar?"
"VFD nedir?"
"Slip ring nedir?"
"Motor neden yüksek akım çeker?"
"Lenze 9300 nedir?"
"Modbus TCP nasıl çalışır?"
"Encoder feedback nasıl çalışır?"
"Bir motorun nominal akımı nasıl hesaplanır?"

These are TECHNICAL INFORMATION.

=========================================================
TECHNICAL ANSWER
=========================================================

Use technical_answer when the user answers the current
diagnostic question or provides a direct machine observation.

Examples:

"Evet."
"Hayır."
"PLC CPU STOP'ta."
"Sürücü RUN'a geçiyor."
"Akım 85 amper."
"Motor 50 Hz'de 120 A çekiyor."
"Sürücü F007 hatası veriyor."
"Motor sadece yük altında duruyor."

=========================================================
TECHNICAL INFORMATION
=========================================================

Use technical_information when the user asks about,
describes or discusses an industrial engineering concept,
component, system or technical subject.

Examples:

"PLC nedir?"
"Encoder ne işe yarar?"
"Servo motor nasıl çalışır?"
"Lenze 9300 hakkında bilgi verir misin?"
"Bir inverter neden overcurrent verir?"
"Motorun nominal torku nasıl bulunur?"

IMPORTANT:

technical_information DOES NOT require
technicalEvidence to be true.

A technical question itself is technical.

=========================================================
NON-TECHNICAL
=========================================================

Use non_technical when the message contains no
technical subject and no engineering information.

Examples:

"Merhaba"
"Merhaba nasılsın"
"Selam"
"Sen nasılsın?"
"Teşekkürler"
"Tamam"
"Sen kimsin?"
"Sen neler yapabiliyorsun?"
"Bu sistem nedir?"
"Bugün hava nasıl?"
"Nasılsın?"

=========================================================
VERY IMPORTANT DISTINCTION
=========================================================

Do NOT classify a message as non_technical merely because
it does not contain a measurement.

For example:

"PLC nedir?"

must be:

technical_information

and NOT:

non_technical

Likewise:

"Encoder ne işe yarar?"

must be:

technical_information

and NOT:

non_technical

However:

"Merhaba nasılsın"

must be:

non_technical.

=========================================================
CURRENT SYMPTOM
=========================================================

${symptom}

=========================================================
CURRENT QUESTION
=========================================================

${
  question
    ? question.question
    : "No current question."
}

=========================================================
USER MESSAGE
=========================================================

${answer}

=========================================================
STRICT OUTPUT
=========================================================

Return ONLY valid JSON.

{
  "intent": "technical_information",
  "technicalEvidence": true,
  "reason": ""
}

=========================================================
FINAL RULE
=========================================================

If the message contains an industrial engineering subject,
component, machine, process, electrical system, automation
system or technical concept, it is NOT non_technical.

If it is a technical question but contains no machine-specific
evidence, classify it as technical_information.

Only use non_technical when there is no technical subject
or engineering information.
`;

  const response =
    await fetch(
      OLLAMA_URL,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          model:
            OLLAMA_MODEL,

          prompt:
            intentPrompt,

          stream: false,

          format: {
            type: "object",

            properties: {

              intent: {
                type: "string",

                enum: [
                  "technical_answer",
                  "technical_information",
                  "non_technical",
                ],
              },

              technicalEvidence: {
                type: "boolean",
              },

              reason: {
                type: "string",
              },
            },

            required: [
              "intent",
              "technicalEvidence",
              "reason",
            ],
          },

          options: {
            temperature: 0.0,
            num_ctx: 4096,
          },
        }),
      },
    );

  if (!response.ok) {

    const errorText =
      await response.text();

    throw new Error(
      `Ollama intent analysis failed with status ${response.status}: ${errorText}`,
    );
  }

  const data =
    await response.json();

  const output =
    data?.response;

  if (!output) {

    return {
      intent:
        "non_technical",

      technicalEvidence:
        false,

      reason:
        "No intent result.",
    };
  }

  let parsed: IntentAnalysis;

  try {

    parsed =
      typeof output === "string"
        ? JSON.parse(output)
        : output;

  } catch {

    return {
      intent:
        "non_technical",

      technicalEvidence:
        false,

      reason:
        "Invalid intent JSON.",
    };
  }

  const validIntents: UserIntent[] = [
    "technical_answer",
    "technical_information",
    "non_technical",
  ];

  const intent =
    validIntents.includes(
      parsed.intent,
    )
      ? parsed.intent
      : "non_technical";

  return {

    intent,

    technicalEvidence:
      intent !== "non_technical" &&
      parsed.technicalEvidence === true,

    reason:
      typeof parsed.reason === "string"
        ? parsed.reason
        : "",
  };
}

/* =========================================================
   EVIDENCE EXTRACTION
========================================================= */

async function extractEvidenceWithAI(
  symptom: string,
  question: DiagnosticQuestion | null,
  answer: string,
  previousEvidence: Evidence[],
): Promise<Evidence[]> {

  if (!OLLAMA_URL) {

    throw new Error(
      "OLLAMA_URL environment variable is not configured.",
    );
  }

  const extractionPrompt = `
${AENA_ENGINEERING_PROMPT}

=========================================================
EVIDENCE EXTRACTION
=========================================================

The user has provided a technical response.

Your ONLY task is to identify factual engineering evidence
explicitly contained in the user's message.

Do not diagnose.

Do not recommend repairs.

Do not create measurements.

Do not infer unsupported facts.

Do not convert uncertainty into fact.

=========================================================
MACHINE SYMPTOM
=========================================================

${symptom}

=========================================================
QUESTION ASKED
=========================================================

${
  question
    ? question.question
    : "No question."
}

=========================================================
EXPECTED EVIDENCE
=========================================================

${
  question
    ? question.expectedEvidence
    : "unknown"
}

=========================================================
USER ANSWER
=========================================================

${answer}

=========================================================
PREVIOUS EVIDENCE
=========================================================

${
  previousEvidence.length > 0
    ? previousEvidence
        .map(
          (item) =>
            `${item.id} = ${item.observation}`,
        )
        .join("\n")
    : "No previous evidence."
}

=========================================================
CURRENT QUESTION EVIDENCE RULE
=========================================================

If the user directly answers the current question,
use the evidence key associated with that question.

Examples:

q_drive_fault
→ drive_fault

q_drive_run
→ drive_run

q_motor_output_voltage
→ motor_output_voltage

q_motor_shaft
→ motor_shaft

q_motor_current
→ motor_current

q_operating_condition
→ operating_condition

q_process_pressure
→ process_pressure

q_speed_reference
→ speed_reference

q_actual_speed
→ actual_speed

q_feedback
→ feedback

=========================================================
UNCERTAINTY RULE
=========================================================

If the user says:

"olabilir"
"sanırım"
"bilmiyorum"
"muhtemelen"
"emin değilim"

do NOT convert that statement into confirmed evidence.

=========================================================
OUTPUT
=========================================================

Return ONLY valid JSON.

{
  "evidence": [
    {
      "id": "",
      "observation": "",
      "domain": "",
      "polarity": "supports",
      "reliability": 0.8
    }
  ]
}

If there is no reliable technical evidence:

{
  "evidence": []
}
`;

  const response =
    await fetch(
      OLLAMA_URL,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          model:
            OLLAMA_MODEL,

          prompt:
            extractionPrompt,

          stream: false,

          format: {
            type: "object",

            properties: {

              evidence: {
                type: "array",

                items: {
                  type: "object",

                  properties: {

                    id: {
                      type: "string",
                    },

                    observation: {
                      type: "string",
                    },

                    domain: {
                      type: "string",

                      enum: [
                        "electrical",
                        "drive",
                        "plc",
                        "mechanical",
                        "process",
                        "sensor",
                        "communication",
                        "safety",
                        "unknown",
                      ],
                    },

                    polarity: {
                      type: "string",

                      enum: [
                        "supports",
                        "contradicts",
                        "neutral",
                      ],
                    },

                    reliability: {
                      type: "number",
                    },

                  },

                  required: [
                    "id",
                    "observation",
                    "domain",
                    "polarity",
                    "reliability",
                  ],
                },
              },
            },

            required: [
              "evidence",
            ],
          },

          options: {
            temperature: 0.0,
            num_ctx: 4096,
          },
        }),
      },
    );

  if (!response.ok) {

    const errorText =
      await response.text();

    throw new Error(
      `Ollama evidence extraction failed with status ${response.status}: ${errorText}`,
    );
  }

  const data =
    await response.json();

  const output =
    data?.response;

  if (!output) {
    return [];
  }

  let parsed:
    EvidenceExtractionOutput;

  try {

    parsed =
      typeof output === "string"
        ? JSON.parse(output)
        : output;

  } catch {

    throw new Error(
      "Ollama returned invalid evidence JSON.",
    );
  }

  if (
    !Array.isArray(
      parsed?.evidence,
    )
  ) {
    return [];
  }

  const extracted =
    parsed.evidence
      .filter(
        (item) =>
          item &&
          typeof item.id === "string" &&
          typeof item.observation === "string",
      )
      .map(
        (item) => ({
          id:
            item.id,

          observation:
            item.observation,

          source:
            "ai" as const,

          domain:
            item.domain,

          polarity:
            item.polarity,

          reliability:
            Math.max(
              0,
              Math.min(
                1,
                Number(
                  item.reliability,
                ) || 0.5,
              ),
            ),
        }),
      );

  /* =====================================================
     CURRENT QUESTION HAS PRIORITY
  ===================================================== */

  if (
    question &&
    extracted.length > 0
  ) {

    const evidenceKey =
      getEvidenceKeyFromQuestion(
        question.id,
      );

    if (evidenceKey) {

      return extracted.map(
        (item, index) => {

          if (
            index === 0 &&
            item.id !== evidenceKey
          ) {

            return {
              ...item,

              id:
                evidenceKey,
            };
          }

          return item;
        },
      );
    }
  }

  return extracted;
}

/* =========================================================
   QUESTION → EVIDENCE KEY
========================================================= */

function getEvidenceKeyFromQuestion(
  questionId: string,
): string {

  const mapping:
    Record<string, string> = {

    q_plc_output:
      "plc_output",

    q_plc_start_command:
      "plc_start_command",

    q_speed_reference:
      "speed_reference",

    q_drive_fault:
      "drive_fault",

    q_drive_run:
      "drive_run",

    q_motor_output_voltage:
      "motor_output_voltage",

    q_motor_shaft:
      "motor_shaft",

    q_motor_current:
      "motor_current",

    q_operating_condition:
      "operating_condition",

    q_process_pressure:
      "process_pressure",

    q_actual_speed:
      "actual_speed",

    q_feedback:
      "feedback",
  };

  return (
    mapping[questionId] ?? ""
  );
}

/* =========================================================
   ENGINEERING ASSESSMENT
========================================================= */

async function generateEngineeringAssessment(
  state: DiagnosticState,
): Promise<DiagnosticAIOutput> {

  if (!OLLAMA_URL) {

    throw new Error(
      "OLLAMA_URL environment variable is not configured.",
    );
  }

  const topHypothesis =
    getTopHypothesis(state);

  const assessmentPrompt = `
${AENA_ENGINEERING_PROMPT}

=========================================================
FINAL ENGINEERING ASSESSMENT
=========================================================

The diagnostic interactions are complete.

Do NOT ask another question.

Provide an engineering assessment based ONLY on
the available evidence.

=========================================================
SYMPTOM
=========================================================

${state.symptom}

=========================================================
INTERACTION
=========================================================

${state.interaction}

=========================================================
CONFIDENCE
=========================================================

${state.confidence}

=========================================================
SAFETY
=========================================================

${state.safetyCritical}

=========================================================
EVIDENCE
=========================================================

${
  state.evidence.length > 0
    ? state.evidence
        .map(
          (item) =>
            `${item.id} = ${item.observation} | domain=${item.domain ?? "unknown"} | reliability=${item.reliability}`,
        )
        .join("\n")
    : "No evidence."
}

=========================================================
TOP HYPOTHESIS
=========================================================

${
  topHypothesis
    ? `
${topHypothesis.label}

Probability:
${topHypothesis.probability}%

Status:
${topHypothesis.status}

Supporting evidence:
${topHypothesis.supportingEvidence.join("; ")}

Contradicting evidence:
${topHypothesis.contradictingEvidence.join("; ")}
`
    : "No dominant hypothesis."
}

=========================================================
FINAL ASSESSMENT RULES
=========================================================

Do not claim certainty if evidence is insufficient.

Do not invent measurements.

Do not invent alarm codes.

Do not claim that a component is defective unless
the evidence supports that conclusion.

If the evidence only identifies a diagnostic direction,
say so clearly.

summary:
Give the most probable engineering direction.

check:
Give the most useful physical measurement or verification.

aenaAction:
Describe what AENA Engineering should inspect,
measure, diagnose or intervene on.

safetyWarning:
Only mention a safety concern if supported by the case.

question:
MUST be empty.

=========================================================
OUTPUT
=========================================================

Return ONLY valid JSON.

{
  "summary": "",
  "check": "",
  "question": "",
  "severity": "medium",
  "aenaAction": "",
  "safetyWarning": ""
}
`;

  const response =
    await fetch(
      OLLAMA_URL,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          model:
            OLLAMA_MODEL,

          prompt:
            assessmentPrompt,

          stream: false,

          format: {
            type: "object",

            properties: {

              summary: {
                type: "string",
              },

              check: {
                type: "string",
              },

              question: {
                type: "string",
              },

              severity: {
                type: "string",

                enum: [
                  "low",
                  "medium",
                  "high",
                  "critical",
                ],
              },

              aenaAction: {
                type: "string",
              },

              safetyWarning: {
                type: "string",
              },
            },

            required: [
              "summary",
              "check",
              "question",
              "severity",
              "aenaAction",
              "safetyWarning",
            ],
          },

          options: {
            temperature: 0.1,
            num_ctx: 4096,
          },
        }),
      },
    );

  if (!response.ok) {

    const errorText =
      await response.text();

    throw new Error(
      `Ollama engineering assessment failed with status ${response.status}: ${errorText}`,
    );
  }

  const data =
    await response.json();

  const output =
    data?.response;

  if (!output) {

    throw new Error(
      "Ollama returned an empty engineering assessment.",
    );
  }

  let result:
    DiagnosticAIOutput;

  try {

    result =
      typeof output === "string"
        ? JSON.parse(output)
        : output;

  } catch {

    throw new Error(
      "Ollama returned invalid engineering assessment JSON.",
    );
  }

  return {

    summary:
      typeof result.summary === "string"
        ? result.summary
        : "",

    check:
      typeof result.check === "string"
        ? result.check
        : "",

    question:
      "",

    severity:
      [
        "low",
        "medium",
        "high",
        "critical",
      ].includes(
        result.severity,
      )
        ? result.severity
        : "medium",

    aenaAction:
      typeof result.aenaAction === "string"
        ? result.aenaAction
        : "",

    safetyWarning:
      typeof result.safetyWarning === "string"
        ? result.safetyWarning
        : "",
  };
}

/* =========================================================
   NON-TECHNICAL RESPONSE
========================================================= */

function buildNonTechnicalResponse(
  state: DiagnosticState,
  answer: string,
): DiagnosticAIOutput {

  const normalized =
    answer
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ")
      .replace(/[?.!,;:]+$/g, "");

  /* =====================================================
     SYSTEM QUESTIONS
  ===================================================== */

  if (
    normalized.includes(
      "sen neler yapabiliyorsun",
    ) ||
    normalized.includes(
      "ne yapabiliyorsun",
    ) ||
    normalized.includes(
      "neler yapabilirsin",
    ) ||
    normalized.includes(
      "nasıl çalışıyorsun",
    ) ||
    normalized.includes(
      "nasil calisiyorsun",
    ) ||
    normalized.includes(
      "bu sistem ne",
    ) ||
    normalized.includes(
      "bu ai ne",
    ) ||
    normalized.includes(
      "bu yapay zeka ne",
    )
  ) {

    return {

      summary:
        "Ben AENA Retrofit AI. Endüstriyel makinelerde oluşan arızaların ve anormal çalışma durumlarının analiz edilmesine yardımcı olmak için tasarlandım.",

      check:
        "PLC, sürücü, motor, sensör, elektrik, mekanik, haberleşme ve proses kaynaklı problemlerin değerlendirilmesinde kullanılabilirim.",

      question:
        "İstersen mevcut bir makine problemini anlatabilir veya gözlemlediğin teknik bir durumu paylaşabilirsin.",

      severity:
        "low",

      aenaAction:
        "",

      safetyWarning:
        "",
    };
  }

  /* =====================================================
     GREETING
  ===================================================== */

  if (
    normalized === "merhaba" ||
    normalized === "selam" ||
    normalized === "hello" ||
    normalized === "hi" ||
    normalized === "hey" ||
    normalized === "günaydın" ||
    normalized === "iyi akşamlar" ||
    normalized === "iyi geceler"
  ) {

    return {

      summary:
        "Merhaba. Ben AENA Retrofit AI.",

      check:
        "Endüstriyel makine arızalarının teknik analizinde yardımcı olabilirim.",

      question:
        "Makinede yaşadığınız problemi veya gözlemlediğiniz teknik durumu anlatabilirsiniz.",

      severity:
        "low",

      aenaAction:
        "",

      safetyWarning:
        "",
    };
  }

  /* =====================================================
     THANK YOU
  ===================================================== */

  if (
    normalized.includes("teşekkür") ||
    normalized.includes("tesekkur") ||
    normalized === "sağ ol" ||
    normalized === "sağol" ||
    normalized === "sag ol" ||
    normalized === "sagol" ||
    normalized === "thanks" ||
    normalized === "thank you"
  ) {

    return {

      summary:
        "Rica ederim.",

      check:
        "",

      question:
        "",

      severity:
        "low",

      aenaAction:
        "",

      safetyWarning:
        "",
    };
  }

  /* =====================================================
     GENERAL NON-TECHNICAL
  ===================================================== */

  return {

    summary:
      "Bu mesaj doğrudan bir teknik ölçüm veya makine gözlemi içermiyor.",

    check:
      "İstersen makinenin davranışını, görünen alarmı, hata kodunu veya yaptığın bir ölçümü paylaşabilirsin.",

    question:
      "Makinede şu anda tam olarak ne olduğunu anlatabilir misin?",

    severity:
      state.safetyCritical
        ? "critical"
        : "low",

    aenaAction:
      "",

    safetyWarning:
      "",
  };
}

/* =========================================================
   POST
========================================================= */

export async function POST(
  request: Request,
) {

  try {

    /* =====================================================
       ENVIRONMENT
    ===================================================== */

    if (!OLLAMA_URL) {

      return NextResponse.json(
        {
          error:
            "OLLAMA_URL environment variable is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    /* =====================================================
       FORM DATA
    ===================================================== */

    const formData =
      await request.formData();

    const symptomValue =
      formData.get("symptom");

    if (
      typeof symptomValue !== "string" ||
      symptomValue.trim().length < 3
    ) {

      return NextResponse.json(
        {
          error:
            "Please describe what is happening with the machine.",
        },
        {
          status: 400,
        },
      );
    }

    const symptom =
      symptomValue.trim();

    /* =====================================================
       CASE ID
    ===================================================== */

    const caseIdValue =
      formData.get("case_id");

    const caseId =
      typeof caseIdValue === "string" &&
      caseIdValue.trim()
        ? caseIdValue.trim()
        : null;

    /* =====================================================
       QUESTION ID
    ===================================================== */

    const questionIdValue =
      formData.get("question_id");

    const questionId =
      typeof questionIdValue === "string" &&
      questionIdValue.trim()
        ? questionIdValue.trim()
        : null;

    /* =====================================================
       USER ANSWER
    ===================================================== */

    const answerValue =
      formData.get("answer");

    const answer =
      typeof answerValue === "string"
        ? answerValue.trim()
        : "";

    /* =====================================================
       AFFECTED SYSTEM
    ===================================================== */

    const affectedSystemValue =
      formData.get(
        "affected_system",
      );

    const affectedSystem =
      typeof affectedSystemValue === "string" &&
      affectedSystemValue.trim()
        ? affectedSystemValue.trim()
        : null;

    /* =====================================================
       CONVERSATION
    ===================================================== */

    let conversation:
      ConversationMessage[] = [];

    const conversationValue =
      formData.get(
        "conversation",
      );

    if (
      typeof conversationValue === "string" &&
      conversationValue.trim()
    ) {

      try {

        const parsed =
          JSON.parse(
            conversationValue,
          );

        if (Array.isArray(parsed)) {

          conversation =
            parsed.filter(
              (
                item,
              ): item is ConversationMessage =>
                item &&
                (
                  item.role === "user" ||
                  item.role === "assistant"
                ) &&
                typeof item.content === "string",
            );
        }

      } catch {

        console.warn(
          "Conversation history could not be parsed.",
        );
      }
    }

    /* =====================================================
       LOAD STORED DIAGNOSTIC STATE
    ===================================================== */

    let diagnosticState:
      DiagnosticState | null =
        null;

    if (caseId) {

      diagnosticState =
        await loadDiagnosticState(
          caseId,
        );
    }

    /* =====================================================
       NEW TECHNICAL MESSAGE AFTER NON-TECHNICAL MESSAGE

       Eğer frontend yeni teknik mesajı "answer" alanında
       gönderirse burada yakalanır.

       Örnek:

       Önce:
       "Bana yardımcı olur musunuz?"

       Sonra:
       "PLC arızası var"

       Bu mesaj deterministic diagnostic signal
       taşıyorsa yeni session başlatılır.
    ===================================================== */

    if (
      !diagnosticState &&
      answer
    ) {

      const diagnosticSignal =
        isDiagnosticProblemMessage(
          answer,
        );

      const newMessageIntent =
        await analyzeUserIntent(
          answer,
          null,
          answer,
        );

      console.log(
        "========== NEW MESSAGE AFTER NON-TECHNICAL ==========",
      );

      console.log(
        "NEW MESSAGE:",
        answer,
      );

      console.log(
        "NEW MESSAGE INTENT:",
        newMessageIntent,
      );

      console.log(
        "NEW MESSAGE DIAGNOSTIC SIGNAL:",
        diagnosticSignal,
      );

      /* =================================================
         TECHNICAL DIAGNOSTIC MESSAGE
      ================================================= */

      if (
        newMessageIntent.intent ===
          "technical_answer" ||
        diagnosticSignal
      ) {

        console.log(
          "NEW TECHNICAL DIAGNOSTIC SESSION STARTING:",
          answer,
        );

        diagnosticState =
          createDiagnosticSession(
            answer,
          );

        if (
          diagnosticState.intent !==
          "technical"
        ) {

          console.error(
            "AENA DIAGNOSTIC SESSION INTENT MISMATCH:",
            {
              routeIntent:
                newMessageIntent.intent,

              diagnosticSignal,

              engineIntent:
                diagnosticState.intent,

              symptom:
                answer,
            },
          );

          throw new Error(
            `Diagnostic session started with invalid engine intent: ${diagnosticState.intent}`,
          );
        }
      }

      /* =================================================
         NON-TECHNICAL MESSAGE
      ================================================= */

      else if (
        newMessageIntent.intent ===
        "non_technical"
      ) {

        return NextResponse.json({
          summary:
            "Bu mesaj doğrudan bir endüstriyel teknik konu içermiyor.",

          check:
            "AENA Retrofit AI; PLC, sürücü, motor, servo, encoder, sensör, elektrik, mekanik ve endüstriyel haberleşme problemlerini analiz eder.",

          question:
            "Makinede yaşadığınız teknik problemi veya gözlemlediğiniz arızayı açıklayabilir misiniz?",

          severity:
            "low",

          needsEngineer:
            false,

          aenaAction:
            "",

          safetyWarning:
            "",

          caseId:
            null,

          diagnosticInteraction:
            0,

          diagnosticComplete:
            false,

          confidence:
            0,

          nextQuestion:
            null,

          topHypothesis:
            null,
        });
      }
    }

    /* =====================================================
       INITIAL MESSAGE DETECTION

       İlk mesaj:

       caseId yok
       +
       answer yok
       +
       diagnosticState yok

       ise symptom ilk kullanıcı mesajıdır.
    ===================================================== */

    const isFirstRequest =
      !answer &&
      !diagnosticState;

    /* =====================================================
       DEBUG
    ===================================================== */

    console.log(
      "========== REQUEST STATE ==========",
    );

    console.log(
      "SYMPTOM:",
      symptom,
    );

    console.log(
      "ANSWER:",
      answer,
    );

    console.log(
      "CASE ID:",
      caseId,
    );

    console.log(
      "HAS DIAGNOSTIC STATE:",
      !!diagnosticState,
    );

    console.log(
      "IS FIRST REQUEST:",
      isFirstRequest,
    );

    console.log(
      "===================================",
    );

    /* =====================================================
       INITIAL MESSAGE INTENT GATE
    ===================================================== */

    if (isFirstRequest) {

      const initialMessage =
        symptom.trim();

      console.log(
        "========== INITIAL MESSAGE INTENT ==========",
      );

      console.log(
        "RAW INITIAL MESSAGE:",
        initialMessage,
      );

      /* ===================================================
         HARD NON-TECHNICAL
      =================================================== */

      const clearlyNonTechnical =
        isClearlyNonTechnicalMessage(
          initialMessage,
        );

      console.log(
        "HARD INITIAL NON-TECHNICAL:",
        clearlyNonTechnical,
      );

      if (clearlyNonTechnical) {

        console.log(
          "INITIAL MESSAGE BLOCKED BEFORE DIAGNOSTIC ENGINE:",
          initialMessage,
        );

        return NextResponse.json({

          intent:
            "non_technical",

          summary:
            "Merhaba. Ben AENA Retrofit AI. Endüstriyel makine ve otomasyon problemlerinin analizinde yardımcı olabilirim.",

          check:
            "PLC, sürücü, motor, servo, encoder, sensör, elektrik, mekanik ve endüstriyel haberleşme problemlerinde teknik analiz yapabilirim.",

          question:
            "Makinede yaşadığınız teknik problemi veya gözlemlediğiniz arızayı anlatabilirsiniz.",

          severity:
            "low",

          needsEngineer:
            false,

          aenaAction:
            "",

          safetyWarning:
            "",

          caseId:
            null,

          diagnosticInteraction:
            0,

          diagnosticComplete:
            false,

          confidence:
            0,

          nextQuestion:
            null,

          topHypothesis:
            null,
        });
      }

      /* ===================================================
         OLLAMA INITIAL INTENT
      =================================================== */

      const initialIntent =
        await analyzeUserIntent(
          initialMessage,
          null,
          initialMessage,
        );

      console.log(
        "INITIAL OLLAMA INTENT:",
        initialIntent,
      );

      /* ===================================================
         OLLAMA NON-TECHNICAL
      =================================================== */

      if (
        initialIntent.intent ===
        "non_technical"
      ) {

        console.log(
          "INITIAL MESSAGE BLOCKED BEFORE DIAGNOSTIC ENGINE:",
          initialMessage,
        );

        return NextResponse.json({

          intent:
            "non_technical",

          summary:
            "Bu mesaj doğrudan bir endüstriyel teknik konu içermiyor.",

          check:
            "AENA Retrofit AI; PLC, sürücü, motor, servo, encoder, sensör, elektrik, mekanik, proses ve endüstriyel haberleşme problemlerini analiz eder.",

          question:
            "Makinede yaşadığınız teknik problemi veya gözlemlediğiniz arızayı açıklayabilir misiniz?",

          severity:
            "low",

          needsEngineer:
            false,

          aenaAction:
            "",

          safetyWarning:
            "",

          caseId:
            null,

          diagnosticInteraction:
            0,

          diagnosticComplete:
            false,

          confidence:
            0,

          nextQuestion:
            null,

          topHypothesis:
            null,
        });
      }

      /* ===================================================
         TECHNICAL INFORMATION vs DIAGNOSTIC PROBLEM
      =================================================== */

      const diagnosticSignal =
        isDiagnosticProblemMessage(
          initialMessage,
        );

      console.log(
        "INITIAL DIAGNOSTIC SIGNAL:",
        diagnosticSignal,
      );

      /* ===================================================
         TECHNICAL INFORMATION

         Örnek:

         PLC nedir?
         Encoder ne işe yarar?
         Servo motor nasıl çalışır?

         Bunlar arıza teşhisi değildir.
      =================================================== */

      if (
        initialIntent.intent ===
          "technical_information" &&
        !diagnosticSignal
      ) {

        console.log(
          "INITIAL MESSAGE IS TECHNICAL INFORMATION:",
          initialMessage,
        );

        /*
         * Burada diagnostic session başlatılmıyor.
         *
         * Mevcut route'un teknik bilgi davranışı korunur.
         */

      }

      /* ===================================================
         DIAGNOSTIC PROBLEM
      =================================================== */

      else if (
        initialIntent.intent ===
          "technical_answer" ||
        diagnosticSignal
      ) {

        console.log(
          "INITIAL MESSAGE ACCEPTED AS DIAGNOSTIC:",
          {
            ollamaIntent:
              initialIntent.intent,

            diagnosticSignal,

            message:
              initialMessage,
          },
        );

        console.log(
          "DIAGNOSTIC SYMPTOM:",
          initialMessage,
        );

        /* ================================================
           CREATE SESSION — SADECE BURADA
        ================================================= */

        diagnosticState =
          createDiagnosticSession(
            initialMessage,
          );

        console.log(
          "INITIAL DIAGNOSTIC STATE:",
          {
            interaction:
              diagnosticState.interaction,

            intent:
              diagnosticState.intent,

            domain:
              diagnosticState.domain,

            symptom:
              diagnosticState.symptom,

            evidence:
              diagnosticState.evidence,

            askedQuestions:
              diagnosticState
                .askedQuestions
                .map(
                  (q) =>
                    q.id,
                ),

            currentQuestion:
              diagnosticState
                .currentQuestion?.id ??
              null,
          },
        );

        /* ================================================
           SAFETY CHECK
        ================================================= */

        if (
          diagnosticState.intent !==
          "technical"
        ) {

          console.error(
            "AENA DIAGNOSTIC SESSION INTENT MISMATCH:",
            {
              routeIntent:
                initialIntent.intent,

              diagnosticSignal,

              engineIntent:
                diagnosticState.intent,

              symptom:
                initialMessage,
            },
          );

          throw new Error(
            `Diagnostic session started with invalid engine intent: ${diagnosticState.intent}`,
          );
        }
      }
    }

    /* =====================================================
       STATE MUST EXIST
    ===================================================== */

    if (!diagnosticState) {

      return NextResponse.json({

        intent:
          "technical_information",

        summary:
          "Bu teknik konu hakkında bilgi verebilirim.",

        check:
          "Eğer amacınız bir arıza teşhisi ise makinedeki gerçek davranışı veya problemi belirtin.",

        question:
          "İsterseniz PLC, sürücü, motor veya ilgili sistem hakkında daha spesifik bir teknik soru sorabilirsiniz.",

        severity:
          "low",

        needsEngineer:
          false,

        aenaAction:
          "",

        safetyWarning:
          "",

        caseId:
          null,

        diagnosticInteraction:
          0,

        diagnosticComplete:
          false,

        confidence:
          0,

        nextQuestion:
          null,

        topHypothesis:
          null,
      });
    }

    /* =====================================================
       HARD INTERACTION LIMIT
    ===================================================== */

    if (
      diagnosticState.interaction >=
      MAX_DIAGNOSTIC_INTERACTIONS
    ) {

      diagnosticState = {

        ...diagnosticState,

        diagnosticComplete:
          true,

        needsEngineer:
          true,
      };
    }

    /* =====================================================
       DEBUG
    ===================================================== */

    console.log(
      "========== AENA DIAGNOSTIC DEBUG ==========",
    );

    console.log(
      "CASE ID:",
      caseId,
    );

    console.log(
      "QUESTION ID:",
      questionId,
    );

    console.log(
      "ANSWER:",
      answer,
    );

    console.log(
      "INTERACTION BEFORE:",
      diagnosticState.interaction,
    );

    console.log(
      "CURRENT QUESTION:",
      diagnosticState.currentQuestion?.id,
    );

    console.log(
      "ASKED QUESTIONS:",
      diagnosticState
        .askedQuestions
        .map(
          (q) =>
            q.id,
        ),
    );

    console.log(
      "EVIDENCE:",
      diagnosticState
        .evidence
        .map(
          (e) =>
            `${e.id}=${e.observation}`,
        ),
    );

    console.log(
      "===========================================",
    );

    /* =====================================================
       FIRST TECHNICAL REQUEST
    ===================================================== */

    const isInitialTechnicalRequest =
      isFirstRequest &&
      diagnosticState.interaction === 0 &&
      !answer;

    /* =====================================================
       CURRENT QUESTION
    ===================================================== */

    let currentQuestion:
      DiagnosticQuestion | null =
        null;

    if (questionId) {

      currentQuestion =
        diagnosticState
          .unansweredQuestions
          .find(
            (question) =>
              question.id ===
              questionId,
          ) ??
        diagnosticState
          .askedQuestions
          .find(
            (question) =>
              question.id ===
              questionId,
          ) ??
        null;
    }

    if (
      !currentQuestion &&
      diagnosticState.currentQuestion
    ) {

      currentQuestion =
        diagnosticState.currentQuestion;
    }

    /* =====================================================
       USER ANSWER → INTENT GATE
    ===================================================== */

    if (
      !isFirstRequest &&
      answer &&
      diagnosticState.interaction <
        MAX_DIAGNOSTIC_INTERACTIONS
    ) {

      const clearlyNonTechnical =
        isClearlyNonTechnicalMessage(
          answer,
        );

      console.log(
        "CLEAR NON-TECHNICAL CHECK:",
        clearlyNonTechnical,
      );

      /* ===================================================
         HARD NON-TECHNICAL
      =================================================== */

      if (clearlyNonTechnical) {

        console.log(
          "MESSAGE BLOCKED FROM DIAGNOSTIC ENGINE:",
          answer,
        );

        const nonTechnicalResponse =
          buildNonTechnicalResponse(
            diagnosticState,
            answer,
          );

        return NextResponse.json({

          intent:
            "non_technical",

          summary:
            nonTechnicalResponse.summary,

          check:
            nonTechnicalResponse.check,

          question:
            nonTechnicalResponse.question,

          severity:
            nonTechnicalResponse.severity,

          needsEngineer:
            false,

          aenaAction:
            "",

          safetyWarning:
            "",

          caseId,

          diagnosticInteraction:
            diagnosticState.interaction,

          diagnosticComplete:
            false,

          confidence:
            diagnosticState.confidence,

          nextQuestion:
            diagnosticState.currentQuestion,

          topHypothesis:
            getTopHypothesis(
              diagnosticState,
            ),
        });
      }

      /* ===================================================
         OLLAMA INTENT
      =================================================== */

      const intent =
        await analyzeUserIntent(
          symptom,
          currentQuestion,
          answer,
        );

      console.log(
        "========== SECOND MESSAGE INTENT ==========",
      );

      console.log(
        "ANSWER:",
        answer,
      );

      console.log(
        "INTENT:",
        intent.intent,
      );

      console.log(
        "TECHNICAL EVIDENCE:",
        intent.technicalEvidence,
      );

      console.log(
        "REASON:",
        intent.reason,
      );

      console.log(
        "==========================================",
      );

      console.log(
        "USER INTENT:",
        intent,
      );

      /* ===================================================
         OLLAMA NON-TECHNICAL
      =================================================== */

      if (
        intent.intent ===
          "non_technical" ||
        !intent.technicalEvidence
      ) {

        console.log(
          "OLLAMA CLASSIFIED MESSAGE AS NON-TECHNICAL:",
          answer,
        );

        const nonTechnicalResponse =
          buildNonTechnicalResponse(
            diagnosticState,
            answer,
          );

        return NextResponse.json({

          intent:
            "non_technical",

          summary:
            nonTechnicalResponse.summary,

          check:
            nonTechnicalResponse.check,

          question:
            nonTechnicalResponse.question,

          severity:
            nonTechnicalResponse.severity,

          needsEngineer:
            false,

          aenaAction:
            "",

          safetyWarning:
            "",

          caseId,

          diagnosticInteraction:
            diagnosticState.interaction,

          diagnosticComplete:
            false,

          confidence:
            diagnosticState.confidence,

          nextQuestion:
            diagnosticState.currentQuestion,

          topHypothesis:
            getTopHypothesis(
              diagnosticState,
            ),
        });
      }
    }

    /* =====================================================
       USER ANSWER → EVIDENCE
    ===================================================== */

    if (
      !isFirstRequest &&
      currentQuestion &&
      answer &&
      diagnosticState.interaction <
        MAX_DIAGNOSTIC_INTERACTIONS
    ) {

      const previousEvidence =
        diagnosticState.evidence;

      const extractedEvidence =
        await extractEvidenceWithAI(
          symptom,
          currentQuestion,
          answer,
          previousEvidence,
        );

      console.log(
        "EXTRACTED EVIDENCE:",
        extractedEvidence,
      );

      /* ===================================================
         APPLY EVIDENCE
      =================================================== */

      if (
        extractedEvidence.length > 0
      ) {

        diagnosticState =
          addEvidenceBatchSafe(
            diagnosticState,
            extractedEvidence,
          );
      }

      /* ===================================================
         MARK QUESTION ANSWERED
      =================================================== */

      diagnosticState =
        markQuestionAsAnswered(
          diagnosticState,
          currentQuestion,
        );

      /* ===================================================
         INCREMENT INTERACTION
      =================================================== */

      diagnosticState = {

        ...diagnosticState,

        interaction:
          diagnosticState.interaction + 1,
      };

      console.log(
        "QUESTION ANSWERED:",
        currentQuestion.id,
      );

      console.log(
        "INTERACTION AFTER:",
        diagnosticState.interaction,
      );

      console.log(
        "ASKED AFTER:",
        diagnosticState
          .askedQuestions
          .map(
            (q) =>
              q.id,
          ),
      );

      console.log(
        "EVIDENCE AFTER:",
        diagnosticState
          .evidence
          .map(
            (e) =>
              `${e.id}=${e.observation}`,
          ),
      );
    }

    /* =====================================================
       HARD LIMIT AFTER PROCESSING ANSWER
    ===================================================== */

    if (
      diagnosticState.interaction >
      MAX_DIAGNOSTIC_INTERACTIONS
    ) {

      console.error(
        "AENA ENGINE VIOLATION: interaction exceeded maximum.",
      );

      diagnosticState = {

        ...diagnosticState,

        interaction:
          MAX_DIAGNOSTIC_INTERACTIONS,
      };
    }

    /* =====================================================
       CURRENT INTERACTION
    ===================================================== */

    const diagnosticInteraction =
      diagnosticState.interaction;

    /* =====================================================
       DIAGNOSTIC COMPLETION
    ===================================================== */

    const diagnosticComplete =
      diagnosticInteraction >=
        MAX_DIAGNOSTIC_INTERACTIONS ||
      isDiagnosisComplete(
        diagnosticState,
      );

    /* =====================================================
       UPDATE STATE FLAGS
    ===================================================== */

    diagnosticState = {

      ...diagnosticState,

      diagnosticComplete,

      needsEngineer:
        diagnosticComplete,
    };

    /* =====================================================
       FINAL ENGINEERING HANDOFF
    ===================================================== */

    if (diagnosticComplete) {

      console.log(
        "========== ENGINEERING HANDOFF ==========",
      );

      console.log(
        "FINAL INTERACTION:",
        diagnosticInteraction,
      );

      const finalAssessment =
        await generateEngineeringAssessment(
          diagnosticState,
        );

      const updatedConversation =
        buildUpdatedConversation(
          conversation,
          answer || symptom,
          finalAssessment,
        );

      const finalRecommendations = {

        check:
          finalAssessment.check,

        question:
          "",

        needsEngineer:
          true,

        aenaAction:
          finalAssessment.aenaAction,

        safetyWarning:
          finalAssessment.safetyWarning,

        severity:
          finalAssessment.severity,

        diagnosticInteraction,

        diagnosticComplete:
          true,

        diagnosticState:
          serializeDiagnosticState(
            diagnosticState,
          ),

        conversation:
          updatedConversation,
      };

      const savedCaseId =
        await saveCase(
          caseId,
          {

            symptom,

            affected_system:
              affectedSystem,

            ai_summary:
              finalAssessment.summary,

            ai_diagnoses:
              diagnosticState.hypotheses,

            ai_recommendations:
              finalRecommendations,
          },
        );

      return NextResponse.json({

        intent:
          "technical_answer",

        summary:
          finalAssessment.summary,

        check:
          finalAssessment.check,

        question:
          "",

        severity:
          finalAssessment.severity,

        needsEngineer:
          true,

        aenaAction:
          finalAssessment.aenaAction,

        safetyWarning:
          finalAssessment.safetyWarning,

        caseId:
          savedCaseId,

        diagnosticInteraction,

        diagnosticComplete:
          true,

        confidence:
          diagnosticState.confidence,

        nextQuestion:
          null,

        topHypothesis:
          getTopHypothesis(
            diagnosticState,
          ),
      });
    }

    /* =====================================================
       NEXT QUESTION
    ===================================================== */

    console.log(
      "========== BEFORE GET NEXT QUESTION ==========",
      {
        symptom:
          diagnosticState?.symptom,

        interaction:
          diagnosticState?.interaction,

        intent:
          diagnosticState?.intent,

        domain:
          diagnosticState?.domain,

        currentQuestion:
          diagnosticState
            ?.currentQuestion
            ?.id ??
          null,

        askedQuestions:
          diagnosticState
            ?.askedQuestions
            ?.map(
              (q) =>
                q.id,
            ),

        caseId,
      },
    );

    const nextQuestion =
      getNextQuestion(
        diagnosticState,
      );

    if (!nextQuestion) {

      console.error(
        "AENA ENGINE STATE:",
        serializeDiagnosticState(
          diagnosticState,
        ),
      );

      throw new Error(
        `Diagnostic engine did not return a next question at interaction ${diagnosticInteraction}.`,
      );
    }

    console.log(
      "NEXT QUESTION:",
      nextQuestion.id,
    );

    /* =====================================================
       QUESTION PRESENTATION
    ===================================================== */

    const aiResponse:
      DiagnosticAIOutput = {

      summary:
        buildDiagnosticSummary(
          diagnosticState,
        ),

      check:
        buildDiagnosticCheck(
          nextQuestion,
        ),

      question:
        cleanQuestion(
          nextQuestion.question,
        ),

      severity:
        diagnosticState.safetyCritical
          ? "critical"
          : "medium",

      aenaAction:
        "",

      safetyWarning:
        diagnosticState.safetyCritical
          ? "Bu durum güvenlik açısından kritik olabilir. Ölçüm ve müdahale öncesinde makinenin güvenli duruş ve enerji izolasyonu prosedürleri uygulanmalıdır."
          : "",
    };

    /* =====================================================
       SAVE CURRENT QUESTION
    ===================================================== */

    diagnosticState = {

      ...diagnosticState,

      currentQuestion:
        nextQuestion,

      diagnosticComplete:
        false,

      needsEngineer:
        false,
    };

    /* =====================================================
       UPDATED CONVERSATION
    ===================================================== */

    const updatedConversation =
      buildUpdatedConversation(
        conversation,
        answer || symptom,
        aiResponse,
      );

    /* =====================================================
       SAVE STATE
    ===================================================== */

    const recommendations = {

      check:
        aiResponse.check,

      question:
        aiResponse.question,

      needsEngineer:
        false,

      aenaAction:
        "",

      safetyWarning:
        aiResponse.safetyWarning,

      severity:
        aiResponse.severity,

      diagnosticInteraction,

      diagnosticComplete:
        false,

      diagnosticState:
        serializeDiagnosticState(
          diagnosticState,
        ),

      nextQuestion,

      conversation:
        updatedConversation,
    };

    const savedCaseId =
      await saveCase(
        caseId,
        {

          symptom,

          affected_system:
            affectedSystem,

          ai_summary:
            aiResponse.summary,

          ai_diagnoses:
            diagnosticState.hypotheses,

          ai_recommendations:
            recommendations,
        },
      );

    /* =====================================================
       NORMAL DIAGNOSTIC RESPONSE
    ===================================================== */

    return NextResponse.json({

      intent:
        "technical_answer",

      summary:
        aiResponse.summary,

      check:
        aiResponse.check,

      question:
        aiResponse.question,

      severity:
        aiResponse.severity,

      needsEngineer:
        false,

      aenaAction:
        "",

      safetyWarning:
        aiResponse.safetyWarning,

      caseId:
        savedCaseId,

      diagnosticInteraction,

      diagnosticComplete:
        false,

      confidence:
        diagnosticState.confidence,

      nextQuestion,

      topHypothesis:
        getTopHypothesis(
          diagnosticState,
        ),
    });

  } catch (error) {

    console.error(
      "AENA RETROFIT AI ERROR:",
      error,
    );

    let errorMessage =
      "Retrofit AI analysis failed.";

    if (
      error instanceof Error
    ) {

      errorMessage =
        error.message;
    }

    if (
      error instanceof TypeError &&
      error.message
        .toLowerCase()
        .includes("fetch")
    ) {

      errorMessage =
        `Cannot connect to Ollama at ${OLLAMA_URL}. Make sure the Ollama endpoint is reachable.`;
    }

    return NextResponse.json(
      {
        error:
          errorMessage,
      },
      {
        status: 500,
      },
    );
  }
}

/* =========================================================
   MARK QUESTION AS ANSWERED
========================================================= */

function markQuestionAsAnswered(
  state: DiagnosticState,
  question: DiagnosticQuestion,
): DiagnosticState {

  const alreadyAsked =
    state.askedQuestions.some(
      (item) =>
        item.id === question.id,
    );

  const askedQuestions =
    alreadyAsked
      ? state.askedQuestions
      : [
          ...state.askedQuestions,
          question,
        ];

  const unansweredQuestions =
    state.unansweredQuestions.filter(
      (item) =>
        item.id !== question.id,
    );

  return {

    ...state,

    askedQuestions,

    unansweredQuestions,

    currentQuestion:
      null,
  };
}

/* =========================================================
   SAFE EVIDENCE APPLICATION
========================================================= */

function addEvidenceBatchSafe(
  state: DiagnosticState,
  evidence: Evidence[],
): DiagnosticState {

  let current =
    state;

  for (const item of evidence) {

    if (
      !item.id ||
      !item.observation
    ) {
      continue;
    }

    const alreadyExists =
      current.evidence.some(
        (existing) =>
          existing.id === item.id,
      );

    if (alreadyExists) {
      continue;
    }

    current =
      addEvidence(
        current,
        item,
      );
  }

  return current;
}

/* =========================================================
   BUILD SUMMARY
========================================================= */

function buildDiagnosticSummary(
  state: DiagnosticState,
): string {

  const top =
    getTopHypothesis(
      state,
    );

  if (!top) {

    return (
      "Makine semptomu için ilk diagnostik değerlendirme başlatıldı."
    );
  }

  return (
    `Mevcut kanıtlara göre ${top.label} yönü daha fazla araştırılmalıdır.`
  );
}

/* =========================================================
   BUILD CHECK
========================================================= */

function buildDiagnosticCheck(
  question: DiagnosticQuestion,
): string {

  if (
    question.requiresMeasurement
  ) {

    return (
      `Bu aşamada ${question.domain} alanında ölçülebilir bir doğrulama yapılması teşhisi belirgin şekilde güçlendirebilir.`
    );
  }

  return (
    "Bir sonraki kontrol, mevcut hipotezleri birbirinden ayıracak gözlenebilir makine davranışına odaklanmalıdır."
  );
}

/* =========================================================
   UPDATED CONVERSATION
========================================================= */

function buildUpdatedConversation(
  conversation: ConversationMessage[],
  userMessage: string,
  response: DiagnosticAIOutput,
): ConversationMessage[] {

  return [

    ...conversation,

    {
      role: "user",

      content:
        userMessage,
    },

    {
      role: "assistant",

      content:
        buildAssistantMessage(
          response,
        ),
    },
  ];
}

/* =========================================================
   ASSISTANT MESSAGE
========================================================= */

function buildAssistantMessage(
  response: DiagnosticAIOutput,
): string {

  const parts: string[] = [];

  if (response.summary) {

    parts.push(
      response.summary,
    );
  }

  if (response.check) {

    parts.push(
      `İlk kontrol: ${response.check}`,
    );
  }

  if (response.question) {

    parts.push(
      response.question,
    );
  }

  if (response.aenaAction) {

    parts.push(
      `AENA çözüm yönü: ${response.aenaAction}`,
    );
  }

  if (response.safetyWarning) {

    parts.push(
      `Güvenlik: ${response.safetyWarning}`,
    );
  }

  return parts.join(
    "\n\n",
  );
}

/* =========================================================
   SUPABASE SAVE
========================================================= */

async function saveCase(
  caseId: string | null,
  caseData: {
    symptom: string;
    affected_system: string | null;
    ai_summary: string;
    ai_diagnoses: unknown;
    ai_recommendations: unknown;
  },
): Promise<string | null> {

  /* =====================================================
     EXISTING CASE
  ===================================================== */

  if (caseId) {

    const {
      error,
    } = await supabase
      .from(
        "retrofit_ai_cases",
      )
      .update(caseData)
      .eq(
        "id",
        caseId,
      );

    if (error) {

      console.error(
        "SUPABASE UPDATE ERROR:",
        error,
      );

      return null;
    }

    return caseId;
  }

  /* =====================================================
     NEW CASE
  ===================================================== */

  const {
    data,
    error,
  } = await supabase
    .from(
      "retrofit_ai_cases",
    )
    .insert(
      caseData,
    )
    .select("id")
    .single();

  if (error) {

    console.error(
      "SUPABASE INSERT ERROR:",
      error,
    );

    return null;
  }

  return data?.id ?? null;
}