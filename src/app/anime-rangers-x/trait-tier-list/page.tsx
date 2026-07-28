import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import TierTable from "@/components/TierTable";
import Link from "next/link";
import data from "@/data/rangers/trait-tier-list";

export const metadata: Metadata = {
  title: `${data.title}`,
  description: data.description,
  keywords: [
    "Anime Rangers X trait tier list",
    "Re:Rangers X best traits",
    "Time Rewind trait",
    "God-Speed trait",
    "trait reroll guide",
    "Void Touch",
    "Monarch trait",
  ],
  alternates: { canonical: "/anime-rangers-x/trait-tier-list" },
  openGraph: {
    title: data.title,
    description: data.description,
    type: "website",
  },
};

const tierColors: Record<string, string> = {
  Mythic: "#FF3D00",
  Legendary: "#FF8C00",
  Epic: "#A020F0",
  Rare: "#3A86FF",
  Common: "#3A86FF",
};

export default function TraitTierListPage() {
  return (
    <ContentLayout
      title={data.title}
      description={data.description}
      breadcrumbs={data.breadcrumbs}
      canonicalPath="/anime-rangers-x/trait-tier-list"
      accent="rangers"
      updatedAt={data.updatedAt}
    >
      {/* Tier Explanation */}
      <section aria-labelledby="tiers-heading">
        <h2 id="tiers-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          Trait Ranking System
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {data.tierExplanation.map((t) => (
            <div key={t.tier} className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
              <span className="code-text text-sm" style={{ color: t.color }}>
                {t.tier}
              </span>
              <p className="mt-1 text-sm font-semibold text-white">{t.label}</p>
              <p className="mt-1 text-xs text-[#768294]">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Per-Tier Sections */}
      {data.tiers.map((tierGroup) => {
        const tierKey = tierGroup.name.split("-")[0].trim();
        const tierColor = tierColors[tierKey] || "#3A86FF";
        return (
          <section key={tierGroup.name} aria-labelledby={`tier-${tierKey}`}>
            <h2
              id={`tier-${tierKey}`}
              className="font-heading text-[22px] font-semibold text-white lg:text-[26px] mb-2"
              style={{ color: tierColor }}
            >
              {tierGroup.name}
            </h2>
            <p className="text-sm text-[#768294] mb-4">{tierGroup.description}</p>
            <TierTable rows={tierGroup.entries} colHeaders={["TRAIT", "TIER", "EFFECT"]} />
          </section>
        );
      })}

      {/* Detailed Cards */}
      <section aria-labelledby="details-heading">
        <h2 id="details-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          🔍 Detailed Trait Analysis
        </h2>
        <div className="space-y-4">
          {data.detailCards.map((card) => (
            <div key={card.name} className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                <h3 className="text-base font-semibold text-white">{card.name}</h3>
                <span
                  className="code-text inline-block rounded px-2 py-0.5 text-xs font-semibold"
                  style={{ color: card.color, backgroundColor: card.color + "1a" }}
                >
                  {card.rank}
                </span>
              </div>
              <p className="text-sm text-[#BAC4D1] leading-relaxed mb-4">{card.desc}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold text-[#00E676] mb-2">✅ Strengths</h4>
                  <ul className="space-y-1">
                    {(card.strengths || []).map((s, i) => (
                      <li key={i} className="flex gap-2 text-xs text-[#BAC4D1]">
                        <span className="text-[#00E676] shrink-0">+</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#FF3D00] mb-2">⚠️ Weaknesses</h4>
                  <ul className="space-y-1">
                    {(card.weaknesses || []).map((w, i) => (
                      <li key={i} className="flex gap-2 text-xs text-[#BAC4D1]">
                        <span className="text-[#FF3D00] shrink-0">-</span> {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {card.bestOn && (
                <div className="mt-4 rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
                  <h4 className="text-xs font-semibold text-[#3A86FF] mb-1">🎯 Best On</h4>
                  <p className="text-xs text-[#BAC4D1] leading-relaxed">{card.bestOn}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Optimal Pairings */}
      {data.pairingTable && data.pairingTable.length > 0 && (
        <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <h2 className="font-heading text-[20px] font-semibold text-white mb-3">
            🎯 Optimal Trait-to-Unit Pairings
          </h2>
          <div className="space-y-2">
            {data.pairingTable.map((row, i) => (
              <div key={i} className="border-l-2 border-[#FF3D00] bg-[#1E212B] p-3">
                <span className="text-sm font-semibold text-[#BAC4D1]">{row.trait}</span>
                <span className="text-xs text-[#768294] ml-2">→ {row.unit}</span>
                <p className="mt-1 text-xs text-[#768294]">{row.why}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Guides */}
      <section aria-labelledby="related">
        <h2 id="related" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          🔗 Related Anime Rangers X Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.relatedGuides.map((g, i) => (
            <Link
              key={i}
              href={g.href}
              className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00] group"
            >
              <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#FF3D00] transition">
                {g.label} →
              </span>
              <p className="mt-1 text-xs text-[#768294]">{g.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <ContentFAQ faqs={data.faq} />
    </ContentLayout>
  );
}
