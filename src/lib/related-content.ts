// ============================================================
// Centralized Internal Link Registry
// Maps entity categories to related links for the
// RelatedContent component.
// ============================================================

import type { RelatedLink } from "@/data/types";

interface LinkEntry {
  label: string;
  href: string;
  description: string;
  category: string;
}

// Garden link registry
const gardenLinks: Record<string, LinkEntry[]> = {
  crops: [
    { label: "Crop Value List", href: "/grow-a-garden/crop-value-list", description: "Complete crop value sheet with base prices and mutation bonuses", category: "guide" },
    { label: "All Crops Database", href: "/grow-a-garden/crops", description: "Browse every crop in the Grow a Garden database", category: "database" },
    { label: "Mutation Tier List", href: "/grow-a-garden/mutation-tier-list", description: "Every mutation ranked by rarity tier and value multiplier", category: "guide" },
    { label: "Pet Tier List", href: "/grow-a-garden/pet-tier-list", description: "All pets ranked by hatching value, ability, and farm impact", category: "guide" },
    { label: "Best Mutations", href: "/grow-a-garden/best-mutations", description: "Top mutations for profit and progression in the current meta", category: "guide" },
    { label: "Money Making Guide", href: "/grow-a-garden/money-making-guide", description: "Proven strategies to maximize earnings per hour on your farm", category: "guide" },
    { label: "Beginner Guide", href: "/grow-a-garden/beginner-guide", description: "Start your farm the right way — tips, tricks, and early strategies", category: "guide" },
  ],
  mutations: [
    { label: "Mutation Tier List", href: "/grow-a-garden/mutation-tier-list", description: "Full tier rankings with detailed analysis", category: "guide" },
    { label: "Best Mutations", href: "/grow-a-garden/best-mutations", description: "Which mutations to roll for and why", category: "guide" },
    { label: "All Mutations Database", href: "/grow-a-garden/mutations", description: "Browse every mutation in the Grow a Garden database", category: "database" },
    { label: "Pet Tier List", href: "/grow-a-garden/pet-tier-list", description: "All pets ranked — mutations and pets stack multiplicatively", category: "guide" },
    { label: "Crop Value List", href: "/grow-a-garden/crop-value-list", description: "See how mutations multiply your crop profits", category: "guide" },
    { label: "Active Codes", href: "/grow-a-garden/codes", description: "Latest working codes for free shards and eggs", category: "guide" },
  ],
  pets: [
    { label: "Pet Tier List", href: "/grow-a-garden/pet-tier-list", description: "Full pet rankings with detailed analysis", category: "guide" },
    { label: "Best Pets", href: "/grow-a-garden/best-pets", description: "Which pets to hatch and why", category: "guide" },
    { label: "All Pets Database", href: "/grow-a-garden/pets", description: "Browse every pet in the Grow a Garden database", category: "database" },
    { label: "Mutation Tier List", href: "/grow-a-garden/mutation-tier-list", description: "Pets stack multiplicatively with mutations", category: "guide" },
    { label: "Money Making Guide", href: "/grow-a-garden/money-making-guide", description: "Maximize your pet-and-mutation combo profits", category: "guide" },
    { label: "Active Codes", href: "/grow-a-garden/codes", description: "Latest working codes for free eggs", category: "guide" },
  ],
  guide: [
    { label: "Active Codes", href: "/grow-a-garden/codes", description: "All working promo codes — updated daily", category: "guide" },
    { label: "Beginner Guide", href: "/grow-a-garden/beginner-guide", description: "Everything new players need to know", category: "guide" },
    { label: "Mutation Tier List", href: "/grow-a-garden/mutation-tier-list", description: "Every mutation ranked by rarity and multiplier", category: "guide" },
    { label: "Pet Tier List", href: "/grow-a-garden/pet-tier-list", description: "All pets ranked by hatching value and ability", category: "guide" },
    { label: "Crop Value List", href: "/grow-a-garden/crop-value-list", description: "Complete crop value rankings", category: "guide" },
    { label: "Money Making Guide", href: "/grow-a-garden/money-making-guide", description: "Maximize your coins per hour", category: "guide" },
  ],
};

// Rangers link registry
const rangersLinks: Record<string, LinkEntry[]> = {
  units: [
    { label: "Unit Tier List", href: "/anime-rangers-x/unit-tier-list", description: "Full tier rankings with detailed analysis", category: "guide" },
    { label: "Best Units", href: "/anime-rangers-x/best-units", description: "Top picks for every game mode", category: "guide" },
    { label: "All Units Database", href: "/anime-rangers-x/units", description: "Browse every unit in the Anime Rangers X database", category: "database" },
    { label: "Trait Tier List", href: "/anime-rangers-x/trait-tier-list", description: "Best traits to pair with your units", category: "guide" },
    { label: "Evolution Guide", href: "/anime-rangers-x/evolution-guide", description: "How to evolve and awaken your units", category: "guide" },
    { label: "Team Guide", href: "/anime-rangers-x/team-guide", description: "Optimal team compositions for every mode", category: "guide" },
  ],
  traits: [
    { label: "Trait Tier List", href: "/anime-rangers-x/trait-tier-list", description: "Full trait rankings with detailed analysis", category: "guide" },
    { label: "All Traits Database", href: "/anime-rangers-x/traits", description: "Browse every trait in the Anime Rangers X database", category: "database" },
    { label: "Unit Tier List", href: "/anime-rangers-x/unit-tier-list", description: "See which units benefit most from each trait", category: "guide" },
    { label: "Best Units", href: "/anime-rangers-x/best-units", description: "Top-performing units and their ideal traits", category: "guide" },
    { label: "Evolution Guide", href: "/anime-rangers-x/evolution-guide", description: "Evolve your units to unlock more trait slots", category: "guide" },
    { label: "Active Codes", href: "/anime-rangers-x/codes", description: "Latest working codes for free gems and rerolls", category: "guide" },
  ],
  guide: [
    { label: "Active Codes", href: "/anime-rangers-x/codes", description: "All working promo codes — updated daily", category: "guide" },
    { label: "Beginner Guide", href: "/anime-rangers-x/beginner-guide", description: "Everything new players need to know", category: "guide" },
    { label: "Unit Tier List", href: "/anime-rangers-x/unit-tier-list", description: "Every unit ranked by power and utility", category: "guide" },
    { label: "Trait Tier List", href: "/anime-rangers-x/trait-tier-list", description: "All traits ranked by modifier strength", category: "guide" },
    { label: "Evolution Guide", href: "/anime-rangers-x/evolution-guide", description: "Complete evolution paths and requirements", category: "guide" },
    { label: "Team Guide", href: "/anime-rangers-x/team-guide", description: "Best team compositions for every mode", category: "guide" },
  ],
};

/**
 * Select up to `limit` related links for a given category and game.
 * Excludes the link whose href matches `currentPath` (to avoid self-linking).
 * Priority: same-category database → related guides → other databases.
 */
export function getRelatedLinks(
  category: string,
  game: "garden" | "rangers",
  currentPath?: string,
  limit: number = 3,
): RelatedLink[] {
  const registry = game === "garden" ? gardenLinks : rangersLinks;

  // Get links for this category, fall back to "guide" generic
  const candidates = (registry[category] || registry["guide"] || [])
    .filter((link) => !currentPath || link.href !== currentPath);

  // Deduplicate by href
  const seen = new Set<string>();
  const unique: LinkEntry[] = [];
  for (const link of candidates) {
    if (!seen.has(link.href)) {
      seen.add(link.href);
      unique.push(link);
    }
  }

  // Return up to limit
  return unique.slice(0, limit).map((link) => ({
    label: link.label,
    href: link.href,
    description: link.description,
    category: link.category,
  }));
}
