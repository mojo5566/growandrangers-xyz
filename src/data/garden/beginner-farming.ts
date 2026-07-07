// Grow a Garden — Beginner Farming Guide Data
import type { GuidePageData } from "@/data/types";

const beginnerFarming: GuidePageData & {
  intro: string;
  steps: { step: number; title: string; description: string; tip: string }[];
  firstDayGoals: string[];
  mistakes: { title: string; desc: string }[];
} = {
  title: "Beginner Farming Guide — Grow a Garden (July 2026)",
  description: "New to Grow a Garden? This step-by-step beginner farming guide covers everything from your first plot to mid-game profitability. Start growing the right way.",
  updatedAt: "June 2026",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Grow a Garden", href: "/grow-a-garden" },
    { label: "Beginner Farming Guide", href: "/grow-a-garden/beginner-farming" },
  ],
  faq: [
    {
      question: "What's the first thing I should do in Grow a Garden?",
      answer: "Start with Wild Grass (free starter seed), harvest it a few times to earn your first coins, then immediately buy Basic Potato seeds. Once you have 500 Coins, buy a Basic Egg for your first pet. The goal is to reach Golden Wheat seeds as quickly as possible.",
    },
    {
      question: "How do I get Golden Wheat seeds?",
      answer: "Golden Wheat seeds are purchased from the Seed Shop for 2,000 Coins. It's the best investment in the game — Golden Wheat pays for itself in just 5 harvests and then generates pure profit forever.",
    },
    {
      question: "How do I get my first mutation?",
      answer: "Mutations are rolled using Mutation Shards in the Gene Lab. You earn Mutation Shards from daily quests, harvesting crops, and promo codes. Roll as soon as you have enough shards — even a C-Tier mutation is better than no mutation.",
    },
    {
      question: "What should I spend my first Coins on?",
      answer: "Priority order: (1) Better seeds (Basic Potato → Lucky Carrot → Golden Wheat), (2) Basic Egg for first pet, (3) Rare Egg for better pet odds, (4) Mutation Shards for Gene Lab, (5) Save for Legendary Egg (10,000 Coins).",
    },
  ],
  relatedGuides: [
    { label: "Money Making Guide", href: "/grow-a-garden/money-making-guide", description: "Maximize your coins per hour" },
    { label: "Best Crops Guide", href: "/grow-a-garden/best-crops", description: "Which crops to plant and when" },
    { label: "Active Codes", href: "/grow-a-garden/codes", description: "Free Coins and Shards from promo codes" },
  ],
  intro: "Welcome to Grow a Garden! This guide walks you through your first farming session, from planting your first seed to building a profitable multi-plot farm. Follow these steps and you'll be earning thousands of Coins per harvest in no time.",
  steps: [
    {
      step: 1,
      title: "Plant Your First Seed (Wild Grass)",
      description: "Every new farmer starts with Wild Grass seeds. Plant one in your starter plot. It grows in 15 seconds and sells for 50 Coins. Harvest it a few times to understand the plant → wait → harvest loop.",
      tip: "💡 Don't get comfortable with Wild Grass. While its 200 CPM looks impressive on paper, the 15-second cycle requires constant clicking. Upgrade immediately.",
    },
    {
      step: 2,
      title: "Upgrade to Basic Potato",
      description: "Use your first 100 Coins to buy Basic Potato seeds from the Seed Shop. At 100 Coins per harvest with a 30-second growth cycle, you'll quickly build capital for better seeds.",
      tip: "💡 Basic Potato earns 100 Coins in 30 seconds. That means in 5 minutes you'll have 1,000 Coins — enough for your first Rare Egg or Lucky Carrot seeds.",
    },
    {
      step: 3,
      title: "Buy Your First Egg",
      description: "Once you have 500 Coins, buy a Basic Egg from the Pet Shop. Hatch it to get your first pet. Even a C-Tier pet provides a multiplier that stacks with everything.",
      tip: "💡 Any pet is better than no pet. Even Common Garden Cat (1.2×) increases your income by 20%. That's free money.",
    },
    {
      step: 4,
      title: "Unlock Lucky Carrot",
      description: "Save 800 Coins and buy Lucky Carrot seeds. At 140 CPM with a 2-minute cycle, this is the best early-game crop. Plant it and watch your coin balance grow.",
      tip: "💡 Lucky Carrot is the fastest path to Golden Wheat. Plant it, harvest consistently, and you'll have 2,000 Coins for Golden Wheat in about 15 minutes.",
    },
    {
      step: 5,
      title: "Buy Golden Wheat Seeds",
      description: "This is the turning point. Spend 2,000 Coins on Golden Wheat seeds — the best crop in the game. At 160 CPM with all-season availability, you never need to rotate it out.",
      tip: "💡 Golden Wheat is the only crop you need on your main plot. It pays for itself in 5 harvests and then prints profit forever. This is the 'I beat the tutorial' moment.",
    },
    {
      step: 6,
      title: "Roll Your First Mutation",
      description: "By now you've earned Mutation Shards from harvests and daily quests. Visit the Gene Lab and roll for your first mutation. Even a C-Tier mutation (1.3×+) is better than nothing.",
      tip: "💡 The first mutation is always a gamble. Don't stress if you get a C-Tier — just keep rolling. Save for A/S-Tier mutations once your farm is profitable.",
    },
    {
      step: 7,
      title: "Expand to Multiple Plots",
      description: "Use your growing coin balance to unlock additional plots. Start with 3 plots: one main (Golden Wheat) and two seasonal rotation plots. More plots = more simultaneous harvests = more coins.",
      tip: "💡 Don't expand too fast. Each plot needs a seed, a mutation, and ideally a pet. Expand gradually as your resources allow.",
    },
  ],
  firstDayGoals: [
    "Reach Golden Wheat on your main plot",
    "Hatch at least one pet (any tier)",
    "Roll at least one mutation (any tier)",
    "Unlock 2-3 plots for simultaneous farming",
    "Save 2,000+ Coins for the next day's upgrades",
  ],
  mistakes: [
    {
      title: "Sticking with Wild Grass too long",
      desc: "Wild Grass has the highest raw CPM (200) but requires a harvest every 15 seconds. You'll burn out. Upgrade to Basic Potato and then Lucky Carrot as fast as possible.",
    },
    {
      title: "Buying Rare Eggs before Golden Wheat",
      desc: "Rare Eggs cost 2,000 Coins — the same as Golden Wheat seeds. Golden Wheat is a guaranteed income upgrade. A Rare Egg is a gamble. Prioritize the guaranteed return first.",
    },
    {
      title: "Expanding plots too fast",
      desc: "Each additional plot costs more coins and requires more management. Unlock plots one at a time and make sure each is fully set up before buying the next.",
    },
    {
      title: "Ignoring seasonal crops",
      desc: "Once you have Golden Wheat, seasonal crops on secondary plots can earn more than a second Golden Wheat plot during their active season. The +20% seasonal bonus is significant.",
    },
  ],
};

export default beginnerFarming;
