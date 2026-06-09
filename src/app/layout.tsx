import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://bloxpulse.com";

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
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "BloxPulse",
    title: "BloxPulse — Roblox Codes, Tier Lists & Gameplay Guides",
    description:
      "Updated working codes, meta tier rankings, and in-depth gameplay guides for Grow a Garden and Anime Rangers X.",
    url: BASE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BloxPulse — Roblox Codes, Tier Lists & Gameplay Guides",
    description:
      "Updated working Roblox codes, tier lists, and gameplay guides.",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BloxPulse",
  url: BASE_URL,
  description:
    "Your daily source for working Roblox promo codes, meta tier lists, and in-depth gameplay guides for Grow a Garden and Anime Rangers X.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
