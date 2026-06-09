import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grow a Garden Crop Value List (2026) — Best Crops for Profit | BloxPulse",
  description:
    "Every Grow a Garden crop ranked by coin value, growth time, season, and profit-per-minute. Find the most profitable crops with mutation and pet multiplier stacking.",
  keywords: [
    "Grow a Garden crop values",
    "Grow a Garden best crops",
    "crop profit guide",
    "Grow a Garden farming guide 2026",
    "golden wheat value",
  ],
  openGraph: {
    title: "Grow a Garden Crop Value List (2026)",
    description:
      "All crops ranked by coins, growth time, season, and profit-per-minute. Mutation and pet stacking guide.",
    type: "website",
  },
};

const sTier = [
  { name: "Golden Wheat", coins: 480, time: "3 min", season: "All", tier: "S" as const },
  { name: "Crystal Berry", coins: 420, time: "5 min", season: "All", tier: "S" as const },
];

const aTier = [
  { name: "Neon Pumpkin", coins: 380, time: "8 min", season: "Autumn", tier: "A" as const },
  { name: "Frost Melon", coins: 350, time: "6 min", season: "Winter", tier: "A" as const },
  { name: "Magma Pepper", coins: 320, time: "4 min", season: "Summer", tier: "A" as const },
];

const bTier = [
  { name: "Lucky Carrot", coins: 280, time: "2 min", season: "Spring", tier: "B" as const },
  { name: "Moonflower", coins: 260, time: "10 min", season: "All", tier: "B" as const },
  { name: "Blaze Berry", coins: 240, time: "3 min", season: "Summer", tier: "B" as const },
];

const cTier = [
  { name: "Sun Tomato", coins: 200, time: "1 min", season: "Summer", tier: "C" as const },
  { name: "Basic Potato", coins: 100, time: "30 sec", season: "All", tier: "C" as const },
  { name: "Wild Grass", coins: 50, time: "15 sec", season: "All", tier: "C" as const },
];

const allCrops = [...sTier, ...aTier, ...bTier, ...cTier];

const tierBadge: Record<string, string> = {
  S: "text-[#FF3D00] bg-[rgba(255,61,0,0.12)]",
  A: "text-[#FF8C00] bg-[rgba(255,140,0,0.12)]",
  B: "text-[#FFD700] bg-[rgba(255,215,0,0.12)]",
  C: "text-[#3A86FF] bg-[rgba(58,134,255,0.12)]",
};

const profitData = [
  { name: "Golden Wheat", base: 480, sMut: "1,920", sMutPet: "9,600", ppm: "160" },
  { name: "Crystal Berry", base: 420, sMut: "1,680", sMutPet: "8,400", ppm: "84" },
  { name: "Neon Pumpkin", base: 380, sMut: "1,520", sMutPet: "7,600", ppm: "48" },
  { name: "Frost Melon", base: 350, sMut: "1,400", sMutPet: "7,000", ppm: "58" },
  { name: "Magma Pepper", base: 320, sMut: "1,280", sMutPet: "6,400", ppm: "80" },
  { name: "Lucky Carrot", base: 280, sMut: "1,120", sMutPet: "5,600", ppm: "140" },
];

const faqs = [
  {
    question: "What is the most profitable crop in Grow a Garden?",
    answer:
      "Golden Wheat (S-Tier) at 480 coins per 3 minutes yields 160 coins-per-minute — the highest raw profit rate in the game. Crystal Berry is close behind at 84 coins-per-minute but has a longer growth time, making Golden Wheat the undisputed best crop for active farmers.",
  },
  {
    question: "Do seasonal crops give bonus coins during their season?",
    answer:
      "Yes. Seasonal crops (Neon Pumpkin in Autumn, Frost Melon in Winter, Magma Pepper in Summer, Lucky Carrot in Spring) receive a +20% coin value bonus during their active season. Off-season, they sell at the base price listed above.",
  },
  {
    question: "How do mutations and pets affect crop values?",
    answer:
      "Mutations multiply the base crop value, and pets multiply the result again. Example: Golden Wheat (480) × Golden Bloom mutation (4.0x) = 1,920 coins. Add Golden Phoenix Chick (5.0x) = 9,600 coins per harvest. This multiplicative stacking is the core of endgame farming.",
  },
  {
    question: "Should I plant all-season crops or seasonal crops?",
    answer:
      "All-season crops (Golden Wheat, Crystal Berry, Moonflower, Basic Potato) provide consistent income year-round and are ideal for your main plots. Plant seasonal crops on secondary plots to capitalize on the +20% seasonal bonus when active — then switch back to all-season crops in the off-season.",
  },
  {
    question: "Is Wild Grass worth planting for quick coin flips?",
    answer:
      "No. At 50 coins per 15 seconds (200 coins-per-minute), Wild Grass appears to have a decent profit rate. However, the constant replanting and harvesting time overhead makes it impractical. You are better off planting Basic Potato or Sun Tomato for fast-cycle farming.",
  },
];

export default function CropValueListPage() {
  return (
    <ContentLayout
      title="Grow a Garden Crop Value List — Best Crops for Maximum Profit"
      description="Every Grow a Garden crop ranked by base coin value, growth time, seasonal availability, and profit-per-minute. Includes mutation and pet multiplier stacking calculations for endgame farming optimization."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden Crop Value List", href: "/grow-a-garden/crop-value-list" },
      ]}
      accent="garden"
    >
      {/* Tier Explanation */}
      <section aria-labelledby="tiers-heading">
        <h2
          id="tiers-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          📊 Crop Value Tier System
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { tier: "S", color: "#FF3D00", label: "Top Profit", desc: "Highest coins-per-minute" },
            { tier: "A", color: "#FF8C00", label: "High Yield", desc: "Strong seasonal or fast crops" },
            { tier: "B", color: "#FFD700", label: "Moderate", desc: "Decent returns; niche use" },
            { tier: "C", color: "#3A86FF", label: "Low Yield", desc: "Starter crops; quick flips" },
          ].map((t) => (
            <div key={t.tier} className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
              <span className="code-text text-lg" style={{ color: t.color }}>{t.tier}-Tier</span>
              <p className="mt-1 text-sm font-semibold text-white">{t.label}</p>
              <p className="mt-1 text-xs text-[#768294]">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full Crop Table */}
      <section aria-labelledby="full-table-heading">
        <h2
          id="full-table-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          💰 Complete Crop Value Rankings
        </h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1fr_80px_80px_100px] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="code-text text-[#768294]">CROP</span>
            <span className="code-text text-[#768294]">COINS</span>
            <span className="code-text text-[#768294]">TIME</span>
            <span className="code-text text-[#768294]">SEASON</span>
          </div>
          {allCrops.map((c, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_80px_80px_100px] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
            >
              <div className="flex items-center gap-2">
                <span className={`code-text rounded px-1.5 py-0.5 text-xs ${tierBadge[c.tier]}`}>
                  {c.tier}
                </span>
                <span className="text-sm font-semibold text-[#BAC4D1]">{c.name}</span>
              </div>
              <span className="text-sm font-bold text-[#00E676]">{c.coins}</span>
              <span className="text-xs text-[#768294]">{c.time}</span>
              <span className="text-xs text-[#768294]">{c.season}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Each Tier */}
      <section aria-labelledby="why-heading">
        <h2
          id="why-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          📋 Why Each Crop Is in Its Tier
        </h2>

        {/* S-Tier */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2" style={{ color: "#FF3D00" }}>🏆 S-Tier</h3>
          <div className="space-y-3">
            {[
              {
                name: "Golden Wheat",
                why: "480 coins at 3 minutes = 160 coins-per-minute — the highest raw profit rate in Grow a Garden. All-season availability means you never need to rotate it out. Combined with an S-Tier mutation and S-Tier pet, a single Golden Wheat harvest can yield 9,600 coins.",
              },
              {
                name: "Crystal Berry",
                why: "420 coins at 5 minutes (84 coins-per-minute) is lower than Golden Wheat, but the longer growth cycle means fewer replanting actions — ideal for semi-AFK farmers. Its all-season availability and solid base value keep it firmly in S-Tier.",
              },
            ].map((item) => (
              <div key={item.name} className="rounded-lg border border-[#252936] bg-[#14161D] p-3">
                <h4 className="text-xs font-semibold text-[#BAC4D1]">{item.name}</h4>
                <p className="mt-1 text-xs text-[#768294] leading-relaxed">
                  <span className="text-[#FF3D00] font-semibold">Why S-Tier: </span>{item.why}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* A-Tier */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2" style={{ color: "#FF8C00" }}>⭐ A-Tier</h3>
          <div className="space-y-3">
            {[
              {
                name: "Neon Pumpkin, Frost Melon & Magma Pepper",
                why: "These seasonal crops offer excellent returns during their active seasons (+20% bonus pushes Neon Pumpkin to 456 coins). However, their off-season penalty and seasonal lock prevent them from matching S-Tier consistency year-round. Plant them on secondary plots during their season window.",
              },
            ].map((item) => (
              <div key={item.name} className="rounded-lg border border-[#252936] bg-[#14161D] p-3">
                <h4 className="text-xs font-semibold text-[#BAC4D1]">{item.name}</h4>
                <p className="mt-1 text-xs text-[#768294] leading-relaxed">
                  <span className="text-[#FF8C00] font-semibold">Why A-Tier: </span>{item.why}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* B-Tier */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2" style={{ color: "#FFD700" }}>👍 B-Tier</h3>
          <div className="space-y-3">
            {[
              {
                name: "Lucky Carrot, Moonflower & Blaze Berry",
                why: "Lucky Carrot has the fastest growth (2 min) among non-C-tier crops, making it decent for active farming at 140 coins-per-minute. Moonflower's 10-minute cycle is too slow to compete with faster crops. Blaze Berry is a weaker summer alternative to Magma Pepper. All are viable mid-game but should be phased out for higher-tier options.",
              },
            ].map((item) => (
              <div key={item.name} className="rounded-lg border border-[#252936] bg-[#14161D] p-3">
                <h4 className="text-xs font-semibold text-[#BAC4D1]">{item.name}</h4>
                <p className="mt-1 text-xs text-[#768294] leading-relaxed">
                  <span className="text-[#FFD700] font-semibold">Why B-Tier: </span>{item.why}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* C-Tier */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2" style={{ color: "#3A86FF" }}>🌱 C-Tier</h3>
          <div className="space-y-3">
            {[
              {
                name: "Sun Tomato, Basic Potato & Wild Grass",
                why: "Starter crops for new players. Sun Tomato and Basic Potato serve as early-game income sources while you save Coins for better seeds. Wild Grass is technically free but yields negligible profit — it exists only as a tutorial crop. Replace all C-Tier crops as soon as you can afford Golden Wheat or Crystal Berry seeds.",
              },
            ].map((item) => (
              <div key={item.name} className="rounded-lg border border-[#252936] bg-[#14161D] p-3">
                <h4 className="text-xs font-semibold text-[#BAC4D1]">{item.name}</h4>
                <p className="mt-1 text-xs text-[#768294] leading-relaxed">
                  <span className="text-[#3A86FF] font-semibold">Why C-Tier: </span>{item.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profit Stacking */}
      <section aria-labelledby="stacking-heading">
        <h2
          id="stacking-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          📈 Profit Stacking: Mutation + Pet Multipliers
        </h2>
        <p className="text-sm text-[#768294] mb-4">
          See how crop values scale with S-Tier mutation (Golden Bloom 4.0x) and S-Tier pet (Golden Phoenix Chick 5.0x):
        </p>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1fr_80px_100px_100px_80px] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="code-text text-[#768294]">CROP</span>
            <span className="code-text text-[#768294]">BASE</span>
            <span className="code-text text-[#768294]">+ MUTATION</span>
            <span className="code-text text-[#768294]">+ PET</span>
            <span className="code-text text-[#768294]">PPM</span>
          </div>
          {profitData.map((p, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_80px_100px_100px_80px] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
            >
              <span className="text-xs text-[#BAC4D1]">{p.name}</span>
              <span className="text-xs text-[#BAC4D1]">{p.base}</span>
              <span className="text-xs text-[#FF8C00]">{p.sMut}</span>
              <span className="text-xs font-bold text-[#00E676]">{p.sMutPet}</span>
              <span className="text-xs text-[#768294]">{p.ppm}/min</span>
            </div>
          ))}
        </div>
      </section>

      {/* Farming Strategy */}
      <section
        aria-labelledby="strategy-heading"
        className="rounded-xl border border-[#252936] bg-[#14161D] p-5"
      >
        <h2
          id="strategy-heading"
          className="font-heading text-[20px] font-semibold text-white mb-3"
        >
          🎯 Optimal Farming Strategy
        </h2>
        <ul className="space-y-2">
          <li className="flex gap-2 text-sm text-[#BAC4D1]">
            <span className="text-[#00E676] shrink-0">▸</span>
            <span><strong>Main plots:</strong> Always plant Golden Wheat or Crystal Berry with your best mutation. These all-season S-Tier crops provide maximum consistent income year-round.</span>
          </li>
          <li className="flex gap-2 text-sm text-[#BAC4D1]">
            <span className="text-[#00E676] shrink-0">▸</span>
            <span><strong>Secondary plots:</strong> Rotate seasonal crops (Neon Pumpkin in Autumn, etc.) during their active window for the +20% bonus. Switch to Moonflower or Lucky Carrot in off-seasons.</span>
          </li>
          <li className="flex gap-2 text-sm text-[#BAC4D1]">
            <span className="text-[#00E676] shrink-0">▸</span>
            <span><strong>Use Double Harvest Boosts</strong> (from promo codes) on your highest-value crop right before harvest. One boost on a fully stacked Golden Wheat can yield 19,200 coins in a single harvest.</span>
          </li>
          <li className="flex gap-2 text-sm text-[#BAC4D1]">
            <span className="text-[#00E676] shrink-0">▸</span>
            <span><strong>Active vs AFK farming:</strong> If you play actively, prioritize short-cycle crops (Golden Wheat, Lucky Carrot). For AFK sessions, plant longer-cycle crops (Crystal Berry, Moonflower) and check back less frequently.</span>
          </li>
        </ul>
      </section>

      {/* Internal Links */}
      <section aria-labelledby="related-heading">
        <h2
          id="related-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          🔗 Related Grow a Garden Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <Link
            href="/grow-a-garden/mutation-tier-list"
            className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676] group"
          >
            <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
              🌱 Mutation Tier List →
            </span>
            <p className="mt-1 text-xs text-[#768294]">Multiply your crop values with the best mutations</p>
          </Link>
          <Link
            href="/grow-a-garden/pet-tier-list"
            className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676] group"
          >
            <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
              🐣 Pet Tier List →
            </span>
            <p className="mt-1 text-xs text-[#768294]">Stack pet multipliers on your harvests</p>
          </Link>
          <Link
            href="/grow-a-garden/codes"
            className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676] group"
          >
            <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
              🎁 Active Codes →
            </span>
            <p className="mt-1 text-xs text-[#768294]">Get Double Harvest Boosts from promo codes</p>
          </Link>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
