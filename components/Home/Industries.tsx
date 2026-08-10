export default function Industries() {
  const industries = [
    {
      title: "Plastic Machinery",
      icon: "🏭",
      desc: "Machine retrofit and industrial automation for extrusion, blown film, bag making, granule production and plastic processing machinery. Services include PLC modernization, drive replacement and electrical panel upgrades.",
    },
    {
      title: "Packaging Machinery",
      icon: "📦",
      desc: "Automation and modernization for stretch film machines, transfer systems, automatic cutting machines and packaging production lines, improving productivity and reducing downtime.",
    },
    {
      title: "Cable Manufacturing",
      icon: "⚡",
      desc: "Industrial automation solutions for cable pay-off systems, winding machines, synchronized drive systems and production line control.",
    },
    {
      title: "Recycling Machinery",
      icon: "♻️",
      desc: "Automation and machine retrofit for PET washing lines, recycling systems, dosing equipment and process control applications.",
    },
    {
      title: "Machine Builders",
      icon: "⚙️",
      desc: "Electrical engineering, PLC programming, HMI development and automation support for manufacturers building new industrial machinery.",
    },
    {
      title: "Industrial Plants",
      icon: "🏢",
      desc: "Machine modernization, electrical panel revision, automation upgrades and production efficiency improvements for existing industrial facilities.",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="text-orange-400 uppercase tracking-[3px] font-semibold">
            Industries
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Industries We Serve with Machine Retrofit & Automation
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            AENA Technologies provides industrial automation, machine retrofit
            and modernization services for plastic, packaging, recycling,
            cable manufacturing and industrial production facilities across
            Turkey, Europe, the Middle East and Central Asia.
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