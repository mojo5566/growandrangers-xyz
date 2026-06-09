import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import TierTable from "@/components/TierTable";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anime Rangers X Unit Tier List (June 2026) — All Units Ranked | BloxPulse",
  description: "Every Anime Rangers X unit ranked from S-Tier to C-Tier with strengths, weaknesses, and best use cases.",
  keywords: ["Anime Rangers X unit tier list", "best units", "Chrono Slayer", "unit ranking"],
  openGraph: { title: "Anime Rangers X Unit Tier List (June 2026)", description: "All units ranked S to C.", type: "website" },
};

const sTier = [
  { name: "Chrono Slayer (Time)", tier: "S", description: "Best DPS, time-freeze ultimate" },
  { name: "Void Empress (Dark)", tier: "S", description: "AOE nuke, self-heal passive" },
];
const aTier = [
  { name: "Blaze Archon (Fire)", tier: "A", description: "Burn stacking, wave clear" },
  { name: "Storm Ronin (Lightning)", tier: "A", description: "Speed buff, chain attack" },
  { name: "Frost Monarch (Ice)", tier: "A", description: "Freeze CC, defensive wall" },
];
const bTier = [
  { name: "Shadow Kunoichi (Dark)", tier: "B", description: "Stealth crit, single-target burst" },
  { name: "Tide Guardian (Water)", tier: "B", description: "Heal support, team shield" },
  { name: "Stone Colossus (Earth)", tier: "B", description: "Tank, damage reduction aura" },
];
const cTier = [
  { name: "Wind Scout (Air)", tier: "C", description: "Budget speed unit, scouting" },
  { name: "Flame Recruit (Fire)", tier: "C", description: "Starter unit, basic fire damage" },
  { name: "Aqua Squire (Water)", tier: "C", description: "Starter healer, single-target" },
];
const allUnits = [...sTier, ...aTier, ...bTier, ...cTier];

function UnitCard({ unit, color }: { unit: UnitDetail; color: string }) {
  return (
    <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
      <h3 className="text-base font-semibold text-white">{unit.name}</h3>
      <span className="code-text inline-block mt-1 rounded px-2 py-0.5 text-xs" style={{ color, backgroundColor: color + "1a" }}>
        {unit.rank}
      </span>
      <p className="mt-3 text-sm text-[#BAC4D1] leading-relaxed">{unit.desc}</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <h4 className="text-xs font-semibold text-[#00E676] mb-2">Strengths</h4>
          <ul className="space-y-1">{unit.strengths.map((s, i) => <li key={i} className="flex gap-2 text-xs text-[#BAC4D1]"><span className="text-[#00E676] shrink-0">+</span> {s}</li>)}</ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-[#FF3D00] mb-2">Weaknesses</h4>
          <ul className="space-y-1">{unit.weaknesses.map((w, i) => <li key={i} className="flex gap-2 text-xs text-[#BAC4D1]"><span className="text-[#FF3D00] shrink-0">-</span> {w}</li>)}</ul>
        </div>
      </div>
      <div className="mt-4 rounded-lg bg-[#1E212B] p-3">
        <h4 className="text-xs font-semibold text-[#3A86FF] mb-1">Best Use Case</h4>
        <p className="text-xs text-[#BAC4D1] leading-relaxed">{unit.bestUse}</p>
      </div>
    </div>
  );
}

﻿
interface UnitDetail {
  name: string;
  rank: string;
  desc: string;
  strengths: string[];
  weaknesses: string[];
  bestUse: string;
}

const unitData: Record<string, UnitDetail> = {
  "Chrono Slayer (Time)": { name: "Chrono Slayer (Time)", rank: "S-Tier #1", desc: "The undisputed king. Highest base DPS with a time-freeze ultimate that stops enemies for 4 seconds. Kill-based cooldown passive enables near-infinite ultimate chains at high wave density.", strengths: ["Highest raw DPS (3,200 ATK at max)", "Time-freeze enables safe boss damage windows", "Cooldown passive scales infinitely in waves", "Pairs perfectly with Time Rewind trait"], weaknesses: ["Low base HP (8,500)", "Requires high wave density for max value", "Weak against freeze-immune bosses", "Steep gem cost for full Mythic evolution"], bestUse: "Primary DPS in Infinite Mode. Pair with Frost Monarch (CC) and Tide Guardian (sustain) for wave 100+ pushes. Apply Time Rewind trait." },
  "Void Empress (Dark)": { name: "Void Empress (Dark)", rank: "S-Tier #2", desc: "The premier AOE dealer. Ultimate creates a void rift dealing 2,800% ATK to all enemies. Self-heal restores 15% HP per kill, eliminating need for a dedicated healer in most content.", strengths: ["Massive AOE ultimate covers entire screen", "Self-heal provides incredible sustain", "High base HP (12,000)", "Void Touch trait amplifies damage by 25% pen"], weaknesses: ["Long ultimate cooldown (25 sec base)", "Lower single-target DPS vs Chrono Slayer", "Dark element weak against Light bosses", "Heal is kill-dependent"], bestUse: "AOE wave-clear specialist. Solo-carry with tank support or pair with Blaze Archon for burn synergy. Apply Void Touch trait." },
  "Blaze Archon (Fire)": { name: "Blaze Archon (Fire)", rank: "A-Tier #3", desc: "Best non-Mythic DPS. Applies stacking burn DOTs (200% ATK/sec for 5s) that melt bosses and dense waves. Ultimate explodes all burning enemies for bonus damage.", strengths: ["Burn DOT provides consistent damage while dodging", "Ultimate explosion scales with burning count", "Accessible Legendary tier summon rate", "No common elemental weakness"], weaknesses: ["Burn needs time to ramp up", "Lower base ATK (2,400) vs Mythics", "No self-sustain or defensive abilities", "Burn can be cleansed by some bosses"], bestUse: "Secondary DPS alongside Chrono Slayer or Void Empress. Excellent in boss fights. Pair with Frost Monarch to keep enemies in burn radius." },
  "Storm Ronin (Lightning)": { name: "Storm Ronin (Lightning)", rank: "A-Tier #4", desc: "Speed-farming specialist. Team-wide +25% movement and attack speed buff. Chain attack bounces between 4 enemies for 180% ATK per hit.", strengths: ["Team speed buff improves farming by ~30%", "Chain attack handles spread-out formations", "Fast base movement (4.2) for dodging", "God-Speed trait enables extreme attack speed"], weaknesses: ["Low base ATK (2,100)", "Chain damage falls off vs single targets", "Speed buff does not stack with other sources", "Squishy (9,000 HP)"], bestUse: "Speed farming team leader. Pair with Shadow Kunoichi for max clear speed. Apply God-Speed trait. Swap out for boss fights." },
  "Frost Monarch (Ice)": { name: "Frost Monarch (Ice)", rank: "A-Tier #5", desc: "Premier crowd-control support. Freezes enemies in a wide cone for 3 seconds. Defensive wall blocks all projectiles for 6 seconds — essential for high-wave Infinite Mode.", strengths: ["Best CC in the game (3s AOE freeze)", "Defensive wall blocks all projectiles", "Freeze enables easy critical hits", "High base HP (14,000) for frontlining"], weaknesses: ["Low personal damage", "Freeze duration halved on bosses", "Defensive wall has 30s cooldown", "Requires DPS teammates"], bestUse: "CC support in any team. Essential for Infinite Mode wave 80+. Pair with Chrono Slayer or Void Empress. Apply Cooldown- trait." },
  "Shadow Kunoichi (Dark)": { name: "Shadow Kunoichi (Dark)", rank: "B-Tier #6", desc: "High-risk, high-reward assassin. Enters stealth after 2s without taking damage. First attack from stealth deals 400% critical damage — can one-shot non-boss enemies.", strengths: ["400% stealth crit one-shots most enemies", "Highest single-target burst in B-Tier", "Stealth provides brief invulnerability", "Strong in boss fights"], weaknesses: ["Stealth breaks on any damage taken", "No AOE damage", "Low base HP (7,800)", "Outclassed by Mythic DPS units"], bestUse: "Boss-killer for early/mid-game. Swap in for boss stages. Replace with Chrono Slayer or Void Empress once you pull a Mythic." },
  "Tide Guardian (Water)": { name: "Tide Guardian (Water)", rank: "B-Tier #7", desc: "Most reliable healing support. Team-wide heal-over-time (8% max HP/sec for 8s = 64% total). Shield absorbs 5,000 damage. Essential for long Infinite Mode runs.", strengths: ["Best sustained healing (64% total HP)", "Shield prevents one-shot deaths", "Team-wide healing supports full squad", "Neutral elemental matchups"], weaknesses: ["Zero personal damage", "Long cooldowns (heal 22s, shield 28s)", "Heal-over-time cannot save from burst", "Outshined by self-sustain units at high skill"], bestUse: "Sustain support for Infinite Mode. Pair with Chrono Slayer and Stone Colossus. Apply Cooldown- trait for more frequent heals." },
  "Stone Colossus (Earth)": { name: "Stone Colossus (Earth)", rank: "B-Tier #8", desc: "Premier tank. Taunts all nearby enemies for 5s with 20% team damage reduction aura. Highest base HP (22,000) — absorbs punishment that deletes other units.", strengths: ["Highest base HP (22,000)", "Taunt redirects lethal attacks", "20% damage reduction aura for team", "Fortress trait adds defense and taunt radius"], weaknesses: ["Extremely low damage", "Slow movement (2.8)", "Taunt duration halved on bosses", "Earth weak against Air enemies"], bestUse: "Frontline tank with Tide Guardian for unbreakable defense. Best in boss fights. Apply Fortress trait." },
};

const cData: UnitDetail = { name: "Wind Scout / Flame Recruit / Aqua Squire", rank: "C-Tier — Starter Units", desc: "Free starter units available to all new players. Serve their purpose in tutorials and early game but should be replaced immediately upon summoning any B-Tier or higher unit.", strengths: ["Free — available from the start", "Low evolution costs", "Good for learning team composition"], weaknesses: ["Extremely low base stats", "Cannot compete past wave 20", "No unique abilities or passives", "Not worth investing resources into"], bestUse: "Tutorial and early-game only. Replace immediately upon pulling your first Rare or higher unit." };

﻿
const faqs = [
  { question: "Which unit should I reroll for as a new player?", answer: "Chrono Slayer (S-Tier #1) is the best target — his time-freeze ultimate and high DPS carry all content. If you cannot pull a Mythic, Blaze Archon (A-Tier #3) is an excellent Legendary alternative with better summon rates." },
  { question: "Is Void Empress better than Chrono Slayer?", answer: "Depends on playstyle. Chrono Slayer has higher single-target DPS for boss killing. Void Empress has superior AOE wave-clear and self-sustain for solo farming. In an optimal team, run both." },
  { question: "Should I invest in B-Tier units or save?", answer: "Invest Evolution Stones in Epic-tier and above only. B-Tier units are useful mid-game but are eventually replaced. Save Awakening Cores and Legendary Trait Rolls exclusively for S/A-Tier units." },
  { question: "What is the best Infinite Mode team?", answer: "Chrono Slayer (DPS) + Frost Monarch (CC) + Tide Guardian (Sustain). Balanced damage, crowd control, and healing for consistent wave 100+ pushes. For speed farming: Storm Ronin + Shadow Kunoichi + Wind Scout." },
  { question: "How did Re:Rangers change unit rankings?", answer: "Mythic summon rates increased from 0.5% to 0.8%. Several Legendary/Epic units received stat buffs. Frost Monarch's freeze duration increased from 2.5s to 3s, solidifying her A-Tier position." },
];

export default function UnitTierListPage() {
  const S = "#FF3D00", A = "#FF8C00", B = "#FFD700", C = "#3A86FF";
  return (
    <ContentLayout
      title="Anime Rangers X Unit Tier List — All Units Ranked (June 2026)"
      description="Every unit ranked from S-Tier to C-Tier with detailed strengths, weaknesses, best use cases, optimal trait pairings, and recommended team compositions."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Anime Rangers X Unit Tier List", href: "/anime-rangers-x/unit-tier-list" }]}
      accent="rangers"
    >
      <section aria-labelledby="tiers-heading">
        <h2 id="tiers-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">Tier Ranking System</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[{t:"S",c:S,l:"Meta-defining",d:"Best units; build teams around them"},{t:"A",c:A,l:"Excellent",d:"Strong alternatives; great value"},{t:"B",c:B,l:"Solid",d:"Viable mid-game; situational power"},{t:"C",c:C,l:"Budget",d:"Starter units; replace ASAP"}].map(t=>(<div key={t.t} className="rounded-lg border border-[#252936] bg-[#14161D] p-4"><span className="code-text text-lg" style={{color:t.c}}>{t.t}-Tier</span><p className="mt-1 text-sm font-semibold text-white">{t.l}</p><p className="mt-1 text-xs text-[#768294]">{t.d}</p></div>))}
        </div>
      </section>

      <section aria-labelledby="s-tier"><h2 id="s-tier" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-2" style={{color:S}}>S-Tier — Meta-Defining Units</h2><p className="text-sm text-[#768294] mb-4">These two Mythic units define the endgame meta. Highest DPS, game-changing ultimates, best Infinite Mode scaling.</p><TierTable rows={sTier} colHeaders={["UNIT","TIER","ROLE"]} /><div className="mt-4 space-y-4">{[unitData["Chrono Slayer (Time)"],unitData["Void Empress (Dark)"]].map(u=><UnitCard key={u.name} unit={u} color={S} />)}</div></section>

      <section aria-labelledby="a-tier"><h2 id="a-tier" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-2" style={{color:A}}>A-Tier — Excellent Units</h2><p className="text-sm text-[#768294] mb-4">Strong Legendary and Epic units that form the backbone of most competitive teams. Easier to summon than Mythics.</p><TierTable rows={aTier} colHeaders={["UNIT","TIER","ROLE"]} /><div className="mt-4 space-y-4">{[unitData["Blaze Archon (Fire)"],unitData["Storm Ronin (Lightning)"],unitData["Frost Monarch (Ice)"]].map(u=><UnitCard key={u.name} unit={u} color={A} />)}</div></section>

      <section aria-labelledby="b-tier"><h2 id="b-tier" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-2" style={{color:B}}>B-Tier — Solid Mid-Game Units</h2><p className="text-sm text-[#768294] mb-4">Viable units for mid-game progression. Useful while saving summons for higher tiers.</p><TierTable rows={bTier} colHeaders={["UNIT","TIER","ROLE"]} /><div className="mt-4 space-y-4">{[unitData["Shadow Kunoichi (Dark)"],unitData["Tide Guardian (Water)"],unitData["Stone Colossus (Earth)"]].map(u=><UnitCard key={u.name} unit={u} color={B} />)}</div></section>

      <section aria-labelledby="c-tier"><h2 id="c-tier" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-2" style={{color:C}}>C-Tier — Starter Units</h2><p className="text-sm text-[#768294] mb-4">Free starter units. Use them to learn the game, then replace immediately.</p><TierTable rows={cTier} colHeaders={["UNIT","TIER","ROLE"]} /><div className="mt-4"><UnitCard unit={cData} color={C} /></div></section>

      <section aria-labelledby="full-table"><h2 id="full-table" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">Complete Unit Tier List</h2><TierTable rows={allUnits} colHeaders={["UNIT","TIER","ROLE"]} /></section>

      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 className="font-heading text-[20px] font-semibold text-white mb-3">Recommended Team Compositions</h2>
        <div className="space-y-3">
          {[{n:"Meta Infinite Team",u:"Chrono Slayer + Frost Monarch + Tide Guardian",d:"Balanced DPS, CC, and sustain. Pushes past wave 100."},{n:"Speed Farm Team",u:"Storm Ronin + Shadow Kunoichi + Wind Scout",d:"Maximum clear speed for gem farming. Weaker survivability."},{n:"Boss Killer Team",u:"Void Empress + Blaze Archon + Stone Colossus",d:"High burst with tank support. Burn stacking synergy."},{n:"Budget Starter",u:"Blaze Archon + Tide Guardian + Ember Knight",d:"Accessible team with no Mythic units. Solid through wave 60."}].map((t,i)=>(<div key={i} className="border-l-2 border-[#FF3D00] bg-[#1E212B] p-3"><h4 className="text-sm font-semibold text-white">{t.n}</h4><p className="mt-1 text-xs text-[#768294]"><strong className="text-[#BAC4D1]">Units:</strong> {t.u}</p><p className="mt-0.5 text-xs text-[#768294]">{t.d}</p></div>))}
        </div>
      </section>

      <section aria-labelledby="related"><h2 id="related" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">Related Anime Rangers X Guides</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <Link href="/anime-rangers-x/trait-tier-list" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00] group"><span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#FF3D00] transition">Trait Tier List</span><p className="mt-1 text-xs text-[#768294]">Best traits for each unit</p></Link>
          <Link href="/anime-rangers-x/evolution-guide" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00] group"><span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#FF3D00] transition">Evolution Guide</span><p className="mt-1 text-xs text-[#768294]">Evolve your units efficiently</p></Link>
          <Link href="/anime-rangers-x/codes" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00] group"><span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#FF3D00] transition">Active Codes</span><p className="mt-1 text-xs text-[#768294]">Get free Gems for summoning</p></Link>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
