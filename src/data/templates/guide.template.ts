// ============================================================
// TEMPLATE: Guide Page (Evolution Guide, How-To, Strategy)
// Copy this file to src/data/[game]/[guide-name].ts and fill in.
// ============================================================

import type { EvolutionPageData } from "../types";

/**
 * Guide Page Data Template
 *
 * Use this for: evolution guides, progression guides, farming guides,
 * strategy overviews, or any multi-section informational page.
 *
 * Fields:
 *   title          — H1 heading
 *   description    — meta description + intro
 *   updatedAt      — footer timestamp
 *   breadcrumbs    — navigation trail
 *   overview       — top-level description + highlight bullets
 *   stages         — step/stage table (costs, requirements, rewards)
 *   totalCost      — summary string below stages table
 *   materials      — material breakdowns (sources + tips)
 *   bestUnitsSteps — numbered priority steps
 *   priorityList   — tiered priority table
 *   mistakes       — common mistakes to avoid
 *   faq            — FAQ items
 *   relatedGuides  — cross-links
 */
const data: EvolutionPageData = {
  // === SEO & Page Header ===
  title: "Game Name — Guide Title (Month Year)",
  description: "Complete guide covering all aspects of [topic] including costs, strategies, and priority order.",
  updatedAt: "Month Day, Year",

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Guide Title", href: "/game-name/guide-path" },
  ],

  // === Overview ===
  overview: {
    description: "Intro paragraph explaining what this guide covers and why it matters. Keep to 2-3 sentences.",
    highlights: [
      "Key benefit or feature 1",
      "Key benefit or feature 2",
      "Key benefit or feature 3",
      "Key benefit or feature 4",
    ],
  },

  // === Stages / Steps Table ===
  stages: [
    { from: "Stage 1 → Stage 2", mats: "xCost + yCurrency", stats: "What you gain" },
    { from: "Stage 2 → Stage 3", mats: "xCost + yCurrency", stats: "What you gain" },
    { from: "Stage 3 → Stage 4", mats: "xCost + yCurrency", stats: "What you gain" },
  ],
  totalCost: "Total to max: sum of all stage costs",

  // === Materials / Resources ===
  materials: [
    {
      name: "Resource Name",
      icon: "🔹",
      desc: "What this resource is and when it is used.",
      sources: ["Source method 1", "Source method 2", "Source method 3"],
      tip: "Pro tip about farming or using this resource efficiently.",
    },
    {
      name: "Resource Name 2",
      icon: "💎",
      desc: "What this resource is.",
      sources: ["Source 1", "Source 2"],
      tip: "Pro tip.",
    },
  ],

  // === Priority Steps ===
  bestUnitsSteps: [
    { step: "1", title: "First Priority", desc: "What to do first and why." },
    { step: "2", title: "Second Priority", desc: "What to do second." },
    { step: "3", title: "Third Priority", desc: "What to do third." },
    { step: "4", title: "Fourth Priority", desc: "What to do fourth." },
  ],

  // === Priority Tier List ===
  priorityList: [
    { tier: "S", unit: "Top priority items", reason: "Why these are highest priority." },
    { tier: "A", unit: "High priority items", reason: "Why these come next." },
    { tier: "B", unit: "Medium priority", reason: "Why these are situational." },
    { tier: "C", unit: "Low priority / skip", reason: "Why these should be avoided." },
  ],

  // === Common Mistakes ===
  mistakes: [
    { title: "Mistake 1 Title", desc: "What the mistake is and how to avoid it. Be specific and actionable." },
    { title: "Mistake 2 Title", desc: "What the mistake is and how to avoid it." },
    { title: "Mistake 3 Title", desc: "What the mistake is and how to avoid it." },
    { title: "Mistake 4 Title", desc: "What the mistake is and how to avoid it." },
  ],

  // === FAQ ===
  faq: [
    { question: "Question 1?", answer: "Answer..." },
    { question: "Question 2?", answer: "Answer..." },
    { question: "Question 3?", answer: "Answer..." },
    { question: "Question 4?", answer: "Answer..." },
  ],

  // === Related Guides ===
  relatedGuides: [
    { label: "Guide Name", href: "/game-name/path", description: "Short description" },
    { label: "Guide Name 2", href: "/game-name/path", description: "Short description" },
    { label: "Guide Name 3", href: "/game-name/path", description: "Short description" },
  ],
};

export default data;
