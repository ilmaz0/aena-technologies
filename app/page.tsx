import type { Metadata } from "next";

import Hero from "@/components/Home/Hero";
import Stats from "@/components/Home/Stats";
import WhyChoose from "@/components/Home/WhyChoose";
import Services from "@/components/Home/Services";
import Projects from "@/components/Home/Projects";
import Capabilities from "@/components/Home/Capabilities";
import Industries from "@/components/Home/Industries";
import Process from "@/components/Home/Process";
import CTA from "@/components/Home/CTA";

export const metadata: Metadata = {
  title:
    "Industrial Machine Retrofit & Automation | Electrical Engineering | AENA",

  description:
    "AENA Technologies provides industrial machine retrofit, automation and electrical engineering services, including PLC programming, HMI, drive systems, servo motion control, machine modernization and commissioning in Turkey and international markets.",
  keywords: [
    "industrial machine retrofit",
    "industrial machine retrofit automation",
"industrial machine retrofit electrical engineering",
"industrial machine retrofit and automation",
"industrial machine retrofit automation services",
"industrial machine retrofit electrical engineering services",
"machine retrofit and automation",
"machine modernization and automation",
    "machine retrofit",
    "industrial machine modernization",
    "machine modernization",
    "industrial automation",
    "industrial automation services",
    "PLC programming",
    "PLC troubleshooting",
    "PLC modernization",
    "PLC replacement",
    "HMI modernization",
    "electrical engineering",
    "electrical panel modernization",
    "drive systems",
    "industrial drive replacement",
    "servo motion control",
    "servo drive integration",
    "industrial machine commissioning",
    "machine retrofit Turkey",
    "industrial machine retrofit Turkey",
  ],

  alternates: {
    canonical: "https://www.aenatechnologies.com/",
  },

  openGraph: {
    title:
      "Industrial Machine Retrofit & Automation Services | AENA Technologies",

    description:
      "Industrial machine retrofit, machine modernization, PLC programming, electrical engineering, drive systems, servo motion control and automation services for industrial machinery.",

    url: "https://www.aenatechnologies.com/",

    siteName: "AENA Technologies",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
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

      <CTA />
    </>
  );
}