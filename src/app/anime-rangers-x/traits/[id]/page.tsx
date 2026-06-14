import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import { traits, getTraitById } from "@/data/rangers/database/traits";

export async function generateStaticParams() {
  return traits.map((trait) => ({ id: trait.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const trait = getTraitById(id);
  if (!trait) return { title: "Trait Not Found | BloxPulse" };

  return {
    title: `${trait.name} — Anime Rangers X Trait Guide (June 2026) | BloxPulse`,
    description: `${trait.description}. ${trait.effect} View ${trait.name}'s full effect, strengths, weaknesses, and best unit pairings in the Anime Rangers X trait database.`,
    keywords: [
      `${trait.name} Anime Rangers X`,
      `${trait.name} trait`,
      `Anime Rangers X ${trait.tier} trait`,
      `Anime Rangers X trait effect`,
      ...trait.aliases.map((a) => `${a} Anime Rangers X`),
    ],
    alternates: { canonical: `/anime-rangers-x/traits/${id}` },
    openGraph: {
      title: `${trait.name} — Anime Rangers X Trait Guide`,
      description: `${trait.description}. ${trait.effect}`,
      type: "website",
    },
  };
}

const tierColors: Record<string, string> = {
  Mythic: "#FF3D00",
  Legendary: "#FF8C00",
  Epic: "#FFD700",
  Rare: "#3A86FF",
  Common: "#768294",
};

const relatedGuides = [
  {
    label: "Trait Tier List",
    href: "/anime-rangers-x/trait-tier-list",
    description: "Full trait rankings with detailed analysis",
  },
  {
    label: "Units Database",
    href: "/anime-rangers-x/units",
    description: "All units with stats and abilities",
  },
  {
    label: "Best Units",
    href: "/anime-rangers-x/best-units",
    description: "Top picks for every game mode",
  },
  {
    label: "Codes",
    href: "/anime-rangers-x/codes",
    description: "Latest promo codes for free Gems and Stones",
  },
];

export default async function TraitDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const trait = getTraitById(id);

  if (!trait) notFound();

  const faqs = [
    {
      question: `Is ${trait.name} worth using?`,
      answer:
        trait.tier === "Mythic" || trait.tier === "Legendary"
          ? `Yes! ${trait.name} is a ${trait.tier}-Tier trait and one of the best in the game. ${trait.strengths[0]}. If you roll this, equip it immediately on a suitable unit.`
          : trait.tier === "Epic"
          ? `${trait.name} is a solid Epic-tier trait. ${trait.strengths[0]}. It's a good choice if you don't have a Legendary or Mythic trait available.`
          : trait.tier === "Rare"
          ? `${trait.name} is a budget Rare-tier trait. ${trait.strengths[0]}. Use it as a placeholder until you roll an Epic or higher trait.`
          : `${trait.name} is a Common-tier trait with minimal impact. ${trait.weaknesses[0]}. Replace it as soon as you roll anything better.`,
    },
    {
      question: `What units work best with ${trait.name}?`,
      answer:
        trait.bestOn.length > 0
          ? `${trait.name} works best on: ${trait.bestOn.join(", ")}. ${trait.strengths[0]}.`
          : `${trait.name} is a general-purpose trait that works on any unit, but doesn't particularly excel on any specific unit.`,
    },
  ];

  return (
    <ContentLayout
      title={trait.name}
      description={`${trait.description}. ${trait.effect}`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Anime Rangers X", href: "/anime-rangers-x" },
        { label: "Traits", href: "/anime-rangers-x/traits" },
        { label: trait.name, href: `/anime-rangers-x/traits/${trait.id}` },
      ]}
      accent="rangers"
      canonicalPath={`/anime-rangers-x/traits/${trait.id}`}
    >
      {/* Core Info */}
      <section aria-labelledby="info-heading">
        <h2
          id="info-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          📊 Trait Info
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Tier</span>
            <p className="mt-1">
              <span
                className="code-text inline-block rounded px-2 py-0.5 text-sm font-semibold"
                style={{ color: tierColors[trait.tier], backgroundColor: tierColors[trait.tier] + "1a" }}
              >
                {trait.tier}
              </span>
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Roll Rate</span>
            <p className="mt-1 text-lg font-bold text-[#FF3D00]">{trait.rollRate}</p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Also Known As</span>
            <p className="mt-1 text-sm text-[#BAC4D1]">{trait.aliases.join(", ")}</p>
          </div>
        </div>
      </section>

      {/* Effect */}
      <section aria-labelledby="effect-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2
          id="effect-heading"
          className="font-heading text-[20px] font-semibold text-white mb-3"
        >
          ⚡ Effect
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">{trait.effect}</p>
      </section>

      {/* Strengths & Weaknesses */}
      <section aria-labelledby="pros-cons-heading">
        <h2
          id="pros-cons-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          ⚖️ Strengths & Weaknesses
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-[#00E676] mb-3">✅ Strengths</h3>
            <ul className="space-y-2">
              {trait.strengths.map((s, i) => (
                <li key={i} className="flex gap-2 text-sm text-[#BAC4D1]">
                  <span className="text-[#00E676] shrink-0">+</span> {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-3">⚠️ Weaknesses</h3>
            <ul className="space-y-2">
              {trait.weaknesses.map((w, i) => (
                <li key={i} className="flex gap-2 text-sm text-[#BAC4D1]">
                  <span className="text-[#FF3D00] shrink-0">-</span> {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Best On */}
      <section aria-labelledby="best-on-heading">
        <h2
          id="best-on-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          🎯 Best Units for {trait.name}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trait.bestOn.map((unitName, i) => (
            <div key={i} className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
              <span className="text-sm font-semibold text-[#BAC4D1]">{unitName}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Related Guides */}
      <section aria-labelledby="related-heading">
        <h2
          id="related-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          🔗 Related Anime Rangers X Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {relatedGuides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00] group"
            >
              <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#FF3D00] transition">
                {g.label} →
              </span>
              <p className="mt-1 text-xs text-[#768294]">{g.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
