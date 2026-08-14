import Link from "next/link";

export const metadata = {
  title: "Industrial Automation Services | PLC, HMI, Drives & Motion Control",
  description:
    "Industrial automation engineering services including PLC programming, HMI, drives, servo motion control, sensors, industrial communication, legacy system integration, gateway solutions and machine commissioning by AENA Technologies.",
  keywords: [
    "industrial automation",
    "industrial automation services",
    "industrial automation engineering",
    "industrial automation Turkey",
    "PLC programming",
    "PLC automation",
    "HMI programming",
    "machine automation",
    "industrial control systems",
    "industrial communication",
    "industrial communication systems",
    "drive integration",
    "servo motion control",
    "machine control systems",
    "production line automation",
    "legacy automation systems",
    "legacy drive replacement",
    "drive communication mapping",
    "industrial gateway",
    "PLC gateway integration",
    "automation retrofit",
    "machine commissioning",
    "industrial troubleshooting",
  ],
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
    "Legacy automation integration",
    "Drive communication mapping",
    "Gateway-based communication",
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
            From PLC and HMI systems to drives, servo systems, sensors,
            industrial communication, gateway integration and commissioning,
            we provide practical automation engineering solutions for
            industrial machinery.
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
              troubleshooting, communication upgrades or performance
              improvements.
            </p>

            <p>
              The automation system can be designed around the machine&apos;s
              process requirements, production sequence, safety requirements,
              communication architecture and available electrical
              infrastructure.
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
                processing, drive control, alarms, interlocks, production
                logic and operator interfaces.
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
                Existing drives can be evaluated for parameter optimization,
                troubleshooting or replacement with suitable equivalent
                equipment.
              </p>

              <p>
                When an obsolete drive is no longer available, the replacement
                process may require electrical compatibility checks,
                parameter conversion, communication analysis and adaptation
                to the existing machine control system.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* LEGACY SYSTEMS */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Legacy Automation
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Integrating New Components with Existing Machine Systems
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Older industrial machines can contain drives, sensors,
                controllers and communication systems that are no longer
                supported or available on the market.
              </p>

              <p>
                Replacing one component is not always a simple
                plug-and-play operation. The new component may use different
                electrical connections, communication protocols, parameter
                structures or data formats.
              </p>

              <p>
                AENA Technologies evaluates the electrical and communication
                requirements of the replacement component before integrating
                it into the existing automation architecture.
              </p>

              <p>
                Where direct compatibility is not possible, an interface,
                mapping layer or gateway-based solution can be considered to
                translate the required signals or communication data between
                the new device and the existing control system.
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
                Communication Mapping
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Mapping New Drives & Devices to Existing PLC Systems
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Some machine retrofits cannot be completed by simply changing
                the physical device. The PLC may still expect the data
                structure, command words, status words or register layout of
                the original component.
              </p>

              <p>
                In such cases, the new device can be analyzed and the required
                communication data can be mapped to the structure expected by
                the existing control system.
              </p>

              <p>
                Depending on the application, this can involve register
                mapping, command and status-word conversion, data scaling,
                signal translation or protocol adaptation.
              </p>

              <p>
                The objective is to allow the existing machine control
                architecture to communicate with the replacement device
                without unnecessarily redesigning the complete PLC system.
              </p>

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
                Gateway-Based Industrial Communication
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                A gateway can be used when two industrial devices cannot
                communicate directly because they use different communication
                protocols or data structures.
              </p>

              <p>
                A gateway-based architecture can provide an intermediate
                communication layer between the PLC, the replacement drive
                and other machine devices.
              </p>

              <p>
                Depending on the application, the gateway can read data from
                one communication system, process or map the required values
                and make them available to another system.
              </p>

              <p>
                This approach can be especially useful when the existing PLC
                software is difficult to modify or when the original device
                has been discontinued.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* INDUSTRIAL COMMUNICATION */}

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
                Modern industrial machines often rely on communication
                networks between PLCs, drives, remote I/O, HMIs, sensors and
                other automation devices.
              </p>

              <p>
                Communication systems can be integrated according to the
                machine architecture and required data exchange.
              </p>

              <p>
                Existing communication networks can also be analyzed during
                retrofit and troubleshooting projects to identify protocol,
                addressing, mapping and configuration problems.
              </p>

              <p>
                The engineering approach may include communication testing,
                device configuration, data mapping and gateway integration
                where required.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* SENSORS */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Sensors & Field Devices
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Sensor Integration & Equivalent Component Replacement
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Industrial automation systems often depend on sensors for
                position, speed, temperature, pressure, level, proximity and
                process measurement.
              </p>

              <p>
                When an original sensor becomes unavailable, a suitable
                equivalent product may need to be selected according to its
                electrical, mechanical and signal characteristics.
              </p>

              <p>
                Compatibility can include supply voltage, output type,
                PNP/NPN configuration, analog signal range, connector,
                mounting dimensions, sensing distance and communication
                interface.
              </p>

              <p>
                For communication-based sensors and smart devices, the
                communication protocol, addressing and data structure must
                also be considered before integration.
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
                analysis, communication diagnostics, signal tracing and
                machine sequence investigation.
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