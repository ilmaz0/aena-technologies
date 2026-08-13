import Link from "next/link";

export const metadata = {
  title: "Industrial Machine Retrofit & Modernization",
  description:
    "Industrial machine retrofit and modernization services including PLC replacement, HMI upgrades, drive systems, sensors, electrical panels, automation, mechanical systems and commissioning.",
  keywords: [
    "industrial machine retrofit",
    "machine retrofit",
    "machine modernization",
    "industrial machine modernization",
    "electrical machine retrofit",
    "PLC replacement",
    "HMI replacement",
    "drive replacement",
    "industrial automation retrofit",
    "production line modernization",
    "obsolete machine modernization",
    "machine commissioning",
  ],
};

export default function MachineRetrofitPage() {
  return (
    <main className="bg-slate-950 text-white">
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
            systems to automation, mechanical integration, software and
            commissioning.
          </p>

        </div>
      </section>

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
              the production requirements.
            </p>

            <p>
              The retrofit process can include electrical, automation,
              hydraulic, pneumatic, mechanical and software systems.
            </p>

            <p>
              Obsolete components can be replaced with current or equivalent
              technology while maintaining compatibility with the existing
              machine architecture where possible.
            </p>

          </div>

        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Retrofit Scope
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            From Inspection to Commissioning
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Machine inspection and technical evaluation",
              "Electrical system modernization",
              "Electrical cabinet revision",
              "PLC and HMI modernization",
              "Drive and servo system replacement",
              "Sensor replacement and integration",
              "Hydraulic system improvements",
              "Pneumatic system improvements",
              "Mechanical system integration",
              "Software development and modification",
              "Component replacement and equivalent selection",
              "Machine commissioning and production support",
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

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Component Replacement
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
                Compatibility can be evaluated according to electrical
                characteristics, communication protocols, control architecture,
                mechanical dimensions and machine requirements.
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
            drives, sensors, hydraulics, pneumatics, mechanical integration,
            software development and commissioning.
          </p>

        </div>
      </section>

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