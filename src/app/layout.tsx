import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mayareynoldspsyd.com"),
  title: "Dr. Maya Reynolds, PsyD | Therapy for Anxiety, Trauma & Burnout in Santa Monica, CA",
  description:
    "Licensed Clinical Psychologist in Santa Monica, CA offering in-person and California telehealth therapy for adults, professionals, and creatives experiencing anxiety, panic, trauma (EMDR), and burnout.",
  keywords: [
    "Therapy Santa Monica",
    "Psychologist Santa Monica CA",
    "Anxiety Therapy Santa Monica",
    "EMDR Trauma Therapy California",
    "Burnout Therapy for Professionals",
    "Dr. Maya Reynolds PsyD",
    "Cognitive Behavioral Therapy Santa Monica",
    "California Telehealth Therapy",
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  creator: "Dr. Maya Reynolds, PsyD",
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Anxiety, Trauma & Burnout Therapy in Santa Monica, CA",
    description:
      "A grounded, collaborative approach to deep healing. In-person therapy in Santa Monica and secure telehealth throughout California.",
    url: "https://www.mayareynoldspsyd.com",
    siteName: "Dr. Maya Reynolds Therapy",
    images: [
      {
        url: "/images/maya-reynolds.png",
        width: 1200,
        height: 630,
        alt: "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Maya Reynolds, PsyD | Santa Monica Therapy",
    description: "In-person therapy in Santa Monica, CA & secure California telehealth.",
    images: ["/images/maya-reynolds.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}>
      <head>
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Santa Monica" />
        <meta name="geo.position" content="34.0195;-118.4912" />
        <meta name="ICBM" content="34.0195, -118.4912" />
      </head>
      <body className="font-sans text-charcoal bg-ivory antialiased min-h-screen flex flex-col selection:bg-sage-200 selection:text-sage-900">
        {children}
      </body>
    </html>
  );
}
