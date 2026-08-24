import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

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

type AIResponse = {
  summary: string;
  check: string;
  question: string;
  severity:
    | "low"
    | "medium"
    | "high"
    | "critical";
  needsEngineer: boolean;
  aenaAction: string;
  safetyWarning: string;
};

/* =========================================================
   AENA ENGINEERING PROMPT
========================================================= */

const AENA_ENGINEERING_PROMPT = `

You are AENA Retrofit AI.

You are an industrial engineering diagnostic assistant
developed by AENA Technologies.

Your job is to perform a SHORT, TARGETED industrial
machine diagnosis and then connect the case to AENA
engineering.

You are NOT a generic chatbot.

You are NOT a specification collector.

You are NOT a long questionnaire.

=========================================================
CORE OBJECTIVE
=========================================================

The goal is to narrow the likely engineering cause
through a maximum of FIVE diagnostic interactions.

Every user answer is evidence.

Each new question must depend on the previous evidence.

Do not restart the diagnosis.

Do not repeat answered questions.

Do not ask for unnecessary machine specifications.

The conversation must move toward an engineering
conclusion quickly.

=========================================================
DIAGNOSTIC FLOW
=========================================================

Interaction 1:

Analyze the initial machine problem.

Ask ONE high-value diagnostic question.

Interaction 2:

Use the previous answer as evidence.

Ask ONE new question that separates the most likely
remaining causes.

Interaction 3:

Narrow the differential diagnosis.

Ask ONE high-value question if necessary.

Interaction 4:

Perform the final important technical distinction.

Ask ONE high-value question if necessary.

Interaction 5:

STOP.

Do NOT ask another question.

Produce the engineering assessment.

Set:

question = ""

needsEngineer = true

=========================================================
IMPORTANT
=========================================================

The purpose is NOT to use all five questions blindly.

If the engineering direction becomes sufficiently clear
before interaction 5, you may stop asking questions.

However, never create a generic question just to extend
the conversation.

If another question is needed, it must materially change
the diagnosis.

=========================================================
QUESTION RULE
=========================================================

At most ONE question.

Never return:

- multiple questions
- numbered questions
- question lists
- questionnaires
- two questions joined together

A question must distinguish between realistic causes.

Before asking a question internally identify:

CAUSE A

versus

CAUSE B

Then determine whether the user's answer would change
the diagnosis.

If not, do not ask it.

=========================================================
QUESTION PRIORITY
=========================================================

Prefer:

1. Observable machine behavior
2. Operating condition
3. Measured electrical data
4. Drive behavior
5. Mechanical behavior
6. Process behavior
7. PLC/control behavior
8. Component specifications

Specifications are LAST.

=========================================================
GOOD QUESTIONS
=========================================================

Examples:

"When the problem occurs, does motor current increase?"

"When the motor slows down, does the drive frequency
command remain constant?"

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

unless that information directly changes the current
diagnosis.

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
- Excessive pressure
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

frequency command remains constant
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

Prefer:

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

=========================================================
AENA ENGINEERING
=========================================================

When the diagnostic direction is sufficiently clear,
explain specifically what AENA should do.

Examples:

Drive issue:

"AENA can measure motor current, drive torque,
frequency reference and actual speed simultaneously
and review motor-drive parameters."

PLC issue:

"AENA can inspect PLC logic, interlocks, analog scaling,
HMI commands and modify the control sequence."

Mechanical issue:

"AENA can inspect the motor, gearbox, coupling,
bearings and mechanical load path."

Process issue:

"AENA can correlate production rate, pressure,
material condition and motor load and optimize
the process control."

Never use generic advertising such as:

"AENA can help."

=========================================================
FIFTH INTERACTION
=========================================================

If interaction >= 5:

question = ""

needsEngineer = true

summary = concise engineering assessment

check = most useful physical/measurement verification

aenaAction = specific engineering intervention

No additional question is allowed.

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

1. Maximum five diagnostic interactions.

2. Ask at most ONE question per interaction.

3. Every question must have diagnostic value.

4. Never repeat a question.

5. Never collect specifications unnecessarily.

6. Use previous answers as evidence.

7. Do not restart diagnosis.

8. Prefer measurable evidence.

9. Do not invent measurements.

10. Do not claim certainty without evidence.

11. At interaction 5 or higher, question MUST be empty.

12. At interaction 5 or higher, needsEngineer MUST be true.

13. At interaction 5 or higher, provide AENA engineering action.

14. Do not create generic "provide more information"
questions.

15. The purpose is diagnosis followed by engineering
conversion, not an endless conversation.

`;

/* =========================================================
   HELPERS
========================================================= */

function cleanQuestion(question: string): string {
  if (!question) {
    return "";
  }

  const normalized = question
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
        questionMarkIndex + 1
      )
      .trim();
  }

  return normalized;
}

function buildConversationAssistantMessage(
  diagnosis: AIResponse
): string {
  const parts: string[] = [];

  if (diagnosis.summary) {
    parts.push(diagnosis.summary);
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

  return parts.join("\n\n");
}

/* =========================================================
   POST
========================================================= */

export async function POST(
  request: Request
) {
  try {
    if (!OLLAMA_URL) {
      return NextResponse.json(
        {
          error:
            "OLLAMA_URL environment variable is not configured.",
        },
        { status: 500 }
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
        { status: 400 }
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
       AFFECTED SYSTEM
    ===================================================== */

    const affectedSystemValue =
      formData.get(
        "affected_system"
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
        "conversation"
      );

    if (
      typeof conversationValue === "string" &&
      conversationValue.trim()
    ) {
      try {
        const parsed =
          JSON.parse(
            conversationValue
          );

        if (Array.isArray(parsed)) {
          conversation =
            parsed.filter(
              (
                item
              ): item is ConversationMessage =>
                item &&
                (
                  item.role === "user" ||
                  item.role === "assistant"
                ) &&
                typeof item.content === "string"
            );
        }
      } catch {
        console.warn(
          "Conversation history could not be parsed."
        );
      }
    }

    /* =====================================================
       INTERACTION COUNT
    ===================================================== */

    const userMessages =
      conversation.filter(
        (message) =>
          message.role === "user"
      );

    const diagnosticRound =
      userMessages.length + 1;

    const diagnosticLimitReached =
      diagnosticRound >=
      MAX_DIAGNOSTIC_INTERACTIONS;

    console.log(
      "Diagnostic interaction:",
      diagnosticRound
    );

    /* =====================================================
       FILES
    ===================================================== */

    const files =
      formData.getAll("files");

    const evidenceDescription: string[] = [];

    for (const item of files) {
      if (!(item instanceof File)) {
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
      conversation.length > 0
        ? conversation
            .map(
              (message) =>
                `${
                  message.role === "user"
                    ? "USER"
                    : "AENA AI"
                }: ${message.content}`
            )
            .join("\n\n")
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

${affectedSystem || "Not specified."}

=========================================================
PREVIOUS CONVERSATION
=========================================================

${conversationText}

=========================================================
ATTACHED EVIDENCE
=========================================================

${
  evidenceDescription.length > 0
    ? evidenceDescription.join("\n")
    : "No files attached."
}

=========================================================
CURRENT DIAGNOSTIC INTERACTION
=========================================================

${diagnosticRound}

Maximum:

${MAX_DIAGNOSTIC_INTERACTIONS}

Diagnostic limit reached:

${diagnosticLimitReached}

=========================================================
YOUR TASK
=========================================================

Analyze the complete conversation.

Treat the current user message as new evidence.

Do not repeat previous questions.

Determine the most likely remaining cause family.

If a high-value question can materially separate
the remaining causes AND interaction is below 5,
ask exactly ONE question.

If interaction is 5 or higher:

DO NOT ASK A QUESTION.

Move directly to AENA engineering assessment.

=========================================================
IMPORTANT
=========================================================

Never output a generic request such as:

"Please provide more information."

Never output:

"Continue diagnostic evidence."

Never ask for information merely because it is missing.

The question must be specific and diagnostic.
`;

    const prompt = `
${AENA_ENGINEERING_PROMPT}

${engineeringInput}
`;

    /* =====================================================
       OLLAMA
    ===================================================== */

    const ollamaBody = {
      model: OLLAMA_MODEL,

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

    const ollamaResponse =
      await fetch(
        OLLAMA_URL,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            ollamaBody
          ),
        }
      );

    if (!ollamaResponse.ok) {
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
        typeof output === "string"
          ? JSON.parse(output)
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
      diagnosis.summary = "";
    }

    if (
      typeof diagnosis.check !==
      "string"
    ) {
      diagnosis.check = "";
    }

    if (
      typeof diagnosis.question !==
      "string"
    ) {
      diagnosis.question = "";
    }

    if (
      typeof diagnosis.aenaAction !==
      "string"
    ) {
      diagnosis.aenaAction = "";
    }

    if (
      typeof diagnosis.safetyWarning !==
      "string"
    ) {
      diagnosis.safetyWarning = "";
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
       HARD RULE: INTERACTION 5
    ===================================================== */

    if (
      diagnosticLimitReached
    ) {
      diagnosis.question = "";

      diagnosis.needsEngineer =
        true;

      if (
        !diagnosis.aenaAction
      ) {
        diagnosis.aenaAction =
          "AENA mühendislik ekibi mevcut teşhis verilerini saha ölçümleriyle doğrulamalı; motor akımı, sürücü tork/akım limiti, frekans referansı, gerçek hız ve proses yükünü birlikte değerlendirerek gerekli optimizasyon veya retrofit müdahalesini belirlemelidir.";
      }
    }

    /* =====================================================
       PREVENT INVALID STATE
    ===================================================== */

    /*
     * AI has no meaningful question and has not reached
     * engineering handoff.
     *
     * Do NOT create a generic question.
     *
     * Instead, make the current engineering direction
     * explicit. The frontend will not show a free-text
     * "continue evidence" box.
     */

    if (
      !diagnosis.question &&
      !diagnosis.needsEngineer &&
      !diagnosticLimitReached
    ) {
      diagnosis.needsEngineer = true;

      if (
        !diagnosis.aenaAction
      ) {
        diagnosis.aenaAction =
          "Mevcut kanıtlar doğrultusunda AENA mühendislik ekibi ölçüm ve saha doğrulaması yaparak teşhisi kesinleştirmelidir.";
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
       SUPABASE
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

    let savedCaseId =
      caseId;

    if (caseId) {
      const {
        error: supabaseError,
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

      if (supabaseError) {
        console.error(
          "SUPABASE UPDATE ERROR:",
          supabaseError
        );
      }
    } else {
      const {
        data: insertedCase,
        error: supabaseError,
      } =
        await supabase
          .from(
            "retrofit_ai_cases"
          )
          .insert(
            caseData
          )
          .select("id")
          .single();

      if (supabaseError) {
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
    });

  } catch (error) {
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
      }
    );
  }
}