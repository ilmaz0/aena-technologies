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
  width={80}
  height={80}
  className="object-contain"
/>

<div>
  <h2 className="text-3xl font-extrabold">
    AENA
  </h2>

  <p className="text-orange-400 tracking-[6px] uppercase">
    ENGINEERING
  </p>
</div>
  <div>
   
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
       <div className="w-32"></div>

      </div>
    </header>
  );
}