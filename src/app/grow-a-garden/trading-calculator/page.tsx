import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import {
  trading,
  getHighDemandItems,
  getTradingByTrend,
  getTradingByRarity,
} from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Trading Calculator — Grow a Garden Values",
  description:
    "Compare Grow a Garden trading values by category, rarity, demand, and trend. Pre-calculated market value table for every tradeable item.",
  keywords: [
    "Grow a Garden trading calculator",
    "Grow a Garden trade value calculator",
    "Grow a Garden item value comparison",
    "Grow a Garden rarity demand trend",
    "Grow a Garden market value table",
    "Grow a Garden price checker",
  ],
  alternates: { canonical: "/grow-a-garden/trading-calculator" },
  openGraph: {
    title: "Trading Calculator — Grow a Garden Values",
    description:
      "Compare trading values by category, rarity, demand, and trend. Pre-calculated market value table for every item.",
    type: "website",
  },
};

const rarityColors: Record<string, string> = {
  Common: "#9CA3AF",
  Rare: "#3A86FF",
  Epic: "#A855F7",
  Legendary: "#FF8C00",
  Mythical: "#FF3D00",
};

const demandColors: Record<string, string> = {
  Low: "#768294",
  Medium: "#FFD700",
  High: "#00E676",
};

const trendColors: Record<string, string> = {
  Rising: "#00E676",
  Stable: "#FFD700",
  Falling: "#FF3D00",
};

function formatValue(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2).replace(/\.00$/, "")}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return value.toString();
}

// Sort all trading items by value descending
const rankedTrading = [...trading].sort((a, b) => b.value - a.value);

// Category breakdowns
const petsTrading = rankedTrading.filter((t) => t.category === "Pet");
const seedsTrading = rankedTrading.filter((t) => t.category === "Seed");
const cropsTrading = rankedTrading.filter((t) => t.category === "Crop");
const mutationsTrading = rankedTrading.filter((t) => t.category === "Mutation");

// Demand/Trend aggregations
const highDemand = getHighDemandItems().sort((a, b) => b.value - a.value);
const risingTrend = getTradingByTrend("Rising").sort((a, b) => b.value - a.value);
const stableTrend = getTradingByTrend("Stable").sort((a, b) => b.value - a.value);
const fallingTrend = getTradingByTrend("Falling").sort((a, b) => b.value - a.value);

// Rarity breakdowns — top tier counts
const mythicalItems = getTradingByRarity("Mythical");
const legendaryItems = getTradingByRarity("Legendary");
const epicItems = getTradingByRarity("Epic");
const rareItems = getTradingByRarity("Rare");
const commonItems = getTradingByRarity("Common");

// Category stats
const categoryStats = [
  { label: "Pets", count: petsTrading.length, top: petsTrading[0], accent: "#00E676" },
  { label: "Seeds", count: seedsTrading.length, top: seedsTrading[0], accent: "#FF8C00" },
  { label: "Crops", count: cropsTrading.length, top: cropsTrading[0], accent: "#FFD700" },
  { label: "Mutations", count: mutationsTrading.length, top: mutationsTrading[0], accent: "#A855F7" },
];

const faqs = [
  {
    question: "How are Grow a Garden trading values calculated?",
    answer:
      "Trading values reflect verified market prices from active player-to-player trades. Each item's value is influenced by rarity (Common → Mythical), demand (Low → High), and trend (Rising/Stable/Falling). The calculator above shows the current market value for every tradeable item.",
  },
  {
    question: "What is the most valuable tradeable item in Grow a Garden?",
    answer:
      rankedTrading[0]
        ? `${rankedTrading[0].name} is the most valuable tradeable item at ${rankedTrading[0].value.toLocaleString()} coins (${rankedTrading[0].rarity} rarity, ${rankedTrading[0].demand} demand). It's ${rankedTrading[0].trend.toLowerCase()} in the current market.`
        : "The most valuable tradeable item updates as the market shifts — see the top of the ranking table above for the current #1.",
  },
  {
    question: "Should I trade items that are Falling in trend?",
    answer:
      "Items with Falling trend are losing market value — sell or trade them quickly before they drop further. Items with Rising trend are gaining value — hold them longer for maximum profit. Stable items are safe to trade at any time at their listed value.",
  },
  {
    question: "What's the difference between rarity and demand?",
    answer:
      "Rarity is the item's intrinsic drop rate (Mythical = rarest). Demand is how many players are actively seeking to buy it. A Common item with High demand can be more liquid than a Mythical with Low demand. The calculator shows both metrics so you can evaluate liquidity AND scarcity.",
  },
  {
    question: "How do I know if a trade is fair?",
    answer:
      "Compare both items' market values in the table above. A fair trade has roughly equal total value on both sides (within 10-15%). Watch for players offering Falling-trend items in exchange for Rising-trend items — that's a common scam. Always verify values before confirming.",
  },
  {
    question: "Where can I see all tradeable items by category?",
    answer:
      "The trading calculator groups items by category (Pets, Seeds, Crops, Mutations) in separate tables above. For a single-page view of all tradeable items sorted by value, see the Trading Values database. For per-item detail pages with full notes, browse the trading database.",
  },
];

export default function TradingCalculatorPage() {
  return (
    <ContentLayout
      title="Grow a Garden Trading Value Calculator"
      description="Compare tradeable item values by category, rarity, demand, and trend. Pre-calculated market value table for every Grow a Garden item — no inputs required."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Calculators", href: "/grow-a-garden/calculators" },
        { label: "Trading Calculator", href: "/grow-a-garden/trading-calculator" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/trading-calculator"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Formula Card */}
      <section className="rounded-xl border border-[#FFD700]/30 bg-[#FFD700]/5 p-5">
        <h2 className="text-sm font-semibold text-[#FFD700] mb-2">💱 How Trading Value Works</h2>
        <p className="text-xs text-[#768294] leading-relaxed">
          Each tradeable item has four metrics: <strong className="text-[#BAC4D1]">Value</strong> (current market price),
          {" "}<strong className="text-[#BAC4D1]">Rarity</strong> (drop tier),{" "}
          <strong className="text-[#BAC4D1]">Demand</strong> (buyer interest), and{" "}
          <strong className="text-[#BAC4D1]">Trend</strong> (price direction). Use all four together
          to evaluate trade fairness and identify profitable flips.
        </p>
      </section>

      {/* Category Stats */}
      <section aria-labelledby="stats-heading">
        <h2
          id="stats-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📊 Category Overview
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categoryStats.map((cat) => (
            <div
              key={cat.label}
              className="rounded-xl border bg-[#14161D] p-4"
              style={{ borderColor: cat.accent + "33" }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold" style={{ color: cat.accent }}>
                  {cat.label}
                </span>
                <span className="text-xs text-[#768294]">{cat.count} items</span>
              </div>
              {cat.top && (
                <div className="pt-2 border-t border-[#252936]">
                  <div className="text-xs text-[#768294] mb-1">Top Item</div>
                  <Link
                    href={`/grow-a-garden/trading/${cat.top.id}`}
                    className="text-sm font-semibold text-white hover:text-[#00E676] transition block truncate"
                  >
                    {cat.top.name}
                  </Link>
                  <div className="text-sm font-bold mt-1" style={{ color: cat.accent }}>
                    {formatValue(cat.top.value)} 🪙
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Full Trading Value Ranking */}
      <section aria-labelledby="ranking-heading">
        <h2
          id="ranking-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🏆 Complete Trading Value Ranking
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          All {trading.length} tradeable items sorted by market value descending. Filter mentally by
          category, rarity, demand, or trend using the color-coded badges.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[820px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">#</th>
                <th className="py-3 px-3 font-semibold">Item</th>
                <th className="py-3 px-3 font-semibold">Category</th>
                <th className="py-3 px-3 font-semibold">Rarity</th>
                <th className="py-3 px-3 font-semibold">Demand</th>
                <th className="py-3 px-3 font-semibold">Trend</th>
                <th className="py-3 px-3 font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              {rankedTrading.map((t, i) => (
                <tr key={t.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3 text-[#768294]">{i + 1}</td>
                  <td className="py-3 px-3">
                    <Link
                      href={`/grow-a-garden/trading/${t.id}`}
                      className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {t.name}
                    </Link>
                  </td>
                  <td className="py-3 px-3 text-xs text-[#768294]">{t.category}</td>
                  <td className="py-3 px-3">
                    <span
                      className="code-text inline-block rounded px-2 py-0.5 text-xs font-semibold"
                      style={{
                        color: rarityColors[t.rarity],
                        backgroundColor: rarityColors[t.rarity] + "1a",
                      }}
                    >
                      {t.rarity}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className="inline-block rounded px-2 py-0.5 text-xs font-semibold"
                      style={{
                        color: demandColors[t.demand],
                        backgroundColor: demandColors[t.demand] + "1a",
                      }}
                    >
                      {t.demand}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className="inline-block rounded px-2 py-0.5 text-xs font-semibold"
                      style={{
                        color: trendColors[t.trend],
                        backgroundColor: trendColors[t.trend] + "1a",
                      }}
                    >
                      {t.trend}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-sm font-bold text-[#00E676]">
                    {t.value.toLocaleString()} 🪙
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* High-Demand Items */}
      <section aria-labelledby="demand-heading">
        <h2
          id="demand-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🔥 High-Demand Items ({highDemand.length})
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          Items with the highest buyer interest — these sell quickly at full market value. Sort by
          value to identify the most profitable flips.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {highDemand.slice(0, 9).map((t) => (
            <div
              key={t.id}
              className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4 hover:border-[#00E676] transition"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <Link
                  href={`/grow-a-garden/trading/${t.id}`}
                  className="text-sm font-semibold text-white hover:text-[#00E676] transition"
                >
                  {t.name}
                </Link>
                <span className="rounded bg-[#00E676]/20 px-1.5 py-0.5 text-xs font-semibold text-[#00E676]">
                  {t.category}
                </span>
              </div>
              <div className="text-xl font-bold text-[#00E676] mb-2">
                {formatValue(t.value)} 🪙
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span
                  className="inline-block rounded px-1.5 py-0.5 font-semibold"
                  style={{
                    color: rarityColors[t.rarity],
                    backgroundColor: rarityColors[t.rarity] + "1a",
                  }}
                >
                  {t.rarity}
                </span>
                <span
                  className="inline-block rounded px-1.5 py-0.5 font-semibold"
                  style={{
                    color: trendColors[t.trend],
                    backgroundColor: trendColors[t.trend] + "1a",
                  }}
                >
                  {t.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trend Analysis */}
      <section aria-labelledby="trend-heading">
        <h2
          id="trend-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📈 Trend Analysis
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">
              ↑ Rising ({risingTrend.length})
            </h3>
            <p className="text-xs text-[#768294] mb-3">
              Gaining value — hold for maximum profit.
            </p>
            <ul className="space-y-1.5">
              {risingTrend.slice(0, 5).map((t) => (
                <li key={t.id} className="flex items-center justify-between text-xs">
                  <Link
                    href={`/grow-a-garden/trading/${t.id}`}
                    className="text-[#BAC4D1] hover:text-[#00E676] transition truncate"
                  >
                    {t.name}
                  </Link>
                  <span className="text-[#00E676] font-bold ml-2">{formatValue(t.value)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#FFD700]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FFD700] mb-2">
              → Stable ({stableTrend.length})
            </h3>
            <p className="text-xs text-[#768294] mb-3">
              Holding value — safe to trade at any time.
            </p>
            <ul className="space-y-1.5">
              {stableTrend.slice(0, 5).map((t) => (
                <li key={t.id} className="flex items-center justify-between text-xs">
                  <Link
                    href={`/grow-a-garden/trading/${t.id}`}
                    className="text-[#BAC4D1] hover:text-[#00E676] transition truncate"
                  >
                    {t.name}
                  </Link>
                  <span className="text-[#FFD700] font-bold ml-2">{formatValue(t.value)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">
              ↓ Falling ({fallingTrend.length})
            </h3>
            <p className="text-xs text-[#768294] mb-3">
              Losing value — sell quickly before further drops.
            </p>
            <ul className="space-y-1.5">
              {fallingTrend.slice(0, 5).map((t) => (
                <li key={t.id} className="flex items-center justify-between text-xs">
                  <Link
                    href={`/grow-a-garden/trading/${t.id}`}
                    className="text-[#BAC4D1] hover:text-[#00E676] transition truncate"
                  >
                    {t.name}
                  </Link>
                  <span className="text-[#FF3D00] font-bold ml-2">{formatValue(t.value)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Rarity Distribution */}
      <section aria-labelledby="rarity-heading">
        <h2
          id="rarity-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          💎 Rarity Distribution
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { label: "Mythical", items: mythicalItems, color: "#FF3D00" },
            { label: "Legendary", items: legendaryItems, color: "#FF8C00" },
            { label: "Epic", items: epicItems, color: "#A855F7" },
            { label: "Rare", items: rareItems, color: "#3A86FF" },
            { label: "Common", items: commonItems, color: "#9CA3AF" },
          ].map((r) => (
            <div
              key={r.label}
              className="rounded-xl border bg-[#14161D] p-4 text-center"
              style={{ borderColor: r.color + "33" }}
            >
              <div className="text-2xl font-bold" style={{ color: r.color }}>
                {r.items.length}
              </div>
              <div className="text-xs text-[#768294] mt-1">{r.label}</div>
            </div>
          ))}
        </div>
      </section>

      <RelatedContent
        category="guide"
        game="garden"
        currentPath="/grow-a-garden/trading-calculator"
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
