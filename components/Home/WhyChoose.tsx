export default function WhyChoose() {
  return (
    <section className="bg-slate-900 py-28 text-white">

      <div className="mx-auto max-w-7xl px-10">

        <div className="text-center">

          <span className="text-orange-400 font-semibold tracking-[3px] uppercase">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Trusted Engineering Partner
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            We provide reliable industrial automation,
            machine modernization and engineering services
            designed to maximize production efficiency,
            reduce downtime and improve machine performance.
          </p>

        </div>

        <div className="mt-20 grid grid-cols-3 gap-8">

          <div className="rounded-2xl bg-slate-800 p-8">

            <div className="text-5xl">⚙️</div>

            <h3 className="mt-6 text-2xl font-bold">
              Machine Retrofit
            </h3>

            <p className="mt-4 text-slate-400">
              Modernizing existing production lines using
              advanced automation technologies.
            </p>

          </div>

          <div className="rounded-2xl bg-slate-800 p-8">

            <div className="text-5xl">🖥️</div>

            <h3 className="mt-6 text-2xl font-bold">
              PLC & SCADA
            </h3>

            <p className="mt-4 text-slate-400">
              Siemens, Allen Bradley and Delta PLC
              programming with professional SCADA systems.
            </p>

          </div>

          <div className="rounded-2xl bg-slate-800 p-8">

            <div className="text-5xl">⚡</div>

            <h3 className="mt-6 text-2xl font-bold">
              Electrical Engineering
            </h3>

            <p className="mt-4 text-slate-400">
              Electrical panels, drives,
              servo systems and complete
              industrial automation solutions.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}