import type { EvolutionPageData } from "../types";

const data: EvolutionPageData = {
  title: "Re:Rangers X Beginner Guide — How to Start & Progress Fast (July 2026)",
  description: "Complete beginner walkthrough for Re:Rangers X (formerly Anime Rangers X). Learn your first hour progression, best starter units, Gem farming, trait basics, team building, and how to evolve your first unit to Legendary.",
  updatedAt: "July 7, 2026",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Re:Rangers X Beginner Guide", href: "/anime-rangers-x/beginner-guide" },
  ],

  overview: {
    description: "Re:Rangers X (formerly known as Anime Rangers X) is a Roblox tower-defense RPG where you summon units, evolve them through five stages, equip powerful traits, and push through increasingly difficult waves of enemies. This beginner guide walks you through your first hour — from your free starter summon to evolving your first unit, understanding the trait system, and building a team capable of clearing wave 40+ in Infinite Mode.",
    highlights: [
      "Complete your first summon within 5 minutes of joining",
      "Learn which starter units to keep and which to replace immediately",
      "Earn your first 5,000 Gems through early-game missions and codes",
      "Evolve your main DPS to Rare within the first hour",
      "Understand the trait system and which traits matter for beginners",
      "Build a basic 4-unit team capable of reaching wave 40",
      "48 active promo codes available — redeem CATCHINGUP for a free Asto (Half) unit + 150 Trait Rerolls + 20K Gems",
      "1st Anniversary event ongoing — earn Anniversary Coins from codes and events",
    ],
  },

  stages: [
    { from: "Tutorial (0-5 min)", mats: "Free starter unit", stats: "Complete tutorial, claim free summon, get Wind Scout / Flame Recruit / Aqua Squire" },
    { from: "First Hour (5-60 min)", mats: "~10,000 Gems + 48 active codes", stats: "Summon 3-5 units, evolve main DPS to Rare, equip first trait, reach wave 20" },
    { from: "Mid Game (1-5 hrs)", mats: "~50,000 Gems + 200 Evolution Stones", stats: "Target A/S-Tier units, evolve main DPS to Epic/Legendary, unlock Trait Slot 2, reach wave 60" },
    { from: "Endgame (5+ hrs)", mats: "~100,000 Gems + 500 Stones + Awakening Core", stats: "Evolve Chrono Slayer or Void Empress to Mythic, unlock Trait Slot 3, push wave 100+" },
  ],
  totalCost: "Approximately 92,000 Gems + 920 Evolution Stones + 1 Awakening Core to fully evolve one unit from Common to Mythic",

  materials: [
    {
      name: "Gems",
      icon: "💎",
      desc: "The primary currency. Used for summoning units, evolving units, and purchasing items from the shop. Absolutely essential — never waste Gems on low-value purchases.",
      sources: ["Active promo codes (300-500 Gems per code — check our Codes page)", "Daily achievements (100-200 Gems/day)", "Infinite Mode milestone rewards", "Weekend events with bonus Gem drops", "Battle Pass free tier"],
      tip: "Never spend Gems on Common or Rare summon banners. Save for Mythic/Legendary banners and evolution costs. A single Mythic evolution costs 50,000 Gems alone — every Gem counts. Promo codes are your best early-game source.",
    },
    {
      name: "Evolution Stones",
      icon: "⛏️",
      desc: "Required alongside Gems for every evolution stage. Farmed primarily through Infinite Mode and daily missions.",
      sources: ["Infinite Mode past wave 40 (5-10 per clear)", "Daily missions (15-20 stones)", "Weekly boss raids (50+ on first clear)", "Event shops during seasonal events"],
      tip: "Farm Infinite Mode with speed units (Storm Ronin + Shadow Kunoichi) for maximum stones-per-hour. Daily missions are the most time-efficient source for casual players. Never spend stones on C-Tier starter units.",
    },
    {
      name: "Trait Rerolls",
      icon: "🎲",
      desc: "Consumable used to roll or reroll traits on your units. Each unit has trait slots unlocked through evolution. Traits can dramatically change a unit's effectiveness.",
      sources: ["Promo codes (ECLIPSE code gives 100 Trait Rerolls!)", "Daily login rewards", "Event shops", "Boss raid drops"],
      tip: "Save Trait Rerolls for your best units (S-Tier and A-Tier). Never reroll traits on C-Tier starter units — they will be replaced. Target Mythic traits (Time Rewind, God-Speed) for your main DPS and Legendary traits for supports.",
    },
    {
      name: "Awakening Core",
      icon: "🔮",
      desc: "The rarest resource in the game. Required exclusively for the final Legendary → Mythic evolution. Only one needed per unit.",
      sources: ["Legendary+ Boss Raid (~5% drop rate)", "Premium shop (100,000 Gems)", "Battle Pass tier 50 reward (one per season)"],
      tip: "This is an endgame resource — do not worry about it in your first hour. When you eventually get one, only use it on Chrono Slayer or Void Empress. A single Awakening Core represents weeks of farming.",
    },
    {
      name: "Anniversary Coins",
      icon: "🪙",
      desc: "Limited-time event currency from the 1st Anniversary celebration. Exchange in the anniversary shop for exclusive units, traits, and items. Obtainable from codes like SorryForAnniversary and AnimeMaintX.",
      sources: ["SorryForAnniversary code (9,000 coins)", "AnimeMaintX code (6,000 coins)", "1STANNIVERSARY! code (1,500 coins)", "Anniversary events"],
      tip: "Redeem all anniversary codes immediately — the coins expire when the event ends. Prioritize exclusive units and traits in the anniversary shop, as these will not return after the celebration. Stack with event rewards for maximum value.",
    },
  ],

  bestUnitsSteps: [
    { step: "1", title: "Complete the Tutorial & Claim Your Free Summon", desc: "The tutorial takes about 3 minutes and teaches basic controls — placing units, starting waves, and upgrading. At the end, you will receive one free summon. You will get Wind Scout (Air), Flame Recruit (Fire), or Aqua Squire (Water). All three are C-Tier starter units. Do not invest resources in them." },
    { step: "2", title: "Redeem All 48 Active Promo Codes Immediately", desc: "Start with CATCHINGUP (free Asto unit + 150 Trait Rerolls + 20K Gems), then FREEREROLLS! (10,000 Trait Rerolls), then SorryForAnniversary (9,000 Anniversary Coins). See our Codes page for the full list." },
    { step: "3", title: "Summon on the Current Mythic/Legendary Banner", desc: "With your starter Gems and code rewards (roughly 5,000-10,000 Gems), summon on the highest-tier banner available. Aim for at least one A-Tier or better unit. Blaze Archon (Fire, A-Tier) is the best non-Mythic pull for beginners — strong DPS with burn stacking. If you get Chrono Slayer or Void Empress, congratulations — build your entire team around them." },
    { step: "4", title: "Build Your First 4-Unit Team", desc: "A basic team needs: 1 Main DPS (Chrono Slayer > Void Empress > Blaze Archon > Storm Ronin), 1 CC/Control (Frost Monarch > any freeze unit), 1 Support/Healer (Tide Guardian > Aqua Squire), and 1 Flex slot (secondary DPS or tank like Stone Colossus). This composition handles waves 1-40 comfortably." },
    { step: "5", title: "Evolve Your Main DPS to Rare (and Beyond)", desc: "Your first evolution milestone. Spend 50 Evolution Stones + 5,000 Gems to evolve your main DPS from Common to Rare. This gives +50% base stats — a massive early power spike. Your main DPS should always be your highest-evolved unit. The priority order is: Main DPS → CC → Support → Flex." },
    { step: "6", title: "Equip Your First Trait", desc: "Each unit has at least one Trait Slot. Open the Traits menu on your main DPS and use Trait Rerolls to find a useful trait. For beginners, even an Epic trait (Cooldown-, Lifesteal) is a significant upgrade. Save Mythic and Legendary trait rolls for when you have a permanent S-Tier unit." },
    { step: "7", title: "Push Infinite Mode to Wave 40", desc: "Infinite Mode is your primary farming content. Waves 1-40 are achievable with a basic team and Rare evolution on your main DPS. Past wave 40, Evolution Stones start dropping. Set a goal of wave 40 in your first play session — this unlocks consistent stone farming." },
    { step: "8", title: "Target Your First Legendary Evolution", desc: "The Ultimate ability unlocks at Legendary tier (250 Stones + 25,000 Gems). This is the biggest power spike in the game. Your main DPS's Ultimate can clear entire waves. Save all resources until you can push your best unit to Legendary. Do not spread evolution across multiple units — one hyper-evolved carry beats five evenly-leveled units." },
  ],

  priorityList: [
    { tier: "S", unit: "Redeem All 48 Active Promo Codes (First 5 Minutes)", reason: "48 active codes (CATCHINGUP for free Asto unit, ECLIPSE, SACRIFICE, BUILTINMACRO) provide hundreds of Trait Rerolls, thousands of Gold, and other resources instantly. This completely transforms your early game. Do this before summoning anything." },
    { tier: "S", unit: "Main DPS Evolution (Rare → Epic → Legendary)", reason: "Your main DPS is your account's engine. Every evolution stage multiplies their stats. A Legendary main DPS with Ultimate unlocked can solo-carry through wave 60+. Resources spent on your main DPS are never wasted." },
    { tier: "A", unit: "Summon for A/S-Tier Units", reason: "Chrono Slayer (Time, S-Tier) and Void Empress (Dark, S-Tier) define the meta. Kirito and Goku (Anime Crossover S-Tier units) from crossover banners are also top summon targets. Blaze Archon (Fire, A-Tier) and Frost Monarch (Ice, A-Tier) are excellent accessible alternatives. One good summon changes your entire account trajectory." },
    { tier: "A", unit: "First Trait on Main DPS", reason: "Even an Epic trait (Cooldown- or Lifesteal) is a massive upgrade over an empty trait slot. Use the free Trait Rerolls from codes to find something useful. Do not chase Mythic traits until you have a permanent S-Tier unit." },
    { tier: "B", unit: "Support/CC Evolution (to Epic for Trait Slot 2)", reason: "Evolving Frost Monarch or Tide Guardian to Epic unlocks Trait Slot 2. A well-traited support dramatically improves team survivability. Lower priority than main DPS evolution." },
    { tier: "B", unit: "Infinite Mode Farming (Wave 40+)", reason: "Consistent Evolution Stone income is essential for mid-game progression. Push to wave 40 as soon as your team can handle it. Farm daily for steady stone accumulation." },
    { tier: "C", unit: "C-Tier Starter Units (Wind Scout, Flame Recruit, Aqua Squire)", reason: "Do not invest a single Evolution Stone, Gem, or Trait Reroll. These are replaced within hours. Any resources spent on them are permanently lost. Use them to learn the game, then bench them." },
    { tier: "C", unit: "Cosmetics & Non-Essential Shop Purchases", reason: "Every Gem spent on cosmetics is a Gem not spent on evolution. In the early game, Gems are precious — a 50,000 Gem Mythic evolution is always better than a cool skin for a unit you will replace next week." },
  ],

  mistakes: [
    { title: "Investing Resources in Starter Units", desc: "Wind Scout, Flame Recruit, and Aqua Squire are tutorial units designed to teach mechanics. They are outclassed by literally every summoned unit. Every Evolution Stone, Gem, or Trait Reroll spent on them is permanently wasted. Wait until you pull at least an Epic-tier unit before investing anything." },
    { title: "Spreading Evolution Across Too Many Units", desc: "Evolving 5 units to Rare costs 250 Stones + 25,000 Gems and gives you a mediocre team. Evolving 1 unit to Legendary costs the same and gives you a carry capable of soloing wave 60. Focus all resources on your main DPS first. A hyper-evolved carry beats a balanced team every time." },
    { title: "Summoning on Low-Tier Banners", desc: "Common and Rare banners have abysmal rates for good units. Save all Gems for Mythic and Legendary banners where S-Tier and A-Tier units actually drop. The difference between a Common banner pull (likely C-Tier) and a Mythic banner pull (chance at Chrono Slayer) is account-defining." },
    { title: "Using Trait Rerolls on Temporary Units", desc: "Trait Rerolls are a scarce resource. Using them on a Rare unit you will replace tomorrow is a waste. Save all Trait Rerolls until you have a permanent S-Tier or A-Tier unit. A God-Speed trait on Chrono Slayer is infinitely more valuable than a Rare trait on Flame Recruit." },
    { title: "Ignoring Elemental Matchups", desc: "Each unit and enemy has an element (Time, Dark, Fire, Lightning, Ice, Water, Earth, Air). Using the wrong element against a boss reduces damage significantly. Chrono Slayer (Time) is neutral against everything — one reason it is S-Tier. For other units, check the boss's element before deploying." },
    { title: "Evolving Before Checking the Current Meta", desc: "The Re:Rangers patch significantly rebalanced units. Pre-patch favorites may now be mediocre. Always check our Unit Tier List before committing major resources. Evolving a B-Tier unit to Legendary because it used to be S-Tier is a painful and expensive mistake." },
  ],

  faq: [
    { question: "What is the best starter unit in Re:Rangers X?", answer: "There is no good starter unit — Wind Scout, Flame Recruit, and Aqua Squire are all C-Tier and should be replaced as soon as possible. Your first summon from a Mythic or Legendary banner will determine your early game. Blaze Archon (Fire, A-Tier) is the best accessible unit for new players due to strong DPS and easy-to-use burn mechanics." },
    { question: "How do I get more Gems as a beginner?", answer: "Promo codes are your #1 source — codes like ECLIPSE and SACRIFICE provide hundreds of Gems instantly. Daily achievements give 100-200 Gems. Infinite Mode milestone rewards provide lump sums at waves 20, 40, 60, and beyond. Weekend events often have bonus Gem drops. Never spend Gems on Common/Rare banners." },
    { question: "Which unit should I evolve first?", answer: "Your main DPS — always. If you have Chrono Slayer or Void Empress, evolve them exclusively. If you have Blaze Archon or Storm Ronin, evolve them to Legendary for Ultimate unlock. Never evolve supports or tanks before your main DPS. The priority is: Main DPS → CC/Control → Support → Flex." },
    { question: "What are traits and when should I start using them?", answer: "Traits are equippable passive abilities that modify your units. Each unit has trait slots unlocked through evolution (Slot 1 at base, Slot 2 at Epic, Slot 3 at Mythic). Start using traits as soon as you have a permanent A-Tier or better unit. Use Trait Rerolls (from codes) to find useful traits. Target Cooldown- or Lifesteal for beginners." },
    { question: "How do I beat wave 40 in Infinite Mode?", answer: "With a Rare-evolved main DPS, a CC unit (Frost Monarch), and a support (Tide Guardian), wave 40 is achievable. Place your tankiest unit at the front, DPS behind, and support in the back. Upgrade your main DPS during the wave. Use CC abilities when elite enemies spawn. Past wave 40, Evolution Stones start dropping — this is your farming goal." },
    { question: "Should I save Gems or spend them immediately?", answer: "Save for Mythic/Legendary banners and evolution costs. A single Mythic evolution costs 50,000 Gems. Every Gem spent on a Common banner pull is a Gem not going toward your main DPS's power spike. Patience with Gems is the #1 trait of successful players." },
    { question: "What changed in the Re:Rangers update?", answer: "The Re:Rangers update (which renamed the game from Anime Rangers X) overhauled the trait system, rebalanced units, added Awakening Cores for Mythic evolution, and introduced new summon banners. Old codes from the Anime Rangers X era are now expired. Make sure you are using current Re:Rangers X codes." },
    { question: "How long does it take to reach endgame?", answer: "With optimal play and active code redemption, you can reach mid-game (Legendary main DPS, wave 60+) in 5-10 hours. Endgame (Mythic evolution, wave 100+) typically takes 20+ hours due to the Awakening Core bottleneck. Promo codes accelerate this dramatically — always check our Codes page before playing." },
    { question: "What is the 1st Anniversary event and how do I participate?", answer: "The 1st Anniversary celebration is a limited-time event featuring exclusive units, traits, and items. Participate by redeeming anniversary codes (SorryForAnniversary, AnimeMaintX, 1STANNIVERSARY!), earning Anniversary Coins from events, and visiting the anniversary shop. The event also introduced anime crossover units from Jujutsu Kaisen, One Piece, and Gachiakuta." },
  ],

  relatedGuides: [
    { label: "Active Codes", href: "/anime-rangers-x/codes", description: "Get free Gems, Trait Rerolls, and Gold from promo codes" },
    { label: "Unit Tier List", href: "/anime-rangers-x/unit-tier-list", description: "Every unit ranked from S-Tier to C-Tier" },
    { label: "Trait Tier List", href: "/anime-rangers-x/trait-tier-list", description: "Best traits for your evolved units" },
    { label: "Evolution Guide", href: "/anime-rangers-x/evolution-guide", description: "Full evolution costs and priority strategy" },
  ],
};

export default data;
