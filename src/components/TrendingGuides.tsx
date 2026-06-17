import Link from "next/link";

interface GuideCard {
  title: string;
  href: string;
  category: string;
  accent: "garden" | "rangers";
  description: string;
  date: string;
}

const trendingGuides: GuideCard[] = [
  {
    title: "Summer 2026: Best Characters Tier List & Micro Garden Crossover Guide",
    href: "/guides/summer-2026-tier-list-and-garden",
    category: "Anime Rangers X + Garden",
    accent: "rangers",
    description: "T0 character rankings for the June 2026 patch plus a real-world micro garden guide to build your own anime terrarium.",
    date: "June 17, 2026",
  },
  {
    title: "Golden Bloom vs Crystal Vine: Which S-Tier Mutation Wins?",
    href: "/grow-a-garden/mutation-tier-list",
    category: "Grow a Garden",
    accent: "garden",
    description: "We break down the numbers behind the two best mutations — multiplier math, passive value, and which one you should roll for first.",
    date: "June 7, 2026",
  },
  {
    title: "Chrono Slayer Full Kit Breakdown & Best Trait Pairings",
    href: "/anime-rangers-x/tier-list",
    category: "Anime Rangers X",
    accent: "rangers",
    description: "Deep dive into the Mythic unit's abilities, optimal trait combos, and team compositions for Infinite Mode past wave 100.",
    date: "June 6, 2026",
  },
  {
    title: "How to Get 50+ Mutation Shards Per Day (Free-to-Play)",
    href: "/grow-a-garden/codes",
    category: "Grow a Garden",
    accent: "garden",
    description: "Daily routine guide covering codes, world events, trading, and hidden quests that maximize your shard income without spending Robux.",
    date: "June 5, 2026",
  },
  {
    title: "Re:Rangers Update — Every Unit Buff, Nerf & Meta Shift",
    href: "/anime-rangers-x/unit-tier-list",
    category: "Anime Rangers X",
    accent: "rangers",
    description: "Complete patch note analysis of the June title restructure: drop rate changes, stat rebalances, and what it means for your roster.",
    date: "June 4, 2026",
  },
  {
    title: "Crop Profit Calculator: Golden Wheat vs Seasonal Rotation",
    href: "/grow-a-garden/crop-value-list",
    category: "Grow a Garden",
    accent: "garden",
    description: "Mathematical comparison of planting all-season Golden Wheat versus rotating seasonal crops — which strategy earns more coins per week?",
    date: "June 3, 2026",
  },
  {
    title: "Infinite Mode Wave 100+ Guide — Team Comp & Gem Farming",
    href: "/anime-rangers-x/team-guide",
    category: "Anime Rangers X",
    accent: "rangers",
    description: "Step-by-step strategy for pushing past wave 100 in Infinite Mode. Includes optimal team builds, trait setups, and gem-per-hour calculations.",
    date: "June 2, 2026",
  },
];

export default function TrendingGuides() {
  return (
    <section
      className="mx-auto max-w-[1200px] px-4 py-12 lg:px-6 lg:py-16"
      aria-labelledby="trending-heading"
    >
      <h2
        id="trending-heading"
        className="mb-2 font-heading text-[24px] font-semibold text-white lg:text-[32px]"
      >
        🔥 Trending Guides
      </h2>
      <p className="mb-8 text-sm text-[#768294]">
        Our most popular guides this week — hand-picked by the BloxPulse editorial team.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trendingGuides.map((guide, i) => {
          const accentColor = guide.accent === "garden" ? "#00E676" : "#FF3D00";
          const accentBg =
            guide.accent === "garden"
              ? "rgba(0,230,118,0.08)"
              : "rgba(255,61,0,0.08)";

          return (
            <Link
              key={i}
              href={guide.href}
              className="group flex flex-col rounded-xl border border-[#252936] bg-[#14161D] p-5 transition hover:border-[#3A86FF]"
            >
              {/* Category tag + date */}
              <div className="mb-3 flex items-center justify-between">
                <span
                  className="code-text inline-block rounded-md px-2 py-0.5 text-xs"
                  style={{ color: accentColor, backgroundColor: accentBg }}
                >
                  {guide.category}
                </span>
                <span className="text-xs text-[#768294]">{guide.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-[#BAC4D1] leading-snug group-hover:text-[#3A86FF] transition">
                {guide.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs text-[#768294] leading-relaxed flex-1">
                {guide.description}
              </p>

              {/* Read more */}
              <span
                className="mt-3 text-xs font-semibold transition"
                style={{ color: accentColor }}
              >
                Read guide →
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
