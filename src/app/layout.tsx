import type { Metadata } from "next";
import { Roboto_Mono, Space_Grotesk } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const robotoMono = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Kalam Labs - Advanced Stratospheric Aerial Systems",
  description:
    "Near space aerial vehicles operating at 100,000+ ft for high-altitude reconnaissance and surveillance missions. Advanced stealth technology for strategic operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* ⭐ MUST HAVE — Fixes 90% of mobile shrink issues */}
      <head>
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
  />
</head>


      <body
        className={`${robotoMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
