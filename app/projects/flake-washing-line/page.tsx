import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "PET Flake Washing Line Automation",
  description:
    "Electrical and automation engineering of a PET flake recycling washing line by AENA Technologies.",
};

export default function PetFlakeWashingLineProjectPage() {
  const scope = [
    "Electrical system design",
    "PLC software development",
    "Automatic dosing system",
    "Slip-ring integration",
    "Level control",
    "Machine automation",
    "System commissioning",
  ];

  const technologies = [
    "PLC",
    "Industrial Automation",
    "Automatic Dosing",
    "Level Control",
    "Slip-Ring System",
    "Electrical Control",
    "PET Recycling",
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}
      <section className="border-b border-slate-800 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-orange-400">
            Recycling Automation
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            PET Flake Washing Line
            <span className="block text-orange-500">
              Automation & Commissioning
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-400 sm:text-xl">
            Electrical engineering and automation development for a PET
            recycling flake washing system.
          </p>

        </div>
      </section>


      {/* PROJECT OVERVIEW */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-3 lg:px-8">

          <div className="lg:col-span-2">

            <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
              Project Overview
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Automated PET Recycling Washing System
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              The project involved the electrical and automation development
              of a PET flake recycling washing line designed for automated
              material processing.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              The automation system was developed to coordinate the different
              stages of the washing process while providing reliable control
              of dosing, material flow and tank levels.
            </p>

          </div>


          {/* PROJECT INFO */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">

            <p className="text-xs uppercase tracking-[3px] text-slate-500">
              Project Type
            </p>

            <p className="mt-2 font-semibold text-orange-400">
              Recycling Automation
            </p>

            <div className="my-6 h-px bg-slate-800" />

            <p className="text-xs uppercase tracking-[3px] text-slate-500">
              Main Systems
            </p>

            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Electrical System</li>
              <li>• PLC Automation</li>
              <li>• Automatic Dosing</li>
              <li>• Slip-Ring Integration</li>
              <li>• Level Control</li>
              <li>• Machine Commissioning</li>
            </ul>

          </div>

        </div>
      </section>


      {/* CHALLENGE */}
      <section className="border-y border-slate-800 bg-slate-900/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
            Challenge
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Coordinating a Complete Recycling Process
          </h2>

          <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-400">
            The washing line required a coordinated automation system capable
            of managing multiple process stages, material flow, chemical
            dosing and tank levels.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
            Reliable communication between the electrical control system,
            sensors, drives and process equipment was essential for stable
            automatic operation.
          </p>

        </div>
      </section>


      {/* ENGINEERING SOLUTION */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
            Engineering Solution
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Electrical & Automation Engineering
          </h2>

          <div className="mt-8 max-w-4xl space-y-6 text-lg leading-8 text-slate-400">

            <p>
              The electrical control architecture was designed to coordinate
              the complete washing process and its individual machine units.
            </p>

            <p>
              PLC software was developed to manage the automatic sequence,
              material flow, tank levels and process control.
            </p>

            <p>
              An automatic dosing system was integrated into the process to
              provide controlled chemical addition during operation.
            </p>

            <p>
              Slip-ring integration and level-control systems were also
              implemented as part of the automation solution.
            </p>

          </div>

        </div>
      </section>


      {/* SCOPE OF WORK */}
      <section className="border-y border-slate-800 bg-slate-900/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
            Scope of Work
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Recycling Line Automation
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {scope.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6"
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


      {/* RESULT */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
            Result
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Stable Automatic Operation
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-400">
            The PET flake washing line was successfully commissioned with
            stable automatic operation and coordinated control of the
            recycling process.
          </p>

        </div>
      </section>


      {/* TECHNOLOGIES */}
      <section className="border-y border-slate-800 bg-slate-900/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
            Technologies
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Recycling & Automation Technologies
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">

            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-700 bg-slate-950 px-5 py-3 text-sm text-slate-300"
              >
                {technology}
              </span>
            ))}

          </div>

        </div>
      </section>


      {/* PROJECT GALLERY */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
            Project Gallery
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            PET Recycling Washing Line
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Selected images from the electrical, automation and recycling
            system engineering project.
          </p>


          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {/* IMAGE 1 */}
            <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">

              <Image
                src="/projects/flake%20washing%20line/flake1.png"
                alt="PET flake washing line by AENA Technologies"
                width={1200}
                height={800}
                className="h-auto max-h-[550px] w-full object-contain transition duration-500 group-hover:scale-105"
              />

            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-orange-500 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-3xl font-bold sm:text-5xl">
            Planning a Recycling Automation Project?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100">
            Tell us about your recycling line, washing system or automation
            requirement. We can evaluate the process and develop a suitable
            electrical and automation solution.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-bold text-orange-500 transition hover:bg-slate-100"
          >
            Request a Project Evaluation
          </Link>

        </div>

      </section>

    </main>
  );
}