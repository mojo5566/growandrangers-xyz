import type { EvolutionPageData } from "../types";

const data: EvolutionPageData = {
  title: "Re:Rangers X Best Units Guide — Top DPS, Supports & Team Building (July 2026)",
  description: "Complete guide to the best units in Re:Rangers X. Learn which units to summon for, how to build the optimal 4-unit team, elemental synergies, evolution priority, and which units are worth your Gems and Evolution Stones.",
  updatedAt: "July 7, 2026",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Re:Rangers X Best Units Guide", href: "/anime-rangers-x/best-units" },
  ],

  overview: {
    description: "Your units define everything in Re:Rangers X — your wave clear speed, boss kill potential, Infinite Mode depth, and farming efficiency. A single S-Tier unit with proper evolution and traits can carry you through wave 60+ while a full team of poorly-invested C-Tier units struggles at wave 20. This guide covers which units to target, how to build around them, elemental synergies, team compositions for every game mode, and the evolution priority that maximizes your account's power.",
    highlights: [
      "Chrono Slayer and Void Empress are the two S-Tier Mythic units that define the endgame meta",
      "Blaze Archon is the best accessible A-Tier unit for new players — strong DPS, easy to use",
      "A 4-unit team needs: 1 Main DPS + 1 CC/Control + 1 Support + 1 Flex",
      "Elemental synergy matters — pairing complementary elements boosts team performance",
      "One hyper-evolved carry outperforms five evenly-leveled units every time",
      "Traits can double a unit's effectiveness — always fill trait slots on permanent units",
      "The 2026 anime crossover event is the biggest content drop of the year — Kirito (SAO) and Goku (Dragon Ball) are now S-Tier Mythics rivaling Chrono Slayer and Void Empress",
      "1st Anniversary event brings 48 active codes — CATCHINGUP grants free Asto (Half) unit",
    ],
  },

  stages: [
    { from: "Starter Units (0-5 min)", mats: "Free tutorial summon", stats: "Wind Scout / Flame Recruit / Aqua Squire — all C-Tier, all temporary" },
    { from: "First Summons (5-60 min)", mats: "~10,000 Gems from codes + missions", stats: "Target at least one A-Tier unit. Blaze Archon is ideal. Build first 4-unit team." },
    { from: "Mid-Game Team (1-5 hrs)", mats: "~250 Evolution Stones + 50,000 Gems", stats: "Evolve main DPS to Legendary. Unlock Ultimate. Add Frost Monarch for CC. Push wave 60+." },
    { from: "Endgame Team (5+ hrs)", mats: "500 Stones + 50,000 Gems + Awakening Core", stats: "Evolve Chrono Slayer or Void Empress to Mythic. Unlock Trait Slot 3. Equip Mythic traits. Push wave 100+." },
  ],
  totalCost: "Fully building one S-Tier unit from Common to Mythic with optimal traits: 920 Evolution Stones + 92,000 Gems + 1 Awakening Core + ~200 Trait Rerolls",

  materials: [
    {
      name: "Chrono Slayer (Time, S-Tier)",
      icon: "⏱️",
      desc: "The undisputed best unit in the game. Highest base DPS (3,200 ATK at max) with a time-freeze ultimate that stops enemies for 4 seconds. Kill-based cooldown passive enables near-infinite ultimate chains at high wave density. Low base HP (8,500) is its only weakness.",
      sources: ["Mythic summon banner (low rate)", "Limited event banners (boosted rates)"],
      tip: "If you pull Chrono Slayer, build your entire account around it. Evolve to Mythic first. Equip Time Rewind trait for cooldown reset synergy. Pair with Frost Monarch (CC) and Tide Guardian (sustain). This unit alone can carry wave 100+.",
    },
    {
      name: "Void Empress (Dark, S-Tier)",
      icon: "🌑",
      desc: "The premier AOE dealer. Ultimate creates a void rift dealing 2,800% ATK to all enemies on screen. Self-heal restores 15% HP per kill, eliminating the need for a dedicated healer. High base HP (12,000) makes her much tankier than Chrono Slayer.",
      sources: ["Mythic summon banner (low rate)", "Limited event banners (boosted rates)"],
      tip: "The best solo-carry unit for new players due to self-heal. Pair with Stone Colossus (tank) and Blaze Archon (secondary DPS for burn synergy). Equip Void Touch trait for 25% defense penetration. Excels in boss fights with single-target damage windows.",
    },
    {
      name: "Blaze Archon (Fire, A-Tier)",
      icon: "🔥",
      desc: "Best non-Mythic DPS. Applies stacking burn DOTs (200% ATK/sec for 5s) that melt bosses and dense waves. Ultimate explodes all burning enemies for massive bonus damage. Accessible Legendary summon rate makes this the most realistic A-Tier target.",
      sources: ["Legendary summon banner (decent rate)", "Rare banner (low chance)", "Event rewards"],
      tip: "The ideal first 'real' unit for new players. Accessible, strong, and easy to use. Evolve to Legendary first for Ultimate unlock. Pair with Frost Monarch to keep enemies grouped in burn radius. If you do not have Chrono Slayer or Void Empress, this is your main DPS.",
    },
    {
      name: "Frost Monarch (Ice, A-Tier)",
      icon: "❄️",
      desc: "The premier crowd-control unit. Freezes enemies in place, creates defensive ice walls, and slows boss movement speed. Essential for pushing high waves where enemy density overwhelms pure DPS. Synergizes with every team composition.",
      sources: ["Legendary summon banner", "Rare banner (low chance)", "Event shops"],
      tip: "The most versatile support unit. Evolve to Epic for Trait Slot 2, equip Cooldown- trait, and freeze enemies on cooldown. Works with every DPS — keeps enemies in Chrono Slayer's attack range, groups them for Void Empress AOE, and holds them in Blaze Archon's burn radius.",
    },
    {
      name: "Kirito (Dark, S-Tier) — SAO Crossover",
      icon: "⚔️",
      desc: "The new top single-target DPS from the 2026 Sword Art Online crossover event. A Mythic Dark unit whose dual-blade burst combo rivals Chrono Slayer for pure boss-melting potential. High base ATK with a cooldown-resetting critical passive that triggers on kill, enabling back-to-back burst windows. The anime crossover event is the biggest content drop of 2026 — Kirito is its flagship unit.",
      sources: ["Limited SAO crossover banner (time-gated)", "Crossover event shop (exchange tokens)"],
      tip: "If you pull Kirito, treat him like Chrono Slayer — build your entire account around him. Evolve to Mythic first for Trait Slot 3. Pair with Frost Monarch (CC) and Tide Guardian (sustain) since he has no self-heal. His burst windows are shorter than Chrono Slayer's, so time your other units' ultimates to land inside Kirito's burst. Rivals Chrono Slayer for the #1 single-target DPS slot.",
    },
    {
      name: "Goku (Fire, S-Tier) — Dragon Ball Crossover",
      icon: "🌋",
      desc: "The new best AOE fire DPS from the 2026 Dragon Ball crossover event. A Mythic Fire unit whose screen-wide Kamehameha-style ultimate rivals Void Empress for AOE damage. Stacking charge mechanic increases damage the longer he stays in combat, rewarding sustained Infinite Mode runs. The anime crossover event is the biggest content drop of 2026 — Goku is the premier AOE carry for fire-weak content.",
      sources: ["Limited Dragon Ball crossover banner (time-gated)", "Crossover event shop (exchange tokens)"],
      tip: "If you pull Goku, build around him the same way you would Void Empress. Evolve to Mythic first for Trait Slot 3. His charge mechanic rewards long waves — pair with Frost Monarch (CC) to keep enemies grouped while he ramps up. Equip God-Speed trait to shorten his charge window. Rivals Void Empress for the #1 AOE DPS slot and is the clear pick against Ice-weak bosses.",
    },
    {
      name: "Naruto (Wind, A-Tier) — Naruto Crossover",
      icon: "🍃",
      desc: "Hybrid DPS/CC unit from the Naruto crossover. Rasengan ability deals AoE damage with a chance to stun. Excellent in modes requiring crowd control. Pairs well with Frost Monarch for chain CC. Best for Infinite Mode and Boss Raids.",
      sources: ["Limited Naruto crossover banner (time-gated)", "Crossover event shop (exchange tokens)"],
      tip: "Evolve to Legendary using 8,000 Gems. Pair with Sharingan trait for maximum CC uptime.",
    },
    {
      name: "Asto (Half) (Dark, A-Tier)",
      icon: "🌑",
      desc: "Exclusive unit obtainable for free via the CATCHINGUP code. Solid all-rounder with balanced DPS and utility. Perfect for new players catching up to veterans. Best for all modes.",
      sources: ["CATCHINGUP promo code (free)"],
      tip: "Redeem code CATCHINGUP before it expires. Asto scales well into mid-game content.",
    },
  ],

  bestUnitsSteps: [
    { step: "1", title: "Redeem Codes & Summon on Mythic/Legendary Banners", desc: "Before anything else, redeem all 48 active promo codes. CATCHINGUP gives a free Asto (Half) unit + 150 Trait Rerolls + 20K Gems. ECLIPSE gives 100 Trait Rerolls. SACRIFICE gives 100,000 Gold. Then spend your Gems on the highest-tier banner available. Your first few summons determine your early game trajectory. If you get Chrono Slayer or Void Empress, stop summoning and invest everything in that unit." },
    { step: "2", title: "Build Your Core 4-Unit Team", desc: "Every team needs four roles filled: Main DPS (Chrono Slayer > Void Empress > Blaze Archon > Storm Ronin), Crowd Control (Frost Monarch > any freeze unit), Support/Healer (Tide Guardian > Aqua Squire), and Flex (secondary DPS like Shadow Kunoichi or tank like Stone Colossus). This composition handles all content through wave 60." },
    { step: "3", title: "Hyper-Evolve Your Main DPS", desc: "Do not spread evolution resources. Pick your best DPS unit and push it as high as possible. Rare (+50% stats) is your first milestone. Epic (+75% stats, Trait Slot 2) is your mid-game goal. Legendary (+100% stats, Ultimate unlock) is where the unit truly comes online. One Legendary DPS outperforms four Rare units." },
    { step: "4", title: "Fill Trait Slots on Permanent Units", desc: "Every evolution stage unlocks or expands trait capability. Slot 1 at base, Slot 2 at Epic, Slot 3 at Mythic. For your main DPS, target Time Rewind or God-Speed (Mythic). For supports, target Monarch or Cooldown- (Legendary/Epic). Never leave a trait slot empty — even a Rare trait is infinitely better than nothing." },
    { step: "5", title: "Add Elemental Synergy to Your Team", desc: "Elements matter. Chrono Slayer (Time) is neutral against everything — one reason it is S-Tier. Void Empress (Dark) is weak against Light bosses. Blaze Archon (Fire) melts Ice enemies. Frost Monarch (Ice) freezes Fire enemies. Build your team with complementary elements. Avoid stacking two units of the same element — diversify for coverage." },
    { step: "6", title: "Build Mode-Specific Teams", desc: "Different modes demand different compositions. Infinite Mode: DPS + CC + Support + Tank for sustained waves. Boss Raid: DPS + DPS + Support + Flex for maximum single-target damage. Speed Farming: Storm Ronin + Shadow Kunoichi for fast clear times. Having 6-8 built units lets you swap teams for each mode." },
    { step: "7", title: "Push for Mythic Evolution (Endgame)", desc: "The final grind. 500 Evolution Stones + 50,000 Gems + 1 Awakening Core. Only commit to Mythic evolution on a unit you are certain will be permanent — Chrono Slayer or Void Empress. The +150% stat boost and Trait Slot 3 unlock represent the largest single power spike in the game. This is your account's crowning achievement." },
  ],

  priorityList: [
    { tier: "S", unit: "Chrono Slayer (Time, S-Tier)", reason: "Highest DPS, time-freeze ultimate, cooldown reset passive. The best unit in the game by a significant margin. Build your entire account around this unit if you pull it. Pairs with Time Rewind trait for infinite ultimate chains." },
    { tier: "S", unit: "Void Empress (Dark, S-Tier)", reason: "Best AOE damage, self-heal sustain, high base HP. The ideal solo-carry for new players. Pairs with Void Touch trait. Excels in boss fights and wave clear. If you pull both Mythics, use Chrono Slayer as main DPS and Void Empress as secondary." },
    { tier: "S", unit: "Kirito (Dark, S-Tier) — SAO Crossover", reason: "The new top single-target DPS from the 2026 SAO crossover, rivaling Chrono Slayer. Mythic Dark unit with a cooldown-resetting critical passive on kill. Part of the anime crossover event — the biggest content drop of 2026. Build around him exactly as you would Chrono Slayer. Pairs with Frost Monarch and Tide Guardian." },
    { tier: "S", unit: "Goku (Fire, S-Tier) — Dragon Ball Crossover", reason: "The new best AOE fire DPS from the 2026 Dragon Ball crossover, rivaling Void Empress. Mythic Fire unit with a stacking charge mechanic that rewards sustained Infinite Mode runs. The clear AOE pick against Ice-weak bosses. Part of the anime crossover event — the biggest content drop of 2026." },
    { tier: "A", unit: "Blaze Archon (Fire, A-Tier)", reason: "Best accessible DPS. Burn stacking melts bosses. Legendary summon rate means you will actually get this unit. Evolve to Legendary for Ultimate. The realistic main DPS for players who have not pulled a Mythic." },
    { tier: "A", unit: "Frost Monarch (Ice, A-Tier)", reason: "Essential crowd control. Freeze, ice wall, slow. Makes high-wave content possible. Every serious team needs CC, and Frost Monarch is the best in slot. Evolve to Epic for Trait Slot 2, equip Cooldown-." },
    { tier: "A", unit: "Storm Ronin (Lightning, A-Tier)", reason: "Speed farming specialist. Chain lightning attack hits multiple enemies. Best unit for fast Infinite Mode clears to farm Evolution Stones. Pair with Shadow Kunoichi for maximum speed." },
    { tier: "A", unit: "Asto (Half) (Dark, A-Tier)", reason: "Free unit from CATCHINGUP code — excellent value for new players" },
    { tier: "B", unit: "Tide Guardian (Water, B-Tier)", reason: "Best accessible healer. Team shield and heal-over-time. Essential for sustained Infinite Mode runs. Outclassed by Void Empress self-heal but fills the support role for Chrono Slayer teams." },
    { tier: "B", unit: "Shadow Kunoichi (Dark, B-Tier)", reason: "Single-target burst DPS with stealth crit. Excellent secondary DPS for boss fights. Pairs with Storm Ronin for speed farming. Fragile — needs tank or CC support." },
    { tier: "B", unit: "Stone Colossus (Earth, B-Tier)", reason: "Best tank with damage reduction aura. Good flex slot for fragile DPS compositions. Protects Chrono Slayer and Shadow Kunoichi. Evolve to Epic, not higher — the stats are not worth the investment." },
    { tier: "C", unit: "Wind Scout / Flame Recruit / Aqua Squire (C-Tier)", reason: "Starter units. Use them for the tutorial, then bench them permanently. Do not spend a single resource. They exist to teach mechanics, not to clear content." },
  ],

  mistakes: [
    { title: "Spending Resources on Starter Units", desc: "Wind Scout, Flame Recruit, and Aqua Squire are replaced within your first hour. Every Evolution Stone, Gem, or Trait Reroll spent on them is permanently lost. Wait until you pull at least an Epic-tier unit from a banner before investing anything. Even a B-Tier summoned unit outperforms a maxed-out starter." },
    { title: "Building a 'Balanced' Team Instead of a Hyper-Carry", desc: "New players instinctively want to level all units evenly. This is the wrong approach. One Legendary-evolved Chrono Slayer with Ultimate unlocked can solo-clear wave 60. Five Rare-evolved units cannot clear wave 30. Hyper-focus your main DPS. Your other units exist to support the carry, not to share the spotlight." },
    { title: "Summoning on Common or Rare Banners", desc: "Common and Rare summon banners have terrible drop rates for good units. Save every Gem for Mythic and Legendary banners. A single Mythic banner pull has a chance at Chrono Slayer or Void Empress — units that define your account. A Common banner pull will give you a C-Tier unit you could have gotten for free." },
    { title: "Ignoring Elemental Matchups", desc: "Elements are not cosmetic. Chrono Slayer (Time) is neutral — a major reason for its S-Tier ranking. Void Empress (Dark) takes bonus damage from Light enemies. Fire beats Ice, Ice beats Fire. Check boss elements before deploying and swap units accordingly. A wrong-element A-Tier unit performs worse than a correct-element B-Tier unit." },
    { title: "Leaving Trait Slots Empty", desc: "Trait Slots are free power. Even a Common trait provides some benefit. An empty slot provides zero. Use Trait Rerolls from codes (ECLIPSE gives 100) to fill every slot on every permanent unit. Upgrade traits over time — a full set of Epic traits on your team is a massive power spike that costs nothing but the rerolls you already have." },
    { title: "Using Awakening Cores on Non-S-Tier Units", desc: "Awakening Cores have a ~5% drop rate from Legendary+ Boss Raids. You will likely obtain only 1-2 per month. If you use one on Blaze Archon and then pull Chrono Slayer next week, you have wasted a month of farming. Only awaken units you are 100% certain will be permanent members of your roster. This means Chrono Slayer or Void Empress — nothing else." },
  ],

  faq: [
    { question: "What is the best unit in Re:Rangers X?", answer: "Chrono Slayer (Time, S-Tier) is the best unit by every metric — highest DPS (3,200 ATK), time-freeze ultimate, and a cooldown reset passive that enables infinite ultimate chains at high wave density. Void Empress (Dark, S-Tier) is the runner-up with unmatched AOE damage and self-heal sustain. If you have either, build around them." },
    { question: "Which unit should a new player aim for first?", answer: "Blaze Archon (Fire, A-Tier) is the most realistic target. It is available from Legendary banners with a decent pull rate, has strong DPS with burn stacking, and is easy to use. If you get Chrono Slayer or Void Empress from a lucky Mythic pull, pivot to them immediately — they are in a different league." },
    { question: "How many units should I build?", answer: "Focus on 4 core units initially: 1 Main DPS, 1 CC, 1 Support, 1 Flex. Hyper-evolve your DPS first. Once your DPS is Legendary or Mythic, expand to 6-8 units for mode-specific teams. Do not spread resources across 10+ units — you will have a roster of mediocre units instead of one powerhouse." },
    { question: "What is the best team composition for Infinite Mode?", answer: "Chrono Slayer (main DPS) + Frost Monarch (CC) + Tide Guardian (heal/support) + Stone Colossus (tank). This comp handles waves 1-100 with proper evolution and traits. For speed farming, swap to Storm Ronin + Shadow Kunoichi + Frost Monarch + flex." },
    { question: "How important are elemental matchups?", answer: "Very. Chrono Slayer (Time) is S-Tier partly because Time is neutral against all elements — it never deals reduced damage. Void Empress (Dark) is strong against most elements but weak to Light. Always check the boss's element before deploying. A wrong-element S-Tier unit can be out-damaged by a correct-element A-Tier unit." },
    { question: "How do I get Mythic units like Chrono Slayer?", answer: "Mythic summon banners have the highest drop rates. Save all Gems for these banners. Limited event banners sometimes have boosted Mythic rates. There is no pity system — you could get Chrono Slayer on your first pull or your hundredth. Promo codes (check our Codes page) provide Gems to fund more summons." },
    { question: "When should I stop summoning and start evolving?", answer: "Once you have a solid main DPS (Blaze Archon or better) and a CC unit (Frost Monarch or equivalent), stop summoning. Redirect all Gems to evolution costs. A Legendary-evolved Blaze Archon outperforms a base-level Chrono Slayer. Evolution provides guaranteed power — summoning is RNG." },
    { question: "Should I keep duplicate units?", answer: "No. Duplicate units can be traded for Evolution Stones or Gems at the Exchange. There is no benefit to owning two of the same unit — you can only deploy one copy per team. Exchange duplicates immediately and reinvest the resources into evolving your main team." },
    { question: "How do I get Asto (Half)?", answer: "Asto (Half) is an exclusive unit obtainable by redeeming the CATCHINGUP promo code. The code also grants 150 Trait Rerolls, 20,000 Gems, and 100,000 Gold. It is designed as a catch-up mechanic for newer players." },
  ],

  relatedGuides: [
    { label: "Unit Tier List", href: "/anime-rangers-x/unit-tier-list", description: "Every unit ranked from S-Tier to C-Tier with stats" },
    { label: "Evolution Guide", href: "/anime-rangers-x/evolution-guide", description: "Full evolution costs, materials, and priority order" },
    { label: "Trait Tier List", href: "/anime-rangers-x/trait-tier-list", description: "Best traits for every unit and role" },
    { label: "Active Codes", href: "/anime-rangers-x/codes", description: "Get free Gems and Trait Rerolls from promo codes" },
  ],
};

export default data;
