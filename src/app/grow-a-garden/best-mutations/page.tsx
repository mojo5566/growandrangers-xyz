import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { mutations, getMutationsByTier } from "@/data/garden/database/mutations";
import guideData from "@/data/garden/best-mutations";

const boundary =
  "Mutation fields on this page are internal editorial project records for comparison and reference. They are not official game data, live market quotes, or independently verified transaction data.";

export const metadata: Metadata = {
  title: "Mutation Project Records — Grow a Garden",
  description: `${boundary} Entries are ordered by the recorded multiplier field.`,
  alternates: { canonical: "/grow-a-garden/best-mutations" },
  openGraph: {
    title: "Mutation Project Records — Grow a Garden",
    description: `${boundary} Entries are ordered by the recorded multiplier field.`,
    type: "website",
  },
};

const rankedMutations = [...mutations].sort((a, b) => b.multiplier - a.multiplier);
const topMutations = rankedMutations.slice(0, 10);
const tiers = ["S", "A", "B", "C"] as const;

const faqs = [
  {
    question: "What does the mutation order show?",
    answer:
      "It is a project-data ordering by the recorded multiplier field. It is not a claim that a mutation is best, strongest, available, or suited to a particular setup.",
  },
  {
    question: "Are multiplier, tier, roll-rate, and use fields verified mechanics?",
    answer:
      "No. They are project-record fields that require independent verification against current game information. This page does not establish mechanics, acquisition odds, item effects, or an expected result.",
  },
  {
    question: "Does this page provide trading or investment guidance?",
    answer:
      "No. It does not display internal trading record fields such as demand or trend, and it does not provide buying, selling, holding, profit, investment, or fair-trade guidance.",
  },
];

export default function BestMutationsPage() {
  return (
    <ContentLayout
      title="Mutation Project Records — Grow a Garden"
      description={`${boundary} This is a recorded-field comparison only.`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Mutation Records", href: "/grow-a-garden/best-mutations" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-mutations"
      updatedAt={guideData.updatedAt}
      articleSection="Mutations"
      keywords={["Grow a Garden mutation records", "Grow a Garden recorded multiplier comparison"]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      <section className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 className="mb-3 font-heading text-[20px] font-semibold text-white lg:text-[24px]">Project-record comparison</h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          {boundary} Recorded multiplier, tier, roll-rate, and use fields are displayed to identify entries in this
          dataset. They do not establish gameplay mechanics, availability, earnings, or recommended combinations.
        </p>
      </section>
      <section aria-labelledby="ranking-heading">
        <h2 id="ranking-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          Recorded multiplier order
        </h2>
        <div className="overflow-x-auto"><table className="w-full border-collapse text-sm">
          <thead><tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]">
            <th className="py-2 pr-3">Project order</th><th className="py-2 pr-3">Mutation record</th>
            <th className="py-2 pr-3">Recorded tier</th><th className="py-2 pr-3">Recorded multiplier</th>
            <th className="py-2 pr-3">Recorded roll-rate label</th><th className="py-2 pr-3">Recorded use label</th>
          </tr></thead>
          <tbody>{topMutations.map((mutation, index) => (
            <tr key={mutation.id} className="border-b border-[#1E212B]">
              <td className="py-3 pr-3 text-[#BAC4D1]">#{index + 1}</td>
              <td className="py-3 pr-3"><Link href={`/grow-a-garden/mutations/${mutation.id}`} className="text-[#00E676] hover:underline">{mutation.name}</Link></td>
              <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{mutation.tier}</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{mutation.multiplier}</td>
              <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{mutation.rollRate}</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{mutation.bestUse ?? "—"}</td>
            </tr>
          ))}</tbody>
        </table></div>
      </section>
      <section aria-labelledby="tiers-heading">
        <h2 id="tiers-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">Recorded tier groups</h2>
        <div className="grid gap-4 sm:grid-cols-2">{tiers.map((tier) => {
          const entries = getMutationsByTier(tier);
          return <div key={tier} className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-[#00E676]">Recorded {tier}-tier entries ({entries.length})</h3>
            <p className="mt-2 text-xs text-[#BAC4D1]">{entries.map((mutation) => mutation.name).join(", ")}</p>
          </div>;
        })}</div>
      </section>
      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/best-mutations" />
    </ContentLayout>
  );
}
