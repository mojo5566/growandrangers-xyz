import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import TierTable from "@/components/TierTable";
import Link from "next/link";
import data from "@/data/rangers/tier-list";

export const metadata: Metadata = {
  title: `${data.title} | BloxPulse`,
  description: data.description,
  keywords: [
    "Anime Rangers X tier list",
    "Anime Rangers X best units",
    "Anime Rangers X unit ranking 2026",
    "Chrono Slayer tier",
    "Void Empress build",
    "Anime Rangers X meta",
    "Re:Rangers tier list",
  ],
  alternates: { canonical: "/anime-rangers-x/tier-list" },
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

function ArticleJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    datePublished: "2026-06-09",
    dateModified: "2026-06-12",
    author: { "@type": "Organization", name: "BloxPulse" },
    publisher: { "@type": "Organization", name: "BloxPulse" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://growandrangers.xyz/anime-rangers-x/tier-list",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function TierCard({ card }: { card: typeof data.detailCards[number] }) {
  return (
    <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h3 className="text-base font-semibold text-white">{card.name}</h3>
        <span
          className="code-text inline-block rounded px-2 py-0.5 text-xs font-semibold"
          style={{ color: card.color, backgroundColor: card.color + "1a" }}
        >
          {card.rank}
        </span>
      </div>
      <p className="mt-3 text-sm text-[#BAC4D1] leading-relaxed">{card.desc}</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <h4 className="text-xs font-semibold text-[#00E676] mb-2">✅ Strengths</h4>
          <ul className="space-y-1">
            {card.strengths.map((s, i) => (
              <li key={i} className="flex gap-2 text-xs text-[#BAC4D1]">
                <span className="text-[#00E676] shrink-0">+</span> {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-[#FF3D00] mb-2">⚠️ Weaknesses</h4>
          <ul className="space-y-1">
            {card.weaknesses.map((w, i) => (
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
  );
}

export default function TierListPage() {
  return (
    <>
      <ArticleJsonLd />
      <ContentLayout
        title={data.title}
        description={data.description}
        breadcrumbs={data.breadcrumbs}
        canonicalPath="/anime-rangers-x/tier-list"
        accent="rangers"
        updatedAt={data.updatedAt}
      >
        {/* Last Updated */}
        <section className="rounded-xl border border-[#252936] bg-[#14161D] p-4" aria-label="Last updated">
          <div className="flex items-center gap-2">
            <span className="text-sm">🕒</span>
            <p className="text-sm text-[#BAC4D1]">
              <strong className="text-white">Last Updated:</strong> {data.updatedAt} — Post-Re:Rangers balance update. All rankings verified.
            </p>
          </div>
        </section>

        {/* Tier Explanation */}
        <section aria-labelledby="explanation-heading">
          <h2 id="explanation-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
            📊 Tier Rankings Explained
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {data.tierExplanation.map((t) => (
              <div key={t.tier} className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="rounded px-2 py-0.5 text-xs font-bold"
                    style={{ color: t.color, backgroundColor: t.color + "1a" }}
                  >
                    {t.tier}-TIER
                  </span>
                  <span className="text-xs text-[#768294]">{t.label}</span>
                </div>
                <p className="text-xs text-[#BAC4D1] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* S-Tier */}
        <section aria-labelledby="s-tier">
          <h2 id="s-tier" className="font-heading text-[22px] font-semibold text-white lg:text-[26px] mb-1" style={{ color: tierColors.S }}>
            🔴 S-Tier — Meta-Defining Units
          </h2>
          <p className="text-sm text-[#768294] mb-4">
            These two Mythic units define the endgame meta. Highest base stats, game-changing ultimates, and the best Infinite Mode scaling in the game. If you pull either one, build your entire team strategy around them.
          </p>
          <TierTable rows={data.tiers[0].entries} colHeaders={["UNIT", "TIER", "ROLE"]} />
          <div className="mt-4 space-y-4">
            <TierCard card={data.detailCards[0]} />
            <TierCard card={data.detailCards[1]} />
          </div>
        </section>

        {/* A-Tier */}
        <section aria-labelledby="a-tier">
          <h2 id="a-tier" className="font-heading text-[22px] font-semibold text-white lg:text-[26px] mb-1" style={{ color: tierColors.A }}>
            🟠 A-Tier — Excellent Units
          </h2>
          <p className="text-sm text-[#768294] mb-4">
            Strong Legendary and Epic units with significantly better summon rates than Mythics (3.2%–5.8%). These form the backbone of competitive teams and are worth investing Awakening Cores and Evolution Stones. A full A-Tier team can clear wave 80+.
          </p>
          <TierTable rows={data.tiers[1].entries} colHeaders={["UNIT", "TIER", "ROLE"]} />
          <div className="mt-4 space-y-4">
            <TierCard card={data.detailCards[2]} />
            <TierCard card={data.detailCards[3]} />
            <TierCard card={data.detailCards[4]} />
          </div>
        </section>

        {/* B-Tier */}
        <section aria-labelledby="b-tier">
          <h2 id="b-tier" className="font-heading text-[22px] font-semibold text-white lg:text-[26px] mb-1" style={{ color: tierColors.B }}>
            🟡 B-Tier — Solid Mid-Game Options
          </h2>
          <p className="text-sm text-[#768294] mb-4">
            Viable units for mid-game progression (waves 20–60). Each fills a specific niche — assassin, healer, tank. Save your best resources for A/S-Tier units but evolve B-Tier units to level 60 if you have not pulled higher tier replacements yet.
          </p>
          <TierTable rows={data.tiers[2].entries} colHeaders={["UNIT", "TIER", "ROLE"]} />
          <div className="mt-4 space-y-4">
            <TierCard card={data.detailCards[5]} />
            <TierCard card={data.detailCards[6]} />
            <TierCard card={data.detailCards[7]} />
          </div>
        </section>

        {/* C-Tier */}
        <section aria-labelledby="c-tier">
          <h2 id="c-tier" className="font-heading text-[22px] font-semibold text-white lg:text-[26px] mb-1" style={{ color: tierColors.C }}>
            🔵 C-Tier — Starter Units
          </h2>
          <p className="text-sm text-[#768294] mb-4">
            Free starter units to learn the game. Low stats and no unique passives. Replace immediately after your first Rare+ summon. Do not invest Evolution Stones, Awakening Cores, or Trait Rolls in any C-Tier unit.
          </p>
          <TierTable rows={data.tiers[3].entries} colHeaders={["UNIT", "TIER", "ROLE"]} />
          <div className="mt-4">
            <TierCard card={data.detailCards[8]} />
          </div>
        </section>

        {/* Best for Beginners */}
        <section aria-labelledby="beginner-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <h2 id="beginner-heading" className="font-heading text-[20px] font-semibold text-white mb-4">
            🆕 Best Units for Beginners
          </h2>
          <p className="text-sm text-[#BAC4D1] leading-relaxed mb-4">
            If you are a new player, focus on pulling these units first. Their combination of accessibility (summon rate) and power makes them the most impactful early-game investments.
          </p>
          <div className="space-y-3">
            {data.beginnerPicks!.map((p, i) => (
              <div key={i} className="flex gap-3 rounded-lg border border-[#252936] bg-[#1E212B] p-4">
                <span className="text-lg font-bold text-[#FF8C00] shrink-0">{i + 1}</span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{p.name}</h3>
                  <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                    <strong className="text-[#00E676]">Why:</strong> {p.why}
                  </p>
                  <p className="mt-1 text-xs text-[#768294]">
                    <strong className="text-[#FF3D00]">When to replace:</strong> {p.replacement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Progression Advice */}
        <section aria-labelledby="progression-heading">
          <h2 id="progression-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
            📈 Progression Roadmap
          </h2>
          <p className="text-sm text-[#768294] mb-4">
            Follow this roadmap to build your team from a fresh account to endgame leaderboard competitive. Each stage shows target units and goals.
          </p>
          <div className="overflow-hidden rounded-xl border border-[#252936]">
            <div className="grid grid-cols-[100px_1.3fr_1.3fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
              <span className="text-xs font-semibold text-[#768294]">STAGE</span>
              <span className="text-xs font-semibold text-[#768294]">TARGET UNITS</span>
              <span className="text-xs font-semibold text-[#768294]">GOAL</span>
            </div>
            {data.progressionAdvice!.map((p, i) => (
              <div key={i} className="grid grid-cols-[100px_1.3fr_1.3fr] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition">
                <span className={`text-sm font-semibold ${i === 0 ? "text-[#3A86FF]" : i === 1 ? "text-[#FFD700]" : i === 2 ? "text-[#FF8C00]" : "text-[#FF3D00]"}`}>{p.stage}</span>
                <span className="text-xs text-[#BAC4D1]">{p.targetUnits}</span>
                <span className="text-xs text-[#768294]">{p.goal}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Best Team Compositions */}
        <section aria-labelledby="teams-heading">
          <h2 id="teams-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
            ⚔️ Best Team Compositions
          </h2>
          <div className="space-y-3">
            {data.teamComps!.map((t, i) => (
              <div key={i} className="rounded-xl border-l-2 border-[#FF3D00] bg-[#14161D] p-4 border border-[#252936] border-l-[#FF3D00]">
                <h3 className="text-sm font-semibold text-white">{t.name}</h3>
                <p className="mt-1 text-xs text-[#BAC4D1]">
                  <strong className="text-[#768294]">Units:</strong> {t.units}
                </p>
                <p className="mt-0.5 text-xs text-[#768294]">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Strategy Tips */}
        <section aria-labelledby="tips-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <h2 id="tips-heading" className="font-heading text-[20px] font-semibold text-white mb-4">
            💡 Pro Tips
          </h2>
          <ul className="space-y-3">
            {data.strategyTips!.map((tip, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#BAC4D1]">
                <span className="text-[#FF3D00] shrink-0 font-bold">▸</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Related Guides */}
        <section aria-labelledby="related-heading">
          <h2 id="related-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
            🔗 Related Anime Rangers X Guides
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.relatedGuides.map((g, i) => (
              <Link key={i} href={g.href} className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00] group">
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
    </>
  );
}
