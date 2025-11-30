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
  "Indian military drone technology",
  ],
  
   metadataBase: new URL("https://www.kalamlabs.io"),
  // ✅ Full hreflang support
  alternates: {
    canonical: "https://www.kalamlabs.io",
    languages: {
      "en-IN": "https://www.kalamlabs.io",
      en: "https://www.kalamlabs.io",
      "x-default": "https://www.kalamlabs.io",
    },
  },

  // OG Metadata
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

  // Robots
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Basic SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Kalam Labs Aerospace Division" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.position" content="26.4499;80.3319" />
        <meta name="ICBM" content="26.4499, 80.3319" />

        {/* hreflang links auto-handled but we keep manual too (OK) */}
        <link rel="alternate" href="https://kalamlabs.io" hrefLang="en-IN" />
        <link rel="alternate" href="https://kalamlabs.io" hrefLang="en" />
        <link rel="alternate" href="https://kalamlabs.io" hrefLang="x-default" />

        {/* FAQ Schema Component */}
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

        {/* BING */}
        <meta name="msvalidate.01" content="YOUR_BING_CODE_HERE" />

        {/* YANDEX */}
        <meta name="yandex-verification" content="YOUR_YANDEX_CODE_HERE" />

        {/* ORGANIZATION SCHEMA */}
        <Script
          id="organization-schema"
          type="application/ld+json"
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

        {/* Google Ads */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17766352420"
        />
        <Script id="google-ads-script">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17766352420');
          `}
        </Script>

        {/* CWV Optimization */}
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
        <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />

        {/* Disable mobile pinch zoom (your original setting) */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />

        {/* Vercel Analytics */}
        <Script defer src="https://vercel.live/analytics/script.js" />
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
