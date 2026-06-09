import type { TierListPageData } from "../types";

const data: TierListPageData = {
  title: "Anime Rangers X Unit Tier List — All Units Ranked (June 2026)",
  description: "Every Anime Rangers X unit ranked from S-Tier to C-Tier with detailed strengths, weaknesses, best use cases, optimal trait pairings, and recommended team compositions.",
  updatedAt: "June 8, 2026",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Anime Rangers X Unit Tier List", href: "/anime-rangers-x/unit-tier-list" },
  ],
  tierExplanation: [
    { tier: "S", color: "#FF3D00", label: "Meta-defining", desc: "Best units; build teams around them" },
    { tier: "A", color: "#FF8C00", label: "Excellent", desc: "Strong alternatives; great value" },
    { tier: "B", color: "#FFD700", label: "Solid", desc: "Viable mid-game; situational power" },
    { tier: "C", color: "#3A86FF", label: "Budget", desc: "Starter units; replace ASAP" },
  ],
  tiers: [
    { name: "S-Tier — Meta-Defining Units", description: "These two Mythic units define the endgame meta. Highest DPS, game-changing ultimates, best Infinite Mode scaling.", entries: [
      { name: "Chrono Slayer (Time)", tier: "S", description: "Best DPS, time-freeze ultimate" },
      { name: "Void Empress (Dark)", tier: "S", description: "AOE nuke, self-heal passive" },
    ]},
    { name: "A-Tier — Excellent Units", description: "Strong Legendary and Epic units that form the backbone of most competitive teams. Easier to summon than Mythics.", entries: [
      { name: "Blaze Archon (Fire)", tier: "A", description: "Burn stacking, wave clear" },
      { name: "Storm Ronin (Lightning)", tier: "A", description: "Speed buff, chain attack" },
      { name: "Frost Monarch (Ice)", tier: "A", description: "Freeze CC, defensive wall" },
    ]},
    { name: "B-Tier — Solid Mid-Game Units", description: "Viable units for mid-game progression. Useful while saving summons for higher tiers.", entries: [
      { name: "Shadow Kunoichi (Dark)", tier: "B", description: "Stealth crit, single-target burst" },
      { name: "Tide Guardian (Water)", tier: "B", description: "Heal support, team shield" },
      { name: "Stone Colossus (Earth)", tier: "B", description: "Tank, damage reduction aura" },
    ]},
    { name: "C-Tier — Starter Units", description: "Free starter units. Use them to learn the game, then replace immediately.", entries: [
      { name: "Wind Scout (Air)", tier: "C", description: "Budget speed unit, scouting" },
      { name: "Flame Recruit (Fire)", tier: "C", description: "Starter unit, basic fire damage" },
      { name: "Aqua Squire (Water)", tier: "C", description: "Starter healer, single-target" },
    ]},
  ],
  detailCards: [
    { name: "Chrono Slayer (Time)", rank: "S-Tier #1", desc: "The undisputed king. Highest base DPS with a time-freeze ultimate that stops enemies for 4 seconds. Kill-based cooldown passive enables near-infinite ultimate chains at high wave density.", strengths: ["Highest raw DPS (3,200 ATK at max)","Time-freeze enables safe boss damage windows","Cooldown passive scales infinitely in waves","Pairs perfectly with Time Rewind trait"], weaknesses: ["Low base HP (8,500)","Requires high wave density for max value","Weak against freeze-immune bosses","Steep gem cost for full Mythic evolution"], bestUse: "Primary DPS in Infinite Mode. Pair with Frost Monarch (CC) and Tide Guardian (sustain) for wave 100+ pushes. Apply Time Rewind trait.", color: "#FF3D00" },
    { name: "Void Empress (Dark)", rank: "S-Tier #2", desc: "The premier AOE dealer. Ultimate creates a void rift dealing 2,800% ATK to all enemies. Self-heal restores 15% HP per kill, eliminating need for a dedicated healer in most content.", strengths: ["Massive AOE ultimate covers entire screen","Self-heal provides incredible sustain","High base HP (12,000)","Void Touch trait amplifies damage by 25% pen"], weaknesses: ["Long ultimate cooldown (25 sec base)","Lower single-target DPS vs Chrono Slayer","Dark element weak against Light bosses","Heal is kill-dependent"], bestUse: "AOE wave-clear specialist. Solo-carry with tank support or pair with Blaze Archon for burn synergy. Apply Void Touch trait.", color: "#FF3D00" },
    { name: "Blaze Archon (Fire)", rank: "A-Tier #3", desc: "Best non-Mythic DPS. Applies stacking burn DOTs (200% ATK/sec for 5s) that melt bosses and dense waves. Ultimate explodes all burning enemies for bonus damage.", strengths: ["Burn DOT provides consistent damage while dodging","Ultimate explosion scales with burning count","Accessible Legendary tier summon rate","No common elemental weakness"], weaknesses: ["Burn needs time to ramp up","Lower base ATK (2,400) vs Mythics","No self-sustain or defensive abilities","Burn can be cleansed by some bosses"], bestUse: "Secondary DPS alongside Chrono Slayer or Void Empress. Excellent in boss fights. Pair with Frost Monarch to keep enemies in burn radius.", color: "#FF8C00" },
    { name: "Storm Ronin (Lightning)", rank: "A-Tier #4", desc: "Speed-farming specialist. Team-wide +25% movement and attack speed buff. Chain attack bounces between 4 enemies for 180% ATK per hit.", strengths: ["Team speed buff improves farming by ~30%","Chain attack handles spread-out formations","Fast base movement (4.2) for dodging","God-Speed trait enables extreme attack speed"], weaknesses: ["Low base ATK (2,100)","Chain damage falls off vs single targets","Speed buff does not stack with other sources","Squishy (9,000 HP)"], bestUse: "Speed farming team leader. Pair with Shadow Kunoichi for max clear speed. Apply God-Speed trait. Swap out for boss fights.", color: "#FF8C00" },
    { name: "Frost Monarch (Ice)", rank: "A-Tier #5", desc: "Premier crowd-control support. Freezes enemies in a wide cone for 3 seconds. Defensive wall blocks all projectiles for 6 seconds — essential for high-wave Infinite Mode.", strengths: ["Best CC in the game (3s AOE freeze)","Defensive wall blocks all projectiles","Freeze enables easy critical hits","High base HP (14,000) for frontlining"], weaknesses: ["Low personal damage","Freeze duration halved on bosses","Defensive wall has 30s cooldown","Requires DPS teammates"], bestUse: "CC support in any team. Essential for Infinite Mode wave 80+. Pair with Chrono Slayer or Void Empress. Apply Cooldown- trait.", color: "#FF8C00" },
    { name: "Shadow Kunoichi (Dark)", rank: "B-Tier #6", desc: "High-risk, high-reward assassin. Enters stealth after 2s without taking damage. First attack from stealth deals 400% critical damage.", strengths: ["400% stealth crit one-shots most enemies","Highest single-target burst in B-Tier","Stealth provides brief invulnerability","Strong in boss fights"], weaknesses: ["Stealth breaks on any damage taken","No AOE damage","Low base HP (7,800)","Outclassed by Mythic DPS units"], bestUse: "Boss-killer for early/mid-game. Swap in for boss stages. Replace with Chrono Slayer or Void Empress once you pull a Mythic.", color: "#FFD700" },
    { name: "Tide Guardian (Water)", rank: "B-Tier #7", desc: "Most reliable healing support. Team-wide heal-over-time (8% max HP/sec for 8s = 64% total). Shield absorbs 5,000 damage.", strengths: ["Best sustained healing (64% total HP)","Shield prevents one-shot deaths","Team-wide healing supports full squad","Neutral elemental matchups"], weaknesses: ["Zero personal damage","Long cooldowns (heal 22s, shield 28s)","Heal-over-time cannot save from burst","Outshined by self-sustain units at high skill"], bestUse: "Sustain support for Infinite Mode. Pair with Chrono Slayer and Stone Colossus. Apply Cooldown- trait.", color: "#FFD700" },
    { name: "Stone Colossus (Earth)", rank: "B-Tier #8", desc: "Premier tank. Taunts all nearby enemies for 5s with 20% team damage reduction aura. Highest base HP (22,000).", strengths: ["Highest base HP (22,000)","Taunt redirects lethal attacks","20% damage reduction aura for team","Fortress trait adds defense and taunt radius"], weaknesses: ["Extremely low damage","Slow movement (2.8)","Taunt duration halved on bosses","Earth weak against Air enemies"], bestUse: "Frontline tank with Tide Guardian for unbreakable defense. Best in boss fights. Apply Fortress trait.", color: "#FFD700" },
    { name: "Wind Scout / Flame Recruit / Aqua Squire", rank: "C-Tier — Starter Units", desc: "Free starter units available to all new players. Serve their purpose in tutorials and early game but should be replaced immediately upon summoning any B-Tier or higher unit.", strengths: ["Free — available from the start","Low evolution costs","Good for learning team composition"], weaknesses: ["Extremely low base stats","Cannot compete past wave 20","No unique abilities or passives","Not worth investing resources into"], bestUse: "Tutorial and early-game only. Replace immediately upon pulling your first Rare or higher unit.", color: "#3A86FF" },
  ],
  teamComps: [
    { name: "Meta Infinite Team", units: "Chrono Slayer + Frost Monarch + Tide Guardian", desc: "Balanced DPS, CC, and sustain. Pushes past wave 100." },
    { name: "Speed Farm Team", units: "Storm Ronin + Shadow Kunoichi + Wind Scout", desc: "Maximum clear speed for gem farming. Weaker survivability." },
    { name: "Boss Killer Team", units: "Void Empress + Blaze Archon + Stone Colossus", desc: "High burst with tank support. Burn stacking synergy." },
    { name: "Budget Starter", units: "Blaze Archon + Tide Guardian + Ember Knight", desc: "Accessible team with no Mythic units. Solid through wave 60." },
  ],
  faq: [
    { question: "Which unit should I reroll for as a new player?", answer: "Chrono Slayer (S-Tier #1) is the best target — his time-freeze ultimate and high DPS carry all content. If you cannot pull a Mythic, Blaze Archon (A-Tier #3) is an excellent Legendary alternative with better summon rates." },
    { question: "Should I invest in B-Tier units or save?", answer: "Invest Evolution Stones in Epic-tier and above only. B-Tier units are useful mid-game but are eventually replaced. Save Awakening Cores and Legendary Trait Rolls exclusively for S/A-Tier units." },
    { question: "What is the best Infinite Mode team?", answer: "Chrono Slayer (DPS) + Frost Monarch (CC) + Tide Guardian (Sustain). Balanced damage, crowd control, and healing for consistent wave 100+ pushes. For speed farming: Storm Ronin + Shadow Kunoichi + Wind Scout." },
    { question: "How did Re:Rangers change unit rankings?", answer: "Mythic summon rates increased from 0.5% to 0.8%. Several Legendary/Epic units received stat buffs. Frost Monarch's freeze duration increased from 2.5s to 3s, solidifying her A-Tier position." },
  ],
  relatedGuides: [
    { label: "Trait Tier List", href: "/anime-rangers-x/trait-tier-list", description: "Best traits for each unit" },
    { label: "Evolution Guide", href: "/anime-rangers-x/evolution-guide", description: "Evolve your units efficiently" },
    { label: "Active Codes", href: "/anime-rangers-x/codes", description: "Get free Gems for summoning" },
  ],
};

export default data;
