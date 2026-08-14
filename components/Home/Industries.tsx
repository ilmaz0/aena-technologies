export default function Industries() {
  const industries = [
    {
      title: "Plastic Machinery",
      icon: "🏭",
      desc: "Industrial automation and machine retrofit solutions for extrusion, blown film, plastic bag making, granule production and plastic processing machinery. Services include PLC modernization, drive replacement, servo integration, electrical panel upgrades and machine commissioning.",
    },
    {
      title: "Packaging Machinery",
      icon: "📦",
      desc: "Machine modernization and automation services for packaging equipment, stretch film machines, transfer systems, automatic cutting machines and packaging production lines. We improve machine reliability, production performance and control system functionality.",
    },
    {
      title: "Cable Manufacturing",
      icon: "⚡",
      desc: "Automation and drive system solutions for cable manufacturing machinery, pay-off systems, winding machines and synchronized production lines. Services include drive optimization, motion control, PLC integration and machine troubleshooting.",
    },
    {
      title: "Recycling Machinery",
      icon: "♻️",
      desc: "Industrial automation and retrofit solutions for PET recycling machinery, washing lines, dosing systems and process equipment. PLC control, level measurement, chemical dosing, electrical modernization and process automation can be integrated according to machine requirements.",
    },
    {
      title: "Machine Builders",
      icon: "⚙️",
      desc: "Automation and electrical engineering support for industrial machine builders. Services include PLC programming, HMI development, control panel engineering, servo and drive integration, machine commissioning and automation system development.",
    },
    {
      title: "Industrial Plants",
      icon: "🏢",
      desc: "Machine modernization, electrical system upgrades and industrial automation services for existing production facilities. We support PLC replacement, electrical panel revision, drive modernization, machine troubleshooting and production system improvements.",
    },
  ];

  return (
    <section
      id="industries"
      className="border-t border-slate-800 bg-slate-950 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        {/* HEADER */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="font-semibold uppercase tracking-[3px] text-orange-400">
            Industries We Serve
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Industries We Serve with Machine Retrofit & Automation
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
            AENA Technologies provides industrial automation, machine retrofit
            and modernization services for plastic, packaging, recycling,
            cable manufacturing and industrial production facilities.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-500">
            Our engineering services support manufacturers and machine builders
            in Turkey and international markets across Europe, the Middle East
            and Central Asia.
          </p>

        </div>


        {/* INDUSTRY GRID */}

        <div className="mt-20 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {industries.map((item) => (

            <article
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-800
                bg-slate-900
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-orange-500/70
                hover:shadow-2xl
                hover:shadow-orange-500/10
              "
            >

              {/* TOP ACCENT */}

              <div className="mb-7 h-1 w-12 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-20" />


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
                {item.icon}
              </div>


              {/* TITLE */}

              <h3 className="mt-7 text-2xl font-bold">
                {item.title}
              </h3>


              {/* DESCRIPTION */}

              <p className="mt-5 leading-8 text-slate-400">
                {item.desc}
              </p>


              {/* FOOTER */}

              <div className="mt-7 border-t border-slate-800 pt-5">

                <span className="text-xs font-semibold uppercase tracking-[2px] text-orange-400">
                  Industrial Engineering
                </span>

              </div>

            </article>

          ))}

        </div>


        {/* INDUSTRY FOCUS */}

        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 sm:p-10">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
                Industrial Focus
              </span>

              <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
                Retrofit & Automation for Existing Machinery
              </h3>

            </div>

            <div className="space-y-4 text-base leading-7 text-slate-400">

              <p>
                Many industrial machines remain mechanically usable for years
                while their automation hardware, drives, PLCs, sensors or
                electrical systems become obsolete.
              </p>

              <p>
                AENA Technologies evaluates the existing machine architecture
                and develops practical modernization solutions designed to
                improve reliability, extend machine lifetime and reduce
                unnecessary replacement costs.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}