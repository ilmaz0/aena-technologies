import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Copper Wire Bending Encoder Fault Detection | Lenze Drive Diagnostics | AENA Technologies",

  description:
    "Industrial diagnostic project for detecting an encoder fault in a copper wire bending process using Lenze drive feedback, motor operating characteristics and a slip-ring carbon-brush system.",

  keywords: [
    "copper wire bending machine",
    "copper wire bending process",
    "encoder fault detection",
    "encoder fault diagnosis",
    "Lenze drive diagnostics",
    "Lenze drive encoder",
    "Lenze drive troubleshooting",
    "slip ring encoder",
    "carbon brush encoder",
    "motor encoder fault",
    "industrial encoder diagnostics",
    "drive system diagnostics",
    "machine retrofit",
    "industrial automation",
    "industrial automation Turkey",
    "AENA Technologies",
  ],

  alternates: {
    canonical:
      "https://www.aenatechnologies.com/projects/copper-wire-bending",
  },

  openGraph: {
    title:
      "Copper Wire Bending Encoder Fault Detection | AENA Technologies",

    description:
      "Encoder fault detection in a copper wire bending process using Lenze drive diagnostics, motor operating characteristics and slip-ring carbon-brush feedback.",

    url:
      "https://www.aenatechnologies.com/projects/copper-wire-bending",

    siteName: "AENA Technologies",

    type: "website",
  },
};

const images = [
  {
    src: "/projects/copper-wire-bending/bending1.jpeg",
    alt: "Copper wire bending machine and industrial drive system",
  },
  {
    src: "/projects/copper-wire-bending/bending2.jpeg",
    alt: "Copper wire bending process and motor encoder system",
  },
  {
    src: "/projects/copper-wire-bending/bending3.jpeg",
    alt: "Slip ring and carbon brush system used in copper wire bending machine",
  },
  {
    src: "/projects/copper-wire-bending/bending4.jpeg",
    alt: "Lenze drive and encoder fault diagnostic application",
  },
];

export default function CopperWireBendingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}

      <section className="px-6 pb-20 pt-32 sm:px-8 sm:pt-40">

        <div className="mx-auto max-w-6xl">

          <div className="max-w-4xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Drive System Diagnostics
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Copper Wire Bending Process
            </h1>

            <div className="mt-5 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Encoder Fault Detection & Lenze Drive Diagnostics
            </p>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
              Diagnostic analysis of a motor encoder problem in a copper
              wire bending process using the Lenze drive system, motor
              operating characteristics and the slip-ring carbon-brush
              connection.
            </p>

          </div>

        </div>

      </section>


      {/* PROJECT IMAGES */}

      <section className="pb-20 sm:pb-24">

        <div className="mx-auto max-w-6xl px-6 sm:px-8">

          <div className="grid gap-6 sm:grid-cols-2">

            {images.map((image) => (

              <div
                key={image.src}
                className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl"
              >

                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={800}
                  className="h-[320px] w-full object-contain sm:h-[360px]"
                />

              </div>

            ))}

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
              Diagnosing an Encoder Fault Through Drive Behavior
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The diagnostic work focused on identifying the source of an
              encoder-related operating problem in a copper wire bending
              process. The system used a Lenze drive and a motor connected
              through a slip-ring and carbon-brush system.
            </p>

          </div>


          <div className="grid gap-8 md:grid-cols-3">

            {/* CHALLENGE */}

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

              <div className="mb-5 text-sm font-semibold uppercase tracking-wider text-orange-500">
                Challenge
              </div>

              <h3 className="text-xl font-semibold">
                Encoder Feedback Problem
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                The copper wire bending process experienced a problem
                associated with the motor encoder feedback.
              </p>

            </div>


            {/* DIAGNOSTIC */}

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

              <div className="mb-5 text-sm font-semibold uppercase tracking-wider text-orange-500">
                Diagnostic Approach
              </div>

              <h3 className="text-xl font-semibold">
                Lenze Drive Analysis
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                The motor operating characteristics were evaluated through
                the Lenze drive system to identify abnormal encoder
                feedback behavior.
              </p>

            </div>


            {/* RESULT */}

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

              <div className="mb-5 text-sm font-semibold uppercase tracking-wider text-orange-500">
                Result
              </div>

              <h3 className="text-xl font-semibold">
                Encoder Fault Identified
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                The diagnostic process isolated the encoder as the source
                of the operating problem, allowing the fault to be
                identified without replacing unrelated drive components.
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
                Fault Detection Through the Existing Drive System
              </h2>

            </div>


            <div className="space-y-6 text-base leading-8 text-slate-400">

              <p>
                The diagnostic process used the existing Lenze drive as
                an important source of information about the motor's
                operating behavior and feedback response.
              </p>

              <p>
                Because the motor connection incorporated a slip-ring and
                carbon-brush system, the feedback path was evaluated as
                part of the overall diagnostic process rather than
                treating the encoder as an isolated component.
              </p>

              <p>
                By evaluating the motor's operating characteristics and
                the behavior observed through the drive system, the
                encoder-related fault could be isolated from other
                possible causes in the machine.
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
              Motor Feedback & Drive Diagnostics
            </h2>

          </div>


          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7">

              <h3 className="text-lg font-semibold">
                Lenze Drive
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                The existing Lenze drive system was used to evaluate
                motor operating behavior and feedback characteristics.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7">

              <h3 className="text-lg font-semibold">
                Motor Encoder
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Encoder feedback was investigated as a possible source
                of the abnormal motor operating behavior.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7">

              <h3 className="text-lg font-semibold">
                Slip Ring System
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                The slip-ring and carbon-brush connection was considered
                as part of the motor feedback path during diagnosis.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7">

              <h3 className="text-lg font-semibold">
                Fault Isolation
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Drive behavior and motor characteristics were used to
                isolate the encoder-related fault.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* DIAGNOSTIC METHOD */}

      <section className="py-20 sm:py-24">

        <div className="mx-auto max-w-6xl px-6 sm:px-8">

          <div className="mb-14 max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Diagnostic Method
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From Motor Behavior to Fault Identification
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              The diagnostic approach focused on understanding the
              relationship between the motor, encoder, slip-ring system
              and Lenze drive rather than replacing components without
              first identifying the source of the fault.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

              <div className="text-4xl font-bold text-orange-500">
                01
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Observe
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                The motor's operating behavior and machine response were
                observed during the copper wire bending process.
              </p>

            </div>


            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

              <div className="text-4xl font-bold text-orange-500">
                02
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Analyze
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                The Lenze drive system and encoder feedback behavior were
                evaluated together with the slip-ring and carbon-brush
                connection.
              </p>

            </div>


            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

              <div className="text-4xl font-bold text-orange-500">
                03
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Isolate
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                The encoder-related fault was isolated from other
                potential causes within the drive and motor system.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* WHY THIS MATTERS */}

      <section className="border-t border-slate-800 py-20 sm:py-24">

        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            Why This Matters
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Diagnose the Fault Before Replacing Components
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            Industrial drive and motor problems can originate from
            multiple components within the feedback and power system.
            Understanding the operating characteristics of the motor and
            the behavior observed by the drive can help isolate the
            actual source of the problem.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-500 sm:text-lg">
            This diagnostic approach helps reduce unnecessary component
            replacement and provides a more structured path toward
            troubleshooting industrial motion systems.
          </p>

        </div>

      </section>


      {/* RETROFIT PROCESS */}

      <section className="border-t border-slate-800 py-20 sm:py-24">

        <div className="mx-auto max-w-6xl px-6 sm:px-8">

          <div className="mb-14 max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Diagnostic Process
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Structured Industrial Troubleshooting
            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-4">

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

              <div className="text-4xl font-bold text-orange-500">
                01
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Machine Observation
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Observe the machine and motor behavior during operation.
              </p>

            </div>


            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

              <div className="text-4xl font-bold text-orange-500">
                02
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Drive Evaluation
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Evaluate the information and behavior available through
                the Lenze drive system.
              </p>

            </div>


            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

              <div className="text-4xl font-bold text-orange-500">
                03
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Feedback Analysis
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Evaluate the encoder feedback path and the slip-ring
                carbon-brush connection.
              </p>

            </div>


            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

              <div className="text-4xl font-bold text-orange-500">
                04
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Fault Identification
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Isolate the encoder-related fault and identify the actual
                source of the machine problem.
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
            Have a Drive, Motor or Encoder Problem?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
            We analyze industrial drive systems, motor behavior and
            feedback systems to identify the source of machine operating
            problems and determine the appropriate engineering approach.
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