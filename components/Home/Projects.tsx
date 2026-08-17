import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Stretch Transfer Machine Retrofit",
      category: "Machine Retrofit",
      description:
        "Complete electrical redesign, PLC software redevelopment and mechanical optimization to restore production speed and improve machine reliability.",
      technologies:
        "Siemens PLC • Electrical Design • Machine Retrofit • Commissioning",
      href: "/projects/stretch-transfer-machine",
    },
    {
      title: "Plastic Bag Machine Modernization",
      category: "Machine Modernization",
      description:
        "Electrical, electronic and mechanical refurbishment including Yaskawa drives, UTC electronics, sensor replacement and machine commissioning.",
      technologies:
        "Yaskawa • UTC Electronics • Servo • Sensors • Commissioning",
      href: "/projects/hemigstone-bag-cutting-machine",
    },
    {
      title: "PET Flake Washing System Automation",
      category: "Recycling Automation",
      description:
        "Complete automation project featuring automatic chemical dosing, level control and custom slip-ring engineering for a PET recycling process.",
      technologies:
        "PLC • Process Automation • Chemical Dosing • Level Control • Slip Ring",
      href: "/projects/flake-washing-line",
    },
    {
      title: "Stretch Film Production Line Upgrade",
      category: "Production Line Modernization",
      description:
        "Electrical cabinet renovation, pressure sensor integration, cooling system improvements and production reliability upgrades.",
      technologies:
        "Siemens • Pressure Sensors • Electrical Panel • Cooling Systems",
      href: "/projects/stretch-film-extrusion-line",
    },
    {
      title: "Colines Gauge Control System",
      category: "Precision Engineering",
      description:
        "Restored a non-functional thickness measurement system and prepared the production line for automatic heater-zone control.",
      technologies:
        "Calibration • Electronics • PLC • Gauge Control",
      href: "/projects/colines-thickness-gauge",
    },
    {
      title: "Cable Pay-Off Drive Optimization",
      category: "Drive Optimization",
      description:
        "Optimized Siemens drive parameters and restored stable cable unwinding performance for improved production operation.",
      technologies:
        "Siemens Drive • Drive Parameters • Motion Control",
      href: "/projects/cable-pay-off-drive",
    },
  ];

  return (
    <section
      id="projects"
      className="border-t border-slate-800 bg-[#020617] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* HEADER */}
        <div className="mx-auto max-w-4xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
            Engineering Projects
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Machine Retrofit & Industrial Automation Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Selected industrial engineering projects involving machine
            retrofit, automation modernization, electrical engineering,
            drive systems and production line improvements.
          </p>

        </div>

        {/* PROJECT GRID */}
        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <article
              key={project.title}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-800
                bg-slate-950
                p-7
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-orange-500/70
                hover:shadow-2xl
                hover:shadow-orange-500/10
              "
            >

              {/* PROJECT NUMBER */}
              <div className="flex items-center justify-between">

                <span className="text-xs font-bold tracking-[3px] text-slate-600">
                  PROJECT {String(index + 1).padStart(2, "0")}
                </span>

                <span className="h-2 w-2 rounded-full bg-orange-500 opacity-70 transition group-hover:opacity-100" />

              </div>

              {/* CATEGORY */}
              <p className="mt-7 text-xs font-semibold uppercase tracking-[2px] text-orange-400">
                {project.category}
              </p>

              {/* TITLE */}
              <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-5 min-h-[120px] text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              {/* TECHNOLOGIES */}
              <div className="mt-7 border-t border-slate-800 pt-6">

                <p className="text-xs uppercase tracking-[2px] text-slate-600">
                  Technologies & Engineering
                </p>

                <p className="mt-3 text-sm font-semibold leading-6 text-orange-400">
                  {project.technologies}
                </p>

              </div>

              {/* PROJECT DETAILS */}
              <div className="mt-7">

                <Link
                  href={project.href}
                  className="inline-flex items-center text-sm font-semibold text-slate-300 transition group-hover:text-orange-400"
                >
                  Project Details

                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

              </div>

            </article>
          ))}

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center sm:p-10">

          <p className="text-sm uppercase tracking-[3px] text-orange-400">
            Have a Machine That Needs Modernization?
          </p>

          <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            Let&apos;s Evaluate Your Retrofit Project
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Tell us about your existing machine, automation system or
            production line. We can evaluate the control system, electrical
            infrastructure and modernization requirements.
          </p>

          <Link
            href="/contact"
            className="
              mt-7
              inline-flex
              rounded-xl
              bg-orange-500
              px-7
              py-3.5
              text-sm
              font-bold
              text-white
              transition
              duration-300
              hover:bg-orange-600
              hover:shadow-lg
              hover:shadow-orange-500/20
            "
          >
            Request a Retrofit Evaluation
          </Link>

        </div>

      </div>
    </section>
  );
}