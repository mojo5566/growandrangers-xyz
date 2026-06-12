import type { ReactNode } from "react";
import Link from "next/link";

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
}: {
  title: string;
  description: string;
  canonicalPath: string;
  updatedAt?: string;
}) {
  const dateModified = updatedAt
    ? new Date(updatedAt).toISOString().split("T")[0]
    : "2026-06-12";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-06-01",
    dateModified,
    author: { "@type": "Organization", name: "BloxPulse" },
    publisher: { "@type": "Organization", name: "BloxPulse" },
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

export default function ContentLayout({
  title,
  description,
  breadcrumbs,
  accent,
  canonicalPath,
  updatedAt,
  children,
}: ContentLayoutProps) {
  const accentColor = accent === "garden" ? "#00E676" : "#FF3D00";
  const accentBg = accent === "garden" ? "rgba(0,230,118,0.08)" : "rgba(255,61,0,0.08)";
  const displayDate = updatedAt || "June 2026";

  return (
    <article className="mx-auto max-w-[1200px] px-4 py-8 lg:px-6 lg:py-12">
      <BreadcrumbSchema items={breadcrumbs} />
      <ArticleJsonLd
        title={title}
        description={description}
        canonicalPath={canonicalPath}
        updatedAt={updatedAt}
      />

      <link rel="canonical" href={`https://growandrangers.xyz${canonicalPath}`} />

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
