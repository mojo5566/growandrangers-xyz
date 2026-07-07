import type { ValueListPageData } from "../types";
import { crops, getCropsByTier } from "./database/crops";

function buildValueListData(): ValueListPageData {
  const sTierCrops = getCropsByTier("S");
  const aTierCrops = getCropsByTier("A");
  const bTierCrops = getCropsByTier("B");
  const cTierCrops = getCropsByTier("C");

  const allCropsSorted = [...crops].sort((a, b) => b.coinsPerMinute - a.coinsPerMinute);

  return {
    title: "Grow a Garden Value List (July 2026) — Best Crops Ranked",
    description:
      "Complete Grow a Garden value list ranking all crops by coins, growth time, seasonal availability, and profit-per-minute. Includes beginner, mid-game, and endgame farming strategies with mutation and pet stacking calculations.",
    updatedAt: "June 9, 2026",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Grow a Garden Value List", href: "/grow-a-garden/value-list" },
    ],

    // Introduction
    introduction:
      "The Grow a Garden value list is your essential reference for maximizing coin income. Each crop has a base selling value, unique growth cycle, and seasonal availability that determines where it belongs in your farming rotation. Whether you are a beginner planting your first Basic Potato or an endgame player stacking Golden Wheat with S-tier mutations and pets, this guide ranks every crop and shows you exactly how to build the most profitable farm possible.",
    valueListUses: [
      "Compare crop profit-per-minute to choose your main plot crops",
      "Plan seasonal rotations to maximize the +20% seasonal bonus",
      "Calculate mutation + pet stacking potential for endgame profits",
      "Determine which crops to phase out as you unlock better seeds",
      "Optimize active vs AFK farming based on crop growth cycles",
    ],

    // Tier list crops with full details
    tierCrops: {
      S: sTierCrops.map((c) => ({
        name: c.name,
        coins: c.coins,
        growthTime: c.growthTime,
        season: c.season,
        coinsPerMinute: c.coinsPerMinute,
        description: c.description,
        recommendedUse:
          c.id === "golden-wheat"
            ? "Main plots year-round. The undisputed best crop for active farmers who can harvest every 3 minutes."
            : "Main plots for semi-AFK players. Check every 5 minutes for consistent high-value harvests without constant attention.",
      })),
      A: aTierCrops.map((c) => ({
        name: c.name,
        coins: c.coins,
        growthTime: c.growthTime,
        season: c.season,
        coinsPerMinute: c.coinsPerMinute,
        description: c.description,
        recommendedUse:
          c.season === "Autumn"
            ? "Plant on secondary plots during Autumn for the +20% seasonal bonus. Rotate to all-season crops in other seasons."
            : c.season === "Winter"
              ? "Winter specialist. Pair with Frost Wolf Pup pet for maximum Winter farming output."
              : "Summer specialist at 80 coins/min. Fast growth rewards active players. Best Summer crop available.",
      })),
      B: bTierCrops.map((c) => ({
        name: c.name,
        coins: c.coins,
        growthTime: c.growthTime,
        season: c.season,
        coinsPerMinute: c.coinsPerMinute,
        description: c.description,
        recommendedUse:
          c.id === "lucky-carrot"
            ? "Fastest B-tier crop. Use on secondary plots in Spring for high-throughput farming. Requires frequent attention."
            : c.id === "moonflower"
              ? "Best AFK crop. Plant and check back in 10 minutes. Ideal for passive income while doing other activities."
              : "Summer alternative. Weaker than Magma Pepper but viable if you have not unlocked A-tier seeds yet.",
      })),
      C: cTierCrops.map((c) => ({
        name: c.name,
        coins: c.coins,
        growthTime: c.growthTime,
        season: c.season,
        coinsPerMinute: c.coinsPerMinute,
        description: c.description,
        recommendedUse:
          c.id === "wild-grass"
            ? "Free starter seed only. Replace immediately — every other crop earns more coins per action."
            : c.id === "basic-potato"
              ? "Fast tutorial crop. Good for learning game mechanics. Phase out for Lucky Carrot or Golden Wheat."
              : "Speed-challenge crop for experienced players. Impractical for sustained farming due to 1-min cycle.",
      })),
    },

    // Beginner section
    beginnerCrops: [
      {
        name: "Basic Potato",
        why: "Fast 30-second growth cycle lets you learn harvesting mechanics quickly. 100 coins per harvest builds your first capital for seed upgrades.",
        priority: 1,
      },
      {
        name: "Wild Grass",
        why: "Free starter seed with zero investment. Plant to fill empty plots while saving coins for better seeds.",
        priority: 2,
      },
      {
        name: "Sun Tomato",
        why: "Solid 200 coins per harvest in Summer. The fastest coin-per-minute theoretical rate in the game at 200, though the 1-minute cycle demands constant attention.",
        priority: 3,
      },
    ],

    // Mid-game section
    midGameCrops: [
      {
        name: "Lucky Carrot",
        why: "140 coins-per-minute at only 2-minute growth cycles. The best Spring crop for active mid-game players building toward S-tier seeds.",
        priority: 1,
      },
      {
        name: "Moonflower",
        why: "10-minute growth cycle at 26 coins-per-minute. Low effort, consistent income. Ideal for mid-game players who want passive income while focusing on other activities.",
        priority: 2,
      },
      {
        name: "Blaze Berry",
        why: "80 coins-per-minute Summer crop. Bridges the gap before unlocking Magma Pepper. Fast 3-minute growth keeps you engaged.",
        priority: 3,
      },
    ],

    // End-game section
    endgameCrops: [
      {
        name: "Golden Wheat",
        why: "160 coins-per-minute, all-season, 3-minute cycle. With S-tier mutation (4x) and S-tier pet (5x), a single harvest yields 9,600 coins. The ultimate farming crop.",
        priority: 1,
      },
      {
        name: "Crystal Berry",
        why: "84 coins-per-minute with a comfortable 5-minute cycle. Perfect for endgame players who want high profits without the 3-minute attention requirement of Golden Wheat.",
        priority: 2,
      },
      {
        name: "Magma Pepper",
        why: "80 coins-per-minute Summer specialist. When your main plots are full of Golden Wheat, use secondary plots for seasonal A-tier crops to capture the +20% bonus.",
        priority: 3,
      },
    ],

    // Profit comparison table
    profitComparison: allCropsSorted.map((c) => ({
      name: c.name,
      baseCoins: c.coins,
      growthTime: c.growthTime,
      coinsPerMinute: c.coinsPerMinute,
      coinsPerHour: c.coinsPerMinute * 60,
      withMutation4x: c.coins * 4,
      withMutationAndPet20x: c.coins * 20,
      season: c.season,
      tier: c.tier,
    })),

    // Farming tips
    farmingTips: [
      {
        title: "Always Keep Your Best Mutation Active",
        description:
          "Never harvest a crop without an active mutation. Even a C-tier mutation provides an extra multiplier. Prioritize unlocking and equipping the best mutation you have — it applies to every harvest on every plot.",
      },
      {
        title: "Stack Mutation + Pet Multipliers",
        description:
          "The real money comes from multiplicative stacking. Example: Golden Wheat (480 coins) × Aurelian Crown mutation (4.0x) × Golden Phoenix Chick pet (5.0x) = 9,600 coins per harvest. Always equip your best pet alongside your best mutation.",
      },
      {
        title: "Time Your Boosts for Maximum Impact",
        description:
          "Save Double Harvest Boosts (from promo codes) for your most valuable crop just before harvest time. One well-timed boost on a fully stacked Golden Wheat can yield 19,200 coins — the equivalent of 40 unboosted harvests.",
      },
      {
        title: "Rotate Seasonal Crops Strategically",
        description:
          "During their active season, A-tier seasonal crops receive a +20% coin bonus. Plant them on secondary plots and switch back to all-season S-tier crops on your main plots. This hybrid approach maximizes total farm income.",
      },
      {
        title: "Match Your Play Style to Your Crops",
        description:
          "Active players should prioritize short-cycle crops (Golden Wheat at 3 min, Lucky Carrot at 2 min). AFK players should plant long-cycle crops (Crystal Berry at 5 min, Moonflower at 10 min) and check back periodically.",
      },
      {
        title: "Reinvest Coins Into Seed Unlocks",
        description:
          "Early profits should go directly into unlocking higher-tier seeds. Each tier jump (C → B → A → S) roughly doubles your effective income. Delaying seed upgrades is the most common mistake new players make.",
      },
      {
        title: "Fill Every Available Plot",
        description:
          "Empty plots generate zero coins. Even if you can only afford Wild Grass seeds, plant them. The marginal income adds up and accelerates your path to better seeds. There is no downside to filling all available plots.",
      },
    ],

    // FAQ
    faq: [
      {
        question: "What is a Grow a Garden value list?",
        answer:
          "A value list ranks every crop in Grow a Garden by its coin selling price, growth time, seasonal availability, and profit-per-minute. It helps players determine which crops to plant for maximum income at every stage of the game — from beginner to endgame optimization.",
      },
      {
        question: "Which crop gives the most profit per hour?",
        answer:
          "Golden Wheat generates 9,600 coins per hour at base rate (160 coins/min × 60 min). With S-tier mutation (4×) and S-tier pet (5×), this jumps to 192,000 coins per hour. However, this requires active harvesting every 3 minutes. For AFK players, Crystal Berry at 5,040 coins per hour with a 5-minute cycle offers the best passive income.",
      },
      {
        question: "Are seasonal crops worth planting outside their season?",
        answer:
          "Generally no. Seasonal crops sell at their base price (no bonus) and sometimes receive a -20% penalty outside their season. For off-season farming, all-season crops (Golden Wheat, Crystal Berry, Moonflower) provide better and more consistent returns.",
      },
      {
        question: "How do I unlock better crop seeds?",
        answer:
          "Higher-tier seeds are unlocked by reaching farming level milestones and spending coins in the Seed Shop. Focus on reaching the coin requirements for each tier upgrade. The progression path is: Wild Grass (free) → Basic Potato (100 coins) → Lucky Carrot (500 coins) → Crystal Berry (2,000 coins) → Golden Wheat (5,000 coins).",
      },
      {
        question: "Do mutations increase the value of all crops?",
        answer:
          "Yes. Mutations apply a multiplier to the base coin value of every crop you harvest while the mutation is active. S-tier mutations provide the highest multipliers (typically 3.5×–4.5×). Combine mutations with pet multipliers for stacked returns.",
      },
      {
        question: "What is the best crop for a brand new player?",
        answer:
          "Start with Wild Grass (free) and Basic Potato (100 coins). Use Wild Grass to fill empty plots while saving coins for Basic Potato seeds. Focus on harvesting consistently — even low-value crops build farming XP that unlocks better seeds. Transition to Sun Tomato or Lucky Carrot once you have 200–500 coins saved.",
      },
      {
        question: "Should I sell crops immediately or wait for price spikes?",
        answer:
          "Sell crops immediately after harvest. Grow a Garden does not have a fluctuating market system — crop prices are fixed. Holding harvested crops provides no benefit. Sell immediately and reinvest coins into seeds, plot expansions, or mutation unlocks.",
      },
      {
        question: "How important is the pet system for crop profits?",
        answer:
          "Extremely important at mid-to-endgame. Pets provide a separate multiplier that stacks with mutations. An S-tier pet can multiply your crop value by 4×–6×. Combined with a strong mutation, your profit per harvest increases 16×–25× compared to base values. Prioritize unlocking and leveling pets as soon as you have a stable S-tier crop rotation.",
      },
    ],

    // Related guides
    relatedGuides: [
      {
        label: "Crop Value List",
        href: "/grow-a-garden/crop-value-list",
        description: "Quick-reference table of all crop values and stats",
      },
      {
        label: "Mutation Tier List",
        href: "/grow-a-garden/mutation-tier-list",
        description: "Best mutations to multiply your crop profits",
      },
      {
        label: "Pet Tier List",
        href: "/grow-a-garden/pet-tier-list",
        description: "Best pets for stacking harvest multipliers",
      },
      {
        label: "Money Making Guide",
        href: "/grow-a-garden/money-making-guide",
        description: "Complete guide to maximizing coin income",
      },
      {
        label: "Beginner Guide",
        href: "/grow-a-garden/beginner-guide",
        description: "Start here if you are new to Grow a Garden",
      },
      {
        label: "Active Codes",
        href: "/grow-a-garden/codes",
        description: "Free Double Harvest Boosts and coin rewards",
      },
    ],
  };
}

const data = buildValueListData();
export default data;
