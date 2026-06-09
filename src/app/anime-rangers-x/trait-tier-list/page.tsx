import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import TierTable from "@/components/TierTable";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anime Rangers X Trait Tier List (June 2026) — Best Traits Ranked | BloxPulse",
  description: "Every Anime Rangers X trait ranked from Mythic to Common with optimal unit pairings, reroll strategy, and the Re:Rangers trait rework changes.",
  keywords: ["Anime Rangers X trait tier list", "best traits", "Time Rewind trait", "God-Speed trait", "trait reroll"],
  openGraph: { title: "Anime Rangers X Trait Tier List (June 2026)", description: "All traits ranked with optimal unit pairings and reroll strategy.", type: "website" },
};

const sTier = [
  { name: "Time Rewind", tier: "Mythic", description: "Reset all cooldowns on kill" },
  { name: "God-Speed", tier: "Mythic", description: "+50% attack speed, stacking per kill" },
];
const aTier = [
  { name: "Monarch", tier: "Legendary", description: "+30% all stats when HP above 80%" },
  { name: "Void Touch", tier: "Legendary", description: "Attacks ignore 25% enemy defense" },
];
const bTier = [
  { name: "Drop Rate+", tier: "Epic", description: "+20% gem and stone drop rate" },
  { name: "Cooldown-", tier: "Epic", description: "-15% ability cooldown time" },
  { name: "Lifesteal", tier: "Epic", description: "Heal 10% of damage dealt" },
];
const cTier = [
  { name: "Fortress", tier: "Rare", description: "+15% defense, taunt enemies on hit" },
  { name: "Scout", tier: "Rare", description: "+10% movement speed, detect invisible" },
  { name: "Basic ATK+", tier: "Common", description: "+5% base attack damage" },
];
const allTraits = [...sTier, ...aTier, ...bTier, ...cTier];

interface TraitDetail {
  name: string; rank: string; desc: string;
  strengths: string[]; weaknesses: string[]; bestOn: string;
}

const traitData: Record<string, TraitDetail> = {
  "Time Rewind": { name: "Time Rewind", rank: "Mythic-Tier #1", desc: "The single best trait in the game. Resets all ability cooldowns instantly on kill, enabling infinite ultimate chains on high-DPS units. At high wave density, this trait effectively removes cooldowns as a mechanic entirely.", strengths: ["Enables infinite ultimate chains", "Scales infinitely with wave density", "Best-in-slot on Chrono Slayer", "No downside or conditional requirement"], weaknesses: ["Mythic rarity — extremely rare roll", "Less effective on low-kill-speed units", "Wasted on support units that rarely land kills", "Overkill in easy content"], bestOn: "Chrono Slayer (S-Tier synergy). Also strong on Void Empress for AOE ult spam. Do not waste on support or tank units." },
  "God-Speed": { name: "God-Speed", rank: "Mythic-Tier #2", desc: "Massive attack speed steroid that stacks +50% per kill, cumulatively turning any unit into a blender. Especially devastating on units with built-in attack speed buffs like Storm Ronin, where the stacking creates exponential DPS growth.", strengths: ["+50% attack speed per kill stacks infinitely", "Turns any DPS unit into a hyper-carry", "Exceptional on Storm Ronin (stacks with speed buff)", "Dominates wave-clear and farming content"], weaknesses: ["Requires kills to stack — weak start", "Stacks reset on unit death", "Less effective against single bosses", "Mythic rarity makes it hard to obtain"], bestOn: "Storm Ronin (S-Tier synergy for speed farming). Also excellent on Blaze Archon for rapid burn application. Equip on your fastest-killing DPS unit." },
  "Monarch": { name: "Monarch", rank: "Legendary-Tier #3", desc: "+30% to all stats (ATK, DEF, SPD) while above 80% HP. A straightforward, consistent power boost that rewards good positioning and heal support. The most reliable Legendary trait for general use.", strengths: ["+30% all stats is a massive universal boost", "No kill requirement — always active above 80% HP", "Works on any unit role (DPS, tank, support)", "Legendary rarity — significantly easier to roll than Mythic"], weaknesses: ["Deactivates below 80% HP", "Requires healer support to maintain uptime", "Less peak potential than Mythic traits", "Wasted if you take frequent chip damage"], bestOn: "Blaze Archon or any DPS with Tide Guardian support. Also strong on Frost Monarch for tankier CC support. Pair with a healer to maintain the 80% HP threshold." },
  "Void Touch": { name: "Void Touch", rank: "Legendary-Tier #4", desc: "Attacks ignore 25% of enemy defense. Mathematically, this is equivalent to a ~33% damage increase against high-defense targets (wave 60+ bosses). Scales better the further you push into Infinite Mode.", strengths: ["Effective ~33% damage increase vs high-defense enemies", "Scales better in late-game content", "No activation condition — always active", "Excellent for boss-killing"], weaknesses: ["Less effective against low-defense enemies", "No benefit to non-damage stats", "Slightly weaker than Monarch in easy content", "Dark element locked — only Void Empress gains full value"], bestOn: "Void Empress (namesake synergy — also gains +10% bonus from matching element). Strong on any DPS unit pushing past wave 60. Less valuable for early-game farming." },
  "Drop Rate+": { name: "Drop Rate+", rank: "Epic-Tier #5", desc: "Increases gem and Evolution Stone drop rates by 20%. Not a combat trait, but the most valuable farming trait in the game. Over hundreds of runs, the resource acceleration is unmatched.", strengths: ["+20% resource drops accelerates all progression", "Stacks with event drop bonuses", "Best trait for dedicated farming loadouts", "Epic rarity — easy to obtain"], weaknesses: ["Zero combat benefit", "Useless in boss fights and progression pushes", "Takes up a trait slot that could be damage", "Only valuable when actively farming resources"], bestOn: "Any dedicated farming unit. Equip on a secondary unit in your speed farm team. Swap to a combat trait for progression content." },
  "Cooldown-": { name: "Cooldown-", rank: "Epic-Tier #6", desc: "Reduces all ability cooldowns by 15%. A reliable support trait that improves ability uptime across the board. Particularly valuable on units with long base cooldowns like Frost Monarch (30s wall) and Tide Guardian (22s heal).", strengths: ["Universal cooldown reduction for all abilities", "Scales well with units that have long cooldowns", "Improves team survivability through more frequent heals/CC", "Epic rarity — accessible"], weaknesses: ["Only 15% reduction — modest impact", "Less valuable on spammy units with short cooldowns", "No direct damage or stat increase", "Outclassed by Time Rewind on kill-heavy units"], bestOn: "Frost Monarch and Tide Guardian (reduces critical support cooldowns). Also useful on Void Empress to reduce her 25s ultimate cooldown. Avoid on Chrono Slayer (Time Rewind is better)." },
  "Lifesteal": { name: "Lifesteal", rank: "Epic-Tier #7", desc: "Heals 10% of all damage dealt. Provides sustain without needing a dedicated healer, freeing up a team slot for another DPS or support unit. The self-sufficiency is valuable for solo farming.", strengths: ["Provides self-sustain without a healer", "Frees up a team slot for more DPS", "Scales with damage output", "Excellent quality-of-life for solo play"], weaknesses: ["10% is a small heal — won't save you from burst", "Requires dealing damage to heal", "Less effective on low-damage support units", "Redundant if you already run Tide Guardian"], bestOn: "Void Empress or Blaze Archon for solo farming. Less necessary on Chrono Slayer (kill-based passive already provides utility). Skip if you always run a healer." },
  "Fortress": { name: "Fortress", rank: "Rare-Tier", desc: "+15% defense and taunts enemies on hit. A solid defensive trait that helps dedicated tanks hold aggro and survive longer. The taunt is a mini-version of Stone Colossus's ability.", strengths: ["Extra defense and built-in taunt utility", "Helps tanks maintain aggro", "Easy to roll (Rare tier)", "Decent budget option for tank units"], weaknesses: ["Only 15% defense — modest mitigation", "Taunt is weaker than Stone Colossus's ability", "Outclassed by higher-tier traits", "No offensive benefit"], bestOn: "Stone Colossus (stacks with his existing taunt). Budget option for any frontline unit. Replace with Monarch or a Mythic trait when available." },
  "Scout": { name: "Scout", rank: "Rare-Tier", desc: "+10% movement speed and the ability to detect invisible enemies. A niche utility trait valuable in specific content with stealth enemies but outclassed in general use.", strengths: ["Movement speed helps with dodging", "Detects invisible enemies (niche content)", "Easy to roll (Rare tier)"], weaknesses: ["Only 10% speed — barely noticeable", "Invisible detection is useless in most content", "No combat stat bonus", "Outclassed by almost any other trait"], bestOn: "Wind Scout for thematic synergy. Budget placeholder until you roll something better. Not recommended for serious content." },
};

const faqs = [
  { question: "What is the best trait in Anime Rangers X?", answer: "Time Rewind (Mythic #1) is the best trait — it resets all cooldowns on kill, enabling infinite ultimate chains on Chrono Slayer. God-Speed (Mythic #2) is the best farming trait with its stacking +50% attack speed per kill." },
  { question: "How do I get better traits?", answer: "Use Trait Rolls obtained from promo codes, events, and gem purchases. Save your rolls for Mythic and Legendary units — rolling on Common/Rare units is wasteful since they will be replaced. Stack multiple rolls for better odds during trait-boosted events." },
  { question: "Can I change a trait after applying it?", answer: "Yes, rerolling replaces the current trait permanently. There is no refund. The Re:Rangers update added a trait lock feature for 50 Gems that prevents accidental rerolls on your favorite traits." },
  { question: "Should I use Drop Rate+ or a combat trait?", answer: "Use Drop Rate+ on a dedicated farming loadout and swap to a combat trait for progression pushes. The resource acceleration from Drop Rate+ pays off over time, but you need combat power to clear harder content. Maintain two trait sets if possible." },
  { question: "Which trait is best for beginners?", answer: "Monarch (Legendary) is the best beginner-friendly trait — +30% all stats with a simple HP condition. It is significantly easier to roll than Mythic traits and works on any unit. Pair with Tide Guardian to maintain the 80% HP threshold." },
];

function TraitCard({ trait, color }: { trait: TraitDetail; color: string }) {
  return (
    <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
      <h3 className="text-base font-semibold text-white">{trait.name}</h3>
      <span className="code-text inline-block mt-1 rounded px-2 py-0.5 text-xs" style={{ color, backgroundColor: color + "1a" }}>{trait.rank}</span>
      <p className="mt-3 text-sm text-[#BAC4D1] leading-relaxed">{trait.desc}</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div><h4 className="text-xs font-semibold text-[#00E676] mb-2">Strengths</h4><ul className="space-y-1">{trait.strengths.map((s,i)=><li key={i} className="flex gap-2 text-xs text-[#BAC4D1]"><span className="text-[#00E676] shrink-0">+</span> {s}</li>)}</ul></div>
        <div><h4 className="text-xs font-semibold text-[#FF3D00] mb-2">Weaknesses</h4><ul className="space-y-1">{trait.weaknesses.map((w,i)=><li key={i} className="flex gap-2 text-xs text-[#BAC4D1]"><span className="text-[#FF3D00] shrink-0">-</span> {w}</li>)}</ul></div>
      </div>
      <div className="mt-4 rounded-lg bg-[#1E212B] p-3">
        <h4 className="text-xs font-semibold text-[#3A86FF] mb-1">Best On</h4>
        <p className="text-xs text-[#BAC4D1] leading-relaxed">{trait.bestOn}</p>
      </div>
    </div>
  );
}

﻿
export default function TraitTierListPage() {
  const MY = "#FF3D00", LG = "#FF8C00", EP = "#A020F0", RA = "#3A86FF";
  return (
    <ContentLayout
      title="Anime Rangers X Trait Tier List — Every Trait Ranked (June 2026)"
      description="All traits ranked from Mythic to Common with detailed strengths, weaknesses, optimal unit pairings, and reroll strategy. Includes the Re:Rangers trait system rework changes."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Anime Rangers X Trait Tier List", href: "/anime-rangers-x/trait-tier-list" }]}
      accent="rangers"
    >
      <section aria-labelledby="tiers-heading">
        <h2 id="tiers-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">Trait Ranking System</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[{t:"Mythic",c:MY,l:"Game-changing",d:"Best traits; define your build"},{t:"Legendary",c:LG,l:"Excellent",d:"Strong universal traits"},{t:"Epic",c:EP,l:"Solid",d:"Viable; strong in specific roles"},{t:"Rare/Common",c:RA,l:"Budget",d:"Placeholder; replace when possible"}].map(x=>(<div key={x.t} className="rounded-lg border border-[#252936] bg-[#14161D] p-4"><span className="code-text text-sm" style={{color:x.c}}>{x.t}</span><p className="mt-1 text-sm font-semibold text-white">{x.l}</p><p className="mt-1 text-xs text-[#768294]">{x.d}</p></div>))}
        </div>
      </section>

      <section aria-labelledby="s-tier"><h2 id="s-tier" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-2" style={{color:MY}}>Mythic-Tier — Game-Changing Traits</h2><p className="text-sm text-[#768294] mb-4">These two traits fundamentally alter how a unit plays. Extremely rare rolls but worth every Trait Roll you spend chasing them.</p><TierTable rows={sTier} colHeaders={["TRAIT","TIER","EFFECT"]} /><div className="mt-4 space-y-4">{[traitData["Time Rewind"],traitData["God-Speed"]].map(t=><TraitCard key={t.name} trait={t} color={MY} />)}</div></section>

      <section aria-labelledby="a-tier"><h2 id="a-tier" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-2" style={{color:LG}}>Legendary-Tier — Excellent Traits</h2><p className="text-sm text-[#768294] mb-4">Powerful universal traits that work on nearly any unit. Much easier to roll than Mythic traits and provide consistent value.</p><TierTable rows={aTier} colHeaders={["TRAIT","TIER","EFFECT"]} /><div className="mt-4 space-y-4">{[traitData["Monarch"],traitData["Void Touch"]].map(t=><TraitCard key={t.name} trait={t} color={LG} />)}</div></section>

      <section aria-labelledby="b-tier"><h2 id="b-tier" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-2" style={{color:EP}}>Epic-Tier — Solid Role Traits</h2><p className="text-sm text-[#768294] mb-4">Viable traits that excel in specific roles — farming, support, or sustain. Keep these until you roll a Legendary or Mythic upgrade.</p><TierTable rows={bTier} colHeaders={["TRAIT","TIER","EFFECT"]} /><div className="mt-4 space-y-4">{[traitData["Drop Rate+"],traitData["Cooldown-"],traitData["Lifesteal"]].map(t=><TraitCard key={t.name} trait={t} color={EP} />)}</div></section>

      <section aria-labelledby="c-tier"><h2 id="c-tier" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-2" style={{color:RA}}>Rare & Common-Tier — Budget Traits</h2><p className="text-sm text-[#768294] mb-4">Basic traits that serve as placeholders. Replace as soon as you roll anything Epic or higher.</p><TierTable rows={cTier} colHeaders={["TRAIT","TIER","EFFECT"]} /><div className="mt-4 space-y-4">{[traitData["Fortress"],traitData["Scout"]].map(t=><TraitCard key={t.name} trait={t} color={RA} />)}</div></section>

      <section aria-labelledby="full-table"><h2 id="full-table" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">Complete Trait Tier List</h2><TierTable rows={allTraits} colHeaders={["TRAIT","TIER","EFFECT"]} /></section>

      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 className="font-heading text-[20px] font-semibold text-white mb-3">Optimal Trait-to-Unit Pairings</h2>
        <div className="space-y-2">
          {[["Time Rewind","Chrono Slayer","Infinite ultimate chains at wave 80+"],["God-Speed","Storm Ronin","Maximum DPS for speed farming"],["Void Touch","Void Empress","Amplifies her AOE nuke with 25% defense pen"],["Monarch","Blaze Archon","+30% all stats — best universal Legendary"],["Drop Rate+","Farm unit","Best on dedicated gem-farming loadouts"],["Cooldown-","Frost Monarch","More frequent freezes = safer high-wave pushes"]].map(([t,u,w],i)=>(<div key={i} className="border-l-2 border-[#FF3D00] bg-[#1E212B] p-3"><span className="text-sm font-semibold text-[#BAC4D1]">{t}</span><span className="text-xs text-[#768294] ml-2">→ {u}</span><p className="mt-1 text-xs text-[#768294]">{w}</p></div>))}
        </div>
      </section>

      <section aria-labelledby="related"><h2 id="related" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">Related Anime Rangers X Guides</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <Link href="/anime-rangers-x/unit-tier-list" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00] group"><span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#FF3D00] transition">Unit Tier List</span><p className="mt-1 text-xs text-[#768294]">See which units deserve your best traits</p></Link>
          <Link href="/anime-rangers-x/evolution-guide" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00] group"><span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#FF3D00] transition">Evolution Guide</span><p className="mt-1 text-xs text-[#768294]">Evolve units to unlock more trait slots</p></Link>
          <Link href="/anime-rangers-x/codes" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00] group"><span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#FF3D00] transition">Active Codes</span><p className="mt-1 text-xs text-[#768294]">Get free Trait Rolls from promo codes</p></Link>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
