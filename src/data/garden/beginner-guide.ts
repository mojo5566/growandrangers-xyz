import type { EvolutionPageData } from "../types";

const data: EvolutionPageData = {
  title: "Grow a Garden Beginner Guide",
  description: "Beginner walkthrough for Grow a Garden on Roblox. Learn how to plant your first crop, earn Coins, unlock mutations, hatch pets, and build a profitable farm in under 30 minutes.",
  updatedAt: "July 7, 2026",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Grow a Garden Beginner Guide", href: "/grow-a-garden/beginner-guide" },
  ],

  overview: {
    description: "Grow a Garden is a Roblox farming simulator where you plant crops, harvest them for coins, unlock powerful mutations to boost your yield, hatch pets for multipliers, and expand your farm into a thriving agricultural empire. This beginner guide walks you through everything you need to know to go from a bare plot of dirt to a profitable, efficient farm — covering the first 30 minutes of gameplay, key early-game decisions, resource management, and which systems to invest in first.",
    highlights: [
      "Start planting your first crops within 2 minutes of joining",
      "Earn your first 1,000 Coins in under 15 minutes with optimal crop selection",
      "Unlock the Mutation Station and roll your first mutation by the 30-minute mark",
      "Hatch your first pet for a passive coin multiplier",
      "Learn which early-game purchases give the highest return on investment",
      "Avoid the 5 most common mistakes that waste new players' resources",
    ],
  },

  stages: [
    { from: "Early Game (0-15 min)", mats: "Starter Plot + free seeds", stats: "Learn controls, plant first crops, earn first 1,000 Coins" },
    { from: "Mid Game (15-45 min)", mats: "x1,500 Coins + Mutation Station unlock", stats: "Buy second plot, roll first mutation, unlock pet system" },
    { from: "Late Game (45 min - 2 hrs)", mats: "x5,000 Coins + x50 Mutation Shards", stats: "Expand to 4+ plots, target B-Tier+ mutations, hatch mid-tier pets" },
    { from: "Endgame (2+ hrs)", mats: "x15,000 Coins + x200+ Shards", stats: "Full farm setup, S/A-Tier mutations, high-tier pet synergy" },
  ],
  totalCost: "Approximately 20,000+ Coins and 200+ Mutation Shards to reach a competitive mid-to-late-game farm",

  materials: [
    {
      name: "Coins",
      icon: "🪙",
      desc: "The primary currency. Earned by harvesting crops. Used to buy plots, seeds, pets, and upgrades.",
      sources: ["Harvesting crops (primary source)", "Redeeming promo codes (check our Codes page)", "Completing daily quests", "Selling unwanted mutations at the Trade Hub"],
      tip: "Never sit on idle coins. Always reinvest — buy another plot, upgrade your seeds, or hatch an egg. Coins sitting in your balance earn nothing. Compound growth through reinvestment is the key to scaling your farm.",
    },
    {
      name: "Mutation Shards",
      icon: "🔮",
      desc: "Special currency used exclusively at the Mutation Station to roll for crop mutations, which multiply your harvest value.",
      sources: ["Daily login rewards (3-5 shards per day)", "Promo codes (10-20 shards per drop)", "Seasonal events (20-50 shards per event)", "Trading with other players"],
      tip: "Save at least 50 Mutation Shards before rolling seriously. Single rolls have abysmal S-Tier odds (~1.2%). Bulk rolling 10 at once during a boosted event raises your effective S-Tier chance to roughly 11%. Never spend event-boosted shards on single yolo rolls.",
    },
    {
      name: "Pet Eggs",
      icon: "🥚",
      desc: "Hatchable eggs that produce pets with passive coin multipliers and special abilities. Higher-tier eggs have better odds for rare pets.",
      sources: ["Pet Shop (Basic Egg: 500 Coins, Rare Egg: 2,000 Coins, Legendary Egg: 10,000 Coins)", "Event rewards (seasonal exclusive eggs)", "Promo codes (occasional free egg drops)", "Trading (player-to-player)"],
      tip: "Start with 2-3 Basic Eggs to get your first pet multiplier online. Do not buy Legendary Eggs until you have at least a B-Tier mutation on your main plot — the 10,000 Coin cost is better spent on plot expansion early game.",
    },
    {
      name: "Double Harvest Boosts",
      icon: "⚡",
      desc: "Consumable item that doubles your next harvest yield. Extremely valuable when timed with high-value crops and S-Tier mutations.",
      sources: ["Promo codes (most common source)", "Daily spin wheel (rare prize)", "Seasonal battle pass rewards", "Premium shop (500 Coins each)"],
      tip: "Never pop a Double Harvest Boost on a C-Tier crop or without an active mutation. The optimal use case: wait for your Aurelian Crown (4.0x) plot to grow a Golden Wheat (480 base coins), then activate the boost for 3,840 coins in a single harvest.",
    },
  ],

  bestUnitsSteps: [
    { step: "1", title: "Plant Your First Crop", desc: "Upon joining, you will be placed in front of your starter plot. Open your seed inventory (default key: B) and select the free Wheat Seeds. Click on the plot to plant them. Wait 2 minutes for the crop to mature, then click to harvest. Congratulations — you just earned your first Coins." },
    { step: "2", title: "Buy a Second Plot", desc: "After 2-3 harvests of Wheat, you should have around 500-600 Coins. Head to the Farm Shop (marked with a tractor icon on the minimap) and purchase your second plot for 400 Coins. Having two plots doubles your passive income. Always prioritize plot expansion over cosmetics or decorations." },
    { step: "3", title: "Upgrade to Carrot Seeds", desc: "Wheat is a starter crop that sells for only 50 Coins. Once you have two plots running, invest in Carrot Seeds (100 Coin cost per seed, sells for 80 Coins — net +60 Coins per harvest compared to Wheat). The upgrade pays for itself in under 2 harvest cycles per plot." },
    { step: "4", title: "Unlock the Mutation Station", desc: "At 1,500 total Coins earned, the Mutation Station becomes available in the Lab building. This is the single most important building in the game. Spend your free starter Mutation Shards to roll your first mutation on your main plot. Even a C-Tier mutation is better than none." },
    { step: "5", title: "Hatch Your First Pet", desc: "Visit the Pet Shop and buy a Basic Egg for 500 Coins. Hatch it immediately. Even the most common pet (Common Prairie Dog, 1.1x coin multiplier) provides a permanent passive income boost that stacks with mutation bonuses. A pet is forever — mutations can be overwritten." },
    { step: "6", title: "Expand to Four Plots", desc: "Four plots is the sweet spot for mid-game farming. It balances income rate with manageable manual effort. Each additional plot costs progressively more (Plot 3: 800 Coins, Plot 4: 1,200 Coins). Prioritize getting four plots before spending heavily on mutations or high-tier eggs." },
    { step: "7", title: "Target a B-Tier Mutation", desc: "With four plots running and a pet multiplier active, save 50+ Mutation Shards and roll for a B-Tier mutation (Pyroclast Husk, Hoarfrost Corolla, or Igneous Spore). These offer 1.7x-2.2x multipliers and have a reasonable ~10-12% roll rate. Apply to your main plot first, then work on secondary plots." },
    { step: "8", title: "Scale to Endgame", desc: "Once you have four plots with B-Tier or better mutations, a mid-tier pet, and a comfortable coin income, you are ready for the endgame grind. Start saving for Legendary Eggs, target S-Tier mutations during boosted events, and optimize your farm layout for maximum profit per minute. Check our Crop Value List and Mutation Tier List for detailed optimization strategies." },
  ],

  priorityList: [
    { tier: "S", unit: "Expand Plots (up to 4)", reason: "Each plot is a permanent income multiplier. Going from 1 to 4 plots quadruples your earning potential. This is the single highest ROI investment in the entire game — no mutation, pet, or consumable comes close." },
    { tier: "S", unit: "First Mutation (any tier)", reason: "Even a C-Tier mutation at 1.2x is a 20% income boost on that plot. Your free starter shards make this essentially free. Do not leave your plot un-mutated." },
    { tier: "A", unit: "First Pet (Basic Egg)", reason: "A permanent passive multiplier that stacks with everything. 500 Coins for a 1.1x-1.3x permanent boost is incredible value. Hatch this immediately after unlocking the Mutation Station." },
    { tier: "A", unit: "Seed Upgrades (Wheat to Carrot to Berry)", reason: "Better seeds sell for more coins per harvest. Upgrade your seed tier whenever the cost is less than 5x the per-harvest profit increase. Carrot seeds pay for themselves in 2 harvest cycles." },
    { tier: "B", unit: "B-Tier Mutation (save 50+ Shards)", reason: "B-Tier mutations (1.7x-2.2x) are the sweet spot of affordability and power. Target Pyroclast Husk for speed farming or Hoarfrost/Igneous for seasonal play." },
    { tier: "B", unit: "Second Pet (Rare Egg)", reason: "Rare Eggs (2,000 Coins) offer 1.5x-2.5x multipliers. Only buy once you have 4 plots and a B-Tier mutation. Do not gamble on Legendary Eggs (10,000 Coins) until endgame." },
    { tier: "C", unit: "Cosmetics & Decorations", reason: "Purely aesthetic. Do not spend a single Coin on decorations until you have 4+ plots with B-Tier+ mutations. A pretty farm that earns 200 Coins per harvest is worse than an ugly farm earning 2,000." },
    { tier: "C", unit: "Legendary Eggs (early game)", reason: "10,000 Coins for a chance at a high-tier pet is a trap for new players. That same 10,000 Coins could buy 5 Rare Eggs or fund expanding from 4 to 6 plots. Only buy Legendary Eggs in the endgame when Coins are abundant." },
  ],

  mistakes: [
    { title: "Buying Cosmetics Before Plots", desc: "The single most common beginner mistake. The Farm Shop sells cute fences, decorative scarecrows, and themed plot skins. None of these generate a single Coin. Every Coin spent on cosmetics before you have 4 plots with B-Tier mutations is a Coin that could have been compounding through reinvestment. Decorate later — optimize first." },
    { title: "Spending Mutation Shards One at a Time", desc: "The Mutation Station allows single rolls for 1 shard. The S-Tier rate on a single roll is roughly 1.2%. You will almost certainly burn through your starter shards getting C-Tier mutations. Save to 50+ shards and bulk-roll during boosted events for much better odds." },
    { title: "Planting Crops Right Before Logging Off", desc: "Crops have a growth timer. If you plant Golden Wheat (8-minute grow time) and log off 2 minutes later, the crop will be ready when you return — but it will sit there earning nothing until you manually harvest. Always harvest all mature crops before logging off. Unharvested crops do not generate passive income." },
    { title: "Ignoring the Pet System Entirely", desc: "Some new players skip the Pet Shop because they think pets are an endgame luxury. A Basic Egg costs 500 Coins and provides a permanent multiplier. Even a 1.1x pet on a farm earning 1,000 Coins per harvest cycle generates an extra 100 Coins — the pet pays for itself in 5 cycles and then generates pure profit forever." },
    { title: "Overwriting a Good Mutation Without Saving Shards", desc: "Mutation overwrites are permanent with no refund. If you have a B-Tier Pyroclast Husk (2.2x) and roll an S-Tier Aurelian Crown (4.0x), great — overwrite it. But if you have Pyroclast Husk and roll a C-Tier Umbral Thorn (1.4x, night only), do not apply it. Always check your new roll before applying." },
    { title: "Buying Legendary Eggs Too Early", desc: "The 10,000 Coin Legendary Egg is seductive but dangerous for new players. The S-Tier pet rate is roughly 5%, meaning you would need to spend an average of 200,000 Coins to guarantee one S-Tier pet via Legendary Eggs. Meanwhile, 10,000 Coins could expand your farm from 4 to 6 plots — a guaranteed 50% income increase. Legendary Eggs are for players who already have nothing else to spend Coins on." },
  ],

  faq: [
    { question: "How long does it take to get started in Grow a Garden?", answer: "You can plant your first crop within 2 minutes of joining. Within 15 minutes, you should have your second plot and first seed upgrade. By the 30-45 minute mark, you can unlock the Mutation Station, roll your first mutation, and hatch your first pet. The game is designed to be immediately accessible with a smooth progression curve." },
    { question: "What is the best crop for beginners to plant?", answer: "Start with Wheat (free seeds) to learn the planting and harvesting cycle. After 2-3 harvests, upgrade to Carrot Seeds — they cost 100 Coins per seed but sell for 80 Coins (compared to Wheat's 50 Coins), giving you a 60% higher profit per harvest. Once you have 4 plots and a B-Tier mutation, transition to Berry Seeds (sell for 120 Coins) for maximum early-game profit." },
    { question: "Should I buy plots or mutations first?", answer: "Plots first, always. Your first two additional plots cost 400 and 800 Coins — together less than one Rare Egg. Each plot is a permanent income generator. Get to 4 plots before spending Mutation Shards seriously. Use your free starter shards on your best plot, but do not spend Coins on shards until you have at least 4 plots running." },
    { question: "How do I get Mutation Shards as a beginner?", answer: "Your primary early-game shard sources are: daily login rewards (3-5 shards per day), promo codes (10-20 shards — check our Codes page regularly), and the starter quest chain (10 free shards after completing the tutorial). Save every shard until you have 50+. Do not buy shards with Coins from the premium shop — that is a late-game efficiency optimization." },
    { question: "When should I start trading with other players?", answer: "Wait until you have a solid understanding of item values and at least one B-Tier mutation. The Trade Hub can be lucrative but is also where new players get scammed into trading S-Tier items for C-Tier cosmetics. Check our Crop Value List and Mutation Tier List to understand fair market values before making any trades." },
    { question: "Is Grow a Garden pay-to-win?", answer: "No. Every item, mutation, pet, and plot can be earned through gameplay without spending Robux. Premium currency purchases (extra shards, premium eggs) provide convenience but no exclusive power. A free-to-play player with optimal strategy will outperform a paying player with poor resource management every time. The game rewards knowledge and patience over wallet size." },
    { question: "What should I do if my crops keep dying?", answer: "Crops die from two causes: pest invasions (random event) and blight weather (seasonal). For pests, buy the Basic Scarecrow (200 Coins) which reduces pest chance by 50% on adjacent plots. For blight, the Basalt Carapace mutation (A-Tier) provides complete immunity. If neither is affordable yet, simply replant — early-game crops are cheap and the occasional loss is normal." },
    { question: "How often should I check my farm?", answer: "Early-game crops like Wheat and Carrots mature in 2-4 minutes, so active play is rewarded. Mid-game Berry crops take 5-6 minutes, giving you short windows to check other game systems. Endgame Golden Wheat takes 8 minutes. The game is designed for casual check-ins — there is no penalty for being away, but your crops stop earning until harvested. Use faster-growing crops if you plan to play actively." },
  ],

  relatedGuides: [
    { label: "Active Codes", href: "/grow-a-garden/codes", description: "Get free Coins, Mutation Shards, and pet eggs from promo codes" },
    { label: "Mutation Tier List", href: "/grow-a-garden/mutation-tier-list", description: "Every mutation ranked from S-Tier to C-Tier with detailed analysis" },
    { label: "Crop Value List", href: "/grow-a-garden/crop-value-list", description: "Most profitable crops ranked by coin yield and growth time" },
    { label: "Pet Tier List", href: "/grow-a-garden/pet-tier-list", description: "Best pets for coin multipliers and mutation synergy" },
  ],
};

export default data;
