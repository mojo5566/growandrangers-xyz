import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { pets } from "@/data/garden/database/pets";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Best Dragon Pets in Grow a Garden",
  description:
    "Compare dragon pets in Grow a Garden by recorded tier, multiplier, ability, and source. Use this page as an editorial reference for checking current game details.",
  keywords: [
    "best dragon pet Grow a Garden",
    "Grow a Garden Golden Dragon",
    "Grow a Garden Neon Dragon Hatchling",
    "Grow a Garden Baby Dragon",
    "dragon pet tier list Grow a Garden",
    "dragon pet multiplier Grow a Garden",
  ],
  alternates: { canonical: "/grow-a-garden/best-dragon-pets" },
  openGraph: {
    title: "Best Dragon Pets in Grow a Garden",
    description:
      "Compare dragon pets by recorded multipliers, tiers, abilities, and source labels.",
    type: "website",
  },
};

const dragonPets = pets
  .filter((p) =>
    /dragon/i.test(p.name) ||
    /dragon/i.test(p.id) ||
    p.aliases.some((a) => /dragon/i.test(a))
  )
  .sort((a, b) => b.multiplier - a.multiplier);

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

const faqs = [
  {
    question: "Which dragon pet is ranked highest here?",
    answer:
      "Golden Dragon is the first entry in this project’s comparison because it has the highest recorded multiplier among the dragon entries. The ranking is an editorial reference, not an official tier list or a recommendation to acquire a specific pet.",
  },
  {
    question: "How should I compare dragon pets?",
    answer:
      "Review the recorded tier, multiplier, ability, and source fields together. A higher recorded multiplier does not by itself establish acquisition difficulty, current gameplay impact, or how abilities interact with other systems.",
  },
  {
    question: "How do I get a dragon pet?",
    answer:
      "This page records the source label stored for each pet, but it does not independently verify drop rates, egg costs, or current acquisition rules. Confirm the current source and requirements in the game or official announcements.",
  },
  {
    question: "Do dragon pet multipliers stack with mutations?",
    answer:
      "The database records pet and mutation multipliers as separate fields. Whether they stack, and how they affect a current harvest, should be confirmed in the game or official announcements rather than inferred from this comparison.",
  },
  {
    question: "Can dragon pets be traded?",
    answer:
      "Tradeability can depend on the current game rules and item state. This page does not assign a price or make a transaction recommendation, so confirm whether a pet is tradeable in the current game before planning around it.",
  },
];

export default function BestDragonPetsPage() {
  return (
    <ContentLayout
      title="Best Dragon Pets in Grow a Garden"
      description="Compare dragon pets by recorded tier, multiplier, ability, and source labels."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Best Dragon Pets", href: "/grow-a-garden/best-dragon-pets" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-dragon-pets"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Pets"
      keywords={[
        "best dragon pet Grow a Garden",
        "Grow a Garden Golden Dragon",
        "Grow a Garden Neon Dragon Hatchling",
        "Grow a Garden Baby Dragon",
        "dragon pet tier list Grow a Garden",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="mb-3 font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Quick Answer
        </h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          Golden Dragon is the top entry in this project’s dragon-pet comparison, followed by the other entries in descending recorded multiplier order. The table is an editorial reference for tier, multiplier, ability, and source labels. Confirm acquisition rules and current gameplay effects in the game or official announcements.
        </p>
      </section>

      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          This page narrows the Pets Database to entries whose name, ID, or alias includes “dragon.” It keeps the comparison focused on fields that are present in the project records: pet name, tier, multiplier, ability, and source. Because those records do not include an evidence trail for every mechanic, use them as a reference and verify important details in the current game.
        </p>
      </section>

      <section aria-labelledby="ranking-heading">
        <h2 id="ranking-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          🐉 Dragon Pet Quick Reference
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]">
                <th className="py-3 pr-3">Pet</th>
                <th className="py-3 pr-3">Tier</th>
                <th className="py-3 pr-3">Multiplier</th>
                <th className="py-3 pr-3">Ability</th>
                <th className="py-3 pr-3">Source</th>
                <th className="py-3 pr-3">Record</th>
              </tr>
            </thead>
            <tbody>
              {dragonPets.map((pet) => (
                <tr key={pet.id} className="border-b border-[#1E212B]">
                  <td className="py-3 pr-3">
                    <Link href={`/grow-a-garden/pets/${pet.id}`} className="font-semibold text-[#00E676] hover:underline">
                      {pet.name}
                    </Link>
                  </td>
                  <td className="py-3 pr-3">
                    <span className="rounded px-2 py-0.5 text-xs font-bold" style={{ color: tierColors[pet.tier], background: tierColors[pet.tier] + "22" }}>
                      {pet.tier}
                    </span>
                  </td>
                  <td className="py-3 pr-3 font-semibold text-white">{pet.multiplier}×</td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{pet.abilities[0] ?? "—"}</td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{pet.source}</td>
                  <td className="py-3 pr-3 text-xs text-[#768294]">Project pet record</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          Entries are sorted by the recorded multiplier. The review date identifies this project’s content record, not a live game-state check.
        </p>
      </section>

      <section aria-labelledby="comparison-heading">
        <h2 id="comparison-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          📚 How to Use the Comparison
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="mb-2 text-sm font-semibold text-[#00E676]">1. Read the record</h3>
            <p className="text-xs leading-relaxed text-[#768294]">Start with tier and multiplier, then review the recorded ability and source instead of relying on a single number.</p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="mb-2 text-sm font-semibold text-[#00E676]">2. Check the current game</h3>
            <p className="text-xs leading-relaxed text-[#768294]">Confirm acquisition requirements, ability wording, and stacking behavior in the current game or official announcements.</p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="mb-2 text-sm font-semibold text-[#00E676]">3. Compare neutrally</h3>
            <p className="text-xs leading-relaxed text-[#768294]">Use the rows to identify differences between dragon entries. No row should be read as a price, investment, or transaction recommendation.</p>
          </div>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/best-dragon-pets" />
    </ContentLayout>
  );
}
