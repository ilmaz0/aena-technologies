import Link from "next/link";

export const metadata = {
  title: "Industrial Troubleshooting & Fault Diagnosis",
  description:
    "Industrial troubleshooting for PLC, HMI, AC drives, sensors, electrical systems and industrial communication faults. AENA Technologies provides fault diagnosis, component replacement, compatibility analysis, communication mapping and commissioning support.",
};

export default function IndustrialTroubleshootingPage() {
  const troubleshootingAreas = [
    "PLC troubleshooting",
    "HMI troubleshooting",
    "AC drive fault diagnosis",
    "VFD troubleshooting",
    "Servo drive troubleshooting",
    "Industrial sensor troubleshooting",
    "Encoder troubleshooting",
    "Electrical fault diagnosis",
    "PLC I/O troubleshooting",
    "Industrial communication faults",
    "Profinet communication troubleshooting",
    "Modbus communication troubleshooting",
    "IO-Link device troubleshooting",
    "Machine sequence faults",
    "Intermittent machine faults",
    "Production line downtime diagnosis",
  ];

  const diagnosticSteps = [
    {
      number: "01",
      title: "Identify the Fault",
      text: "Analyze alarms, machine behavior, operator observations and production symptoms.",
    },
    {
      number: "02",
      title: "Test the System",
      text: "Check electrical signals, PLC inputs and outputs, sensors, drives, motors and communication.",
    },
    {
      number: "03",
      title: "Determine the Cause",
      text: "Separate the actual root cause from secondary symptoms and related component failures.",
    },
    {
      number: "04",
      title: "Restore Operation",
      text: "Repair, replace, configure, integrate and test the affected system before returning the machine to production.",
    },
  ];

  const compatibilityAreas = [
    {
      title: "Electrical Compatibility",
      text: "Supply voltage, current, signal levels, output type, wiring structure and electrical connection requirements.",
    },
    {
      title: "Mechanical Compatibility",
      text: "Dimensions, mounting arrangement, shaft configuration, connector position, sensing distance and installation requirements.",
    },
    {
      title: "PLC / I/O Compatibility",
      text: "Digital or analog inputs, PNP/NPN signals, NO/NC logic, scaling, feedback signals and PLC input architecture.",
    },
    {
      title: "Communication Compatibility",
      text: "Profinet, Modbus, IO-Link, Ethernet-based communication and other industrial network requirements.",
    },
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}

      <section className="border-b border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            Industrial Troubleshooting
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-extrabold leading-tight sm:text-6xl">
            Industrial Machine
            <span className="block text-orange-500">
              Troubleshooting & Fault Diagnosis
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-8 text-slate-400">
            Electrical, automation, PLC, HMI, drive, sensor and industrial
            communication troubleshooting for machinery and production lines.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-500">
            AENA Technologies investigates machine faults systematically to
            identify the actual cause of production problems instead of simply
            replacing components.
          </p>

        </div>
      </section>


      {/* INTRODUCTION */}

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-8 lg:grid-cols-2">

          <div>

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Fault Diagnosis
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Finding the Cause of the Machine Problem
            </h2>

          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-400">

            <p>
              Industrial machine faults are not always caused by the component
              that first appears to be defective.
            </p>

            <p>
              A drive fault may originate from a motor, encoder, mechanical
              load, communication problem, sensor or incorrect parameter.
              Likewise, a sensor fault may actually be caused by wiring,
              power supply, PLC input configuration or communication settings.
            </p>

            <p>
              AENA Technologies approaches troubleshooting by examining the
              electrical, mechanical and automation relationships within the
              machine.
            </p>

          </div>

        </div>

      </section>


      {/* TROUBLESHOOTING AREAS */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Troubleshooting Capabilities
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Industrial Fault Diagnosis Services
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Troubleshooting support across automation, electrical,
              motion-control and industrial communication systems.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {troubleshootingAreas.map((item) => (

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


      {/* DIAGNOSTIC PROCESS */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Diagnostic Process
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              A Systematic Approach to Machine Troubleshooting
            </h2>

          </div>


          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {diagnosticSteps.map((step) => (

              <div
                key={step.number}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
              >

                <div className="text-4xl font-bold text-orange-500">
                  {step.number}
                </div>

                <h3 className="mt-6 text-2xl font-bold">
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


      {/* DRIVE TROUBLESHOOTING */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Drive Troubleshooting
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                AC Drive & VFD Fault Diagnosis
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Drive faults can originate from electrical conditions, motor
                problems, mechanical loads, feedback devices, parameters or
                communication systems.
              </p>

              <p>
                Troubleshooting may include checking drive alarms, motor
                current, speed feedback, control signals, parameters and
                communication data.
              </p>

              <p>
                The objective is to determine whether the drive itself is
                defective or whether another part of the machine is causing
                the drive fault.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* DRIVE REPLACEMENT */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Drive Replacement
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Obsolete or Unavailable Drive Replacement
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                When an existing drive is obsolete, unavailable or beyond
                economical repair, an alternative drive can be evaluated
                according to motor characteristics, application requirements,
                control method and machine architecture.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                Electrical ratings, motor compatibility, braking requirements,
                speed control, feedback and communication interfaces can all
                be considered before selecting a replacement.
              </p>

            </div>


            <div className="rounded-2xl border border-orange-500/40 bg-slate-900 p-8">

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Communication Mapping
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Existing PLC & New Drive Integration
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Replacing a drive does not always mean replacing or rewriting
                the existing PLC software.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                When the new drive uses a different communication structure,
                control words, status words, speed references, feedback values
                and fault information can be evaluated and mapped to the
                structure expected by the existing automation system.
              </p>

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
                Connecting New Devices to Existing Automation Systems
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Some machines have an existing PLC program and communication
                architecture that cannot be easily modified.
              </p>

              <p>
                In suitable applications, an industrial communication gateway
                can be evaluated as an interface between the existing control
                system and a replacement device.
              </p>

              <p>
                The gateway can translate or map data between compatible
                communication protocols and data structures, allowing the
                existing automation architecture to communicate with newer
                equipment.
              </p>

              <p>
                The exact solution depends on the PLC, drive, protocol,
                telegram structure, data types and machine requirements.
              </p>

            </div>

          </div>


          <div className="mt-12 rounded-2xl border border-slate-700 bg-slate-950 p-8">

            <div className="grid gap-6 text-center md:grid-cols-5">

              <div>
                <p className="text-sm uppercase tracking-widest text-slate-500">
                  Existing PLC
                </p>

                <p className="mt-2 font-bold">
                  Control System
                </p>
              </div>

              <div className="hidden items-center justify-center text-2xl text-orange-500 md:flex">
                →
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-slate-500">
                  Mapping
                </p>

                <p className="mt-2 font-bold">
                  Data Translation
                </p>
              </div>

              <div className="hidden items-center justify-center text-2xl text-orange-500 md:flex">
                →
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-slate-500">
                  Replacement Device
                </p>

                <p className="mt-2 font-bold">
                  Drive / Device
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SENSOR TROUBLESHOOTING */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Sensor Troubleshooting
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Industrial Sensor Fault Diagnosis
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Sensor problems can cause machine sequence errors, unexpected
                stops, incorrect positioning and production quality problems.
              </p>

              <p>
                Troubleshooting can include checking sensor power, wiring,
                output signals, mounting, detection distance and PLC input
                behavior.
              </p>

              <p>
                Sensors may also need to be evaluated against the actual
                electrical and communication architecture of the machine.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* SENSOR REPLACEMENT */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Sensor Replacement
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Equivalent & Alternative Sensor Compatibility
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-400">
              Finding a physically similar sensor is not enough. A replacement
              sensor must also be compatible with the electrical, PLC and
              communication architecture of the machine.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {compatibilityAreas.map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500"
              >

                <div className="mb-4 h-1 w-12 rounded-full bg-orange-500" />

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


      {/* SENSOR ELECTRICAL COMPATIBILITY */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                PNP / NPN Sensors
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Replacement sensors can be evaluated according to PNP/NPN
                output configuration and the input structure of the existing
                PLC.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                NO / NC Signals
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Normally open and normally closed signal behavior must match
                the machine's control logic or be appropriately adapted.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                24 VDC Sensors
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Supply voltage, current requirements and electrical connection
                characteristics can be checked before replacement.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                0–10 V Sensors
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Analog voltage signals can require scaling and input-range
                compatibility with the existing PLC or controller.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                4–20 mA Sensors
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Current-loop sensors can be evaluated for electrical,
                measurement-range and PLC analog-input compatibility.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Encoder Replacement
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Resolution, pulse type, direction, supply voltage, feedback
                interface and mechanical mounting can be evaluated before
                replacing an encoder.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* SMART SENSORS */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Smart Sensors
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Communication-Based Sensor Integration
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Modern sensors can communicate directly with automation
                systems instead of providing only a simple digital signal.
              </p>

              <p>
                Devices using IO-Link, Profinet, Modbus or other industrial
                communication systems may require configuration, addressing,
                parameterization and data mapping.
              </p>

              <p>
                Replacing a communication-based sensor therefore requires
                checking both the physical device and the information expected
                by the PLC or automation system.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* SENSOR COMMUNICATION */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                IO-Link
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Device configuration, parameterization, process data and
                compatibility with the existing IO-Link master can be
                evaluated.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Profinet
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Device communication, network configuration, device data and
                PLC integration can be checked during troubleshooting and
                replacement.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Modbus
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Register mapping, function codes, addressing and data types
                can be evaluated when replacing or integrating Modbus devices.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Data Mapping
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Device data can be evaluated and mapped according to the
                structure expected by the existing PLC or control system.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* PLC COMMUNICATION */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                PLC I/O Diagnosis
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Verification of digital and analog PLC inputs and outputs,
                signal states, wiring and field-device behavior.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Communication Faults
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Investigation of communication interruptions, incorrect
                addressing, configuration problems and data mapping issues.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Gateway Solutions
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Where appropriate, gateway-based communication can be
                evaluated to connect existing automation systems with
                replacement devices using different communication structures.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ELECTRICAL + MECHANICAL */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-8 md:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Electrical Diagnosis
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Electrical Machine Faults
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Troubleshooting of control panels, power circuits, contactors,
                relays, protection devices, sensors, motors and control
                signals.
              </p>

            </div>


            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Machine Interaction
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Electrical, Automation & Mechanical Relationship
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Some automation faults originate from mechanical problems.
                Machine load, alignment, friction, pneumatic or hydraulic
                conditions can affect motors, drives, sensors and control
                sequences.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ROOT CAUSE */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Root Cause Analysis
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Replace the Faulty Component — or Find the Real Problem?
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Replacing a failed component without understanding why it failed
            can result in repeated downtime.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            AENA Technologies evaluates the relationship between the failed
            component and the rest of the machine to identify possible
            electrical, automation, communication, mechanical or process
            causes.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            When a component must be replaced, the replacement can also be
            evaluated for compatibility with the existing machine system.
          </p>

        </div>

      </section>


      {/* WORKFLOW */}

      <section className="py-24">

        <div className="mx-auto max-w-5xl px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Service Workflow
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              From Machine Fault to Reliable Operation
            </h2>

          </div>


          <div className="mt-12 space-y-4">

            {[
              "Machine fault identification",
              "Electrical and automation inspection",
              "Alarm and diagnostic analysis",
              "Signal and I/O testing",
              "Component compatibility evaluation",
              "Alternative or replacement product evaluation",
              "Communication and mapping analysis",
              "Repair or replacement",
              "System integration",
              "Testing and commissioning",
              "Production verification",
            ].map((item, index) => (

              <div
                key={item}
                className="flex items-center gap-5 rounded-xl border border-slate-800 bg-slate-900 p-5"
              >

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold">
                  {index + 1}
                </span>

                <span className="font-semibold">
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
            Having an Industrial Machine Fault?
          </h2>

          <p className="mt-6 text-xl text-orange-100">
            Tell us about the machine, fault code, drive, sensor, PLC or
            communication problem. AENA Technologies can evaluate the fault
            and the required repair or replacement approach.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-bold text-orange-500 transition hover:bg-slate-100"
          >
            Discuss Your Machine Problem
          </Link>

        </div>

      </section>

    </main>
  );
}