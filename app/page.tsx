import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Industrial Machine Retrofit & Automation Services",

  description:
    "AENA Technologies provides industrial machine retrofit, automation, PLC, HMI, electrical engineering, drive, servo and machine modernization services in Turkey and international markets.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Industrial Machine Retrofit & Automation | AENA Technologies",

    description:
      "Industrial machine retrofit, automation, PLC, electrical engineering, drive systems and machine modernization services.",

    url: "https://www.aenatechnologies.com/",

    siteName: "AENA Technologies",

    type: "website",
  },
};

export default function Home() {
  return (
    <>
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