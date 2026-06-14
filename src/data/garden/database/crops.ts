// ============================================================
// Grow a Garden — Canonical Crop Database
// Single source of truth for all crop entities.
// All page data files should import from here.
// ============================================================

/** crops interface */
export interface Crop {
  id: string;
  name: string;
  aliases: string[];
  coins: number;
  growthTime: string;
  growthSeconds: number;
  season: "All" | "Spring" | "Summer" | "Autumn" | "Winter";
  tier: "S" | "A" | "B" | "C";
  coinsPerMinute: number;
  description: string;
  imagePlaceholder: string;
  tierRating: number;
}

export const crops: Crop[] = [
{
    id: "golden-wheat",
    name: "Golden Wheat",
    aliases: [],
    coins: 480,
    growthTime: "3 min",
    growthSeconds: 180,
    season: "All",
    tier: "S",
    coinsPerMinute: 160,
    description: "The most profitable crop in the game at 160 coins-per-minute. All-season availability means you never need to rotate it out. Stacked with S-Tier mutation and pet, a single harvest yields 9,600 coins.",
    imagePlaceholder: "/placeholder-crops-golden-wheat.png",
    tierRating: 10
  },
{
    id: "crystal-berry",
    name: "Crystal Berry",
    aliases: [],
    coins: 420,
    growthTime: "5 min",
    growthSeconds: 300,
    season: "All",
    tier: "S",
    coinsPerMinute: 84,
    description: "Second most valuable all-season crop at 84 coins-per-minute. The longer 5-minute growth cycle means fewer replanting actions — ideal for semi-AFK farmers who check in periodically.",
    imagePlaceholder: "/placeholder-crops-crystal-berry.png",
    tierRating: 10
  },
{
    id: "neon-pumpkin",
    name: "Neon Pumpkin",
    aliases: [],
    coins: 380,
    growthTime: "8 min",
    growthSeconds: 480,
    season: "Autumn",
    tier: "A",
    coinsPerMinute: 48,
    description: "The most valuable seasonal crop during Autumn with a +20% seasonal bonus. Slow growth (8 min) but high per-harvest value. Switch to all-season crops in other seasons.",
    imagePlaceholder: "/placeholder-crops-neon-pumpkin.png",
    tierRating: 8
  },
{
    id: "frost-melon",
    name: "Frost Melon",
    aliases: [],
    coins: 350,
    growthTime: "6 min",
    growthSeconds: 360,
    season: "Winter",
    tier: "A",
    coinsPerMinute: 58,
    description: "Winter seasonal specialist at 58 coins-per-minute. Pairs well with Frost Wolf Pup and Hoarfrost Corolla for stacked Winter farming bonuses.",
    imagePlaceholder: "/placeholder-crops-frost-melon.png",
    tierRating: 8
  },
{
    id: "magma-pepper",
    name: "Magma Pepper",
    aliases: [],
    coins: 320,
    growthTime: "4 min",
    growthSeconds: 240,
    season: "Summer",
    tier: "A",
    coinsPerMinute: 80,
    description: "Fast-growing Summer crop at 80 coins-per-minute. The 4-minute growth cycle rewards active players. Pairs with Magma Lizard Hatchling and Igneous Spore.",
    imagePlaceholder: "/placeholder-crops-magma-pepper.png",
    tierRating: 8
  },
{
    id: "lucky-carrot",
    name: "Lucky Carrot",
    aliases: [],
    coins: 280,
    growthTime: "2 min",
    growthSeconds: 120,
    season: "Spring",
    tier: "B",
    coinsPerMinute: 140,
    description: "The fastest non-C-tier crop at 140 coins-per-minute. Excellent for active players in Spring. The short growth cycle demands frequent attention but rewards with high throughput.",
    imagePlaceholder: "/placeholder-crops-lucky-carrot.png",
    tierRating: 6
  },
{
    id: "moonflower",
    name: "Moonflower",
    aliases: [],
    coins: 260,
    growthTime: "10 min",
    growthSeconds: 600,
    season: "All",
    tier: "B",
    coinsPerMinute: 26,
    description: "Slowest all-season crop at 26 coins-per-minute. The 10-minute cycle is ideal for AFK players — plant and forget. Low profit rate but minimal attention required.",
    imagePlaceholder: "/placeholder-crops-moonflower.png",
    tierRating: 6
  },
{
    id: "blaze-berry",
    name: "Blaze Berry",
    aliases: [],
    coins: 240,
    growthTime: "3 min",
    growthSeconds: 180,
    season: "Summer",
    tier: "B",
    coinsPerMinute: 80,
    description: "Summer seasonal at 80 coins-per-minute. Fast growth but lower per-harvest value than Magma Pepper. A weaker Summer alternative — phase out for Magma Pepper when available.",
    imagePlaceholder: "/placeholder-crops-blaze-berry.png",
    tierRating: 6
  },
{
    id: "sun-tomato",
    name: "Sun Tomato",
    aliases: [],
    coins: 200,
    growthTime: "1 min",
    growthSeconds: 60,
    season: "Summer",
    tier: "C",
    coinsPerMinute: 200,
    description: "Technically the highest coins-per-minute crop at 200, but only grows in Summer and requires constant attention (1-min cycle). Impractical for sustained farming but fun for speed-challenge sessions.",
    imagePlaceholder: "/placeholder-crops-sun-tomato.png",
    tierRating: 4
  },
{
    id: "basic-potato",
    name: "Basic Potato",
    aliases: [],
    coins: 100,
    growthTime: "30 sec",
    growthSeconds: 30,
    season: "All",
    tier: "C",
    coinsPerMinute: 200,
    description: "Fast all-season crop at 200 coins-per-minute raw rate. The 30-second cycle demands near-constant attention. Useful for tutorial/introduction but impractical for sustained farming.",
    imagePlaceholder: "/placeholder-crops-basic-potato.png",
    tierRating: 4
  },
{
    id: "wild-grass",
    name: "Wild Grass",
    aliases: [],
    coins: 50,
    growthTime: "15 sec",
    growthSeconds: 15,
    season: "All",
    tier: "C",
    coinsPerMinute: 200,
    description: "The fastest crop at 200 coins-per-minute raw rate but lowest per-harvest value (50 coins). Free starter seed. Replace immediately — every other crop is more profitable per action.",
    imagePlaceholder: "/placeholder-crops-wild-grass.png",
    tierRating: 4
  }
];

export function getCropById(id: string): Crop | undefined {
  return crops.find((c) => c.id === id);
}

export function getCropByName(name: string): Crop | undefined {
  return crops.find(
    (c) => c.name.toLowerCase() === name.toLowerCase() ||
      c.aliases.some((a) => a.toLowerCase() === name.toLowerCase())
  );
}

export function getCropsByTier(tier: Crop["tier"]): Crop[] {
  return crops.filter((c) => c.tier === tier);
}

export function getCropsBySeason(season: Crop["season"]): Crop[] {
  return crops.filter((c) => c.season === season || c.season === "All");
}
