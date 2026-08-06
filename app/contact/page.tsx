export default function ContactPage() {
  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}

      <section className="border-b border-slate-800 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <p className="uppercase tracking-[4px] font-semibold text-orange-400">
            Contact
          </p>

          <h1 className="mt-4 text-6xl font-extrabold">
            Let's Discuss Your Project
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-400">
            Looking for industrial automation, machine retrofit or electrical
            engineering support? Get in touch with AENA Technologies.
          </p>

        </div>

      </section>

      {/* CONTENT */}

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-12 px-8 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <h2 className="text-4xl font-bold">
              Contact Information
            </h2>

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
              Request a Quote
            </h2>

            <form className="mt-8 space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="text"
                placeholder="Company"
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