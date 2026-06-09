import type { ReactNode } from "react";
import SEODataTable from "./SEODataTable";

interface TableLink {
  title: string;
  href: string;
  meta: string;
}

interface GameHubProps {
  id: string;
  accent: "garden" | "rangers";
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  tableLinks: TableLink[];
  patchDate: string;
  patchTitle: string;
  patchDescription: string;
  children?: ReactNode;
}

export default function GameHub({
  id,
  accent,
  icon,
  title,
  subtitle,
  description,
  tableLinks,
  patchDate,
  patchTitle,
  patchDescription,
  children,
}: GameHubProps) {
  const accentColor = accent === "garden" ? "#00E676" : "#FF3D00";
  const accentBg = accent === "garden" ? "rgba(0,230,118,0.08)" : "rgba(255,61,0,0.08)";

  return (
    <section
      id={id}
      className="mx-auto max-w-[1200px] px-4 py-12 lg:px-6 lg:py-16"
      aria-labelledby={`${id}-heading`}
    >
      {/* Content Header Group */}
      <div className="mb-8" style={{ padding: "0" }}>
        <span
          className="code-text inline-block rounded-md px-2.5 py-1"
          style={{ color: accentColor, backgroundColor: accentBg }}
        >
          {icon} {subtitle}
        </span>
        <h2
          id={`${id}-heading`}
          className="mt-2 font-heading text-[24px] font-semibold text-white lg:text-[32px]"
        >
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-[#BAC4D1]">
          {description}
        </p>
      </div>

      {/* SEO Data Table */}
      <div className="mb-6">
        <SEODataTable
          rows={tableLinks}
          col1Header="📋 GUIDE DIRECTORY"
          col2Header="📊 TYPE"
        />
      </div>

      {/* Patch Notes */}
      <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h3 className="font-heading text-sm font-semibold text-white lg:text-base">
          📅 Latest Patch Notes &amp; Game Updates
        </h3>
        <p className="mt-1 text-xs text-[#768294]">
          {patchDate} — <strong className="text-[#BAC4D1]">{patchTitle}</strong>
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[#768294]">{patchDescription}</p>
      </div>

      {children}
    </section>
  );
}
