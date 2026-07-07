import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromoCard from "@/components/PromoCard";
import TrendingGuides from "@/components/TrendingGuides";
import SEOFAQ from "@/components/SEOFAQ";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import Link from "next/link";
import gardenCodes from "@/data/garden/codes";
import rangersCodes from "@/data/rangers/codes";
import { crops } from "@/data/garden/database/crops";
import { mutations } from "@/data/garden/database/mutations";
import { pets } from "@/data/garden/database/pets";
import { units } from "@/data/rangers/database/units";
import { traits } from "@/data/rangers/database/traits";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "BloxPulse",
    title: "BloxPulse — Roblox Codes, Tier Lists & Gameplay Guides (July 2026)",
    description:
      "Updated working codes, meta tier rankings, and in-depth gameplay guides for Grow a Garden and Anime Rangers X.",
    url: "https://growandrangers.xyz",
    locale: "en_US",
  },
};

const gardenActiveCodes = gardenCodes.activeCodes.slice(0, 4);
const rangersActiveCodes = rangersCodes.activeCodes.slice(0, 4);

const databaseCards = [
  {
    icon: "🌾",
    title: "Crops Database",
    count: `${crops.length} crops`,
    description: "Complete crop stats — coins, growth times, seasons, and tier rankings.",
    href: "/grow-a-garden/crops",
    accent: "garden" as const,
  },
  {
    icon: "🧬",
    title: "Mutations Database",
    count: `${mutations.length} mutations`,
    description: "Every mutation with multipliers, roll rates, passives, and best use cases.",
    href: "/grow-a-garden/mutations",
    accent: "garden" as const,
  },
  {
    icon: "🐾",
    title: "Pets Database",
    count: `${pets.length} pets`,
    description: "All pets ranked — multipliers, abilities, egg sources, and seasonal bonuses.",
    href: "/grow-a-garden/pets",
    accent: "garden" as const,
  },
  {
    icon: "⚔️",
    title: "Units Database",
    count: `${units.length} units`,
    description: "Full unit stats — ATK, HP, element, role, ultimates, and evolution costs.",
    href: "/anime-rangers-x/units",
    accent: "rangers" as const,
  },
  {
    icon: "💎",
    title: "Traits Database",
    count: `${traits.length} traits`,
    description: "Every trait with effects, roll rates, best units, and tier rankings.",
    href: "/anime-rangers-x/traits",
    accent: "rangers" as const,
  },
];

const popularGuides = [
  {
    title: "Mutation Tier List",
    description: "Every mutation ranked S to C with detailed analysis",
    href: "/grow-a-garden/mutation-tier-list",
    accent: "garden" as const,
  },
  {
    title: "Pet Tier List",
    description: "All pets ranked by hatching value and farm impact",
    href: "/grow-a-garden/pet-tier-list",
    accent: "garden" as const,
  },
  {
    title: "Crop Value List",
    description: "Complete profit rankings with mutation stacking",
    href: "/grow-a-garden/crop-value-list",
    accent: "garden" as const,
  },
  {
    title: "Money Making Guide",
    description: "Maximize coins per hour with proven strategies",
    href: "/grow-a-garden/money-making-guide",
    accent: "garden" as const,
  },
  {
    title: "Best Crops Guide",
    description: "Top crops ranked by CPM and seasonal value",
    href: "/grow-a-garden/best-crops",
    accent: "garden" as const,
  },
  {
    title: "Beginner Farming",
    description: "Step-by-step walkthrough for new farmers",
    href: "/grow-a-garden/beginner-farming",
    accent: "garden" as const,
  },
  {
    title: "Unit Tier List",
    description: "Every unit ranked by power and utility",
    href: "/anime-rangers-x/unit-tier-list",
    accent: "rangers" as const,
  },
  {
    title: "Trait Tier List",
    description: "All traits ranked by modifier strength",
    href: "/anime-rangers-x/trait-tier-list",
    accent: "rangers" as const,
  },
  {
    title: "Evolution Guide",
    description: "Complete evolution paths and requirements",
    href: "/anime-rangers-x/evolution-guide",
    accent: "rangers" as const,
  },
  {
    title: "Team Guide",
    description: "Optimal team compositions for every mode",
    href: "/anime-rangers-x/team-guide",
    accent: "rangers" as const,
  },
  {
    title: "Beginner Guide",
    description: "Progression tips and early goals for new players",
    href: "/anime-rangers-x/beginner-guide",
    accent: "rangers" as const,
  },
  {
    title: "Best Units",
    description: "Top-performing units in the current meta",
    href: "/anime-rangers-x/best-units",
    accent: "rangers" as const,
  },
];

const featuredContent = {
  accent: "garden" as const,
  badge: "⭐ Editor's Pick",
  title: "Golden Wheat vs Crystal Berry: The Definitive Profit Breakdown",
  description:
    "We ran the numbers across 100 harvests with every mutation and pet combination. The results surprised even us — Golden Wheat isn't always the best choice. Read the full breakdown to optimize your farm for your specific playstyle and mutation inventory.",
  href: "/grow-a-garden/best-crops",
  date: "June 14, 2026",
};

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <SectionDivider />

        {/* ===== SECTION 1: Database Entry Points ===== */}
        <section
          className="mx-auto max-w-[1200px] px-4 py-12 lg:px-6 lg:py-16"
          aria-labelledby="db-heading"
        >
          <h2
            id="db-heading"
            className="mb-2 font-heading text-[24px] font-semibold text-white lg:text-[32px]"
          >
            📊 Explore the Databases
          </h2>
          <p className="mb-8 text-sm text-[#768294]">
            Browse every crop, mutation, pet, unit, and trait with detailed stats and rankings.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {databaseCards.map((card) => {
              const accentColor = card.accent === "garden" ? "#00E676" : "#FF3D00";
              const accentBg =
                card.accent === "garden"
                  ? "rgba(0,230,118,0.08)"
                  : "rgba(255,61,0,0.08)";
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group flex flex-col rounded-xl border border-[#252936] bg-[#14161D] p-5 transition hover:border-[#3A86FF]"
                >
                  <span className="text-2xl mb-2">{card.icon}</span>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#3A86FF] transition">
                      {card.title}
                    </span>
                    <span
                      className="code-text rounded px-1.5 py-0.5 text-xs"
                      style={{ color: accentColor, backgroundColor: accentBg }}
                    >
                      {card.count}
                    </span>
                  </div>
                  <p className="text-xs text-[#768294] leading-relaxed flex-1">
                    {card.description}
                  </p>
                  <span
                    className="mt-3 inline-flex items-center gap-1 text-xs font-semibold transition"
                    style={{ color: accentColor }}
                  >
                    Browse →
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <SectionDivider />

        {/* ===== SECTION: Grow a Garden 2 — NEW GAME ===== */}
        <section
          className="mx-auto max-w-[1200px] px-4 py-12 lg:px-6 lg:py-16"
          aria-labelledby="gag2-heading"
        >
          <span className="code-text inline-block rounded-md bg-[#00E676]/10 px-2.5 py-1 text-xs font-bold text-[#00E676] mb-3">
            🆕 NEW GAME — LAUNCHED JUNE 2026
          </span>
          <h2
            id="gag2-heading"
            className="mb-2 font-heading text-[24px] font-semibold text-white lg:text-[32px]"
          >
            🌱 Grow a Garden 2 — Just Launched
          </h2>
          <p className="mb-8 text-sm text-[#768294]">
            The sequel hit 300 million visits in its first week. New features include night stealing, guilds, and the Sheckles economy.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/grow-a-garden-2/" className="group rounded-lg border border-[#00E676]/30 bg-[#14161D] p-4 transition hover:border-[#00E676]">
              <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">GaG2 Hub →</span>
              <p className="mt-1 text-xs text-[#768294]">All new features and guides</p>
            </Link>
            <Link href="/grow-a-garden-2/codes" className="group rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676]">
              <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">Active Codes →</span>
              <p className="mt-1 text-xs text-[#768294]">TEAMGREENBEAN + future codes</p>
            </Link>
            <Link href="/grow-a-garden-2/beginner-guide" className="group rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676]">
              <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">Beginner Guide →</span>
              <p className="mt-1 text-xs text-[#768294]">Day/night cycle, Sheckles, guilds</p>
            </Link>
            <Link href="/grow-a-garden-2/night-stealing-guide" className="group rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676]">
              <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">Night Stealing →</span>
              <p className="mt-1 text-xs text-[#768294]">Raid tactics and defense setups</p>
            </Link>
          </div>
        </section>

        <SectionDivider />

        {/* ===== SECTION 2: Latest Codes ===== */}
        <section
          className="mx-auto max-w-[1200px] px-4 py-12 lg:px-6 lg:py-16"
          aria-labelledby="codes-heading"
        >
          <h2
            id="codes-heading"
            className="mb-2 font-heading text-[24px] font-semibold text-white lg:text-[32px]"
          >
            🎁 Latest Active Promo Codes{" "}
            <span className="text-sm font-normal text-[#768294]">(Updated July 2026)</span>
          </h2>
          <p className="mb-8 text-sm text-[#768294]">
            One-click copy — paste these codes in-game for free rewards.
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              {gardenActiveCodes.map((c) => (
                <PromoCard key={c.code} code={c.code} reward={c.reward} accent="garden" />
              ))}
            </div>
            <div className="space-y-4">
              {rangersActiveCodes.map((c) => (
                <PromoCard key={c.code} code={c.code} reward={c.reward} accent="rangers" />
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/grow-a-garden/codes"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00E676] hover:underline"
            >
              View All Garden Codes →
            </Link>
            <Link
              href="/anime-rangers-x/codes"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF3D00] hover:underline"
            >
              View All Rangers Codes →
            </Link>
          </div>
        </section>

        <SectionDivider />

        {/* ===== SECTION 3: Popular Guides ===== */}
        <section
          className="mx-auto max-w-[1200px] px-4 py-12 lg:px-6 lg:py-16"
          aria-labelledby="guides-heading"
        >
          <h2
            id="guides-heading"
            className="mb-2 font-heading text-[24px] font-semibold text-white lg:text-[32px]"
          >
            🔥 Popular Guides
          </h2>
          <p className="mb-8 text-sm text-[#768294]">
            The most-visited tier lists, farming guides, and strategy breakdowns on BloxPulse.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {popularGuides.map((guide) => {
              const accentColor = guide.accent === "garden" ? "#00E676" : "#FF3D00";
              const accentBg =
                guide.accent === "garden"
                  ? "rgba(0,230,118,0.08)"
                  : "rgba(255,61,0,0.08)";
              return (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#3A86FF]"
                >
                  <span
                    className="code-text inline-block rounded px-1.5 py-0.5 text-xs mb-2"
                    style={{ color: accentColor, backgroundColor: accentBg }}
                  >
                    {guide.accent === "garden" ? "🌱 Garden" : "⚔️ Rangers"}
                  </span>
                  <span className="block text-sm font-semibold text-[#BAC4D1] group-hover:text-[#3A86FF] transition">
                    {guide.title} →
                  </span>
                  <p className="mt-1 text-xs text-[#768294]">{guide.description}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <SectionDivider />

        {/* ===== SECTION : Featured Content ===== */}
        <section
          className="mx-auto max-w-[1200px] px-4 py-12 lg:px-6 lg:py-16"
          aria-labelledby="featured-heading"
        >
          <h2
            id="featured-heading"
            className="mb-8 font-heading text-[24px] font-semibold text-white lg:text-[32px]"
          >
            🌟 Featured Content
          </h2>

          <Link
            href={featuredContent.href}
            className="group block rounded-xl border border-[#00E676]/30 bg-[#14161D] p-6 lg:p-8 transition hover:border-[#00E676]"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="flex-1">
                <span
                  className="code-text inline-block rounded-md px-2.5 py-1 text-xs mb-3"
                  style={{ color: "#FFD700", backgroundColor: "rgba(255,215,0,0.12)" }}
                >
                  {featuredContent.badge}
                </span>
                <h3 className="font-heading text-[22px] font-semibold text-white lg:text-[28px] group-hover:text-[#00E676] transition">
                  {featuredContent.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm text-[#768294] leading-relaxed">
                  {featuredContent.description}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-bold text-[#0B0C10] transition hover:brightness-110"
                    style={{ backgroundColor: "#00E676" }}
                  >
                    Read Full Guide →
                  </span>
                  <span className="text-xs text-[#768294]">{featuredContent.date}</span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        <SectionDivider />

        <TrendingGuides />

        <SectionDivider />

        <SEOFAQ />

        <SectionDivider />
      </main>

      <Footer />
    </>
  );
}
