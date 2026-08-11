"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          onClick={() => setIsOpen(false)}
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


        {/* CENTER MENU - DESKTOP */}
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


        {/* RIGHT SIDE - DESKTOP */}
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


        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-lg
            border
            border-slate-700
            bg-slate-900
            text-slate-200
            transition
            hover:border-orange-500
            hover:text-orange-400
            lg:hidden
          "
        >
          <div className="flex w-5 flex-col gap-1.5">

            <span
              className={`h-0.5 w-full bg-current transition duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-full bg-current transition duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-0.5 w-full bg-current transition duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />

          </div>
        </button>

      </div>


      {/* MOBILE MENU */}
      <div
        className={`
          overflow-hidden
          border-t
          border-slate-800
          bg-[#020617]
          transition-all
          duration-300
          lg:hidden
          ${
            isOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <nav className="mx-auto max-w-7xl px-6 py-5">

          <div className="flex flex-col">

            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  border-b
                  border-slate-800/70
                  py-4
                  text-sm
                  font-medium
                  uppercase
                  tracking-[1.5px]
                  text-slate-300
                  transition
                  hover:text-orange-400
                "
              >
                {item.name}
              </Link>
            ))}

          </div>

          {/* MOBILE CTA */}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="
              mt-5
              block
              rounded-lg
              bg-orange-500
              px-5
              py-4
              text-center
              text-xs
              font-bold
              uppercase
              tracking-[1.5px]
              text-white
              transition
              hover:bg-orange-600
            "
          >
            Request a Quote
          </Link>

        </nav>

      </div>


      {/* Bottom accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

    </header>
  );
}