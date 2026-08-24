"use client";

import {
  useRef,
  useState,
  FormEvent,
} from "react";

/* =========================================================
   TYPES
========================================================= */

type Severity =
  | "low"
  | "medium"
  | "high"
  | "critical";

type ConversationMessage = {
  role: "user" | "assistant";
  content: string;
};

type RetrofitAIResponse = {
  summary: string;
  check: string;
  question: string;
  severity: Severity;
  needsEngineer: boolean;
  aenaAction?: string;
  safetyWarning: string;
  caseId?: string;
};

type EvidenceFile = File;

/* =========================================================
   PAGE
========================================================= */

export default function RetrofitAIPage() {
  const [symptom, setSymptom] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<RetrofitAIResponse | null>(null);

  const [error, setError] =
    useState("");

  const [conversation, setConversation] =
    useState<ConversationMessage[]>([]);

  const [selectedFiles, setSelectedFiles] =
    useState<EvidenceFile[]>([]);

  const [analysisStarted, setAnalysisStarted] =
    useState(false);

  const [caseId, setCaseId] =
    useState<string | null>(null);

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
    if (!files) return;

    const incoming = Array.from(files);

    setSelectedFiles((prev) => {
      const combined = [
        ...prev,
        ...incoming,
      ];

      return combined.filter(
        (
          file,
          index,
          self
        ) =>
          index ===
          self.findIndex(
            (item) =>
              item.name === file.name &&
              item.size === file.size &&
              item.lastModified ===
                file.lastModified
          )
      );
    });
  }

  function removeFile(index: number) {
    setSelectedFiles((prev) =>
      prev.filter(
        (_, i) => i !== index
      )
    );
  }

  /* =======================================================
     USER DIAGNOSTIC ROUND
  ======================================================= */

  const userMessageCount =
    conversation.filter(
      (message) =>
        message.role === "user"
    ).length;

  /*
   * We don't allow the first AI response to immediately
   * hand the customer to WhatsApp.
   *
   * Minimum diagnostic interaction:
   *
   * 1 = initial problem
   * 2 = first diagnostic answer
   * 3 = second diagnostic answer
   *
   * After this point AI can decide that engineering
   * intervention is appropriate.
   */

  const minimumDiagnosticRounds = 3;

  const diagnosticComplete =
    Boolean(
      result &&
        result.needsEngineer &&
        userMessageCount >=
          minimumDiagnosticRounds
    );

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

    const currentMessage =
      symptom.trim();

    if (!currentMessage) {
      setError(
        "Please describe what is happening with the machine."
      );
      return;
    }

    if (currentMessage.length < 3) {
      setError(
        "Please provide a little more information."
      );
      return;
    }

    setLoading(true);

    try {
      const formData =
        new FormData();

      formData.append(
        "symptom",
        currentMessage
      );

      formData.append(
        "conversation",
        JSON.stringify(
          conversation
        )
      );

      if (caseId) {
        formData.append(
          "case_id",
          caseId
        );
      }

      /*
       * Evidence is sent with the request.
       */
      selectedFiles.forEach(
        (file) => {
          formData.append(
            "files",
            file
          );
        }
      );

      const response =
        await fetch(
          "/api/retrofit-ai",
          {
            method: "POST",
            body: formData,
          }
        );

      const responseText =
        await response.text();

      let data: RetrofitAIResponse;

      try {
        data =
          JSON.parse(
            responseText
          );
      } catch {
        throw new Error(
          `Server returned an invalid response.

Status: ${response.status}

${responseText.substring(
  0,
  1200
)}`
        );
      }

      if (!response.ok) {
        throw new Error(
          "error" in data
            ? String(
                (
                  data as unknown as {
                    error: string;
                  }
                ).error
              )
            : `Retrofit AI request failed with status ${response.status}.`
        );
      }

      if (
        !data ||
        typeof data.summary !==
          "string"
      ) {
        throw new Error(
          "The AI returned an invalid diagnosis."
        );
      }

      /* ===================================================
         CASE ID
      =================================================== */

      if (data.caseId) {
        setCaseId(
          data.caseId
        );
      }

      /* ===================================================
         CONVERSATION
      =================================================== */

      const assistantMessage =
        buildAssistantMessage(
          data
        );

      const newConversation: ConversationMessage[] =
        [
          ...conversation,

          {
            role: "user",
            content:
              currentMessage,
          },

          {
            role: "assistant",
            content:
              assistantMessage,
          },
        ];

      setConversation(
        newConversation
      );

      setResult(data);

      setAnalysisStarted(
        true
      );

      setSymptom("");

      /*
       * Initial evidence is only needed
       * during the first analysis.
       */
      if (
        conversation.length === 0
      ) {
        setSelectedFiles([]);
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    } catch (err) {
      console.error(
        "AENA RETROFIT AI ERROR:",
        err
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
     ASSISTANT MESSAGE
  ======================================================= */

  function buildAssistantMessage(
    data: RetrofitAIResponse
  ) {
    const parts: string[] = [];

    if (data.summary) {
      parts.push(
        data.summary
      );
    }

    if (data.check) {
      parts.push(
        `İlk kontrol: ${data.check}`
      );
    }

    if (data.question) {
      parts.push(
        data.question
      );
    }

    if (data.aenaAction) {
      parts.push(
        `AENA çözüm yönü: ${data.aenaAction}`
      );
    }

    if (data.safetyWarning) {
      parts.push(
        `Güvenlik: ${data.safetyWarning}`
      );
    }

    return parts.join(
      "\n\n"
    );
  }

  /* =======================================================
     WHATSAPP
  ======================================================= */

  function startWhatsApp() {
    const phone =
      "905061234843";

    const conversationText =
      conversation
        .map(
          (message) =>
            `${
              message.role ===
              "user"
                ? "Kullanıcı"
                : "AENA Retrofit AI"
            }:\n${message.content}`
        )
        .join(
          "\n\n"
        );

    const message =
`Merhaba AENA,

Retrofit AI üzerinden makinemle ilgili mühendislik ön analizi yaptım.

CASE ID:
${caseId || "Belirtilmedi"}

PROBLEM VE TEŞHİS GÖRÜŞMESİ:

${conversationText}

AENA mühendislik ekibiyle devam etmek istiyorum.`;

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
    setConversation([]);
    setSelectedFiles([]);
    setCaseId(null);
    setAnalysisStarted(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  /* =======================================================
     UI
  ======================================================= */

  return (
    <main className="min-h-screen bg-[#020617] text-white">

      <header className="border-b border-slate-800">
        <div className="mx-auto max-w-4xl px-5 py-8">

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

      <section className="mx-auto max-w-4xl px-5 py-10">

        {!analysisStarted && (
          <InitialDiagnosisForm
            symptom={symptom}
            setSymptom={setSymptom}
            loading={loading}
            error={error}
            selectedFiles={
              selectedFiles
            }
            addFiles={addFiles}
            removeFile={
              removeFile
            }
            imageInputRef={
              imageInputRef
            }
            videoInputRef={
              videoInputRef
            }
            documentInputRef={
              documentInputRef
            }
            onSubmit={
              analyzeMachine
            }
          />
        )}

        {analysisStarted && (
          <ConversationView
            conversation={
              conversation
            }
            result={result}
            symptom={symptom}
            setSymptom={
              setSymptom
            }
            loading={loading}
            error={error}
            selectedFiles={
              selectedFiles
            }
            onSubmit={
              analyzeMachine
            }
            onWhatsApp={
              startWhatsApp
            }
            onNewAnalysis={
              startNewAnalysis
            }
            caseId={caseId}
            diagnosticComplete={
              diagnosticComplete
            }
            userMessageCount={
              userMessageCount
            }
            minimumDiagnosticRounds={
              minimumDiagnosticRounds
            }
          />
        )}

      </section>

    </main>
  );
}

/* =========================================================
   INITIAL FORM
========================================================= */

function InitialDiagnosisForm({
  symptom,
  setSymptom,
  loading,
  error,
  selectedFiles,
  addFiles,
  removeFile,
  imageInputRef,
  videoInputRef,
  documentInputRef,
  onSubmit,
}: {
  symptom: string;
  setSymptom: (
    value: string
  ) => void;
  loading: boolean;
  error: string;
  selectedFiles: File[];
  addFiles: (
    files: FileList | null
  ) => void;
  removeFile: (
    index: number
  ) => void;
  imageInputRef:
    React.RefObject<
      HTMLInputElement | null
    >;
  videoInputRef:
    React.RefObject<
      HTMLInputElement | null
    >;
  documentInputRef:
    React.RefObject<
      HTMLInputElement | null
    >;
  onSubmit: (
    e?: FormEvent
  ) => void;
}) {
  return (
    <div className="space-y-8">

      <div className="max-w-3xl">

        <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-400">
          Industrial Machine Troubleshooting
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          What is happening with your machine?
        </h2>

        <p className="mt-4 text-sm leading-8 text-slate-400">
          Describe the problem as you see it in the field.
          You do not need to know which component is causing
          the fault.
        </p>

      </div>

      <form
        onSubmit={onSubmit}
        className="space-y-6"
      >

        <section className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8">

          <textarea
            value={symptom}
            onChange={(e) =>
              setSymptom(
                e.target.value
              )
            }
            placeholder={`Example:

The extruder runs normally at low speed. When production speed increases, the main motor starts to struggle and the current rises. There is no alarm on the HMI.`}
            className="min-h-[220px] w-full resize-none rounded-2xl border border-slate-700 bg-slate-900 p-5 text-sm leading-7 text-white outline-none placeholder:text-slate-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
          />

          <div className="mt-3 flex justify-between text-xs text-slate-600">

            <span>
              {symptom.length} characters
            </span>

            <span>
              More detail helps the diagnosis
            </span>

          </div>

        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

          <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-400">
            Optional evidence
          </p>

          <h2 className="mt-2 text-xl font-bold">
            Show AENA what you see
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Add photos, videos or engineering documents
            when available.
          </p>

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

          <input
            ref={imageInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => {
              addFiles(
                e.target.files
              );
              e.target.value = "";
            }}
          />

          <input
            ref={videoInputRef}
            type="file"
            accept="video/*"
            multiple
            className="hidden"
            onChange={(e) => {
              addFiles(
                e.target.files
              );
              e.target.value = "";
            }}
          />

          <input
            ref={documentInputRef}
            type="file"
            accept=".pdf,.zip,.rar,.doc,.docx,.xls,.xlsx,.csv,.txt,.log,.prj"
            multiple
            className="hidden"
            onChange={(e) => {
              addFiles(
                e.target.files
              );
              e.target.value = "";
            }}
          />

          {selectedFiles.length > 0 && (
            <div className="mt-5 space-y-2">

              <p className="text-xs uppercase tracking-wider text-slate-500">
                Selected evidence
              </p>

              {selectedFiles.map(
                (file, index) => (
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
                        ).toFixed(2)}{" "}
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

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-orange-500 px-6 py-5 text-sm font-bold transition hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading
            ? "AENA AI is analyzing..."
            : "Start AI Diagnosis →"}
        </button>

        <p className="text-center text-xs leading-5 text-slate-600">
          Preliminary AI analysis only. Some problems may require
          measurements, machine access and engineering inspection.
        </p>

      </form>

    </div>
  );
}

/* =========================================================
   CONVERSATION VIEW
========================================================= */

function ConversationView({
  conversation,
  result,
  symptom,
  setSymptom,
  loading,
  error,
  onSubmit,
  onWhatsApp,
  onNewAnalysis,
  caseId,
  diagnosticComplete,
  userMessageCount,
  minimumDiagnosticRounds,
}: {
  conversation: ConversationMessage[];
  result: RetrofitAIResponse | null;
  symptom: string;
  setSymptom: (
    value: string
  ) => void;
  loading: boolean;
  error: string;
  selectedFiles: File[];
  onSubmit: (
    e?: FormEvent
  ) => void;
  onWhatsApp: () => void;
  onNewAnalysis: () => void;
  caseId: string | null;
  diagnosticComplete: boolean;
  userMessageCount: number;
  minimumDiagnosticRounds: number;
}) {
  /*
   * If AI prematurely says needsEngineer=true,
   * we still do NOT show WhatsApp.
   */
  const showEngineerCTA =
    diagnosticComplete;

  /*
   * Normal AI question.
   */
  const hasQuestion =
    Boolean(
      result?.question
    );

  return (
    <div className="space-y-6">

      {/* ===================================================
          HEADER
      =================================================== */}

      <section className="rounded-3xl border border-orange-500/30 bg-orange-500/5 p-6 sm:p-8">

        <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-400">
          AENA Retrofit AI
        </p>

        <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
          Troubleshooting in progress
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          AI is narrowing the fault step by step.
          Each answer changes the diagnostic direction.
        </p>

        
        

      </section>

      {/* ===================================================
          CONVERSATION
      =================================================== */}

      <section className="space-y-4">

        {conversation.map(
          (message, index) => (
            <div
              key={index}
              className={
                message.role ===
                "user"
                  ? "flex justify-end"
                  : "flex justify-start"
              }
            >

              <div
                className={
                  message.role ===
                  "user"
                    ? "max-w-[90%] rounded-2xl rounded-br-md bg-orange-500 px-5 py-4 text-sm leading-7 text-white"
                    : "max-w-[90%] rounded-2xl rounded-bl-md border border-slate-800 bg-slate-950 px-5 py-4 text-sm leading-7 text-slate-300"
                }
              >

                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[2px] opacity-60">
                  {message.role ===
                  "user"
                    ? "You"
                    : "AENA Retrofit AI"}
                </p>

                <p className="whitespace-pre-wrap">
                  {message.content}
                </p>

              </div>

            </div>
          )
        )}

      </section>

      {/* ===================================================
          DIAGNOSTIC PROGRESS
      =================================================== */}

      {!showEngineerCTA &&
        result &&
        result.needsEngineer && (
          <section className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5">

            <p className="text-xs font-semibold uppercase tracking-[3px] text-yellow-400">
              Diagnostic evidence
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              The current evidence suggests that
              engineering intervention may eventually
              be required, but the diagnostic session
              should continue before a field engineer
              is contacted.
            </p>

            <p className="mt-3 text-xs text-slate-600">
              Diagnostic stage:{" "}
              {userMessageCount} /{" "}
              {minimumDiagnosticRounds}
            </p>

          </section>
        )}

      {/* ===================================================
          NEXT QUESTION
      =================================================== */}

      {!showEngineerCTA &&
        hasQuestion && (
          <section className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-6">

            <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-400">
              Next diagnostic question
            </p>

            <p className="mt-3 text-lg font-semibold leading-8 text-white">
              {result?.question}
            </p>

            <form
              onSubmit={onSubmit}
              className="mt-6"
            >

              <textarea
                value={symptom}
                onChange={(e) =>
                  setSymptom(
                    e.target.value
                  )
                }
                placeholder="Write your answer here..."
                className="min-h-[130px] w-full resize-none rounded-2xl border border-slate-700 bg-slate-900 p-5 text-sm leading-7 text-white outline-none placeholder:text-slate-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
              />

              {error && (
                <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-4">

                  <p className="text-sm text-red-300">
                    {error}
                  </p>

                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full rounded-xl bg-orange-500 px-6 py-4 text-sm font-bold transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Analyzing..."
                  : "Continue Diagnosis →"}
              </button>

            </form>

          </section>
        )}

      {/* ===================================================
          IF AI DID NOT PRODUCE QUESTION
          BUT ENGINEER HANDOFF IS NOT YET ALLOWED
      =================================================== */}

      {!showEngineerCTA &&
        result &&
        !hasQuestion && (
          <section className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-6">

            <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-400">
              Continue diagnostic evidence
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              The preliminary evidence is not yet sufficient
              to finalize the engineering direction.
              Add the next observable machine behavior or
              measurement so the diagnostic path can continue.
            </p>

            <form
              onSubmit={onSubmit}
              className="mt-6"
            >

              <textarea
                value={symptom}
                onChange={(e) =>
                  setSymptom(
                    e.target.value
                  )
                }
                placeholder="Example: Motor current is 82 A at the normal production speed and rises to 108 A when the speed drops..."
                className="min-h-[130px] w-full resize-none rounded-2xl border border-slate-700 bg-slate-900 p-5 text-sm leading-7 text-white outline-none placeholder:text-slate-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full rounded-xl bg-orange-500 px-6 py-4 text-sm font-bold transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Analyzing..."
                  : "Add Evidence →"}
              </button>

            </form>

          </section>
        )}

      {/* ===================================================
          RECOMMENDED CHECK
      =================================================== */}

      {result &&
        result.check && (
          <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

            <p className="text-xs uppercase tracking-[3px] text-orange-400">
              Recommended check
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              {result.check}
            </p>

          </section>
        )}

      {/* ===================================================
          SAFETY
      =================================================== */}

      {result &&
        result.safetyWarning && (
          <section className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">

            <p className="text-xs uppercase tracking-[2px] text-red-400">
              Safety
            </p>

            <p className="mt-3 text-sm leading-7 text-red-300">
              {result.safetyWarning}
            </p>

          </section>
        )}

      {/* ===================================================
          AENA ENGINEERING HANDOFF
      =================================================== */}

      {showEngineerCTA &&
        result && (
          <section className="rounded-3xl border border-orange-500/30 bg-orange-500/5 p-6 sm:p-8">

            <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-400">
              AENA Engineering
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Engineering intervention is now recommended
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              The diagnostic session has collected enough
              evidence to move from preliminary troubleshooting
              toward an engineering assessment.
            </p>

            {result.aenaAction && (
              <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950 p-5">

                <p className="text-xs font-semibold uppercase tracking-[2px] text-orange-400">
                  What AENA can do
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {result.aenaAction}
                </p>

              </div>
            )}

            <div className="mt-6 grid gap-3 sm:grid-cols-3">

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">

                <p className="text-xs text-slate-500">
                  Diagnostic stage
                </p>

                <p className="mt-2 text-lg font-bold text-white">
                  {userMessageCount}
                  {" "}
                  interactions
                </p>

              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">

                <p className="text-xs text-slate-500">
                  Severity
                </p>

                <p className="mt-2 text-lg font-bold uppercase text-white">
                  {result.severity}
                </p>

              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">

                <p className="text-xs text-slate-500">
                  Case
                </p>

                <p className="mt-2 truncate text-sm font-bold text-white">
                  {caseId || "N/A"}
                </p>

              </div>

            </div>

            <button
              type="button"
              onClick={
                onWhatsApp
              }
              className="mt-6 w-full rounded-xl bg-green-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-green-500 sm:w-auto"
            >
              Continue with AENA Engineering →
            </button>

          </section>
        )}

      {/* ===================================================
          NEW ANALYSIS
      =================================================== */}

      <div className="pt-4 text-center">

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

      <p className="text-center text-xs leading-5 text-slate-600">
        Retrofit AI provides preliminary troubleshooting guidance.
        Final diagnosis may require physical inspection and
        engineering measurements.
      </p>

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