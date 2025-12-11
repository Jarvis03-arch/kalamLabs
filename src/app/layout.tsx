import type { Metadata } from "next";
import { Roboto_Mono, Space_Grotesk } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Script from "next/script";
import FAQSchema from "@/components/SEO/FAQSchema";

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
  title:
    "Kalam Labs – Stratospheric UAV Systems | High-Altitude Surveillance & Near-Space Platforms",
  description:
    "Kalam Labs builds stratospheric UAVs, radiosondes, aerospace systems and high-altitude surveillance platforms operating at 50,000–100,000+ ft. Trusted by DRDO, Army & Air Force.",
  keywords: [
    "stratospheric UAV India",
    "high altitude UAV",
    "near space drone",
    "Indian aerospace startup",
    "reusable radiosonde",
    "weather balloon alternative",
    "ISR UAV India",
    "high altitude surveillance",
    "Indian defense drone startup",
    "edge of space drone",
    "meteorology UAV India",
    "radiosonde India",
    "UAV swarm India",
    "stratospheric platform",
    "100000 ft drone",
    "defense reconnaissance drone",
    "kalam labs",
    "Kalam Labs",
    "Kalam labs",
    "kalam Labs",
    "kalamlabs",
    "Kalamlabs",
    "KalamLabs",
    "KalamLabs",
    "Indian military drone technology",
  ],

  metadataBase: new URL("https://www.kalamlabs.io"),

  alternates: {
    canonical: "https://www.kalamlabs.io",
    languages: {
      "en-IN": "https://www.kalamlabs.io",
      en: "https://www.kalamlabs.io",
      "x-default": "https://www.kalamlabs.io",
    },
  },

  openGraph: {
    title: "Kalam Labs – High-Altitude Stratospheric UAV Systems",
    description:
      "Advanced high-altitude UAVs & radiosondes operating at 100,000+ ft for surveillance, meteorology, reconnaissance & defense applications.",
    url: "https://www.kalamlabs.io",
    siteName: "Kalam Labs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kalam Labs – Stratospheric UAV Systems",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@kalamlabs",
    creator: "@kalamlabs",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // single, canonical viewport definition
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Basic SEO extras */}
        <meta name="author" content="Kalam Labs Aerospace Division" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.position" content="26.4499;80.3319" />
        <meta name="ICBM" content="26.4499, 80.3319" />

        {/* FAQ Schema (ensure matching on-page content) */}
        <FAQSchema />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Preconnects – CWV optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* GOOGLE SEARCH CONSOLE */}
        <meta
          name="google-site-verification"
          content="wNzPicqBOc0abeeYNr_6M67NjngZF0gLt5NPP87ND5I"
        />

        {/* ORGANIZATION SCHEMA */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kalam Labs",
              url: "https://www.kalamlabs.io",
              logo: "https://www.kalamlabs.io/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/kalam-labs",
                "https://twitter.com/kalamlabs",
              ],
            }),
          }}
        />

        {/* WEBSITE SCHEMA */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Kalam Labs",
              url: "https://www.kalamlabs.io",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.kalamlabs.io/?q={search_term}",
                "query-input": "required name=search_term",
              },
            }),
          }}
        />

        {/* BREADCRUMB SCHEMA */}
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.kalamlabs.io/",
                },
              ],
            }),
          }}
        />

        {/* Google Ads / gtag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17766352420"
          strategy="afterInteractive"
        />
        <Script id="google-ads-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17766352420');
          `}
        </Script>

        {/* CWV / misc policies */}
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
        <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />

        {/* Vercel Analytics */}
        <Script
          src="https://vercel.live/analytics/script.js"
          strategy="afterInteractive"
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
