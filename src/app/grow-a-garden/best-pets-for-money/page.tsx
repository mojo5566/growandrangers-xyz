import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { pets } from "@/data/garden/database/pets";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

const boundary =
  "The entries on this page are internal editorial project records for comparison and reference. They are not official prices, live market quotes, or independently verified transaction data.";

export const metadata: Metadata = {
  title: "Pet Project Records Comparison — Grow a Garden",
  description: `${boundary} The page uses recorded pet fields for an internal comparison only.`,
  keywords: ["Grow a Garden pet project records", "Grow a Garden recorded pet comparison"],
  alternates: { canonical: "/grow-a-garden/best-pets-for-money" },
  openGraph: {
    title: "Pet Project Records Comparison — Grow a Garden",
    description: `${boundary} The page uses recorded pet fields for an internal comparison only.`,
    type: "website",
  },
};

const petRecords = [...pets]
  .sort((a, b) => b.multiplier - a.multiplier || a.name.localeCompare(b.name))
  .slice(0, 12);

const faqs = [
  {
    question: "What does this page compare?",
    answer:
      "This page compares selected pet entries using recorded name, tier, multiplier, and source fields from the project dataset. The ordering is an internal mathematical comparison, not an official ranking or a statement about in-game performance.",
  },
  {
    question: "Do the recorded fields establish earnings or game mechanics?",
    answer:
      "No. Recorded pet fields, including the recorded ability text, do not establish earnings, availability, drop rates, costs, or game mechanics. Check accessible official information for current in-game details.",
  },
  {
    question: "Does this page provide a trading or investment recommendation?",
    answer:
      "No. This is an editorial project-reference comparison. It does not determine trade fairness or provide buying, selling, holding, profit, earnings, or investment guidance.",
  },
];

export default function BestPetsForMoneyPage() {
  return (
    <ContentLayout
      title="Pet Project Records Comparison — Grow a Garden"
      description={`${boundary} This is a recorded-field comparison only.`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Pet Records", href: "/grow-a-garden/best-pets-for-money" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-pets-for-money"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Pets"
      keywords={["Grow a Garden pet project records", "Grow a Garden recorded pet comparison"]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      <section className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 className="mb-3 font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Internal pet-record comparison
        </h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          {boundary} The recorded fields below are presented for project-reference comparison. They do
          not establish a pet&apos;s earnings, in-game usefulness, availability, or trading outcome.
        </p>
      </section>

      <section aria-labelledby="pet-records-heading">
        <h2 id="pet-records-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          Selected pet records
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-[#BAC4D1]">
          Entries are sorted by the dataset&apos;s recorded multiplier field and then by name. This is a
          page-internal mathematical order, not a recommendation or verified measure of comparative value.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]">
                <th className="py-2 pr-3">Project order</th>
                <th className="py-2 pr-3">Pet record</th>
                <th className="py-2 pr-3">Recorded tier</th>
                <th className="py-2 pr-3">Recorded multiplier</th>
                <th className="py-2 pr-3">Recorded ability label</th>
                <th className="py-2 pr-3">Recorded source label</th>
              </tr>
            </thead>
            <tbody>
              {petRecords.map((pet, index) => (
                <tr key={pet.id} className="border-b border-[#1E212B]">
                  <td className="py-3 pr-3 text-[#BAC4D1]">#{index + 1}</td>
                  <td className="py-3 pr-3">
                    <Link href={`/grow-a-garden/pets/${pet.id}`} className="text-[#00E676] hover:underline">
                      {pet.name}
                    </Link>
                  </td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{pet.tier}</td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{pet.multiplier}×</td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{pet.abilities[0] ?? "—"}</td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{pet.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 className="mb-3 font-heading text-[20px] font-semibold text-white">How to read these records</h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          Name, tier, multiplier, and source are project-record fields. They can help locate entries in
          this site&apos;s dataset, but each field needs independent verification against current game
          information before it is used outside this comparison.
        </p>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/best-pets-for-money" />
    </ContentLayout>
  );
}