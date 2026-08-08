import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-orange-500 py-24 text-center text-white">
      <div className="mx-auto max-w-4xl px-8">

        <h2 className="text-5xl font-extrabold">
          Ready to Modernize Your Production Line?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-orange-100">
          We help manufacturers upgrade existing machines through
          industrial automation, electrical engineering and machine
          retrofit solutions.
        </p>

        <div className="mt-12 flex justifgit y-center gap-6">

          <Link
            href="/contact"
            className="rounded-xl bg-white px-8 py-4 font-bold text-orange-500 transition hover:bg-slate-100"
          >
            Request a Quote
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-white px-8 py-4 transition hover:bg-white hover:text-orange-500"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
}