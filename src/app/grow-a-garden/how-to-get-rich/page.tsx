import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { crops } from "@/data/garden/database/crops";
import { pets } from "@/data/garden/database/pets";
import { mutations } from "@/data/garden/database/mutations";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

const boundary =
  "The fields on this page are internal editorial project records for comparison and reference. They are not official prices, live market quotes, or independently verified transaction data.";

export const metadata: Metadata = {
  title: "Grow a Garden Project Record Reference",
  description: `${boundary} This page is a recorded-field reference, not a strategy guide.`,
  keywords: ["Grow a Garden project records", "Grow a Garden recorded field reference"],
  alternates: { canonical: "/grow-a-garden/how-to-get-rich" },
  openGraph: {
    title: "Grow a Garden Project Record Reference",
    description: `${boundary} This page is a recorded-field reference, not a strategy guide.`,
    type: "website",
  },
};

const cropRecords = [...crops]
  .sort((a, b) => a.name.localeCompare(b.name))
  .slice(0, 8);
const petRecords = [...pets]
  .sort((a, b) => a.name.localeCompare(b.name))
  .slice(0, 8);
const mutationRecords = [...mutations]
  .sort((a, b) => a.name.localeCompare(b.name))
  .slice(0, 8);

const faqs = [
  {
    question: "What is this page for?",
    answer:
      "This page provides a small project-reference view of recorded crop, pet, and mutation fields. It does not identify a fastest path, an optimal setup, or an earnings method.",
  },
  {
    question: "Do these fields establish game mechanics or earnings?",
    answer:
      "No. Recorded names, tiers, multipliers, coin fields, growth-time labels, and sources do not establish game mechanics, availability, earnings, or outcomes. Verify current game information independently.",
  },
  {
    question: "Does this page provide trading or investment advice?",
    answer:
      "No. This editorial project-reference page does not determine trade fairness and does not provide buying, selling, holding, profit, earnings, investment, or strategy advice.",
  },
];

export default function HowToGetRichPage() {
  return (
    <ContentLayout
      title="Grow a Garden Project Record Reference"
      description={`${boundary} This is a recorded-field reference only.`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Project Record Reference", href: "/grow-a-garden/how-to-get-rich" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/how-to-get-rich"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Project records"
      keywords={["Grow a Garden project records", "Grow a Garden recorded field reference"]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      <section className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 className="mb-3 font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Internal project-record reference
        </h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          {boundary} The entries below are organized only to help locate records within this project.
          They do not make claims about current game behavior, comparative performance, or outcomes.
        </p>
      </section>

      <section aria-labelledby="crop-records-heading">
        <h2 id="crop-records-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          Crop records
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-[#BAC4D1]">
          Name, tier, coin, growth-time, and per-minute fields are recorded labels in the project dataset.
          They are not a prediction, a recommendation, or independently verified game information.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead><tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]"><th className="py-2 pr-3">Crop record</th><th className="py-2 pr-3">Recorded tier</th><th className="py-2 pr-3">Recorded coins</th><th className="py-2 pr-3">Recorded growth time</th><th className="py-2 pr-3">Recorded per-minute field</th></tr></thead>
            <tbody>{cropRecords.map((crop) => <tr key={crop.id} className="border-b border-[#1E212B]"><td className="py-3 pr-3"><Link href={`/grow-a-garden/crops/${crop.id}`} className="text-[#00E676] hover:underline">{crop.name}</Link></td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{crop.tier}</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{crop.coins.toLocaleString()}</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{crop.growthTime}</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{crop.coinsPerMinute}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="pet-records-heading">
        <h2 id="pet-records-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">Pet records</h2>
        <p className="mb-4 text-sm leading-relaxed text-[#BAC4D1]">These are recorded pet fields and source labels, not a ranking or a guide to their in-game effects.</p>
        <div className="overflow-x-auto"><table className="w-full border-collapse text-sm"><thead><tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]"><th className="py-2 pr-3">Pet record</th><th className="py-2 pr-3">Recorded tier</th><th className="py-2 pr-3">Recorded multiplier</th><th className="py-2 pr-3">Recorded source label</th></tr></thead><tbody>{petRecords.map((pet) => <tr key={pet.id} className="border-b border-[#1E212B]"><td className="py-3 pr-3"><Link href={`/grow-a-garden/pets/${pet.id}`} className="text-[#00E676] hover:underline">{pet.name}</Link></td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{pet.tier}</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{pet.multiplier}×</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{pet.source}</td></tr>)}</tbody></table></div>
      </section>

      <section aria-labelledby="mutation-records-heading">
        <h2 id="mutation-records-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">Mutation records</h2>
        <p className="mb-4 text-sm leading-relaxed text-[#BAC4D1]">These are project-record fields. They do not establish a mechanism, an acquisition condition, an effect, or a recommended use.</p>
        <div className="overflow-x-auto"><table className="w-full border-collapse text-sm"><thead><tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]"><th className="py-2 pr-3">Mutation record</th><th className="py-2 pr-3">Recorded tier</th><th className="py-2 pr-3">Recorded multiplier</th></tr></thead><tbody>{mutationRecords.map((mutation) => <tr key={mutation.id} className="border-b border-[#1E212B]"><td className="py-3 pr-3"><Link href={`/grow-a-garden/mutations/${mutation.id}`} className="text-[#00E676] hover:underline">{mutation.name}</Link></td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{mutation.tier}</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{mutation.multiplier}×</td></tr>)}</tbody></table></div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/how-to-get-rich" />
    </ContentLayout>
  );
}