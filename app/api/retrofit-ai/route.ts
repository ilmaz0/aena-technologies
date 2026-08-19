import { NextResponse } from "next/server";
import OpenAI from "openai";

export const dynamic = "force-dynamic";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const AENA_ENGINEERING_PROMPT = `
You are AENA Retrofit AI, an industrial automation and machine retrofit
engineering assistant developed by AENA Technologies.

Your role is NOT to give generic chatbot answers.

You must reason like an experienced field service engineer working on
industrial machinery.

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
and WHY it should be checked whenever the available information allows it.

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

If the available information is insufficient, do not pretend to know
the exact fault.

Instead explain what information is missing and ask the smallest number
of highly useful questions needed to narrow the fault.

AENA STYLE

Write naturally like an experienced industrial engineer explaining the
problem to another engineer or technician.

Do not sound like a generic AI.

Do not repeat the user's sentence unnecessarily.

Use practical field terminology.

Be technically detailed but understandable.

Do not unnecessarily overcomplicate simple faults.

SAFETY

Electrical measurements, live measurements, high voltage systems,
rotating machinery and stored mechanical/pneumatic/hydraulic energy
must be treated as hazardous.

Recommend appropriate isolation and qualified personnel where necessary.

COMMERCIAL PURPOSE

The preliminary analysis should provide real value to the customer.

However, when the diagnosis requires physical inspection, measurements,
machine access, PLC/drive software, electrical drawings or additional
evidence, clearly explain that an AENA engineer can continue the diagnosis.

The objective is to move the customer naturally toward contacting
AENA Technologies for professional engineering support.

DO NOT claim that AENA has physically inspected the machine.

DO NOT claim certainty without sufficient evidence.
`;

export async function POST(request: Request) {
  console.log("=================================");
  console.log("AENA RETROFIT AI");
  console.log("=================================");

  try {
    const body = await request.json();

    console.log("RECEIVED BODY:", body);

    if (!process.env.OPENAI_API_KEY) {
      console.error("OPENAI_API_KEY is missing.");

      return NextResponse.json(
        {
          error: "OPENAI_API_KEY is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const symptom = body.symptom?.trim();

    if (!symptom || symptom.length < 5) {
      return NextResponse.json(
        {
          error:
            "Please provide a detailed description of the machine problem.",
        },
        {
          status: 400,
        }
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

AFFECTED SYSTEM

${affectedSystem}

OPERATOR / ENGINEER SYMPTOM

${symptom}

Analyze this machine problem as an industrial field engineer.

Do not assume that the selected affected system is definitely the cause.
It is only the user's initial assumption.

Return a detailed preliminary engineering diagnosis.
`;

    const response = await openai.responses.create({
      model: "gpt-5.6-luna",

      input: [
        {
          role: "system",
          content: AENA_ENGINEERING_PROMPT,
        },
        {
          role: "user",
          content: engineeringInput,
        },
      ],

      text: {
        format: {
          type: "json_schema",
          name: "retrofit_ai_diagnosis",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,
            properties: {
              summary: {
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

              diagnoses: {
                type: "array",
                items: {
                  type: "object",
                  additionalProperties: false,
                  properties: {
                    id: {
                      type: "string",
                    },

                    system: {
                      type: "string",
                    },

                    fault: {
                      type: "string",
                    },

                    probability: {
                      type: "number",
                    },

                    explanation: {
                      type: "string",
                    },

                    evidenceUsed: {
                      type: "array",
                      items: {
                        type: "string",
                      },
                    },

                    possibleCauses: {
                      type: "array",
                      items: {
                        type: "string",
                      },
                    },

                    recommendedChecks: {
                      type: "array",
                      items: {
                        type: "string",
                      },
                    },

                    recommendedActions: {
                      type: "array",
                      items: {
                        type: "string",
                      },
                    },

                    requiredTools: {
                      type: "array",
                      items: {
                        type: "string",
                      },
                    },

                    safetyWarnings: {
                      type: "array",
                      items: {
                        type: "string",
                      },
                    },
                  },

                  required: [
                    "id",
                    "system",
                    "fault",
                    "probability",
                    "explanation",
                    "evidenceUsed",
                    "possibleCauses",
                    "recommendedChecks",
                    "recommendedActions",
                    "requiredTools",
                    "safetyWarnings",
                  ],
                },
              },

              immediateActions: {
                type: "array",
                items: {
                  type: "string",
                },
              },

              furtherQuestions: {
                type: "array",
                items: {
                  type: "string",
                },
              },

              safetyWarnings: {
                type: "array",
                items: {
                  type: "string",
                },
              },

              confidence: {
                type: "number",
              },
            },

            required: [
              "summary",
              "severity",
              "diagnoses",
              "immediateActions",
              "furtherQuestions",
              "safetyWarnings",
              "confidence",
            ],
          },
        },
      },
    });

    console.log("OPENAI RESPONSE RECEIVED");

    const output = response.output_text;

    console.log("AI OUTPUT:");
    console.log(output);

    if (!output) {
      throw new Error("AI returned an empty response.");
    }

    const diagnosis = JSON.parse(output);

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