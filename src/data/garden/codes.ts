import type { CodesPageData } from "../types";

const data: CodesPageData = {
  title: "Grow a Garden Codes — Active & Expired Promo Codes (June 2026)",
  description: "Working Grow a Garden promo codes for free Seed Packs, Coins, Pet Eggs, Fertilizer, and exclusive hats. All codes verified against official sources — last checked June 8, 2026.",
  updatedAt: "June 8, 2026",
  lastChecked: "June 8, 2026",
  sources: [
    { name: "Grow A Garden Wiki", url: "https://wikigrowagarden.com/codes/", type: "Community Wiki", lastChecked: "June 8, 2026" },
    { name: "Official Discord", url: "https://discord.gg/growagarden", type: "Official", lastChecked: "June 8, 2026" },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Grow a Garden Codes", href: "/grow-a-garden/codes" },
  ],
  activeCodes: [
    { code: "HONEYBEE2025", reward: "x1 Rare Pet Egg + Bee Hat Item", note: "Bizzy Bees Update — no expiration", source: "https://wikigrowagarden.com/codes/" },
    { code: "GOLDENCARROT", reward: "x1 Golden Fertilizer + 200 Coins", note: "100M Visits Milestone — no expiration", source: "https://wikigrowagarden.com/codes/" },
    { code: "WIKIFRIEND", reward: "Wiki Hat + 300 Coins", note: "Wiki Launch reward — no expiration", source: "https://wikigrowagarden.com/codes/" },
  ],
  expiredCodes: [
    { code: "SUMMERFUN25", reward: "Summer Hat + x2 Uncommon Seed Packs + 1,000 Coins", expiredOn: "September 15, 2025", source: "https://wikigrowagarden.com/codes/" },
    { code: "LUNARGLOW10", reward: "x3 Basic Seed Packs + 500 Coins", expiredOn: "August 31, 2025", source: "https://wikigrowagarden.com/codes/" },
    { code: "SPRING2025", reward: "Spring Decorations + 200 Coins", expiredOn: "May 31, 2025", source: "https://wikigrowagarden.com/codes/" },
    { code: "FIRSTHARVEST", reward: "Starter Pack (x3 Basic Seeds + 100 Coins)", expiredOn: "April 1, 2025", source: "https://wikigrowagarden.com/codes/" },
    { code: "GARDENLOVE", reward: "Heart Decorations + 250 Coins", expiredOn: "February 28, 2025", source: "https://wikigrowagarden.com/codes/" },
  ],
  howToRedeem: [
    "Launch <strong>Grow a Garden</strong> from the Roblox app or website.",
    "Click the <strong>gear icon</strong> in the top-right corner to open Settings.",
    "Select the <strong>Codes tab</strong> in the settings menu.",
    "Type or paste the code <strong>exactly as shown</strong> — codes are case-sensitive.",
    "Click <strong>Redeem</strong> and collect your rewards instantly.",
  ],
  faq: [
    { question: "How do I redeem Grow a Garden codes?", answer: "Launch Grow a Garden in Roblox, click the gear icon (Settings) in the top-right corner, select the Codes tab, type or paste the code exactly as shown (codes are case-sensitive), then click Redeem. Rewards are delivered to your inventory instantly." },
    { question: "Why is my code not working?", answer: "There are several reasons: the code may have expired, you may have already redeemed it on your account, there may be a typo (codes are case-sensitive), some codes are region-locked, or new accounts may have a 24-hour waiting period. Double-check capitalization and underscores before retrying." },
    { question: "How often are new codes released?", answer: "New codes typically drop during game updates and feature releases, seasonal events (Summer, Halloween, Christmas), milestone celebrations (visit counts, player milestones), and social media promotions. On average, expect 2-3 new codes per month. We update this page within hours of any new code drop." },
    { question: "Where can I find new Grow a Garden codes?", answer: "The best sources are the official Grow A Garden Discord server, the developer's X (Twitter) account, the developer's YouTube channel, and right here on this page. We maintain a verified code list and update it as soon as new codes are released. You can also check the Grow A Garden Wiki at wikigrowagarden.com." },
    { question: "Can I submit a code I found?", answer: "Yes! If you have found a working code that is not listed on this page, you can submit it through our community verification tool. Our team will verify the code against official sources and add it to the list. You will be credited for your contribution." },
  ],
  relatedGuides: [
    { label: "Mutation Tier List", href: "/grow-a-garden/mutation-tier-list", description: "Ranked mutations by crop multiplier and rarity" },
    { label: "Pet Tier List", href: "/grow-a-garden/pet-tier-list", description: "Best pets for hatching odds and multipliers" },
    { label: "Crop Value List", href: "/grow-a-garden/crop-value-list", description: "Most profitable crops ranked by coin yield" },
    { label: "Beginner Guide", href: "/grow-a-garden/beginner-guide", description: "Complete walkthrough from first crop to endgame farm" },
  ],
};

export default data;
