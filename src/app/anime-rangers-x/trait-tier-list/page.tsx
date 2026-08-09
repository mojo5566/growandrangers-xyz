import type { Metadata } from "next";
import Link from "next/link";
import ContentFAQ from "@/components/ContentFAQ";
import ContentLayout from "@/components/ContentLayout";
import TierTable from "@/components/TierTable";
import data from "@/data/rangers/trait-tier-list";
import { traits } from "@/data/rangers/database/traits";

const PAGE_KEYWORDS = [
  "Anime Rangers X trait tier list",
  "Anime Rangers X trait recommendations",
  "Anime Rangers X trait roles",
  "Re:Rangers X trait tier list",
];

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: PAGE_KEYWORDS,
  alternates: { canonical: "/anime-rangers-x/trait-tier-list" },
  openGraph: { title: data.title, description: data.description, type: "website" },
};

const tierColors: Record<string, string> = {
  Mythic: "#FF3D00",
  Legendary: "#FF8C00",
  Epic: "#A020F0",
  Rare: "#3A86FF",
  Common: "#768294",
};

const tierOrder = ["Mythic", "Legendary", "Epic", "Rare", "Common"] as const;

type TraitUseCategory =
  | "damage"
  | "tempo"
  | "defense"
  | "utility"
  | "resources"
  | "flexible";

const traitCategoryById: Record<string, TraitUseCategory> = {
  "time-rewind": "tempo",
  "god-speed": "damage",
  monarch: "flexible",
  "void-touch": "damage",
  berserker: "damage",
  "phoenix-soul": "defense",
  "drop-rate-plus": "resources",
  "cooldown-minus": "tempo",
  lifesteal: "defense",
  "critical-strike-plus": "damage",
  "defense-aura": "defense",
  "shield-bash": "utility",
  "mana-surge": "tempo",
  fortress: "defense",
  scout: "utility",
  "quick-draw": "tempo",
  "healing-touch": "defense",
  "iron-will": "defense",
  "blood-pact": "defense",
  "keen-eye": "utility",
  "basic-atk-plus": "damage",
  "hp-boost": "defense",
  "speed-plus": "flexible",
  "defense-plus": "defense",
  "luck-plus": "resources",
  "dual-wield": "damage",
  sharingan: "utility",
  "spirit-bomb": "damage",
  rasengan: "damage",
  bankai: "damage",
  haki: "damage",
  "nen-boost": "flexible",
};

const traitGuidance: Record<
  TraitUseCategory,
  { label: string; summary: string; unitTypes: string; review: string }
> = {
  damage: {
    label: "Damage planning",
    summary: "An editorial option to compare when a unit needs more offensive pressure.",
    unitTypes: "Damage dealers and offensive flex units",
    review: "Confirm the live trigger, affected attacks, and current limitations before investing.",
  },
  tempo: {
    label: "Ability tempo",
    summary: "An editorial option for units whose value depends on using abilities consistently.",
    unitTypes: "Ability-focused damage, control, or support units",
    review: "Confirm the current activation rule and ability interaction in the game client.",
  },
  defense: {
    label: "Defense and sustain",
    summary: "An editorial option for improving frontline stability or team staying power.",
    unitTypes: "Tanks, frontline units, healers, and defensive supports",
    review: "Confirm what protection or recovery the live effect provides and when it applies.",
  },
  utility: {
    label: "Control and utility",
    summary: "An editorial option when team control, positioning, or situational utility matters.",
    unitTypes: "Control units, mobile units, and mode-specific supports",
    review: "Confirm the current target, trigger, and mode restrictions before relying on it.",
  },
  resources: {
    label: "Resource support",
    summary: "An editorial option to review for farming-oriented teams rather than direct combat power.",
    unitTypes: "Dedicated farming or resource-support units",
    review: "Confirm the eligible rewards and modes in the current game before planning a farm route.",
  },
  flexible: {
    label: "Flexible role support",
    summary: "An editorial option for filling a general roster need without assuming one universal best use.",
    unitTypes: "Flexible units whose role changes by team composition",
    review: "Confirm which live attributes or actions are affected before assigning it to a unit.",
  },
};

function guidanceForTrait(id: string) {
  return traitGuidance[traitCategoryById[id] ?? "flexible"];
}

export default function TraitTierListPage() {
  return (
    <ContentLayout
      title={data.title}
      description={data.description}
      breadcrumbs={data.breadcrumbs}
      canonicalPath="/anime-rangers-x/trait-tier-list"
      accent="rangers"
      articleSection="Anime Rangers X Traits"
      keywords={PAGE_KEYWORDS}
      about={[{ name: "Anime Rangers X" }, { name: "Re:Rangers X" }, { name: "Roblox game guides" }]}
    >
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#FF3D00]/40 bg-[#FF3D00]/10 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">Quick Answer</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">
          This is GrowAndRangers&apos; editorial Trait Tier List for the {traits.length} names in its current project record. Use it to compare broad roles and choose a trait direction that fits your unit. It is not an official ranking or Trait data table, so confirm current effects, values, rates, and restrictions in the game client or an official announcement.
        </p>
      </section>

      <section aria-labelledby="scope-heading" className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <h2 id="scope-heading" className="font-heading text-[20px] font-semibold text-white">Scope and Version Note</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">
            The page covers the Trait names and tier labels currently stored by this project. It intentionally omits exact effects, percentages, probabilities, durations, and hidden mechanics because those fields do not have a per-Trait official source here. The live game and developer announcements take priority when details change.
          </p>
        </article>
        <article className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <h2 className="font-heading text-[20px] font-semibold text-white">Editorial Grouping Method</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">
            Tier placement is an editorial grouping based on the project&apos;s current record and broad planning use. It helps compare damage, ability tempo, defense, utility, resource support, and flexible roles. It should not be read as a statement of live rarity, power, roll rates, or patch behavior.
          </p>
        </article>
      </section>

      <section aria-labelledby="tiers-heading">
        <h2 id="tiers-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">Editorial Trait Grouping</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {tierOrder.map((tier) => {
            const count = traits.filter((trait) => trait.tier === tier).length;
            return (
              <div key={tier} className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
                <span className="code-text text-sm" style={{ color: tierColors[tier] }}>{tier}</span>
                <p className="mt-1 text-sm font-semibold text-white">{count} traits</p>
                <p className="mt-1 text-xs text-[#768294]">Current editorial tier</p>
              </div>
            );
          })}
        </div>
      </section>

      {tierOrder.map((tier) => {
        const tierTraits = traits.filter((trait) => trait.tier === tier);
        return (
          <section key={tier} aria-labelledby={`tier-${tier}`}>
            <h2 id={`tier-${tier}`} className="font-heading text-[22px] font-semibold lg:text-[26px] mb-2" style={{ color: tierColors[tier] }}>{tier}-Tier Traits</h2>
            <p className="mb-4 text-sm text-[#768294]">Use this editorial tier as a comparison starting point, then verify the live Trait before spending resources.</p>
            <TierTable
              rows={tierTraits.map((trait) => ({
                name: trait.name,
                tier: trait.tier,
                description: guidanceForTrait(trait.id).label,
              }))}
              colHeaders={["TRAIT", "EDITORIAL TIER", "PLANNING USE"]}
            />
          </section>
        );
      })}

      <section aria-labelledby="details-heading">
        <h2 id="details-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">How to Use Each Editorial Grouping</h2>
        <p className="mb-4 text-sm leading-relaxed text-[#768294]">
          The notes below are qualitative planning guidance, not statements of live Trait behavior. They describe what to compare when building a team and identify which live details must be checked before using reroll resources.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {traits.map((trait) => {
            const guidance = guidanceForTrait(trait.id);

            return (
              <article key={trait.id} className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-white">{trait.name}</h3>
                  <span className="code-text rounded px-2 py-0.5 text-xs font-semibold" style={{ color: tierColors[trait.tier], backgroundColor: tierColors[trait.tier] + "1a" }}>{trait.tier}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">{guidance.summary}</p>
                <dl className="mt-4 grid gap-3 text-xs">
                  <div><dt className="font-semibold text-[#00E676]">Editorial use</dt><dd className="mt-1 leading-relaxed text-[#BAC4D1]">{guidance.label}</dd></div>
                  <div><dt className="font-semibold text-[#3A86FF]">Suggested unit types</dt><dd className="mt-1 leading-relaxed text-[#BAC4D1]">{guidance.unitTypes}</dd></div>
                  <div><dt className="font-semibold text-[#FF8C00]">Review before using</dt><dd className="mt-1 leading-relaxed text-[#BAC4D1]">{guidance.review}</dd></div>
                </dl>
              </article>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="reroll-boundary-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="reroll-boundary-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">When to Stop Rerolling</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">
          Use the editorial grouping to choose a role direction, then confirm the current Trait text in-game. Stop when the result supports the unit&apos;s job or when you reach the budget set before rolling. For replacement risk, stopping rules, and resource management, use the <Link href="/anime-rangers-x/trait-reroll" className="font-semibold text-[#FF3D00] hover:underline">Trait Reroll Guide</Link>.
        </p>
      </section>

      <section aria-labelledby="related-heading">
        <h2 id="related-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">Related Anime Rangers X Guides</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {data.relatedGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="group rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00]">
              <span className="text-sm font-semibold text-[#BAC4D1] transition group-hover:text-[#FF3D00]">{guide.label} -&gt;</span>
              <p className="mt-1 text-xs text-[#768294]">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <ContentFAQ faqs={data.faq} />
    </ContentLayout>
  );
}
