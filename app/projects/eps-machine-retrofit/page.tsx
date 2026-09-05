import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EPS Machine Retrofit & Drive Recommissioning | AENA Technologies",
  description:
    "EPS machine retrofit project by AENA Technologies focused on restoring a faulty Rexroth drive and bringing an existing polystyrene foam machine back into operation.",
  keywords: [
    "EPS machine retrofit",
    "polystyrene foam machine retrofit",
    "EPS machine",
    "Rexroth drive commissioning",
    "Rexroth drive retrofit",
    "EPS production line retrofit",
    "machine retrofit",
    "industrial automation retrofit",
    "machine modernization",
    "AENA Technologies",
  ],
};

export default function EPSMachineRetrofitPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="px-6 pb-20 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Machine Retrofit
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Polystyrene Foam (EPS) Machine
            </h1>

            <div className="mt-5 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Retrofit & Drive Recommissioning
            </p>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
              Restoration of an existing EPS production machine by
              reactivating and recommissioning a faulty Rexroth drive,
              allowing the machine to return to operation.
            </p>
          </div>

        </div>
      </section>

      {/* PROJECT IMAGE */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">

          <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
            <Image
              src="/projects/eps-machine-retrofit/eps1.jpeg"
              alt="Polystyrene foam EPS machine retrofit"
              width={1200}
              height={800}
              className="h-auto w-full object-contain"
              priority
            />
          </div>

        </div>
      </section>

      {/* PROJECT VIDEO */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">

          <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
            <video
              className="h-[400px] w-full object-contain"
              controls
              playsInline
              preload="metadata"
            >
              <source
                src="/projects/eps-machine-retrofit/eps2.mp4"
                type="video/mp4"
              />

              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="border-t border-slate-800 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">

          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Project Overview
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Restoring an Existing EPS Machine
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The objective of this retrofit project was to restore the
              operation of an existing polystyrene foam (EPS) machine
              without replacing the complete production system.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {/* CHALLENGE */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
              <div className="mb-5 text-sm font-semibold uppercase tracking-wider text-orange-500">
                Challenge
              </div>

              <h3 className="text-xl font-semibold">
                Faulty Rexroth Drive
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                The existing EPS machine was unable to operate because of
                a fault affecting the Rexroth drive.
              </p>
            </div>

            {/* ENGINEERING */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
              <div className="mb-5 text-sm font-semibold uppercase tracking-wider text-orange-500">
                Engineering
              </div>

              <h3 className="text-xl font-semibold">
                Drive Recommissioning
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                The Rexroth drive was reactivated and recommissioned as
                part of the machine restoration process.
              </p>
            </div>

            {/* RESULT */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
              <div className="mb-5 text-sm font-semibold uppercase tracking-wider text-orange-500">
                Result
              </div>

              <h3 className="text-xl font-semibold">
                Machine Back in Operation
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                The existing EPS machine was successfully brought back
                into operation and returned to production.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ENGINEERING DETAILS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">

          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                Engineering Details
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Retrofit Without Replacing the Complete Machine
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-400">

              <p>
                Instead of replacing the existing EPS production machine,
                the retrofit approach focused on restoring the failed
                drive system and returning the existing equipment to
                operation.
              </p>

              <p>
                The Rexroth drive was reactivated and recommissioned so
                that the machine could operate again with its existing
                production infrastructure.
              </p>

              <p>
                This approach demonstrates the core principle of machine
                retrofit: extending the useful life of existing industrial
                equipment by addressing the actual source of the
                operational problem.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* TECHNICAL FOCUS */}
      <section className="border-y border-slate-800 bg-slate-900/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">

          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Technical Focus
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Drive System Restoration
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7">
              <h3 className="text-lg font-semibold">
                Rexroth Drive
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Existing Rexroth drive system identified as the source
                of the machine operational problem.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7">
              <h3 className="text-lg font-semibold">
                Recommissioning
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Drive system reactivated and recommissioned to restore
                machine operation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7">
              <h3 className="text-lg font-semibold">
                Existing Machine
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                The existing EPS production infrastructure was retained
                rather than replacing the complete machine.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            Why This Matters
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Bringing Existing Industrial Equipment Back to Life
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            A machine does not always need to be replaced when a critical
            component fails. A targeted retrofit can restore the
            functionality of existing equipment and allow production to
            continue with a more practical investment.
          </p>

        </div>
      </section>

      {/* RETROFIT PROCESS */}
      <section className="border-t border-slate-800 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">

          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Retrofit Process
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From Fault Detection to Machine Operation
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
              <div className="text-4xl font-bold text-orange-500">
                01
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Identify
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                The operational problem affecting the existing EPS
                machine was identified and the Rexroth drive was
                determined as the critical component.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
              <div className="text-4xl font-bold text-orange-500">
                02
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Recommission
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                The Rexroth drive was reactivated and recommissioned to
                restore the machine drive system.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
              <div className="text-4xl font-bold text-orange-500">
                03
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Restart
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                The EPS machine was run again and returned to production
                operation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 bg-slate-900/40 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            AENA Technologies
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Have an Existing Machine That Needs Modernization?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
            We evaluate existing industrial machinery, identify the
            source of operational problems and develop retrofit solutions
            focused on restoring and improving machine functionality.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              Discuss Your Machine
            </Link>
          </div>

        </div>
      </section>

      {/* BACK TO PROJECTS */}
      <section className="border-t border-slate-800 py-10">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">

          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-semibold text-slate-400 transition hover:text-orange-500"
          >
            ← Back to Projects
          </Link>

        </div>
      </section>

    </main>
  );
}