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
  title: "Grow a Garden Trading Guide",
  description:
    "Complete Grow a Garden trading guide: trading basics, value evaluation, demand and trend explanation, and common mistakes to avoid. Sourced from canonical trading database.",
  keywords: [
    "Grow a Garden trading guide",
    "Grow a Garden how to trade",
    "Grow a Garden trade value",
    "Grow a Garden demand trend",
    "Grow a Garden trade mistakes",
    "Grow a Garden fair trade",
  ],
  alternates: { canonical: "/grow-a-garden/trading-guide" },
  openGraph: {
    title: "Grow a Garden Trading Guide",
    description:
      "Trading basics, value evaluation, demand/trend explanation, and common mistakes to avoid.",
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

// High-demand items for value evaluation section
const highDemandItems = getHighDemandItems().sort((a, b) => b.value - a.value).slice(0, 5);

// Trend examples
const risingItems = getTradingByTrend("Rising").sort((a, b) => b.value - a.value).slice(0, 3);
const fallingItems = getTradingByTrend("Falling").sort((a, b) => b.value - a.value).slice(0, 3);

// Rarity distribution
const rarityDistribution = [
  { rarity: "Mythical", items: getTradingByRarity("Mythical"), color: rarityColors.Mythical },
  { rarity: "Legendary", items: getTradingByRarity("Legendary"), color: rarityColors.Legendary },
  { rarity: "Epic", items: getTradingByRarity("Epic"), color: rarityColors.Epic },
];

// Top value items
const topValueItems = [...trading].sort((a, b) => b.value - a.value).slice(0, 5);

const faqs = [
  {
    question: "How does trading work in Grow a Garden?",
    answer:
      "Visit the Trade Hub to engage in player-to-player trades. Both players offer items, and the trade executes when both confirm. There's no central auction house — every trade is a negotiated exchange. Use the Trading Database to check item values before confirming any trade to avoid getting scammed.",
  },
  {
    question: "How do I evaluate if a trade is fair?",
    answer:
      "Compare the total market value of items on both sides of the trade. A fair trade has roughly equal total value (within 10-15%). Check the Trading Database for each item's value, rarity, demand, and trend. Be especially cautious when trading S-Tier items — they command massive premiums and are common scam targets.",
  },
  {
    question: "What does demand mean in Grow a Garden trading?",
    answer:
      "Demand indicates how many players are actively seeking to buy an item. High-demand items sell quickly at full market value. Low-demand items may sit unsold for long periods, even at a discount. Demand is independent of rarity — a Common item with High demand can be more liquid than a Mythical with Low demand.",
  },
  {
    question: "What does trend mean and how do I use it?",
    answer:
      "Trend indicates the price direction: Rising (gaining value — hold for profit), Stable (holding value — safe to trade anytime), or Falling (losing value — sell quickly). Buy Rising items early, hold them, sell at peak. Sell Falling items immediately before they drop further. Stable items are reliable for fair trades.",
  },
  {
    question: "What are the most common trading mistakes?",
    answer:
      "Top mistakes: (1) Trading without checking current market values. (2) Accepting Falling-trend items in exchange for Rising-trend items. (3) Trading S-Tier items for cosmetic-themed items with no functional value. (4) Trusting 'fair trade' offers without independent verification. Always check the Trading Database first.",
  },
  {
    question: "When should I start trading in Grow a Garden?",
    answer:
      "Wait until you have 50K+ coins of bankroll and can confidently evaluate item values — usually after 5+ hours of progression. Trading is high-variance; new players often get scammed. Start with small trades to learn the market dynamics, then scale up to S-Tier item flipping once you understand the value landscape.",
  },
];

export default function TradingGuidePage() {
  return (
    <ContentLayout
      title="Grow a Garden Trading Guide"
      description="Complete Grow a Garden trading guide: trading basics, value evaluation, demand and trend explanation, and common mistakes to avoid. Sourced from canonical trading database."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Trading Guide", href: "/grow-a-garden/trading-guide" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/trading-guide"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Hero */}
      <section className="rounded-xl border border-[#FFD700]/30 bg-[#FFD700]/5 p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          The Trade Hub is where Grow a Garden&apos;s economy comes alive — and where unprepared
          players lose the most value. This guide covers trading basics, how to evaluate item
          values, what demand and trend really mean, and the most common mistakes to avoid. For
          current market values, browse the{" "}
          <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">
            Trading Database
          </Link>
          .
        </p>
      </section>

      {/* Trading Basics */}
      <section aria-labelledby="basics-heading">
        <h2
          id="basics-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🏪 Trading Basics
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">Where to Trade</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              The Trade Hub is a dedicated zone where players meet to exchange items. Walk up to
              another player, initiate a trade request, and a trade window opens showing both
              players&apos; offered items. Both players must confirm to execute the trade.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">What Can Be Traded</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Tradeable items include pets, seeds, crops, mutations, and select consumables. Coins
              cannot be directly traded — they must be converted into tradeable items first. S-Tier
              pets and mutations are the highest-value trade commodities.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">Trade Confirmation</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Both players must click confirm for a trade to execute. There&apos;s a 5-second
              cooldown after any item change to prevent last-minute swap scams. Always re-check the
              final offer before clicking confirm a second time.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">No Refunds</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Once a trade is confirmed, it&apos;s final. There&apos;s no undo button and no
              customer support for bad trades. This is why value verification before confirming is
              critical — see the next section.
            </p>
          </div>
        </div>
      </section>

      {/* Value Evaluation */}
      <section aria-labelledby="value-heading">
        <h2
          id="value-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          💰 Value Evaluation
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          Every tradeable item has four metrics: <strong className="text-[#BAC4D1]">Value</strong>{" "}
          (current market price in coins),{" "}
          <strong className="text-[#BAC4D1]">Rarity</strong> (drop tier),{" "}
          <strong className="text-[#BAC4D1]">Demand</strong> (buyer interest), and{" "}
          <strong className="text-[#BAC4D1]">Trend</strong> (price direction). Evaluate all four
          together — a high-value item with Low demand is harder to sell than a mid-value item with
          High demand.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">Item</th>
                <th className="py-3 px-3 font-semibold">Rarity</th>
                <th className="py-3 px-3 font-semibold">Demand</th>
                <th className="py-3 px-3 font-semibold">Trend</th>
                <th className="py-3 px-3 font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              {topValueItems.map((t) => (
                <tr key={t.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3">
                    <Link
                      href={`/grow-a-garden/trading/${t.id}`}
                      className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {t.name}
                    </Link>
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className="rounded px-2 py-0.5 text-xs font-semibold"
                      style={{ color: rarityColors[t.rarity], backgroundColor: rarityColors[t.rarity] + "1a" }}
                    >
                      {t.rarity}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className="rounded px-2 py-0.5 text-xs font-semibold"
                      style={{ color: demandColors[t.demand], backgroundColor: demandColors[t.demand] + "1a" }}
                    >
                      {t.demand}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className="rounded px-2 py-0.5 text-xs font-semibold"
                      style={{ color: trendColors[t.trend], backgroundColor: trendColors[t.trend] + "1a" }}
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

      {/* Demand and Trend Explanation */}
      <section aria-labelledby="demand-trend-heading">
        <h2
          id="demand-trend-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📈 Demand and Trend Explained
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-[#00E676] mb-3">Demand Levels</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className="rounded px-2 py-0.5 text-xs font-bold"
                  style={{ color: demandColors.High, backgroundColor: demandColors.High + "1a" }}
                >
                  High
                </span>
                <span className="text-xs text-[#768294]">
                  Many active buyers — sells quickly at full value
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="rounded px-2 py-0.5 text-xs font-bold"
                  style={{ color: demandColors.Medium, backgroundColor: demandColors.Medium + "1a" }}
                >
                  Medium
                </span>
                <span className="text-xs text-[#768294]">
                  Moderate buyer interest — may take a few sessions to sell
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="rounded px-2 py-0.5 text-xs font-bold"
                  style={{ color: demandColors.Low, backgroundColor: demandColors.Low + "1a" }}
                >
                  Low
                </span>
                <span className="text-xs text-[#768294]">
                  Few buyers — may need to discount to sell quickly
                </span>
              </div>
            </div>
            <p className="mt-3 text-xs text-[#768294] leading-relaxed">
              Demand is independent of rarity. A Common item with High demand is more liquid than a
              Mythical with Low demand.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-[#FF8C00] mb-3">Trend Directions</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className="rounded px-2 py-0.5 text-xs font-bold"
                  style={{ color: trendColors.Rising, backgroundColor: trendColors.Rising + "1a" }}
                >
                  ↑ Rising
                </span>
                <span className="text-xs text-[#768294]">
                  Gaining value — hold for maximum profit
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="rounded px-2 py-0.5 text-xs font-bold"
                  style={{ color: trendColors.Stable, backgroundColor: trendColors.Stable + "1a" }}
                >
                  → Stable
                </span>
                <span className="text-xs text-[#768294]">
                  Holding value — safe to trade at any time
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="rounded px-2 py-0.5 text-xs font-bold"
                  style={{ color: trendColors.Falling, backgroundColor: trendColors.Falling + "1a" }}
                >
                  ↓ Falling
                </span>
                <span className="text-xs text-[#768294]">
                  Losing value — sell quickly before further drops
                </span>
              </div>
            </div>
            <p className="mt-3 text-xs text-[#768294] leading-relaxed">
              Trend reflects recent market movement. Rising items compound value while held; Falling
              items decay.
            </p>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section aria-labelledby="mistakes-heading">
        <h2
          id="mistakes-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⚠️ Common Trading Mistakes
        </h2>
        <div className="space-y-3">
          {[
            {
              title: "Trading Without Checking Values",
              desc: "Always verify current market values in the Trading Database before any trade. 'It looks fair' is not verification — item values shift with updates and market trends.",
            },
            {
              title: "Accepting Falling Items for Rising Items",
              desc: "A 50K-coin Falling-trend item is worth less tomorrow than today; a 50K Rising-trend item is worth more. Always check trend before accepting — Falling items should be discounted 10-20% in your evaluation.",
            },
            {
              title: "Trading S-Tier Items for Cosmetics",
              desc: "S-Tier pets and mutations have functional value (multipliers). Cosmetic items have zero functional value. Never trade functional items for cosmetics — you're giving up permanent income for aesthetics.",
            },
            {
              title: "Trusting 'Fair Trade' Offers",
              desc: "Other players benefit from your loss. A 'fair trade' offer from a stranger is often 30-50% in their favor. Always verify independently — the Trading Database is your source of truth.",
            },
            {
              title: "Trading Too Early",
              desc: "New players (under 5 hours of progression) should avoid trading entirely. Without market knowledge, you're a target. Wait until you can confidently identify underpriced items before engaging.",
            },
            {
              title: "Panic Selling Rising Items",
              desc: "Rising-trend items gain value while held. Don't sell them at the first offer — wait for peak demand or hold longer for compounding gains. The exception: if you need liquidity for an emergency purchase.",
            },
          ].map((m, i) => (
            <div key={i} className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
              <div className="flex items-start gap-3">
                <span className="text-[#FF3D00] text-lg shrink-0 font-bold">!</span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{m.title}</h3>
                  <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* High-Demand Showcase */}
      <section aria-labelledby="showcase-heading">
        <h2
          id="showcase-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🔥 High-Demand Items Reference
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          These items are currently in highest demand — they sell quickly at full market value.
          Useful as benchmarks for evaluating other trades.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {highDemandItems.map((t) => (
            <div
              key={t.id}
              className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4 hover:border-[#00E676] transition"
            >
              <Link
                href={`/grow-a-garden/trading/${t.id}`}
                className="text-sm font-semibold text-white hover:text-[#00E676] transition block"
              >
                {t.name}
              </Link>
              <div className="text-xs text-[#768294] mt-1">{t.category}</div>
              <div className="text-lg font-bold text-[#00E676] mt-2">
                {formatValue(t.value)} 🪙
              </div>
            </div>
          ))}
        </div>
      </section>

      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/trading-guide" />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
