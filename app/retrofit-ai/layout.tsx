import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Retrofit AI | Industrial Machine Troubleshooting & Diagnosis | AENA Technologies",

  description:
    "AENA Retrofit AI provides preliminary engineering diagnosis for industrial machine faults, PLC, HMI, drives, servo systems, sensors, motors, electrical panels, communication and mechanical systems.",

  keywords: [
    "retrofit AI",
    "industrial machine troubleshooting",
    "industrial machine diagnosis",
    "machine fault diagnosis",
    "industrial automation",
    "machine retrofit",
    "machine modernization",
    "PLC troubleshooting",
    "HMI troubleshooting",
    "drive troubleshooting",
    "servo troubleshooting",
    "industrial electrical troubleshooting",
    "industrial automation engineering",
    "PLC fault diagnosis",
    "VFD troubleshooting",
    "servo motor troubleshooting",
    "machine automation",
    "AENA Technologies",
  ],

  authors: [
    {
      name: "AENA Technologies",
      url: "https://aenatechnologies.com",
    },
  ],

  creator: "AENA Technologies",
  publisher: "AENA Technologies",

  alternates: {
    canonical: "https://aenatechnologies.com/retrofit-ai",
  },

  openGraph: {
    title:
      "Retrofit AI | Industrial Machine Troubleshooting & Diagnosis",

    description:
      "Preliminary engineering diagnosis for industrial machine faults, automation systems and retrofit applications.",

    url: "https://aenatechnologies.com/retrofit-ai",

    siteName: "AENA Technologies",

    type: "website",

    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Retrofit AI | Industrial Machine Troubleshooting & Diagnosis",

    description:
      "Industrial machine troubleshooting and retrofit engineering intelligence by AENA Technologies.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RetrofitAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}