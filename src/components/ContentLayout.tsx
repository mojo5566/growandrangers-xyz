import type { ReactNode } from "react";
import Link from "next/link";
import { CONTENT_UPDATED_AT, normalizeContentDate } from "@/lib/content-dates";

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
  articleSection?: string;
  keywords?: string[];
  about?: { name: string }[];
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
  articleSection,
  keywords,
  about,
}: {
  title: string;
  description: string;
  canonicalPath: string;
  updatedAt?: string;
  publishedAt?: string;
  imageUrl?: string;
  articleSection?: string;
  keywords?: string[];
  about?: { name: string }[];
}) {
  const dateModified = updatedAt
    ? normalizeContentDate(updatedAt)
    : normalizeContentDate(CONTENT_UPDATED_AT);
  // Prefer explicit publishedAt; otherwise fall back to dateModified (most
  // recent known publish date) so we never emit a fabricated/hardcoded date.
  const datePublished = publishedAt
    ? normalizeContentDate(publishedAt)
    : dateModified;
  const fallbackImageUrl = `https://growandrangers.xyz/images/default-guide.webp`;
  const resolvedImageUrl = imageUrl
    ? (imageUrl.startsWith("http") ? imageUrl : `https://growandrangers.xyz${imageUrl}`)
    : fallbackImageUrl;
  const schema: Record<string, unknown> = {
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
    author: { "@type": "Organization", name: "GrowAndRangers Team" },
    publisher: {
      "@type": "Organization",
      name: "GrowAndRangers",
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
  // GEO enhancements — only include fields when provided so empty values
  // don't pollute the schema for database/list pages.
  if (articleSection) schema.articleSection = articleSection;
  if (keywords && keywords.length > 0) schema.keywords = keywords.join(", ");
  if (about && about.length > 0) {
    schema.about = about.map((a) => ({ "@type": "Thing", name: a.name }));
  }

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
  articleSection,
  keywords,
  about,
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
        articleSection={articleSection}
        keywords={keywords}
        about={about}
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

      {/* Author & trust signals */}
      <footer className="mt-12 border-t border-[#252936] pt-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#768294]">
          <span>
            Written by: <strong className="text-[#BAC4D1]">GrowAndRangers Team</strong>
          </span>
          <span>Updated: <strong className="text-[#BAC4D1]">{displayDate}</strong></span>
        </div>
        <p className="text-xs text-[#768294] mt-2">
          Content verified by the GrowAndRangers editorial team • Data sourced from canonical game databases
        </p>
      </footer>
    </article>
  );
}
