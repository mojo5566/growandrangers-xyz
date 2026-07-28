import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import { crops } from "@/data/garden/database/crops";
import { mutations } from "@/data/garden/database/mutations";
import { pets } from "@/data/garden/database/pets";
import { eggs } from "@/data/garden/database/eggs";
import { seeds } from "@/data/garden/database/seeds";
import { updates, getLatestUpdate } from "@/data/garden/database/updates";
import { trading, getHighDemandItems } from "@/data/garden/database/trading";
import { events, getActiveEvents } from "@/data/garden/database/events";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Grow a Garden — Codes & Guides",
  description:
    "Complete Grow a Garden hub: working promo codes, mutation tier list, pet rankings, crop value calculator, beginner guide, and money-making strategies. Updated daily.",
  alternates: { canonical: "/grow-a-garden/" },
  openGraph: {
    title: "Grow a Garden — Codes & Guides",
    description: "Complete Grow a Garden hub with codes, tier lists, and guides.",
    type: "website",
  },
};

const databaseCards = [
  {
    title: "Crops Database",
    description: "All crops with values, growth times, and mutation compatibility.",
    href: "/grow-a-garden/crops",
    count: `${crops.length} crops`,
  },
  {
    title: "Mutations Database",
    description: "All mutations ranked by rarity, multiplier, and pet synergy.",
    href: "/grow-a-garden/mutations",
    count: `${mutations.length} mutations`,
  },
  {
    title: "Pets Database",
    description: "All pets with hatching odds, abilities, and multiplier stats.",
    href: "/grow-a-garden/pets",
    count: `${pets.length} pets`,
  },
  {
    title: "Eggs Database",
    description: "All eggs with price, hatch time, pet drop rates, and rarity distribution.",
    href: "/grow-a-garden/eggs",
    count: `${eggs.length} eggs`,
  },
  {
    title: "Seeds Database",
    description: "All seeds with rarity, price, growth time, season, and tier.",
    href: "/grow-a-garden/seeds",
    count: `${seeds.length} seeds`,
  },
  {
    title: "Updates Tracker",
    description: "All updates, patches, events, and incidents with new items and features.",
    href: "/grow-a-garden/updates",
    count: `${updates.length} updates`,
  },
  {
    title: "Trading Values",
    description: "All tradeable pets, seeds, crops, and mutations with verified market values.",
    href: "/grow-a-garden/trading",
    count: `${trading.length} items`,
  },
  {
    title: "Events Tracker",
    description: "All active, upcoming, and past events with rewards, dates, and details.",
    href: "/grow-a-garden/events",
    count: `${events.length} events`,
  },
];

const guideLinks = [
  {
    title: "Active Codes",
    description: "All working promo codes with rewards — updated daily.",
    href: "/grow-a-garden/codes",
  },
  {
    title: "Mutation Tier List",
    description: "Every mutation ranked by rarity tier and value multiplier.",
    href: "/grow-a-garden/mutation-tier-list",
  },
  {
    title: "Pet Tier List",
    description: "All pets ranked by hatching value, ability, and farm impact.",
    href: "/grow-a-garden/pet-tier-list",
  },
  {
    title: "Crop Value List",
    description: "Complete crop value sheet with base prices and mutation bonuses.",
    href: "/grow-a-garden/crop-value-list",
  },
  {
    title: "Value Calculator",
    description: "Estimate the sell value of any crop with any mutation multiplier.",
    href: "/grow-a-garden/value-calculator",
  },
  {
    title: "Beginner Guide",
    description: "Start your farm the right way — tips, tricks, and early strategies.",
    href: "/grow-a-garden/beginner-guide",
  },
  {
    title: "Best Mutations",
    description: "Top mutations for profit and progression in the current meta.",
    href: "/grow-a-garden/best-mutations",
  },
  {
    title: "Best Pets",
    description: "Highest-value pets and how to get them efficiently.",
    href: "/grow-a-garden/best-pets",
  },
  {
    title: "Money Making Guide",
    description: "Proven strategies to maximize earnings per hour on your farm.",
    href: "/grow-a-garden/money-making-guide",
  },
  {
    title: "Eggs Database",
    description: "All eggs with price, hatch time, pet drop rates, and rarity distribution.",
    href: "/grow-a-garden/eggs",
  },
  {
    title: "Seeds Database",
    description: "All seeds with rarity, price, growth time, season, and tier.",
    href: "/grow-a-garden/seeds",
  },
  {
    title: "Updates Tracker",
    description: "All updates, patches, events, and incidents with new items and features.",
    href: "/grow-a-garden/updates",
  },
  {
    title: "Trading Values",
    description: "All tradeable pets, seeds, crops, and mutations with verified market values.",
    href: "/grow-a-garden/trading",
  },
  {
    title: "Events Tracker",
    description: "All active, upcoming, and past events with rewards, dates, and details.",
    href: "/grow-a-garden/events",
  },
];

const comparisonLinks = [
  {
    title: "Best Mythical Pets",
    description: "Ranked comparison of all S-Tier pets — multipliers, trade value, and demand.",
    href: "/grow-a-garden/best-mythical-pets",
  },
  {
    title: "Best Seeds",
    description: "All seeds ranked by tier, rarity, price, growth, and trade value.",
    href: "/grow-a-garden/best-seeds",
  },
  {
    title: "Best Crops",
    description: "All crops ranked by CPM with mutation potential and trade value.",
    href: "/grow-a-garden/best-crops",
  },
  {
    title: "Top Trading Items",
    description: "Highest-value, highest-demand, and fastest-rising items in the market.",
    href: "/grow-a-garden/top-trading-items",
  },
];

const calculatorLinks = [
  {
    title: "Calculators Hub",
    description: "Browse all Grow a Garden profit and value calculators in one place.",
    href: "/grow-a-garden/calculators",
    icon: "🧮",
  },
  {
    title: "Crop Value Calculator",
    description: "Pre-computed crop × mutation profit table — base, bonus, and total value.",
    href: "/grow-a-garden/crop-value-calculator",
    icon: "🌾",
  },
  {
    title: "Mutation Calculator",
    description: "Compare mutation profit on every crop. Multiplier, estimated value, profit %.",
    href: "/grow-a-garden/mutation-calculator",
    icon: "✨",
  },
  {
    title: "Trading Calculator",
    description: "Compare tradeable item values by category, rarity, demand, and trend.",
    href: "/grow-a-garden/trading-calculator",
    icon: "💱",
  },
  {
    title: "Pet Value Calculator",
    description: "Pet multiplier × trade value ranking with rarity, demand, trend, and market price.",
    href: "/grow-a-garden/pet-value-calculator",
    icon: "🐾",
  },
];

const seoGuideLinks = [
  {
    title: "How to Start",
    description: "Complete starter walkthrough: first steps, farming loop, first crops and pets.",
    href: "/grow-a-garden/how-to-start",
    icon: "🌱",
  },
  {
    title: "Beginner Tips",
    description: "10 actionable tips on farming efficiency, resource management, and mutations.",
    href: "/grow-a-garden/beginner-tips",
    icon: "💡",
  },
  {
    title: "How to Get Rich",
    description: "Fastest coin methods: best crops, mutation farming, pets, and trading strategy.",
    href: "/grow-a-garden/how-to-get-rich",
    icon: "💰",
  },
  {
    title: "Best Money Making Methods",
    description: "Side-by-side comparison of farming, mutations, pets, and trading methods.",
    href: "/grow-a-garden/best-money-making-methods",
    icon: "📊",
  },
  {
    title: "Best Starter Pets",
    description: "Beginner-friendly pets with passive abilities and recommended progression.",
    href: "/grow-a-garden/best-starter-pets",
    icon: "🐾",
  },
  {
    title: "Pet Ranking Guide",
    description: "S/A/B/C tier explanation, why pets rank differently, and early vs late game picks.",
    href: "/grow-a-garden/pet-ranking-guide",
    icon: "🏆",
  },
  {
    title: "Mutation Guide",
    description: "What mutations are, how multipliers work, how to get mutations, and profit examples.",
    href: "/grow-a-garden/mutation-guide",
    icon: "🧬",
  },
  {
    title: "Best Mutation Combinations",
    description: "Highest-value mutation × crop × pet stacking with real coin values.",
    href: "/grow-a-garden/best-mutation-combinations",
    icon: "🎯",
  },
  {
    title: "Trading Guide",
    description: "Trading basics, value evaluation, demand/trend explanation, and common mistakes.",
    href: "/grow-a-garden/trading-guide",
    icon: "💱",
  },
  {
    title: "Value Trading Guide",
    description: "How item value works: rarity, demand, trend, and fair trade examples.",
    href: "/grow-a-garden/value-trading-guide",
    icon: "⚖️",
  },
];

// New SEO guides added in the latest content update (July 27, 2026)
const latestGuides = [
  {
    title: "Best Dragon Pets",
    description: "Ranked comparison of every dragon pet with multipliers and trade values.",
    href: "/grow-a-garden/best-dragon-pets",
    icon: "🐉",
    category: "Pets",
  },
  {
    title: "Best Phoenix Pets",
    description: "Complete phoenix pet ranking with abilities, multipliers, and acquisition paths.",
    href: "/grow-a-garden/best-phoenix-pets",
    icon: "🔥",
    category: "Pets",
  },
  {
    title: "Best Mythical Pets Ranking",
    description: "S-Tier pets ranked by multiplier, demand, and trade value.",
    href: "/grow-a-garden/best-mythical-pets-ranking",
    icon: "🌟",
    category: "Pets",
  },
  {
    title: "Best Pets for Money",
    description: "Top profit-generating pets with estimated coins per harvest.",
    href: "/grow-a-garden/best-pets-for-money",
    icon: "💰",
    category: "Pets",
  },
  {
    title: "Best Event Pets",
    description: "Seasonal event pets ranked by multiplier and post-event trade value.",
    href: "/grow-a-garden/best-event-pets",
    icon: "🎉",
    category: "Pets",
  },
  {
    title: "Rainbow Mutation Guide",
    description: "Prismatic Rainbow mutation mechanics, profit table, and farming strategy.",
    href: "/grow-a-garden/rainbow-mutation-guide",
    icon: "🌈",
    category: "Mutations",
  },
  {
    title: "Gold Mutation Guide",
    description: "Midas Bloom vs Rainbow mutation profit comparison and farming tips.",
    href: "/grow-a-garden/gold-mutation-guide",
    icon: "✨",
    category: "Mutations",
  },
  {
    title: "Shock Mutation Guide",
    description: "Frozen, Wet, Glowing, Toxic, Giant, Rotten mutation profit ranking.",
    href: "/grow-a-garden/shock-mutation-guide",
    icon: "⚡",
    category: "Mutations",
  },
  {
    title: "Best Mutation Combinations",
    description: "Highest-value mutation × crop × pet stacking with real coin values.",
    href: "/grow-a-garden/best-mutation-combinations",
    icon: "🎯",
    category: "Mutations",
  },
  {
    title: "Best Legendary Seeds",
    description: "Legendary seeds ranked by tier, growth time, and trade value.",
    href: "/grow-a-garden/best-legendary-seeds",
    icon: "🌱",
    category: "Seeds",
  },
  {
    title: "Best Event Seeds",
    description: "Seasonal event seeds with trade value and acquisition paths.",
    href: "/grow-a-garden/best-event-seeds",
    icon: "🎁",
    category: "Seeds",
  },
  {
    title: "Rare Items Value",
    description: "Top 20 most valuable tradeable items with verified market values.",
    href: "/grow-a-garden/rare-items-value",
    icon: "💎",
    category: "Trading",
  },
  {
    title: "Trading Tips",
    description: "Proven trading tips: evaluate offers, spot scams, time trades, build strategy.",
    href: "/grow-a-garden/trading-tips",
    icon: "💱",
    category: "Trading",
  },
  {
    title: "How to Level Fast",
    description: "Fastest XP methods: best crops, mutation bonuses, pet multipliers, daily routine.",
    href: "/grow-a-garden/how-to-level-fast",
    icon: "⚡",
    category: "Beginner",
  },
  {
    title: "How to Get Rich Fast",
    description: "Quickest coin methods: active codes, event flips, fast mutation farming.",
    href: "/grow-a-garden/how-to-get-rich-fast",
    icon: "💸",
    category: "Beginner",
  },
];

// Latest 4 game updates for the Latest Updates section
const latestUpdates = [...updates].slice(0, 4);

const faqs = [
  {
    question: "How do I redeem codes in Grow a Garden?",
    answer:
      "Open the game in Roblox, tap the Twitter/Bird icon on the side menu, paste your code, and hit submit. Rewards appear in your inventory instantly.",
  },
  {
    question: "What is the rarest mutation in Grow a Garden?",
    answer:
      "The Bunny Mutation (Tier-5) introduced in the Easter Event Update is currently the rarest. It provides the highest crop value multiplier in the game.",
  },
  {
    question: "How often does Grow a Garden get new codes?",
    answer:
      "New codes typically drop with major updates, seasonal events (Easter, Summer, Halloween, Winter), and milestone celebrations. We verify and update our list daily.",
  },
  {
    question: "What are the best pets for making money?",
    answer:
      "Pets with high multiplier stats like the Golden Phoenix Chick (5.0x), Golden Dragon (4.8x), and Crystal Unicorn Foal (4.5x) dominate the current meta. Check our Pet Tier List for the full ranking.",
  },
  {
    question: "How do mutations affect crop values?",
    answer:
      "Each mutation applies a value multiplier to the base crop price. Higher-tier mutations like Prismatic Rainbow (6.0x) and Midas Bloom (5.0x) can multiply values dramatically. Stack mutations with pet bonuses for maximum profit.",
  },
];

export default function GrowAGardenHubPage() {
  return (
    <ContentLayout
      title="Grow a Garden Hub"
      description="Complete Grow a Garden hub: working promo codes, mutation tier list, pet rankings, crop value calculator, beginner guide, and money-making strategies. Updated daily."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/"
    >
      {/* Latest Guides — new articles from July 27, 2026 content update */}
      <section aria-labelledby="latest-guides-heading">
        <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
          <h2
            id="latest-guides-heading"
            className="font-heading text-[20px] font-semibold text-white lg:text-[24px]"
          >
            🆕 Latest Guides
          </h2>
          <span className="text-xs text-[#768294]">
            15 new articles • Updated {CONTENT_UPDATED_AT}
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {latestGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group rounded-lg border border-[#00E676]/30 bg-[#14161D] p-4 transition hover:border-[#00E676]"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-lg" aria-hidden>
                    {guide.icon}
                  </span>
                  <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
                    {guide.title} →
                  </span>
                </div>
                <span className="rounded bg-[#00E676]/20 px-1.5 py-0.5 text-[10px] font-semibold text-[#00E676]">
                  {guide.category}
                </span>
              </div>
              <p className="text-xs text-[#768294]">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Updates — multiple recent updates */}
      <section aria-labelledby="latest-updates-heading">
        <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
          <h2
            id="latest-updates-heading"
            className="font-heading text-[20px] font-semibold text-white lg:text-[24px]"
          >
            📅 Latest Updates
          </h2>
          <Link
            href="/grow-a-garden/updates"
            className="text-xs font-semibold text-[#00E676] hover:underline"
          >
            View all updates →
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {latestUpdates.map((update) => (
            <Link
              key={update.id}
              href={`/grow-a-garden/updates/${update.id}`}
              className="group rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676]"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
                  {update.title} →
                </span>
                <span
                  className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                    update.status === "Current"
                      ? "bg-[#00E676]/20 text-[#00E676]"
                      : "bg-[#768294]/20 text-[#768294]"
                  }`}
                >
                  {update.status}
                </span>
              </div>
              <p className="text-xs text-[#768294] mb-2">
                {update.date}
                {update.version ? ` • v${update.version}` : ""} • {update.type}
              </p>
              <p className="text-xs text-[#768294] line-clamp-2">{update.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Database Section */}
      <section aria-labelledby="db-heading">
        <h2
          id="db-heading"
          className="mb-4 font-heading text-[20px] font-semibold text-white lg:text-[24px]"
        >
          📊 Popular Database
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {databaseCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5 transition hover:border-[#00E676]"
            >
              <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
                {card.title}
              </span>
              <span className="code-text ml-2 text-xs text-[#00E676]">
                {card.count}
              </span>
              <p className="mt-2 text-xs leading-relaxed text-[#768294]">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Guides Section */}
      <section aria-labelledby="guides-heading">
        <h2
          id="guides-heading"
          className="mb-4 font-heading text-[20px] font-semibold text-white lg:text-[24px]"
        >
          🔥 Popular Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {guideLinks.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676]"
            >
              <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
                {guide.title} →
              </span>
              <p className="mt-1 text-xs text-[#768294]">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Comparisons Section */}
      <section aria-labelledby="comparisons-heading">
        <h2
          id="comparisons-heading"
          className="mb-4 font-heading text-[20px] font-semibold text-white lg:text-[24px]"
        >
          ⚖️ Top Comparisons
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {comparisonLinks.map((comparison) => (
            <Link
              key={comparison.href}
              href={comparison.href}
              className="group rounded-lg border border-[#00E676]/30 bg-[#14161D] p-4 transition hover:border-[#00E676]"
            >
              <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
                {comparison.title} →
              </span>
              <p className="mt-1 text-xs text-[#768294]">{comparison.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Calculators Section */}
      <section aria-labelledby="calculators-heading">
        <h2
          id="calculators-heading"
          className="mb-4 font-heading text-[20px] font-semibold text-white lg:text-[24px]"
        >
          🧮 Calculators & Tools
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {calculatorLinks.map((calc) => (
            <Link
              key={calc.href}
              href={calc.href}
              className="group rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676]"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg" aria-hidden>
                  {calc.icon}
                </span>
                <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
                  {calc.title} →
                </span>
              </div>
              <p className="text-xs text-[#768294]">{calc.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO Guides Section */}
      <section aria-labelledby="seo-guides-heading">
        <h2
          id="seo-guides-heading"
          className="mb-4 font-heading text-[20px] font-semibold text-white lg:text-[24px]"
        >
          📚 In-Depth Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {seoGuideLinks.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676]"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg" aria-hidden>
                  {guide.icon}
                </span>
                <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
                  {guide.title} →
                </span>
              </div>
              <p className="text-xs text-[#768294]">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Update — Dynamic */}
      {(() => {
        const latest = getLatestUpdate();
        if (!latest) return null;
        const newItemCount = latest.newItems
          ? Object.values(latest.newItems).reduce(
              (sum, arr) => sum + (arr?.length ?? 0),
              0
            )
          : 0;
        const newestEvent = updates.find((u) => u.type === "Event" && u.status === "Current");
        return (
          <section className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
            <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
              <h2 className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">
                📅 Latest Update — {latest.title}
              </h2>
              <Link
                href={`/grow-a-garden/updates/${latest.id}`}
                className="text-xs font-semibold text-[#00E676] hover:underline"
              >
                View full patch notes →
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-[#768294] mb-3">
              <span>
                <strong className="text-[#BAC4D1]">Date:</strong> {latest.date}
              </span>
              {latest.version && (
                <span>
                  <strong className="text-[#BAC4D1]">Version:</strong> v{latest.version}
                </span>
              )}
              <span>
                <strong className="text-[#BAC4D1]">New items:</strong> {newItemCount}
              </span>
              {newestEvent && (
                <span>
                  <strong className="text-[#BAC4D1]">Newest event:</strong>{" "}
                  <Link
                    href={`/grow-a-garden/updates/${newestEvent.id}`}
                    className="text-[#00E676] hover:underline"
                  >
                    {newestEvent.title}
                  </Link>
                </span>
              )}
            </div>
            <p className="text-sm leading-relaxed text-[#768294]">{latest.summary}</p>
          </section>
        );
      })()}

      {/* Active Events — Dynamic */}
      {(() => {
        const active = getActiveEvents();
        if (active.length === 0) return null;
        return (
          <section className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
            <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
              <h2 className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">
                🎉 Active Events ({active.length})
              </h2>
              <Link
                href="/grow-a-garden/events"
                className="text-xs font-semibold text-[#00E676] hover:underline"
              >
                View all events →
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {active.map((event) => (
                <Link
                  key={event.id}
                  href={`/grow-a-garden/events/${event.id}`}
                  className="group rounded-lg border border-[#252936] bg-[#1E212B] p-3 transition hover:border-[#00E676]"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
                      {event.title}
                    </span>
                    <span className="rounded bg-[#00E676]/20 px-1.5 py-0.5 text-xs font-semibold text-[#00E676]">
                      {event.type}
                    </span>
                  </div>
                  <p className="text-xs text-[#768294]">
                    {event.startDate} – {event.endDate} • {event.rewards.length} rewards
                  </p>
                </Link>
              ))}
            </div>
          </section>
        );
      })()}

      {/* FAQ Section */}
      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
