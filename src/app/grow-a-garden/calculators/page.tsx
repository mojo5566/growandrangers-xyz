import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { crops } from "@/data/garden/database/crops";
import { mutations } from "@/data/garden/database/mutations";
import { trading } from "@/data/garden/database/trading";
import { pets } from "@/data/garden/database/pets";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Grow a Garden Calculators — Profit Tools",
  description:
    "Free Grow a Garden calculators: crop profit, mutation multipliers, trading values, and pet value rankings. All values sourced from canonical databases.",
  keywords: [
    "Grow a Garden calculator",
    "Grow a Garden profit calculator",
    "crop value calculator Grow a Garden",
    "mutation calculator Grow a Garden",
    "trading value calculator",
    "Grow a Garden coin estimator",
  ],
  alternates: { canonical: "/grow-a-garden/calculators" },
  openGraph: {
    title: "Grow a Garden Calculators — Profit Tools",
    description:
      "Free Grow a Garden calculators: crop profit, mutation multipliers, trading values, and pet value rankings.",
    type: "website",
  },
};

const calculatorCards = [
  {
    title: "Crop Value Calculator",
    description:
      "Pre-calculated profit table for every crop × every mutation. See base value, mutation bonus, and total value at a glance.",
    href: "/grow-a-garden/crop-value-calculator",
    icon: "🌾",
    accent: "#00E676",
    stat: `${crops.length} crops × ${mutations.length} mutations`,
  },
  {
    title: "Mutation Profit Calculator",
    description:
      "Compare mutation profit on every crop. See multiplier, estimated value, and profit comparison vs baseline harvest.",
    href: "/grow-a-garden/mutation-calculator",
    icon: "✨",
    accent: "#FF8C00",
    stat: `${mutations.length} mutations ranked`,
  },
  {
    title: "Trading Value Calculator",
    description:
      "Compare tradeable item values by category, rarity, demand, and trend. Verified market values for every item.",
    href: "/grow-a-garden/trading-calculator",
    icon: "💱",
    accent: "#FFD700",
    stat: `${trading.length} tradeable items`,
  },
  {
    title: "Pet Value Calculator",
    description:
      "Pet multiplier × trade value ranking — see each pet's coin multiplier, tier, rarity, demand, trend, and market price.",
    href: "/grow-a-garden/pet-value-calculator",
    icon: "🐾",
    accent: "#3A86FF",
    stat: `${pets.length} pets ranked`,
  },
];

const faqs = [
  {
    question: "How do Grow a Garden calculators work?",
    answer:
      "Each calculator pre-computes profit and value scenarios from our canonical crop, mutation, pet, and trading databases. The crop calculator multiplies base coin value × mutation multiplier. The mutation calculator ranks mutations by total yield. The trading calculator sorts items by market value, rarity, demand, and trend.",
  },
  {
    question: "Are Grow a Garden calculator values accurate?",
    answer:
      "Yes. All values are pulled directly from our canonical databases, which are verified against in-game data and updated regularly. The crop base values, mutation multipliers, and trading market values reflect the July 2026 game state.",
  },
  {
    question: "Do pet multipliers stack with mutation multipliers?",
    answer:
      "Yes, pet and mutation multipliers stack multiplicatively. To estimate the full stacked value, multiply the calculator result by your pet's multiplier. For example, a 1,920 coin crop result with a Golden Phoenix Chick (5.0×) pet would sell for 9,600 coins.",
  },
  {
    question: "Which calculator should I use first?",
    answer:
      "Start with the Crop Value Calculator to understand base profit per crop. Then use the Mutation Profit Calculator to see which mutations multiply your chosen crop best. Finally, check the Trading Value Calculator to see if your harvest is worth more sold directly or traded to other players.",
  },
  {
    question: "Why are some crops worth more than others at the same tier?",
    answer:
      "Crop value depends on three factors: base coin value, growth time (which determines coins-per-minute), and mutation compatibility. An S-Tier crop like Golden Wheat has high base value (480 coins) AND fast growth (3 min) for a CPM of 160 — the highest in the game. Seasonal bonuses (+20%) further boost in-season crops.",
  },
  {
    question: "How often are calculator values updated?",
    answer:
      "Calculator values update whenever the underlying canonical databases are updated. We refresh trading values regularly to reflect market shifts, and crop/mutation/pet values whenever game patches change base stats. Check the 'Last Updated' badge on each calculator page for the latest refresh date.",
  },
];

export default function CalculatorsHubPage() {
  return (
    <ContentLayout
      title="Grow a Garden Calculators"
      description="Free Grow a Garden calculators: crop profit, mutation multipliers, trading values, and pet value rankings. All values sourced from canonical databases — no sign-up required."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Calculators", href: "/grow-a-garden/calculators" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/calculators"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Hero Intro */}
      <section className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          Plan your farm with precision. Our Grow a Garden calculators pre-compute profit scenarios
          across every crop, mutation, and tradeable item using canonical database values. Pick a
          calculator below to see exact coin values, multipliers, and trade comparisons — no inputs
          required, all data rendered at build time for instant load.
        </p>
      </section>

      {/* Calculator Cards */}
      <section aria-labelledby="calc-heading">
        <h2
          id="calc-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🧮 Choose a Calculator
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {calculatorCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-xl border border-[#252936] bg-[#14161D] p-5 transition hover:border-[#00E676]"
              style={{ borderColor: "transparent" }}
            >
              <div
                className="flex items-center gap-3 mb-3 pb-3 border-b"
                style={{ borderColor: card.accent + "33" }}
              >
                <span className="text-2xl" aria-hidden>
                  {card.icon}
                </span>
                <div className="flex-1">
                  <h3
                    className="text-base font-semibold transition group-hover:text-[#00E676]"
                    style={{ color: card.accent }}
                  >
                    {card.title} →
                  </h3>
                  <span className="code-text text-xs" style={{ color: card.accent }}>
                    {card.stat}
                  </span>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-[#768294]">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* How Calculators Work */}
      <section aria-labelledby="how-heading">
        <h2
          id="how-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⚙️ How Calculators Work
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">1. Source Data</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              All values come from our canonical databases — crops, mutations, pets, and trading
              items. Single source of truth across every page.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">2. Pre-Compute</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Calculations run at build time. Every crop × mutation pair, every trading value
              comparison — all rendered as static HTML for instant load.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">3. Stack Multipliers</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Total = base × mutation × pet. Crop value calculator shows the full stacking breakdown
              so you can plan your optimal farm build.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">4. Verify Trade Value</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Cross-reference with the trading calculator to decide: sell harvest for coins, or trade
              the item to other players for premium value.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section aria-labelledby="stats-heading">
        <h2
          id="stats-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📊 Database Coverage
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4 text-center">
            <div className="text-2xl font-bold text-[#00E676]">{crops.length}</div>
            <div className="text-xs text-[#768294] mt-1">Crops Analyzed</div>
          </div>
          <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-4 text-center">
            <div className="text-2xl font-bold text-[#FF8C00]">{mutations.length}</div>
            <div className="text-xs text-[#768294] mt-1">Mutations Ranked</div>
          </div>
          <div className="rounded-xl border border-[#3A86FF]/30 bg-[#14161D] p-4 text-center">
            <div className="text-2xl font-bold text-[#3A86FF]">{pets.length}</div>
            <div className="text-xs text-[#768294] mt-1">Pets Tracked</div>
          </div>
          <div className="rounded-xl border border-[#FFD700]/30 bg-[#14161D] p-4 text-center">
            <div className="text-2xl font-bold text-[#FFD700]">{trading.length}</div>
            <div className="text-xs text-[#768294] mt-1">Tradeable Items</div>
          </div>
        </div>
      </section>

      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/calculators" />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
