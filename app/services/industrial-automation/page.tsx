import Link from "next/link";

export const metadata = {
  title: "Industrial Automation Services",
  description:
    "Industrial automation solutions including PLC, HMI, drives, sensors, machine control systems and production line automation by AENA Technologies.",
};

export default function IndustrialAutomationPage() {
  const capabilities = [
    "PLC-based machine automation",
    "HMI development and modernization",
    "Industrial drive integration",
    "Servo and motion control",
    "Sensor integration",
    "Machine control systems",
    "Production line automation",
    "Industrial communication systems",
    "Machine troubleshooting",
    "Automation commissioning",
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}

      <section className="border-b border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            Industrial Automation
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-extrabold leading-tight sm:text-6xl">
            Industrial Automation
            <span className="block text-orange-500">
              Engineering & Control Systems
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-8 text-slate-400">
            AENA Technologies develops and modernizes industrial automation
            systems for machines, production lines and manufacturing
            equipment.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-500">
            From PLC and HMI systems to drives, sensors, industrial
            communication and commissioning, we provide complete automation
            engineering solutions for industrial machinery.
          </p>

        </div>
      </section>


      {/* OVERVIEW */}

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-8 lg:grid-cols-2">

          <div>

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Automation Engineering
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Industrial Control Systems for Machines & Production Lines
            </h2>

          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-400">

            <p>
              Industrial automation connects electrical equipment, sensors,
              drives, PLCs, HMIs and mechanical systems into a coordinated
              machine control architecture.
            </p>

            <p>
              AENA Technologies provides automation engineering for new
              machines as well as existing equipment requiring modernization,
              troubleshooting or performance improvements.
            </p>

            <p>
              The automation system can be designed around the machine&apos;s
              process requirements, production sequence, safety requirements
              and available electrical infrastructure.
            </p>

          </div>

        </div>
      </section>


      {/* CAPABILITIES */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Automation Capabilities
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Industrial Automation Solutions
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Automation solutions for industrial machinery, production
              equipment and manufacturing systems.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {capabilities.map((item) => (
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


      {/* PLC */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                PLC & Machine Control
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                PLC-Based Industrial Automation
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                PLC systems are commonly used as the central control system
                of industrial machines and production equipment.
              </p>

              <p>
                AENA Technologies can develop, modify, troubleshoot and
                modernize PLC-based control systems according to machine
                requirements.
              </p>

              <p>
                Automation projects can include machine sequences, sensor
                processing, drive control, alarms, interlocks and operator
                interfaces.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* DRIVES & MOTION */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Drives & Motion
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Drive, Servo & Motion Integration
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Industrial drives and servo systems are critical components
                of many modern machines.
              </p>

              <p>
                AENA Technologies works with drive systems for speed control,
                positioning, synchronization and machine motion applications.
              </p>

              <p>
                Existing drives can also be evaluated for parameter
                optimization, troubleshooting or replacement with suitable
                equivalent equipment.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* INDUSTRIAL COMMUNICATION */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Industrial Communication
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Machine Communication & Integration
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Modern industrial machines often rely on communication
                networks between PLCs, drives, remote I/O, HMIs and other
                automation devices.
              </p>

              <p>
                Automation systems can be integrated using appropriate
                industrial communication architectures according to the
                machine requirements.
              </p>

              <p>
                Existing communication systems can also be analyzed during
                retrofit and troubleshooting projects.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* TROUBLESHOOTING */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Troubleshooting
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Industrial Automation Troubleshooting
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Automation failures can originate from PLC logic, sensors,
                drives, communication networks, electrical systems or machine
                control sequences.
              </p>

              <p>
                AENA Technologies can analyze existing automation systems to
                identify faults and determine the appropriate corrective
                approach.
              </p>

              <p>
                Troubleshooting can include component testing, parameter
                analysis, communication diagnostics and machine sequence
                investigation.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* COMMISSIONING */}

      <section className="py-24">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Commissioning
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            From Automation Design to Machine Commissioning
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Automation engineering does not end with software development.
            The complete system must be tested, integrated with the machine,
            commissioned and optimized under actual production conditions.
          </p>

        </div>

      </section>


      {/* CTA */}

      <section className="bg-orange-500 py-20">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="text-4xl font-bold sm:text-5xl">
            Need an Industrial Automation Solution?
          </h2>

          <p className="mt-6 text-xl text-orange-100">
            Tell us about your machine, production line or automation
            requirement.
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