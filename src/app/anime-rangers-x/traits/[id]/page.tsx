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
  if (!trait) return { title: "Trait Not Found" };

  return {
    title: `${trait.name} — Re:Rangers X Trait Guide`,
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
      title: `${trait.name} — Re:Rangers X Trait Guide`,
      description: `${trait.description}. ${trait.effect} View ${trait.name}'s full effect, strengths, weaknesses, and best unit pairings in the Anime Rangers X trait database.`,
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
      question: `What does the recorded ${trait.tier} tier label for ${trait.name} mean?`,
      answer: `Within this project's dataset, ${trait.name} carries a recorded ${trait.tier} tier label that places it in the project's comparison group. ${trait.strengths.length > 0 ? `The dataset's recorded strengths list highlights: ${trait.strengths[0]}.` : ""} This label is an editorial reference only — it does not establish combat performance or a required loadout. Use the in-game description and current patch information to decide how the trait fits your team.`,
    },
    {
      question: `Which units does this dataset associate with ${trait.name}?`,
      answer:
        trait.bestOn.length > 0
          ? `The dataset's recorded bestOn field lists: ${trait.bestOn.join(", ")}. This association is an editorial reference for comparison and navigation — it does not establish an optimal or required pairing. Check current in-game behavior and patch notes before choosing a loadout.`
          : `This record's bestOn field is currently empty, so the dataset does not associate ${trait.name} with any specific unit. Pairing decisions should rely on the in-game description and current patch information.`,
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
            <span className="text-xs text-[#768294]">Recorded Roll Rate</span>
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

      {/* How to read this record */}
      <section aria-labelledby="read-heading">
        <h2
          id="read-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          📖 How to read this record
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm text-[#BAC4D1] leading-relaxed mb-3">
            This page shows the fields currently stored for {trait.name} in the project dataset. Labels such as tier, roll rate, effect, and bestOn are editorial reference fields for comparison and navigation. They do not by themselves establish combat performance, verified probabilities, or a required loadout — confirm current in-game details and patch information before making decisions.
          </p>
          <ul className="space-y-1.5 text-sm text-[#BAC4D1]">
            <li>▸ Recorded tier: {trait.tier}</li>
            <li>▸ Recorded roll rate: {trait.rollRate} (dataset value, not an independently verified probability)</li>
            <li>▸ Recorded effect: {trait.effect}</li>
            {trait.bestOn.length > 0 && <li>▸ Recorded bestOn list: {trait.bestOn.join(", ")}</li>}
          </ul>
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
