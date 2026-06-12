import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import TierTable from "@/components/TierTable";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grow a Garden Mutation Tier List (V2.1) — Best Mutations Ranked | BloxPulse",
  description:
    "Complete Grow a Garden mutation tier list ranking every mutation from S-Tier to D-Tier. Crop value multipliers, pet synergies, and rarity breakdowns for June 2026.",
};

const mutationTiers = [
  { name: "Golden Bloom Mutation", tier: "S", description: "4.0x crop value, all-season harvest" },
  { name: "Crystal Vine Mutation", tier: "S", description: "3.5x value, auto-water passive" },
  { name: "Neon Spore Mutation", tier: "A", description: "3.0x value, night growth bonus" },
  { name: "Obsidian Root Mutation", tier: "A", description: "2.8x value, pest immunity" },
  { name: "Plasma Fruit Mutation", tier: "B", description: "2.2x value, faster harvest speed" },
  { name: "Frost Petal Mutation", tier: "B", description: "2.0x value, winter-exclusive crops" },
  { name: "Magma Seed Mutation", tier: "B", description: "1.8x value, summer-exclusive crops" },
  { name: "Shadow Thorn Mutation", tier: "C", description: "1.4x value, night-only bonus" },
  { name: "Bamboo Sprout Mutation", tier: "C", description: "1.2x value, stacking growth speed" },
  { name: "Wild Grass Mutation", tier: "D", description: "1.0x value, basic mutation" },
];

const faqs = [
  {
    question: "What is the best mutation in Grow a Garden right now?",
    answer: "The Golden Bloom Mutation (S-Tier) is currently the best due to its 4.0x crop value multiplier and all-season harvest ability. Crystal Vine is a close second with its auto-water passive saving significant time.",
  },
  {
    question: "How do I get higher-tier mutations?",
    answer: "Use Mutation Shards obtained from redeeming codes, completing world events, and trading. Higher-tier mutations have lower roll odds, so it is recommended to stockpile shards before rolling during mutation-boosted events.",
  },
  {
    question: "What is the Bunny Mutation mentioned in the Easter update?",
    answer: "The tier-5 Bunny Mutation was introduced in the April 2026 Easter event. It is a limited seasonal mutation with unique pet synergy bonuses. Check our codes page for any remaining Easter-related codes.",
  },
];

export default function MutationTierListPage() {
  return (
    <ContentLayout
      title="Grow a Garden Mutation Tier List (V2.1)"
      description="Every mutation ranked from S-Tier to D-Tier based on crop value multiplier, seasonal availability, pet synergy, and passive abilities. Updated for June 2026."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden Mutation Tier List", href: "/garden/mutation-tier-list" },
      ]}
      canonicalPath="/grow-a-garden/mutation-tier-list" accent="garden"
    >
      {/* Tier Explanation */}
      <section aria-labelledby="tier-guide">
        <h2 id="tier-guide" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          📊 Tier Ranking System
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
          {[
            { tier: "S", label: "Meta-defining" },
            { tier: "A", label: "Excellent" },
            { tier: "B", label: "Solid choice" },
            { tier: "C", label: "Situational" },
            { tier: "D", label: "Budget only" },
          ].map((t) => (
            <div key={t.tier} className="rounded-lg border border-[#252936] bg-[#14161D] p-3 text-center">
              <span className="code-text text-lg" style={{ color: tierColors(t.tier) }}>{t.tier}</span>
              <p className="mt-1 text-xs text-[#768294]">{t.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tier Table */}
      <section aria-labelledby="tier-table">
        <h2 id="tier-table" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          🌱 Complete Mutation Rankings
        </h2>
        <TierTable
          rows={mutationTiers}
          colHeaders={["MUTATION", "TIER", "EFFECT"]}
        />
      </section>

      {/* Mutation Strategy */}
      <section aria-labelledby="strategy" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="strategy" className="font-heading text-[20px] font-semibold text-white mb-3">
          🎯 Mutation Rolling Strategy
        </h2>
        <ul className="space-y-2">
          <li className="flex gap-2 text-sm text-[#BAC4D1]">
            <span className="text-[#00E676]">▸</span>
            <span>Stockpile at least <strong>50 Mutation Shards</strong> before rolling — single rolls have poor odds for S/A-tier.</span>
          </li>
          <li className="flex gap-2 text-sm text-[#BAC4D1]">
            <span className="text-[#00E676]">▸</span>
            <span>Roll during <strong>mutation-boosted events</strong> (seasonal events typically feature +50% S-tier odds).</span>
          </li>
          <li className="flex gap-2 text-sm text-[#BAC4D1]">
            <span className="text-[#00E676]">▸</span>
            <span>Pair S-tier mutations with <strong>high-tier pets</strong> from our Pet Tier List for multiplicative value bonuses.</span>
          </li>
        </ul>
      </section>

      {/* Related Links */}
      <section aria-labelledby="related">
        <h2 id="related" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          🔗 Related Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/garden/codes" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676]">
            <span className="text-sm font-semibold text-[#BAC4D1]">🎁 Active Codes →</span>
            <p className="mt-1 text-xs text-[#768294]">Get free Mutation Shards from working promo codes</p>
          </Link>
          <Link href="/garden/pet-tier-list" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676]">
            <span className="text-sm font-semibold text-[#BAC4D1]">🐣 Pet Tier List →</span>
            <p className="mt-1 text-xs text-[#768294]">Best pets for maximizing your mutation bonuses</p>
          </Link>
          <Link href="/garden/crop-values" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676]">
            <span className="text-sm font-semibold text-[#BAC4D1]">💰 Crop Value List →</span>
            <p className="mt-1 text-xs text-[#768294]">Calculate your profit with each mutation tier</p>
          </Link>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}

function tierColors(tier: string): string {
  const map: Record<string, string> = { S: "#FF3D00", A: "#FF8C00", B: "#FFD700", C: "#3A86FF", D: "#768294" };
  return map[tier] || "#768294";
}
