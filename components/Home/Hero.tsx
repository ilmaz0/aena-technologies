import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const brands = [
    "siemens",
    "abb",
    "rittal",
    "mitsubishi",
    "beckhoff",
    "omron",
    "yaskawa",
    "schneider",
    "festo",
    "smc",
    "ifm",
    "lenze",
    "leuze",
    "delta",
  ];

  return (
    <section className="w-full overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        {/* HERO - DESKTOP STYLE ON ALL SCREENS */}
        <div className="grid grid-cols-2 items-start gap-6 sm:gap-10 lg:gap-16">

          {/* LEFT */}
          <div className="flex min-w-0 flex-col justify-center">

            <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-white">
              Machine
              <br />
              Retrofit
              <br />
              <span className="text-orange-500">
                Automation &
              </span>
              <br />
              Electrical Engineering
            </h1>

            <p className="mt-6 max-w-xl text-[clamp(0.85rem,1.8vw,1.25rem)] leading-7 text-slate-300 sm:mt-8 sm:leading-8">
              We modernize industrial machines through PLC software,
              electrical engineering, drive systems and commissioning.
              Our retrofit solutions increase productivity without the
              cost of purchasing new machinery.
            </p>

            {/* TECHNOLOGIES */}
            <div className="mt-10 sm:mt-14">

              <p className="mb-6 text-[10px] uppercase tracking-[3px] text-slate-500 sm:text-sm sm:tracking-[5px]">
                Technologies We Work With
              </p>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {brands.map((brand) => (
                  <div
                    key={brand}
                    className="
                      flex
                      h-[58px]
                      min-w-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-slate-800
                      bg-slate-900/70
                      px-2
                      transition-all
                      duration-300
                      hover:border-orange-500/60
                      hover:bg-slate-800
                    "
                  >
                    <div className="flex h-[40px] w-full items-center justify-center">
                      <Image
                        src={`/logos/${brand}.png`}
                        alt={`${brand} automation`}
                        width={300}
                        height={100}
                        className="
                          max-h-[36px]
                          max-w-[105px]
                          object-contain
                        "
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="min-w-0">

            <h3 className="text-[clamp(1.25rem,3vw,1.875rem)] font-bold leading-tight text-white">
              Why AENA Technologies?
            </h3>

            <p className="mt-4 text-[clamp(0.8rem,1.6vw,1rem)] leading-6 text-slate-400 sm:mt-5 sm:leading-8">
              We help manufacturers extend the life of existing machinery
              through automation, electrical engineering and retrofit
              solutions.
            </p>

            <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">

              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-base text-orange-400 sm:text-xl">
                  ✓
                </span>
                <span className="text-sm sm:text-base">
                  Industrial Machine Retrofit
                </span>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-base text-orange-400 sm:text-xl">
                  ✓
                </span>
                <span className="text-sm sm:text-base">
                  PLC & HMI Software
                </span>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-base text-orange-400 sm:text-xl">
                  ✓
                </span>
                <span className="text-sm sm:text-base">
                  Electrical Panel Design
                </span>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-base text-orange-400 sm:text-xl">
                  ✓
                </span>
                <span className="text-sm sm:text-base">
                  Servo & Motion Systems
                </span>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-base text-orange-400 sm:text-xl">
                  ✓
                </span>
                <span className="text-sm sm:text-base">
                  Commissioning & Startup
                </span>
              </div>

            </div>

            {/* SERVICE REGION */}
            <div className="mt-7 rounded-xl border border-slate-700 bg-slate-950 p-4 sm:mt-10 sm:p-5">

              <p className="text-[10px] uppercase tracking-[2px] text-slate-500 sm:text-sm">
                Service Region
              </p>

              <p className="mt-2 text-xs font-semibold leading-5 text-orange-400 sm:text-sm">
                Europe • Middle East • Central Asia
              </p>

            </div>

            {/* CTA */}
            <div className="mt-6 sm:mt-8">

              <Link
                href="/contact"
                className="
                  block
                  w-full
                  rounded-xl
                  bg-orange-500
                  px-3
                  py-3
                  text-center
                  text-xs
                  font-semibold
                  leading-5
                  transition
                  hover:bg-orange-600
                  sm:px-4
                  sm:py-4
                  sm:text-sm
                "
              >
                Request Your Project Evaluation
              </Link>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}