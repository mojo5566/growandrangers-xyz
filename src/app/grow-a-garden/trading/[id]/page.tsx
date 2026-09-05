import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import {
  trading,
  getTradingItemById,
  getTradingByCategory,
  TRADING_RECORD_DISCLAIMER,
  TRADING_RECORD_VALUE_LABEL,
  formatTradingRecordValue,
} from "@/data/garden/database/trading";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return trading.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const item = getTradingItemById(id);
  if (!item) return { title: "Trading Item Not Found" };

  return {
    title: `${item.name} — Grow a Garden Trading Reference`,
    description: `${item.name} internal value record: ${formatTradingRecordValue(item.value)} ${TRADING_RECORD_VALUE_LABEL}. Recorded ${item.rarity.toLowerCase()} ${item.category.toLowerCase()} with internal ${item.demand.toLowerCase()} demand and ${item.trend.toLowerCase()} trend labels. ${TRADING_RECORD_DISCLAIMER}`,
    keywords: [
      item.name,
      `${item.name} value`,
      `${item.name} value record`,
      `Grow a Garden ${item.category.toLowerCase()} value`,
      `${item.rarity} ${item.category.toLowerCase()} trade`,
    ],
    alternates: { canonical: `/grow-a-garden/trading/${id}` },
    openGraph: {
      title: `${item.name} — Grow a Garden Trading Reference`,
      description: `${item.name} internal value record: ${formatTradingRecordValue(item.value)} ${TRADING_RECORD_VALUE_LABEL}. Recorded ${item.rarity.toLowerCase()} ${item.category.toLowerCase()} with internal ${item.demand.toLowerCase()} demand and ${item.trend.toLowerCase()} trend labels. ${TRADING_RECORD_DISCLAIMER}`,
      type: "website",
    },
  };
}

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

export default async function TradingDetailPage({ params }: PageProps) {
  const { id } = await params;
  const item = getTradingItemById(id);

  if (!item) notFound();

  // Related items from same category (excluding current)
  const relatedItems = getTradingByCategory(item.category)
    .filter((t) => t.id !== item.id)
    .slice(0, 5);

  const faqs = [
    {
      question: `What does this ${item.name} trading page show?`,
      answer: `This page shows an internal value record of ${formatTradingRecordValue(item.value)} ${TRADING_RECORD_VALUE_LABEL} together with recorded ${item.rarity.toLowerCase()} rarity and internal ${item.demand.toLowerCase()} demand and ${item.trend.toLowerCase()} trend labels. ${TRADING_RECORD_DISCLAIMER}`,
    },
    {
      question: `Is this ${item.name} record an official game value?`,
      answer: `No. The ${item.name} entry is an internal editorial record for project reference. It does not establish a fair price, predict an outcome, or recommend buying, selling, or holding.`,
    },
    {
      question: `How should I use the ${item.name} labels?`,
      answer: `Use the value, demand, trend, rarity, and category fields as internal reference labels only. They are not a market quote, transaction confirmation, or item-specific trading recommendation.`,
    },
    {
      question: `What date applies to this ${item.name} record?`,
      answer: `The date shown on this page is an editorial record date for this project view. It is not a transaction collection date, market sampling date, or promise of a particular update schedule.`,
    },
  ];

  return (
    <ContentLayout
      title={`${item.name} — Trading Reference`}
      description={`${item.name} internal value record: ${formatTradingRecordValue(item.value)} ${TRADING_RECORD_VALUE_LABEL}. Recorded ${item.rarity.toLowerCase()} ${item.category.toLowerCase()} with internal demand and trend labels. ${TRADING_RECORD_DISCLAIMER}`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Trading", href: "/grow-a-garden/trading" },
        { label: item.name, href: `/grow-a-garden/trading/${item.id}` },
      ]}
      accent="garden"
      canonicalPath={`/grow-a-garden/trading/${item.id}`}
      updatedAt={item.updatedAt}
    >
      <p className="rounded-xl border border-[#252936] bg-[#14161D] p-4 text-sm leading-relaxed text-[#BAC4D1]">
        {TRADING_RECORD_DISCLAIMER} The displayed date is an editorial record date, not a market sampling date. The value unit is {TRADING_RECORD_VALUE_LABEL}.
      </p>

      {/* Core Stats */}
      <section aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">
          Trading stats
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Recorded Category</span>
            <p className="mt-1 text-sm font-semibold text-[#BAC4D1]">{item.category}</p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Recorded Rarity</span>
            <p className="mt-1">
              <span className={`rounded px-2 py-0.5 text-sm font-semibold ${rarityBadge[item.rarity]}`}>
                {item.rarity}
              </span>
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Internal Demand Label</span>
            <p className="mt-1">
              <span className={`rounded px-2 py-0.5 text-sm font-semibold ${demandBadge[item.demand]}`}>
                {item.demand}
              </span>
            </p>
          </div>
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4 sm:col-span-2">
            <span className="text-xs text-[#768294]">Internal Value Record</span>
            <p className="mt-1 text-2xl font-bold text-[#00E676]">
              {formatTradingRecordValue(item.value)} <span className="text-base font-normal text-[#768294]">{TRADING_RECORD_VALUE_LABEL}</span>
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Internal Trend Label</span>
            <p className="mt-1">
              <span className={`rounded px-2 py-0.5 text-sm font-semibold ${trendBadge[item.trend]}`}>
                {item.trend}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* General reference boundary */}
      <section aria-labelledby="tips-heading">
        <h2
          id="tips-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          💡 Using This Trading Reference
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <span className="leading-relaxed">Treat the fields above as internal editorial records only. Verify any proposed trade independently; this page does not provide a price guarantee or an item-specific buy, sell, or hold recommendation.</span>
            </li>
            <li className="flex gap-3 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <span className="leading-relaxed">The record date describes this project entry and does not indicate live data, transaction sampling, or a scheduled update.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Related Items in Same Category */}
      <section aria-labelledby="related-items-heading">
        <h2
          id="related-items-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          🔄 More {item.category} Internal Records
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {relatedItems.map((rel) => (
            <Link
              key={rel.id}
              href={`/grow-a-garden/trading/${rel.id}`}
              className="group rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676]"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
                  {rel.name}
                </span>
                <span className={`rounded px-1.5 py-0.5 text-xs font-semibold ${rarityBadge[rel.rarity]}`}>
                  Recorded: {rel.rarity}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#00E676]">Internal value: {formatTradingRecordValue(rel.value)} {TRADING_RECORD_VALUE_LABEL}</span>
                <span className={`rounded px-1.5 py-0.5 text-xs font-semibold ${trendBadge[rel.trend]}`}>
                  Internal trend: {rel.trend}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Back to Trading List */}
      <section>
        <Link
          href="/grow-a-garden/trading"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#00E676] hover:underline"
        >
          ← Back to All Trading Records
        </Link>
      </section>

      {/* Related Content */}
      <RelatedContent
        category="trading"
        game="garden"
        currentPath={`/grow-a-garden/trading/${item.id}`}
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
