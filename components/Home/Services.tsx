export default function Services() {
  const services = [
    {
      icon: "⚙️",
      title: "Machine Retrofit",
      description:
        "Upgrade existing production lines with modern automation technologies.",
    },
    {
      icon: "🤖",
      title: "PLC Programming",
      description:
        "Professional PLC software development for Siemens, Allen Bradley and Delta.",
    },
    {
      icon: "🖥️",
      title: "SCADA Systems",
      description:
        "Real-time monitoring, reporting and industrial visualization solutions.",
    },
    {
      icon: "⚡",
      title: "Electrical Engineering",
      description:
        "Industrial control panels, power distribution and electrical design.",
    },
    {
      icon: "🎯",
      title: "Servo Motion",
      description:
        "High-precision servo control and motion synchronization systems.",
    },
    {
      icon: "🏭",
      title: "Factory Automation",
      description:
        "Complete automation solutions for plastic, packaging and manufacturing.",
    },
  ];

  return (
    <section className="bg-slate-950 py-28 text-white">

      <div className="mx-auto max-w-7xl px-10">

        <div className="text-center">

          <span className="font-semibold uppercase tracking-[3px] text-orange-400">
            Our Services
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Industrial Automation Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            From machine modernization to complete factory automation,
            we provide reliable engineering services that increase
            productivity and reduce downtime.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (

            <div
              key={service.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl"
            >

              <div className="text-5xl">
                {service.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                {service.description}
              </p>

              <button className="mt-8 font-semibold text-orange-400 hover:text-orange-300">
                Learn More →
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}