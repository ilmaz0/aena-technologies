import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const brands = [
    "siemens",
    "abb",
    "mitsubishi",
    "beckhoff",
    "schneider",
    "omron",
    "yaskawa",
    "festo",
    "smc",
    "ifm",
    "lenze",
    "leuze",
    "delta",
    "rittal",
  ];

  const technicalServices = [
    "PLC & HMI",
    "Drive Systems",
    "Servo & Motion",
    "Electrical Panels",
    "SCADA",
    "Commissioning",
  ];

  const processItems = ["PLC", "HMI", "DRIVES", "SERVO"];

  return (
    <section className="border-b border-slate-800 bg-[#020617]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-18">

        {/* HERO MAIN */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT SIDE */}
          <div className="min-w-0">

            {/* EYEBROW */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-500" />

              <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-400 sm:text-sm sm:tracking-[4px]">
                Industrial Automation & Retrofit
              </p>
            </div>

            {/* MAIN TITLE */}
            <h1 className="text-[clamp(2.7rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-tight text-white">
              Industrial
              <br />
              Machine
              <br />
              <span className="text-orange-500">
                Retrofit
              </span>
            </h1>

            <h2 className="mt-5 text-[clamp(1.4rem,3vw,2.25rem)] font-bold leading-tight text-slate-200">
              Automation & Electrical Engineering
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Modernize your existing machinery without replacing the entire
              production system. AENA Technologies provides industrial machine
              retrofit, PLC & HMI programming, electrical engineering, drive
              systems, servo motion control and commissioning.
            </p>

            {/* TECHNICAL SERVICES */}
            <div className="mt-7 flex flex-wrap gap-2">
              {technicalServices.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-slate-700
                    bg-slate-900/80
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-slate-300
                    transition
                    duration-300
                    hover:border-orange-500/50
                    hover:text-white
                    sm:text-sm
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="
                  rounded-xl
                  bg-orange-500
                  px-6
                  py-4
                  text-center
                  text-sm
                  font-bold
                  text-white
                  transition
                  duration-300
                  hover:bg-orange-600
                  hover:shadow-lg
                  hover:shadow-orange-500/20
                  sm:px-8
                "
              >
                Request a Retrofit Evaluation →
              </Link>

              <Link
                href="/projects"
                className="
                  rounded-xl
                  border
                  border-slate-700
                  bg-slate-900/50
                  px-6
                  py-4
                  text-center
                  text-sm
                  font-bold
                  text-white
                  transition
                  duration-300
                  hover:border-orange-500
                  hover:bg-slate-900
                  sm:px-8
                "
              >
                View Our Projects
              </Link>

            </div>

            {/* SERVICE REGION */}
            <div className="mt-7">
              <p className="text-xs uppercase tracking-[3px] text-slate-500">
                Serving Manufacturers Across
              </p>

              <p className="mt-2 text-sm font-semibold text-orange-400 sm:text-base">
                Turkey • Europe • Middle East • Central Asia
              </p>
            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="relative min-w-0">

            {/* MAIN VISUAL PANEL */}
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-700
                bg-gradient-to-br
                from-slate-900
                via-slate-950
                to-[#020617]
                p-6
                shadow-2xl
                shadow-black/30
                sm:p-8
              "
            >

              {/* Decorative Grid */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.08]
                  [background-image:linear-gradient(rgba(148,163,184,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.4)_1px,transparent_1px)]
                  [background-size:32px_32px]
                "
              />

              <div className="relative">

                {/* PANEL HEADER */}
                <div className="flex items-center justify-between">

                  <span className="text-xs font-semibold uppercase tracking-[3px] text-orange-400">
                    AENA Retrofit System
                  </span>

                  <span className="flex items-center gap-2 text-xs text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    ENGINEERING
                  </span>

                </div>


                {/* CENTRAL MACHINE */}
                <div className="mt-7 rounded-2xl border border-slate-700 bg-slate-950/80 p-5">

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex
                        h-16
                        w-16
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-orange-500/30
                        bg-orange-500/10
                        text-3xl
                      "
                    >
                      ⚙️
                    </div>

                    <div>
                      <p className="text-lg font-bold text-white">
                        Machine Modernization
                      </p>

                      <p className="mt-1 text-sm text-slate-400">
                        Existing machinery → modern automation
                      </p>
                    </div>

                  </div>


                  {/* PROCESS FLOW */}
                  <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">

                    {processItems.map((item, index) => (
                      <div
                        key={item}
                        className="
                          rounded-xl
                          border
                          border-slate-700
                          bg-slate-900
                          p-3
                          text-center
                          transition
                          duration-300
                          hover:border-orange-500/50
                        "
                      >
                        <div className="text-xs font-bold text-orange-400">
                          0{index + 1}
                        </div>

                        <div className="mt-1 text-sm font-semibold text-slate-200">
                          {item}
                        </div>
                      </div>
                    ))}

                  </div>

                </div>


                {/* BENEFITS */}
                <div className="mt-5 grid gap-3 sm:grid-cols-3">

                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Focus
                    </p>

                    <p className="mt-2 text-sm font-bold text-white">
                      Machine Retrofit
                    </p>
                  </div>


                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Goal
                    </p>

                    <p className="mt-2 text-sm font-bold text-white">
                      Reduce Downtime
                    </p>
                  </div>


                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Result
                    </p>

                    <p className="mt-2 text-sm font-bold text-white">
                      Extend Machine Life
                    </p>
                  </div>

                </div>


                {/* MESSAGE */}
                <div className="mt-5 rounded-xl border border-orange-500/20 bg-orange-500/5 p-4">

                  <p className="text-sm leading-6 text-slate-300">
                    Upgrade your existing production machinery with modern
                    automation technology instead of investing in completely
                    new equipment.
                  </p>

                </div>

              </div>
            </div>

          </div>

        </div>


        {/* TECHNOLOGIES */}
        <div className="mt-14 border-t border-slate-800 pt-9 sm:mt-16 sm:pt-10">

          <div>
            <p className="text-xs uppercase tracking-[3px] text-slate-500">
              Technologies We Work With
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Industrial automation platforms and control technologies
            </p>

            {/* SEO TEXT */}
            <p className="mt-2 max-w-4xl text-xs leading-6 text-slate-500">
              Siemens, ABB, Mitsubishi Electric, Beckhoff, Schneider Electric,
              Omron, Yaskawa, Festo, SMC, IFM, Lenze, Leuze, Delta and Rittal
              industrial automation technologies.
            </p>
          </div>


          {/* BRAND GRID */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">

            {brands.map((brand) => (
              <div
                key={brand}
                className="
                  flex
                  h-20
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-800
                  bg-slate-900/60
                  px-4
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-500/60
                  hover:bg-slate-800
                "
              >
                <Image
                  src={`/logos/${brand}.png`}
                  alt={`${brand} industrial automation`}
                  width={220}
                  height={80}
                  className="
                    max-h-10
                    max-w-[130px]
                    object-contain
                  "
                />
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}