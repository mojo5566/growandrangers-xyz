import type { MetadataRoute } from "next";

const BASE_URL = "https://bloxpulse.com";

const staticPages = [
  { path: "", priority: 1.0, changefreq: "daily" as const },
  { path: "/grow-a-garden/codes", priority: 0.9, changefreq: "daily" as const },
  { path: "/grow-a-garden/mutation-tier-list", priority: 0.8, changefreq: "weekly" as const },
  { path: "/grow-a-garden/pet-tier-list", priority: 0.8, changefreq: "weekly" as const },
  { path: "/grow-a-garden/crop-value-list", priority: 0.8, changefreq: "weekly" as const },
  { path: "/anime-rangers-x/codes", priority: 0.9, changefreq: "daily" as const },
  { path: "/anime-rangers-x/unit-tier-list", priority: 0.8, changefreq: "weekly" as const },
  { path: "/anime-rangers-x/trait-tier-list", priority: 0.8, changefreq: "weekly" as const },
  { path: "/anime-rangers-x/evolution-guide", priority: 0.8, changefreq: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changefreq,
    priority: page.priority,
  }));
}
