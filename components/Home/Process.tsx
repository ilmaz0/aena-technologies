export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Inspection",
      text:
        "We inspect the existing machine, electrical system, automation architecture and production process to identify obsolete components, technical problems and modernization requirements.",
    },
    {
      number: "02",
      title: "Engineering",
      text:
        "We define the retrofit strategy, electrical modifications, PLC architecture, drive and motion requirements, communication systems and required replacement components.",
    },
    {
      number: "03",
      title: "Retrofit",
      text:
        "We implement the modernization by integrating PLCs, HMIs, sensors, drives, servo systems, electrical panels and industrial communication equipment into the existing machine.",
    },
    {
      number: "04",
      title: "Commissioning",
      text:
        "We test the complete system, configure parameters, optimize machine performance, verify communication and support production start-up.",
    },
    {
      number: "05",
      title: "Support",
      text:
        "We provide technical troubleshooting, remote support and engineering assistance to maintain reliable machine operation after commissioning.",
    },
  ];

  return (
    <section className="bg-slate-950 py-28 text-white">
      <div className="mx-auto max-w-7xl px-8">

        {/* HEADER */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="font-semibold uppercase tracking-[3px] text-orange-400">
            Engineering Process
          </span>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Our Machine Retrofit & Engineering Workflow
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
            Every machine retrofit and industrial automation project follows a
            structured engineering process designed to improve reliability,
            production performance and long-term machine operation.
          </p>

        </div>


        {/* PROCESS STEPS */}

        <div className="mt-20 grid gap-7 md:grid-cols-2 lg:grid-cols-5">

          {steps.map((step) => (
            <article
              key={step.number}
              className="
                group
                relative
                rounded-2xl
                border
                border-slate-800
                bg-slate-900
                p-8
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-orange-500/70
                hover:shadow-2xl
                hover:shadow-orange-500/10
              "
            >

              {/* STEP NUMBER */}

              <div className="text-5xl font-extrabold text-orange-500">
                {step.number}
              </div>


              {/* ACCENT */}

              <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-16" />


              {/* TITLE */}

              <h3 className="mt-6 text-2xl font-bold">
                {step.title}
              </h3>


              {/* DESCRIPTION */}

              <p className="mt-4 leading-7 text-slate-400">
                {step.text}
              </p>

            </article>
          ))}

        </div>


        {/* BOTTOM MESSAGE */}

        <div className="mx-auto mt-16 max-w-4xl text-center">

          <p className="text-base leading-7 text-slate-500">
            From initial machine inspection to commissioning and technical
            support, AENA Technologies approaches retrofit projects as an
            integrated engineering process rather than a simple component
            replacement.
          </p>

        </div>

      </div>
    </section>
  );
}