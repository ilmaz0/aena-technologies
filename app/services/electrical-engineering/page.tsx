import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.aenatechnologies.com";
const PAGE_URL = `${SITE_URL}/services/electrical-engineering`;

export const metadata: Metadata = {
  title: "Industrial Electrical Engineering and Panel Systems",
  description:
    "Industrial electrical engineering for machine control panels, electrical cabinets, MCC systems, power distribution, machine wiring, electrical retrofit and component replacement by AENA Technologies.",

  keywords: [
    "industrial electrical engineering",
    "industrial electrical panel",
    "electrical panel design",
    "industrial control cabinet",
    "machine control panel",
    "machine control cabinet",
    "power distribution panel",
    "industrial power panel",
    "MCC panel",
    "motor control center",
    "machine wiring",
    "electrical cabinet retrofit",
    "electrical retrofit",
    "electrical modernization",
    "electrical component replacement",
    "obsolete component replacement",
    "drive replacement",
    "sensor replacement",
    "PLC I/O compatibility",
    "industrial electrical troubleshooting",
    "industrial electrical commissioning",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Industrial Electrical Engineering and Panel Systems",
    description:
      "Industrial electrical engineering for machine control panels, electrical cabinets, MCC systems, power distribution, machine wiring and electrical retrofit projects.",
    url: PAGE_URL,
    siteName: "AENA Technologies",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Industrial Electrical Engineering and Panel Systems",
    description:
      "Industrial electrical engineering, control panels, MCC systems, power distribution and electrical retrofit services by AENA Technologies.",
  },
};

export default function ElectricalEngineeringPage() {
  const capabilities = [
    "Industrial electrical engineering",
    "Machine electrical cabinet design",
    "Electrical cabinet retrofit",
    "Machine control panels",
    "Industrial control cabinets",
    "Power distribution panels",
    "MCC and motor control panels",
    "Industrial machine wiring",
    "Electrical rewiring",
    "Motor protection and control",
    "Drive power circuits",
    "Electrical troubleshooting",
    "Electrical component replacement",
    "Obsolete component replacement",
    "PLC I/O compatibility",
    "Machine commissioning",
  ];

  const panelSystems = [
    {
      form: "Form 1",
      title: "Basic Panel Assembly",
      text:
        "Panel construction where no internal separation between busbars, functional units and other components is required for the application.",
    },
    {
      form: "Form 2",
      title: "Busbar Separation",
      text:
        "Panel arrangements providing separation between busbars and functional units according to the selected Form 2 configuration.",
    },
    {
      form: "Form 3",
      title: "Functional Separation",
      text:
        "Higher internal separation between functional units and associated conductors for applications with increased maintenance requirements.",
    },
    {
      form: "Form 4",
      title: "Advanced Separation",
      text:
        "Panel arrangements providing a higher level of separation between functional units, busbars and cable connection areas.",
    },
  ];

  const compatibilityServices = [
    "Obsolete component replacement",
    "Equivalent component selection",
    "Electrical rating verification",
    "Control voltage compatibility",
    "Terminal compatibility",
    "Physical compatibility",
    "Sensor replacement evaluation",
    "Drive replacement evaluation",
    "PLC I/O compatibility",
    "Industrial communication compatibility",
    "PLC data mapping",
    "Gateway integration",
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}

      <section className="border-b border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            Industrial Electrical Engineering
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-extrabold leading-tight sm:text-6xl">
            Industrial Electrical Engineering
            <span className="block text-orange-500">
              Panel Design and Retrofit
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-8 text-slate-400">
            Industrial electrical engineering for machine control panels,
            electrical cabinets, power distribution, MCC systems, machine
            wiring and electrical modernization.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-500">
            AENA Technologies designs, modifies and modernizes electrical
            systems for industrial machinery and production lines, including
            control cabinets, motor control systems, protection circuits,
            field wiring and automation integration.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/contact"
              className="rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Discuss Your Electrical Project
            </Link>

            <Link
              href="/services/machine-retrofit"
              className="rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 text-sm font-bold text-slate-200 transition hover:border-orange-500 hover:text-orange-400"
            >
              Explore Machine Retrofit
            </Link>

          </div>

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
              Industrial machines depend on correctly designed electrical
              distribution, motor protection, control circuits, automation
              hardware and field connections.
            </p>

            <p>
              Electrical engineering must consider the relationship between
              power circuits and machine control systems. PLCs, HMIs, drives,
              sensors, motors, contactors and protection devices must operate
              together as one coordinated system.
            </p>

            <p>
              AENA Technologies supports electrical projects ranging from
              individual machine control cabinets to complete electrical
              modernization and retrofit projects.
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
              Electrical engineering services for industrial machinery,
              production equipment, automation systems and electrical
              modernization projects.
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


      {/* CONTROL CABINETS */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Machine Control Cabinets
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Industrial Electrical Control Panels
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Machine control panels combine PLC systems, HMIs, drives,
                contactors, relays, power supplies, protection devices and
                terminal systems into a coordinated control architecture.
              </p>

              <p>
                AENA Technologies can design new machine electrical cabinets
                or modify existing control panels during automation and
                machine retrofit projects.
              </p>

              <p>
                Existing electrical cabinets can be inspected to identify
                obsolete components, poor wiring practices, damaged
                connections and equipment that may affect machine
                reliability.
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
                Industrial Power Distribution Panels
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Industrial power distribution systems supply electrical power
                to motors, production machines, heating systems, auxiliary
                equipment and other plant loads.
              </p>

              <p>
                Electrical panel design can include incoming power,
                protection devices, motor feeders, disconnects, distribution
                circuits and control power systems according to project
                requirements.
              </p>

              <p>
                Existing power panels can also be modernized by replacing
                aging breakers, contactors, terminals, protection devices and
                other obsolete components.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* PANEL FORMS */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Panel Form and Internal Separation
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Form 1, Form 2, Form 3 and Form 4 Panel Systems
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-400">
              Industrial low-voltage panels can use different internal
              separation arrangements depending on equipment configuration,
              maintenance requirements and project specifications.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {panelSystems.map((panel) => (

              <div
                key={panel.form}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500"
              >

                <p className="text-sm font-bold uppercase tracking-[3px] text-orange-400">
                  {panel.form}
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  {panel.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {panel.text}
                </p>

              </div>

            ))}

          </div>


          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-slate-500">
            Panel form and internal separation should be selected according
            to the applicable standards, project specifications, equipment
            arrangement and electrical design requirements.
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
                MCC and Motor Control Panels
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Motor Control Centers and motor control panels provide
                centralized control and protection for industrial motors and
                production equipment.
              </p>

              <p>
                Depending on the application, motor control systems may
                include circuit breakers, disconnects, contactors, overload
                protection, soft starters, variable frequency drives and
                associated control circuits.
              </p>

              <p>
                AENA Technologies supports motor control modernization as
                part of industrial electrical and machine retrofit projects.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* COMPONENT REPLACEMENT */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Component Compatibility
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Electrical Component Replacement
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Industrial machines frequently contain electrical components
                that are obsolete, discontinued or difficult to source.
                Replacing these components requires more than finding a
                product with a similar name or rating.
              </p>

              <p>
                Replacement components should be evaluated according to
                voltage, current, control signals, terminals, protection
                requirements, physical dimensions and the electrical
                architecture of the machine.
              </p>

              <p>
                Sensors, drives and intelligent devices may also require
                compatibility with the existing PLC, I/O system or industrial
                communication network.
              </p>

            </div>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {compatibilityServices.map((item) => (

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


      {/* ELECTRICAL RETROFIT */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Electrical Retrofit
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Electrical Cabinet Retrofit and Modernization
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Aging electrical cabinets can contain obsolete drives,
                contactors, relays, power supplies, terminals, breakers and
                control components that make maintenance increasingly
                difficult.
              </p>

              <p>
                An electrical retrofit begins with evaluating the existing
                cabinet, machine wiring and control architecture before
                determining which components should be replaced or retained.
              </p>

              <p>
                The objective is to improve electrical reliability,
                maintainability and compatibility while preserving usable
                machine infrastructure where practical.
              </p>

              <Link
                href="/services/machine-retrofit"
                className="inline-flex font-semibold text-orange-400 hover:text-orange-300"
              >
                Explore machine retrofit services →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* WIRING */}

      <section className="py-24">

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

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Electrical and Automation Integration
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Connecting Electrical Systems with Machine Automation
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Electrical systems are directly connected to machine
                automation. PLCs, HMIs, drives, servo systems, sensors and
                power circuits must operate together as a complete machine
                control system.
              </p>

              <p>
                When a component is replaced, its electrical signals,
                terminal configuration, I/O requirements and communication
                interface may differ from the original equipment.
              </p>

              <p>
                AENA Technologies evaluates these interfaces and develops
                suitable integration methods for existing machine control
                architectures.
              </p>

            </div>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Electrical signal conversion",
              "I/O signal adaptation",
              "PLC data mapping",
              "Drive communication mapping",
              "Sensor signal compatibility",
              "Industrial communication",
              "Gateway integration",
              "Existing PLC compatibility",
            ].map((item) => (

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


      {/* COMMISSIONING */}

      <section className="py-24">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Electrical Commissioning
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Electrical Testing and Machine Commissioning
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Electrical systems must be tested together with the actual
            machine control sequence, motors, drives, sensors, PLCs and
            safety-related equipment before production operation.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            AENA Technologies supports electrical testing, commissioning,
            troubleshooting and startup activities for new and modernized
            industrial machinery.
          </p>

        </div>

      </section>


      {/* RELATED SERVICES */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-20">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Related Engineering Services
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Integrated Industrial Automation Services
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Electrical engineering often forms part of a wider machine
            modernization project involving PLCs, HMI systems, drives,
            motion control and commissioning.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/services/plc-programming"
              className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-slate-200 transition hover:border-orange-500 hover:text-orange-400"
            >
              PLC Programming
            </Link>

            <Link
              href="/services/scada-hmi"
              className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-slate-200 transition hover:border-orange-500 hover:text-orange-400"
            >
              SCADA and HMI
            </Link>

            <Link
              href="/services/drive-systems"
              className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-slate-200 transition hover:border-orange-500 hover:text-orange-400"
            >
              Drive Systems
            </Link>

            <Link
              href="/services/machine-retrofit"
              className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-slate-200 transition hover:border-orange-500 hover:text-orange-400"
            >
              Machine Retrofit
            </Link>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="bg-orange-500 py-20">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Need an Industrial Electrical Solution?
          </h2>

          <p className="mt-6 text-xl text-orange-100">
            Tell us about your machine, electrical cabinet, control panel or
            modernization requirement and we can evaluate the project.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-bold text-orange-500 transition hover:bg-slate-100"
          >
            Request an Engineering Evaluation
          </Link>

        </div>

      </section>

    </main>
  );
}