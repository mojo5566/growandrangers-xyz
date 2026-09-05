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
  title: "Grow a Garden Value Field Reference",
  description:
    "Reference guide to the recorded value, demand, trend, rarity, and category fields used on the Grow a Garden Trading pages. These are internal editorial project records, not official prices, live market quotes, or independently verified transaction data.",
  keywords: [
    "Grow a Garden value reference",
    "Grow a Garden trading fields",
    "Grow a Garden item records",
    "Grow a Garden rarity demand trend",
  ],
  alternates: { canonical: "/grow-a-garden/value-trading-guide" },
  openGraph: {
    title: "Grow a Garden Value Field Reference",
    description:
      "Reference guide to the recorded value, demand, trend, rarity, and category fields used on the Grow a Garden Trading pages. These are internal editorial project records, not official prices, live market quotes, or independently verified transaction data.",
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

// Recorded rarity groups for neutral comparison.
const rarityStats = [
  { rarity: "Mythical", items: getTradingByRarity("Mythical"), color: rarityColors.Mythical },
  { rarity: "Legendary", items: getTradingByRarity("Legendary"), color: rarityColors.Legendary },
  { rarity: "Epic", items: getTradingByRarity("Epic"), color: rarityColors.Epic },
  { rarity: "Rare", items: getTradingByRarity("Rare"), color: rarityColors.Rare },
  { rarity: "Common", items: getTradingByRarity("Common"), color: rarityColors.Common },
];

// Highest recorded field values for neutral reference.
const topTradingItems = [...trading].sort((a, b) => b.value - a.value).slice(0, 6);

// High demand items
const highDemand = getHighDemandItems().sort((a, b) => b.value - a.value).slice(0, 4);

// Rising trend items
const risingItems = getTradingByTrend("Rising").sort((a, b) => b.value - a.value).slice(0, 4);

const faqs = [
  {
    question: "What does item value mean on this page?",
    answer:
      "Value is an internal recorded field used to sort and compare entries in this project. It is not an official game price, a live quote, or a confirmed transaction amount.",
  },
  {
    question: "What is the difference between the recorded fields?",
    answer:
      "Rarity, demand, trend, and category are separate recorded labels. Value is a recorded numeric field. Together they organize the project reference, but they do not confirm game mechanics, availability, market behavior, or an exchange outcome.",
  },
  {
    question: "Do these fields determine whether an exchange is fair?",
    answer:
      "No. The recorded fields are for project reference only. They are not a fairness test, transaction confirmation, or recommendation about an exchange.",
  },
  {
    question: "What do the rarity groups show?",
    answer:
      "The rarity groups show how many project records carry each recorded rarity label. They do not provide drop-rate evidence or establish an item's availability, mechanics, or transaction value.",
  },
  {
    question: "What do demand and trend show?",
    answer:
      "Demand and trend show the labels currently recorded in the project. They do not measure active buyers, transaction speed, recent market movement, future change, or likely results.",
  },
  {
    question: "Where can I see the complete records?",
    answer:
      "Browse the Trading Reference at /grow-a-garden/trading for the complete project table. The comparison pages below link to individual records and use the same internal field definitions.",
  },
];

export default function ValueTradingGuidePage() {
  return (
    <ContentLayout
      title="Grow a Garden Value Field Reference"
      description="Reference guide to the recorded value, demand, trend, rarity, and category fields used on the Grow a Garden Trading pages. These are internal editorial project records, not official prices, live market quotes, or independently verified transaction data."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Value Trading Guide", href: "/grow-a-garden/value-trading-guide" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/value-trading-guide"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Trading"
      keywords={["Grow a Garden value reference", "Grow a Garden trading fields", "Grow a Garden item records"]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - project reference summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          This page explains the recorded value, rarity, demand, trend, and category fields used by the
          Grow a Garden Trading pages. They are internal project references, not official prices, live
          market quotes, independently verified transactions, or an exchange fairness test.
        </p>
      </section>

      {/* Hero */}
      <section className="rounded-xl border border-[#A855F7]/30 bg-[#A855F7]/5 p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          The project records organize {trading.length} items included in the trading-record dataset with a numeric value and
          descriptive labels. This page explains how to read those fields and their limits. For the
          complete reference table, browse the{" "}
          <Link href="/grow-a-garden/trading-guide" className="text-[#00E676] hover:underline">
            Trading Guide
          </Link>
          .
        </p>
      </section>

      {/* Recorded value fields */}
      <section aria-labelledby="how-value-heading">
        <h2
          id="how-value-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          💎 Recorded Value Fields
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            Each project record includes a numeric value and descriptive labels. These fields support
            sorting and comparison inside the reference pages; they do not represent a live market
            measurement or a confirmed exchange amount.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 mt-4">
            <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs font-semibold text-[#FF8C00] uppercase tracking-wider mb-1">
                1. Recorded Value
              </div>
              <p className="text-xs text-[#768294] leading-relaxed">
                A numeric field stored with the project record. It is shown with the internal record
                label and should not be read as an official or current price.
              </p>
            </div>
            <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs font-semibold text-[#00E676] uppercase tracking-wider mb-1">
                2. Recorded Rarity
              </div>
              <p className="text-xs text-[#768294] leading-relaxed">
                A label used to group project entries. It does not establish drop rates, availability,
                mechanics, or transaction value.
              </p>
            </div>
            <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs font-semibold text-[#FFD700] uppercase tracking-wider mb-1">
                3. Recorded Demand
              </div>
              <p className="text-xs text-[#768294] leading-relaxed">
                A project label used for comparison. It does not measure buyer activity, liquidity,
                transaction speed, or an exchange result.
              </p>
            </div>
            <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs font-semibold text-[#A855F7] uppercase tracking-wider mb-1">
                4. Recorded Trend
              </div>
              <p className="text-xs text-[#768294] leading-relaxed">
                A project label used to group entries. It does not establish recent movement, future
                change, or a recommendation about an exchange.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rarity groups */}
      <section aria-labelledby="rarity-heading">
        <h2
          id="rarity-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🏅 Recorded Rarity Groups
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          The {trading.length} project records are grouped by their recorded rarity labels. The counts
          describe this dataset only and do not establish availability, drop behavior, or game rules.
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
              <div className="text-xs text-[#768294] mt-1">Internal record count</div>
            </div>
          ))}
        </div>
      </section>

      {/* Demand and trend reference */}
      <section aria-labelledby="demand-trend-heading">
        <h2
          id="demand-trend-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📊 Recorded Demand and Trend
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-3">
              High Label Records ({highDemand.length})
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
                  <span className="text-[#00E676] font-bold ml-2">{formatTradingRecordValue(t.value)} {TRADING_RECORD_VALUE_LABEL}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF8C00] mb-3">
              Rising Label Records ({risingItems.length})
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
                  <span className="text-[#FF8C00] font-bold ml-2">{formatTradingRecordValue(t.value)} {TRADING_RECORD_VALUE_LABEL}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Highest recorded field values */}
      <section aria-labelledby="top-items-heading">
        <h2
          id="top-items-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🏆 Highest Recorded Field Values
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          These six entries have the highest numeric values in the current project dataset. This is a
          neutral comparison of internal records. For the full list, see the{" "}
          <Link href="/grow-a-garden/top-trading-items" className="text-[#00E676] hover:underline">
            Trading Item Records
          </Link>{" "}
          page or browse the complete{" "}
          <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">
            Trading Reference
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
                {formatTradingRecordValue(t.value)} {TRADING_RECORD_VALUE_LABEL}
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
