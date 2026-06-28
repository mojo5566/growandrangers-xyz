import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import { units } from "@/data/rangers/database/units";
import { traits } from "@/data/rangers/database/traits";

export const metadata: Metadata = {
  title:
    "Anime Rangers X (Re:Rangers X) — Codes, Tier Lists & Guides | BloxPulse",
  description:
    "Complete Anime Rangers X hub: working promo codes, unit tier list, trait rankings, evolution guide, and team compositions. Updated daily for Re:Rangers X.",
  alternates: { canonical: "/anime-rangers-x/" },
  openGraph: {
    title: "Anime Rangers X — Codes, Tier Lists & Guides | BloxPulse",
    description: "Complete Anime Rangers X hub with codes, tier lists, and guides.",
    type: "website",
  },
};

const databaseCards = [
  {
    title: "Units Database",
    description: "All units with stats, abilities, and evolution requirements.",
    href: "/anime-rangers-x/units",
    count: `${units.length} units`,
  },
  {
    title: "Traits Database",
    description: "All traits with modifier values, rarity, and optimal unit pairings.",
    href: "/anime-rangers-x/traits",
    count: `${traits.length} traits`,
  },
];

const guideLinks = [
  {
    title: "Active Codes",
    description: "All working promo codes with rewards — updated daily.",
    href: "/anime-rangers-x/codes",
  },
  {
    title: "Tier List",
    description: "Overall tier list ranking all units and traits in the current meta.",
    href: "/anime-rangers-x/tier-list",
  },
  {
    title: "Unit Tier List",
    description: "Every unit ranked by damage, utility, and farming potential.",
    href: "/anime-rangers-x/unit-tier-list",
  },
  {
    title: "Trait Tier List",
    description: "All traits ranked by modifier strength and unit synergy.",
    href: "/anime-rangers-x/trait-tier-list",
  },
  {
    title: "Evolution Guide",
    description: "Complete evolution paths, material requirements, and priority order.",
    href: "/anime-rangers-x/evolution-guide",
  },
  {
    title: "Beginner Guide",
    description: "Get started fast — progression tips, resource management, and early goals.",
    href: "/anime-rangers-x/beginner-guide",
  },
  {
    title: "Best Units",
    description: "Top-performing units for every game mode in the current patch.",
    href: "/anime-rangers-x/best-units",
  },
  {
    title: "Team Guide",
    description: "Optimal team compositions for story, infinite, and PvP modes.",
    href: "/anime-rangers-x/team-guide",
  },
];

const faqs = [
  {
    question: "How do I redeem codes in Anime Rangers X?",
    answer:
      "Launch the game in Roblox, open the Settings or Codes menu from the side panel, paste your code, and press submit. Rewards are added to your inventory immediately.",
  },
  {
    question: "What does Re:Rangers mean?",
    answer:
      "Re:Rangers is the updated title following the June 2026 restructure. The core gameplay remains the same, but progression, drop rates, and base unit pools have been rebalanced.",
  },
  {
    question: "What are the best traits to roll for?",
    answer:
      "The current meta favors Unique-tier traits like Time Rewind, God-Speed, and Monarch. For farming, prioritize Drop Rate and Cooldown Reduction. Check our Trait Tier List for full rankings.",
  },
  {
    question: "How do I evolve units in Anime Rangers X?",
    answer:
      "Each unit requires specific materials earned from story stages and infinite mode. Visit the Evolution Lab, select your unit, and provide the required materials. See our Evolution Guide for detailed paths.",
  },
  {
    question: "How often is the tier list updated?",
    answer:
      "We update our tier lists within 24 hours of every balance patch or new unit release. The Re:Rangers restructure brought major changes — all rankings reflect the current patch.",
  },
];

export default function AnimeRangersXHubPage() {
  return (
    <ContentLayout
      title="Anime Rangers X Hub"
      description="Complete Anime Rangers X hub: working promo codes, unit tier list, trait rankings, evolution guide, and team compositions. Updated daily for Re:Rangers X."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Anime Rangers X", href: "/anime-rangers-x" },
      ]}
      accent="rangers"
      canonicalPath="/anime-rangers-x/"
    >
      {/* Database Section */}
      <section aria-labelledby="db-heading">
        <h2
          id="db-heading"
          className="mb-4 font-heading text-[20px] font-semibold text-white lg:text-[24px]"
        >
          📊 Browse Database
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {databaseCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-5 transition hover:border-[#FF3D00]"
            >
              <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#FF3D00] transition">
                {card.title}
              </span>
              <span className="code-text ml-2 text-xs text-[#FF3D00]">
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
              className="group rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00]"
            >
              <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#FF3D00] transition">
                {guide.title} →
              </span>
              <p className="mt-1 text-xs text-[#768294]">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Patch Notes */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          📅 Latest Patch Notes &amp; Game Updates
        </h2>
        <p className="mt-1 text-xs text-[#768294]">
          June 2026 —{" "}
          <strong className="text-[#BAC4D1]">Re:Rangers Title Restructure</strong>
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[#768294]">
          Complete progression overhaul balancing infinite wave drop rates and base
          unit pools.
        </p>
      </section>

      {/* FAQ Section */}
      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
