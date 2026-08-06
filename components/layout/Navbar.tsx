import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
   <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
<Link href="/" className="flex items-center gap-4">
  <Image
    src="/images/aena4.png"
    alt="AENA Technologies"
    width={120}
    height={120}  
    className="object-contain"
  />

  <div>
    <h2 className="text-2xl font-extrabold text-white">
      AENA
    </h2>

    <p className="text-sm uppercase tracking-[4px] text-orange-400">
      Engineering
    </p>
  </div>
</Link>

        {/* Menü */}
        <nav className="flex items-center gap-10 text-sm font-medium uppercase tracking-wide">
         <Link
  href="/"
  className="transition duration-300 hover:text-orange-400"
>
  Home
</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Buton */}
        <button className="rounded-xl bg-orange-500 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30">
          Request a Quote
        </button>

      </div>
    </header>
  );
}