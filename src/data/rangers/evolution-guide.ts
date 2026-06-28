import type { EvolutionPageData } from "../types";

const data: EvolutionPageData = {
  title: "Anime Rangers X Evolution Guide — Full Requirements & Strategy (June 2026)",
  description: "Step-by-step evolution guide covering all stages from Common to Mythic. Includes material costs, gem requirements, farming strategies, priority order, and common mistakes to avoid.",
  updatedAt: "June 28, 2026",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Anime Rangers X Evolution Guide", href: "/anime-rangers-x/evolution-guide" },
  ],
  overview: {
    description: "Evolution is the primary progression system in Anime Rangers X. Each evolution stage permanently increases a unit's base stats, unlocks new ability tiers, and grants additional Trait Slots. Resources are scarce — every Evolution Stone and Gem must be spent strategically.",
    highlights: [
      "Permanent stat boosts that carry through all content",
      "Unlocks Ultimate abilities at Legendary tier",
      "Grants Trait Slot 2 at Epic, Slot 3 at Mythic",
      "Required for endgame Infinite Mode progression",
    ],
  },
  stages: [
    { from: "Common → Rare", mats: "x50 Evolution Stones + x5,000 Gems", stats: "+50% base stats" },
    { from: "Rare → Epic", mats: "x120 Evolution Stones + x12,000 Gems", stats: "+75% stats, unlock Trait Slot 2" },
    { from: "Epic → Legendary", mats: "x250 Evolution Stones + x25,000 Gems", stats: "+100% stats, unlock Ultimate" },
    { from: "Legendary → Mythic", mats: "x500 Evolution Stones + x50,000 Gems + x1 Awakening Core", stats: "+150% stats, unlock Trait Slot 3" },
    { from: "Kirito (SAO Crossover) → Mythic", mats: "x200 Evolution Stones + x15,000 Gems", stats: "Full Mythic evolution for the 2026 SAO crossover's top single-target DPS. Dark element, rivals Chrono Slayer." },
    { from: "Goku (Dragon Ball Crossover) → Mythic", mats: "x200 Evolution Stones + x15,000 Gems", stats: "Full Mythic evolution for the 2026 Dragon Ball crossover's best AOE fire DPS. Rivals Void Empress." },
    { from: "Naruto (Anime Crossover) → Legendary", mats: "x100 Evolution Stones + x8,000 Gems", stats: "Legendary evolution for the anime crossover's air-element CC unit. Unlock Ultimate and Trait Slot 2." },
  ],
  totalCost: "Total to Mythic from Common: 920 Evolution Stones + 92,000 Gems + 1 Awakening Core",
  materials: [
    { name: "Evolution Stones", icon: "⛏️", desc: "The primary evolution currency. Required at every evolution stage.", sources: ["Infinite Mode past wave 40 (5-10 per clear)", "Daily missions (15-20 stones)", "Weekly boss raids (50+ on first clear)", "Event shops during seasonal events"], tip: "Farm Infinite Mode with a speed team (Storm Ronin + Shadow Kunoichi) for maximum stones-per-hour. Daily missions are the most time-efficient source for casual players." },
    { name: "Gems", icon: "💎", desc: "Premium currency used alongside Evolution Stones at every stage.", sources: ["Active promo codes (check our Codes page)", "Daily achievements (100-200 Gems/day)", "Weekend events with bonus Gem drops", "Infinite Mode milestone rewards"], tip: "Never spend Gems on Common/Rare banners. Save exclusively for evolution costs and Mythic summon banners. A single Mythic evolution costs 50,000 Gems — plan accordingly." },
    { name: "Awakening Core", icon: "🔮", desc: "The rarest evolution material. Required only for Legendary → Mythic evolution.", sources: ["Legendary+ Boss Raid (5% drop rate)", "Premium shop (100,000 Gems)", "Battle Pass tier 50 reward (one per season)", "Extremely rare event drop"], tip: "Never use an Awakening Core on a non-S-Tier unit. The 5% boss raid drop rate means you will likely only obtain 1-2 cores per month. Each one is priceless." },
  ],
  bestUnitsSteps: [
    { step: "1", title: "Main DPS to Legendary", desc: "Push your primary damage dealer (Chrono Slayer, Void Empress, or Blaze Archon) to Legendary first. The Ultimate ability unlock at Legendary tier is the biggest single power spike in the game and enables wave 60+ content." },
    { step: "2", title: "Support to Epic", desc: "Evolve your CC/healer (Frost Monarch or Tide Guardian) to Epic for Trait Slot 2. Apply Cooldown- or Monarch trait. A well-traited support dramatically improves team survivability." },
    { step: "3", title: "Main DPS to Mythic", desc: "This is the long grind. Save 500 Evolution Stones, 50,000 Gems, and hunt for an Awakening Core. Only commit if you are certain this unit is a permanent member of your roster." },
    { step: "4", title: "Secondary DPS to Legendary", desc: "Once your main DPS is Mythic, bring your secondary DPS (Blaze Archon or Storm Ronin) to Legendary for their Ultimate. This gives you flexibility for different content types." },
    { step: "5", title: "Support to Legendary/Mythic", desc: "Last priority. A Mythic support is a luxury — the stats are nice but not game-changing. Only invest here once your DPS units are fully evolved." },
  ],
  priorityList: [
    { tier: "S", unit: "Chrono Slayer / Void Empress", reason: "Your main DPS. Mythic evolution unlocks Trait Slot 3 and +150% stats — the single biggest power spike in the game." },
    { tier: "S", unit: "Frost Monarch / Tide Guardian", reason: "Support units benefit massively from reduced cooldowns at higher evolution. Trait Slot 2 enables Cooldown- or Monarch." },
    { tier: "A", unit: "Blaze Archon / Storm Ronin", reason: "Strong Legendary DPS. Evolve to Legendary for Ultimate unlock, then park here while saving Awakening Cores for Mythic units." },
    { tier: "B", unit: "Stone Colossus / Shadow Kunoichi", reason: "Evolve to Epic for Trait Slot 2. Do not push past Epic — save resources for S/A-Tier units." },
    { tier: "C", unit: "Wind Scout / Flame Recruit / Aqua Squire", reason: "Do not invest Evolution Stones. These starter units are replaced quickly. Any stones spent here are permanently lost." },
  ],
  mistakes: [
    { title: "Evolving Starter Units", desc: "Wind Scout, Flame Recruit, and Aqua Squire are tutorial units that are replaced within hours. Every Evolution Stone spent on them is permanently wasted. Wait until you pull at least an Epic-tier unit before evolving anything." },
    { title: "Spreading Resources Too Thin", desc: "Evolving 5 units to Epic is worse than evolving 1 unit to Legendary. Focus all Evolution Stones and Gems on your main DPS first, then your support, then secondary DPS. A single hyper-evolved carry can solo most content." },
    { title: "Using Awakening Cores Early", desc: "Awakening Cores are the rarest resource in the game. If you use one on Blaze Archon and then pull Chrono Slayer next week, you have wasted a month of farming. Only awaken units you are certain will be in your permanent team." },
    { title: "Ignoring Trait Slots", desc: "Evolution unlocks Trait Slots (Slot 2 at Epic, Slot 3 at Mythic). A unit with 2 good traits is exponentially stronger than one with 1. Always fill new trait slots immediately — even a Rare trait is better than an empty slot." },
    { title: "Evolving Before Checking the Meta", desc: "The Re:Rangers patch significantly changed unit balance. A unit that was S-Tier last month may be A-Tier now. Always check the latest Unit Tier List before committing major evolution resources." },
  ],
  faq: [
    { question: "How long does it take to evolve a unit to Mythic?", answer: "For a free-to-play player, expect 3-4 weeks of consistent grinding. Focus on daily missions for stones, weekend events for bonus Gems, and boss raids for Awakening Core chances." },
    { question: "What is the fastest way to farm Evolution Stones?", answer: "Infinite Mode with a speed-farming team yields 5-10 stones per clear past wave 40. Combine with daily missions (15-20 stones) and weekly boss raids (50+ stones) for maximum weekly income." },
    { question: "Should I evolve Rare units to Epic or wait?", answer: "Wait. Only invest in Epic-tier units and above. Rare and Common units cannot reach Mythic tier and are permanently outclassed. If you have zero Epic+ units, evolve one Rare to Epic as a temporary carry, but stop there." },
    { question: "Do I lose my traits when I evolve a unit?", answer: "No. Traits are permanently attached to trait slots and persist through evolution. Evolving to Epic unlocks Trait Slot 2 and Mythic unlocks Trait Slot 3 — your existing trait in Slot 1 is unaffected." },
    { question: "Is it worth buying Evolution Stones with Gems?", answer: "Generally no. Gems are better spent on Mythic summon banners and evolution costs. If you are 10-20 stones away from a major milestone, a small purchase is acceptable. Never buy stones in bulk with Gems." },
  ],
  relatedGuides: [
    { label: "Unit Tier List", href: "/anime-rangers-x/unit-tier-list", description: "Decide which units to evolve first" },
    { label: "Trait Tier List", href: "/anime-rangers-x/trait-tier-list", description: "Best traits for newly unlocked slots" },
    { label: "Active Codes", href: "/anime-rangers-x/codes", description: "Get free Gems to fund evolution costs" },
  ],
};

export default data;
