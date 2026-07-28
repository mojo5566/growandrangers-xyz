import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { trading, getTradingItemById, getTradingByCategory } from "@/data/garden/database/trading";

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
    title: `${item.name} Value — Grow a Garden Trading`,
    description: `${item.name} current trading value: ${item.value.toLocaleString()} Sheckles. ${item.rarity} ${item.category.toLowerCase()} with ${item.demand.toLowerCase()} demand and ${item.trend.toLowerCase()} trend. ${item.notes ?? ""}`,
    keywords: [
      item.name,
      `${item.name} value`,
      `${item.name} trade price`,
      `Grow a Garden ${item.category.toLowerCase()} value`,
      `${item.rarity} ${item.category.toLowerCase()} trade`,
    ],
    alternates: { canonical: `/grow-a-garden/trading/${id}` },
    openGraph: {
      title: `${item.name} Value — Grow a Garden Trading`,
      description: `${item.name} current trading value: ${item.value.toLocaleString()} Sheckles. ${item.rarity} ${item.category.toLowerCase()}.`,
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

function formatValue(value: number): string {
  return value.toLocaleString();
}

export default async function TradingDetailPage({ params }: PageProps) {
  const { id } = await params;
  const item = getTradingItemById(id);

  if (!item) notFound();

  // Generate trading tips based on item attributes
  const tradingTips: string[] = [];
  if (item.trend === "Rising") {
    tradingTips.push(
      `📈 ${item.name} is currently Rising in value — if you don't need to sell immediately, holding may yield a higher return.`
    );
  } else if (item.trend === "Falling") {
    tradingTips.push(
      `📉 ${item.name} is Falling in value — consider selling sooner rather than later if you're holding excess stock.`
    );
  } else {
    tradingTips.push(
      `➡️ ${item.name} is Stable — safe to trade at listed value without urgency.`
    );
  }
  if (item.demand === "High") {
    tradingTips.push(
      `🔥 High demand means buyers are easy to find — you can often negotiate above the listed value.`
    );
  } else if (item.demand === "Low") {
    tradingTips.push(
      `❄️ Low demand means buyers are scarce — expect to negotiate below listed value for a quick sale.`
    );
  }
  if (item.rarity === "Mythical" || item.rarity === "Legendary") {
    tradingTips.push(
      `💎 As a ${item.rarity} item, ${item.name} should only be traded with trusted players. Use a middleman for high-value trades.`
    );
  }
  if (item.notes) {
    tradingTips.push(`📋 ${item.notes}`);
  }

  // Related items from same category (excluding current)
  const relatedItems = getTradingByCategory(item.category)
    .filter((t) => t.id !== item.id)
    .slice(0, 5);

  const faqs = [
    {
      question: `How much is ${item.name} worth?`,
      answer: `${item.name} is currently valued at ${formatValue(item.value)} Sheckles equivalent. It is a ${item.rarity} ${item.category.toLowerCase()} with ${item.demand.toLowerCase()} demand and a ${item.trend.toLowerCase()} trend. ${item.notes ?? ""}`,
    },
    {
      question: `Is ${item.name} a good trade right now?`,
      answer:
        item.trend === "Rising"
          ? `Yes — ${item.name} is rising in value. If you're buying, lock in the price soon. If you're selling, consider holding for a higher return unless you need immediate liquidity.`
          : item.trend === "Falling"
          ? `Be cautious — ${item.name} is falling in value. If buying, negotiate below listed value. If selling, do so quickly to avoid further depreciation.`
          : `${item.name} is stable — a safe trade at the listed value. No urgency on either side.`,
    },
    {
      question: `Where can I trade ${item.name}?`,
      answer: `Grow a Garden trading happens in official Discord trading channels, community marketplaces, and in-game trade windows. For ${item.rarity} items like ${item.name}, always use a trusted middleman and screenshot the agreement before completing the trade.`,
    },
    {
      question: `How often is ${item.name}'s value updated?`,
      answer: `We update ${item.name}'s trading value daily based on observed in-game trades and community marketplace data. Major value shifts happen around content updates and seasonal events — check back within 24 hours of any patch.`,
    },
  ];

  return (
    <ContentLayout
      title={`${item.name} — Trading Value`}
      description={`${item.name} current trading value: ${formatValue(item.value)} Sheckles. ${item.rarity} ${item.category.toLowerCase()} with ${item.demand.toLowerCase()} demand and ${item.trend.toLowerCase()} trend.`}
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
      {/* Core Stats */}
      <section aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">
          Trading stats
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Category</span>
            <p className="mt-1 text-sm font-semibold text-[#BAC4D1]">{item.category}</p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Rarity</span>
            <p className="mt-1">
              <span className={`rounded px-2 py-0.5 text-sm font-semibold ${rarityBadge[item.rarity]}`}>
                {item.rarity}
              </span>
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Demand</span>
            <p className="mt-1">
              <span className={`rounded px-2 py-0.5 text-sm font-semibold ${demandBadge[item.demand]}`}>
                {item.demand}
              </span>
            </p>
          </div>
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4 sm:col-span-2">
            <span className="text-xs text-[#768294]">Current Value</span>
            <p className="mt-1 text-2xl font-bold text-[#00E676]">
              {formatValue(item.value)} <span className="text-base font-normal text-[#768294]">Sheckles</span>
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Trend</span>
            <p className="mt-1">
              <span className={`rounded px-2 py-0.5 text-sm font-semibold ${trendBadge[item.trend]}`}>
                {item.trend}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Trading Tips */}
      <section aria-labelledby="tips-heading">
        <h2
          id="tips-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          💡 Trading Tips for {item.name}
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <ul className="space-y-3">
            {tradingTips.map((tip, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#BAC4D1]">
                <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Items in Same Category */}
      <section aria-labelledby="related-items-heading">
        <h2
          id="related-items-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          🔄 More {item.category} Values
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
                  {rel.rarity}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#00E676]">{formatValue(rel.value)} 🪙</span>
                <span className={`rounded px-1.5 py-0.5 text-xs font-semibold ${trendBadge[rel.trend]}`}>
                  {rel.trend}
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
          ← Back to All Trading Values
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
