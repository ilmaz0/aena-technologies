import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Frontend'den gelen body yapısını doğrula
    const symptom = body.symptom;
    const affectedSystem = body.affectedSystem || "drive";

    if (!symptom || typeof symptom !== "string" || symptom.trim().length < 5) {
      return NextResponse.json(
        {
          error: "Please provide a detailed machine fault description (at least 5 characters).",
        },
        { status: 400 }
      );
    }

    const normalizedSymptom = symptom.toLowerCase();
    const system = affectedSystem.toLowerCase();

    const diagnoses: any[] = [];

    /*
     * ============================================================
     * DRIVE DIAGNOSIS
     * ============================================================
     */
    if (system === "drive" || system === "servo") {
      let probability = 35;

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
          "Drive maximum frequency or speed parameter limitation.",
          "PLC or communication command not reaching the drive correctly."
        );

        recommendedChecks.push(
          "Check the commanded speed or frequency reference.",
          "Compare PLC speed command with actual drive reference.",
          "Check drive maximum frequency and speed limitation parameters.",
          "Check whether the drive is receiving the correct command source."
        );

        recommendedActions.push(
          "Compare commanded frequency and actual motor frequency.",
          "Verify PLC-to-drive communication or analog reference."
        );

        evidenceUsed.push("Operator symptom: speed/frequency related problem");
      }

      if (
        normalizedSymptom.includes("alarm") ||
        normalizedSymptom.includes("fault") ||
        normalizedSymptom.includes("hata") ||
        normalizedSymptom.includes("error")
      ) {
        probability = Math.max(probability, 80);

        possibleCauses.push("Drive protection or alarm condition.");

        recommendedChecks.push(
          "Record the exact drive alarm or fault code.",
          "Check the drive fault history.",
          "Check motor current and operating conditions."
        );

        recommendedActions.push(
          "Do not reset the drive repeatedly before recording the fault code."
        );

        evidenceUsed.push("Operator symptom: alarm/fault reported");
      }

      if (
        normalizedSymptom.includes("motor") ||
        normalizedSymptom.includes("motor çalış") ||
        normalizedSymptom.includes("motor dön")
      ) {
        possibleCauses.push(
          "Motor connection, motor parameters or drive output problem."
        );

        recommendedChecks.push(
          "Check motor cable and terminal connections.",
          "Check motor nominal current and voltage parameters.",
          "Check drive output and motor current."
        );

        evidenceUsed.push("Operator symptom: motor related problem");
      }

      if (possibleCauses.length === 0) {
        possibleCauses.push(
          "Drive parameter mismatch.",
          "Control reference problem.",
          "Motor or mechanical load problem."
        );

        recommendedChecks.push(
          "Read the exact drive alarm status.",
          "Check command and reference signals.",
          "Check motor current and mechanical load."
        );

        recommendedActions.push(
          "Collect drive alarm code and operating parameters before changing settings."
        );
      }

      diagnoses.push({
        id: `diag-${Date.now()}-1`,
        system: system,
        fault: `${system.toUpperCase()} system abnormal operation`,
        probability,
        explanation:
          "The reported symptoms indicate that the drive/servo control, reference signal, parameters, motor or mechanical load should be investigated systematically.",
        evidenceUsed,
        possibleCauses,
        recommendedChecks,
        recommendedActions,
        requiredTools: [
          "Multimeter",
          "Drive keypad/software",
          "Electrical drawings",
        ],
        safetyWarnings: [
          "Disconnect and isolate power before working inside the electrical panel.",
          "Do not modify drive parameters without recording the existing configuration.",
        ],
      });
    }

    /*
     * ============================================================
     * PLC / HMI DIAGNOSIS
     * ============================================================
     */
    if (system === "plc" || system === "hmi" || system === "communication") {
      diagnoses.push({
        id: `diag-${Date.now()}-2`,
        system,
        fault: `${system.toUpperCase()} logic, interface or communication fault`,
        probability: 60,
        explanation:
          "The symptom may originate from control logic, input/output signals, HMI communication or sequence interlocks.",
        evidenceUsed: ["Operator fault description"],
        possibleCauses: [
          "PLC/HMI communication loss or bus error.",
          "Missing digital/analog input signal.",
          "Output command interlocked by unfulfilled safety sequence.",
        ],
        recommendedChecks: [
          "Check PLC diagnostic buffer and HMI alarm history.",
          "Verify fieldbus communication cables and termination resistors.",
          "Monitor relevant digital/analog inputs and outputs in software.",
        ],
        recommendedActions: [
          "Identify the exact sequence step where operation halts.",
        ],
        requiredTools: [
          "PLC/HMI programming software",
          "Electrical drawings",
          "Multimeter",
        ],
        safetyWarnings: [
          "Do not force outputs on a production machine without verifying mechanical safety.",
        ],
      });
    }

    /*
     * ============================================================
     * SENSOR DIAGNOSIS
     * ============================================================
     */
    if (system === "sensor") {
      diagnoses.push({
        id: `diag-${Date.now()}-3`,
        system: "sensor",
        fault: "Sensor signal or sensor installation problem",
        probability: 65,
        explanation:
          "The fault may be caused by sensor failure, wiring, power supply, alignment or incorrect signal reading.",
        evidenceUsed: ["Operator fault description"],
        possibleCauses: [
          "Sensor hardware failure or damaged lens/head.",
          "Sensor wiring loose or broken.",
          "Missing 24 VDC power supply.",
          "Mechanical misalignment.",
        ],
        recommendedChecks: [
          "Check sensor 24 VDC supply voltage.",
          "Verify signal LED state on the sensor and PLC input card.",
          "Check mechanical alignment and target distance.",
        ],
        recommendedActions: [
          "Compare physical sensor activation with the PLC input bit status.",
        ],
        requiredTools: ["Multimeter", "Electrical drawings"],
        safetyWarnings: [
          "Follow lockout/tagout procedures before reaching near moving mechanical parts.",
        ],
      });
    }

    /*
     * ============================================================
     * GENERAL / FALLBACK DIAGNOSIS
     * ============================================================
     */
    if (diagnoses.length === 0) {
      diagnoses.push({
        id: `diag-${Date.now()}-4`,
        system,
        fault: `Abnormal operation in ${system} subsystem`,
        probability: 45,
        explanation:
          "A general anomaly has been detected in the selected system. System checks are required to narrow down the root cause.",
        evidenceUsed: ["Operator fault description"],
        possibleCauses: [
          "Electrical component failure.",
          "Control signal or interlock fault.",
          "Mechanical obstruction or wear.",
        ],
        recommendedChecks: [
          "Determine when the issue started and what changed recently.",
          "Inspect local electrical terminals and mechanical assemblies.",
          "Check system power supplies and control fuses.",
        ],
        recommendedActions: [
          "Inspect relevant electrical schematics and field devices.",
        ],
        requiredTools: ["Electrical drawings", "Multimeter"],
        safetyWarnings: [
          "Ensure energy isolation before opening enclosures or mechanical guards.",
        ],
      });
    }

    const confidence = Math.round(
      diagnoses.reduce((total, diag) => total + diag.probability, 0) /
        diagnoses.length
    );

    return NextResponse.json({
      summary:
        "A preliminary engineering diagnosis has been generated from the available machine information and reported symptoms.",
      severity: confidence >= 75 ? "high" : confidence >= 50 ? "medium" : "low",
      diagnoses,
      immediateActions: diagnoses[0]?.recommendedChecks || [],
      furtherQuestions: [
        "What was the machine doing immediately before the fault?",
        "Was any component replaced or modified before the problem appeared?",
        "Is there an active PLC, HMI or drive alarm code?",
        "Can the machine be operated safely for diagnostic measurements?",
      ],
      safetyWarnings: [
        "This is a preliminary engineering diagnosis and does not replace site safety procedures.",
        "Electrical and mechanical isolation procedures must be followed before physical intervention.",
      ],
      confidence,
    });
  } catch (error) {
    console.error("Retrofit AI API Error:", error);

    return NextResponse.json(
      {
        error: "Retrofit AI could not process the fault report. Server error.",
      },
      { status: 500 }
    );
  }
}