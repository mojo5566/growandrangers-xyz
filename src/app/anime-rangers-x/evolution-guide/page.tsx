import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anime Rangers X Evolution Guide (June 2026) — Full Requirements & Strategy | BloxPulse",
  description: "Complete evolution guide: material costs, gem requirements, stat boosts, farming strategies, and priority order for evolving every unit tier from Common to Mythic.",
  keywords: ["Anime Rangers X evolution guide", "evolution requirements", "evolution stones farming", "Awakening Core", "how to evolve units"],
  openGraph: { title: "Anime Rangers X Evolution Guide (June 2026)", description: "Full evolution requirements, farming strategies, and priority order.", type: "website" },
};

const evoStages = [
  { from: "Common → Rare", mats: "x50 Evolution Stones + x5,000 Gems", stats: "+50% base stats" },
  { from: "Rare → Epic", mats: "x120 Evolution Stones + x12,000 Gems", stats: "+75% stats, unlock Trait Slot 2" },
  { from: "Epic → Legendary", mats: "x250 Evolution Stones + x25,000 Gems", stats: "+100% stats, unlock Ultimate" },
  { from: "Legendary → Mythic", mats: "x500 Evolution Stones + x50,000 Gems + x1 Awakening Core", stats: "+150% stats, unlock Trait Slot 3" },
];

const priorityList = [
  { tier: "S", unit: "Chrono Slayer / Void Empress", reason: "Your main DPS. Mythic evolution unlocks Trait Slot 3 and +150% stats — the single biggest power spike in the game." },
  { tier: "S", unit: "Frost Monarch / Tide Guardian", reason: "Support units benefit massively from reduced cooldowns at higher evolution. Trait Slot 2 enables Cooldown- or Monarch." },
  { tier: "A", unit: "Blaze Archon / Storm Ronin", reason: "Strong Legendary DPS. Evolve to Legendary for Ultimate unlock, then park here while saving Awakening Cores for Mythic units." },
  { tier: "B", unit: "Stone Colossus / Shadow Kunoichi", reason: "Evolve to Epic for Trait Slot 2. Do not push past Epic — save resources for S/A-Tier units." },
  { tier: "C", unit: "Wind Scout / Flame Recruit / Aqua Squire", reason: "Do not invest Evolution Stones. These starter units are replaced quickly. Any stones spent here are permanently lost." },
];

const materials = [
  {
    name: "Evolution Stones",
    icon: "⛏️",
    desc: "The primary evolution currency. Required at every evolution stage.",
    sources: ["Infinite Mode past wave 40 (5-10 per clear)", "Daily missions (15-20 stones)", "Weekly boss raids (50+ on first clear)", "Event shops during seasonal events"],
    tip: "Farm Infinite Mode with a speed team (Storm Ronin + Shadow Kunoichi) for maximum stones-per-hour. Daily missions are the most time-efficient source for casual players.",
  },
  {
    name: "Gems",
    icon: "💎",
    desc: "Premium currency used alongside Evolution Stones at every stage.",
    sources: ["Active promo codes (check our Codes page)", "Daily achievements (100-200 Gems/day)", "Weekend events with bonus Gem drops", "Infinite Mode milestone rewards"],
    tip: "Never spend Gems on Common/Rare banners. Save exclusively for evolution costs and Mythic summon banners. A single Mythic evolution costs 50,000 Gems — plan accordingly.",
  },
  {
    name: "Awakening Core",
    icon: "🔮",
    desc: "The rarest evolution material. Required only for Legendary → Mythic evolution.",
    sources: ["Legendary+ Boss Raid (5% drop rate)", "Premium shop (100,000 Gems)", "Battle Pass tier 50 reward (one per season)", "Extremely rare event drop"],
    tip: "Never use an Awakening Core on a non-S-Tier unit. The 5% boss raid drop rate means you will likely only obtain 1-2 cores per month. Each one is priceless.",
  },
];

const mistakes = [
  { title: "Evolving Starter Units", desc: "Wind Scout, Flame Recruit, and Aqua Squire are tutorial units that are replaced within hours. Every Evolution Stone spent on them is permanently wasted. Wait until you pull at least an Epic-tier unit before evolving anything." },
  { title: "Spreading Resources Too Thin", desc: "Evolving 5 units to Epic is worse than evolving 1 unit to Legendary. Focus all Evolution Stones and Gems on your main DPS first, then your support, then secondary DPS. A single hyper-evolved carry can solo most content." },
  { title: "Using Awakening Cores Early", desc: "Awakening Cores are the rarest resource in the game. If you use one on Blaze Archon and then pull Chrono Slayer next week, you have wasted a month of farming. Only awaken units you are certain will be in your permanent team." },
  { title: "Ignoring Trait Slots", desc: "Evolution unlocks Trait Slots (Slot 2 at Epic, Slot 3 at Mythic). A unit with 2 good traits is exponentially stronger than one with 1. Always fill new trait slots immediately — even a Rare trait is better than an empty slot." },
  { title: "Evolving Before Checking the Meta", desc: "The Re:Rangers patch significantly changed unit balance. A unit that was S-Tier last month may be A-Tier now. Always check the latest Unit Tier List before committing major evolution resources." },
];

const faqs = [
  { question: "How long does it take to evolve a unit to Mythic?", answer: "For a free-to-play player, expect 3-4 weeks of consistent grinding. Focus on daily missions for stones, weekend events for bonus Gems, and boss raids for Awakening Core chances. Paid players can accelerate significantly with Gem purchases." },
  { question: "What is the fastest way to farm Evolution Stones?", answer: "Infinite Mode with a speed-farming team (Storm Ronin + Shadow Kunoichi + Wind Scout) yields 5-10 stones per clear past wave 40. Combine with daily missions (15-20 stones) and weekly boss raids (50+ stones) for maximum weekly income." },
  { question: "Should I evolve Rare units to Epic or wait for better ones?", answer: "Wait. Only invest in Epic-tier units and above. Rare and Common units cannot reach Mythic tier and are permanently outclassed. If you have zero Epic+ units, evolve one Rare to Epic as a temporary carry, but stop there." },
  { question: "Do I lose my traits when I evolve a unit?", answer: "No. Traits are permanently attached to trait slots and persist through evolution. Evolving to Epic unlocks Trait Slot 2 and Mythic unlocks Trait Slot 3 — your existing trait in Slot 1 is unaffected." },
  { question: "Is it worth buying Evolution Stones with Gems?", answer: "Generally no. Gems are better spent on Mythic summon banners and evolution costs. However, if you are 10-20 stones away from a major evolution milestone and have excess Gems, a small purchase is acceptable. Never buy stones in bulk with Gems." },
];

const tierBadge: Record<string, string> = {
  S: "text-[#FF3D00] bg-[rgba(255,61,0,0.12)]",
  A: "text-[#FF8C00] bg-[rgba(255,140,0,0.12)]",
  B: "text-[#FFD700] bg-[rgba(255,215,0,0.12)]",
  C: "text-[#3A86FF] bg-[rgba(58,134,255,0.12)]",
};

﻿
export default function EvolutionGuidePage() {
  return (
    <ContentLayout
      title="Anime Rangers X Evolution Guide — Full Requirements & Strategy (June 2026)"
      description="Step-by-step evolution guide covering all stages from Common to Mythic. Includes material costs, gem requirements, farming strategies, priority order, and common mistakes to avoid."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Anime Rangers X Evolution Guide", href: "/anime-rangers-x/evolution-guide" }]}
      accent="rangers"
    >
      {/* Evolution Overview */}
      <section aria-labelledby="overview">
        <h2 id="overview" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">Evolution Overview</h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm text-[#BAC4D1] leading-relaxed">
            Evolution is the primary progression system in Anime Rangers X. Each evolution stage permanently increases a unit's base stats, unlocks new ability tiers, and grants additional Trait Slots. Resources are scarce — every Evolution Stone and Gem must be spent strategically.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {["Permanent stat boosts that carry through all content","Unlocks Ultimate abilities at Legendary tier","Grants Trait Slot 2 at Epic, Slot 3 at Mythic","Required for endgame Infinite Mode progression"].map((s,i)=>(<div key={i} className="flex gap-2 text-xs text-[#BAC4D1]"><span className="text-[#FF3D00] shrink-0">▸</span>{s}</div>))}
          </div>
        </div>
      </section>

      {/* Evolution Stages Table */}
      <section aria-labelledby="stages">
        <h2 id="stages" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">Evolution Stages & Requirements</h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1fr_1.5fr_1.2fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="code-text text-[#768294]">EVOLUTION</span>
            <span className="code-text text-[#768294]">REQUIREMENTS</span>
            <span className="code-text text-[#768294]">BONUS</span>
          </div>
          {evoStages.map((s,i)=>(<div key={i} className="grid grid-cols-[1fr_1.5fr_1.2fr] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"><span className="text-sm font-semibold text-[#BAC4D1]">{s.from}</span><span className="text-xs text-[#BAC4D1]">{s.mats}</span><span className="text-xs font-semibold text-[#FF3D00]">{s.stats}</span></div>))}
        </div>
        <p className="mt-2 text-xs text-[#768294]">Total to Mythic from Common: 920 Evolution Stones + 92,000 Gems + 1 Awakening Core</p>
      </section>

      {/* Evolution Materials */}
      <section aria-labelledby="materials">
        <h2 id="materials" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">Evolution Materials & How to Farm Them</h2>
        <div className="space-y-4">
          {materials.map((m,i)=>(<div key={i} className="rounded-xl border border-[#252936] bg-[#14161D] p-5"><h3 className="text-base font-semibold text-white">{m.icon} {m.name}</h3><p className="mt-1 text-sm text-[#BAC4D1]">{m.desc}</p><div className="mt-3"><h4 className="text-xs font-semibold text-[#768294] mb-1">Sources:</h4><ul className="space-y-1">{m.sources.map((s,j)=>(<li key={j} className="flex gap-2 text-xs text-[#BAC4D1]"><span className="text-[#FF3D00] shrink-0">▸</span>{s}</li>))}</ul></div><div className="mt-3 rounded-lg bg-[#1E212B] p-3"><p className="text-xs text-[#3A86FF]"><strong>Pro Tip:</strong> {m.tip}</p></div></div>))}
        </div>
      </section>

      {/* Best Units to Evolve First */}
      <section aria-labelledby="best-units">
        <h2 id="best-units" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">Best Units to Evolve First</h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <ol className="space-y-3">
            {[
              { step: "1", title: "Main DPS to Legendary", desc: "Push your primary damage dealer (Chrono Slayer, Void Empress, or Blaze Archon) to Legendary first. The Ultimate ability unlock at Legendary tier is the biggest single power spike in the game and enables wave 60+ content." },
              { step: "2", title: "Support to Epic", desc: "Evolve your CC/healer (Frost Monarch or Tide Guardian) to Epic for Trait Slot 2. Apply Cooldown- or Monarch trait. A well-traited support dramatically improves team survivability." },
              { step: "3", title: "Main DPS to Mythic", desc: "This is the long grind. Save 500 Evolution Stones, 50,000 Gems, and hunt for an Awakening Core. Only commit if you are certain this unit is a permanent member of your roster." },
              { step: "4", title: "Secondary DPS to Legendary", desc: "Once your main DPS is Mythic, bring your secondary DPS (Blaze Archon or Storm Ronin) to Legendary for their Ultimate. This gives you flexibility for different content types." },
              { step: "5", title: "Support to Legendary/Mythic", desc: "Last priority. A Mythic support is a luxury — the stats are nice but not game-changing. Only invest here once your DPS units are fully evolved." },
            ].map((s,i)=>(<li key={i} className="flex gap-3"><span className="code-text text-[#FF3D00] font-bold text-lg shrink-0">{s.step}.</span><div><h4 className="text-sm font-semibold text-white">{s.title}</h4><p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">{s.desc}</p></div></li>))}
          </ol>
        </div>
      </section>

      {/* Evolution Priority Tier List */}
      <section aria-labelledby="priority">
        <h2 id="priority" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">Evolution Priority Tier List</h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[60px_1fr_2fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="code-text text-[#768294]">PRIORITY</span>
            <span className="code-text text-[#768294]">UNIT</span>
            <span className="code-text text-[#768294]">REASON</span>
          </div>
          {priorityList.map((p,i)=>(<div key={i} className="grid grid-cols-[60px_1fr_2fr] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"><span className={`code-text rounded px-1.5 py-0.5 text-xs text-center ${tierBadge[p.tier]}`}>{p.tier}</span><span className="text-sm font-semibold text-[#BAC4D1]">{p.unit}</span><span className="text-xs text-[#768294]">{p.reason}</span></div>))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section aria-labelledby="mistakes">
        <h2 id="mistakes" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">Common Mistakes to Avoid</h2>
        <div className="space-y-3">
          {mistakes.map((m,i)=>(<div key={i} className="rounded-xl border border-[#252936] bg-[#14161D] p-4"><div className="flex items-start gap-3"><span className="code-text text-[#FF3D00] text-lg shrink-0">!</span><div><h3 className="text-sm font-semibold text-white">{m.title}</h3><p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">{m.desc}</p></div></div></div>))}
        </div>
      </section>

      {/* Related Guides */}
      <section aria-labelledby="related">
        <h2 id="related" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">Related Anime Rangers X Guides</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <Link href="/anime-rangers-x/unit-tier-list" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00] group"><span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#FF3D00] transition">Unit Tier List</span><p className="mt-1 text-xs text-[#768294]">Decide which units to evolve first</p></Link>
          <Link href="/anime-rangers-x/trait-tier-list" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00] group"><span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#FF3D00] transition">Trait Tier List</span><p className="mt-1 text-xs text-[#768294]">Best traits for newly unlocked slots</p></Link>
          <Link href="/anime-rangers-x/codes" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00] group"><span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#FF3D00] transition">Active Codes</span><p className="mt-1 text-xs text-[#768294]">Get free Gems to fund evolution costs</p></Link>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
