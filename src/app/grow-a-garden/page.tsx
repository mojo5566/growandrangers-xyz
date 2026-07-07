import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import { crops } from "@/data/garden/database/crops";
import { mutations } from "@/data/garden/database/mutations";
import { pets } from "@/data/garden/database/pets";

export const metadata: Metadata = {
  title: "Grow a Garden — Codes, Tier Lists, Crop Values & Guides | BloxPulse",
  description:
    "Complete Grow a Garden hub: working promo codes, mutation tier list, pet rankings, crop value calculator, beginner guide, and money-making strategies. Updated daily.",
  alternates: { canonical: "/grow-a-garden/" },
  openGraph: {
    title: "Grow a Garden — Codes, Tier Lists & Guides | BloxPulse",
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
];

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
      {/* Database Section */}
      <section aria-labelledby="db-heading">
        <h2
          id="db-heading"
          className="mb-4 font-heading text-[20px] font-semibold text-white lg:text-[24px]"
        >
          📊 Browse Database
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

      {/* Latest Patch Notes */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          📅 Latest Patch Notes &amp; Game Updates
        </h2>
        <p className="mt-1 text-xs text-[#768294]">
          July 2026 —{" "}
          <strong className="text-[#BAC4D1]">Zen Update + Database Expansion</strong>
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[#768294]">
          Zen Update added new codes (RDCAward, BEANORLEAVE10, torigate). Database expanded with 19 new crops, 8 new mutations, and 8 new pets including Golden Dragon and Prismatic Rainbow.
        </p>
      </section>

      {/* FAQ Section */}
      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
