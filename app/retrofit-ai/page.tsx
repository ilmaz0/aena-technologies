"use client";

import { useState } from "react";

export default function RetrofitAIPage() {
  const [problem, setProblem] = useState("");
  const [imageName, setImageName] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const handleAnalyze = () => {
    if (!problem.trim() && !imageName) return;

    setAnalyzing(true);
    setAnalyzed(false);

    setTimeout(() => {
      setAnalyzing(false);
      setAnalyzed(true);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white">

      {/* HERO */}

      <section className="border-b border-slate-800">

        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28">

          <div className="max-w-4xl">

            <div className="flex items-center gap-3">

              <span className="h-px w-10 bg-orange-500" />

              <p className="text-xs font-semibold uppercase tracking-[4px] text-orange-400 sm:text-sm">
                AENA Technologies
              </p>

            </div>

            <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              AENA
              <span className="text-orange-500"> Retrofit AI</span>
            </h1>

            <h2 className="mt-6 text-2xl font-bold text-slate-200 sm:text-3xl">
              Industrial Machine Troubleshooting Assistant
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
              Describe a machine problem, upload an image or use voice input.
              AENA Retrofit AI is designed to help technicians analyze
              industrial machine faults and identify the next diagnostic step.
            </p>

          </div>

        </div>

      </section>


      {/* AI WORKSPACE */}

      <section className="py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">


            {/* INPUT PANEL */}

            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-7 sm:p-9">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-400">
                    Step 01
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    Describe the Problem
                  </h2>

                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-lg">
                  AI
                </div>

              </div>


              <p className="mt-4 text-sm leading-7 text-slate-400">
                Tell AENA Retrofit AI what is happening with the machine.
                Include the machine type, component, alarm or symptom when
                possible.
              </p>


              <textarea
                value={problem}
                onChange={(event) => setProblem(event.target.value)}
                placeholder="Example: The drive is powered but the motor does not start. The PLC shows the machine in RUN state..."
                className="
                  mt-7
                  min-h-[190px]
                  w-full
                  resize-none
                  rounded-2xl
                  border
                  border-slate-700
                  bg-slate-900
                  p-5
                  text-sm
                  leading-7
                  text-white
                  outline-none
                  placeholder:text-slate-600
                  focus:border-orange-500
                  focus:ring-1
                  focus:ring-orange-500
                "
              />


              {/* INPUT ACTIONS */}

              <div className="mt-5 grid gap-3 sm:grid-cols-2">

                <label
                  className="
                    flex
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-900
                    px-5
                    py-4
                    text-sm
                    font-semibold
                    text-slate-300
                    transition
                    hover:border-orange-500
                    hover:text-white
                  "
                >

                  <span className="mr-2 text-lg">
                    📷
                  </span>

                  {imageName || "Upload Machine Image"}

                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(event) => {
                      const file = event.target.files?.[0];

                      if (file) {
                        setImageName(file.name);
                      }
                    }}
                  />

                </label>


                <button
                  type="button"
                  className="
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-900
                    px-5
                    py-4
                    text-sm
                    font-semibold
                    text-slate-300
                    transition
                    hover:border-orange-500
                    hover:text-white
                  "
                >

                  <span className="mr-2 text-lg">
                    🎤
                  </span>

                  Voice Input

                </button>

              </div>


              {/* ANALYZE BUTTON */}

              <button
                type="button"
                onClick={handleAnalyze}
                disabled={
                  analyzing ||
                  (!problem.trim() && !imageName)
                }
                className="
                  mt-5
                  w-full
                  rounded-xl
                  bg-orange-500
                  px-6
                  py-4
                  text-sm
                  font-bold
                  text-white
                  transition
                  duration-300
                  hover:bg-orange-600
                  hover:shadow-lg
                  hover:shadow-orange-500/20
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >

                {analyzing
                  ? "Analyzing Machine Problem..."
                  : "Analyze Problem →"}

              </button>

            </div>


            {/* ANALYSIS PANEL */}

            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-7 sm:p-9">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-400">
                  Step 02
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  AI Diagnostic Analysis
                </h2>

              </div>


              {!analyzed ? (

                <div className="mt-8 rounded-2xl border border-dashed border-slate-700 bg-slate-900/50 p-8">

                  <div className="text-4xl">
                    ⚙️
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    Waiting for Machine Information
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    Describe the machine problem or upload an image to begin
                    the diagnostic process.
                  </p>

                </div>

              ) : (

                <div className="mt-8 space-y-4">

                  {/* MACHINE */}

                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

                    <p className="text-xs uppercase tracking-[2px] text-slate-500">
                      Machine
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      Industrial Machine
                    </p>

                  </div>


                  {/* COMPONENT */}

                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

                    <p className="text-xs uppercase tracking-[2px] text-slate-500">
                      Component
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      Automation / Drive System
                    </p>

                  </div>


                  {/* POSSIBLE CAUSES */}

                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

                    <p className="text-xs uppercase tracking-[2px] text-slate-500">
                      Possible Causes
                    </p>

                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-400">

                      <li>
                        • Control or enable signal
                      </li>

                      <li>
                        • Communication status
                      </li>

                      <li>
                        • Drive or motor fault
                      </li>

                    </ul>

                  </div>


                  {/* NEXT STEP */}

                  <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-5">

                    <p className="text-xs uppercase tracking-[2px] text-orange-400">
                      Recommended Next Step
                    </p>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Check the machine control signal and the drive status
                      before replacing any component.
                    </p>

                  </div>

                </div>

              )}

            </div>

          </div>

        </div>

      </section>


      {/* HOW IT WILL WORK */}

      <section className="border-y border-slate-800 bg-slate-900/30 py-20">

        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-400">
              AENA Retrofit AI
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From Machine Symptom to Diagnostic Action
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
              The system will combine technician input, machine images,
              engineering knowledge and machine data to support
              troubleshooting.
            </p>

          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "01",
                title: "Describe",
                text: "Technician describes the machine problem.",
              },
              {
                number: "02",
                title: "Identify",
                text: "AI identifies the machine and possible component.",
              },
              {
                number: "03",
                title: "Diagnose",
                text: "Engineering knowledge is used to analyze the problem.",
              },
              {
                number: "04",
                title: "Guide",
                text: "Technician receives structured diagnostic steps.",
              },
            ].map((item) => (

              <div
                key={item.number}
                className="
                  rounded-2xl
                  border
                  border-slate-800
                  bg-slate-950
                  p-7
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-500/60
                "
              >

                <span className="text-3xl font-extrabold text-orange-500">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* FOOTER MESSAGE */}

      <section className="py-20">

        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
            AENA Engineering Intelligence
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Turning Field Experience Into Engineering Intelligence
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            AENA Retrofit AI is being developed to combine industrial
            automation knowledge, machine retrofit experience and field
            troubleshooting into a practical engineering assistant.
          </p>

        </div>

      </section>

    </main>
  );
}