import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aenatechnologies.com"),

  title: {
    default: "AENA Technologies | Industrial Automation & Machine Retrofit",
    template: "%s | AENA Technologies",
  },

  description:
    "AENA Technologies provides industrial automation, machine retrofit, machine modernization, PLC programming, electrical engineering and control systems services.",

  keywords: [
    "industrial automation",
    "machine retrofit",
    "machine modernization",
    "industrial automation Turkey",
    "machine retrofit Turkey",
    "PLC programming",
    "PLC automation",
    "SCADA",
    "electrical engineering",
    "machine automation",
    "production line modernization",
    "industrial control systems",
  ],

  authors: [
    {
      name: "AENA Technologies",
    },
  ],

  creator: "AENA Technologies",
  publisher: "AENA Technologies",

  alternates: {
    canonical: "https://www.aenatechnologies.com",
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
    title: "AENA Technologies | Industrial Automation & Machine Retrofit",
    description:
      "Industrial automation, machine retrofit, machine modernization, PLC, SCADA and electrical engineering services.",
    siteName: "AENA Technologies",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "AENA Technologies | Industrial Automation & Machine Retrofit",
    description:
      "Industrial automation, machine retrofit, machine modernization, PLC, SCADA and electrical engineering services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}