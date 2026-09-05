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
  title: "Event Seed Project Records — Grow a Garden",
  description: `${boundary} Entries are ordered using recorded tier and price fields.`,
  keywords: [
    "Grow a Garden event seed records",
    "Grow a Garden seed project reference",
    "Grow a Garden recorded seed comparison",
  ],
  alternates: { canonical: "/grow-a-garden/best-event-seeds" },
  openGraph: {
    title: "Event Seed Project Records — Grow a Garden",
    description: `${boundary} Entries are ordered using recorded tier and price fields.`,
    type: "website",
  },
};

const eventSeedNames = [
  "phoenix-bloom-seed",
  "neon-pumpkin-seed",
  "frost-melon-seed",
  "magma-pepper-seed",
  "premium-event-seed",
  "lucky-clover-seed",
  "frostbloom-seed",
];

const tierOrder: Record<string, number> = { S: 0, A: 1, B: 2, C: 3 };
const eventSeeds = seeds
  .filter((seed) => eventSeedNames.includes(seed.id))
  .sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier] || b.price - a.price);

const faqs = [
  {
    question: "What does this page compare?",
    answer:
      "This page compares the selected seed records in the project dataset. It uses recorded name, tier, season, currency, and price fields for page organization only.",
  },
  {
    question: "Does a recorded tier or price predict an outcome?",
    answer:
      "No. Recorded tier, season, price, and currency fields do not establish availability, game mechanics, item performance, future value, or a trading outcome. Confirm current in-game details through accessible official information before making a decision.",
  },
  {
    question: "Does this page provide purchase or trading guidance?",
    answer:
      "No. This is an editorial project-reference comparison. It does not provide buying, selling, holding, profit, investment, or fair-trade guidance.",
  },
];

export default function BestEventSeedsPage() {
  return (
    <ContentLayout
      title="Event Seed Project Records — Grow a Garden"
      description={`${boundary} This is a recorded-field comparison only.`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Event Seed Records", href: "/grow-a-garden/best-event-seeds" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-event-seeds"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Seeds"
      keywords={["Grow a Garden event seed records", "Grow a Garden recorded seed comparison"]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      <section className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 className="mb-3 font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Internal seed-record comparison
        </h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          {boundary} The page does not claim an entry is the best seed, confirm event availability,
          predict value, or recommend a purchase, trade, holding period, or spending decision.
        </p>
      </section>

      <section aria-labelledby="seed-records-heading">
        <h2 id="seed-records-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          Selected event-seed records
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-[#BAC4D1]">
          The order below is a project-data sort using recorded tier and price fields. It is not an official ranking or
          a statement about rarity, availability, game mechanics, or comparative usefulness.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]">
                <th className="py-2 pr-3">Project order</th>
                <th className="py-2 pr-3">Seed record</th>
                <th className="py-2 pr-3">Recorded tier</th>
                <th className="py-2 pr-3">Recorded season</th>
                <th className="py-2 pr-3">Recorded price</th>
                <th className="py-2 pr-3">Recorded currency</th>
              </tr>
            </thead>
            <tbody>
              {eventSeeds.map((seed, index) => (
                <tr key={seed.id} className="border-b border-[#1E212B]">
                  <td className="py-3 pr-3 text-[#BAC4D1]">#{index + 1}</td>
                  <td className="py-3 pr-3">
                    <Link href={`/grow-a-garden/seeds/${seed.id}`} className="text-[#00E676] hover:underline">
                      {seed.name}
                    </Link>
                  </td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{seed.tier}</td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{seed.season}</td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{seed.price.toLocaleString()}</td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{seed.currency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 className="mb-3 font-heading text-[20px] font-semibold text-white">How to read the fields</h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          Tier, season, price, and currency are recorded labels in this project dataset. They are suitable for locating
          and comparing entries on this page, but they are not a substitute for current in-game information or
          accessible official announcements.
        </p>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/best-event-seeds" />
    </ContentLayout>
  );
}
