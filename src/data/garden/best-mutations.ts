import type { EvolutionPageData } from "../types";
import { mutations } from "./database/mutations";

const aurelianCrown = mutations.find((m) => m.id === "aurelian-crown")!;
const crystallineMycelium = mutations.find((m) => m.id === "crystalline-mycelium")!;
const leporineBloom = mutations.find((m) => m.id === "leporine-bloom")!;
const phosphorSporebloom = mutations.find((m) => m.id === "phosphor-sporebloom")!;
const basaltCarapace = mutations.find((m) => m.id === "basalt-carapace")!;
const pyroclastHusk = mutations.find((m) => m.id === "pyroclast-husk")!;

function buildBestMutationsData(): EvolutionPageData {
  return {
    title: "Grow a Garden Best Mutations Guide — Top Mutations & Rolling Strategy (June 2026)",
    description: "Master the mutation system in Grow a Garden. Learn how Mutation Shards work, which mutations to target at each stage, optimal rolling strategy during boosted events, and how to pair mutations with pets for maximum crop yields.",
    updatedAt: "June 28, 2026",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Grow a Garden Best Mutations Guide", href: "/grow-a-garden/best-mutations" },
    ],

    overview: {
      description: "Mutations are the most powerful progression system in Grow a Garden. Applied to individual crop plots, mutations multiply the base coin value of every harvest — and they stack multiplicatively with pet multipliers. A well-rolled S-Tier mutation on a high-value crop with a top-tier pet can turn a 480-coin Golden Wheat harvest into 9,600 coins. This guide covers everything from earning your first Mutation Shards to building an optimized endgame mutation setup across all your plots.",
      highlights: [
        "Mutations multiply crop value per plot — stack with pets for exponential gains",
        "Four tiers: S (up to 4.0x), A (up to 3.0x), B (up to 2.2x), C (1.4x and below)",
        "Mutation Shards are the rolling currency — earn from codes, dailies, and events",
        "S-Tier roll rate is ~1.2% normally — boosted events push it higher",
        "Save 50+ shards and roll 10 at once during boosted events for best odds",
        `Top mutation: ${aurelianCrown.name} at ${aurelianCrown.multiplier.toFixed(1)}x with connected-plot harvest`,
      ],
    },

    stages: [
      { from: "First Mutation (0-30 min)", mats: "Free starter shards (~5-10)", stats: "Roll any mutation on your main plot. Even C-Tier (1.4x) is a 40% boost over no mutation." },
      { from: "B-Tier Target (30 min - 2 hrs)", mats: "50+ Mutation Shards", stats: "Save shards from dailies and codes. Bulk roll 10 at once for ~11% cumulative S-Tier odds. Settle for B-Tier (1.7x+) if RNG is cruel." },
      { from: "A-Tier Target (2-6 hrs)", mats: "100+ Mutation Shards + boosted event", stats: "Wait for a mutation-boosted seasonal event. Roll during the event window. Target Phosphor Sporebloom (3.0x) or Basalt Carapace (2.8x)." },
      { from: "S-Tier Target (6+ hrs)", mats: "200+ Mutation Shards + event boost", stats: "The endgame grind. Target Aurelian Crown (4.0x) for main plot. Only roll during boosted events — the base 1.2% S-Tier rate is brutal without event bonuses." },
    ],
    totalCost: "Approximately 400+ Mutation Shards to equip 4 plots with A-Tier or better mutations through strategic event rolling",

    materials: [
      {
        name: "Mutation Shards",
        icon: "🔮",
        desc: "The exclusive currency for rolling mutations at the Mutation Station. Each roll costs 1 shard. Bulk rolling (10 shards at once) improves your cumulative odds slightly.",
        sources: ["Daily login rewards (3-5 shards per day)", "Promo codes (10-20 shards per drop — check our Codes page)", "Seasonal events (20-50 shards per event)", "Trading with other players (variable rates)"],
        tip: "Never spend shards one at a time. Save to 50+ and roll 10 at once during boosted events. A single roll has ~1.2% S-Tier odds. Ten rolls during a +50% boosted event pushes cumulative odds to roughly 16%. The math strongly favors patience.",
      },
      {
        name: "Mutation Station",
        icon: "🧬",
        desc: "The Lab building where you spend Mutation Shards to roll for mutations. Unlocked at 1,500 total Coins earned. Each plot can hold one mutation at a time.",
        sources: ["Lab building (unlocked at 1,500 Coins earned)", "Always accessible once unlocked"],
        tip: "Apply mutations to your highest-value crop plot first. Overwriting is permanent with no refund — always lock in a B-Tier placeholder on secondary plots while rolling for S/A-Tier on your main plot.",
      },
      {
        name: "Mutation-Boosted Events",
        icon: "📈",
        desc: "Seasonal events that temporarily increase S/A-Tier roll rates by +50%. These are the optimal windows for spending your saved Mutation Shards.",
        sources: ["Easter event (March/April)", "Summer Festival (June/July)", "Halloween Harvest (October)", "Winter Celebration (December)"],
        tip: "The single most important piece of mutation advice: never roll seriously outside of a boosted event. The difference between ~1.2% S-Tier rate (normal) and ~5.5% (during +50% boost) is the difference between wasting 200 shards and building a competitive farm.",
      },
      {
        name: "Seed Upgrades",
        icon: "🌾",
        desc: "Better seeds sell for more coins. Your mutation multiplies the seed's base value, so upgrading seeds compounds your mutation's effectiveness.",
        sources: ["Farm Shop (incremental cost per tier)", "Promo codes (free seed packs)", "Trading (player-to-player)"],
        tip: "A 4.0x Aurelian Crown on Wheat (50 coins) yields 200 coins. The same mutation on Golden Wheat (480 coins) yields 1,920 coins. Always upgrade your seeds before investing heavily in mutations — the seed base value is the foundation everything multiplies from.",
      },
    ],

    bestUnitsSteps: [
      { step: "1", title: "Earn Your First Mutation Shards", desc: "Complete the tutorial quest chain for 10 free shards. Collect daily login rewards (3-5 shards). Redeem any active codes from our Codes page for bonus shards. Do not spend a single shard until you have at least 10 — single rolls are a trap." },
      { step: "2", title: "Roll Your First Mutation (Free Starter Shards)", desc: "With ~10 starter shards, visit the Mutation Station in the Lab. Roll on your main crop plot. Accept whatever you get — even Common Prairie Grass (1.0x) is a learning experience. The point is to understand the system. Do not spend Coins on additional shards yet." },
      { step: "3", title: "Save 50+ Shards — Do Not Roll Individually", desc: "This is the hardest discipline for new players. The urge to roll 'just one more' is strong. Resist it. Every single roll at 1.2% S-Tier odds is essentially throwing the shard away. Save 50+. Check codes daily. Hoard event shards. Your patience will be rewarded." },
      { step: "4", title: "Wait for a Mutation-Boosted Event", desc: "Seasonal events (Easter, Summer, Halloween, Winter) typically offer +50% S/A-Tier roll rates for 1-2 weeks. This is your window. If the next event is 3 weeks away, keep saving shards. The math is undeniable: 50 shards during a boosted event are worth more than 150 shards outside of one." },
      { step: "5", title: "Bulk Roll 10 at Once During Boosted Event", desc: "During the boosted event window, go to the Mutation Station with 50+ shards. Select 'Roll x10'. With +50% boosted rates, your cumulative S-Tier odds across 10 rolls are roughly 16%. Even if you miss S-Tier, the A-Tier rate (~25% cumulative) means you will almost certainly walk away with at least one excellent mutation." },
      { step: "6", title: "Apply Best Mutation to Main Plot, B-Tier+ to Others", desc: `Got ${aurelianCrown.name}? Apply it to your Golden Wheat or Crystal Berry plot immediately. Got ${phosphorSporebloom.name} or ${basaltCarapace.name}? Excellent — apply to your second-best plot. Got a B-Tier like ${pyroclastHusk.name}? Good enough for secondary plots while you save for another boosted event. Never overwrite an S or A-Tier mutation without a confirmed better roll.` },
      { step: "7", title: "Repeat for All Plots", desc: "The mutation grind is a marathon, not a sprint. After each boosted event, you should have improved at least one plot. Over 3-4 event cycles, you can equip all 4+ plots with A-Tier or better mutations. Patience and shard discipline are the difference between a competitive farm and a frustrated player." },
    ],

    priorityList: [
      { tier: "S", unit: "Save Shards — Do Not Solo Roll", reason: "The single most impactful decision in the mutation system. Solo rolls waste shards at 1.2% S-Tier odds. 50 shards bulk-rolled during a +50% boosted event gives ~16% S-Tier cumulative. The expected value difference is staggering." },
      { tier: "S", unit: "Only Roll During Boosted Events", reason: "A +50% event boost turns ~1.2% into ~5.5% per roll. Across 10 rolls, that is the difference between ~11% cumulative (unboosted) and ~43% cumulative (boosted) for landing ANY S or A-Tier mutation. The event calendar dictates your rolling schedule." },
      { tier: "A", unit: `${aurelianCrown.name} (${aurelianCrown.multiplier.toFixed(1)}x, S-Tier)`, reason: "The best mutation in the game. Connected-plot harvest passive is unique and game-changing. Target this for your main Golden Wheat or Crystal Berry plot. Stacks to 20.0x with Golden Phoenix Chick." },
      { tier: "A", unit: `${leporineBloom.name} (${leporineBloom.multiplier.toFixed(1)}x base, S-Tier)`, reason: "Seasonal exclusive with the highest effective multiplier (~4.48x) when paired with Lucky Clover Bunny. Unobtainable outside Easter events. If you have Lucky Clover Bunny, this is your #1 target during Easter." },
      { tier: "A", unit: `${crystallineMycelium.name} (${crystallineMycelium.multiplier.toFixed(1)}x, S-Tier)`, reason: "Auto-water passive is a massive quality-of-life improvement for farms with 6+ plots. Slightly lower multiplier than Aurelian Crown but the time savings are real. Best S-Tier for large-scale farmers." },
      { tier: "B", unit: `${phosphorSporebloom.name} (${phosphorSporebloom.multiplier.toFixed(1)}x, A-Tier)`, reason: "Best A-Tier for night-time players. 40% faster growth during night hours effectively pushes the multiplier higher. Much easier to roll than S-Tier (~5.8% base rate)." },
      { tier: "B", unit: `${basaltCarapace.name} (${basaltCarapace.multiplier.toFixed(1)}x, A-Tier)`, reason: "Pest and blight immunity saves crops and frustration. Great defensive mutation for high-value plots. 2.8x multiplier is competitive for A-Tier." },
      { tier: "C", unit: "C-Tier Mutations (1.4x and below)", reason: "Placeholder mutations only. Apply them to learn the system, then overwrite with B-Tier or higher as soon as possible. Never intentionally roll for C-Tier. Never spend event-boosted shards on C-Tier rolls." },
    ],

    mistakes: [
      { title: "Rolling Shards One at a Time", desc: "The Mutation Station lets you roll a single shard. The S-Tier rate is ~1.2%. You will almost certainly get C-Tier results and burn through your shards. The system is designed for bulk rolling — 10 rolls at once during boosted events. Solo rolling is the #1 shard-wasting mistake." },
      { title: "Rolling Outside of Boosted Events", desc: "If you have 100 shards and roll them all during a normal period, your expected S-Tier count is ~1. If you roll those same 100 shards during a +50% boosted event, your expected S-Tier count is ~5-6. The difference is 5x. Never roll bulk shards outside of an event window." },
      { title: "Overwriting Good Mutations Carelessly", desc: "Mutation overwrites are permanent with zero refund. If you have a B-Tier Pyroclast Husk (2.2x) and roll a C-Tier Umbral Thorn (1.4x, night only), do NOT apply the new roll. Always check your new mutation before applying. Lock in a B-Tier placeholder while rolling for upgrades on other plots." },
      { title: "Applying S-Tier Mutations to Low-Value Crops", desc: `An ${aurelianCrown.name} (${aurelianCrown.multiplier.toFixed(1)}x) on Basic Potato (100 coins) yields 400 coins. The same mutation on Golden Wheat (480 coins) yields 1,920 coins — nearly 5x more value. Always apply your best mutations to your highest-value crops. If you change crops later, you can overwrite — but plan ahead.` },
      { title: "Ignoring Pet + Mutation Synergy", desc: `Mutations and pets stack multiplicatively, but some pairs have bonus synergy. ${leporineBloom.name} (+18% with rabbit pets) x Lucky Clover Bunny = highest effective multiplier in the game. Without the rabbit pet, ${leporineBloom.name} is just a 3.8x mutation. Always check mutation passives for pet type requirements to unlock hidden bonuses.` },
      { title: "Buying Mutation Shards with Coins (Early Game)", desc: "The premium shop sells Mutation Shards for Coins. This is an endgame efficiency optimization, not an early-game strategy. Before you have 4+ plots with B-Tier+ mutations and a solid pet lineup, Coins are better spent on plot expansion and seed upgrades. A single shard costs more than a Basic Egg — and the egg gives you a permanent pet multiplier." },
    ],

    faq: [
      { question: "What is the best mutation in Grow a Garden?", answer: `${aurelianCrown.name} (S-Tier, ${aurelianCrown.multiplier.toFixed(1)}x) is the best overall mutation due to its unmatched multiplier and connected-plot harvest passive. ${crystallineMycelium.name} (${crystallineMycelium.multiplier.toFixed(1)}x) is the runner-up with its auto-water quality-of-life feature. ${leporineBloom.name} can situationally exceed both when paired with Lucky Clover Bunny.` },
      { question: "How do I get more Mutation Shards?", answer: "The most reliable sources are daily login rewards (3-5 shards/day), promo codes (10-20 shards — check our Codes page regularly), and seasonal event rewards (20-50 shards per event). Save every shard. Do not buy shards with Coins until you are in the endgame with nothing else to spend on." },
      { question: "When should I roll for mutations?", answer: "Only during mutation-boosted seasonal events (+50% S/A-Tier rates). Save shards between events. Bulk roll 10 at once during the event window. The four major boosted events are Easter (March/April), Summer Festival (June/July), Halloween Harvest (October), and Winter Celebration (December)." },
      { question: "What are the S-Tier roll odds?", answer: "Base S-Tier rate is ~1.2% per roll. During a +50% boosted event, this rises to ~5.5% per roll. Bulk rolling 10 at once during a boosted event gives ~43% cumulative chance of landing at least one S or A-Tier mutation. Without the event boost, 10 rolls give only ~11% cumulative — a massive difference." },
      { question: "Can I move a mutation to a different plot?", answer: "No. Mutations are permanently bound to the plot they are applied to. You cannot transfer, swap, or unequip a mutation. If you want a different mutation on a plot, you must overwrite the existing one — the old mutation is permanently destroyed. Always plan which plot gets your best rolls." },
      { question: "Do seasonal mutations work outside their season?", answer: "Yes, but at reduced effectiveness. Hoarfrost Corolla (B-Tier, 2.0x base) surges to 2.5x during Winter but drops back to 2.0x in other seasons. The mutation never stops working entirely — the seasonal bonus is additive on top of the base multiplier. If you play year-round, prioritize all-season mutations for your main plots and use seasonal mutations on secondary plots." },
      { question: "How many plots should I have before grinding mutations?", answer: "Get to 4 plots before seriously investing in mutations. Plot expansion provides guaranteed, permanent income increases with zero RNG. A 1.0x mutation on 4 plots earns more than a 4.0x mutation on 1 plot. Use your free starter shards to learn the system, then focus on plot expansion until you have at least 4 running." },
      { question: "Should I keep rolling after getting an S-Tier mutation?", answer: "If you get an S-Tier mutation, stop rolling on that plot immediately. Apply it and move on to upgrading your other plots. A farm with one S-Tier plot and three B-Tier plots outperforms a farm where you kept rolling and accidentally overwrote your S-Tier with a C-Tier. Diversify your mutation quality across all plots." },
    ],

    relatedGuides: [
      { label: "Mutation Tier List", href: "/grow-a-garden/mutation-tier-list", description: "Every mutation ranked from S-Tier to C-Tier with detailed stats" },
      { label: "Active Codes", href: "/grow-a-garden/codes", description: "Get free Mutation Shards from promo codes" },
      { label: "Pet Tier List", href: "/grow-a-garden/pet-tier-list", description: "Pair your best pets with your mutations" },
      { label: "Crop Value List", href: "/grow-a-garden/crop-value-list", description: "Apply your best mutations to the most profitable crops" },
    ],
  };
}

const data = buildBestMutationsData();
export default data;
