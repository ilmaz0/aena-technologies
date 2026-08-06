export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Inspection",
      text: "We inspect the machine, electrical system and production process."
    },
    {
      number: "02",
      title: "Engineering",
      text: "Electrical drawings, PLC architecture and modernization planning."
    },
    {
      number: "03",
      title: "Retrofit",
      text: "Panel rebuilding, sensors, drives, PLC and HMI integration."
    },
    {
      number: "04",
      title: "Commissioning",
      text: "Testing, optimization and production start-up."
    },
    {
      number: "05",
      title: "Support",
      text: "Remote troubleshooting and continuous technical support."
    }
  ];

  return (
    <section className="bg-slate-950 py-28 text-white">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="text-orange-400 uppercase tracking-[3px]">
            Process
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Our Engineering Workflow
          </h2>

          <p className="mt-6 text-slate-400 text-xl max-w-3xl mx-auto">
            Every project follows a structured engineering process to ensure
            reliability, efficiency and long-term performance.
          </p>

        </div>

        <div className="mt-20 grid md:grid-cols-5 gap-8">

          {steps.map((step) => (

            <div
              key={step.number}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center hover:border-orange-500 transition"
            >

              <div className="text-5xl font-extrabold text-orange-500">
                {step.number}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                {step.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}