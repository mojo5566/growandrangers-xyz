import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { crops } from "@/data/garden/database/crops";
import { pets } from "@/data/garden/database/pets";
import { mutations } from "@/data/garden/database/mutations";
import { trading, getHighDemandItems } from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Best Money Making Methods in Grow a Garden",
  description:
    "Side-by-side comparison of Grow a Garden money making methods: farming, mutations, pets, and trading. Includes pros, cons, coins/hour, and recommended progression path.",
  keywords: [
    "best money making Grow a Garden",
    "Grow a Garden money methods compared",
    "Grow a Garden farming vs trading",
    "Grow a Garden mutations vs pets",
    "Grow a Garden coins per hour",
    "Grow a Garden profit comparison",
  ],
  alternates: { canonical: "/grow-a-garden/best-money-making-methods" },
  openGraph: {
    title: "Best Money Making Methods in Grow a Garden",
    description:
      "Side-by-side comparison of farming, mutations, pets, and trading — coins/hour, pros, cons.",
    type: "website",
  },
};

function formatValue(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2).replace(/\.00$/, "")}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return value.toString();
}

// Reference data for each method
const topCrop = [...crops].sort((a, b) => b.coinsPerMinute - a.coinsPerMinute)[0];
const topMutation = [...mutations].sort((a, b) => b.multiplier - a.multiplier)[0];
const topPet = [...pets].sort((a, b) => b.multiplier - a.multiplier)[0];
const topTrading = [...trading].sort((a, b) => b.value - a.value)[0];

const methods = [
  {
    name: "Crop Farming",
    icon: "🌾",
    cph: "10K - 100K",
    startup: "Low (starter seeds free)",
    consistency: "Very High",
    skill: "Low",
    pros: [
      "Guaranteed income every harvest cycle",
      "Scales with plot count (1→4 plots = 4× income)",
      "No RNG — pure compounding reinvestment",
      "Beginner-friendly, immediate start",
    ],
    cons: [
      "Capped by crop CPM (max 160 CPM with Golden Wheat)",
      "Manual harvest time adds up at scale",
      "No exponential multipliers on its own",
    ],
    bestFor: "Foundation income for every player — start here, always keep running",
  },
  {
    name: "Mutation Farming",
    icon: "✨",
    cph: "50K - 1M+",
    startup: "Medium (50+ shards for bulk rolling)",
    consistency: "Medium (RNG-dependent)",
    skill: "Medium",
    pros: [
      "Multiplies crop value 1.2× to 6.0×",
      "Stacks multiplicatively with pet multipliers",
      "S-Tier mutations rival trading income",
      "Permanent once applied to a plot",
    ],
    cons: [
      "S-Tier roll rate is ~1.2% — bulk rolling required",
      "Mutation Shards are slow to accumulate",
      "Single-roll temptation wastes starter shards",
    ],
    bestFor: "Mid-game multiplier stacking — apply B-Tier+ to main plots ASAP",
  },
  {
    name: "Pet Multipliers",
    icon: "🐾",
    cph: "20K - 200K",
    startup: "Medium (500-10K coins per egg)",
    consistency: "High (permanent once hatched)",
    skill: "Low",
    pros: [
      "Permanent passive multiplier — forever",
      "Stacks with every other system",
      "Even C-Tier pets pay back in 5-6 cycles",
      "S-Tier pets (5.0×) multiply entire farm income",
    ],
    cons: [
      "S-Tier pets are ~5% drop from Legendary Eggs",
      "10K coins per Legendary Egg is steep early game",
      "Duplicate pets have no stacking benefit",
    ],
    bestFor: "Early game Basic Egg hatching → endgame Legendary Egg gambles",
  },
  {
    name: "Trade Hub Flipping",
    icon: "💱",
    cph: "50K - 500K+",
    startup: "High (need capital for inventory)",
    consistency: "Variable (market-dependent)",
    skill: "High",
    pros: [
      "5-10× profit margins on S-Tier items",
      "No farm required — pure market play",
      "Rising-trend items compound value while held",
      "Can scale infinitely with bigger bankroll",
    ],
    cons: [
      "Requires market knowledge to avoid bad trades",
      "Liquidity depends on demand (Low-demand items sit)",
      "Falling-trend items lose value while held",
      "New players often get scammed",
    ],
    bestFor: "Late-game wealth acceleration once you have 50K+ coins to invest",
  },
];

const faqs = [
  {
    question: "What is the best money making method in Grow a Garden?",
    answer:
      "There is no single best method — the optimal strategy stacks all four. Farm crops for reliable base income, apply mutations for multiplier scaling, hatch pets for permanent passive boosts, and use the Trade Hub to flip high-value items. A 4-plot farm with B-Tier mutations and a mid-tier pet reliably produces 100-200K coins/hour.",
  },
  {
    question: "Which money making method is best for beginners?",
    answer:
      "Crop farming is the foundation — start there with Wheat or Basic Potato to build capital. Add a Basic Egg pet (500 coins) within the first 30 minutes for a permanent multiplier, then apply your first mutation (even C-Tier at 1.2×) once the Mutation Station unlocks at 1,500 coins. Save Trade Hub engagement for after you understand item values — usually 5+ hours of progression, since new players routinely get scammed into trading S-Tier items for C-Tier cosmetics.",
  },
  {
    question: "How much can I make per hour with each method?",
    answer:
      "Per-hour ceilings with optimal gear stack like this: Farming alone produces 10-100K coins/hour. Adding mutations raises it to 50-200K. Adding pet multipliers on top reaches 100-300K. Layering Trade Hub flipping pushes total income to 200K-1M+ coins/hour. The multipliers compound, so adding each layer multiplies your total income rather than simply adding to it — that's why the optimal strategy stacks all four methods.",
  },
  {
    question: "Is trading worth the risk?",
    answer:
      "Yes, if you have 50K+ coins to invest and have studied the Trading Database first. S-Tier items often command a 5-10× premium over their base value, and rising-trend items gain value while held — making them strong hold-and-flip candidates. New players should avoid trading until they can confidently identify underpriced items, usually after 5+ hours of progression and familiarity with the Trading Values database.",
  },
  {
    question: "Should I prioritize mutations or pets first?",
    answer:
      "Get one pet online first (500-coin Basic Egg), then save shards for mutations. The reason is simple: a pet multiplier applies to your entire farm permanently and stacks with every harvest, while a mutation only boosts one plot. Once you have 2-3 pets equippable, funnel shards into mutations on your main plot — apply the first B-Tier (2.0×) roll to your highest-CPM crop for an instant income doubling.",
  },
  {
    question: "How do I scale past 100K coins per hour?",
    answer:
      "Three steps: (1) Get 4 plots running Golden Wheat or better, synchronized for batch harvesting. (2) Apply B-Tier or higher mutations to all 4 plots for a 2.0× multiplier on each. (3) Hatch a 3.0× or better pet to multiply every harvest permanently. At that point your base income is 100-200K/hour. Adding Trade Hub flipping on top pushes past 500K/hour during active play.",
  },
];

export default function BestMoneyMakingMethodsPage() {
  return (
    <ContentLayout
      title="Best Money Making Methods in Grow a Garden"
      description="Side-by-side comparison of Grow a Garden money making methods: farming, mutations, pets, and trading. Pros, cons, coins/hour, and recommended progression path."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Best Money Making Methods", href: "/grow-a-garden/best-money-making-methods" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-money-making-methods"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Money Making"
      keywords={[
        "best money making Grow a Garden",
        "Grow a Garden money methods compared",
        "Grow a Garden farming vs trading",
        "Grow a Garden mutations vs pets",
        "Grow a Garden coins per hour",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - AI search summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          There is no single best method — the optimal strategy stacks all four: crop farming
          (10-100K/hour), mutation farming (50K-1M/hour), pet multipliers (20-200K/hour), and Trade
          Hub flipping (50-500K+/hour). A 4-plot farm running Golden Wheat with B-Tier mutations and
          a mid-tier pet reliably produces 100-200K coins per hour. Add Trade Hub flipping once you
          have 50K+ coins bankrolled, and your income can push past 500K per hour during active
          play.
        </p>
      </section>

      {/* Intro */}
      <section className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          Four money making methods compete for your time in Grow a Garden: crop farming, mutation
          farming, pet multipliers, and trade hub flipping. This guide compares them side-by-side so
          you know exactly when to invest in each. The optimal strategy stacks all four — they
          multiply rather than compete. For a deeper strategy walkthrough, see our{" "}
          <Link href="/grow-a-garden/money-making-guide" className="text-[#00E676] hover:underline">
            Money Making Guide
          </Link>
          .
        </p>
      </section>

      {/* Comparison Table */}
      <section aria-labelledby="comparison-heading">
        <h2
          id="comparison-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📊 Method Comparison Table
        </h2>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[820px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">Method</th>
                <th className="py-3 px-3 font-semibold">Coins/Hour</th>
                <th className="py-3 px-3 font-semibold">Startup Cost</th>
                <th className="py-3 px-3 font-semibold">Consistency</th>
                <th className="py-3 px-3 font-semibold">Skill Floor</th>
                <th className="py-3 px-3 font-semibold">Best Example</th>
              </tr>
            </thead>
            <tbody>
              {methods.map((m) => (
                <tr key={m.name} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{m.icon}</span>
                      <span className="text-sm font-semibold text-white">{m.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-xs font-bold text-[#00E676]">{m.cph}</td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{m.startup}</td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{m.consistency}</td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{m.skill}</td>
                  <td className="py-3 px-3 text-xs text-[#768294]">
                    {m.name === "Crop Farming" && (
                      <Link href={`/grow-a-garden/crops/${topCrop.id}`} className="text-[#00E676] hover:underline">
                        {topCrop.name} ({topCrop.coinsPerMinute} CPM)
                      </Link>
                    )}
                    {m.name === "Mutation Farming" && (
                      <Link href={`/grow-a-garden/mutations/${topMutation.id}`} className="text-[#00E676] hover:underline">
                        {topMutation.name} ({topMutation.multiplier}×)
                      </Link>
                    )}
                    {m.name === "Pet Multipliers" && (
                      <Link href={`/grow-a-garden/pets/${topPet.id}`} className="text-[#00E676] hover:underline">
                        {topPet.name} ({topPet.multiplier}×)
                      </Link>
                    )}
                    {m.name === "Trade Hub Flipping" && (
                      <Link href={`/grow-a-garden/trading/${topTrading.id}`} className="text-[#00E676] hover:underline">
                        {topTrading.name} ({formatValue(topTrading.value)} 🪙)
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Method Cards */}
      <section aria-labelledby="details-heading">
        <h2
          id="details-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🔍 Method Deep-Dive
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {methods.map((m) => (
            <div
              key={m.name}
              className="rounded-xl border border-[#252936] bg-[#14161D] p-5"
            >
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-[#252936]">
                <span className="text-2xl">{m.icon}</span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{m.name}</h3>
                  <div className="text-xs text-[#00E676] font-bold">{m.cph} coins/hour</div>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-xs font-semibold text-[#00E676] mb-1">✓ Pros</div>
                  <ul className="space-y-1">
                    {m.pros.map((p, i) => (
                      <li key={i} className="text-xs text-[#BAC4D1] flex gap-1.5">
                        <span className="text-[#00E676] shrink-0">+</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#FF3D00] mb-1">✗ Cons</div>
                  <ul className="space-y-1">
                    {m.cons.map((c, i) => (
                      <li key={i} className="text-xs text-[#768294] flex gap-1.5">
                        <span className="text-[#FF3D00] shrink-0">−</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-2 border-t border-[#252936]">
                  <div className="text-xs text-[#768294]">
                    <strong className="text-[#BAC4D1]">Best for:</strong> {m.bestFor}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Progression */}
      <section aria-labelledby="progression-heading">
        <h2
          id="progression-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🗺️ Recommended Progression Order
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <ol className="space-y-3">
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00E676]/20 text-xs font-bold text-[#00E676]">
                1
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">Crop Farming Foundation (0-1 hour)</h3>
                <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                  Plant Wheat → upgrade to Carrot → expand to 4 plots. Target: 5,000 coins saved.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00E676]/20 text-xs font-bold text-[#00E676]">
                2
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">First Pet Online (1-2 hours)</h3>
                <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                  Hatch a 500-coin Basic Egg. Even C-Tier pets at 1.5× provide permanent income
                  boost. Bulk-hatch 2-3 Basic Eggs over time.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00E676]/20 text-xs font-bold text-[#00E676]">
                3
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">First Mutation Applied (2-3 hours)</h3>
                <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                  Save 50+ shards, bulk-roll for B-Tier mutation on main plot. B-Tier (2.0×)
                  doubles main plot income instantly.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00E676]/20 text-xs font-bold text-[#00E676]">
                4
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">All-Plot Mutations (3-8 hours)</h3>
                <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                  Apply B-Tier mutations to all 4 plots. Total farm income now 4× base × 2.0× × pet
                  multiplier.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00E676]/20 text-xs font-bold text-[#00E676]">
                5
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">Trade Hub Engagement (8+ hours)</h3>
                <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                  With 50K+ coins bankrolled, start flipping underpriced S-Tier items. Use the{" "}
                  <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">
                    Trading Database
                  </Link>{" "}
                  to identify rising-trend opportunities.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <RelatedContent
        category="guide"
        game="garden"
        currentPath="/grow-a-garden/best-money-making-methods"
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
