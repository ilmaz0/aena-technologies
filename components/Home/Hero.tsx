import Image from "next/image";
import Link from "next/link";
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

  <Link
    href="/contact"
    className="rounded-xl bg-orange-500 px-8 py-4 font-bold transition hover:bg-orange-600"
  >
    Get Quote
  </Link>

  <Link
    href="/projects"
    className="rounded-xl border border-white px-8 py-4 transition hover:bg-white hover:text-black"
  >
    View Projects
  </Link>

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

  <div className="w-[520px] rounded-3xl border border-slate-700 bg-slate-900 p-10 shadow-2xl">
<h3 className="text-3xl font-bold text-white">
  Why AENA Technologies?
</h3>

<p className="mt-5 text-slate-400 leading-8">
We help manufacturers extend the life of existing machinery through
automation, electrical engineering and retrofit solutions.
</p>

<div className="mt-8 space-y-4">

  <div className="flex items-center gap-3">
    <span className="text-orange-400 text-xl">✓</span>
    <span>Industrial Machine Retrofit</span>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-orange-400 text-xl">✓</span>
    <span>PLC & HMI Software</span>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-orange-400 text-xl">✓</span>
    <span>Electrical Panel Design</span>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-orange-400 text-xl">✓</span>
    <span>Servo & Motion Systems</span>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-orange-400 text-xl">✓</span>
    <span>Commissioning & Startup</span>
  </div>

</div>

<div className="mt-10 rounded-xl border border-slate-700 bg-slate-950 p-5">

  <p className="text-sm uppercase tracking-[2px] text-slate-500">
    Service Region
  </p>

  <p className="mt-2 font-semibold text-orange-400">
    Europe • Middle East • Central Asia
  </p>

</div>

          </div>

        </div>

      </div>
    </section>
  );
}