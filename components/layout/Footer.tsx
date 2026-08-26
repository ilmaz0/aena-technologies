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

            <li>
              <Link
                href="/services/machine-retrofit"
                className="transition hover:text-orange-400"
              >
                Machine Retrofit
              </Link>
            </li>

            <li>
              <Link
                href="/services/industrial-automation"
                className="transition hover:text-orange-400"
              >
                Industrial Automation
              </Link>
            </li>

            <li>
              <Link
                href="/services/plc-programming"
                className="transition hover:text-orange-400"
              >
                PLC Programming
              </Link>
            </li>

            <li>
              <Link
                href="/services/electrical-engineering"
                className="transition hover:text-orange-400"
              >
                Electrical Engineering
              </Link>
            </li>

            <li>
              <Link
                href="/services/scada-hmi"
                className="transition hover:text-orange-400"
              >
                SCADA & HMI
              </Link>
            </li>

            <li>
              <Link
                href="/services/drive-systems"
                className="transition hover:text-orange-400"
              >
                Drive Systems
              </Link>
            </li>

            <li>
              <Link
                href="/services/servo-motion-control"
                className="transition hover:text-orange-400"
              >
                Servo & Motion Control
              </Link>
            </li>

            <li>
              <Link
                href="/services/commissioning"
                className="transition hover:text-orange-400"
              >
                Commissioning
              </Link>
            </li>

            <li>
              <Link
                href="/services/industrial-troubleshooting"
                className="transition hover:text-orange-400"
              >
                Industrial Troubleshooting
              </Link>
            </li>

          </ul>
        </div>


        {/* Company */}

        <div>
          <h3 className="mb-5 text-lg font-bold">
            Company
          </h3>

          <ul className="space-y-3 text-slate-400">

            <li>
              <Link
                href="/"
                className="transition hover:text-orange-400"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="transition hover:text-orange-400"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className="transition hover:text-orange-400"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className="transition hover:text-orange-400"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="transition hover:text-orange-400"
              >
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

            <li>
              Adana / Türkiye
            </li>

            <li>
              <a
                href="mailto:info@aenatechnologies.com"
                className="transition hover:text-orange-400"
              >
                info@aenatechnologies.com
              </a>
            </li>

            <li>
              WhatsApp
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/emreyilmazautomation/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-orange-400"
              >
                LinkedIn
              </a>
            </li>

          </ul>
        </div>

      </div>


      <div className="border-t border-slate-800 py-6 text-center text-slate-500">
        © 2026 AENA Technologies. All Rights Reserved.
      </div>

    </footer>
  );
}