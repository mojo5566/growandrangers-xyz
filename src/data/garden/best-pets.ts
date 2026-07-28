import type { EvolutionPageData } from "../types";
import { pets } from "./database/pets";

const goldenPhoenix = pets.find((p) => p.id === "golden-phoenix-chick")!;
const goldenDragon = pets.find((p) => p.id === "golden-dragon")!;
const crystalUnicorn = pets.find((p) => p.id === "crystal-unicorn-foal")!;
const luckyBunny = pets.find((p) => p.id === "lucky-clover-bunny")!;
const frostWolf = pets.find((p) => p.id === "frost-wolf-pup")!;
const celestialFox = pets.find((p) => p.id === "celestial-fox-kit")!;
const phoenixHatchling = pets.find((p) => p.id === "phoenix-hatchling")!;
const commonCat = pets.find((p) => p.id === "common-garden-cat")!;

function buildBestPetsData(): EvolutionPageData {
  return {
    title: "Best Pets in Grow a Garden — Top Picks",
    description: "Guide to the best pets in Grow a Garden. Learn which pets to hatch first, how multipliers work, egg strategy, and mutation synergy combos for maximizing coin income.",
    updatedAt: "July 7, 2026",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Grow a Garden Best Pets Guide", href: "/grow-a-garden/best-pets" },
    ],

    overview: {
      description: "Pets are permanent companions that provide passive coin multipliers, mutation synergy bonuses, and special abilities in Grow a Garden. Unlike mutations which are tied to individual plots, pets apply their bonuses farm-wide — a single S-Tier pet boosts every plot you own simultaneously. This guide covers everything from hatching your first Basic Egg to building an optimal endgame pet lineup with synergistic mutation pairings.",
      highlights: [
        "Pets provide permanent, farm-wide coin multipliers that stack with mutations",
        "Three egg tiers: Basic (500 Coins), Rare (2,000 Coins), Legendary (10,000 Coins)",
        "Higher-tier eggs have better odds for rare pets but cost exponentially more",
        `Pet Growth Potions boost your next hatch odds by 15% each — stack up to 5`,
        `S-Tier pets like ${goldenPhoenix.name} (${goldenPhoenix.multiplier.toFixed(1)}x) can multiply your entire farm output`,
        "Pet + mutation synergy combos create the highest yields in the game (up to 20x)",
      ],
    },

    stages: [
      { from: "Starter Pet (0-15 min)", mats: "1 Basic Egg (500 Coins)", stats: `Any pet. Even a ${commonCat.name} (${commonCat.multiplier.toFixed(1)}x) permanently boosts all plots.` },
      { from: "Mid-Game Pets (15 min - 2 hrs)", mats: "3-5 Basic Eggs + 1-2 Rare Eggs (~5,000 Coins)", stats: "Target B-Tier+ pets (1.5x-2.5x). Replace starter pets with better multipliers." },
      { from: "Late-Game Pets (2-6 hrs)", mats: "2-3 Rare Eggs + 1 Legendary Egg (~20,000 Coins)", stats: "Target A-Tier pets (3.0x-4.0x). Begin mutation synergy pairing." },
      { from: "Endgame Pets (6+ hrs)", mats: "Multiple Legendary Eggs (50,000+ Coins)", stats: "Target S-Tier pets (4.5x-5.0x). Complete mutation synergy combos for 20x yields." },
    ],
    totalCost: "Approximately 75,000+ Coins to build an optimal endgame pet lineup with one S-Tier pet and supporting A-Tier pets",

    materials: [
      {
        name: "Basic Egg",
        icon: "\uD83E\uDD5A",
        desc: "The cheapest egg at 500 Coins. Contains Common through Rare pets (1.0x-2.5x multiplier range). Ideal for new players getting their first pet multiplier online.",
        sources: ["Pet Shop (always available)", "Promo codes (occasional free eggs)", "Daily login bonus (every 7 days)", "Starter quest reward (1 free Basic Egg)"],
        tip: "Buy 2-3 Basic Eggs as soon as you can afford them. Getting any pet multiplier — even 1.1x — on your farm is infinitely better than having no pet at all. Basic Eggs pay for themselves in 5-10 harvest cycles.",
      },
      {
        name: "Rare Egg",
        icon: "\uD83E\uDD5A\u2728",
        desc: "Mid-tier egg at 2,000 Coins. Contains Uncommon through Epic pets (1.5x-4.0x multiplier range). The sweet spot for cost-to-value ratio in the mid-game.",
        sources: ["Pet Shop (2,000 Coins each)", "Event rewards (seasonal events)", "Promo codes (HONEYBEE2025 gives 1 Rare Egg)", "Trading with other players"],
        tip: "Rare Eggs are the best value in the game. Two Rare Eggs (4,000 Coins) give you two shots at a 2.0x+ pet, while one Legendary Egg (10,000 Coins) gives one shot. For building a balanced pet lineup, Rare Eggs are your workhorse.",
      },
      {
        name: "Legendary Egg",
        icon: "\uD83E\uDD5A\uD83D\uDC51",
        desc: `Premium egg at 10,000 Coins. Contains Epic through Mythic pets (2.5x-5.0x range). The only way to obtain S-Tier pets like ${goldenPhoenix.name} and ${crystalUnicorn.name}.`,
        sources: ["Pet Shop (10,000 Coins each)", "Seasonal event shops (discounted during events)", "Battle Pass premium tier reward", "Extremely rare promo code drops"],
        tip: "Only buy Legendary Eggs once you have 4+ plots with B-Tier+ mutations and a solid Rare-tier pet lineup. A single Legendary Egg is a 10,000 Coin gamble — make sure your farm economy can absorb a bad roll before you take the risk.",
      },
      {
        name: "Pet Growth Potion",
        icon: "\uD83E\uDDEA",
        desc: "Consumable that increases your next egg hatch odds for rare pets by 15%. Stack up to 5 potions for a 75% boosted rare rate. Essential for Legendary Egg hatching.",
        sources: ["Promo codes (most reliable source)", "Daily spin wheel (uncommon prize)", "Seasonal event shops", "Premium shop (200 Coins each)"],
        tip: "Never hatch a Legendary Egg without at least 3 Pet Growth Potions active. The difference between a ~5% S-Tier rate (unboosted) and a ~20% S-Tier rate (with 3 potions) is the difference between wasting 10,000 Coins and getting a Golden Phoenix Chick.",
      },
      {
        name: `${goldenDragon.name}`,
        icon: "🐉",
        desc: `${goldenDragon.description} At ${goldenDragon.multiplier.toFixed(1)}x, it is the second highest base pet multiplier in the game.`,
        sources: ["Legendary Egg (10,000 Coins each)", "Seasonal event shops (discounted during events)", "Battle Pass premium tier reward"],
        tip: `Synergy shines on golden-tier crops — the doubling passive stacks with ${goldenDragon.name}'s high base multiplier. Slightly lower base than ${goldenPhoenix.name} (${goldenDragon.multiplier.toFixed(1)}x vs ${goldenPhoenix.multiplier.toFixed(1)}x) but a higher ceiling on golden-crop farms.`,
      },
      {
        name: `${phoenixHatchling.name}`,
        icon: "🔥",
        desc: `${phoenixHatchling.description} At ${phoenixHatchling.multiplier.toFixed(1)}x, it is a strong A-Tier pet accessible from Rare Eggs.`,
        sources: ["Rare Egg (2,000 Coins each)", "Event rewards (seasonal events)", "Promo codes (occasional free eggs)"],
        tip: `The daily revival passive rescues one wilted or spoiled crop per day — a safety net for high-value crops. At ${phoenixHatchling.multiplier.toFixed(1)}x from a Rare Egg, it is exceptional value for mid-game players.`,
      },
    ],

    bestUnitsSteps: [
      { step: "1", title: "Hatch Your First Basic Egg Immediately", desc: `As soon as you have 500 Coins, buy a Basic Egg from the Pet Shop. Hatch it immediately. The pet you get — even a ${commonCat.name} at ${commonCat.multiplier.toFixed(1)}x — applies its multiplier to every plot you own, permanently, with zero maintenance. This is the single best 500-Coin purchase in the entire game.` },
      { step: "2", title: "Build a Full Pet Team (3-4 Pets)", desc: "Once you have 3-4 plots running with mutations, invest in 3-4 more Basic Eggs and 1-2 Rare Eggs. Having multiple pets gives you flexibility — keep your highest multiplier pet active while leveling others. A full pet team with an average 1.5x-2.0x multiplier dramatically accelerates your coin income." },
      { step: "3", title: "Use Pet Growth Potions on Rare Eggs", desc: "Before hatching a Rare Egg, activate 2-3 Pet Growth Potions. At 2,000 Coins per egg, the potions nearly guarantee you get value. An Epic pet (3.0x-4.0x) from a Rare Egg with potions active is a massive upgrade that carries you into the late game." },
      { step: "4", title: "Target a Legendary Egg with Full Potions", desc: "Save 10,000 Coins and acquire 5 Pet Growth Potions. This is a major milestone. Activate all 5 potions and hatch your first Legendary Egg. With a 75% boosted rare rate, your odds of pulling an S-Tier pet jump from ~5% to ~20%. Even if you miss the S-Tier, an A-Tier Epic pet is still a strong outcome." },
      { step: "5", title: "Pair Your Best Pet with Your Best Mutation", desc: `Once you have a high-tier pet, pair it with a complementary mutation on your main plot. For example, Leporine Bloom (3.8x, +18% rabbit synergy) x ${luckyBunny.name} (${luckyBunny.multiplier.toFixed(1)}x) = ~${(3.8 * 1.18 * luckyBunny.multiplier).toFixed(1)}x effective multiplier. This synergy stacking is the core mechanic of endgame farming optimization.` },
      { step: "6", title: "Collect Seasonal and Event-Exclusive Pets", desc: `Seasonal events (Easter, Summer, Halloween, Winter) introduce limited-time pets that cannot be obtained from regular eggs. The ${luckyBunny.name} (Easter event exclusive) is the most valuable seasonal pet due to its unique synergy with Leporine Bloom. Never miss a seasonal event — exclusive pets may not return for a full year.` },
    ],

    priorityList: [
      { tier: "S", unit: "First Pet (any tier, any egg)", reason: "Getting any pet multiplier online — even 1.1x — is the highest ROI purchase in the game. A 500-Coin Basic Egg pays for itself in 5 harvest cycles and then generates pure profit forever. Do not delay this purchase." },
      { tier: "S", unit: "Pet Growth Potions before Rare/Legendary Eggs", reason: "Potions increase your odds of getting a high-tier pet by 15% each. Hatching a Rare or Legendary Egg without potions is gambling. With 3-5 potions, it is a calculated investment. Never skip potions on eggs costing 2,000+ Coins." },
      { tier: "A", unit: `${goldenPhoenix.name} (S-Tier, ${goldenPhoenix.multiplier.toFixed(1)}x)`, reason: `The highest base pet multiplier in the game at ${goldenPhoenix.multiplier.toFixed(1)}x. No conditions, no seasonality — pure, unconditional power. Pairs best with Aurelian Crown mutation (4.0x) for a total 20.0x multiplier. The holy grail of pet hatching.` },
      { tier: "A", unit: `${goldenDragon.name} (S-Tier, ${goldenDragon.multiplier.toFixed(1)}x)`, reason: `Second highest base pet multiplier at ${goldenDragon.multiplier.toFixed(1)}x. Doubles coin value of golden-tier crops for explosive synergy on golden-crop farms. A close rival to ${goldenPhoenix.name} with a higher ceiling on golden-tier setups.` },
      { tier: "A", unit: `${luckyBunny.name} (S-Tier, ${luckyBunny.multiplier.toFixed(1)}x base)`, reason: `Easter event exclusive with the unique rabbit-type synergy. Pairs with Leporine Bloom mutation for +18% bonus, pushing the effective multiplier higher. The highest effective pet multiplier in the game — but only obtainable during Easter events.` },
      { tier: "A", unit: `${crystalUnicorn.name} (S-Tier, ${crystalUnicorn.multiplier.toFixed(1)}x)`, reason: `Third highest base multiplier. Unconditional, works on any crop, any season. Slightly easier to hatch than ${goldenPhoenix.name} due to a marginally higher Legendary Egg drop rate. A reliable non-seasonal S-Tier, though ${goldenDragon.name} offers a higher base multiplier.` },
      { tier: "B", unit: `${frostWolf.name} (B-Tier, ${frostWolf.multiplier.toFixed(1)}x base, ${frostWolf.seasonalBonus?.bonusMultiplier.toFixed(1)}x ${frostWolf.seasonalBonus?.season})`, reason: `Strong mid-game pet with a seasonal bonus during ${frostWolf.seasonalBonus?.season}. Excellent for players who farm seasonally. Pairs well with Hoarfrost Corolla mutation which also benefits from Winter.` },
      { tier: "B", unit: `${celestialFox.name} (A-Tier, ${celestialFox.multiplier.toFixed(1)}x)`, reason: "Solid all-rounder. No seasonal restrictions. Provides a reliable multiplier that stacks cleanly with any mutation. A great placeholder pet while saving for Legendary Eggs." },
      { tier: "C", unit: `${commonCat.name} (C-Tier, ${commonCat.multiplier.toFixed(1)}x)`, reason: "Your likely first pet. Better than nothing, but replace as soon as you can afford a Rare Egg. The 1.0x multiplier provides no farming benefit — even a 1.5x Uncommon pet from a Basic Egg is a massive upgrade." },
    ],

    mistakes: [
      { title: "Skipping the Pet System Entirely", desc: "Some new players ignore the Pet Shop because they think pets are an endgame luxury or too expensive. A Basic Egg costs 500 Coins — roughly 2-3 harvest cycles of Carrots. The pet it produces provides a permanent multiplier with zero ongoing cost. Skipping pets is like voluntarily farming at 1.0x while everyone else farms at 2.0x+." },
      { title: "Buying a Legendary Egg Before Having Potions", desc: "Hatching a 10,000-Coin Legendary Egg with zero Pet Growth Potions active is gambling with terrible odds. The base S-Tier drop rate from a Legendary Egg is roughly 5%. With 5 potions, it jumps to 20%. The expected value difference is enormous. Never hatch a Legendary Egg without at least 3 potions." },
      { title: "Hatching Eggs Before Expanding Plots", desc: `A ${goldenPhoenix.multiplier.toFixed(1)}x ${goldenPhoenix.name} on a farm with 1 plot is worth ${goldenPhoenix.multiplier.toFixed(1)}x. The same pet on a farm with 6 plots is worth ${(goldenPhoenix.multiplier * 6).toFixed(1)}x. Plot expansion multiplies your pet's value. Get to 4+ plots before investing heavily in premium eggs. A 1.5x pet on 4 plots (6x total) beats a 5.0x pet on 1 plot.` },
      { title: "Ignoring Pet + Mutation Synergy", desc: `Pets and mutations stack multiplicatively, but some pairs get bonus synergy. Leporine Bloom (+18% with rabbit pets) x ${luckyBunny.name} = high effective multiplier. Without the synergy, the same combo is just ${luckyBunny.multiplier.toFixed(1)}x. Always check your pet's type and match it with synergistic mutations for hidden bonus multipliers.` },
      { title: "Selling Low-Tier Pets Instead of Keeping Them", desc: `You can own multiple pets simultaneously. Even a ${commonCat.name} (${commonCat.multiplier.toFixed(1)}x) has value as a backup while your main pet is being upgraded or if you need a different pet type for synergy purposes. Never sell a pet unless you have a direct upgrade for the same type and role.` },
      { title: "Missing Seasonal Event Pets", desc: `The ${luckyBunny.name} (Easter) and other seasonal pets are only available during their respective events — sometimes for just 2-3 weeks. Missing an event means waiting a full year for another chance. Always check the event calendar and prioritize limited-time pets over permanent egg purchases during event windows.` },
    ],

    faq: [
      { question: "What is the best pet in Grow a Garden?", answer: `${goldenPhoenix.name} (${goldenPhoenix.multiplier.toFixed(1)}x multiplier) is the best unconditional pet due to having the highest base multiplier with no seasonal, weather, or time-of-day restrictions. ${luckyBunny.name} can situationally exceed it with Leporine Bloom synergy but is only available during the Easter seasonal event.` },
      { question: "How do I hatch a pet in Grow a Garden?", answer: "Visit the Pet Shop (marked with a paw icon on the minimap), purchase an egg (Basic: 500 Coins, Rare: 2,000 Coins, Legendary: 10,000 Coins), then click the egg in your inventory to hatch it. The pet appears immediately. You can apply Pet Growth Potions before hatching to boost your odds of getting a rarer pet." },
      { question: "Do pets stack with mutations?", answer: `Yes — pet multipliers and mutation multipliers stack multiplicatively. For example: ${goldenPhoenix.name} (${goldenPhoenix.multiplier.toFixed(1)}x) x Aurelian Crown mutation (4.0x) = 20.0x total crop yield per harvest. This multiplicative stacking is the foundation of endgame farming optimization and is why you should invest in both systems.` },
      { question: "How many Pet Growth Potions should I use before hatching?", answer: "Use 0-1 potions for Basic Eggs (500 Coins), 2-3 potions for Rare Eggs (2,000 Coins), and 5 potions for Legendary Eggs (10,000 Coins). The more expensive the egg, the more potions you should stack. A Legendary Egg without potions is gambling; with 5 potions, it is a strategic investment." },
      { question: "Can I have more than one pet active at a time?", answer: "You can own multiple pets but only one pet's multiplier is active on your farm at a time. However, owning multiple pets gives you flexibility — you can switch between them for different crops, seasons, or mutation synergy needs. Collecting a diverse pet roster is valuable for adapting to different farming strategies." },
      { question: "What is the difference between Basic, Rare, and Legendary Eggs?", answer: "Basic Eggs (500 Coins) hatch Common to Rare pets (1.0x-2.5x). Rare Eggs (2,000 Coins) hatch Uncommon to Epic pets (1.5x-4.0x). Legendary Eggs (10,000 Coins) hatch Epic to Mythic pets (2.5x-5.0x). Higher-tier eggs cost more but have significantly better odds for high-multiplier pets. Rare Eggs offer the best value for mid-game players." },
      { question: "Are seasonal event pets worth getting?", answer: `Absolutely. Seasonal event pets like ${luckyBunny.name} (Easter) often have unique abilities or synergy bonuses that cannot be obtained from regular eggs. They are also limited-time — miss the event and you wait a full year. Always prioritize limited-time pets during active events, even if it means delaying a Legendary Egg purchase.` },
      { question: "How do I get more Pet Growth Potions?", answer: "The most reliable source is promo codes — check our Codes page for active codes that reward Pet Growth Potions. Additional sources include the daily spin wheel, seasonal event shops, and the premium shop (200 Coins each). Stockpile potions during events and use them strategically on Rare and Legendary Egg hatches." },
    ],

    relatedGuides: [
      { label: "Active Codes", href: "/grow-a-garden/codes", description: "Get free Pet Growth Potions and eggs from promo codes" },
      { label: "Pet Tier List", href: "/grow-a-garden/pet-tier-list", description: "Every pet ranked from S-Tier to C-Tier with stats" },
      { label: "Mutation Tier List", href: "/grow-a-garden/mutation-tier-list", description: "Pair your best pets with the right mutations" },
      { label: "Beginner Guide", href: "/grow-a-garden/beginner-guide", description: "Complete walkthrough from first crop to endgame" },
    ],
  };
}

const data = buildBestPetsData();
export default data;
