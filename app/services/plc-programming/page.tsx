
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PLC Programming & Troubleshooting Services | AENA Technologies",

  description:
    "PLC programming, PLC troubleshooting, obsolete PLC replacement, PLC migration, industrial communication mapping, drive integration and machine automation services by AENA Technologies.",

  keywords: [
    "PLC programming",
    "PLC programming services",
    "PLC troubleshooting",
    "PLC fault diagnosis",
    "industrial PLC programming",
    "PLC automation",
    "PLC replacement",
    "obsolete PLC replacement",
    "PLC migration",
    "PLC modernization",
    "Siemens PLC programming",
    "Mitsubishi PLC programming",
    "machine retrofit PLC",
    "PLC retrofit",
    "HMI PLC integration",
    "PLC drive communication",
    "industrial communication mapping",
    "industrial gateway integration",
    "legacy PLC integration",
    "machine automation",
    "industrial automation Turkey",
    "PLC programming Turkey",
  ],

  alternates: {
    canonical: "https://www.aenatechnologies.com/services/plc-programming",
  },

  openGraph: {
    title: "PLC Programming & Troubleshooting Services | AENA Technologies",

    description:
      "PLC programming, troubleshooting, modernization, migration and industrial automation integration for machines and production lines.",

    url: "https://www.aenatechnologies.com/services/plc-programming",

    siteName: "AENA Technologies",

    type: "website",
  },
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
    "Industrial communication mapping",
    "Legacy equipment integration",
    "Industrial commissioning",
  ];

  const communicationServices = [
    {
      title: "Data Mapping",
      text:
        "Mapping commands, status information, references, feedback values and alarms between different industrial device structures.",
    },
    {
      title: "Protocol Conversion",
      text:
        "Evaluating communication protocol differences and implementing suitable conversion methods where required.",
    },
    {
      title: "Industrial Gateway",
      text:
        "Using a gateway or communication interface to connect industrial equipment that cannot communicate directly.",
    },
    {
      title: "Legacy Compatibility",
      text:
        "Adapting new equipment to an existing machine architecture while minimizing unnecessary PLC modifications.",
    },
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
            HMI integration, drive communication, industrial communication
            mapping and machine commissioning.
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

            {/* SIEMENS */}

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


            {/* MITSUBISHI */}

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


      {/* LEGACY COMMUNICATION */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Legacy Integration
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Legacy PLC & New Equipment Integration
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Integrating modern automation equipment into an existing
                machine can be more complex than simply replacing the
                hardware.
              </p>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                A replacement drive, servo controller, sensor or remote I/O
                device may use a different communication protocol, telegram
                structure, register layout or data format than the original
                equipment.
              </p>

              <p>
                In retrofit applications, the existing PLC architecture can
                be analyzed and the required data exchanged between the old
                control system and the new equipment can be mapped.
              </p>

              <p>
                Depending on the application, communication mapping,
                protocol conversion or an industrial gateway can be used to
                establish compatibility between the existing machine
                controller and the replacement equipment.
              </p>

            </div>
          </div>
        </div>
      </section>


      {/* MAPPING & GATEWAY */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Communication Mapping
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Mapping & Gateway Solutions for Machine Retrofit
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-400">
              When a new component cannot communicate directly with an
              existing PLC or machine controller, the communication layer
              itself may need to be adapted.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {communicationServices.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500"
              >

                <div className="mb-5 h-1 w-12 rounded-full bg-orange-500" />

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* DRIVE REPLACEMENT EXAMPLE */}

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-8">

          <div className="rounded-3xl border border-orange-500/20 bg-slate-900 p-10">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Retrofit Communication Example
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Replacing an Obsolete Drive Without Redesigning the Entire
              Control System
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-400">

              <p>
                An existing machine may contain an obsolete drive that is no
                longer available. A modern replacement drive may have
                different communication characteristics even when its
                electrical and mechanical functions are suitable.
              </p>

              <p>
                The replacement process can therefore involve checking
                electrical connections, control signals, communication
                protocol, telegram structure, parameter references and
                feedback values.
              </p>

              <p>
                Where appropriate, the new equipment can be integrated using
                data mapping or an industrial gateway so that the existing
                control architecture can continue to exchange the required
                commands, status information and feedback.
              </p>

              <p>
                The exact approach depends on the PLC, drive, communication
                protocol and machine architecture. The objective is to
                achieve reliable integration without making unnecessary
                changes to the existing machine control system.
              </p>

            </div>
          </div>
        </div>
      </section>


      {/* RETROFIT */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">
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
            revision, software redevelopment, communication mapping and
            commissioning.
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
