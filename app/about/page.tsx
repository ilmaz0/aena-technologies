export default function AboutPage() {
  return (
    <main className="bg-slate-950 text-white">

      {/* Hero */}

      <section className="border-b border-slate-800 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <p className="uppercase tracking-[4px] font-semibold text-orange-400">
            About AENA
          </p>

          <h1 className="mt-4 text-6xl font-extrabold">
            Engineering Better Industrial Solutions
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-8 text-slate-400">
            AENA Technologies specializes in industrial automation,
            machine retrofit, electrical engineering and production
            line modernization. Our goal is to extend machine life,
            improve efficiency and reduce production downtime through
            innovative engineering solutions.
          </p>

        </div>

      </section>

      {/* Content */}

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-8 lg:grid-cols-2">

          <div>

            <h2 className="text-4xl font-bold">
              Who We Are
            </h2>

            <p className="mt-8 leading-8 text-slate-400">
              With more than six years of industrial experience,
              AENA Technologies delivers reliable automation,
              retrofit and electrical engineering services for
              manufacturers worldwide.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              We work on plastic processing, packaging,
              recycling and production machinery,
              providing complete engineering support
              from design to commissioning.
            </p>

          </div>

          <div>

            <div className="rounded-2xl border border-orange-500/20 bg-slate-900 p-10">

              <h3 className="text-3xl font-bold">
                Our Expertise
              </h3>

              <ul className="mt-8 space-y-5 text-lg">

                <li>✔ Industrial Automation</li>

                <li>✔ PLC Programming</li>

                <li>✔ Machine Retrofit</li>

                <li>✔ Servo Motion Control</li>

                <li>✔ SCADA & HMI</li>

                <li>✔ Electrical Design</li>

                <li>✔ Commissioning</li>

                <li>✔ Industrial Troubleshooting</li>

              </ul>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}