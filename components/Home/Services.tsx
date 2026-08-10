export default function Services() {
  const services = [
    {
      icon: "⚙️",
      title: "Industrial Machine Retrofit",
      description:
        "Modernize existing industrial machinery and production lines with PLC upgrades, electrical systems, drives, sensors and modern automation technologies. Machine retrofit solutions extend equipment lifetime and reduce the cost of new machinery.",
    },
    {
      icon: "🤖",
      title: "PLC & HMI Programming",
      description:
        "PLC and HMI software development, modification and modernization for Siemens, Rockwell Automation (Allen-Bradley), Mitsubishi and Delta automation systems.",
    },
    {
      icon: "🖥️",
      title: "SCADA Systems",
      description:
        "Industrial SCADA development for real-time machine monitoring, production data collection, alarms, reporting and visualization of manufacturing processes.",
    },
    {
      icon: "⚡",
      title: "Electrical Engineering",
      description:
        "Industrial electrical engineering including control panel design, electrical cabinet modernization, power distribution, machine wiring and automation system integration.",
    },
    {
      icon: "🎯",
      title: "Servo & Motion Control",
      description:
        "Servo motor, drive and motion control solutions for high-precision machinery, speed synchronization, positioning and automated production systems.",
    },
    {
      icon: "🏭",
      title: "Factory Automation",
      description:
        "Complete industrial automation solutions for plastic, packaging, recycling, film production and manufacturing machinery, from system design to commissioning.",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-7xl px-10">

        <div className="text-center">

          <span className="font-semibold uppercase tracking-[3px] text-orange-400">
            Our Services
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Industrial Automation & Machine Retrofit Services
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            AENA Technologies provides industrial automation, machine
            retrofit and modernization services for machinery and
            production lines. We combine PLC programming, electrical
            engineering, drive systems, motion control and commissioning
            to improve machine performance and reduce downtime.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (

            <div
              key={service.title}
              className="
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
                "
              >
                {service.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                {service.description}
              </p>

              <p className="mt-8 text-sm uppercase tracking-[2px] text-orange-400">
                Customized Solutions
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}