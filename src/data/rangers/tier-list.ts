import type { TierListPageData } from "../types";

const data: TierListPageData = {
  title: "Re:Rangers X Tier List — Units & Traits",
  description:
    "Complete Re:Rangers X tier list ranking every unit from S-Tier to C-Tier. Includes strengths, weaknesses, beginner recommendations, team compositions, and Infinite Mode advice.",
  updatedAt: "July 7, 2026",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Anime Rangers X Tier List", href: "/anime-rangers-x/tier-list" },
  ],

  tierExplanation: [
    { tier: "S", color: "#FF3D00", label: "Meta-Defining — Must Have", desc: "The most powerful units in the game. Build your entire team strategy around them. Essential for Infinite Mode wave 80+ and competitive leaderboards." },
    { tier: "A", color: "#FF8C00", label: "Excellent — Core Team", desc: "Strong Legendary and Epic units with excellent summon rates. Form the backbone of mid-to-endgame teams. Worth investing Awakening Cores." },
    { tier: "B", color: "#FFD700", label: "Solid — Situational Power", desc: "Viable alternatives for mid-game progression. Useful while saving gems for higher tier summons. Niche power in specific content." },
    { tier: "C", color: "#3A86FF", label: "Starter — Replace Early", desc: "Free tutorial units available from the start. Low base stats and no unique abilities. Replace immediately after your first Rare+ summon." },
  ],

  tiers: [
    {
      name: "S-Tier — Meta-Defining Units",
      description: "Mythic units that define the endgame meta, now featuring 2026 Anime Crossover units. Highest DPS, game-changing ultimates, and the best scaling in Infinite Mode.",
      entries: [
        { name: "Chrono Slayer (Time)", tier: "S", description: "Best DPS, time-freeze ultimate, infinite scaling cooldown passive" },
        { name: "Void Empress (Dark)", tier: "S", description: "AOE nuke covering entire screen, self-heal sustain, highest base HP among DPS" },
        { name: "Kirito (Dark)", tier: "S", description: "2026 Anime Crossover — SAO Dual Wield single-target burst, highest sustained DPS after Chrono Slayer" },
        { name: "Goku (Fire)", tier: "S", description: "2026 Anime Crossover — DBZ Spirit Bomb ultimate, stacking ATK buff passive for scaling damage" },
        { name: "Asuna (Lightning)", tier: "S", description: "2026 Anime Crossover — SAO speed-based rapier DPS, lightning-fast attack chains" },
        { name: "Asto (Full)", tier: "S", description: "Anniversary Code Unit — evolution of Asto (Half) from CATCHINGUP code, S-Tier performance after evolution" },
      ],
    },
    {
      name: "A-Tier — Excellent Units",
      description: "Legendary and Epic units accessible through normal summons. Easier to obtain than Mythics and form competitive teams through wave 80+.",
      entries: [
        { name: "Blaze Archon (Fire)", tier: "A", description: "Stacking burn DOTs, boss-killing ultimate explosion" },
        { name: "Storm Ronin (Lightning)", tier: "A", description: "Speed buff support, chain lightning multi-target" },
        { name: "Frost Monarch (Ice)", tier: "A", description: "Freeze crowd control, defensive wall for team protection" },
        { name: "Naruto (Air)", tier: "A", description: "2026 Anime Crossover — Naruto shadow clone ultimate, multi-target air CC" },
        { name: "Sasuke (Lightning)", tier: "A", description: "2026 Anime Crossover — Naruto lightning chidori burst, high single-target DPS" },
        { name: "Vegeta (Fire)", tier: "A", description: "2026 Anime Crossover — DBZ galick gun AOE, aggressive fire burst DPS" },
        { name: "Luffy (Earth)", tier: "A", description: "2026 Anime Crossover — One Piece gear-shift tank, stretchy AOE melee" },
        { name: "Ichigo (Dark)", tier: "A", description: "2026 Anime Crossover — Bleach Bankai burst, hybrid AOE/single-target dark DPS" },
        { name: "Zoro (Air)", tier: "A", description: "2026 Anime Crossover — One Piece three-sword style, multi-hit air DPS" },
        { name: "Gojo (Light)", tier: "A", description: "JJK Crossover — Domain Expansion full-screen AoE stun, premier crowd control" },
        { name: "Yuji (Dark)", tier: "A", description: "JJK Crossover — Sukuna vessel hybrid DPS, balanced offense" },
      ],
    },
    {
      name: "B-Tier — Solid Mid-Game Units",
      description: "Strong mid-game options with specific niches. Useful while saving gems for higher tier summons. Some B-tier units remain viable in specific Infinite Mode comps.",
      entries: [
        { name: "Shadow Kunoichi (Dark)", tier: "B", description: "Stealth assassin, 400% critical burst damage" },
        { name: "Tide Guardian (Water)", tier: "B", description: "Best team healer, 64% total HP heal-over-time" },
        { name: "Stone Colossus (Earth)", tier: "B", description: "Premier tank, taunt + 20% team damage reduction" },
        { name: "Gon (Earth)", tier: "B", description: "2026 Anime Crossover — HxH jajanken rock-paper-scissors flex burst, adaptive earth DPS" },
        { name: "Killua (Lightning)", tier: "B", description: "2026 HxH crossover — lightning godspeed, rapid chain lightning DPS" },
        { name: "Asto (Half)", tier: "B", description: "Free Code Unit — obtained via CATCHINGUP code, balanced all-rounder that evolves into Asto (Full)" },
      ],
    },
    {
      name: "C-Tier — Starter Units",
      description: "Free starter units to learn the game. Low stats and no unique passives — replace immediately upon your first summon.",
      entries: [
        { name: "Wind Scout (Air)", tier: "C", description: "Budget speed unit, map scouting" },
        { name: "Flame Recruit (Fire)", tier: "C", description: "Basic fire damage, no passives" },
        { name: "Aqua Squire (Water)", tier: "C", description: "Single-target starter heal" },
      ],
    },
  ],

  detailCards: [
    // S-TIER
    {
      name: "Chrono Slayer (Time)",
      rank: "S-Tier #1 — Best Overall",
      desc: "Chrono Slayer is the undisputed best unit in Anime Rangers X. His time-freeze ultimate stops all enemies for 4 seconds, creating safe damage windows against even the toughest bosses. His unique kill-based cooldown passive reduces ultimate cooldown by 1 second per kill, enabling near-infinite ultimate chains at high wave density in Infinite Mode. At max level with full Mythic evolution, he reaches 3,200 ATK — the highest base DPS in the game.",
      strengths: ["Highest raw DPS in the game (3,200 ATK at max evolution)", "Time-freeze ultimate creates 4-second safe damage windows", "Kill-based cooldown passive enables infinite ultimate chains", "Pairs perfectly with Time Rewind trait for double ultimate casts"],
      weaknesses: ["Low base HP (8,500) — fragile without support", "Requires high wave density in Infinite Mode for max passive value", "Weak against freeze-immune bosses in event content", "Steep gem cost (15,000) for full Mythic evolution path"],
      bestUse: "Primary DPS in all content. Best team: Chrono Slayer (DPS) + Frost Monarch (CC) + Tide Guardian (Sustain). Apply Time Rewind trait for double ultimate casts during boss fights.",
      color: "#FF3D00",
    },
    {
      name: "Void Empress (Dark)",
      rank: "S-Tier #2 — AOE Queen",
      desc: "Void Empress is the premier area-of-effect damage dealer. Her ultimate creates a void rift dealing 2,800% ATK to every enemy on screen — the largest AOE in the game. Her self-heal passive restores 15% HP per kill, giving her incredible sustain without a dedicated healer. With 12,000 base HP, she is tanky enough to survive mistakes that would kill other DPS units. At 25 seconds base, her ultimate cooldown is the longest in the game, requiring careful timing.",
      strengths: ["Largest AOE ultimate (2,800% ATK to all enemies)", "Self-heal (15% HP per kill) eliminates need for healer", "High base HP (12,000) — tankiest DPS unit", "Void Touch trait adds 25% defense penetration"],
      weaknesses: ["Longest ultimate cooldown (25 seconds base)", "Lower single-target DPS compared to Chrono Slayer", "Dark element is weak against Light-type bosses", "Self-heal is kill-dependent — struggles on single-target fights"],
      bestUse: "AOE wave-clear specialist for Infinite Mode. Pair with Blaze Archon for stacking burn synergy. Apply Void Touch trait for 25% defense penetration against armored bosses.",
      color: "#FF3D00",
    },
    {
      name: "Kirito (Dark)",
      rank: "S-Tier #3 — Single-Target Burst",
      desc: "Kirito is the centerpiece of the 2026 SAO Anime Crossover and the highest single-target burst DPS in the game after Chrono Slayer. His Dual Wield passive splits each attack into two hits at 75% ATK each — a 50% total damage increase that scales multiplicatively with attack speed buffs. His ultimate, Starburst Stream, unleashes 16 consecutive strikes totaling 4,200% ATK against a single target, the strongest single-target ultimate in Anime Rangers X. With the new Dual Wield trait equipped, his dual-hit passive procs on every attack including ultimate hits, doubling the effective ultimate multiplier. A must-pull for any player focused on boss-killing content.",
      strengths: ["Highest single-target burst after Chrono Slayer (4,200% ATK ultimate)", "Dual Wield passive — +50% effective damage on every attack", "Dual Wield trait doubles ultimate hit count for absurd burst", "2026 SAO crossover — limited availability, prioritized for Mythic summons"],
      weaknesses: ["Purely single-target — weak in dense wave content", "No self-sustain or defensive abilities", "Dark element weak against Light bosses", "Dual Wield trait is Mythic-rarity — extremely rare roll"],
      bestUse: "Primary single-target DPS in boss content. Pair with Frost Monarch (CC) + Tide Guardian (Sustain). Apply Dual Wield trait for ultimate hit-doubling. 2026 SAO crossover — best used alongside Asuna for SAO team synergy bonuses.",
      color: "#FF3D00",
    },
    {
      name: "Goku (Fire)",
      rank: "S-Tier #4 — Stacking Hyper-Carry",
      desc: "Goku is the 2026 Dragon Ball crossover's flagship unit and the premier scaling hyper-carry in Anime Rangers X. His signature passive, Saiyan Pride, grants a permanent +5% ATK buff per kill — stacking infinitely across an entire Infinite Mode run. By wave 50, a well-fed Goku easily surpasses 5,000 effective ATK, outscaling even Chrono Slayer in prolonged content. His Spirit Bomb ultimate deals 3,500% ATK in a massive AOE, and the new Spirit Bomb trait reduces its cooldown by 30% and adds a 10% max HP true damage proc. A uniquely powerful unit for Infinite Mode pushing where wave density enables the stacking passive to snowball.",
      strengths: ["Infinite stacking +5% ATK per kill — best late-game scaling in the game", "3,500% ATK Spirit Bomb ultimate is the strongest AOE nuke", "Spirit Bomb trait adds cooldown reduction + true damage proc", "2026 Dragon Ball crossover — high Mythic summon priority"],
      weaknesses: ["Stacks reset on unit death — extremely punishing", "Ramps slowly — weak in early waves and short stages", "No defensive passives or sustain — needs heavy team support", "Spirit Bomb trait is Legendary-rarity — significant investment required"],
      bestUse: "Scaling hyper-carry for extended Infinite Mode pushes. Pair with Stone Colossus (taunt protection) + Tide Guardian (sustain) to prevent death and preserve stacks. Apply Spirit Bomb trait for ultimate cooldown reduction. 2026 DBZ crossover — pairs thematically with Vegeta for Saiyan team bonuses.",
      color: "#FF3D00",
    },
    // A-TIER
    {
      name: "Blaze Archon (Fire)",
      rank: "A-Tier #3 — Best Non-Mythic",
      desc: "Blaze Archon is the strongest non-Mythic DPS unit and forms the core of budget-friendly competitive teams. His attacks apply a stacking burn (200% ATK/sec for 5 seconds) that melts bosses and dense waves. The ultimate explodes all burning enemies, dealing bonus damage scaling with burn stack count. At Legendary rarity, he has a significantly higher summon rate (3.2%) compared to Mythics (0.8%), making him the most accessible high-tier DPS for free-to-play players.",
      strengths: ["Burn DOT provides consistent damage while dodging attacks", "Ultimate explosion scales with number of burning enemies", "Accessible Legendary summon rate (3.2%)", "No common elemental weakness against most content"],
      weaknesses: ["Burn damage takes time to ramp up (5 seconds)", "Lower base ATK (2,400) compared to Mythic units", "No self-sustain or defensive abilities", "Burn can be cleansed by certain event bosses"],
      bestUse: "Best non-Mythic DPS. Secondary DPS alongside Chrono Slayer. Excellent boss-killer when paired with Frost Monarch (CC keeps enemies in burn radius).",
      color: "#FF8C00",
    },
    {
      name: "Storm Ronin (Lightning)",
      rank: "A-Tier #4 — Speed Demon",
      desc: "Storm Ronin is the premier speed support unit. His team-wide speed buff increases movement and attack speed by 25%, accelerating all farming activities. His chain lightning attack hits up to 3 nearby enemies, providing solid multi-target damage at 2,100 base ATK. The 25% speed buff stacks multiplicatively with other speed bonuses, making him a staple in gem farming teams where clear speed determines efficiency.",
      strengths: ["Team-wide 25% speed buff (attack + movement)", "Chain lightning hits up to 3 targets per attack", "Speed buff stacks with other bonuses", "Excellent for speed farming and gem grinding"],
      weaknesses: ["Lower personal DPS without speed buff active", "Chain lightning has damage falloff per bounce", "Lightning element weak against Earth bosses", "Lacks crowd control or team sustain"],
      bestUse: "Core unit in speed farming teams. Pair with Shadow Kunoichi for maximum clear speed or add Tide Guardian for sustained farming. Apply God-Speed trait to amplify speed buff.",
      color: "#FF8C00",
    },
    {
      name: "Frost Monarch (Ice)",
      rank: "A-Tier #5 — CC Queen",
      desc: "Frost Monarch provides the best crowd control in the game. Her freeze ability immobilizes enemies for 3 seconds (up from 2.5s after the Re:Rangers update). Her defensive wall blocks all incoming projectiles for 5 seconds, creating safe zones during boss ultimate attacks. While her personal damage is low (1,800 ATK), her CC value is unmatched — no other unit can neutralize boss mechanics as effectively. Essential for Infinite Mode wave 80+.",
      strengths: ["3-second AOE freeze — best CC in the game", "Defensive wall blocks all projectiles for 5 seconds", "Irreplaceable for Infinite Mode wave 80+ pushes", "CC enables DPS units to maximize damage safely"],
      weaknesses: ["Low personal damage (1,800 ATK)", "Freeze duration halved (1.5s) on bosses", "Defensive wall has 30-second cooldown", "Requires strong DPS teammates to capitalize on CC windows"],
      bestUse: "CC support in all team compositions. Essential for Infinite Mode. Pair with Chrono Slayer or Void Empress. Apply Cooldown Reduction trait for more frequent freezes.",
      color: "#FF8C00",
    },
    {
      name: "Naruto (Air)",
      rank: "A-Tier — Shadow Clone CC",
      desc: "Naruto is the 2026 Naruto crossover's flagship unit and the premier Air-element crowd-control DPS. His signature Multi-Shadow Clone Jutsu ultimate spawns up to 8 shadow clones that each deal 280% ATK and apply a 1-second stagger — totaling 2,240% ATK plus 8 seconds of total enemy CC. This makes him a unique hybrid DPS/CC unit, capable of locking down entire waves while still dealing strong damage. His Rasengan trait, new with the crossover, adds a stacking 5% damage bonus per clone spawned, snowballing his damage in extended fights. A versatile A-Tier pick that brings both damage and CC utility to any team.",
      strengths: ["Shadow Clone ultimate — 2,240% ATK + 8 seconds of total CC", "Hybrid DPS/CC role — fills two team slots in one", "Rasengan trait stacks damage per clone spawned", "2026 Naruto crossover — pairs thematically with Sasuke for Team 7 bonuses"],
      weaknesses: ["Stagger CC is weaker than Frost Monarch's hard freeze", "Lower personal damage than dedicated A-Tier DPS units", "Air element weak against Earth bosses", "Clone AI can scatter enemies, making follow-up AOE harder"],
      bestUse: "Hybrid DPS/CC in any team needing both damage and crowd control. Pair with Goku (DPS) + Tide Guardian (sustain) for a balanced crossover team. Apply Rasengan trait for stacking clone damage. 2026 Naruto crossover — pairs thematically with Sasuke for Team 7 synergy.",
      color: "#FF8C00",
    },
    {
      name: "Gojo",
      rank: "A-Tier — JJK Crossover",
      desc: "Jujutsu Kaisen crossover unit with Domain Expansion AoE CC. Top-tier crowd control unit that stuns entire waves.",
      strengths: ["Full-screen AoE stun", "Excellent in Infinite Mode", "Synergizes with JJK team"],
      weaknesses: ["Long cooldown on Domain Expansion", "Requires JJK event materials to evolve"],
      bestUse: "Crowd control specialist for Infinite Mode. Pair with Yuji for JJK team synergy. Apply Cooldown Reduction trait for more frequent Domain Expansion casts.",
      color: "#FF8C00",
    },
    // B-TIER
    {
      name: "Shadow Kunoichi (Dark)",
      rank: "B-Tier #6 — Assassin",
      desc: "A high-risk, high-reward assassin that excels in single-target elimination. After 2 seconds without taking damage, she enters stealth and her next attack deals 400% critical damage — enough to one-shot most non-boss enemies. Her stealth also provides brief invulnerability, useful for avoiding lethal boss mechanics. Low base HP (7,800) means any mistake is punishing. Outclassed by S-Tier Mythics in endgame but remains a strong mid-game carry.",
      strengths: ["400% stealth critical one-shots most enemies", "Highest single-target burst damage in B-Tier", "Stealth provides brief invulnerability frames", "Strong in boss fight stages"],
      weaknesses: ["Stealth breaks on any damage taken", "No AOE damage for wave clearing", "Low base HP (7,800) — fragile", "Outclassed by Mythic DPS at endgame"],
      bestUse: "Boss-killer for mid-game. Swap in for boss stages. Replace with Chrono Slayer or Void Empress upon pulling a Mythic. Pairs well with Stone Colossus taunt for safe stealth setup.",
      color: "#FFD700",
    },
    {
      name: "Tide Guardian (Water)",
      rank: "B-Tier #7 — Best Healer",
      desc: "The most reliable healing support in Anime Rangers X. Her team-wide heal-over-time restores 8% max HP per second for 8 seconds (64% total HP). Her shield absorbs 5,000 damage, preventing one-shots that would kill squishier units. While she contributes zero personal damage, her sustain enables DPS units to survive through extended Infinite Mode waves. Outshined by self-sustain units (Void Empress) at high skill levels.",
      strengths: ["Best sustained team healing (64% total HP over 8s)", "5,000 HP shield prevents lethal burst damage", "Team-wide healing supports the full squad", "Neutral elemental matchups — no hard counters"],
      weaknesses: ["Zero personal damage output", "Long cooldowns (heal 22s, shield 28s)", "Heal-over-time cannot save from instant kill attacks", "Outshined by self-sustain units at endgame"],
      bestUse: "Sustain support for Infinite Mode teams. Pair with Chrono Slayer + Stone Colossus for unbreakable defense. Apply Cooldown Reduction trait for more frequent heals.",
      color: "#FFD700",
    },
    {
      name: "Stone Colossus (Earth)",
      rank: "B-Tier #8 — Best Tank",
      desc: "The premier tank unit with the highest base HP in the game (22,000). His taunt forces all nearby enemies to attack him for 5 seconds, redirecting lethal damage away from fragile DPS units. His passive aura provides 20% team-wide damage reduction. While he deals negligible damage, his defensive utility is unmatched in B-Tier. Slow movement speed (2.8) is his primary drawback.",
      strengths: ["Highest base HP in the game (22,000)", "5-second taunt redirects lethal damage", "20% team-wide damage reduction passive aura", "Fortress trait adds defense bonus and extended taunt radius"],
      weaknesses: ["Extremely low damage output", "Slowest movement speed (2.8)", "Taunt duration halved on bosses (2.5s)", "Earth element weak against Air enemies"],
      bestUse: "Frontline tank with Tide Guardian for maximum team survivability. Best in boss fights and Infinite Mode. Apply Fortress trait for enhanced taunt radius and defense.",
      color: "#FFD700",
    },
    {
      name: "Asto (Half)",
      rank: "B-Tier — Free Code Unit",
      desc: "Exclusive free unit from the CATCHINGUP code. Balanced stats make it a solid all-rounder. Evolves into Asto (Full) for S-Tier performance.",
      strengths: ["Free from code — no gacha needed", "Balanced DPS and utility", "Evolves into S-Tier Asto (Full)"],
      weaknesses: ["Base form is only B-Tier", "Evolution requires Cursed Fingers from JJK codes"],
      bestUse: "Budget all-rounder for new players. Evolve into Asto (Full) using Cursed Fingers from JJK codes for S-Tier performance. Pair with Kirito + Goku for an Anniversary Catch-Up Team.",
      color: "#FFD700",
    },
    // C-TIER (combined)
    {
      name: "C-Tier Starter Units",
      rank: "C-Tier — Replace Immediately",
      desc: "Wind Scout, Flame Recruit, and Aqua Squire are the three free starter units available to all new players. They serve their purpose in the tutorial but have extremely low base stats (800–1,100 ATK, 5,000–6,500 HP) and no unique abilities or passives. They cannot compete past wave 20 in any mode. Do not invest any Evolution Stones, Awakening Cores, or Trait Rolls into these units — save all resources for B-Tier or higher pulls.",
      strengths: ["Free — available immediately from the start", "Low evolution costs but not worth the investment", "Helpful for learning basic game mechanics"],
      weaknesses: ["Extremely low base stats (max ~1,100 ATK)", "Cannot compete past wave 20 in any mode", "No unique abilities, passives, or traits", "Waste of resources if evolved or awakened"],
      bestUse: "Tutorial and first 10 waves only. Replace immediately upon pulling any Rare+ unit from your first 10-summon. Do not invest resources.",
      color: "#3A86FF",
    },
  ],

  // Beginner recommendations
  beginnerPicks: [
    {
      name: "Blaze Archon (Fire)",
      why: "Best unit for new players — Legendary rarity with a 3.2% summon rate means you are likely to pull him early. Strong DPS with burn DOTs that melt bosses while you learn dodge mechanics. No complex ultimate timing required.",
      replacement: "Replace with Chrono Slayer or Void Empress when you pull a Mythic",
    },
    {
      name: "Storm Ronin (Lightning)",
      why: "Speed buff makes all farming faster. New players benefit enormously from the 25% move and attack speed — it helps you clear stages faster, earn gems quicker, and summon more units.",
      replacement: "Keep in your team even at endgame for speed farming; replace DPS slot with Mythic",
    },
    {
      name: "Tide Guardian (Water)",
      why: "Survivability is the biggest challenge for new players. Tide Guardian's 64% total heal makes early Infinite Mode and boss fights much more forgiving while you learn mechanics.",
      replacement: "Keep if you do not have Void Empress self-sustain; otherwise replace with another DPS",
    },
  ],

  // Progression advice
  progressionAdvice: [
    {
      stage: "Early (Waves 1–30)",
      targetUnits: "Blaze Archon + Tide Guardian + any C-Tier filler",
      goal: "Complete tutorial. Focus on summoning with free gems. Prioritize pulling any Epic or above unit. Do not spend Evolution Stones yet.",
    },
    {
      stage: "Mid (Waves 30–60)",
      targetUnits: "Blaze Archon + Storm Ronin + Tide Guardian or Frost Monarch",
      goal: "Build a 3-unit team of Legendary/Epic quality. Start evolving your Blaze Archon. Save Awakening Cores for S-Tier pulls. Begin Infinite Mode farming.",
    },
    {
      stage: "Late (Waves 60–90)",
      targetUnits: "1 Mythic DPS + Blaze Archon or Storm Ronin + Frost Monarch or Tide Guardian",
      goal: "Pull your first Mythic unit. Focus all resources (Evolution Stones, Awakening Cores, Trait Rolls) on that Mythic. Push Infinite Mode past wave 80 for increased gem earnings.",
    },
    {
      stage: "Endgame (Wave 90+)",
      targetUnits: "Chrono Slayer + Void Empress + Frost Monarch or Tide Guardian",
      goal: "Assemble the meta Infinite Mode team. Max evolve both Mythics. Apply S-Tier traits (Time Rewind on Chrono Slayer, Void Touch on Void Empress). Compete on leaderboards.",
    },
  ],

  teamComps: [
    {
      name: "Meta Infinite Team",
      units: "Chrono Slayer + Frost Monarch + Tide Guardian",
      desc: "The gold standard for Infinite Mode. Balanced DPS (Chrono Slayer), crowd control (Frost Monarch), and sustain (Tide Guardian). Reliably pushes past wave 100 with max evolution.",
    },
    {
      name: "Double Mythic Offense",
      units: "Chrono Slayer + Void Empress + Frost Monarch",
      desc: "Maximum damage output with CC support. Void Empress handles AOE waves while Chrono Slayer focuses single-target DPS on bosses. Frost Monarch freezes create safe damage windows. Requires skilled dodge play — no dedicated healer.",
    },
    {
      name: "Speed Farm Team",
      units: "Storm Ronin + Shadow Kunoichi + Blaze Archon",
      desc: "Optimized for gem farming speed. Storm Ronin buffs attack speed, Shadow Kunoichi one-shots elites with stealth crits, Blaze Archon burns down waves. Clears stages 30% faster than balanced teams.",
    },
    {
      name: "Budget Starter Team",
      units: "Blaze Archon + Tide Guardian + Frost Monarch",
      desc: "Zero Mythic units required. Solid through wave 75 in Infinite Mode. Blaze Archon DPS, Tide Guardian sustain, Frost Monarch CC. Perfect for free-to-play players building their gem savings.",
    },
    {
      name: "Boss Killer Team",
      units: "Void Empress + Blaze Archon + Stone Colossus",
      desc: "High single-target burst with tank support. Blaze Archon burn stacks amplify Void Empress ultimate damage. Stone Colossus taunt redirects boss attacks. Best for event boss content.",
    },
    {
      name: "Anime Crossover Team",
      units: "Kirito + Goku + Asuna",
      desc: "Maximum DPS with no CC or sustain. Pure damage race team for event content. Kirito handles single-target burst, Goku stacks ATK over the run, Asuna covers spread targets. Bring your own dodge skills — there is no safety net.",
    },
    {
      name: "Anniversary Catch-Up Team",
      units: "Asto (Half) + Kirito + Goku + Flex",
      desc: "Budget team using free code units. Asto from CATCHINGUP code + crossover DPS units. Perfect for new players.",
    },
  ],

  strategyTips: [
    "Save all Awakening Cores for S-Tier units — never waste them on B or C tier",
    "Reroll your account until you pull at least one Legendary (Blaze Archon or Storm Ronin) in your first 10-summon",
    "Trait rolls are permanent — only apply S-Tier traits to S-Tier units",
    "Farm Infinite Mode during 2x Gem events for maximum summon currency efficiency",
  ],

  faq: [
    {
      question: "Which unit should I reroll for as a new player?",
      answer:
        "Target Blaze Archon (A-Tier Legendary) in your first 10-summon — his 3.2% rate makes him the most accessible strong DPS. If you are patient enough for multiple rerolls, Chrono Slayer (0.8% Mythic rate) is the ultimate prize. Never settle for a full C-Tier starter account — even one Legendary makes a massive difference in early progression.",
    },
    {
      question: "Is the Anime Rangers X tier list the same after the Re:Rangers update?",
      answer:
        "The core tier rankings remain stable post-Re:Rangers. Key changes: Mythic summon rates increased from 0.5% to 0.8%, making S-Tier units more accessible. Frost Monarch's freeze duration increased from 2.5s to 3s, solidifying her A-Tier CC role. Several Legendary and Epic units received stat buffs. Our tier list reflects all June 2026 balance changes.",
    },
    {
      question: "What is the best Infinite Mode team?",
      answer:
        "Meta Infinite Team: Chrono Slayer (DPS) + Frost Monarch (CC) + Tide Guardian (Sustain). This balanced composition covers damage, crowd control, and healing — the three pillars of Infinite Mode success. For experienced players with good dodge mechanics: swap Tide Guardian for Void Empress (Double Mythic Offense) for maximum wave clear speed.",
    },
    {
      question: "Should I evolve B-Tier units or save resources?",
      answer:
        "Evolve B-Tier units only if you have not pulled an A-Tier or S-Tier replacement and need immediate power. Do not spend Awakening Cores or high-tier Evolution Stones on B-Tier units — save them for Legendary and Mythic rarities. A level 80 evolved Blaze Archon outperforms a level 60 base Chrono Slayer, but resources spent on B-Tier are permanently locked and cannot be recovered.",
    },
    {
      question: "How important are traits for unit rankings?",
      answer:
        "Traits significantly amplify unit performance but do not change tier placement alone. An S-Tier unit with a C-Tier trait is still better than an A-Tier unit with an S-Tier trait due to base stat differences. The best traits for each S-Tier unit: Time Rewind (Chrono Slayer), Void Touch (Void Empress). See our Trait Tier List for the full trait ranking.",
    },
    {
      question: "Can I reach endgame as a free-to-play player?",
      answer:
        "Yes. The Re:Rangers update significantly improved F2P accessibility with higher Mythic summon rates (0.8%) and increased free gem income from daily missions and Infinite Mode. A dedicated F2P player can assemble a full Meta Infinite Team in approximately 4–6 weeks of consistent play. Focus on event gem bonuses and avoid spending gems on anything except unit summons.",
    },
    {
      question: "What gems should I save for summons?",
      answer:
        "Always save for the 10-summon bundle (2,700 gems = 10% discount vs single summons). Do not spend gems on cosmetics, stamina refills, or instant completes — all gems should go into unit summons until you have at least two S-Tier or A-Tier units at max evolution. After assembling your core team, spend excess gems on Trait Rolls for S-Tier units.",
    },
    {
      question: "What is the 2026 Anime Crossover update?",
      answer:
        "The 2026 Anime Crossover update is a limited-time event that added 13+ crossover units from 8 franchises including SAO, DBZ, Naruto, One Piece, Bleach, HxH, Jujutsu Kaisen, and Gachiakuta — featuring units like Kirito, Asuna, Goku, Vegeta, Naruto, Sasuke, Luffy, Zoro, Ichigo, Gon, Killua, Gojo, and Yuji. It also introduced 7 new crossover traits including the Mythic-rarity Dual Wield and Sharingan. Crossover units and traits are only available from the limited-time Anime Crossover banner — pool your gems and prioritize the S-Tier Mythics (Kirito, Goku, Asuna) before the banner ends.",
    },
    {
      question: "How do I get Asto?",
      answer:
        "Asto (Half) is a free unit from the CATCHINGUP promo code. The code also gives 150 Trait Rerolls, 20,000 Gems, and 100,000 Gold. Evolve Asto (Half) into Asto (Full) for S-Tier performance using Cursed Fingers from JJK codes.",
    },
  ],

  relatedGuides: [
    {
      label: "Unit Tier List (Quick Reference)",
      href: "/anime-rangers-x/unit-tier-list",
      description: "Quick reference table of all units ranked by tier",
    },
    {
      label: "Trait Tier List",
      href: "/anime-rangers-x/trait-tier-list",
      description: "Best traits for every unit in the game",
    },
    {
      label: "Evolution Guide",
      href: "/anime-rangers-x/evolution-guide",
      description: "Efficient evolution paths and material farming",
    },
    {
      label: "Active Codes",
      href: "/anime-rangers-x/codes",
      description: "Free gems for unit summons",
    },
    {
      label: "Beginner Guide",
      href: "/anime-rangers-x/beginner-guide",
      description: "First-hour progression and starter tips",
    },
    {
      label: "Team Guide",
      href: "/anime-rangers-x/team-guide",
      description: "Best team compositions for every game mode",
    },
  ],
};

export default data;
