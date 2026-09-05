import {
  DiagnosticDomain,
  Evidence,
  Hypothesis,
} from "./types";


/* =========================================================
   DIAGNOSTIC RULE
========================================================= */

export type DiagnosticRule = {
  id: string;

  evidenceKey: string;

  value: string;

  description: string;

  effects: {
    hypothesisId: string;
    score: number;
  }[];

  domains?: DiagnosticDomain[];
};


/* =========================================================
   MOTOR NOT RUNNING
   INITIAL DIAGNOSTIC RULES
========================================================= */

export const MOTOR_NOT_RUNNING_RULES: DiagnosticRule[] = [

  /* =======================================================
     PLC OUTPUT
  ======================================================= */

  {
    id: "plc_output_present",

    evidenceKey: "plc_output",

    value: "on",

    description:
      "PLC ilgili fiziksel çıkışı aktif ediyor.",

    effects: [
      {
        hypothesisId: "plc_start_command",
        score: -15,
      },

      {
        hypothesisId: "drive_fault",
        score: 10,
      },

      {
        hypothesisId: "drive_output",
        score: 10,
      },
    ],

    domains: [
      "plc",
      "drive",
    ],
  },


  {
    id: "plc_output_absent",

    evidenceKey: "plc_output",

    value: "off",

    description:
      "PLC ilgili fiziksel çıkışı aktif etmiyor.",

    effects: [
      {
        hypothesisId: "plc_start_command",
        score: 45,
      },

      {
        hypothesisId: "drive_fault",
        score: -15,
      },

      {
        hypothesisId: "drive_output",
        score: -20,
      },

      {
        hypothesisId: "motor_electrical",
        score: -15,
      },

      {
        hypothesisId: "mechanical_load",
        score: -15,
      },
    ],

    domains: [
      "plc",
    ],
  },


  /* =======================================================
     DRIVE
  ======================================================= */

  {
    id: "drive_fault_present",

    evidenceKey: "drive_fault",

    value: "yes",

    description:
      "Sürücü aktif bir fault veya alarm bildiriyor.",

    effects: [
      {
        hypothesisId: "drive_fault",
        score: 35,
      },

      {
        hypothesisId: "plc_start_command",
        score: -10,
      },

      {
        hypothesisId: "mechanical_load",
        score: -5,
      },
    ],

    domains: [
      "drive",
      "electrical",
    ],
  },


  {
    id: "drive_fault_absent",

    evidenceKey: "drive_fault",

    value: "no",

    description:
      "Sürücü herhangi bir fault bildirmiyor.",

    effects: [
      {
        hypothesisId: "drive_fault",
        score: -20,
      },

      {
        hypothesisId: "motor_electrical",
        score: 5,
      },

      {
        hypothesisId: "mechanical_load",
        score: 5,
      },
    ],

    domains: [
      "drive",
    ],
  },


  /* =======================================================
     DRIVE RUN
  ======================================================= */

  {
    id: "drive_run_present",

    evidenceKey: "drive_run",

    value: "yes",

    description:
      "Sürücü RUN veya ENABLE durumuna geçiyor.",

    effects: [
      {
        hypothesisId: "plc_start_command",
        score: -15,
      },

      {
        hypothesisId: "drive_fault",
        score: -10,
      },

      {
        hypothesisId: "drive_output",
        score: 10,
      },

      {
        hypothesisId: "motor_electrical",
        score: 5,
      },
    ],

    domains: [
      "drive",
      "plc",
    ],
  },


  {
    id: "drive_run_absent",

    evidenceKey: "drive_run",

    value: "no",

    description:
      "Sürücü RUN veya ENABLE durumuna geçmiyor.",

    effects: [
      {
        hypothesisId: "plc_start_command",
        score: 25,
      },

      {
        hypothesisId: "drive_fault",
        score: 20,
      },

      {
        hypothesisId: "drive_output",
        score: -15,
      },

      {
        hypothesisId: "mechanical_load",
        score: -10,
      },
    ],

    domains: [
      "drive",
      "plc",
    ],
  },


  /* =======================================================
     MOTOR OUTPUT VOLTAGE
  ======================================================= */

  {
    id: "motor_output_voltage_present",

    evidenceKey:
      "motor_output_voltage",

    value: "yes",

    description:
      "Sürücü motor çıkışında üç faz gerilimi mevcut.",

    effects: [
      {
        hypothesisId: "drive_output",
        score: -20,
      },

      {
        hypothesisId: "motor_electrical",
        score: 15,
      },

      {
        hypothesisId: "motor_connection",
        score: 10,
      },

      {
        hypothesisId: "mechanical_load",
        score: 10,
      },
    ],

    domains: [
      "drive",
      "electrical",
    ],
  },


  {
    id: "motor_output_voltage_absent",

    evidenceKey:
      "motor_output_voltage",

    value: "no",

    description:
      "Sürücü RUN durumunda olmasına rağmen motor çıkışında gerilim görülmüyor.",

    effects: [
      {
        hypothesisId: "drive_output",
        score: 40,
      },

      {
        hypothesisId: "motor_electrical",
        score: -10,
      },

      {
        hypothesisId: "mechanical_load",
        score: -10,
      },
    ],

    domains: [
      "drive",
      "electrical",
    ],
  },


  /* =======================================================
     MOTOR SHAFT
  ======================================================= */

  {
    id: "motor_shaft_hard",

    evidenceKey:
      "motor_shaft",

    value: "hard",

    description:
      "Motor mili enerjisiz durumda elle çevrildiğinde belirgin mekanik direnç hissediliyor.",

    effects: [
      {
        hypothesisId: "mechanical_load",
        score: 40,
      },

      {
        hypothesisId: "motor_electrical",
        score: -5,
      },

      {
        hypothesisId: "drive_output",
        score: -5,
      },
    ],

    domains: [
      "mechanical",
    ],
  },


  {
    id: "motor_shaft_free",

    evidenceKey:
      "motor_shaft",

    value: "free",

    description:
      "Motor mili enerjisiz durumda mekanik olarak serbest dönüyor.",

    effects: [
      {
        hypothesisId: "mechanical_load",
        score: -25,
      },

      {
        hypothesisId: "motor_electrical",
        score: 10,
      },

      {
        hypothesisId: "drive_output",
        score: 10,
      },
    ],

    domains: [
      "mechanical",
    ],
  },


  /* =======================================================
     MOTOR CURRENT
  ======================================================= */

  {
    id: "motor_current_high",

    evidenceKey:
      "motor_current",

    value: "high",

    description:
      "Motor çalışmaya çalışırken akım normal işletme değerinin üzerine çıkıyor.",

    effects: [
      {
        hypothesisId: "mechanical_load",
        score: 25,
      },

      {
        hypothesisId: "process_load",
        score: 25,
      },

      {
        hypothesisId: "motor_electrical",
        score: 15,
      },

      {
        hypothesisId: "drive_fault",
        score: 5,
      },
    ],

    domains: [
      "electrical",
      "drive",
      "mechanical",
      "process",
    ],
  },


  {
    id: "motor_current_low",

    evidenceKey:
      "motor_current",

    value: "low",

    description:
      "Motor çalışmaya çalışırken belirgin bir akım yükselmesi görülmüyor.",

    effects: [
      {
        hypothesisId: "mechanical_load",
        score: -15,
      },

      {
        hypothesisId: "process_load",
        score: -10,
      },

      {
        hypothesisId: "motor_electrical",
        score: 5,
      },
    ],

    domains: [
      "electrical",
      "drive",
    ],
  },


  /* =======================================================
     PRODUCTION CONDITION
  ======================================================= */

  {
    id: "problem_only_under_load",

    evidenceKey:
      "operating_condition",

    value: "under_load",

    description:
      "Problem yalnızca makine yük altında veya üretim sırasında ortaya çıkıyor.",

    effects: [
      {
        hypothesisId: "mechanical_load",
        score: 25,
      },

      {
        hypothesisId: "process_load",
        score: 30,
      },

      {
        hypothesisId: "motor_electrical",
        score: 5,
      },

      {
        hypothesisId: "plc_start_command",
        score: -10,
      },
    ],

    domains: [
      "mechanical",
      "process",
    ],
  },


  {
    id: "problem_without_load",

    evidenceKey:
      "operating_condition",

    value: "without_load",

    description:
      "Problem makine yük altında değilken de ortaya çıkıyor.",

    effects: [
      {
        hypothesisId: "process_load",
        score: -25,
      },

      {
        hypothesisId: "mechanical_load",
        score: -10,
      },

      {
        hypothesisId: "drive_output",
        score: 15,
      },

      {
        hypothesisId: "motor_electrical",
        score: 15,
      },
    ],

    domains: [
      "drive",
      "electrical",
    ],
  },


  /* =======================================================
     PROCESS PRESSURE
  ======================================================= */

  {
    id: "process_pressure_increases",

    evidenceKey:
      "process_pressure",

    value: "increases",

    description:
      "Motor problemi sırasında proses basıncı da yükseliyor.",

    effects: [
      {
        hypothesisId: "process_load",
        score: 40,
      },

      {
        hypothesisId: "mechanical_load",
        score: 15,
      },

      {
        hypothesisId: "motor_electrical",
        score: -5,
      },
    ],

    domains: [
      "process",
      "mechanical",
    ],
  },


  {
    id: "process_pressure_stable",

    evidenceKey:
      "process_pressure",

    value: "stable",

    description:
      "Motor problemi sırasında proses basıncında belirgin değişiklik görülmüyor.",

    effects: [
      {
        hypothesisId: "process_load",
        score: -20,
      },

      {
        hypothesisId: "motor_electrical",
        score: 10,
      },

      {
        hypothesisId: "drive_output",
        score: 10,
      },
    ],

    domains: [
      "process",
    ],
  },


  /* =======================================================
     SPEED REFERENCE
  ======================================================= */

  {
    id: "speed_reference_constant",

    evidenceKey:
      "speed_reference",

    value: "constant",

    description:
      "Motor problemi sırasında PLC veya sürücü hız referansı değişmeden kalıyor.",

    effects: [
      {
        hypothesisId: "plc_start_command",
        score: -15,
      },

      {
        hypothesisId: "mechanical_load",
        score: 15,
      },

      {
        hypothesisId: "process_load",
        score: 15,
      },

      {
        hypothesisId: "motor_electrical",
        score: 10,
      },
    ],

    domains: [
      "plc",
      "drive",
      "mechanical",
      "process",
    ],
  },


  {
    id: "speed_reference_drops",

    evidenceKey:
      "speed_reference",

    value: "drops",

    description:
      "Motor problemi sırasında hız referansı PLC veya kontrol sistemi tarafından düşürülüyor.",

    effects: [
      {
        hypothesisId: "plc_start_command",
        score: 35,
      },

      {
        hypothesisId: "process_load",
        score: 10,
      },

      {
        hypothesisId: "mechanical_load",
        score: -5,
      },
    ],

    domains: [
      "plc",
      "process",
    ],
  },


  /* =======================================================
     ACTUAL SPEED
  ======================================================= */

  {
    id: "actual_speed_drops",

    evidenceKey:
      "actual_speed",

    value: "drops",

    description:
      "Komut devam ederken motorun gerçek hızı düşüyor.",

    effects: [
      {
        hypothesisId: "mechanical_load",
        score: 20,
      },

      {
        hypothesisId: "process_load",
        score: 20,
      },

      {
        hypothesisId: "motor_electrical",
        score: 15,
      },
    ],

    domains: [
      "drive",
      "mechanical",
      "process",
    ],
  },


  /* =======================================================
     FEEDBACK
  ======================================================= */

  {
    id: "feedback_missing",

    evidenceKey:
      "feedback",

    value: "missing",

    description:
      "Motor hareket ediyor olmasına rağmen hız veya encoder geri beslemesi kayboluyor.",

    effects: [
      {
        hypothesisId: "feedback_problem",
        score: 40,
      },

      {
        hypothesisId: "motor_electrical",
        score: -5,
      },

      {
        hypothesisId: "mechanical_load",
        score: -5,
      },
    ],

    domains: [
      "sensor",
      "drive",
    ],
  },

];


/* =========================================================
   APPLY RULES
========================================================= */

export function applyDiagnosticRules(
  hypotheses: Hypothesis[],
  evidence: Evidence[],
): Hypothesis[] {

  const updated = hypotheses.map(
    (hypothesis) => ({
      ...hypothesis,

      supportingEvidence: [
        ...hypothesis.supportingEvidence,
      ],

      contradictingEvidence: [
        ...hypothesis.contradictingEvidence,
      ],
    }),
  );


  for (const item of evidence) {

    if (!item.observation) {
      continue;
    }


    const matchingRules =
      MOTOR_NOT_RUNNING_RULES.filter(
        (rule) =>
          rule.evidenceKey === item.id &&
          rule.value === item.observation,
      );


    for (const rule of matchingRules) {

      for (const effect of rule.effects) {

        const hypothesis =
          updated.find(
            (item) =>
              item.id ===
              effect.hypothesisId,
          );


        if (!hypothesis) {
          continue;
        }


        hypothesis.probability =
          Math.max(
            0,
            Math.min(
              100,
              hypothesis.probability +
                effect.score,
            ),
          );


        if (effect.score > 0) {

          hypothesis.supportingEvidence.push(
            rule.description,
          );

        } else if (
          effect.score < 0
        ) {

          hypothesis.contradictingEvidence.push(
            rule.description,
          );

        }

      }

    }

  }


  return updated;
}


/* =========================================================
   NORMALIZE PROBABILITIES
========================================================= */

export function normalizeHypotheses(
  hypotheses: Hypothesis[],
): Hypothesis[] {

  const total =
    hypotheses.reduce(
      (sum, hypothesis) =>
        sum +
        Math.max(
          0,
          hypothesis.probability,
        ),
      0,
    );


  if (total <= 0) {
    return hypotheses;
  }


  return hypotheses.map(
    (hypothesis) => {

      const probability =
        (
          Math.max(
            0,
            hypothesis.probability,
          ) /
          total
        ) *
        100;


      let status:
        | "active"
        | "weak"
        | "eliminated"
        | "confirmed" =
        "active";


      if (probability < 5) {
        status = "weak";
      }


      if (probability <= 1) {
        status = "eliminated";
      }


      if (probability >= 70) {
        status = "confirmed";
      }


      return {
        ...hypothesis,

        probability:
          Number(
            probability.toFixed(1),
          ),

        status,
      };

    },
  );
}