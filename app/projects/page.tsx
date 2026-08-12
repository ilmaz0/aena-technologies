import Link from "next/link";

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
      href: "/projects/stretch-transfer-machine",
    },

    {
      title: "PET Flake Washing Line",
      challenge:
        "The customer required a completely new automated recycling washing system.",
      solution:
        "Designed the electrical system, PLC software, automatic dosing, slip-ring integration and level control.",
      result:
        "Successfully commissioned with stable automatic operation.",
      href: "/projects/flake-washing-line",
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

    // HEMIGSTONE PROJECT
    {
      title: "Athletic Bag Cutting Machine Retrofit",
      challenge:
        "The existing machine required electrical and automation improvements to achieve more reliable operation and easier maintenance.",
      solution:
        "Modernized the electrical and control infrastructure, integrated servo and drive systems, replaced sensors and recommissioned the machine.",
      result:
        "The existing mechanical structure was retained while the electrical and automation system was modernized.",
      href: "/projects/hemigstone-bag-cutting-machine",
    },
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}
      <section className="border-b border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            Portfolio
          </p>

          <h1 className="mt-4 text-6xl font-extrabold">
            Engineering Case Studies
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-400">
            Real industrial automation, machine retrofit and electrical
            engineering projects completed by AENA Technologies.
          </p>

        </div>
      </section>


      {/* PROJECTS */}
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

                {/* CHALLENGE */}
                <div>

                  <h3 className="font-bold text-orange-400">
                    Challenge
                  </h3>

                  <p className="mt-3 leading-8 text-slate-400">
                    {project.challenge}
                  </p>

                </div>


                {/* SOLUTION */}
                <div>

                  <h3 className="font-bold text-orange-400">
                    Engineering Solution
                  </h3>

                  <p className="mt-3 leading-8 text-slate-400">
                    {project.solution}
                  </p>

                </div>


                {/* RESULT */}
                <div>

                  <h3 className="font-bold text-orange-400">
                    Result
                  </h3>

                  <p className="mt-3 leading-8 text-slate-400">
                    {project.result}
                  </p>

                </div>

              </div>


              {/* PROJECT DETAIL BUTTON */}
              {project.href && (
                <div className="mt-10 border-t border-slate-800 pt-8">

                  <Link
                    href={project.href}
                    className="inline-flex items-center rounded-xl border border-orange-500/70 bg-orange-500 px-6 py-3 text-sm font-bold uppercase tracking-[1.5px] text-white transition duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20"
                  >
                    View Project

                    <span className="ml-3 text-lg">
                      →
                    </span>

                  </Link>

                </div>
              )}

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}