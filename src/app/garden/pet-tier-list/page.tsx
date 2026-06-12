import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import TierTable from "@/components/TierTable";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grow a Garden Pet Tier List (2026) — Best Pets Ranked | BloxPulse",
  description:
    "Complete Grow a Garden pet tier list ranking all hatchable pets by rarity, crop multiplier, growth boost, and hatching odds. Find the best pet for your farm strategy.",
};

const petTiers = [
  { name: "Golden Phoenix Chick", tier: "S", description: "5.0x crop multiplier, auto-collect" },
  { name: "Crystal Unicorn Foal", tier: "S", description: "4.5x value, double harvest chance" },
  { name: "Neon Dragon Hatchling", tier: "A", description: "3.5x multiplier, fire-proof crops" },
  { name: "Celestial Fox Kit", tier: "A", description: "3.0x value, night growth boost" },
  { name: "Lucky Clover Bunny", tier: "B", description: "2.5x multiplier, bonus seed drops" },
  { name: "Frost Wolf Pup", tier: "B", description: "2.2x value, winter crop specialist" },
  { name: "Magma Lizard Hatchling", tier: "C", description: "1.8x multiplier, summer crop specialist" },
  { name: "Bamboo Panda Cub", tier: "C", description: "1.5x value, stacking growth speed" },
  { name: "Common Garden Cat", tier: "D", description: "1.0x multiplier, basic companion" },
];

const faqs = [
  {
    question: "Which pet gives the highest crop value multiplier?",
    answer: "The Golden Phoenix Chick (S-Tier) provides the highest multiplier at 5.0x and also features auto-collect, making it the undisputed best pet for maximizing farm profit.",
  },
  {
    question: "How do I hatch rarer pets?",
    answer: "Higher-tier eggs cost more coins but have increased odds for A-tier and S-tier pets. Use Pet Growth Potions (obtainable from codes) to boost hatching odds during egg-opening sessions.",
  },
  {
    question: "Do pet bonuses stack with mutation bonuses?",
    answer: "Yes! Pet crop multipliers and mutation value multipliers stack multiplicatively. An S-tier pet (5.0x) with an S-tier mutation (4.0x) can yield up to 20x base crop value — this is the endgame farming strategy.",
  },
];

export default function PetTierListPage() {
  return (
    <ContentLayout
      title="Grow a Garden Pet Tier List — Best Hatchable Pets Ranked"
      description="Every hatchable pet ranked from S-Tier to D-Tier based on crop multiplier, special abilities, seasonal bonuses, and hatching odds. Find your ideal farm companion."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden Pet Tier List", href: "/garden/pet-tier-list" },
      ]}
      canonicalPath="/grow-a-garden/pet-tier-list" accent="garden"
    >
      <section aria-labelledby="pet-rankings">
        <h2 id="pet-rankings" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          🐣 Complete Pet Rankings
        </h2>
        <TierTable
          rows={petTiers}
          colHeaders={["PET", "TIER", "ABILITY"]}
        />
      </section>

      {/* Synergy Section */}
      <section aria-labelledby="synergy" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="synergy" className="font-heading text-[20px] font-semibold text-white mb-3">
          🔄 Pet & Mutation Synergy Guide
        </h2>
        <p className="text-sm text-[#BAC4D1] mb-3">
          The most profitable farming setups combine high-tier pets with high-tier mutations. Multipliers stack multiplicatively:
        </p>
        <div className="overflow-hidden rounded-lg border border-[#252936]">
          <div className="grid grid-cols-3 gap-2 bg-[#1E212B] px-3 py-2 text-xs text-[#768294] code-text">
            <span>PET TIER</span><span>MUTATION TIER</span><span>TOTAL MULTIPLIER</span>
          </div>
          {[["S (5.0x)","S (4.0x)","20.0x"],["S (5.0x)","A (3.0x)","15.0x"],["A (3.5x)","S (4.0x)","14.0x"],["A (3.5x)","A (3.0x)","10.5x"]].map((r,i) => (
            <div key={i} className="grid grid-cols-3 gap-2 border-t border-[#252936] px-3 py-2">
              <span className="text-xs text-[#BAC4D1]">{r[0]}</span>
              <span className="text-xs text-[#BAC4D1]">{r[1]}</span>
              <span className="text-xs font-bold text-[#00E676]">{r[2]}</span>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="related">
        <h2 id="related" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          🔗 Related Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/garden/mutation-tier-list" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676]">
            <span className="text-sm font-semibold text-[#BAC4D1]">🌱 Mutation Tier List →</span>
            <p className="mt-1 text-xs text-[#768294]">Pair your pet with the best mutation</p>
          </Link>
          <Link href="/garden/codes" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676]">
            <span className="text-sm font-semibold text-[#BAC4D1]">🎁 Active Codes →</span>
            <p className="mt-1 text-xs text-[#768294]">Get Pet Growth Potions from promo codes</p>
          </Link>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
