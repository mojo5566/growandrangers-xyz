import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { pets } from "@/data/garden/database/pets";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Mythical Pet Records Comparison",
  description:
    "Editorial comparison of project pet records marked S-Tier and ordered by their recorded multiplier. It is a project-reference comparison, not an official ranking or gameplay guide.",
  keywords: [
    "mythical pet records comparison Grow a Garden",
    "S-Tier project records Grow a Garden",
    "Grow a Garden pet record comparison",
  ],
  alternates: { canonical: "/grow-a-garden/best-mythical-pets-ranking" },
  openGraph: {
    title: "Mythical Pet Records Comparison",
    description:
      "Editorial comparison of project pet records marked S-Tier and ordered by their recorded multiplier. It is a project-reference comparison, not an official ranking or gameplay guide.",
    type: "website",
  },
};

// This page compares records marked S-Tier in the project database.
const mythicalPets = pets
  .filter((p) => p.tier === "S")
  .sort((a, b) => b.multiplier - a.multiplier);

const rankedRows = mythicalPets.map((p) => ({
  id: p.id,
  name: p.name,
  tier: p.tier,
  multiplier: p.multiplier,
}));

const faqs = [
  {
    question: "What does this comparison show?",
    answer:
      "This page selects project pet records marked S-Tier and orders them by the recorded multiplier field. It is an editorial project-reference comparison, not an official rarity list, gameplay guide, or recommendation.",
  },
  {
    question: "What does S-Tier mean on this page?",
    answer:
      "S-Tier is an internal tag in the project pet records. It is used only to select entries for this page and is not presented as an official rarity classification or proof of gameplay behavior.",
  },
  {
    question: "What does the recorded multiplier mean here?",
    answer:
      "It is an internal field used for the page's mathematical ordering. It is not presented as an official gameplay measurement, a forecast, or a guarantee of an outcome.",
  },
  {
    question: "Does this page include Trading data or advice?",
    answer:
      "No. This page does not read or display Trading record fields such as demand, trend, rarity, or notes. It does not provide buying, selling, holding, investment, or gameplay advice.",
  },
];

export default function BestMythicalPetsRankingPage() {
  return (
    <ContentLayout
      title="Mythical Pet Records Comparison"
      description="Editorial comparison of project pet records marked S-Tier and ordered by their recorded multiplier. These are internal project-reference fields, not an official ranking, gameplay guide, or trading recommendation."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Mythical Pet Records", href: "/grow-a-garden/best-mythical-pets-ranking" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-mythical-pets-ranking"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Pets"
      keywords={[
        "mythical pet records comparison Grow a Garden",
        "S-Tier project records Grow a Garden",
        "Grow a Garden pet record comparison",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - scope and method summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          This page is an editorial comparison of the records currently marked <strong className="text-white">S-Tier</strong> in the project database. The displayed order is produced by filtering that internal tag and sorting the recorded multiplier. It displays the record name, S-Tier label, and multiplier only. These are project-reference fields, not an official ranking, gameplay result, or recommendation.
        </p>
      </section>

      {/* Opening — source and scope boundary */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          The comparison below uses only the project&apos;s internal pet records. It is intended to help readers inspect the recorded differences between these entries, not to establish an official ranking, a statement of game mechanics, or a recommendation. It links to the canonical{" "}
          <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">Pets Database</Link>.
        </p>
      </section>

      {/* Project-record comparison matrix */}
      <section aria-labelledby="comparison-heading">
        <h2
          id="comparison-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⚔️ Project-Record Comparison Matrix
        </h2>
        <p className="mb-4 text-xs leading-relaxed text-[#768294]">
          This table reproduces the internal S-Tier label and recorded multiplier only. It does not read or display Trading record fields such as demand, trend, rarity, or notes, and it is not a statement of game mechanics or a recommendation.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]">
                <th className="py-2 pr-3">Pet</th>
                <th className="py-2 pr-3">Recorded Multiplier</th>
                <th className="py-2 pr-3">Recorded Tier</th>
              </tr>
            </thead>
            <tbody>
              {rankedRows.map((row, i) => (
                <tr key={row.id} className="border-b border-[#1E212B]">
                  <td className="py-3 pr-3">
                    <span className="text-xs text-[#768294]">#{i + 1}</span>
                    <br />
                    <Link
                      href={`/grow-a-garden/pets/${row.id}`}
                      className="text-[#00E676] hover:underline font-semibold"
                    >
                      {row.name}
                    </Link>
                  </td>
                  <td className="py-3 pr-3 font-semibold text-white">{row.multiplier}×</td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{row.tier}-Tier</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/best-mythical-pets-ranking" />
    </ContentLayout>
  );
}
