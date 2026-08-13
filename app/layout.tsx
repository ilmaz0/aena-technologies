import type { Metadata } from "next";
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

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-white antialiased">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}