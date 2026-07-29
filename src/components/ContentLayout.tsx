import type { ReactNode } from "react";
import Link from "next/link";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface ContentLayoutProps {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  accent: "garden" | "rangers";
  canonicalPath: string;
  updatedAt?: string;
  publishedAt?: string;
  imageUrl?: string;
  itemList?: { name: string; position: number; url: string }[];
  children: ReactNode;
}

function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `https://growandrangers.xyz${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function ArticleJsonLd({
  title,
  description,
  canonicalPath,
  updatedAt,
  publishedAt,
  imageUrl,
}: {
  title: string;
  description: string;
  canonicalPath: string;
  updatedAt?: string;
  publishedAt?: string;
  imageUrl?: string;
}) {
  const dateModified = updatedAt
    ? new Date(updatedAt).toISOString().split("T")[0]
    : new Date(CONTENT_UPDATED_AT).toISOString().split("T")[0];
  // Prefer explicit publishedAt; otherwise fall back to dateModified (most
  // recent known publish date) so we never emit a fabricated/hardcoded date.
  const datePublished = publishedAt
    ? new Date(publishedAt).toISOString().split("T")[0]
    : dateModified;
  const fallbackImageUrl = `https://growandrangers.xyz/images/default-guide.webp`;
  const resolvedImageUrl = imageUrl
    ? (imageUrl.startsWith("http") ? imageUrl : `https://growandrangers.xyz${imageUrl}`)
    : fallbackImageUrl;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified,
    image: {
      "@type": "ImageObject",
      url: resolvedImageUrl,
      width: 1200,
      height: 675,
    },
    author: { "@type": "Organization", name: "BloxPulse" },
    publisher: {
      "@type": "Organization",
      name: "BloxPulse",
      logo: {
        "@type": "ImageObject",
        url: `https://growandrangers.xyz/og-image.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://growandrangers.xyz${canonicalPath}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function ItemListSchema({ items }: { items: { name: string; position: number; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      url: `https://growandrangers.xyz${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ContentLayout({
  title,
  description,
  breadcrumbs,
  accent,
  canonicalPath,
  updatedAt,
  publishedAt,
  imageUrl,
  itemList,
  children,
}: ContentLayoutProps) {
  const accentColor = accent === "garden" ? "#00E676" : "#FF3D00";
  const accentBg = accent === "garden" ? "rgba(0,230,118,0.08)" : "rgba(255,61,0,0.08)";
  const displayDate = updatedAt || CONTENT_UPDATED_AT;

  return (
    <article className="mx-auto max-w-[1200px] px-4 py-8 lg:px-6 lg:py-12">
      <BreadcrumbSchema items={breadcrumbs} />
      <ArticleJsonLd
        title={title}
        description={description}
        canonicalPath={canonicalPath}
        updatedAt={updatedAt}
        publishedAt={publishedAt}
        imageUrl={imageUrl}
      />
      {itemList && <ItemListSchema items={itemList} />}

      {/* Canonical is handled via Next.js metadata API in each page */}

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#768294]">
          {breadcrumbs.map((crumb, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i < breadcrumbs.length - 1 ? (
                <Link href={crumb.href} className="hover:text-[#3A86FF] transition">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#BAC4D1]">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <span
          className="code-text inline-block rounded-md px-2.5 py-1 mb-3"
          style={{ color: accentColor, backgroundColor: accentBg }}
        >
          {accent === "garden" ? "🌱 GROW A GARDEN" : "⚔️ ANIME RANGERS X"}
        </span>
        <h1 className="font-heading text-[32px] font-bold text-white leading-tight lg:text-[40px]">
          {title}
        </h1>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#768294]">
          {description}
        </p>
      </header>

      {/* Content */}
      <div className="space-y-8">{children}</div>

      {/* Updated date */}
      <footer className="mt-12 border-t border-[#252936] pt-6">
        <p className="text-xs text-[#768294]">
          Last updated: {displayDate} • Content verified by the BloxPulse editorial team
        </p>
      </footer>
    </article>
  );
}
