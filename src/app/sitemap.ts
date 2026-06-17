import type { MetadataRoute } from "next";
import { crops } from "@/data/garden/database/crops";
import { mutations } from "@/data/garden/database/mutations";
import { pets } from "@/data/garden/database/pets";
import { units } from "@/data/rangers/database/units";
import { traits } from "@/data/rangers/database/traits";

const BASE_URL = "https://growandrangers.xyz";

const staticPages = [
  { path: "/guides/summer-2026-tier-list-and-garden", priority: 0.7, changefreq: "weekly" as const },
  { path: "", priority: 1.0, changefreq: "daily" as const },
  { path: "/grow-a-garden/", priority: 0.9, changefreq: "daily" as const },
  { path: "/anime-rangers-x/", priority: 0.9, changefreq: "daily" as const },
  { path: "/grow-a-garden/codes", priority: 0.9, changefreq: "daily" as const },
  { path: "/grow-a-garden/mutation-tier-list", priority: 0.8, changefreq: "weekly" as const },
  { path: "/grow-a-garden/pet-tier-list", priority: 0.8, changefreq: "weekly" as const },
  { path: "/grow-a-garden/crop-value-list", priority: 0.8, changefreq: "weekly" as const },
  { path: "/grow-a-garden/crops", priority: 0.8, changefreq: "weekly" as const },
  { path: "/grow-a-garden/mutations", priority: 0.8, changefreq: "weekly" as const },
  { path: "/grow-a-garden/pets", priority: 0.8, changefreq: "weekly" as const },
  { path: "/grow-a-garden/beginner-guide", priority: 0.7, changefreq: "weekly" as const },
  { path: "/grow-a-garden/beginner-farming", priority: 0.7, changefreq: "weekly" as const },
  { path: "/grow-a-garden/best-crops", priority: 0.7, changefreq: "weekly" as const },
  { path: "/grow-a-garden/best-mutations", priority: 0.7, changefreq: "weekly" as const },
  { path: "/grow-a-garden/best-pets", priority: 0.7, changefreq: "weekly" as const },
  { path: "/grow-a-garden/money-making-guide", priority: 0.7, changefreq: "weekly" as const },
  { path: "/grow-a-garden/value-list", priority: 0.7, changefreq: "weekly" as const },
  { path: "/anime-rangers-x/codes", priority: 0.9, changefreq: "daily" as const },
  { path: "/anime-rangers-x/tier-list", priority: 0.8, changefreq: "weekly" as const },
  { path: "/anime-rangers-x/unit-tier-list", priority: 0.8, changefreq: "weekly" as const },
  { path: "/anime-rangers-x/trait-tier-list", priority: 0.8, changefreq: "weekly" as const },
  { path: "/anime-rangers-x/evolution-guide", priority: 0.8, changefreq: "weekly" as const },
  { path: "/anime-rangers-x/units", priority: 0.8, changefreq: "weekly" as const },
  { path: "/anime-rangers-x/traits", priority: 0.8, changefreq: "weekly" as const },
  { path: "/anime-rangers-x/beginner-guide", priority: 0.7, changefreq: "weekly" as const },
  { path: "/anime-rangers-x/best-units", priority: 0.7, changefreq: "weekly" as const },
  { path: "/anime-rangers-x/team-guide", priority: 0.7, changefreq: "weekly" as const },
];

// Generate dynamic URLs from database arrays
const dynamicGarden = [
  ...crops.map((c) => ({
    path: `/grow-a-garden/crops/${c.id}`,
    priority: 0.7,
    changefreq: "weekly" as const,
  })),
  ...mutations.map((m) => ({
    path: `/grow-a-garden/mutations/${m.id}`,
    priority: 0.7,
    changefreq: "weekly" as const,
  })),
  ...pets.map((p) => ({
    path: `/grow-a-garden/pets/${p.id}`,
    priority: 0.7,
    changefreq: "weekly" as const,
  })),
];

const dynamicRangers = [
  ...units.map((u) => ({
    path: `/anime-rangers-x/units/${u.id}`,
    priority: 0.7,
    changefreq: "weekly" as const,
  })),
  ...traits.map((t) => ({
    path: `/anime-rangers-x/traits/${t.id}`,
    priority: 0.7,
    changefreq: "weekly" as const,
  })),
];

const allPages = [...staticPages, ...dynamicGarden, ...dynamicRangers];

export default function sitemap(): MetadataRoute.Sitemap {
  return allPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: "2026-06-14",
    changeFrequency: page.changefreq,
    priority: page.priority,
  }));
}
