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
import { trading } from "@/data/garden/database/trading";
import { events, getActiveEvents } from "@/data/garden/database/events";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Grow a Garden — Codes & Guides",
  description:
    "Grow a Garden reference hub with project records, navigation, calculators, and guides. Trading-related fields are internal editorial references, not official prices, live market quotes, or independently verified transaction data.",
  alternates: { canonical: "/grow-a-garden/" },
  openGraph: {
    title: "Grow a Garden — Codes & Guides",
    description: "Grow a Garden reference hub with project records, navigation, calculators, and guides.",
    type: "website",
  },
};

const databaseCards = [
  {
    title: "Crops Database",
    description: "Project records for crop labels and related reference fields.",
    href: "/grow-a-garden/crops",
    count: `${crops.length} crops`,
  },
  {
    title: "Mutations Database",
    description: "Project records for mutation labels and related reference fields.",
    href: "/grow-a-garden/mutations",
    count: `${mutations.length} mutations`,
  },
  {
    title: "Pets Database",
    description: "Project records for pet labels and related reference fields.",
    href: "/grow-a-garden/pets",
    count: `${pets.length} pets`,
  },
  {
    title: "Egg Project Records",
    description: "Project records for egg labels and related reference fields.",
    href: "/grow-a-garden/eggs",
    count: `${eggs.length} eggs`,
  },
  {
    title: "Seed Project Records",
    description: "Project records for seed labels and related reference fields.",
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
    title: "Trading Records",
    description: "Trading project records for internal comparison and reference; not official prices, live market quotes, or independently verified transaction data.",
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
    description: "Project-reference list of recorded code entries and labels.",
    href: "/grow-a-garden/codes",
  },
  {
    title: "Mutation Tier List",
    description: "Editorial comparison of recorded mutation labels and project-reference fields.",
    href: "/grow-a-garden/mutation-tier-list",
  },
  {
    title: "Pet Tier List",
    description: "Editorial comparison of recorded pet labels and project-reference fields.",
    href: "/grow-a-garden/pet-tier-list",
  },
  {
    title: "Crop Value List",
    description: "Project-reference page for recorded crop and mutation fields.",
    href: "/grow-a-garden/crop-value-list",
  },
  {
    title: "Value Calculator",
    description: "Compare project-record crop and mutation fields in a mathematical display.",
    href: "/grow-a-garden/value-calculator",
  },
  {
    title: "Beginner Guide",
    description: "Project-reference navigation for recorded beginner resources.",
    href: "/grow-a-garden/beginner-guide",
  },
  {
    title: "Mutation Project Records",
    description: "Project-record comparison page for recorded mutation fields.",
    href: "/grow-a-garden/best-mutations",
  },
  {
    title: "Pet Project Records",
    description: "Project-record page for recorded pet fields and navigation.",
    href: "/grow-a-garden/best-pets",
  },
  {
    title: "Money Making Guide",
    description: "Project-reference page for recorded fields and navigation.",
    href: "/grow-a-garden/money-making-guide",
  },
  {
    title: "Egg Project Records",
    description: "Project records for egg labels and related reference fields.",
    href: "/grow-a-garden/eggs",
  },
  {
    title: "Seed Project Records",
    description: "Project records for seed labels and related reference fields.",
    href: "/grow-a-garden/seeds",
  },
  {
    title: "Updates Tracker",
    description: "All updates, patches, events, and incidents with new items and features.",
    href: "/grow-a-garden/updates",
  },
  {
    title: "Trading Records",
    description: "Trading project records for internal comparison and reference; not official prices, live market quotes, or independently verified transaction data.",
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
    title: "Mythical Pet Project Records",
    description: "Editorial comparison of recorded pet labels and project-reference fields.",
    href: "/grow-a-garden/best-mythical-pets",
  },
  {
    title: "Seed Project Records Comparison",
    description: "Editorial comparison of recorded seed labels and project-reference fields.",
    href: "/grow-a-garden/best-seeds",
  },
  {
    title: "Crop Project Records Comparison",
    description: "Editorial comparison of recorded crop labels and project-reference fields.",
    href: "/grow-a-garden/best-crops",
  },
  {
    title: "Trading Project Records",
    description: "Editorial comparison of recorded trading fields for project reference; not a market ranking or trading recommendation.",
    href: "/grow-a-garden/top-trading-items",
  },
];

const calculatorLinks = [
  {
    title: "Calculators Hub",
    description: "Browse Grow a Garden project-reference calculators and record comparisons in one place.",
    href: "/grow-a-garden/calculators",
    icon: "🧮",
  },
  {
    title: "Crop Value Calculator",
    description: "Project-reference table for recorded crop and mutation fields.",
    href: "/grow-a-garden/crop-value-calculator",
    icon: "🌾",
  },
  {
    title: "Mutation Calculator",
    description: "Project-reference comparison of recorded crop and mutation fields.",
    href: "/grow-a-garden/mutation-calculator",
    icon: "✨",
  },
  {
    title: "Trading Calculator",
    description: "Compare recorded trading categories, rarity, demand, trend, and value fields for project reference.",
    href: "/grow-a-garden/trading-calculator",
    icon: "💱",
  },
  {
    title: "Pet Value Calculator",
    description: "Project-reference comparison of recorded pet multiplier, rarity, demand, trend, and value fields.",
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
    description: "Project-reference navigation for recorded crops, pets, and mutations.",
    href: "/grow-a-garden/how-to-get-rich",
    icon: "💰",
  },
  {
    title: "Best Money Making Methods",
    description: "Project-reference comparison page for recorded fields and navigation.",
    href: "/grow-a-garden/best-money-making-methods",
    icon: "📊",
  },
  {
    title: "Starter Pet Project Records",
    description: "Project-reference navigation for recorded starter-pet labels.",
    href: "/grow-a-garden/best-starter-pets",
    icon: "🐾",
  },
  {
    title: "Pet Ranking Guide",
    description: "Guide to the site’s recorded pet labels and editorial comparison boundaries.",
    href: "/grow-a-garden/pet-ranking-guide",
    icon: "🏆",
  },
  {
    title: "Mutation Guide",
    description: "Project-reference guide for recorded mutation fields and terminology.",
    href: "/grow-a-garden/mutation-guide",
    icon: "🧬",
  },
  {
    title: "Best Mutation Combinations",
    description: "Project-reference comparison of recorded crop, mutation, and pet fields.",
    href: "/grow-a-garden/best-mutation-combinations",
    icon: "🎯",
  },
  {
    title: "Trading Guide",
    description: "Guide to the site’s recorded trading fields such as demand, trend, rarity, and category.",
    href: "/grow-a-garden/trading-guide",
    icon: "💱",
  },
  {
    title: "Value Trading Guide",
    description: "Guide to reading the site’s recorded value, rarity, demand, trend, and category labels.",
    href: "/grow-a-garden/value-trading-guide",
    icon: "⚖️",
  },
];

// New SEO guides added in the latest content update (July 27, 2026)
const latestGuides = [
  {
    title: "Dragon Pet Project Records",
    description: "Editorial comparison of recorded dragon-pet fields for project reference.",
    href: "/grow-a-garden/best-dragon-pets",
    icon: "🐉",
    category: "Pets",
  },
  {
    title: "Best Phoenix Pets",
    description: "Phoenix pet project records with recorded labels for reference.",
    href: "/grow-a-garden/best-phoenix-pets",
    icon: "🔥",
    category: "Pets",
  },
  {
    title: "Mythical Pet Project Records Ranking",
    description: "Editorial comparison of recorded mythical-pet labels and project-reference fields.",
    href: "/grow-a-garden/best-mythical-pets-ranking",
    icon: "🌟",
    category: "Pets",
  },
  {
    title: "Pet Project Records Comparison",
    description: "Editorial comparison of recorded pet fields for project reference.",
    href: "/grow-a-garden/best-pets-for-money",
    icon: "💰",
    category: "Pets",
  },
  {
    title: "Event Pet Project Records",
    description: "Editorial comparison page for recorded event-pet fields.",
    href: "/grow-a-garden/best-event-pets",
    icon: "🎉",
    category: "Pets",
  },
  {
    title: "Rainbow Mutation Guide",
    description: "Project-reference guide for recorded Rainbow mutation labels.",
    href: "/grow-a-garden/rainbow-mutation-guide",
    icon: "🌈",
    category: "Mutations",
  },
  {
    title: "Gold Mutation Guide",
    description: "Project-reference guide for recorded mutation labels and comparisons.",
    href: "/grow-a-garden/gold-mutation-guide",
    icon: "✨",
    category: "Mutations",
  },
  {
    title: "Shock Mutation Guide",
    description: "Editorial comparison of recorded mutation labels for project reference.",
    href: "/grow-a-garden/shock-mutation-guide",
    icon: "⚡",
    category: "Mutations",
  },
  {
    title: "Best Mutation Combinations",
    description: "Project-reference comparison of recorded crop, mutation, and pet fields.",
    href: "/grow-a-garden/best-mutation-combinations",
    icon: "🎯",
    category: "Mutations",
  },
  {
    title: "Legendary Seed Project Records",
    description: "Editorial comparison of recorded legendary-seed labels and project-reference fields.",
    href: "/grow-a-garden/best-legendary-seeds",
    icon: "🌱",
    category: "Seeds",
  },
  {
    title: "Event Seed Project Records",
    description: "Editorial comparison page for recorded event-seed fields.",
    href: "/grow-a-garden/best-event-seeds",
    icon: "🎁",
    category: "Seeds",
  },
  {
    title: "Trading Project Records",
    description: "Editorial comparison of recorded trading fields for project reference.",
    href: "/grow-a-garden/rare-items-value",
    icon: "💎",
    category: "Trading",
  },
  {
    title: "Trading Tips",
    description: "Guide to the site’s recorded trading labels and their project-reference boundaries.",
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
    title: "Project Reference Navigation",
    description: "Project-reference navigation for recorded codes and event fields.",
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
    question: "What do recorded mutation labels mean on this site?",
    answer:
      "Mutation labels are internal editorial project records used for site navigation and comparison. They do not establish official rarity, game mechanics, performance, or a trading conclusion.",
  },
  {
    question: "How should I use the project record pages?",
    answer:
      "Use project record pages as navigation and internal editorial reference. Check an appropriate primary source before relying on information that may change.",
  },
  {
    question: "Where can I compare recorded pet fields?",
    answer:
      "The pet project-record pages compare recorded labels and fields for reference. They do not establish game performance, market value, trade fairness, or a buying, selling, holding, earnings, or investment recommendation.",
  },
  {
    question: "Do record comparisons provide recommendations?",
    answer:
      "No. Project-record comparisons do not establish official game outcomes, market values, trade fairness, or a buying, selling, holding, earnings, or investment recommendation.",
  },
];

export default function GrowAGardenHubPage() {
  return (
    <ContentLayout
      title="Grow a Garden Hub"
      description="Grow a Garden reference hub with project records, navigation, calculators, and guides. Trading-related fields are internal editorial references, not official prices, live market quotes, or independently verified transaction data."
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
