import Link from "next/link";

export const metadata = {
  title: "Industrial Machine Commissioning Services",
  description:
    "Industrial machine commissioning services including PLC, HMI, drive, servo, sensor, electrical, communication, safety and production testing for new and modernized machinery by AENA Technologies.",
};

export default function CommissioningPage() {
  const commissioningSteps = [
    "Electrical system inspection",
    "PLC commissioning",
    "HMI commissioning",
    "Drive commissioning",
    "Servo commissioning",
    "Sensor testing",
    "I/O testing",
    "Motor rotation checks",
    "Safety circuit testing",
    "Industrial communication testing",
    "PLC-HMI-drive integration",
    "Machine sequence testing",
    "Parameter optimization",
    "Production trial",
    "Fault diagnosis",
    "Final commissioning and handover",
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}

      <section className="border-b border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            Machine Commissioning
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-extrabold leading-tight sm:text-6xl">
            Industrial Machine
            <span className="block text-orange-500">
              Commissioning Services
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-8 text-slate-400">
            Machine startup, testing, automation commissioning, electrical
            verification, drive setup, sensor testing and production
            commissioning for new and modernized industrial machinery.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-500">
            AENA Technologies helps bring industrial machines from installation
            and testing to stable production operation.
          </p>

        </div>
      </section>


      {/* OVERVIEW */}

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-8 lg:grid-cols-2">

          <div>

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Engineering Commissioning
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              From Electrical Startup to Production
            </h2>

          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-400">

            <p>
              Commissioning is the stage where the electrical, automation,
              motion, safety and mechanical systems of a machine are tested
              together as one operating system.
            </p>

            <p>
              A machine may have correctly installed components and still
              require detailed commissioning before it can operate reliably in
              production.
            </p>

            <p>
              AENA Technologies approaches commissioning as an integrated
              engineering process rather than simply starting the machine.
            </p>

          </div>

        </div>

      </section>


      {/* COMMISSIONING PROCESS */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Commissioning Process
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Machine Commissioning Workflow
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              A structured commissioning process helps identify problems
              before the machine enters continuous production.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {commissioningSteps.map((step, index) => (

              <div
                key={step}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ELECTRICAL */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Electrical Commissioning
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Electrical System Testing
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Electrical commissioning starts with verifying the machine's
                electrical installation and control architecture.
              </p>

              <p>
                Power circuits, control circuits, motor connections, sensors,
                actuators, safety circuits and control-panel wiring can be
                checked before the automation sequence is started.
              </p>

              <p>
                Correct electrical verification reduces the risk of component
                damage and unexpected machine behavior during initial startup.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* PLC HMI */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <p className="text-sm font-semibold uppercase tracking-[2px] text-orange-400">
                PLC
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                PLC Commissioning
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                PLC I/O verification, machine sequence testing, actuator
                control, sensor feedback and automation logic testing during
                machine startup.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <p className="text-sm font-semibold uppercase tracking-[2px] text-orange-400">
                HMI
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                HMI Commissioning
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                HMI screens, machine commands, alarms, status information,
                parameter settings and operator controls are tested together
                with the PLC system.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* DRIVE SERVO */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Drive Commissioning
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                AC drive parameterization, motor setup, speed control,
                acceleration, deceleration and machine sequence integration.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Servo Commissioning
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Servo motor and drive setup, encoder feedback, positioning,
                synchronization and motion performance testing.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Motion Optimization
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Optimization of motion parameters to improve machine
                performance, synchronization and repeatability.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* SENSORS IO */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                I/O & Sensors
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Sensor, Actuator & I/O Testing
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Sensors and actuators form the interface between the physical
                machine and the automation system.
              </p>

              <p>
                During commissioning, digital and analog inputs, outputs,
                encoders, proximity sensors, photoelectric sensors, valves and
                other field devices can be individually tested.
              </p>

              <p>
                Incorrect sensor wiring, scaling or signal interpretation can
                create machine sequence problems, making systematic I/O
                testing an important part of commissioning.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* COMMUNICATION */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Industrial Communication
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                PLC, HMI, Drive & Device Communication Testing
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Modern industrial machines may contain multiple devices
                communicating over industrial networks.
              </p>

              <p>
                During commissioning, communication between PLCs, HMIs,
                drives, remote I/O, servo systems and other intelligent
                devices can be verified.
              </p>

              <p>
                Communication problems can include incorrect addresses,
                configuration errors, data mapping problems, network
                configuration and incompatible communication settings.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* SAFETY */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Safety Circuit Testing
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Verification of emergency stops, safety switches, guards,
                safety sensors and machine stop conditions as part of the
                commissioning process.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Interlock Testing
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Testing of machine interlocks and operating conditions that
                prevent unsafe or incorrect machine sequences.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Fault Response
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Verification of machine behavior when sensors, drives,
                actuators or other monitored conditions generate faults.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* RETROFIT COMMISSIONING */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Retrofit Commissioning
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Commissioning After Machine Modernization
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Retrofit projects require commissioning because replacing
                obsolete electrical and automation components can change the
                way the machine interacts with its mechanical systems.
              </p>

              <p>
                PLCs, HMIs, drives, servo systems, sensors, communication
                networks and electrical panels may all need to be tested
                together after modernization.
              </p>

              <p>
                AENA Technologies can support the machine from the first
                startup through production testing and final optimization.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* PRODUCTION TRIAL */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Production Trial
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            From Startup to Stable Production
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Commissioning does not end when the machine starts moving.
            Production conditions must also be evaluated.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Machine speed, synchronization, sensor behavior, drive
            performance, alarms, operator controls and production sequences
            can be evaluated under actual operating conditions.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Parameters can then be optimized to achieve stable and repeatable
            machine operation.
          </p>

        </div>

      </section>


      {/* CTA */}

      <section className="bg-orange-500 py-20">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="text-4xl font-bold sm:text-5xl">
            Need Industrial Machine Commissioning?
          </h2>

          <p className="mt-6 text-xl text-orange-100">
            From electrical startup to PLC, drive, motion and production
            testing, AENA Technologies can support your machine commissioning
            process.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-bold text-orange-500 transition hover:bg-slate-100"
          >
            Discuss Your Commissioning Project
          </Link>

        </div>

      </section>

    </main>
  );
}