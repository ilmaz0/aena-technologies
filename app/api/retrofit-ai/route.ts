import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

/* =========================================================
   ENVIRONMENT
========================================================= */

const OLLAMA_URL = process.env.OLLAMA_URL;

const OLLAMA_MODEL =
  process.env.OLLAMA_MODEL || "gemma3:4b";

/*
 * Retrofit AI always uses exactly five
 * diagnostic interactions before engineering handoff.
 */
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

type AIResponse = {
  summary: string;
  check: string;
  question: string;
  severity: Severity;
  needsEngineer: boolean;
  aenaAction: string;
  safetyWarning: string;
};

/* =========================================================
   AENA RETROFIT AI ENGINEERING PROMPT
========================================================= */

const AENA_ENGINEERING_PROMPT = `

You are AENA Retrofit AI.

You are an industrial engineering diagnostic assistant
developed by AENA Technologies.

You are NOT a generic chatbot.

You are NOT a specification collection assistant.

You are NOT a long-form troubleshooting chatbot.

Your purpose is:

REAL MACHINE PROBLEM
→ FIVE TARGETED DIAGNOSTIC QUESTIONS
→ ENGINEERING ASSESSMENT
→ AENA ENGINEERING HANDOFF

=========================================================
MANDATORY FIVE-INTERACTION PROTOCOL
=========================================================

The diagnostic process MUST contain exactly FIVE
user diagnostic interactions.

DO NOT finish the diagnosis early.

Even if the likely cause becomes obvious after
interaction 1, 2, 3 or 4, continue the diagnostic
process.

The purpose of the five interactions is to progressively
increase diagnostic confidence.

Each interaction must contain EXACTLY ONE question.

=========================================================
INTERACTION 1
=========================================================

Understand the dominant machine symptom.

Identify the most important observable behavior.

Ask ONE high-value diagnostic question.

Prefer questions about:

- speed
- current
- pressure
- temperature
- alarm
- vibration
- actual machine behavior
- drive behavior

=========================================================
INTERACTION 2
=========================================================

Use the previous answer as evidence.

Separate the leading cause families.

For example:

electrical / drive

VERSUS

mechanical / process

Ask ONE question that materially separates them.

=========================================================
INTERACTION 3
=========================================================

Narrow the remaining cause family.

Use measurable machine behavior whenever possible.

Ask ONE diagnostic question.

=========================================================
INTERACTION 4
=========================================================

Verify the strongest remaining hypothesis.

Ask ONE final high-value technical question.

Do not collect unnecessary specifications.

=========================================================
INTERACTION 5
=========================================================

This is the FINAL diagnostic interaction.

Ask ONE FINAL diagnostic question.

After the user answers interaction 5,
the backend will force the engineering handoff.

Do not attempt to continue the conversation.

=========================================================
AFTER INTERACTION 5
=========================================================

The backend will force:

question = ""

needsEngineer = true

Therefore your response at interaction 5 must contain
a concise engineering assessment.

Provide:

summary

check

aenaAction

severity

safetyWarning

Do not ask another question.

=========================================================
CRITICAL HANDOFF RULE
=========================================================

The five-interaction protocol is mandatory.

NEVER recommend engineering handoff before interaction 5.

NEVER set needsEngineer=true before interaction 5.

NEVER finish the diagnostic early.

NEVER create a generic "provide more information"
question.

NEVER create a "continue diagnostic evidence" state.

The backend has the final authority over the
five-interaction limit.

=========================================================
QUESTION RULE
=========================================================

Ask EXACTLY ONE question.

Never ask:

- multiple questions
- numbered questions
- question lists
- questionnaires
- two questions joined with "and"

Every question must distinguish between realistic
engineering causes.

Before generating the question internally determine:

CAUSE A

versus

CAUSE B

Then ask the question whose answer would help
distinguish those causes.

=========================================================
QUESTION PRIORITY
=========================================================

Use this priority:

1. Observable machine behavior
2. Operating condition
3. Electrical measurements
4. Drive behavior
5. Mechanical behavior
6. Process behavior
7. PLC/control behavior
8. Component specifications

Specifications are LAST.

=========================================================
GOOD QUESTIONS
=========================================================

"When the problem occurs, does motor current increase?"

"When the motor slows down, does the drive frequency
reference remain constant?"

"Does actual speed fall while commanded speed remains
unchanged?"

"Does barrel pressure increase at the same time?"

"Does the drive indicate torque or current limitation?"

"Does the problem occur without material?"

"Does the PLC command change when the fault appears?"

=========================================================
BAD QUESTIONS
=========================================================

Do NOT ask:

"What is the machine brand?"

"What is the machine model?"

"What is the motor brand?"

"What PLC do you use?"

"What is the screw diameter?"

"What is the machine age?"

unless the answer directly separates the current
engineering causes.

=========================================================
ENGINEERING REASONING
=========================================================

Always reason through:

SYMPTOM
→ OPERATING CONDITION
→ OBSERVABLE BEHAVIOR
→ MEASUREMENT
→ DIFFERENTIAL DIAGNOSIS
→ DOMAIN ISOLATION
→ ROOT CAUSE DIRECTION
→ ENGINEERING ACTION

Example:

Extruder motor slows at high production speed.

Possible causes:

- Process load
- Excessive barrel pressure
- Mechanical resistance
- Screw/barrel problem
- Bearing/gearbox problem
- Drive current limitation
- Torque limitation
- Motor parameters
- Motor-drive compatibility
- Voltage problem
- PLC speed command

If:

frequency reference remains constant
AND
actual speed decreases
AND
motor current increases

then load-related causes become more likely.

If barrel pressure also increases:

process/load-related causes become more likely.

Do not declare a component defective without evidence.

=========================================================
MEASUREMENT FIRST
=========================================================

Prefer measurable evidence:

- Motor current
- Drive frequency
- Actual speed
- Speed reference
- Drive torque
- Current limit
- Pressure
- Temperature
- Vibration
- Alarm code
- Sensor state
- PLC command
- Production rate
- Material condition

Never invent measurements.

Never invent alarm codes.

Never invent parameter values.

Never present assumptions as measurements.

=========================================================
AENA ENGINEERING ACTION
=========================================================

When the five diagnostic interactions are complete,
provide a specific engineering action.

Examples:

Drive issue:

"AENA can measure motor current, drive torque,
frequency reference and actual speed simultaneously
and review motor-drive parameters."

PLC issue:

"AENA can inspect PLC logic, interlocks, analog scaling,
HMI commands and control sequence."

Mechanical issue:

"AENA can inspect the motor, gearbox, coupling,
bearings and mechanical load path."

Process issue:

"AENA can correlate production rate, pressure,
material condition and motor load and optimize
the process control."

Never use:

"AENA can help."

The engineering action must explain WHAT AENA
would actually measure, inspect, modify or verify.

=========================================================
LANGUAGE
=========================================================

Respond in the same language as the user.

For Turkish users, respond in Turkish.

Use professional industrial engineering terminology.

=========================================================
OUTPUT
=========================================================

Return ONLY valid JSON.

Required structure:

{
  "summary": "",
  "check": "",
  "question": "",
  "severity": "low",
  "needsEngineer": false,
  "aenaAction": "",
  "safetyWarning": ""
}

=========================================================
ABSOLUTE RULES
=========================================================

1. EXACTLY five diagnostic interactions.

2. Interaction 1-4:
   ask exactly one question.

3. Interaction 1-4:
   needsEngineer MUST be false.

4. Interaction 5:
   provide the final diagnostic question.

5. After interaction 5:
   question MUST be empty.

6. After interaction 5:
   needsEngineer MUST be true.

7. Never repeat a previous question.

8. Never ask unnecessary specifications.

9. Use previous answers as evidence.

10. Do not restart diagnosis.

11. Prefer measurable evidence.

12. Do not invent measurements.

13. Do not claim certainty without evidence.

14. Never create generic information requests.

15. Never create a "continue diagnostic evidence" state.

16. Never hand the customer to AENA before the
    five-interaction diagnostic protocol is complete.

17. The five-interaction protocol overrides all
    other reasoning.

`;

/* =========================================================
   HELPERS
========================================================= */

function cleanQuestion(
  question: string
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

  if (
    questionMarkIndex !== -1
  ) {
    return normalized
      .substring(
        0,
        questionMarkIndex + 1
      )
      .trim();
  }

  /*
   * If the model forgot the question mark,
   * keep the sentence but add it.
   */
  return `${normalized}?`;
}

function buildConversationAssistantMessage(
  diagnosis: AIResponse
): string {
  const parts: string[] = [];

  if (diagnosis.summary) {
    parts.push(
      diagnosis.summary
    );
  }

  if (diagnosis.check) {
    parts.push(
      `İlk kontrol: ${diagnosis.check}`
    );
  }

  if (diagnosis.question) {
    parts.push(
      diagnosis.question
    );
  }

  if (diagnosis.aenaAction) {
    parts.push(
      `AENA çözüm yönü: ${diagnosis.aenaAction}`
    );
  }

  if (diagnosis.safetyWarning) {
    parts.push(
      `Güvenlik: ${diagnosis.safetyWarning}`
    );
  }

  return parts.join(
    "\n\n"
  );
}

/* =========================================================
   POST
========================================================= */

export async function POST(
  request: Request
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
        }
      );
    }

    /* =====================================================
       FORM DATA
    ===================================================== */

    const formData =
      await request.formData();

    const symptomValue =
      formData.get(
        "symptom"
      );

    if (
      typeof symptomValue !==
        "string" ||
      symptomValue
        .trim()
        .length < 3
    ) {
      return NextResponse.json(
        {
          error:
            "Please describe what is happening with the machine.",
        },
        {
          status: 400,
        }
      );
    }

    const symptom =
      symptomValue.trim();

    /* =====================================================
       CASE ID
    ===================================================== */

    const caseIdValue =
      formData.get(
        "case_id"
      );

    const caseId =
      typeof caseIdValue ===
        "string" &&
      caseIdValue.trim()
        ? caseIdValue.trim()
        : null;

    /* =====================================================
       AFFECTED SYSTEM
    ===================================================== */

    const affectedSystemValue =
      formData.get(
        "affected_system"
      );

    const affectedSystem =
      typeof affectedSystemValue ===
        "string" &&
      affectedSystemValue.trim()
        ? affectedSystemValue.trim()
        : null;

    /* =====================================================
       CONVERSATION
    ===================================================== */

    let conversation:
      ConversationMessage[] =
      [];

    const conversationValue =
      formData.get(
        "conversation"
      );

    if (
      typeof conversationValue ===
        "string" &&
      conversationValue.trim()
    ) {
      try {
        const parsed =
          JSON.parse(
            conversationValue
          );

        if (
          Array.isArray(
            parsed
          )
        ) {
          conversation =
            parsed.filter(
              (
                item
              ): item is ConversationMessage =>
                item &&
                (
                  item.role ===
                    "user" ||
                  item.role ===
                    "assistant"
                ) &&
                typeof item.content ===
                  "string"
            );
        }
      } catch {
        console.warn(
          "Conversation history could not be parsed."
        );
      }
    }

    /* =====================================================
       DIAGNOSTIC INTERACTION
    ===================================================== */

    const userMessages =
      conversation.filter(
        (
          message
        ) =>
          message.role ===
          "user"
      );

    const diagnosticRound =
      userMessages.length + 1;

    const diagnosticLimitReached =
      diagnosticRound >=
      MAX_DIAGNOSTIC_INTERACTIONS;

    console.log(
      "AENA Retrofit AI diagnostic interaction:",
      diagnosticRound
    );

    /* =====================================================
       FILES
    ===================================================== */

    const files =
      formData.getAll(
        "files"
      );

    const evidenceDescription:
      string[] = [];

    for (
      const item of files
    ) {
      if (
        !(
          item instanceof File
        )
      ) {
        continue;
      }

      evidenceDescription.push(
        `${item.name} | ${item.type} | ${item.size} bytes`
      );
    }

    /* =====================================================
       CONVERSATION TEXT
    ===================================================== */

    const conversationText =
      conversation.length >
      0
        ? conversation
            .map(
              (
                message
              ) =>
                `${
                  message.role ===
                  "user"
                    ? "USER"
                    : "AENA AI"
                }: ${
                  message.content
                }`
            )
            .join(
              "\n\n"
            )
        : "No previous conversation.";

    /* =====================================================
       ENGINEERING INPUT
    ===================================================== */

    const engineeringInput = `

=========================================================
CURRENT USER MESSAGE
=========================================================

${symptom}

=========================================================
AFFECTED SYSTEM
=========================================================

${
  affectedSystem ||
  "Not specified."
}

=========================================================
PREVIOUS CONVERSATION
=========================================================

${conversationText}

=========================================================
ATTACHED EVIDENCE
=========================================================

${
  evidenceDescription.length >
  0
    ? evidenceDescription.join(
        "\n"
      )
    : "No files attached."
}

=========================================================
CURRENT DIAGNOSTIC INTERACTION
=========================================================

${diagnosticRound}

=========================================================
MAXIMUM DIAGNOSTIC INTERACTIONS
=========================================================

${MAX_DIAGNOSTIC_INTERACTIONS}

=========================================================
MANDATORY STATE
=========================================================

${
  diagnosticLimitReached
    ? `
FINAL INTERACTION REACHED.

This is interaction 5.

The diagnostic protocol is complete.

DO NOT ASK ANOTHER QUESTION.

Return:

question = ""

needsEngineer = true

Provide the engineering assessment.
`
    : `
DIAGNOSTIC PROTOCOL IS NOT COMPLETE.

This is interaction ${diagnosticRound} of 5.

You MUST ask exactly ONE diagnostic question.

needsEngineer MUST be false.

Do NOT finish the diagnosis.

Do NOT hand the customer to AENA Engineering yet.

Do NOT return an empty question.

Do NOT say "continue diagnostic evidence".

Do NOT ask for generic information.
`
}

=========================================================
QUESTION GENERATION
=========================================================

Analyze the complete conversation.

Treat the current user message as new evidence.

Identify the strongest remaining differential:

CAUSE A
versus
CAUSE B

Then ask exactly ONE question that can distinguish
between them.

The question MUST use the previous evidence.

Never repeat a previous question.

Never ask for unnecessary specifications.

=========================================================
FINAL ENGINEERING ASSESSMENT
=========================================================

Only when interaction 5 is reached:

Provide:

1. Concise summary of the most likely engineering
   direction.

2. Most useful physical measurement or verification.

3. Specific AENA engineering action.

4. Appropriate severity.

Do not claim a component is defective without evidence.

=========================================================
`;

    const prompt = `
${AENA_ENGINEERING_PROMPT}

${engineeringInput}
`;

    /* =====================================================
       OLLAMA REQUEST
    ===================================================== */

    const ollamaBody = {
      model:
        OLLAMA_MODEL,

      prompt,

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

          needsEngineer: {
            type: "boolean",
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
          "needsEngineer",
          "aenaAction",
          "safetyWarning",
        ],
      },

      options: {
        temperature: 0.1,
        num_ctx: 4096,
      },
    };

    /* =====================================================
       OLLAMA
    ===================================================== */

    const ollamaResponse =
      await fetch(
        OLLAMA_URL,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body:
            JSON.stringify(
              ollamaBody
            ),
        }
      );

    if (
      !ollamaResponse.ok
    ) {
      const errorText =
        await ollamaResponse.text();

      throw new Error(
        `Ollama request failed with status ${ollamaResponse.status}: ${errorText}`
      );
    }

    const ollamaData =
      await ollamaResponse.json();

    const output =
      ollamaData?.response;

    if (!output) {
      throw new Error(
        "Ollama returned an empty response."
      );
    }

    /* =====================================================
       PARSE
    ===================================================== */

    let diagnosis:
      AIResponse;

    try {
      diagnosis =
        typeof output ===
          "string"
          ? JSON.parse(
              output
            )
          : output;
    } catch {
      throw new Error(
        "Ollama returned an invalid JSON response."
      );
    }

    /* =====================================================
       NORMALIZE
    ===================================================== */

    if (
      typeof diagnosis.summary !==
      "string"
    ) {
      diagnosis.summary =
        "";
    }

    if (
      typeof diagnosis.check !==
      "string"
    ) {
      diagnosis.check =
        "";
    }

    if (
      typeof diagnosis.question !==
      "string"
    ) {
      diagnosis.question =
        "";
    }

    if (
      typeof diagnosis.aenaAction !==
      "string"
    ) {
      diagnosis.aenaAction =
        "";
    }

    if (
      typeof diagnosis.safetyWarning !==
      "string"
    ) {
      diagnosis.safetyWarning =
        "";
    }

    if (
      ![
        "low",
        "medium",
        "high",
        "critical",
      ].includes(
        diagnosis.severity
      )
    ) {
      diagnosis.severity =
        "medium";
    }

    diagnosis.needsEngineer =
      Boolean(
        diagnosis.needsEngineer
      );

    diagnosis.question =
      cleanQuestion(
        diagnosis.question
      );

    /* =====================================================
       HARD STATE MACHINE
    ===================================================== */

    /*
     * INTERACTIONS 1-4
     *
     * Engineering handoff is FORBIDDEN.
     */

    if (
      !diagnosticLimitReached
    ) {
      diagnosis.needsEngineer =
        false;

      /*
       * The model is required to generate a question.
       *
       * If it failed to generate one, do NOT handoff.
       * Instead return an explicit technical error so
       * the problem is visible during development.
       */

      if (
        !diagnosis.question
      ) {
        console.error(
          "AENA AI failed to generate diagnostic question at interaction:",
          diagnosticRound
        );

        throw new Error(
          `AI did not generate a diagnostic question at interaction ${diagnosticRound}.`
        );
      }

      /*
       * Never allow the model to prematurely produce
       * an engineering action.
       */

      diagnosis.aenaAction =
        "";

    }

    /*
     * INTERACTION 5
     *
     * Engineering handoff is MANDATORY.
     */

    if (
      diagnosticLimitReached
    ) {
      diagnosis.question =
        "";

      diagnosis.needsEngineer =
        true;

      if (
        !diagnosis.aenaAction
      ) {
        diagnosis.aenaAction =
          "AENA mühendislik ekibi mevcut teşhis verilerini saha ölçümleriyle doğrulamalı; motor akımı, sürücü tork/akım limiti, frekans referansı, gerçek hız ve proses yükünü birlikte değerlendirerek gerekli optimizasyon veya retrofit müdahalesini belirlemelidir.";
      }

      if (
        !diagnosis.check
      ) {
        diagnosis.check =
          "Motor akımı, sürücü tork/akım limiti, frekans referansı ve gerçek hızın aynı zaman aralığında ölçülerek proses yüküyle karşılaştırılması.";
      }

      if (
        !diagnosis.summary
      ) {
        diagnosis.summary =
          "Beş aşamalı ön teşhis tamamlandı. Mevcut kanıtlar mühendislik doğrulaması gerektiren belirgin bir arıza yönüne işaret ediyor.";
      }
    }

    /* =====================================================
       CONVERSATION
    ===================================================== */

    const updatedConversation:
      ConversationMessage[] =
      [
        ...conversation,

        {
          role: "user",
          content: symptom,
        },

        {
          role: "assistant",
          content:
            buildConversationAssistantMessage(
              diagnosis
            ),
        },
      ];

    /* =====================================================
       SUPABASE CASE DATA
    ===================================================== */

    const caseData = {
      symptom,

      affected_system:
        affectedSystem,

      ai_summary:
        diagnosis.summary,

      ai_diagnoses: [],

      ai_recommendations: {
        check:
          diagnosis.check,

        question:
          diagnosis.question,

        needsEngineer:
          diagnosis.needsEngineer,

        aenaAction:
          diagnosis.aenaAction,

        safetyWarning:
          diagnosis.safetyWarning,

        severity:
          diagnosis.severity,

        diagnosticInteraction:
          diagnosticRound,

        conversation:
          updatedConversation,
      },
    };

    /* =====================================================
       SUPABASE
    ===================================================== */

    let savedCaseId =
      caseId;

    if (caseId) {
      const {
        error:
          supabaseError,
      } =
        await supabase
          .from(
            "retrofit_ai_cases"
          )
          .update(
            caseData
          )
          .eq(
            "id",
            caseId
          );

      if (
        supabaseError
      ) {
        console.error(
          "SUPABASE UPDATE ERROR:",
          supabaseError
        );
      }
    } else {
      const {
        data:
          insertedCase,
        error:
          supabaseError,
      } =
        await supabase
          .from(
            "retrofit_ai_cases"
          )
          .insert(
            caseData
          )
          .select(
            "id"
          )
          .single();

      if (
        supabaseError
      ) {
        console.error(
          "SUPABASE INSERT ERROR:",
          supabaseError
        );
      } else {
        savedCaseId =
          insertedCase.id;
      }
    }

    /* =====================================================
       RETURN
    ===================================================== */

    return NextResponse.json({
      summary:
        diagnosis.summary,

      check:
        diagnosis.check,

      question:
        diagnosis.question,

      severity:
        diagnosis.severity,

      needsEngineer:
        diagnosis.needsEngineer,

      aenaAction:
        diagnosis.aenaAction,

      safetyWarning:
        diagnosis.safetyWarning,

      caseId:
        savedCaseId,

      diagnosticInteraction:
        diagnosticRound,

      diagnosticComplete:
        diagnosticLimitReached,
    });

  } catch (
    error
  ) {
    console.error(
      "AENA RETROFIT AI ERROR:",
      error
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
        .includes(
          "fetch"
        )
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
      }
    );
  }
}