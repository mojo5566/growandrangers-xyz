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
    aliases: ["Gold Wheat", "Premium Wheat"],
    coins: 480,
    growthTime: "3 min",
    growthSeconds: 180,
    season: "All",
    tier: "S",
    coinsPerMinute: 160,
    description: "The highest recorded coins-per-minute crop in this dataset at 160 coins-per-minute. All-season availability means you never need to rotate it out. Stacked with S-Tier mutation and pet, the in-game stacking math yields 9,600 coins in a single harvest.",
    imagePlaceholder: "/placeholder-crops-golden-wheat.png",
    tierRating: 10
  },
{
    id: "crystal-berry",
    name: "Crystal Berry",
    aliases: ["Crystalfruit", "Gem Berry"],
    coins: 420,
    growthTime: "5 min",
    growthSeconds: 300,
    season: "All",
    tier: "S",
    coinsPerMinute: 84,
    description: "Second-highest recorded coins-per-minute among all-season entries in this dataset at 84 coins-per-minute. The longer 5-minute growth cycle means fewer replanting actions — ideal for semi-AFK farmers who check in periodically.",
    imagePlaceholder: "/placeholder-crops-crystal-berry.png",
    tierRating: 10
  },
{
    id: "neon-pumpkin",
    name: "Neon Pumpkin",
    aliases: ["Glow Pumpkin", "Neon Jack"],
    coins: 380,
    growthTime: "8 min",
    growthSeconds: 480,
    season: "Autumn",
    tier: "A",
    coinsPerMinute: 48,
    description: "The Autumn seasonal entry in this dataset with a recorded +20% seasonal bonus label. Slow growth (8 min) but high per-harvest value. Switch to all-season crops in other seasons.",
    imagePlaceholder: "/placeholder-crops-neon-pumpkin.png",
    tierRating: 8
  },
{
    id: "frost-melon",
    name: "Frost Melon",
    aliases: ["Ice Melon", "Winter Melon"],
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
    aliases: ["Lava Pepper", "Hot Pepper"],
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
    aliases: ["Fortune Carrot", "Four-Leaf Carrot"],
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
    aliases: ["Moon Bloom", "Lunar Flower"],
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
    aliases: ["Fire Berry", "Ember Berry"],
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
    aliases: ["Solar Tomato", "Sunrise Tomato"],
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
    aliases: ["Common Potato", "Spud"],
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
    aliases: ["Starter Grass", "Field Grass"],
    coins: 50,
    growthTime: "15 sec",
    growthSeconds: 15,
    season: "All",
    tier: "C",
    coinsPerMinute: 200,
    description: "The fastest crop at 200 coins-per-minute raw rate but lowest per-harvest value (50 coins). Free starter seed. Replace immediately — every other crop is more profitable per action.",
    imagePlaceholder: "/placeholder-crops-wild-grass.png",
    tierRating: 4
  },
  {
    id: "star-melon",
    name: "Star Melon",
    aliases: ["Starfruit Melon", "Celestial Melon"],
    coins: 500,
    growthTime: "4 min",
    growthSeconds: 240,
    season: "All",
    tier: "S",
    coinsPerMinute: 125,
    description: "A celestial melon that shimmers with starlight. Third-highest recorded coins-per-minute among all-season entries in this dataset, pairing high per-harvest value with a manageable 4-minute cycle for sustained S-Tier farming.",
    imagePlaceholder: "/placeholder-crops-star-melon.png",
    tierRating: 96
  },
  {
    id: "phoenix-bloom",
    name: "Phoenix Bloom",
    aliases: ["Fire Blossom", "Ember Bloom"],
    coins: 520,
    growthTime: "5 min",
    growthSeconds: 300,
    season: "Summer",
    tier: "S",
    coinsPerMinute: 104,
    description: "The Summer seasonal entry with the highest recorded coins-per-minute among Summer-label entries in this dataset at 104 coins-per-minute. Reborn from seasonal ashes; its 5-minute cycle limits throughput. Stack with Summer pets for the highest calculated yield.",
    imagePlaceholder: "/placeholder-crops-phoenix-bloom.png",
    tierRating: 97
  },
  {
    id: "dragon-fruit",
    name: "Dragon Fruit",
    aliases: ["Pitaya", "Dragonfruit"],
    coins: 300,
    growthTime: "4 min",
    growthSeconds: 240,
    season: "All",
    tier: "A",
    coinsPerMinute: 75,
    description: "The strongest all-season A-Tier crop at 75 coins-per-minute. Its spiky exterior hides a high-value harvest. A reliable fallback when S-Tier seeds are scarce.",
    imagePlaceholder: "/placeholder-crops-dragon-fruit.png",
    tierRating: 85
  },
  {
    id: "watermelon",
    name: "Watermelon",
    aliases: ["Water Melon", "Summer Melon"],
    coins: 340,
    growthTime: "7 min",
    growthSeconds: 420,
    season: "Summer",
    tier: "A",
    coinsPerMinute: 49,
    description: "Highest per-harvest value among Summer A-Tier crops at 340 coins. The slow 7-minute cycle suits semi-AFK play. Best paired with Phoenix Bloom for alternating Summer harvests.",
    imagePlaceholder: "/placeholder-crops-watermelon.png",
    tierRating: 86
  },
  {
    id: "grape",
    name: "Grape",
    aliases: ["Grapes", "Vine Fruit"],
    coins: 290,
    growthTime: "5 min",
    growthSeconds: 300,
    season: "Autumn",
    tier: "A",
    coinsPerMinute: 58,
    description: "Top Autumn A-Tier crop at 58 coins-per-minute. Grows in clustered vines, yielding multiple harvests per plot. Pairs with Neon Pumpkin for stacked Autumn bonuses.",
    imagePlaceholder: "/placeholder-crops-grape.png",
    tierRating: 84
  },
  {
    id: "apple",
    name: "Apple",
    aliases: ["Orchard Apple", "Red Apple"],
    coins: 270,
    growthTime: "6 min",
    growthSeconds: 360,
    season: "Autumn",
    tier: "A",
    coinsPerMinute: 45,
    description: "Slow-growing Autumn staple at 45 coins-per-minute. The 6-minute cycle rewards patient farmers. A solid A-Tier choice for players who check in less frequently.",
    imagePlaceholder: "/placeholder-crops-apple.png",
    tierRating: 82
  },
  {
    id: "melon",
    name: "Melon",
    aliases: ["Honeydew", "Winter Melon"],
    coins: 310,
    growthTime: "5 min 30 sec",
    growthSeconds: 330,
    season: "Winter",
    tier: "A",
    coinsPerMinute: 56,
    description: "The premier Winter A-Tier crop at 56 coins-per-minute. Hardy enough to thrive in frost, it complements Frost Melon in a Winter rotation. The 5.5-minute cycle balances value and frequency.",
    imagePlaceholder: "/placeholder-crops-melon.png",
    tierRating: 87
  },
  {
    id: "strawberry",
    name: "Strawberry",
    aliases: ["Berries", "Sweet Berry"],
    coins: 220,
    growthTime: "3 min",
    growthSeconds: 180,
    season: "Spring",
    tier: "B",
    coinsPerMinute: 73,
    description: "Top Spring B-Tier crop at 73 coins-per-minute. Fast 3-minute growth and decent per-harvest value make it the workhorse of active Spring farming. Phase out for Lucky Carrot when seeds are available.",
    imagePlaceholder: "/placeholder-crops-strawberry.png",
    tierRating: 72
  },
  {
    id: "blueberry",
    name: "Blueberry",
    aliases: ["Blue Berry", "Bush Berry"],
    coins: 180,
    growthTime: "2 min 30 sec",
    growthSeconds: 150,
    season: "Spring",
    tier: "B",
    coinsPerMinute: 72,
    description: "Fast Spring B-Tier crop at 72 coins-per-minute. The 2.5-minute cycle rewards attentive players. Lower per-harvest value than Strawberry but higher throughput.",
    imagePlaceholder: "/placeholder-crops-blueberry.png",
    tierRating: 70
  },
  {
    id: "cherry",
    name: "Cherry",
    aliases: ["Cherries", "Orchard Cherry"],
    coins: 230,
    growthTime: "4 min",
    growthSeconds: 240,
    season: "Spring",
    tier: "B",
    coinsPerMinute: 58,
    description: "Spring B-Tier crop at 58 coins-per-minute. Higher per-harvest value than Strawberry with a longer 4-minute cycle. Best for players who prefer fewer replanting actions.",
    imagePlaceholder: "/placeholder-crops-cherry.png",
    tierRating: 74
  },
  {
    id: "corn",
    name: "Corn",
    aliases: ["Maize", "Sweet Corn"],
    coins: 160,
    growthTime: "3 min 30 sec",
    growthSeconds: 210,
    season: "All",
    tier: "B",
    coinsPerMinute: 46,
    description: "Reliable all-season B-Tier crop at 46 coins-per-minute. A balanced 3.5-minute cycle makes it a steady earner year-round. Good filler between higher-tier harvests.",
    imagePlaceholder: "/placeholder-crops-corn.png",
    tierRating: 65
  },
  {
    id: "pumpkin",
    name: "Pumpkin",
    aliases: ["Field Pumpkin", "Autumn Pumpkin"],
    coins: 200,
    growthTime: "5 min",
    growthSeconds: 300,
    season: "Autumn",
    tier: "B",
    coinsPerMinute: 40,
    description: "Standard Autumn B-Tier crop at 40 coins-per-minute. The common cousin of Neon Pumpkin — lower value but easier to acquire. A solid backup when Neon Pumpkin seeds run out.",
    imagePlaceholder: "/placeholder-crops-pumpkin.png",
    tierRating: 68
  },
  {
    id: "peach",
    name: "Peach",
    aliases: ["Orchard Peach", "Stone Fruit"],
    coins: 190,
    growthTime: "4 min",
    growthSeconds: 240,
    season: "Autumn",
    tier: "B",
    coinsPerMinute: 48,
    description: "Autumn B-Tier crop at 48 coins-per-minute. A sweet mid-tier harvest with a comfortable 4-minute cycle. Pairs well with Grape for a varied Autumn rotation.",
    imagePlaceholder: "/placeholder-crops-peach.png",
    tierRating: 67
  },
  {
    id: "cabbage",
    name: "Cabbage",
    aliases: ["Winter Cabbage", "Leaf Cabbage"],
    coins: 150,
    growthTime: "3 min",
    growthSeconds: 180,
    season: "Winter",
    tier: "B",
    coinsPerMinute: 50,
    description: "Winter B-Tier crop at 50 coins-per-minute. A hardy vegetable that thrives in cold. The fast 3-minute cycle makes it ideal for active Winter farming alongside Frost Melon.",
    imagePlaceholder: "/placeholder-crops-cabbage.png",
    tierRating: 62
  },
  {
    id: "lettuce",
    name: "Lettuce",
    aliases: ["Salad Leaf", "Garden Lettuce"],
    coins: 90,
    growthTime: "1 min",
    growthSeconds: 60,
    season: "Spring",
    tier: "C",
    coinsPerMinute: 90,
    description: "Fast Spring C-Tier crop at 90 coins-per-minute raw rate. The 1-minute cycle demands constant replanting but offers decent throughput for beginners. Replace with Strawberry when possible.",
    imagePlaceholder: "/placeholder-crops-lettuce.png",
    tierRating: 50
  },
  {
    id: "radish",
    name: "Radish",
    aliases: ["Red Radish", "Root Radish"],
    coins: 80,
    growthTime: "45 sec",
    growthSeconds: 45,
    season: "Summer",
    tier: "C",
    coinsPerMinute: 107,
    description: "The fastest Summer C-Tier crop at 107 coins-per-minute raw rate. The 45-second cycle is punishing but profitable for speed-farmers. A step up from Sun Tomato for attentive players.",
    imagePlaceholder: "/placeholder-crops-radish.png",
    tierRating: 48
  },
  {
    id: "pear",
    name: "Pear",
    aliases: ["Orchard Pear", "Winter Pear"],
    coins: 120,
    growthTime: "2 min",
    growthSeconds: 120,
    season: "Winter",
    tier: "C",
    coinsPerMinute: 60,
    description: "Winter C-Tier crop at 60 coins-per-minute. A balanced 2-minute cycle offers a middle ground between fast and slow C-Tier options. Decent starter crop for new Winter farmers.",
    imagePlaceholder: "/placeholder-crops-pear.png",
    tierRating: 52
  },
  {
    id: "bean",
    name: "Bean",
    aliases: ["Green Bean", "String Bean"],
    coins: 70,
    growthTime: "1 min 30 sec",
    growthSeconds: 90,
    season: "All",
    tier: "C",
    coinsPerMinute: 47,
    description: "All-season C-Tier crop at 47 coins-per-minute. The 1.5-minute cycle is manageable for new players. A marginal upgrade over Basic Potato for those seeking slightly longer intervals.",
    imagePlaceholder: "/placeholder-crops-bean.png",
    tierRating: 45
  },
  {
    id: "sunflower",
    name: "Sunflower",
    aliases: ["Sun Flower", "Field Sunflower"],
    coins: 110,
    growthTime: "2 min 30 sec",
    growthSeconds: 150,
    season: "All",
    tier: "C",
    coinsPerMinute: 44,
    description: "All-season C-Tier crop at 44 coins-per-minute. The 2.5-minute cycle and cheerful bloom make it a popular starter choice. Outclassed by Corn but easier to obtain early.",
    imagePlaceholder: "/placeholder-crops-sunflower.png",
    tierRating: 55
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
