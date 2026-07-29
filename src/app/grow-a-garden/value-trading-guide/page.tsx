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
  title: "Grow a Garden Value Trading Guide",
  description:
    "How item value works in Grow a Garden trading: rarity, demand, and trend explained with fair trade examples. Learn to evaluate any trade confidently.",
  keywords: [
    "Grow a Garden value trading",
    "Grow a Garden item value",
    "Grow a Garden rarity demand trend",
    "Grow a Garden fair trade examples",
    "Grow a Garden trade evaluation",
    "Grow a Garden price guide",
  ],
  alternates: { canonical: "/grow-a-garden/value-trading-guide" },
  openGraph: {
    title: "Grow a Garden Value Trading Guide",
    description:
      "How item value works: rarity, demand, trend explained with fair trade examples.",
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

// Rarity distribution for explanation
const rarityStats = [
  { rarity: "Mythical", items: getTradingByRarity("Mythical"), color: rarityColors.Mythical, dropRate: "<1%" },
  { rarity: "Legendary", items: getTradingByRarity("Legendary"), color: rarityColors.Legendary, dropRate: "~5%" },
  { rarity: "Epic", items: getTradingByRarity("Epic"), color: rarityColors.Epic, dropRate: "~15%" },
  { rarity: "Rare", items: getTradingByRarity("Rare"), color: rarityColors.Rare, dropRate: "~30%" },
  { rarity: "Common", items: getTradingByRarity("Common"), color: rarityColors.Common, dropRate: "~50%" },
];

// Fair trade examples — pick two roughly equal-value items
const topTrading = [...trading].sort((a, b) => b.value - a.value);
const fairTradeExamples = [
  {
    side1: topTrading[0],
    side2: topTrading[1],
    label: "Top-Tier Swap",
    analysis: "Two highest-value items exchange. Both sides maintain top-tier market position.",
  },
  {
    side1: topTrading[2],
    side2: topTrading[3],
    label: "Premium Tier Swap",
    analysis: "Premium items with comparable market value. Verify demand and trend before confirming.",
  },
];

// Top trading items for reference
const topTradingItems = topTrading.slice(0, 6);

// High demand items
const highDemand = getHighDemandItems().sort((a, b) => b.value - a.value).slice(0, 4);

// Rising trend items
const risingItems = getTradingByTrend("Rising").sort((a, b) => b.value - a.value).slice(0, 4);

const faqs = [
  {
    question: "How is item value determined in Grow a Garden?",
    answer:
      "Item value is determined by four factors: rarity (drop tier — rarer items are worth more), demand (how many players want it — high demand commands premium pricing), trend (price direction — rising items gain value over time), and utility (functional items like S-Tier pets command massive premiums over cosmetic items). The Trading Database tracks all four metrics for every tradeable item.",
  },
  {
    question: "What is the difference between rarity and value?",
    answer:
      "Rarity is the item's intrinsic drop rate (Mythical = rarest, Common = most frequent) and never changes for an existing item. Value is the current market price in coins, which shifts with demand and trend. A Mythical item with Low demand may have lower market value than a Legendary item with High demand because buyers are not competing for it. Use rarity for long-term hold decisions and value for day-to-day trading decisions.",
  },
  {
    question: "How do I know if a trade is fair?",
    answer:
      "A fair trade has roughly equal total market value on both sides (within 10-15%). Sum the values of items on each side using the Trading Database, then compare. Also weigh trend — Rising items are worth more than their listed value (they'll be worth more tomorrow); Falling items are worth less (they'll lose value).",
  },
  {
    question: "Why do S-Tier pets trade for so much?",
    answer:
      "S-Tier pets like Golden Phoenix Chick (5.0× multiplier) have functional value — they permanently multiply every harvest's coin value. A 5.0× pet on a 4-plot Golden Wheat farm generates 9,600 extra coins per harvest, which compounds to millions of coins over weeks of play. That functional utility justifies massive trade premiums.",
  },
  {
    question: "Should I trade based on rarity or demand?",
    answer:
      "Both matter, but demand is more actionable. A High-demand Common item sells quickly at full value; a Low-demand Mythical item may sit unsold for weeks despite its theoretical value. Prioritize liquidity (High demand) for fast trades; prioritize rarity for long-term holds (Mythical items tend to appreciate).",
  },
  {
    question: "Where can I see all current trade values?",
    answer:
      "Browse the Trading Database at /grow-a-garden/trading for every item's current value, rarity, demand, and trend. For highest-value items, see the Top Trading Items page, which ranks the top 10 by Sheckle value alongside high-demand and rising-trend lists. Both update regularly to reflect market shifts after patches and events, so always re-check before confirming a trade.",
  },
];

export default function ValueTradingGuidePage() {
  return (
    <ContentLayout
      title="Grow a Garden Value Trading Guide"
      description="How item value works in Grow a Garden trading: rarity, demand, and trend explained with fair trade examples. Learn to evaluate any trade confidently."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Value Trading Guide", href: "/grow-a-garden/value-trading-guide" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/value-trading-guide"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Trading"
      keywords={["Grow a Garden value trading", "Grow a Garden item value", "Grow a Garden rarity demand trend", "Grow a Garden fair trade examples", "Grow a Garden trade evaluation"]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - AI search summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          Item value comes from four metrics: rarity (fixed drop tier), demand (active buyer interest), trend (Rising, Stable, or Falling), and utility (functional items like S-Tier pets command premiums). A fair trade keeps both sides within 10-15% of total market value. S-Tier pets such as the Golden Phoenix Chick with a 5.0x multiplier justify massive premiums because they permanently multiply every harvest. Always weigh trend alongside listed value — Rising items are worth more than their price today.
        </p>
      </section>

      {/* Hero */}
      <section className="rounded-xl border border-[#A855F7]/30 bg-[#A855F7]/5 p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          Item value in Grow a Garden trading comes down to four metrics: rarity, demand, trend,
          and utility. Master these and you can evaluate any trade confidently — no more guessing
          whether an offer is fair. For trading basics and common mistakes, see our{" "}
          <Link href="/grow-a-garden/trading-guide" className="text-[#00E676] hover:underline">
            Trading Guide
          </Link>
          .
        </p>
      </section>

      {/* How Value Works */}
      <section aria-labelledby="how-value-heading">
        <h2
          id="how-value-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          💎 How Item Value Works
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            Every tradeable item has a market value expressed in coins. This value reflects what
            players are currently willing to pay — it&apos;s not a fixed game price. Value
            fluctuates based on four factors:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 mt-4">
            <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs font-semibold text-[#FF8C00] uppercase tracking-wider mb-1">
                1. Rarity
              </div>
              <p className="text-xs text-[#768294] leading-relaxed">
                The item&apos;s drop tier. Mythical items are rarest and intrinsically most
                valuable, followed by Legendary, Epic, Rare, and Common.
              </p>
            </div>
            <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs font-semibold text-[#00E676] uppercase tracking-wider mb-1">
                2. Demand
              </div>
              <p className="text-xs text-[#768294] leading-relaxed">
                How many players are actively seeking the item. High demand means quick sales at
                full value; Low demand means slow sales or discounting.
              </p>
            </div>
            <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs font-semibold text-[#FFD700] uppercase tracking-wider mb-1">
                3. Trend
              </div>
              <p className="text-xs text-[#768294] leading-relaxed">
                Price direction over time. Rising items gain value (hold for profit); Falling items
                lose value (sell quickly); Stable items are reliable.
              </p>
            </div>
            <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs font-semibold text-[#A855F7] uppercase tracking-wider mb-1">
                4. Utility
              </div>
              <p className="text-xs text-[#768294] leading-relaxed">
                Functional items (S-Tier pets, mutations) command massive premiums over cosmetic
                items because they generate ongoing income.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rarity Breakdown */}
      <section aria-labelledby="rarity-heading">
        <h2
          id="rarity-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🏅 Rarity Breakdown
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          All {trading.length} tradeable items fall into five rarity tiers. Rarity is fixed at
          drop — it never changes for an existing item. New items can be added with game updates.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {rarityStats.map((r) => (
            <div
              key={r.rarity}
              className="rounded-xl border bg-[#14161D] p-4 text-center"
              style={{ borderColor: r.color + "33" }}
            >
              <div className="text-2xl font-bold" style={{ color: r.color }}>
                {r.items.length}
              </div>
              <div className="text-xs text-[#768294] uppercase tracking-wider mt-1">
                {r.rarity}
              </div>
              <div className="text-xs text-[#768294] mt-1">Drop rate: {r.dropRate}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Demand and Trend Reference */}
      <section aria-labelledby="demand-trend-heading">
        <h2
          id="demand-trend-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📊 Demand and Trend Reference
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-3">
              High-Demand Items ({highDemand.length})
            </h3>
            <ul className="space-y-1.5">
              {highDemand.map((t) => (
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
          <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF8C00] mb-3">
              Rising-Trend Items ({risingItems.length})
            </h3>
            <ul className="space-y-1.5">
              {risingItems.map((t) => (
                <li key={t.id} className="flex items-center justify-between text-xs">
                  <Link
                    href={`/grow-a-garden/trading/${t.id}`}
                    className="text-[#BAC4D1] hover:text-[#00E676] transition truncate"
                  >
                    {t.name}
                  </Link>
                  <span className="text-[#FF8C00] font-bold ml-2">{formatValue(t.value)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Fair Trade Examples */}
      <section aria-labelledby="examples-heading">
        <h2
          id="examples-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⚖️ Fair Trade Examples
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          Real examples of roughly equal-value trades. Both sides have comparable market value —
          within 10-15% — making these fair exchanges. Always verify trend on both sides: a
          Rising-trend item is worth more than its listed value (gaining), a Falling-trend item is
          worth less (losing).
        </p>
        <div className="space-y-4">
          {fairTradeExamples.map((trade, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#252936] bg-[#14161D] p-5"
            >
              <div className="text-xs text-[#768294] uppercase tracking-wider mb-3">
                {trade.label}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-3 items-center">
                {/* Side 1 */}
                <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
                  <Link
                    href={`/grow-a-garden/trading/${trade.side1.id}`}
                    className="text-sm font-semibold text-white hover:text-[#00E676] transition block"
                  >
                    {trade.side1.name}
                  </Link>
                  <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                    <span
                      className="rounded px-1.5 py-0.5 text-[10px] font-semibold"
                      style={{ color: rarityColors[trade.side1.rarity], backgroundColor: rarityColors[trade.side1.rarity] + "1a" }}
                    >
                      {trade.side1.rarity}
                    </span>
                    <span
                      className="rounded px-1.5 py-0.5 text-[10px] font-semibold"
                      style={{ color: demandColors[trade.side1.demand], backgroundColor: demandColors[trade.side1.demand] + "1a" }}
                    >
                      {trade.side1.demand}
                    </span>
                    <span
                      className="rounded px-1.5 py-0.5 text-[10px] font-semibold"
                      style={{ color: trendColors[trade.side1.trend], backgroundColor: trendColors[trade.side1.trend] + "1a" }}
                    >
                      {trade.side1.trend}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-[#00E676] mt-2">
                    {formatValue(trade.side1.value)} 🪙
                  </div>
                </div>
                {/* Swap indicator */}
                <div className="text-center text-2xl text-[#768294] font-bold">⇄</div>
                {/* Side 2 */}
                <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
                  <Link
                    href={`/grow-a-garden/trading/${trade.side2.id}`}
                    className="text-sm font-semibold text-white hover:text-[#00E676] transition block"
                  >
                    {trade.side2.name}
                  </Link>
                  <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                    <span
                      className="rounded px-1.5 py-0.5 text-[10px] font-semibold"
                      style={{ color: rarityColors[trade.side2.rarity], backgroundColor: rarityColors[trade.side2.rarity] + "1a" }}
                    >
                      {trade.side2.rarity}
                    </span>
                    <span
                      className="rounded px-1.5 py-0.5 text-[10px] font-semibold"
                      style={{ color: demandColors[trade.side2.demand], backgroundColor: demandColors[trade.side2.demand] + "1a" }}
                    >
                      {trade.side2.demand}
                    </span>
                    <span
                      className="rounded px-1.5 py-0.5 text-[10px] font-semibold"
                      style={{ color: trendColors[trade.side2.trend], backgroundColor: trendColors[trade.side2.trend] + "1a" }}
                    >
                      {trade.side2.trend}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-[#00E676] mt-2">
                    {formatValue(trade.side2.value)} 🪙
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs text-[#768294] leading-relaxed">{trade.analysis}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Trading Items Reference */}
      <section aria-labelledby="top-items-heading">
        <h2
          id="top-items-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🏆 Top Trading Items Reference
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          The six highest-value tradeable items. Use these as benchmarks when evaluating trade
          offers. For the full list, see the{" "}
          <Link href="/grow-a-garden/top-trading-items" className="text-[#00E676] hover:underline">
            Top Trading Items
          </Link>{" "}
          page or browse the complete{" "}
          <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">
            Trading Database
          </Link>
          .
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topTradingItems.map((t) => (
            <div
              key={t.id}
              className="rounded-xl border border-[#252936] bg-[#14161D] p-4 hover:border-[#00E676] transition"
            >
              <Link
                href={`/grow-a-garden/trading/${t.id}`}
                className="text-sm font-semibold text-white hover:text-[#00E676] transition block"
              >
                {t.name}
              </Link>
              <div className="text-xs text-[#768294] mt-1">{t.category}</div>
              <div className="text-lg font-bold text-[#FFD700] mt-2">
                {formatValue(t.value)} 🪙
              </div>
              <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                <span
                  className="rounded px-1.5 py-0.5 text-[10px] font-semibold"
                  style={{ color: rarityColors[t.rarity], backgroundColor: rarityColors[t.rarity] + "1a" }}
                >
                  {t.rarity}
                </span>
                <span
                  className="rounded px-1.5 py-0.5 text-[10px] font-semibold"
                  style={{ color: demandColors[t.demand], backgroundColor: demandColors[t.demand] + "1a" }}
                >
                  {t.demand}
                </span>
                <span
                  className="rounded px-1.5 py-0.5 text-[10px] font-semibold"
                  style={{ color: trendColors[t.trend], backgroundColor: trendColors[t.trend] + "1a" }}
                >
                  {t.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <RelatedContent
        category="guide"
        game="garden"
        currentPath="/grow-a-garden/value-trading-guide"
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
