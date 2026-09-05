import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Grow a Garden Progression Systems Reference",
  description:
    "A neutral reference to the Grow a Garden systems commonly used during progression: crop planting, mutations, and pet abilities. This page does not provide unsupported earnings, costs, drop rates, or trading advice.",
  keywords: [
    "Grow a Garden progression guide",
    "Grow a Garden farming systems",
    "Grow a Garden mutation reference",
    "Grow a Garden pet multiplier reference",
    "Grow a Garden gameplay systems",
  ],
  alternates: { canonical: "/grow-a-garden/best-money-making-methods" },
  openGraph: {
    title: "Grow a Garden Progression Systems Reference",
    description:
      "Reference notes for crop planting, mutations, and pet abilities in Grow a Garden. No unsupported earnings or trading claims.",
    type: "website",
  },
};

const systems = [
  {
    name: "Crop Planting and Harvesting",
    icon: "🌱",
    focus: "Planting, growing, and harvesting crops",
    inputs: "Seeds, available plots, and the current in-game crop rules",
    considerations: [
      "Crop records can be used to compare names, categories, and recorded attributes.",
      "Harvest timing and plot state should be checked in the current game rather than inferred from this page.",
      "The result of a harvest depends on the game's current mechanics and the state of the player's garden.",
    ],
    bestFor: "Players learning the core garden loop and organizing crop information",
    href: "/grow-a-garden/crops",
    linkLabel: "Browse Crop Database",
  },
  {
    name: "Mutation Systems",
    icon: "✦",
    focus: "Reviewing and applying recorded mutation effects",
    inputs: "Mutation access, eligible crops, and the current in-game requirements",
    considerations: [
      "Mutation records are reference entries for comparing names and recorded multiplier fields.",
      "Availability, requirements, and interactions can change with game updates and should be verified in-game.",
      "A recorded multiplier is not an earnings estimate or a guarantee about a particular harvest.",
    ],
    bestFor: "Players comparing mutation records before checking the current game mechanics",
    href: "/grow-a-garden/mutations",
    linkLabel: "Browse Mutation Database",
  },
  {
    name: "Pet Abilities and Multipliers",
    icon: "🐾",
    focus: "Comparing pet tiers, abilities, and recorded multipliers",
    inputs: "Pet records, available equip slots, and the current in-game ability rules",
    considerations: [
      "Pet records can be compared by multiplier, tier, and ability description.",
      "The multiplier field is a project record and does not calculate coins per hour or total returns.",
      "Ability behavior, stacking, and availability should be confirmed against the current game.",
    ],
    bestFor: "Players organizing pet options and reading the pet reference fields",
    href: "/grow-a-garden/pets",
    linkLabel: "Browse Pet Database",
  },
];

const faqs = [
  {
    question: "What does this Grow a Garden page cover?",
    answer:
      "This page is a neutral reference to three progression systems: crop planting and harvesting, mutations, and pet abilities. It explains what each system covers and where to review the related project records. It does not provide unsupported earnings, costs, drop rates, or trading recommendations.",
  },
  {
    question: "Which system should I use first?",
    answer:
      "The page does not assign a universal order or outcome. Start with the systems available in the current game, then use the crop, mutation, and pet reference pages to compare the records relevant to your own progression.",
  },
  {
    question: "Does this page calculate coins per hour?",
    answer:
      "No. It does not publish hourly earnings, profit estimates, return projections, or other numerical income claims. Harvest results depend on current game mechanics and the player's garden state.",
  },
  {
    question: "Are the multiplier and tier fields official game values?",
    answer:
      "The multiplier and tier fields shown on linked database pages are project records used for editorial comparison. They should not be treated as official documentation, independent verification, or a guarantee of in-game results.",
  },
  {
    question: "Does this page recommend trading items?",
    answer:
      "No. Trading-market records and exchange decisions are outside the scope of this progression reference. The linked gameplay databases should be read as project references, not as a basis for a transaction decision.",
  },
];

export default function BestMoneyMakingMethodsPage() {
  return (
    <ContentLayout
      title="Grow a Garden Progression Systems Reference"
      description="A neutral reference to crop planting, mutations, and pet abilities in Grow a Garden. Project records are provided for comparison only and do not establish earnings, costs, drop rates, or trading outcomes."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Progression Systems Reference", href: "/grow-a-garden/best-money-making-methods" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-money-making-methods"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Progression Systems"
      keywords={[
        "Grow a Garden progression guide",
        "Grow a Garden farming systems",
        "Grow a Garden mutation reference",
        "Grow a Garden pet multiplier reference",
        "Grow a Garden gameplay systems",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          Grow a Garden progression can be organized around three systems: planting and harvesting
          crops, reviewing mutations, and comparing pet abilities. This page provides a neutral map of
          those systems and links to the related project records. It does not publish earnings, costs,
          drop rates, market claims, or trading advice.
        </p>
      </section>

      <section className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          Use this page to identify the gameplay system relevant to a question, then check the linked
          database and the current game. Names, tiers, abilities, and multiplier fields on the linked
          pages are project references. They are not a substitute for current in-game rules or a
          calculation of earnings and outcomes.
        </p>
      </section>

      <section aria-labelledby="comparison-heading">
        <h2
          id="comparison-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          System Comparison
        </h2>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[780px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">System</th>
                <th className="py-3 px-3 font-semibold">Primary Focus</th>
                <th className="py-3 px-3 font-semibold">Reference Inputs</th>
                <th className="py-3 px-3 font-semibold">Related Records</th>
              </tr>
            </thead>
            <tbody>
              {systems.map((system) => (
                <tr key={system.name} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg" aria-hidden="true">{system.icon}</span>
                      <span className="text-sm font-semibold text-white">{system.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{system.focus}</td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{system.inputs}</td>
                  <td className="py-3 px-3 text-xs">
                    <Link href={system.href} className="text-[#00E676] hover:underline">
                      {system.linkLabel}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="details-heading">
        <h2
          id="details-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          System Notes
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((system) => (
            <div key={system.name} className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-[#252936]">
                <span className="text-2xl" aria-hidden="true">{system.icon}</span>
                <h3 className="text-sm font-semibold text-white">{system.name}</h3>
              </div>
              <ul className="space-y-2">
                {system.considerations.map((item) => (
                  <li key={item} className="text-xs text-[#BAC4D1] flex gap-1.5">
                    <span className="text-[#00E676] shrink-0" aria-hidden="true">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-3 mt-3 border-t border-[#252936] text-xs text-[#768294]">
                <strong className="text-[#BAC4D1]">Useful for:</strong> {system.bestFor}
              </div>
              <Link href={system.href} className="inline-block mt-3 text-xs text-[#00E676] hover:underline">
                {system.linkLabel}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="reading-order-heading">
        <h2
          id="reading-order-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          How to Use the References
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <ol className="space-y-3">
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00E676]/20 text-xs font-bold text-[#00E676]">1</span>
              <p className="text-xs text-[#BAC4D1] leading-relaxed">Identify whether the question concerns crops, mutations, or pets.</p>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00E676]/20 text-xs font-bold text-[#00E676]">2</span>
              <p className="text-xs text-[#BAC4D1] leading-relaxed">Open the relevant database and compare the fields recorded for each entry.</p>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00E676]/20 text-xs font-bold text-[#00E676]">3</span>
              <p className="text-xs text-[#BAC4D1] leading-relaxed">Confirm current requirements, behavior, and results in the game before relying on a record.</p>
            </li>
          </ol>
        </div>
      </section>

      <RelatedContent
        category="guide"
        game="garden"
        currentPath="/grow-a-garden/best-money-making-methods"
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
