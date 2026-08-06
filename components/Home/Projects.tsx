export default function Projects() {
  const projects = [
    {
      title: "Stretch Transfer Machine",
      category: "Machine Retrofit",
      description:
        "Complete electrical redesign, PLC software redevelopment and mechanical optimization to restore production speed.",
      technologies: "Siemens PLC • Electrical Design • Commissioning",
    },
    {
      title: "Plastic Bag Machine",
      category: "Machine Modernization",
      description:
        "Electrical, electronic and mechanical refurbishment including Yaskawa drives, UTC electronics, sensors and commissioning.",
      technologies: "Yaskawa • UTC • Servo • Sensors",
    },
    {
      title: "PET Flake Washing System",
      category: "Automation Project",
      description:
        "Complete automation project featuring automatic chemical dosing, level control and custom slip-ring engineering.",
      technologies: "PLC • Slip Ring • Automation",
    },
    {
      title: "Stretch Film Production Line",
      category: "Production Line Upgrade",
      description:
        "Electrical cabinet renovation, pressure sensors, cooling systems and production reliability improvements.",
      technologies: "Siemens • Sensors • Maintenance",
    },
    {
      title: "Colines Gauge Control",
      category: "Precision Engineering",
      description:
        "Restored a non-functional thickness measurement system and prepared the production line for automatic heater-zone control.",
      technologies: "Calibration • Electronics • PLC",
    },
    {
      title: "Cable Pay-Off System",
      category: "Drive Optimization",
      description:
        "Optimized Siemens drive parameters and restored stable cable unwinding performance.",
      technologies: "Siemens Drive • Motion Control",
    },
  ];

  return (
    <section className="bg-slate-900 py-28 text-white">
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center mb-20">

          <span className="text-orange-400 uppercase tracking-[3px] font-semibold">
            Portfolio
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Featured Engineering Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Real industrial challenges solved through automation,
            machine retrofit and electrical engineering.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-slate-700 bg-slate-950 p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl"
            >

              <span className="text-sm uppercase tracking-[2px] text-orange-400">
                {project.category}
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {project.description}
              </p>

              <div className="mt-8 border-t border-slate-700 pt-6">

                <p className="text-sm text-slate-500">
                  Technologies
                </p>

                <p className="mt-2 font-semibold text-orange-400">
                  {project.technologies}
                </p>

              </div>

              <button className="mt-8 font-semibold text-orange-400 hover:text-orange-300">
                Read Case Study →
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}