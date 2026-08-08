"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);

    // Şimdilik test
    console.log("Technical evaluation request submitted");

    setTimeout(() => {
      setSending(false);
      alert("Your request has been received.");
    }, 1000);
  };

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}

      <section className="border-b border-slate-800 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            Technical Evaluation
          </p>

          <h1 className="mt-4 text-5xl font-extrabold md:text-6xl">
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

            <div className="mt-8 space-y-6">

              <div className="flex gap-4">
                <span className="text-xl font-bold text-orange-400">01</span>
                <p className="text-slate-400">
                  Tell us about your machine and production process.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-xl font-bold text-orange-400">02</span>
                <p className="text-slate-400">
                  Upload photos, electrical drawings or videos if available.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-xl font-bold text-orange-400">03</span>
                <p className="text-slate-400">
                  Our engineering team performs a technical evaluation.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-xl font-bold text-orange-400">04</span>
                <p className="text-slate-400">
                  Receive a detailed proposal together with remote support
                  options.
                </p>
              </div>

            </div>

            <div className="mt-12 space-y-8">

              <div>
                <h3 className="font-semibold text-orange-400">
                  Location
                </h3>

                <p className="mt-2 text-slate-400">
                  Adana, Türkiye
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-orange-400">
                  Email
                </h3>

                <p className="mt-2 text-slate-400">
                  info@aenatechnologies.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-orange-400">
                  LinkedIn
                </h3>

                <p className="mt-2 text-slate-400">
                  AENA Technologies
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-orange-400">
                  WhatsApp
                </h3>

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

            <p className="mt-3 text-slate-400">
              Provide as much technical information as possible.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full rounded-lg bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full rounded-lg bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                required
                className="w-full rounded-lg bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone / WhatsApp"
                className="w-full rounded-lg bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-orange-500"
              />

              <select
                name="service"
                required
                className="w-full rounded-lg bg-slate-800 p-4 text-slate-300 outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">
                  Select Required Service
                </option>

                <option value="machine-retrofit">
                  Machine Retrofit
                </option>

                <option value="plc">
                  PLC / HMI Programming
                </option>

                <option value="electrical">
                  Electrical Engineering
                </option>

                <option value="servo">
                  Servo & Motion Control
                </option>

                <option value="scada">
                  SCADA / Monitoring
                </option>

                <option value="factory-automation">
                  Factory Automation
                </option>

                <option value="remote-support">
                  Remote Technical Support
                </option>

              </select>

              <input
                type="text"
                name="machine"
                placeholder="Machine Type / Model"
                className="w-full rounded-lg bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-orange-500"
              />

              <textarea
                name="project"
                rows={7}
                required
                placeholder="Describe the machine, existing automation system, problem and required modification..."
                className="w-full rounded-lg bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-orange-500"
              />

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Upload Technical Files
                </label>

                <input
                  type="file"
                  name="files"
                  multiple
                  accept=".jpg,.jpeg,.png,.pdf,.mp4,.dwg,.zip"
                  className="w-full rounded-lg bg-slate-800 p-4 text-sm text-slate-400"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-xl bg-orange-500 py-4 font-bold transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending Request..." : "Send Technical Request"}
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}