import Link from "next/link";

export const metadata = {
  title: "Industrial Electrical Engineering & Panel Systems",
  description:
    "Industrial electrical engineering, power distribution panels, Form 1 to Form 4 panel systems, MCC panels, machine control cabinets, electrical retrofit, rewiring and commissioning by AENA Technologies.",
};

export default function ElectricalEngineeringPage() {
  const capabilities = [
    "Industrial electrical engineering",
    "Machine electrical cabinet design",
    "Electrical cabinet retrofit",
    "Power distribution panels",
    "Form 1 panel systems",
    "Form 2 panel systems",
    "Form 3 panel systems",
    "Form 4 panel systems",
    "MCC and motor control panels",
    "Machine control panels",
    "Industrial machine wiring",
    "Electrical rewiring and modernization",
    "Motor protection and control",
    "Drive power circuits",
    "Electrical troubleshooting",
    "Machine commissioning",
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}

      <section className="border-b border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            Electrical Engineering
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-extrabold leading-tight sm:text-6xl">
            Industrial Electrical Engineering
            <span className="block text-orange-500">
              & Panel Systems
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-8 text-slate-400">
            Industrial electrical engineering, machine control panels,
            power distribution systems, MCC panels, electrical retrofit and
            machine wiring solutions.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-500">
            AENA Technologies provides electrical engineering solutions for
            industrial machinery, production lines and manufacturing
            facilities, from electrical cabinet modernization to complete
            power and control infrastructure.
          </p>

        </div>
      </section>


      {/* OVERVIEW */}

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-8 lg:grid-cols-2">

          <div>

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Industrial Electrical Systems
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Electrical Infrastructure for Industrial Machinery
            </h2>

          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-400">

            <p>
              Industrial machinery depends on reliable electrical
              distribution, motor control, protection, automation and
              control-panel infrastructure.
            </p>

            <p>
              AENA Technologies designs, modernizes and troubleshoots
              electrical systems for machines and production lines while
              considering the existing equipment, production requirements
              and future maintenance needs.
            </p>

            <p>
              Electrical engineering projects can range from individual
              machine cabinets to complete power distribution and motor
              control systems.
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
              Industrial Electrical Services
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Electrical engineering services for machine automation,
              production lines, power distribution and industrial control
              systems.
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


      {/* MACHINE CONTROL PANELS */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Machine Control Panels
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Industrial Machine Control Cabinets
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Machine control panels combine PLC systems, HMIs, drives,
                contactors, protection devices, power supplies, relays and
                field wiring into a coordinated electrical control system.
              </p>

              <p>
                AENA Technologies can design, modify and modernize machine
                electrical cabinets according to the required control
                architecture.
              </p>

              <p>
                Existing cabinets can also be inspected and revised during
                machine retrofit projects without unnecessarily replacing
                the complete machine.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* POWER DISTRIBUTION */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Power Distribution
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Power Distribution & Industrial Power Panels
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Industrial facilities require reliable power distribution
                systems for machines, motors, heating systems, auxiliary
                equipment and production lines.
              </p>

              <p>
                Power panels can be designed around the required electrical
                distribution architecture, protection devices, motor feeders
                and plant requirements.
              </p>

              <p>
                Electrical modernization can also include replacement of
                obsolete protection devices, contactors, breakers, terminals
                and other aging components.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* FORM PANELS */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Panel Form & Internal Separation
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Form 1, Form 2, Form 3 & Form 4 Panel Systems
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-400">
              Industrial low-voltage panel systems can be configured with
              different internal separation arrangements depending on the
              application, equipment layout, maintenance requirements and
              electrical distribution architecture.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">

              <p className="text-sm font-bold uppercase tracking-[3px] text-orange-400">
                Form 1
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Basic Assembly
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Suitable for applications where internal separation between
                busbars and functional units is not required.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">

              <p className="text-sm font-bold uppercase tracking-[3px] text-orange-400">
                Form 2
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Busbar Separation
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Provides separation between busbars and functional units
                according to the selected Form 2 arrangement.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">

              <p className="text-sm font-bold uppercase tracking-[3px] text-orange-400">
                Form 3
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Functional Separation
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Provides additional separation between functional units and
                related conductors for industrial applications.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">

              <p className="text-sm font-bold uppercase tracking-[3px] text-orange-400">
                Form 4
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Higher Separation
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Used where a higher level of separation between functional
                units, busbars and cable connections is required.
              </p>

            </div>

          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-slate-500">
            Panel form and internal separation requirements should be
            selected according to the applicable project specifications,
            electrical standards and system design requirements.
          </p>

        </div>

      </section>


      {/* MCC */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Motor Control
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                MCC & Motor Control Panels
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Motor Control Centers and motor control panels provide
                centralized control and protection for industrial motors and
                production equipment.
              </p>

              <p>
                Systems may include motor protection, contactors, overload
                protection, variable frequency drives, soft starters,
                disconnects and control components.
              </p>

              <p>
                AENA Technologies can support motor control modernization as
                part of machine retrofit and industrial electrical projects.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* RETROFIT */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Electrical Retrofit
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Electrical Cabinet Retrofit & Modernization
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Aging machine cabinets often contain obsolete contactors,
                relays, drives, power supplies, terminals and protection
                components.
              </p>

              <p>
                During an electrical retrofit, the existing cabinet and
                machine architecture can be evaluated before determining
                which components should be replaced or retained.
              </p>

              <p>
                The goal is to improve reliability and maintainability while
                preserving the usable mechanical and electrical infrastructure
                of the machine.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* WIRING */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Machine Wiring
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Industrial machine wiring, field connections, sensor wiring,
                actuator connections and control-circuit installation.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Electrical Rewiring
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Replacement and modernization of aging machine wiring,
                terminals, control circuits and electrical connections.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Electrical Troubleshooting
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Diagnosis of electrical faults affecting motors, drives,
                sensors, control circuits and industrial machinery.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* INTEGRATION */}

      <section className="py-24">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Electrical & Automation Integration
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Electrical Engineering Connected to Machine Automation
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Electrical systems do not operate independently from machine
            automation. PLCs, HMIs, drives, servo systems, sensors and power
            circuits must operate together as a complete control system.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            AENA Technologies combines electrical engineering with industrial
            automation to provide integrated solutions for machine retrofit,
            modernization and commissioning projects.
          </p>

        </div>

      </section>


      {/* CTA */}

      <section className="bg-orange-500 py-20">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="text-4xl font-bold sm:text-5xl">
            Need an Industrial Electrical Solution?
          </h2>

          <p className="mt-6 text-xl text-orange-100">
            Tell us about your machine, electrical panel or power
            distribution requirement and we can evaluate the project.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-bold text-orange-500 transition hover:bg-slate-100"
          >
            Discuss Your Electrical Project
          </Link>

        </div>

      </section>

    </main>
  );
}