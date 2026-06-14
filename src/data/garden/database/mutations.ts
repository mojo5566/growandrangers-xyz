// ============================================================
// Grow a Garden — Canonical Mutation Database
// Single source of truth for all mutation entities.
// All page data files should import from here.
// ============================================================

/** mutations interface */
export interface Mutation {
  id: string;
  name: string;
  aliases: string[];
  multiplier: number;
  conditionalBonus?: { condition: string; bonusMultiplier: number };
  tier: "S" | "A" | "B" | "C";
  rollRate: string;
  passives: string[];
  description: string;
  strengths: string[];
  weaknesses: string[];
  bestUse?: string;
  seasonal?: string;
  imagePlaceholder: string;
  tierRating: number;
}

export const mutations: Mutation[] = [
{
    id: "aurelian-crown",
    name: "Aurelian Crown",
    aliases: ["Golden Bloom"],
    multiplier: 4.0,
    tier: "S",
    rollRate: "~1.2%",
    passives: ["Harvests all connected adjacent plots simultaneously"],
    description: "The undisputed king at 4.0x value with zero seasonal or time-of-day restrictions. Its signature ability — harvesting all connected adjacent plots simultaneously — effectively quadruples your harvesting speed on large farms.",
    strengths: [
      "Highest base multiplier in the game (4.0x)",
      "Connected-plot harvest eliminates manual replanting time",
      "Works on any crop, any season, any time of day",
      "Stacks multiplicatively with any pet multiplier",
    ],
    weaknesses: [
      "Extremely rare — ~1.2% roll rate from standard shards",
      "Requires connected plot layout for full passive value",
    ],
    bestUse: "Main crop plot. Pair with Golden Phoenix Chick (5.0x) for 20.0x total yield — the theoretical maximum.",
    imagePlaceholder: "/placeholder-mutations-aurelian-crown.png",
    tierRating: 10
  },
{
    id: "crystalline-mycelium",
    name: "Crystalline Mycelium",
    aliases: ["Crystal Vine"],
    multiplier: 3.5,
    tier: "S",
    rollRate: "~1.4%",
    passives: ["Auto-waters plot every 60 seconds"],
    description: "3.5x multiplier with an auto-water passive that saves significant manual time each session. Slightly lower raw power than Aurelian Crown but the quality-of-life improvement is substantial for large farms.",
    strengths: [
      "Auto-water eliminates manual watering entirely",
      "3.5x multiplier is still extremely strong",
      "Quality-of-life improvement scales with farm size",
    ],
    weaknesses: [
      "Lower multiplier than Aurelian Crown (3.5x vs 4.0x)",
      "Auto-water is redundant if using Aqua Otter Kit pet",
      "Very rare — ~1.4% roll rate",
    ],
    bestUse: "Large farms with 6+ plots where manual watering becomes tedious. Combines well with Aqua Otter Kit for hands-off farming.",
    imagePlaceholder: "/placeholder-mutations-crystalline-mycelium.png",
    tierRating: 10
  },
{
    id: "leporine-bloom",
    name: "Leporine Bloom",
    aliases: ["Bunny T5", "Easter Bunny Mutation"],
    multiplier: 3.8,
    conditionalBonus: { condition: "Rabbit-type pet equipped", bonusMultiplier: 4.48 },
    tier: "S",
    rollRate: "N/A — seasonal event exclusive",
    passives: ["+18% bonus multiplier when a rabbit-type pet is equipped"],
    description: "Seasonal event exclusive (Easter) with unique rabbit-pet synergy. 3.8x base, +18% bonus makes it the highest effective multiplier in the game (~4.48x) when paired with Lucky Clover Bunny.",
    strengths: [
      "Highest effective multiplier with rabbit pet (4.48x)",
      "3.8x base is competitive even without synergy",
      "Unique collectible from limited-time event",
    ],
    weaknesses: [
      "Only obtainable during Easter event — miss it, wait a year",
      "Requires Lucky Clover Bunny (also seasonal) for full potential",
      "3.8x base without rabbit pet is below Aurelian Crown",
    ],
    bestUse: "Paired exclusively with Lucky Clover Bunny. Best seasonal investment in the game if you own both.",
    seasonal: "Easter",
    imagePlaceholder: "/placeholder-mutations-leporine-bloom.png",
    tierRating: 10
  },
{
    id: "phosphor-sporebloom",
    name: "Phosphor Sporebloom",
    aliases: ["Neon Spore"],
    multiplier: 3.0,
    conditionalBonus: { condition: "6PM-6AM in-game time", bonusMultiplier: 3.2 },
    tier: "A",
    rollRate: "~5.8%",
    passives: ["Crops grow 40% faster between 6PM-6AM in-game"],
    description: "3.0x base with night-time growth acceleration. The 40% faster growth is a significant time-saver for active night players. Effective multiplier averages ~3.2x with the growth speed factored in.",
    strengths: [
      "40% faster growth during night hours",
      "3.2x effective with growth speed included",
      "Reasonable roll rate (~5.8%)",
    ],
    weaknesses: [
      "Passive only active during night hours",
      "Growth speed is less valuable than raw multiplier",
      "Outclassed during daytime",
    ],
    bestUse: "Players who primarily farm during night hours. Pairs with Celestial Fox Kit for stacked night bonuses.",
    imagePlaceholder: "/placeholder-mutations-phosphor-sporebloom.png",
    tierRating: 8
  },
{
    id: "basalt-carapace",
    name: "Basalt Carapace",
    aliases: [],
    multiplier: 2.8,
    tier: "A",
    rollRate: "~6.5%",
    passives: ["Complete immunity to pest invasions and blight events"],
    description: "2.8x with pest and blight immunity. The only mutation that completely negates two of the most frustrating random events. The defensive value is hard to quantify but significant for high-value crops.",
    strengths: [
      "Pest and blight immunity saves crops and Coins",
      "2.8x is competitive for A-Tier",
      "No conditions — always active",
    ],
    weaknesses: [
      "Lower raw multiplier than S-Tier alternatives",
      "Defensive passive has zero value during pest-free periods",
      "S-Tier mutations generate more profit even accounting for occasional losses",
    ],
    bestUse: "High-value crop plots where losing a harvest to pests/blight would be most painful. Good secondary plot mutation.",
    imagePlaceholder: "/placeholder-mutations-basalt-carapace.png",
    tierRating: 8
  },
{
    id: "eclipse-corolla",
    name: "Eclipse Corolla",
    aliases: [],
    multiplier: 2.7,
    conditionalBonus: { condition: "Eclipse weather cycle", bonusMultiplier: 3.3 },
    tier: "A",
    rollRate: "~6.2%",
    passives: ["Surges to 3.3x during eclipse weather cycles"],
    description: "2.7x base that jumps to 3.3x during eclipse weather. The eclipse condition is unpredictable, making this mutation inconsistent but potentially very powerful when it aligns.",
    strengths: [
      "3.3x during eclipse rivals S-Tier performance",
      "Exciting high-roll potential",
      "Reasonable roll rate",
    ],
    weaknesses: [
      "Eclipse weather is unpredictable and infrequent",
      "2.7x base is lower than Phosphor Sporebloom (3.0x)",
      "Unreliable for consistent income planning",
    ],
    bestUse: "Secondary plot where inconsistent performance is acceptable. Not recommended for main income plot.",
    imagePlaceholder: "/placeholder-mutations-eclipse-corolla.png",
    tierRating: 8
  },
{
    id: "pyroclast-husk",
    name: "Pyroclast Husk",
    aliases: [],
    multiplier: 2.2,
    tier: "B",
    rollRate: "~12%",
    passives: ["Harvest action completes 50% faster"],
    description: "2.2x with a 50% faster harvest animation. The speed bonus increases actions-per-minute, effectively boosting coins-per-hour beyond what the multiplier suggests.",
    strengths: [
      "50% faster harvest increases coins-per-hour",
      "2.2x is solid for B-Tier",
      "Good roll rate (~12%)",
    ],
    weaknesses: [
      "Faster harvest only benefits active players",
      "No multiplier bonus beyond base 2.2x",
      "Outclassed by A-Tier for passive/AFK farming",
    ],
    bestUse: "Active players who harvest frequently. Best on fast-growing crops like Lucky Carrot (2 min).",
    imagePlaceholder: "/placeholder-mutations-pyroclast-husk.png",
    tierRating: 6
  },
{
    id: "hoarfrost-corolla",
    name: "Hoarfrost Corolla",
    aliases: [],
    multiplier: 2.0,
    conditionalBonus: { condition: "Winter season", bonusMultiplier: 2.5 },
    tier: "B",
    rollRate: "~11%",
    passives: ["+25% boost during Winter season"],
    description: "Winter specialist at 2.0x base, 2.5x during Winter. Excellent during Winter months but falls off in other seasons. Pairs naturally with Frost Wolf Pup for stacked Winter bonuses.",
    strengths: [
      "2.5x during Winter — A-Tier performance",
      "Pairs with Frost Wolf Pup for stacked Winter farming",
      "Good roll rate (~11%)",
    ],
    weaknesses: [
      "Drops to 2.0x outside Winter",
      "Season-locked — less useful 75% of the year",
    ],
    bestUse: "Winter-focused farming. Apply to a secondary plot and switch to all-season mutations in other seasons.",
    seasonal: "Winter",
    imagePlaceholder: "/placeholder-mutations-hoarfrost-corolla.png",
    tierRating: 6
  },
{
    id: "igneous-spore",
    name: "Igneous Spore",
    aliases: [],
    multiplier: 1.8,
    conditionalBonus: { condition: "Summer season", bonusMultiplier: 2.25 },
    tier: "B",
    rollRate: "~11%",
    passives: ["+25% boost during Summer season"],
    description: "Summer counterpart to Hoarfrost Corolla. 1.8x base, 2.25x during Summer. Essential for Summer-focused farming rotations.",
    strengths: [
      "2.25x during Summer",
      "Pairs with Magma Lizard Hatchling for stacked Summer bonuses",
      "Good roll rate (~11%)",
    ],
    weaknesses: [
      "Drops to 1.8x outside Summer",
      "Lowest B-Tier base multiplier",
      "Season-locked",
    ],
    bestUse: "Summer-focused secondary plot. Switch away during other seasons.",
    seasonal: "Summer",
    imagePlaceholder: "/placeholder-mutations-igneous-spore.png",
    tierRating: 6
  },
{
    id: "torrential-frond",
    name: "Torrential Frond",
    aliases: [],
    multiplier: 1.7,
    conditionalBonus: { condition: "Rain weather", bonusMultiplier: 3.4 },
    tier: "B",
    rollRate: "~10%",
    passives: ["Double yield during rain weather"],
    description: "1.7x base but doubles to 3.4x during rain — the highest weather-dependent spike in B-Tier. Rain frequency varies, making this a high-variance mutation.",
    strengths: [
      "3.4x during rain rivals S-Tier performance",
      "Exciting high-roll potential",
      "Good roll rate (~10%)",
    ],
    weaknesses: [
      "1.7x base is the lowest in B-Tier",
      "Rain frequency is unpredictable",
      "Inconsistent income",
    ],
    bestUse: "Gamble plot — keep as secondary and harvest aggressively during rain events.",
    imagePlaceholder: "/placeholder-mutations-torrential-frond.png",
    tierRating: 6
  },
{
    id: "umbral-thorn",
    name: "Umbral Thorn",
    aliases: [],
    multiplier: 1.4,
    conditionalBonus: { condition: "Night hours only", bonusMultiplier: 1.4 },
    tier: "C",
    rollRate: "~24%",
    passives: ["Bonus active only during night hours"],
    description: "1.4x multiplier that only works at night. The time restriction makes this inconsistent, but it is the strongest C-Tier mutation during its active window.",
    strengths: [
      "Strongest C-Tier multiplier when active (1.4x)",
      "High roll rate (~24%)",
      "Pairs with night-time pets and mutations",
    ],
    weaknesses: [
      "Completely inactive during daytime",
      "Time-gated — only useful ~50% of the time",
      "Outclassed by B-Tier and above",
    ],
    bestUse: "Night-time farming placeholder while saving shards for better rolls.",
    imagePlaceholder: "/placeholder-mutations-umbral-thorn.png",
    tierRating: 4
  },
{
    id: "verdant-runner",
    name: "Verdant Runner",
    aliases: [],
    multiplier: 1.2,
    conditionalBonus: { condition: "Max stacks (10 consecutive harvests)", bonusMultiplier: 1.5 },
    tier: "C",
    rollRate: "~24%",
    passives: ["Growth speed stacks +3% per consecutive harvest, up to +30% at 10 stacks"],
    description: "1.2x base with a stacking growth speed bonus. At max stacks (10 consecutive harvests), effective value reaches ~1.5x, making it the strongest C-Tier at full potential.",
    strengths: [
      "Up to 1.5x effective with max stacks",
      "Rewards consistent, active play",
      "High roll rate (~24%)",
    ],
    weaknesses: [
      "Stacking bonus resets on missed harvest",
      "1.2x base is weak without stacks",
      "Outclassed by B-Tier even at max stacks",
    ],
    bestUse: "Active players who harvest frequently on fast-growing crops. Replace when B-Tier becomes available.",
    imagePlaceholder: "/placeholder-mutations-verdant-runner.png",
    tierRating: 4
  },
{
    id: "common-prairie-grass",
    name: "Common Prairie Grass",
    aliases: [],
    multiplier: 1.0,
    tier: "C",
    rollRate: "~35%",
    passives: ["No special effect — baseline mutation"],
    description: "1.0x provides effectively no bonus. Functionally equivalent to having no mutation at all. Exists primarily as a tutorial introduction to the mutation system.",
    strengths: [
      "Completely free — default mutation on new plots",
      "Cannot be avoided as a random roll",
    ],
    weaknesses: [
      "1.0x provides zero farming benefit",
      "No passives or abilities",
      "Placeholder only — replace immediately",
    ],
    bestUse: "Free placeholder on new plots. Never intentionally roll for this.",
    imagePlaceholder: "/placeholder-mutations-common-prairie-grass.png",
    tierRating: 4
  },
{
    id: "withered-husk",
    name: "Withered Husk",
    aliases: [],
    multiplier: 0.8,
    tier: "C",
    rollRate: "~6%",
    passives: ["Purely cosmetic wilted appearance"],
    description: "0.8x actively reduces crop value and provides only a cosmetic wilted appearance. The worst mutation in the game. Never should be intentionally rolled for.",
    strengths: [
      "Unique visual for collectors and themed farms",
    ],
    weaknesses: [
      "0.8x actively harms your coin income",
      "Shards spent on this are permanently wasted",
      "No competitive or economic value",
    ],
    bestUse: "None. Overwrite immediately.",
    imagePlaceholder: "/placeholder-mutations-withered-husk.png",
    tierRating: 4
  }
];

export function getMutationById(id: string): Mutation | undefined {
  return mutations.find((m) => m.id === id);
}

export function getMutationByName(name: string): Mutation | undefined {
  return mutations.find(
    (m) => m.name.toLowerCase() === name.toLowerCase() ||
      m.aliases.some((a) => a.toLowerCase() === name.toLowerCase())
  );
}

export function getMutationsByTier(tier: Mutation["tier"]): Mutation[] {
  return mutations.filter((m) => m.tier === tier);
}
