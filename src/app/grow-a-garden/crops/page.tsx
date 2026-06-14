import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import { crops, getCropsByTier } from "@/data/garden/database/crops";

export const metadata: Metadata = {
  title: "Grow a Garden Crops Database — All Crops Listed (June 2026) | BloxPulse",
  description:
    "Complete Grow a Garden crops database with coins, growth time, season, tier, and CPM for every crop. Find the best crop for your farm.",
  keywords: [
    "Grow a Garden crops",
    "Grow a Garden crop database",
    "all crops Grow a Garden",
    "best crops Grow a Garden 2026",
    "crop list Grow a Garden",
    "Golden Wheat",
    "Crystal Berry",
    "crop CPM",
  ],
  alternates: { canonical: "/grow-a-garden/crops" },
  openGraph: {
    title: "Grow a Garden Crops Database — All Crops Listed (June 2026)",
    description:
      "Complete Grow a Garden crops database with coins, growth time, season, tier, and CPM for every crop.",
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
  S: "🔴 S Tier — Best Crops",
  A: "🟠 A Tier — Excellent Seasonal Crops",
  B: "🟡 B Tier — Solid Niche Crops",
  C: "🔵 C Tier — Starter & Tutorial Crops",
};

const tierOrder = ["S", "A", "B", "C"] as const;

const relatedGuides = [
  {
    href: "/grow-a-garden/crop-value-list",
    label: "Crop Value List",
    description: "Detailed crop profit rankings and value comparisons",
  },
  {
    href: "/grow-a-garden/mutation-tier-list",
    label: "Mutation Tier List",
    description: "Best mutations ranked for maximum farming profit",
  },
  {
    href: "/grow-a-garden/beginner-guide",
    label: "Beginner Guide",
    description: "Everything new players need to know to get started",
  },
  {
    href: "/grow-a-garden/money-making-guide",
    label: "Money Making Guide",
    description: "Proven strategies to earn coins fast",
  },
];

const faqs = [
  {
    question: "What is the best crop in Grow a Garden?",
    answer:
      "Golden Wheat is the best overall crop at 160 coins-per-minute with all-season availability. Crystal Berry is the second best at 84 CPM. Both can be farmed year-round without seasonal restrictions.",
  },
  {
    question: "How does the seasonal bonus work for crops?",
    answer:
      "Seasonal crops receive a +20% bonus during their active season. For example, Neon Pumpkin gets a bonus during Autumn. Outside their season, seasonal crops cannot be planted, so switch to all-season crops like Golden Wheat.",
  },
  {
    question: "What does CPM mean and why does it matter?",
    answer:
      "CPM stands for Coins Per Minute — it measures how many coins a crop generates per minute of growth time. Higher CPM means more efficient farming. However, C-Tier crops have high CPM but low per-harvest value, requiring constant attention.",
  },
  {
    question: "Should I always plant the highest CPM crop?",
    answer:
      "Not necessarily. CPM assumes you harvest and replant instantly. If you play semi-AFK, longer growth crops like Crystal Berry (5 min) or Moonflower (10 min) may earn more per session because you miss fewer harvest windows.",
  },
];

export default function CropsDatabasePage() {
  return (
    <ContentLayout
      title="Grow a Garden Crops Database"
      description="Complete database of every crop in Grow a Garden — coins, growth time, season, tier, and CPM at a glance. Click any crop for the full breakdown."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Crops Database", href: "/grow-a-garden/crops" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/crops"
    >
      {/* Crop Tables by Tier */}
      <section aria-labelledby="crops-heading">
        <h2 id="crops-heading" className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-6">
          🌾 All Crops by Tier
        </h2>

        {tierOrder.map((tier) => {
          const tierCrops = getCropsByTier(tier);
          return (
            <div key={tier} className="mb-8">
              <h3 className="font-heading text-[18px] font-semibold text-white mb-3">
                {tierHeadings[tier]}
              </h3>
              <div className="overflow-hidden rounded-xl border border-[#252936]">
                <div className="grid grid-cols-[1fr_70px_90px_80px_50px_60px] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
                  <span className="text-xs font-semibold text-[#768294]">NAME</span>
                  <span className="text-xs font-semibold text-[#768294]">COINS</span>
                  <span className="text-xs font-semibold text-[#768294]">GROWTH</span>
                  <span className="text-xs font-semibold text-[#768294]">SEASON</span>
                  <span className="text-xs font-semibold text-[#768294]">TIER</span>
                  <span className="text-xs font-semibold text-[#768294]">CPM</span>
                </div>
                {tierCrops.map((crop) => (
                  <div
                    key={crop.id}
                    className="grid grid-cols-[1fr_70px_90px_80px_50px_60px] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
                  >
                    <Link
                      href={`/grow-a-garden/crops/${crop.id}`}
                      className="text-sm font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {crop.name}
                    </Link>
                    <span className="text-xs text-[#BAC4D1]">{crop.coins} 🪙</span>
                    <span className="text-xs text-[#768294]">{crop.growthTime}</span>
                    <span className="text-xs text-[#768294]">{crop.season}</span>
                    <span className={`rounded px-1.5 py-0.5 text-xs font-semibold ${tierBadge[crop.tier]}`}>
                      {crop.tier}
                    </span>
                    <span className="text-xs font-semibold text-[#00E676]">{crop.coinsPerMinute}</span>
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
