import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Cable Pay-Off Machine Drive Optimization | AENA Technologies",

  description:
    "Cable pay-off machine drive optimization and industrial automation project by AENA Technologies. Siemens drive parameter optimization, motion control and machine performance improvement.",

  keywords: [
    "cable pay-off machine",
    "cable pay off machine",
    "cable pay-off drive",
    "cable machine drive optimization",
    "Siemens drive optimization",
    "cable manufacturing automation",
    "cable production machine retrofit",
    "industrial drive optimization",
    "machine retrofit Turkey",
    "industrial automation Turkey",
    "cable production automation",
    "motion control",
  ],

  alternates: {
    canonical:
      "https://www.aenatechnologies.com/projects/cable-pay-off-drive",
  },

  openGraph: {
    title:
      "Cable Pay-Off Machine Drive Optimization | AENA Technologies",

    description:
      "Siemens drive parameter optimization and motion control improvements for a cable pay-off machine.",

    url:
      "https://www.aenatechnologies.com/projects/cable-pay-off-drive",

    siteName: "AENA Technologies",

    type: "article",
  },
};

export default function CablePayOffDrivePage() {
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
              Drive Optimization
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Cable Pay-Off Machine
              <span className="block text-orange-500">
                Drive Optimization
              </span>
            </h1>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-400 sm:text-xl">
              Siemens drive parameter optimization and motion control
              improvements for a cable pay-off machine to restore stable
              and reliable cable unwinding performance.
            </p>

          </div>

        </div>
      </section>


      {/* PROJECT IMAGE */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">

          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

            <div className="relative h-[280px] w-full sm:h-[360px] lg:h-[420px]">

              <Image
                src="/projects/cable-pay-off-drive/cable1.jpeg"
                alt="Cable pay-off machine drive optimization project"
                fill
                priority
                className="object-contain p-4 sm:p-6"
                sizes="(max-width: 768px) 100vw, 900px"
              />

            </div>

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
                Unstable Cable Unwinding
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Incorrect or unsuitable drive parameters were affecting the
                stability of the cable pay-off system and creating unreliable
                unwinding performance during machine operation.
              </p>

            </div>


            {/* ENGINEERING */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">

              <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
                Engineering
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                Siemens Drive Optimization
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                The Siemens drive configuration was analyzed and the relevant
                drive parameters were optimized according to the machine's
                operating requirements and cable unwinding process.
              </p>

            </div>


            {/* RESULT */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">

              <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
                Result
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                Stable Machine Operation
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Drive optimization restored smooth and reliable cable
                unwinding performance and improved the overall operating
                stability of the pay-off system.
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
              Cable Pay-Off Drive Engineering
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              The project focused on the drive and motion-control side of the
              cable pay-off machine while maintaining the existing machine
              architecture.
            </p>

          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-2">

            {[
              "Siemens drive parameter analysis",
              "Drive parameter optimization",
              "Cable unwinding stability improvement",
              "Motion control optimization",
              "Machine operating parameter adjustment",
              "Drive performance testing",
              "Production operation verification",
              "Commissioning and troubleshooting",
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
            Drive Parameters & Motion Control
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-400">
            Cable pay-off systems require stable and controlled motor
            operation to maintain consistent material tension and unwinding
            performance. Drive parameters must therefore be configured
            according to the machine mechanics, motor characteristics and
            production requirements.
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-400">
            AENA Technologies analyzes the existing drive configuration,
            identifies unsuitable parameters and optimizes the system to
            achieve stable machine operation without unnecessarily replacing
            the complete machine control architecture.
          </p>

        </div>
      </section>


      {/* WHY THIS MATTERS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-xl font-bold">
                Reduced Downtime
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Correct drive configuration can eliminate unstable operating
                conditions and unnecessary production interruptions.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-xl font-bold">
                Existing Equipment
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                The existing machine infrastructure can often be retained
                when the drive and control system are technically suitable.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-xl font-bold">
                Reliable Production
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Properly optimized motion control contributes to smoother
                cable unwinding and more reliable production operation.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-orange-500 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-100">
            Machine Retrofit & Drive Optimization
          </p>

          <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">
            Need Help With an Industrial Drive System?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100 sm:text-xl">
            Send us your machine model, drive information or the problem
            you are experiencing. AENA Technologies can evaluate the
            automation and drive system.
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