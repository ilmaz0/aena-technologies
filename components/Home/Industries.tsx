export default function Industries() {
  const industries = [
    {
      title: "Plastic Industry",
      icon: "🏭",
      desc: "Extrusion, blown film, recycling, bag making and packaging machines.",
    },
    {
      title: "Packaging",
      icon: "📦",
      desc: "Stretch film, transfer systems and automated packaging solutions.",
    },
    {
      title: "Cable Industry",
      icon: "⚡",
      desc: "Cable pay-off systems, winding and drive synchronization.",
    },
    {
      title: "Recycling",
      icon: "♻️",
      desc: "PET washing lines, dosing systems and process automation.",
    },
    {
      title: "Machine Builders",
      icon: "⚙️",
      desc: "Electrical engineering and automation for new machine manufacturers.",
    },
    {
      title: "Industrial Plants",
      icon: "🏢",
      desc: "Maintenance, modernization and production efficiency improvements.",
    },
  ];

  return (
    <section className="bg-slate-900 py-28 text-white">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="text-orange-400 uppercase tracking-[3px] font-semibold">
            Industries
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Industries We Serve
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            We provide engineering solutions across multiple industrial sectors,
            delivering reliable automation and modernization services.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {industries.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-700 bg-slate-950 p-8 transition hover:-translate-y-2 hover:border-orange-500"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}