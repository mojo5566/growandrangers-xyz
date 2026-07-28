// ============================================================
// Grow a Garden — Canonical Events Database
// Single source of truth for all event entities.
// All page data files should import from here.
// ============================================================

/** events interface */
export interface GardenEvent {
  id: string;
  title: string;
  type: "Season" | "Event" | "Admin Abuse" | "Limited";
  startDate: string;
  endDate: string;
  status: "Upcoming" | "Active" | "Ended";
  rewards: string[];
  description: string;
  updatedAt: string;
}

export const events: GardenEvent[] = [
  // ============================================================
  // ACTIVE EVENTS
  // ============================================================
  {
    id: "summer-event-2026",
    title: "Summer Event 2026",
    type: "Season",
    startDate: "June 2026",
    endDate: "August 2026",
    status: "Active",
    rewards: [
      "Phoenix Bloom Seed (50,000 Sheckles, Summer only)",
      "Magma Pepper Seed (-25% price for event duration)",
      "Summer-themed cosmetic decorations",
      "Premium Event Seed Pack (199 Robux, guaranteed mutation roll)",
      "+20% harvest value on all Summer crops",
    ],
    description:
      "Limited-time Summer seasonal event introducing Summer-only crops, the Phoenix Bloom seed at 50,000 Sheckles, and a +20% bonus on all Summer-season harvests. Event runs through August 2026.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "zen-update-event-2026",
    title: "Zen Update Celebration",
    type: "Event",
    startDate: "June 2026",
    endDate: "July 2026",
    status: "Active",
    rewards: [
      "Code: RDCAward — RDC Award Trophy (cosmetic)",
      "Code: BEANORLEAVE10 — Green Bean Chamber (cosmetic)",
      "Code: torigate — Whispering Torii Gate (cosmetic)",
      "19 new crops added to permanent database",
      "8 new mutations including Prismatic Rainbow (S-Tier)",
      "8 new pets including Golden Dragon (Legendary)",
    ],
    description:
      "Celebration event for the Zen Update (v2.4.0) introducing Zen-themed decorations, three new active codes (RDCAward, BEANORLEAVE10, torigate), and a database expansion with 19 new crops, 8 new mutations, and 8 new pets.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "campfire-event-part-3",
    title: "Campfire Event Part 3",
    type: "Event",
    startDate: "June 2026",
    endDate: "July 2026",
    status: "Active",
    rewards: [
      "Campfire Ritual mechanic — place 4 Inferno Shards + a pet to grant Inferno pet mutation",
      "Pet Level cap raised to 500 — unlock 4 new pet mutations at Level 500",
      "New plants: Shadow Spine and Smoke Stalk",
      "New pets: Shadow Cat and Flame Bear",
      "Inferno Shards — obtainable every 25 Bearnaby quests",
      "2 new campfire crafting recipes",
    ],
    description:
      "Third major content drop for the Campfire Event, released June 20, 2026. Introduces the Campfire Ritual mechanic for pet mutations, raises the pet level cap to 500, adds two new plants (Shadow Spine, Smoke Stalk) and two new pets (Shadow Cat, Flame Bear). Inferno Shards are earned every 25 Bearnaby quests and used to perform Campfire Rituals that grant the Inferno pet mutation.",
    updatedAt: "July 27, 2026",
  },

  // ============================================================
  // UPCOMING EVENTS
  // ============================================================
  {
    id: "autumn-event-2026",
    title: "Autumn Event 2026",
    type: "Season",
    startDate: "September 2026",
    endDate: "November 2026",
    status: "Upcoming",
    rewards: [
      "Neon Pumpkin Seed (10,000 Sheckles, Autumn only)",
      "Autumn-themed cosmetic decorations",
      "+20% harvest value on all Autumn crops",
      "Event-exclusive pet TBD",
    ],
    description:
      "Upcoming Autumn seasonal event expected to bring back the Neon Pumpkin Seed, Autumn-themed cosmetics, and the standard +20% harvest value bonus on Autumn crops. Dates and exclusive pet to be confirmed closer to launch.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "halloween-event-2026",
    title: "Halloween Event 2026",
    type: "Limited",
    startDate: "October 2026",
    endDate: "November 2026",
    status: "Upcoming",
    rewards: [
      "Limited-time Halloween cosmetics",
      "Spooky-themed seed pack",
      "Event-exclusive spooky pet (TBD)",
      "Trick-or-Treat code drops throughout October",
    ],
    description:
      "Upcoming limited-time Halloween event featuring spooky cosmetics, a themed seed pack, and an event-exclusive pet. Multiple code drops expected throughout October 2026. Full details to be announced closer to launch.",
    updatedAt: "July 27, 2026",
  },
  {
    id: "winter-event-2026",
    title: "Winter Event 2026",
    type: "Season",
    startDate: "December 2026",
    endDate: "February 2027",
    status: "Upcoming",
    rewards: [
      "Frost Melon Seed (10,000 Sheckles, Winter only)",
      "Frostbloom Seed (75 Robux, Winter only, guaranteed Frost mutation)",
      "Winter-themed cosmetic decorations",
      "+20% harvest value on all Winter crops",
      "Event-exclusive pet: Frost Wolf Pup returns",
    ],
    description:
      "Upcoming Winter seasonal event expected to bring back Frost Melon Seed, Frostbloom Seed (Robux), and the +20% harvest value bonus on Winter crops. Frost Wolf Pup pet expected to return.",
    updatedAt: "July 27, 2026",
  },

  // ============================================================
  // ENDED EVENTS
  // ============================================================
  {
    id: "fairy-event-2026",
    title: "Fairy Event 2026",
    type: "Event",
    startDate: "April 2026",
    endDate: "April 2026",
    status: "Ended",
    rewards: [
      "Fairy Pet Egg (15,000 Sheckles, limited-time hatch pool)",
      "Fairy-themed decorations (Fairy Circle, Mushroom Ring, Glowing Toadstool)",
      "Lucky Clover Seed (99 Robux, +25% mutation roll rate)",
      "Spring seasonal bonus: +20% harvest value on Spring crops",
      "Event-exclusive pet: Verdant Sprite (4.0x multiplier, Spring only)",
    ],
    description:
      "Spring Fairy event that ran April 1–30, 2026. Introduced the limited-time Fairy Pet Egg, fairy-themed decorations, the Lucky Clover Seed (Robux), and the event-exclusive Verdant Sprite pet.",
    updatedAt: "April 2026",
  },
  {
    id: "winter-event-2025",
    title: "Winter Event 2025",
    type: "Season",
    startDate: "December 2025",
    endDate: "February 2026",
    status: "Ended",
    rewards: [
      "Frost Melon Seed (10,000 Sheckles, Winter only)",
      "Frostbloom Seed (75 Robux, Winter only, guaranteed Frost mutation)",
      "Winter-themed cosmetic decorations",
      "+20% harvest value on all Winter crops",
      "Event-exclusive pet: Frost Wolf Pup (3.8x multiplier, Winter only)",
    ],
    description:
      "Winter seasonal event that ran December 2025 – February 2026. Introduced Frost Melon Seed, Frostbloom Seed (Robux), and the event-exclusive Frost Wolf Pup pet.",
    updatedAt: "December 2025",
  },
  {
    id: "autumn-event-2025",
    title: "Autumn Event 2025",
    type: "Season",
    startDate: "September 2025",
    endDate: "November 2025",
    status: "Ended",
    rewards: [
      "Neon Pumpkin Seed (10,000 Sheckles, Autumn only)",
      "Autumn-themed cosmetic decorations",
      "+20% harvest value on all Autumn crops",
      "Event-exclusive cosmetic: Glow Pumpkin Mask (SUMMERFUN25 code, later expired)",
    ],
    description:
      "Autumn seasonal event that ran September – November 2025. Introduced Neon Pumpkin Seed, Autumn-themed cosmetics, and the Glow Pumpkin Mask cosmetic via the SUMMERFUN25 code (later expired).",
    updatedAt: "September 2025",
  },
  {
    id: "summer-event-2025",
    title: "Summer Event 2025",
    type: "Season",
    startDate: "June 2025",
    endDate: "August 2025",
    status: "Ended",
    rewards: [
      "Magma Pepper Seed (10,000 Sheckles, Summer only)",
      "Summer-themed cosmetic decorations",
      "+20% harvest value on all Summer crops",
      "Code: SUMMERFUN25 — Summer Hat + x2 Uncommon Seed Packs + 1,000 Coins (later expired)",
    ],
    description:
      "Summer seasonal event that ran June – August 2025. Introduced Magma Pepper Seed, Summer-themed cosmetics, and the SUMMERFUN25 code (later expired September 15, 2025).",
    updatedAt: "September 2025",
  },
  {
    id: "lunar-new-year-2025",
    title: "Lunar New Year 2025",
    type: "Limited",
    startDate: "February 2025",
    endDate: "February 2025",
    status: "Ended",
    rewards: [
      "Lunar-themed cosmetic decorations",
      "Lucky Cat Pet (limited-time, 2.5x multiplier)",
      "Code: LUNARGLOW10 — x3 Basic Seed Packs + 500 Coins (later expired)",
      "+25% harvest value during the 2-week event window",
    ],
    description:
      "Limited-time Lunar New Year event in February 2025. Introduced Lunar-themed decorations, the Lucky Cat Pet (limited-time), and the LUNARGLOW10 code (later expired August 31, 2025).",
    updatedAt: "February 2025",
  },
  {
    id: "valentines-event-2025",
    title: "Valentine's Event 2025",
    type: "Limited",
    startDate: "February 2025",
    endDate: "February 2025",
    status: "Ended",
    rewards: [
      "Heart Decorations (limited-time cosmetics)",
      "Code: GARDENLOVE — Heart Decorations + 250 Coins (later expired)",
      "+10% harvest value during the 1-week event window",
    ],
    description:
      "Limited-time Valentine's event in February 2025. Introduced Heart Decorations and the GARDENLOVE code (later expired February 28, 2025).",
    updatedAt: "February 2025",
  },
  {
    id: "spring-event-2025",
    title: "Spring Event 2025",
    type: "Season",
    startDate: "March 2025",
    endDate: "May 2025",
    status: "Ended",
    rewards: [
      "Spring-themed cosmetic decorations",
      "Code: SPRING2025 — Spring Decorations + 200 Coins (later expired)",
      "+20% harvest value on all Spring crops",
    ],
    description:
      "Spring seasonal event that ran March – May 2025. Introduced Spring-themed cosmetics and the SPRING2025 code (later expired May 31, 2025).",
    updatedAt: "May 2025",
  },

  // ============================================================
  // ADMIN ABUSE INCIDENTS
  // ============================================================
  {
    id: "admin-abuse-june-2026",
    title: "Admin Abuse Incident — June 2026",
    type: "Admin Abuse",
    startDate: "June 2026",
    endDate: "June 2026",
    status: "Ended",
    rewards: [
      "Compensation shards sent via in-game mail to affected players",
      "Two-step verification now required for any item spawn above Rare tier",
      "New audit logging system deployed to track all admin spawn commands",
    ],
    description:
      "Investigated admin abuse incident involving unauthorized item spawning by a junior moderator. Offending items were rolled back, the moderator was removed, and additional audit logging was deployed. Affected players received compensation shards via in-game mail.",
    updatedAt: "June 2026",
  },
  {
    id: "admin-abuse-march-2025",
    title: "Admin Abuse Incident — March 2025",
    type: "Admin Abuse",
    startDate: "March 2025",
    endDate: "March 2025",
    status: "Ended",
    rewards: [
      "Compensation seeds sent via in-game mail to affected players",
      "Senior moderator account removed and access revoked",
      "Egg Shop exploit patched — eggs can no longer be purchased with negative Sheckles",
    ],
    description:
      "Investigated admin abuse incident involving a senior moderator exploiting the Egg Shop duplication bug for personal gain. Offending items were rolled back, the moderator was removed, and the underlying Egg Shop exploit was patched in v2.0.1.",
    updatedAt: "March 2025",
  },
  {
    id: "100m-visits-milestone",
    title: "100M Visits Milestone",
    type: "Event",
    startDate: "2025",
    endDate: "2025",
    status: "Ended",
    rewards: [
      "Code: GOLDENCARROT — x1 Golden Fertilizer + 200 Coins (later expired)",
      "100M Visits Badge (profile cosmetic)",
      "Limited-time 2x coin boost weekend",
    ],
    description:
      "Milestone celebration event for reaching 100 million visits. Introduced the GOLDENCARROT code (later expired 2025), the 100M Visits Badge profile cosmetic, and a limited-time 2x coin boost weekend.",
    updatedAt: "2025",
  },
];

export function getEventById(id: string): GardenEvent | undefined {
  return events.find((e) => e.id === id);
}

export function getEvents(): GardenEvent[] {
  return events;
}

export function getActiveEvents(): GardenEvent[] {
  return events.filter((e) => e.status === "Active");
}

export function getUpcomingEvents(): GardenEvent[] {
  return events.filter((e) => e.status === "Upcoming");
}

export function getEndedEvents(): GardenEvent[] {
  return events.filter((e) => e.status === "Ended");
}

export function getEventsByType(type: GardenEvent["type"]): GardenEvent[] {
  return events.filter((e) => e.type === type);
}
