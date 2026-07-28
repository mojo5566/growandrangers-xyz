import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import { units, getUnitById } from "@/data/rangers/database/units";
import { getTraitByName } from "@/data/rangers/database/traits";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export async function generateStaticParams() {
  return units.map((unit) => ({ id: unit.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const unit = getUnitById(id);
  if (!unit) return { title: "Unit Not Found" };

  return {
    title: `${unit.name} — Re:Rangers X Unit Guide`,
    description: `${unit.description} View ${unit.name}'s stats, abilities, best traits, and evolution cost in the Anime Rangers X unit database.`,
    keywords: [
      `${unit.name} Anime Rangers X`,
      `${unit.name} stats`,
      `${unit.name} build`,
      `Anime Rangers X ${unit.element} unit`,
      `Anime Rangers X ${unit.role}`,
      ...unit.aliases.map((a) => `${a} Anime Rangers X`),
    ],
    alternates: { canonical: `/anime-rangers-x/units/${id}` },
    openGraph: {
      title: `${unit.name} — Re:Rangers X Unit Guide`,
      description: unit.description,
      type: "website",
    },
  };
}

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

const relatedGuides = [
  {
    label: "Unit Tier List",
    href: "/anime-rangers-x/unit-tier-list",
    description: "Full tier rankings with detailed analysis",
  },
  {
    label: "Best Units",
    href: "/anime-rangers-x/best-units",
    description: "Top picks for every game mode",
  },
  {
    label: "Evolution Guide",
    href: "/anime-rangers-x/evolution-guide",
    description: "How to evolve and awaken your units",
  },
  {
    label: "Codes",
    href: "/anime-rangers-x/codes",
    description: "Latest promo codes for free Gems and Stones",
  },
];

export default async function UnitDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const unit = getUnitById(id);

  if (!unit) notFound();

  const resolvedTraits = unit.bestTraits
    .map((name) => {
      const trait = getTraitByName(name);
      return trait ? { name: trait.name, id: trait.id } : { name, id: null };
    });

  const faqs = [
    {
      question: `Is ${unit.name} worth investing in?`,
      answer:
        unit.tier === "S" || unit.tier === "A"
          ? `Yes! ${unit.name} is a ${unit.tier}-Tier unit and one of the best ${unit.role}s in the game. ${unit.strengths[0]}. Invest your Evolution Stones and Awakening Cores confidently.`
          : unit.tier === "B"
          ? `${unit.name} is a solid B-Tier ${unit.role}. ${unit.strengths[0]}. It's worth investing if you don't have a higher-tier ${unit.role}, but save your best resources for A/S-Tier units.`
          : `${unit.name} is a C-Tier starter unit. ${unit.weaknesses[0]}. Do not invest Evolution Stones or Awakening Cores — save them for Rare or higher units.`,
    },
    {
      question: `What are the best traits for ${unit.name}?`,
      answer:
        `The best traits for ${unit.name} are: ${unit.bestTraits.join(", ")}. ` +
        (unit.bestTraits.length > 0
          ? `${unit.bestTraits[0]} is the top pick because it synergizes perfectly with ${unit.name}'s ${unit.role} role.`
          : ""),
    },
    {
      question: `How do I get ${unit.name}?`,
      answer:
        `${unit.name} can be obtained from: ${unit.sources.join(", ")}. ` +
        (unit.rarity === "Mythic"
          ? "As a Mythic unit, the summon rate is very low — save Gems for limited event banners with boosted rates."
          : unit.rarity === "Legendary"
          ? "As a Legendary unit, the summon rate is decent — you should be able to pull this within a reasonable number of summons."
          : "This unit is relatively accessible through standard summoning."),
    },
  ];

  return (
    <ContentLayout
      title={unit.name}
      description={unit.description}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Anime Rangers X", href: "/anime-rangers-x" },
        { label: "Units", href: "/anime-rangers-x/units" },
        { label: unit.name, href: `/anime-rangers-x/units/${unit.id}` },
      ]}
      accent="rangers"
      canonicalPath={`/anime-rangers-x/units/${unit.id}`}
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Core Stats */}
      <section aria-labelledby="stats-heading">
        <h2
          id="stats-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          📊 Core Stats
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Element</span>
            <p className="mt-1 text-sm font-semibold text-[#BAC4D1]">{unit.element}</p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Tier</span>
            <p className="mt-1">
              <span
                className="code-text inline-block rounded px-2 py-0.5 text-sm font-semibold"
                style={{ color: tierColors[unit.tier], backgroundColor: tierColors[unit.tier] + "1a" }}
              >
                {unit.tier}-Tier
              </span>
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Rarity</span>
            <p className="mt-1 text-sm font-semibold text-[#BAC4D1]">{unit.rarity}</p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Role</span>
            <p className="mt-1 text-sm font-semibold text-[#BAC4D1]">{unit.role}</p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">ATK</span>
            <p className="mt-1 text-lg font-bold text-[#FF3D00]">{unit.atk.toLocaleString()}</p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">HP</span>
            <p className="mt-1 text-lg font-bold text-[#00E676]">{unit.hp.toLocaleString()}</p>
          </div>
        </div>
      </section>

      {/* Ultimate */}
      <section aria-labelledby="ultimate-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2
          id="ultimate-heading"
          className="font-heading text-[20px] font-semibold text-white mb-3"
        >
          ⚡ Ultimate Ability
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">{unit.ultimate}</p>
      </section>

      {/* Passive */}
      <section aria-labelledby="passive-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2
          id="passive-heading"
          className="font-heading text-[20px] font-semibold text-white mb-3"
        >
          🔄 Passive Ability
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">{unit.passive}</p>
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
              {unit.strengths.map((s, i) => (
                <li key={i} className="flex gap-2 text-sm text-[#BAC4D1]">
                  <span className="text-[#00E676] shrink-0">+</span> {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-3">⚠️ Weaknesses</h3>
            <ul className="space-y-2">
              {unit.weaknesses.map((w, i) => (
                <li key={i} className="flex gap-2 text-sm text-[#BAC4D1]">
                  <span className="text-[#FF3D00] shrink-0">-</span> {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Best Traits */}
      <section aria-labelledby="traits-heading">
        <h2
          id="traits-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          🎯 Best Traits for {unit.name}
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {resolvedTraits.map((trait, i) => (
            <div key={i} className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
              {trait.id ? (
                <Link
                  href={`/anime-rangers-x/traits/${trait.id}`}
                  className="text-sm font-semibold text-[#BAC4D1] hover:text-[#FF3D00] transition"
                >
                  {trait.name} →
                </Link>
              ) : (
                <span className="text-sm font-semibold text-[#BAC4D1]">{trait.name}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Sources & Evolution */}
      <section aria-labelledby="sources-heading">
        <h2
          id="sources-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          📦 How to Get {unit.name}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-[#3A86FF] mb-3">📍 Sources</h3>
            <ul className="space-y-2">
              {unit.sources.map((s, i) => (
                <li key={i} className="flex gap-2 text-sm text-[#BAC4D1]">
                  <span className="text-[#3A86FF] shrink-0">▸</span> {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-[#FFD700] mb-3">⬆️ Evolution Cost</h3>
            <p className="text-sm text-[#BAC4D1] leading-relaxed">{unit.evolutionCost}</p>
          </div>
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
