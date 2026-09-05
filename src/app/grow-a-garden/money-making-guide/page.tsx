import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { crops } from "@/data/garden/database/crops";
import { pets } from "@/data/garden/database/pets";
import { mutations } from "@/data/garden/database/mutations";
import guideData from "@/data/garden/money-making-guide";

const boundary =
  "The fields on this page are internal editorial project records for comparison and reference. They do not establish official game mechanics, earnings, live market data, or independently verified transaction data.";

export const metadata: Metadata = {
  title: "Farm Record Comparison — Grow a Garden",
  description: `${boundary} This page provides recorded-field comparisons only.`,
  alternates: { canonical: "/grow-a-garden/money-making-guide" },
  openGraph: {
    title: "Farm Record Comparison — Grow a Garden",
    description: `${boundary} This page provides recorded-field comparisons only.`,
    type: "website",
  },
};

const cropRecords = [...crops].sort((a, b) => b.coinsPerMinute - a.coinsPerMinute).slice(0, 8);
const petRecords = [...pets].sort((a, b) => b.multiplier - a.multiplier).slice(0, 6);
const mutationRecords = [...mutations].sort((a, b) => b.multiplier - a.multiplier).slice(0, 6);

const faqs = [
  {
    question: "What does this page compare?",
    answer:
      "It groups selected crop, pet, and mutation records by recorded numeric fields. The results are project-data comparisons only, not a gameplay ranking or an earnings calculation.",
  },
  {
    question: "Are these records financial or gameplay recommendations?",
    answer:
      "No. The page does not provide farming, purchase, upgrade, trading, profit, investment, or fair-trade advice. Current game mechanics and availability should be checked through accessible official information.",
  },
  {
    question: "Does this page use trading records?",
    answer:
      "No. This page does not display Trading Database value, demand, or trend fields and does not make market, price, or transaction claims.",
  },
];

export default function MoneyMakingGuidePage() {
  return (
    <ContentLayout
      title="Farm Record Comparison — Grow a Garden"
      description={`${boundary} It is not an earnings forecast or a trading guide.`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Farm Record Comparison", href: "/grow-a-garden/money-making-guide" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/money-making-guide"
      updatedAt={guideData.updatedAt}
      articleSection="Grow a Garden"
      keywords={["Grow a Garden farm records", "Grow a Garden recorded field comparison"]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      <section className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 className="mb-3 font-heading text-[20px] font-semibold text-white lg:text-[24px]">Project-record comparison</h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">{boundary}</p>
      </section>
      <section aria-labelledby="crop-heading">
        <h2 id="crop-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">Recorded crop fields</h2>
        <p className="mb-4 text-sm text-[#BAC4D1]">The order uses the dataset&apos;s recorded coins-per-minute field; it is not an earnings forecast or a planting recommendation.</p>
        <div className="overflow-x-auto"><table className="w-full border-collapse text-sm"><thead><tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]"><th className="py-2 pr-3">Crop record</th><th className="py-2 pr-3">Recorded tier</th><th className="py-2 pr-3">Recorded coins</th><th className="py-2 pr-3">Recorded growth time</th><th className="py-2 pr-3">Recorded coins per minute</th></tr></thead><tbody>{cropRecords.map((crop) => <tr key={crop.id} className="border-b border-[#1E212B]"><td className="py-3 pr-3"><Link href={`/grow-a-garden/crops/${crop.id}`} className="text-[#00E676] hover:underline">{crop.name}</Link></td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{crop.tier}</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{crop.coins}</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{crop.growthTime}</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{crop.coinsPerMinute}</td></tr>)}</tbody></table></div>
      </section>
      <section aria-labelledby="pet-heading"><h2 id="pet-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">Recorded pet fields</h2><div className="overflow-x-auto"><table className="w-full border-collapse text-sm"><thead><tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]"><th className="py-2 pr-3">Pet record</th><th className="py-2 pr-3">Recorded tier</th><th className="py-2 pr-3">Recorded multiplier</th><th className="py-2 pr-3">Recorded source</th></tr></thead><tbody>{petRecords.map((pet) => <tr key={pet.id} className="border-b border-[#1E212B]"><td className="py-3 pr-3"><Link href={`/grow-a-garden/pets/${pet.id}`} className="text-[#00E676] hover:underline">{pet.name}</Link></td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{pet.tier}</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{pet.multiplier}</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{pet.source}</td></tr>)}</tbody></table></div></section>
      <section aria-labelledby="mutation-heading"><h2 id="mutation-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">Recorded mutation fields</h2><div className="overflow-x-auto"><table className="w-full border-collapse text-sm"><thead><tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]"><th className="py-2 pr-3">Mutation record</th><th className="py-2 pr-3">Recorded tier</th><th className="py-2 pr-3">Recorded multiplier</th></tr></thead><tbody>{mutationRecords.map((mutation) => <tr key={mutation.id} className="border-b border-[#1E212B]"><td className="py-3 pr-3"><Link href={`/grow-a-garden/mutations/${mutation.id}`} className="text-[#00E676] hover:underline">{mutation.name}</Link></td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{mutation.tier}</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{mutation.multiplier}</td></tr>)}</tbody></table></div></section>
      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/money-making-guide" />
    </ContentLayout>
  );
}
