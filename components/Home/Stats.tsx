export default function Stats() {
  const stats = [
    {
      number: "10+",
      title: "Years Experience",
    },
    {
      number: "50+",
      title: "Completed Projects",
    },
    {
      number: "24/7",
      title: "Technical Support",
    },
    {
      number: "10+",
      title: "Industrial Sectors",
    },
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-8 md:grid-cols-4">

        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center transition hover:border-orange-500"
          >
            <h2 className="text-5xl font-black text-orange-500">
              {item.number}
            </h2>

            <p className="mt-4 text-slate-300">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}