import type { CropValuesPageData } from "../types";
import { crops, getCropsByTier } from "./database/crops";

function buildCropValuesData(): CropValuesPageData {
  const sTierCrops = getCropsByTier("S");
  const aTierCrops = getCropsByTier("A");
  const bTierCrops = getCropsByTier("B");
  const cTierCrops = getCropsByTier("C");

  const tierColors: Record<string, string> = {
    S: "#FF3D00",
    A: "#FF8C00",
    B: "#FFD700",
    C: "#3A86FF",
  };

  const allCropsSorted = [...crops].sort((a, b) => b.coins - a.coins);

  return {
    title: "Grow a Garden Crop Values — Price Sheet",
    description: "Complete crop value sheet with base coin prices, growth times, seasonal availability, and profit-per-minute for every Grow a Garden crop. Includes multiplier stacking calculations.",
    updatedAt: "July 7, 2026",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Grow a Garden Crop Value List", href: "/grow-a-garden/crop-value-list" },
    ],
    crops: allCropsSorted.map((c) => ({
      name: c.name,
      coins: c.coins,
      time: c.growthTime,
      season: c.season,
      tier: c.tier,
    })),
    profitStacks: [
      { name: "Golden Wheat", base: 480, sMut: "1,920", sMutPet: "9,600", ppm: "160" },
      { name: "Crystal Berry", base: 420, sMut: "1,680", sMutPet: "8,400", ppm: "84" },
      { name: "Neon Pumpkin", base: 380, sMut: "1,520", sMutPet: "7,600", ppm: "48" },
      { name: "Frost Melon", base: 350, sMut: "1,400", sMutPet: "7,000", ppm: "58" },
      { name: "Magma Pepper", base: 320, sMut: "1,280", sMutPet: "6,400", ppm: "80" },
      { name: "Lucky Carrot", base: 280, sMut: "1,120", sMutPet: "5,600", ppm: "140" },
    ],
    tierDetails: [
      {
        name: sTierCrops.map((c) => c.name).join(", "),
        why: "S-Tier crops offer the best combination of coin value, growth time, and availability. Golden Wheat leads at 160 coins-per-minute with Crystal Berry close behind for semi-AFK farming.",
        color: tierColors.S,
      },
      {
        name: aTierCrops.map((c) => c.name).join(", "),
        why: "A-Tier seasonal crops offer excellent returns during their active seasons with a +20% seasonal bonus. Off-season penalty prevents them from matching S-Tier consistency year-round.",
        color: tierColors.A,
      },
      {
        name: bTierCrops.map((c) => c.name).join(", "),
        why: "B-Tier crops are viable alternatives with specific niches — fast growth (Lucky Carrot), AFK-friendly (Moonflower), or seasonal (Blaze Berry). Phase out for higher tiers when available.",
        color: tierColors.B,
      },
      {
        name: cTierCrops.map((c) => c.name).join(", "),
        why: "Starter crops for new players. Fast growth cycles demand constant attention. Replace all C-Tier crops as soon as you can afford S-Tier or seasonal A-Tier seeds.",
        color: tierColors.C,
      },
    ],
    strategyTips: [
      "<strong>Main plots:</strong> Always plant Golden Wheat or Crystal Berry with your best mutation. These all-season S-Tier crops provide maximum consistent income year-round.",
      "<strong>Secondary plots:</strong> Rotate seasonal crops (Neon Pumpkin in Autumn, etc.) during their active window for the +20% bonus. Switch to Moonflower or Lucky Carrot in off-seasons.",
      "<strong>Use Double Harvest Boosts</strong> (from promo codes) on your highest-value crop right before harvest. One boost on a fully stacked Golden Wheat can yield 19,200 coins.",
      "<strong>Active vs AFK farming:</strong> If you play actively, prioritize short-cycle crops (Golden Wheat, Lucky Carrot). For AFK sessions, plant longer-cycle crops (Crystal Berry, Moonflower).",
    ],
    faq: [
      { question: "Which crop has the highest recorded coins-per-minute?", answer: "Golden Wheat (S-Tier) is recorded at 480 coins per 3 minutes — 160 coins-per-minute, the highest recorded CPM value in this dataset. Crystal Berry follows at a recorded 84 coins-per-minute with a longer growth time." },
      { question: "How do mutations and pets affect crop values?", answer: "Mutations multiply the base crop value, and pets multiply the result again. Example: Golden Wheat (480) x Aurelian Crown mutation (4.0x) = 1,920 coins. Add Golden Phoenix Chick (5.0x) = 9,600 coins per harvest." },
      { question: "Should I plant all-season or seasonal crops?", answer: "All-season crops provide consistent income year-round for your main plots. Plant seasonal crops on secondary plots to capitalize on the +20% seasonal bonus when active — then switch back in the off-season." },
    ],
    relatedGuides: [
      { label: "Mutation Tier List", href: "/grow-a-garden/mutation-tier-list", description: "Multiply your crop values with the best mutations" },
      { label: "Pet Tier List", href: "/grow-a-garden/pet-tier-list", description: "Stack pet multipliers on your harvests" },
      { label: "Active Codes", href: "/grow-a-garden/codes", description: "Get Double Harvest Boosts from promo codes" },
    ],
  };
}

const data = buildCropValuesData();
export default data;
