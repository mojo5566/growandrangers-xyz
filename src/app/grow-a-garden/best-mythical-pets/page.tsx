import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { pets } from "@/data/garden/database/pets";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Mythical Pet Internal Records Comparison",
  description:
    "Editorial comparison of project pet records marked S-Tier and ordered by their recorded multiplier. It is a project-reference comparison, not an official ranking or gameplay guide.",
  keywords: [
    "mythical pet records comparison Grow a Garden",
    "S-Tier project records Grow a Garden",
    "Grow a Garden pet record comparison",
  ],
  alternates: { canonical: "/grow-a-garden/best-mythical-pets" },
  openGraph: {
    title: "Mythical Pet Internal Records Comparison",
    description:
      "Editorial comparison of project pet records marked S-Tier and ordered by their recorded multiplier. It is a project-reference comparison, not an official ranking or gameplay guide.",
    type: "website",
  },
};

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

// Compare project records marked S-Tier, sorted by the internal multiplier field.
const topPets = pets
  .filter((p) => p.tier === "S")
  .sort((a, b) => b.multiplier - a.multiplier);

const faqs = [
  {
    question: "What does this comparison show?",
    answer:
      "This page shows project records marked S-Tier and orders them by the recorded multiplier field. It is an editorial project-reference comparison, not an official ranking, a statement of game mechanics, or a recommendation.",
  },
  {
    question: "Is S-Tier an official rarity?",
    answer:
      "No. S-Tier is a tag in the project pet records used for this comparison. It is not presented as an official rarity classification or evidence of a pet's gameplay behavior.",
  },
  {
    question: "What does the recorded multiplier mean here?",
    answer:
      "It is an internal field used only to order the entries on this page. The page does not treat it as an official gameplay measurement, a forecast, or a guarantee of an outcome.",
  },
  {
    question: "Does this page include trading data or advice?",
    answer:
      "No. This page does not read or display Trading record fields such as demand, trend, rarity, or notes. It does not provide buying, selling, holding, investment, or gameplay advice.",
  },
];

export default function BestMythicalPetsPage() {
  return (
    <ContentLayout
      title="Mythical Pet Internal Records Comparison"
      description="Editorial comparison of project pet records marked S-Tier and ordered by their recorded multiplier. These are internal project-reference fields, not an official ranking, gameplay guide, or trading recommendation."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Mythical Pet Records", href: "/grow-a-garden/best-mythical-pets" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-mythical-pets"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Pets"
      keywords={[
        "mythical pet records comparison Grow a Garden",
        "S-Tier project records Grow a Garden",
        "Grow a Garden pet record comparison",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - AI search summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          This page compares the project records currently marked <strong className="text-white">S-Tier</strong> and orders them by their recorded internal multiplier. It displays the record name, S-Tier label, and multiplier only. These are editorial project-reference fields; S-Tier does not establish an official rarity, gameplay result, or recommendation.
        </p>
      </section>

      {/* Hero Intro */}
      <section className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          This editorial comparison covers the {topPets.length} records selected by the project&apos;s internal{" "}
          <strong className="text-white">S-Tier</strong> tag. It uses the recorded multiplier only for a mathematical
          ordering of those project records. It does not display Trading data, ability descriptions, acquisition
          details, or mechanics, and it does not establish an official classification or recommendation.
        </p>
      </section>

      {/* Ranked Comparison Table */}
      <section aria-labelledby="ranking-heading">
        <h2
          id="ranking-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          🏆 Editorial S-Tier Record Comparison
        </h2>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[560px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">#</th>
                <th className="py-3 px-3 font-semibold">Pet</th>
                <th className="py-3 px-3 font-semibold">Tier</th>
                <th className="py-3 px-3 font-semibold">Recorded Multiplier</th>
              </tr>
            </thead>
            <tbody>
              {topPets.map((pet, i) => (
                <tr key={pet.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3 text-[#768294]">{i + 1}</td>
                  <td className="py-3 px-3">
                    <Link
                      href={`/grow-a-garden/pets/${pet.id}`}
                      className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {pet.name}
                    </Link>
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className="code-text inline-block rounded px-2 py-0.5 text-xs font-semibold"
                      style={{ color: tierColors[pet.tier], backgroundColor: tierColors[pet.tier] + "1a" }}
                    >
                      {pet.tier}-Tier
                    </span>
                  </td>
                  <td className="py-3 px-3 text-base font-bold text-[#00E676]">{pet.multiplier.toFixed(1)}x</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <RelatedContent
        category="guide"
        game="garden"
        currentPath="/grow-a-garden/best-mythical-pets"
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
