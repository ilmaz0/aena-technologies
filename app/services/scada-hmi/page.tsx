import Link from "next/link";

export const metadata = {
  title: "SCADA & HMI Programming and Modernization",
  description:
    "Industrial SCADA systems, HMI programming, HMI modernization, machine monitoring, alarm management, production data collection and PLC-HMI integration by AENA Technologies.",
};

export default function ScadaHmiPage() {
  const capabilities = [
    "Industrial HMI programming",
    "HMI modernization",
    "HMI replacement",
    "SCADA system development",
    "Machine visualization",
    "Production monitoring",
    "PLC-HMI integration",
    "Alarm and event management",
    "Production data collection",
    "Machine data logging",
    "Industrial communication",
    "Remote machine monitoring",
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}

      <section className="border-b border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            SCADA & HMI Engineering
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-extrabold leading-tight sm:text-6xl">
            Industrial SCADA & HMI
            <span className="block text-orange-500">
              Programming & Modernization
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-8 text-slate-400">
            Industrial HMI and SCADA solutions for machine visualization,
            operator control, production monitoring, alarms and industrial
            data collection.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-500">
            AENA Technologies develops and modernizes HMI and SCADA systems
            for industrial machines and production lines, connecting PLCs,
            drives, sensors and production data into practical operator
            interfaces.
          </p>

        </div>
      </section>


      {/* OVERVIEW */}

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-8 lg:grid-cols-2">

          <div>

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Industrial Visualization
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Machine Control & Production Visualization
            </h2>

          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-400">

            <p>
              HMI and SCADA systems provide operators with a practical
              interface for controlling machines, monitoring production
              conditions and responding to process alarms.
            </p>

            <p>
              AENA Technologies develops interfaces that connect PLC
              control logic with machine operators and production personnel.
            </p>

            <p>
              Existing HMI systems can also be modernized when the hardware
              becomes obsolete, difficult to maintain or no longer provides
              the required production information.
            </p>

          </div>

        </div>

      </section>


      {/* CAPABILITIES */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Engineering Capabilities
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              SCADA & HMI Services
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              HMI and SCADA engineering for industrial machines, production
              lines and automated manufacturing systems.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {capabilities.map((item) => (

              <div
                key={item}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500"
              >

                <span className="text-orange-400">
                  ✓
                </span>

                <p className="mt-3 font-semibold">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* HMI */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                HMI Programming
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Industrial HMI Development & Modernization
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Industrial HMI systems allow operators to monitor machine
                status, change production parameters and control machine
                functions from a central interface.
              </p>

              <p>
                HMI screens can be designed around machine sequences,
                operator requirements, alarms, recipes and production
                information.
              </p>

              <p>
                Existing HMI systems can also be redesigned or replaced
                during machine retrofit projects while maintaining the
                existing PLC control architecture where practical.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* SCADA */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                SCADA Systems
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Industrial SCADA & Production Monitoring
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                SCADA systems provide a centralized view of industrial
                machines, production lines and process variables.
              </p>

              <p>
                Production personnel can monitor machine status, process
                values, alarms and operating conditions through a centralized
                visualization system.
              </p>

              <p>
                SCADA solutions can also collect production information for
                analysis, reporting and machine performance evaluation.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* PLC HMI */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                PLC Integration
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                HMI systems can communicate with PLCs to display machine
                status, process values, alarms and control commands.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Drive Integration
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Drive parameters, motor status, speed references and fault
                information can be integrated into machine visualization
                systems.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Sensor Data
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Process sensors and machine instrumentation can be displayed
                and monitored through HMI and SCADA interfaces.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ALARMS */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Alarm Management
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Industrial Alarm & Fault Visualization
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Machine faults should provide operators with useful information
            rather than simply displaying a generic error condition.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            HMI and SCADA systems can display alarm status, fault information,
            process conditions and operator messages to help reduce
            troubleshooting time and machine downtime.
          </p>

        </div>

      </section>


      {/* DATA */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <p className="font-semibold text-orange-400">
                Production Data
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Machine Data Collection
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Production counters, machine operating values and process
                information can be collected for monitoring and analysis.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <p className="font-semibold text-orange-400">
                Machine Monitoring
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Operating Status
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Machine running status, downtime conditions and process
                variables can be visualized through centralized interfaces.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <p className="font-semibold text-orange-400">
                Historical Data
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Data Logging
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Selected production and process values can be recorded for
                later analysis, reporting and machine performance evaluation.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* HMI RETROFIT */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            HMI Retrofit
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Modernize an Existing Machine Interface
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            An outdated HMI does not necessarily mean that the entire machine
            needs to be replaced. The operator interface can often be
            modernized while preserving the existing machine control
            architecture.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            HMI modernization can include new screens, improved alarm
            visualization, parameter management, production information and
            integration with updated PLC or drive systems.
          </p>

        </div>

      </section>


      {/* COMMISSIONING */}

      <section className="py-24">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Commissioning
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            HMI & SCADA Commissioning
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            HMI and SCADA systems must be tested together with PLC programs,
            sensors, drives and the actual machine sequence.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            AENA Technologies supports testing, commissioning and
            troubleshooting of integrated machine visualization and control
            systems.
          </p>

        </div>

      </section>


      {/* CTA */}

      <section className="bg-orange-500 py-20">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="text-4xl font-bold sm:text-5xl">
            Need an HMI or SCADA Solution?
          </h2>

          <p className="mt-6 text-xl text-orange-100">
            Tell us about your machine, HMI or production monitoring
            requirement and we can evaluate the automation solution.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-bold text-orange-500 transition hover:bg-slate-100"
          >
            Discuss Your Automation Project
          </Link>

        </div>

      </section>

    </main>
  );
}