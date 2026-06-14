// Grow a Garden — Best Crops Guide Data
import type { GuidePageData } from "@/data/types";

const bestCrops: GuidePageData & {
  intro: string;
  topCrops: {
    name: string;
    tier: string;
    coins: number;
    growthTime: string;
    season: string;
    coinsPerMinute: number;
    tierRating: number;
    why: string;
    bestWith: string;
    imagePlaceholder: string;
  }[];
  strategyTips: string[];
} = {
  title: "Best Crops Guide — Grow a Garden (June 2026)",
  description: "Discover the absolute best crops in Grow a Garden ranked by coins-per-minute, seasonal value, and endgame profit potential. Updated for June 2026.",
  updatedAt: "June 2026",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Grow a Garden", href: "/grow-a-garden" },
    { label: "Best Crops Guide", href: "/grow-a-garden/best-crops" },
  ],
  faq: [
    {
      question: "What is the best crop in Grow a Garden?",
      answer: "Golden Wheat is the undisputed best crop at 160 coins-per-minute with all-season availability. It requires no seasonal rotation and stacks multiplicatively with the best mutations and pets for up to 20× total yield.",
    },
    {
      question: "Should I plant seasonal or all-season crops?",
      answer: "All-season crops like Golden Wheat and Crystal Berry are more consistent and require less management. Seasonal crops can outperform during their active season with the +20% bonus but must be rotated. Use seasonal crops on secondary plots and all-season on your main plot.",
    },
    {
      question: "What crop gives the most coins per harvest?",
      answer: "Golden Wheat gives 480 coins per harvest — the highest in the game. With a 4.0× mutation and 5.0× pet, a single harvest can yield 9,600 coins.",
    },
    {
      question: "Are fast-growing crops better than slow ones?",
      answer: "It depends on your playstyle. Fast crops like Lucky Carrot (2 min, 140 CPM) reward active players who harvest frequently. Slow crops like Moonflower (10 min, 26 CPM) are better for AFK farming. Golden Wheat (3 min, 160 CPM) is the ideal middle ground.",
    },
  ],
  relatedGuides: [
    { label: "Crop Value List", href: "/grow-a-garden/crop-value-list", description: "Complete crop value sheet with base prices and mutation bonuses" },
    { label: "All Crops Database", href: "/grow-a-garden/crops", description: "Browse every crop in the Grow a Garden database" },
    { label: "Money Making Guide", href: "/grow-a-garden/money-making-guide", description: "Maximize your coins per hour" },
  ],
  intro: "Choosing the right crop is the foundation of a profitable farm. This guide ranks every crop by raw coins-per-minute (CPM), seasonal value, and endgame potential. We factor in growth time, seasonal bonuses, and synergy with mutations and pets to give you the definitive crop tier ranking.",
  topCrops: [
    {
      name: "Golden Wheat",
      tier: "S",
      coins: 480,
      growthTime: "3 min",
      season: "All",
      coinsPerMinute: 160,
      tierRating: 10,
      why: "Highest CPM in the game with zero seasonal restrictions. Plant it and forget it — Golden Wheat is the only crop you need on your main plot year-round.",
      bestWith: "Aurelian Crown (4.0×) + Golden Phoenix Chick (5.0×) = 20.0× total yield (9,600 coins/harvest)",
      imagePlaceholder: "/placeholder-crop-golden-wheat.png",
    },
    {
      name: "Crystal Berry",
      tier: "S",
      coins: 420,
      growthTime: "5 min",
      season: "All",
      coinsPerMinute: 84,
      tierRating: 9,
      why: "Second-best all-season crop with a longer 5-minute cycle — perfect for semi-AFK players who check in every few minutes. Less replanting actions mean less active management.",
      bestWith: "Crystalline Mycelium (3.5×) + Crystal Unicorn Foal (4.5×) = 15.75× total yield",
      imagePlaceholder: "/placeholder-crop-crystal-berry.png",
    },
    {
      name: "Magma Pepper",
      tier: "A",
      coins: 320,
      growthTime: "4 min",
      season: "Summer",
      coinsPerMinute: 80,
      tierRating: 7,
      why: "Fast-growing Summer specialist at 80 CPM. The 4-minute cycle rewards active players, and the Summer +20% seasonal bonus pushes it above Crystal Berry during Summer months.",
      bestWith: "Igneous Spore (2.25× Summer) + Magma Lizard Hatchling (3.0× Summer) = 6.75× total (Summer)",
      imagePlaceholder: "/placeholder-crop-magma-pepper.png",
    },
    {
      name: "Neon Pumpkin",
      tier: "A",
      coins: 380,
      growthTime: "8 min",
      season: "Autumn",
      coinsPerMinute: 48,
      tierRating: 8,
      why: "Highest per-harvest value among seasonal crops at 380 coins. The 8-minute cycle is ideal for AFK players. With the Autumn +20% bonus, it's the best seasonal crop for pure profit per harvest.",
      bestWith: "Basalt Carapace (2.8×) for pest immunity on your most valuable plot",
      imagePlaceholder: "/placeholder-crop-neon-pumpkin.png",
    },
    {
      name: "Frost Melon",
      tier: "A",
      coins: 350,
      growthTime: "6 min",
      season: "Winter",
      coinsPerMinute: 58,
      tierRating: 7,
      why: "Winter seasonal at 58 CPM with excellent synergy with Winter pets and mutations. Pairs naturally with Frost Wolf Pup and Hoarfrost Corolla for stacked Winter farming.",
      bestWith: "Hoarfrost Corolla (2.5× Winter) + Frost Wolf Pup (2.7× Winter) = 6.75× total (Winter)",
      imagePlaceholder: "/placeholder-crop-frost-melon.png",
    },
    {
      name: "Lucky Carrot",
      tier: "B",
      coins: 280,
      growthTime: "2 min",
      season: "Spring",
      coinsPerMinute: 140,
      tierRating: 6,
      why: "The fastest non-C-tier crop at 140 CPM. Excellent for active players in Spring. The 2-minute cycle demands frequent attention but rewards with throughput approaching Golden Wheat levels.",
      bestWith: "Phosphor Sporebloom (3.2× night) for active night farmers",
      imagePlaceholder: "/placeholder-crop-lucky-carrot.png",
    },
  ],
  strategyTips: [
    "Main plot: Always plant Golden Wheat. It's the best crop in the game and the foundation of any profitable farm.",
    "Secondary plots: Rotate seasonal crops (Magma Pepper → Neon Pumpkin → Frost Melon → Lucky Carrot) for the +20% seasonal bonus.",
    "AFK farming: Use Crystal Berry or Neon Pumpkin on your main plot. Longer growth cycles mean less management.",
    "Active farming: Lucky Carrot and Magma Pepper reward frequent harvesting with high throughput.",
    "Never plant Wild Grass or Basic Potato past the tutorial. Their 200 CPM is misleading — the 15-30 second cycles require impossibly constant attention.",
    "Profit stacking: S-Tier mutation (4.0×) × S-Tier pet (5.0×) = 20.0× total multiplier. Even C-Tier crops become profitable with this stack.",
  ],
};

export default bestCrops;
