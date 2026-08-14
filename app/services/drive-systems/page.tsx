import Link from "next/link";

export const metadata = {
  title: "Industrial Drive Systems & VFD Services",
  description:
    "Industrial AC drive and VFD services including drive commissioning, parameterization, troubleshooting, obsolete drive replacement, PLC communication mapping, protocol conversion and gateway-based drive integration by AENA Technologies.",
};

export default function DriveSystemsPage() {
  const capabilities = [
    "AC drive installation",
    "VFD commissioning",
    "Drive parameterization",
    "Drive troubleshooting",
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
              Engineering & Integration
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-8 text-slate-400">
            Industrial AC drive, VFD, motor control, commissioning,
            troubleshooting and drive replacement solutions for machinery and
            production lines.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-500">
            AENA Technologies supports drive installation, parameterization,
            commissioning, troubleshooting and modernization of industrial
            motor control systems.
          </p>

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
              Correct drive selection and commissioning are important for
              maintaining machine performance, motor protection and reliable
              production.
            </p>

            <p>
              AENA Technologies can support both new drive installations and
              replacement of obsolete or faulty drives in existing industrial
              machinery.
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
                after installation or machine modernization.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* TROUBLESHOOTING */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Drive Fault Diagnosis
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Investigation of drive alarms, motor faults, communication
                errors, overcurrent, overload and other operating problems.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Parameter Optimization
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Optimization of drive parameters according to motor
                characteristics, machine load and required production
                performance.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Machine Integration
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Integration of drives with PLCs, HMIs, sensors and existing
                machine control systems.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* OBSOLETE DRIVE */}

      <section className="py-24">

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
                feedback values and machine behavior may also need to be
                considered.
              </p>

              <p>
                AENA Technologies evaluates the existing drive, motor,
                PLC architecture and machine requirements before selecting a
                suitable replacement approach.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* COMMUNICATION PROBLEM */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

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
            communication structure, simply installing the replacement device
            may not be sufficient.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            In suitable applications, communication mapping or a gateway
            integration layer can be evaluated to bridge the existing control
            system with the replacement drive.
          </p>

        </div>

      </section>


      {/* MAPPING */}

      <section className="py-24">

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

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

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

      <section className="py-24">

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

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

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


      {/* COMMISSIONING */}

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


            <div className="rounded-2xl border border-slate-800 bg-slate-900 bg-slate-900 p-8">

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


      {/* CTA */}

      <section className="bg-orange-500 py-20">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="text-4xl font-bold sm:text-5xl">
            Need to Replace or Integrate an Industrial Drive?
          </h2>

          <p className="mt-6 text-xl text-orange-100">
            Tell us about your existing drive, PLC and communication system.
            We can evaluate the replacement and integration requirements.
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