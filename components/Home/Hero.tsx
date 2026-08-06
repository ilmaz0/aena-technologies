import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center pt-24">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-20 px-10">

        {/* LEFT */}
        <div className="flex flex-col justify-center">

          <span className="mb-6 text-orange-400 font-semibold tracking-[3px] uppercase">
            AENA Technologies
          </span>

          <h1 className="text-6xl font-extrabold leading-tight">
  Machine
  <br />
  <span className="text-orange-400">
    Retrofit
  </span>
  <br />
  Automation &
  <br />
  Electrical Engineering
</h1>

          <p className="mt-8 max-w-xl text-xl leading-8 text-slate-300">
  We modernize industrial machines through PLC software,
  electrical engineering, drive systems and commissioning.
  Our retrofit solutions increase productivity without the
  cost of purchasing new machinery.
</p>
          <div className="mt-12 flex gap-6">

            <button className="rounded-xl bg-orange-500 px-8 py-4 font-bold hover:bg-orange-600 transition">
              Get Quote
            </button>

            <button className="rounded-xl border border-white px-8 py-4 hover:bg-white hover:text-black transition">
              View Projects
            </button>

          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 text-lg">

  <div className="flex items-center gap-3">
    <span className="text-orange-400 text-xl">✓</span>
    <span>Machine Retrofit</span>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-orange-400 text-xl">✓</span>
    <span>PLC Programming</span>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-orange-400 text-xl">✓</span>
    <span>Electrical Engineering</span>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-orange-400 text-xl">✓</span>
    <span>Servo & Motion Control</span>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-orange-400 text-xl">✓</span>
    <span>Commissioning</span>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-orange-400 text-xl">✓</span>
    <span>Technical Support</span>
  </div>

</div>

        </div>

        {/* RIGHT */}

        <div className="flex items-center justify-center">

          <div className="w-[520px] rounded-3xl border border-orange-500/20 bg-slate-900 p-10 shadow-2xl">

            <h3 className="text-3xl font-bold text-white">
              Engineering Excellence
            </h3>

            <p className="mt-4 text-slate-400 leading-8">
              We specialize in industrial automation, PLC programming,
              machine retrofit and modernization. Our mission is to
              improve productivity, reliability and efficiency through
              innovative engineering solutions.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="text-slate-400">Experience</span>
                <span className="font-bold text-orange-400">10+ Years</span>
              </div>

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="text-slate-400">Completed Projects</span>
                <span className="font-bold text-orange-400">50+</span>
              </div>

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="text-slate-400">Core Expertise</span>
                <span className="font-bold text-orange-400">
                  PLC • SCADA • Servo
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="text-slate-400">Machine Services</span>
                <span className="font-bold text-orange-400">
                  Retrofit & Modernization
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">Coverage</span>
                <span className="font-bold text-orange-400">
                  Worldwide
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}