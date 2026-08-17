export type EvidenceType =
  | "text"
  | "image"
  | "audio"
  | "video"
  | "sensor"
  | "plc"
  | "drive"
  | "hmi";

export type FaultSeverity =
  | "low"
  | "medium"
  | "high"
  | "critical";

export type MachineSystem =
  | "plc"
  | "hmi"
  | "drive"
  | "servo"
  | "sensor"
  | "motor"
  | "electrical-panel"
  | "communication"
  | "mechanical"
  | "pneumatic"
  | "hydraulic"
  | "process";

export interface MachineContext {
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

  machineAge?: number;
  productionProcess?: string;
}

export interface FaultEvidence {
  id: string;

  type: EvidenceType;

  title: string;

  description?: string;

  fileUrl?: string;

  system?: MachineSystem;

  timestamp?: string;

  metadata?: Record<string, string | number | boolean>;
}

export interface FaultReport {
  id: string;

  createdAt: string;

  machine: MachineContext;

  symptom: string;

  severity?: FaultSeverity;

  affectedSystem?: MachineSystem;

  evidence: FaultEvidence[];
}

export interface Diagnosis {
  id: string;

  system: MachineSystem;

  fault: string;

  probability: number;

  explanation: string;

  evidenceUsed: string[];

  possibleCauses: string[];

  recommendedChecks: string[];

  recommendedActions: string[];

  requiredTools?: string[];

  safetyWarnings?: string[];
}

export interface RetrofitKnowledge {
  id: string;

  title: string;

  machineType: string;

  system: MachineSystem;

  symptoms: string[];

  causes: string[];

  diagnosis: string[];

  solution: string[];

  components?: string[];

  plc?: string;

  drive?: string;

  sensors?: string[];

  notes?: string;
}

export interface RetrofitAIResponse {
  summary: string;

  severity: FaultSeverity;

  diagnoses: Diagnosis[];

  immediateActions: string[];

  furtherQuestions: string[];

  safetyWarnings: string[];

  confidence: number;
}