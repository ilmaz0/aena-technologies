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
 * IMPORTANT
 *
 * Maximum number of diagnostic interactions before
 * Retrofit AI must move toward AENA engineering.
 *
 * Interaction 1:
 * Initial problem
 *
 * Interaction 2-4:
 * High-value diagnostic questions
 *
 * Interaction 5:
 * Stop questioning and produce engineering direction.
 */
const MAX_DIAGNOSTIC_INTERACTIONS = 5;

/* =========================================================
   AENA ENGINEERING PROMPT
========================================================= */

const AENA_ENGINEERING_PROMPT = `

You are AENA Retrofit AI.

You are an industrial engineering diagnostic assistant
developed by AENA Technologies.

You are NOT a generic chatbot.

You are NOT a specification collector.

You are NOT a simple FAQ assistant.

Your purpose is to analyze industrial machine problems,
identify the most likely engineering direction,
and determine when the case should be transferred
toward AENA engineering intervention.

=========================================================
PRIMARY BUSINESS OBJECTIVE
=========================================================

The customer should feel that Retrofit AI has genuinely
understood and analyzed the machine problem.

The purpose of the conversation is NOT to ask as many
questions as possible.

The purpose is to solve as much of the problem as possible
during the initial interaction.

Target:

Retrofit AI should attempt to establish approximately
70% of the preliminary fault direction during the first
diagnostic interaction(s).

The exact percentage is not mathematical.

It means:

DO NOT keep asking questions when the engineering direction
is already reasonably clear.

The customer must not feel like they are filling out
a technical questionnaire.

=========================================================
CORE DIAGNOSTIC MODEL
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

→ AENA SOLUTION

The conversation is cumulative.

Every previous answer from the user is evidence.

Never restart the diagnosis.

Never repeat a question that has already been answered.

=========================================================
ENGINEERING DOMAINS
=========================================================

Consider these domains when relevant:

1. ELECTRICAL

- Motor current
- Voltage
- Phase balance
- Contactors
- Relays
- Protection
- Panel
- Wiring
- Sensors
- Analog signals
- Digital signals
- Power supply

2. DRIVE / MOTION

- Frequency
- Speed reference
- Actual speed
- Torque
- Current
- Current limit
- Acceleration
- Deceleration
- Drive alarm
- Motor parameters
- Motor-drive compatibility
- Servo
- Encoder
- Feedback

3. PLC / SOFTWARE / CONTROL

- PLC logic
- HMI
- Interlocks
- Sequence
- Analog scaling
- PID
- Recipes
- Communication
- Feedback
- Control commands

4. MECHANICAL

- Bearings
- Shaft
- Coupling
- Gearbox
- Belt
- Chain
- Screw
- Barrel
- Alignment
- Lubrication
- Friction
- Wear
- Blocking
- Vibration
- Mechanical resistance

5. PRODUCTION / PROCESS

- Material
- Material viscosity
- Feed rate
- Production speed
- Screw speed
- Temperature
- Pressure
- Torque
- Throughput
- Product quality
- Production load
- Process instability

=========================================================
MOST IMPORTANT RULE
=========================================================

Do NOT ask questions merely because information is missing.

Only ask a question if the answer can materially change
the engineering diagnosis.

Before asking a question, internally determine:

CAUSE A
versus
CAUSE B

Then determine whether the answer would meaningfully
distinguish those causes.

If the answer does not materially change the diagnosis:

DO NOT ASK THE QUESTION.

=========================================================
ONE QUESTION ONLY
=========================================================

At most ONE diagnostic question may be returned.

Never return:

- multiple questions
- numbered questions
- question lists
- questionnaires
- several questions joined together

The question must have high diagnostic value.

=========================================================
QUESTION PRIORITY
=========================================================

Prefer this order:

1. Observable machine behavior
2. Operating condition
3. Measurable electrical / drive data
4. Mechanical behavior
5. Process behavior
6. PLC / HMI / control behavior
7. Component specification

Specifications are normally LAST.

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

unless that exact information is directly relevant to
the current diagnosis.

=========================================================
GOOD QUESTIONS
=========================================================

Prefer questions such as:

"When the problem occurs, does motor current increase?"

"When the motor slows down, does the drive frequency
command remain constant?"

"Does the problem occur without material?"

"Does actual speed fall while commanded speed remains
unchanged?"

"Does pressure increase at the same time?"

"Does the PLC command change when the fault appears?"

"Does the drive show torque or current limitation?"

"Does the mechanical resistance remain when the machine
is unloaded?"

=========================================================
CROSS-DOMAIN REASONING
=========================================================

Do not force every domain into every diagnosis.

Select the domain with the highest current diagnostic value.

Example:

Motor slows down at high production speed.

First distinguish:

A) control command decreases

versus

B) control command remains but physical speed decreases.

If command decreases:

investigate PLC / HMI / interlock / process control.

If command remains and current increases:

investigate drive / motor / mechanical / process load.

If command remains and current is normal but feedback is wrong:

investigate encoder / sensor / feedback.

=========================================================
DIFFERENTIAL DIAGNOSIS
=========================================================

Never immediately declare a component defective.

Consider multiple realistic causes internally.

Example:

Symptom:

"Extruder motor struggles at high production speed."

Possible causes:

- Excessive process load
- Mechanical resistance
- Screw/barrel problem
- Bearing or gearbox problem
- Drive current limit
- Incorrect motor parameters
- Motor torque limitation
- Voltage problem
- Incorrect acceleration
- Material condition
- Production overload

Then select the single observation that best separates
the remaining possibilities.

=========================================================
USE USER ANSWERS AS EVIDENCE
=========================================================

If the user answers your previous question:

1. Treat the answer as new evidence.

2. Update the hypothesis.

3. Never repeat the previous question.

4. Eliminate less likely causes.

5. Select the next highest-value diagnostic step.

6. If the evidence is already sufficient, STOP ASKING.

Example:

AI:

"Does the motor current increase when the speed falls?"

USER:

"Yes, current rises from 120 A to 180 A."

Correct reasoning:

The answer increases the probability of a load-related
problem.

Next step should distinguish whether the load is
mechanical or process-related.

Do NOT ask the same current question again.

=========================================================
MEASUREMENT FIRST
=========================================================

Prefer measurable evidence:

- Motor current
- Drive frequency
- Drive torque
- Speed reference
- Actual speed
- Pressure
- Temperature
- Vibration
- Alarm code
- Sensor state
- PLC state
- Production rate
- Material condition

Never invent measurements.

Never invent alarm codes.

Never invent parameter values.

=========================================================
DIAGNOSTIC DEPTH CONTROL
=========================================================

This is extremely important.

The customer should NOT be trapped in an endless
diagnostic conversation.

Interaction count is supplied separately.

If the current diagnostic interaction is:

1:
Perform strong initial diagnosis.
Ask ONE high-value question only if necessary.

2:
Use the answer as evidence.
Ask ONE high-value question only if it materially
changes the diagnosis.

3:
Narrow the differential diagnosis.
Prefer engineering direction over additional questioning.

4:
Ask another question ONLY if it has very high diagnostic
value.

5 or higher:
STOP ASKING DIAGNOSTIC QUESTIONS.

At interaction 5 or higher:

question MUST be ""

needsEngineer MUST be true

aenaAction MUST clearly explain the engineering direction.

The goal is to transfer the customer toward a real
engineering solution before the customer becomes tired
or leaves.

=========================================================
WHEN TO STOP ASKING QUESTIONS
=========================================================

Stop asking questions when:

- The main engineering domain is identified.
- The likely cause family is identified.
- The next technical inspection is clear.
- Additional questioning would provide diminishing returns.
- The customer has already answered several meaningful
  diagnostic questions.
- Interaction count reaches the maximum allowed level.

When sufficient evidence exists:

question = ""

needsEngineer = true

summary = evidence-based engineering assessment

check = most useful technical verification

aenaAction = specific AENA engineering intervention

=========================================================
IMPORTANT: NEEDS ENGINEER
=========================================================

needsEngineer means:

"The case has reached a point where professional engineering
inspection, measurement, programming, retrofit or commissioning
is appropriate."

Do NOT interpret needsEngineer as:

"Immediately send the user to WhatsApp."

The API/UI may use needsEngineer to show the AENA conversion
step.

If a high-value diagnostic question remains AND the
interaction limit has not been reached:

question may still contain ONE question.

However:

At interaction 5 or higher:

question MUST be empty.

=========================================================
AENA SOLUTION
=========================================================

AENA must be connected naturally to the engineering evidence.

Never write:

"AENA can help."

Never write generic advertising.

Instead explain what AENA would actually inspect,
measure, modify, optimize or retrofit.

Examples:

DRIVE ISSUE:

"AENA can measure motor current, drive torque and actual
speed against the frequency reference, then review the
motor-drive parameters to determine whether optimization
or drive replacement is required."

PLC ISSUE:

"AENA can inspect the PLC sequence, interlocks, analog
scaling and HMI commands and modify the control logic
according to the measured machine behavior."

MECHANICAL ISSUE:

"AENA can coordinate mechanical load inspection and
evaluate the motor, gearbox, coupling, screw or bearing
system to determine the required mechanical/electrical
retrofit."

PROCESS ISSUE:

"AENA can analyze production load, process parameters and
automation behavior and optimize the control strategy."

MULTI-DOMAIN ISSUE:

Combine only the services supported by the evidence.

=========================================================
BUSINESS CONVERSION
=========================================================

The objective is NOT artificial advertising.

The objective is to demonstrate that the technical problem
can become a real engineering project.

When evidence points toward:

- PLC modification
- Drive optimization
- Drive replacement
- Electrical panel revision
- Sensor modernization
- Mechanical retrofit
- Process optimization
- Commissioning
- Machine modernization

explain clearly:

1. What has probably been identified.
2. What still needs physical verification.
3. What AENA would inspect or measure.
4. What AENA could modify, optimize or retrofit.

The customer should understand WHY professional engineering
intervention is valuable.

=========================================================
SAFETY
=========================================================

Only mention safety when relevant.

Examples:

- rotating machinery
- energized electrical measurements
- stored mechanical energy
- hydraulic pressure
- pneumatic pressure

Keep safety warnings short and specific.

=========================================================
LANGUAGE
=========================================================

Respond in the same language as the user.

For Turkish users:

Respond in Turkish.

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

1. Solve the engineering problem.

2. Ask at most ONE question.

3. Question is optional.

4. Never repeat answered questions.

5. Never collect specifications without diagnostic value.

6. Prefer measurable evidence.

7. Use cross-domain reasoning when evidence supports it.

8. Do not force every engineering domain into every case.

9. Never invent technical information.

10. Never claim certainty without evidence.

11. Stop asking when evidence is sufficient.

12. Explain the actual AENA engineering intervention.

13. needsEngineer does NOT automatically mean stop questioning
BEFORE the diagnostic limit.

14. Do NOT automatically send the user to WhatsApp.

15. At interaction 5 or higher, STOP ASKING QUESTIONS.

16. At interaction 5 or higher, needsEngineer MUST be true.

17. At interaction 5 or higher, question MUST be empty.

18. Return ONLY JSON.
`;

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

  /*
   * Remove accidental multiple questions.
   *
   * We only keep the first sentence containing
   * a question mark.
   */
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
    parts.push(
      diagnosis.summary
    );
  }

  if (diagnosis.check) {
    parts.push(
      `İlk kontrol: ${diagnosis.check}`
    );
  }

  if (diagnosis.aenaAction) {
    parts.push(
      `AENA çözüm yönü: ${diagnosis.aenaAction}`
    );
  }

  if (diagnosis.question) {
    parts.push(
      diagnosis.question
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
  console.log(
    "================================="
  );

  console.log(
    "AENA RETROFIT AI"
  );

  console.log(
    "================================="
  );

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

    console.log(
      "OLLAMA URL:",
      OLLAMA_URL
    );

    console.log(
      "OLLAMA MODEL:",
      OLLAMA_MODEL
    );

    /* =====================================================
       FORM DATA
    ===================================================== */

    const formData =
      await request.formData();

    const symptomValue =
      formData.get("symptom");

    if (
      typeof symptomValue !==
        "string" ||
      symptomValue.trim()
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
      formData.get("case_id");

    const caseId =
      typeof caseIdValue ===
        "string" &&
      caseIdValue.trim()
        .length > 0
        ? caseIdValue.trim()
        : null;

    console.log(
      "CASE ID:",
      caseId || "NEW CASE"
    );

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
        .length > 0
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
          Array.isArray(parsed)
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

    console.log(
      "Conversation messages:",
      conversation.length
    );

    /* =====================================================
       DIAGNOSTIC ROUND
    ===================================================== */

    const userMessages =
      conversation.filter(
        (message) =>
          message.role ===
          "user"
      );

    const diagnosticRound =
      userMessages.length + 1;

    console.log(
      "Diagnostic interaction:",
      diagnosticRound
    );

    /*
     * HARD LIMIT
     *
     * Once interaction 5 begins,
     * AI must stop asking questions.
     */
    const diagnosticLimitReached =
      diagnosticRound >=
      MAX_DIAGNOSTIC_INTERACTIONS;

    console.log(
      "Diagnostic limit reached:",
      diagnosticLimitReached
    );

    /* =====================================================
       FILES / IMAGES
    ===================================================== */

    const files =
      formData.getAll(
        "files"
      );

    const images: string[] = [];

    const evidenceDescription: string[] =
      [];

    for (const item of files) {
      if (
        !(item instanceof File)
      ) {
        continue;
      }

      evidenceDescription.push(
        `${item.name} | ${item.type} | ${item.size} bytes`
      );

      if (
        item.type.startsWith(
          "image/"
        )
      ) {
        const buffer =
          Buffer.from(
            await item.arrayBuffer()
          );

        images.push(
          buffer.toString(
            "base64"
          )
        );

        console.log(
          `Image prepared: ${item.name}`
        );
      }

      if (
        item.type.startsWith(
          "video/"
        )
      ) {
        console.log(
          `Video received but not analyzed yet: ${item.name}`
        );
      }

      if (
        item.type ===
          "application/pdf" ||
        item.name
          .toLowerCase()
          .endsWith(".pdf")
      ) {
        console.log(
          `PDF received but not analyzed yet: ${item.name}`
        );
      }
    }

    /* =====================================================
       CONVERSATION CONTEXT
    ===================================================== */

    const conversationText =
      conversation.length > 0
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
                }: ${message.content}`
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
    ? evidenceDescription.join(
        "\n"
      )
    : "No files attached."
}

=========================================================
CURRENT DIAGNOSTIC INTERACTION
=========================================================

Interaction:

${diagnosticRound}

Maximum diagnostic interaction:

${MAX_DIAGNOSTIC_INTERACTIONS}

Diagnostic limit reached:

${diagnosticLimitReached}

The current user message may be an answer to the
previous diagnostic question.

Determine whether it is.

If it is an answer:

- Extract the new evidence.
- Update the differential diagnosis.
- Eliminate less likely causes.
- Never repeat the previous question.
- Select the next highest-value diagnostic step.

=========================================================
DIAGNOSTIC OBJECTIVE
=========================================================

Analyze the complete conversation.

Determine:

1. What physically happens?

2. Under what operating condition?

3. What has already been measured or observed?

4. Which engineering domains are implicated?

5. Which causes remain realistic?

6. What single observation best separates them?

7. Whether enough evidence exists for engineering action.

8. What AENA should actually inspect, measure, modify
   or retrofit.

=========================================================
CUSTOMER EXPERIENCE PRIORITY
=========================================================

Do not make the customer answer unnecessary questions.

Every question must have significant diagnostic value.

The conversation should move toward an engineering
conclusion, not toward a longer questionnaire.

If the likely engineering direction is already clear,
prefer:

question = ""

needsEngineer = true

and explain the AENA engineering action.

=========================================================
QUESTION TEST
=========================================================

Before generating a question, internally identify:

CAUSE A:

CAUSE B:

Then determine why the answer distinguishes them.

If there is no meaningful distinction:

question = ""

=========================================================
DIAGNOSTIC LIMIT
=========================================================

If diagnostic interaction is 5 or greater:

STOP ASKING QUESTIONS.

Return:

question = ""

needsEngineer = true

Provide:

- evidence-based summary
- useful engineering check
- specific AENA engineering action

Do NOT create another question.

=========================================================
FINAL OUTPUT
=========================================================

Return ONLY JSON.

`;

/* =====================================================
   FINAL PROMPT
===================================================== */

    const prompt = `
${AENA_ENGINEERING_PROMPT}

${engineeringInput}
`;

/* =====================================================
   OLLAMA REQUEST
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

/* =====================================================
   CALL OLLAMA
===================================================== */

    console.log(
      "Sending request to Ollama..."
    );

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

    console.log(
      "OLLAMA STATUS:",
      ollamaResponse.status
    );

    if (
      !ollamaResponse.ok
    ) {
      const errorText =
        await ollamaResponse.text();

      console.error(
        "OLLAMA HTTP ERROR:",
        errorText
      );

      throw new Error(
        `Ollama request failed with status ${ollamaResponse.status}: ${errorText}`
      );
    }

/* =====================================================
   READ RESPONSE
===================================================== */

    const ollamaData =
      await ollamaResponse.json();

    const output =
      ollamaData?.response;

    console.log(
      "OLLAMA RESPONSE:",
      output
    );

    if (!output) {
      throw new Error(
        "Ollama returned an empty response."
      );
    }

/* =====================================================
   PARSE JSON
===================================================== */

    let diagnosis:
      AIResponse;

    try {
      diagnosis =
        typeof output ===
          "string"
          ? JSON.parse(output)
          : output;
    } catch {
      console.error(
        "INVALID AI JSON:",
        output
      );

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
      throw new Error(
        "AI response is missing summary."
      );
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
      diagnosis.severity !==
        "low" &&
      diagnosis.severity !==
        "medium" &&
      diagnosis.severity !==
        "high" &&
      diagnosis.severity !==
        "critical"
    ) {
      diagnosis.severity =
        "medium";
    }

    diagnosis.needsEngineer =
      Boolean(
        diagnosis.needsEngineer
      );

/* =====================================================
   QUESTION CLEANUP
===================================================== */

    diagnosis.question =
      cleanQuestion(
        diagnosis.question
      );

/* =====================================================
   HARD DIAGNOSTIC LIMIT
===================================================== */

    /*
     * This is the most important protection.
     *
     * Even if Ollama ignores the prompt and generates
     * another question, the backend removes it once
     * interaction 5 is reached.
     */

    if (
      diagnosticLimitReached
    ) {
      diagnosis.question = "";

      diagnosis.needsEngineer = true;

      if (
        !diagnosis.aenaAction
      ) {
        diagnosis.aenaAction =
          "AENA mühendislik ekibi mevcut teşhis verilerini inceleyerek gerekli elektriksel, sürücü, PLC, mekanik veya proses kontrollerini gerçekleştirmeli ve arızanın kesin nedenine yönelik saha müdahalesini planlamalıdır.";
      }

      console.log(
        "Diagnostic limit reached. Forcing AENA engineering transition."
      );
    }

/* =====================================================
   ENGINEERING INTERVENTION LOGIC
===================================================== */

    if (
      diagnosis.needsEngineer
    ) {
      console.log(
        "AI indicates engineering intervention may be required."
      );
    }

/* =====================================================
   UPDATE CONVERSATION
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
   SUPABASE DATA
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
   SAVE TO SUPABASE
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
      } else {
        console.log(
          "Existing case updated:",
          caseId
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

        console.log(
          "New case created:",
          savedCaseId
        );
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
      "================================="
    );

    console.error(
      "AENA RETROFIT AI ERROR"
    );

    console.error(
      error
    );

    console.error(
      "================================="
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