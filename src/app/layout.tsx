import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["600", "700"],
  display: "swap",
});

const BASE_URL = "https://growandrangers.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "BloxPulse — Roblox Codes, Tier Lists & Gameplay Guides",
    template: "%s | BloxPulse",
  },
  description:
    "Your daily index for updated working Roblox promo codes, meta tier rankings, item values, and in-depth gameplay guides for Grow a Garden and Anime Rangers X.",
  keywords: [
    "Roblox codes",
    "Grow a Garden codes",
    "Anime Rangers X codes",
    "Roblox tier list",
    "game guide",
    "mutation tier list",
    "unit tier list",
  ],
  openGraph: {
    type: "website",
    siteName: "BloxPulse",
    title: "BloxPulse — Roblox Codes, Tier Lists & Gameplay Guides",
    description:
      "Updated working codes, meta tier rankings, and in-depth gameplay guides for Grow a Garden and Anime Rangers X.",
    url: BASE_URL,
    locale: "en_US",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "BloxPulse — Roblox Codes, Tier Lists & Gameplay Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BloxPulse — Roblox Codes, Tier Lists & Gameplay Guides",
    description:
      "Updated working Roblox codes, tier lists, and gameplay guides.",
    images: [`${BASE_URL}/og-image.png`],
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
  verification: {
    other: {
      "msvalidate.01": "A1738F333A3FCD40A21B034256FCEAA0",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "BloxPulse",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
      },
      description:
        "Your daily source for working Roblox promo codes, meta tier lists, and in-depth gameplay guides for Grow a Garden and Anime Rangers X.",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: "BloxPulse",
      url: BASE_URL,
      description:
        "Your daily source for working Roblox promo codes, meta tier lists, and in-depth gameplay guides for Grow a Garden and Anime Rangers X.",
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/?search={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6239742227486965"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
