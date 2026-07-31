import type { MetadataRoute } from "next";
import { crops } from "@/data/garden/database/crops";
import { mutations } from "@/data/garden/database/mutations";
import { pets } from "@/data/garden/database/pets";
import { eggs } from "@/data/garden/database/eggs";
import { seeds } from "@/data/garden/database/seeds";
import { updates } from "@/data/garden/database/updates";
import { trading } from "@/data/garden/database/trading";
import { events } from "@/data/garden/database/events";
import { units } from "@/data/rangers/database/units";
import { traits } from "@/data/rangers/database/traits";
import gardenCodes from "@/data/garden/codes";
import gardenPetTierList from "@/data/garden/pet-tier-list";
import gardenMutationTierList from "@/data/garden/mutation-tier-list";
import gardenCropValueList from "@/data/garden/crop-value-list";
import gardenBestPets from "@/data/garden/best-pets";
import rangersCodes from "@/data/rangers/codes";
import rangersBeginnerGuide from "@/data/rangers/beginner-guide";
import rangersEvolutionGuide from "@/data/rangers/evolution-guide";
import rangersTeamGuide from "@/data/rangers/team-guide";
import rangersTierList from "@/data/rangers/tier-list";
import rangersUnitTierList from "@/data/rangers/unit-tier-list";
import rangersTraitTierList from "@/data/rangers/trait-tier-list";
import rangersBestUnits from "@/data/rangers/best-units";
import rangersTraitReroll from "@/data/rangers/trait-reroll";
import garden2Codes from "@/data/garden2/codes";
import garden2BeginnerGuide from "@/data/garden2/beginner-guide";
import garden2GuildGuide from "@/data/garden2/guild-guide";
import garden2NightStealingGuide from "@/data/garden2/night-stealing-guide";
import { CONTENT_UPDATED_AT, normalizeContentDate } from "@/lib/content-dates";

const BASE_URL = "https://growandrangers.xyz";

// Today's date — used for pages that are updated continuously (codes, homepage, hubs)
const TODAY = new Date().toISOString().split("T")[0];

// Database list pages were last reviewed on this date
const DB_UPDATED = "2026-07-27"; // Reviewed July 27, 2026

const staticPages = [
  { path: "/guides/summer-2026-tier-list-and-garden", priority: 0.7, changefreq: "weekly" as const, lastModified: "2026-07-10" },
  { path: "", priority: 1.0, changefreq: "daily" as const, lastModified: TODAY },
  { path: "/privacy-policy", priority: 0.5, changefreq: "monthly" as const, lastModified: CONTENT_UPDATED_AT },
  { path: "/about", priority: 0.5, changefreq: "monthly" as const, lastModified: CONTENT_UPDATED_AT },
  { path: "/contact", priority: 0.5, changefreq: "monthly" as const, lastModified: CONTENT_UPDATED_AT },
  { path: "/grow-a-garden/", priority: 0.9, changefreq: "daily" as const, lastModified: TODAY },
  { path: "/anime-rangers-x/", priority: 0.9, changefreq: "daily" as const, lastModified: TODAY },
  { path: "/grow-a-garden/codes", priority: 0.9, changefreq: "daily" as const, lastModified: gardenCodes.updatedAt },
  { path: "/grow-a-garden/mutation-tier-list", priority: 0.8, changefreq: "weekly" as const, lastModified: gardenMutationTierList.updatedAt },
  { path: "/grow-a-garden/pet-tier-list", priority: 0.8, changefreq: "weekly" as const, lastModified: gardenPetTierList.updatedAt },
  { path: "/grow-a-garden/crop-value-list", priority: 0.8, changefreq: "weekly" as const, lastModified: gardenCropValueList.updatedAt },
  { path: "/grow-a-garden/value-calculator", priority: 0.8, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/crops", priority: 0.8, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/mutations", priority: 0.8, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/pets", priority: 0.8, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/eggs", priority: 0.8, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/seeds", priority: 0.8, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/updates", priority: 0.8, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/trading", priority: 0.8, changefreq: "daily" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/events", priority: 0.8, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/beginner-farming", priority: 0.7, changefreq: "weekly" as const, lastModified: "2026-06-12" },
  { path: "/grow-a-garden/best-crops", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/best-pets", priority: 0.7, changefreq: "weekly" as const, lastModified: gardenBestPets.updatedAt },
  { path: "/grow-a-garden/best-mythical-pets", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/best-seeds", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/top-trading-items", priority: 0.7, changefreq: "daily" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/pet-guide", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/best-mutations", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/beginner-guide", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/money-making-guide", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/calculators", priority: 0.8, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/crop-value-calculator", priority: 0.8, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/mutation-calculator", priority: 0.8, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/trading-calculator", priority: 0.8, changefreq: "daily" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/pet-value-calculator", priority: 0.8, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/how-to-start", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/beginner-tips", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/how-to-get-rich", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/best-money-making-methods", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/best-starter-pets", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/pet-ranking-guide", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/mutation-guide", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/trading-guide", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/value-trading-guide", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  // ===== New SEO guides added July 27, 2026 =====
  // Pet专题
  { path: "/grow-a-garden/best-dragon-pets", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/best-phoenix-pets", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/best-mythical-pets-ranking", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/best-pets-for-money", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/best-event-pets", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/best-summer-pets", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  // Mutation专题
  { path: "/grow-a-garden/rainbow-mutation-guide", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/gold-mutation-guide", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/shock-mutation-guide", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/best-mutation-combinations", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  // Seed专题
  { path: "/grow-a-garden/best-legendary-seeds", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/best-event-seeds", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  // Trading专题
  { path: "/grow-a-garden/rare-items-value", priority: 0.7, changefreq: "daily" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/trading-tips", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  // Beginner专题
  { path: "/grow-a-garden/how-to-level-fast", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden/how-to-get-rich-fast", priority: 0.7, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/grow-a-garden-2/", priority: 0.9, changefreq: "daily" as const, lastModified: TODAY },
  { path: "/grow-a-garden-2/codes", priority: 0.9, changefreq: "daily" as const, lastModified: garden2Codes.updatedAt },
  { path: "/grow-a-garden-2/beginner-guide", priority: 0.8, changefreq: "weekly" as const, lastModified: garden2BeginnerGuide.updatedAt },
  { path: "/grow-a-garden-2/night-stealing-guide", priority: 0.8, changefreq: "weekly" as const, lastModified: garden2NightStealingGuide.updatedAt },
  { path: "/grow-a-garden-2/guild-guide", priority: 0.8, changefreq: "weekly" as const, lastModified: garden2GuildGuide.updatedAt },
  { path: "/anime-rangers-x/codes", priority: 0.9, changefreq: "daily" as const, lastModified: rangersCodes.updatedAt },
  { path: "/anime-rangers-x/tier-list", priority: 0.8, changefreq: "weekly" as const, lastModified: rangersTierList.updatedAt },
  { path: "/anime-rangers-x/unit-tier-list", priority: 0.8, changefreq: "weekly" as const, lastModified: rangersUnitTierList.updatedAt },
  { path: "/anime-rangers-x/trait-tier-list", priority: 0.8, changefreq: "weekly" as const, lastModified: rangersTraitTierList.updatedAt },
  { path: "/anime-rangers-x/trait-reroll", priority: 0.8, changefreq: "weekly" as const, lastModified: rangersTraitReroll.updatedAt },
  { path: "/anime-rangers-x/evolution-guide", priority: 0.8, changefreq: "weekly" as const, lastModified: rangersEvolutionGuide.updatedAt },
  { path: "/anime-rangers-x/units", priority: 0.8, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/anime-rangers-x/traits", priority: 0.8, changefreq: "weekly" as const, lastModified: DB_UPDATED },
  { path: "/anime-rangers-x/beginner-guide", priority: 0.7, changefreq: "weekly" as const, lastModified: rangersBeginnerGuide.updatedAt },
  { path: "/anime-rangers-x/best-units", priority: 0.7, changefreq: "weekly" as const, lastModified: rangersBestUnits.updatedAt },
  { path: "/anime-rangers-x/team-guide", priority: 0.7, changefreq: "weekly" as const, lastModified: rangersTeamGuide.updatedAt },
];

// Generate dynamic URLs from database arrays
const dynamicGarden = [
  ...crops.map((c) => ({
    path: `/grow-a-garden/crops/${c.id}`,
    priority: 0.7,
    changefreq: "weekly" as const,
    lastModified: DB_UPDATED,
  })),
  ...mutations.map((m) => ({
    path: `/grow-a-garden/mutations/${m.id}`,
    priority: 0.7,
    changefreq: "weekly" as const,
    lastModified: DB_UPDATED,
  })),
  ...pets.map((p) => ({
    path: `/grow-a-garden/pets/${p.id}`,
    priority: 0.7,
    changefreq: "weekly" as const,
    lastModified: DB_UPDATED,
  })),
  ...eggs.map((e) => ({
    path: `/grow-a-garden/eggs/${e.id}`,
    priority: 0.7,
    changefreq: "weekly" as const,
    lastModified: DB_UPDATED,
  })),
  ...seeds.map((s) => ({
    path: `/grow-a-garden/seeds/${s.id}`,
    priority: 0.7,
    changefreq: "weekly" as const,
    lastModified: DB_UPDATED,
  })),
  ...updates.map((u) => ({
    path: `/grow-a-garden/updates/${u.id}`,
    priority: 0.7,
    changefreq: "weekly" as const,
    lastModified: DB_UPDATED,
  })),
  ...trading.map((t) => ({
    path: `/grow-a-garden/trading/${t.id}`,
    priority: 0.7,
    changefreq: "daily" as const,
    lastModified: DB_UPDATED,
  })),
  ...events.map((e) => ({
    path: `/grow-a-garden/events/${e.id}`,
    priority: 0.7,
    changefreq: "weekly" as const,
    lastModified: DB_UPDATED,
  })),
];

const dynamicRangers = [
  ...units.map((u) => ({
    path: `/anime-rangers-x/units/${u.id}`,
    priority: 0.7,
    changefreq: "weekly" as const,
    lastModified: DB_UPDATED,
  })),
  ...traits.map((t) => ({
    path: `/anime-rangers-x/traits/${t.id}`,
    priority: 0.7,
    changefreq: "weekly" as const,
    lastModified: DB_UPDATED,
  })),
];

const allPages = [...staticPages, ...dynamicGarden, ...dynamicRangers];

export default function sitemap(): MetadataRoute.Sitemap {
  return allPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: normalizeContentDate(page.lastModified),
    changeFrequency: page.changefreq,
    priority: page.priority,
  }));
}
