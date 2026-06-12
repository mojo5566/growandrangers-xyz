import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grow a Garden Crop Value List (2026) — Best Crops for Profit | BloxPulse",
  description:
    "Complete Grow a Garden crop value list comparing all crops by coin profit per harvest, growth time, season availability, and mutation compatibility. Maximize your farm income.",
};

const crops = [
  { name: "Golden Wheat", coins: 480, time: "3 min", season: "All", tier: "S" },
  { name: "Crystal Berry", coins: 420, time: "5 min", season: "All", tier: "S" },
  { name: "Neon Pumpkin", coins: 380, time: "8 min", season: "Autumn", tier: "A" },
  { name: "Frost Melon", coins: 350, time: "6 min", season: "Winter", tier: "A" },
  { name: "Magma Pepper", coins: 320, time: "4 min", season: "Summer", tier: "A" },
  { name: "Lucky Carrot", coins: 280, time: "2 min", season: "Spring", tier: "B" },
  { name: "Moonflower", coins: 260, time: "10 min", season: "All", tier: "B" },
  { name: "Sun Tomato", coins: 200, time: "1 min", season: "Summer", tier: "C" },
  { name: "Basic Potato", coins: 100, time: "30 sec", season: "All", tier: "C" },
  { name: "Wild Grass", coins: 50, time: "15 sec", season: "All", tier: "D" },
];

const faqs = [
  {
    question: "What is the most profitable crop in Grow a Garden?",
    answer: "Golden Wheat (S-Tier) yields 480 coins per harvest with only a 3-minute growth time, making it the highest profit-per-minute crop. However, Crystal Berry is close behind and grows in all seasons.",
  },
  {
    question: "Do crop values change with seasons?",
    answer: "Yes. Seasonal crops (like Neon Pumpkin in Autumn) receive a +20% value bonus during their active season. All-season crops maintain consistent value year-round but lack the seasonal bonus.",
  },
  {
    question: "How do mutations affect crop values?",
    answer: "Crop value multipliers from mutations stack with the base coin value listed above. For example, Golden Wheat (480 coins) with a Golden Bloom mutation (4.0x) yields 1,920 coins per harvest — before pet bonuses are even applied.",
  },
];

const tierBadge: Record<string, string> = {
  S: "text-[#FF3D00] bg-[rgba(255,61,0,0.12)]",
  A: "text-[#FF8C00] bg-[rgba(255,140,0,0.12)]",
  B: "text-[#FFD700] bg-[rgba(255,215,0,0.12)]",
  C: "text-[#3A86FF] bg-[rgba(58,134,255,0.12)]",
  D: "text-[#768294] bg-[rgba(118,130,148,0.12)]",
};

export default function CropValuesPage() {
  return (
    <ContentLayout
      title="Grow a Garden Crop Value List — Best Crops for Maximum Profit"
      description="Every crop ranked by base coin value, growth time, and seasonal availability. Use this guide to plan your farm layout for optimal coins-per-minute profit."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden Crop Value List", href: "/garden/crop-values" },
      ]}
      canonicalPath="/grow-a-garden/crop-value-list" accent="garden"
    >
      {/* Crop Table */}
      <section aria-labelledby="crop-table">
        <h2 id="crop-table" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          💰 Complete Crop Value Rankings
        </h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1fr_100px_100px_100px] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="code-text text-[#768294]">CROP</span>
            <span className="code-text text-[#768294]">COINS</span>
            <span className="code-text text-[#768294]">TIME</span>
            <span className="code-text text-[#768294]">SEASON</span>
          </div>
          {crops.map((c, i) => (
            <div key={i} className="grid grid-cols-[1fr_100px_100px_100px] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition">
              <div className="flex items-center gap-2">
                <span className={`code-text rounded px-1.5 py-0.5 text-xs ${tierBadge[c.tier]}`}>{c.tier}</span>
                <span className="text-sm font-semibold text-[#BAC4D1]">{c.name}</span>
              </div>
              <span className="text-sm font-bold text-[#00E676]">{c.coins}</span>
              <span className="text-xs text-[#768294]">{c.time}</span>
              <span className="text-xs text-[#768294]">{c.season}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Profit Tips */}
      <section aria-labelledby="tips" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="tips" className="font-heading text-[20px] font-semibold text-white mb-3">
          📈 Profit Maximization Tips
        </h2>
        <ul className="space-y-2">
          <li className="flex gap-2 text-sm text-[#BAC4D1]"><span className="text-[#00E676]">▸</span> Plant <strong>seasonal crops</strong> during their active season for a +20% value bonus.</li>
          <li className="flex gap-2 text-sm text-[#BAC4D1]"><span className="text-[#00E676]">▸</span> Apply <strong>S-tier mutations</strong> to your highest-value crops for maximum return.</li>
          <li className="flex gap-2 text-sm text-[#BAC4D1]"><span className="text-[#00E676]">▸</span> Equip a <strong>high-tier pet</strong> before harvesting to stack multipliers.</li>
          <li className="flex gap-2 text-sm text-[#BAC4D1]"><span className="text-[#00E676]">▸</span> Use <strong>Double Harvest Boosts</strong> (from codes) on Golden Wheat or Crystal Berry.</li>
        </ul>
      </section>

      <section aria-labelledby="related">
        <h2 id="related" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          🔗 Related Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/garden/mutation-tier-list" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676]">
            <span className="text-sm font-semibold text-[#BAC4D1]">🌱 Mutation Tier List →</span>
            <p className="mt-1 text-xs text-[#768294]">Boost your crop values with the best mutations</p>
          </Link>
          <Link href="/garden/pet-tier-list" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676]">
            <span className="text-sm font-semibold text-[#BAC4D1]">🐣 Pet Tier List →</span>
            <p className="mt-1 text-xs text-[#768294]">Stack pet multipliers on top of crop profits</p>
          </Link>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
