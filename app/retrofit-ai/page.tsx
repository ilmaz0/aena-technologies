"use client";

import { useState } from "react";

type DiagnosisResult = {
  summary: string;
  severity: "low" | "medium" | "high" | "critical";
  confidence: number;

  diagnoses: {
    id: string;
    system: string;
    fault: string;
    probability: number;
    explanation: string;
    evidenceUsed: string[];
    possibleCauses: string[];
    recommendedChecks: string[];
    recommendedActions: string[];
    requiredTools?: string[];
    safetyWarnings?: string[];
  }[];

  immediateActions: string[];
  furtherQuestions: string[];
  safetyWarnings: string[];
};

export default function RetrofitAIPage() {
  const [symptom, setSymptom] = useState("");

  const [machine, setMachine] = useState({
    machineName: "",
    machineBrand: "",
    machineModel: "",
    plcBrand: "",
    plcModel: "",
    hmiBrand: "",
    hmiModel: "",
    driveBrand: "",
    driveModel: "",
    servoBrand: "",
    servoModel: "",
  });

  const [system, setSystem] = useState("drive");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [result, setResult] =
    useState<DiagnosisResult | null>(null);

  const systems = [
    "PLC",
    "HMI",
    "Drive",
    "Servo",
    "Sensor",
    "Motor",
    "Electrical Panel",
    "Communication",
    "Mechanical",
    "Pneumatic",
    "Hydraulic",
    "Process",
  ];

  async function analyzeMachine() {
    setError("");
    setResult(null);

    if (!symptom.trim()) {
      setError("Please describe the machine problem first.");
      return;
    }

    setLoading(true);

    try {
      const report = {
        id: crypto.randomUUID(),

        createdAt: new Date().toISOString(),

        machine,

        symptom,

        affectedSystem: system,

        evidence: [],
      };

      const response = await fetch("/api/retrofit-ai", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(report),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "Retrofit AI could not analyze the machine."
        );
      }

      setResult(data);
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Retrofit AI connection failed."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#020617] text-white">

      {/* HEADER */}

      <section className="border-b border-slate-800">

        <div className="mx-auto max-w-7xl px-6 py-10">

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[4px] text-orange-400">
                AENA Technologies
              </p>

              <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
                AENA Retrofit AI
              </h1>

              <p className="mt-3 max-w-2xl text-slate-400">
                Industrial machine troubleshooting and retrofit
                engineering intelligence.
              </p>

            </div>

            <div className="flex items-center gap-2 text-sm text-emerald-400">

              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

              ENGINEERING AI

            </div>

          </div>

        </div>

      </section>


      {/* MAIN */}

      <section className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* LEFT */}

          <div className="space-y-8">


            {/* MACHINE INFORMATION */}

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

              <div className="mb-6">

                <p className="text-xs uppercase tracking-[3px] text-orange-400">
                  Step 01
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  Machine Information
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Identify the machine and automation infrastructure.
                </p>

              </div>


              <div className="grid gap-4 md:grid-cols-2">

                <Input
                  label="Machine"
                  value={machine.machineName}
                  onChange={(value) =>
                    setMachine({
                      ...machine,
                      machineName: value,
                    })
                  }
                />

                <Input
                  label="Machine Brand"
                  value={machine.machineBrand}
                  onChange={(value) =>
                    setMachine({
                      ...machine,
                      machineBrand: value,
                    })
                  }
                />

                <Input
                  label="Machine Model"
                  value={machine.machineModel}
                  onChange={(value) =>
                    setMachine({
                      ...machine,
                      machineModel: value,
                    })
                  }
                />

                <Input
                  label="PLC Brand"
                  value={machine.plcBrand}
                  onChange={(value) =>
                    setMachine({
                      ...machine,
                      plcBrand: value,
                    })
                  }
                />

                <Input
                  label="PLC Model"
                  value={machine.plcModel}
                  onChange={(value) =>
                    setMachine({
                      ...machine,
                      plcModel: value,
                    })
                  }
                />

                <Input
                  label="HMI Brand"
                  value={machine.hmiBrand}
                  onChange={(value) =>
                    setMachine({
                      ...machine,
                      hmiBrand: value,
                    })
                  }
                />

                <Input
                  label="Drive Brand"
                  value={machine.driveBrand}
                  onChange={(value) =>
                    setMachine({
                      ...machine,
                      driveBrand: value,
                    })
                  }
                />

                <Input
                  label="Drive Model"
                  value={machine.driveModel}
                  onChange={(value) =>
                    setMachine({
                      ...machine,
                      driveModel: value,
                    })
                  }
                />

                <Input
                  label="Servo Brand"
                  value={machine.servoBrand}
                  onChange={(value) =>
                    setMachine({
                      ...machine,
                      servoBrand: value,
                    })
                  }
                />

                <Input
                  label="Servo Model"
                  value={machine.servoModel}
                  onChange={(value) =>
                    setMachine({
                      ...machine,
                      servoModel: value,
                    })
                  }
                />

              </div>

            </div>


            {/* FAULT */}

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

              <div className="mb-6">

                <p className="text-xs uppercase tracking-[3px] text-orange-400">
                  Step 02
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  Describe the Problem
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Describe what the machine is doing, what changed and
                  what happened before the failure.
                </p>

              </div>


              <textarea
                value={symptom}
                onChange={(e) => setSymptom(e.target.value)}
                placeholder="Example: The machine was running normally. After replacing the drive, the motor starts but production speed cannot be reached..."
                className="
                  min-h-[180px]
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-slate-700
                  bg-slate-900
                  p-4
                  text-sm
                  leading-7
                  text-white
                  outline-none
                  placeholder:text-slate-600
                  focus:border-orange-500
                "
              />

            </div>


            {/* SYSTEM */}

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

              <div className="mb-6">

                <p className="text-xs uppercase tracking-[3px] text-orange-400">
                  Step 03
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  Affected System
                </h2>

              </div>


              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">

                {systems.map((item) => {

                  const value = item
                    .toLowerCase()
                    .replaceAll(" ", "-");

                  const active = system === value;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSystem(value)}
                      className={`
                        rounded-xl
                        border
                        px-4
                        py-4
                        text-sm
                        font-semibold
                        transition
                        ${
                          active
                            ? "border-orange-500 bg-orange-500/10 text-orange-400"
                            : "border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-600 hover:text-white"
                        }
                      `}
                    >
                      {item}
                    </button>
                  );

                })}

              </div>

            </div>


            {/* FIELD EVIDENCE */}

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

              <div className="mb-6">

                <p className="text-xs uppercase tracking-[3px] text-orange-400">
                  Step 04
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  Field Evidence
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Add information collected directly from the machine.
                </p>

              </div>


              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                <EvidenceButton
                  icon="📷"
                  title="Machine Image"
                />

                <EvidenceButton
                  icon="🎙️"
                  title="Voice Recording"
                />

                <EvidenceButton
                  icon="🎥"
                  title="Machine Video"
                />

                <EvidenceButton
                  icon="📄"
                  title="Fault Report"
                />

              </div>

            </div>


            {/* ERROR */}

            {error && (

              <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-4">

                <p className="text-sm text-red-400">
                  {error}
                </p>

              </div>

            )}


            {/* ANALYZE */}

            <button
              type="button"
              disabled={loading}
              onClick={analyzeMachine}
              className={`
                w-full
                rounded-xl
                px-6
                py-4
                text-sm
                font-bold
                text-white
                transition
                ${
                  loading
                    ? "cursor-not-allowed bg-slate-700"
                    : "bg-orange-500 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20"
                }
              `}
            >

              {loading
                ? "Analyzing Machine..."
                : "Analyze Machine Problem →"}

            </button>


            {/* DIAGNOSIS RESULT */}

            {result && (

              <DiagnosisPanel result={result} />

            )}

          </div>


          {/* RIGHT */}

          <aside className="h-fit rounded-2xl border border-slate-800 bg-slate-950 p-6 lg:sticky lg:top-8">

            <p className="text-xs uppercase tracking-[3px] text-orange-400">
              AENA Retrofit Intelligence
            </p>

            <h2 className="mt-3 text-xl font-bold">
              Engineering Diagnosis
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              The system combines machine information, operator
              description, field evidence and engineering knowledge
              to identify possible causes and recommend diagnostic
              actions.
            </p>


            <div className="mt-8 space-y-4">

              <Status
                number="01"
                title="Machine Context"
                active={!!result}
              />

              <Status
                number="02"
                title="Fault Analysis"
                active={!!result}
              />

              <Status
                number="03"
                title="Evidence Analysis"
                active={!!result}
              />

              <Status
                number="04"
                title="Engineering Diagnosis"
                active={!!result}
              />

              <Status
                number="05"
                title="Recommended Action"
                active={!!result}
              />

            </div>


            <div className="mt-8 rounded-xl border border-orange-500/20 bg-orange-500/5 p-4">

              <p className="text-xs uppercase tracking-[2px] text-orange-400">
                AENA AI
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Built for industrial machine troubleshooting,
                retrofit and modernization.
              </p>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}


/* ============================================================
   DIAGNOSIS PANEL
   ============================================================ */

function DiagnosisPanel({
  result,
}: {
  result: DiagnosisResult;
}) {

  const diagnosis = result.diagnoses?.[0];

  return (
    <section className="rounded-2xl border border-orange-500/30 bg-slate-950 p-6">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

        <div>

          <p className="text-xs uppercase tracking-[3px] text-orange-400">
            AENA Retrofit AI Result
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Engineering Diagnosis
          </h2>

        </div>


        <div className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2">

          <span className="text-sm font-bold text-orange-400">
            Confidence {result.confidence}%
          </span>

        </div>

      </div>


      {/* SUMMARY */}

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-5">

        <p className="text-xs uppercase tracking-[2px] text-slate-500">
          Summary
        </p>

        <p className="mt-3 text-sm leading-7 text-slate-300">
          {result.summary}
        </p>

      </div>


      {diagnosis && (

        <>

          {/* MAIN FAULT */}

          <div className="mt-5">

            <p className="text-xs uppercase tracking-[2px] text-orange-400">
              Detected System
            </p>

            <p className="mt-2 text-lg font-bold text-white">
              {diagnosis.system.toUpperCase()}
            </p>

            <p className="mt-1 text-sm text-slate-400">
              {diagnosis.fault}
            </p>

          </div>


          {/* EXPLANATION */}

          <div className="mt-6">

            <p className="text-sm font-bold text-white">
              Engineering Assessment
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              {diagnosis.explanation}
            </p>

          </div>


          {/* POSSIBLE CAUSES */}

          <ResultList
            title="Possible Causes"
            items={diagnosis.possibleCauses}
          />


          {/* CHECKS */}

          <ResultList
            title="Recommended Checks"
            items={diagnosis.recommendedChecks}
          />


          {/* ACTIONS */}

          <ResultList
            title="Recommended Actions"
            items={diagnosis.recommendedActions}
          />


          {/* TOOLS */}

          {diagnosis.requiredTools &&
            diagnosis.requiredTools.length > 0 && (

              <ResultList
                title="Required Tools"
                items={diagnosis.requiredTools}
              />

            )}


          {/* SAFETY */}

          {diagnosis.safetyWarnings &&
            diagnosis.safetyWarnings.length > 0 && (

              <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-5">

                <p className="text-xs uppercase tracking-[2px] text-red-400">
                  Safety Warning
                </p>

                <ul className="mt-3 space-y-2">

                  {diagnosis.safetyWarnings.map(
                    (warning, index) => (

                      <li
                        key={index}
                        className="text-sm leading-6 text-red-300"
                      >
                        • {warning}
                      </li>

                    )
                  )}

                </ul>

              </div>

            )}

        </>

      )}


      {/* QUESTIONS */}

      {result.furtherQuestions.length > 0 && (

        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-5">

          <p className="text-xs uppercase tracking-[2px] text-orange-400">
            Next Questions
          </p>

          <ul className="mt-3 space-y-2">

            {result.furtherQuestions.map(
              (question, index) => (

                <li
                  key={index}
                  className="text-sm leading-6 text-slate-300"
                >
                  {index + 1}. {question}
                </li>

              )
            )}

          </ul>

        </div>

      )}

    </section>
  );
}


/* ============================================================
   RESULT LIST
   ============================================================ */

function ResultList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {

  if (!items.length) {
    return null;
  }

  return (

    <div className="mt-6">

      <p className="text-sm font-bold text-white">
        {title}
      </p>

      <ul className="mt-3 space-y-2">

        {items.map((item, index) => (

          <li
            key={index}
            className="
              rounded-lg
              border
              border-slate-800
              bg-slate-900
              px-4
              py-3
              text-sm
              leading-6
              text-slate-300
            "
          >
            {item}
          </li>

        ))}

      </ul>

    </div>

  );
}


/* ============================================================
   INPUT
   ============================================================ */

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {

  return (

    <div>

      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </label>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          rounded-xl
          border
          border-slate-700
          bg-slate-900
          px-4
          py-3
          text-sm
          text-white
          outline-none
          placeholder:text-slate-600
          focus:border-orange-500
        "
      />

    </div>

  );
}


/* ============================================================
   EVIDENCE BUTTON
   ============================================================ */

function EvidenceButton({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {

  return (

    <button
      type="button"
      className="
        rounded-xl
        border
        border-slate-800
        bg-slate-900
        p-5
        text-left
        transition
        hover:border-orange-500/50
        hover:bg-slate-800
      "
    >

      <div className="text-2xl">
        {icon}
      </div>

      <p className="mt-3 text-sm font-semibold text-slate-200">
        {title}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        Add field evidence
      </p>

    </button>

  );
}


/* ============================================================
   STATUS
   ============================================================ */

function Status({
  number,
  title,
  active,
}: {
  number: string;
  title: string;
  active: boolean;
}) {

  return (

    <div className="flex items-center gap-3">

      <div
        className={`
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          border
          text-xs
          font-bold
          transition
          ${
            active
              ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
              : "border-slate-800 bg-slate-900 text-orange-400"
          }
        `}
      >
        {active ? "✓" : number}
      </div>

      <p className="text-sm text-slate-300">
        {title}
      </p>

    </div>

  );
}