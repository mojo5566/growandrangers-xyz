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
  TRADING_RECORD_VALUE_LABEL,
  formatTradingRecordValue,
} from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Trading Calculator — Grow a Garden Reference",
  description:
    "Compare project-recorded trading fields by category, rarity, demand, and trend. This tool presents internal reference values, not official prices, live market quotes, or independently verified transaction data.",
  keywords: [
    "Grow a Garden trading calculator",
    "Grow a Garden trading record comparison",
    "Grow a Garden item reference",
    "Grow a Garden rarity demand trend",
    "Grow a Garden internal trading records",
  ],
  alternates: { canonical: "/grow-a-garden/trading-calculator" },
  openGraph: {
    title: "Trading Calculator — Grow a Garden Reference",
    description:
      "Compare project-recorded trading fields by category, rarity, demand, and trend. This tool presents internal reference values, not official prices, live market quotes, or independently verified transaction data.",
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

// Sort project records by their recorded value field for neutral comparison.
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

// Rarity breakdowns by recorded classification.
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
    question: "What does this Grow a Garden trading calculator show?",
    answer:
      "The calculator compares values and labels stored in the current project record. Rarity, demand, and trend are internal editorial fields. They are not official prices, live market quotes, or independently verified transaction data.",
  },
  {
    question: "Which item has the highest recorded field in this table?",
    answer:
      rankedTrading[0]
        ? `${rankedTrading[0].name} has the highest recorded field value in this project table at ${formatTradingRecordValue(rankedTrading[0].value)} ${TRADING_RECORD_VALUE_LABEL} (${rankedTrading[0].rarity} recorded rarity, ${rankedTrading[0].demand} recorded demand). This ordering is an internal reference comparison, not a market ranking.`
        : "No trading records are currently available in the project table.",
  },
  {
    question: "How should I interpret the Rising, Stable, and Falling labels?",
    answer:
      "Rising, Stable, and Falling are recorded project labels. They do not establish a market movement, predict a future change, or provide a transaction or investment recommendation.",
  },
  {
    question: "What's the difference between rarity and demand?",
    answer:
      "Rarity and demand are separate fields in the project record. Rarity is a recorded classification, while demand is a recorded label. The calculator displays both for neutral comparison and does not establish drop rates, player activity, liquidity, or scarcity.",
  },
  {
    question: "Does this calculator determine whether a trade is fair?",
    answer:
      "No. The table only compares internal project-recorded values. It does not determine whether an in-game transaction is fair or provide a transaction recommendation; confirm actual terms independently.",
  },
  {
    question: "Where can I see all recorded item entries by category?",
    answer:
      "The trading calculator groups project records by category (Pets, Seeds, Crops, Mutations) in the tables above. For a single-page view of all records sorted by recorded value, see the Trading Records database. Per-item reference pages are available in the trading database.",
  },
];

export default function TradingCalculatorPage() {
  return (
    <ContentLayout
      title="Grow a Garden Trading Record Calculator"
      description="Compare project-recorded item fields by category, rarity, demand, and trend. The displayed values are internal reference records, not official prices, live market quotes, or independently verified transaction data."
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
        <h2 className="text-sm font-semibold text-[#FFD700] mb-2">💱 How This Reference Table Works</h2>
        <p className="text-xs text-[#768294] leading-relaxed">
          Each project record has four displayed fields: <strong className="text-[#BAC4D1]">Recorded value</strong>,
          {" "}<strong className="text-[#BAC4D1]">recorded rarity</strong>,{" "}
          <strong className="text-[#BAC4D1]">recorded demand</strong>, and{" "}
          <strong className="text-[#BAC4D1]">recorded trend</strong>. Use them for neutral comparison
          within this project reference as a mathematical demonstration only. They are not official prices, live market quotes,
          or independently verified transaction data, and the page does not determine fair trades or provide buy, sell, hold,
          transaction, or investment advice.
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
                  <div className="text-xs text-[#768294] mb-1">Highest Recorded Field</div>
                  <Link
                    href={`/grow-a-garden/trading/${cat.top.id}`}
                    className="text-sm font-semibold text-white hover:text-[#00E676] transition block truncate"
                  >
                    {cat.top.name}
                  </Link>
                  <div className="text-sm font-bold mt-1" style={{ color: cat.accent }}>
                    {formatTradingRecordValue(cat.top.value)} {TRADING_RECORD_VALUE_LABEL}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Full recorded-value comparison */}
      <section aria-labelledby="ranking-heading">
        <h2
          id="ranking-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🏆 Complete Trading Record Comparison
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          All {trading.length} project records sorted by recorded value descending. Compare category, recorded rarity,
          recorded demand, or recorded trend using the color-coded labels; this is not a market ranking.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[820px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">#</th>
                <th className="py-3 px-3 font-semibold">Item</th>
                <th className="py-3 px-3 font-semibold">Category</th>
                <th className="py-3 px-3 font-semibold">Recorded Rarity</th>
                <th className="py-3 px-3 font-semibold">Recorded Demand</th>
                <th className="py-3 px-3 font-semibold">Recorded Trend</th>
                <th className="py-3 px-3 font-semibold">Recorded Value</th>
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
                    {formatTradingRecordValue(t.value)} {TRADING_RECORD_VALUE_LABEL}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recorded demand labels */}
      <section aria-labelledby="demand-heading">
        <h2
          id="demand-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🔥 Recorded Demand Labels ({highDemand.length})
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          Records carrying the High demand label. This is an internal grouping for comparison and does not
          establish buyer activity, transaction speed, market value, or a transaction recommendation.
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
                {formatTradingRecordValue(t.value)} {TRADING_RECORD_VALUE_LABEL}
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

      {/* Recorded trend labels */}
      <section aria-labelledby="trend-heading">
        <h2
          id="trend-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📈 Recorded Trend Labels
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">
              ↑ Rising ({risingTrend.length})
            </h3>
            <p className="text-xs text-[#768294] mb-3">
              Rising is a recorded project label; it is not a market forecast or transaction recommendation.
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
                  <span className="text-[#00E676] font-bold ml-2">{formatTradingRecordValue(t.value)} {TRADING_RECORD_VALUE_LABEL}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#FFD700]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FFD700] mb-2">
              → Stable ({stableTrend.length})
            </h3>
            <p className="text-xs text-[#768294] mb-3">
              Stable is a recorded project label; it does not establish a transaction outcome.
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
                  <span className="text-[#FFD700] font-bold ml-2">{formatTradingRecordValue(t.value)} {TRADING_RECORD_VALUE_LABEL}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">
              ↓ Falling ({fallingTrend.length})
            </h3>
            <p className="text-xs text-[#768294] mb-3">
              Falling is a recorded project label; it does not predict a future change.
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
                  <span className="text-[#FF3D00] font-bold ml-2">{formatTradingRecordValue(t.value)} {TRADING_RECORD_VALUE_LABEL}</span>
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
          💎 Recorded Rarity Distribution
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
