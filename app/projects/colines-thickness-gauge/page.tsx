import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Colines Thickness Gauge Restoration & Automation | AENA Technologies",

  description:
    "Colines thickness gauge restoration and automation project by AENA Technologies. Electronics repair, gauge calibration, PLC integration and preparation for automatic heater-zone control.",

  keywords: [
    "Colines thickness gauge",
    "Colines thickness measurement",
    "Colines gauge control",
    "thickness gauge restoration",
    "thickness measurement system",
    "industrial thickness gauge",
    "plastic extrusion thickness control",
    "extrusion gauge system",
    "automatic thickness control",
    "heater zone control",
    "PLC gauge integration",
    "industrial automation",
    "machine retrofit",
    "machine modernization",
    "Colines machine retrofit",
    "industrial automation Turkey",
  ],

  alternates: {
    canonical:
      "https://www.aenatechnologies.com/projects/colines-thickness-gauge",
  },

  openGraph: {
    title:
      "Colines Thickness Gauge Restoration & Automation | AENA Technologies",

    description:
      "Restoration and modernization of a Colines thickness measurement system including electronics repair, calibration and preparation for automatic heater-zone control.",

    url:
      "https://www.aenatechnologies.com/projects/colines-thickness-gauge",

    siteName: "AENA Technologies",

    type: "article",
  },
};

export default function ColinesThicknessGaugePage() {
  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}

      <section className="border-b border-slate-800 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            Precision Engineering
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-extrabold leading-tight sm:text-6xl">
            Colines Thickness Gauge
            <span className="block text-orange-500">
              Restoration & Automation
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-8 text-slate-400">
            Restoration and modernization of a non-functional thickness
            measurement system on a Colines production line, including
            electronics troubleshooting, calibration and preparation for
            automatic heater-zone control.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
              Colines
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
              Thickness Measurement
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
              Electronics
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
              PLC Integration
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
              Automation
            </span>

          </div>

        </div>

      </section>


      {/* PROJECT OVERVIEW */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Project Overview
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Restoring an Industrial Thickness Measurement System
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                The existing thickness measurement system on the Colines
                production line was completely non-functional.
              </p>

              <p>
                The project focused on identifying the cause of the failure,
                restoring the electronic measurement system and recalibrating
                the gauge for reliable operation.
              </p>

              <p>
                After restoring the measurement system, the control
                architecture was evaluated for future integration with
                automatic heater-zone correction.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CHALLENGE */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Challenge
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Non-Functional Thickness Measurement
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                The thickness gauge system was not operating correctly and
                could not provide reliable measurement information to the
                production process.
              </p>

              <p>
                A replacement of the complete system was not necessarily the
                most practical solution. The existing equipment was therefore
                investigated to determine whether the measurement system could
                be restored and integrated into the existing machine
                architecture.
              </p>

              <p>
                The engineering challenge involved electronics,
                measurement calibration, signal processing and potential PLC
                integration.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ENGINEERING SOLUTION */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Engineering Solution
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold">
            Electronics Restoration, Calibration & Control Integration
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-xl font-bold text-orange-400">
                Electronics Restoration
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                The existing thickness measurement electronics were
                investigated and restored to return the gauge system to
                operational condition.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-xl font-bold text-orange-400">
                Gauge Calibration
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                The measurement system was recalibrated to provide reliable
                thickness information for the production process.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-xl font-bold text-orange-400">
                PLC Integration
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                The measurement architecture was evaluated for integration
                with the machine PLC and future automatic process control.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-xl font-bold text-orange-400">
                Heater-Zone Control
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                The restored measurement system was prepared for automatic
                heater-zone correction based on measured thickness values.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-xl font-bold text-orange-400">
                Industrial Automation
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                The project considered the relationship between measurement,
                machine control and the existing automation architecture.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-xl font-bold text-orange-400">
                Production Integration
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                The objective was to restore the existing measurement
                capability while maintaining compatibility with the
                production machine.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* PROJECT IMAGES */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Project Gallery
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Colines Thickness Gauge System
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Images from the thickness measurement system restoration and
              industrial automation project.
            </p>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-2">

            <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">

              <Image
                src="/projects/colines-thickness-gauge/colines1.jpeg"
                alt="Colines industrial thickness gauge system"
                width={1200}
                height={900}
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="border-t border-slate-800 p-5">

                <p className="text-sm font-semibold text-slate-300">
                  Colines Thickness Gauge System
                </p>

              </div>

            </div>


            <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">

              <Image
                src="/projects/colines-thickness-gauge/colines2.jpeg"
                alt="Colines thickness measurement electronics"
                width={1200}
                height={900}
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="border-t border-slate-800 p-5">

                <p className="text-sm font-semibold text-slate-300">
                  Thickness Measurement Electronics
                </p>

              </div>

            </div>


            <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">

              <Image
                src="/projects/colines-thickness-gauge/colines3.jpeg"
                alt="Colines gauge control and calibration system"
                width={1200}
                height={900}
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="border-t border-slate-800 p-5">

                <p className="text-sm font-semibold text-slate-300">
                  Gauge Control & Calibration
                </p>

              </div>

            </div>


            <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">

              <Image
                src="/projects/colines-thickness-gauge/colines4.jpeg"
                alt="Colines extrusion line thickness control system"
                width={1200}
                height={900}
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="border-t border-slate-800 p-5">

                <p className="text-sm font-semibold text-slate-300">
                  Extrusion Line Thickness Control
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* RESULT */}

      <section className="py-24">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Project Result
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Thickness Measurement System Restored
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">

            The Colines thickness measurement system was restored to
            operational condition and recalibrated for reliable measurement.
            The project also established the technical foundation for future
            automatic heater-zone control based on thickness measurement data.

          </p>

        </div>

      </section>


      {/* TECHNOLOGIES */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-20">

        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Technologies & Engineering
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Project Technologies
            </h2>

          </div>


          <div className="mt-10 flex flex-wrap justify-center gap-3">

            {[
              "Colines",
              "Thickness Gauge",
              "Gauge Calibration",
              "Industrial Electronics",
              "PLC",
              "Automation",
              "Extrusion",
              "Process Control",
              "Heater-Zone Control",
              "Machine Retrofit",
            ].map((technology) => (

              <span
                key={technology}
                className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-300"
              >
                {technology}
              </span>

            ))}

          </div>

        </div>

      </section>


      {/* NAVIGATION */}

      <section className="py-20">

        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-5 px-8 sm:flex-row">

          <Link
            href="/projects"
            className="
              inline-flex
              items-center
              rounded-xl
              border
              border-slate-700
              bg-slate-900
              px-7
              py-3.5
              text-sm
              font-bold
              text-slate-200
              transition
              duration-300
              hover:border-orange-500
              hover:text-orange-400
            "
          >
            ← View All Projects
          </Link>


          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              rounded-xl
              bg-orange-500
              px-7
              py-3.5
              text-sm
              font-bold
              text-white
              transition
              duration-300
              hover:bg-orange-600
              hover:shadow-lg
              hover:shadow-orange-500/20
            "
          >
            Request a Retrofit Evaluation →
          </Link>

        </div>

      </section>

    </main>
  );
}