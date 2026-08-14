export default function WhyChoose() {
  const advantages = [
    {
      icon: "⚙️",
      title: "Machine Retrofit Expertise",
      text:
        "We specialize in modernizing existing industrial machinery by upgrading obsolete automation, electrical systems, PLCs, drives, sensors and control equipment while preserving usable machine infrastructure.",
    },
    {
      icon: "🖥️",
      title: "PLC, HMI & SCADA Engineering",
      text:
        "We develop and troubleshoot industrial control systems using PLC, HMI and SCADA technologies for machine automation, production monitoring and process control applications.",
    },
    {
      icon: "⚡",
      title: "Electrical & Drive Engineering",
      text:
        "Our engineering scope includes electrical panels, machine wiring, AC drives, servo systems, motion control and industrial communication integration.",
    },
    {
      icon: "🔧",
      title: "Practical Troubleshooting",
      text:
        "We approach machine faults from the complete system perspective, analyzing PLC logic, electrical signals, sensors, drives, communication networks and mechanical operation.",
    },
    {
      icon: "🔄",
      title: "Legacy System Modernization",
      text:
        "Obsolete PLCs, drives and automation components can often be replaced or integrated without redesigning the entire machine, depending on the existing architecture.",
    },
    {
      icon: "🌍",
      title: "International Engineering Support",
      text:
        "AENA Technologies supports industrial automation and machine modernization projects in Turkey and international markets across Europe, the Middle East and Central Asia.",
    },
  ];

  return (
    <section className="bg-slate-900 py-28 text-white">

      <div className="mx-auto max-w-7xl px-8">

        {/* HEADER */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="font-semibold uppercase tracking-[3px] text-orange-400">
            Why Choose AENA
          </span>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Your Industrial Automation & Retrofit Engineering Partner
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
            AENA Technologies combines automation, electrical and machine
            engineering to help manufacturers modernize existing equipment,
            solve technical problems and improve production performance.
          </p>

        </div>


        {/* ADVANTAGES */}

        <div className="mt-20 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {advantages.map((advantage) => (

            <article
              key={advantage.title}
              className="
                group
                rounded-2xl
                border
                border-slate-800
                bg-slate-800/70
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-orange-500/70
                hover:bg-slate-800
                hover:shadow-2xl
                hover:shadow-orange-500/10
              "
            >

              {/* ICON */}

              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-orange-500/20
                  bg-orange-500/10
                  text-5xl
                  transition-all
                  duration-300
                  group-hover:border-orange-500/40
                  group-hover:bg-orange-500/15
                "
              >
                {advantage.icon}
              </div>


              {/* TITLE */}

              <h3 className="mt-7 text-2xl font-bold">
                {advantage.title}
              </h3>


              {/* DESCRIPTION */}

              <p className="mt-4 leading-8 text-slate-400">
                {advantage.text}
              </p>

            </article>

          ))}

        </div>


        {/* BOTTOM STATEMENT */}

        <div className="mx-auto mt-16 max-w-4xl text-center">

          <div className="rounded-2xl border border-orange-500/20 bg-slate-950/60 p-8">

            <p className="text-lg leading-8 text-slate-300">
              Our objective is not simply to replace components. We analyze
              the existing machine architecture and develop practical
              engineering solutions that improve reliability, extend machine
              operating life and reduce unnecessary modernization costs.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}