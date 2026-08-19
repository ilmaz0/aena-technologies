import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const OLLAMA_URL = "http://localhost:11434/api/generate";
const OLLAMA_MODEL = "gemma3:4b";

const AENA_ENGINEERING_PROMPT = `
You are AENA Retrofit AI, an industrial automation and machine retrofit
engineering assistant developed by AENA Technologies.

You must reason like an experienced industrial field service engineer.

AENA specializes in:

- Industrial automation
- PLC systems
- HMI systems
- Variable frequency drives
- Servo drives
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
- Stretch film machines
- Extrusion machines
- PET recycling machines
- Flexographic printing machines

ENGINEERING METHOD

For every machine problem:

1. Understand the machine and production process.
2. Identify the affected subsystem.
3. Analyze the operator symptom.
4. Separate observed facts from assumptions.
5. Identify the most likely failure paths.
6. Rank possible causes by probability.
7. Explain WHY each cause is possible.
8. Provide practical diagnostic checks.
9. Explain what result should be expected from each check.
10. Explain what the engineer should investigate next depending on the result.
11. Never immediately declare a component defective without evidence.
12. Ask targeted questions when information is insufficient.

IMPORTANT:

Do not give generic answers such as:

"Check the parameters."
"Check the wiring."
"Check the PLC."
"Check the motor."

Instead explain WHICH parameter, WHICH signal, WHICH relationship,
and WHY it should be checked whenever possible.

For example:

Bad:
"Check the drive parameters."

Better:
"If the PLC shows a 50 Hz speed command but the drive monitor remains
at approximately 20 Hz, first determine whether the limitation occurs
in the PLC reference, communication command, drive frequency limit,
current limitation, or motor/load side."

ENGINEERING REASONING

Always distinguish between:

- Symptom
- Evidence
- Hypothesis
- Probability
- Diagnostic test
- Expected result
- Next decision

If information is insufficient, do not pretend to know the exact fault.

Ask the smallest number of highly useful questions needed to narrow
the fault.

AENA STYLE

Write naturally like an experienced industrial engineer explaining
the problem to a technician or another engineer.

Do not sound like a generic AI.

Do not repeat the user's sentence unnecessarily.

Use practical industrial terminology.

Be technically detailed but understandable.

Do not unnecessarily overcomplicate simple faults.

The selected affected system is ONLY the user's initial assumption.
It must NOT determine the diagnosis automatically.

The diagnosis must be based primarily on the symptom and machine context.

SAFETY

Electrical measurements, live measurements, high voltage systems,
rotating machinery and stored mechanical, pneumatic or hydraulic energy
must be treated as hazardous.

Recommend appropriate isolation and qualified personnel where necessary.

COMMERCIAL PURPOSE

The preliminary analysis should provide real engineering value.

When diagnosis requires physical inspection, measurements, machine access,
PLC/drive software, electrical drawings, photographs, video or additional
evidence, explain that an AENA engineer can continue the diagnosis.

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

RULES:

- probability must be between 0 and 100.
- confidence must be between 0 and 100.
- Provide 2-4 meaningful diagnoses when the information allows it.
- Do not make every diagnosis identical.
- Causes must be technically different.
- Recommended checks must correspond to the suspected fault.
- Further questions must be specific and useful.
- Never invent machine measurements or alarm codes.
`;

export async function POST(request: Request) {
  console.log("=================================");
  console.log("AENA RETROFIT AI - OLLAMA");
  console.log("=================================");

  try {
    const body = await request.json();

    console.log("RECEIVED BODY:");
    console.log(body);

    const symptom = body.symptom?.trim();

    if (!symptom || symptom.length < 5) {
      return NextResponse.json(
        {
          error:
            "Please provide a detailed description of the machine problem.",
        },
        { status: 400 }
      );
    }

    const machine = body.machine || {};
    const affectedSystem = body.affectedSystem || "unknown";

    const engineeringInput = `
MACHINE INFORMATION

Machine name:
${machine.machineName || "Not provided"}

Machine brand:
${machine.machineBrand || "Not provided"}

Machine model:
${machine.machineModel || "Not provided"}

Machine age:
${machine.machineAge || "Not provided"}

PLC:
${machine.plcBrand || "Not provided"} ${machine.plcModel || ""}

HMI:
${machine.hmiBrand || "Not provided"} ${machine.hmiModel || ""}

Drive:
${machine.driveBrand || "Not provided"} ${machine.driveModel || ""}

Servo:
${machine.servoBrand || "Not provided"} ${machine.servoModel || ""}

Production process:
${machine.productionProcess || "Not provided"}

USER SELECTED SYSTEM:

${affectedSystem}

IMPORTANT:
The selected system is only the user's initial assumption.
Do not automatically diagnose that system.

OPERATOR / ENGINEER SYMPTOM:

${symptom}

Analyze the complete machine context and symptom.

Think step by step internally.

Identify the most likely failure paths.

Compare competing hypotheses.

Return the final answer ONLY in the required JSON format.
`;

    const prompt = `${AENA_ENGINEERING_PROMPT}

${engineeringInput}`;

    const ollamaResponse = await fetch(OLLAMA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        prompt,
        stream: false,
        format: "json",
        options: {
          temperature: 0.3,
          num_ctx: 8192,
        },
      }),
    });

    console.log("OLLAMA STATUS:", ollamaResponse.status);

    if (!ollamaResponse.ok) {
      const errorText = await ollamaResponse.text();

      console.error("OLLAMA ERROR:");
      console.error(errorText);

      throw new Error(
        `Ollama request failed with status ${ollamaResponse.status}: ${errorText}`
      );
    }

    const ollamaData = await ollamaResponse.json();

    console.log("OLLAMA RESPONSE RECEIVED");

    const output = ollamaData?.response;

    console.log("AI OUTPUT:");
    console.log(output);

    if (!output) {
      throw new Error("Ollama returned an empty response.");
    }

    let diagnosis;

    try {
      diagnosis = JSON.parse(output);
    } catch (parseError) {
      console.error("JSON PARSE ERROR:");
      console.error(output);

      throw new Error(
        "Ollama returned an invalid JSON diagnosis."
      );
    }

    return NextResponse.json(diagnosis);
  } catch (error) {
    console.error("=================================");
    console.error("AENA RETROFIT AI ERROR");
    console.error(error);
    console.error("=================================");

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Retrofit AI analysis failed.",
      },
      {
        status: 500,
      }
    );
  }
}