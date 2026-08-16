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
    "AENA Technologies provides industrial machine retrofit, machine modernization and industrial automation engineering services in Adana and across Turkey, with engineering support for manufacturing companies in the Middle East, Central Asia and selected European industrial markets.",

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
      "Industrial machine retrofit, machine modernization, PLC, HMI, drive, servo, industrial communication and automation engineering services based in Adana, Turkey.",
    siteName: "AENA Technologies",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Industrial Machine Retrofit & Automation | AENA Technologies",
    description:
      "Industrial machine retrofit, automation, PLC, HMI, drives, servo systems, industrial communication and machine modernization services.",
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
   * Geographic SEO strategy:
   *
   * 1. Primary location:
   *    Adana / Sarıçam / Hacı Sabancı Organized Industrial Zone
   *
   * 2. National industrial markets:
   *    Mersin, Gaziantep, Osmaniye, Konya, Kayseri,
   *    Bursa, Kocaeli, Istanbul, Izmir, Ankara,
   *    Manisa, Sakarya, Tekirdag, Denizli,
   *    Hatay, Kahramanmaras
   *
   * 3. International markets:
   *    Middle East
   *    Central Asia
   *    Selected European industrial markets
   *
   * IMPORTANT:
   * Exact street address is intentionally not included here
   * until the Google Business Profile address and website
   * business information are fully synchronized.
   */

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      /*
       * ORGANIZATION
       */
      {
        "@type": "Organization",

        "@id":
          "https://www.aenatechnologies.com/#organization",

        name: "AENA Technologies",

        url: "https://www.aenatechnologies.com",

        description:
          "AENA Technologies provides industrial machine retrofit, machine modernization and industrial automation engineering services for manufacturing machinery and production equipment.",

        areaServed: [
          /*
           * PRIMARY MARKET
           */
          {
            "@type": "City",
            name: "Adana",
          },

          {
            "@type": "Place",
            name: "Sarıçam, Adana",
          },

          {
            "@type": "Place",
            name: "Hacı Sabancı Organized Industrial Zone, Adana",
          },

          /*
           * TURKEY - INDUSTRIAL MARKETS
           */
          {
            "@type": "City",
            name: "Mersin",
          },

          {
            "@type": "City",
            name: "Gaziantep",
          },

          {
            "@type": "City",
            name: "Osmaniye",
          },

          {
            "@type": "City",
            name: "Konya",
          },

          {
            "@type": "City",
            name: "Kayseri",
          },

          {
            "@type": "City",
            name: "Bursa",
          },

          {
            "@type": "City",
            name: "Kocaeli",
          },

          {
            "@type": "City",
            name: "Istanbul",
          },

          {
            "@type": "City",
            name: "Izmir",
          },

          {
            "@type": "City",
            name: "Ankara",
          },

          {
            "@type": "City",
            name: "Manisa",
          },

          {
            "@type": "City",
            name: "Sakarya",
          },

          {
            "@type": "City",
            name: "Tekirdag",
          },

          {
            "@type": "City",
            name: "Denizli",
          },

          {
            "@type": "City",
            name: "Hatay",
          },

          {
            "@type": "City",
            name: "Kahramanmaras",
          },

          {
            "@type": "Country",
            name: "Türkiye",
          },

          /*
           * INTERNATIONAL
           */
          {
            "@type": "Place",
            name: "Middle East",
          },

          {
            "@type": "Place",
            name: "Central Asia",
          },

          {
            "@type": "Place",
            name: "Europe",
          },
        ],

        knowsAbout: [
          "Industrial Machine Retrofit",
          "Machine Modernization",
          "Industrial Automation",
          "PLC Programming",
          "PLC Modernization",
          "HMI Programming",
          "HMI Modernization",
          "Industrial Drive Systems",
          "Drive Replacement",
          "Servo Motion Control",
          "Sensor Integration",
          "Industrial Communication",
          "Communication Protocol Mapping",
          "Industrial Gateway Integration",
          "Legacy Automation Systems",
          "Electrical Engineering",
          "Electrical Panel Modernization",
          "Machine Control Systems",
          "Production Line Automation",
          "Machine Commissioning",
          "Industrial Automation Troubleshooting",
        ],
      },

      /*
       * WEBSITE
       */
      {
        "@type": "WebSite",

        "@id":
          "https://www.aenatechnologies.com/#website",

        url: "https://www.aenatechnologies.com",

        name: "AENA Technologies",

        publisher: {
          "@id":
            "https://www.aenatechnologies.com/#organization",
        },

        inLanguage: "en",
      },

      /*
       * PROFESSIONAL SERVICE
       */
      {
        "@type": "ProfessionalService",

        "@id":
          "https://www.aenatechnologies.com/#business",

        name: "AENA Technologies",

        url: "https://www.aenatechnologies.com",

        description:
          "Industrial machine retrofit, machine modernization and industrial automation engineering services based in Adana, Turkey.",

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
          "PLC Modernization",
          "Drive Integration",
          "Drive Replacement",
          "Servo Motion Control",
          "Industrial Communication",
          "Communication Protocol Mapping",
          "Industrial Gateway Integration",
          "Electrical Engineering",
          "Electrical Panel Modernization",
          "Sensor Integration",
          "Machine Commissioning",
          "Industrial Automation Troubleshooting",
        ],

        areaServed: [
          /*
           * PRIMARY
           */
          {
            "@type": "City",
            name: "Adana",
          },

          {
            "@type": "Place",
            name: "Sarıçam, Adana",
          },

          /*
           * TURKEY
           */
          {
            "@type": "Country",
            name: "Türkiye",
          },

          {
            "@type": "City",
            name: "Mersin",
          },

          {
            "@type": "City",
            name: "Gaziantep",
          },

          {
            "@type": "City",
            name: "Osmaniye",
          },

          {
            "@type": "City",
            name: "Konya",
          },

          {
            "@type": "City",
            name: "Kayseri",
          },

          {
            "@type": "City",
            name: "Bursa",
          },

          {
            "@type": "City",
            name: "Kocaeli",
          },

          {
            "@type": "City",
            name: "Istanbul",
          },

          {
            "@type": "City",
            name: "Izmir",
          },

          {
            "@type": "City",
            name: "Ankara",
          },

          {
            "@type": "City",
            name: "Manisa",
          },

          {
            "@type": "City",
            name: "Sakarya",
          },

          {
            "@type": "City",
            name: "Tekirdag",
          },

          {
            "@type": "City",
            name: "Denizli",
          },

          {
            "@type": "City",
            name: "Hatay",
          },

          {
            "@type": "City",
            name: "Kahramanmaras",
          },

          /*
           * INTERNATIONAL
           */
          {
            "@type": "Place",
            name: "Middle East",
          },

          {
            "@type": "Place",
            name: "Central Asia",
          },

          {
            "@type": "Place",
            name: "Europe",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <body className="bg-[#020617] text-white antialiased">

        {/* =========================================
            STRUCTURED DATA / SEO
        ========================================= */}

        <Script
          id="aena-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(structuredData)}
        </Script>


        {/* =========================================
            LINKEDIN INSIGHT TAG
        ========================================= */}

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


        {/* LinkedIn fallback for users without JavaScript */}

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=10671521&fmt=gif"
          />
        </noscript>


        {/* =========================================
            SITE NAVIGATION
        ========================================= */}

        <Navbar />


        {/* =========================================
            PAGE CONTENT
        ========================================= */}

        <main>
          {children}
        </main>


        {/* =========================================
            FOOTER
        ========================================= */}

        <Footer />

      </body>
    </html>
  );
}