"use client";

import { useState } from "react";

type Diagnosis = {
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
};

type RetrofitAIResponse = {
  summary: string;
  severity: "low" | "medium" | "high" | "critical";
  diagnoses: Diagnosis[];
  immediateActions: string[];
  furtherQuestions: string[];
  safetyWarnings: string[];
  confidence: number;
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
    productionProcess: "",
    machineAge: "",
  });

  const [system, setSystem] = useState("drive");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState<RetrofitAIResponse | null>(null);

  const [error, setError] = useState("");

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
      setError("Please describe the machine problem before starting the analysis.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/retrofit-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          machine: {
            machineName: machine.machineName,
            machineBrand: machine.machineBrand,
            machineModel: machine.machineModel,

            plcBrand: machine.plcBrand,
            plcModel: machine.plcModel,

            hmiBrand: machine.hmiBrand,
            hmiModel: machine.hmiModel,

            driveBrand: machine.driveBrand,
            driveModel: machine.driveModel,

            servoBrand: machine.servoBrand,
            servoModel: machine.servoModel,

            productionProcess: machine.productionProcess,

            machineAge: machine.machineAge
              ? Number(machine.machineAge)
              : undefined,
          },

          symptom,

          affectedSystem: system,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Retrofit AI could not analyze the problem."
        );
      }

      setResult(data);
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#020617] text-white">

      {/* ========================================================= */}
      {/* HEADER */}
      {/* ========================================================= */}

      <section className="border-b border-slate-800">

        <div className="mx-auto max-w-7xl px-6 py-10">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[4px] text-orange-400">
                AENA Technologies
              </p>

              <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
                AENA Retrofit AI
              </h1>

              <p className="mt-3 max-w-3xl text-slate-400">
                Industrial machine troubleshooting and retrofit engineering
                intelligence.
              </p>

            </div>

            <div className="flex items-center gap-2 text-sm text-emerald-400">

              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

              ENGINEERING AI

            </div>

          </div>

        </div>

      </section>


      {/* ========================================================= */}
      {/* MAIN */}
      {/* ========================================================= */}

      <section className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">


          {/* ===================================================== */}
          {/* LEFT SIDE */}
          {/* ===================================================== */}

          <div className="space-y-8">


            {/* =================================================== */}
            {/* STEP 01 - MACHINE INFORMATION */}
            {/* =================================================== */}

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

              <div className="mb-6">

                <p className="text-xs uppercase tracking-[3px] text-orange-400">
                  Step 01
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  Machine Information
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Enter the basic machine and automation information. The more
                  accurate the information, the better the engineering analysis.
                </p>

              </div>


              <div className="grid gap-4 md:grid-cols-2">

                <Input
                  label="Machine Name"
                  placeholder="Stretch Film Machine"
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
                  placeholder="Colines"
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
                  placeholder="Example: BOPP / Stretch Line"
                  value={machine.machineModel}
                  onChange={(value) =>
                    setMachine({
                      ...machine,
                      machineModel: value,
                    })
                  }
                />

                <Input
                  label="Machine Age"
                  placeholder="Example: 15"
                  value={machine.machineAge}
                  onChange={(value) =>
                    setMachine({
                      ...machine,
                      machineAge: value,
                    })
                  }
                />

                <Input
                  label="PLC Brand"
                  placeholder="Siemens"
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
                  placeholder="S7-300 / S7-1200 / S7-1500"
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
                  placeholder="Siemens / Proface / Weintek"
                  value={machine.hmiBrand}
                  onChange={(value) =>
                    setMachine({
                      ...machine,
                      hmiBrand: value,
                    })
                  }
                />

                <Input
                  label="HMI Model"
                  placeholder="Example: Comfort Panel"
                  value={machine.hmiModel}
                  onChange={(value) =>
                    setMachine({
                      ...machine,
                      hmiModel: value,
                    })
                  }
                />

                <Input
                  label="Drive Brand"
                  placeholder="Mitsubishi / ABB / Siemens"
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
                  placeholder="FR-A840 / ACS880 / G120"
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
                  placeholder="Mitsubishi / Yaskawa / Siemens"
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
                  placeholder="Servo model"
                  value={machine.servoModel}
                  onChange={(value) =>
                    setMachine({
                      ...machine,
                      servoModel: value,
                    })
                  }
                />

                <div className="md:col-span-2">

                  <Input
                    label="Production Process"
                    placeholder="Stretch film production / PET washing / extrusion..."
                    value={machine.productionProcess}
                    onChange={(value) =>
                      setMachine({
                        ...machine,
                        productionProcess: value,
                      })
                    }
                  />

                </div>

              </div>

            </div>


            {/* =================================================== */}
            {/* STEP 02 - FAULT DESCRIPTION */}
            {/* =================================================== */}

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

              <div className="mb-6">

                <p className="text-xs uppercase tracking-[3px] text-orange-400">
                  Step 02
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  Describe the Machine Problem
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Describe the symptom exactly as observed in the field.
                  Include alarms, unusual sounds, recent component changes,
                  speed problems, communication problems or anything that
                  changed before the fault.
                </p>

              </div>


              <textarea
                value={symptom}
                onChange={(e) => setSymptom(e.target.value)}
                placeholder="Example: The machine was running normally. After replacing the drive, the motor starts but the machine cannot reach production speed. The PLC shows Run command but the drive frequency remains at 20 Hz..."
                className="
                  min-h-[220px]
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

              <div className="mt-3 text-xs text-slate-600">
                {symptom.length} characters
              </div>

            </div>


            {/* =================================================== */}
            {/* STEP 03 - SYSTEM */}
            {/* =================================================== */}

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

              <div className="mb-6">

                <p className="text-xs uppercase tracking-[3px] text-orange-400">
                  Step 03
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  Select Affected System
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Select the subsystem that appears to be responsible for the
                  problem.
                </p>

              </div>


              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">

                {systems.map((item) => {

                  const value = item.toLowerCase().replaceAll(" ", "-");

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
                            ? "border-orange-500 bg-orange-500/10 text-orange-400 shadow-lg shadow-orange-500/5"
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


            {/* =================================================== */}
            {/* STEP 04 - FIELD EVIDENCE */}
            {/* =================================================== */}

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

              <div className="mb-6">

                <p className="text-xs uppercase tracking-[3px] text-orange-400">
                  Step 04
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  Field Evidence
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  In the next development stage these sections will be connected
                  to image, video, audio, PLC and drive data analysis.
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


            {/* =================================================== */}
            {/* ERROR */}
            {/* =================================================== */}

            {error && (

              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4">

                <p className="text-sm font-semibold text-red-400">
                  Analysis Error
                </p>

                <p className="mt-1 text-sm leading-6 text-red-300">
                  {error}
                </p>

              </div>

            )}


            {/* =================================================== */}
            {/* ANALYZE BUTTON */}
            {/* =================================================== */}

            <button
              type="button"
              disabled={loading}
              onClick={analyzeMachine}
              className="
                w-full
                rounded-xl
                bg-orange-500
                px-6
                py-5
                text-sm
                font-bold
                text-white
                transition
                hover:bg-orange-600
                hover:shadow-lg
                hover:shadow-orange-500/20
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >

              {loading
                ? "Analyzing Machine Problem..."
                : "Analyze Machine Problem →"}

            </button>


            {/* =================================================== */}
            {/* RESULTS */}
            {/* =================================================== */}

            {result && (

              <div className="space-y-6">

                {/* SUMMARY */}

                <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-6">

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                    <div>

                      <p className="text-xs uppercase tracking-[3px] text-orange-400">
                        AENA AI Diagnosis
                      </p>

                      <h2 className="mt-2 text-2xl font-bold">
                        Engineering Analysis
                      </h2>

                    </div>

                    <SeverityBadge severity={result.severity} />

                  </div>


                  <p className="mt-5 text-sm leading-7 text-slate-300">
                    {result.summary}
                  </p>


                  <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-4">

                    <div className="flex items-center justify-between">

                      <span className="text-xs uppercase tracking-wider text-slate-500">
                        AI Confidence
                      </span>

                      <span className="text-lg font-bold text-orange-400">
                        {result.confidence}%
                      </span>

                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">

                      <div
                        className="h-full rounded-full bg-orange-500 transition-all"
                        style={{
                          width: `${result.confidence}%`,
                        }}
                      />

                    </div>

                  </div>

                </div>


                {/* DIAGNOSES */}

                {result.diagnoses.map((diagnosis) => (

                  <div
                    key={diagnosis.id}
                    className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
                  >

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                      <div>

                        <p className="text-xs uppercase tracking-[3px] text-slate-500">
                          {diagnosis.system}
                        </p>

                        <h3 className="mt-2 text-xl font-bold">
                          {diagnosis.fault}
                        </h3>

                      </div>

                      <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 px-3 py-2 text-sm font-bold text-orange-400">
                        {diagnosis.probability}% probability
                      </div>

                    </div>


                    <div className="mt-5">

                      <p className="text-xs uppercase tracking-[2px] text-orange-400">
                        Engineering Assessment
                      </p>

                      <p className="mt-2 text-sm leading-7 text-slate-300">
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


                    {/* WARNINGS */}

                    {diagnosis.safetyWarnings &&
                      diagnosis.safetyWarnings.length > 0 && (

                        <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-4">

                          <p className="text-xs uppercase tracking-[2px] text-red-400">
                            Safety Warnings
                          </p>

                          <ul className="mt-3 space-y-2">

                            {diagnosis.safetyWarnings.map((item, index) => (

                              <li
                                key={index}
                                className="text-sm leading-6 text-red-300"
                              >
                                • {item}
                              </li>

                            ))}

                          </ul>

                        </div>

                      )}

                  </div>

                ))}


                {/* IMMEDIATE ACTIONS */}

                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

                  <p className="text-xs uppercase tracking-[3px] text-orange-400">
                    Immediate Diagnostic Actions
                  </p>

                  <h2 className="mt-2 text-xl font-bold">
                    What should be checked first?
                  </h2>

                  <ul className="mt-5 space-y-3">

                    {result.immediateActions.map((item, index) => (

                      <li
                        key={index}
                        className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4"
                      >

                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-xs font-bold text-orange-400">
                          {index + 1}
                        </span>

                        <span className="text-sm leading-6 text-slate-300">
                          {item}
                        </span>

                      </li>

                    ))}

                  </ul>

                </div>


                {/* FURTHER QUESTIONS */}

                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

                  <p className="text-xs uppercase tracking-[3px] text-orange-400">
                    Next Diagnostic Questions
                  </p>

                  <h2 className="mt-2 text-xl font-bold">
                    Additional information required
                  </h2>

                  <ul className="mt-5 space-y-3">

                    {result.furtherQuestions.map((question, index) => (

                      <li
                        key={index}
                        className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm leading-6 text-slate-300"
                      >
                        {index + 1}. {question}
                      </li>

                    ))}

                  </ul>

                </div>


                {/* GLOBAL SAFETY */}

                <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

                  <p className="text-xs uppercase tracking-[3px] text-red-400">
                    Safety
                  </p>

                  <ul className="mt-4 space-y-2">

                    {result.safetyWarnings.map((warning, index) => (

                      <li
                        key={index}
                        className="text-sm leading-6 text-red-300"
                      >
                        • {warning}
                      </li>

                    ))}

                  </ul>

                </div>

              </div>

            )}

          </div>


          {/* ===================================================== */}
          {/* RIGHT SIDEBAR */}
          {/* ===================================================== */}

          <aside className="h-fit rounded-2xl border border-slate-800 bg-slate-950 p-6 lg:sticky lg:top-8">

            <p className="text-xs uppercase tracking-[3px] text-orange-400">
              AENA Retrofit Intelligence
            </p>

            <h2 className="mt-3 text-xl font-bold">
              Engineering Diagnosis
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              The system collects machine context, operator symptoms and
              affected-system information before generating a preliminary
              engineering diagnosis.
            </p>


            <div className="mt-8 space-y-4">

              <Status
                number="01"
                title="Machine Context"
                active={true}
              />

              <Status
                number="02"
                title="Fault Analysis"
                active={Boolean(symptom)}
              />

              <Status
                number="03"
                title="System Analysis"
                active={Boolean(system)}
              />

              <Status
                number="04"
                title="Engineering Diagnosis"
                active={Boolean(result)}
              />

              <Status
                number="05"
                title="Recommended Action"
                active={Boolean(result)}
              />

            </div>


            <div className="mt-8 rounded-xl border border-orange-500/20 bg-orange-500/5 p-4">

              <p className="text-xs uppercase tracking-[2px] text-orange-400">
                AENA AI
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Built for industrial machine troubleshooting, retrofit and
                modernization.
              </p>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}


/* =============================================================== */
/* INPUT COMPONENT */
/* =============================================================== */

function Input({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder?: string;
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
        placeholder={placeholder}
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
          focus:ring-1
          focus:ring-orange-500/30
        "
      />

    </div>
  );
}


/* =============================================================== */
/* EVIDENCE BUTTON */
/* =============================================================== */

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
        Coming in evidence analysis
      </p>

    </button>
  );
}


/* =============================================================== */
/* STATUS */
/* =============================================================== */

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
              ? "border-orange-500/40 bg-orange-500/10 text-orange-400"
              : "border-slate-800 bg-slate-900 text-slate-600"
          }
        `}
      >
        {number}
      </div>

      <p
        className={`
          text-sm
          ${active ? "text-slate-200" : "text-slate-600"}
        `}
      >
        {title}
      </p>

    </div>
  );
}


/* =============================================================== */
/* RESULT LIST */
/* =============================================================== */

function ResultList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">

      <p className="text-xs uppercase tracking-[2px] text-orange-400">
        {title}
      </p>

      <ul className="mt-3 space-y-2">

        {items.map((item, index) => (

          <li
            key={index}
            className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm leading-6 text-slate-300"
          >
            • {item}
          </li>

        ))}

      </ul>

    </div>
  );
}


/* =============================================================== */
/* SEVERITY */
/* =============================================================== */

function SeverityBadge({
  severity,
}: {
  severity: "low" | "medium" | "high" | "critical";
}) {

  const styles = {
    low: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    medium: "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",
    high: "border-orange-500/30 bg-orange-500/10 text-orange-400",
    critical: "border-red-500/30 bg-red-500/10 text-red-400",
  };

  return (
    <div
      className={`
        rounded-lg
        border
        px-3
        py-2
        text-xs
        font-bold
        uppercase
        tracking-wider
        ${styles[severity]}
      `}
    >
      Severity: {severity}
    </div>
  );
}