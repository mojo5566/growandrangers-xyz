import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { mutations, getMutationById } from "@/data/garden/database/mutations";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return mutations.map((mutation) => ({ id: mutation.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const mutation = getMutationById(id);
  if (!mutation) return { title: "Mutation Not Found" };

  return {
    title: `${mutation.name} — Grow a Garden Mutation Guide`,
    description: mutation.description,
    keywords: [
      mutation.name,
      "Grow a Garden mutation",
      `${mutation.name} multiplier`,
      `${mutation.name} roll rate`,
      ...mutation.aliases,
    ],
    alternates: { canonical: `/grow-a-garden/mutations/${id}` },
    openGraph: {
      title: `${mutation.name} — Grow a Garden Mutation Guide`,
      description: mutation.description,
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

export default async function MutationDetailPage({ params }: PageProps) {
  const { id } = await params;
  const mutation = getMutationById(id);

  if (!mutation) notFound();

  const faqs = [
    {
      question: `What does ${mutation.name} do?`,
      answer: `${mutation.name} provides a ${mutation.multiplier}× multiplier${mutation.conditionalBonus ? ` (${mutation.conditionalBonus.bonusMultiplier}× when ${mutation.conditionalBonus.condition.toLowerCase()})` : ""}. ${mutation.passives.length > 0 ? `Its passive ability: ${mutation.passives.join("; ")}.` : ""}`,
    },
    {
      question: `How rare is ${mutation.name}?`,
      answer: `${mutation.name} has a roll rate of ${mutation.rollRate}. ${mutation.tier === "S" ? "This makes it one of the rarest mutations in the game." : mutation.tier === "C" ? "This is a common roll, making it easy to obtain." : "This is a moderate roll rate — expect several shard rolls to get it."}`,
    },
    ...(mutation.bestUse
      ? [
          {
            question: `What is the best use for ${mutation.name}?`,
            answer: mutation.bestUse,
          },
        ]
      : []),
  ];

  return (
    <ContentLayout
      title={mutation.name}
      description={mutation.description}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Mutations", href: "/grow-a-garden/mutations" },
        { label: mutation.name, href: `/grow-a-garden/mutations/${mutation.id}` },
      ]}
      accent="garden"
      canonicalPath={`/grow-a-garden/mutations/${mutation.id}`}
    >
      {/* Core Stats */}
      <section aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          📊 Mutation Stats
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Multiplier</span>
            <p className="mt-1 text-lg font-bold text-[#00E676]">{mutation.multiplier}×</p>
            {mutation.conditionalBonus && (
              <p className="mt-1 text-xs text-[#768294]">
                {mutation.conditionalBonus.bonusMultiplier}× when {mutation.conditionalBonus.condition.toLowerCase()}
              </p>
            )}
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Tier</span>
            <p className="mt-1">
              <span className={`rounded px-2 py-0.5 text-sm font-semibold ${tierBadge[mutation.tier]}`}>
                {mutation.tier}
              </span>
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Roll Rate</span>
            <p className="mt-1 text-lg font-bold text-white">{mutation.rollRate}</p>
          </div>
          {mutation.seasonal && (
            <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
              <span className="text-xs text-[#768294]">Seasonal</span>
              <p className="mt-1 text-lg font-bold text-white">{mutation.seasonal}</p>
            </div>
          )}
        </div>
      </section>

      {/* Description */}
      <section aria-labelledby="desc-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="desc-heading" className="font-heading text-[20px] font-semibold text-white mb-3">
          📝 About {mutation.name}
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">{mutation.description}</p>
      </section>

      {/* Passives */}
      {mutation.passives.length > 0 && (
        <section aria-labelledby="passives-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <h2 id="passives-heading" className="font-heading text-[20px] font-semibold text-white mb-3">
            ⚡ Passive Abilities
          </h2>
          <ul className="space-y-2">
            {mutation.passives.map((passive, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#BAC4D1]">
                <span className="text-[#00E676] shrink-0 mt-0.5">▸</span>
                {passive}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Strengths & Weaknesses */}
      <div className="grid gap-4 md:grid-cols-2">
        <section aria-labelledby="strengths-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <h2 id="strengths-heading" className="font-heading text-[20px] font-semibold text-white mb-3">
            ✅ Strengths
          </h2>
          <ul className="space-y-2">
            {mutation.strengths.map((s, i) => (
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
            {mutation.weaknesses.map((w, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#BAC4D1]">
                <span className="text-[#FF3D00] shrink-0 mt-0.5">▸</span>
                {w}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Best Use */}
      {mutation.bestUse && (
        <section aria-labelledby="bestuse-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <h2 id="bestuse-heading" className="font-heading text-[20px] font-semibold text-white mb-3">
            🎯 Best Use
          </h2>
          <p className="text-sm text-[#BAC4D1] leading-relaxed">{mutation.bestUse}</p>
        </section>
      )}

      {/* Related Guides */}
      <RelatedContent
        category="mutations"
        game="garden"
        currentPath={`/grow-a-garden/mutations/${mutation.id}`}
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
