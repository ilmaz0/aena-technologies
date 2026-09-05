import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Marble Processing Line Retrofit & Automation Upgrade | AENA Technologies",

  description:
    "Marble processing line retrofit project by AENA Technologies including motor and drive replacement, PLC integration and safety sensor implementation to improve machine safety, stability and usability.",

  keywords: [
    "marble processing machine retrofit",
    "marble machine retrofit",
    "marble processing line modernization",
    "marble machinery automation",
    "marble machine PLC retrofit",
    "marble machine drive replacement",
    "industrial marble machine retrofit",
    "marble production line modernization",
    "machine safety retrofit",
    "PLC retrofit",
    "industrial automation retrofit",
    "machine modernization",
    "industrial automation Turkey",
    "machine retrofit Turkey",
  ],

  alternates: {
    canonical:
      "https://www.aenatechnologies.com/projects/marble-process-revision",
  },

  openGraph: {
    title:
      "Marble Processing Line Retrofit & Automation Upgrade | AENA Technologies",

    description:
      "Motor and drive replacement, PLC integration and safety sensor implementation for an existing marble processing line.",

    url:
      "https://www.aenatechnologies.com/projects/marble-process-revision",

    siteName: "AENA Technologies",

    type: "article",
  },
};

export default function MarbleProcessRevisionPage() {
  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}
      <section className="border-b border-slate-800 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-semibold text-slate-400 transition hover:text-orange-400"
          >
            ← Back to Projects
          </Link>

          <div className="mt-12 max-w-5xl">

            <p className="font-semibold uppercase tracking-[4px] text-orange-400">
              Machine Retrofit
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Marble Processing Line
              <span className="block text-orange-500">
                Retrofit & Automation Upgrade
              </span>
            </h1>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-400 sm:text-xl">
              Retrofit engineering for an existing marble processing line,
              including motor and drive replacement, PLC integration and
              safety sensor implementation to improve machine safety,
              stability and overall usability.
            </p>

          </div>

        </div>
      </section>


      {/* PROJECT VIDEO */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">

          <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

           <video
  className="h-[400px] w-full object-contain"
  controls
  playsInline
  preload="metadata"
>
              <source
                src="/projects/marble-process-revision/robot.mp4"
                type="video/mp4"
              />

              Your browser does not support the video tag.
            </video>

          </div>

        </div>
      </section>


      {/* PROJECT OVERVIEW */}
      <section className="border-y border-slate-800 bg-slate-900/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          <div className="grid gap-12 lg:grid-cols-3">

            {/* CHALLENGE */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">

              <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
                Challenge
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                Aging Machine Infrastructure
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                The existing marble processing line required modernization
                of its motor, drive and control infrastructure. Additional
                safety measures were also needed to improve the operating
                conditions of the machine.
              </p>

            </div>


            {/* ENGINEERING */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">

              <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
                Engineering
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                Motor, PLC & Safety Retrofit
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                The existing machine was upgraded with a new motor and drive
                system, PLC integration and additional safety sensors.
                The retrofit was designed around the existing production
                line rather than replacing the complete machine.
              </p>

            </div>


            {/* RESULT */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">

              <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
                Result
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                Safer & More Stable Operation
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                The retrofit improved machine safety, operating stability
                and usability, allowing the existing marble processing
                line to continue serving its production requirements.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ENGINEERING DETAILS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Engineering Scope
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Marble Processing Line Retrofit
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              The project focused on modernizing the electrical,
              automation and safety infrastructure of an existing marble
              processing line while retaining the existing machine
              structure.
            </p>

          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-2">

            {[
              "Existing machine assessment",
              "Motor replacement",
              "Drive system replacement",
              "PLC integration",
              "PLC programming and control improvement",
              "Safety sensor implementation",
              "Machine safety improvement",
              "Control system modernization",
              "Motor and drive commissioning",
              "Machine operation testing",
              "Production operation verification",
              "Retrofit commissioning",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500/70"
              >
                <div className="flex items-start gap-4">

                  <span className="mt-1 text-lg text-orange-500">
                    ✓
                  </span>

                  <p className="font-semibold text-slate-200">
                    {item}
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* TECHNICAL FOCUS */}
      <section className="border-y border-slate-800 bg-slate-900/40 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Technical Focus
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Automation, Drive & Machine Safety
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-400">
            The retrofit focused on improving the core electrical and
            automation systems of the existing marble processing line.
            The motor and drive system were upgraded and integrated with
            the machine control structure.
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-400">
            A new PLC-based control structure and additional safety sensors
            were implemented to provide more reliable machine operation
            and improve the overall safety of the working process.
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-400">
            By modernizing the critical electrical and automation
            components instead of replacing the complete production line,
            the existing machine infrastructure was brought back into
            practical and more reliable operation.
          </p>

        </div>
      </section>


      {/* WHY THIS MATTERS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-xl font-bold">
                Improved Safety
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Additional safety sensors were integrated into the machine
                to improve operator and equipment safety during operation.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-xl font-bold">
                Existing Equipment
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                The existing marble processing line was retained while
                critical electrical and automation components were
                modernized.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-xl font-bold">
                Stable Production
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                The upgraded motor, drive and PLC control structure
                contributed to more stable and reliable machine operation.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* RETROFIT PROCESS */}
      <section className="border-y border-slate-800 bg-slate-900/40 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            AENA Retrofit Process
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            From Existing Machine to Modernized Production
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-400">
            AENA Technologies approaches machine modernization by
            evaluating the existing equipment, identifying critical
            limitations and upgrading the systems that directly affect
            machine performance, safety and reliability.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">

            {[
              "Assess the existing machine",
              "Identify critical limitations",
              "Upgrade motor and drive systems",
              "Modernize PLC control",
              "Integrate safety sensors",
              "Commission and verify operation",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-slate-800 bg-slate-950 p-6 text-left"
              >
                <div className="flex items-start gap-4">

                  <span className="font-bold text-orange-500">
                    0{index + 1}
                  </span>

                  <p className="font-semibold text-slate-200">
                    {item}
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-orange-500 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-100">
            Machine Retrofit & Automation
          </p>

          <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">
            Need to Modernize an Existing Machine?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100 sm:text-xl">
            Send us your machine information, automation details or the
            problems you are experiencing. AENA Technologies can evaluate
            the existing system and identify suitable retrofit solutions.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-xl bg-white px-8 py-4 font-bold text-orange-500 transition duration-300 hover:bg-slate-100 hover:shadow-xl"
          >
            Request Engineering Support
          </Link>

        </div>

      </section>


      {/* BACK TO PROJECTS */}
      <section className="border-t border-slate-800 bg-slate-950 py-12">

        <div className="mx-auto max-w-7xl px-6 text-center sm:px-8">

          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-semibold text-slate-400 transition hover:text-orange-400"
          >
            ← Back to All Engineering Projects
          </Link>

        </div>

      </section>

    </main>
  );
}

