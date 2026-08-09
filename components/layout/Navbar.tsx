import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-slate-800/50 bg-slate-950">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-3 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/images/aena4.png"
            alt="AENA Technologies"
            width={150}
            height={45}
            priority
            className="h-auto w-[90px] sm:w-[120px] lg:w-[150px]"
          /> 
        </Link>

        {/* Menü */}
        <nav className="flex items-center gap-2 whitespace-nowrap text-[10px] font-medium uppercase tracking-wide sm:gap-4 sm:text-xs lg:gap-8 lg:text-sm">

          <Link
            href="/"
            className="text-white transition duration-300 hover:text-orange-400"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="text-white transition duration-300 hover:text-orange-400"
          >
            Services
          </Link>

          <Link
            href="/projects"
            className="text-white transition duration-300 hover:text-orange-400"
          >
            Projects
          </Link>

          <Link
            href="/about"
            className="text-white transition duration-300 hover:text-orange-400"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-white transition duration-300 hover:text-orange-400"
          >
            Contact
          </Link>

        </nav>

        {/* Sağ boşluk */}
        <div className="w-0 sm:w-4 lg:w-8" />

      </div>
    </header>
  );
}