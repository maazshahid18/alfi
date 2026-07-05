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
  title: "Alfi Builders & Developers — Known for Quality & Commitment",
  description:
    "Engineering construction and project management since 2009. Residential, commercial, institutional, and infrastructure projects across India.",
  keywords: [
    "construction company Gaya",
    "Alfi Builders",
    "civil engineering",
    "building construction",
    "power substation",
    "project management",
  ],
  authors: [{ name: "Alfi Builders & Developers" }],
  openGraph: {
    title: "Alfi Builders & Developers",
    description:
      "Known for quality & commitment. Engineering construction since 2009.",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/images/logo.jpeg", width: 512, height: 512, alt: "Alfi Builders logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfi Builders & Developers",
    description: "Known for quality & commitment.",
  },
  icons: {
    icon: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
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