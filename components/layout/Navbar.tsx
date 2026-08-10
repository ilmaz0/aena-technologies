import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="relative z-50 border-b border-slate-800/80 bg-[#020617]">
      
      {/* Subtle top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* LOGO */}
        <Link
          href="/"
          className="group flex shrink-0 items-center"
        >
          <Image
            src="/images/aena4.png"
            alt="AENA Technologies - Industrial Automation and Machine Retrofit"
            width={150}
            height={45}
            priority
            className="
              h-auto
              w-[105px]
              transition
              duration-300
              group-hover:scale-[1.03]
              sm:w-[125px]
              lg:w-[145px]
            "
          />
        </Link>

        {/* CENTER MENU */}
        <nav className="hidden items-center gap-8 lg:flex">

          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                group
                relative
                py-2
                text-[13px]
                font-medium
                uppercase
                tracking-[1.5px]
                text-slate-300
                transition
                duration-300
                hover:text-white
              "
            >
              {item.name}

              {/* Animated underline */}
              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-0
                  bg-orange-500
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </Link>
          ))}

        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden items-center gap-5 lg:flex">

          <div className="hidden xl:block">
            <p className="text-[9px] uppercase tracking-[2px] text-slate-500">
              Industrial Automation
            </p>

            <p className="mt-1 text-xs font-medium text-slate-300">
              Retrofit & Engineering
            </p>
          </div>

          <Link
            href="/contact"
            className="
              rounded-lg
              border
              border-orange-500/70
              bg-orange-500
              px-5
              py-3
              text-[11px]
              font-bold
              uppercase
              tracking-[1.5px]
              text-white
              transition
              duration-300
              hover:bg-orange-600
              hover:shadow-lg
              hover:shadow-orange-500/20
            "
          >
            Request a Quote
          </Link>

        </div>

        {/* MOBILE MENU PLACEHOLDER */}
        <div className="flex lg:hidden">

          <Link
            href="/contact"
            className="
              rounded-lg
              bg-orange-500
              px-4
              py-2.5
              text-[10px]
              font-bold
              uppercase
              tracking-[1px]
              text-white
              transition
              hover:bg-orange-600
            "
          >
            Contact
          </Link>

        </div>

      </div>

      {/* Bottom accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

    </header>
  );
}