import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial Automation & Machine Retrofit Services",

  description:
    "AENA Technologies provides industrial automation, machine retrofit, machine modernization, PLC programming, electrical engineering, SCADA, drive systems, servo motion control, commissioning and industrial troubleshooting services.",

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title:
      "Industrial Automation & Machine Retrofit Services | AENA Technologies",

    description:
      "Explore AENA Technologies industrial engineering services including machine retrofit, PLC programming, electrical engineering, drives, servo motion control, SCADA and commissioning.",

    url: "https://www.aenatechnologies.com/services",

    siteName: "AENA Technologies",

    type: "website",
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "Industrial Machine Retrofit",
      slug: "machine-retrofit",
      description:
        "Modernize existing industrial machinery with new PLC systems, HMIs, drives, sensors and electrical control systems while preserving the existing mechanical structure.",
    },
    {
      title: "Industrial Automation",
      slug: "industrial-automation",
      description:
        "Industrial automation solutions for production machinery, manufacturing lines and process equipment, including control systems, sensors, drives and machine integration.",
    },
    {
      title: "PLC Programming",
      slug: "plc-programming",
      description:
        "PLC software development, modification, migration and troubleshooting for Siemens, Mitsubishi and other industrial control platforms.",
    },
    {
      title: "Electrical Engineering",
      slug: "electrical-engineering",
      description:
        "Industrial electrical engineering including control panel design, rewiring, electrical modernization, documentation and machine control systems.",
    },
    {
      title: "SCADA & HMI",
      slug: "scada-hmi",
      description:
        "Industrial HMI and SCADA systems for machine monitoring, production visualization, alarms, data collection and operator control.",
    },
    {
      title: "Servo & Motion Control",
      slug: "servo-motion-control",
      description:
        "Servo and motion control solutions for positioning, speed control, synchronization and high-precision industrial machine applications.",
    },
    {
      title: "Drive Systems",
      slug: "drive-systems",
      description:
        "Industrial drive installation, parameter optimization, troubleshooting and modernization for AC drives and machine motion systems.",
    },
    {
      title: "Machine Commissioning",
      slug: "commissioning",
      description:
        "Machine startup, testing, parameter optimization, commissioning and production support for new and modernized industrial equipment.",
    },
    {
      title: "Industrial Troubleshooting",
      slug: "industrial-troubleshooting",
      description:
        "Electrical, automation and control-system troubleshooting to identify production problems, reduce downtime and restore machine performance.",
    },
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}

      <section className="border-b border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            AENA Technologies Services
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-extrabold leading-tight sm:text-6xl">
            Industrial Automation & Machine Retrofit Services
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-8 text-slate-400">
            AENA Technologies provides industrial automation, machine
            retrofit, machine modernization, PLC programming, electrical
            engineering and motion control services for manufacturers and
            production facilities.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-500">
            We help manufacturers modernize existing machinery, improve
            production reliability and extend machine operating life without
            unnecessarily replacing complete production equipment.
          </p>

        </div>
      </section>


      {/* SERVICES */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="mb-16 text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Engineering Capabilities
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Industrial Engineering Services
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              From machine retrofit and PLC programming to electrical
              engineering and commissioning, we provide practical
              engineering solutions for industrial machinery.
            </p>

          </div>


          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (

              <article
                key={service.title}
                className="group rounded-2xl border border-slate-700 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/10"
              >

                <div className="mb-6 h-1 w-12 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-20" />

                <h2 className="text-2xl font-bold">
                  {service.title}
                </h2>

                <p className="mt-5 leading-8 text-slate-400">
                  {service.description}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-8 inline-block font-semibold text-orange-400 transition hover:text-orange-300"
                >
                  Explore Service →
                </Link>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* WHY RETROFIT */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-8 lg:grid-cols-2">

          <div>

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Machine Modernization
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Why Modernize Existing Industrial Machinery?
            </h2>

          </div>

          <div className="space-y-6 leading-8 text-slate-400">

            <p>
              Replacing an entire machine can require significant capital
              investment and production downtime. Machine retrofit provides
              an alternative by replacing obsolete automation, electrical
              and control components while retaining usable mechanical
              systems.
            </p>

            <p>
              AENA Technologies evaluates the existing machine, identifies
              obsolete or unreliable components and develops a modernization
              strategy based on the machine's production requirements.
            </p>

            <p>
              Retrofit projects can include PLC and HMI replacement,
              electrical panel modernization, drive replacement, sensor
              upgrades, servo systems, software redevelopment and machine
              commissioning.
            </p>

          </div>

        </div>

      </section>


      {/* SERVICE REGION */}

      <section className="py-20">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Service Region
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Industrial Engineering Support in Turkey & International Markets
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            AENA Technologies provides engineering and machine modernization
            services in Turkey and supports industrial projects across
            Europe, the Middle East and Central Asia.
          </p>

        </div>

      </section>


      {/* CTA */}

      <section className="bg-orange-500 py-20">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Need to Modernize an Industrial Machine?
          </h2>

          <p className="mt-6 text-xl text-orange-100">
            Contact AENA Technologies to discuss your machine retrofit,
            automation or electrical engineering project.
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