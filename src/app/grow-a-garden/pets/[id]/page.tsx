import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { pets, getPetById } from "@/data/garden/database/pets";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return pets.map((pet) => ({ id: pet.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const pet = getPetById(id);
  if (!pet) return { title: "Pet Not Found" };

  return {
    title: `${pet.name} — Grow a Garden Pet Guide`,
    description: pet.description,
    keywords: [
      pet.name,
      "Grow a Garden pet",
      `${pet.name} multiplier`,
      `${pet.name} abilities`,
      ...pet.aliases,
    ],
    alternates: { canonical: `/grow-a-garden/pets/${id}` },
    openGraph: {
      title: `${pet.name} — Grow a Garden Pet Guide`,
      description: pet.description,
      type: "website",
    },
  };
}

const tierBadge: Record<string, string> = {
  S: "bg-[#FF3D00]/20 text-[#FF3D00]",
  A: "bg-[#FF8C00]/20 text-[#FF8C00]",
  B: "bg-[#FFD700]/20 text-[#FFD700]",
  C: "bg-[#3A86FF]/20 text-[#3A86FF]",
};

export default async function PetDetailPage({ params }: PageProps) {
  const { id } = await params;
  const pet = getPetById(id);

  if (!pet) notFound();

  const faqs = [
    {
      question: `What does ${pet.name} do?`,
      answer: `${pet.name} provides a ${pet.multiplier}× multiplier${pet.seasonalBonus ? ` (${pet.seasonalBonus.bonusMultiplier}× during ${pet.seasonalBonus.season})` : ""}. ${pet.abilities.length > 0 ? `Its ability: ${pet.abilities.join("; ")}.` : ""}`,
    },
    {
      question: `How do I get ${pet.name}?`,
      answer: `${pet.name} can be obtained from ${pet.source}.${pet.source === "Seasonal Event" ? " This pet is only available during limited-time seasonal events." : pet.source === "Legendary Egg" ? " Legendary Eggs cost 10,000 Coins each and have the highest drop rates for S-Tier pets." : pet.source === "Rare Egg" ? " Rare Eggs cost 2,000 Coins each." : " Basic Eggs cost 500 Coins each."}`,
    },
    ...(pet.tier === "S" || pet.tier === "A"
      ? [
          {
            question: `Is ${pet.name} worth investing in?`,
            answer: `Yes. As a ${pet.tier}-Tier pet, ${pet.name} is among the best in the game. ${pet.description}`,
          },
        ]
      : []),
  ];

  return (
    <ContentLayout
      title={pet.name}
      description={pet.description}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Pets", href: "/grow-a-garden/pets" },
        { label: pet.name, href: `/grow-a-garden/pets/${pet.id}` },
      ]}
      accent="garden"
      canonicalPath={`/grow-a-garden/pets/${pet.id}`}
    >
      {/* Core Stats */}
      <section aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          📊 Pet Stats
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Multiplier</span>
            <p className="mt-1 text-lg font-bold text-[#00E676]">{pet.multiplier}×</p>
            {pet.seasonalBonus && (
              <p className="mt-1 text-xs text-[#768294]">
                {pet.seasonalBonus.bonusMultiplier}× during {pet.seasonalBonus.season}
              </p>
            )}
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Tier</span>
            <p className="mt-1">
              <span className={`rounded px-2 py-0.5 text-sm font-semibold ${tierBadge[pet.tier]}`}>
                {pet.tier}
              </span>
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Source</span>
            <p className="mt-1 text-lg font-bold text-white">{pet.source}</p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Abilities</span>
            <p className="mt-1 text-sm text-[#BAC4D1]">{pet.abilities.join("; ")}</p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section aria-labelledby="desc-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="desc-heading" className="font-heading text-[20px] font-semibold text-white mb-3">
          📝 About {pet.name}
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">{pet.description}</p>
      </section>

      {/* Strengths & Weaknesses */}
      <div className="grid gap-4 md:grid-cols-2">
        <section aria-labelledby="strengths-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <h2 id="strengths-heading" className="font-heading text-[20px] font-semibold text-white mb-3">
            ✅ Strengths
          </h2>
          <ul className="space-y-2">
            {pet.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#BAC4D1]">
                <span className="text-[#00E676] shrink-0 mt-0.5">▸</span>
                {s}
              </li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="weaknesses-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <h2 id="weaknesses-heading" className="font-heading text-[20px] font-semibold text-white mb-3">
            ❌ Weaknesses
          </h2>
          <ul className="space-y-2">
            {pet.weaknesses.map((w, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#BAC4D1]">
                <span className="text-[#FF3D00] shrink-0 mt-0.5">▸</span>
                {w}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Related Guides */}
      <RelatedContent
        category="pets"
        game="garden"
        currentPath={`/grow-a-garden/pets/${pet.id}`}
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
