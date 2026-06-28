import type { TierListPageData } from "../types";
import { mutations, getMutationsByTier } from "./database/mutations";

function buildTierListData(): TierListPageData {
  const sTier = getMutationsByTier("S");
  const aTier = getMutationsByTier("A");
  const bTier = getMutationsByTier("B");
  const cTier = getMutationsByTier("C");

  const tierColors: Record<string, string> = {
    S: "#FF3D00",
    A: "#FF8C00",
    B: "#FFD700",
    C: "#3A86FF",
  };

  const tierNames: Record<string, { label: string; desc: string }> = {
    S: { label: "Meta-defining", desc: "Best-in-slot; highest multipliers and unique passives" },
    A: { label: "Excellent", desc: "Strong alternatives; great value with minor trade-offs" },
    B: { label: "Solid", desc: "Viable options; situational but effective" },
    C: { label: "Budget", desc: "Starter mutations; replace when possible" },
  };

  const tierDescs: Record<string, string> = {
    S: "These mutations define the endgame farming meta. They offer the highest crop value multipliers alongside unique passive abilities that dramatically reduce manual effort or unlock exclusive synergies. Every serious farmer should target at least one S-Tier mutation for their main crop plot.",
    A: "Strong, reliable mutations that fall just short of S-Tier due to situational conditions or slightly lower multipliers. They remain excellent investments and are much easier to roll than S-Tier mutations — typically 3-4x more common in the mutation pool.",
    B: "Viable mutations that perform well in specific scenarios. Great for mid-game farmers or as secondary plot mutations while you save shards for S/A-Tier rolls on your main plot. Most B-Tier mutations have a 15-20% roll rate from standard shard pulls.",
    C: "Starter-tier mutations with the highest roll rates (60%+ from standard shards). Fine for new players learning the mutation system, but they should be replaced as soon as you accumulate enough shards for a B-Tier or higher roll. Never spend event-boosted shards on C-Tier pulls.",
  };

  const tierOrder = ["S", "A", "B", "C"] as const;

  return {
    title: "Grow a Garden Mutation Tier List (V2.1) — All Mutations Ranked",
    description: "Every Grow a Garden mutation ranked from S-Tier to C-Tier based on crop value multiplier, seasonal bonuses, passive abilities, and pet synergy. Find the best mutation for your farming strategy.",
    updatedAt: "June 28, 2026",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Grow a Garden Mutation Tier List", href: "/grow-a-garden/mutation-tier-list" },
    ],
    tierExplanation: tierOrder.map((t) => ({
      tier: t,
      color: tierColors[t],
      label: tierNames[t].label,
      desc: tierNames[t].desc,
    })),
    tiers: tierOrder.map((t) => {
      const entries = t === "S" ? sTier : t === "A" ? aTier : t === "B" ? bTier : cTier;
      return {
        name: `${t}-Tier — ${tierNames[t].label} Mutations`,
        description: tierDescs[t],
        entries: entries.map((m) => ({
          name: m.name + (m.aliases.length ? ` (aka ${m.aliases.join(", ")})` : ""),
          tier: m.tier,
          description: `${m.multiplier.toFixed(1)}x crop value, ${m.passives[0].toLowerCase()}`,
        })),
      };
    }),
    detailCards: mutations.map((m) => ({
      name: m.name,
      rank: `${m.tier}-Tier — #${mutations.indexOf(m) + 1} Overall`,
      desc: m.description,
      strengths: m.strengths,
      weaknesses: m.weaknesses,
      bestUse: m.bestUse,
      color: tierColors[m.tier],
    })),
    strategyTips: [
      "Save at least <strong>50 Mutation Shards</strong> before rolling — single rolls have a ~1.2% S-Tier rate. Bulk rolling 10 at once during a boosted event raises your cumulative S-Tier odds to roughly 11%.",
      "Time your rolls during <strong>mutation-boosted events</strong> (seasonal events typically feature +50% S/A-Tier odds). Check our Codes page for event-related shard drops and timing announcements.",
      "Always apply your <strong>best mutation last</strong> — overwriting is permanent with no refund or shard recovery. Lock in a B-Tier placeholder while saving for S/A-Tier rolls, then overwrite.",
      "Pair S-Tier mutations with <strong>high-tier pets</strong> for multiplicative stacking. Aurelian Crown (4.0x) + Golden Phoenix Chick (5.0x) = 20x total yield per harvest — the theoretical maximum in the current meta.",
    ],
    faq: [
      {
        question: "What is the best mutation in Grow a Garden?",
        answer: "Aurelian Crown (S-Tier #1) is the best overall due to its unmatched 4.0x crop value multiplier and connected-plot harvest ability. Crystalline Mycelium is the runner-up — its auto-water passive saves significant manual time per session. Leporine Bloom can situationally exceed both when paired with Lucky Clover Bunny.",
      },
      {
        question: "How do I unlock higher-tier mutations?",
        answer: "Spend Mutation Shards at the Mutation Station in the Lab building. Higher-tier mutations have progressively lower roll odds: S-Tier ~1.2%, A-Tier ~6%, B-Tier ~15%, C-Tier ~60%+. Stockpile 50+ shards and roll during mutation-boosted seasonal events for the best odds.",
      },
      {
        question: "What makes the Leporine Bloom (Bunny) mutation special?",
        answer: "Leporine Bloom is a tier-5 seasonal mutation from the Easter 2026 event. Its unique rabbit-pet synergy (+18% bonus) makes it the highest effective multiplier in the game (~4.48x) when paired with Lucky Clover Bunny. It is unobtainable outside of the Easter event window.",
      },
      {
        question: "Do mutation bonuses stack with pet bonuses?",
        answer: "Yes — mutation multipliers and pet multipliers stack multiplicatively. The theoretical maximum is Aurelian Crown (4.0x) x Golden Phoenix Chick (5.0x) = 20x total crop value per harvest. This is the core of endgame farming optimization.",
      },
      {
        question: "Can I change a mutation after applying it?",
        answer: "Yes, you can overwrite an existing mutation by applying a new one at the Mutation Station. The previous mutation is permanently destroyed with no refund or shard recovery. Always apply your best mutation last and lock in a placeholder while saving for premium rolls.",
      },
    ],
    relatedGuides: [
      { label: "Active Codes", href: "/grow-a-garden/codes", description: "Get free Mutation Shards from promo codes" },
      { label: "Pet Tier List", href: "/grow-a-garden/pet-tier-list", description: "Stack pet multipliers with your mutations" },
      { label: "Crop Value List", href: "/grow-a-garden/crop-value-list", description: "See how much each mutation boosts your profit" },
    ],
  };
}

const data = buildTierListData();
export default data;
