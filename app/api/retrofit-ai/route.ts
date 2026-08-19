import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type MachineData = {
  machineName?: string;
  machineBrand?: string;
  machineModel?: string;
  plcBrand?: string;
  plcModel?: string;
  hmiBrand?: string;
  hmiModel?: string;
  driveBrand?: string;
  driveModel?: string;
  servoBrand?: string;
  servoModel?: string;
  productionProcess?: string;
  machineAge?: number;
};

function includesAny(text: string, keywords: string[]) {
  return keywords.some((keyword) =>
    text.toLowerCase().includes(keyword.toLowerCase())
  );
}

function analyzeDrive(symptom: string, machine: MachineData) {
  const text = symptom.toLowerCase();

  if (
    includesAny(text, [
      "20 hz",
      "frequency",
      "speed",
      "hız",
      "rpm",
      "devir",
      "hızlan",
    ])
  ) {
    return {
      fault: "Drive speed reference or frequency limitation",
      probability: 86,

      explanation:
        "The reported speed limitation suggests that the drive may be receiving a restricted speed reference, a maximum-frequency limitation, or an external control command that prevents the motor from reaching the required operating speed.",

      possibleCauses: [
        "Maximum frequency parameter is limiting the output.",
        "PLC or analog speed reference is lower than the required command.",
        "Drive is operating under an external speed limitation.",
        "Motor or drive control mode is incorrectly configured.",
        "Communication reference value may be incorrect.",
      ],

      recommendedChecks: [
        "Check the actual frequency command received by the drive.",
        "Compare PLC speed reference with the drive monitor value.",
        "Check maximum frequency and frequency limit parameters.",
        "Check whether the drive is controlled by analog input, communication or digital reference.",
        "Compare commanded frequency with actual output frequency.",
      ],

      recommendedActions: [
        "Record the current drive parameters before changing anything.",
        "Monitor the PLC speed reference while the machine is running.",
        "Compare the PLC command with the drive frequency monitor.",
        "Verify the drive control mode and reference source.",
      ],
    };
  }

  if (
    includesAny(text, [
      "overcurrent",
      "over current",
      "oc",
      "akım",
      "current",
      "aşırı akım",
    ])
  ) {
    return {
      fault: "Drive overcurrent condition",

      probability: 90,

      explanation:
        "The reported symptom is consistent with an excessive motor current condition. The cause may originate from mechanical load, acceleration settings, motor parameters, wiring or the motor itself.",

      possibleCauses: [
        "Excessive mechanical load.",
        "Acceleration time is too short.",
        "Incorrect motor parameters.",
        "Motor cable or motor insulation problem.",
        "Mechanical blockage or excessive friction.",
        "Drive output stage problem.",
      ],

      recommendedChecks: [
        "Check the drive current during acceleration.",
        "Inspect the motor and mechanical transmission.",
        "Check motor nameplate parameters entered into the drive.",
        "Measure motor insulation and phase resistance when safely isolated.",
        "Check acceleration and torque-related parameters.",
      ],

      recommendedActions: [
        "Do not repeatedly reset the drive without identifying the cause.",
        "Record the alarm code and operating conditions.",
        "Check whether the fault occurs during acceleration, constant speed or stopping.",
      ],
    };
  }

  if (
    includesAny(text, [
      "communication",
      "modbus",
      "ethernet",
      "profinet",
      "profibus",
      "haberleşme",
      "network",
    ])
  ) {
    return {
      fault: "Drive communication or command reference problem",

      probability: 84,

      explanation:
        "The symptom indicates that the drive may not be receiving or interpreting the expected command through the industrial communication network.",

      possibleCauses: [
        "Incorrect communication parameters.",
        "Incorrect drive node or IP configuration.",
        "PLC communication fault.",
        "Incorrect control word or command mapping.",
        "Communication timeout or network interruption.",
      ],

      recommendedChecks: [
        "Check PLC communication diagnostics.",
        "Verify the drive IP address or node configuration.",
        "Check communication status and error counters.",
        "Compare the PLC command word with the drive control word.",
        "Check network cables and connectors.",
      ],

      recommendedActions: [
        "Record the communication configuration before making changes.",
        "Verify the PLC-to-drive communication status.",
        "Check whether the drive can be operated locally.",
      ],
    };
  }

  return {
    fault: "Drive control or configuration abnormality",

    probability: 72,

    explanation:
      "The reported symptom indicates a possible drive control, parameter, reference or electrical condition. Additional field data is required before identifying the exact failure.",

    possibleCauses: [
      "Incorrect drive parameter configuration.",
      "Incorrect control reference.",
      "PLC command or interlock problem.",
      "Motor or electrical connection problem.",
      "Drive hardware failure.",
    ],

    recommendedChecks: [
      "Check active drive alarms.",
      "Check drive operating mode.",
      "Check command and reference sources.",
      "Verify motor and power connections.",
      "Compare actual and commanded values.",
    ],

    recommendedActions: [
      "Record the current drive parameters.",
      "Check alarms and diagnostic information.",
      "Verify PLC commands before replacing the drive.",
    ],
  };
}

function analyzeHMI(symptom: string) {
  const text = symptom.toLowerCase();

  if (
    includesAny(text, [
      "touch",
      "touchscreen",
      "dokunmatik",
      "press",
      "button",
      "buton",
    ])
  ) {
    return {
      fault: "HMI touchscreen or operator interface problem",
      probability: 88,

      explanation:
        "The symptom suggests that the HMI runtime is operating but one or more touch inputs or screen objects are not responding correctly.",

      possibleCauses: [
        "Touchscreen hardware degradation.",
        "HMI runtime or application issue.",
        "Incorrect screen object configuration.",
        "Communication problem between HMI and PLC.",
        "Touch calibration problem.",
      ],

      recommendedChecks: [
        "Check whether all touch areas are affected or only specific buttons.",
        "Check HMI diagnostic information.",
        "Verify PLC communication status.",
        "Test whether physical touch input is detected by the HMI.",
        "Check the HMI application/runtime status.",
      ],

      recommendedActions: [
        "Determine whether the problem affects the complete screen or individual objects.",
        "Check communication diagnostics before modifying the HMI project.",
        "Back up the current HMI application.",
      ],
    };
  }

  if (
    includesAny(text, [
      "communication",
      "haberleşme",
      "plc",
      "connection",
      "bağlantı",
    ])
  ) {
    return {
      fault: "HMI-PLC communication problem",
      probability: 87,

      explanation:
        "The symptom indicates that the HMI may be unable to exchange data correctly with the PLC or another controller.",

      possibleCauses: [
        "Network communication interruption.",
        "Incorrect PLC address.",
        "Incorrect communication driver configuration.",
        "PLC CPU fault or stopped state.",
        "Network cable or switch problem.",
      ],

      recommendedChecks: [
        "Check HMI communication diagnostics.",
        "Check PLC CPU status.",
        "Verify PLC IP address and communication settings.",
        "Check network connection.",
        "Determine whether all tags or only specific tags are affected.",
      ],

      recommendedActions: [
        "Check PLC and HMI diagnostics before restarting the system.",
        "Verify the configured communication path.",
        "Back up the HMI project before making configuration changes.",
      ],
    };
  }

  return {
    fault: "HMI interface or communication abnormality",
    probability: 70,

    explanation:
      "The reported HMI symptom may originate from the operator interface, runtime software or communication between the HMI and PLC.",

    possibleCauses: [
      "HMI application problem.",
      "PLC communication problem.",
      "Incorrect tag configuration.",
      "HMI hardware issue.",
      "Network communication fault.",
    ],

    recommendedChecks: [
      "Check HMI diagnostics.",
      "Check PLC communication status.",
      "Determine whether the issue affects all screens or specific objects.",
      "Check network connection.",
    ],

    recommendedActions: [
      "Back up the HMI application.",
      "Record diagnostic messages before restarting the system.",
    ],
  };
}

function analyzePLC(symptom: string) {
  const text = symptom.toLowerCase();

  if (
    includesAny(text, [
      "stop",
      "stopped",
      "cpu",
      "run",
      "plc",
      "program",
      "cycle",
      "fault",
    ])
  ) {
    return {
      fault: "PLC execution or control logic problem",
      probability: 82,

      explanation:
        "The reported symptom suggests that the PLC may not be executing the expected control sequence or that an interlock, diagnostic condition or input state is preventing the machine sequence.",

      possibleCauses: [
        "PLC CPU diagnostic fault.",
        "Interlock condition.",
        "Incorrect input state.",
        "Program logic condition preventing operation.",
        "Communication-related control dependency.",
      ],

      recommendedChecks: [
        "Check PLC CPU operating state.",
        "Review diagnostic buffer.",
        "Monitor relevant machine inputs and outputs.",
        "Check active interlocks.",
        "Monitor the sequence logic during the fault.",
      ],

      recommendedActions: [
        "Record PLC diagnostic information.",
        "Do not modify the PLC program before creating a backup.",
        "Compare expected and actual I/O states.",
      ],
    };
  }

  return {
    fault: "PLC control logic or I/O abnormality",
    probability: 74,

    explanation:
      "The symptom may be related to PLC logic, I/O state, interlocks or communication with another automation component.",

    possibleCauses: [
      "Incorrect I/O state.",
      "Interlock condition.",
      "PLC logic condition.",
      "Communication fault.",
      "Input or output hardware failure.",
    ],

    recommendedChecks: [
      "Check CPU status.",
      "Review PLC diagnostics.",
      "Monitor relevant inputs and outputs.",
      "Check interlock conditions.",
    ],

    recommendedActions: [
      "Back up the PLC project.",
      "Record the diagnostic state before changing the program.",
    ],
  };
}

function analyzeGeneric(system: string, symptom: string) {
  return {
    fault: `${system.toUpperCase()} abnormal operating condition`,
    probability: 68,

    explanation:
      "The reported symptom indicates an abnormal condition within the selected machine subsystem. The available information is not sufficient to identify a single root cause, so the diagnosis should proceed by eliminating the most likely failure modes.",

    possibleCauses: [
      "Component configuration problem.",
      "Electrical or control signal problem.",
      "Mechanical or process-related condition.",
      "Communication or interlock problem.",
    ],

    recommendedChecks: [
      "Check active alarms and diagnostic information.",
      "Compare commanded and actual values.",
      "Inspect relevant electrical connections.",
      "Check machine interlocks and operating conditions.",
    ],

    recommendedActions: [
      "Record the machine condition before making changes.",
      "Identify when the symptom first appeared.",
      "Avoid replacing components before confirming the failure.",
    ],
  };
}

export async function POST(request: Request) {
  console.log("=================================");
  console.log("AENA RETROFIT AI ENGINE");
  console.log("=================================");

  try {
    const body = await request.json();

    console.log("RECEIVED BODY:", body);

    const symptom = String(body.symptom || "").trim();
    const affectedSystem = String(
      body.affectedSystem || "drive"
    ).toLowerCase();

    const machine: MachineData = body.machine || {};

    if (symptom.length < 5) {
      return NextResponse.json(
        {
          error:
            "Please provide a detailed description of the machine problem.",
        },
        { status: 400 }
      );
    }

    let diagnosis;

    if (affectedSystem === "drive") {
      diagnosis = analyzeDrive(symptom, machine);
    } else if (affectedSystem === "hmi") {
      diagnosis = analyzeHMI(symptom);
    } else if (affectedSystem === "plc") {
      diagnosis = analyzePLC(symptom);
    } else {
      diagnosis = analyzeGeneric(
        affectedSystem,
        symptom
      );
    }

    const machineDescription = [
      machine.machineName,
      machine.machineBrand,
      machine.machineModel,
      machine.productionProcess,
    ]
      .filter(Boolean)
      .join(" ");

    return NextResponse.json({
      summary: `AENA Engineering Engine identified a probable ${diagnosis.fault.toLowerCase()} based on the reported symptom${machineDescription
        ? ` on ${machineDescription}`
        : ""
      }. This is a preliminary engineering assessment and should be verified with field measurements and machine diagnostics.`,

      severity:
        diagnosis.probability >= 85
          ? "high"
          : diagnosis.probability >= 70
          ? "medium"
          : "low",

      diagnoses: [
        {
          id: `aena-${Date.now()}`,
          system: affectedSystem,
          fault: diagnosis.fault,
          probability: diagnosis.probability,

          explanation: diagnosis.explanation,

          evidenceUsed: [
            "Operator symptom description",
            `Affected system: ${affectedSystem}`,
            machine.machineBrand
              ? `Machine brand: ${machine.machineBrand}`
              : "Machine brand not provided",
            machine.driveBrand
              ? `Drive: ${machine.driveBrand} ${machine.driveModel || ""}`
              : "",
          ].filter(Boolean),

          possibleCauses: diagnosis.possibleCauses,

          recommendedChecks:
            diagnosis.recommendedChecks,

          recommendedActions:
            diagnosis.recommendedActions,

          requiredTools: [
            "Digital Multimeter",
            "Electrical Schematics",
            "Manufacturer Diagnostic Software",
          ],

          safetyWarnings: [
            "Electrical measurements must only be performed by qualified personnel.",
            "Isolate dangerous energy sources before physical inspection.",
          ],
        },
      ],

      immediateActions:
        diagnosis.recommendedChecks.slice(0, 3),

      furtherQuestions: [
        "What exact alarm or fault code is displayed?",
        "When did the problem first occur?",
        "Was any component or parameter changed before the fault?",
        "Does the machine behave differently in manual and automatic mode?",
      ],

      safetyWarnings: [
        "This is a preliminary engineering assessment, not a guarantee of root cause.",
        "Follow site Lockout/Tagout procedures before physical inspection.",
      ],

      confidence: diagnosis.probability,
    });
  } catch (error) {
    console.error("AENA RETROFIT AI ENGINE ERROR:", error);

    return NextResponse.json(
      {
        error:
          "Internal server error during Retrofit AI analysis.",
      },
      { status: 500 }
    );
  }
}