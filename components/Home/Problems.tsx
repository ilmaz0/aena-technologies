export default function Problems() {
  const problems = [
    {
      problem: "Production speed is too low",
      solution: "Machine modernization and PLC optimization",
    },
    {
      problem: "Old PLC is no longer supported",
      solution: "Migration to modern Siemens PLC platforms",
    },
    {
      problem: "Frequent machine breakdowns",
      solution: "Electrical renovation and preventive improvements",
    },
    {
      problem: "Machine accuracy is unstable",
      solution: "Servo motion and sensor upgrades",
    },
    {
      problem: "Spare parts are obsolete",
      solution: "Complete retrofit using modern components",
    },
    {
      problem: "Energy consumption is too high",
      solution: "Drive optimization and efficient control systems",
    },
  ];

  return (
    <section className="bg-slate-950 py-28 text-white">
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="uppercase tracking-[3px] text-orange-400">
            Challenges
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Problems We Solve
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            We help manufacturers eliminate downtime,
            improve productivity and extend machine life.
          </p>

        </div>

        <div className="mt-20 space-y-6">

          {problems.map((item) => (

            <div
              key={item.problem}
              className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-900 p-8 hover:border-orange-500 transition"
            >

              <div>

                <h3 className="text-2xl font-bold">
                  {item.problem}
                </h3>

              </div>

              <div className="text-orange-500 text-3xl">
                →
              </div>

              <div className="text-right">

                <p className="font-semibold text-orange-400">
                  {item.solution}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}