export default function CTA() {
  return (
    <section className="bg-orange-500 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">

        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
          Ready to Modernize Your Production Line?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-orange-100 sm:text-xl">
          We help manufacturers upgrade existing machines through
          industrial automation, electrical engineering and machine
          retrofit solutions.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-6">

          {/* WhatsApp */}
          <a
            href="https://wa.me/905061234843?text=Hello%20AENA%20Technologies%2C%20I%20found%20your%20website%20and%20would%20like%20to%20discuss%20a%20machine%20retrofit%20or%20automation%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-xl
              bg-white
              px-8
              py-4
              font-bold
              text-orange-500
              transition
              hover:bg-slate-100
            "
          >
            Chat on WhatsApp
          </a>

          {/* Email */}
          <a
            href="mailto:info@aenatechnologies.com?subject=Machine%20Retrofit%20%26%20Automation%20Inquiry"
            className="
              rounded-xl
              border
              border-white
              px-8
              py-4
              font-bold
              text-white
              transition
              hover:bg-white
              hover:text-orange-500
            "
          >
            Email Us
          </a>

        </div>

        <p className="mt-6 text-sm text-orange-100">
          info@aenatechnologies.com
        </p>

      </div>
    </section>
  );
}