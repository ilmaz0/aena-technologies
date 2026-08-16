import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aenatechnologies.com"),

  title: {
    default:
      "Industrial Machine Retrofit & Automation | AENA Technologies",
    template: "%s | AENA Technologies",
  },

  description:
    "AENA Technologies provides industrial machine retrofit, machine modernization, industrial automation, PLC and HMI programming, electrical engineering, drive systems, servo motion control and commissioning services for industrial machinery in Turkey, Europe, the Middle East and Central Asia.",

  authors: [
    {
      name: "AENA Technologies",
    },
  ],

  creator: "AENA Technologies",
  publisher: "AENA Technologies",

  alternates: {
    canonical: "/",
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
    url: "https://www.aenatechnologies.com",
    title:
      "Industrial Machine Retrofit & Automation | AENA Technologies",
    description:
      "Industrial machine retrofit, automation, PLC programming, electrical engineering, drive systems and machine modernization services.",
    siteName: "AENA Technologies",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Industrial Machine Retrofit & Automation | AENA Technologies",
    description:
      "Industrial machine retrofit, industrial automation, PLC, electrical engineering, drive systems and machine modernization services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /*
   * Structured Data
   *
   * This connects the website identity with:
   * - AENA Technologies
   * - Industrial automation services
   * - Machine retrofit / modernization
   * - Service area
   * - Website
   *
   * IMPORTANT:
   * Do not add an address here until the exact Google Business
   * Profile business address is confirmed.
   */

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.aenatechnologies.com/#organization",

        name: "AENA Technologies",

        url: "https://www.aenatechnologies.com",

        description:
          "Industrial machine retrofit, modernization and industrial automation engineering services including PLC, HMI, drives, servo systems, sensors, industrial communication and machine commissioning.",

        areaServed: [
          {
            "@type": "Country",
            name: "Türkiye",
          },
          {
            "@type": "Continent",
            name: "Europe",
          },
          {
            "@type": "Place",
            name: "Middle East",
          },
          {
            "@type": "Place",
            name: "Central Asia",
          },
        ],

        knowsAbout: [
          "Industrial Machine Retrofit",
          "Machine Modernization",
          "Industrial Automation",
          "PLC Programming",
          "HMI Programming",
          "Drive Systems",
          "Servo Motion Control",
          "Industrial Communication",
          "Gateway Integration",
          "Electrical Engineering",
          "Electrical Panel Modernization",
          "Sensor Integration",
          "Machine Commissioning",
        ],
      },

      {
        "@type": "WebSite",
        "@id": "https://www.aenatechnologies.com/#website",

        url: "https://www.aenatechnologies.com",

        name: "AENA Technologies",

        publisher: {
          "@id":
            "https://www.aenatechnologies.com/#organization",
        },

        inLanguage: "en",
      },

      {
        "@type": "ProfessionalService",
        "@id":
          "https://www.aenatechnologies.com/#business",

        name: "AENA Technologies",

        url: "https://www.aenatechnologies.com",

        description:
          "Industrial machine retrofit, machine modernization and industrial automation engineering services.",

        provider: {
          "@id":
            "https://www.aenatechnologies.com/#organization",
        },

        serviceType: [
          "Industrial Machine Retrofit",
          "Machine Modernization",
          "Industrial Automation",
          "PLC Programming",
          "HMI Programming",
          "Drive Integration",
          "Servo Motion Control",
          "Industrial Communication",
          "Electrical Engineering",
          "Machine Commissioning",
        ],

        areaServed: [
          {
            "@type": "Country",
            name: "Türkiye",
          },
          {
            "@type": "Continent",
            name: "Europe",
          },
          {
            "@type": "Place",
            name: "Middle East",
          },
          {
            "@type": "Place",
            name: "Central Asia",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <body className="bg-[#020617] text-white antialiased">

        {/* Structured Data / SEO */}

        <Script
          id="aena-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(structuredData)}
        </Script>

        {/* LinkedIn Insight Tag */}

        <Script
          id="linkedin-insight-tag"
          strategy="afterInteractive"
        >
          {`
            _linkedin_partner_id = "10671521";

            window._linkedin_data_partner_ids =
              window._linkedin_data_partner_ids || [];

            window._linkedin_data_partner_ids.push(
              _linkedin_partner_id
            );

            (function(l) {
              if (!l) {
                window.lintrk = function(a, b) {
                  window.lintrk.q.push([a, b]);
                };

                window.lintrk.q = [];
              }

              var s =
                document.getElementsByTagName("script")[0];

              var b =
                document.createElement("script");

              b.type = "text/javascript";
              b.async = true;

              b.src =
                "https://snap.licdn.com/li.lms-analytics/insight.min.js";

              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=10671521&fmt=gif"
          />
        </noscript>

        <Navbar />

        <main>{children}</main>

        <Footer />

      </body>
    </html>
  );
}
