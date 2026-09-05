
   /* =========================================================
      AENA DIAGNOSTIC TYPES
   ========================================================= */


   /* =========================================================
      DIAGNOSTIC DOMAIN
   ========================================================= */

   export type DiagnosticDomain =
   | "electrical"
   | "drive"
   | "plc"
   | "mechanical"
   | "process"
   | "sensor"
   | "communication"
   | "safety"
   | "unknown";

   export type DiagnosticIntent =
   | "technical"
   | "non_technical"
   | "unknown";

  
   /* =========================================================
      EVIDENCE SOURCE
   ========================================================= */

   export type EvidenceSource =
   | "user"
   | "measurement"
   | "image"
   | "video"
   | "document"
   | "ai";


   /* =========================================================
      EVIDENCE POLARITY
   ========================================================= */

   export type EvidencePolarity =
   | "supports"
   | "contradicts"
   | "neutral";


   /* =========================================================
      EVIDENCE
   ========================================================= */

   export type Evidence = {
   /**
      * Evidence identifier.
      *
      * Örnek:
      *
      * drive_fault
      * drive_run
      * motor_current
      * motor_shaft
      */
   id: string;

   /**
      * Evidence'in gözlemlenen değeri.
      *
      * Örnek:
      *
      * yes
      * no
      * high
      * low
      * free
      * hard
      */
   observation: string;

   /**
      * Evidence kaynağı.
      */
   source: EvidenceSource;

   /**
      * Evidence'in ilişkili olduğu mühendislik domain'i.
      */
   domain?: DiagnosticDomain;

   /**
      * Evidence'in hypothesis üzerindeki etkisi.
      */
   polarity?: EvidencePolarity;

   /**
      * Evidence güvenilirliği.
      *
      * 0.0 → güvenilmez
      * 1.0 → çok yüksek güvenilirlik
      */
   reliability: number;
   };


   /* =========================================================
      HYPOTHESIS
   ========================================================= */

   export type Hypothesis = {
   /**
      * Benzersiz hypothesis ID.
      *
      * Örnek:
      *
      * drive_fault
      * mechanical_load
      * process_load
      */
   id: string;

   /**
      * Kullanıcıya / mühendise gösterilebilecek
      * hypothesis açıklaması.
      */
   label: string;

   /**
      * Ana mühendislik domain'i.
      */
   domain: DiagnosticDomain;

   /**
      * Mevcut evidence'e göre hesaplanan
      * göreceli olasılık.
      *
      * 0 - 100
      */
   probability: number;

   /**
      * Hypothesis'i destekleyen evidence açıklamaları.
      */
   supportingEvidence: string[];

   /**
      * Hypothesis'e karşı evidence açıklamaları.
      */
   contradictingEvidence: string[];

   /**
      * Bu hypothesis'i doğrulamak için
      * gerekli fiziksel / teknik testler.
      */
   requiredTests: string[];

   /**
      * Hypothesis mevcut durumunu belirtir.
      */
   status:
      | "active"
      | "weak"
      | "eliminated"
      | "confirmed";
   };


   /* =========================================================
      DIAGNOSTIC QUESTION
   ========================================================= */

   export type DiagnosticQuestion = {
   /**
      * Benzersiz soru ID.
      *
      * Örnek:
      *
      * q_drive_fault
      * q_motor_current
      */
   id: string;

   /**
      * Kullanıcıya sorulacak tek teknik soru.
      */
   question: string;

   /**
      * Sorunun ana mühendislik domain'i.
      */
   domain: DiagnosticDomain;

   /**
      * Sorunun hedeflediği hypothesis'ler.
      */
   targetHypotheses: string[];

   /**
      * Sorunun birbirinden ayırmaya çalıştığı
      * hypothesis'ler.
      */
   separates: string[];

   /**
      * Dinamik soru önceliği.
      */
   priority: number;

   /**
      * Sorunun fiziksel ölçüm gerektirip
      * gerektirmediği.
      */
   requiresMeasurement: boolean;

   /**
      * Bu soruya verilebilecek / beklenen
      * evidence yapısı.
      *
      * Örnek:
      *
      * yes | no
      * high | low
      * free | hard
      */
   expectedEvidence: string;
   };


   /* =========================================================
      DIAGNOSTIC STATE
   ========================================================= */

  /* =========================================================
   DIAGNOSTIC STATE
========================================================= */

export type DiagnosticState = {
  /**
   * Mevcut diagnostic interaction numarası.
   */
  interaction: number;

  /**
   * İlk kullanıcı tarafından tanımlanan
   * makine problemi.
   */
  symptom: string;

  /**
   * Kullanıcının mesajının diagnostic amacı.
   */
  intent: DiagnosticIntent;

  /**
   * Mevcut dominant engineering domain.
   */
  domain: DiagnosticDomain;

  evidence: Evidence[];

  hypotheses: Hypothesis[];

  askedQuestions: DiagnosticQuestion[];

  unansweredQuestions: DiagnosticQuestion[];

  confidence: number;

  safetyCritical: boolean;

  diagnosticComplete: boolean;

  needsEngineer: boolean;

  currentQuestion: DiagnosticQuestion | null;
};
