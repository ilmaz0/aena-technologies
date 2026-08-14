import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Automation & Machine Retrofit Contact",

  description:
    "Contact AENA Technologies for industrial automation, machine retrofit, machine modernization, PLC programming, electrical engineering, drive systems and technical evaluation services in Turkey and international markets.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title:
      "Industrial Automation & Machine Retrofit Contact | AENA Technologies",

    description:
      "Request a technical evaluation for industrial machine retrofit, automation, electrical engineering, PLC, drive and motion control projects.",

    url: "https://www.aenatechnologies.com/contact",

    siteName: "AENA Technologies",

    type: "website",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}