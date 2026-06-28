import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import Link from "next/link";
import data from "@/data/garden/value-list";

export const metadata: Metadata = {
  title: `${data.title} | BloxPulse`,
  description: data.description,
  keywords: [
    "Grow a Garden value list",
    "Grow a Garden crop values 2026",
    "best crops Grow a Garden",
    "crop profit guide",
    "Grow a Garden farming tier list",
    "Golden Wheat coins",
    "Grow a Garden coin farming",
  ],
  alternates: { canonical: "/grow-a-garden/crop-value-list" },
  openGraph: {
    title: data.title,
    description: data.description,
    type: "website",
  },
};

const tierBadge: Record<string, string> = {
  S: "bg-[#FF3D00]/20 text-[#FF3D00]",
  A: "bg-[#FF8C00]/20 text-[#FF8C00]",
  B: "bg-[#FFD700]/20 text-[#FFD700]",
  C: "bg-[#3A86FF]/20 text-[#3A86FF]",
};

const tierHeadings: Record<string, string> = {
  S: "🔴 S Tier — Best Crops in the Game",
  A: "🟠 A Tier — Excellent Seasonal Specialists",
  B: "🟡 B Tier — Solid Niche Options",
  C: "🔵 C Tier — Starter & Tutorial Crops",
};

const tierOrder = ["S", "A", "B", "C"] as const;

function ArticleJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    datePublished: "2026-06-09",
    dateModified: "2026-06-12",
    author: {
      "@type": "Organization",
      name: "BloxPulse",
    },
    publisher: {
      "@type": "Organization",
      name: "BloxPulse",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://growandrangers.xyz/grow-a-garden/value-list",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ValueListPage() {
  return (
    <>
      <ArticleJsonLd />
      <ContentLayout
        title={data.title}
        description={data.description}
        breadcrumbs={data.breadcrumbs}
        canonicalPath="/grow-a-garden/value-list"
        accent="garden"
        updatedAt={data.updatedAt}
      >
        {/* Last Updated */}
        <section className="rounded-xl border border-[#252936] bg-[#14161D] p-4" aria-label="Last updated">
          <div className="flex items-center gap-2">
            <span className="text-sm">🕒</span>
            <p className="text-sm text-[#BAC4D1]">
              <strong className="text-white">Last Updated:</strong> {data.updatedAt} — All crop values verified against game data.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section aria-labelledby="intro-heading">
          <h2 id="intro-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
            📖 What Is the Grow a Garden Value List?
          </h2>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
            <p className="text-sm text-[#BAC4D1] leading-relaxed">{data.introduction}</p>
            <h3 className="mt-5 mb-3 text-xs font-semibold text-[#768294] uppercase tracking-wider">
              How to Use This Value List
            </h3>
            <ul className="space-y-2">
              {data.valueListUses.map((use, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[#BAC4D1]">
                  <span className="text-[#00E676] shrink-0 mt-0.5">▸</span>
                  {use}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Crop Value Tier List */}
        <section aria-labelledby="tierlist-heading">
          <h2 id="tierlist-heading" className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-6">
            🌾 Crop Value Tier List
          </h2>

          {tierOrder.map((tier) => (
            <div key={tier} className="mb-8">
              <h3 className="font-heading text-[18px] font-semibold text-white mb-3">{tierHeadings[tier]}</h3>
              <div className="overflow-hidden rounded-xl border border-[#252936]">
                <div className="grid grid-cols-[1fr_80px_80px_60px_1.2fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
                  <span className="text-xs font-semibold text-[#768294]">CROP</span>
                  <span className="text-xs font-semibold text-[#768294]">VALUE</span>
                  <span className="text-xs font-semibold text-[#768294]">TIME</span>
                  <span className="text-xs font-semibold text-[#768294]">CPM</span>
                  <span className="text-xs font-semibold text-[#768294]">BEST USE</span>
                </div>
                {data.tierCrops[tier].map((crop, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[1fr_80px_80px_60px_1.2fr] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`rounded px-1.5 py-0.5 text-xs font-semibold ${tierBadge[crop.season === "All" ? tier : tier]}`}>{tier}</span>
                      <span className="text-sm font-semibold text-[#BAC4D1]">{crop.name}</span>
                    </div>
                    <span className="text-xs text-[#BAC4D1]">{crop.coins} 🪙</span>
                    <span className="text-xs text-[#768294]">{crop.growthTime}</span>
                    <span className="text-xs font-semibold text-[#00E676]">{crop.coinsPerMinute}/min</span>
                    <span className="text-xs text-[#768294]">{crop.recommendedUse}</span>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-xs text-[#768294] leading-relaxed">
                {tier === "S" && "S-Tier crops are the backbone of any profitable farm. Golden Wheat and Crystal Berry are all-season, meaning you never need to rotate them out. These two crops alone can carry your entire farming operation from mid-game through endgame."}
                {tier === "A" && "A-Tier seasonal crops offer excellent returns during their active seasons. The +20% seasonal bonus makes them competitive with S-tier during their window. Outside their season, switch to all-season alternatives."}
                {tier === "B" && "B-Tier crops fill specific niches — Lucky Carrot for high-throughput active play, Moonflower for AFK farming, and Blaze Berry as a Summer bridge. Phase out for higher tiers when seed unlocks become available."}
                {tier === "C" && "C-Tier crops are your starting lineup. While they have the fastest individual growth cycles (15s–1min), their low per-harvest coin values and high attention requirements make them impractical for sustained farming beyond the tutorial phase."}
              </p>
            </div>
          ))}
        </section>

        {/* Best Crops for Beginners */}
        <section aria-labelledby="beginner-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <h2 id="beginner-heading" className="font-heading text-[20px] font-semibold text-white mb-4">
            🌱 Best Crops for Beginners
          </h2>
          <p className="text-sm text-[#BAC4D1] leading-relaxed mb-4">
            When you first start Grow a Garden, your seed options are limited and your coin balance is zero. The goal in the early game is simple: plant the best crops you can afford, harvest consistently, and reinvest every coin into unlocking better seeds.
          </p>
          <div className="space-y-3">
            {data.beginnerCrops.map((c, i) => (
              <div key={i} className="flex gap-3 rounded-lg border border-[#252936] bg-[#1E212B] p-3">
                <span className="text-lg font-bold text-[#00E676] shrink-0">{c.priority}.</span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{c.name}</h3>
                  <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">{c.why}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Best Mid-Game Crops */}
        <section aria-labelledby="midgame-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <h2 id="midgame-heading" className="font-heading text-[20px] font-semibold text-white mb-4">
            🌿 Best Mid-Game Crops
          </h2>
          <p className="text-sm text-[#BAC4D1] leading-relaxed mb-4">
            Mid-game begins once you have unlocked B-tier seeds and have a stable coin income. At this stage, you should transition away from C-tier crops and start building a farm that balances active play with passive income.
          </p>
          <div className="space-y-3">
            {data.midGameCrops.map((c, i) => (
              <div key={i} className="flex gap-3 rounded-lg border border-[#252936] bg-[#1E212B] p-3">
                <span className="text-lg font-bold text-[#FF8C00] shrink-0">{c.priority}.</span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{c.name}</h3>
                  <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">{c.why}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Best End-Game Crops */}
        <section aria-labelledby="endgame-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <h2 id="endgame-heading" className="font-heading text-[20px] font-semibold text-white mb-4">
            🌳 Best Endgame Crops
          </h2>
          <p className="text-sm text-[#BAC4D1] leading-relaxed mb-4">
            Endgame farming is all about multiplicative stacking. With S-tier mutations (4× multiplier) and S-tier pets (5× multiplier), your harvest values increase 20× over base rates. At this stage, your crop selection matters less than your mutation and pet synergy — but the right crop choices still maximize your coins per action.
          </p>
          <div className="space-y-3">
            {data.endgameCrops.map((c, i) => (
              <div key={i} className="flex gap-3 rounded-lg border border-[#252936] bg-[#1E212B] p-3">
                <span className="text-lg font-bold text-[#FF3D00] shrink-0">{c.priority}.</span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{c.name}</h3>
                  <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">{c.why}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Profit Per Hour Comparison */}
        <section aria-labelledby="profit-heading">
          <h2 id="profit-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
            📊 Profit Per Hour Comparison
          </h2>
          <p className="text-sm text-[#768294] mb-4">
            The table below shows how crop profits scale from base values through mutation and pet stacking. Values assume S-tier mutation (4×) and S-tier pet (5×) for the fully stacked column.
          </p>
          <div className="overflow-x-auto rounded-xl border border-[#252936]">
            <div className="min-w-[700px]">
              <div className="grid grid-cols-[1fr_80px_100px_80px_100px_120px] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
                <span className="text-xs font-semibold text-[#768294]">CROP</span>
                <span className="text-xs font-semibold text-[#768294]">BASE</span>
                <span className="text-xs font-semibold text-[#768294]">GROW TIME</span>
                <span className="text-xs font-semibold text-[#768294]">CPM</span>
                <span className="text-xs font-semibold text-[#768294]">PER HOUR</span>
                <span className="text-xs font-semibold text-[#768294]">STACKED (20×)</span>
              </div>
              {data.profitComparison.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1fr_80px_100px_80px_100px_120px] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
                >
                  <div className="flex items-center gap-2">
                    <span className={`rounded px-1 py-0.5 text-xs font-semibold ${tierBadge[row.tier]}`}>
                      {row.tier}
                    </span>
                    <span className="text-sm font-semibold text-[#BAC4D1]">{row.name}</span>
                    <span className="text-xs text-[#768294]">{row.season}</span>
                  </div>
                  <span className="text-xs text-[#BAC4D1]">{row.baseCoins} 🪙</span>
                  <span className="text-xs text-[#768294]">{row.growthTime}</span>
                  <span className="text-xs font-semibold text-[#00E676]">{row.coinsPerMinute}/min</span>
                  <span className="text-xs text-[#FF8C00]">{row.coinsPerHour.toLocaleString()} 🪙</span>
                  <span className="text-xs font-bold text-[#00E676]">{row.withMutationAndPet20x.toLocaleString()} 🪙</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Farming Tips */}
        <section aria-labelledby="tips-heading">
          <h2 id="tips-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
            🎯 Farming Tips for Maximum Profit
          </h2>
          <div className="space-y-4">
            {data.farmingTips.map((tip, i) => (
              <div key={i} className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
                <div className="flex items-start gap-3">
                  <span className="text-lg shrink-0">
                    {i === 0 ? "🔬" : i === 1 ? "📈" : i === 2 ? "⏱️" : i === 3 ? "📅" : i === 4 ? "🎮" : i === 5 ? "💰" : "🌾"}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{tip.title}</h3>
                    <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Guides */}
        <section aria-labelledby="related-heading">
          <h2 id="related-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
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
    </>
  );
}
