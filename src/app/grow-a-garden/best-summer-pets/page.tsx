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
  title: "Summer Pet Project Records — Grow a Garden",
  description: `${boundary} The page lists selected seasonal pet-record fields only.`,
  keywords: ["Grow a Garden summer pet records", "Grow a Garden recorded seasonal pets"],
  alternates: { canonical: "/grow-a-garden/best-summer-pets" },
  openGraph: {
    title: "Summer Pet Project Records — Grow a Garden",
    description: `${boundary} The page lists selected seasonal pet-record fields only.`,
    type: "website",
  },
};

const summerPets = pets
  .filter(
    (pet) =>
      pet.seasonalBonus?.season === "Summer" ||
      ["flame-bear", "shadow-cat", "phoenix-hatchling", "magma-lizard-hatchling"].includes(pet.id)
  )
  .sort((a, b) => a.name.localeCompare(b.name));

const faqs = [
  {
    question: "What does this page list?",
    answer:
      "This page lists selected pet records that the project dataset associates with a Summer label or a selected identifier. It uses recorded name, tier, multiplier, source, and seasonal-label fields for organization only.",
  },
  {
    question: "Do these fields establish seasonal effects or availability?",
    answer:
      "No. The fields, including the recorded ability text, do not establish an event, seasonal effect, availability, acquisition method, drop rate, cost, game mechanic, or comparative usefulness. Verify current game information independently.",
  },
  {
    question: "Does this page provide trading or spending advice?",
    answer:
      "No. This editorial project-reference page does not determine trade fairness and does not provide buying, selling, holding, profit, earnings, investment, or spending guidance.",
  },
];

export default function BestSummerPetsPage() {
  return (
    <ContentLayout
      title="Summer Pet Project Records — Grow a Garden"
      description={`${boundary} This is a recorded-field comparison only.`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Summer Pet Records", href: "/grow-a-garden/best-summer-pets" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-summer-pets"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Pets"
      keywords={["Grow a Garden summer pet records", "Grow a Garden recorded seasonal pets"]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      <section className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 className="mb-3 font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Internal seasonal pet records
        </h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          {boundary} The selection below is a project-data filter, not confirmation of a current
          season, event, game feature, or recommended pet.
        </p>
      </section>

      <section aria-labelledby="summer-pet-records-heading">
        <h2 id="summer-pet-records-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          Selected seasonal pet records
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-[#BAC4D1]">
          Each value is a recorded project field. The list is alphabetized and does not rank entries or
          make a claim about effects, earnings, availability, or current game behavior.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead><tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]"><th className="py-2 pr-3">Pet record</th><th className="py-2 pr-3">Recorded tier</th><th className="py-2 pr-3">Recorded multiplier</th><th className="py-2 pr-3">Recorded ability label</th><th className="py-2 pr-3">Recorded source label</th><th className="py-2 pr-3">Recorded seasonal label</th></tr></thead>
            <tbody>{summerPets.map((pet) => <tr key={pet.id} className="border-b border-[#1E212B]"><td className="py-3 pr-3"><Link href={`/grow-a-garden/pets/${pet.id}`} className="text-[#00E676] hover:underline">{pet.name}</Link></td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{pet.tier}</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{pet.multiplier}×</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{pet.abilities[0] ?? "—"}</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{pet.source}</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{pet.seasonalBonus?.season ?? "—"}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/best-summer-pets" />
    </ContentLayout>
  );
}