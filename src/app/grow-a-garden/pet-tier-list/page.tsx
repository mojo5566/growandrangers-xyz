import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import TierTable from "@/components/TierTable";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grow a Garden Pet Tier List (2026) — Best Pets Ranked | BloxPulse",
  description:
    "Every Grow a Garden pet ranked from S-Tier to C-Tier. Crop multipliers, special abilities, hatching odds, and pet-mutation synergy combos. Find your ideal farm companion.",
  keywords: [
    "Grow a Garden pet tier list",
    "Grow a Garden best pets",
    "pet hatching guide",
    "best pet Grow a Garden 2026",
    "crop multiplier pet",
  ],
  openGraph: {
    title: "Grow a Garden Pet Tier List (2026)",
    description:
      "All hatchable pets ranked S to C. Crop multipliers, abilities, hatching odds, and synergy combos.",
    type: "website",
  },
};

const sTier = [
  { name: "Golden Phoenix Chick", tier: "S", description: "5.0x crop multiplier, auto-collect" },
  { name: "Crystal Unicorn Foal", tier: "S", description: "4.5x value, double harvest chance" },
];

const aTier = [
  { name: "Neon Dragon Hatchling", tier: "A", description: "3.5x multiplier, fire-proof crops" },
  { name: "Celestial Fox Kit", tier: "A", description: "3.0x value, night growth boost" },
  { name: "Lucky Clover Bunny", tier: "A", description: "3.2x multiplier, Bunny Mutation synergy" },
];

const bTier = [
  { name: "Frost Wolf Pup", tier: "B", description: "2.2x value, winter crop specialist" },
  { name: "Magma Lizard Hatchling", tier: "B", description: "2.0x multiplier, summer crop specialist" },
  { name: "Aqua Otter Kit", tier: "B", description: "1.9x value, auto-water adjacent plots" },
  { name: "Thunder Hawk Chick", tier: "B", description: "1.8x multiplier, faster flight harvest" },
];

const cTier = [
  { name: "Bamboo Panda Cub", tier: "C", description: "1.5x value, stacking growth speed" },
  { name: "Common Garden Cat", tier: "C", description: "1.0x multiplier, basic companion" },
  { name: "Dust Bunny", tier: "C", description: "1.0x value, cosmetic dust trail" },
];

const allPets = [...sTier, ...aTier, ...bTier, ...cTier];

const synergyRows = [
  ["Golden Phoenix Chick (5.0x)", "Golden Bloom (4.0x)", "20.0x"],
  ["Crystal Unicorn Foal (4.5x)", "Golden Bloom (4.0x)", "18.0x"],
  ["Lucky Clover Bunny (3.2x)", "Bunny T5 (3.8x +15%)", "14.0x"],
  ["Neon Dragon Hatchling (3.5x)", "Crystal Vine (3.5x)", "12.3x"],
  ["Celestial Fox Kit (3.0x)", "Neon Spore (3.0x)", "9.0x"],
];

const faqs = [
  {
    question: "Which pet gives the highest crop value multiplier?",
    answer:
      "Golden Phoenix Chick (S-Tier) delivers the highest multiplier at 5.0x with auto-collect. Crystal Unicorn Foal is a close second at 4.5x with a double-harvest chance that can situationally outperform the Phoenix on short-growth crops.",
  },
  {
    question: "How do I hatch higher-tier pets?",
    answer:
      "Purchase eggs from the Pet Shop using Coins. Higher-tier eggs (Golden, Crystal) cost more but have significantly better odds for S-Tier and A-Tier pets. Stack Pet Growth Potions (up to 5) before opening premium eggs to boost your odds by 75%.",
  },
  {
    question: "Is Lucky Clover Bunny worth using without the Bunny Mutation?",
    answer:
      "At base 3.2x without the Bunny Mutation synergy, Lucky Clover Bunny is a solid A-Tier pet. However, its true value unlocks with the Bunny Mutation (+15% bonus) — pushing effective multiplier to ~3.68x. If you missed the Easter event, the bunny is still A-Tier but not S-Tier.",
  },
  {
    question: "Do seasonal pets work outside their season?",
    answer:
      "Yes, but at reduced effectiveness. Frost Wolf Pup drops from 2.2x to ~1.5x outside of Winter, and Magma Lizard Hatchling drops similarly outside Summer. If you play year-round, invest in all-season pets like the Phoenix or Unicorn instead.",
  },
  {
    question: "Can I have multiple pets active at once?",
    answer:
      "You can equip one pet at a time. However, you can swap pets freely between harvests — use a high-multiplier pet for harvesting high-value crops, then switch to a utility pet (like Aqua Otter) for maintenance tasks. There is no cooldown on pet swapping.",
  },
];

export default function PetTierListPage() {
  return (
    <ContentLayout
      title="Grow a Garden Pet Tier List — All Hatchable Pets Ranked (2026)"
      description="Every Grow a Garden pet ranked from S-Tier to C-Tier based on crop value multiplier, special abilities, seasonal bonuses, hatching odds, and mutation synergy. Build your perfect farm team."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden Pet Tier List", href: "/grow-a-garden/pet-tier-list" },
      ]}
      canonicalPath="/grow-a-garden/pet-tier-list" accent="garden"
    >
      {/* Tier Explanation */}
      <section aria-labelledby="tiers-heading">
        <h2
          id="tiers-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          📊 Pet Tier Ranking System
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { tier: "S", color: "#FF3D00", label: "Best-in-slot", desc: "Highest multipliers; must-have pets" },
            { tier: "A", color: "#FF8C00", label: "Excellent", desc: "Strong alternatives; great synergy" },
            { tier: "B", color: "#FFD700", label: "Solid", desc: "Viable seasonal or utility picks" },
            { tier: "C", color: "#3A86FF", label: "Budget", desc: "Starter pets; low investment" },
          ].map((t) => (
            <div key={t.tier} className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
              <span className="code-text text-lg" style={{ color: t.color }}>{t.tier}-Tier</span>
              <p className="mt-1 text-sm font-semibold text-white">{t.label}</p>
              <p className="mt-1 text-xs text-[#768294]">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* S-Tier */}
      <section aria-labelledby="s-tier-heading">
        <h2
          id="s-tier-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-2"
          style={{ color: "#FF3D00" }}
        >
          🏆 S-Tier — Best-in-Slot Pets
        </h2>
        <p className="text-sm text-[#768294] mb-4">
          The undisputed best pets in Grow a Garden. These companions offer unmatched crop
          multipliers and game-changing passive abilities. Any serious farmer should prioritize
          hatching one of these.
        </p>
        <TierTable rows={sTier} colHeaders={["PET", "TIER", "ABILITY"]} />

        <div className="mt-4 space-y-3">
          {[
            {
              name: "Golden Phoenix Chick",
              why: "5.0x multiplier plus auto-collect makes this the single best pet in the game. Auto-collect eliminates manual harvesting time, effectively increasing your coins-per-hour beyond what the multiplier alone suggests. If you only hatch one premium egg, pray for this.",
            },
            {
              name: "Crystal Unicorn Foal",
              why: "At 4.5x with a double-harvest proc chance, this pet can actually exceed the Phoenix on fast-growing crops (under 2 minutes). The RNG nature of double-harvest means it is slightly less consistent, but the ceiling is higher on short-cycle farms.",
            },
          ].map((item) => (
            <div key={item.name} className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
              <h3 className="text-sm font-semibold text-[#BAC4D1]">{item.name}</h3>
              <p className="mt-1 text-xs text-[#768294] leading-relaxed">
                <span className="text-[#FF3D00] font-semibold">Why S-Tier: </span>{item.why}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* A-Tier */}
      <section aria-labelledby="a-tier-heading">
        <h2
          id="a-tier-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-2"
          style={{ color: "#FF8C00" }}
        >
          ⭐ A-Tier — Excellent Pets
        </h2>
        <p className="text-sm text-[#768294] mb-4">
          Strong pets that are either slightly below S-Tier in raw power or require specific
          conditions to reach their full potential. Much easier to hatch than S-Tier and still
          highly effective.
        </p>
        <TierTable rows={aTier} colHeaders={["PET", "TIER", "ABILITY"]} />

        <div className="mt-4 space-y-3">
          {[
            {
              name: "Neon Dragon Hatchling",
              why: "3.5x with fire-proof crops is excellent, but fire damage is a relatively rare threat. In most farming scenarios, the fire-proof passive goes unused — meaning you are effectively paying premium egg costs for a 3.5x pet with a situational ability.",
            },
            {
              name: "Celestial Fox Kit",
              why: "3.0x with night growth boost that can push effective value to 3.3x during night cycles. Strong and reliable, but the time-gated bonus and lower base multiplier keep it out of S-Tier. Excellent choice for players who farm during night hours.",
            },
            {
              name: "Lucky Clover Bunny",
              why: "3.2x base with the unique Bunny Mutation synergy (+15%). When paired with the Easter Bunny Mutation, effective value hits ~3.68x — flirting with S-Tier territory. Without the mutation, it is a standard A-Tier pet. Worth using if you have the mutation.",
            },
          ].map((item) => (
            <div key={item.name} className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
              <h3 className="text-sm font-semibold text-[#BAC4D1]">{item.name}</h3>
              <p className="mt-1 text-xs text-[#768294] leading-relaxed">
                <span className="text-[#FF8C00] font-semibold">Why A-Tier: </span>{item.why}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* B-Tier */}
      <section aria-labelledby="b-tier-heading">
        <h2
          id="b-tier-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-2"
          style={{ color: "#FFD700" }}
        >
          👍 B-Tier — Solid Utility Pets
        </h2>
        <p className="text-sm text-[#768294] mb-4">
          Good pets that excel in specific situations — seasonal farming, utility tasks, or
          budget-friendly setups. Worth hatching if you cannot afford premium eggs yet.
        </p>
        <TierTable rows={bTier} colHeaders={["PET", "TIER", "ABILITY"]} />

        <div className="mt-4 space-y-3">
          {[
            {
              name: "Frost Wolf Pup & Magma Lizard Hatchling",
              why: "Seasonal specialists that hit A-Tier effectiveness during their respective Winter and Summer windows (with the seasonal +20% bonus active). Off-season, their multipliers drop significantly. Useful if you focus on seasonal crop rotations, but avoid if you farm year-round.",
            },
            {
              name: "Aqua Otter Kit & Thunder Hawk Chick",
              why: "Utility-focused pets with situational value. Aqua Otter's auto-water for adjacent plots saves time on large farms. Thunder Hawk's flight harvest speed is nice but the 1.8x multiplier holds it back. Both are good secondary pets to swap in for specific tasks.",
            },
          ].map((item) => (
            <div key={item.name} className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
              <h3 className="text-sm font-semibold text-[#BAC4D1]">{item.name}</h3>
              <p className="mt-1 text-xs text-[#768294] leading-relaxed">
                <span className="text-[#FFD700] font-semibold">Why B-Tier: </span>{item.why}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* C-Tier */}
      <section aria-labelledby="c-tier-heading">
        <h2
          id="c-tier-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-2"
          style={{ color: "#3A86FF" }}
        >
          🌱 C-Tier — Starter & Cosmetic Pets
        </h2>
        <p className="text-sm text-[#768294] mb-4">
          Entry-level pets that new players start with or receive for free. They provide minimal
          farming benefits and should be replaced as soon as you can afford a B-Tier or higher egg.
        </p>
        <TierTable rows={cTier} colHeaders={["PET", "TIER", "ABILITY"]} />

        <div className="mt-4 space-y-3">
          {[
            {
              name: "Bamboo Panda Cub",
              why: "The best of the C-Tier at 1.5x with a stacking growth speed bonus. The bonus takes multiple harvest cycles to ramp up, and even at full stacks it cannot compete with B-Tier pets. A fine starter pet, but upgrade as soon as you can afford a Golden Egg.",
            },
            {
              name: "Common Garden Cat & Dust Bunny",
              why: "Bottom-tier companions. The Garden Cat's 1.0x multiplier effectively provides no bonus at all. The Dust Bunny is purely cosmetic with a visual dust trail. Neither is worth investing coins into — save your currency for higher-tier eggs.",
            },
          ].map((item) => (
            <div key={item.name} className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
              <h3 className="text-sm font-semibold text-[#BAC4D1]">{item.name}</h3>
              <p className="mt-1 text-xs text-[#768294] leading-relaxed">
                <span className="text-[#3A86FF] font-semibold">Why C-Tier: </span>{item.why}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Full Table */}
      <section aria-labelledby="full-table-heading">
        <h2
          id="full-table-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          📋 Complete Pet Tier List
        </h2>
        <TierTable rows={allPets} colHeaders={["PET", "TIER", "ABILITY"]} />
      </section>

      {/* Synergy Table */}
      <section aria-labelledby="synergy-heading">
        <h2
          id="synergy-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          🔄 Pet + Mutation Synergy Multipliers
        </h2>
        <p className="text-sm text-[#768294] mb-4">
          Pet and mutation multipliers stack multiplicatively. Below are the most profitable pairings:
        </p>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-3 gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="code-text text-[#768294]">PET</span>
            <span className="code-text text-[#768294]">MUTATION</span>
            <span className="code-text text-[#768294]">TOTAL</span>
          </div>
          {synergyRows.map((r, i) => (
            <div key={i} className="grid grid-cols-3 gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition">
              <span className="text-xs text-[#BAC4D1]">{r[0]}</span>
              <span className="text-xs text-[#BAC4D1]">{r[1]}</span>
              <span className="text-xs font-bold text-[#00E676]">{r[2]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Hatching Strategy */}
      <section
        aria-labelledby="strategy-heading"
        className="rounded-xl border border-[#252936] bg-[#14161D] p-5"
      >
        <h2
          id="strategy-heading"
          className="font-heading text-[20px] font-semibold text-white mb-3"
        >
          🥚 Pet Hatching Strategy
        </h2>
        <ul className="space-y-2">
          <li className="flex gap-2 text-sm text-[#BAC4D1]">
            <span className="text-[#00E676] shrink-0">▸</span>
            <span>Always stack <strong>5 Pet Growth Potions</strong> before opening Golden or Crystal eggs — this gives you a 75% boosted rate for S/A-Tier pets.</span>
          </li>
          <li className="flex gap-2 text-sm text-[#BAC4D1]">
            <span className="text-[#00E676] shrink-0">▸</span>
            <span>Buy <strong>Golden Eggs (50,000 Coins)</strong> for the best S-Tier odds (5% Golden Phoenix, 7% Crystal Unicorn). Crystal Eggs (35,000 Coins) have slightly lower rates.</span>
          </li>
          <li className="flex gap-2 text-sm text-[#BAC4D1]">
            <span className="text-[#00E676] shrink-0">▸</span>
            <span>Get free <strong>Pet Growth Potions</strong> from promo codes — check our Codes page regularly. Seasonal events often drop potions as login rewards.</span>
          </li>
          <li className="flex gap-2 text-sm text-[#BAC4D1]">
            <span className="text-[#00E676] shrink-0">▸</span>
            <span>Once you have an S-Tier pet, <strong>stop buying premium eggs</strong> and redirect Coins toward crop expansion and mutation shards. One S-Tier pet is enough for endgame farming.</span>
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
            <p className="mt-1 text-xs text-[#768294]">Pair the best mutations with your pets</p>
          </Link>
          <Link
            href="/grow-a-garden/codes"
            className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676] group"
          >
            <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
              🎁 Active Codes →
            </span>
            <p className="mt-1 text-xs text-[#768294]">Get free Pet Growth Potions from codes</p>
          </Link>
          <Link
            href="/grow-a-garden/crop-value-list"
            className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676] group"
          >
            <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
              💰 Crop Value List →
            </span>
            <p className="mt-1 text-xs text-[#768294]">Maximize profits with pet-boosted harvests</p>
          </Link>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
