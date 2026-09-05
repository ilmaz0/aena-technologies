import type {
  Hypothesis,
} from "./types";


/* =========================================================
   MOTOR NOT RUNNING
   AENA INITIAL DIAGNOSTIC HYPOTHESES
========================================================= */

export const MOTOR_NOT_RUNNING_HYPOTHESES: Hypothesis[] = [

  /* =======================================================
     1. PLC / CONTROL COMMAND
  ======================================================= */

  {
    id: "plc_start_command",

    label:
      "PLC start, enable veya interlock komutu problemi",

    domain: "plc",

    probability: 15,

    supportingEvidence: [],

    contradictingEvidence: [],

    requiredTests: [
      "PLC start command",
      "Drive enable signal",
      "PLC interlock status",
      "HMI run command",
    ],

    status: "active",
  },


  /* =======================================================
     2. DRIVE FAULT / INHIBIT
  ======================================================= */

  {
    id: "drive_fault",

    label:
      "Sürücü fault, inhibit veya protection durumu",

    domain: "drive",

    probability: 15,

    supportingEvidence: [],

    contradictingEvidence: [],

    requiredTests: [
      "Drive fault code",
      "Drive RUN status",
      "Drive enable status",
      "Drive alarm history",
      "Drive current limit",
    ],

    status: "active",
  },


  /* =======================================================
     3. DRIVE OUTPUT
  ======================================================= */

  {
    id: "drive_output",

    label:
      "Sürücü motor çıkışı veya güç katı problemi",

    domain: "drive",

    probability: 15,

    supportingEvidence: [],

    contradictingEvidence: [],

    requiredTests: [
      "Motor output voltage",
      "Three-phase output balance",
      "Drive output current",
      "Drive switching behavior",
    ],

    status: "active",
  },


  /* =======================================================
     4. MOTOR ELECTRICAL
  ======================================================= */

  {
    id: "motor_electrical",

    label:
      "Motor sargıları, izolasyon veya elektriksel motor problemi",

    domain: "electrical",

    probability: 15,

    supportingEvidence: [],

    contradictingEvidence: [],

    requiredTests: [
      "Phase resistance",
      "Winding balance",
      "Insulation resistance",
      "Motor current",
      "Motor terminal condition",
    ],

    status: "active",
  },


  /* =======================================================
     5. MOTOR CONNECTION
  ======================================================= */

  {
    id: "motor_connection",

    label:
      "Motor kablosu, klemens, kontaktör veya bağlantı problemi",

    domain: "electrical",

    probability: 10,

    supportingEvidence: [],

    contradictingEvidence: [],

    requiredTests: [
      "Motor terminal connections",
      "Cable continuity",
      "Terminal condition",
      "Contactor condition",
    ],

    status: "active",
  },


  /* =======================================================
     6. MECHANICAL LOAD
  ======================================================= */

  {
    id: "mechanical_load",

    label:
      "Mekanik sıkışma, yüksek direnç veya yük yolu problemi",

    domain: "mechanical",

    probability: 15,

    supportingEvidence: [],

    contradictingEvidence: [],

    requiredTests: [
      "Motor shaft rotation",
      "Mechanical resistance",
      "Coupling condition",
      "Bearing condition",
      "Gearbox condition",
    ],

    status: "active",
  },


  /* =======================================================
     7. PROCESS LOAD
  ======================================================= */

  {
    id: "process_load",

    label:
      "Proses koşullarının motoru aşırı yüklemesi",

    domain: "process",

    probability: 10,

    supportingEvidence: [],

    contradictingEvidence: [],

    requiredTests: [
      "Production rate",
      "Process pressure",
      "Material condition",
      "Motor current",
      "Operating temperature",
    ],

    status: "active",
  },


  /* =======================================================
     8. SENSOR / FEEDBACK
  ======================================================= */

  {
    id: "feedback_problem",

    label:
      "Motor hız geri beslemesi veya sensör problemi",

    domain: "sensor",

    probability: 5,

    supportingEvidence: [],

    contradictingEvidence: [],

    requiredTests: [
      "Encoder feedback",
      "Speed feedback",
      "Sensor state",
      "Actual speed",
    ],

    status: "active",
  },

];


/* =========================================================
   HELPERS
========================================================= */

/**
 * Creates a fresh copy of the initial hypothesis set.
 *
 * The diagnostic engine will modify probability,
 * evidence and status during the diagnosis.
 *
 * The original definitions must remain unchanged.
 */

export function createInitialMotorHypotheses(): Hypothesis[] {

  return MOTOR_NOT_RUNNING_HYPOTHESES.map(
    (hypothesis) => ({
      ...hypothesis,

      supportingEvidence: [
        ...hypothesis.supportingEvidence,
      ],

      contradictingEvidence: [
        ...hypothesis.contradictingEvidence,
      ],

      requiredTests: [
        ...hypothesis.requiredTests,
      ],
    })
  );
}