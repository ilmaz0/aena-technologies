import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Athletic Bag Cutting Machine Retrofit",
  description:
    "Electrical and automation retrofit of an existing athletic bag cutting machine by AENA Technologies.",
};

export default function HemigstoneProjectPage() {
  const scope = [
    "Electrical system revision",
    "Control system modernization",
    "Servo and drive integration",
    "Sensor replacement",
    "HMI and operator interface",
    "Machine commissioning",
  ];

  const technologies = [
    "Yaskawa",
    "Servo Drive",
    "Industrial Sensors",
    "HMI",
    "Electrical Control",
    "Machine Automation",
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
            Athletic Bag Cutting Machine
            <span className="block text-orange-500">
              Retrofit & Modernization
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-400 sm:text-xl">
            Electrical, electronic and control-system modernization
            for an existing industrial bag cutting machine.
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
              Modernizing an Existing Production Machine
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              The project focused on improving the electrical and
              automation infrastructure of an existing athletic bag
              cutting machine while maintaining its existing mechanical
              structure.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              The retrofit included control-system improvements,
              drive integration, sensor replacement and machine
              commissioning.
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
              <li>• Electrical Control</li>
              <li>• Servo / Drive Systems</li>
              <li>• Sensors</li>
              <li>• HMI / Operator Interface</li>
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
            Existing Control & Electrical System
          </h2>

          <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-400">
            The machine required electrical and automation improvements
            to achieve more reliable operation and easier maintenance.
            The retrofit approach allowed the existing mechanical
            structure to remain in service while upgrading the control
            infrastructure.
          </p>

        </div>
      </section>


      {/* SCOPE OF WORK */}
      <section className="py-20 sm:py-24">
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


      {/* TECHNOLOGIES */}
      <section className="border-y border-slate-800 bg-slate-900/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
            Technologies
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Control & Drive Technologies
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
      {/* PROJECT GALLERY */}
<section className="py-16 sm:py-20">
  <div className="mx-auto max-w-6xl px-6 lg:px-8">

    <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
      Project Gallery
    </p>

    <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
      Machine Retrofit & Automation
    </h2>

    <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
      Selected images from the electrical, automation and control
      system modernization of the machine.
    </p>

    {/* GALLERY */}
    <div className="mt-10 grid gap-6 md:grid-cols-2">

      {/* IMAGE 1 */}
      <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">

        <div className="flex h-[240px] items-center justify-center bg-slate-950 p-4 sm:h-[280px]">

          <Image
            src="/projects/hemigstone/hemigstone1.jpg.jpeg"
            alt="Athletic bag cutting machine retrofit by AENA Technologies"
            width={900}
            height={600}
            className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
          />

        </div>

      </div>


      {/* IMAGE 2 */}
      <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">

        <div className="flex h-[240px] items-center justify-center bg-slate-950 p-4 sm:h-[280px]">

          <Image
            src="/projects/hemigstone/hemigstone2.jpg.jpeg"
            alt="Industrial machine control and electrical system retrofit"
            width={900}
            height={600}
            className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
          />

        </div>

      </div>


      {/* IMAGE 3 */}
      <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 md:col-span-2 md:mx-auto md:w-2/3">

        <div className="flex h-[280px] items-center justify-center bg-slate-950 p-4 sm:h-[340px]">

          <Image
            src="/projects/hemigstone/hemigstone3.jpg.jpeg"
            alt="Hemigstone industrial machine modernization project"
            width={1200}
            height={800}
            className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
          />

        </div>

      </div>

    </div>

  </div>
</section>

      {/* CTA */}
      <section className="bg-orange-500 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-3xl font-bold sm:text-5xl">
            Having a Similar Machine Problem?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100">
            Tell us about your machine, automation problem or retrofit
            requirement. We can evaluate the existing system and
            determine a suitable modernization approach.
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