import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial Machine Retrofit and Automation Projects",

  description:
    "Explore industrial machine retrofit, automation, electrical engineering and production monitoring projects by AENA Technologies, including EPS, recycling, extrusion, packaging, marble processing, copper wire bending and drive system applications.",

  keywords: [
    "industrial machine retrofit projects",
    "industrial automation projects",
    "machine modernization projects",
    "electrical engineering projects",
    "PLC automation projects",
    "industrial retrofit projects",

    "EPS machine retrofit",
    "polystyrene foam machine retrofit",
    "EPS machine drive commissioning",
    "Rexroth drive commissioning",
    "Rexroth drive retrofit",

    "recycling automation projects",
    "extrusion machine retrofit",

    "marble processing machine retrofit",
    "marble machine retrofit",
    "marble processing line modernization",
    "marble machinery automation",

    "copper wire bending machine",
    "copper wire bending machine retrofit",
    "copper wire bending automation",
    "copper wire bending encoder fault",
    "encoder fault detection",
    "encoder fault diagnosis",
    "Lenze drive diagnostics",
    "Lenze drive encoder fault",
    "Lenze drive troubleshooting",
    "motor encoder diagnostics",
    "slip ring encoder system",
    "carbon brush encoder system",

    "production monitoring systems",
    "drive system retrofit",
    "industrial automation Turkey",
  ],

  alternates: {
    canonical: "https://www.aenatechnologies.com/projects",
  },

  openGraph: {
    title: "Industrial Machine Retrofit and Automation Projects",

    description:
      "Explore real industrial machine retrofit, automation, electrical engineering, EPS machine, marble processing, copper wire bending and production monitoring projects completed by AENA Technologies.",

    url: "https://www.aenatechnologies.com/projects",

    siteName: "AENA Technologies",

    type: "website",
  },
};

const projects = [
  {
    title: "Stretch Transfer Machine Retrofit",

    category: "Machine Retrofit",

    description:
      "Electrical, PLC and mechanical modernization of an existing stretch transfer machine that was out of operation due to an obsolete control system.",

    challenge:
      "The machine was completely out of operation due to an obsolete electrical control system.",

    solution:
      "Redesigned the electrical cabinet, developed new PLC software, optimized the mechanical system and recommissioned the machine.",

    result:
      "Production was restored at the customer's target operating speed.",

    href: "/projects/stretch-transfer-machine",

    serviceHref: "/services/machine-retrofit",
    serviceLabel: "Machine Retrofit",
  },

  {
    title: "PET Flake Washing Line",

    category: "Recycling Automation",

    description:
      "Electrical and automation engineering for a PET flake recycling washing line including automatic dosing, level control and slip-ring integration.",

    challenge:
      "The customer required a coordinated automated system for PET flake washing and material processing.",

    solution:
      "Designed the electrical system, developed PLC software and integrated automatic dosing, level control and slip-ring systems.",

    result:
      "The recycling washing line was successfully commissioned with stable automatic operation.",

    href: "/projects/flake-washing-line",

    serviceHref: "/services/industrial-automation",
    serviceLabel: "Industrial Automation",
  },

  {
    title: "Granule Recycling Shift Monitoring System",

    category: "Production Monitoring",

    description:
      "Production monitoring system using Siemens Siwarex weighing technology to track granule production quantities by shift, day, month and year.",

    challenge:
      "Production quantities needed to be monitored by shift and recorded for structured production analysis.",

    solution:
      "Integrated Siemens Siwarex load-cell technology with the industrial automation system to collect and organize production data.",

    result:
      "Production quantities can be monitored by shift and analyzed through structured production data and Excel-based reporting.",

    href: "/projects/granule-shift-monitoring",

    serviceHref: "/services/industrial-automation",
    serviceLabel: "Industrial Automation",
  },

  {
    title: "Stretch Film Extrusion Line Retrofit",

    category: "Machine Retrofit",

    description:
      "Electrical and automation modernization of an existing stretch film extrusion line to improve production stability and operational reliability.",

    challenge:
      "Aging electrical equipment, pressure measurement systems and cooling components affected production reliability.",

    solution:
      "Modernized electrical components, reviewed pressure sensors and cooling systems and optimized drive and machine operating parameters.",

    result:
      "The existing mechanical structure was retained while electrical and process-control reliability was improved.",

    href: "/projects/stretch-film-extrusion-line",

    serviceHref: "/services/machine-retrofit",
    serviceLabel: "Machine Retrofit",
  },

  {
    title: "Colines Thickness Gauge",

    category: "Process Control",

    description:
      "Restoration and calibration of an inoperative thickness measurement system for an industrial extrusion application.",

    challenge:
      "The thickness measurement system was completely inoperative.",

    solution:
      "Restored the electronics, recalibrated the measurement system and prepared the system for automatic heater-zone correction.",

    result:
      "The thickness measurement system was returned to full operation.",

    href: "/projects/colines-thickness-gauge",

    serviceHref: "/services/industrial-automation",
    serviceLabel: "Industrial Automation",
  },

  {
    title: "Cable Pay-Off Machine",

    category: "Drive Systems",

    description:
      "Drive system optimization for a cable pay-off machine experiencing unstable cable unwinding caused by incorrect drive parameters.",

    challenge:
      "Incorrect drive parameters caused unstable cable unwinding.",

    solution:
      "Optimized the Siemens drive parameters and tuned the machine control system.",

    result:
      "Smooth and reliable machine operation was restored.",

    href: "/projects/cable-pay-off-drive",

    serviceHref: "/services/drive-systems",
    serviceLabel: "Drive Systems",
  },

  {
    title: "Marble Processing Line Retrofit",

    category: "Machine Retrofit",

    description:
      "Electrical and automation modernization of an existing marble processing line including motor and drive replacement, PLC integration and safety sensor implementation.",

    challenge:
      "The existing marble processing line required modernization to improve machine safety, operating stability and overall usability.",

    solution:
      "Replaced the existing motor and drive system, integrated PLC control and added safety sensors to modernize the machine while retaining the existing production line.",

    result:
      "The existing marble processing line became safer, more stable and more reliable for continued production operation.",

    href: "/projects/marble-process-revision",

    serviceHref: "/services/machine-retrofit",
    serviceLabel: "Machine Retrofit",
  },

  {
    title: "Plastic Bag Cutting Machine Retrofit",

    category: "Machine Retrofit",

    description:
      "Electrical and automation modernization of a plastic bag cutting machine including servo systems, drives, sensors and machine control.",

    challenge:
      "The existing machine required electrical and automation improvements for more reliable operation and easier maintenance.",

    solution:
      "Modernized the electrical and control infrastructure, integrated servo and drive systems, replaced sensors and recommissioned the machine.",

    result:
      "The existing mechanical structure was retained while the electrical and automation system was modernized.",

    href: "/projects/hemigstone-bag-cutting-machine",

    serviceHref: "/services/machine-retrofit",
    serviceLabel: "Machine Retrofit",
  },

  {
    title: "EPS Machine Retrofit",

    category: "Machine Retrofit",

    description:
      "Drive system recommissioning for an existing polystyrene foam (EPS) machine to restore machine operation and return the production equipment to service.",

    challenge:
      "The existing EPS machine was unable to operate because of a fault affecting the Rexroth drive.",

    solution:
      "The Rexroth drive was reactivated and recommissioned as part of the machine restoration process.",

    result:
      "The existing EPS machine was successfully brought back into operation without replacing the complete production system.",

    href: "/projects/eps-machine-retrofit",

    serviceHref: "/services/machine-retrofit",
    serviceLabel: "Machine Retrofit",
  },

  {
    title: "Copper Wire Bending Process",

    category: "Drive Diagnostics",

    description:
      "Encoder fault detection in a copper wire bending process using Lenze drive diagnostics, motor operating characteristics and the encoder feedback path through the slip-ring and carbon-brush system.",

    challenge:
      "The copper wire bending machine experienced an encoder-related operating problem. The fault needed to be isolated between the motor encoder, feedback connection and drive system.",

    solution:
      "The Lenze drive system was evaluated together with the motor operating characteristics and encoder feedback behavior. The slip-ring and carbon-brush connection used in the feedback path was also considered during the diagnostic process.",

    result:
      "The encoder-related fault was isolated from other possible causes, allowing the problem to be identified through systematic drive and feedback analysis.",

    href: "/projects/copper-wire-bending",

    serviceHref: "/services/drive-systems",
    serviceLabel: "Drive Systems",
  },
];

const projectCategories = [
  {
    title: "Machine Retrofit",

    description:
      "Electrical, PLC, drive and control modernization for existing industrial machinery.",

    href: "/services/machine-retrofit",
  },

  {
    title: "Industrial Automation",

    description:
      "PLC, HMI, process control and automation engineering for industrial production systems.",

    href: "/services/industrial-automation",
  },

  {
    title: "Drive Systems",

    description:
      "Drive commissioning, parameter optimization and motion-control solutions for industrial machines.",

    href: "/services/drive-systems",
  },

  {
    title: "Electrical Engineering",

    description:
      "Electrical system design, cabinet modernization and industrial control engineering.",

    href: "/services/electrical-engineering",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}

      <section className="border-b border-slate-800 py-24 sm:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            AENA Technologies Portfolio
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">

            Industrial Machine Retrofit

            <span className="block text-orange-500">
              & Automation Projects
            </span>

          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-400 sm:text-xl">

            Explore real industrial automation, machine retrofit, electrical
            engineering, drive system and production monitoring projects
            completed by AENA Technologies.

          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-500">

            Our project experience covers EPS machines, recycling systems,
            extrusion machinery, marble processing, copper wire bending,
            encoder diagnostics, production monitoring, process control,
            electrical modernization and industrial machine automation.

          </p>

        </div>

      </section>


      {/* PROJECT CATEGORIES */}

      <section className="border-b border-slate-800 bg-slate-900/40 py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Engineering Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Industrial Automation & Retrofit Engineering
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">

              Our projects combine electrical engineering, automation,
              machine modernization and drive-system expertise to extend the
              operating life and improve the performance of industrial
              machinery.

            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {projectCategories.map((category) => (

              <Link
                key={category.title}
                href={category.href}
                className="group rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/50"
              >

                <h3 className="text-xl font-bold transition group-hover:text-orange-400">
                  {category.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {category.description}
                </p>

                <span className="mt-6 inline-block text-sm font-bold uppercase tracking-[1.5px] text-orange-400">
                  Explore Service →
                </span>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* PROJECTS */}

      <section className="py-24 sm:py-28">

        <div className="mx-auto max-w-7xl space-y-10 px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Case Studies
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Selected Industrial Projects
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">

              Selected examples of machine retrofit, automation, drive
              diagnostics and electrical engineering work carried out for
              industrial production systems.

            </p>

          </div>


          <div className="mt-14 space-y-10">

            {projects.map((project) => (

              <article
                key={project.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 sm:p-10"
              >

                {/* PROJECT HEADER */}

                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

                  <div>

                    <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                      {project.title}
                    </h3>

                  </div>

                  <Link
                    href={project.serviceHref}
                    className="w-fit text-sm font-semibold text-slate-400 transition hover:text-orange-400"
                  >
                    {project.serviceLabel} →
                  </Link>

                </div>


                {/* DESCRIPTION */}

                <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
                  {project.description}
                </p>


                {/* PROJECT DETAILS */}

                <div className="mt-10 grid gap-8 md:grid-cols-3">

                  <div>

                    <h4 className="font-bold text-orange-400">
                      Challenge
                    </h4>

                    <p className="mt-3 leading-8 text-slate-400">
                      {project.challenge}
                    </p>

                  </div>


                  <div>

                    <h4 className="font-bold text-orange-400">
                      Engineering Solution
                    </h4>

                    <p className="mt-3 leading-8 text-slate-400">
                      {project.solution}
                    </p>

                  </div>


                  <div>

                    <h4 className="font-bold text-orange-400">
                      Result
                    </h4>

                    <p className="mt-3 leading-8 text-slate-400">
                      {project.result}
                    </p>

                  </div>

                </div>


                {/* VIEW PROJECT */}

                <div className="mt-10 border-t border-slate-800 pt-8">

                  <Link
                    href={project.href}
                    className="
                      inline-flex
                      items-center
                      rounded-xl
                      border
                      border-orange-500/70
                      bg-orange-500
                      px-6
                      py-3
                      text-sm
                      font-bold
                      uppercase
                      tracking-[1.5px]
                      text-white
                      transition
                      duration-300
                      hover:bg-orange-600
                      hover:shadow-lg
                      hover:shadow-orange-500/20
                    "
                  >

                    View Project

                    <span className="ml-3 text-lg">
                      →
                    </span>

                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ENGINEERING APPROACH */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24 sm:py-28">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Our Approach
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Modernize Existing Machinery Instead of Replacing It
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">

            Industrial machines can often be upgraded without replacing the
            complete mechanical system. By modernizing electrical controls,
            PLC systems, drives, sensors and automation infrastructure,
            existing equipment can be brought back into reliable production.

          </p>

          <p className="mt-6 text-lg leading-8 text-slate-500">

            AENA Technologies evaluates the existing machine architecture and
            develops retrofit solutions based on the actual production and
            automation requirements.

          </p>

          <Link
            href="/services/machine-retrofit"
            className="mt-10 inline-flex items-center rounded-xl border border-orange-500 px-7 py-3 font-bold text-orange-400 transition hover:bg-orange-500 hover:text-white"
          >

            Explore Machine Retrofit Services

            <span className="ml-3 text-lg">
              →
            </span>

          </Link>

        </div>

      </section>


      {/* CTA */}

      <section className="bg-orange-500 py-20 sm:py-24">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <p className="text-sm font-bold uppercase tracking-[3px] text-orange-100">
            Industrial Engineering Support
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            Have an Aging Machine or Automation Problem?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100">

            Tell us about your machine, electrical system, automation problem
            or modernization requirement. We can evaluate the existing
            equipment and determine a suitable engineering approach.

          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center rounded-xl bg-white px-8 py-4 font-bold text-orange-500 transition hover:bg-slate-100"
          >

            Request a Project Evaluation

            <span className="ml-3 text-lg">
              →
            </span>

          </Link>

        </div>

      </section>

    </main>
  );
}