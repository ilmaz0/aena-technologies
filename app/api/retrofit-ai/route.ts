import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const OLLAMA_URL = "http://127.0.0.1:11434/api/generate";
const OLLAMA_MODEL = "gemma3:4b";

const AENA_ENGINEERING_PROMPT = `
You are AENA Retrofit AI, an industrial automation and machine
troubleshooting engineering assistant developed by AENA Technologies.

You reason like an experienced industrial automation,
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
2. Analyze available evidence.
3. Identify the affected subsystem.
4. Separate observed facts from assumptions.
5. Identify possible failure paths.
6. Rank causes by probability.
7. Explain WHY each cause is possible.
8. Provide practical diagnostic checks.
9. Explain expected results.
10. Explain the next decision based on each result.
11. Never declare a component defective without evidence.
12. Ask targeted questions when information is insufficient.

Do not give generic answers such as:

"Check the parameters."
"Check the wiring."
"Check the PLC."
"Check the motor."
"Check the drive."

Instead specify:

- Which parameter
- Which signal
- Which measurement
- Which relationship
- Why it should be checked

Example:

Bad:
"Check the drive parameters."

Better:

"If the PLC sends a 50 Hz reference but the drive monitor remains
near 20 Hz, determine whether the limitation originates from the
PLC reference, communication command, drive frequency limit,
current limitation, torque limitation, or motor/load side."

ENGINEERING REASONING

Always distinguish:

- Symptom
- Evidence
- Hypothesis
- Probability
- Diagnostic test
- Expected result
- Next decision

Never invent:

- Measurements
- Alarm codes
- Parameter values
- Machine states
- Component failures

VISUAL EVIDENCE

If an image is provided:

1. Inspect it carefully.
2. Identify visible displays.
3. Identify alarm messages.
4. Identify indicators.
5. Identify labels.
6. Identify visible wiring/components.
7. Use only information actually visible.
8. Do not invent unreadable values.
9. Separate observation from hypothesis.
10. Explain how the image changes the diagnosis.

AENA STYLE

Write like an experienced industrial field engineer.

Use practical industrial terminology.

Do not sound like a generic AI.

Do not unnecessarily repeat the user's description.

Be technically detailed but understandable.

SAFETY

Electrical measurements, live measurements, high voltage systems,
rotating machinery and stored mechanical, pneumatic or hydraulic
energy are hazardous.

Recommend appropriate isolation and qualified personnel where necessary.

COMMERCIAL PURPOSE

The AI provides a preliminary engineering assessment.

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

Do not claim AENA physically inspected the machine.

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
- Provide 2-4 meaningful diagnoses when possible.
- Diagnoses must represent technically different hypotheses.
- Recommended checks must correspond to the suspected fault.
- Further questions must be specific and useful.
- Never invent machine measurements or alarm codes.
`;

export async function POST(request: Request) {
  console.log("=================================");
  console.log("AENA RETROFIT AI");
  console.log("=================================");

  try {
    /*
     * -------------------------------------------------------
     * READ FORM DATA
     * -------------------------------------------------------
     */

    const formData = await request.formData();

    const symptomValue = formData.get("symptom");

    if (
      typeof symptomValue !== "string" ||
      symptomValue.trim().length < 10
    ) {
      return NextResponse.json(
        {
          error:
            "Please provide a detailed description of the machine problem.",
        },
        { status: 400 }
      );
    }

    const symptom = symptomValue.trim();

    /*
     * -------------------------------------------------------
     * READ FILES
     * -------------------------------------------------------
     */

    const files = formData.getAll("files");

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

    /*
     * -------------------------------------------------------
     * PREPARE IMAGES
     * -------------------------------------------------------
     */

    const images: string[] = [];
    const evidenceDescription: string[] = [];

    for (const item of files) {
      if (!(item instanceof File)) {
        continue;
      }

      evidenceDescription.push(
        `${item.name} | ${item.type || "unknown"} | ${item.size} bytes`
      );

      /*
       * IMAGE
       */

      if (item.type.startsWith("image/")) {
        try {
          const buffer = Buffer.from(
            await item.arrayBuffer()
          );

          const base64 = buffer.toString("base64");

          images.push(base64);

          console.log(
            `Image prepared: ${item.name}`
          );
        } catch (imageError) {
          console.error(
            `Image processing failed: ${item.name}`,
            imageError
          );
        }
      }

      /*
       * VIDEO
       */

      if (item.type.startsWith("video/")) {
        console.log(
          `Video received but not analyzed yet: ${item.name}`
        );
      }

      /*
       * PDF / DOCUMENT
       */

      if (
        item.type === "application/pdf" ||
        item.name.toLowerCase().endsWith(".pdf")
      ) {
        console.log(
          `PDF received but text extraction is not implemented yet: ${item.name}`
        );
      }
    }

    /*
     * -------------------------------------------------------
     * ENGINEERING INPUT
     * -------------------------------------------------------
     */

    const engineeringInput = `
USER REPORTED MACHINE PROBLEM

${symptom}

ATTACHED EVIDENCE

${
  evidenceDescription.length > 0
    ? evidenceDescription.join("\n")
    : "No files attached."
}

IMAGE EVIDENCE COUNT

${images.length}

IMPORTANT

Analyze the symptom together with the available evidence.

If images are supplied, inspect them carefully.

Do not assume the user's suspected subsystem is automatically
the source of the fault.

Separate observed evidence from engineering hypotheses.

If evidence is insufficient, ask targeted questions.

Return ONLY valid JSON.
`;

    const prompt =
      `${AENA_ENGINEERING_PROMPT}\n\n${engineeringInput}`;

    /*
     * -------------------------------------------------------
     * OLLAMA BODY
     * -------------------------------------------------------
     */

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
      model: OLLAMA_MODEL,
      prompt,
      stream: false,
      format: "json",
      options: {
        temperature: 0.2,
        num_ctx: 8192,
      },
    };

    if (images.length > 0) {
      ollamaBody.images = images;

      console.log(
        `Sending ${images.length} image(s) to Ollama.`
      );
    }

    /*
     * -------------------------------------------------------
     * OLLAMA CONNECTION
     * -------------------------------------------------------
     */

    console.log(
      `Connecting to Ollama: ${OLLAMA_URL}`
    );

    const ollamaResponse = await fetch(
      OLLAMA_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ollamaBody),
      }
    );

    console.log(
      "OLLAMA STATUS:",
      ollamaResponse.status
    );

    /*
     * -------------------------------------------------------
     * OLLAMA ERROR
     * -------------------------------------------------------
     */

    if (!ollamaResponse.ok) {
      const errorText =
        await ollamaResponse.text();

      console.error(
        "OLLAMA ERROR:"
      );

      console.error(
        errorText
      );

      throw new Error(
        `Ollama request failed (${ollamaResponse.status}): ${errorText}`
      );
    }

    /*
     * -------------------------------------------------------
     * READ RESPONSE
     * -------------------------------------------------------
     */

    const ollamaData =
      await ollamaResponse.json();

    console.log(
      "OLLAMA RESPONSE RECEIVED"
    );

    const output =
      ollamaData?.response;

    console.log(
      "AI OUTPUT:"
    );

    console.log(
      output
    );

    if (!output) {
      throw new Error(
        "Ollama returned an empty response."
      );
    }

    /*
     * -------------------------------------------------------
     * PARSE JSON
     * -------------------------------------------------------
     */

    let diagnosis: any;

    try {
      diagnosis = JSON.parse(output);
    } catch (parseError) {
      console.error(
        "JSON PARSE ERROR:"
      );

      console.error(
        output
      );

      throw new Error(
        "Ollama returned invalid JSON."
      );
    }

    /*
     * -------------------------------------------------------
     * BASIC VALIDATION
     * -------------------------------------------------------
     */

    if (
      !diagnosis ||
      typeof diagnosis !== "object"
    ) {
      throw new Error(
        "AI returned an invalid diagnosis."
      );
    }

    if (
      typeof diagnosis.summary !== "string"
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
      typeof diagnosis.confidence !== "number"
    ) {
      diagnosis.confidence = 0;
    }

    /*
     * -------------------------------------------------------
     * RETURN RESULT
     * -------------------------------------------------------
     */

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

    let message =
      "Retrofit AI analysis failed.";

    if (error instanceof Error) {
      message = error.message;

      /*
       * Node fetch errors sometimes hide
       * the real connection problem.
       */

      if (
        error.message
          .toLowerCase()
          .includes("fetch failed")
      ) {
        message =
          "Cannot connect to Ollama at 127.0.0.1:11434. " +
          "Make sure Ollama is running and the gemma3:4b model is available.";
      }
    }

    return NextResponse.json(
      {
        error: message,
      },
      {
        status: 500,
      }
    );
  }
}