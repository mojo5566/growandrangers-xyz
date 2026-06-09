import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import TierTable from "@/components/TierTable";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anime Rangers X Unit Tier List (2026) — Best Units Ranked | BloxPulse",
  description:
    "Complete Anime Rangers X unit tier list ranking all units from Mythic to Common. Meta analysis, optimal team compositions, and summon banner priorities for June 2026.",
};

const unitTiers = [
  { name: "Chrono Slayer (Time)", tier: "Mythic", description: "Best DPS, time-freeze ultimate" },
  { name: "Void Empress (Dark)", tier: "Mythic", description: "AOE nuke, self-heal passive" },
  { name: "Blaze Archon (Fire)", tier: "Legendary", description: "Burn stacking, wave clear" },
  { name: "Storm Ronin (Lightning)", tier: "Legendary", description: "Speed buff, chain attack" },
  { name: "Frost Monarch (Ice)", tier: "Epic", description: "Freeze CC, defensive wall" },
  { name: "Shadow Kunoichi (Dark)", tier: "Epic", description: "Stealth crit, single-target burst" },
  { name: "Tide Guardian (Water)", tier: "Rare", description: "Heal support, team shield" },
  { name: "Stone Colossus (Earth)", tier: "Rare", description: "Tank, damage reduction aura" },
  { name: "Wind Scout (Air)", tier: "Common", description: "Budget speed unit, scouting" },
  { name: "Flame Recruit (Fire)", tier: "Common", description: "Starter unit, basic fire damage" },
];

const faqs = [
  {
    question: "Which unit should I try to summon first?",
    answer: "Chrono Slayer (Mythic) is the undisputed best unit with the highest DPS and a time-freeze ultimate that trivializes most wave content. If you cannot pull a Mythic, Blaze Archon (Legendary) is an excellent alternative with strong wave-clear burn damage.",
  },
  {
    question: "How does the new Re:Rangers update affect unit rankings?",
    answer: "The June 2026 Re:Rangers update rebalanced infinite wave drop rates and adjusted base unit pools. Mythic-tier drop rates were slightly increased from 0.5% to 0.8%, making them more accessible. Several Epic-tier units also received buffs to their base stats.",
  },
  {
    question: "What is the best team composition for Infinite Mode?",
    answer: "For optimal Infinite Mode performance, run Chrono Slayer (DPS) + Frost Monarch (CC) + Tide Guardian (Heal/Shield). This composition provides damage, crowd control, and sustain — allowing you to push past wave 100 consistently.",
  },
];

export default function UnitTierListPage() {
  return (
    <ContentLayout
      title="Anime Rangers X Unit Tier List — All Units Ranked (June 2026)"
      description="Every unit ranked from Mythic to Common based on DPS output, utility, wave-clear capability, and team synergy. Updated for the Re:Rangers title restructure patch."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Anime Rangers X Unit Tier List", href: "/rangers/unit-tier-list" },
      ]}
      accent="rangers"
    >
      {/* Tier Explanation */}
      <section aria-labelledby="tier-guide">
        <h2 id="tier-guide" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          📊 Unit Tier Ranking System
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
          {[
            { tier: "Mythic", label: "Meta-defining", color: "#FF3D00" },
            { tier: "Legendary", label: "Excellent", color: "#FF8C00" },
            { tier: "Epic", label: "Solid choice", color: "#A020F0" },
            { tier: "Rare", label: "Situational", color: "#3A86FF" },
            { tier: "Common", label: "Budget only", color: "#768294" },
          ].map((t) => (
            <div key={t.tier} className="rounded-lg border border-[#252936] bg-[#14161D] p-3 text-center">
              <span className="code-text text-sm" style={{ color: t.color }}>{t.tier}</span>
              <p className="mt-1 text-xs text-[#768294]">{t.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Table */}
      <section aria-labelledby="unit-table">
        <h2 id="unit-table" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          ⚔️ Complete Unit Rankings
        </h2>
        <TierTable rows={unitTiers} colHeaders={["UNIT", "TIER", "STRENGTH"]} />
      </section>

      {/* Best Team */}
      <section aria-labelledby="team-comp" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="team-comp" className="font-heading text-[20px] font-semibold text-white mb-3">
          🛡️ Best Team Compositions
        </h2>
        <div className="space-y-3">
          {[
            { name: "Meta Infinite Team", units: "Chrono Slayer + Frost Monarch + Tide Guardian", desc: "Balanced DPS, CC, and sustain. Pushes past wave 100." },
            { name: "Speed Farm Team", units: "Storm Ronin + Shadow Kunoichi + Wind Scout", desc: "Maximum speed for fast wave farming. Lower survivability." },
            { name: "Boss Killer Team", units: "Void Empress + Blaze Archon + Stone Colossus", desc: "High burst damage with tank support for boss stages." },
          ].map((comp, i) => (
            <div key={i} className="border-l-2 border-[#FF3D00] bg-[#1E212B] p-3">
              <h4 className="text-sm font-semibold text-white">{comp.name}</h4>
              <p className="mt-1 text-xs text-[#768294]"><strong className="text-[#BAC4D1]">Units:</strong> {comp.units}</p>
              <p className="mt-0.5 text-xs text-[#768294]">{comp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="related">
        <h2 id="related" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          🔗 Related Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/rangers/trait-tier-list" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00]">
            <span className="text-sm font-semibold text-[#BAC4D1]">🧬 Trait Tier List →</span>
            <p className="mt-1 text-xs text-[#768294]">Best traits to equip on your top units</p>
          </Link>
          <Link href="/rangers/evolution-guide" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00]">
            <span className="text-sm font-semibold text-[#BAC4D1]">🔮 Evolution Guide →</span>
            <p className="mt-1 text-xs text-[#768294]">Requirements for evolving each unit tier</p>
          </Link>
          <Link href="/rangers/codes" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00]">
            <span className="text-sm font-semibold text-[#BAC4D1]">🎁 Active Codes →</span>
            <p className="mt-1 text-xs text-[#768294]">Get free Gems for summoning top units</p>
          </Link>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
