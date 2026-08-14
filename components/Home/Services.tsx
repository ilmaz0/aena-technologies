
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: "⚙️",
      title: "Industrial Machine Retrofit",
      slug: "machine-retrofit",
      description:
        "Modernize existing industrial machinery and production lines with PLC upgrades, electrical systems, drives, sensors and modern automation technologies. Machine retrofit solutions extend equipment lifetime and reduce the cost of new machinery.",
    },
    {
      icon: "🤖",
      title: "PLC Programming",
      slug: "plc-programming",
      description:
        "PLC software development, modification, troubleshooting and modernization for Siemens, Mitsubishi and other industrial automation systems.",
    },
    {
      icon: "🖥️",
      title: "SCADA & HMI",
      slug: "scada-hmi",
      description:
        "Industrial SCADA and HMI development for real-time machine monitoring, production data collection, alarms, reporting and operator control.",
    },
    {
      icon: "⚡",
      title: "Electrical Engineering",
      slug: "electrical-engineering",
      description:
        "Industrial electrical engineering including control panel design, electrical cabinet modernization, power distribution, machine wiring and automation system integration.",
    },
    {
      icon: "🎯",
      title: "Servo & Motion Control",
      slug: "servo-motion-control",
      description:
        "Servo motor, drive and motion control solutions for high-precision machinery, speed synchronization, positioning and automated production systems.",
    },
    {
      icon: "🏭",
      title: "Industrial Automation",
      slug: "industrial-automation",
      description:
        "Complete industrial automation solutions for plastic, packaging, recycling, film production and manufacturing machinery, from system design to commissioning.",
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-10">

        {/* SECTION HEADER */}

        <div className="text-center">

          <span className="font-semibold uppercase tracking-[3px] text-orange-400">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Industrial Automation & Machine Retrofit Services
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            AENA Technologies provides industrial automation, machine
            retrofit and modernization services for machinery and
            production lines. We combine PLC programming, electrical
            engineering, drive systems, motion control and commissioning
            to improve machine performance and reduce downtime.
          </p>

        </div>


        {/* SERVICE CARDS */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (

            <Link
              key={service.title}
              href={`/services/${service.slug}`}
              className="group block"
            >

              <article
                className="
                  h-full
                  rounded-2xl
                  border
                  border-slate-800
                  bg-slate-900
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-orange-500
                  hover:shadow-xl
                  hover:shadow-orange-500/10
                "
              >

                {/* ICON */}

                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-orange-500/20
                    bg-orange-500/10
                    text-5xl
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  {service.icon}
                </div>


                {/* TITLE */}

                <h3 className="mt-6 text-2xl font-bold transition-colors group-hover:text-orange-400">
                  {service.title}
                </h3>


                {/* DESCRIPTION */}

                <p className="mt-4 leading-8 text-slate-400">
                  {service.description}
                </p>


                {/* LINK */}

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-sm uppercase tracking-[2px] text-orange-400">
                    Explore Service
                  </span>

                  <span
                    className="
                      text-xl
                      text-orange-400
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                    "
                  >
                    →
                  </span>

                </div>

              </article>

            </Link>

          ))}

        </div>


        {/* ALL SERVICES */}

        <div className="mt-14 text-center">

          <Link
            href="/services"
            className="
              inline-flex
              items-center
              gap-3
              rounded-xl
              border
              border-orange-500
              px-7
              py-4
              font-semibold
              text-orange-400
              transition
              hover:bg-orange-500
              hover:text-white
            "
          >
            View All Services
            <span className="text-xl">→</span>
          </Link>

        </div>

      </div>
    </section>
  );
}

