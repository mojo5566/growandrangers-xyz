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
  title: "Grow a Garden Trading Values — Internal Reference",
  description:
    "Browse internal editorial records for Grow a Garden pets, seeds, crops, and mutations. The listed value, demand, and trend fields are project reference values, not official prices or live market quotes.",
  keywords: [
    "Grow a Garden trading values",
    "Grow a Garden trade prices",
    "Grow a Garden pet values",
    "Grow a Garden seed values",
    "Grow a Garden crop values",
    "Grow a Garden mutation values",
    "Grow a Garden trading reference",
  ],
  alternates: { canonical: "/grow-a-garden/trading" },
  openGraph: {
    title: "Grow a Garden Trading Values — Internal Reference",
    description:
      "Internal editorial records for Grow a Garden trading categories. Values and labels are project reference fields, not official prices or live market quotes.",
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
  Pet: { label: "Pets", icon: "🐾", heading: "Pet Internal Records" },
  Seed: { label: "Seeds", icon: "🌰", heading: "Seed Internal Records" },
  Crop: { label: "Crops", icon: "🌱", heading: "Crop Internal Records" },
  Mutation: { label: "Mutations", icon: "✨", heading: "Mutation Internal Records" },
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
    question: "What does this Grow a Garden trading list show?",
    answer:
      "This page shows internal editorial records for trade-related categories. The value, demand, trend, rarity, and category fields are project reference fields, not official prices, live market quotes, or independently verified transaction data.",
  },
  {
    question: "Are these official Grow a Garden prices?",
    answer:
      "No. The numbers and labels are internal editorial records maintained as a project reference. They are not official prices or live market quotes, and this page does not independently verify transactions.",
  },
  {
    question: "How should I read the value, demand, and trend fields?",
    answer:
      "Treat value as an internal reference number, and demand and trend as internal labels attached to the record. These fields are descriptive project data only; they are not a trade recommendation, prediction, or guarantee of a particular outcome.",
  },
  {
    question: "What date applies to these trading records?",
    answer:
      "The date shown on this page is an editorial record date for this project view. It is not a transaction collection date, market sampling date, or promise of a particular update schedule.",
  },
  {
    question: "Can this list replace in-game trade verification?",
    answer:
      "No. Use this page only as an internal project reference and verify the terms of any trade independently. It does not confirm a transaction or establish an official price.",
  },
];

export default function TradingDatabasePage() {
  const highDemand = getHighDemandItems();

  return (
    <ContentLayout
      title="Grow a Garden Trading Reference"
      description="Internal editorial records for trade-related Grow a Garden pets, seeds, crops, and mutations. Value, demand, and trend are project reference fields, not official prices or live market quotes."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Trading Reference", href: "/grow-a-garden/trading" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/trading"
      updatedAt="July 19, 2026"
    >
      <p className="rounded-xl border border-[#252936] bg-[#14161D] p-4 text-sm leading-relaxed text-[#BAC4D1]">
        This page contains internal editorial records and project reference values. The listed fields are not official prices, live market quotes, or independently verified transaction data. The displayed date is an editorial record date, not a market sampling date.
      </p>

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
            🔥 High Internal Demand Labels ({highDemand.length})
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

      {/* High Internal Demand Label Section */}
      <section aria-labelledby="high-demand-heading" id="high-demand" className="scroll-mt-8">
        <h2
          id="high-demand-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-6"
        >
          🔥 High Internal Demand Label Items
        </h2>
        <div className="overflow-hidden rounded-xl border border-[#00E676]/30">
          <div className="grid grid-cols-[1fr_100px_90px_90px_90px] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="text-xs font-semibold text-[#768294]">NAME</span>
            <span className="text-xs font-semibold text-[#768294]">RECORDED CATEGORY</span>
            <span className="text-xs font-semibold text-[#768294]">RECORDED RARITY</span>
            <span className="text-xs font-semibold text-[#768294]">INTERNAL VALUE RECORD</span>
            <span className="text-xs font-semibold text-[#768294]">INTERNAL TREND LABEL</span>
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
              <div className="grid grid-cols-[1fr_90px_90px_100px_90px] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
                <span className="text-xs font-semibold text-[#768294]">NAME</span>
                <span className="text-xs font-semibold text-[#768294]">RECORDED RARITY</span>
                <span className="text-xs font-semibold text-[#768294]">INTERNAL DEMAND LABEL</span>
                <span className="text-xs font-semibold text-[#768294]">INTERNAL VALUE RECORD</span>
                <span className="text-xs font-semibold text-[#768294]">INTERNAL TREND LABEL</span>
              </div>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[1fr_90px_90px_100px_90px] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
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
          📊 Internal Records at a Glance
        </h2>
        <div className="grid gap-3 sm:grid-cols-4">
          <div className="rounded-lg border border-[#252936] bg-[#1E212B] p-3">
            <span className="text-xs text-[#768294]">Total Items</span>
            <p className="mt-1 text-lg font-bold text-[#BAC4D1]">{trading.length}</p>
          </div>
          <div className="rounded-lg border border-[#252936] bg-[#1E212B] p-3">
            <span className="text-xs text-[#768294]">High Internal Demand Labels</span>
            <p className="mt-1 text-lg font-bold text-[#00E676]">{highDemand.length}</p>
          </div>
          <div className="rounded-lg border border-[#252936] bg-[#1E212B] p-3">
            <span className="text-xs text-[#768294]">Rising Internal Trend Labels</span>
            <p className="mt-1 text-lg font-bold text-[#00E676]">
              {trading.filter((t) => t.trend === "Rising").length}
            </p>
          </div>
          <div className="rounded-lg border border-[#252936] bg-[#1E212B] p-3">
            <span className="text-xs text-[#768294]">Falling Internal Trend Labels</span>
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
