import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0F0D0B",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://alfibuilders.com"
  ),
  title: "ALFI Builders & Developers — Known for Quality & Commitment",
  description:
    "ALFI Builders & Developers delivers high-quality residential, commercial, and interior solutions with honesty, transparency and timely delivery.",
  keywords: [
    "construction company Gaya",
    "ALFI Builders",
    "residential construction",
    "commercial construction",
    "interior solutions",
    "project management",
  ],
  authors: [{ name: "Alfi Builders & Developers" }],
  openGraph: {
    title: "ALFI Builders & Developers",
    description:
      "We build more than structures, we build trust.",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "Alfi Builders logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfi Builders & Developers",
    description: "Known for quality & commitment.",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}