// ============================================================
// TEMPLATE: Codes Page
// Copy this file to src/data/[game]/codes.ts and fill in.
// ============================================================

import type { CodesPageData } from "../types";

/**
 * Codes Page Data Template
 *
 * Fields:
 *   title         — H1 heading, used in <title> and Open Graph
 *   description   — meta description and intro paragraph
 *   updatedAt     — displayed in "Last Updated" banner
 *   breadcrumbs   — navigation breadcrumb trail
 *   activeCodes   — working codes table rows
 *   expiredCodes  — expired codes table rows
 *   howToRedeem   — step-by-step instructions (HTML allowed)
 *   faq           — FAQ accordion items
 *   relatedGuides — cross-links to other guide pages
 */
const data: CodesPageData = {
  // === SEO & Page Header ===
  title: "Game Name Codes — All Active & Expired Promo Codes (Month Year)",
  description: "Redeem these working promo codes for rewards. Every code verified manually.",
  updatedAt: "Month Day, Year",

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Game Name Codes", href: "/game-name/codes" },
  ],

  // === Active Codes Table ===
  activeCodes: [
    { code: "EXAMPLE_CODE1", reward: "x100 Gems", note: "Event description" },
    { code: "EXAMPLE_CODE2", reward: "x50 Coins + Item", note: "Milestone reward" },
    // Add more active codes...
  ],

  // === Expired Codes Table ===
  expiredCodes: [
    { code: "OLD_CODE", reward: "x200 Gems", expiredOn: "Month Day, Year" },
    // Add more expired codes...
  ],

  // === How To Redeem ===
  // Use <strong> for emphasis. Keep 3-5 steps.
  howToRedeem: [
    "Launch <strong>Game Name</strong> from the Roblox app or website.",
    "Locate the <strong>Codes button</strong> in the menu.",
    "Type or paste the code <strong>exactly as shown</strong> above.",
    "Press <strong>Redeem</strong>. Rewards appear instantly.",
  ],

  // === FAQ (5 questions recommended for SEO) ===
  faq: [
    {
      question: "How do I redeem codes?",
      answer: "Step-by-step redemption instructions...",
    },
    {
      question: "Why is my code not working?",
      answer: "Codes are case-sensitive and expire after their event window...",
    },
    {
      question: "How often are new codes released?",
      answer: "New codes drop alongside major updates, seasonal events...",
    },
    // Add 2-3 more FAQ items...
  ],

  // === Related Guides (3 recommended for internal linking) ===
  relatedGuides: [
    {
      label: "Guide Name",
      href: "/game-name/guide-path",
      description: "Short description (8-12 words)",
    },
    // Add 2 more related guides...
  ],
};

export default data;
