import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial Machine Retrofit & Modernization | AENA Technologies",

  description:
    "Industrial machine retrofit and modernization services including PLC replacement, HMI upgrades, AC drives, servo systems, sensor integration, electrical panels, communication mapping and machine commissioning.",

  keywords: [
    "industrial machine retrofit",
    "machine retrofit",
    "industrial machine modernization",
    "machine modernization services",
    "machine retrofit Turkey",
    "industrial machine retrofit Turkey",
    "electrical machine retrofit",
    "PLC replacement",
    "obsolete PLC replacement",
    "HMI modernization",
    "drive replacement",
    "servo drive replacement",
    "sensor replacement",
    "industrial sensor integration",
    "industrial communication retrofit",
    "communication protocol mapping",
    "industrial gateway integration",
    "PLC retrofit",
    "electrical panel modernization",
    "production line modernization",
    "obsolete machine modernization",
    "machine commissioning",
  ],

  alternates: {
    canonical:
      "https://www.aenatechnologies.com/services/machine-retrofit",
  },

  openGraph: {
    title:
      "Industrial Machine Retrofit & Modernization | AENA Technologies",

    description:
      "Modernize existing industrial machinery with PLC, HMI, drive, servo, sensor, electrical and communication system upgrades while preserving usable machine infrastructure.",

    url:
      "https://www.aenatechnologies.com/services/machine-retrofit",

    siteName: "AENA Technologies",

    type: "website",
  },
};

export default function MachineRetrofitPage() {
  const retrofitScope = [
    "Machine inspection and technical evaluation",
    "Electrical system modernization",
    "Electrical cabinet revision",
    "PLC and HMI modernization",
    "Drive and servo system replacement",
    "Sensor replacement and integration",
    "Industrial communication modernization",
    "Communication protocol mapping",
    "Gateway-based device integration",
    "Hydraulic system improvements",
    "Pneumatic system improvements",
    "Mechanical system integration",
    "Software development and modification",
    "Component replacement and equivalent selection",
    "Machine commissioning and production support",
  ];

  const communicationServices = [
    {
      title: "Protocol Mapping",
      text:
        "Adapt control words, status words, parameters and process data between different device structures.",
    },
    {
      title: "Gateway Integration",
      text:
        "Use an industrial gateway as an intermediate communication layer between legacy and modern equipment.",
    },
    {
      title: "Existing PLC Compatibility",
      text:
        "Design the integration around the existing control architecture when modification of the original PLC software is limited.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Inspection",
      text:
        "Evaluate the existing machine, electrical system, automation architecture and obsolete components.",
    },
    {
      number: "02",
      title: "Engineering",
      text:
        "Define replacement components, electrical modifications, communication strategy and automation requirements.",
    },
    {
      number: "03",
      title: "Integration",
      text:
        "Install and configure new PLC, HMI, drives, sensors, communication devices and electrical equipment.",
    },
    {
      number: "04",
      title: "Commissioning",
      text:
        "Test the machine, optimize parameters and support production startup.",
    },
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}

      <section className="border-b border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            Industrial Machine Retrofit
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-extrabold leading-tight sm:text-6xl">
            Industrial Machine Retrofit &
            <span className="block text-orange-500">
              Modernization
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-8 text-slate-400">
            AENA Technologies provides complete industrial machine retrofit
            and modernization services, from machine inspection and electrical
            systems to automation, drives, sensors, communication systems,
            software and commissioning.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-500">
            We modernize existing industrial machinery by replacing obsolete
            or unreliable components while preserving usable mechanical and
            electrical infrastructure whenever practical.
          </p>

        </div>
      </section>


      {/* MODERNIZATION */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Retrofit Engineering
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Modernize Your Existing Machine
          </h2>

          <div className="mt-8 max-w-4xl space-y-6 text-lg leading-8 text-slate-400">

            <p>
              Existing industrial machinery can often be modernized without
              replacing the complete machine. AENA Technologies evaluates the
              existing equipment and develops a retrofit strategy according to
              the production requirements, machine architecture and available
              components.
            </p>

            <p>
              The retrofit process can include electrical, automation,
              hydraulic, pneumatic, mechanical, motion control, communication
              and software systems.
            </p>

            <p>
              Obsolete components can be replaced with current or equivalent
              technology while maintaining compatibility with the existing
              machine architecture where possible.
            </p>

            <p>
              The objective is not simply to replace old components. The
              replacement equipment must work correctly with the machine&apos;s
              existing electrical connections, control signals, communication
              architecture and mechanical installation.
            </p>

          </div>

        </div>
      </section>


      {/* RETROFIT SCOPE */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Retrofit Scope
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            From Inspection to Commissioning
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {retrofitScope.map((item) => (
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


      {/* COMPONENT COMPATIBILITY */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Component Compatibility
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Obsolete or Unavailable Components
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                When the original drive, sensor, PLC module or other
                automation component is no longer available, AENA Technologies
                can evaluate suitable replacement or equivalent solutions.
              </p>

              <p>
                Compatibility is evaluated according to electrical
                characteristics, communication protocols, control architecture,
                mechanical dimensions, signal types and machine requirements.
              </p>

              <p>
                A replacement component that looks technically similar is not
                necessarily a suitable replacement. Voltage, current, output
                type, connector structure, communication protocol, addressing
                and mechanical mounting can all affect compatibility.
              </p>

              <p>
                Where required, the replacement system can be configured and
                commissioned to operate within the existing machine control
                architecture.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* SENSOR REPLACEMENT */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Sensor Retrofit
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Equivalent Sensor Selection & Integration
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Industrial sensors can become difficult to source when a
                machine has been operating for many years. A suitable
                replacement must match the machine requirements rather than
                only the physical appearance of the original sensor.
              </p>

              <p>
                Replacement sensors can be evaluated according to supply
                voltage, PNP or NPN output, analog or digital signal,
                switching characteristics, connector type, sensing distance,
                mounting dimensions and environmental conditions.
              </p>

              <p>
                For communication-based sensors, additional compatibility
                requirements can include the communication protocol, device
                addressing, data structure and PLC communication architecture.
              </p>

              <p>
                This allows equivalent or modern sensor technology to be
                integrated into an existing machine without unnecessarily
                redesigning the complete control system.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* DRIVE AND COMMUNICATION RETROFIT */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Drive & Communication Retrofit
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold">
            Integrating New Drives into Existing Communication Systems
          </h2>

          <div className="mt-10 max-w-4xl space-y-6 text-lg leading-8 text-slate-400">

            <p>
              Replacing an obsolete drive can become more complex when the
              existing PLC program and machine communication architecture
              cannot easily be modified.
            </p>

            <p>
              In these situations, the replacement drive may use a different
              communication protocol, register structure, parameter mapping or
              data format than the original device.
            </p>

            <p>
              AENA Technologies can evaluate the existing communication
              architecture and develop a suitable mapping strategy so that the
              new drive can exchange the required control commands, status
              information and process values with the existing system.
            </p>

            <p>
              Where direct communication is not practical, an industrial
              gateway can be used as an intermediate communication layer
              between the existing PLC network and the new drive or device.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {communicationServices.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-1 hover:border-orange-500"
              >

                <h3 className="text-xl font-bold text-orange-400">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ENGINEERING APPROACH */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">
        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Engineering Approach
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            One Retrofit Process, Multiple Engineering Disciplines
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            A machine retrofit is not limited to replacing electrical
            components. Depending on the machine, the project can involve
            electrical engineering, industrial automation, PLC programming,
            drives, sensors, communication systems, hydraulics, pneumatics,
            mechanical integration, software development and commissioning.
          </p>

        </div>
      </section>


      {/* PROCESS */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Retrofit Process
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              A Structured Machine Modernization Process
            </h2>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {processSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-1 hover:border-orange-500"
              >

                <span className="text-3xl font-extrabold text-orange-500">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {step.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* WHY RETROFIT */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">
        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Why Retrofit?
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Extend the Operating Life of Existing Machinery
          </h2>

          <div className="mt-10 grid gap-6 text-left md:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">

              <h3 className="text-xl font-bold">
                Reduce Replacement Costs
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Modernizing the control system can be an alternative to
                replacing an otherwise mechanically usable machine.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">

              <h3 className="text-xl font-bold">
                Improve Maintainability
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Replacing obsolete components can make future maintenance,
                troubleshooting and spare-parts sourcing easier.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">

              <h3 className="text-xl font-bold">
                Modernize Machine Control
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                New automation, HMI, drive and communication technologies can
                improve machine functionality and monitoring.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* COMMISSIONING */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Electrical & Automation
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Electrical cabinet revision, PLC, HMI, drives, sensors and
                machine control integration.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Communication Testing
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Verification of communication between PLCs, drives, HMIs,
                gateways and other industrial devices.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Production Commissioning
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Machine testing, parameter optimization, troubleshooting and
                production startup support.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* CTA */}

      <section className="bg-orange-500 py-20">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="text-4xl font-bold sm:text-5xl">
            Need to Retrofit an Existing Machine?
          </h2>

          <p className="mt-6 text-xl text-orange-100">
            Send us the machine model, current control system or your
            modernization requirement.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-bold text-orange-500 transition hover:bg-slate-100"
          >
            Request a Retrofit Evaluation
          </Link>

        </div>

      </section>

    </main>
  );
}