import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

/* =========================================================
   ENVIRONMENT
========================================================= */

const OLLAMA_URL = process.env.OLLAMA_URL;

const OLLAMA_MODEL =
  process.env.OLLAMA_MODEL || "gemma3:4b";

/* =========================================================
   AENA RETROFIT AI PROMPT
========================================================= */

const AENA_ENGINEERING_PROMPT = `
You are AENA Retrofit AI, an industrial troubleshooting assistant
developed by AENA Technologies.

You reason like an experienced industrial automation, electrical,
machine retrofit and field service engineer.

AENA works with:

- PLC
- HMI
- Variable frequency drives
- Servo systems
- Motors
- Sensors
- Electrical panels
- Industrial communication
- Machine retrofit
- Machine modernization
- Commissioning
- Electrical troubleshooting
- Mechanical troubleshooting
- Pneumatic systems
- Hydraulic systems
- Plastic processing machinery
- Extrusion machines
- Stretch film machines
- PET recycling machines
- Flexographic printing machines

=========================================================
PRIMARY OBJECTIVE
=========================================================

Your job is NOT to produce a long engineering report.

Your job is to have a short, practical troubleshooting conversation
with the user.

The goal is:

1. Understand the machine symptom.
2. Make the most useful current engineering assessment.
3. Suggest the most useful immediate check when appropriate.
4. Ask ONE highly useful question.
5. Use the user's answer to narrow the diagnosis.
6. Continue until there is enough information for a reasonable
   preliminary conclusion.
7. When physical inspection, measurements, PLC/drive software,
   drawings or engineering intervention is required, recommend
   continuing with an AENA engineer.

=========================================================
RESPONSE STYLE
=========================================================

Keep the response SHORT.

The customer should NOT receive a long engineering report.

Do NOT show:

- probability percentages
- confidence percentages
- multiple diagnosis lists
- long lists of possible causes
- unnecessary technical explanations
- unnecessary tools lists
- unnecessary repeated information

Think deeply internally, but communicate simply.

A good response normally contains:

1. Short assessment
2. One useful check
3. One question

Do not ask multiple questions at once.

=========================================================
ENGINEERING REASONING
=========================================================

Always distinguish between:

- Observed fact
- Engineering hypothesis
- Diagnostic evidence

Never invent:

- measurements
- alarm codes
- parameter values
- machine states
- component failures
- visual information that cannot actually be seen

Never immediately declare a component defective without evidence.

For example:

BAD:

"The motor is defective."

BETTER:

"The symptom is more consistent with a load or drive-side issue
at this stage. We should first check what happens to the motor
current at the speed where the problem starts."

=========================================================
QUESTION STRATEGY
=========================================================

Ask the SINGLE question that provides the greatest diagnostic value.

Good:

"Does the motor current increase significantly when the problem starts?"

Bad:

"Check the motor current, drive parameters, mechanical system,
PLC output and wiring. Also tell me the motor model."

Only ask one question.

The next question should depend on the previous answer.

=========================================================
PROGRESSIVE DIAGNOSIS
=========================================================

Do not repeat questions that have already been answered.

Use the complete conversation history provided to you.

If the user already provided enough evidence for a reasonable
preliminary diagnosis, stop asking unnecessary questions.

At that point:

- give a concise preliminary conclusion
- state the most useful next action
- set needsEngineer to true when professional intervention
  would be useful

=========================================================
VISUAL EVIDENCE
=========================================================

If an image is supplied:

- inspect visible information carefully
- use only information actually visible
- identify displays, alarms, labels, components and conditions
- never invent unreadable values
- distinguish observation from hypothesis

=========================================================
SAFETY
=========================================================

For electrical measurements, high voltage systems, rotating
machinery, stored mechanical energy, pneumatic systems and
hydraulic systems, mention appropriate safety precautions when
relevant.

Do not overload the response with generic safety warnings.

=========================================================
COMMERCIAL PURPOSE
=========================================================

The AI should provide genuine preliminary engineering value.

However, it should not attempt to replace an AENA field engineer
when diagnosis requires:

- physical inspection
- electrical measurements
- PLC software
- drive software
- electrical drawings
- machine access
- detailed commissioning
- mechanical inspection

When appropriate, set:

"needsEngineer": true

Do NOT claim that AENA physically inspected the machine.

=========================================================
OUTPUT
=========================================================

Return ONLY valid JSON.

Do not use markdown.

Use exactly this structure:

{
  "summary": "Short current engineering assessment.",
  "check": "The single most useful immediate check, or an empty string if not appropriate.",
  "question": "Exactly one useful diagnostic question, or an empty string if enough information is available.",
  "severity": "low | medium | high | critical",
  "needsEngineer": false,
  "safetyWarning": "Short safety warning when relevant, otherwise an empty string."
}

=========================================================
OUTPUT RULES
=========================================================

- summary should normally be 1-3 short sentences.
- check should normally be one short instruction.
- question must contain only ONE question.
- Do not include probability values.
- Do not include confidence values.
- Do not create diagnosis arrays.
- Do not create long lists.
- Do not repeat the entire user problem.
- Do not ask questions whose answers are already present.
- If information is insufficient, ask the most useful single question.
- If enough information exists, question may be empty.
- If professional engineering intervention is appropriate,
  set needsEngineer to true.
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
  safetyWarning: string;
};

/* =========================================================
   POST
========================================================= */

export async function POST(request: Request) {

  console.log("=================================");
  console.log("AENA RETROFIT AI");
  console.log("=================================");

  try {

    /* =====================================================
       ENVIRONMENT
    ===================================================== */

    if (!OLLAMA_URL) {

      console.error(
        "OLLAMA_URL environment variable is missing."
      );

      return NextResponse.json(
        {
          error:
            "OLLAMA_URL environment variable is not configured."
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
      typeof symptomValue !== "string" ||
      symptomValue.trim().length < 3
    ) {

      return NextResponse.json(
        {
          error:
            "Please describe what is happening with the machine."
        },
        {
          status: 400,
        }
      );
    }

    const symptom =
      symptomValue.trim();

    /* =====================================================
       OPTIONAL SYSTEM
    ===================================================== */

    const affectedSystemValue =
      formData.get("affected_system");

    const affectedSystem =
      typeof affectedSystemValue === "string" &&
      affectedSystemValue.trim().length > 0
        ? affectedSystemValue.trim()
        : null;

    /* =====================================================
       CONVERSATION
    ===================================================== */

    let conversation: ConversationMessage[] = [];

    const conversationValue =
      formData.get("conversation");

    if (
      typeof conversationValue === "string" &&
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
              (item) =>
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

    console.log(
      "Conversation messages:",
      conversation.length
    );

    /* =====================================================
       FILES
    ===================================================== */

    const files =
      formData.getAll("files");

    const images: string[] = [];

    const evidenceDescription: string[] = [];

    for (const item of files) {

      if (!(item instanceof File)) {
        continue;
      }

      evidenceDescription.push(
        `${item.name} | ${item.type} | ${item.size} bytes`
      );

      /* ===================================================
         IMAGE
      =================================================== */

      if (
        item.type.startsWith("image/")
      ) {

        const buffer =
          Buffer.from(
            await item.arrayBuffer()
          );

        const base64 =
          buffer.toString("base64");

        images.push(base64);

        console.log(
          `Image prepared: ${item.name}`
        );
      }

      /* ===================================================
         VIDEO
      =================================================== */

      if (
        item.type.startsWith("video/")
      ) {

        console.log(
          `Video received but not analyzed yet: ${item.name}`
        );
      }

      /* ===================================================
         DOCUMENT
      =================================================== */

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
       BUILD CONVERSATION CONTEXT
    ===================================================== */

    const conversationText =
      conversation.length > 0
        ? conversation
            .map(
              (message) =>
                `${message.role === "user" ? "USER" : "AENA AI"}: ${message.content}`
            )
            .join("\n\n")
        : "No previous conversation.";

    /* =====================================================
       ENGINEERING INPUT
    ===================================================== */

    const engineeringInput = `
CURRENT USER MESSAGE

${symptom}

AFFECTED SYSTEM

${
  affectedSystem ||
  "Not specified."
}

PREVIOUS CONVERSATION

${conversationText}

ATTACHED EVIDENCE

${
  evidenceDescription.length > 0
    ? evidenceDescription.join("\n")
    : "No files attached."
}

IMPORTANT:

Use the previous conversation.

Do not repeat questions already answered.

The current user message may be:

- the initial machine problem
- an answer to your previous question
- additional technical information

Determine which it is from the conversation context.

Provide only the next useful troubleshooting step.

Keep the response concise.

Return only the required JSON.
`;

    const prompt =
      `${AENA_ENGINEERING_PROMPT}

${engineeringInput}`;

    /* =====================================================
       OLLAMA REQUEST
    ===================================================== */

    const ollamaBody: {
      model: string;
      prompt: string;
      stream: boolean;
      format: string;
      images?: string[];
      options: {
        temperature: number;
        num_ctx: number;
      };
    } = {

      model:
        OLLAMA_MODEL,

      prompt,

      stream:
        false,

      format:
        "json",

      options: {

        temperature:
          0.1,

        num_ctx:
          4096,
      },
    };

    if (
      images.length > 0
    ) {

      ollamaBody.images =
        images;

      console.log(
        `Sending ${images.length} image(s) to Ollama.`
      );

    } else {

      console.log(
        "No image evidence attached."
      );
    }

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
          method:
            "POST",

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

    console.log(
      "OLLAMA STATUS:",
      ollamaResponse.status
    );

    /* =====================================================
       OLLAMA ERROR
    ===================================================== */

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

    let diagnosis: AIResponse;

    try {

      diagnosis =
        typeof output === "string"
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
      typeof diagnosis.safetyWarning !==
      "string"
    ) {

      diagnosis.safetyWarning = "";
    }

    if (
      diagnosis.severity !== "low" &&
      diagnosis.severity !== "medium" &&
      diagnosis.severity !== "high" &&
      diagnosis.severity !== "critical"
    ) {

      diagnosis.severity =
        "medium";
    }

    diagnosis.needsEngineer =
      Boolean(
        diagnosis.needsEngineer
      );

    /* =====================================================
       SAVE TO SUPABASE
    ===================================================== */

    console.log(
      "Saving analysis to Supabase..."
    );

    const { error: supabaseError } =
      await supabase
        .from("retrofit_ai_cases")
        .insert({
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

            safetyWarning:
              diagnosis.safetyWarning,

            conversation:
              [
                ...conversation,
                {
                  role: "user",
                  content: symptom,
                },
                {
                  role: "assistant",
                  content:
                    diagnosis.summary,
                },
              ],
          },
        });

    if (
      supabaseError
    ) {

      console.error(
        "SUPABASE INSERT ERROR:",
        supabaseError
      );

      /*
       * Supabase kayıt problemi AI sonucunu
       * müşteriye göstermeyi engellemesin.
       */

      console.warn(
        "AI result will still be returned to the user."
      );

    } else {

      console.log(
        "Retrofit AI analysis saved successfully."
      );
    }

    /* =====================================================
       RETURN
    ===================================================== */

    return NextResponse.json(
      diagnosis
    );

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
        `Cannot connect to Ollama at ${OLLAMA_URL}. ` +
        `Make sure the Cloudflare Tunnel is running ` +
        `and the Ollama endpoint is reachable.`;
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