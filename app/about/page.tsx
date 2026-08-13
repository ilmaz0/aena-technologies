export default function AboutPage() {
  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}
      <section className="border-b border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            About AENA Technologies
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-extrabold leading-tight sm:text-6xl">
            Industrial Automation & Machine Retrofit Engineering
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-8 text-slate-400">
            AENA Technologies provides industrial automation, machine
            retrofit, machine modernization and electrical engineering
            solutions for manufacturers and production facilities.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
            We modernize existing industrial machinery instead of replacing
            it, helping manufacturers extend machine life, improve
            production reliability and reduce unnecessary investment in new
            equipment.
          </p>

        </div>
      </section>


      {/* COMPANY / FOUNDER */}
      <section className="border-b border-slate-800 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-8 lg:grid-cols-2">

          {/* COMPANY */}
          <div>

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              AENA Technologies
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Industrial Engineering & Automation
            </h2>

            <p className="mt-8 leading-8 text-slate-400">
              AENA Technologies specializes in industrial machine retrofit,
              PLC and HMI programming, electrical engineering, drive systems,
              servo motion control, SCADA and machine commissioning.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              Our engineering approach combines automation, electrical and
              machine-level troubleshooting to solve production problems on
              existing equipment.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              We support manufacturers in Turkey and provide engineering
              services for international industrial projects across Europe,
              the Middle East and Central Asia.
            </p>

          </div>


          {/* FOUNDER */}
          <div className="rounded-2xl border border-orange-500/20 bg-slate-900 p-10">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Founder & Engineering
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Emre Yılmaz
            </h2>

            <p className="mt-2 text-lg font-medium text-slate-300">
              Electrical & Electronics Engineer
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              Emre Yılmaz is an electrical and electronics engineer
              specializing in industrial automation, machine retrofit,
              machine modernization and industrial control systems.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              His engineering experience includes PLC programming, SCADA and
              HMI systems, electrical panels, drive systems, servo motion
              control, machine commissioning and industrial troubleshooting.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              Through AENA Technologies, he works with manufacturers to
              modernize existing machinery and improve production
              performance without unnecessarily replacing complete machines.
            </p>

            {/* LinkedIn */}
           {/* LinkedIn */}
<a
  href="https://www.linkedin.com/in/emreyilmazautomation/"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex items-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-orange-500 hover:text-orange-400"
>
  View LinkedIn Profile →
</a>

          </div>

        </div>
      </section>


      {/* EXPERTISE */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Engineering Expertise
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Industrial Automation Capabilities
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Our services cover the automation, electrical and control
              systems required to modernize industrial machinery and
              production lines.
            </p>

          </div>


          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Industrial Machine Retrofit",
              "Machine Modernization",
              "PLC Programming",
              "HMI & SCADA Systems",
              "Electrical Engineering",
              "Electrical Panel Design",
              "Servo & Motion Control",
              "Drive Systems",
              "Machine Commissioning",
              "Industrial Troubleshooting",
              "Production Line Automation",
              "Automation System Integration",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500"
              >
                <span className="text-orange-400">✓</span>

                <h3 className="mt-4 font-semibold">
                  {item}
                </h3>
              </div>

            ))}

          </div>

        </div>
      </section>


      {/* INDUSTRIES */}
      <section className="border-t border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Industries
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Industries We Support
            </h2>

          </div>


          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Plastic Processing",
              "Packaging Machinery",
              "Recycling Systems",
              "Cable Manufacturing",
              "Stretch Film Production",
              "Industrial Manufacturing",
            ].map((industry) => (

              <div
                key={industry}
                className="rounded-xl border border-slate-800 bg-slate-950 p-6 text-center transition hover:border-orange-500"
              >
                <h3 className="font-semibold">
                  {industry}
                </h3>
              </div>

            ))}

          </div>

        </div>
      </section>

    </main>
  );
}