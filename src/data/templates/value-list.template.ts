// ============================================================
// TEMPLATE: Value List Page (Crop Values, Gem Rates, Item Prices)
// Copy this file to src/data/[game]/[value-list-name].ts and fill in.
// ============================================================

import type { CropValuesPageData } from "../types";

/**
 * Value List Page Data Template
 *
 * Use this for: item value tables, price lists, economy guides,
 * gem farming rates, or any data-heavy ranking page.
 *
 * Fields:
 *   title         — H1 heading
 *   description   — meta description + intro
 *   updatedAt     — footer timestamp
 *   breadcrumbs   — navigation trail
 *   crops         — main data table rows
 *   profitStacks  — multiplier stacking table
 *   tierDetails   — per-tier grouping explanations
 *   strategyTips  — actionable farming/optimization tips
 *   faq           — FAQ items
 *   relatedGuides — cross-links
 */
const data: CropValuesPageData = {
  // === SEO & Page Header ===
  title: "Game Name — Value List Title (Month Year)",
  description: "Every item ranked by value, efficiency, and profit-per-minute. Includes multiplier stacking calculations.",
  updatedAt: "Month Day, Year",

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Value List Title", href: "/game-name/value-list-path" },
  ],

  // === Main Data Table ===
  // tier: S=#FF3D00, A=#FF8C00, B=#FFD700, C=#3A86FF
  crops: [
    { name: "Item Name 1", coins: 480, time: "3 min", season: "All", tier: "S" },
    { name: "Item Name 2", coins: 420, time: "5 min", season: "All", tier: "S" },
    { name: "Item Name 3", coins: 350, time: "6 min", season: "Winter", tier: "A" },
    { name: "Item Name 4", coins: 280, time: "2 min", season: "Spring", tier: "B" },
    { name: "Item Name 5", coins: 100, time: "30 sec", season: "All", tier: "C" },
  ],

  // === Profit Stacking Table ===
  // Shows base → with best multiplier → with optimal stacking
  profitStacks: [
    { name: "Item Name 1", base: 480, sMut: "1,920", sMutPet: "9,600", ppm: "160" },
    { name: "Item Name 2", base: 420, sMut: "1,680", sMutPet: "8,400", ppm: "84" },
    { name: "Item Name 3", base: 350, sMut: "1,400", sMutPet: "7,000", ppm: "58" },
  ],

  // === Per-Tier Details ===
  // Group similar items by tier, explain why they belong there
  tierDetails: [
    { name: "S-Tier Item Name", why: "Explanation of why this item is S-Tier...", color: "#FF3D00" },
    { name: "A-Tier Items", why: "Explanation of why these are A-Tier, not S...", color: "#FF8C00" },
    { name: "B-Tier Items", why: "Explanation of why these are B-Tier...", color: "#FFD700" },
    { name: "C-Tier Items", why: "Explanation — starter items, replace ASAP...", color: "#3A86FF" },
  ],

  // === Strategy Tips ===
  // Use <strong> for emphasis on key terms
  strategyTips: [
    "<strong>Main slots:</strong> Always use your highest-tier items for primary activity.",
    "<strong>Secondary slots:</strong> Rotate seasonal or situational items for bonus value.",
    "<strong>Use boosts</strong> on your highest-value activity for maximum return.",
    "<strong>Active vs AFK:</strong> Optimize for your playstyle — fast cycles for active, long cycles for AFK.",
  ],

  // === FAQ ===
  faq: [
    { question: "What is the most profitable item?", answer: "Answer explaining the #1 item and why..." },
    { question: "How do multipliers affect values?", answer: "Explanation of stacking mechanics..." },
    { question: "Should I use seasonal or all-purpose items?", answer: "Trade-off explanation..." },
  ],

  // === Related Guides ===
  relatedGuides: [
    { label: "Related Guide 1", href: "/game-name/path", description: "Short description" },
    { label: "Related Guide 2", href: "/game-name/path", description: "Short description" },
    { label: "Related Guide 3", href: "/game-name/path", description: "Short description" },
  ],
};

export default data;
