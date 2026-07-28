import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import { eggs, getEggsByTier, getPetsFromEgg, getEggRarityDistribution } from "@/data/garden/database/eggs";

export const metadata: Metadata = {
  title: "Grow a Garden Eggs List — All 4 Eggs",
  description:
    "Complete Grow a Garden eggs database with price, hatch time, pet drop rates, and rarity distribution for every egg. Find the best egg for your farm.",
  keywords: [
    "Grow a Garden eggs",
    "Grow a Garden egg database",
    "all eggs Grow a Garden",
    "Basic Egg Grow a Garden",
    "Rare Egg Grow a Garden",
    "Legendary Egg Grow a Garden",
    "egg drop rates Grow a Garden",
    "pet hatching guide",
  ],
  alternates: { canonical: "/grow-a-garden/eggs" },
  openGraph: {
    title: "Grow a Garden Eggs Database",
    description:
      "Complete Grow a Garden eggs database with price, hatch time, pet drop rates, and rarity distribution for every egg.",
    type: "website",
  },
};

const tierBadge: Record<string, string> = {
  S: "bg-[#FF3D00]/20 text-[#FF3D00]",
  A: "bg-[#FF8C00]/20 text-[#FF8C00]",
  B: "bg-[#FFD700]/20 text-[#FFD700]",
  C: "bg-[#3A86FF]/20 text-[#3A86FF]",
};

const tierHeadings: Record<string, string> = {
  S: "🔴 S Tier — Endgame Eggs",
  A: "🟠 A Tier — Event Eggs",
  B: "🟡 B Tier — Mid-Game Eggs",
  C: "🔵 C Tier — Starter Eggs",
};

const tierOrder = ["S", "A", "B", "C"] as const;

const relatedGuides = [
  {
    href: "/grow-a-garden/pets",
    label: "All Pets Database",
    description: "Browse every pet obtainable from these eggs",
  },
  {
    href: "/grow-a-garden/pet-tier-list",
    label: "Pet Tier List",
    description: "Full pet rankings to know which hatches are worth keeping",
  },
  {
    href: "/grow-a-garden/best-pets",
    label: "Best Pets Guide",
    description: "Which pets to chase and which eggs to buy first",
  },
  {
    href: "/grow-a-garden/money-making-guide",
    label: "Money Making Guide",
    description: "When to buy each egg based on your farm income",
  },
];

const faqs = [
  {
    question: "What is the best egg in Grow a Garden?",
    answer:
      "The Legendary Egg is the best egg overall — it is the only source of S-Tier pets like Golden Phoenix Chick (5.0×), Golden Dragon (4.8×), and Crystal Unicorn Foal (4.5×). However, at 10,000 Coins each, it should only be purchased when your farm generates that amount in under 10 minutes.",
  },
  {
    question: "Which egg should I buy first?",
    answer:
      "Buy a Basic Egg (500 Coins) with your first 500 Coins to bootstrap your pet multiplier. Once you have 3-4 plots with B-Tier+ mutations and earn 2,000+ coins per harvest cycle, switch to Rare Eggs. Only buy Legendary Eggs when 10,000 Coins is less than 10 minutes of farming income.",
  },
  {
    question: "How do egg drop rates work?",
    answer:
      "Each egg has a fixed petDropRates table that determines the chance of hatching each pet. The percentages sum to ~100% per hatch. For example, the Basic Egg has a 25% chance for Common Garden Cat, 20% for Dust Bunny, and only 4% for Thunder Hawk Chick. Higher-tier pets always have lower drop rates within their egg.",
  },
  {
    question: "Can I get S-Tier pets from Rare Eggs?",
    answer:
      "No. S-Tier pets (Golden Phoenix Chick, Golden Dragon, Crystal Unicorn Foal) can only be hatched from Legendary Eggs. Rare Eggs cap out at A-Tier pets like Neon Dragon Hatchling (3.5×). This is why Legendary Eggs are the endgame egg despite their high cost.",
  },
  {
    question: "Are Seasonal Event Eggs worth buying?",
    answer:
      "Yes, if you want exclusive pets. Seasonal Event Eggs are the only source of the Lucky Clover Bunny, which has unique Leporine Bloom mutation synergy. They are purchased with Event Tickets instead of Coins, so they don't compete with your farming income. Buy them during active events — they disappear when the event ends.",
  },
  {
    question: "What is the hatch time for each egg?",
    answer:
      "Basic Egg: 10 seconds. Rare Egg: 30 seconds. Seasonal Event Egg: 1 minute. Legendary Egg: 2 minutes. Hatch time is a minor consideration — the price and pet pool matter far more for your farming strategy.",
  },
];

export default function EggsDatabasePage() {
  return (
    <ContentLayout
      title="Grow a Garden Eggs Database"
      description="Complete database of every egg in Grow a Garden — price, hatch time, pet drop rates, and rarity distribution at a glance. Click any egg for the full breakdown."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Eggs Database", href: "/grow-a-garden/eggs" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/eggs"
      updatedAt="July 19, 2026"
    >
      {/* Egg Tables by Tier */}
      <section aria-labelledby="eggs-heading">
        <h2 id="eggs-heading" className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-6">
          🥚 All Eggs by Tier
        </h2>

        {tierOrder.map((tier) => {
          const tierEggs = getEggsByTier(tier);
          if (tierEggs.length === 0) return null;
          return (
            <div key={tier} className="mb-8">
              <h3 className="font-heading text-[18px] font-semibold text-white mb-3">
                {tierHeadings[tier]}
              </h3>
              <div className="overflow-hidden rounded-xl border border-[#252936]">
                <div className="grid grid-cols-[1fr_100px_100px_80px_60px] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
                  <span className="text-xs font-semibold text-[#768294]">NAME</span>
                  <span className="text-xs font-semibold text-[#768294]">PRICE</span>
                  <span className="text-xs font-semibold text-[#768294]">HATCH TIME</span>
                  <span className="text-xs font-semibold text-[#768294]">PETS</span>
                  <span className="text-xs font-semibold text-[#768294]">TIER</span>
                </div>
                {tierEggs.map((egg) => {
                  const eggPets = getPetsFromEgg(egg.id);
                  return (
                    <div
                      key={egg.id}
                      className="grid grid-cols-[1fr_100px_100px_80px_60px] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
                    >
                      <Link
                        href={`/grow-a-garden/eggs/${egg.id}`}
                        className="text-sm font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                      >
                        {egg.name}
                      </Link>
                      <span className="text-xs text-[#BAC4D1]">
                        {egg.price.toLocaleString()} {egg.currency === "Coins" ? "🪙" : "🎟️"}
                      </span>
                      <span className="text-xs text-[#768294]">{egg.hatchTime}</span>
                      <span className="text-xs text-[#768294]">{eggPets.length} pets</span>
                      <span className={`rounded px-1.5 py-0.5 text-xs font-semibold ${tierBadge[egg.tier]}`}>
                        {egg.tier}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      {/* Rarity Distribution Summary */}
      <section aria-labelledby="distribution-heading">
        <h2 id="distribution-heading" className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-6">
          📊 Pet Rarity Distribution by Egg
        </h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1fr_80px_80px_80px_80px] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="text-xs font-semibold text-[#768294]">EGG</span>
            <span className="text-xs font-semibold text-[#FF3D00]">S%</span>
            <span className="text-xs font-semibold text-[#FF8C00]">A%</span>
            <span className="text-xs font-semibold text-[#FFD700]">B%</span>
            <span className="text-xs font-semibold text-[#3A86FF]">C%</span>
          </div>
          {eggs.map((egg) => {
            const dist = getEggRarityDistribution(egg.id);
            return (
              <div
                key={egg.id}
                className="grid grid-cols-[1fr_80px_80px_80px_80px] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
              >
                <Link
                  href={`/grow-a-garden/eggs/${egg.id}`}
                  className="text-sm font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                >
                  {egg.name}
                </Link>
                <span className="text-xs font-semibold text-[#FF3D00]">{dist.S}%</span>
                <span className="text-xs font-semibold text-[#FF8C00]">{dist.A}%</span>
                <span className="text-xs font-semibold text-[#FFD700]">{dist.B}%</span>
                <span className="text-xs font-semibold text-[#3A86FF]">{dist.C}%</span>
              </div>
            );
          })}
        </div>
        <p className="mt-2 text-xs text-[#768294] leading-relaxed">
          Percentages represent the combined chance of hatching a pet of each tier from that egg. For example, the Legendary Egg has a 27% chance of Golden Phoenix Chick and a 40% chance of Crystal Unicorn Foal — every hatch is S-Tier.
        </p>
      </section>

      {/* Related Guides */}
      <section aria-labelledby="related-heading">
        <h2 id="related-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          🔗 Related Grow a Garden Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {relatedGuides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676] group"
            >
              <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
                {g.label} →
              </span>
              <p className="mt-1 text-xs text-[#768294]">{g.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
