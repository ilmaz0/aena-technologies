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
  safetyWarning: string;
};

type EvidenceFile = File;

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

  const [conversation, setConversation] =
    useState<ConversationMessage[]>(
      []
    );

  const [selectedFiles, setSelectedFiles] =
    useState<EvidenceFile[]>([]);

  const [analysisStarted, setAnalysisStarted] =
    useState(false);

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

    const currentMessage =
      symptom.trim();

    if (!currentMessage) {

      setError(
        "Please describe what is happening with the machine."
      );

      return;
    }

    if (
      currentMessage.length <
      3
    ) {

      setError(
        "Please provide a little more information."
      );

      return;
    }

    setLoading(true);

    try {

      /* ===================================================
         FORM DATA
      =================================================== */

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

      selectedFiles.forEach(
        (file) => {

          formData.append(
            "files",
            file
          );

        }
      );

      /* ===================================================
         API REQUEST
      =================================================== */

      const response =
        await fetch(
          "/api/retrofit-ai",
          {
            method:
              "POST",

            body:
              formData,
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

      /* ===================================================
         HTTP ERROR
      =================================================== */

      if (!response.ok) {

        throw new Error(
          data &&
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

      /* ===================================================
         VALIDATE
      =================================================== */

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
         UPDATE CONVERSATION
      =================================================== */

      const newConversation =
        [
          ...conversation,

          {
            role:
              "user" as const,

            content:
              currentMessage,
          },

          {
            role:
              "assistant" as const,

            content:
              buildAssistantMessage(
                data
              ),
          },
        ];

      setConversation(
        newConversation
      );

      setResult(
        data
      );

      setAnalysisStarted(
        true
      );

      /*
       * Kullanıcı cevabı gönderildikten sonra
       * textarea temizlenir.
       */

      setSymptom("");

      /*
       * İlk analizde dosyaları koruyoruz.
       * Sonraki mesajlarda tekrar göndermemek için
       * burada temizlemek daha doğru.
       */

      if (
        conversation.length >
        0
      ) {

        setSelectedFiles(
          []
        );
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

    const parts: string[] =
      [];

    if (
      data.summary
    ) {

      parts.push(
        data.summary
      );
    }

    if (
      data.check
    ) {

      parts.push(
        `İlk kontrol: ${data.check}`
      );
    }

    if (
      data.question
    ) {

      parts.push(
        data.question
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

    const message = `Merhaba AENA,

Retrofit AI üzerinden makinemle ilgili ön analiz yaptım.

Problem:
${conversation.find(
  (message) =>
    message.role ===
    "user"
)?.content || ""}

AI görüşmesi:
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

    setAnalysisStarted(
      false
    );

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

      {/* ===================================================
          HEADER
      =================================================== */}

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

      {/* ===================================================
          MAIN
      =================================================== */}

      <section className="mx-auto max-w-4xl px-5 py-10">

        {!analysisStarted && (

          <InitialDiagnosisForm
            symptom={
              symptom
            }
            setSymptom={
              setSymptom
            }
            loading={
              loading
            }
            error={
              error
            }
            selectedFiles={
              selectedFiles
            }
            addFiles={
              addFiles
            }
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
            result={
              result
            }
            symptom={
              symptom
            }
            setSymptom={
              setSymptom
            }
            loading={
              loading
            }
            error={
              error
            }
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

  imageInputRef: React.RefObject<HTMLInputElement | null>;

  videoInputRef: React.RefObject<HTMLInputElement | null>;

  documentInputRef: React.RefObject<HTMLInputElement | null>;

  onSubmit: (
    e?: FormEvent
  ) => void;
}) {

  return (

    <div className="space-y-8">

      {/* =================================================
          INTRO
      ================================================= */}

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

      {/* =================================================
          FORM
      ================================================= */}

      <form
        onSubmit={
          onSubmit
        }
        className="space-y-6"
      >

        <section className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8">

          <textarea
            value={
              symptom
            }
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

        {/* =================================================
            EVIDENCE
        ================================================= */}

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

        {/* =================================================
            ERROR
        ================================================= */}

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

        {/* =================================================
            BUTTON
        ================================================= */}

        <button
          type="submit"
          disabled={
            loading
          }
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
  selectedFiles,
  onSubmit,
  onWhatsApp,
  onNewAnalysis,
}: {
  conversation: ConversationMessage[];

  result:
    RetrofitAIResponse | null;

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
}) {

  return (

    <div className="space-y-6">

      {/* =================================================
          HEADER
      ================================================= */}

      <section className="rounded-3xl border border-orange-500/30 bg-orange-500/5 p-6 sm:p-8">

        <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-400">
          AENA Retrofit AI
        </p>

        <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
          Troubleshooting in progress
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          AI is narrowing the fault step by step.
          You only need to answer the next question.
        </p>

      </section>

      {/* =================================================
          CONVERSATION
      ================================================= */}

      <section className="space-y-4">

        {conversation.map(
          (
            message,
            index
          ) => (

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

      {/* =================================================
          CURRENT QUESTION
      ================================================= */}

      {result &&
        result.question &&
        !result.needsEngineer && (

        <section className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-6">

          <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-400">
            Next question
          </p>

          <p className="mt-3 text-lg font-semibold leading-8 text-white">
            {result.question}
          </p>

          {/* =============================================
              ANSWER FORM
          ============================================= */}

          <form
            onSubmit={
              onSubmit
            }
            className="mt-6"
          >

            <textarea
              value={
                symptom
              }
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
              disabled={
                loading
              }
              className="mt-4 w-full rounded-xl bg-orange-500 px-6 py-4 text-sm font-bold transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
            >

              {loading
                ? "Analyzing..."
                : "Continue Diagnosis →"}

            </button>

          </form>

        </section>

      )}

      {/* =================================================
          CHECK
      ================================================= */}

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

      {/* =================================================
          SAFETY
      ================================================= */}

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

      {/* =================================================
          ENGINEER CTA
      ================================================= */}

      {result &&
        result.needsEngineer && (

        <section className="rounded-3xl border border-orange-500/30 bg-orange-500/5 p-6 sm:p-8">

          <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-400">
            Continue with AENA
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            This problem may require engineering support
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
            The AI has narrowed the problem as far as the available
            information allows. An AENA engineer can continue with
            measurements, PLC/drive diagnostics or machine inspection.
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

        </section>

      )}

      {/* =================================================
          NEW ANALYSIS
      ================================================= */}

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

      {/* =================================================
          DISCLAIMER
      ================================================= */}

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
      onClick={
        onClick
      }
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