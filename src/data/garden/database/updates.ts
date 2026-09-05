// ============================================================
// Grow a Garden — Canonical Updates Database
// Single source of truth for all game update entities.
// All page data files should import from here.
// ============================================================

/** updates interface */
export interface GardenUpdate {
  id: string;
  title: string;
  date: string;
  type: "Update" | "Event" | "Patch" | "Admin Abuse";
  version?: string;
  summary: string;
  features: string[];
  newItems?: {
    crops?: string[];
    pets?: string[];
    seeds?: string[];
    mutations?: string[];
  };
  status: "Current" | "Archived";
  updatedAt: string;
}

export const updates: GardenUpdate[] = [
  {
    id: "cooking-event-update",
    title: "Cooking Event Update",
    date: "August 29, 2026",
    type: "Update",
    version: "1.65.0",
    summary:
      "August 29, 2026 update introducing a new Cooking Event, various new seeds and items, plus cooking, pet-passive, and other fixes and changes. Individual new-item names are not yet recorded in this dataset.",
    features: [
      "New Cooking Event",
      "Various new seeds and items (individual names not yet recorded here)",
      "Cooking, pet passive, and other fixes/changes",
      "Bug fixes",
    ],
    status: "Current",
    updatedAt: "September 5, 2026",
  },
  {
    id: "harvest-moon-part-4",
    title: "Harvest Moon Event Part 4",
    date: "August 15, 2026",
    type: "Update",
    version: "1.63.0",
    summary:
      "Fourth part of the Harvest Moon Event adding 7 plants and 6 pets per the community update log (including Eclipse Berry, Maize Stalk, and Cornling), increased pet storage, the Harvest Moon Collection reward track, a Harvest Moon Shovel cosmetic, and multiple bug fixes.",
    features: [
      "7 new plants and 6 new pets recorded for this part, including Eclipse Berry, Maize Stalk, and Cornling",
      "Increased pet storage",
      "Harvest Moon Collection reward track — up to 20 tiers, resettable after tier 20; the Harvest Moon Shovel skin unlocks at 80% completion",
      "New quest stand — three active quests at a time with a four-hour refresh timer",
      "Moon Egg moved into Harvest Moon Crafting",
      "Wise Owl cooldown now decreases twice as fast while a Harvest Moon is active",
      "Bug fixes: plants occasionally stopping growth, sell-NPC distance handling, and floating apples; general performance improvements",
    ],
    newItems: {
      seeds: ["Eclipse Berry", "Maize Stalk"],
      pets: ["Cornling"],
    },
    status: "Current",
    updatedAt: "September 5, 2026",
  },
  {
    id: "harvest-moon-event-2026",
    title: "Harvest Moon Event",
    date: "August 1, 2026",
    type: "Event",
    summary:
      "Harvest Moon event announced on the official Grow a Garden X account on August 1, 2026 UTC. Place the required fruits on the surrounding pillars to summon Harvest Moon weather, collect Moonbeam-mutated fruit, and sell it for Moon Coins. The event rolled out in weekly parts through August 29, 2026.",
    features: [
      "Pillar-fruit summoning mechanic for Harvest Moon weather",
      "Moonbeam mutation for fruit, sold for Moon Coins",
      "Moon Coin Madness milestone track — completing all seven milestones unlocks the Lunar Lantern Seed",
      "Moon Coin Shop",
      "Wise Owl pet introduced in Part 2 (August 8, 2026)",
      "Season Pass 7 introduced in Part 2",
    ],
    newItems: {
      seeds: ["Lunar Lantern Seed"],
    },
    status: "Archived",
    updatedAt: "September 5, 2026",
  },
  {
    id: "campfire-part-3",
    title: "Campfire Event Part 3",
    date: "June 20, 2026",
    type: "Update",
    version: "2.5.0",
    summary:
      "Third major Campfire Event content drop introducing the Campfire Ritual mechanic for Inferno pet mutations, Pet Level 500 cap with 4 new pet mutations, two new plants (Shadow Spine, Smoke Stalk), two new pets (Shadow Cat, Flame Bear), Inferno Shards, and 2 new campfire crafting recipes.",
    features: [
      "Campfire Ritual — place 4 Inferno Shards and a pet to grant Inferno mutation",
      "Pet Level cap raised from 400 to 500",
      "4 new pet mutations unlockable at Level 500 via Pet Mutation Machine",
      "Inferno Shards — earned every 25 Bearnaby quests",
      "New plants: Shadow Spine and Smoke Stalk",
      "New pets: Shadow Cat and Flame Bear",
      "2 new campfire crafting recipes",
      "Bee event now accessible to all players",
      "Shovel skin customization in settings",
    ],
    newItems: {
      seeds: ["Shadow Spine", "Smoke Stalk"],
      pets: ["Shadow Cat", "Flame Bear"],
    },
    status: "Archived",
    updatedAt: "September 5, 2026",
  },
  {
    id: "zen-update",
    title: "Zen Update",
    date: "June 2026",
    type: "Update",
    version: "2.4.0",
    summary:
      "Major Summer 2026 update introducing Zen-themed decorations, new codes (RDCAward, BEANORLEAVE10, torigate), and a database expansion adding 19 new crops, 8 new mutations, and 8 new pets including Golden Dragon and Prismatic Rainbow.",
    features: [
      "Added Zen-themed cosmetic decorations (Torii Gate, Bean Chamber, RDC Trophy)",
      "Released 3 new active codes — RDCAward, BEANORLEAVE10, torigate",
      "Database expansion: 19 new crops, 8 new mutations, 8 new pets",
      "New Legendary pets: Golden Dragon (4.8x), Crystal Unicorn Foal (4.5x)",
      "New S-Tier mutation: Prismatic Rainbow (6.0x multiplier)",
      "UI refresh for seed shop and pet inventory",
    ],
    newItems: {
      crops: ["Star Melon", "Phoenix Bloom", "Dragon Fruit", "Watermelon", "Grape", "Apple", "Melon", "Strawberry", "Blueberry", "Cherry", "Corn", "Pumpkin", "Peach", "Cabbage", "Lettuce", "Radish", "Pear", "Bean", "Sunflower"],
      pets: ["Golden Dragon", "Crystal Unicorn Foal", "Neon Dragon Hatchling", "Prismatic Fox Kit", "Starlight Doe", "Ember Serpent", "Tide Crawler", "Verdant Sprite"],
      mutations: ["Prismatic Rainbow", "Midas Bloom", "Aurelian Crown", "Crystalline Mycelium", "Leporine Bloom", "Frostbind", "Emberglow", "Voidtouched"],
    },
    status: "Archived",
    updatedAt: "July 19, 2026",
  },
  {
    id: "summer-event-2026",
    title: "Summer Event 2026",
    date: "June 2026",
    type: "Event",
    summary:
      "Limited-time Summer event introducing seasonal Summer-only crops, the Phoenix Bloom seed, and a +20% bonus on all Summer-season harvests. Event runs through August 2026.",
    features: [
      "Summer seasonal bonus: +20% harvest value on all Summer crops",
      "Phoenix Bloom Seed added to Seed Shop (50,000 Sheckles, Summer only)",
      "Magma Pepper Seed price reduced by 25% for event duration",
      "Summer-themed cosmetic decorations available in shop",
      "Limited-time Premium Event Seed Pack (199 Robux) — guaranteed mutation roll",
    ],
    newItems: {
      crops: ["Phoenix Bloom"],
      seeds: ["Phoenix Bloom Seed", "Premium Event Seed"],
    },
    status: "Current",
    updatedAt: "July 19, 2026",
  },
  {
    id: "admin-abuse-incident-1",
    title: "Admin Abuse Incident — June 2026",
    date: "June 2026",
    type: "Admin Abuse",
    summary:
      "Investigated admin abuse incident involving unauthorized item spawning by a junior moderator. Offending items were rolled back, the moderator was removed, and additional audit logging was deployed.",
    features: [
      "Rollback of unauthorized items spawned during the incident window",
      "Junior moderator account removed and access revoked",
      "New audit logging system deployed to track all admin spawn commands",
      "Two-step verification now required for any item spawn above Rare tier",
      "In-game mail sent to affected players with compensation shards",
    ],
    status: "Archived",
    updatedAt: "June 2026",
  },
  {
    id: "seed-shop-expansion",
    title: "Seed Shop Expansion",
    date: "May 2026",
    type: "Update",
    version: "2.3.0",
    summary:
      "Expanded the Seed Shop with 5 new seed tiers including Mythstar Seed (Mythical, 250k Sheckles) and three new Robux premium seeds. Rebalanced seed pricing across all tiers.",
    features: [
      "Added Mythstar Seed — only seed that can spawn S-Tier mutations on planting",
      "Added Lucky Clover Seed (99 Robux, Spring only) — +25% mutation roll rate",
      "Added Frostbloom Seed (75 Robux, Winter only) — guaranteed Frost mutation",
      "Added Premium Event Seed (199 Robux) — guaranteed mutation roll on every harvest",
      "Rebalanced Sheckles seed prices across all tiers for better progression curve",
    ],
    newItems: {
      seeds: ["Mythstar Seed", "Lucky Clover Seed", "Frostbloom Seed", "Premium Event Seed"],
    },
    status: "Archived",
    updatedAt: "May 2026",
  },
  {
    id: "fairy-event-2026",
    title: "Fairy Event 2026",
    date: "April 2026",
    type: "Event",
    summary:
      "Spring Fairy event introducing the Fairy Pet Egg (limited-time hatch pool), fairy-themed decorations, and the limited-time Lucky Clover Seed. Event ran April 1–30, 2026.",
    features: [
      "Limited-time Fairy Pet Egg available in Egg Shop (15,000 Sheckles)",
      "Fairy-themed cosmetic decorations added (Fairy Circle, Mushroom Ring, Glowing Toadstool)",
      "Lucky Clover Seed (99 Robux) boosted mutation roll rates by +25%",
      "Spring seasonal bonus: +20% harvest value on Spring crops",
      "Event-exclusive pet: Verdant Sprite (4.0x multiplier, Spring only)",
    ],
    newItems: {
      pets: ["Verdant Sprite"],
      seeds: ["Lucky Clover Seed"],
    },
    status: "Archived",
    updatedAt: "April 2026",
  },
  {
    id: "pet-expansion-update",
    title: "Pet Expansion Update",
    date: "March 2026",
    type: "Update",
    version: "2.2.0",
    summary:
      "Major pet content update adding 8 new pets across all egg tiers, including the new Legendary Golden Dragon (4.8x multiplier) and Crystal Unicorn Foal (4.5x multiplier). Rebalanced Legendary Egg drop rates.",
    features: [
      "8 new pets added across all egg tiers",
      "New Legendary pet: Golden Dragon (4.8x multiplier, S-Tier)",
      "New Legendary pet: Crystal Unicorn Foal (4.5x multiplier, S-Tier)",
      "Legendary Egg drop rates rebalanced to sum to 100% (was 75%)",
      "Pet inventory UI refreshed with sort and filter options",
    ],
    newItems: {
      pets: ["Golden Dragon", "Crystal Unicorn Foal", "Neon Dragon Hatchling", "Prismatic Fox Kit", "Starlight Doe", "Ember Serpent", "Tide Crawler", "Verdant Sprite"],
    },
    status: "Archived",
    updatedAt: "March 2026",
  },
  {
    id: "mutation-expansion-update",
    title: "Mutation Expansion Update",
    date: "February 2026",
    type: "Update",
    version: "2.1.0",
    summary:
      "Added 8 new mutations including the new S-Tier Prismatic Rainbow (6.0x multiplier) and Midas Bloom (5.0x multiplier). Rebalanced mutation roll rates across all tiers.",
    features: [
      "8 new mutations added including S-Tier Prismatic Rainbow (6.0x) and Midas Bloom (5.0x)",
      "Mutation roll rates rebalanced — S-Tier now 0.1% (was 0.05%)",
      "New mutation visual effects for all S and A tier mutations",
      "Mutation stacking rules clarified in patch notes — multipliers now stack multiplicatively",
      "Bug fix: Midas Bloom no longer overrides Prismatic Rainbow when both trigger",
    ],
    newItems: {
      mutations: ["Prismatic Rainbow", "Midas Bloom", "Aurelian Crown", "Crystalline Mycelium", "Leporine Bloom", "Frostbind", "Emberglow", "Voidtouched"],
    },
    status: "Archived",
    updatedAt: "February 2026",
  },
  {
    id: "winter-event-2025",
    title: "Winter Event 2025",
    date: "December 2025",
    type: "Event",
    summary:
      "Winter seasonal event introducing Frost Melon Seed, Frostbloom Seed (Robux), and the Winter seasonal bonus. Event ran December 2025 – February 2026.",
    features: [
      "Winter seasonal bonus: +20% harvest value on all Winter crops",
      "Frost Melon Seed added to Seed Shop (10,000 Sheckles, Winter only)",
      "Frostbloom Seed (75 Robux, Winter only) — guaranteed Frost mutation on harvest",
      "Winter-themed cosmetic decorations available in shop",
      "Event-exclusive pet: Frost Wolf Pup (3.8x multiplier, Winter only)",
    ],
    newItems: {
      crops: ["Frost Melon"],
      seeds: ["Frost Melon Seed", "Frostbloom Seed"],
      pets: ["Frost Wolf Pup"],
    },
    status: "Archived",
    updatedAt: "December 2025",
  },
  {
    id: "autumn-event-2025",
    title: "Autumn Event 2025",
    date: "September 2025",
    type: "Event",
    summary:
      "Autumn seasonal event introducing Neon Pumpkin Seed and the Autumn seasonal bonus. Event ran September – November 2025.",
    features: [
      "Autumn seasonal bonus: +20% harvest value on all Autumn crops",
      "Neon Pumpkin Seed added to Seed Shop (10,000 Sheckles, Autumn only)",
      "Autumn-themed cosmetic decorations available in shop",
      "Event-exclusive cosmetic: Glow Pumpkin Mask (redeemable with SUMMERFUN25 code, later expired)",
    ],
    newItems: {
      crops: ["Neon Pumpkin"],
      seeds: ["Neon Pumpkin Seed"],
    },
    status: "Archived",
    updatedAt: "September 2025",
  },
  {
    id: "patch-2-0-1-bugfixes",
    title: "Patch 2.0.1 — Bug Fixes",
    date: "August 2025",
    type: "Patch",
    version: "2.0.1",
    summary:
      "Quality-of-life patch fixing critical bugs including the moonflower growth time mismatch, pet inventory sort issue, and a duplication exploit involving the Egg Shop.",
    features: [
      "Fixed: Moonflower growth time now correctly displays 10 min (was showing 8 min)",
      "Fixed: Pet inventory sort by multiplier now works correctly",
      "Fixed: Egg Shop duplication exploit — eggs can no longer be purchased with negative Sheckles",
      "Fixed: Seasonal bonus not applying to all-season crops during their off-season",
      "Improved: Server-side validation for all code redemption attempts",
    ],
    status: "Archived",
    updatedAt: "August 2025",
  },
];

export function getUpdateById(id: string): GardenUpdate | undefined {
  return updates.find((u) => u.id === id);
}

export function getCurrentUpdates(): GardenUpdate[] {
  return updates.filter((u) => u.status === "Current");
}

export function getArchivedUpdates(): GardenUpdate[] {
  return updates.filter((u) => u.status === "Archived");
}

export function getUpdatesByType(type: GardenUpdate["type"]): GardenUpdate[] {
  return updates.filter((u) => u.type === type);
}

export function getLatestUpdate(): GardenUpdate | undefined {
  // Returns the most recent update by chronological order in the array (newest first)
  return updates[0];
}
