import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Granule Recycling Shift Monitoring System | Siemens Siwarex | AENA Technologies",

  description:
    "Granule recycling production shift monitoring system using Siemens Siwarex weighing technology to track production quantity by day, month and year and generate Excel-based production reports.",

  keywords: [
    "granule recycling shift monitoring",
    "granule production monitoring",
    "recycling production tracking",
    "shift production monitoring",
    "Siemens Siwarex",
    "Siwarex weighing system",
    "load cell production monitoring",
    "PLC production tracking",
    "granule recycling automation",
    "production quantity tracking",
    "Excel production report",
    "industrial production monitoring",
    "recycling automation",
    "Siemens TIA Portal",
    "industrial automation Turkey",
  ],

  alternates: {
    canonical:
      "https://www.aenatechnologies.com/projects/granule-shift-monitoring",
  },

  openGraph: {
    title:
      "Granule Recycling Shift Monitoring System | AENA Technologies",

    description:
      "Production shift monitoring system developed with Siemens Siwarex load-cell technology for tracking granule production quantities and generating production reports.",

    url:
      "https://www.aenatechnologies.com/projects/granule-shift-monitoring",

    siteName: "AENA Technologies",

    type: "website",
  },
};

export default function GranuleShiftMonitoringPage() {
  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}
      <section className="border-b border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            Recycling Automation
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-extrabold leading-tight sm:text-6xl">
            Granule Recycling
            <span className="block text-orange-500">
              Shift Monitoring System
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-8 text-slate-400">
            A production monitoring system developed to track granule
            production quantities by shift using Siemens Siwarex weighing
            technology and industrial automation infrastructure.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-500">
            The system records production data from the weighing system and
            organizes the information according to day, month, year and
            production shift, allowing production performance to be monitored
            and reported more efficiently.
          </p>

        </div>
      </section>


      {/* PROJECT VIDEO */}
      {/* PROJECT VIDEO */}
<section className="border-b border-slate-800 bg-slate-900/40 py-28">
  <div className="mx-auto max-w-4xl px-8">

    <div className="text-center">

      <p className="font-semibold uppercase tracking-[3px] text-orange-400">
        System Demonstration
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        Granule Production Monitoring
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
        Demonstration of the production monitoring and weighing system
        used for granule recycling operations.
      </p>

    </div>

    {/* VIDEO */}
    <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl border border-slate-800 bg-black shadow-2xl">

      <video
        className="block h-auto w-full"
        controls
        playsInline
        preload="metadata"
      >
        <source
          src="/projects/granule-shift-monitoring/granule.mp4"
          type="video/mp4"
        />

        Your browser does not support the video tag.
      </video>

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
                Shift-Based Granule Production Tracking
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                The system was developed to provide a clear and structured
                overview of granule production quantities during different
                production shifts.
              </p>

              <p>
                Production quantities are measured through a weighing system
                using Siemens Siwarex load-cell technology and processed
                through the industrial automation system.
              </p>

              <p>
                The collected production information can then be organized
                according to production date, shift and accumulated production
                quantity.
              </p>

              <p>
                This provides operators and production management with a more
                practical way to monitor production performance and evaluate
                historical production data.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* SIWAREX SYSTEM */}
      <section className="border-y border-slate-800 bg-slate-900/40 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Weighing & Automation
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold">
            Siemens Siwarex Load Cell Integration
          </h2>

          <div className="mt-10 max-w-4xl space-y-6 text-lg leading-8 text-slate-400">

            <p>
              The production monitoring system uses Siemens Siwarex weighing
              technology to acquire accurate production weight information
              from the load-cell system.
            </p>

            <p>
              The weighing data is integrated into the Siemens automation
              architecture, allowing production quantities to be processed
              together with the machine control system.
            </p>

            <p>
              This approach allows the measured production quantity to become
              part of the machine&apos;s digital production data instead of
              relying on manual production records.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-xl font-bold text-orange-400">
                Load Cell
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Production quantity is measured through an industrial load-cell
                weighing system.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-xl font-bold text-orange-400">
                Siemens Siwarex
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                The Siwarex weighing module provides the interface between the
                load-cell measurement system and the automation architecture.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-xl font-bold text-orange-400">
                Production Data
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Weight information is processed and organized for production
                monitoring and reporting.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* SHIFT MONITORING */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Shift Monitoring
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Production Tracking by Shift
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                The system records the amount of granule produced during each
                production shift.
              </p>

              <p>
                Production information can be evaluated according to the
                selected day, month or year, making it possible to compare
                production performance over different periods.
              </p>

              <p>
                Instead of manually recording production quantities, the
                weighing information is collected directly from the industrial
                automation system.
              </p>

              <p>
                This creates a more consistent production record and provides
                a useful foundation for production analysis.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* REPORTING */}
      <section className="border-y border-slate-800 bg-slate-900/40 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Production Reporting
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Historical Production Data & Excel Reporting
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Production data can be organized into reports containing
                production date, shift information and measured production
                quantity.
              </p>

              <p>
                The reporting structure allows production information to be
                evaluated in a format suitable for operational analysis and
                record keeping.
              </p>

              <p>
                Excel-based reporting provides an accessible way for production
                personnel and management to review historical production data.
              </p>

            </div>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <span className="text-3xl font-extrabold text-orange-500">
                DAY
              </span>

              <h3 className="mt-5 text-xl font-bold">
                Daily Production
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Monitor the total production quantity recorded during a
                selected production day.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <span className="text-3xl font-extrabold text-orange-500">
                MONTH
              </span>

              <h3 className="mt-5 text-xl font-bold">
                Monthly Production
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Review accumulated production quantities over a monthly
                production period.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <span className="text-3xl font-extrabold text-orange-500">
                YEAR
              </span>

              <h3 className="mt-5 text-xl font-bold">
                Annual Production
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Analyze production history and accumulated quantities over
                longer operating periods.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ENGINEERING VALUE */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Engineering Value
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            From Weighing Data to Production Intelligence
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            The project combines industrial weighing, PLC-based automation and
            production data management to transform raw production weight
            measurements into structured shift-based production information.
          </p>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-orange-500 py-20">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="text-4xl font-bold sm:text-5xl">
            Need Production Monitoring for Your Machine?
          </h2>

          <p className="mt-6 text-xl text-orange-100">
            We can develop industrial production monitoring systems using
            PLC, weighing modules, sensors and production data integration.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-bold text-orange-500 transition hover:bg-slate-100"
          >
            Request a Production Monitoring Solution
          </Link>

        </div>

      </section>

    </main>
  );
}