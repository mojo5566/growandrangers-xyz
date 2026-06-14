// ============================================================
// Grow a Garden — Canonical Pet Database
// Single source of truth for all pet entities.
// All page data files should import from here.
// ============================================================

export interface Pet {
  id: string;
  name: string;
  aliases: string[];
  multiplier: number;
  seasonalBonus?: { season: string; bonusMultiplier: number };
  tier: "S" | "A" | "B" | "C";
  abilities: string[];
  source: "Basic Egg" | "Rare Egg" | "Legendary Egg" | "Seasonal Event";
  description: string;
  strengths: string[];
  weaknesses: string[];
  imagePlaceholder: string;
  tierRating: number;
};
  tier: "S" | "A" | "B" | "C";
  abilities: string[];
  source: "Basic Egg" | "Rare Egg" | "Legendary Egg" | "Seasonal Event";
  description: string;
  strengths: string[];
  weaknesses: string[];
}

export const pets: Pet[] = [
  // === S-TIER ===
  {
    id: "golden-phoenix-chick",
    name: "Golden Phoenix Chick",
    aliases: [],
    multiplier: 5.0,
    tier: "S",
    abilities: ["Auto-collects all mature crops automatically"],
    source: "Legendary Egg",
    description: "The undisputed best pet. 5.0x multiplier with auto-collect eliminates manual harvesting time, effectively multiplying coins-per-hour beyond what the multiplier alone suggests.",
    strengths: [
      "Highest base multiplier in the game (5.0x)",
      "Auto-collect passive eliminates harvesting downtime",
      "Works on any crop, any season, any time of day",
      "Stacks multiplicatively with any mutation",
    ],
    weaknesses: [
      "Extremely rare — ~5% base drop rate from Legendary Eggs",
      "Legendary Eggs cost 10,000 Coins each",
      "No seasonal or synergy bonus — pure raw power",
    ],
  },
    imagePlaceholder: "/placeholder-pet-golden-phoenix-chick.png",
    tierRating: 9,
  {
    id: "crystal-unicorn-foal",
    name: "Crystal Unicorn Foal",
    aliases: [],
    multiplier: 4.5,
    tier: "S",
    abilities: ["Chance to double harvest yield on any crop"],
    source: "Legendary Egg",
    description: "At 4.5x with a double-harvest proc chance, this pet can exceed the Phoenix on fast-growing crops (under 2 minutes). The RNG nature means slightly less consistency but a higher ceiling on short-cycle farms.",
    strengths: [
      "Double-harvest proc can situationally outpace Golden Phoenix Chick",
      "Strong base multiplier (4.5x)",
      "All-season, all-crop compatibility",
    ],
    weaknesses: [
      "Double-harvest is RNG-dependent — inconsistent income",
      "Lower base multiplier than Golden Phoenix Chick",
      "Legendary Egg requirement",
    ],
    imagePlaceholder: "/placeholder-pet-crystal-unicorn-foal.png",
    tierRating: 9,
  },

  // === A-TIER ===
  {
    id: "neon-dragon-hatchling",
    name: "Neon Dragon Hatchling",
    aliases: [],
    multiplier: 3.5,
    tier: "A",
    abilities: ["Crops become immune to fire damage"],
    source: "Rare Egg",
    description: "3.5x with fire-proof crops is excellent, but fire damage is a relatively rare threat. You are paying for a 3.5x pet with a situational ability that often goes unused.",
    strengths: [
      "Strong 3.5x base multiplier",
      "Fire immunity protects high-value crops",
      "Obtainable from Rare Eggs (2,000 Coins)",
    ],
    weaknesses: [
      "Fire-proof passive is rarely relevant",
      "Outclassed by S-Tier pets for general farming",
    ],
  },
    imagePlaceholder: "/placeholder-pet-celestial-fox-kit.png",
    tierRating: 3,
  {
    id: "celestial-fox-kit",
    name: "Celestial Fox Kit",
    aliases: ["Shadow Fox Kit"],
    multiplier: 3.0,
    tier: "A",
    seasonalBonus: { season: "Night", bonusMultiplier: 3.3 },
    abilities: ["+10% growth speed boost during night hours"],
    source: "Rare Egg",
    description: "3.0x base with a night-time boost that pushes effective value to 3.3x during night cycles. Strong and reliable, but the time-gated bonus and lower base multiplier keep it out of S-Tier.",
    strengths: [
      "3.3x effective during night hours",
      "Night bonus overlaps well with night-time mutations",
      "Obtainable from Rare Eggs",
    ],
    weaknesses: [
      "Lower multiplier during daytime",
      "Time-gated bonus requires scheduling around night cycles",
      "Outclassed by unconditional S-Tier pets",
    ],
  },
    imagePlaceholder: "/placeholder-pet-lucky-clover-bunny.png",
    tierRating: 3,
  {
    id: "lucky-clover-bunny",
    name: "Lucky Clover Bunny",
    aliases: [],
    multiplier: 3.2,
    tier: "A",
    abilities: ["Rabbit-type pet — activates Leporine Bloom mutation synergy (+18%)"],
    source: "Seasonal Event",
    description: "3.2x base with the unique rabbit-type synergy. When paired with Leporine Bloom mutation (+18% bonus), effective multiplier reaches ~3.78x. Without the mutation, it is a standard A-Tier pet.",
    strengths: [
      "Unique rabbit-type synergy with Leporine Bloom mutation",
      "+18% bonus when paired with Leporine Bloom (canonical synergy value)",
      "Seasonal event exclusive — collectible value",
    ],
    weaknesses: [
      "Only available during Easter seasonal event",
      "3.2x base is lower than Neon Dragon Hatchling (3.5x)",
      "Synergy requires owning Leporine Bloom mutation",
    ],
  },

  // === B-TIER ===
    imagePlaceholder: "/placeholder-pet-frost-wolf-pup.png",
    tierRating: 3,
  {
    id: "frost-wolf-pup",
    name: "Frost Wolf Pup",
    aliases: [],
    multiplier: 2.2,
    tier: "B",
    seasonalBonus: { season: "Winter", bonusMultiplier: 3.3 },
    abilities: ["+50% bonus multiplier during Winter"],
    source: "Rare Egg",
    description: "Seasonal specialist that hits A-Tier effectiveness during Winter. Outside of Winter, the base 2.2x multiplier is modest. Excellent for Winter-focused farming rotations.",
    strengths: [
      "3.3x effective during Winter — A-Tier performance",
      "Pairs with Winter mutations (Hoarfrost Corolla)",
      "Rare Egg accessibility",
    ],
    weaknesses: [
      "Drops to 2.2x outside Winter",
      "Season-locked value proposition",
      "Outclassed by all-season A-Tier pets in other seasons",
    ],
  },
    imagePlaceholder: "/placeholder-pet-magma-lizard-hatchling.png",
    tierRating: 3,
  {
    id: "magma-lizard-hatchling",
    name: "Magma Lizard Hatchling",
    aliases: [],
    multiplier: 2.0,
    tier: "B",
    seasonalBonus: { season: "Summer", bonusMultiplier: 3.0 },
    abilities: ["+50% bonus multiplier during Summer"],
    source: "Rare Egg",
    description: "Summer counterpart to Frost Wolf Pup. 2.0x base jumps to 3.0x during Summer. Essential for Summer-focused farming builds.",
    strengths: [
      "3.0x effective during Summer",
      "Pairs with Summer mutations (Igneous Spore)",
      "Rare Egg accessibility",
    ],
    weaknesses: [
      "Drops to 2.0x outside Summer",
      "Season-locked — half the year at reduced power",
    ],
  },
  {
    id: "aqua-otter-kit",
    name: "Aqua Otter Kit",
    aliases: [],
    multiplier: 1.9,
    tier: "B",
    abilities: ["Auto-waters adjacent crop plots"],
    source: "Rare Egg",
    description: "Utility pet that auto-waters adjacent plots, saving significant manual watering time on large farms. The 1.9x multiplier is modest but the passive provides quality-of-life value.",
    strengths: [
      "Auto-water passive saves manual time",
      "Excellent for large farms with many plots",
      "Pairs well with Crystalline Mycelium mutation",
    ],
    weaknesses: [
      "1.9x is the lowest B-Tier multiplier",
      "Auto-water is redundant if using Crystalline Mycelium (auto-waters)",
      "No seasonal bonus",
    ],
  },
    imagePlaceholder: "/placeholder-pet-thunder-hawk-chick.png",
    tierRating: 3,
  {
    id: "thunder-hawk-chick",
    name: "Thunder Hawk Chick",
    aliases: [],
    multiplier: 1.8,
    tier: "B",
    abilities: ["Harvest action completes faster"],
    source: "Basic Egg",
    description: "Budget-friendly pet with a faster harvest animation. The 1.8x multiplier is the lowest in B-Tier, but accessibility from Basic Eggs makes it a strong early-game option.",
    strengths: [
      "Obtainable from Basic Eggs (500 Coins)",
      "Faster harvest animation increases actions-per-minute",
      "Excellent early-game value",
    ],
    weaknesses: [
      "Lowest B-Tier multiplier (1.8x)",
      "Outclassed by Rare Egg B-Tier pets",
      "No seasonal bonus",
    ],
  },

  // === C-TIER ===
    imagePlaceholder: "/placeholder-pet-bamboo-panda-cub.png",
    tierRating: 3,
  {
    id: "bamboo-panda-cub",
    name: "Bamboo Panda Cub",
    aliases: [],
    multiplier: 1.5,
    tier: "C",
    abilities: ["Growth speed stacks +3% per consecutive harvest (up to +15%)"],
    source: "Basic Egg",
    description: "The best C-Tier pet at 1.5x with a stacking growth speed bonus. The bonus takes multiple cycles to ramp up. Even at full stacks, cannot compete with B-Tier pets.",
    strengths: [
      "Best C-Tier multiplier (1.5x)",
      "Stacking bonus rewards consistent play",
      "Basic Egg accessibility",
    ],
    weaknesses: [
      "Stacking bonus resets if you miss a harvest cycle",
      "Even at max stacks, outclassed by B-Tier",
      "Replace as soon as possible",
    ],
  },
    imagePlaceholder: "/placeholder-pet-common-garden-cat.png",
    tierRating: 3,
  {
    id: "common-garden-cat",
    name: "Common Garden Cat",
    aliases: ["Common Prairie Dog"],
    multiplier: 1.0,
    tier: "C",
    abilities: ["Basic companion — no special effect"],
    source: "Basic Egg",
    description: "A starter companion with no multiplier bonus. The 1.0x multiplier means it provides effectively no farming benefit. Purely a tutorial introduction to the pet system.",
    strengths: [
      "Free starter pet equivalent — teaches pet mechanics",
      "Obtainable from Basic Eggs",
    ],
    weaknesses: [
      "1.0x provides zero farming benefit",
      "No abilities or passives",
      "Replace immediately",
    ],
  },
  {
    id: "dust-bunny",
    name: "Dust Bunny",
    aliases: [],
    multiplier: 1.0,
    tier: "C",
    abilities: ["Cosmetic dust trail visual effect"],
    source: "Basic Egg",
    description: "Purely cosmetic pet with a dust trail effect. 1.0x multiplier provides no farming benefit. Only valuable to collectors who enjoy the visual.",
    strengths: [
      "Unique cosmetic visual for collectors",
      "Basic Egg accessibility",
    ],
    weaknesses: [
      "1.0x provides zero farming benefit",
      "No abilities affecting gameplay",
      "Not worth Coins for farming purposes",
    ],
  },
];

export function getPetById(id: string): Pet | undefined {
  return pets.find((p) => p.id === id);
}

export function getPetByName(name: string): Pet | undefined {
  return pets.find(
    (p) => p.name.toLowerCase() === name.toLowerCase() ||
      p.aliases.some((a) => a.toLowerCase() === name.toLowerCase())
  );
}

export function getPetsByTier(tier: Pet["tier"]): Pet[] {
  return pets.filter((p) => p.tier === tier);
}
