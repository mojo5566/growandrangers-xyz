import type { TierListPageData } from "../types";
import { pets, getPetsByTier } from "./database/pets";

function buildPetTierListData(): TierListPageData {
  const sTier = getPetsByTier("S");
  const aTier = getPetsByTier("A");
  const bTier = getPetsByTier("B");
  const cTier = getPetsByTier("C");

  const tierColors: Record<string, string> = {
    S: "#FF3D00",
    A: "#FF8C00",
    B: "#FFD700",
    C: "#3A86FF",
  };

  const tierLabels: Record<string, string> = {
    S: "Best-in-slot",
    A: "Excellent",
    B: "Solid",
    C: "Budget",
  };

  const tierDescs: Record<string, string> = {
    S: "The undisputed best pets. Unmatched crop multipliers and game-changing passives. Any serious farmer should prioritize hatching one of these.",
    A: "Strong pets that are slightly below S-Tier in raw power or require specific conditions. Much easier to hatch and still highly effective.",
    B: "Good pets that excel in specific situations — seasonal farming, utility tasks, or budget-friendly setups.",
    C: "Entry-level pets that new players start with. Replace as soon as you can afford a B-Tier or higher egg.",
  };

  const tierOrder = ["S", "A", "B", "C"] as const;

  return {
    title: "Grow a Garden Pet Tier List — All Hatchable Pets Ranked (2026)",
    description: "Every Grow a Garden pet ranked from S-Tier to C-Tier based on crop value multiplier, special abilities, seasonal bonuses, hatching odds, and mutation synergy. Build your perfect farm team.",
    updatedAt: "June 8, 2026",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Grow a Garden Pet Tier List", href: "/grow-a-garden/pet-tier-list" },
    ],
    tierExplanation: tierOrder.map((t) => ({
      tier: t,
      color: tierColors[t],
      label: tierLabels[t],
      desc: t === "S" ? "Highest multipliers; must-have pets"
        : t === "A" ? "Strong alternatives; great synergy"
        : t === "B" ? "Viable seasonal or utility picks"
        : "Starter pets; low investment",
    })),
    tiers: tierOrder.map((t) => {
      const entries = t === "S" ? sTier : t === "A" ? aTier : t === "B" ? bTier : cTier;
      return {
        name: `${t}-Tier — ${tierLabels[t]} Pets`,
        description: tierDescs[t],
        entries: entries.map((p) => ({
          name: p.name,
          tier: p.tier,
          description: `${p.multiplier.toFixed(1)}x crop multiplier, ${p.abilities[0].toLowerCase()}`,
        })),
      };
    }),
    detailCards: pets.map((p) => ({
      name: p.name,
      rank: `Why ${p.tier}-Tier`,
      desc: p.description,
      strengths: p.strengths,
      weaknesses: p.weaknesses,
      bestOn: p.source,
      color: tierColors[p.tier],
    })),
    strategyTips: [
      "Always stack <strong>5 Pet Growth Potions</strong> before opening Legendary Eggs — this gives you a 75% boosted rate for S/A-Tier pets.",
      "Buy <strong>Legendary Eggs (10,000 Coins)</strong> for the best S-Tier odds. Rare Eggs (2,000 Coins) offer the best value for building a mid-game pet lineup.",
      "Get free <strong>Pet Growth Potions</strong> from promo codes — check our Codes page regularly. Seasonal events often drop potions as login rewards.",
      "Once you have an S-Tier pet, <strong>stop buying premium eggs</strong> and redirect Coins toward crop expansion and mutation shards.",
    ],
    pairingTable: [
      { trait: "Golden Phoenix Chick (5.0x)", unit: "Aurelian Crown (4.0x)", why: "20.0x" },
      { trait: "Crystal Unicorn Foal (4.5x)", unit: "Aurelian Crown (4.0x)", why: "18.0x" },
      { trait: "Lucky Clover Bunny (3.2x)", unit: "Leporine Bloom (3.8x +18%)", why: "14.0x" },
      { trait: "Neon Dragon Hatchling (3.5x)", unit: "Crystalline Mycelium (3.5x)", why: "12.3x" },
      { trait: "Celestial Fox Kit (3.0x)", unit: "Phosphor Sporebloom (3.0x)", why: "9.0x" },
    ],
    faq: [
      { question: "Which pet gives the highest crop value multiplier?", answer: "Golden Phoenix Chick (S-Tier) delivers the highest multiplier at 5.0x with auto-collect. Crystal Unicorn Foal is a close second at 4.5x with a double-harvest chance that can situationally outperform on short-growth crops." },
      { question: "How do I hatch higher-tier pets?", answer: "Purchase eggs from the Pet Shop using Coins. Higher-tier eggs cost more but have better odds for S/A-Tier pets. Stack Pet Growth Potions (up to 5) before opening premium eggs to boost your odds by 75%." },
      { question: "Do seasonal pets work outside their season?", answer: "Yes, but at reduced effectiveness. Frost Wolf Pup drops from 2.2x to its base outside of Winter. If you play year-round, invest in all-season pets like Golden Phoenix Chick or Crystal Unicorn Foal instead." },
      { question: "Can I have multiple pets active at once?", answer: "You can equip one pet at a time but swap freely between harvests. Use a high-multiplier pet for harvesting, then switch to a utility pet for maintenance. There is no cooldown on swapping." },
    ],
    relatedGuides: [
      { label: "Mutation Tier List", href: "/grow-a-garden/mutation-tier-list", description: "Pair the best mutations with your pets" },
      { label: "Active Codes", href: "/grow-a-garden/codes", description: "Get free Pet Growth Potions from codes" },
      { label: "Crop Value List", href: "/grow-a-garden/crop-value-list", description: "Maximize profits with pet-boosted harvests" },
    ],
  };
}

const data = buildPetTierListData();
export default data;
