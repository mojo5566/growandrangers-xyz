import Link from "next/link";
import { getRelatedLinks } from "@/lib/related-content";
import type { RelatedLink } from "@/data/types";

interface RelatedContentProps {
  category: "crops" | "mutations" | "pets" | "units" | "traits" | "guide";
  game: "garden" | "rangers";
  currentPath?: string;
  limit?: number;
}

export default function RelatedContent({
  category,
  game,
  currentPath,
  limit = 3,
}: RelatedContentProps) {
  const accentColor = game === "garden" ? "#00E676" : "#FF3D00";
  const accentBorder = game === "garden" ? "#00E676" : "#FF3D00";

  const links: RelatedLink[] = getRelatedLinks(category, game, currentPath, limit);

  if (links.length === 0) return null;

  return (
    <section aria-labelledby="related-heading">
      <h2
        id="related-heading"
        className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
      >
        🔗 Related Guides &amp; Database
      </h2>
      <div
        className="grid gap-3 sm:grid-cols-3"
        style={{
          gridTemplateColumns: `repeat(${Math.min(links.length, 3)}, minmax(0, 1fr))`,
        }}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676]"
            style={{ ["--hover-border" as string]: accentBorder } as React.CSSProperties}
          >
            <span
              className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[var(--hover-accent)] transition"
              style={{ color: "inherit" } as React.CSSProperties}
            >
              {link.label} →
            </span>
            <p className="mt-1 text-xs text-[#768294]">{link.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
