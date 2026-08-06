import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950 border-b border-slate-800 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
<Link href="/" className="flex items-center gap-4">
  <Image
    src="/images/aena4.png"
    alt="AENA Technologies"
    width={100}
    height={100}  
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
        <nav className="flex gap-8 text-white">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Buton */}
        <button className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600 transition">
          Request a Quote
        </button>

      </div>
    </header>
  );
}