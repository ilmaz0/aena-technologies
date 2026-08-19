import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/* =========================================================
   ENVIRONMENT
========================================================= */

const OLLAMA_URL = process.env.OLLAMA_URL;

const OLLAMA_MODEL =
  process.env.OLLAMA_MODEL || "gemma3:4b";

/* =========================================================
   AENA ENGINEERING PROMPT
========================================================= */

const AENA_ENGINEERING_PROMPT = `
You are AENA Retrofit AI, an industrial automation and machine
troubleshooting engineering assistant developed by AENA Technologies.

You must reason like an experienced industrial automation,
electrical and machine retrofit engineer.

AENA specializes in:

- PLC systems
- HMI systems
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

ENGINEERING METHOD

For every machine problem:

1. Understand the reported machine behavior.
2. Analyze the available visual evidence.
3. Identify the affected subsystem when possible.
4. Separate observed facts from assumptions.
5. Identify the most likely failure paths.
6. Rank possible causes by probability.
7. Explain WHY each cause is possible.
8. Provide practical diagnostic checks.
9. Explain what result should be expected from each check.
10. Explain what the engineer should investigate next depending on the result.
11. Never immediately declare a component defective without evidence.
12. Ask targeted questions when information is insufficient.

IMPORTANT

Do not give generic answers such as:

"Check the parameters."
"Check the wiring."
"Check the PLC."
"Check the motor."
"Check the drive."

Instead explain WHICH parameter, WHICH signal, WHICH relationship,
and WHY it should be checked whenever possible.

Example:

Bad:

"Check the drive parameters."

Better:

"If the PLC sends a 50 Hz speed command but the drive monitor remains
near 20 Hz, determine whether the limitation occurs in the PLC reference,
communication command, drive frequency limit, current limitation,
or motor/load side."

ENGINEERING REASONING

Always distinguish between:

- Symptom
- Evidence
- Hypothesis
- Probability
- Diagnostic test
- Expected result
- Next decision

Do not invent:

- Measurements
- Alarm codes
- Parameter values
- Machine states
- Component failures

If information is insufficient, do not pretend to know the exact fault.

Ask the smallest number of highly useful questions needed to narrow
the fault.

VISUAL EVIDENCE

When an image is supplied:

1. Carefully inspect the image.
2. Identify visible displays, alarm messages, indicators,
   labels, wiring, components and machine conditions.
3. Use only information actually visible in the image.
4. Do not invent unreadable values.
5. Clearly distinguish visual observations from assumptions.
6. Explain how the visual evidence affects the diagnosis.

AENA STYLE

Write naturally like an experienced industrial field engineer
explaining the problem to a technician or another engineer.

Do not sound like a generic AI.

Do not unnecessarily repeat the user's sentence.

Use practical industrial terminology.

Be technically detailed but understandable.

Do not unnecessarily overcomplicate simple faults.

SAFETY

Electrical measurements, live measurements, high voltage systems,
rotating machinery and stored mechanical, pneumatic or hydraulic energy
must be treated as hazardous.

Recommend appropriate isolation and qualified personnel where necessary.

COMMERCIAL PURPOSE

The preliminary analysis should provide real engineering value.

When diagnosis requires:

- Physical inspection
- Electrical measurements
- PLC software
- Drive software
- Electrical drawings
- Additional photographs
- Video
- Machine access

explain that an AENA engineer can continue the diagnosis.

Do not claim that AENA physically inspected the machine.

Do not claim certainty without sufficient evidence.

OUTPUT FORMAT

Return ONLY valid JSON.

Do not use markdown.

Do not write anything before or after the JSON.

Use exactly this structure:

{
  "summary": "string",
  "severity": "low | medium | high | critical",
  "diagnoses": [
    {
      "id": "string",
      "system": "string",
      "fault": "string",
      "probability": 0,
      "explanation": "string",
      "evidenceUsed": ["string"],
      "possibleCauses": ["string"],
      "recommendedChecks": ["string"],
      "recommendedActions": ["string"],
      "requiredTools": ["string"],
      "safetyWarnings": ["string"]
    }
  ],
  "immediateActions": ["string"],
  "furtherQuestions": ["string"],
  "safetyWarnings": ["string"],
  "confidence": 0
}

RULES

- probability must be between 0 and 100.
- confidence must be between 0 and 100.
- Provide 2-4 meaningful diagnoses when the information allows it.
- Do not make every diagnosis identical.
- Causes must be technically different.
- Recommended checks must correspond to the suspected fault.
- Further questions must be specific and useful.
- Never invent machine measurements or alarm codes.
`;

/* =========================================================
   POST
========================================================= */

export async function POST(request: Request) {

  console.log("=================================");
  console.log("AENA RETROFIT AI");
  console.log("=================================");

  try {

    /* =====================================================
       CHECK ENVIRONMENT
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
       READ MULTIPART FORM DATA
    ===================================================== */

    const formData =
      await request.formData();

    const symptomValue =
      formData.get("symptom");

    if (
      typeof symptomValue !== "string" ||
      symptomValue.trim().length < 10
    ) {

      return NextResponse.json(
        {
          error:
            "Please provide a detailed description of the machine problem."
        },
        {
          status: 400,
        }
      );
    }

    const symptom =
      symptomValue.trim();

    /* =====================================================
       READ FILES
    ===================================================== */

    const files =
      formData.getAll("files");

    console.log("SYMPTOM:");
    console.log(symptom);

    console.log("FILES:");

    console.log(
      files.map((file) =>
        file instanceof File
          ? {
              name: file.name,
              type: file.type,
              size: file.size,
            }
          : typeof file
      )
    );

    /* =====================================================
       PREPARE IMAGE EVIDENCE
    ===================================================== */

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
         PDF / DOCUMENT
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
       ENGINEERING INPUT
    ===================================================== */

    const engineeringInput = `
USER REPORTED MACHINE PROBLEM

${symptom}

ATTACHED EVIDENCE

${
  evidenceDescription.length > 0
    ? evidenceDescription.join("\n")
    : "No files attached."
}

IMPORTANT:

Analyze the reported symptom together with the available evidence.

If an image is available, inspect the image carefully.

Do not assume that a component is defective simply because
it appears unusual.

Separate:

Observed evidence

from

Engineering hypothesis.

If the evidence is insufficient, ask targeted questions.

Analyze the problem as an experienced industrial field engineer.

Return only the required JSON.
`;

    const prompt =
      `${AENA_ENGINEERING_PROMPT}

${engineeringInput}`;

    /* =====================================================
       OLLAMA REQUEST BODY
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
          0.2,

        num_ctx:
          8192,
      },
    };

    /* =====================================================
       ATTACH IMAGES
    ===================================================== */

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

    console.log(
      "Endpoint:",
      OLLAMA_URL
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
       OLLAMA HTTP ERROR
    ===================================================== */

    if (
      !ollamaResponse.ok
    ) {

      const errorText =
        await ollamaResponse.text();

      console.error(
        "OLLAMA HTTP ERROR:"
      );

      console.error(
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

    console.log(
      "OLLAMA RAW DATA RECEIVED"
    );

    const output =
      ollamaData?.response;

    console.log(
      "OLLAMA RESPONSE:"
    );

    console.log(
      output
    );

    /* =====================================================
       EMPTY RESPONSE
    ===================================================== */

    if (
      !output
    ) {

      throw new Error(
        "Ollama returned an empty response."
      );
    }

    /* =====================================================
       PARSE AI JSON
    ===================================================== */

    let diagnosis;

    try {

      diagnosis =
        typeof output === "string"
          ? JSON.parse(output)
          : output;

    } catch {

      console.error(
        "INVALID AI JSON:"
      );

      console.error(
        output
      );

      throw new Error(
        "Ollama returned an invalid JSON diagnosis."
      );
    }

    /* =====================================================
       BASIC VALIDATION
    ===================================================== */

    if (
      !diagnosis ||
      typeof diagnosis !==
        "object"
    ) {

      throw new Error(
        "AI returned an invalid diagnosis."
      );
    }

    if (
      typeof diagnosis.summary !==
      "string"
    ) {

      throw new Error(
        "AI diagnosis is missing summary."
      );
    }

    if (
      !Array.isArray(
        diagnosis.diagnoses
      )
    ) {

      throw new Error(
        "AI diagnosis is missing diagnoses."
      );
    }

    if (
      typeof diagnosis.confidence !==
      "number"
    ) {

      console.warn(
        "AI confidence value is missing or invalid."
      );
    }

    /* =====================================================
       NORMALIZE OPTIONAL ARRAYS
    ===================================================== */

    if (
      !Array.isArray(
        diagnosis.immediateActions
      )
    ) {

      diagnosis.immediateActions =
        [];
    }

    if (
      !Array.isArray(
        diagnosis.furtherQuestions
      )
    ) {

      diagnosis.furtherQuestions =
        [];
    }

    if (
      !Array.isArray(
        diagnosis.safetyWarnings
      )
    ) {

      diagnosis.safetyWarnings =
        [];
    }

    /* =====================================================
       RETURN RESULT
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

    /* =====================================================
       CONNECTION ERROR
    ===================================================== */

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