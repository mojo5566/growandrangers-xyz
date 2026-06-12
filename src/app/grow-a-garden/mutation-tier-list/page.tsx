import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import TierTable from "@/components/TierTable";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grow a Garden Mutation Tier List (V2.1) — All Mutations Ranked | BloxPulse",
  description:
    "Every Grow a Garden mutation ranked from S-Tier to C-Tier. Crop value multipliers, seasonal bonuses, pet synergies, and mutation rolling strategy. Updated June 2026.",
  keywords: [
    "Grow a Garden mutation tier list",
    "Grow a Garden best mutations",
    "Grow a Garden mutation ranking",
    "mutation tier list 2026",
    "Grow a Garden S-tier",
  ],
  openGraph: {
    title: "Grow a Garden Mutation Tier List (V2.1)",
    description:
      "Every mutation ranked S to C. Crop multipliers, seasonal bonuses, pet synergies, rolling strategy.",
    type: "website",
  },
};

const sTier = [
  {
    name: "Golden Bloom Mutation",
    tier: "S",
    description: "4.0x crop value, all-season harvest",
  },
  {
    name: "Crystal Vine Mutation",
    tier: "S",
    description: "3.5x value, auto-water passive",
  },
  {
    name: "Bunny Mutation (Tier-5)",
    tier: "S",
    description: "3.8x value, exclusive pet synergy",
  },
];

const aTier = [
  {
    name: "Neon Spore Mutation",
    tier: "A",
    description: "3.0x value, night growth bonus",
  },
  {
    name: "Obsidian Root Mutation",
    tier: "A",
    description: "2.8x value, pest immunity",
  },
  {
    name: "Eclipse Petal Mutation",
    tier: "A",
    description: "2.7x value, eclipse event boost",
  },
];

const bTier = [
  {
    name: "Plasma Fruit Mutation",
    tier: "B",
    description: "2.2x value, faster harvest speed",
  },
  {
    name: "Frost Petal Mutation",
    tier: "B",
    description: "2.0x value, winter-exclusive crops",
  },
  {
    name: "Magma Seed Mutation",
    tier: "B",
    description: "1.8x value, summer-exclusive crops",
  },
  {
    name: "Aqua Bloom Mutation",
    tier: "B",
    description: "1.7x value, rain-fed double yield",
  },
];

const cTier = [
  {
    name: "Shadow Thorn Mutation",
    tier: "C",
    description: "1.4x value, night-only bonus",
  },
  {
    name: "Bamboo Sprout Mutation",
    tier: "C",
    description: "1.2x value, stacking growth speed",
  },
  {
    name: "Wild Grass Mutation",
    tier: "C",
    description: "1.0x value, basic mutation",
  },
  {
    name: "Rustic Bloom Mutation",
    tier: "C",
    description: "0.8x value, cosmetic-only bonus",
  },
];

const allMutations = [...sTier, ...aTier, ...bTier, ...cTier];

const faqs = [
  {
    question: "What is the best mutation in Grow a Garden?",
    answer:
      "Golden Bloom Mutation (S-Tier) is the best overall due to its unmatched 4.0x crop value multiplier and all-season harvest capability. Crystal Vine is the runner-up — its auto-water passive saves significant manual time each harvest cycle.",
  },
  {
    question: "How do I unlock higher-tier mutations?",
    answer:
      "Spend Mutation Shards at the Mutation Station in the Lab building. Higher-tier mutations have lower roll odds: S-Tier has a 2% base rate, A-Tier 8%, B-Tier 25%, C-Tier 65%. Stockpile 50+ shards and roll during mutation-boosted events for best results.",
  },
  {
    question: "What makes the Bunny Mutation special?",
    answer:
      "The Bunny Mutation was introduced in the April 2026 Easter event as a limited tier-5 mutation. It offers a 3.8x multiplier and uniquely buffs any equipped rabbit-type pet by an additional +15% — making it the best-in-slot choice for players with a Lucky Clover Bunny.",
  },
  {
    question: "Do mutation bonuses stack with pet bonuses?",
    answer:
      "Yes — mutation multipliers and pet multipliers stack multiplicatively. For example, Golden Bloom (4.0x) paired with Golden Phoenix Chick (5.0x) yields a 20x total crop value bonus. This is the core of endgame farming optimization.",
  },
  {
    question: "Can I change a mutation once it's applied to a crop?",
    answer:
      "Yes, you can overwrite an existing mutation by applying a new one at the Mutation Station. The previous mutation is permanently lost, so always apply your best mutation last. There is no refund or shard recovery for replaced mutations.",
  },
];

export default function MutationTierListPage() {
  return (
    <ContentLayout
      title="Grow a Garden Mutation Tier List (V2.1) — All Mutations Ranked"
      description="Every Grow a Garden mutation ranked from S-Tier to C-Tier based on crop value multiplier, seasonal bonuses, passive abilities, and pet synergy. Find the best mutation for your farming strategy."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden Mutation Tier List", href: "/grow-a-garden/mutation-tier-list" },
      ]}
      canonicalPath="/grow-a-garden/mutation-tier-list" accent="garden"
    >
      {/* Tier Explanation */}
      <section aria-labelledby="tiers-heading">
        <h2
          id="tiers-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          📊 Tier Ranking System
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { tier: "S", color: "#FF3D00", label: "Meta-defining", desc: "Best-in-slot; highest multipliers" },
            { tier: "A", color: "#FF8C00", label: "Excellent", desc: "Strong alternatives; great value" },
            { tier: "B", color: "#FFD700", label: "Solid", desc: "Viable options; situational strength" },
            { tier: "C", color: "#3A86FF", label: "Budget", desc: "Starter mutations; low investment" },
          ].map((t) => (
            <div key={t.tier} className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
              <span className="code-text text-lg" style={{ color: t.color }}>
                {t.tier}-Tier
              </span>
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
          🏆 S-Tier — Meta-Defining Mutations
        </h2>
        <p className="text-sm text-[#768294] mb-4">
          These mutations define the endgame farming meta. They offer the highest crop value
          multipliers alongside unique passive abilities that dramatically reduce manual effort or
          unlock exclusive synergies. Every serious farmer should target at least one S-Tier
          mutation for their main crop plot.
        </p>
        <TierTable rows={sTier} colHeaders={["MUTATION", "TIER", "EFFECT"]} />

        {/* Why S-Tier */}
        <div className="mt-4 space-y-3">
          {[
            {
              name: "Golden Bloom Mutation",
              why: "The undisputed king at 4.0x value with zero seasonal restrictions. You can plant it on any crop, any season, and it just works. No other mutation matches its combination of raw power and consistency.",
            },
            {
              name: "Crystal Vine Mutation",
              why: "While slightly lower at 3.5x, the auto-water passive eliminates the most tedious daily task. Over a week of farming, the time saved translates to more harvest cycles — effectively closing the gap with Golden Bloom.",
            },
            {
              name: "Bunny Mutation (Tier-5)",
              why: "Seasonal exclusivity and the unique rabbit-pet synergy push this into S-Tier despite a 3.8x base. When paired with Lucky Clover Bunny, the effective multiplier reaches 4.37x. If you have the rabbit pet, this is your best mutation.",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="rounded-lg border border-[#252936] bg-[#14161D] p-4"
            >
              <h3 className="text-sm font-semibold text-[#BAC4D1]">{item.name}</h3>
              <p className="mt-1 text-xs text-[#768294] leading-relaxed">
                <span className="text-[#FF3D00] font-semibold">Why S-Tier: </span>
                {item.why}
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
          ⭐ A-Tier — Excellent Mutations
        </h2>
        <p className="text-sm text-[#768294] mb-4">
          Strong, reliable mutations that fall just short of S-Tier due to situational conditions or
          slightly lower multipliers. They remain excellent investments and are much easier to roll
          than S-Tier mutations.
        </p>
        <TierTable rows={aTier} colHeaders={["MUTATION", "TIER", "EFFECT"]} />

        <div className="mt-4 space-y-3">
          {[
            {
              name: "Neon Spore Mutation",
              why: "3.0x multiplier with a night growth bonus that pushes effective value closer to 3.3x during night cycles. It only misses S-Tier because the bonus is time-gated — half your harvests won't benefit from the full multiplier.",
            },
            {
              name: "Obsidian Root Mutation",
              why: "Pest immunity is a powerful quality-of-life feature that prevents crop loss entirely. At 2.8x value it's slightly below the S-tier threshold, but if you've ever lost a crop to pests, you'll appreciate this mutation's reliability.",
            },
            {
              name: "Eclipse Petal Mutation",
              why: "An event-exclusive mutation that shines during eclipse cycles with its bonus activation. Outside of eclipse events it performs at a standard A-Tier level, which prevents it from reaching S-Tier consistency.",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="rounded-lg border border-[#252936] bg-[#14161D] p-4"
            >
              <h3 className="text-sm font-semibold text-[#BAC4D1]">{item.name}</h3>
              <p className="mt-1 text-xs text-[#768294] leading-relaxed">
                <span className="text-[#FF8C00] font-semibold">Why A-Tier: </span>
                {item.why}
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
          👍 B-Tier — Solid Mutations
        </h2>
        <p className="text-sm text-[#768294] mb-4">
          Viable mutations that perform well in specific scenarios. Great for mid-game farmers or as
          secondary plot mutations while you save shards for S/A-Tier rolls on your main plot.
        </p>
        <TierTable rows={bTier} colHeaders={["MUTATION", "TIER", "EFFECT"]} />

        <div className="mt-4 space-y-3">
          {[
            {
              name: "Plasma Fruit Mutation",
              why: "Faster harvest speed at 2.2x value makes this a solid choice for active farmers who harvest frequently. The speed bonus effectively increases your coins-per-hour, but the lower raw multiplier caps its ceiling in B-Tier.",
            },
            {
              name: "Frost Petal & Magma Seed",
              why: "These seasonal mutations hit A-Tier effectiveness during their respective winter and summer windows (+20% seasonal bonus). However, they drop to ~1.6x in off-seasons, dragging their overall ranking down to B-Tier.",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="rounded-lg border border-[#252936] bg-[#14161D] p-4"
            >
              <h3 className="text-sm font-semibold text-[#BAC4D1]">{item.name}</h3>
              <p className="mt-1 text-xs text-[#768294] leading-relaxed">
                <span className="text-[#FFD700] font-semibold">Why B-Tier: </span>
                {item.why}
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
          🌱 C-Tier — Budget Mutations
        </h2>
        <p className="text-sm text-[#768294] mb-4">
          Starter-tier mutations with minimal investment requirements. Fine for new players learning
          the mutation system, but they should be replaced as soon as you accumulate enough shards
          for a B-Tier or higher roll.
        </p>
        <TierTable rows={cTier} colHeaders={["MUTATION", "TIER", "EFFECT"]} />

        <div className="mt-4 space-y-3">
          {[
            {
              name: "Shadow Thorn & Bamboo Sprout",
              why: "These mutations serve their purpose as entry-level options. Shadow Thorn's night-only restriction caps its usefulness, while Bamboo Sprout's stacking bonus takes too long to ramp up for the modest 1.2x base. Upgrade as soon as possible.",
            },
            {
              name: "Wild Grass & Rustic Bloom",
              why: "Bottom-tier mutations. Wild Grass offers no bonus beyond the base 1.0x (effectively no mutation). Rustic Bloom is actually worse than having no mutation at 0.8x — it exists only for cosmetic collectors. Never invest shards into rolling for these intentionally.",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="rounded-lg border border-[#252936] bg-[#14161D] p-4"
            >
              <h3 className="text-sm font-semibold text-[#BAC4D1]">{item.name}</h3>
              <p className="mt-1 text-xs text-[#768294] leading-relaxed">
                <span className="text-[#3A86FF] font-semibold">Why C-Tier: </span>
                {item.why}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Full Table Summary */}
      <section aria-labelledby="full-table-heading">
        <h2
          id="full-table-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          📋 Complete Mutation Tier List Table
        </h2>
        <TierTable rows={allMutations} colHeaders={["MUTATION", "TIER", "EFFECT"]} />
      </section>

      {/* Rolling Strategy */}
      <section
        aria-labelledby="strategy-heading"
        className="rounded-xl border border-[#252936] bg-[#14161D] p-5"
      >
        <h2
          id="strategy-heading"
          className="font-heading text-[20px] font-semibold text-white mb-3"
        >
          🎯 Mutation Rolling Strategy
        </h2>
        <ul className="space-y-2">
          <li className="flex gap-2 text-sm text-[#BAC4D1]">
            <span className="text-[#00E676] shrink-0">▸</span>
            <span>
              Save at least <strong>50 Mutation Shards</strong> before rolling — single rolls have a 2%
              S-Tier rate, but rolling 10 at once during a boosted event raises effective odds
              significantly.
            </span>
          </li>
          <li className="flex gap-2 text-sm text-[#BAC4D1]">
            <span className="text-[#00E676] shrink-0">▸</span>
            <span>
              Time your rolls during <strong>mutation-boosted events</strong> (seasonal events
              typically feature +50% S/A-Tier odds). Check our Codes page for event-related shard
              drops.
            </span>
          </li>
          <li className="flex gap-2 text-sm text-[#BAC4D1]">
            <span className="text-[#00E676] shrink-0">▸</span>
            <span>
              Always apply your <strong>best mutation last</strong> — overwriting is permanent with no
              refund. Lock in a B-Tier placeholder while saving for S/A-Tier rolls.
            </span>
          </li>
          <li className="flex gap-2 text-sm text-[#BAC4D1]">
            <span className="text-[#00E676] shrink-0">▸</span>
            <span>
              Pair S-Tier mutations with <strong>high-tier pets</strong> for multiplicative stacking.
              A Golden Bloom (4.0x) + Golden Phoenix Chick (5.0x) = 20x total yield per harvest.
            </span>
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
            href="/grow-a-garden/codes"
            className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676] group"
          >
            <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
              🎁 Active Codes →
            </span>
            <p className="mt-1 text-xs text-[#768294]">
              Get free Mutation Shards from promo codes
            </p>
          </Link>
          <Link
            href="/grow-a-garden/pet-tier-list"
            className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676] group"
          >
            <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
              🐣 Pet Tier List →
            </span>
            <p className="mt-1 text-xs text-[#768294]">
              Stack pet multipliers with your mutations
            </p>
          </Link>
          <Link
            href="/grow-a-garden/crop-value-list"
            className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676] group"
          >
            <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
              💰 Crop Value List →
            </span>
            <p className="mt-1 text-xs text-[#768294]">
              See how much each mutation boosts your profit
            </p>
          </Link>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
