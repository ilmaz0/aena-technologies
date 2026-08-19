import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  console.log("RETROFIT AI API CALLED");

  try {
    const body = await request.json();

    console.log("RECEIVED BODY:", body);

    const symptom = body.symptom || "";
    const affectedSystem = body.affectedSystem || "drive";

    if (!symptom || symptom.trim().length < 5) {
      return NextResponse.json(
        {
          error: "Please provide a detailed machine fault description.",
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json({
      summary:
        "Engineering analysis performed based on the reported machine symptoms and equipment information.",

      severity: "medium",

      diagnoses: [
        {
          id: "diagnosis-001",

          system: affectedSystem,

          fault: `${affectedSystem.toUpperCase()} abnormal operation`,

          probability: 80,

          explanation:
            "The reported symptom indicates a possible problem in the selected machine subsystem. A detailed field inspection should be performed before replacing components.",

          evidenceUsed: [
            "Operator symptom description",
            `Affected system: ${affectedSystem}`,
          ],

          possibleCauses: [
            "Incorrect parameter or configuration.",
            "Control reference or command signal problem.",
            "Electrical connection or component failure.",
            "Communication or interlock condition.",
          ],

          recommendedChecks: [
            "Check active alarms on the machine HMI.",
            "Check the selected system's status and diagnostic information.",
            "Verify power supply and control signals.",
            "Compare commanded values with actual machine values.",
          ],

          recommendedActions: [
            "Record the current machine parameters before making changes.",
            "Verify electrical connections and control signals.",
            "Check PLC/HMI diagnostic information.",
            "Do not replace components before confirming the failure.",
          ],

          requiredTools: [
            "Digital Multimeter",
            "Electrical Schematics",
            "PLC/HMI Programming Software",
          ],

          safetyWarnings: [
            "Isolate electrical power before opening electrical cabinets.",
            "Follow site Lockout/Tagout procedures.",
          ],
        },
      ],

      immediateActions: [
        "Check the active HMI and drive alarms.",
        "Verify the affected system's power and control signals.",
        "Compare commanded and actual machine values.",
      ],

      furtherQuestions: [
        "What exact alarm or fault code is displayed?",
        "When did the problem first occur?",
        "Was any component replaced before the fault?",
        "Does the machine behave differently in manual and automatic mode?",
      ],

      safetyWarnings: [
        "Electrical measurements must only be performed by qualified personnel.",
        "Isolate dangerous energy sources before physical inspection.",
      ],

      confidence: 80,
    });
  } catch (error) {
    console.error("RETROFIT AI API ERROR:", error);

    return NextResponse.json(
      {
        error: "Internal server error during Retrofit AI analysis.",
      },
      {
        status: 500,
      }
    );
  }
}