export default function ContactPage() {
  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}

      <section className="border-b border-slate-800 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <p className="uppercase tracking-[4px] font-semibold text-orange-400">
            Technical Evaluation
          </p>

          <h1 className="mt-4 text-6xl font-extrabold">
            Request a Technical Evaluation
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-400">
            Describe your machine, upload technical information and receive a
            professional engineering evaluation from AENA Technologies.
          </p>

        </div>

      </section>

      {/* CONTENT */}

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-12 px-8 lg:grid-cols-2">

          {/* LEFT */}

          <div>

           <h2 className="text-4xl font-bold">
  How It Works
</h2>

<div className="mt-10 space-y-8">

  <div>
    <h3 className="font-semibold text-orange-400">
      Step 1
    </h3>

    <p className="mt-2 text-slate-400">
      Tell us about your machine and production process.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-orange-400">
      Step 2
    </h3>

    <p className="mt-2 text-slate-400">
      Upload photos, electrical drawings or videos if available.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-orange-400">
      Step 3
    </h3>

    <p className="mt-2 text-slate-400">
      Our engineering team performs a technical evaluation.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-orange-400">
      Step 4
    </h3>

    <p className="mt-2 text-slate-400">
      Receive a detailed proposal together with remote support options.
    </p>
  </div>

</div>

            <div className="mt-10 space-y-8">

              <div>
                <h3 className="text-orange-400 font-semibold">Location</h3>
                <p className="mt-2 text-slate-400">
                  Adana, Türkiye
                </p>
              </div>

              <div>
                <h3 className="text-orange-400 font-semibold">Email</h3>
                <p className="mt-2 text-slate-400">
                  info@aenatechnologies.com
                </p>
              </div>

              <div>
                <h3 className="text-orange-400 font-semibold">LinkedIn</h3>
                <p className="mt-2 text-slate-400">
                  AENA Technologies
                </p>
              </div>

              <div>
                <h3 className="text-orange-400 font-semibold">WhatsApp</h3>
                <p className="mt-2 text-slate-400">
                  Available for international support
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

            <h2 className="text-3xl font-bold">
              Project Information
            </h2>

            <form className="mt-8 space-y-6">

             <input
  type="text"
  placeholder="Company Name"
  className="w-full rounded-lg bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-orange-500"
/>

<input
  type="text"
  placeholder="Contact Person"
  className="w-full rounded-lg bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-orange-500"
/>

<input
  type="email"
  placeholder="Email Address"
  className="w-full rounded-lg bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-orange-500"
/>

<input
  type="text"
  placeholder="Country"
  className="w-full rounded-lg bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-orange-500"
/>

<input
  type="text"
  placeholder="WhatsApp Number"
  className="w-full rounded-lg bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-orange-500"
/>

<input
  type="text"
  placeholder="Machine Type"
  className="w-full rounded-lg bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-orange-500"
/>

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full rounded-lg bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-orange-500"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-orange-500 py-4 font-bold hover:bg-orange-600 transition"
              >
                Send Request
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}