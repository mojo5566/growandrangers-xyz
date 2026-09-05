import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import {
  trading,
  getHighDemandItems,
  getTradingByTrend,
  TRADING_RECORD_VALUE_LABEL,
  formatTradingRecordValue,
} from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Grow a Garden Trading Item Reference",
  description:
    "Browse internal editorial records for Grow a Garden pets, seeds, crops, and mutations. Value, demand, trend, rarity, and category are project reference fields, not official prices, live market quotes, or independently verified transaction data.",
  keywords: [
    "Grow a Garden trading item reference",
    "Grow a Garden internal trade records",
    "Grow a Garden recorded item values",
    "Grow a Garden demand labels",
    "Grow a Garden trend labels",
    "Grow a Garden trading categories",
  ],
  alternates: { canonical: "/grow-a-garden/top-trading-items" },
  openGraph: {
    title: "Grow a Garden Trading Item Reference",
    description:
      "Internal editorial records for Grow a Garden items included in the trading-record dataset. Value, demand, trend, rarity, and category are project reference fields, not official prices, live market quotes, or independently verified transaction data.",
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

// Highest value — top 10 across all categories
const highestValue = [...trading].sort((a, b) => b.value - a.value).slice(0, 10);

// Highest demand — all items with High demand, sorted by value desc
const highestDemand = [...getHighDemandItems()].sort((a, b) => b.value - a.value);

// Rising items — items with Rising trend, sorted by value desc
const risingItems = [...getTradingByTrend("Rising")].sort((a, b) => b.value - a.value);

const faqs = [
  {
    question: "What does this Grow a Garden trading reference show?",
    answer:
      "This page groups internal editorial records by recorded value, demand label, and trend label. The records also include category and rarity fields for project reference; they are not official prices, live market quotes, or independently verified transaction data.",
  },
  {
    question: "How are the trading records grouped on this page?",
    answer:
      `The page uses internal labels and records to show ${highestDemand.length} entries marked High demand and ${risingItems.length} entries marked Rising trend. These groupings describe project data only and do not establish market activity, transaction volume, or a trade outcome.`,
  },
  {
    question: "What does a Rising trend label mean here?",
    answer:
      `Rising is an internal trend label attached to ${risingItems.length} project records. It is not a live market measurement, price forecast, or recommendation to buy, sell, or hold an item.`,
  },
  {
    question: "What date applies to these records?",
    answer:
      "The displayed date is an editorial record date for this project view. It is not a transaction collection date, market sampling date, or promise of a particular update schedule.",
  },
  {
    question: "Where can I find the underlying item records?",
    answer:
      "The full Trading Reference page contains the project records for pets, seeds, crops, and mutations. It provides category, rarity, value, demand, and trend fields as internal editorial references; it does not confirm transactions or establish official prices.",
  },
  {
    question: "Can this page confirm whether a trade is fair?",
    answer:
      "No. The internal records are not transaction confirmations, fair-price determinations, or investment guidance. Verify any in-game trade terms independently rather than treating the displayed fields as a buying, selling, holding, or profit recommendation.",
  },
  {
    question: "What is the difference between the item categories?",
    answer:
      "Pet, Seed, Crop, and Mutation are recorded category labels used to organize the project reference. The category field does not establish different market rules, item mechanics, acquisition conditions, or trading recommendations.",
  },
];

export default function TopTradingItemsPage() {
  return (
    <ContentLayout
      title="Grow a Garden Trading Item Reference"
      description="Internal editorial records for Grow a Garden items included in the trading-record dataset. Value, demand, trend, rarity, and category are project reference fields, not official prices, live market quotes, or independently verified transaction data."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Trading Item Records", href: "/grow-a-garden/top-trading-items" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/top-trading-items"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Trading"
      keywords={["Grow a Garden trading item reference", "Grow a Garden internal trade records", "Grow a Garden recorded item values", "Grow a Garden demand labels", "Grow a Garden trend labels"]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - project reference summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          This page groups internal editorial records across pets, seeds, crops, and mutations. Value, demand, trend, rarity, and category are recorded project-reference fields, not official prices, live market quotes, or independently verified transaction data. The page does not provide buying, selling, holding, investment, profit, or trade-safety guidance.
        </p>
      </section>

      {/* Hero Intro */}
      <section className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          This project view organizes{" "}
          <strong className="text-white">{trading.length} recorded items</strong> across pets, seeds, crops, and
          mutations using internal value, demand, and trend fields. The fields are editorial references only: they
          are not official prices, live market quotes, independently verified transaction data, or recommendations
          about buying, selling, holding, investment, profit, or trade safety.
        </p>
      </section>

      {/* Highest Value Section */}
      <section aria-labelledby="highest-value-heading">
        <h2
          id="highest-value-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          💎 Highest Internal Value Records — 10 Items
        </h2>
        <p className="text-xs text-[#768294] mb-4">
          Ten records sorted by the internal value field. This ordering is a project reference and not a market-price ranking.
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
                  <td className="py-3 px-3 text-base font-bold text-[#00E676]">{formatTradingRecordValue(item.value)} {TRADING_RECORD_VALUE_LABEL}</td>
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
          🔥 High Internal Demand Labels
        </h2>
        <p className="text-xs text-[#768294] mb-4">
          {highestDemand.length} records carry the High internal demand label. This label does not establish trading
          speed, buyer activity, price, or transaction volume.
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
                <th className="py-3 px-3 font-semibold">Record Link</th>
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
                  <td className="py-3 px-3 text-base font-bold text-[#00E676]">{formatTradingRecordValue(item.value)} {TRADING_RECORD_VALUE_LABEL}</td>
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
                      View record page →
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
          📈 Rising Internal Trend Labels
        </h2>
        <p className="text-xs text-[#768294] mb-4">
          {risingItems.length} records carry the Rising internal trend label. This label does not establish a live
          price movement, forecast, supply condition, or recommendation to buy, sell, or hold.
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
                <span className="text-base font-bold text-[#00E676]">{formatTradingRecordValue(item.value)} {TRADING_RECORD_VALUE_LABEL}</span>
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
              <p className="text-xs text-[#768294] leading-relaxed">
                Internal editorial record only. Value, demand, trend, rarity, and category are project reference
                fields, not official prices, live market quotes, or independently verified transaction data.
              </p>
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
