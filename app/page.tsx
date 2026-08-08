import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Home/Hero";
import Stats from "@/components/Home/Stats";
import WhyChoose from "@/components/Home/WhyChoose";
import Services from "@/components/Home/Services";
import Projects from "@/components/Home/Projects";
import Capabilities from "@/components/Home/Capabilities";
import Industries from "@/components/Home/Industries";
import Process from "@/components/Home/Process";
import Problems from "@/components/Home/Problems";
import CTA from "@/components/Home/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
       <WhyChoose />
      <Services />
      <Projects />
      <Capabilities />
      <Industries />
      <Process />
      <Problems />
       <CTA />
    </>
  );
}