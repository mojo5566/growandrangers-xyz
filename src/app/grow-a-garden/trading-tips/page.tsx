import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { TRADING_RECORD_DISCLAIMER } from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

const pageDescription =
  `A reference guide to the internal fields used in the Grow a Garden Trading pages. Values, demand, and trend labels are editorial project records. ${TRADING_RECORD_DISCLAIMER}`;

export const metadata: Metadata = {
  title: "Grow a Garden Trading Record Fields Guide",
  description: pageDescription,
  keywords: [
    "Grow a Garden trading reference",
    "Grow a Garden trading fields",
    "Grow a Garden item records",
  ],
  alternates: { canonical: "/grow-a-garden/trading-tips" },
  openGraph: {
    title: "Grow a Garden Trading Record Fields Guide",
    description: pageDescription,
    type: "website",
  },
};

const faqs = [
  {
    question: "What is this Grow a Garden trading page?",
    answer:
      "This is a guide to reading the internal editorial fields used by the Grow a Garden Trading pages. It explains the limits of those project records; it does not confirm a transaction or establish a market price.",
  },
  {
    question: "What does the value field mean?",
    answer:
      "Value is an internal recorded field used for project reference and page organization. It is not an official price, a live market quote, or an independently verified transaction record.",
  },
  {
    question: "What do demand and trend mean?",
    answer:
      "Demand and trend are internal editorial labels attached to project records. They do not measure live activity, predict a price movement, or provide a recommendation to buy, sell, or hold an item.",
  },
  {
    question: "What date applies to the trading records?",
    answer:
      "The date shown on this page is an editorial record date for the project. It is not a market sampling date, transaction date, or promise of a particular update schedule.",
  },
  {
    question: "Can this guide tell me whether a trade is fair?",
    answer:
      "No. The fields described here are not a fair-trade calculation, investment guidance, or a buying, selling, holding, or profit recommendation. Check the actual in-game terms independently before making a decision.",
  },
];

export default function TradingTipsPage() {
  return (
    <ContentLayout
      title="Grow a Garden Trading Record Fields Guide"
      description={pageDescription}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Trading Reference", href: "/grow-a-garden/trading-tips" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/trading-tips"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Trading"
      keywords={[
        "Grow a Garden trading reference",
        "Grow a Garden trading fields",
        "Grow a Garden item records",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      <section className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 className="mb-3 font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Trading reference scope
        </h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          The Trading pages organize project records for items included in the trading-record dataset. The recorded value, demand, trend, rarity, and
          category fields are internal editorial references. They are not official prices, live market quotes, or
          independently verified transaction data, and this page does not provide buying, selling, holding,
          investment, profit, or trade-safety guidance.
        </p>
      </section>

      <section aria-labelledby="field-guide-heading">
        <h2 id="field-guide-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          How to read the recorded fields
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[#252936] bg-[#14161D]">
          <table className="min-w-full text-sm">
            <thead className="bg-[#1E212B] text-[#768294]">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Field</th>
                <th className="px-4 py-3 text-left font-semibold">Project reference meaning</th>
                <th className="px-4 py-3 text-left font-semibold">What it does not establish</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#252936]">
              <tr>
                <td className="px-4 py-3 font-semibold text-white">Value</td>
                <td className="px-4 py-3 text-[#BAC4D1]">Internal recorded value field.</td>
                <td className="px-4 py-3 text-[#768294]">An official price, live quote, or verified transaction.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-white">Demand</td>
                <td className="px-4 py-3 text-[#BAC4D1]">Internal recorded demand label.</td>
                <td className="px-4 py-3 text-[#768294]">Live buyer activity, liquidity, or a trade outcome.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-white">Trend</td>
                <td className="px-4 py-3 text-[#BAC4D1]">Internal recorded trend label.</td>
                <td className="px-4 py-3 text-[#768294]">A forecast, market movement, or investment signal.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-white">Rarity and category</td>
                <td className="px-4 py-3 text-[#BAC4D1]">Recorded labels used to organize the reference.</td>
                <td className="px-4 py-3 text-[#768294]">A claim about availability, mechanics, or market value.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="use-records-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="use-records-heading" className="mb-3 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          Using the Trading pages
        </h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          Use the <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">Trading Reference</Link>{" "}
          to browse the recorded fields and open an item page for its project entry. The page date is an editorial
          record date, not a market or transaction date. Check the current game and official announcements for
          version-sensitive information.
        </p>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/trading-tips" />
    </ContentLayout>
  );
}
