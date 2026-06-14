import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import Link from "next/link";
import { traits, getTraitsByTier } from "@/data/rangers/database/traits";

export const metadata: Metadata = {
  title: "Anime Rangers X Traits Database — All Traits Listed (June 2026) | BloxPulse",
  description:
    "Complete Anime Rangers X traits database with effects, tiers, roll rates, and best units for every trait. Find the best traits for Chrono Slayer, Void Empress, and more.",
  keywords: [
    "Anime Rangers X traits database",
    "Anime Rangers X all traits",
    "Anime Rangers X trait effects",
    "Anime Rangers X trait list 2026",
    "Anime Rangers X Time Rewind",
    "Anime Rangers X God-Speed",
    "Anime Rangers X trait roll rates",
  ],
  alternates: { canonical: "/anime-rangers-x/traits" },
  openGraph: {
    title: "Anime Rangers X Traits Database — All Traits Listed (June 2026)",
    description:
      "Complete Anime Rangers X traits database with effects, tiers, roll rates, and best units for every trait.",
    type: "website",
  },
};

const tierOrder: Array<"Mythic" | "Legendary" | "Epic" | "Rare" | "Common"> = [
  "Mythic",
  "Legendary",
  "Epic",
  "Rare",
  "Common",
];

const tierColors: Record<string, string> = {
  Mythic: "#FF3D00",
  Legendary: "#FF8C00",
  Epic: "#FFD700",
  Rare: "#3A86FF",
  Common: "#768294",
};

const tierLabels: Record<string, string> = {
  Mythic: "Game-Changing Traits",
  Legendary: "Powerful Traits",
  Epic: "Strong Mid-Tier Traits",
  Rare: "Budget Traits",
  Common: "Placeholder Traits",
};

const relatedGuides = [
  {
    label: "Trait Tier List",
    href: "/anime-rangers-x/trait-tier-list",
    description: "Full trait rankings with detailed analysis",
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

const faqs = [
  {
    question: "How do traits work in Anime Rangers X?",
    answer:
      "Traits are passive abilities that enhance a unit's performance. Each unit can equip one trait, which provides bonuses like increased attack speed, cooldown reduction, or defensive buffs. Traits are rolled randomly when summoning or can be rerolled using Trait Roll items.",
  },
  {
    question: "What is the best trait in Anime Rangers X?",
    answer:
      "Time Rewind is the best trait overall. It instantly resets all ability cooldowns on kill, enabling infinite ultimate chains on high-kill-rate units like Chrono Slayer. God-Speed is the second-best, providing stacking +50% attack speed per kill.",
  },
  {
    question: "How do I get Mythic traits like Time Rewind?",
    answer:
      "Mythic traits have a 0.5% roll rate, making them extremely rare. You can obtain them through Trait Rolls on any unit. Save your Trait Rolls for your best units — don't waste them on units you plan to replace.",
  },
  {
    question: "Should I keep Rare or Common traits?",
    answer:
      "Rare and Common traits are placeholders — replace them as soon as you get an Epic or higher trait. Basic ATK+, HP Boost, Speed+, Defense+, and Luck+ all provide minimal bonuses that are outclassed by every higher-tier trait.",
  },
];

export default function TraitsDatabasePage() {
  return (
    <ContentLayout
      title="Anime Rangers X Traits Database"
      description="Complete database of all traits in Anime Rangers X with effects, tiers, roll rates, and best unit pairings. Click any trait to view detailed information."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Anime Rangers X", href: "/anime-rangers-x" },
        { label: "Traits Database", href: "/anime-rangers-x/traits" },
      ]}
      accent="rangers"
      canonicalPath="/anime-rangers-x/traits"
    >
      {/* Overview Stats */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-4" aria-label="Database overview">
        <div className="flex items-center gap-2">
          <span className="text-sm">📊</span>
          <p className="text-sm text-[#BAC4D1]">
            <strong className="text-white">{traits.length} traits</strong> across 5 tier categories —
            Mythic: {getTraitsByTier("Mythic").length}, Legendary: {getTraitsByTier("Legendary").length},
            Epic: {getTraitsByTier("Epic").length}, Rare: {getTraitsByTier("Rare").length},
            Common: {getTraitsByTier("Common").length}
          </p>
        </div>
      </section>

      {/* Traits by Tier */}
      {tierOrder.map((tier) => {
        const tierTraits = getTraitsByTier(tier);
        return (
          <section key={tier} aria-labelledby={`tier-${tier.toLowerCase()}`}>
            <h2
              id={`tier-${tier.toLowerCase()}`}
              className="font-heading text-[22px] font-semibold text-white lg:text-[26px] mb-1"
              style={{ color: tierColors[tier] }}
            >
              {tier === "Mythic" ? "🔴" : tier === "Legendary" ? "🟠" : tier === "Epic" ? "🟡" : tier === "Rare" ? "🔵" : "⚪"} {tier} — {tierLabels[tier]}
            </h2>
            <p className="text-sm text-[#768294] mb-4">
              {tier === "Mythic" && "The most powerful traits in the game. Game-changing effects that redefine how a unit plays. Extremely rare at 0.5% roll rate."}
              {tier === "Legendary" && "Powerful traits with strong stat bonuses and unique effects. 3% roll rate makes them the realistic target for dedicated trait rolling."}
              {tier === "Epic" && "Solid mid-tier traits with meaningful bonuses. 8% roll rate makes these the most common 'good' traits you'll encounter."}
              {tier === "Rare" && "Budget traits with modest bonuses. Decent placeholders until you roll something better. 15% roll rate."}
              {tier === "Common" && "Minimal-impact traits that should be replaced as soon as possible. 25% roll rate — you'll see these often but never want to keep them."}
            </p>
            <div className="overflow-hidden rounded-xl border border-[#252936]">
              <div className="grid grid-cols-[1.2fr_0.6fr_1.5fr_0.6fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
                <span className="text-xs font-semibold text-[#768294]">NAME</span>
                <span className="text-xs font-semibold text-[#768294]">TIER</span>
                <span className="text-xs font-semibold text-[#768294]">EFFECT</span>
                <span className="text-xs font-semibold text-[#768294]">ROLL RATE</span>
              </div>
              {tierTraits.map((trait) => (
                <div
                  key={trait.id}
                  className="grid grid-cols-[1.2fr_0.6fr_1.5fr_0.6fr] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
                >
                  <Link
                    href={`/anime-rangers-x/traits/${trait.id}`}
                    className="text-sm font-semibold text-[#BAC4D1] hover:text-[#FF3D00] transition"
                  >
                    {trait.name}
                  </Link>
                  <span
                    className="code-text inline-block rounded px-1.5 py-0.5 text-xs font-semibold w-fit"
                    style={{ color: tierColors[tier], backgroundColor: tierColors[tier] + "1a" }}
                  >
                    {trait.tier}
                  </span>
                  <span className="text-xs text-[#768294] line-clamp-2">{trait.effect}</span>
                  <span className="text-xs text-[#BAC4D1] font-medium">{trait.rollRate}</span>
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
