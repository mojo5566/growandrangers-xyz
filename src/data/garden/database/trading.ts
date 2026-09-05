// ============================================================
// Grow a Garden — Canonical Trading Record Database
// Single source of truth for all trade-related project records.
// All page data files should import from here.
// ============================================================

export const TRADING_RECORD_DATE = "July 27, 2026";
export const TRADING_RECORD_VALUE_LABEL = "recorded units";
export const TRADING_RECORD_DISCLAIMER =
  "Internal editorial project records only. They are not official prices, live market quotes, or independently verified transaction data.";

/** trading interface */
export interface TradingValue {
  id: string;
  name: string;
  category: "Pet" | "Seed" | "Crop" | "Mutation";
  rarity: "Common" | "Rare" | "Epic" | "Legendary" | "Mythical";
  demand: "Low" | "Medium" | "High";
  value: number;
  valueUnit: "recorded units";
  trend: "Rising" | "Stable" | "Falling";
  sourceType: "Editorial";
  verificationStatus: "Unverified";
  notes?: string;
  updatedAt: string;
}

type TradingValueInput = Omit<
  TradingValue,
  "valueUnit" | "sourceType" | "verificationStatus" | "updatedAt"
> & {
  updatedAt?: string;
};

function createTradingRecord(input: TradingValueInput): TradingValue {
  return {
    ...input,
    valueUnit: TRADING_RECORD_VALUE_LABEL,
    sourceType: "Editorial",
    verificationStatus: "Unverified",
    updatedAt: input.updatedAt ?? TRADING_RECORD_DATE,
  };
}

const tradingInputs: TradingValueInput[] = [
  // ============================================================
  // PETS (22 entries)
  // ============================================================
  {
    id: "pet-golden-phoenix-chick",
    name: "Golden Phoenix Chick",
    category: "Pet",
    rarity: "Mythical",
    demand: "High",
    value: 5000000,
    trend: "Rising",
    notes: "Project record notes a 5.0x multiplier and a high internal demand label.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "pet-golden-dragon",
    name: "Golden Dragon",
    category: "Pet",
    rarity: "Legendary",
    demand: "High",
    value: 2800000,
    trend: "Rising",
    notes: "Project record notes a 4.8x multiplier and a high internal demand label.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "pet-crystal-unicorn-foal",
    name: "Crystal Unicorn Foal",
    category: "Pet",
    rarity: "Legendary",
    demand: "High",
    value: 2400000,
    trend: "Stable",
    notes: "Project record notes a 4.5x multiplier and a stable internal trend label.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "pet-neon-dragon-hatchling",
    name: "Neon Dragon Hatchling",
    category: "Pet",
    rarity: "Legendary",
    demand: "Medium",
    value: 1800000,
    trend: "Stable",
    notes: "4.2x multiplier. Solid mid-Legendary pick.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "pet-prismatic-fox-kit",
    name: "Prismatic Fox Kit",
    category: "Pet",
    rarity: "Legendary",
    demand: "Medium",
    value: 1500000,
    trend: "Rising",
    notes: "Project record notes a 4.0x multiplier and a rising internal trend label.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "pet-starlight-doe",
    name: "Starlight Doe",
    category: "Pet",
    rarity: "Legendary",
    demand: "Medium",
    value: 1300000,
    trend: "Stable",
    notes: "Project record notes a 3.8x multiplier for this all-season farming entry.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "pet-frost-wolf-pup",
    name: "Frost Wolf Pup",
    category: "Pet",
    rarity: "Epic",
    demand: "Medium",
    value: 850000,
    trend: "Stable",
    notes: "Project record notes a 3.8x multiplier and Winter-only availability.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "pet-ember-serpent",
    name: "Ember Serpent",
    category: "Pet",
    rarity: "Epic",
    demand: "Medium",
    value: 720000,
    trend: "Stable",
    notes: "3.5x multiplier. Consistent demand for Summer farming builds.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "pet-tide-crawler",
    name: "Tide Crawler",
    category: "Pet",
    rarity: "Epic",
    demand: "Low",
    value: 480000,
    trend: "Falling",
    notes: "Project record notes a 3.2x multiplier and a falling internal trend label.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "pet-verdant-sprite",
    name: "Verdant Sprite",
    category: "Pet",
    rarity: "Epic",
    demand: "Low",
    value: 420000,
    trend: "Stable",
    notes: "Project record notes a 3.0x multiplier and Spring-only availability.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "pet-gem-butterfly",
    name: "Gem Butterfly",
    category: "Pet",
    rarity: "Rare",
    demand: "Medium",
    value: 180000,
    trend: "Stable",
    notes: "Project record notes a 2.5x multiplier for this mid-tier entry.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "pet-cosmic-owl",
    name: "Cosmic Owl",
    category: "Pet",
    rarity: "Rare",
    demand: "Medium",
    value: 165000,
    trend: "Rising",
    notes: "Project record notes a 2.4x multiplier and a rising internal trend label.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "pet-baby-dragon",
    name: "Baby Dragon",
    category: "Pet",
    rarity: "Rare",
    demand: "Low",
    value: 130000,
    trend: "Falling",
    notes: "Project record notes a 2.2x multiplier for this Rare entry.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "pet-garden-gnome",
    name: "Garden Gnome",
    category: "Pet",
    rarity: "Rare",
    demand: "Low",
    value: 110000,
    trend: "Stable",
    notes: "Project record notes a 2.0x multiplier and low internal demand label.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "pet-robotic-scarecrow",
    name: "Robotic Scarecrow",
    category: "Pet",
    rarity: "Rare",
    demand: "Medium",
    value: 95000,
    trend: "Stable",
    notes: "Project record notes a 1.8x multiplier and a crop-protection passive.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "pet-bunny-rabbit",
    name: "Bunny Rabbit",
    category: "Pet",
    rarity: "Common",
    demand: "Medium",
    value: 35000,
    trend: "Stable",
    notes: "Project record notes a 1.5x multiplier for this non-starter entry.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "pet-cat-kitten",
    name: "Cat Kitten",
    category: "Pet",
    rarity: "Common",
    demand: "Low",
    value: 22000,
    trend: "Stable",
    notes: "Project record notes a 1.3x multiplier for this early-game entry.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "pet-puppy",
    name: "Puppy",
    category: "Pet",
    rarity: "Common",
    demand: "Low",
    value: 18000,
    trend: "Stable",
    notes: "Project record notes a 1.2x multiplier for this starter entry.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "pet-turtle",
    name: "Turtle",
    category: "Pet",
    rarity: "Common",
    demand: "Low",
    value: 12000,
    trend: "Falling",
    notes: "Project record notes a 1.1x multiplier for this Common entry.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "pet-chick",
    name: "Chick",
    category: "Pet",
    rarity: "Common",
    demand: "Low",
    value: 8000,
    trend: "Stable",
    notes: "Project record notes a 1.0x multiplier for this free tutorial pet.",
    updatedAt: "July 27, 2026",
  },

  // ============================================================
  // SEEDS (12 entries)
  // ============================================================
  {
    id: "seed-mythstar",
    name: "Mythstar Seed",
    category: "Seed",
    rarity: "Mythical",
    demand: "High",
    value: 750000,
    trend: "Rising",
    notes: "Project record notes this seed's mutation-related use and high internal demand label.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "seed-phoenix-bloom",
    name: "Phoenix Bloom Seed",
    category: "Seed",
    rarity: "Legendary",
    demand: "High",
    value: 320000,
    trend: "Rising",
    notes: "Project record notes Summer-only availability and a rising internal trend label.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "seed-star-melon",
    name: "Star Melon Seed",
    category: "Seed",
    rarity: "Legendary",
    demand: "High",
    value: 280000,
    trend: "Stable",
    notes: "Project record notes this all-season Legendary seed entry and a stable internal trend label.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "seed-golden-wheat",
    name: "Golden Wheat Seed",
    category: "Seed",
    rarity: "Legendary",
    demand: "High",
    value: 195000,
    trend: "Stable",
    notes: "Project record notes this seed's CPM comparison and a stable internal trend label.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "seed-premium-event",
    name: "Premium Event Seed",
    category: "Seed",
    rarity: "Mythical",
    demand: "Medium",
    value: 150000,
    trend: "Stable",
    notes: "Project record notes that this seed is listed as Robux-only.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "seed-crystal-berry",
    name: "Crystal Berry Seed",
    category: "Seed",
    rarity: "Rare",
    demand: "Medium",
    value: 80000,
    trend: "Stable",
    notes: "Project record notes this mid-tier, all-season seed entry.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "seed-frost-melon",
    name: "Frost Melon Seed",
    category: "Seed",
    rarity: "Rare",
    demand: "Medium",
    value: 75000,
    trend: "Rising",
    notes: "Project record notes Winter-only availability and a rising internal trend label.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "seed-neon-pumpkin",
    name: "Neon Pumpkin Seed",
    category: "Seed",
    rarity: "Rare",
    demand: "Medium",
    value: 72000,
    trend: "Stable",
    notes: "Project record notes Autumn-only availability and a stable internal trend label.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "seed-magma-pepper",
    name: "Magma Pepper Seed",
    category: "Seed",
    rarity: "Rare",
    demand: "Low",
    value: 55000,
    trend: "Falling",
    notes: "Project record notes Summer-only availability and a falling internal trend label.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "seed-lucky-clover",
    name: "Lucky Clover Seed",
    category: "Seed",
    rarity: "Legendary",
    demand: "Medium",
    value: 110000,
    trend: "Stable",
    notes: "Project record notes the listed Robux seed and its +25% mutation-roll effect.",
    updatedAt: "July 27, 2026",
  },

  // ============================================================
  // CROPS (10 entries)
  // ============================================================
  {
    id: "crop-phoenix-bloom",
    name: "Phoenix Bloom",
    category: "Crop",
    rarity: "Legendary",
    demand: "High",
    value: 12500,
    trend: "Rising",
    notes: "Project record notes this Summer-only crop and its mutation potential.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "crop-star-melon",
    name: "Star Melon",
    category: "Crop",
    rarity: "Legendary",
    demand: "High",
    value: 11000,
    trend: "Stable",
    notes: "Project record notes this all-season Legendary crop entry.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "crop-golden-wheat",
    name: "Golden Wheat",
    category: "Crop",
    rarity: "Legendary",
    demand: "High",
    value: 9500,
    trend: "Stable",
    notes: "Project record notes this crop's CPM comparison.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "crop-neon-pumpkin",
    name: "Neon Pumpkin",
    category: "Crop",
    rarity: "Rare",
    demand: "Medium",
    value: 6800,
    trend: "Stable",
    notes: "Project record notes Autumn-only availability for this mid-tier crop entry.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "crop-frost-melon",
    name: "Frost Melon",
    category: "Crop",
    rarity: "Rare",
    demand: "Medium",
    value: 6500,
    trend: "Rising",
    notes: "Project record notes Winter-only availability and a rising internal trend label.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "crop-magma-pepper",
    name: "Magma Pepper",
    category: "Crop",
    rarity: "Rare",
    demand: "Low",
    value: 5200,
    trend: "Falling",
    notes: "Project record notes Summer-only availability and a falling internal trend label.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "crop-dragon-fruit",
    name: "Dragon Fruit",
    category: "Crop",
    rarity: "Rare",
    demand: "Medium",
    value: 4800,
    trend: "Stable",
    notes: "Project record notes this all-season Rare crop entry.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "crop-crystal-berry",
    name: "Crystal Berry",
    category: "Crop",
    rarity: "Rare",
    demand: "Medium",
    value: 4200,
    trend: "Stable",
    notes: "Project record notes this all-season Rare crop entry.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "crop-moonflower",
    name: "Moonflower",
    category: "Crop",
    rarity: "Common",
    demand: "Low",
    value: 1800,
    trend: "Stable",
    notes: "Project record notes this slow-growth crop entry.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "crop-corn",
    name: "Corn",
    category: "Crop",
    rarity: "Common",
    demand: "Low",
    value: 1200,
    trend: "Stable",
    notes: "Project record notes this common all-season crop entry.",
    updatedAt: "July 27, 2026",
  },

  // ============================================================
  // MUTATIONS (10 entries)
  // ============================================================
  {
    id: "mutation-prismatic-rainbow",
    name: "Prismatic Rainbow",
    category: "Mutation",
    rarity: "Mythical",
    demand: "High",
    value: 4500000,
    trend: "Rising",
    notes: "Project record notes a 6.0x multiplier and a high internal demand label.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "mutation-midas-bloom",
    name: "Midas Bloom",
    category: "Mutation",
    rarity: "Mythical",
    demand: "High",
    value: 3200000,
    trend: "Rising",
    notes: "Project record notes a 5.0x multiplier and a rising internal trend label.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "mutation-aurelian-crown",
    name: "Aurelian Crown",
    category: "Mutation",
    rarity: "Legendary",
    demand: "High",
    value: 1800000,
    trend: "Stable",
    notes: "Project record notes a 4.5x multiplier for this Legendary mutation entry.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "mutation-crystalline-mycelium",
    name: "Crystalline Mycelium",
    category: "Mutation",
    rarity: "Legendary",
    demand: "Medium",
    value: 1400000,
    trend: "Stable",
    notes: "Project record notes a 4.0x multiplier and a stable internal trend label.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "mutation-leporine-bloom",
    name: "Leporine Bloom",
    category: "Mutation",
    rarity: "Legendary",
    demand: "Medium",
    value: 1100000,
    trend: "Stable",
    notes: "Project record notes a 3.5x multiplier for this Legendary mutation entry.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "mutation-frostbind",
    name: "Frostbind",
    category: "Mutation",
    rarity: "Epic",
    demand: "Medium",
    value: 650000,
    trend: "Rising",
    notes: "Project record notes a 3.0x multiplier and a rising internal trend label.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "mutation-emberglow",
    name: "Emberglow",
    category: "Mutation",
    rarity: "Epic",
    demand: "Medium",
    value: 580000,
    trend: "Stable",
    notes: "Project record notes a 2.8x multiplier for this Summer-related mutation entry.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "mutation-voidtouched",
    name: "Voidtouched",
    category: "Mutation",
    rarity: "Epic",
    demand: "Low",
    value: 420000,
    trend: "Falling",
    notes: "Project record notes a 2.5x multiplier and a falling internal trend label.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "mutation-golden-touch",
    name: "Golden Touch",
    category: "Mutation",
    rarity: "Rare",
    demand: "Medium",
    value: 220000,
    trend: "Stable",
    notes: "Project record notes a 2.0x multiplier for this entry-tier mutation.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "mutation-frostbite",
    name: "Frostbite",
    category: "Mutation",
    rarity: "Rare",
    demand: "Low",
    value: 140000,
    trend: "Stable",
    notes: "Project record notes a 1.5x multiplier and Winter-only availability.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "pet-shadow-cat",
    name: "Shadow Cat",
    category: "Pet",
    rarity: "Legendary",
    demand: "High",
    value: 800000,
    trend: "Rising",
    notes: "Campfire Event Part 3 exclusive. Inferno Shard drop chance makes it valuable for ritual farming. High demand during event window.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "pet-flame-bear",
    name: "Flame Bear",
    category: "Pet",
    rarity: "Legendary",
    demand: "Medium",
    value: 600000,
    trend: "Stable",
    notes: "Campfire Event Part 3 exclusive. Summer spoilage immunity is niche but valued by endgame farmers.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "seed-shadow-spine",
    name: "Shadow Spine Seed",
    category: "Seed",
    rarity: "Legendary",
    demand: "Medium",
    value: 25000,
    trend: "Stable",
    notes: "Campfire Event Part 3 seed. Available from Sam's Shop during event. Value tied to event duration.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "seed-smoke-stalk",
    name: "Smoke Stalk Seed",
    category: "Seed",
    rarity: "Rare",
    demand: "Low",
    value: 8000,
    trend: "Stable",
    notes: "Campfire Event Part 3 seed. Common availability keeps value low. Useful for fast mutation rolling.",
    updatedAt: "July 27, 2026",
  }
];

const allowedCategories = new Set<TradingValue["category"]>([
  "Pet",
  "Seed",
  "Crop",
  "Mutation",
]);
const allowedRarities = new Set<TradingValue["rarity"]>([
  "Common",
  "Rare",
  "Epic",
  "Legendary",
  "Mythical",
]);
const allowedDemand = new Set<TradingValue["demand"]>(["Low", "Medium", "High"]);
const allowedTrends = new Set<TradingValue["trend"]>(["Rising", "Stable", "Falling"]);

function validateTradingRecords(records: TradingValue[]): void {
  const ids = new Set<string>();
  const names = new Set<string>();

  records.forEach((record) => {
    if (!record.id.trim() || ids.has(record.id)) {
      throw new Error(`Trading record has a missing or duplicate id: ${record.id || "<empty>"}`);
    }
    if (!record.name.trim() || names.has(record.name)) {
      throw new Error(`Trading record has a missing or duplicate name: ${record.id}`);
    }
    if (!Number.isFinite(record.value) || record.value < 0) {
      throw new Error(`Trading record has an invalid value for ${record.id}`);
    }
    if (record.valueUnit !== TRADING_RECORD_VALUE_LABEL) {
      throw new Error(`Trading record has an invalid value unit for ${record.id}`);
    }
    if (record.sourceType !== "Editorial") {
      throw new Error(`Trading record has an invalid source type for ${record.id}`);
    }
    if (record.verificationStatus !== "Unverified") {
      throw new Error(`Trading record has an invalid verification status for ${record.id}`);
    }
    if (record.updatedAt !== TRADING_RECORD_DATE) {
      throw new Error(`Trading record has an inconsistent record date for ${record.id}`);
    }
    if (!allowedCategories.has(record.category)) {
      throw new Error(`Trading record has an invalid category for ${record.id}`);
    }
    if (!allowedRarities.has(record.rarity)) {
      throw new Error(`Trading record has an invalid rarity for ${record.id}`);
    }
    if (!allowedDemand.has(record.demand)) {
      throw new Error(`Trading record has an invalid demand label for ${record.id}`);
    }
    if (!allowedTrends.has(record.trend)) {
      throw new Error(`Trading record has an invalid trend label for ${record.id}`);
    }

    ids.add(record.id);
    names.add(record.name);
  });

  for (const category of allowedCategories) {
    if (!records.some((record) => record.category === category)) {
      throw new Error(`Trading records are missing category: ${category}`);
    }
  }
}

export const trading: TradingValue[] = tradingInputs.map(createTradingRecord);
validateTradingRecords(trading);

export function formatTradingRecordValue(value: number): string {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(2).replace(/\.00$/, "")}M`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  }
  return value.toString();
}

export function getTradingItemById(id: string): TradingValue | undefined {
  return trading.find((t) => t.id === id);
}

export function getTradingItems(): TradingValue[] {
  return trading;
}

export function getTradingByCategory(category: TradingValue["category"]): TradingValue[] {
  return trading.filter((t) => t.category === category);
}

export function getHighDemandItems(): TradingValue[] {
  return trading.filter((t) => t.demand === "High");
}

export function getTradingByRarity(rarity: TradingValue["rarity"]): TradingValue[] {
  return trading.filter((t) => t.rarity === rarity);
}

export function getTradingByTrend(trend: TradingValue["trend"]): TradingValue[] {
  return trading.filter((t) => t.trend === trend);
}
