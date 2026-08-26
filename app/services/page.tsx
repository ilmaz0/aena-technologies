import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.aenatechnologies.com";
const PAGE_URL = `${SITE_URL}/services`;

export const metadata: Metadata = {
  title:
    "Industrial Automation and Machine Retrofit Services | AENA Technologies",

  description:
    "Industrial automation and machine retrofit services including PLC programming, electrical engineering, drive systems, servo motion control, SCADA, HMI, commissioning and industrial troubleshooting by AENA Technologies.",

  alternates: {
    canonical: PAGE_URL,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Industrial Automation and Machine Retrofit Services | AENA Technologies",

    description:
      "Industrial automation and machine retrofit services including PLC programming, electrical engineering, drive systems, servo motion control, SCADA, HMI, commissioning and industrial troubleshooting by AENA Technologies.",

    url: PAGE_URL,

    siteName: "AENA Technologies",

    type: "website",

    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Industrial Automation and Machine Retrofit Services | AENA Technologies",

    description:
      "Industrial automation and machine retrofit services including PLC programming, electrical engineering, drive systems, servo motion control, SCADA, HMI, commissioning and industrial troubleshooting by AENA Technologies.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "Industrial Machine Retrofit",
      slug: "machine-retrofit",
      description:
        "Modernize existing industrial machinery with PLC, HMI, drives, sensors, electrical systems and industrial communication while preserving usable machine infrastructure.",
    },
    {
      title: "Industrial Automation",
      slug: "industrial-automation",
      description:
        "Industrial automation solutions for production machinery, manufacturing lines and process equipment, including PLC control, sensors, drives, communication and machine integration.",
    },
    {
      title: "PLC Programming",
      slug: "plc-programming",
      description:
        "PLC software development, modification, troubleshooting, migration and modernization for Siemens, Mitsubishi and other industrial control platforms.",
    },
    {
      title: "Electrical Engineering",
      slug: "electrical-engineering",
      description:
        "Industrial electrical engineering including control panel design, machine wiring, electrical modernization, documentation and automation system integration.",
    },
    {
      title: "SCADA & HMI",
      slug: "scada-hmi",
      description:
        "Industrial HMI and SCADA systems for machine monitoring, production visualization, alarms, data collection, reporting and operator control.",
    },
    {
      title: "Servo & Motion Control",
      slug: "servo-motion-control",
      description:
        "Servo and motion control solutions for positioning, synchronization, speed control and high-precision industrial machine applications.",
    },
    {
      title: "Drive Systems",
      slug: "drive-systems",
      description:
        "Industrial drive installation, parameter optimization, troubleshooting, replacement and modernization for AC drives and machine motion systems.",
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
        "Electrical, automation, PLC, drive and control-system troubleshooting to identify machine faults, reduce downtime and restore production performance.",
    },
  ];

  const retrofitServices = [
    {
      title: "PLC & HMI Modernization",
      text:
        "Replace obsolete PLC and HMI hardware, modify control software and integrate modern operator interfaces into existing machinery.",
      href: "/services/plc-programming",
    },
    {
      title: "Drive & Motion Modernization",
      text:
        "Replace obsolete drives, optimize parameters and integrate AC drives or servo systems with existing machine control architecture.",
      href: "/services/drive-systems",
    },
    {
      title: "Electrical System Modernization",
      text:
        "Revise electrical panels, machine wiring, control circuits and automation infrastructure while retaining usable equipment where practical.",
      href: "/services/electrical-engineering",
    },
    {
      title: "Industrial Communication",
      text:
        "Integrate PLCs, drives, HMIs, remote I/O and other equipment using industrial communication networks and suitable gateway solutions.",
      href: "/services/industrial-automation",
    },
  ];

  const projects = [
    {
      title: "Stretch Transfer Machine Retrofit",
      category: "Machine Retrofit",
      href: "/projects/stretch-transfer-machine",
      text:
        "Electrical redesign, PLC redevelopment and machine modernization.",
    },
    {
      title: "PET Flake Washing System Automation",
      category: "Recycling Automation",
      href: "/projects/flake-washing-line",
      text:
        "Process automation, chemical dosing, level control and slip-ring engineering.",
    },
    {
      title: "Cable Pay-Off Drive Optimization",
      category: "Drive Engineering",
      href: "/projects/cable-pay-off-drive",
      text:
        "Siemens drive parameter optimization and stable cable unwinding control.",
    },
    {
      title: "Stretch Film Production Line Upgrade",
      category: "Production Line Modernization",
      href: "/projects/stretch-film-extrusion-line",
      text:
        "Electrical cabinet renovation, sensor integration and production reliability improvements.",
    },
    {
      title: "Plastic Bag Machine Modernization",
      category: "Machine Modernization",
      href: "/projects/hemigstone-bag-cutting-machine",
      text:
        "Drive, servo, sensor and electrical system modernization.",
    },
    {
      title: "Colines Gauge Control System",
      category: "Precision Engineering",
      href: "/projects/colines-thickness-gauge",
      text:
        "Thickness measurement system restoration and automation preparation.",
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
            Industrial Automation and Machine Retrofit Services
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-8 text-slate-400">
            AENA Technologies provides industrial automation, machine
            retrofit, machine modernization, PLC programming, electrical
            engineering, drive systems, motion control and commissioning
            services for industrial machinery and production lines.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-500">
            We help manufacturers modernize existing machinery, replace
            obsolete automation components, troubleshoot production
            problems and improve machine reliability without unnecessarily
            replacing complete production equipment.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/services/machine-retrofit"
              className="rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Explore Machine Retrofit
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 text-sm font-bold text-slate-200 transition hover:border-orange-500 hover:text-orange-400"
            >
              Request Engineering Support
            </Link>

          </div>

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
              engineering, drive systems and commissioning, AENA Technologies
              provides integrated engineering services for industrial
              machinery.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (

              <article
                key={service.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-700
                  bg-slate-900
                  p-8
                  transition
                  duration-300
                  hover:-translate-y-2
                  hover:border-orange-500
                  hover:shadow-2xl
                  hover:shadow-orange-500/10
                "
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
                  className="mt-8 inline-flex items-center font-semibold text-orange-400 transition hover:text-orange-300"
                >
                  Explore Service
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* RETROFIT ECOSYSTEM */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="max-w-4xl">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Integrated Retrofit Engineering
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Machine Retrofit Combines Multiple Engineering Disciplines
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              A machine retrofit is rarely limited to replacing a single
              component. Depending on the machine architecture, modernization
              can involve PLC programming, electrical engineering, drives,
              servo systems, sensors, HMI, SCADA, industrial communication
              and commissioning.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {retrofitServices.map((item) => (

              <Link
                key={item.title}
                href={item.href}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-800
                  bg-slate-900
                  p-7
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-500
                "
              >

                <div className="mb-5 h-1 w-10 rounded-full bg-orange-500 transition-all group-hover:w-16" />

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.text}
                </p>

                <span className="mt-5 inline-block text-sm font-semibold text-orange-400">
                  Learn More →
                </span>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* WHY RETROFIT */}

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-8 lg:grid-cols-2">

          <div>

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Machine Modernization
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Why Modernize Existing Industrial Machinery?
            </h2>

          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-400">

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
              strategy based on the machine&apos;s production requirements.
            </p>

            <p>
              Retrofit projects can include PLC and HMI replacement,
              electrical panel modernization, drive replacement, sensor
              upgrades, servo systems, software redevelopment, communication
              integration and machine commissioning.
            </p>

            <Link
              href="/services/machine-retrofit"
              className="inline-flex font-semibold text-orange-400 hover:text-orange-300"
            >
              Learn more about machine retrofit →
            </Link>

          </div>

        </div>

      </section>


      {/* ENGINEERING PROJECTS */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Engineering Case Studies
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Selected Machine Retrofit & Automation Projects
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Explore examples of machine modernization, automation,
              electrical engineering and drive optimization projects.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project) => (

              <Link
                key={project.title}
                href={project.href}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-800
                  bg-slate-900
                  p-7
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-500
                "
              >

                <p className="text-xs font-semibold uppercase tracking-[2px] text-orange-400">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.text}
                </p>

                <span className="mt-5 inline-block text-sm font-semibold text-orange-400">
                  View Project →
                </span>

              </Link>

            ))}

          </div>

          <div className="mt-10 text-center">

            <Link
              href="/projects"
              className="
                inline-flex
                rounded-xl
                border
                border-slate-700
                bg-slate-950
                px-7
                py-3.5
                text-sm
                font-bold
                text-slate-200
                transition
                hover:border-orange-500
                hover:text-orange-400
              "
            >
              View All Engineering Projects
            </Link>

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

          <p className="mt-4 text-base leading-7 text-slate-500">
            Services can be provided for industrial machinery, production
            lines, machine builders and manufacturing facilities depending
            on project requirements.
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
            automation, PLC, drive or electrical engineering project.
          </p>

          <Link
            href="/contact"
            className="
              mt-10
              inline-block
              rounded-xl
              bg-white
              px-8
              py-4
              font-bold
              text-orange-500
              transition
              hover:bg-slate-100
            "
          >
            Request a Project Evaluation
          </Link>

        </div>

      </section>

    </main>
  );
}