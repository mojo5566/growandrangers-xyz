import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import Link from "next/link";
import { units, getUnitsByTier } from "@/data/rangers/database/units";

export const metadata: Metadata = {
  title: "Re:Rangers X Units List — All 31 Units",
  description:
    "Complete Anime Rangers X units database with stats, elements, tiers, and roles for every unit. Find ATK, HP, and tier rankings for all units including Chrono Slayer, Void Empress, and more.",
  keywords: [
    "Anime Rangers X units database",
    "Anime Rangers X all units",
    "Anime Rangers X unit stats",
    "Anime Rangers X unit list 2026",
    "Chrono Slayer stats",
    "Void Empress stats",
    "Anime Rangers X unit ATK HP",
  ],
  alternates: { canonical: "/anime-rangers-x/units" },
  openGraph: {
    title: "Re:Rangers X Units List — All 31 Units",
    description:
      "Complete Anime Rangers X units database with stats, elements, tiers, and roles for every unit.",
    type: "website",
  },
};

const tierOrder: Array<"S" | "A" | "B" | "C"> = ["S", "A", "B", "C"];

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

const tierLabels: Record<string, string> = {
  S: "Meta-Defining Units",
  A: "Excellent Units",
  B: "Solid Mid-Game Units",
  C: "Starter Units",
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
    label: "Trait Tier List",
    href: "/anime-rangers-x/trait-tier-list",
    description: "Best traits for every unit",
  },
];

const faqs = [
  {
    question: "How many units are in Anime Rangers X?",
    answer:
      "There are currently 20 units in Anime Rangers X, spanning four tier categories: S-Tier (2 Mythic units), A-Tier (4 Legendary/Epic units), B-Tier (11 Epic/Rare units), and C-Tier (3 Common starter units). New units are added with major updates.",
  },
  {
    question: "What is the best unit in Anime Rangers X?",
    answer:
      "Chrono Slayer is the best unit overall. With 3,200 ATK and a time-freeze ultimate that stops all enemies for 4 seconds, it has the highest DPS and game-changing utility. Void Empress is the second-best, offering massive AOE damage and self-sustain.",
  },
  {
    question: "How do I get Mythic units like Chrono Slayer?",
    answer:
      "Mythic units can only be obtained through the Mythic summon banner at very low rates, or during limited event banners that offer boosted rates. Save your Gems for event banners where Mythic rates are typically doubled.",
  },
  {
    question: "Should I invest resources in C-Tier starter units?",
    answer:
      "No. C-Tier starter units (Wind Scout, Flame Recruit, Aqua Squire) should not receive Evolution Stones, Awakening Cores, or Trait Rolls. Save all resources for Rare or higher units. Replace starters as soon as you summon any better unit.",
  },
];

export default function UnitsDatabasePage() {
  return (
    <ContentLayout
      title="Anime Rangers X Units Database"
      description="Complete database of all units in Anime Rangers X with stats, elements, tiers, and roles. Click any unit to view detailed stats, abilities, and best traits."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Anime Rangers X", href: "/anime-rangers-x" },
        { label: "Units Database", href: "/anime-rangers-x/units" },
      ]}
      accent="rangers"
      canonicalPath="/anime-rangers-x/units"
      updatedAt="July 19, 2026"
    >
      {/* Overview Stats */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-4" aria-label="Database overview">
        <div className="flex items-center gap-2">
          <span className="text-sm">📊</span>
          <p className="text-sm text-[#BAC4D1]">
            <strong className="text-white">{units.length} units</strong> across 4 tier categories —
            S-Tier: {getUnitsByTier("S").length}, A-Tier: {getUnitsByTier("A").length},
            B-Tier: {getUnitsByTier("B").length}, C-Tier: {getUnitsByTier("C").length}
          </p>
        </div>
      </section>

      {/* Units by Tier */}
      {tierOrder.map((tier) => {
        const tierUnits = getUnitsByTier(tier);
        return (
          <section key={tier} aria-labelledby={`tier-${tier.toLowerCase()}`}>
            <h2
              id={`tier-${tier.toLowerCase()}`}
              className="font-heading text-[22px] font-semibold text-white lg:text-[26px] mb-1"
              style={{ color: tierColors[tier] }}
            >
              {tier === "S" ? "🔴" : tier === "A" ? "🟠" : tier === "B" ? "🟡" : "🔵"} {tier}-Tier — {tierLabels[tier]}
            </h2>
            <p className="text-sm text-[#768294] mb-4">
              {tier === "S" && "The most powerful units in the game. Build your team strategy around these if you pull them."}
              {tier === "A" && "Strong units with significantly better summon rates than Mythics. These form the backbone of competitive teams."}
              {tier === "B" && "Viable units for mid-game progression. Each fills a specific niche — save your best resources for A/S-Tier units."}
              {tier === "C" && "Free starter units to learn the game. Replace immediately after your first Rare+ summon."}
            </p>
            <div className="overflow-hidden rounded-xl border border-[#252936]">
              <div className="grid grid-cols-[1.5fr_0.8fr_0.5fr_0.7fr_0.7fr_0.7fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
                <span className="text-xs font-semibold text-[#768294]">NAME</span>
                <span className="text-xs font-semibold text-[#768294]">ELEMENT</span>
                <span className="text-xs font-semibold text-[#768294]">TIER</span>
                <span className="text-xs font-semibold text-[#768294]">ROLE</span>
                <span className="text-xs font-semibold text-[#768294]">ATK</span>
                <span className="text-xs font-semibold text-[#768294]">HP</span>
              </div>
              {tierUnits.map((unit) => (
                <div
                  key={unit.id}
                  className="grid grid-cols-[1.5fr_0.8fr_0.5fr_0.7fr_0.7fr_0.7fr] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
                >
                  <Link
                    href={`/anime-rangers-x/units/${unit.id}`}
                    className="text-sm font-semibold text-[#BAC4D1] hover:text-[#FF3D00] transition"
                  >
                    {unit.name}
                  </Link>
                  <span className="text-xs text-[#768294]">{unit.element}</span>
                  <span
                    className="code-text inline-block rounded px-1.5 py-0.5 text-xs font-semibold w-fit"
                    style={{ color: tierColors[tier], backgroundColor: tierColors[tier] + "1a" }}
                  >
                    {unit.tier}
                  </span>
                  <span className="text-xs text-[#768294]">{unit.role}</span>
                  <span className="text-xs text-[#BAC4D1] font-medium">{unit.atk.toLocaleString()}</span>
                  <span className="text-xs text-[#BAC4D1] font-medium">{unit.hp.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </section>
        );
      })}

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
