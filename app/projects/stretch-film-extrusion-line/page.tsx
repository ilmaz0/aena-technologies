import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Stretch Film Extrusion Line Retrofit",
  description:
    "Electrical and automation modernization of a stretch film extrusion line by AENA Technologies.",
};

export default function StretchFilmExtrusionLineProjectPage() {
  const scope = [
    "Electrical system modernization",
    "Electrical cabinet revision",
    "Pressure sensor replacement",
    "Cooling system improvement",
    "Drive system optimization",
    "Machine operation optimization",
    "Machine commissioning",
  ];

  const technologies = [
    "Industrial Automation",
    "Electrical Control",
    "Drive Systems",
    "Pressure Sensors",
    "Cooling Systems",
    "Machine Retrofit",
    "Machine Commissioning",
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}
      <section className="border-b border-slate-800 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-orange-400">
            Machine Retrofit
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Stretch Film Extrusion Line
            <span className="block text-orange-500">
              Retrofit & Modernization
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-400 sm:text-xl">
            Electrical and automation modernization of an existing stretch
            film extrusion line to improve production stability and
            operational reliability.
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
              Modernizing an Existing Stretch Film Production Line
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              The project focused on improving the electrical and automation
              infrastructure of an existing stretch film extrusion line.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Aging electrical components, pressure measurement systems and
              cooling equipment were reviewed and improved as part of the
              retrofit process.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              The existing mechanical structure was maintained while the
              electrical and control systems were modernized.
            </p>

          </div>


          {/* PROJECT INFO */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">

            <p className="text-xs uppercase tracking-[3px] text-slate-500">
              Project Type
            </p>

            <p className="mt-2 font-semibold text-orange-400">
              Machine Retrofit
            </p>

            <div className="my-6 h-px bg-slate-800" />

            <p className="text-xs uppercase tracking-[3px] text-slate-500">
              Main Systems
            </p>

            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Electrical System</li>
              <li>• Electrical Cabinet</li>
              <li>• Pressure Sensors</li>
              <li>• Cooling System</li>
              <li>• Drive Systems</li>
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
            Aging Electrical & Process Systems
          </h2>

          <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-400">
            The existing production line contained aging electrical equipment
            and process-control components that affected production
            reliability and maintenance.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
            Pressure measurement, cooling and electrical control systems
            required inspection, replacement and optimization to improve
            overall machine operation.
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
            Electrical & Automation Modernization
          </h2>

          <div className="mt-8 max-w-4xl space-y-6 text-lg leading-8 text-slate-400">

            <p>
              The electrical system was reviewed and modernized to improve
              machine reliability and simplify future maintenance.
            </p>

            <p>
              Electrical cabinet components were inspected and revised as
              required during the retrofit.
            </p>

            <p>
              Pressure sensors and related process-control components were
              replaced or optimized to provide more reliable process
              information.
            </p>

            <p>
              Cooling system components were reviewed and improved as part of
              the overall machine modernization.
            </p>

            <p>
              Drive and machine operating parameters were optimized to improve
              production stability.
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
            Retrofit & Automation Engineering
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
            Improved Production Stability
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-400">
            The retrofit improved the electrical and process-control
            infrastructure of the stretch film extrusion line while
            maintaining the existing mechanical structure.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
            The modernization provided improved operational reliability,
            easier maintenance and more stable machine operation.
          </p>

        </div>
      </section>


      {/* PROJECT GALLERY */}
      <section className="border-y border-slate-800 bg-slate-900/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
            Project Gallery
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Before & After Retrofit
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Selected images showing the condition of the machine before the
            retrofit and the result after electrical and automation
            modernization.
          </p>


          {/* BEFORE / AFTER COMPARISON */}
          <div className="mt-12">

            <div className="mb-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-800" />

              <h3 className="text-sm font-bold uppercase tracking-[3px] text-orange-400">
                Retrofit Comparison
              </h3>

              <div className="h-px flex-1 bg-slate-800" />
            </div>


            <div className="grid gap-6 md:grid-cols-2">

              {/* BEFORE 3 */}
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">

                <div className="border-b border-slate-800 px-6 py-4">
                  <p className="text-sm font-bold uppercase tracking-[2px] text-slate-400">
                    Before Retrofit
                  </p>
                </div>

                <Image
                  src="/projects/stretch film extrusion line/before3.jpeg"
                  alt="Stretch film extrusion line before retrofit"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />

              </div>


              {/* AFTER 3 */}
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">

                <div className="border-b border-slate-800 px-6 py-4">
                  <p className="text-sm font-bold uppercase tracking-[2px] text-orange-400">
                    After Retrofit
                  </p>
                </div>

                <Image
                  src="/projects/stretch film extrusion line/after3.jpeg"
                  alt="Stretch film extrusion line after retrofit"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />

              </div>

            </div>

          </div>


          {/* AFTER GALLERY */}
          <div className="mt-16">

            <div className="mb-8">

              <p className="text-sm font-bold uppercase tracking-[3px] text-orange-400">
                After Retrofit
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Modernized Machine & Electrical System
              </h3>

            </div>


            <div className="grid gap-6 md:grid-cols-2">

              {/* AFTER 1 */}
              <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">

                <Image
                  src="/projects/stretch film extrusion line/after1.jpeg"
                  alt="Stretch film extrusion line retrofit after modernization"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>


              {/* AFTER 2 */}
              <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">

                <Image
                  src="/projects/stretch film extrusion line/after2.jpeg"
                  alt="Stretch film extrusion line electrical modernization"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* TECHNOLOGIES */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
            Technologies
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Control & Retrofit Technologies
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


      {/* CTA */}
      <section className="bg-orange-500 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-3xl font-bold sm:text-5xl">
            Have an Aging Production Line?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100">
            Tell us about your machine, electrical system or retrofit
            requirement. We can evaluate the existing equipment and develop
            a suitable modernization approach.
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