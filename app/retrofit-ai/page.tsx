"use client";

import {
  useRef,
  useState,
  FormEvent,
} from "react";

/* =========================================================
   TYPES
========================================================= */

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

  severity:
    | "low"
    | "medium"
    | "high"
    | "critical";

  diagnoses: Diagnosis[];

  immediateActions: string[];

  furtherQuestions: string[];

  safetyWarnings: string[];

  confidence: number;
};

/* =========================================================
   PAGE
========================================================= */

export default function RetrofitAIPage() {
  const [symptom, setSymptom] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<RetrofitAIResponse | null>(
      null
    );

  const [error, setError] =
    useState("");

  const [selectedFiles, setSelectedFiles] =
    useState<File[]>([]);

  const imageInputRef =
    useRef<HTMLInputElement>(null);

  const videoInputRef =
    useRef<HTMLInputElement>(null);

  const documentInputRef =
    useRef<HTMLInputElement>(null);

  /* =======================================================
     FILE HANDLING
  ======================================================= */

  function addFiles(
    files: FileList | null
  ) {
    if (!files) {
      return;
    }

    const incoming =
      Array.from(files);

    setSelectedFiles((prev) => {
      const combined = [
        ...prev,
        ...incoming,
      ];

      const unique =
        combined.filter(
          (
            file,
            index,
            self
          ) =>
            index ===
            self.findIndex(
              (item) =>
                item.name ===
                  file.name &&
                item.size ===
                  file.size &&
                item.lastModified ===
                  file.lastModified
            )
        );

      return unique;
    });
  }

  function removeFile(
    index: number
  ) {
    setSelectedFiles((prev) =>
      prev.filter(
        (_, i) =>
          i !== index
      )
    );
  }

  /* =======================================================
     AI ANALYSIS
  ======================================================= */

  async function analyzeMachine(
    e?: FormEvent
  ) {
    if (e) {
      e.preventDefault();
    }

    setError("");
    setResult(null);

    /*
     * Problem validation
     */

    if (!symptom.trim()) {
      setError(
        "Please describe what is happening with the machine."
      );

      return;
    }

    if (
      symptom.trim().length <
      10
    ) {
      setError(
        "Please provide a little more information about the machine problem."
      );

      return;
    }

    setLoading(true);

    try {
      /*
       * ---------------------------------------------------
       * FORM DATA
       * ---------------------------------------------------
       *
       * IMPORTANT:
       *
       * We are no longer sending JSON.
       *
       * The actual files are sent to the backend.
       */

      const formData =
        new FormData();

      formData.append(
        "symptom",
        symptom.trim()
      );

      selectedFiles.forEach(
        (file) => {
          formData.append(
            "files",
            file
          );
        }
      );

      console.log(
        "================================="
      );

      console.log(
        "AENA RETROFIT AI REQUEST"
      );

      console.log(
        "================================="
      );

      console.log(
        "Symptom:",
        symptom
      );

      console.log(
        "Files:",
        selectedFiles.map(
          (file) => ({
            name: file.name,
            type: file.type,
            size: file.size,
          })
        )
      );

      /*
       * ---------------------------------------------------
       * API REQUEST
       * ---------------------------------------------------
       *
       * Do NOT manually specify Content-Type.
       *
       * Browser will create multipart/form-data boundary.
       */

      const response =
        await fetch(
          "/api/retrofit-ai",
          {
            method: "POST",

            body: formData,
          }
        );

      console.log(
        "API STATUS:",
        response.status
      );

      console.log(
        "API STATUS TEXT:",
        response.statusText
      );

      /*
       * ---------------------------------------------------
       * READ RAW RESPONSE
       * ---------------------------------------------------
       */

      const responseText =
        await response.text();

      console.log(
        "================================="
      );

      console.log(
        "AENA RETROFIT AI RAW RESPONSE"
      );

      console.log(
        responseText
      );

      console.log(
        "================================="
      );

      /*
       * ---------------------------------------------------
       * PARSE RESPONSE
       * ---------------------------------------------------
       */

      let data: any;

      try {
        data =
          JSON.parse(
            responseText
          );
      } catch {
        throw new Error(
          `Server returned an invalid response.

Status: ${response.status}

Response:
${responseText.substring(
  0,
  1500
)}`
        );
      }

      /*
       * ---------------------------------------------------
       * HTTP ERROR
       * ---------------------------------------------------
       */

      if (!response.ok) {
        throw new Error(
          data?.error ||
            `Retrofit AI request failed with status ${response.status}.`
        );
      }

      /*
       * ---------------------------------------------------
       * RESPONSE VALIDATION
       * ---------------------------------------------------
       */

      if (
        !data ||
        typeof data !==
          "object"
      ) {
        throw new Error(
          "The AI returned an invalid diagnosis."
        );
      }

      if (
        !data.summary
      ) {
        console.warn(
          "AI response does not contain summary."
        );
      }

      if (
        !Array.isArray(
          data.diagnoses
        )
      ) {
        console.warn(
          "AI response does not contain diagnoses array."
        );
      }

      if (
        typeof data.confidence !==
        "number"
      ) {
        console.warn(
          "AI response does not contain a valid confidence value."
        );
      }

      /*
       * ---------------------------------------------------
       * SAVE RESULT
       * ---------------------------------------------------
       */

      setResult(
        data as RetrofitAIResponse
      );

      /*
       * Scroll to result
       */

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    } catch (err) {
      console.error(
        "================================="
      );

      console.error(
        "AENA RETROFIT AI ERROR"
      );

      console.error(
        err
      );

      console.error(
        "================================="
      );

      setError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred."
      );

    } finally {
      setLoading(false);
    }
  }

  /* =======================================================
     WHATSAPP
  ======================================================= */

  function startWhatsApp() {
    /*
     * IMPORTANT:
     *
     * Replace this with the real AENA WhatsApp number.
     *
     * Format:
     *
     * 905XXXXXXXXX
     *
     * No + sign.
     * No spaces.
     */

    const phone =
      "905XXXXXXXXX";

    /*
     * AI diagnosis
     */

    const diagnosisText =
      result
        ? `

AENA AI preliminary assessment:

Summary:
${result.summary}

Severity:
${result.severity}

Confidence:
${result.confidence}%

`
        : "";

    /*
     * WhatsApp message
     */

    const message = `Hello AENA,

I need engineering support for an industrial machine.

Reported problem:

${symptom}

${diagnosisText}

I would like to continue the diagnosis with an AENA engineer.`;

    /*
     * WhatsApp URL
     */

    const url =
      `https://wa.me/${phone}?text=` +
      encodeURIComponent(
        message
      );

    window.open(
      url,
      "_blank"
    );
  }

  /* =======================================================
     NEW ANALYSIS
  ======================================================= */

  function startNewAnalysis() {
    setResult(null);

    setError("");

    setSymptom("");

    setSelectedFiles([]);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  /* =======================================================
     PAGE UI
  ======================================================= */

  return (
    <main className="min-h-screen bg-[#020617] text-white">

      {/* HEADER */}

      <header className="border-b border-slate-800">

        <div className="mx-auto max-w-5xl px-5 py-8">

          <div className="flex items-center justify-between gap-4">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[4px] text-orange-400">
                AENA Technologies
              </p>

              <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
                Retrofit AI
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Industrial machine troubleshooting assistant
              </p>

            </div>

            <div className="hidden items-center gap-2 text-xs text-emerald-400 sm:flex">

              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              ONLINE

            </div>

          </div>

        </div>

      </header>


      {/* MAIN */}

      <section className="mx-auto max-w-5xl px-5 py-10">

        {!result && (

          <form
            onSubmit={
              analyzeMachine
            }
            className="space-y-6"
          >

            {/* =========================================
                PROBLEM
            ========================================= */}

            <section className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8">

              <div className="max-w-3xl">

                <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-400">
                  Start diagnosis
                </p>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  What is happening with your machine?
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Describe the problem as you see it
                  in the field. You do not need to
                  know which component is causing
                  the fault.
                </p>

              </div>

              <textarea
                value={symptom}
                onChange={(e) =>
                  setSymptom(
                    e.target.value
                  )
                }
                placeholder={`Example:

The extruder was running normally. When production speed increases, the motor current rises to around 90A, but the feeding motor continues running at the same speed. There is no alarm on the HMI.`}
                className="mt-7 min-h-[240px] w-full resize-none rounded-2xl border border-slate-700 bg-slate-900 p-5 text-sm leading-7 text-white outline-none placeholder:text-slate-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
              />

              <div className="mt-3 flex justify-between text-xs text-slate-600">

                <span>
                  {symptom.length} characters
                </span>

                <span>
                  More detail = better diagnosis
                </span>

              </div>

            </section>


            {/* =========================================
                EVIDENCE
            ========================================= */}

            <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-400">
                  Optional evidence
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  Show AENA what you see
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Add photos, videos or engineering
                  documents when available.
                </p>

              </div>


              <div className="mt-5 grid gap-3 sm:grid-cols-3">

                <EvidenceButton
                  icon="📷"
                  title="Photo"
                  description="HMI, panel, drive or machine"
                  onClick={() =>
                    imageInputRef.current?.click()
                  }
                />

                <EvidenceButton
                  icon="🎥"
                  title="Video"
                  description="Machine behavior or fault"
                  onClick={() =>
                    videoInputRef.current?.click()
                  }
                />

                <EvidenceButton
                  icon="📄"
                  title="Document"
                  description="PLC, drive or electrical files"
                  onClick={() =>
                    documentInputRef.current?.click()
                  }
                />

              </div>


              {/* IMAGE INPUT */}

              <input
                ref={
                  imageInputRef
                }
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => {

                  addFiles(
                    e.target.files
                  );

                  e.target.value =
                    "";

                }}
              />


              {/* VIDEO INPUT */}

              <input
                ref={
                  videoInputRef
                }
                type="file"
                accept="video/*"
                multiple
                className="hidden"
                onChange={(e) => {

                  addFiles(
                    e.target.files
                  );

                  e.target.value =
                    "";

                }}
              />


              {/* DOCUMENT INPUT */}

              <input
                ref={
                  documentInputRef
                }
                type="file"
                accept=".pdf,.zip,.rar,.doc,.docx,.xls,.xlsx,.csv,.txt,.log,.prj"
                multiple
                className="hidden"
                onChange={(e) => {

                  addFiles(
                    e.target.files
                  );

                  e.target.value =
                    "";

                }}
              />


              {/* SELECTED FILES */}

              {selectedFiles.length >
                0 && (

                <div className="mt-5 space-y-2">

                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Selected evidence
                  </p>

                  {selectedFiles.map(
                    (
                      file,
                      index
                    ) => (

                      <div
                        key={`${file.name}-${index}`}
                        className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-4 py-3"
                      >

                        <div className="min-w-0">

                          <p className="truncate text-sm text-slate-300">
                            {file.name}
                          </p>

                          <p className="text-xs text-slate-600">
                            {(
                              file.size /
                              1024 /
                              1024
                            ).toFixed(
                              2
                            )}{" "}
                            MB
                          </p>

                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            removeFile(
                              index
                            )
                          }
                          className="ml-4 text-xs text-red-400 hover:text-red-300"
                        >
                          Remove
                        </button>

                      </div>

                    )
                  )}

                </div>

              )}

            </section>


            {/* =========================================
                ERROR
            ========================================= */}

            {error && (

              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-5">

                <p className="text-sm font-semibold text-red-400">
                  Analysis Error
                </p>

                <pre className="mt-2 whitespace-pre-wrap text-sm leading-6 text-red-300">
                  {error}
                </pre>

              </div>

            )}


            {/* =========================================
                ANALYZE BUTTON
            ========================================= */}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-orange-500 px-6 py-5 text-sm font-bold transition hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20 disabled:cursor-not-allowed disabled:opacity-60"
            >

              {loading
                ? "AENA AI is analyzing the machine..."
                : "Analyze Machine Problem →"}

            </button>


            {/* DISCLAIMER */}

            <p className="text-center text-xs leading-5 text-slate-600">
              Preliminary AI analysis only.
              Final diagnosis may require
              measurements, machine access
              and engineering inspection.
            </p>

          </form>

        )}


        {/* =========================================
            RESULTS
        ========================================= */}

        {result && (

          <DiagnosisView
            result={
              result
            }
            symptom={
              symptom
            }
            selectedFiles={
              selectedFiles
            }
            onWhatsApp={
              startWhatsApp
            }
            onNewAnalysis={
              startNewAnalysis
            }
          />

        )}

      </section>

    </main>
  );
}


/* =========================================================
   DIAGNOSIS VIEW
========================================================= */

function DiagnosisView({
  result,
  symptom,
  selectedFiles,
  onWhatsApp,
  onNewAnalysis,
}: {
  result: RetrofitAIResponse;
  symptom: string;
  selectedFiles: File[];
  onWhatsApp: () => void;
  onNewAnalysis: () => void;
}) {

  return (

    <div className="space-y-6">

      {/* RESULT HEADER */}

      <section className="rounded-3xl border border-orange-500/30 bg-orange-500/5 p-6 sm:p-8">

        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-400">
              AENA Engineering Assessment
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Preliminary Diagnosis
            </h2>

          </div>

          <SeverityBadge
            severity={
              result.severity
            }
          />

        </div>


        <p className="mt-6 text-base leading-8 text-slate-300">
          {result.summary}
        </p>


        <div className="mt-6 flex flex-wrap gap-3">

          <div className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3">

            <span className="text-xs text-slate-500">
              AI confidence
            </span>

            <p className="mt-1 font-bold text-orange-400">
              {result.confidence}%
            </p>

          </div>


          <div className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3">

            <span className="text-xs text-slate-500">
              Evidence
            </span>

            <p className="mt-1 font-bold text-slate-300">

              {selectedFiles.length} file
              {selectedFiles.length ===
              1
                ? ""
                : "s"}

            </p>

          </div>

        </div>

      </section>


      {/* USER PROBLEM */}

      <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

        <p className="text-xs uppercase tracking-[3px] text-slate-500">
          Reported problem
        </p>

        <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-300">
          {symptom}
        </p>

      </section>


      {/* DIAGNOSES */}

      {result.diagnoses.map(
        (diagnosis) => (

          <section
            key={
              diagnosis.id
            }
            className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8"
          >

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

              <div>

                <p className="text-xs uppercase tracking-[3px] text-slate-500">
                  {diagnosis.system}
                </p>

                <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                  {diagnosis.fault}
                </h3>

              </div>


              <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 px-3 py-2 text-sm font-bold text-orange-400">
                {diagnosis.probability}% probability
              </div>

            </div>


            {/* ENGINEERING REASONING */}

            <div className="mt-7">

              <p className="text-xs uppercase tracking-[2px] text-orange-400">
                Engineering reasoning
              </p>

              <p className="mt-3 text-sm leading-8 text-slate-300">
                {diagnosis.explanation}
              </p>

            </div>


            {/* EVIDENCE USED */}

            {diagnosis.evidenceUsed &&
              diagnosis.evidenceUsed.length >
                0 && (

                <ResultList
                  title="Evidence used"
                  items={
                    diagnosis.evidenceUsed
                  }
                />

              )}


            {/* POSSIBLE CAUSES */}

            <ResultList
              title="Possible causes"
              items={
                diagnosis.possibleCauses
              }
            />


            {/* CHECKS */}

            <ResultList
              title="Recommended checks"
              items={
                diagnosis.recommendedChecks
              }
            />


            {/* ACTIONS */}

            <ResultList
              title="Recommended actions"
              items={
                diagnosis.recommendedActions
              }
            />


            {/* TOOLS */}

            {diagnosis.requiredTools &&
              diagnosis.requiredTools.length >
                0 && (

                <ResultList
                  title="Required tools"
                  items={
                    diagnosis.requiredTools
                  }
                />

              )}


            {/* SAFETY */}

            {diagnosis.safetyWarnings &&
              diagnosis.safetyWarnings.length >
                0 && (

                <div className="mt-7">

                  <SafetyList
                    items={
                      diagnosis.safetyWarnings
                    }
                  />

                </div>

              )}

          </section>

        )
      )}


      {/* IMMEDIATE ACTIONS */}

      {result.immediateActions &&
        result.immediateActions.length >
          0 && (

        <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8">

          <p className="text-xs uppercase tracking-[3px] text-orange-400">
            First diagnostic step
          </p>

          <h2 className="mt-2 text-xl font-bold">
            What should be checked first?
          </h2>

          <div className="mt-5 space-y-3">

            {result.immediateActions.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4"
                >

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-xs font-bold text-orange-400">
                    {index + 1}
                  </span>

                  <p className="text-sm leading-7 text-slate-300">
                    {item}
                  </p>

                </div>

              )
            )}

          </div>

        </section>

      )}


      {/* QUESTIONS */}

      {result.furtherQuestions &&
        result.furtherQuestions.length >
          0 && (

        <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8">

          <p className="text-xs uppercase tracking-[3px] text-orange-400">
            To narrow the diagnosis
          </p>

          <h2 className="mt-2 text-xl font-bold">
            AENA needs a little more information
          </h2>

          <div className="mt-5 space-y-3">

            {result.furtherQuestions.map(
              (
                question,
                index
              ) => (

                <div
                  key={index}
                  className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm leading-7 text-slate-300"
                >

                  <span className="mr-2 font-bold text-orange-400">
                    {index + 1}.
                  </span>

                  {question}

                </div>

              )
            )}

          </div>

        </section>

      )}


      {/* =========================================
          WHATSAPP CTA
      ========================================= */}

      <section className="rounded-3xl border border-orange-500/30 bg-orange-500/5 p-6 sm:p-8">

        <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-400">
          Need deeper diagnosis?
        </p>

        <h2 className="mt-3 text-2xl font-bold">
          Continue with an AENA engineer
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
          AI can narrow the possible fault paths,
          but some machine problems require
          measurements, PLC/drive diagnostics,
          electrical drawings or physical inspection.
        </p>

        <button
          type="button"
          onClick={
            onWhatsApp
          }
          className="mt-6 w-full rounded-xl bg-green-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-green-500 sm:w-auto"
        >
          Continue with AENA on WhatsApp →
        </button>

        <p className="mt-3 text-xs text-slate-600">
          The preliminary diagnosis can be included
          in the WhatsApp conversation.
        </p>

      </section>


      {/* NEW ANALYSIS */}

      <div className="text-center">

        <button
          type="button"
          onClick={
            onNewAnalysis
          }
          className="text-sm text-slate-500 transition hover:text-orange-400"
        >
          ← Start a new diagnosis
        </button>

      </div>


      {/* GLOBAL SAFETY */}

      {result.safetyWarnings &&
        result.safetyWarnings.length >
          0 && (

        <SafetyList
          items={
            result.safetyWarnings
          }
        />

      )}

    </div>
  );
}


/* =========================================================
   EVIDENCE BUTTON
========================================================= */

function EvidenceButton({
  icon,
  title,
  description,
  onClick,
}: {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
}) {

  return (

    <button
      type="button"
      onClick={onClick}
      className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-left transition hover:border-orange-500/50 hover:bg-slate-800"
    >

      <div className="text-2xl">
        {icon}
      </div>

      <p className="mt-3 text-sm font-semibold text-slate-200">
        {title}
      </p>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {description}
      </p>

    </button>

  );
}


/* =========================================================
   RESULT LIST
========================================================= */

function ResultList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {

  if (
    !items ||
    items.length ===
      0
  ) {
    return null;
  }

  return (

    <div className="mt-7">

      <p className="text-xs uppercase tracking-[2px] text-orange-400">
        {title}
      </p>

      <ul className="mt-3 space-y-2">

        {items.map(
          (
            item,
            index
          ) => (

            <li
              key={index}
              className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm leading-7 text-slate-300"
            >
              • {item}
            </li>

          )
        )}

      </ul>

    </div>

  );
}


/* =========================================================
   SAFETY LIST
========================================================= */

function SafetyList({
  items,
}: {
  items: string[];
}) {

  if (
    !items ||
    items.length ===
      0
  ) {
    return null;
  }

  return (

    <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

      <p className="text-xs uppercase tracking-[2px] text-red-400">
        Safety
      </p>

      <ul className="mt-4 space-y-2">

        {items.map(
          (
            item,
            index
          ) => (

            <li
              key={index}
              className="text-sm leading-7 text-red-300"
            >
              • {item}
            </li>

          )
        )}

      </ul>

    </div>

  );
}


/* =========================================================
   SEVERITY BADGE
========================================================= */

function SeverityBadge({
  severity,
}: {
  severity:
    | "low"
    | "medium"
    | "high"
    | "critical";
}) {

  const styles = {

    low:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",

    medium:
      "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",

    high:
      "border-orange-500/30 bg-orange-500/10 text-orange-400",

    critical:
      "border-red-500/30 bg-red-500/10 text-red-400",

  };

  return (

    <div
      className={`rounded-lg border px-3 py-2 text-xs font-bold uppercase tracking-wider ${styles[severity]}`}
    >
      Severity: {severity}
    </div>

  );
}