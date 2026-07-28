import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { trading, getHighDemandItems, getTradingByTrend } from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Top Trading Items in Grow a Garden — Ranked",
  description:
    "The highest-value, highest-demand, and fastest-rising tradeable items in Grow a Garden. Compare pets, seeds, crops, and mutations side-by-side with live market values and trends.",
  keywords: [
    "top trading items Grow a Garden",
    "Grow a Garden trade values",
    "highest demand pets Grow a Garden",
    "rising trade items Grow a Garden",
    "Grow a Garden market trends 2026",
    "most valuable items Grow a Garden",
  ],
  alternates: { canonical: "/grow-a-garden/top-trading-items" },
  openGraph: {
    title: "Top Trading Items in Grow a Garden — Ranked",
    description:
      "Highest-value, highest-demand, and fastest-rising tradeable items in Grow a Garden.",
    type: "website",
  },
};

const rarityBadge: Record<string, string> = {
  Mythical: "bg-[#FF3D00]/20 text-[#FF3D00]",
  Legendary: "bg-[#FF8C00]/20 text-[#FF8C00]",
  Epic: "bg-[#9D4EDD]/20 text-[#9D4EDD]",
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

const categoryBadge: Record<string, string> = {
  Pet: "bg-[#9D4EDD]/20 text-[#9D4EDD]",
  Seed: "bg-[#00E676]/20 text-[#00E676]",
  Crop: "bg-[#FFD700]/20 text-[#FFD700]",
  Mutation: "bg-[#FF8C00]/20 text-[#FF8C00]",
};

function formatValue(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2).replace(/\.00$/, "")}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return value.toString();
}

// Highest value — top 10 across all categories
const highestValue = [...trading].sort((a, b) => b.value - a.value).slice(0, 10);

// Highest demand — all items with High demand, sorted by value desc
const highestDemand = [...getHighDemandItems()].sort((a, b) => b.value - a.value);

// Rising items — items with Rising trend, sorted by value desc
const risingItems = [...getTradingByTrend("Rising")].sort((a, b) => b.value - a.value);

const faqs = [
  {
    question: "What is the most valuable tradeable item in Grow a Garden?",
    answer:
      "The Golden Phoenix Chick is the most valuable item at approximately 5M Sheckles, classified as Mythical rarity with High demand and a Rising trend. It is the only Mythical-rarity pet in the trading market and commands a premium that has held steady for multiple updates.",
  },
  {
    question: "Which trading items have the highest demand right now?",
    answer:
      `As of ${CONTENT_UPDATED_AT}, ${highestDemand.length} items have High demand. The top three by value are ${highestDemand[0]?.name ?? "—"} (${formatValue(highestDemand[0]?.value ?? 0)}), ${highestDemand[1]?.name ?? "—"} (${formatValue(highestDemand[1]?.value ?? 0)}), and ${highestDemand[2]?.name ?? "—"} (${formatValue(highestDemand[2]?.value ?? 0)}). High-demand items sell quickly but also command premium prices when buying.`,
  },
  {
    question: "What are the fastest-rising trade values?",
    answer:
      `Items with a Rising trend are appreciating in value. Currently ${risingItems.length} items are rising, led by ${risingItems[0]?.name ?? "—"} at ${formatValue(risingItems[0]?.value ?? 0)}. Rising items are good candidates to hold rather than sell immediately — check the trend before listing.`,
  },
  {
    question: "How often do Grow a Garden trade values change?",
    answer:
      "Trade values shift with every major update, event, and meta change. New pet releases tend to depress older pet values, while limited-time events can spike demand for seasonal items. We update the trading database continuously and mark each item with its trend (Rising, Stable, or Falling).",
  },
  {
    question: "Where can I find the full trading values list?",
    answer:
      "Our Trading Values database lists all 50 tradeable items with verified market values, demand ratings, and trend indicators. Visit the full Trading Values page to filter by category (Pets, Seeds, Crops, Mutations) and view detailed trade pages for each item.",
  },
];

export default function TopTradingItemsPage() {
  return (
    <ContentLayout
      title="Top Trading Items in Grow a Garden"
      description="Ranked comparison of the highest-value, highest-demand, and fastest-rising tradeable items in Grow a Garden. Compare pets, seeds, crops, and mutations side-by-side with live market values and trend indicators."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Top Trading Items", href: "/grow-a-garden/top-trading-items" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/top-trading-items"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Hero Intro */}
      <section className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          The Grow a Garden trading market moves fast. This comparison ranks all{" "}
          <strong className="text-white">{trading.length} tradeable items</strong> across pets, seeds, crops, and
          mutations by three lenses: <strong className="text-white">highest value</strong>,{" "}
          <strong className="text-white">highest demand</strong>, and{" "}
          <strong className="text-white">rising trend</strong>. Use these rankings to decide what to hold, what to
          sell, and what to chase in trades. Values are sourced from our verified trading database and updated
          continuously.
        </p>
      </section>

      {/* Highest Value Section */}
      <section aria-labelledby="highest-value-heading">
        <h2
          id="highest-value-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          💎 Highest Value — Top 10 Items
        </h2>
        <p className="text-xs text-[#768294] mb-4">
          The ten most valuable items in the Grow a Garden trading market, ranked by current Sheckle value.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">#</th>
                <th className="py-3 px-3 font-semibold">Item</th>
                <th className="py-3 px-3 font-semibold">Category</th>
                <th className="py-3 px-3 font-semibold">Rarity</th>
                <th className="py-3 px-3 font-semibold">Value</th>
                <th className="py-3 px-3 font-semibold">Demand</th>
                <th className="py-3 px-3 font-semibold">Trend</th>
              </tr>
            </thead>
            <tbody>
              {highestValue.map((item, i) => (
                <tr key={item.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3 text-[#768294]">{i + 1}</td>
                  <td className="py-3 px-3">
                    <Link
                      href={`/grow-a-garden/trading/${item.id}`}
                      className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {item.name}
                    </Link>
                  </td>
                  <td className="py-3 px-3">
                    <span className={`rounded px-2 py-0.5 text-xs font-semibold ${categoryBadge[item.category]}`}>
                      {item.category}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span className={`rounded px-2 py-0.5 text-xs font-semibold ${rarityBadge[item.rarity]}`}>
                      {item.rarity}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-base font-bold text-[#00E676]">{formatValue(item.value)} 🪙</td>
                  <td className="py-3 px-3">
                    <span className={`rounded px-2 py-0.5 text-xs font-semibold ${demandBadge[item.demand]}`}>
                      {item.demand}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span className={`rounded px-2 py-0.5 text-xs font-semibold ${trendBadge[item.trend]}`}>
                      {item.trend}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Highest Demand Section */}
      <section aria-labelledby="highest-demand-heading">
        <h2
          id="highest-demand-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          🔥 Highest Demand — Quick-Sell Items
        </h2>
        <p className="text-xs text-[#768294] mb-4">
          {highestDemand.length} items with High demand. These move fastest in the trading market —
          buyers are actively seeking them. Higher demand typically means easier trades but premium buy prices.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">#</th>
                <th className="py-3 px-3 font-semibold">Item</th>
                <th className="py-3 px-3 font-semibold">Category</th>
                <th className="py-3 px-3 font-semibold">Rarity</th>
                <th className="py-3 px-3 font-semibold">Value</th>
                <th className="py-3 px-3 font-semibold">Trend</th>
                <th className="py-3 px-3 font-semibold">Trade Link</th>
              </tr>
            </thead>
            <tbody>
              {highestDemand.map((item, i) => (
                <tr key={item.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3 text-[#768294]">{i + 1}</td>
                  <td className="py-3 px-3">
                    <Link
                      href={`/grow-a-garden/trading/${item.id}`}
                      className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {item.name}
                    </Link>
                  </td>
                  <td className="py-3 px-3">
                    <span className={`rounded px-2 py-0.5 text-xs font-semibold ${categoryBadge[item.category]}`}>
                      {item.category}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span className={`rounded px-2 py-0.5 text-xs font-semibold ${rarityBadge[item.rarity]}`}>
                      {item.rarity}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-base font-bold text-[#00E676]">{formatValue(item.value)} 🪙</td>
                  <td className="py-3 px-3">
                    <span className={`rounded px-2 py-0.5 text-xs font-semibold ${trendBadge[item.trend]}`}>
                      {item.trend}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <Link
                      href={`/grow-a-garden/trading/${item.id}`}
                      className="text-xs font-semibold text-[#00E676] hover:underline"
                    >
                      View trade page →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Rising Items Section */}
      <section aria-labelledby="rising-heading">
        <h2
          id="rising-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          📈 Rising Items — Appreciating Assets
        </h2>
        <p className="text-xs text-[#768294] mb-4">
          {risingItems.length} items with a Rising trend. Their values are climbing — consider holding these
          rather than selling immediately. Rising trends are typically driven by meta shifts, new update
          synergies, or supply shortages.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {risingItems.map((item) => (
            <div key={item.id} className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
              <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                <Link
                  href={`/grow-a-garden/trading/${item.id}`}
                  className="text-base font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                >
                  {item.name}
                </Link>
                <span className="text-base font-bold text-[#00E676]">{formatValue(item.value)} 🪙</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`rounded px-2 py-0.5 text-xs font-semibold ${categoryBadge[item.category]}`}>
                  {item.category}
                </span>
                <span className={`rounded px-2 py-0.5 text-xs font-semibold ${rarityBadge[item.rarity]}`}>
                  {item.rarity}
                </span>
                <span className={`rounded px-2 py-0.5 text-xs font-semibold ${demandBadge[item.demand]}`}>
                  {item.demand} demand
                </span>
                <span className={`rounded px-2 py-0.5 text-xs font-semibold ${trendBadge[item.trend]}`}>
                  {item.trend}
                </span>
              </div>
              {item.notes && (
                <p className="text-xs text-[#768294] leading-relaxed">{item.notes}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <RelatedContent
        category="guide"
        game="garden"
        currentPath="/grow-a-garden/top-trading-items"
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
