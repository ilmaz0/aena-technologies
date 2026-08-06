import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-8 py-16 md:grid-cols-4">

        {/* Company */}

        <div>

          <h2 className="text-2xl font-bold">
            AENA Technologies
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Industrial Automation,
            Machine Retrofit,
            Electrical Engineering
            and Production Line Modernization.
          </p>

        </div>

        {/* Services */}

        <div>

          <h3 className="mb-5 text-lg font-bold">
            Services
          </h3>

          <ul className="space-y-3 text-slate-400">

            <li>Machine Retrofit</li>

            <li>PLC Programming</li>

            <li>Electrical Engineering</li>

            <li>Commissioning</li>

            <li>SCADA Systems</li>

          </ul>

        </div>

        {/* Company */}

        <div>

          <h3 className="mb-5 text-lg font-bold">
            Company
          </h3>

          <ul className="space-y-3 text-slate-400">

            <li>
              <Link href="/">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about">
                About
              </Link>
            </li>

            <li>
              <Link href="/services">
                Services
              </Link>
            </li>

            <li>
              <Link href="/projects">
                Projects
              </Link>
            </li>

            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="mb-5 text-lg font-bold">
            Contact
          </h3>

          <ul className="space-y-3 text-slate-400">

            <li>Adana / Türkiye</li>

            <li>info@aenatechnologies.com</li>

            <li>WhatsApp</li>

            <li>LinkedIn</li>

          </ul>

        </div>

      </div>

      <div className="border-t border-slate-800 py-6 text-center text-slate-500">

        © 2026 AENA Technologies. All Rights Reserved.

      </div>

    </footer>
  );
}