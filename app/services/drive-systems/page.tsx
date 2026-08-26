import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial Drive & VFD Services | Troubleshooting & Replacement",

  description:
    "Industrial drive and VFD services including drive troubleshooting, commissioning, parameterization, obsolete drive replacement, PLC communication, data mapping and retrofit integration.",

  keywords: [
    "industrial drive services",
    "industrial drive troubleshooting",
    "VFD troubleshooting",
    "AC drive troubleshooting",
    "VFD fault diagnosis",
    "AC drive fault diagnosis",
    "industrial VFD services",
    "drive commissioning",
    "VFD commissioning",
    "drive parameterization",
    "VFD parameterization",
    "obsolete drive replacement",
    "old drive replacement",
    "industrial drive replacement",
    "VFD replacement",
    "drive retrofit",
    "industrial drive retrofit",
    "PLC drive communication",
    "PLC VFD communication",
    "drive communication fault",
    "VFD communication fault",
    "drive communication mapping",
    "control word status word mapping",
    "drive parameter migration",
    "legacy drive integration",
    "industrial gateway integration",
    "PLC drive integration",
    "machine automation",
    "industrial automation Turkey",
    "VFD services Turkey",
    "industrial drive services Turkey",
  ],

  alternates: {
    canonical: "https://www.aenatechnologies.com/services/drive-systems",
  },

  openGraph: {
    title: "Industrial Drive & VFD Services | AENA Technologies",
    description:
      "Industrial drive troubleshooting, commissioning, replacement, PLC communication and retrofit integration for machines and production lines.",
    url: "https://www.aenatechnologies.com/services/drive-systems",
    siteName: "AENA Technologies",
    type: "website",
  },
};

export default function DriveSystemsPage() {
  const capabilities = [
    "AC drive installation",
    "VFD commissioning",
    "Drive parameterization",
    "Drive troubleshooting",
    "VFD fault diagnosis",
    "Motor drive integration",
    "Speed control",
    "Acceleration and deceleration optimization",
    "Drive parameter migration",
    "Obsolete drive replacement",
    "Replacement drive selection",
    "PLC-to-drive communication",
    "Communication data mapping",
    "Control word and status word mapping",
    "Speed reference and feedback mapping",
    "Fault-code mapping",
    "Gateway-based communication",
    "Protocol conversion",
    "Legacy automation modernization",
  ];

  const commonProblems = [
    {
      title: "VFD Overcurrent & Drive Faults",
      text:
        "Investigation of overcurrent, overload, motor-related faults and other drive alarms affecting machine operation.",
    },
    {
      title: "Drive Communication Problems",
      text:
        "Analysis of communication failures between PLCs, drives, HMIs and other industrial automation equipment.",
    },
    {
      title: "Obsolete Drive Replacement",
      text:
        "Evaluation and replacement of discontinued or unavailable drives while considering existing machine control requirements.",
    },
    {
      title: "New Drive Not Communicating",
      text:
        "Analysis of protocol, register, telegram, control word and feedback differences when replacing an existing drive.",
    },
    {
      title: "Drive Parameter Problems",
      text:
        "Configuration and optimization of motor, speed, acceleration, deceleration and control parameters.",
    },
    {
      title: "PLC Compatibility After Drive Replacement",
      text:
        "Evaluation of communication mapping and interface adaptation when the replacement drive does not match the original drive structure.",
    },
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}

      <section className="border-b border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            Industrial Drive Systems
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-extrabold leading-tight sm:text-6xl">
            AC Drive & VFD
            <span className="block text-orange-500">
              Troubleshooting, Replacement & Integration
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-8 text-slate-400">
            Industrial AC drive and VFD services for troubleshooting,
            commissioning, parameterization, obsolete drive replacement,
            PLC communication and machine retrofit applications.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-500">
            AENA Technologies supports industrial machinery and production
            lines where drive faults, communication problems, obsolete
            equipment or replacement-drive compatibility require electrical,
            automation and control engineering.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600"
            >
              Discuss Your Drive Problem
            </Link>

            <Link
              href="/services/plc-programming"
              className="rounded-xl border border-slate-700 bg-slate-900 px-7 py-4 font-bold text-white transition hover:border-orange-500"
            >
              PLC Engineering
            </Link>
          </div>

        </div>
      </section>


      {/* OVERVIEW */}

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-8 lg:grid-cols-2">

          <div>

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Drive Engineering
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Industrial Drive Systems for Machine Applications
            </h2>

          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-400">

            <p>
              AC drives and variable frequency drives are used to control
              motor speed, acceleration, deceleration and torque in many
              industrial machines.
            </p>

            <p>
              Drive problems can originate from motor conditions, mechanical
              loads, parameter settings, electrical connections, control
              signals or industrial communication systems.
            </p>

            <p>
              AENA Technologies can investigate existing drive systems,
              identify the relevant control and electrical factors and
              determine a suitable troubleshooting, replacement or
              modernization approach.
            </p>

          </div>

        </div>
      </section>


      {/* COMMON PROBLEMS */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Drive Problems
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Industrial Drive Problems We Can Investigate
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-400">
              Drive faults are not always caused by the drive itself.
              Troubleshooting may require checking the motor, machine load,
              control signals, parameters, PLC communication and electrical
              infrastructure.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {commonProblems.map((problem) => (
              <div
                key={problem.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500"
              >

                <div className="mb-5 h-1 w-12 rounded-full bg-orange-500" />

                <h3 className="text-xl font-bold">
                  {problem.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {problem.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* CAPABILITIES */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Engineering Capabilities
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Drive System Services
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Drive engineering services covering installation,
              commissioning, troubleshooting, replacement and industrial
              communication integration.
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


      {/* TROUBLESHOOTING */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Drive Troubleshooting
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                AC Drive Fault Diagnosis & Troubleshooting
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                A drive alarm does not necessarily mean that the drive itself
                has failed. Overcurrent, overload, overheating, communication
                faults and unstable operation may involve several parts of
                the machine.
              </p>

              <p>
                Troubleshooting can include checking motor current, operating
                conditions, drive parameters, control signals, feedback,
                PLC communication and the machine's mechanical load.
              </p>

              <p>
                The objective is to identify the actual source of the problem
                before unnecessary drive or motor replacement.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* COMMISSIONING */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Drive Commissioning
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                AC Drive Setup & Commissioning
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Drive commissioning includes motor data configuration,
                operating parameter setup, acceleration and deceleration
                settings and machine control integration.
              </p>

              <p>
                Drive parameters must be configured according to the motor,
                mechanical load, machine sequence and required operating
                conditions.
              </p>

              <p>
                AENA Technologies supports drive testing and commissioning
                after installation, replacement or machine modernization.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* OBSOLETE DRIVE */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Drive Replacement
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Obsolete or Unavailable Drive Replacement
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Industrial machines often continue operating long after the
                original drive model has become obsolete or difficult to
                obtain.
              </p>

              <p>
                Replacing the drive requires more than selecting a motor drive
                with the same power rating. Communication, control signals,
                feedback values, motor characteristics and machine behavior
                may also need to be considered.
              </p>

              <p>
                AENA Technologies evaluates the existing drive, motor,
                PLC architecture and machine requirements before determining
                a suitable replacement approach.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* COMMUNICATION PROBLEM */}

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Legacy Communication
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            What Happens When the New Drive Does Not Communicate Like the Old
            Drive?
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            A replacement drive may use a different communication protocol,
            telegram structure, register layout or data representation than
            the original drive.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            If the existing PLC expects the original drive&apos;s
            communication structure, simply installing the replacement
            device may not be sufficient.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            In suitable applications, communication mapping or a gateway
            integration layer can be evaluated to bridge the existing
            control system with the replacement drive.
          </p>

        </div>
      </section>


      {/* MAPPING */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Communication Mapping
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              PLC & Drive Data Mapping
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-400">
              Communication mapping can translate the information expected by
              an existing PLC into the corresponding data used by a
              replacement drive, where the protocols and application allow
              this approach.
            </p>

          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Existing PLC
              </h3>

              <ul className="mt-6 space-y-3 text-slate-400">
                <li>Control Word</li>
                <li>Status Word</li>
                <li>Speed Reference</li>
                <li>Actual Speed</li>
                <li>Fault Code</li>
                <li>Current Feedback</li>
                <li>Torque Feedback</li>
              </ul>

            </div>

            <div className="rounded-2xl border border-orange-500/40 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Replacement Drive
              </h3>

              <ul className="mt-6 space-y-3 text-slate-400">
                <li>Mapped Control Data</li>
                <li>Mapped Status Data</li>
                <li>Mapped Speed Command</li>
                <li>Actual Speed Feedback</li>
                <li>Mapped Fault Information</li>
                <li>Current Feedback</li>
                <li>Torque Feedback</li>
              </ul>

            </div>

          </div>

        </div>
      </section>


      {/* GATEWAY */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Gateway Integration
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Gateway-Based Drive Communication
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                A communication gateway can provide an intermediate layer
                between an existing PLC and a replacement drive when the two
                systems use different communication protocols or data
                structures.
              </p>

              <p>
                Depending on the application, the gateway may handle protocol
                conversion, register mapping, data scaling, command
                translation and status information.
              </p>

              <p>
                This approach can be considered when the existing PLC
                application is difficult to modify, protected or already
                validated in production.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ARCHITECTURE */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">
        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Integration Architecture
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Existing PLC → Gateway → New Drive
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            A gateway-based architecture can be evaluated as a solution for
            integrating a replacement drive into an existing industrial
            communication system.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

              <p className="text-sm uppercase tracking-[2px] text-orange-400">
                Existing System
              </p>

              <p className="mt-3 text-xl font-bold">
                PLC
              </p>

              <p className="mt-3 text-sm text-slate-500">
                Existing machine control program and communication interface
              </p>

            </div>

            <div className="rounded-2xl border border-orange-500 bg-slate-900 p-6">

              <p className="text-sm uppercase tracking-[2px] text-orange-400">
                Communication Layer
              </p>

              <p className="mt-3 text-xl font-bold">
                Gateway / Mapping
              </p>

              <p className="mt-3 text-sm text-slate-500">
                Protocol conversion and data translation where applicable
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

              <p className="text-sm uppercase tracking-[2px] text-orange-400">
                Replacement Device
              </p>

              <p className="mt-3 text-xl font-bold">
                New AC Drive
              </p>

              <p className="mt-3 text-sm text-slate-500">
                Replacement drive integrated into the existing machine
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* PLC PROGRAM PROTECTION */}

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Existing PLC Architecture
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Modernizing a Drive Without Unnecessarily Rewriting the PLC
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Some industrial machines use protected, password-controlled or
            legacy PLC applications that are difficult to modify.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Where technically feasible, preserving the existing PLC logic
            while adapting the communication interface can reduce engineering
            changes and minimize machine downtime.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            The actual solution depends on the PLC, drive model, communication
            protocol, available interfaces and machine control requirements.
          </p>

        </div>
      </section>


      {/* RETROFIT */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">
        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Industrial Drive Retrofit
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Drive Replacement Without Replacing the Entire Machine
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            A machine does not necessarily need to be completely replaced
            when its drive system becomes obsolete. Drive modernization can
            extend machine operating life while retaining usable mechanical
            and electrical systems.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Retrofit projects may include drive replacement, parameter
            migration, PLC communication mapping, electrical cabinet
            revision, motor integration, software modifications and
            commissioning.
          </p>

        </div>
      </section>


      {/* COMMISSIONING SUPPORT */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Drive Commissioning
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Motor and drive configuration, parameter setup, testing and
                machine commissioning.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Communication Testing
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Verification of PLC-to-drive communication, control commands,
                feedback values and fault information.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Production Support
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Troubleshooting and optimization after drive replacement,
                modernization or commissioning.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* PROJECT INFORMATION */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-20">
        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Drive Project Assessment
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            What Information Helps Us Evaluate a Drive Problem?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            For troubleshooting or drive replacement projects, providing the
            available equipment information can help determine the required
            engineering approach.
          </p>

          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Drive manufacturer and model",
              "Motor power and nameplate data",
              "PLC manufacturer and model",
              "Drive fault code",
              "Communication protocol",
              "Machine type and application",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              >
                <span className="text-orange-400">✓</span>
                <span className="ml-3 font-semibold">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* CTA */}

      <section className="bg-orange-500 py-20">
        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="text-4xl font-bold sm:text-5xl">
            Need to Troubleshoot or Replace an Industrial Drive?
          </h2>

          <p className="mt-6 text-xl text-orange-100">
            Tell us about your existing drive, motor, PLC and machine
            problem. We can evaluate the troubleshooting, replacement or
            integration requirements.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-bold text-orange-500 transition hover:bg-slate-100"
          >
            Discuss Your Drive Project
          </Link>

        </div>
      </section>

    </main>
  );
}