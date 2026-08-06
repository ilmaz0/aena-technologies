export default function ProjectsPage() {
  const projects = [
    {
      title: "Stretch Transfer Machine",
      challenge:
        "The machine was completely out of operation due to an obsolete electrical control system.",
      solution:
        "Redesigned the electrical cabinet, developed new PLC software, optimized the mechanical system and recommissioned the machine.",
      result:
        "Production was restored at the customer's target operating speed.",
    },
    {
      title: "PET Flake Washing Line",
      challenge:
        "The customer required a completely new automated recycling washing system.",
      solution:
        "Designed the electrical system, PLC software, automatic dosing, slip-ring integration and level control.",
      result:
        "Successfully commissioned with stable automatic operation.",
    },
    {
      title: "Plastic Bag Production Machine",
      challenge:
        "Electrical, electronic and mechanical failures caused unstable production.",
      solution:
        "Replaced faulty electronics, installed missing sensors, repaired drive systems and recommissioned the machine.",
      result:
        "Production line returned to reliable operation.",
    },
    {
      title: "Stretch Film Extrusion Line",
      challenge:
        "Aging electrical equipment reduced production reliability.",
      solution:
        "Renewed electrical cabinet components, pressure sensors, cooling systems and optimized machine operation.",
      result:
        "Improved production stability and reduced downtime.",
    },
    {
      title: "Colines Thickness Gauge",
      challenge:
        "The thickness measurement system was completely inoperative.",
      solution:
        "Restored electronics, recalibrated the gauge and prepared the system for automatic heater-zone correction.",
      result:
        "Thickness measurement system returned to full operation.",
    },
    {
      title: "Cable Pay-Off Machine",
      challenge:
        "Incorrect drive parameters caused unstable cable unwinding.",
      solution:
        "Optimized Siemens drive parameters and tuned the control system.",
      result:
        "Smooth and reliable machine operation was restored.",
    },
  ];

  return (
    <main className="bg-slate-950 text-white">

      <section className="border-b border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="uppercase tracking-[4px] text-orange-400 font-semibold">
            Portfolio
          </p>

          <h1 className="mt-4 text-6xl font-extrabold">
            Engineering Case Studies
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-slate-400 leading-8">
            Real industrial automation, machine retrofit and electrical
            engineering projects completed by AENA Technologies.
          </p>

        </div>
      </section>

      <section className="py-24">

        <div className="mx-auto max-w-7xl space-y-10 px-8">

          {projects.map((project) => (

            <div
              key={project.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-10"
            >

              <h2 className="text-3xl font-bold">
                {project.title}
              </h2>

              <div className="mt-10 grid gap-8 md:grid-cols-3">

                <div>
                  <h3 className="text-orange-400 font-bold">
                    Challenge
                  </h3>

                  <p className="mt-3 text-slate-400 leading-8">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="text-orange-400 font-bold">
                    Engineering Solution
                  </h3>

                  <p className="mt-3 text-slate-400 leading-8">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h3 className="text-orange-400 font-bold">
                    Result
                  </h3>

                  <p className="mt-3 text-slate-400 leading-8">
                    {project.result}
                  </p>
                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}