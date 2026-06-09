import type { EvolutionPageData } from "../types";

const data: EvolutionPageData = {
  title: "Re:Rangers X Team Guide — Best Compositions for Every Mode (June 2026)",
  description: "Complete team composition guide for Re:Rangers X. Meta team builds for Infinite Mode, Boss Raids, Speed Farming, and PvP. Includes unit synergies, elemental pairings, positioning strategy, and how to adapt your team as you unlock new units.",
  updatedAt: "June 8, 2026",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Re:Rangers X Team Guide", href: "/anime-rangers-x/team-guide" },
  ],

  overview: {
    description: "A great unit is only half the equation — the other half is how that unit fits into a team. The right team composition amplifies every unit's strengths while covering their weaknesses. A Chrono Slayer without crowd control dies to wave density. A Frost Monarch without a DPS freezes enemies that never die. This guide covers the four core team roles, the best compositions for every game mode, elemental synergy pairings, positioning tactics, and how to adapt your team as your roster grows from starter units to a full Mythic squad.",
    highlights: [
      "Every team needs four roles: Main DPS, Crowd Control, Support, and Flex",
      "Mode-specific comps outperform general-purpose teams in every scenario",
      "Elemental synergy can boost team damage by 15-25% through complementary pairings",
      "Positioning matters — tanks front, DPS middle, supports back",
      "The best Infinite Mode comp can push wave 100+ with proper evolution and traits",
      "Speed farming comps clear waves 40-60% faster than balanced teams",
    ],
  },

  stages: [
    { from: "Starter Team (0-1 hr)", mats: "Free summons + codes", stats: "Wind Scout + Flame Recruit + Aqua Squire — learning composition" },
    { from: "Early-Game Team (1-5 hrs)", mats: "~2 Legendary summons + 50 Stones", stats: "Blaze Archon (DPS) + Frost Monarch (CC) + Tide Guardian (Support) + Stone Colossus (Flex) — wave 40+" },
    { from: "Mid-Game Team (5-15 hrs)", mats: "~250 Stones + Legendary evolutions", stats: "Chrono Slayer/Void Empress (DPS) + Frost Monarch (CC) + Tide Guardian (Support) + Shadow Kunoichi (Flex) — wave 60+" },
    { from: "Endgame Team (15+ hrs)", mats: "Mythic evolution + Mythic traits", stats: "Chrono Slayer (DPS) + Void Empress (Sub-DPS) + Frost Monarch (CC) + Tide Guardian (Support) — wave 100+" },
  ],
  totalCost: "Approximately 2,500 Evolution Stones + 250,000 Gems + 2 Awakening Cores to max a full 4-unit endgame team",

  materials: [
    {
      name: "Infinite Mode Meta Comp",
      icon: "🔄",
      desc: "Chrono Slayer (Main DPS) + Frost Monarch (CC) + Tide Guardian (Support) + Stone Colossus (Tank). This is the gold standard for pushing high waves. Chrono Slayer's time-freeze chains with Frost Monarch's freeze for near-permanent enemy lockdown. Tide Guardian keeps the team alive through chip damage. Stone Colossus absorbs hits at the front line with damage reduction aura.",
      sources: ["Optimal traits: Chrono Slayer (Time Rewind), Frost Monarch (Cooldown-), Tide Guardian (Monarch), Stone Colossus (Lifesteal)"],
      tip: "Position: Stone Colossus front-left, Frost Monarch front-right, Chrono Slayer center, Tide Guardian back-center. Upgrade Chrono Slayer first during waves, Frost Monarch second. Use Chrono Slayer ultimate when 10+ enemies are on screen. Save Frost Monarch freeze for elite spawns.",
    },
    {
      name: "Boss Raid Burst Comp",
      icon: "💥",
      desc: "Void Empress (Main DPS) + Chrono Slayer (Sub-DPS) + Blaze Archon (Burn) + Tide Guardian (Support). Maximum single-target damage for boss fights. Void Empress's AOE ultimate hits the boss and adds simultaneously. Chrono Slayer's time-freeze creates safe DPS windows. Blaze Archon's burn stacks deal sustained damage during boss movement phases.",
      sources: ["Optimal traits: Void Empress (Void Touch), Chrono Slayer (God-Speed), Blaze Archon (Cooldown-), Tide Guardian (Monarch)"],
      tip: "Focus all upgrades on Void Empress. Use Chrono Slayer ultimate to freeze the boss, then immediately cast Void Empress ultimate during the freeze window for guaranteed full-damage hit. Apply Blaze Archon burn stacks before the boss's invulnerability phases.",
    },
    {
      name: "Speed Farming Comp",
      icon: "⚡",
      desc: "Storm Ronin (Main DPS) + Shadow Kunoichi (Sub-DPS) + Frost Monarch (CC) + Flex. Designed for maximum wave-clear speed to farm Evolution Stones efficiently. Storm Ronin's chain lightning hits multiple enemies. Shadow Kunoichi's stealth crit eliminates high-HP targets. Frost Monarch freezes enemies in Storm Ronin's chain range.",
      sources: ["Optimal traits: Storm Ronin (God-Speed), Shadow Kunoichi (Time Rewind), Frost Monarch (Cooldown-), Flex (Drop Rate+)"],
      tip: "Use Drop Rate+ trait on your flex slot for +20% stone/gem drops. This comp is not for pushing high waves — it is for quickly clearing waves 1-40 repeatedly for efficient farming. Swap to the Infinite Mode comp when pushing for new wave records.",
    },
    {
      name: "Beginner-Friendly Comp",
      icon: "🌱",
      desc: "Blaze Archon (Main DPS) + Frost Monarch (CC) + Aqua Squire (Support) + Flame Recruit (Flex). The most accessible team for new players who have not pulled Mythic units. Blaze Archon provides reliable burn DPS. Frost Monarch adds essential CC. Aqua Squire is a starter healer — replace with Tide Guardian as soon as possible.",
      sources: ["Optimal traits: Blaze Archon (Cooldown-), Frost Monarch (any trait), Aqua Squire (Drop Rate+), Flame Recruit (anything — temporary)"],
      tip: "Replace Flame Recruit first — any summoned B-Tier or higher unit is an upgrade. Replace Aqua Squire second — Tide Guardian provides significantly better healing and team shielding. This comp should carry you to wave 30-40 while you save Gems for better summons.",
    },
  ],

  bestUnitsSteps: [
    { step: "1", title: "Understand the Four Team Roles", desc: "Main DPS: Your primary damage dealer. Invest 60%+ of your resources here. Crowd Control (CC): Freezes, slows, or stuns enemies. Prevents your team from being overwhelmed. Support: Heals, shields, or buffs your team. Keeps everyone alive. Flex: Adaptable slot — secondary DPS, tank, or utility depending on the mode. Every team needs all four roles filled." },
    { step: "2", title: "Build Around Your Best Unit", desc: "Your best unit determines your team. Pulled Chrono Slayer? Build a comp that protects and enables it (CC + Support + Tank). Pulled Void Empress? Build a comp that groups enemies for her AOE (CC + Burn + Support). Do not force a unit into a role it does not fit. Let your roster dictate your composition." },
    { step: "3", title: "Match Elements for Synergy", desc: "Complementary elements boost team performance. Time (Chrono Slayer) is neutral — it synergizes with everything. Fire (Blaze Archon) + Ice (Frost Monarch) creates melt combos. Dark (Void Empress, Shadow Kunoichi) + any element provides defense shred. Avoid stacking two units of the same element — diversity covers more enemy types." },
    { step: "4", title: "Position Your Units Correctly", desc: "Front line: Tanks and CC units (Stone Colossus, Frost Monarch). They absorb hits and control enemies. Center: Main DPS (Chrono Slayer, Void Empress, Blaze Archon). Protected position with maximum attack range. Back line: Support and secondary DPS (Tide Guardian, Shadow Kunoichi). Safest position for fragile units. Upgrade priority during waves: DPS first, CC second, Support last." },
    { step: "5", title: "Build Mode-Specific Teams", desc: "Do not use one team for everything. Infinite Mode needs sustain and CC. Boss Raids need burst damage. Speed Farming needs fast wave clear. Build 2-3 specialized teams as your roster expands. Swap between them based on what you are doing. A mode-optimized B-Tier team often outperforms an S-Tier team built for the wrong mode." },
    { step: "6", title: "Evolve in Priority Order", desc: "Evolution priority within a team: Main DPS → Mythic/Legendary. CC → Epic (for Trait Slot 2). Support → Epic. Flex → Rare or Epic. Never evolve all units evenly. A team with one Mythic DPS and three Rare supports clears more content than a team with four Epic units. The DPS carries — everyone else enables." },
    { step: "7", title: "Rotate Units Based on Enemy Elements", desc: "Check the enemy element before each mode. If the boss is Light, bench Void Empress (Dark is weak to Light). If the boss is Ice, bring Blaze Archon (Fire beats Ice). Having 6-8 built units lets you swap for elemental advantage. A B-Tier unit with elemental advantage often outperforms an S-Tier unit with elemental disadvantage." },
  ],

  priorityList: [
    { tier: "S", unit: "Infinite Mode: Chrono Slayer + Frost Monarch + Tide Guardian + Stone Colossus", reason: "The meta-defining comp. Wave 100+ capable with proper evolution and traits. Near-permanent enemy lockdown through time-freeze and ice-freeze chaining. Sustained by Tide Guardian heals. Protected by Stone Colossus tanking. This comp is the reason Chrono Slayer is S-Tier." },
    { tier: "S", unit: "Boss Raid: Void Empress + Chrono Slayer + Blaze Archon + Tide Guardian", reason: "Maximum boss DPS. Void Empress AOE clears adds while damaging boss. Chrono Slayer creates safe DPS windows. Blaze Archon burn stacks deal damage through invulnerability phases. Tide Guardian keeps the team alive. The optimal comp for weekly boss raid clears." },
    { tier: "A", unit: "Speed Farming: Storm Ronin + Shadow Kunoichi + Frost Monarch + Drop Rate+ Flex", reason: "Fastest wave clear for stone and gem farming. Chain lightning clears groups. Stealth crit eliminates high-HP targets. Drop Rate+ trait boosts resource gains by 20%. Use for waves 1-40 farming, then swap to Infinite Mode comp for pushing." },
    { tier: "A", unit: "Beginner: Blaze Archon + Frost Monarch + Tide Guardian + Any B-Tier", reason: "Accessible and effective for new players. Blaze Archon is obtainable from Legendary banners. Frost Monarch is the best CC and also accessible. This comp clears wave 40+ and farms resources while you save for Mythic summons." },
    { tier: "B", unit: "Defense: Stone Colossus + Frost Monarch + Tide Guardian + Chrono Slayer", reason: "Maximum survivability for fragile DPS units. Double tank with CC and healing. Slower clear speed but nearly unkillable. Use when pushing new wave records where survival matters more than speed." },
    { tier: "B", unit: "AOE Farm: Void Empress + Storm Ronin + Frost Monarch + Drop Rate+ Flex", reason: "Double AOE DPS for maximum wave-clear speed. Void Empress handles dense waves. Storm Ronin cleans up stragglers. Frost Monarch groups enemies for both AOE abilities. Excellent for quick daily mission clears." },
    { tier: "C", unit: "Starter: Wind Scout + Flame Recruit + Aqua Squire + Any", reason: "Tutorial comp. Use only until you complete your first banner summons. Do not invest resources. Every unit in this comp is replaced within an hour of play. The comp exists to teach team dynamics, not to clear content." },
    { tier: "C", unit: "Mono-Element Teams (All Fire, All Ice, etc.)", reason: "Avoid stacking units of the same element. A full Ice team is hard-countered by a single Fire boss. Elemental diversity provides coverage. The only exception is if you are building a themed team for fun — do not expect it to perform competitively." },
  ],

  mistakes: [
    { title: "Using the Same Team for Every Mode", desc: "Infinite Mode needs sustain. Boss Raids need burst. Speed Farming needs AOE. A team optimized for one mode will underperform in others. Build 2-3 specialized teams. It costs nothing to swap units between modes — the only cost is the Evolution Stones you would have spent anyway on a diverse roster." },
    { title: "Positioning DPS Units on the Front Line", desc: "Chrono Slayer has 8,500 HP — the lowest of any S-Tier. Placing it on the front line gets it killed in seconds. Tanks and CC units go in front. DPS units go in the center where they can attack safely. Supports go in the back. This positioning triangle is fundamental — ignore it and your carry dies." },
    { title: "Neglecting Crowd Control Entirely", desc: "Some players run triple DPS with no CC, thinking more damage solves everything. At wave 50+, enemy density overwhelms pure DPS. You cannot kill enemies fast enough without CC to slow them down. Frost Monarch is not optional for high-wave content — it is mandatory. One CC unit enables three DPS units to function." },
    { title: "Evolving the Entire Team Evenly", desc: "A team with levels 80/80/80/80 is weaker than a team with levels 100/60/60/60. The hyper-evolved DPS carries harder than the evenly-leveled team. Evolution Stones are scarce — concentrate them on your best unit. Your supports only need to survive, not deal damage." },
    { title: "Stacking Duplicate Elements", desc: "Two Fire units on one team means both are weak to Water enemies. One Water boss and your team is crippled. Diversify elements across your roster. The ideal team has four different elements for maximum coverage. Chrono Slayer (Time, neutral) is so valuable partly because it ignores elemental matchups entirely." },
    { title: "Upgrading Supports Before DPS During Waves", desc: "During a wave, you earn upgrade currency. Always spend it on your Main DPS first — their damage scales exponentially with upgrades. Upgrading Tide Guardian's healing does nothing if enemies are not dying. DPS → CC → Support is the upgrade priority order. The only exception is if your DPS is about to die and a Support upgrade saves them." },
  ],

  faq: [
    { question: "What is the best team composition in Re:Rangers X?", answer: "For Infinite Mode (the primary content): Chrono Slayer (Main DPS) + Frost Monarch (CC) + Tide Guardian (Support) + Stone Colossus (Tank). This comp can push wave 100+ with proper evolution and traits. For Boss Raids, swap Stone Colossus for Void Empress or Blaze Archon for additional DPS." },
    { question: "How many teams should I build?", answer: "Start with one solid 4-unit team. Once your main DPS is Legendary, expand to 6-8 units across 2-3 specialized teams: one for Infinite Mode pushing, one for Boss Raids, and one for Speed Farming. Do not build more than 8 units until your core team is fully evolved — resources are too scarce." },
    { question: "Do I need a tank in my team?", answer: "For Infinite Mode, yes — Stone Colossus's damage reduction aura and high HP pool protect your DPS. For Boss Raids, a tank is less important — burst DPS and CC matter more. For Speed Farming, no — speed clears prioritize damage over defense. Adjust your flex slot between tank, secondary DPS, or utility based on the mode." },
    { question: "What is the best CC unit?", answer: "Frost Monarch (Ice, A-Tier) is the undisputed best CC unit. It freezes enemies in place, creates defensive ice walls, and slows bosses. No other CC unit matches its combination of reliability, duration, and accessibility. If you have Frost Monarch, it should be on every team except speed farming comps." },
    { question: "Can I use Void Empress and Chrono Slayer on the same team?", answer: "Yes — this is one of the strongest duos in the game. Use Chrono Slayer as main DPS and Void Empress as sub-DPS/flex. Chrono Slayer's time-freeze sets up safe windows for Void Empress's long-cooldown ultimate. Together they can clear wave 100+. This is the endgame dream team." },
    { question: "How important is unit positioning?", answer: "Critically important. Front-line units take 80% of enemy attacks. If your DPS is on the front line, it dies first and your damage output collapses. Always place tanks and CC in front, DPS in center, and supports in back. Upgrade priority during waves follows the same logic: DPS → CC → Support." },
    { question: "Should I swap units between modes?", answer: "Yes — and it costs nothing. Units are not locked to teams. Build a roster of 6-8 units and assemble mode-specific comps for each activity. The only cost is the Evolution Stones you invest in each unit. Having diverse options is always better than being locked into one composition." },
    { question: "How do I counter specific boss elements?", answer: "Check the boss's element on the mode select screen. Fire bosses are weak to Water/Ice (bring Tide Guardian, Frost Monarch). Ice bosses are weak to Fire (bring Blaze Archon). Dark bosses are weak to Light. Chrono Slayer (Time) is neutral against everything — deploy it regardless of boss element. If you lack the counter-element, use your strongest neutral unit instead of a disadvantaged one." },
  ],

  relatedGuides: [
    { label: "Unit Tier List", href: "/anime-rangers-x/unit-tier-list", description: "Every unit ranked with stats and synergy notes" },
    { label: "Best Units Guide", href: "/anime-rangers-x/best-units", description: "Detailed breakdown of top DPS, supports, and team roles" },
    { label: "Evolution Guide", href: "/anime-rangers-x/evolution-guide", description: "Evolution costs and priority for your team" },
    { label: "Trait Tier List", href: "/anime-rangers-x/trait-tier-list", description: "Best traits for each team role" },
  ],
};

export default data;
