import { NextResponse } from "next/server";
import type {
  Diagnosis as AIDiagnosis,
  RetrofitAIResponse,
  MachineSystem,
  FaultSeverity,
} from "@/app/retrofit-ai/type";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const symptom: string = body.symptom || "";
    const rawSystem: string = body.affectedSystem || "drive";

    if (!symptom || symptom.trim().length < 5) {
      return NextResponse.json(
        { error: "Please provide a detailed machine fault description." },
        { status: 400 }
      );
    }

    const validSystems: MachineSystem[] = [
      "plc",
      "hmi",
      "drive",
      "servo",
      "sensor",
      "motor",
      "electrical-panel",
      "communication",
      "mechanical",
      "pneumatic",
      "hydraulic",
      "process",
    ];

    const affectedSystem: MachineSystem = validSystems.includes(
      rawSystem as MachineSystem
    )
      ? (rawSystem as MachineSystem)
      : "drive";

    const normalizedSymptom = symptom.toLowerCase();
    const diagnoses: AIDiagnosis[] = [];

    /*
     * DRIVE DIAGNOSIS
     */
    if (affectedSystem === "drive" || affectedSystem === "servo") {
      let probability = 40;
      const possibleCauses: string[] = [];
      const recommendedChecks: string[] = [];
      const recommendedActions: string[] = [];
      const evidenceUsed: string[] = [];

      if (
        normalizedSymptom.includes("speed") ||
        normalizedSymptom.includes("hız") ||
        normalizedSymptom.includes("frequency") ||
        normalizedSymptom.includes("frekans")
      ) {
        probability = 75;
        possibleCauses.push(
          "Speed reference limitation or incorrect speed reference.",
          "Drive maximum frequency limit reached.",
          "PLC communication reference mismatch."
        );
        recommendedChecks.push(
          "Check the commanded speed or frequency reference.",
          "Compare PLC speed command with actual drive reference."
        );
        recommendedActions.push(
          "Verify PLC-to-drive communication analog or bus reference."
        );
        evidenceUsed.push("Symptom indicates speed/frequency control issue");
      } else {
        possibleCauses.push(
          "Drive parameter mismatch.",
          "Control reference problem."
        );
        recommendedChecks.push(
          "Read active drive alarms.",
          "Check power terminals and command signals."
        );
        recommendedActions.push("Record parameter backup before resetting.");
      }

      diagnoses.push({
        id: crypto.randomUUID(),
        system: affectedSystem,
        fault: `${affectedSystem.toUpperCase()} abnormal operation`,
        probability,
        explanation:
          "Symptoms indicate an issue within the drive/servo power or control reference stage.",
        evidenceUsed,
        possibleCauses,
        recommendedChecks,
        recommendedActions,
        requiredTools: ["Multimeter", "Drive Software / Keypad"],
        safetyWarnings: [
          "Isolate high-voltage power before opening drive enclosure.",
        ],
      });
    }

    /*
     * PLC / HMI / COMMUNICATION DIAGNOSIS
     */
    if (
      affectedSystem === "plc" ||
      affectedSystem === "hmi" ||
      affectedSystem === "communication"
    ) {
      diagnoses.push({
        id: crypto.randomUUID(),
        system: affectedSystem,
        fault: `${affectedSystem.toUpperCase()} logic or communication interlock`,
        probability: 65,
        explanation:
          "The fault points toward control logic state, missing sensor input, or fieldbus interruption.",
        evidenceUsed: ["Operator description"],
        possibleCauses: [
          "Fieldbus communication loss.",
          "Missing safety interlock input signal.",
        ],
        recommendedChecks: [
          "Check PLC diagnostic buffer.",
          "Verify communication bus status and termination.",
        ],
        recommendedActions: [
          "Check the exact step in the machine automatic sequence.",
        ],
        requiredTools: ["PLC/HMI Programming Tool", "Electrical Schematics"],
        safetyWarnings: [
          "Do not force outputs while machine is under automatic mode.",
        ],
      });
    }

    /*
     * FALLBACK / GENERAL DIAGNOSIS
     */
    if (diagnoses.length === 0) {
      diagnoses.push({
        id: crypto.randomUUID(),
        system: affectedSystem,
        fault: `System fault in ${affectedSystem}`,
        probability: 50,
        explanation:
          "Preliminary analysis suggests checking input signals, power distribution, and mechanical interlocks.",
        evidenceUsed: ["Operator symptom input"],
        possibleCauses: [
          "Electrical component failure.",
          "Interlock condition not satisfied.",
        ],
        recommendedChecks: [
          "Verify system power supplies.",
          "Check active safety relays and circuit breakers.",
        ],
        recommendedActions: [
          "Inspect local electrical cabinet for tripped breakers.",
        ],
        requiredTools: ["Multimeter", "Electrical Drawings"],
        safetyWarnings: ["Follow site Lockout/Tagout (LOTO) protocols."],
      });
    }

    const confidence = Math.round(
      diagnoses.reduce((acc, curr) => acc + curr.probability, 0) /
        diagnoses.length
    );

    const severity: FaultSeverity =
      confidence >= 75 ? "high" : confidence >= 50 ? "medium" : "low";

    const responseData: RetrofitAIResponse = {
      summary:
        "Engineering analysis performed based on reported symptoms and equipment setup.",
      severity,
      diagnoses,
      immediateActions: diagnoses[0]?.recommendedChecks || [],
      furtherQuestions: [
        "What was the machine sequence state when the fault occurred?",
        "Are there any active fault codes displayed on the HMI or drive display?",
      ],
      safetyWarnings: [
        "Ensure power isolation before touching physical electrical terminals.",
      ],
      confidence,
    };

    return NextResponse.json(responseData);
  } catch (err) {
    console.error("API Route Error:", err);
    return NextResponse.json(
      { error: "Internal server error during analysis." },
      { status: 500 }
    );
  }
}