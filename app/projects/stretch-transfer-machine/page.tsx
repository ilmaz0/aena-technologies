import Link from "next/link";

export const metadata = {
  title: "Stretch Transfer Machine Retrofit",
  description:
    "Electrical, PLC and mechanical modernization of an industrial stretch transfer machine by AENA Technologies.",
};

export default function StretchTransferMachineProjectPage() {
  const scope = [
    "Electrical system redesign",
    "Electrical cabinet modernization",
    "PLC system modernization",
    "PLC software development",
    "Drive system optimization",
    "Mechanical system optimization",
    "Machine commissioning",
  ];

  const technologies = [
    "PLC",
    "Industrial Automation",
    "Drive Systems",
    "Electrical Control",
    "Machine Automation",
    "Mechanical Optimization",
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
            Stretch Transfer Machine
            <span className="block text-orange-500">
              Retrofit & Modernization
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-400 sm:text-xl">
            Electrical, PLC and mechanical modernization of an existing
            industrial stretch transfer machine.
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
              Restoring an Out-of-Service Production Machine
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              The stretch transfer machine was completely out of operation
              due to an obsolete electrical control system.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              The project focused on redesigning the electrical control
              infrastructure, developing new PLC software, optimizing the
              mechanical system and bringing the machine back into production.
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
              <li>• PLC System</li>
              <li>• Drive Systems</li>
              <li>• Mechanical System</li>
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
            Obsolete Electrical Control System
          </h2>

          <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-400">
            The existing electrical control system had become obsolete,
            leaving the machine completely out of operation. Continuing
            production with the existing control infrastructure was no
            longer a reliable option.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
            Instead of replacing the complete machine, the retrofit approach
            allowed the existing machine structure to be modernized while
            restoring its production capability.
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
            Electrical, PLC & Mechanical Modernization
          </h2>

          <div className="mt-8 max-w-4xl space-y-6 text-lg leading-8 text-slate-400">

            <p>
              The electrical control system was redesigned to provide a
              modern and maintainable control infrastructure.
            </p>

            <p>
              New PLC software was developed to control the machine and
              coordinate the different machine functions.
            </p>

            <p>
              The mechanical system was also optimized as part of the
              modernization process to ensure reliable machine operation.
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
            Production Successfully Restored
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-400">
            Following the electrical, PLC and mechanical modernization,
            the machine was successfully recommissioned and returned
            to production at the customer's target operating speed.
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
            Control & Automation Technologies
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


      {/* PROJECT VIDEO */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-400">
            Project Video
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Stretch Transfer Machine Retrofit
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Video footage from the stretch transfer machine modernization
            and commissioning process.
          </p>


          {/* VIDEO */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">

            <video
              controls
              playsInline
              preload="metadata"
              className="mx-auto max-h-[650px] w-full object-contain"
            >
              <source
                src="/projects/stretch%20transfer%20machine/strech.mp4.mp4"
                type="video/mp4"
              />

              Your browser does not support the video tag.
            </video>

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