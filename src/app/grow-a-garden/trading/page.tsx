import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import {
  trading,
  getTradingByCategory,
  getHighDemandItems,
} from "@/data/garden/database/trading";

export const metadata: Metadata = {
  title: "Grow a Garden Trading Values — Price Guide",
  description:
    "Complete Grow a Garden trading value list for pets, seeds, crops, and mutations. Browse by category, demand, and trend. Updated daily with verified market prices.",
  keywords: [
    "Grow a Garden trading values",
    "Grow a Garden trade prices",
    "Grow a Garden pet values",
    "Grow a Garden seed values",
    "Grow a Garden crop values",
    "Grow a Garden mutation values",
    "Grow a Garden price guide",
  ],
  alternates: { canonical: "/grow-a-garden/trading" },
  openGraph: {
    title: "Grow a Garden Trading Values — Price Guide",
    description:
      "Complete Grow a Garden trading value list for pets, seeds, crops, and mutations. Updated daily.",
    type: "website",
  },
};

const rarityBadge: Record<string, string> = {
  Mythical: "bg-[#FF3D00]/20 text-[#FF3D00]",
  Legendary: "bg-[#FF8C00]/20 text-[#FF8C00]",
  Epic: "bg-[#FFD700]/20 text-[#FFD700]",
  Rare: "bg-[#3A86FF]/20 text-[#3A86FF]",
  Common: "bg-[#768294]/20 text-[#BAC4D1]",
};

const demandBadge: Record<string, string> = {
  High: "bg-[#00E676]/20 text-[#00E676]",
  Medium: "bg-[#FFD700]/20 text-[#FFD700]",
  Low: "bg-[#768294]/20 text-[#BAC4D1]",
};

const trendBadge: Record<string, string> = {
  Rising: "bg-[#00E676]/20 text-[#00E676]",
  Stable: "bg-[#768294]/20 text-[#BAC4D1]",
  Falling: "bg-[#FF3D00]/20 text-[#FF3D00]",
};

const categoryMeta: Record<
  string,
  { label: string; icon: string; heading: string }
> = {
  Pet: { label: "Pets", icon: "🐾", heading: "Pet Trading Values" },
  Seed: { label: "Seeds", icon: "🌰", heading: "Seed Trading Values" },
  Crop: { label: "Crops", icon: "🌱", heading: "Crop Trading Values" },
  Mutation: { label: "Mutations", icon: "✨", heading: "Mutation Trading Values" },
};

const categoryOrder: Array<"Pet" | "Seed" | "Crop" | "Mutation"> = [
  "Pet",
  "Seed",
  "Crop",
  "Mutation",
];

function formatValue(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2).replace(/\.00$/, "")}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return value.toString();
}

const faqs = [
  {
    question: "How are Grow a Garden trading values calculated?",
    answer:
      "Our trading values are aggregated from verified in-game trades, community marketplaces, and active Discord trading channels. We weight recent trades more heavily and exclude outliers. Values are updated daily to reflect the live market — but always use your own judgment when trading.",
  },
  {
    question: "What is the most valuable pet in Grow a Garden?",
    answer:
      "The Golden Phoenix Chick is currently the most valuable pet at approximately 5,000,000 Sheckles equivalent. It's followed by the Golden Dragon (2.8M) and Crystal Unicorn Foal (2.4M). All three are in High demand and Rising or Stable in trend.",
  },
  {
    question: "Should I trade my Mythstar Seed now or hold it?",
    answer:
      "Mythstar Seed is currently Rising in value with High demand. Unless you need the immediate liquidity for a higher-value trade (like a Mythical pet), holding is generally recommended — Mythstar is the only seed that can spawn S-Tier mutations, so its value is unlikely to drop soon.",
  },
  {
    question: "Why do mutation values change so frequently?",
    answer:
      "Mutations are the highest-volatility category because their value depends on the current meta. When new content updates rebalance mutation roll rates or add new mutations, the entire tier list can shift. We update mutation values within 24 hours of any major update.",
  },
  {
    question: "Is the BloxPulse trading value list official?",
    answer:
      "No — this is a community-curated price guide based on observed trades. Grow a Garden does not have an official trading value list. Always cross-reference multiple sources before committing to high-value trades, and never trade items you cannot afford to lose.",
  },
];

export default function TradingDatabasePage() {
  const highDemand = getHighDemandItems();

  return (
    <ContentLayout
      title="Grow a Garden Trading Values"
      description="Complete trading value list for every tradeable item in Grow a Garden — pets, seeds, crops, and mutations. Browse by category, demand, and trend. Updated daily with verified market prices."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Trading Values", href: "/grow-a-garden/trading" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/trading"
      updatedAt="July 19, 2026"
    >
      {/* Category Filter Tabs (anchor links) */}
      <section aria-labelledby="filters-heading">
        <h2 id="filters-heading" className="sr-only">
          Category filters
        </h2>
        <div className="flex flex-wrap gap-2">
          <a
            href="#high-demand"
            className="rounded-lg border border-[#00E676]/30 bg-[#00E676]/10 px-4 py-2 text-sm font-semibold text-[#00E676] transition hover:bg-[#00E676]/20"
          >
            🔥 High Demand ({highDemand.length})
          </a>
          {categoryOrder.map((cat) => {
            const items = getTradingByCategory(cat);
            const meta = categoryMeta[cat];
            return (
              <a
                key={cat}
                href={`#${cat.toLowerCase()}`}
                className="rounded-lg border border-[#252936] bg-[#14161D] px-4 py-2 text-sm font-semibold text-[#BAC4D1] transition hover:border-[#00E676] hover:text-[#00E676]"
              >
                {meta.icon} {meta.label} ({items.length})
              </a>
            );
          })}
        </div>
      </section>

      {/* High Demand Section */}
      <section aria-labelledby="high-demand-heading" id="high-demand" className="scroll-mt-8">
        <h2
          id="high-demand-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-6"
        >
          🔥 High Demand Items
        </h2>
        <div className="overflow-hidden rounded-xl border border-[#00E676]/30">
          <div className="grid grid-cols-[1fr_100px_90px_90px_90px] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="text-xs font-semibold text-[#768294]">NAME</span>
            <span className="text-xs font-semibold text-[#768294]">CATEGORY</span>
            <span className="text-xs font-semibold text-[#768294]">RARITY</span>
            <span className="text-xs font-semibold text-[#768294]">VALUE</span>
            <span className="text-xs font-semibold text-[#768294]">TREND</span>
          </div>
          {highDemand.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[1fr_100px_90px_90px_90px] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
            >
              <Link
                href={`/grow-a-garden/trading/${item.id}`}
                className="text-sm font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
              >
                {item.name}
              </Link>
              <span className="text-xs text-[#768294]">{categoryMeta[item.category].icon} {item.category}</span>
              <span className={`rounded px-1.5 py-0.5 text-xs font-semibold w-fit ${rarityBadge[item.rarity]}`}>
                {item.rarity}
              </span>
              <span className="text-xs font-bold text-[#00E676]">{formatValue(item.value)}</span>
              <span className={`rounded px-1.5 py-0.5 text-xs font-semibold w-fit ${trendBadge[item.trend]}`}>
                {item.trend}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Per-Category Tables */}
      {categoryOrder.map((cat) => {
        const items = getTradingByCategory(cat);
        const meta = categoryMeta[cat];
        return (
          <section
            key={cat}
            id={cat.toLowerCase()}
            aria-labelledby={`${cat.toLowerCase()}-heading`}
            className="scroll-mt-8"
          >
            <h2
              id={`${cat.toLowerCase()}-heading`}
              className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-6"
            >
              {meta.icon} {meta.heading}
            </h2>
            <div className="overflow-hidden rounded-xl border border-[#252936]">
              <div className="grid grid-cols-[1fr_90px_90px_100px_90px_90px] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
                <span className="text-xs font-semibold text-[#768294]">NAME</span>
                <span className="text-xs font-semibold text-[#768294]">RARITY</span>
                <span className="text-xs font-semibold text-[#768294]">DEMAND</span>
                <span className="text-xs font-semibold text-[#768294]">VALUE</span>
                <span className="text-xs font-semibold text-[#768294]">TREND</span>
                <span className="text-xs font-semibold text-[#768294]">NOTES</span>
              </div>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[1fr_90px_90px_100px_90px_90px] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
                >
                  <Link
                    href={`/grow-a-garden/trading/${item.id}`}
                    className="text-sm font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                  >
                    {item.name}
                  </Link>
                  <span className={`rounded px-1.5 py-0.5 text-xs font-semibold w-fit ${rarityBadge[item.rarity]}`}>
                    {item.rarity}
                  </span>
                  <span className={`rounded px-1.5 py-0.5 text-xs font-semibold w-fit ${demandBadge[item.demand]}`}>
                    {item.demand}
                  </span>
                  <span className="text-xs font-bold text-[#00E676]">{formatValue(item.value)}</span>
                  <span className={`rounded px-1.5 py-0.5 text-xs font-semibold w-fit ${trendBadge[item.trend]}`}>
                    {item.trend}
                  </span>
                  <span className="text-xs text-[#768294] truncate" title={item.notes}>
                    {item.notes ?? "—"}
                  </span>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* Quick Stats */}
      <section aria-labelledby="stats-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2
          id="stats-heading"
          className="font-heading text-[20px] font-semibold text-white mb-4"
        >
          📊 Market at a Glance
        </h2>
        <div className="grid gap-3 sm:grid-cols-4">
          <div className="rounded-lg border border-[#252936] bg-[#1E212B] p-3">
            <span className="text-xs text-[#768294]">Total Items</span>
            <p className="mt-1 text-lg font-bold text-[#BAC4D1]">{trading.length}</p>
          </div>
          <div className="rounded-lg border border-[#252936] bg-[#1E212B] p-3">
            <span className="text-xs text-[#768294]">High Demand</span>
            <p className="mt-1 text-lg font-bold text-[#00E676]">{highDemand.length}</p>
          </div>
          <div className="rounded-lg border border-[#252936] bg-[#1E212B] p-3">
            <span className="text-xs text-[#768294]">Rising</span>
            <p className="mt-1 text-lg font-bold text-[#00E676]">
              {trading.filter((t) => t.trend === "Rising").length}
            </p>
          </div>
          <div className="rounded-lg border border-[#252936] bg-[#1E212B] p-3">
            <span className="text-xs text-[#768294]">Falling</span>
            <p className="mt-1 text-lg font-bold text-[#FF3D00]">
              {trading.filter((t) => t.trend === "Falling").length}
            </p>
          </div>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
