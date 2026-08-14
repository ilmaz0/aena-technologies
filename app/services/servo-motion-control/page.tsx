import Link from "next/link";

export const metadata = {
  title: "Servo & Motion Control Services",
  description:
    "Industrial servo and motion control solutions including servo drives, motion synchronization, encoder integration, drive replacement, communication mapping and gateway-based legacy automation integration by AENA Technologies.",
};

export default function ServoMotionControlPage() {
  const capabilities = [
    "Servo motor commissioning",
    "Servo drive installation",
    "Servo tuning and optimization",
    "Position control",
    "Speed control",
    "Motion synchronization",
    "Multi-axis synchronization",
    "Electronic gearing",
    "Encoder integration",
    "Servo troubleshooting",
    "Legacy drive replacement",
    "PLC-to-drive communication mapping",
    "Drive protocol mapping",
    "Gateway-based communication integration",
    "Old PLC and new drive integration",
    "Motion system modernization",
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}

      <section className="border-b border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            Servo & Motion Control
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-extrabold leading-tight sm:text-6xl">
            Servo & Motion Control
            <span className="block text-orange-500">
              Engineering Solutions
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-8 text-slate-400">
            Servo drive, motion control, positioning, synchronization and
            encoder integration solutions for industrial machinery and
            production lines.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-500">
            AENA Technologies works with servo systems and industrial motion
            applications where speed, positioning, synchronization and
            reliable machine movement are critical to production performance.
          </p>

        </div>
      </section>


      {/* OVERVIEW */}

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-8 lg:grid-cols-2">

          <div>

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Motion Engineering
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Industrial Motion Control for Automated Machinery
            </h2>

          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-400">

            <p>
              Servo systems are commonly used where machines require accurate
              positioning, controlled acceleration, speed regulation and
              synchronization between multiple mechanical axes.
            </p>

            <p>
              AENA Technologies integrates servo drives, motors, encoders,
              PLCs and machine control systems into coordinated motion
              applications.
            </p>

            <p>
              Existing motion systems can also be diagnosed and modernized
              when obsolete drives, controllers or feedback components create
              maintenance and production problems.
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
              Servo & Motion Services
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Motion control engineering for positioning, synchronization,
              servo applications and industrial machine modernization.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

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


      {/* SERVO SYSTEMS */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Servo Systems
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Servo Drive & Motor Integration
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Servo systems combine servo motors, servo drives, feedback
                devices and machine control software to achieve controlled
                motion.
              </p>

              <p>
                AENA Technologies can support servo drive installation,
                parameter configuration, motor commissioning and machine
                sequence integration.
              </p>

              <p>
                Servo tuning can also be performed to improve positioning
                accuracy, response characteristics and machine movement.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* SYNCHRONIZATION */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Motion Synchronization
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Synchronization between motors and mechanical axes for
                coordinated machine movement and production processes.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Encoder Integration
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Encoder feedback integration for speed measurement,
                positioning, synchronization and closed-loop motion control.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Multi-Axis Control
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Coordinated control of multiple motion axes where machine
                sequences require synchronized positioning or speed control.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* LEGACY DRIVE */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Legacy Motion Systems
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Obsolete Servo & Drive Replacement
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Industrial machines can remain mechanically usable for many
                years even when their original servo drives or motion
                controllers are no longer available.
              </p>

              <p>
                AENA Technologies can evaluate obsolete motion hardware and
                determine whether a replacement drive or servo system can be
                integrated into the existing machine architecture.
              </p>

              <p>
                The objective is to modernize the motion system while
                minimizing unnecessary changes to the existing machine
                control structure.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* COMMUNICATION MAPPING */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Communication Integration
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Legacy PLC & New Drive Communication Mapping
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Replacing a drive can become difficult when the existing PLC
                program expects a specific drive model, communication protocol
                or data structure.
              </p>

              <p>
                Where technically feasible, communication mapping can be used
                to translate the data expected by the existing control system
                into the data structure used by a replacement drive.
              </p>

              <p>
                This can reduce the need for major changes to an existing PLC
                architecture, particularly when the original PLC application
                is difficult to modify or the machine software is protected.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* MAPPING */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Drive Data Mapping
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Control & Status Data Mapping
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-400">
              When replacing an industrial drive, the communication interface
              may require mapping between the existing PLC data structure and
              the replacement device.
            </p>

          </div>


          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Existing PLC Data
              </h3>

              <ul className="mt-6 space-y-3 text-slate-400">

                <li>Control Word</li>
                <li>Status Word</li>
                <li>Speed Reference</li>
                <li>Actual Speed</li>
                <li>Fault Code</li>
                <li>Current</li>
                <li>Torque</li>

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
                Gateway-Based Industrial Communication
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                A communication gateway can be used when an existing PLC and
                a replacement drive use different communication protocols or
                incompatible data structures.
              </p>

              <p>
                The gateway can act as an intermediate communication layer
                between the existing machine control system and the new
                industrial device.
              </p>

              <p>
                Depending on the application, the integration may involve
                protocol conversion, register mapping, data scaling, status
                translation and command handling.
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
            Existing PLC → Gateway → Replacement Drive
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            In suitable applications, a gateway can provide a communication
            bridge between an existing machine control architecture and a
            replacement drive or motion device.
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
                Existing control logic and communication structure
              </p>

            </div>


            <div className="rounded-2xl border border-orange-500 bg-slate-900 p-6">

              <p className="text-sm uppercase tracking-[2px] text-orange-400">
                Integration Layer
              </p>

              <p className="mt-3 text-xl font-bold">
                Gateway / Mapping
              </p>

              <p className="mt-3 text-sm text-slate-500">
                Protocol conversion and data mapping where technically
                applicable
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

              <p className="text-sm uppercase tracking-[2px] text-orange-400">
                Replacement Device
              </p>

              <p className="mt-3 text-xl font-bold">
                New Drive
              </p>

              <p className="mt-3 text-sm text-slate-500">
                Replacement drive or motion controller
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
                Servo Fault Diagnosis
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Diagnosis of servo drive alarms, encoder problems, positioning
                errors and communication faults.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Motion Performance
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Investigation of vibration, positioning errors,
                synchronization problems and unstable machine movement.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Commissioning
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Servo and motion system commissioning, testing and production
                support after installation or modernization.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="bg-orange-500 py-20">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="text-4xl font-bold sm:text-5xl">
            Need to Replace or Modernize a Motion System?
          </h2>

          <p className="mt-6 text-xl text-orange-100">
            Tell us about your servo, drive, PLC or communication problem and
            we can evaluate the existing machine architecture.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-bold text-orange-500 transition hover:bg-slate-100"
          >
            Discuss Your Motion Project
          </Link>

        </div>

      </section>

    </main>
  );
}