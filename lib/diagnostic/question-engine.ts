import type {
  DiagnosticQuestion,
  DiagnosticDomain,
  Evidence,
  Hypothesis,
} from "./types";

import {
  MOTOR_NOT_RUNNING_RULES,
} from "./rules";

/* =========================================================
   AENA QUESTION ENGINE

   ANA PRENSİP

   Kullanıcının ilk semptomu diagnostik zincirin
   başlangıç domain'ini belirler.

   Örnek:

   "PLC arıza verdi"

        ↓

   PLC DOMAIN LOCK

        ↓

   PLC QUESTIONS

        ↓

   PLC EVIDENCE

        ↓

   PLC HYPOTHESIS

   Sistem, kullanıcı açıkça başka bir arıza alanına
   geçmediği sürece başka domain'e geçmez.

   ÖNEMLİ:

   Hypothesis başka domainleri içerebilir.

   Ancak QUESTION ENGINE sadece kullanıcının aktif
   diagnostik domain'i içerisinde soru seçer.
========================================================= */


/* =========================================================
   QUESTION DEFINITION
========================================================= */

type QuestionDefinition = {
  id: string;

  question: string;

  domain: DiagnosticDomain;

  evidenceKey: string;

  expectedEvidence: string;

  requiresMeasurement: boolean;

  targetHypotheses: string[];

  priority: number;

  separates: string[];

  symptomKeywords: string[];
};


/* =========================================================
   MOTOR NOT RUNNING QUESTIONS
========================================================= */

export const MOTOR_NOT_RUNNING_QUESTIONS:
  QuestionDefinition[] = [

  /* =======================================================
     PLC OUTPUT
  ======================================================= */

  {
    id: "q_plc_output",

    question:
      "PLC programında ilgili çıkış komutu aktif olduğunda fiziksel PLC çıkışı ON durumuna geçiyor mu?",

    domain: "plc",

    evidenceKey: "plc_output",

    expectedEvidence:
      "on | off",

    requiresMeasurement: false,

    targetHypotheses: [
      "plc_start_command",
      "drive_fault",
    ],

    priority: 110,

    separates: [
      "plc_start_command",
      "drive_fault",
    ],

    symptomKeywords: [
      "plc",
      "plc output",
      "plc program",
      "plc programı",
      "plc start",
      "plc command",
      "plc çıkış",
      "plc çıkışı",
      "plc komutu",
      "çıkış aktif olmuyor",
      "çıkış çalışmıyor",
    ],
  },


  /* =======================================================
     PLC START COMMAND
  ======================================================= */

  {
    id: "q_plc_start_command",

    question:
      "PLC tarafından sürücüye gönderilen Start veya Enable komutu aktif oluyor mu?",

    domain: "plc",

    evidenceKey: "plc_start_command",

    expectedEvidence:
      "on | off",

    requiresMeasurement: false,

    targetHypotheses: [
      "plc_start_command",
    ],

    priority: 108,

    separates: [
      "plc_start_command",
      "drive_fault",
    ],

    symptomKeywords: [
      "plc",
      "start command",
      "start komutu",
      "enable",
      "enable komutu",
      "plc komutu",
      "plc start",
    ],
  },


  /* =======================================================
     PLC INTERLOCK
  ======================================================= */

  {
    id: "q_plc_interlock",

    question:
      "PLC programında makinenin çalışmasını engelleyen aktif bir interlock, permissive veya safety şartı görünüyor mu?",

    domain: "plc",

    evidenceKey: "plc_interlock",

    expectedEvidence:
      "active | inactive",

    requiresMeasurement: false,

    targetHypotheses: [
      "plc_start_command",
      "plc_interlock",
    ],

    priority: 106,

    separates: [
      "plc_start_command",
      "plc_interlock",
    ],

    symptomKeywords: [
      "plc",
      "interlock",
      "permissive",
      "safety",
      "plc interlock",
      "plc güvenlik",
      "plc şart",
      "plc koşul",
    ],
  },


  /* =======================================================
     PLC COMMUNICATION
  ======================================================= */

  {
    id: "q_plc_communication",

    question:
      "PLC'nin bağlı olduğu HMI, remote I/O veya diğer kontrol cihazlarıyla haberleşmesinde aktif bir communication fault veya timeout görülüyor mu?",

    domain: "plc",

    evidenceKey: "plc_communication",

    expectedEvidence:
      "fault | normal",

    requiresMeasurement: false,

    targetHypotheses: [
      "plc_communication",
      "plc_start_command",
    ],

    priority: 104,

    separates: [
      "plc_communication",
      "plc_start_command",
    ],

    symptomKeywords: [
      "plc",
      "communication",
      "communication fault",
      "communication error",
      "timeout",
      "haberleşme",
      "iletişim",
      "plc haberleşme",
      "plc iletişim",
    ],
  },


  /* =======================================================
     PLC POWER
  ======================================================= */

  {
    id: "q_plc_power",

    question:
      "PLC güç kaynağında veya PLC CPU üzerinde düşük besleme, power fault ya da CPU fault göstergesi var mı?",

    domain: "plc",

    evidenceKey: "plc_power",

    expectedEvidence:
      "fault | normal",

    requiresMeasurement: true,

    targetHypotheses: [
      "plc_power",
      "plc_fault",
    ],

    priority: 102,

    separates: [
      "plc_power",
      "plc_fault",
    ],

    symptomKeywords: [
      "plc",
      "plc power",
      "plc besleme",
      "plc güç",
      "power fault",
      "cpu fault",
      "cpu arızası",
      "besleme",
      "güç kaynağı",
    ],
  },


  /* =======================================================
     SPEED REFERENCE
  ======================================================= */

  {
    id: "q_speed_reference",

    question:
      "PLC veya kontrol sisteminin gönderdiği hız/frekans referansı sabit kalıyor mu, yoksa düşüyor mu?",

    domain: "plc",

    evidenceKey: "speed_reference",

    expectedEvidence:
      "constant | drops",

    requiresMeasurement: false,

    targetHypotheses: [
      "plc_start_command",
      "mechanical_load",
      "process_load",
    ],

    priority: 100,

    separates: [
      "plc_start_command",
      "mechanical_load",
      "process_load",
    ],

    symptomKeywords: [
      "plc",
      "speed reference",
      "speed command",
      "frequency reference",
      "hız referansı",
      "hız komutu",
      "frekans referansı",
      "plc referansı",
    ],
  },


  /* =======================================================
     DRIVE FAULT
  ======================================================= */

  {
    id: "q_drive_fault",

    question:
      "Sürücü üzerinde aktif bir fault veya alarm görünüyor mu?",

    domain: "drive",

    evidenceKey: "drive_fault",

    expectedEvidence:
      "yes | no",

    requiresMeasurement: false,

    targetHypotheses: [
      "drive_fault",
      "plc_start_command",
      "drive_output",
    ],

    priority: 100,

    separates: [
      "drive_fault",
      "plc_start_command",
      "drive_output",
    ],

    symptomKeywords: [
      "drive",
      "drive fault",
      "drive alarm",
      "fault",
      "alarm",
      "sürücü",
      "sürücü arızası",
      "sürücü alarm",
      "sürücü fault",
    ],
  },


  /* =======================================================
     DRIVE RUN
  ======================================================= */

  {
    id: "q_drive_run",

    question:
      "Start komutu verildiğinde sürücü RUN veya ENABLE durumuna geçiyor mu?",

    domain: "drive",

    evidenceKey: "drive_run",

    expectedEvidence:
      "yes | no",

    requiresMeasurement: false,

    targetHypotheses: [
      "plc_start_command",
      "drive_fault",
      "drive_output",
    ],

    priority: 98,

    separates: [
      "plc_start_command",
      "drive_fault",
      "drive_output",
    ],

    symptomKeywords: [
      "drive",
      "drive run",
      "drive enable",
      "start command",
      "start komutu",
      "sürücü",
      "sürücü çalışmıyor",
      "run olmuyor",
      "enable olmuyor",
    ],
  },


  /* =======================================================
     MOTOR OUTPUT VOLTAGE
  ======================================================= */

  {
    id: "q_motor_output_voltage",

    question:
      "Sürücü RUN durumundayken motor çıkışında üç faz gerilimi mevcut mu?",

    domain: "electrical",

    evidenceKey:
      "motor_output_voltage",

    expectedEvidence:
      "yes | no",

    requiresMeasurement: true,

    targetHypotheses: [
      "drive_output",
      "motor_electrical",
      "motor_connection",
    ],

    priority: 95,

    separates: [
      "drive_output",
      "motor_electrical",
      "motor_connection",
    ],

    symptomKeywords: [
      "motor",
      "motor voltage",
      "motor output",
      "output voltage",
      "motor gerilimi",
      "motor çıkışı",
      "motor voltajı",
      "üç faz",
      "three phase",
    ],
  },


  /* =======================================================
     MOTOR SHAFT
  ======================================================= */

  {
    id: "q_motor_shaft",

    question:
      "Motor enerjisiz durumdayken motor mili elle çevrildiğinde serbestçe dönüyor mu?",

    domain: "mechanical",

    evidenceKey:
      "motor_shaft",

    expectedEvidence:
      "free | hard",

    requiresMeasurement: false,

    targetHypotheses: [
      "mechanical_load",
      "motor_electrical",
    ],

    priority: 92,

    separates: [
      "mechanical_load",
      "motor_electrical",
      "drive_output",
    ],

    symptomKeywords: [
      "shaft",
      "motor shaft",
      "motor jammed",
      "motor sıkıştı",
      "mil dönmüyor",
      "mil sıkıştı",
      "mekanik",
      "mechanical",
      "bearing",
      "rulman",
      "gearbox",
      "redüktör",
    ],
  },


  /* =======================================================
     MOTOR CURRENT
  ======================================================= */

  {
    id: "q_motor_current",

    question:
      "Motor çalışmaya çalışırken akım normal işletme değerinin üzerine çıkıyor mu?",

    domain: "electrical",

    evidenceKey:
      "motor_current",

    expectedEvidence:
      "high | low",

    requiresMeasurement: true,

    targetHypotheses: [
      "motor_electrical",
      "mechanical_load",
      "process_load",
      "drive_fault",
    ],

    priority: 90,

    separates: [
      "motor_electrical",
      "mechanical_load",
      "process_load",
      "drive_fault",
    ],

    symptomKeywords: [
      "current",
      "overcurrent",
      "high current",
      "current high",
      "akım",
      "yüksek akım",
      "aşırı akım",
      "akım yükseliyor",
      "akım fazla",
    ],
  },


  /* =======================================================
     OPERATING CONDITION
  ======================================================= */

  {
    id: "q_operating_condition",

    question:
      "Problem makine yük altında veya üretim sırasında mı ortaya çıkıyor, yoksa yüksüz durumda da görülüyor mu?",

    domain: "process",

    evidenceKey:
      "operating_condition",

    expectedEvidence:
      "under_load | without_load",

    requiresMeasurement: false,

    targetHypotheses: [
      "process_load",
      "mechanical_load",
      "drive_output",
      "motor_electrical",
    ],

    priority: 85,

    separates: [
      "process_load",
      "mechanical_load",
      "drive_output",
      "motor_electrical",
    ],

    symptomKeywords: [
      "under load",
      "load",
      "production",
      "yük altında",
      "yük",
      "üretim",
      "proses",
    ],
  },


  /* =======================================================
     PROCESS PRESSURE
  ======================================================= */

  {
    id: "q_process_pressure",

    question:
      "Motor problemi meydana geldiğinde proses basıncında belirgin bir artış oluyor mu?",

    domain: "process",

    evidenceKey:
      "process_pressure",

    expectedEvidence:
      "increases | stable",

    requiresMeasurement: false,

    targetHypotheses: [
      "process_load",
      "mechanical_load",
      "motor_electrical",
    ],

    priority: 80,

    separates: [
      "process_load",
      "mechanical_load",
      "motor_electrical",
    ],

    symptomKeywords: [
      "pressure",
      "pressure increase",
      "basınç",
      "basınç artışı",
      "proses basıncı",
    ],
  },


  /* =======================================================
     ACTUAL SPEED
  ======================================================= */

  {
    id: "q_actual_speed",

    question:
      "Hız referansı devam ederken motorun gerçek hızı düşüyor mu?",

    domain: "drive",

    evidenceKey:
      "actual_speed",

    expectedEvidence:
      "drops",

    requiresMeasurement: true,

    targetHypotheses: [
      "mechanical_load",
      "process_load",
      "motor_electrical",
    ],

    priority: 82,

    separates: [
      "mechanical_load",
      "process_load",
      "motor_electrical",
    ],

    symptomKeywords: [
      "actual speed",
      "motor speed",
      "speed drops",
      "hız düşüyor",
      "motor hızı",
      "gerçek hız",
      "devir düşüyor",
    ],
  },


  /* =======================================================
     FEEDBACK
  ======================================================= */

  {
    id: "q_feedback",

    question:
      "Motor hareket ederken encoder veya hız geri beslemesinde kayıp meydana geliyor mu?",

    domain: "sensor",

    evidenceKey:
      "feedback",

    expectedEvidence:
      "missing",

    requiresMeasurement: true,

    targetHypotheses: [
      "feedback_problem",
      "drive_fault",
    ],

    priority: 75,

    separates: [
      "feedback_problem",
      "drive_fault",
    ],

    symptomKeywords: [
      "encoder",
      "feedback",
      "feedback loss",
      "encoder fault",
      "enkoder",
      "geri besleme",
      "encoder kaybı",
    ],
  },
];


/* =========================================================
   SYMPTOM NORMALIZATION
========================================================= */

function normalizeSymptom(
  symptom: string,
): string {

  return symptom
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      "",
    )
    .replace(
      /[^\p{L}\p{N}\s]/gu,
      " ",
    )
    .replace(
      /\s+/g,
      " ",
    )
    .trim();
}


/* =========================================================
   DOMAIN KEYWORDS

   Buradaki sıralama önemlidir.

   PLC → DRIVE → MECHANICAL → SENSOR → ELECTRICAL → PROCESS

   PLC açıkça belirtilmişse PLC kazanır.
========================================================= */

  const DOMAIN_KEYWORDS: Partial<Record<DiagnosticDomain, string[]>> = {
  plc: [
    "plc",
    "plc output",
    "plc program",
    "plc start",
    "plc command",
    "plc fault",
    "plc alarm",
    "plc hata",
    "plc ariza",
    "plc arızası",
    "plc cikis",
    "plc çıkış",
    "plc komutu",
    "plc programı",
    "plc start command",
    "plc enable",
  ],

  drive: [
    "drive",
    "drive fault",
    "drive alarm",
    "drive run",
    "drive enable",
    "inverter",
    "frequency inverter",
    "surucu",
    "sürücü",
    "surucu arizasi",
    "sürücü arızası",
    "surucu alarm",
    "sürücü alarm",
  ],

  electrical: [
    "motor",
    "motor calismiyor",
    "motor çalışmıyor",
    "motor donmuyor",
    "motor dönmüyor",
    "motor duruyor",
    "motor akimi",
    "motor akımı",
    "motor gerilimi",
    "motor voltaji",
    "motor voltajı",
  ],

  mechanical: [
    "mekanik",
    "mechanical",
    "shaft",
    "motor shaft",
    "mil",
    "rulman",
    "bearing",
    "gearbox",
    "redüktör",
    "redüktor",
    "sıkışma",
    "sikisma",
  ],

  process: [
    "basinc",
    "basınç",
    "pressure",
    "proses",
    "process",
    "production",
    "uretim",
    "üretim",
    "yuk",
    "yük",
    "load",
  ],

  sensor: [
    "encoder",
    "enkoder",
    "feedback",
    "geri besleme",
    "sensor",
    "sensör",
  ],
};

/* =========================================================
   DETECT DOMAIN FROM TEXT
========================================================= */

function detectSymptomDomain(
  text: string,
): DiagnosticDomain | "unknown" {

  const normalized =
    normalizeSymptom(text);

  if (!normalized) {
    return "unknown";
  }


  /* =======================================================
     DOMAIN PRIORITY

     PLC özellikle en üstte tutuluyor.
  ======================================================= */

  const domainOrder:
    DiagnosticDomain[] = [
      "plc",
      "drive",
      "mechanical",
      "sensor",
      "electrical",
      "process",
    ];


  for (
    const domain
    of domainOrder
  ) {

    const keywords =
      DOMAIN_KEYWORDS[domain] ?? [];


    const matched =
      keywords.some(
        (keyword) => {

          const normalizedKeyword =
            normalizeSymptom(keyword);

          return (
            normalizedKeyword.length > 0 &&
            normalized.includes(
              normalizedKeyword,
            )
          );
        },
      );


    if (matched) {
      return domain;
    }
  }


  return "unknown";
}


/* =========================================================
   DETECT EXPLICIT DOMAIN CHANGE

   Burada önemli fark var:

   İlk semptom PLC ise kullanıcı cevabında sadece
   "hayır", "çalışmıyor", "PLC arızada" gibi ifadeler
   domain değiştirmez.

   Ancak kullanıcı açıkça:

   "sürücü de arızalı"
   "motor da arızalı"
   "encoder problemi var"

   derse yeni domain algılanabilir.
========================================================= */

function detectExplicitDomainChange(
  text: string,
  currentDomain:
    | DiagnosticDomain
    | "unknown",
): DiagnosticDomain | "none" {

  const detected =
    detectSymptomDomain(text);


  if (
    detected === "unknown"
  ) {

    return "none";
  }


  if (
    detected === currentDomain
  ) {

    return "none";
  }


  /*
   * Kullanıcı başka bir domain'i gerçekten
   * açıkça ifade etmiş olabilir.
   *
   * Burada sadece domain keyword'ünün geçmesi
   * yeterli değil; domain değişimini güçlendiren
   * ifadeler aranıyor.
   */

  const normalized =
    normalizeSymptom(text);


  const changeIndicators = [
    "ariza",
    "arıza",
    "fault",
    "alarm",
    "problem",
    "sorun",
    "bozuk",
    "calismiyor",
    "çalışmıyor",
    "donmuyor",
    "dönmüyor",
    "failure",
    "failed",
  ];


  const hasChangeIndicator =
    changeIndicators.some(
      (indicator) =>
        normalized.includes(
          normalizeSymptom(indicator),
        ),
    );


  if (
    hasChangeIndicator
  ) {

    return detected;
  }


  return "none";
}


/* =========================================================
   SYMPTOM MATCH SCORE
========================================================= */

function calculateSymptomMatchScore(
  question: QuestionDefinition,
  symptom: string,
): number {

  if (!symptom.trim()) {
    return 0;
  }


  const normalizedSymptom =
    normalizeSymptom(symptom);

  let score = 0;


  for (
    const keyword
    of question.symptomKeywords
  ) {

    const normalizedKeyword =
      normalizeSymptom(keyword);


    if (!normalizedKeyword) {
      continue;
    }


    /* =====================================================
       EXACT PHRASE
    ===================================================== */

    if (
      normalizedSymptom.includes(
        normalizedKeyword,
      )
    ) {

      score += 40;

      continue;
    }


    /* =====================================================
       WORD MATCH
    ===================================================== */

    const keywordWords =
      normalizedKeyword.split(" ");


    const matchedWords =
      keywordWords.filter(
        (word) =>
          normalizedSymptom.includes(
            word,
          ),
      ).length;


    if (
      matchedWords > 0
    ) {

      score +=
        (
          matchedWords /
          keywordWords.length
        ) * 20;
    }
  }


  return score;
}


/* =========================================================
   QUESTION → EVIDENCE KEY
========================================================= */

function getEvidenceKeyFromQuestion(
  questionId: string,
): string {

  const question =
    MOTOR_NOT_RUNNING_QUESTIONS.find(
      (item) =>
        item.id === questionId,
    );


  return (
    question?.evidenceKey ??
    ""
  );
}


/* =========================================================
   ANSWERED EVIDENCE KEYS
========================================================= */

function getAnsweredEvidenceKeys(
  evidence: Evidence[],
): Set<string> {

  return new Set(
    evidence
      .filter(
        (item) =>
          Boolean(
            item.observation?.trim(),
          ),
      )
      .map(
        (item) =>
          item.id,
      ),
  );
}


/* =========================================================
   ASKED QUESTION IDS
========================================================= */

function getAskedQuestionIds(
  askedQuestions: DiagnosticQuestion[],
): Set<string> {

  return new Set(
    askedQuestions.map(
      (question) =>
        question.id,
    ),
  );
}


/* =========================================================
   QUESTION PRIORITY

   ÖNEMLİ:

   Burada domain lock yapılmıyor.

   Domain lock ayrı bir aşamada uygulanıyor.

   Böylece scoring ile domain kontrolü birbirine
   karışmıyor.
========================================================= */

function calculateQuestionPriority(
  question: QuestionDefinition,
  hypotheses: Hypothesis[],
  symptom: string,
): number {

  let score =
    question.priority;


  /* =====================================================
     SYMPTOM MATCH
  ===================================================== */

  const symptomScore =
    calculateSymptomMatchScore(
      question,
      symptom,
    );


  score +=
    symptomScore * 2;


  /* =====================================================
     HYPOTHESIS MATCH
  ===================================================== */

  for (
    const hypothesis
    of hypotheses
  ) {

    if (
      question.targetHypotheses.includes(
        hypothesis.id,
      )
    ) {

      score +=
        hypothesis.probability *
        0.2;
    }
  }


  /* =====================================================
     SEPARATION VALUE
  ===================================================== */

  score +=
    question.separates.length * 5;


  /* =====================================================
     MEASUREMENT VALUE
  ===================================================== */

  if (
    question.requiresMeasurement
  ) {

    score += 5;
  }


  return score;
}


/* =========================================================
   GET AVAILABLE QUESTIONS
========================================================= */

function getAvailableQuestions(
  evidence: Evidence[],
  askedQuestions: DiagnosticQuestion[],
): QuestionDefinition[] {

  const answeredEvidenceKeys =
    getAnsweredEvidenceKeys(
      evidence,
    );


  const askedQuestionIds =
    getAskedQuestionIds(
      askedQuestions,
    );


  return MOTOR_NOT_RUNNING_QUESTIONS
    .filter(
      (question) =>
        !answeredEvidenceKeys.has(
          question.evidenceKey,
        ),
    )
    .filter(
      (question) =>
        !askedQuestionIds.has(
          question.id,
        ),
    );
}


/* =========================================================
   APPLY DOMAIN LOCK

   KRİTİK DEĞİŞİKLİK:

   Eğer aktif domain PLC ise ve PLC soruları kaldıysa:

       SADECE PLC

   Eğer PLC soruları tamamen bittiyse:

       domain değişimi için kullanıcıdan açık sinyal
       beklenir.

   Böylece PLC zinciri motor sorusuna sıçramaz.
========================================================= */

function applySymptomDomainLock(
  questions: QuestionDefinition[],
  activeDomain:
    | DiagnosticDomain
    | "unknown",
): QuestionDefinition[] {

  if (
    activeDomain === "unknown"
  ) {

    return questions;
  }


  const domainQuestions =
    questions.filter(
      (question) =>
        question.domain ===
        activeDomain,
    );


  /*
   * Aktif domain içerisinde soru varsa
   * başka domain kesinlikle kullanılmaz.
   */

  if (
    domainQuestions.length > 0
  ) {

    return domainQuestions;
  }


  /*
   * Aktif domain içerisinde hiç soru kalmadıysa
   * mevcut havuz geri döndürülür.

   * Ancak normal akışta bu noktaya gelindiğinde
   * domain geçişini üst katmanın yönetmesi gerekir.
   */

  return questions;
}


/* =========================================================
   GENERATE DIAGNOSTIC QUESTIONS
========================================================= */

export function generateDiagnosticQuestions(
  hypotheses: Hypothesis[],
  evidence: Evidence[],
  askedQuestions: DiagnosticQuestion[] = [],
  symptom: string = "",
): DiagnosticQuestion[] {

  /* =======================================================
     1. INITIAL DOMAIN
  ======================================================= */

  const symptomDomain =
    detectSymptomDomain(
      symptom,
    );


  /* =======================================================
     2. AVAILABLE QUESTIONS
  ======================================================= */

  let availableQuestions =
    getAvailableQuestions(
      evidence,
      askedQuestions,
    );


  /* =======================================================
     3. DOMAIN LOCK

     İlk semptomun domain'i soru seçiminde
     doğrudan kilit olarak kullanılıyor.
  ======================================================= */

  availableQuestions =
    applySymptomDomainLock(
      availableQuestions,
      symptomDomain,
    );


  /* =======================================================
     DEBUG
  ======================================================= */

  console.log(
    "==========================================",
  );

  console.log(
    "=== AENA QUESTION ENGINE ===",
  );

  console.log(
    "SYMPTOM:",
    symptom,
  );

  console.log(
    "DETECTED DOMAIN:",
    symptomDomain,
  );

  console.log(
    "ASKED QUESTIONS:",
    Array.from(
      getAskedQuestionIds(
        askedQuestions,
      ),
    ),
  );

  console.log(
    "ANSWERED EVIDENCE:",
    Array.from(
      getAnsweredEvidenceKeys(
        evidence,
      ),
    ),
  );

  console.log(
    "AVAILABLE QUESTIONS:",
    availableQuestions.map(
      (question) => ({
        id:
          question.id,

        domain:
          question.domain,

        evidenceKey:
          question.evidenceKey,

        priority:
          question.priority,
      }),
    ),
  );


  /* =======================================================
     4. NO QUESTION
  ======================================================= */

  if (
    availableQuestions.length === 0
  ) {

    console.log(
      "NO AVAILABLE QUESTIONS",
    );

    return [];
  }


  /* =======================================================
     5. SCORE
  ======================================================= */

  const scoredQuestions =
    availableQuestions.map(
      (question) => ({

        question,

        score:
          calculateQuestionPriority(
            question,
            hypotheses,
            symptom,
          ),
      }),
    );


  /* =======================================================
     6. SORT
  ======================================================= */

  scoredQuestions.sort(
    (a, b) =>
      b.score -
      a.score,
  );


  /* =======================================================
     7. DEBUG SCORES
  ======================================================= */

  console.log(
    "QUESTION SCORES:",
    scoredQuestions.map(
      (item) => ({

        id:
          item.question.id,

        domain:
          item.question.domain,

        score:
          Number(
            item.score.toFixed(1),
          ),
      }),
    ),
  );


  console.log(
    "SELECTED NEXT QUESTION:",
    scoredQuestions[0]
      ? {

          id:
            scoredQuestions[0]
              .question.id,

          domain:
            scoredQuestions[0]
              .question.domain,

          score:
            Number(
              scoredQuestions[0]
                .score
                .toFixed(1),
            ),
        }

      : null,
  );


  /* =======================================================
     8. RETURN
  ======================================================= */

  return scoredQuestions.map(
    ({
      question,
      score,
    }) => ({

      id:
        question.id,

      question:
        question.question,

      domain:
        question.domain,

      targetHypotheses:
        question.targetHypotheses,

      separates:
        question.separates,

      priority:
        Number(
          score.toFixed(1),
        ),

      requiresMeasurement:
        question.requiresMeasurement,

      expectedEvidence:
        question.expectedEvidence,
    }),
  );
}


/* =========================================================
   GET NEXT DIAGNOSTIC QUESTION
========================================================= */

export function getNextDiagnosticQuestion(
  hypotheses: Hypothesis[],
  evidence: Evidence[],
  askedQuestions: DiagnosticQuestion[],
  symptom: string = "",
): DiagnosticQuestion | null {

  const questions =
    generateDiagnosticQuestions(
      hypotheses,
      evidence,
      askedQuestions,
      symptom,
    );


  if (
    questions.length === 0
  ) {

    return null;
  }


  return questions[0];
}


/* =========================================================
   GET NEXT QUESTION
========================================================= */

export function getNextQuestion(
  state: {
    symptom?: string;

    hypotheses: Hypothesis[];

    evidence: Evidence[];

    askedQuestions: DiagnosticQuestion[];
  },
): DiagnosticQuestion | null {

  return getNextDiagnosticQuestion(
    state.hypotheses,
    state.evidence,
    state.askedQuestions,
    state.symptom ?? "",
  );
}


/* =========================================================
   QUESTION ALREADY ANSWERED
========================================================= */

export function isQuestionAnswered(
  question: DiagnosticQuestion,
  evidence: Evidence[],
): boolean {

  const evidenceKey =
    getEvidenceKeyFromQuestion(
      question.id,
    );


  if (!evidenceKey) {
    return false;
  }


  return evidence.some(
    (item) =>
      item.id === evidenceKey &&
      Boolean(
        item.observation?.trim(),
      ),
  );
}


/* =========================================================
   QUESTION ALREADY ASKED
========================================================= */

export function isQuestionAsked(
  question: DiagnosticQuestion,
  askedQuestions: DiagnosticQuestion[],
): boolean {

  return askedQuestions.some(
    (item) =>
      item.id === question.id,
  );
}


/* =========================================================
   RULE COVERAGE
========================================================= */

export function hasDiagnosticRuleForQuestion(
  question: DiagnosticQuestion,
): boolean {

  const evidenceKey =
    getEvidenceKeyFromQuestion(
      question.id,
    );


  if (!evidenceKey) {
    return false;
  }


  return MOTOR_NOT_RUNNING_RULES.some(
    (rule) =>
      rule.evidenceKey ===
      evidenceKey,
  );
}


/* =========================================================
   QUESTION ENGINE DEBUG INFO
========================================================= */

export function getQuestionEngineDebugInfo(
  hypotheses: Hypothesis[],
  evidence: Evidence[],
  askedQuestions: DiagnosticQuestion[] = [],
  symptom: string = "",
) {

  const answeredEvidenceKeys =
    getAnsweredEvidenceKeys(
      evidence,
    );


  const askedQuestionIds =
    getAskedQuestionIds(
      askedQuestions,
    );


  const symptomDomain =
    detectSymptomDomain(
      symptom,
    );


  const questions =
    MOTOR_NOT_RUNNING_QUESTIONS.map(
      (question) => {

        const answered =
          answeredEvidenceKeys.has(
            question.evidenceKey,
          );


        const asked =
          askedQuestionIds.has(
            question.id,
          );


        const domainAllowed =
          symptomDomain === "unknown" ||
          question.domain ===
            symptomDomain;


        const score =
          calculateQuestionPriority(
            question,
            hypotheses,
            symptom,
          );


        return {

          id:
            question.id,

          evidenceKey:
            question.evidenceKey,

          domain:
            question.domain,

          symptomDomain,

          domainAllowed,

          asked,

          answered,

          available:
            !asked &&
            !answered &&
            domainAllowed,

          score:
            Number(
              score.toFixed(1),
            ),
        };
      },
    );


  return {

    answeredEvidenceKeys:
      Array.from(
        answeredEvidenceKeys,
      ),

    askedQuestionIds:
      Array.from(
        askedQuestionIds,
      ),

    symptom,

    symptomDomain,

    questions,
  };
}