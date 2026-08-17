export type MachineProfile = {
  id: string;
  machineName: string;
  machineType: string;

  manufacturer?: string;
  model?: string;
  year?: number;

  plc?: {
    brand: string;
    model?: string;
  };

  hmi?: {
    brand: string;
    model?: string;
  };

  drives?: {
    brand: string;
    model?: string;
    quantity?: number;
  }[];

  servoSystems?: {
    brand: string;
    model?: string;
    quantity?: number;
  }[];

  sensors?: {
    type: string;
    brand?: string;
    model?: string;
    quantity?: number;
  }[];

  communication?: string[];

  notes?: string;
};

export type DiagnosticSession = {
  id: string;

  machineId: string;

  createdAt: string;

  problem: string;

  symptoms: string[];

  errorCodes: string[];

  observations: string[];

  testsPerformed: string[];

  testResults: string[];

  possibleCauses: string[];

  recommendedActions: string[];

  status: "open" | "diagnosing" | "resolved";
};