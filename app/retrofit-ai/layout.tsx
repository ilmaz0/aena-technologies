import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Retrofit AI | Industrial Machine Troubleshooting & Fault Diagnosis",

  description:
    "Retrofit AI by AENA Technologies helps diagnose industrial machine faults involving PLCs, HMIs, drives, servo systems, motors, sensors, electrical panels and industrial communication.",

  keywords: [
    "industrial machine troubleshooting",
    "industrial fault diagnosis",
    "machine fault diagnosis",
    "industrial automation troubleshooting",
    "machine troubleshooting AI",
    "industrial automation AI",
    "machine retrofit AI",
    "PLC troubleshooting",
    "HMI troubleshooting",
    "drive troubleshooting",
    "servo troubleshooting",
    "industrial electrical troubleshooting",
    "machine modernization",
    "industrial machine retrofit",
    "endüstriyel otomasyon arıza",
    "makine arıza tespiti",
    "makine arıza teşhisi",
    "makine revizyonu",
    "makine modernizasyonu",
    "PLC arıza",
    "sürücü arızası",
    "endüstriyel otomasyon arıza giderme",
  ],

  alternates: {
    canonical:
      "https://www.aenatechnologies.com/retrofit-ai",
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

  openGraph: {
    type: "website",

    url:
      "https://www.aenatechnologies.com/retrofit-ai",

    title:
      "Retrofit AI | Industrial Machine Troubleshooting",

    description:
      "AI-assisted industrial machine troubleshooting developed by AENA Technologies for PLC, HMI, drive, servo, motor, sensor and electrical system fault diagnosis.",

    siteName:
      "AENA Technologies",

    locale: "en_US",

    images: [
      {
        url: "/images/aena3.png",
        width: 1200,
        height: 630,
        alt:
          "AENA Technologies Retrofit AI",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Retrofit AI | Industrial Machine Troubleshooting",

    description:
      "AI-assisted industrial machine fault diagnosis by AENA Technologies.",

    images: [
      "/images/aena3.png",
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebApplication",

      "@id":
        "https://www.aenatechnologies.com/retrofit-ai#application",

      name: "AENA Retrofit AI",

      url:
        "https://www.aenatechnologies.com/retrofit-ai",

      description:
        "AI-assisted industrial machine troubleshooting and fault diagnosis tool developed by AENA Technologies.",

      applicationCategory:
        "BusinessApplication",

      applicationSubCategory:
        "Industrial Automation Troubleshooting",

      operatingSystem:
        "Web",

      browserRequirements:
        "Requires JavaScript",

      creator: {
        "@id":
          "https://www.aenatechnologies.com/#organization",
      },

      provider: {
        "@id":
          "https://www.aenatechnologies.com/#organization",
      },

      featureList: [
        "Industrial machine fault diagnosis",
        "PLC troubleshooting",
        "HMI troubleshooting",
        "Variable frequency drive troubleshooting",
        "Servo system troubleshooting",
        "Motor troubleshooting",
        "Sensor troubleshooting",
        "Electrical panel troubleshooting",
        "Industrial communication troubleshooting",
        "Machine retrofit analysis",
        "Machine modernization analysis",
        "Image-based machine evidence analysis",
      ],

      areaServed: {
        "@type": "Country",
        name: "Türkiye",
      },
    },

    {
      "@type": "Service",

      "@id":
        "https://www.aenatechnologies.com/retrofit-ai#service",

      name:
        "Industrial Machine Troubleshooting",

      serviceType:
        "Industrial Automation Troubleshooting",

      provider: {
        "@id":
          "https://www.aenatechnologies.com/#organization",
      },

      url:
        "https://www.aenatechnologies.com/retrofit-ai",

      areaServed: [
        {
          "@type": "Country",
          name: "Türkiye",
        },
        {
          "@type": "Place",
          name: "Adana",
        },
        {
          "@type": "Place",
          name: "Mersin",
        },
        {
          "@type": "Place",
          name: "Gaziantep",
        },
      ],
    },

    {
      "@type": "BreadcrumbList",

      "@id":
        "https://www.aenatechnologies.com/retrofit-ai#breadcrumb",

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "AENA Technologies",
          item:
            "https://www.aenatechnologies.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Retrofit AI",
          item:
            "https://www.aenatechnologies.com/retrofit-ai",
        },
      ],
    },
  ],
};

export default function RetrofitAILayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script
        id="retrofit-ai-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(
          structuredData
        )}
      </Script>

      {children}
    </>
  );
}