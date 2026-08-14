import Link from "next/link";

export const metadata = {
  title: "PLC Programming & Troubleshooting Services",
  description:
    "PLC programming, PLC troubleshooting, PLC replacement, PLC migration and machine automation services for Siemens, Mitsubishi and industrial control systems by AENA Technologies.",
};

export default function PLCProgrammingPage() {
  const services = [
    "PLC programming and software development",
    "PLC troubleshooting and fault diagnosis",
    "Obsolete PLC replacement",
    "PLC migration and modernization",
    "Siemens PLC programming",
    "Mitsubishi PLC programming",
    "Machine retrofit PLC integration",
    "HMI and PLC integration",
    "Drive and PLC communication",
    "Industrial commissioning",
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}

      <section className="border-b border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            PLC Engineering
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-extrabold leading-tight sm:text-6xl">
            PLC Programming
            <span className="block text-orange-500">
              Troubleshooting & Migration
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-8 text-slate-400">
            PLC programming, troubleshooting and modernization services for
            industrial machines, production lines and automation systems.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-500">
            AENA Technologies works with PLC-based control systems for machine
            automation, retrofit projects, obsolete controller replacement,
            HMI integration, drive communication and industrial commissioning.
          </p>

        </div>
      </section>


      {/* OVERVIEW */}

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-8 lg:grid-cols-2">

          <div>

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              PLC Automation
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              PLC Systems for Industrial Machinery
            </h2>

          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-400">

            <p>
              PLC systems are the central control element of many industrial
              machines and production lines. A reliable PLC program must
              coordinate sensors, actuators, drives, safety systems and
              operator interfaces.
            </p>

            <p>
              AENA Technologies develops and modifies PLC software according
              to machine sequences, production requirements and existing
              electrical infrastructure.
            </p>

            <p>
              Existing PLC systems can also be analyzed when a machine is
              experiencing faults, unstable operation or obsolete control
              hardware.
            </p>

          </div>

        </div>
      </section>


      {/* SERVICES */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              PLC Services
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              PLC Programming & Engineering Services
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Practical PLC engineering solutions for new machines,
              existing equipment and industrial retrofit projects.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
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


      {/* PLC TROUBLESHOOTING */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                PLC Troubleshooting
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                PLC Fault Diagnosis & Machine Troubleshooting
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                PLC-related machine problems can originate from software
                logic, input signals, output devices, sensors, communication
                systems, drives or external equipment.
              </p>

              <p>
                Troubleshooting begins by analyzing the machine sequence,
                PLC diagnostics, input and output signals, communication
                status and related electrical equipment.
              </p>

              <p>
                The objective is to identify the actual source of the problem
                rather than replacing components unnecessarily.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* OBSOLETE PLC */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                PLC Modernization
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Obsolete PLC Replacement & Migration
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Older machines may continue to operate mechanically while
                their PLC hardware becomes obsolete, difficult to source or
                unsupported by the manufacturer.
              </p>

              <p>
                In these situations, the existing control architecture can
                be evaluated to determine whether the PLC should be replaced,
                migrated or integrated with a modern control platform.
              </p>

              <p>
                The objective is to modernize the control system while
                preserving as much of the existing machine structure and
                production process as practical.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* SIEMENS / MITSUBISHI */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Siemens
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Siemens PLC Programming
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                PLC programming, troubleshooting, machine retrofit and
                automation integration for Siemens-based industrial control
                systems.
              </p>

              <ul className="mt-6 space-y-3 text-slate-400">

                <li>• PLC software development</li>
                <li>• Machine troubleshooting</li>
                <li>• HMI integration</li>
                <li>• Drive communication</li>
                <li>• Retrofit and modernization</li>

              </ul>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Mitsubishi
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Mitsubishi PLC Programming
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Mitsubishi PLC-based machine automation, troubleshooting,
                drive integration and modernization support for industrial
                machinery.
              </p>

              <ul className="mt-6 space-y-3 text-slate-400">

                <li>• PLC programming</li>
                <li>• Machine control</li>
                <li>• Drive integration</li>
                <li>• Troubleshooting</li>
                <li>• Machine retrofit</li>

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* PLC + DRIVE COMMUNICATION */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Industrial Communication
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                PLC, Drive & Machine Communication
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Industrial machines frequently exchange data between PLCs,
                drives, HMIs, remote I/O and other automation equipment.
              </p>

              <p>
                Communication problems can result in drive faults, missing
                feedback, unstable machine operation or complete loss of
                machine control.
              </p>

              <p>
                AENA Technologies can analyze communication architecture and
                integrate suitable automation equipment into existing machine
                control systems.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* RETROFIT */}

      <section className="py-24">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Machine Retrofit
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            PLC Modernization Without Replacing the Entire Machine
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            A machine does not necessarily need to be completely replaced
            when its control system becomes obsolete. PLC modernization can
            extend machine operating life by replacing outdated control
            hardware while retaining usable mechanical systems.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Retrofit projects may include PLC replacement, HMI modernization,
            sensor integration, drive replacement, electrical cabinet
            revision, software redevelopment and commissioning.
          </p>

        </div>

      </section>


      {/* COMMISSIONING */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Commissioning
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            PLC Software to Machine Commissioning
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            PLC engineering continues through machine testing and
            commissioning. The control program must be tested together with
            sensors, actuators, drives, safety systems and the actual
            production process.
          </p>

        </div>

      </section>


      {/* CTA */}

      <section className="bg-orange-500 py-20">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="text-4xl font-bold sm:text-5xl">
            Need PLC Programming or Troubleshooting?
          </h2>

          <p className="mt-6 text-xl text-orange-100">
            Tell us about your PLC, machine or production line and we can
            evaluate the required automation solution.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-bold text-orange-500 transition hover:bg-slate-100"
          >
            Discuss Your PLC Project
          </Link>

        </div>

      </section>

    </main>
  );
}