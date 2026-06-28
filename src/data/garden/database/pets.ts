// ============================================================
// Grow a Garden — Canonical Pet Database
// Single source of truth for all pet entities.
// All page data files should import from here.
// ============================================================

/** pets interface */
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
}

export const pets: Pet[] = [
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
    imagePlaceholder: "/placeholder-pets-golden-phoenix-chick.png",
    tierRating: 9
  },
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
    imagePlaceholder: "/placeholder-pets-crystal-unicorn-foal.png",
    tierRating: 9
  },
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
    imagePlaceholder: "/placeholder-pets-neon-dragon-hatchling.png",
    tierRating: 7
  },
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
    imagePlaceholder: "/placeholder-pets-celestial-fox-kit.png",
    tierRating: 7
  },
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
    imagePlaceholder: "/placeholder-pets-lucky-clover-bunny.png",
    tierRating: 7
  },
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
    imagePlaceholder: "/placeholder-pets-frost-wolf-pup.png",
    tierRating: 5
  },
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
    imagePlaceholder: "/placeholder-pets-magma-lizard-hatchling.png",
    tierRating: 5
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
    imagePlaceholder: "/placeholder-pets-aqua-otter-kit.png",
    tierRating: 5
  },
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
    imagePlaceholder: "/placeholder-pets-thunder-hawk-chick.png",
    tierRating: 5
  },
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
    imagePlaceholder: "/placeholder-pets-bamboo-panda-cub.png",
    tierRating: 3
  },
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
    imagePlaceholder: "/placeholder-pets-common-garden-cat.png",
    tierRating: 3
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
    imagePlaceholder: "/placeholder-pets-dust-bunny.png",
    tierRating: 3
  },
{
    id: "golden-dragon",
    name: "Golden Dragon",
    aliases: ["Gold Dragon"],
    multiplier: 4.8,
    tier: "S",
    abilities: ["Doubles coin value of all golden-tier crops"],
    source: "Legendary Egg",
    description: "A close rival to the Golden Phoenix Chick at 4.8x. Its golden-crop doubling passive synergizes with gold mutations for explosive coin value. Slightly lower base multiplier but higher ceiling on golden-crop farms.",
    strengths: [
      "Near-top multiplier (4.8x)",
      "Doubles golden-tier crop value — explosive synergy",
      "Legendary prestige pet",
    ],
    weaknesses: [
      "Synergy requires golden-tier crops to shine",
      "Legendary Egg cost (10,000 Coins)",
      "Lower base than Golden Phoenix Chick (4.8x vs 5.0x)",
    ],
    imagePlaceholder: "/placeholder-pets-golden-dragon.png",
    tierRating: 9
  },
{
    id: "phoenix-hatchling",
    name: "Phoenix Hatchling",
    aliases: ["Phoenix"],
    multiplier: 3.4,
    tier: "A",
    abilities: ["Revives one wilted or spoiled crop per day"],
    source: "Rare Egg",
    description: "3.4x with a unique daily revival passive that rescues one wilted or spoiled crop. Strong A-Tier multiplier with a safety-net ability that protects high-value investments.",
    strengths: [
      "Strong 3.4x A-Tier multiplier",
      "Daily revival saves high-value crops from total loss",
      "Rare Egg accessibility (2,000 Coins)",
    ],
    weaknesses: [
      "Revival is once-daily — limited coverage",
      "Outclassed by S-Tier pets",
      "No seasonal bonus",
    ],
    imagePlaceholder: "/placeholder-pets-phoenix-hatchling.png",
    tierRating: 7
  },
{
    id: "forest-fox-kit",
    name: "Forest Fox Kit",
    aliases: ["Fox", "Common Fox"],
    multiplier: 2.1,
    tier: "B",
    abilities: ["+15% chance for bonus seed drops on harvest"],
    source: "Rare Egg",
    description: "2.1x with a seed-drop passive that accelerates farm expansion. The bonus seeds provide long-term compounding value beyond the modest base multiplier.",
    strengths: [
      "Bonus seed drops accelerate farm expansion",
      "Solid 2.1x B-Tier multiplier",
      "Rare Egg accessibility",
    ],
    weaknesses: [
      "Seed drops are RNG-dependent",
      "Lower multiplier than top B-Tier pets",
      "No seasonal bonus",
    ],
    imagePlaceholder: "/placeholder-pets-forest-fox-kit.png",
    tierRating: 5
  },
{
    id: "night-owl",
    name: "Night Owl",
    aliases: ["Owl", "Forest Owl"],
    multiplier: 2.0,
    seasonalBonus: { season: "Night", bonusMultiplier: 2.4 },
    tier: "B",
    abilities: ["+20% harvest speed during night hours"],
    source: "Rare Egg",
    description: "2.0x base with a night-time boost pushing it to 2.4x. A reliable night-farming companion that pairs well with night-active mutations like Phosphor Sporebloom.",
    strengths: [
      "2.4x effective during night hours",
      "Pairs with night-time mutations (Phosphor Sporebloom)",
      "Rare Egg accessibility",
    ],
    weaknesses: [
      "Drops to 2.0x during daytime",
      "Time-gated bonus",
      "Outclassed by A-Tier pets",
    ],
    imagePlaceholder: "/placeholder-pets-night-owl.png",
    tierRating: 5
  },
{
    id: "garden-turtle",
    name: "Garden Turtle",
    aliases: ["Turtle"],
    multiplier: 1.7,
    tier: "B",
    abilities: ["Crops grow 10% slower but yield 25% more coins"],
    source: "Basic Egg",
    description: "1.7x with a trade-off passive — slower growth but 25% higher yield per harvest. The effective value (~2.1x) is solid for patient farmers who don't mind longer cycles. Accessible from Basic Eggs.",
    strengths: [
      "Effective ~2.1x value with yield bonus",
      "Basic Egg accessibility (500 Coins)",
      "Excellent for slow-growing high-value crops",
    ],
    weaknesses: [
      "10% slower growth delays harvest cycles",
      "Lower base multiplier than Rare Egg B-Tier",
      "Trade-off passive is suboptimal for fast crops",
    ],
    imagePlaceholder: "/placeholder-pets-garden-turtle.png",
    tierRating: 5
  },
{
    id: "common-bunny",
    name: "Common Bunny",
    aliases: ["Bunny", "Garden Bunny"],
    multiplier: 1.3,
    tier: "C",
    abilities: ["+5% harvest animation speed"],
    source: "Basic Egg",
    description: "1.3x with a minor harvest-speed bonus. A basic C-Tier companion that provides small value. Note: not a rabbit-type pet — does not activate Leporine Bloom synergy.",
    strengths: [
      "Basic Egg accessibility (500 Coins)",
      "Minor speed bonus for active players",
      "Early-game companion",
    ],
    weaknesses: [
      "1.3x is weak C-Tier multiplier",
      "Not a rabbit-type — no Leporine Bloom synergy",
      "Replace with B-Tier or above when possible",
    ],
    imagePlaceholder: "/placeholder-pets-common-bunny.png",
    tierRating: 3
  },
{
    id: "garden-caterpillar",
    name: "Garden Caterpillar",
    aliases: ["Caterpillar"],
    multiplier: 1.1,
    tier: "C",
    abilities: ["+8% growth speed for adjacent crop plots"],
    source: "Basic Egg",
    description: "1.1x with an adjacency growth-speed bonus. Provides modest support value to neighboring plots but offers little direct farming benefit itself.",
    strengths: [
      "Adjacent-plot growth bonus supports neighboring crops",
      "Basic Egg accessibility",
      "Useful as a support pet on multi-plot farms",
    ],
    weaknesses: [
      "1.1x multiplier is near-useless directly",
      "Bonus only applies to adjacent plots",
      "Replace with stronger support pets when available",
    ],
    imagePlaceholder: "/placeholder-pets-garden-caterpillar.png",
    tierRating: 3
  },
{
    id: "garden-snail",
    name: "Garden Snail",
    aliases: ["Snail"],
    multiplier: 1.0,
    tier: "C",
    abilities: ["Leaves a slow trail — minor growth speed for trail tiles"],
    source: "Basic Egg",
    description: "1.0x with a near-negligible trail passive. Provides a tiny growth speed bonus to tiles it passes over. Functionally a collector's pet with minimal farming value.",
    strengths: [
      "Trail bonus stacks with other growth passives",
      "Basic Egg accessibility",
      "Unique slow-moving visual for collectors",
    ],
    weaknesses: [
      "1.0x provides zero direct farming benefit",
      "Trail bonus is marginal and tile-dependent",
      "Replace immediately with stronger pets",
    ],
    imagePlaceholder: "/placeholder-pets-garden-snail.png",
    tierRating: 3
  }
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
