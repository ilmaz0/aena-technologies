export default function ServicesPage() {
  const services = [
    {
      title: "Machine Retrofit",
      description:
        "Upgrade obsolete industrial machines with modern automation systems while preserving the existing mechanical structure.",
    },
    {
      title: "PLC Programming",
      description:
        "Development, migration and optimization of Siemens, Mitsubishi and other PLC systems.",
    },
    {
      title: "Electrical Engineering",
      description:
        "Electrical panel design, rewiring, documentation and industrial control systems.",
    },
    {
      title: "SCADA & HMI",
      description:
        "Production monitoring, operator interfaces and process visualization.",
    },
    {
      title: "Servo Motion Control",
      description:
        "High-precision servo systems for synchronization, positioning and speed control.",
    },
    {
      title: "Commissioning",
      description:
        "Machine startup, testing, optimization and production support.",
    },
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}

      <section className="border-b border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            Our Services
          </p>

          <h1 className="mt-4 text-6xl font-extrabold">
            Industrial Engineering Services
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-400">
            AENA Technologies provides complete industrial automation,
            machine retrofit and electrical engineering solutions
            designed to improve productivity and extend machine life.
          </p>

        </div>
      </section>

      {/* SERVICES */}

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-8 px-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (

            <div
              key={service.title}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-orange-500"
            >

              <h2 className="text-2xl font-bold">
                {service.title}
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-orange-500 py-20">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="text-5xl font-bold text-white">
            Ready to Upgrade Your Machine?
          </h2>

          <p className="mt-6 text-xl text-orange-100">
            Contact AENA Technologies for industrial automation,
            retrofit and modernization solutions.
          </p>

          <button className="mt-10 rounded-xl bg-white px-8 py-4 font-bold text-orange-500 hover:bg-slate-100">
            Request a Quote
          </button>

        </div>

      </section>

    </main>
  );
}