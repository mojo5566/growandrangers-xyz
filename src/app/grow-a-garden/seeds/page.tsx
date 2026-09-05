import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import { getSeedsByTier } from "@/data/garden/database/seeds";

export const metadata: Metadata = {
  title: "Grow a Garden Seeds List — All 20 Seeds",
  description:
    "Complete Grow a Garden seeds list with rarity, price, growth time, season, and tier for every seed. Browse all Sheckles and Robux seeds in the database.",
  keywords: [
    "Grow a Garden seeds",
    "Grow a Garden seeds list",
    "all Grow a Garden seeds",
    "Grow a Garden seed database",
    "seed prices Grow a Garden",
    "Mythstar Seed",
    "Golden Wheat Seed",
    "Sheckles seeds Grow a Garden",
  ],
  alternates: { canonical: "/grow-a-garden/seeds" },
  openGraph: {
    title: "Grow a Garden Seeds List — All 20 Seeds",
    description:
      "Complete Grow a Garden seeds list with rarity, price, growth time, season, and tier for every seed.",
    type: "website",
  },
};

const tierBadge: Record<string, string> = {
  S: "bg-[#FF3D00]/20 text-[#FF3D00]",
  A: "bg-[#FF8C00]/20 text-[#FF8C00]",
  B: "bg-[#FFD700]/20 text-[#FFD700]",
  C: "bg-[#3A86FF]/20 text-[#3A86FF]",
};

const rarityBadge: Record<string, string> = {
  Mythical: "bg-[#FF3D00]/20 text-[#FF3D00]",
  Legendary: "bg-[#FF8C00]/20 text-[#FF8C00]",
  Rare: "bg-[#FFD700]/20 text-[#FFD700]",
  Uncommon: "bg-[#3A86FF]/20 text-[#3A86FF]",
  Common: "bg-[#768294]/20 text-[#BAC4D1]",
};

const tierHeadings: Record<string, string> = {
  S: "🔴 S Tier — Best Seeds",
  A: "🟠 A Tier — Strong Seeds",
  B: "🟡 B Tier — Solid Niche Seeds",
  C: "🔵 C Tier — Starter & Tutorial Seeds",
};

const tierOrder = ["S", "A", "B", "C"] as const;

const relatedGuides = [
  {
    href: "/grow-a-garden/crops",
    label: "All Crops Database",
    description: "Browse every crop these seeds grow into",
  },
  {
    href: "/grow-a-garden/crop-value-list",
    label: "Crop Value List",
    description: "Profit rankings to help you pick seeds",
  },
  {
    href: "/grow-a-garden/beginner-guide",
    label: "Beginner Guide",
    description: "Which seeds to buy first as a new player",
  },
  {
    href: "/grow-a-garden/money-making-guide",
    label: "Money Making Guide",
    description: "Best seed rotation strategies for profit",
  },
];

const faqs = [
  {
    question: "What is the best seed in Grow a Garden?",
    answer:
      "Mythstar Seed is the rarest and most powerful seed in the game — it's the only seed that can spawn S-Tier mutations on planting. For sustained profit, Golden Wheat Seed offers the best CPM at 30,000 Sheckles. For Robux spenders, Premium Event Seed guarantees a mutation roll on every harvest.",
  },
  {
    question: "How do I get seeds in Grow a Garden?",
    answer:
      "Most seeds are purchased from the in-game Seed Shop using Sheckles (earned by farming) or Robux (premium currency). Mythical seeds like Mythstar are rare drops from limited-time events. Common seeds like Wild Grass are free with tutorial completion. Premium Event Seeds only appear during seasonal events.",
  },
  {
    question: "What is the difference between Sheckles and Robux seeds?",
    answer:
      "Sheckles seeds are purchased with in-game earned currency and form the core farming economy. Robux seeds are premium items that cost real money — they typically offer unique effects like guaranteed mutations, bonus roll rates, or exclusive seasonal access that Sheckles seeds cannot match.",
  },
  {
    question: "Do seeds expire or get consumed?",
    answer:
      "Yes — each seed is consumed on planting. You need to repurchase seeds after each harvest to replant. This is why high-CPM crops like Golden Wheat are popular: their fast growth cycle justifies the recurring seed cost. Slow-growing crops like Moonflower have lower throughput but require fewer seed purchases per hour.",
  },
  {
    question: "Are seasonal seeds worth buying?",
    answer:
      "Seasonal seeds offer +20% bonus harvest value during their active season but cannot be planted off-season. Phoenix Bloom Seed is the most valuable Summer seed, Frost Melon Seed dominates Winter, and Neon Pumpkin Seed leads Autumn. Stock up on seasonal seeds during their active window and switch to all-season seeds otherwise.",
  },
];

export default function SeedsDatabasePage() {
  return (
    <ContentLayout
      title="Grow a Garden Seeds List"
      description="Complete list of every seed in Grow a Garden — rarity, price, growth time, season, and tier at a glance. Click any seed for the full breakdown."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Seeds Database", href: "/grow-a-garden/seeds" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/seeds"
      updatedAt="July 19, 2026"
    >
      {/* Seed Tables by Tier */}
      <section aria-labelledby="seeds-heading">
        <h2 id="seeds-heading" className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-6">
          🌱 All Seeds by Tier
        </h2>

        {tierOrder.map((tier) => {
          const tierSeeds = getSeedsByTier(tier);
          return (
            <div key={tier} className="mb-8">
              <h3 className="font-heading text-[18px] font-semibold text-white mb-3">
                {tierHeadings[tier]}
              </h3>
              <div className="overflow-hidden rounded-xl border border-[#252936]">
                <div className="grid grid-cols-[1fr_90px_100px_90px_80px_50px] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
                  <span className="text-xs font-semibold text-[#768294]">NAME</span>
                  <span className="text-xs font-semibold text-[#768294]">RARITY</span>
                  <span className="text-xs font-semibold text-[#768294]">PRICE</span>
                  <span className="text-xs font-semibold text-[#768294]">GROWTH</span>
                  <span className="text-xs font-semibold text-[#768294]">SEASON</span>
                  <span className="text-xs font-semibold text-[#768294]">TIER</span>
                </div>
                {tierSeeds.map((seed) => (
                  <div
                    key={seed.id}
                    className="grid grid-cols-[1fr_90px_100px_90px_80px_50px] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
                  >
                    <Link
                      href={`/grow-a-garden/seeds/${seed.id}`}
                      className="text-sm font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {seed.name}
                    </Link>
                    <span className={`rounded px-1.5 py-0.5 text-xs font-semibold w-fit ${rarityBadge[seed.rarity]}`}>
                      {seed.rarity}
                    </span>
                    <span className="text-xs text-[#BAC4D1]">
                      {seed.price.toLocaleString()} {seed.currency === "Sheckles" ? "🪙" : "💎"}
                    </span>
                    <span className="text-xs text-[#768294]">{seed.growthTime}</span>
                    <span className="text-xs text-[#768294]">{seed.season}</span>
                    <span className={`rounded px-1.5 py-0.5 text-xs font-semibold ${tierBadge[seed.tier]}`}>
                      {seed.tier}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
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
