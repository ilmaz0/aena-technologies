import { NextResponse } from "next/server";

import type {
  FaultReport,
  Diagnosis,
  RetrofitAIResponse,
  MachineSystem,
} from "@/app/retrofit-ai/type";

export async function POST(request: Request) {
  try {
    const report: FaultReport = await request.json();

    if (!report.symptom || report.symptom.trim().length < 5) {
      return NextResponse.json(
        {
          error: "Please provide a detailed machine fault description.",
        },
        { status: 400 }
      );
    }

    const system: MachineSystem =
      report.affectedSystem || "drive";

    const symptom = report.symptom.toLowerCase();

    const diagnoses: Diagnosis[] = [];

    /*
     * ============================================================
     * DRIVE DIAGNOSIS
     * ============================================================
     */

    if (system === "drive") {
      let probability = 35;

      const possibleCauses: string[] = [];
      const recommendedChecks: string[] = [];
      const recommendedActions: string[] = [];
      const evidenceUsed: string[] = [];

      if (
        symptom.includes("speed") ||
        symptom.includes("hız") ||
        symptom.includes("frequency") ||
        symptom.includes("frekans")
      ) {
        probability = 75;

        possibleCauses.push(
          "Speed reference limitation or incorrect speed reference."
        );

        possibleCauses.push(
          "Drive maximum frequency or speed parameter limitation."
        );

        possibleCauses.push(
          "PLC or communication command not reaching the drive correctly."
        );

        recommendedChecks.push(
          "Check the commanded speed or frequency reference."
        );

        recommendedChecks.push(
          "Compare PLC speed command with actual drive reference."
        );

        recommendedChecks.push(
          "Check drive maximum frequency and speed limitation parameters."
        );

        recommendedChecks.push(
          "Check whether the drive is receiving the correct command source."
        );

        recommendedActions.push(
          "Compare commanded frequency and actual motor frequency."
        );

        recommendedActions.push(
          "Verify PLC-to-drive communication or analog reference."
        );

        evidenceUsed.push("Operator symptom: speed/frequency related problem");
      }

      if (
        symptom.includes("alarm") ||
        symptom.includes("fault") ||
        symptom.includes("hata") ||
        symptom.includes("error")
      ) {
        probability = Math.max(probability, 80);

        possibleCauses.push(
          "Drive protection or alarm condition."
        );

        recommendedChecks.push(
          "Record the exact drive alarm or fault code."
        );

        recommendedChecks.push(
          "Check the drive fault history."
        );

        recommendedChecks.push(
          "Check motor current and operating conditions."
        );

        recommendedActions.push(
          "Do not reset the drive repeatedly before recording the fault code."
        );

        evidenceUsed.push("Operator symptom: alarm/fault reported");
      }

      if (
        symptom.includes("motor") ||
        symptom.includes("motor çalış") ||
        symptom.includes("motor dön")
      ) {
        possibleCauses.push(
          "Motor connection, motor parameters or drive output problem."
        );

        recommendedChecks.push(
          "Check motor cable and terminal connections."
        );

        recommendedChecks.push(
          "Check motor nominal current and voltage parameters."
        );

        recommendedChecks.push(
          "Check drive output and motor current."
        );

        evidenceUsed.push("Operator symptom: motor related problem");
      }

      if (possibleCauses.length === 0) {
        possibleCauses.push(
          "Drive parameter mismatch."
        );

        possibleCauses.push(
          "Control reference problem."
        );

        possibleCauses.push(
          "Motor or mechanical load problem."
        );

        recommendedChecks.push(
          "Read the exact drive alarm status."
        );

        recommendedChecks.push(
          "Check command and reference signals."
        );

        recommendedChecks.push(
          "Check motor current and mechanical load."
        );

        recommendedActions.push(
          "Collect drive alarm code and operating parameters before changing settings."
        );
      }

      diagnoses.push({
        id: crypto.randomUUID(),
        system: "drive",
        fault: "Drive system abnormal operation",
        probability,
        explanation:
          "The reported symptoms indicate that the drive control, reference signal, parameters, motor or mechanical load should be investigated systematically.",
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
     * PLC DIAGNOSIS
     * ============================================================
     */

    if (system === "plc") {
      diagnoses.push({
        id: crypto.randomUUID(),
        system: "plc",
        fault: "PLC control logic or I/O related fault",
        probability: 55,
        explanation:
          "The symptom may originate from PLC logic, input/output signals, communication or machine sequence conditions.",
        evidenceUsed: [
          "Operator fault description",
        ],
        possibleCauses: [
          "PLC input signal missing.",
          "PLC output command not being generated.",
          "Sequence condition not satisfied.",
          "Communication problem with a field device.",
        ],
        recommendedChecks: [
          "Check PLC diagnostic buffer.",
          "Monitor relevant input signals.",
          "Monitor relevant output commands.",
          "Check PLC communication diagnostics.",
        ],
        recommendedActions: [
          "Identify the first abnormal signal in the machine sequence.",
        ],
        requiredTools: [
          "PLC programming software",
          "Electrical drawings",
          "Multimeter",
        ],
        safetyWarnings: [
          "Do not force PLC outputs on a running machine without understanding the machine sequence.",
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
        id: crypto.randomUUID(),
        system: "sensor",
        fault: "Sensor signal or sensor installation problem",
        probability: 60,
        explanation:
          "The fault may be caused by sensor failure, wiring, power supply, alignment or incorrect PLC signal interpretation.",
        evidenceUsed: [
          "Operator fault description",
        ],
        possibleCauses: [
          "Sensor failure.",
          "Sensor wiring problem.",
          "Missing 24 VDC supply.",
          "Incorrect sensor alignment.",
          "PLC input interpretation problem.",
        ],
        recommendedChecks: [
          "Check sensor supply voltage.",
          "Check sensor output signal.",
          "Check sensor wiring.",
          "Check sensor alignment and mechanical position.",
          "Monitor the corresponding PLC input.",
        ],
        recommendedActions: [
          "Compare physical sensor state with the PLC input state.",
        ],
        requiredTools: [
          "Multimeter",
          "Electrical drawings",
        ],
        safetyWarnings: [
          "Follow machine safety procedures before accessing moving equipment.",
        ],
      });
    }

    /*
     * ============================================================
     * MOTOR DIAGNOSIS
     * ============================================================
     */

    if (system === "motor") {
      diagnoses.push({
        id: crypto.randomUUID(),
        system: "motor",
        fault: "Motor, connection or load related problem",
        probability: 50,
        explanation:
          "Motor problems can originate from electrical supply, motor winding condition, connection, drive output or mechanical loading.",
        evidenceUsed: [
          "Operator fault description",
        ],
        possibleCauses: [
          "Motor cable problem.",
          "Motor winding problem.",
          "Incorrect motor parameters.",
          "Mechanical overload.",
          "Drive output problem.",
        ],
        recommendedChecks: [
          "Measure motor phase voltages.",
          "Check motor current.",
          "Check motor cable connections.",
          "Check mechanical load.",
          "Compare motor parameters with the motor nameplate.",
        ],
        recommendedActions: [
          "Separate electrical and mechanical causes before replacing components.",
        ],
        requiredTools: [
          "Multimeter",
          "Clamp meter",
          "Motor documentation",
        ],
        safetyWarnings: [
          "Isolate electrical power before testing motor terminals.",
        ],
      });
    }

    /*
     * ============================================================
     * GENERAL DIAGNOSIS
     * ============================================================
     */

    if (diagnoses.length === 0) {
      diagnoses.push({
        id: crypto.randomUUID(),
        system,
        fault: "General machine system fault",
        probability: 35,
        explanation:
          "There is not enough evidence to determine a specific root cause. The system requires additional machine and field information.",
        evidenceUsed: [
          "Operator fault description",
        ],
        possibleCauses: [
          "Electrical fault.",
          "Control system fault.",
          "Component failure.",
          "Communication problem.",
          "Mechanical problem.",
        ],
        recommendedChecks: [
          "Identify when the problem first appeared.",
          "Determine what changed immediately before the failure.",
          "Check machine alarms and diagnostic history.",
          "Identify the first abnormal signal or component.",
        ],
        recommendedActions: [
          "Collect additional machine evidence before replacing components.",
        ],
        requiredTools: [
          "Electrical drawings",
          "Multimeter",
        ],
        safetyWarnings: [
          "Follow machine safety procedures before troubleshooting.",
        ],
      });
    }

    const confidence = Math.round(
      diagnoses.reduce(
        (total, diagnosis) => total + diagnosis.probability,
        0
      ) / diagnoses.length
    );

    const response: RetrofitAIResponse = {
      summary:
        "A preliminary engineering diagnosis has been generated from the available machine information and reported symptoms.",
      severity:
        report.severity ||
        (confidence >= 75
          ? "high"
          : confidence >= 50
          ? "medium"
          : "low"),
      diagnoses,
      immediateActions:
        diagnoses[0]?.recommendedChecks || [],
      furtherQuestions: [
        "What was the machine doing immediately before the fault?",
        "Was any component replaced or modified before the problem appeared?",
        "Is there an active PLC, HMI or drive alarm?",
        "What is the exact alarm or fault code?",
        "Can the machine be operated safely for diagnostic measurements?",
      ],
      safetyWarnings: [
        "This is a preliminary engineering diagnosis and does not replace site safety procedures.",
        "Electrical and mechanical isolation procedures must be followed before physical intervention.",
      ],
      confidence,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Retrofit AI error:", error);

    return NextResponse.json(
      {
        error: "Retrofit AI could not process the fault report.",
      },
      { status: 500 }
    );
  }
}