"use client";

import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "905061234843";

export default function ContactPage() {
  const [sending, setSending] = useState(false);

  const handleWhatsApp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const company = formData.get("company")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const service = formData.get("service")?.toString() || "";
    const machine = formData.get("machine")?.toString() || "";
    const project = formData.get("project")?.toString() || "";

    const message = `
*AENA Technologies*
*Technical Evaluation Request*

*Name:* ${name}

*Company:* ${company}

*Email:* ${email}

*Phone / WhatsApp:* ${phone}

*Service Required:* ${service}

*Machine Type / Model:* ${machine}

*Project Description:*
${project}

-------------------------

Sent from AENA Technologies website.
`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const company = formData.get("company")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const service = formData.get("service")?.toString() || "";
    const machine = formData.get("machine")?.toString() || "";
    const project = formData.get("project")?.toString() || "";

    const subject = `AENA Technical Evaluation - ${company}`;

    const body = `
AENA Technologies
Technical Evaluation Request

Name:
${name}

Company:
${company}

Email:
${email}

Phone / WhatsApp:
${phone}

Service Required:
${service}

Machine Type / Model:
${machine}

Project Description:
${project}
`;

    const mailtoUrl = `mailto:info@aenatechnologies.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setSending(false);
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
                <span className="text-xl font-bold text-orange-400">
                  01
                </span>

                <p className="text-slate-400">
                  Tell us about your machine and production process.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-xl font-bold text-orange-400">
                  02
                </span>

                <p className="text-slate-400">
                  Upload photos, electrical drawings or videos if available.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-xl font-bold text-orange-400">
                  03
                </span>

                <p className="text-slate-400">
                  Our engineering team performs a technical evaluation.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-xl font-bold text-orange-400">
                  04
                </span>

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
                  WhatsApp
                </h3>

                <p className="mt-2 text-slate-400">
                  +90 506 123 4843
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
              onSubmit={handleWhatsApp}
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

                <option value="Machine Retrofit">
                  Machine Retrofit
                </option>

                <option value="PLC / HMI Programming">
                  PLC / HMI Programming
                </option>

                <option value="Electrical Engineering">
                  Electrical Engineering
                </option>

                <option value="Servo & Motion Control">
                  Servo & Motion Control
                </option>

                <option value="SCADA / Monitoring">
                  SCADA / Monitoring
                </option>

                <option value="Factory Automation">
                  Factory Automation
                </option>

                <option value="Remote Technical Support">
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

              {/* WHATSAPP */}

              <button
                type="submit"
                className="w-full rounded-xl bg-green-600 py-4 font-bold transition hover:bg-green-700"
              >
                Send Request via WhatsApp
              </button>

            </form>

            {/* EMAIL */}

            <form
              onSubmit={handleEmail}
              className="mt-4"
            >

              <input
                type="hidden"
                name="name"
              />

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-xl border border-slate-600 py-4 font-bold transition hover:border-orange-500 hover:bg-slate-800 disabled:opacity-50"
              >
                Send Request by Email
              </button>

            </form>

            <p className="mt-5 text-center text-xs text-slate-500">
              Your technical information will be used only to evaluate your
              project and prepare an engineering proposal.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}