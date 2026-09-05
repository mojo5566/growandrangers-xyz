import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import {
  trading,
  TRADING_RECORD_DISCLAIMER,
  TRADING_RECORD_VALUE_LABEL,
  formatTradingRecordValue,
} from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

const boundary = TRADING_RECORD_DISCLAIMER;

export const metadata: Metadata = {
  title: "Recorded Trading Entries Reference — Grow a Garden",
  description: `${boundary} This page orders entries by the internal value field.`,
  keywords: [
    "Grow a Garden recorded trading entries",
    "Grow a Garden internal value records",
    "Grow a Garden editorial trading reference",
  ],
  alternates: { canonical: "/grow-a-garden/rare-items-value" },
  openGraph: {
    title: "Recorded Trading Entries Reference — Grow a Garden",
    description: `${boundary} This page orders entries by the internal value field.`,
    type: "website",
  },
};

const recordedEntries = [...trading].sort((a, b) => b.value - a.value).slice(0, 20);
const categories = ["Pet", "Seed", "Crop", "Mutation"] as const;
const categoryStats = categories.map((category) => {
  const records = trading.filter((item) => item.category === category);
  const averageValue = records.length
    ? Math.round(records.reduce((total, item) => total + item.value, 0) / records.length)
    : 0;
  return { category, count: records.length, averageValue };
});

const faqs = [
  {
    question: "What does this entry order show?",
    answer:
      "It orders project records by the internal value field. The order is an editorial comparison, not a claim that an entry is the rarest, most valuable, or most desirable item in the game.",
  },
  {
    question: "Are the value, demand, and trend fields prices or market data?",
    answer:
      "No. Value, demand, and trend are internal project-reference fields. They are not official prices, live market quotes, or independently verified transaction data, and they do not determine whether a trade is fair.",
  },
  {
    question: "Does this page recommend a trade decision?",
    answer:
      "No. This page provides a record comparison only. It does not provide buying, selling, holding, profit, investment, or trade-safety guidance.",
  },
];

export default function RareItemsValuePage() {
  return (
    <ContentLayout
      title="Recorded Trading Entries Reference — Grow a Garden"
      description={`${boundary} Entries are shown as a project-reference comparison only.`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Recorded Trading Entries", href: "/grow-a-garden/rare-items-value" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/rare-items-value"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Trading"
      keywords={["Grow a Garden recorded trading entries", "Grow a Garden internal value records"]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      <section className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 className="mb-3 font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Project-record comparison
        </h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          {boundary} The table below is a mathematical ordering of recorded value fields. Recorded rarity,
          category, demand, and trend labels are included to identify project entries; they do not establish
          availability, item mechanics, market activity, future value, or a trading outcome.
        </p>
      </section>

      <section aria-labelledby="records-heading">
        <h2 id="records-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          Highest internal value records
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]">
                <th className="py-2 pr-3">Project order</th>
                <th className="py-2 pr-3">Entry</th>
                <th className="py-2 pr-3">Recorded category</th>
                <th className="py-2 pr-3">Recorded rarity</th>
                <th className="py-2 pr-3">Internal value record ({TRADING_RECORD_VALUE_LABEL})</th>
                <th className="py-2 pr-3">Internal demand label</th>
                <th className="py-2 pr-3">Internal trend label</th>
              </tr>
            </thead>
            <tbody>
              {recordedEntries.map((item, index) => (
                <tr key={item.id} className="border-b border-[#1E212B]">
                  <td className="py-3 pr-3 text-[#BAC4D1]">#{index + 1}</td>
                  <td className="py-3 pr-3">
                    <Link href={`/grow-a-garden/trading/${item.id}`} className="text-[#00E676] hover:underline">
                      {item.name}
                    </Link>
                  </td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{item.category}</td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{item.rarity}</td>
                  <td className="py-3 pr-3 text-[#00E676]">{formatTradingRecordValue(item.value)} {TRADING_RECORD_VALUE_LABEL}</td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{item.demand}</td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{item.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="category-heading">
        <h2 id="category-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          Internal-record arithmetic by category
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-[#BAC4D1]">
          These counts and averages are calculations over the project dataset, not market measures or gameplay guidance.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categoryStats.map((stat) => (
            <div key={stat.category} className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
              <h3 className="text-sm font-semibold text-[#00E676]">{stat.category}</h3>
              <p className="mt-2 text-xs text-[#BAC4D1]">Recorded entries: {stat.count}</p>
              <p className="mt-1 text-xs text-[#BAC4D1]">Internal-value average: {formatTradingRecordValue(stat.averageValue)} {TRADING_RECORD_VALUE_LABEL}</p>
            </div>
          ))}
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/rare-items-value" />
    </ContentLayout>
  );
}
