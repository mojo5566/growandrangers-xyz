// ============================================================
// TEMPLATE: Tier List Page
// Copy this file to src/data/[game]/[tier-list-name].ts and fill in.
// ============================================================

import type { TierListPageData } from "../types";

/**
 * Tier List Page Data Template
 *
 * Fields:
 *   title            — H1 heading
 *   description      — meta description + intro paragraph
 *   updatedAt        — displayed in footer
 *   breadcrumbs      — navigation trail
 *   tierExplanation  — tier legend cards (usually S/A/B/C or Mythic/Legendary/Epic)
 *   tiers            — array of tier groups with entries
 *   detailCards      — expanded explanations per item
 *   strategyTips     — bullet tips (optional, HTML allowed)
 *   teamComps        — team composition suggestions (optional)
 *   pairingTable     — optimal pairing matrix (optional)
 *   faq              — FAQ items
 *   relatedGuides    — cross-links
 */
const data: TierListPageData = {
  // === SEO & Page Header ===
  title: "Game Name — Tier List Name (Version)",
  description: "Every item ranked from S-Tier to C-Tier with strengths, weaknesses, and optimal use cases.",
  updatedAt: "Month Day, Year",

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Tier List Name", href: "/game-name/tier-list-path" },
  ],

  // === Tier Legend ===
  // Colors: S=#FF3D00, A=#FF8C00, B=#FFD700, C=#3A86FF
  // For Mythic/Legendary systems: Mythic=#FF3D00, Legendary=#FF8C00, Epic=#A020F0
  tierExplanation: [
    { tier: "S", color: "#FF3D00", label: "Meta-defining", desc: "Best-in-slot" },
    { tier: "A", color: "#FF8C00", label: "Excellent", desc: "Strong alternatives" },
    { tier: "B", color: "#FFD700", label: "Solid", desc: "Viable options" },
    { tier: "C", color: "#3A86FF", label: "Budget", desc: "Starter picks" },
  ],

  // === Tier Groups ===
  tiers: [
    {
      name: "S-Tier — Meta-Defining",
      description: "These top-tier items define the meta. Short explanation of what makes something S-Tier.",
      entries: [
        { name: "Item Name 1", tier: "S", description: "Short effect description" },
        { name: "Item Name 2", tier: "S", description: "Short effect description" },
      ],
    },
    {
      name: "A-Tier — Excellent",
      description: "Strong alternatives that are slightly below S-Tier.",
      entries: [
        { name: "Item Name 3", tier: "A", description: "Short effect description" },
      ],
    },
    {
      name: "B-Tier — Solid",
      description: "Viable in specific situations.",
      entries: [
        { name: "Item Name 4", tier: "B", description: "Short effect description" },
      ],
    },
    {
      name: "C-Tier — Budget",
      description: "Starter picks. Replace when possible.",
      entries: [
        { name: "Item Name 5", tier: "C", description: "Short effect description" },
      ],
    },
  ],

  // === Detail Cards ===
  // One card per item (or group similar items together). Each card has:
  //   name, rank (e.g., "Why S-Tier"), desc (explanation),
  //   strengths[], weaknesses[], bestUse (optional), bestOn (optional), color
  detailCards: [
    {
      name: "Item Name 1",
      rank: "S-Tier #1",
      desc: "Detailed explanation of why this item belongs in its tier...",
      strengths: ["Strength point 1", "Strength point 2", "Strength point 3"],
      weaknesses: ["Weakness point 1", "Weakness point 2"],
      bestUse: "Best use case description...",
      color: "#FF3D00",
    },
    // Add one detailCard per item or group...
  ],

  // === Strategy Tips (optional) ===
  strategyTips: [
    "Tip 1 with <strong>emphasis</strong> where needed.",
    "Tip 2 with actionable advice.",
  ],

  // === Team Compositions or Pairing Table (optional) ===
  teamComps: [
    { name: "Team Name", units: "Unit1 + Unit2 + Unit3", desc: "What this team does." },
  ],

  // === FAQ ===
  faq: [
    {
      question: "Question 1?",
      answer: "Answer text...",
    },
    {
      question: "Question 2?",
      answer: "Answer text...",
    },
    // 3-5 FAQ items recommended
  ],

  // === Related Guides ===
  relatedGuides: [
    {
      label: "Guide Name",
      href: "/game-name/guide-path",
      description: "Short description (8-12 words)",
    },
    { label: "Guide 2", href: "/path", description: "Description" },
    { label: "Guide 3", href: "/path", description: "Description" },
  ],
};

export default data;
