import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import {
  trading,
  getHighDemandItems,
  TRADING_RECORD_VALUE_LABEL,
  formatTradingRecordValue,
} from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Grow a Garden Trading Reference Guide",
  description:
    "Reference guide to the internal value, demand, trend, rarity, and category fields used by the Grow a Garden Trading pages. These are editorial project records, not official prices, live market quotes, or independently verified transaction data.",
  keywords: [
    "Grow a Garden trading guide",
    "Grow a Garden trading reference",
    "Grow a Garden trading fields",
    "Grow a Garden item records",
  ],
  alternates: { canonical: "/grow-a-garden/trading-guide" },
  openGraph: {
    title: "Grow a Garden Trading Reference Guide",
    description:
      "Reference guide to the internal value, demand, trend, rarity, and category fields used by the Grow a Garden Trading pages. These are editorial project records, not official prices, live market quotes, or independently verified transaction data.",
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

// Internal records grouped for neutral comparison.
const highDemandItems = getHighDemandItems().sort((a, b) => b.value - a.value).slice(0, 5);

// Top value items
const topValueItems = [...trading].sort((a, b) => b.value - a.value).slice(0, 5);

const faqs = [
  {
    question: "What is this Grow a Garden trading guide?",
    answer:
      "This page explains the internal editorial fields used by the Grow a Garden Trading pages. It presents project records for reference and does not confirm game mechanics, transactions, market prices, or trade outcomes.",
  },
  {
    question: "What does the value field mean?",
    answer:
      "Value is an internal recorded field used for project organization and neutral comparison. It is not an official price, live market quote, or independently verified transaction record, and it does not determine whether a trade is fair.",
  },
  {
    question: "What do demand and trend mean?",
    answer:
      "Demand and trend are recorded project labels. They do not establish live buyer activity, transaction speed, market movement, a forecast, or a recommendation to buy, sell, or hold an item.",
  },
  {
    question: "What do rarity and category mean?",
    answer:
      "Rarity and category are recorded labels used to organize the project reference. They do not establish drop rates, item mechanics, availability, market value, or transaction guidance.",
  },
  {
    question: "Can this guide determine whether a trade is fair?",
    answer:
      "No. The displayed records are not a fairness test, transaction confirmation, or buying, selling, holding, investment, or profit recommendation. Confirm actual in-game terms independently.",
  },
  {
    question: "Where can I see the underlying records?",
    answer:
      "Browse the Trading Reference page for the complete project table, or open an item link from the comparison sections below. The fields remain internal editorial references rather than current market data.",
  },
];

export default function TradingGuidePage() {
  return (
    <ContentLayout
      title="Grow a Garden Trading Reference Guide"
      description="Reference guide to the internal value, demand, trend, rarity, and category fields used by the Grow a Garden Trading pages. These are editorial project records, not official prices, live market quotes, or independently verified transaction data."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Trading Guide", href: "/grow-a-garden/trading-guide" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/trading-guide"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Trading"
      keywords={["Grow a Garden trading reference", "Grow a Garden trading fields", "Grow a Garden item records"]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - project reference summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          This page explains how to read internal project records for items included in the trading-record dataset. Recorded value, rarity,
          demand, trend, and category are editorial reference fields, not official prices, live market quotes,
          independently verified transaction data, or a fairness test. The page does not provide buying, selling,
          holding, investment, profit, or trade-safety guidance.
        </p>
      </section>

      {/* Hero */}
      <section className="rounded-xl border border-[#FFD700]/30 bg-[#FFD700]/5 p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          The Trading pages organize {trading.length} project records across several item categories.
          This guide explains how to read the recorded fields and their limits. For the full reference table,
          browse the{" "}
          <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">
            Trading Reference
          </Link>
          .
        </p>
      </section>

      {/* Reference basics */}
      <section aria-labelledby="basics-heading">
        <h2
          id="basics-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🏪 Reference Basics
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">Value</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Value is an internal recorded field used to sort and compare entries in this project.
              It is not an official price, live quote, or verified transaction amount.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">Rarity and Category</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              These are recorded labels used to organize the reference. They do not establish item
              availability, drop rates, mechanics, or market value.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">Demand</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Demand is an internal recorded label. It does not measure active buyers, transaction
              volume, liquidity, speed, or the result of an in-game exchange.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">Trend</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Trend is an internal recorded label. It does not establish a live movement, forecast,
              future change, or recommendation to buy, sell, or hold.
            </p>
          </div>
        </div>
      </section>

      {/* Recorded field comparison */}
      <section aria-labelledby="value-heading">
        <h2
          id="value-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          💰 Recorded Field Comparison
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          The table compares project-recorded fields: <strong className="text-[#BAC4D1]">value</strong>,{" "}
          <strong className="text-[#BAC4D1]">rarity</strong>, <strong className="text-[#BAC4D1]">demand</strong>,
          and <strong className="text-[#BAC4D1]">trend</strong>. These fields are editorial references only;
          they do not establish prices, buyer activity, market movement, or transaction outcomes.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">Item</th>
                <th className="py-3 px-3 font-semibold">Recorded Rarity</th>
                <th className="py-3 px-3 font-semibold">Recorded Demand</th>
                <th className="py-3 px-3 font-semibold">Recorded Trend</th>
                <th className="py-3 px-3 font-semibold">Recorded Value</th>
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
                    {formatTradingRecordValue(t.value)} {TRADING_RECORD_VALUE_LABEL}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recorded demand and trend */}
      <section aria-labelledby="demand-trend-heading">
        <h2
          id="demand-trend-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📈 Recorded Demand and Trend Labels
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
                  Internal label only; it does not establish buyer activity or transaction speed.
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
                  Internal label only; it does not establish demand or a likely transaction outcome.
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
                  Internal label only; it does not establish buyer count, liquidity, or pricing.
                </span>
              </div>
            </div>
            <p className="mt-3 text-xs text-[#768294] leading-relaxed">
              Demand and rarity are separate recorded fields. Neither field establishes liquidity,
              scarcity, or market behavior.
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
                  Recorded label only; it is not a market forecast or holding recommendation.
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
                  Recorded label only; it does not establish a transaction outcome or safety.
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
                  Recorded label only; it is not a forecast or selling recommendation.
                </span>
              </div>
            </div>
            <p className="mt-3 text-xs text-[#768294] leading-relaxed">
              Trend is a project label. It does not establish recent market movement, future value,
              or investment performance.
            </p>
          </div>
        </div>
      </section>

      {/* Reference limitations */}
      <section aria-labelledby="mistakes-heading">
        <h2
          id="mistakes-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⚠️ Reference Limitations
        </h2>
        <div className="space-y-3">
          {[
            {
              title: "Recorded value is not a price",
              desc: "The value field is an internal project record. It is not a current market quote, official price, or verified transaction amount.",
            },
            {
              title: "Labels are not forecasts",
              desc: "Rising, Stable, and Falling are recorded labels. They do not predict future movement or establish what an item will be worth later.",
            },
            {
              title: "Rarity is not a market conclusion",
              desc: "Rarity and category organize the records but do not establish availability, mechanics, utility, or transaction value.",
            },
            {
              title: "A table is not transaction verification",
              desc: "The project records do not confirm offers, completed trades, fairness, or another player's claims.",
            },
            {
              title: "Dates are editorial dates",
              desc: "The page date identifies the project record. It is not a market sampling date or evidence of a particular update schedule.",
            },
            {
              title: "Check version-sensitive facts elsewhere",
              desc: "Use in-game documentation and version notes for gameplay rules and version-sensitive information. This page only documents project fields.",
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

      {/* Recorded demand showcase */}
      <section aria-labelledby="showcase-heading">
        <h2
          id="showcase-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🔥 High Demand Labels Reference
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          These records carry the High demand label. This is an internal grouping for reference,
          not a statement about current buyer activity, transaction speed, or market value.
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
                {formatTradingRecordValue(t.value)} {TRADING_RECORD_VALUE_LABEL}
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
