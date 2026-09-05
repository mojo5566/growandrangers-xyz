import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { seeds } from "@/data/garden/database/seeds";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

const boundary =
  "The fields on this page are internal editorial project records for comparison and reference. They are not official prices, live market quotes, or independently verified transaction data.";

export const metadata: Metadata = {
  title: "Legendary Seed Project Records — Grow a Garden",
  description: `${boundary} Entries are ordered using recorded tier and price fields.`,
  alternates: { canonical: "/grow-a-garden/best-legendary-seeds" },
  openGraph: {
    title: "Legendary Seed Project Records — Grow a Garden",
    description: `${boundary} Entries are ordered using recorded tier and price fields.`,
    type: "website",
  },
};

const tierOrder: Record<string, number> = { S: 0, A: 1, B: 2, C: 3 };
const legendarySeeds = seeds
  .filter((seed) => seed.rarity === "Legendary")
  .sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier] || a.price - b.price);

const faqs = [
  {
    question: "What does this comparison show?",
    answer:
      "It shows project records whose rarity field is labeled Legendary, ordered by the recorded tier and price fields. It is an editorial comparison rather than a claim that a seed is best, rarest, or most useful.",
  },
  {
    question: "Do the recorded fields predict gameplay or a financial outcome?",
    answer:
      "No. Tier, rarity, season, currency, price, and growth time are recorded project fields. They do not establish current availability, game mechanics, earnings, future value, or a trading outcome.",
  },
  {
    question: "Does this page recommend a purchase or trade?",
    answer:
      "No. This page does not provide buying, selling, holding, profit, investment, or fair-trade guidance. Confirm current in-game details through accessible official information before making a decision.",
  },
];

export default function BestLegendarySeedsPage() {
  return (
    <ContentLayout
      title="Legendary Seed Project Records — Grow a Garden"
      description={`${boundary} This is a recorded-field comparison only.`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Legendary Seed Records", href: "/grow-a-garden/best-legendary-seeds" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-legendary-seeds"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Seeds"
      keywords={["Grow a Garden legendary seed records", "Grow a Garden recorded seed comparison"]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      <section className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 className="mb-3 font-heading text-[20px] font-semibold text-white lg:text-[24px]">Project-record comparison</h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          {boundary} The page does not estimate payback, return, earnings, or comparative performance, and it does not
          provide purchasing, planting, or trading instructions.
        </p>
      </section>

      <section aria-labelledby="records-heading">
        <h2 id="records-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          Recorded Legendary seed entries
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-[#BAC4D1]">
          This order uses recorded tier and price fields. The labels support navigation within this project dataset only.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead><tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]">
              <th className="py-2 pr-3">Project order</th><th className="py-2 pr-3">Seed record</th>
              <th className="py-2 pr-3">Recorded tier</th><th className="py-2 pr-3">Recorded rarity</th>
              <th className="py-2 pr-3">Recorded season</th><th className="py-2 pr-3">Recorded price</th>
              <th className="py-2 pr-3">Recorded currency</th><th className="py-2 pr-3">Recorded growth time</th>
            </tr></thead>
            <tbody>{legendarySeeds.map((seed, index) => (
              <tr key={seed.id} className="border-b border-[#1E212B]">
                <td className="py-3 pr-3 text-[#BAC4D1]">#{index + 1}</td>
                <td className="py-3 pr-3"><Link href={`/grow-a-garden/seeds/${seed.id}`} className="text-[#00E676] hover:underline">{seed.name}</Link></td>
                <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{seed.tier}</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{seed.rarity}</td>
                <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{seed.season}</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{seed.price.toLocaleString()}</td>
                <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{seed.currency}</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{seed.growthTime}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </section>
      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/best-legendary-seeds" />
    </ContentLayout>
  );
}
