/* =========================================================
   AENA DIAGNOSTIC ENGINE
========================================================= */

import type {
  DiagnosticQuestion,
  DiagnosticState,
  DiagnosticIntent,
  Evidence,
  Hypothesis,
} from "./types";

import {
  createInitialMotorHypotheses,
} from "./hypotheses";

import {
  applyDiagnosticRules,
  normalizeHypotheses,
} from "./rules";

import {
  getNextDiagnosticQuestion,
  generateDiagnosticQuestions,
} from "./question-engine";


/* =========================================================
   DIAGNOSTIC INTENT DETECTION
========================================================= */

/**
 * Kullanıcının ilk mesajının
 * teknik diagnostic içerip içermediğini belirler.
 *
 * technical
 *     → Diagnostic Engine çalışır
 *
 * non_technical
 *     → Diagnostic Engine soru üretmez
 *
 * unknown
 *     → Teknik teşhise zorlanmaz
 */

function detectDiagnosticIntent(
symptom: string,
): DiagnosticIntent {

const text =
symptom
.toLocaleLowerCase("tr-TR")
.trim();

if (!text) {


return "unknown";


}

/* =======================================================
TECHNICAL KEYWORDS
======================================================= */

const technicalKeywords = [

/* Motor / Drive */

"motor",
"motoru",

"drive",
"sürücü",
"surucu",

"inverter",
"invertör",
"invertor",

"servo",
"servo motor",

"encoder",
"enkoder",

/* PLC / Automation */

"plc",

"hmi",

"scada",

"io",
"i/o",

"input",
"output",

"interlock",
"permissive",

/* Electrical */

"akım",
"akim",

"current",

"gerilim",
"voltaj",

"voltage",

"frekans",
"frequency",

"faz",
"phase",

"üç faz",
"uc faz",
"three phase",

"besleme",
"power supply",

"kontaktör",
"kontaktor",
"contactor",

"röle",
"role",
"relay",

"sigorta",
"fuse",

"kablo",
"cable",

"topraklama",
"grounding",

/* Fault / Alarm */

"arıza",
"ariza",

"alarm",

"fault",

"error",

"hata",

"trip",

"overcurrent",

"overvoltage",

"undervoltage",

"overtemperature",

/* Mechanical */

"rulman",
"bearing",

"redüktör",
"reduktor",

"gearbox",

"dişli",
"disli",

"gear",

"mil",
"shaft",

"kaplin",
"coupling",

"tork",
"torque",

"titreşim",
"titresim",

"vibration",

/* Sensor */

"sensör",
"sensor",

"proximity",

"switch",

"limit switch",

"basınç",
"basinc",

"pressure",

"sıcaklık",
"sicaklik",

"temperature",

/* Communication */

"modbus",

"profinet",

"profibus",

"ethernet",

"ethercat",

"canbus",

"can bus",

"communication",

"haberleşme",
"haberlesme",

/* Parameters */

"parametre",
"parameter",

"setpoint",

"referans",
"reference",

"rpm",

"devir",

"hz",

"khz",

"volt",

"amp",

"amper",

"watt",

"kw",


];

const hasTechnicalKeyword =
technicalKeywords.some(
(keyword) =>
text.includes(keyword),
);

if (hasTechnicalKeyword) {


return "technical";


}

/* =======================================================
GENERIC TECHNICAL PROBLEM PATTERNS


 Teknik ekipman adı belirtilmese bile,
 mesaj açıkça bir makine / sistem arızasını
 anlatıyorsa technical olarak kabul edilir.


======================================================= */

const genericTechnicalPatterns = [


/* General machine / system problems */

"çalışmıyor",
"calismiyor",

"çalışmadı",
"calismadi",

"çalışmıyor",
"calismiyor",

"durdu",

"duruyor",

"başlamıyor",
"baslamiyor",

"başlamadı",
"baslamadi",

"devreye girmiyor",
"devreye girmedi",

"hareket etmiyor",

"çalışmama",
"calismama",

"arıza",
"ariza",

"problem",

"sorun",

"fault",

"failure",

"failed",

"alarm",

"error",

"trip",

/* Machine */

"makine çalışmıyor",
"makine calismiyor",

"makine çalışmadı",
"makine calismadi",

"makine durdu",

"makine başlamıyor",
"makine baslamiyor",

"makine devreye girmiyor",

/* System */

"sistem çalışmıyor",
"sistem calismiyor",

"sistem çalışmadı",
"sistem calismadi",

"sistem durdu",

"sistem devreye girmiyor",

/* Production line */

"hat çalışmıyor",
"hat calismiyor",

"hat durdu",

"hat başlamıyor",
"hat baslamiyor",

"üretim durdu",
"uretim durdu",

"üretim çalışmıyor",
"uretim calismiyor",


];

const hasGenericTechnicalPattern =
genericTechnicalPatterns.some(
(pattern) =>
text.includes(pattern),
);

if (hasGenericTechnicalPattern) {


return "technical";


}

/* =======================================================
NON-TECHNICAL KEYWORDS
======================================================= */

const nonTechnicalKeywords = [


"merhaba",

"selam",

"hey",

"hi",

"hello",

"nasılsın",
"nasilsin",

"iyi misin",
"iyimisin",

"kimsin",

"sen kimsin",

"ne yapıyorsun",
"ne yapiyorsun",

"ne işe yarıyorsun",
"ne ise yariyorsun",

"nasıl yardımcı olabilirsin",
"nasil yardimci olabilirsin",

"yardımcı olabilir misin",
"yardimci olabilir misin",

"teşekkürler",
"tesekkurler",

"teşekkür ederim",
"tesekkur ederim",

"sağ ol",
"sag ol",

"sagol",

"günaydın",
"gunaydin",

"iyi akşamlar",
"iyi aksamlar",

"iyi geceler",

"hava nasıl",
"hava nasil",

"bugün nasılsın",
"bugun nasilsin",


];

const hasNonTechnicalKeyword =
nonTechnicalKeywords.some(
(keyword) =>
text.includes(keyword),
);

if (hasNonTechnicalKeyword) {


return "non_technical";


}

/* =======================================================
UNKNOWN
======================================================= */

/*

* Teknik kelime veya açık teknik problem paterni
* bulunmuyorsa ve mesajın teknik olmadığı da
* kesin olarak anlaşılamıyorsa unknown bırakıyoruz.
*
* Böylece sistemi gereksiz yere teknik teşhise
* zorlamıyoruz.
  */

return "unknown";
}


/* =========================================================
   INITIAL STATE
========================================================= */

/**
 * Diagnostic Engine
 *
 * Sistemin ana orkestrasyon katmanıdır.
 *
 * Görevi:
 *
 * 1. Diagnostic session oluşturmak
 * 2. Kullanıcı intent'ini belirlemek
 * 3. Initial hypotheses yüklemek
 * 4. Evidence eklemek
 * 5. Rules Engine çalıştırmak
 * 6. Hypotheses probability değerlerini güncellemek
 * 7. Probability değerlerini normalize etmek
 * 8. Confidence hesaplamak
 * 9. Bir sonraki diagnostik soruyu belirlemek
 */


export function createDiagnosticSession(
  symptom: string,
): DiagnosticState {

  console.log(
    "DIAGNOSTIC SYMPTOM:",
    symptom,
  );


  /* =======================================================
     DETECT INTENT
  ======================================================= */

  const intent =
    detectDiagnosticIntent(
      symptom,
    );
console.log(
  "========== SESSION DEBUG =========="
);

console.log(
  "RAW SYMPTOM:",
  JSON.stringify(symptom),
);

console.log(
  "INTENT:",
  intent,
);

  console.log(
    "DIAGNOSTIC INTENT:",
    intent,
  );


  /* =======================================================
     INITIAL HYPOTHESES
  ======================================================= */

  const hypotheses: Hypothesis[] =
    createInitialMotorHypotheses();


  const normalizedHypotheses: Hypothesis[] =
    normalizeHypotheses(
      hypotheses,
    );


  /* =======================================================
     INITIAL STATE
  ======================================================= */

  const state: DiagnosticState = {

    interaction: 0,

    symptom,

    intent,

    domain: "unknown",

    evidence: [],

    hypotheses:
      normalizedHypotheses,

    askedQuestions: [],

    unansweredQuestions: [],

    confidence: 0,

    safetyCritical: false,

    diagnosticComplete: false,

    needsEngineer: false,

    currentQuestion: null,

  };
console.log(
  "INITIAL STATE:",
  {
    interaction: state.interaction,
    intent: state.intent,
    domain: state.domain,
    symptom: state.symptom,
    evidence: state.evidence,
    askedQuestions: state.askedQuestions,
  },
);

  /* =======================================================
     GENERATE FIRST QUESTION
  ======================================================= */

  /*
   * Sadece teknik mesajlarda
   * diagnostic question engine çalışır.
   */

 if (state.intent === "technical") {

  const questions =
    getDiagnosticQuestions(state);

  console.log(
    "INITIAL QUESTIONS:",
    questions,
  );

  state.unansweredQuestions =
    questions;

  state.currentQuestion =
    questions[0] ??
    null;

  console.log(
    "INITIAL CURRENT QUESTION:",
    state.currentQuestion,
  );

} else {

  console.log(
    "DIAGNOSTIC NOT STARTED",
    {
      intent: state.intent,
      symptom: state.symptom,
    },
  );

  state.unansweredQuestions = [];

  state.currentQuestion = null;
}


  return state;
}


/* =========================================================
   ADD EVIDENCE
========================================================= */

/**
 * Yeni bir evidence sisteme ekler.
 *
 * Akış:
 *
 * Evidence
 *    ↓
 * Rules
 *    ↓
 * Hypotheses
 *    ↓
 * Normalize
 *    ↓
 * Confidence
 *    ↓
 * Next Question
 */

export function addEvidence(
  state: DiagnosticState,
  evidence: Evidence,
): DiagnosticState {

  /*
   * Aynı evidence ID'si daha önce eklenmişse
   * tekrar ekleme.
   */

  const existingEvidence =
    state.evidence.some(
      (item) =>
        item.id === evidence.id,
    );


  if (existingEvidence) {

    return state;

  }


  /* =======================================================
     ADD EVIDENCE
  ======================================================= */

  const updatedEvidence = [
    ...state.evidence,
    evidence,
  ];


  /* =======================================================
     RULES ENGINE
  ======================================================= */

  const updatedHypotheses =
    applyDiagnosticRules(
      state.hypotheses,
      [evidence],
    );


  /* =======================================================
     NORMALIZE
  ======================================================= */

  const normalizedHypotheses =
    normalizeHypotheses(
      updatedHypotheses,
    );


  /* =======================================================
     INTERACTION
  ======================================================= */

  const interaction =
    state.interaction + 1;


  /* =======================================================
     CONFIDENCE
  ======================================================= */

  const confidence =
    calculateDiagnosticConfidence(
      normalizedHypotheses,
      updatedEvidence,
    );


  /* =======================================================
     SAFETY
  ======================================================= */

  const safetyCritical =
    detectSafetyCriticalCondition(
      updatedEvidence,
    );


  /* =======================================================
     NEW STATE
  ======================================================= */

  const updatedState: DiagnosticState = {

    ...state,

    interaction,

    evidence:
      updatedEvidence,

    hypotheses:
      normalizedHypotheses,

    confidence,

    safetyCritical,

  };


  /* =======================================================
     UPDATE ASKED QUESTIONS
  ======================================================= */

  updatedState.askedQuestions =
    updateAskedQuestions(
      state,
      evidence,
    );


  /* =======================================================
     GENERATE NEXT QUESTION
  ======================================================= */

  /*
   * Question Engine yalnızca
   * technical intent varsa çalışır.
   */

  if (
    updatedState.intent === "technical"
  ) {

    updatedState.unansweredQuestions =
      getDiagnosticQuestions(
        updatedState,
      );


    updatedState.currentQuestion =
      updatedState.unansweredQuestions[0] ??
      null;

  } else {

    updatedState.unansweredQuestions = [];

    updatedState.currentQuestion = null;

  }


  return updatedState;
}


/* =========================================================
   APPLY MULTIPLE EVIDENCE
========================================================= */

/**
 * Birden fazla evidence aynı anda eklenebilir.
 *
 * Örneğin:
 *
 * AI image analysis
 * +
 * user answer
 * +
 * measurement
 */

export function addEvidenceBatch(
  state: DiagnosticState,
  evidence: Evidence[],
): DiagnosticState {

  let currentState =
    state;


  for (
    const item
    of evidence
  ) {

    currentState =
      addEvidence(
        currentState,
        item,
      );

  }


  return currentState;
}


/* =========================================================
   NEXT QUESTION
========================================================= */

/**
 * Sistemin şu anda soracağı
 * en önemli soruyu döndürür.
 */

export function getNextQuestion(
  state: DiagnosticState,
): DiagnosticQuestion | null {

  /*
   * Teknik olmayan mesajlarda
   * kesinlikle diagnostic soru üretme.
   */

  if (
    state.intent !== "technical"
  ) {

    return null;

  }


  return getNextDiagnosticQuestion(
    state.hypotheses,
    state.evidence,
    state.askedQuestions,
    state.symptom,
  );
}


/* =========================================================
   QUESTION LIST
========================================================= */

/**
 * Mevcut diagnostik state için
 * bütün uygun soruları oluşturur.
 */

function getDiagnosticQuestions(
  state: DiagnosticState,
): DiagnosticQuestion[] {

  /*
   * Güvenlik kontrolü:
   * Teknik değilse soru üretme.
   */

  if (
    state.intent !== "technical"
  ) {

    return [];

  }


  return generateDiagnosticQuestions(
    state.hypotheses,
    state.evidence,
    state.askedQuestions,
    state.symptom,
  );
}


/* =========================================================
   UPDATE ASKED QUESTIONS
========================================================= */

/**
 * Yeni evidence hangi soruya karşılık geliyor
 * onu bulur ve askedQuestions'a ekler.
 */

function updateAskedQuestions(
  state: DiagnosticState,
  evidence: Evidence,
): DiagnosticQuestion[] {

  /*
   * Teknik olmayan session'larda
   * soru geçmişi oluşturma.
   */

  if (
    state.intent !== "technical"
  ) {

    return state.askedQuestions;

  }


  /*
   * Evidence ID ile doğrudan question ID
   * eşleştirmiyoruz.
   *
   * Question ID:
   *
   * q_drive_fault
   *
   * Evidence ID:
   *
   * drive_fault
   */

  const matchedQuestion =
    state.unansweredQuestions.find(
      (question) => {

        return (
          question.id ===
            `q_${evidence.id}` ||
          question.id
            .replace(/^q_/, "") ===
            evidence.id
        );

      },
    );


  /*
   * Soru bulunamadıysa
   * mevcut askedQuestions state'ini koru.
   */

  if (!matchedQuestion) {

    return state.askedQuestions;

  }


  /*
   * Aynı soru daha önce sorulduysa
   * tekrar ekleme.
   */

  const alreadyAsked =
    state.askedQuestions.some(
      (question) =>
        question.id ===
        matchedQuestion.id,
    );


  if (alreadyAsked) {

    return state.askedQuestions;

  }


  /*
   * Soruyu cevaplanmış/sorulmuş
   * sorular listesine ekle.
   */

  return [
    ...state.askedQuestions,
    matchedQuestion,
  ];
}


/* =========================================================
   CONFIDENCE
========================================================= */

/**
 * Diagnostic confidence hesaplama.
 */

function calculateDiagnosticConfidence(
  hypotheses: Hypothesis[],
  evidence: Evidence[],
): number {

  if (
    hypotheses.length === 0
  ) {

    return 0;

  }


  const sortedHypotheses =
    [...hypotheses].sort(
      (a, b) =>
        b.probability -
        a.probability,
    );


  const top =
    sortedHypotheses[0];


  if (!top) {

    return 0;

  }


  /*
   * Evidence olmadan yüksek confidence
   * oluşmasını engelle.
   */

  if (
    evidence.length === 0
  ) {

    return 0;

  }


  const probabilityScore =
    top.probability;


  /*
   * Evidence miktarına göre
   * ek güven faktörü.
   *
   * Maksimum 20 puan.
   */

  const evidenceScore =
    Math.min(
      20,
      evidence.length * 4,
    );


  const confidence =
    Math.min(
      100,
      probabilityScore * 0.8 +
      evidenceScore,
    );


  return Number(
    confidence.toFixed(1),
  );
}


/* =========================================================
   SAFETY
========================================================= */

/**
 * Güvenlik açısından kritik evidence kontrolü.
 */

function detectSafetyCriticalCondition(
  evidence: Evidence[],
): boolean {

  const safetyKeywords = [

    "emergency stop",

    "emergency",

    "e-stop",

    "sto",

    "safety",

    "overcurrent",

    "short circuit",

    "insulation fault",

    "overtemperature",

  ];


  for (
    const item
    of evidence
  ) {

    const text =
      `${item.id} ${item.observation}`
        .toLowerCase();


    const detected =
      safetyKeywords.some(
        (keyword) =>
          text.includes(
            keyword,
          ),
      );


    if (detected) {

      return true;

    }

  }


  return false;
}


/* =========================================================
   DIAGNOSTIC RESULT
========================================================= */

/**
 * Engine'in mevcut durumunu özetler.
 */

export function getTopHypothesis(
  state: DiagnosticState,
): Hypothesis | null {

  if (
    state.hypotheses.length === 0
  ) {

    return null;

  }


  const sorted =
    [...state.hypotheses].sort(
      (a, b) =>
        b.probability -
        a.probability,
    );


  return sorted[0] ?? null;
}


/* =========================================================
   DIAGNOSTIC COMPLETION
========================================================= */

export function isDiagnosisComplete(
  state: DiagnosticState,
): boolean {

  /*
   * Teknik olmayan session
   * diagnostic değildir.
   */

  if (
    state.intent !== "technical"
  ) {

    return false;

  }


  const topHypothesis =
    getTopHypothesis(
      state,
    );


  if (!topHypothesis) {

    return false;

  }


  /*
   * Safety kritik durumlarda
   * otomatik diagnosis tamamlanmaz.
   */

  if (
    state.safetyCritical
  ) {

    return false;

  }


  /*
   * Yeterli confidence + confirmed
   * hypothesis.
   */

  if (
    topHypothesis.status ===
      "confirmed" &&
    state.confidence >= 70
  ) {

    return true;

  }


  /*
   * 10 interaction sonrasında
   * soru kalmadıysa tamamla.
   */

  if (
    state.interaction >= 10 &&
    state.unansweredQuestions.length === 0
  ) {

    return true;

  }


  return false;
}


/* =========================================================
   DIAGNOSTIC SUMMARY
========================================================= */

export function getDiagnosticSummary(
  state: DiagnosticState,
) {

  const topHypothesis =
    getTopHypothesis(
      state,
    );


  return {

    symptom:
      state.symptom,

    interaction:
      state.interaction,

    intent:
      state.intent,

    confidence:
      state.confidence,

    safetyCritical:
      state.safetyCritical,

    topHypothesis:
      topHypothesis
        ? {

            id:
              topHypothesis.id,

            label:
              topHypothesis.label,

            probability:
              topHypothesis.probability,

            status:
              topHypothesis.status,

          }
        : null,

    evidenceCount:
      state.evidence.length,

    remainingQuestions:
      state.unansweredQuestions.length,

    complete:
      isDiagnosisComplete(
        state,
      ),

  };
}