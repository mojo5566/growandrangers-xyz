import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import TierTable from "@/components/TierTable";
import Link from "next/link";
import data from "@/data/garden/mutation-tier-list";

export const metadata: Metadata = {
  title: `${data.title}`,
  description: data.description,
  keywords: [
    "Grow a Garden mutation tier list",
    "Grow a Garden best mutations",
    "Grow a Garden mutation ranking",
    "mutation tier list 2026",
    "Grow a Garden S-tier",
    "Aurelian Crown",
    "Leporine Bloom",
  ],
  alternates: { canonical: "/grow-a-garden/mutation-tier-list" },
  openGraph: {
    title: data.title,
    description: data.description,
    type: "website",
  },
};

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

export default function MutationTierListPage() {
  return (
    <ContentLayout
      title={data.title}
      description={data.description}
      breadcrumbs={data.breadcrumbs}
      canonicalPath="/grow-a-garden/mutation-tier-list"
      accent="garden"
      updatedAt={data.updatedAt}
    >
      {/* Tier Explanation */}
      <section aria-labelledby="explanation-heading">
        <h2
          id="explanation-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          📊 Tier Ranking System
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {data.tierExplanation.map((t) => (
            <div key={t.tier} className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
              <span className="code-text text-lg" style={{ color: t.color }}>
                {t.tier}-Tier
              </span>
              <p className="mt-1 text-sm font-semibold text-white">{t.label}</p>
              <p className="mt-1 text-xs text-[#768294]">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Per-Tier Sections */}
      {data.tiers.map((tierGroup) => {
        const tierColor = tierColors[tierGroup.name.charAt(0)] || "#3A86FF";
        return (
          <section key={tierGroup.name} aria-labelledby={`tier-${tierGroup.name.charAt(0)}`}>
            <h2
              id={`tier-${tierGroup.name.charAt(0)}`}
              className="font-heading text-[22px] font-semibold text-white lg:text-[26px] mb-2"
              style={{ color: tierColor }}
            >
              {tierGroup.name}
            </h2>
            <p className="text-sm text-[#768294] mb-4">{tierGroup.description}</p>
            <TierTable rows={tierGroup.entries} colHeaders={["MUTATION", "TIER", "EFFECT"]} />
          </section>
        );
      })}

      {/* Detailed Cards */}
      <section aria-labelledby="details-heading">
        <h2
          id="details-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          🔍 Detailed Mutation Analysis
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
              {card.bestUse && (
                <div className="mt-4 rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
                  <h4 className="text-xs font-semibold text-[#3A86FF] mb-1">🎯 Best Use Case</h4>
                  <p className="text-xs text-[#BAC4D1] leading-relaxed">{card.bestUse}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Rolling Strategy */}
      <section
        aria-labelledby="strategy-heading"
        className="rounded-xl border border-[#252936] bg-[#14161D] p-5"
      >
        <h2
          id="strategy-heading"
          className="font-heading text-[20px] font-semibold text-white mb-3"
        >
          🎯 Mutation Rolling Strategy
        </h2>
        <ul className="space-y-2">
          {data.strategyTips!.map((tip, i) => (
            <li key={i} className="flex gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0">▸</span>
              <span dangerouslySetInnerHTML={{ __html: tip }} />
            </li>
          ))}
        </ul>
      </section>

      {/* Related Guides */}
      <section aria-labelledby="related-heading">
        <h2
          id="related-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          🔗 Related Grow a Garden Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.relatedGuides.map((g, i) => (
            <Link
              key={i}
              href={g.href}
              className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676] group"
            >
              <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
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
