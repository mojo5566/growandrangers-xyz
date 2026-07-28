// ============================================================
// Grow a Garden — Canonical Egg Database
// Single source of truth for all egg entities.
// Pets are linked via the `source` field on the Pet interface.
// ============================================================

import { pets, type Pet } from "./pets";

/** eggs interface */
export interface Egg {
  id: string;
  name: string;
  aliases: string[];
  price: number;
  currency: "Coins" | "Event Tickets" | "Robux";
  hatchTime: string;
  tier: "S" | "A" | "B" | "C";
  source: "Shop" | "Seasonal Event" | "Premium";
  description: string;
  strengths: string[];
  weaknesses: string[];
  /** Mapping of petId -> drop rate percentage. Sum should be ~100%. */
  petDropRates: Record<string, number>;
  imagePlaceholder: string;
  tierRating: number;
}

export const eggs: Egg[] = [
  {
    id: "basic-egg",
    name: "Basic Egg",
    aliases: ["Common Egg", "Starter Egg"],
    price: 500,
    currency: "Coins",
    hatchTime: "10 seconds",
    tier: "C",
    source: "Shop",
    description:
      "The cheapest egg in the shop and the first pet source every player accesses. Basic Eggs hatch C-Tier and B-Tier pets — strong enough to learn the pet system and bootstrap early-game farming, but you will outgrow them quickly. Always worth buying one with your first 500 Coins to start your pet multiplier.",
    strengths: [
      "Cheapest egg in the shop (500 Coins)",
      "Fast 10-second hatch time — instant feedback",
      "Guaranteed pet every hatch — no empty results",
      "Includes Thunder Hawk Chick and Garden Turtle as solid B-Tier options",
    ],
    weaknesses: [
      "Cannot hatch A-Tier or S-Tier pets",
      "Most results are 1.0x-1.5x C-Tier pets",
      "Outscaled within the first 1-2 hours of play",
    ],
    petDropRates: {
      "common-garden-cat": 25,
      "dust-bunny": 20,
      "common-bunny": 15,
      "garden-caterpillar": 12,
      "garden-snail": 10,
      "bamboo-panda-cub": 8,
      "garden-turtle": 6,
      "thunder-hawk-chick": 4,
    },
    imagePlaceholder: "/placeholder-eggs-basic-egg.png",
    tierRating: 3,
  },
  {
    id: "rare-egg",
    name: "Rare Egg",
    aliases: ["Blue Egg", "Mid-Tier Egg"],
    price: 2000,
    currency: "Coins",
    hatchTime: "30 seconds",
    tier: "B",
    source: "Shop",
    description:
      "The mid-game workhorse egg. Rare Eggs hatch B-Tier and A-Tier pets — the multipliers needed to break past the 2,000 coins-per-cycle plateau. Best purchased after you have 3-4 plots with B-Tier+ mutations, so the 2,000 Coin cost is less than 2 harvest cycles of income.",
    strengths: [
      "Hatches B-Tier and A-Tier pets (1.7x - 3.5x multipliers)",
      "Accessible price point for mid-game farmers (2,000 Coins)",
      "Includes Neon Dragon Hatchling (3.5x) as the top A-Tier pull",
      "Reasonable 30-second hatch time",
    ],
    weaknesses: [
      "Cannot hatch S-Tier pets",
      "2,000 Coin cost is steep in the early game",
      "Top A-Tier pulls are rare (~15% combined chance)",
    ],
    petDropRates: {
      "garden-turtle": 18,
      "forest-fox-kit": 16,
      "aqua-otter-kit": 14,
      "night-owl": 12,
      "magma-lizard-hatchling": 11,
      "frost-wolf-pup": 10,
      "phoenix-hatchling": 8,
      "celestial-fox-kit": 6,
      "neon-dragon-hatchling": 5,
    },
    imagePlaceholder: "/placeholder-eggs-rare-egg.png",
    tierRating: 7,
  },
  {
    id: "legendary-egg",
    name: "Legendary Egg",
    aliases: ["Gold Egg", "Premium Egg"],
    price: 10000,
    currency: "Coins",
    hatchTime: "2 minutes",
    tier: "S",
    source: "Shop",
    description:
      "The endgame egg. Legendary Eggs are the only source of S-Tier pets — Golden Phoenix Chick (5.0x), Golden Dragon (4.8x), and Crystal Unicorn Foal (4.5x). At 10,000 Coins each, these should only be purchased when your farm generates that amount in under 10 minutes. Every hatch is guaranteed S-Tier, but the top pull (Golden Phoenix Chick) is only 27% chance.",
    strengths: [
      "Only source of S-Tier pets (4.5x - 5.0x multipliers)",
      "Guaranteed S-Tier pet every hatch",
      "Contains Golden Phoenix Chick — the best pet in the game",
      "Stacks with S-Tier mutations for 20x+ total multipliers",
    ],
    weaknesses: [
      "Extremely expensive (10,000 Coins per egg)",
      "2-minute hatch time is the longest of any egg",
      "Top pull (Golden Phoenix Chick) is only 27% chance",
      "High variance — a bad pull is a 4,500-coin S-Tier pet",
    ],
    petDropRates: {
      "crystal-unicorn-foal": 40,
      "golden-dragon": 33,
      "golden-phoenix-chick": 27,
    },
    imagePlaceholder: "/placeholder-eggs-legendary-egg.png",
    tierRating: 10,
  },
  {
    id: "seasonal-event-egg",
    name: "Seasonal Event Egg",
    aliases: ["Event Egg", "Limited Egg"],
    price: 250,
    currency: "Event Tickets",
    hatchTime: "1 minute",
    tier: "A",
    source: "Seasonal Event",
    description:
      "Limited-time eggs available only during seasonal events (Easter, Summer, Halloween, Winter). Purchased with Event Tickets earned through event activities rather than Coins. The standout pull is the Lucky Clover Bunny — a rabbit-type pet with unique Leporine Bloom mutation synergy. Seasonal Event Eggs are not always available and rotate with the event calendar.",
    strengths: [
      "Only source of Lucky Clover Bunny (3.2x + Leporine Bloom synergy)",
      "Purchased with Event Tickets — does not consume Coins",
      "1-minute hatch time — faster than Legendary Eggs",
      "Exclusive collectible pets tied to seasonal events",
    ],
    weaknesses: [
      "Only available during active seasonal events",
      "Requires Event Ticket grinding to afford",
      "Top pulls are often RNG-gated behind low drop rates",
      "Cannot be purchased with Coins between events",
    ],
    petDropRates: {
      "lucky-clover-bunny": 100,
    },
    imagePlaceholder: "/placeholder-eggs-seasonal-event-egg.png",
    tierRating: 7,
  },
];

// ============================================================
// Helper Functions
// ============================================================

export function getEggById(id: string): Egg | undefined {
  return eggs.find((e) => e.id === id);
}

export function getEggsByTier(tier: Egg["tier"]): Egg[] {
  return eggs.filter((e) => e.tier === tier);
}

export function getEggsBySource(source: Egg["source"]): Egg[] {
  return eggs.filter((e) => e.source === source);
}

/**
 * Returns all pets obtainable from a given egg, sorted by drop rate (descending).
 * Each entry includes the pet object and its drop rate percentage.
 */
export function getPetsFromEgg(eggId: string): Array<{ pet: Pet; dropRate: number }> {
  const egg = getEggById(eggId);
  if (!egg) return [];

  return Object.entries(egg.petDropRates)
    .map(([petId, dropRate]) => {
      const pet = pets.find((p) => p.id === petId);
      return pet ? { pet, dropRate } : null;
    })
    .filter((entry): entry is { pet: Pet; dropRate: number } => entry !== null)
    .sort((a, b) => b.dropRate - a.dropRate);
}

/**
 * Returns the rarity distribution for an egg, grouped by pet tier.
 * Example: { S: 20, A: 50, B: 20, C: 10 } (percentages summing to ~100)
 */
export function getEggRarityDistribution(eggId: string): Record<string, number> {
  const petsWithRates = getPetsFromEgg(eggId);
  const distribution: Record<string, number> = { S: 0, A: 0, B: 0, C: 0 };

  for (const { pet, dropRate } of petsWithRates) {
    distribution[pet.tier] += dropRate;
  }

  return distribution;
}
