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
  title: "Phoenix Pet Project Records — Grow a Garden",
  description: `${boundary} The page compares recorded phoenix-pet fields only.`,
  keywords: ["Grow a Garden phoenix pet records", "Grow a Garden recorded phoenix pets"],
  alternates: { canonical: "/grow-a-garden/best-phoenix-pets" },
  openGraph: {
    title: "Phoenix Pet Project Records — Grow a Garden",
    description: `${boundary} The page compares recorded phoenix-pet fields only.`,
    type: "website",
  },
};

const phoenixPets = pets
  .filter(
    (pet) =>
      /phoenix/i.test(pet.name) ||
      /phoenix/i.test(pet.id) ||
      pet.aliases.some((alias) => /phoenix/i.test(alias))
  )
  .sort((a, b) => b.multiplier - a.multiplier || a.name.localeCompare(b.name));

const faqs = [
  {
    question: "What does this page compare?",
    answer:
      "This page compares phoenix-related entries identified in the project dataset. It uses recorded name, tier, multiplier, and source fields for organization only.",
  },
  {
    question: "Do the recorded fields establish mechanics or availability?",
    answer:
      "No. The recorded fields, including the recorded ability text, do not establish a pet's availability, acquisition method, drop rate, cost, in-game performance, or comparative usefulness. Verify current game information independently.",
  },
  {
    question: "Does this page give trading or spending advice?",
    answer:
      "No. This editorial project-reference page does not determine trade fairness or provide buying, selling, holding, profit, earnings, investment, or spending guidance.",
  },
];

export default function BestPhoenixPetsPage() {
  return (
    <ContentLayout
      title="Phoenix Pet Project Records — Grow a Garden"
      description={`${boundary} This is a recorded-field comparison only.`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Phoenix Pet Records", href: "/grow-a-garden/best-phoenix-pets" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-phoenix-pets"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Pets"
      keywords={["Grow a Garden phoenix pet records", "Grow a Garden recorded phoenix pets"]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      <section className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 className="mb-3 font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Internal phoenix-pet records
        </h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          {boundary} No entry is presented as a preferred pet, a verified game fact, or a basis for
          trading or spending decisions.
        </p>
      </section>

      <section aria-labelledby="phoenix-records-heading">
        <h2 id="phoenix-records-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          Phoenix-related project records
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-[#BAC4D1]">
          The project filter matches phoenix-related names, IDs, and aliases. The displayed order uses
          a recorded multiplier field and is not an official ranking or a statement about performance.
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
              {phoenixPets.map((pet, index) => (
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

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/best-phoenix-pets" />
    </ContentLayout>
  );
}