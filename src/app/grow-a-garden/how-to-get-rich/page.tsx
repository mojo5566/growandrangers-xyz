import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { crops } from "@/data/garden/database/crops";
import { pets } from "@/data/garden/database/pets";
import { mutations, getMutationsByTier } from "@/data/garden/database/mutations";
import { trading, getHighDemandItems, getTradingByTrend } from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "How to Get Rich in Grow a Garden",
  description:
    "Fastest coin methods in Grow a Garden: best crops, mutation farming, pet multipliers, and trading strategy. Step-by-step path from 0 to 1,000,000 coins.",
  keywords: [
    "how to get rich Grow a Garden",
    "Grow a Garden fast coins",
    "Grow a Garden million coins",
    "Grow a Garden money strategy",
    "Grow a Garden wealth guide",
    "Grow a Garden rich fast",
  ],
  alternates: { canonical: "/grow-a-garden/how-to-get-rich" },
  openGraph: {
    title: "How to Get Rich in Grow a Garden",
    description:
      "Fastest coin methods: best crops, mutation farming, pet multipliers, and trading strategy.",
    type: "website",
  },
};

// Best crops by CPM
const bestCrops = [...crops].sort((a, b) => b.coinsPerMinute - a.coinsPerMinute).slice(0, 5);

// Top mutation multipliers
const topMutations = [...mutations].sort((a, b) => b.multiplier - a.multiplier).slice(0, 3);

// Top pets by multiplier
const topPets = [...pets].sort((a, b) => b.multiplier - a.multiplier).slice(0, 4);

// S-Tier mutations for stacking examples
const sTierMutations = getMutationsByTier("S");

// High-demand trading items (top 5)
const highDemand = getHighDemandItems().sort((a, b) => b.value - a.value).slice(0, 5);

// Rising trend items for flipping strategy
const risingItems = getTradingByTrend("Rising").sort((a, b) => b.value - a.value).slice(0, 4);

// Profit calculation example: Golden Wheat × Aurelian Crown × Golden Phoenix Chick
const bestCrop = bestCrops[0];
const bestMutation = topMutations[0];
const bestPet = topPets[0];
const stackedExample = Math.round(bestCrop.coins * bestMutation.multiplier * bestPet.multiplier);

function formatValue(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2).replace(/\.00$/, "")}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return value.toString();
}

const faqs = [
  {
    question: "What is the fastest way to get rich in Grow a Garden?",
    answer:
      "Stack three multipliers: high-CPM crop (Golden Wheat at 160 CPM) × S-Tier mutation (Prismatic Rainbow at 6.0×) × S-Tier pet (Golden Phoenix Chick at 5.0×). A single 3-minute harvest can yield 14,400 coins. Multiply by 4 plots and you're making 57,600 coins per 3-minute cycle — over 1 million coins per hour at peak efficiency.",
  },
  {
    question: "How long does it take to get 1,000,000 coins in Grow a Garden?",
    answer:
      "With optimal play (4 plots, B-Tier mutations, mid-tier pet): about 8-12 hours of active farming. With S-Tier mutations and pets: 2-4 hours. The biggest acceleration comes from mutation stacking — going from no mutation to a 6.0× Prismatic Rainbow increases income 6x with no other changes.",
  },
  {
    question: "Is trading or farming better for getting rich?",
    answer:
      "Farming is reliable and scales with your farm size. Trading is higher-variance but offers 5-10× profit margins on S-Tier items. Best strategy: farm for stable income, save high-value drops, and trade them at premium during rising-trend periods. See our Trading Database for current market values.",
  },
  {
    question: "Which pet gives the most coins per hour?",
    answer:
      "Golden Phoenix Chick at 5.0× multiplier is the highest. On a 4-plot farm with 480-coin Golden Wheat every 3 minutes, the Phoenix adds 9,600 coins per cycle vs no pet. Over an hour of active farming (20 cycles), that's 192,000 extra coins from a single pet.",
  },
  {
    question: "Should I sell my mutated crops or trade them?",
    answer:
      "S-Tier mutated crops often command 5-10× premium on the trade market vs their base sell value. A Prismatic Rainbow Golden Wheat sells for 2,880 coins but can trade for 15,000+ coins. Check the Trading Database first — if the trade value exceeds 2x the sell value, trade it; otherwise sell for guaranteed coins.",
  },
  {
    question: "How do mutation multipliers stack with pet multipliers?",
    answer:
      "They stack multiplicatively. Total = crop base × mutation multiplier × pet multiplier. Example: Golden Wheat (480 coins) × Aurelian Crown (4.0×) × Golden Phoenix Chick (5.0×) = 9,600 coins per harvest. Adding a 6.0× Prismatic Rainbow mutation instead pushes it to 14,400 coins.",
  },
];

export default function HowToGetRichPage() {
  return (
    <ContentLayout
      title="How to Get Rich in Grow a Garden"
      description="Fastest coin methods in Grow a Garden: best crops, mutation farming, pet multipliers, and trading strategy. Step-by-step path from 0 to 1,000,000 coins."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "How to Get Rich", href: "/grow-a-garden/how-to-get-rich" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/how-to-get-rich"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Hero */}
      <section className="rounded-xl border border-[#FFD700]/30 bg-[#FFD700]/5 p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          Getting rich in Grow a Garden comes down to one principle:{" "}
          <strong className="text-white">stack multipliers</strong>. Every coin you earn is
          multiplied by your crop&apos;s base value, your plot&apos;s mutation, your pet&apos;s
          passive, and your plot count. This guide shows the fastest path from starter farm to
          million-coin empire. For the full strategy breakdown, see our{" "}
          <Link href="/grow-a-garden/money-making-guide" className="text-[#00E676] hover:underline">
            Money Making Guide
          </Link>
          .
        </p>
      </section>

      {/* Stacking Example */}
      <section aria-labelledby="stacking-heading">
        <h2
          id="stacking-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          💰 The Wealth Formula
        </h2>
        <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
          <div className="text-center">
            <div className="text-xs text-[#768294] uppercase tracking-wider mb-2">
              Single Harvest Calculation
            </div>
            <div className="text-lg sm:text-xl font-mono text-white mb-4">
              {bestCrop.coins} × {bestMutation.multiplier}× × {bestPet.multiplier}× ={" "}
              <span className="text-[#00E676] font-bold">{stackedExample.toLocaleString()} 🪙</span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
                <div className="text-[#768294]">Crop Base</div>
                <div className="text-sm font-semibold text-white mt-1">{bestCrop.name}</div>
                <div className="text-[#00E676] font-bold">{bestCrop.coins}</div>
              </div>
              <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
                <div className="text-[#768294]">Mutation</div>
                <div className="text-sm font-semibold text-white mt-1">{bestMutation.name}</div>
                <div className="text-[#FF8C00] font-bold">{bestMutation.multiplier}×</div>
              </div>
              <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
                <div className="text-[#768294]">Pet</div>
                <div className="text-sm font-semibold text-white mt-1">{bestPet.name}</div>
                <div className="text-[#3A86FF] font-bold">{bestPet.multiplier}×</div>
              </div>
            </div>
            <p className="text-xs text-[#768294] mt-3">
              Multiply by 4 plots = {((stackedExample * 4) / 1000).toFixed(0)}K coins per cycle.
              At 3-min growth = {((stackedExample * 4 * 20) / 1_000_000).toFixed(2)}M coins per hour.
            </p>
          </div>
        </div>
      </section>

      {/* Fastest Coin Methods */}
      <section aria-labelledby="methods-heading">
        <h2
          id="methods-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⚡ Fastest Coin Methods Ranked
        </h2>
        <div className="space-y-3">
          {[
            {
              rank: 1,
              method: "S-Tier Mutation Stacking",
              cph: "1M+ coins/hour",
              desc: "4 plots × Golden Wheat × 6.0× Prismatic Rainbow × 5.0× Golden Phoenix Chick. Highest theoretical income but requires endgame gear. Target after 10+ hours of progression.",
            },
            {
              rank: 2,
              method: "B-Tier Mutation Farming",
              cph: "100-200K coins/hour",
              desc: "4 plots × Golden Wheat × 2.0× B-Tier mutation × 2.5× mid-tier pet. Realistic mid-game target achievable in 2-3 hours of optimal play. Reliable, repeatable, no RNG required.",
            },
            {
              rank: 3,
              method: "Trade Hub Flipping",
              cph: "50-500K coins/hour",
              desc: "Buy underpriced S-Tier items, sell at market value. High variance but 5-10× margins possible. Requires capital and trading knowledge — see Trading Database for values.",
            },
            {
              rank: 4,
              method: "Seasonal Crop Rotation",
              cph: "50-100K coins/hour",
              desc: "Plant in-season crops for +20% bonus. Switch plots each season. Reliable boost on top of any other strategy. Check Crops Database for active season.",
            },
            {
              rank: 5,
              method: "Bulk Egg Hatching",
              cph: "Variable (RNG)",
              desc: "Bulk-hatch Basic Eggs (500 coins) for C-Tier pets. Sell duplicates, keep high multipliers. Lower expected value than farming but can spike to S-Tier pets worth millions.",
            },
          ].map((m) => (
            <div
              key={m.rank}
              className="rounded-xl border border-[#252936] bg-[#14161D] p-4 hover:border-[#00E676] transition"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFD700]/20 text-sm font-bold text-[#FFD700]">
                  #{m.rank}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h3 className="text-sm font-semibold text-white">{m.method}</h3>
                    <span className="rounded bg-[#00E676]/20 px-2 py-0.5 text-xs font-semibold text-[#00E676]">
                      {m.cph}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Crops */}
      <section aria-labelledby="crops-heading">
        <h2
          id="crops-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🌾 Best Crops for Coin Farming
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          Ranked by coins-per-minute (CPM) — the true profitability metric that normalizes for
          growth time. Always pick from the top of this list for your main plots. Browse all{" "}
          {crops.length} crops in the{" "}
          <Link href="/grow-a-garden/crops" className="text-[#00E676] hover:underline">
            Crops Database
          </Link>
          .
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[640px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">#</th>
                <th className="py-3 px-3 font-semibold">Crop</th>
                <th className="py-3 px-3 font-semibold">Tier</th>
                <th className="py-3 px-3 font-semibold">Base Coins</th>
                <th className="py-3 px-3 font-semibold">Growth</th>
                <th className="py-3 px-3 font-semibold">CPM</th>
              </tr>
            </thead>
            <tbody>
              {bestCrops.map((c, i) => (
                <tr key={c.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3 text-[#768294]">{i + 1}</td>
                  <td className="py-3 px-3">
                    <Link
                      href={`/grow-a-garden/crops/${c.id}`}
                      className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {c.name}
                    </Link>
                  </td>
                  <td className="py-3 px-3 text-xs text-[#768294]">{c.tier}</td>
                  <td className="py-3 px-3 text-sm text-[#BAC4D1]">{c.coins.toLocaleString()}</td>
                  <td className="py-3 px-3 text-xs text-[#768294]">{c.growthTime}</td>
                  <td className="py-3 px-3 text-sm font-bold text-[#00E676]">{c.coinsPerMinute}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Mutation Farming */}
      <section aria-labelledby="mutation-heading">
        <h2
          id="mutation-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ✨ Mutation Farming Strategy
        </h2>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <p className="text-sm text-[#BAC4D1] leading-relaxed mb-4">
            Mutations are the single biggest wealth multiplier in the game. A 6.0× Prismatic
            Rainbow mutation turns a 480-coin Golden Wheat into 2,880 coins — and that&apos;s
            before pet stacking. Here&apos;s the optimal path:
          </p>
          <ol className="space-y-2.5">
            <li className="flex gap-2 text-xs text-[#BAC4D1]">
              <span className="text-[#00E676] font-bold">1.</span>
              <span>
                <strong className="text-white">Save 50+ Mutation Shards</strong> before rolling.
                Single-roll S-Tier rate is ~1.2%; bulk-rolling 10 at once raises effective chance to
                ~11%.
              </span>
            </li>
            <li className="flex gap-2 text-xs text-[#BAC4D1]">
              <span className="text-[#00E676] font-bold">2.</span>
              <span>
                <strong className="text-white">Wait for a Boosted Event</strong> — typically tied to
                seasonal updates. Boosted events raise S-Tier rates by 2-3× and are the only
                reliable way to land S-Tier mutations.
              </span>
            </li>
            <li className="flex gap-2 text-xs text-[#BAC4D1]">
              <span className="text-[#00E676] font-bold">3.</span>
              <span>
                <strong className="text-white">Apply to your main plot first</strong> — the highest
                CPM crop. Mutations don&apos;t transfer between plots, so prioritize your best
                income generator.
              </span>
            </li>
            <li className="flex gap-2 text-xs text-[#BAC4D1]">
              <span className="text-[#00E676] font-bold">4.</span>
              <span>
                <strong className="text-white">Stack with a pet multiplier</strong> for exponential
                growth. See the Pet section below.
              </span>
            </li>
          </ol>
          <div className="mt-4 pt-4 border-t border-[#252936]">
            <div className="text-xs text-[#768294] mb-2">S-Tier Mutation Targets:</div>
            <div className="grid grid-cols-3 gap-2">
              {sTierMutations.slice(0, 6).map((m) => (
                <Link
                  key={m.id}
                  href={`/grow-a-garden/mutations/${m.id}`}
                  className="rounded-lg bg-[#1E212B] p-2 border border-[#252936] hover:border-[#FF8C00] transition text-center"
                >
                  <div className="text-xs font-semibold text-white truncate">{m.name}</div>
                  <div className="text-sm font-bold text-[#FF8C00]">{m.multiplier}×</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pet Advantages */}
      <section aria-labelledby="pets-heading">
        <h2
          id="pets-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🐾 Pet Advantages for Wealth
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          Pets provide permanent passive multipliers that stack with mutations. A single 5.0×
          Golden Phoenix Chick multiplies your entire farm income by 5 — permanently. Top 4 pets
          by multiplier:
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {topPets.map((p) => (
            <div
              key={p.id}
              className="rounded-xl border border-[#3A86FF]/30 bg-[#14161D] p-4 hover:border-[#3A86FF] transition"
            >
              <Link
                href={`/grow-a-garden/pets/${p.id}`}
                className="text-sm font-semibold text-white hover:text-[#00E676] transition block"
              >
                {p.name}
              </Link>
              <div className="text-2xl font-bold text-[#3A86FF] mt-2">{p.multiplier}×</div>
              <div className="text-xs text-[#768294] mt-1">{p.source}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trading Strategy */}
      <section aria-labelledby="trading-heading">
        <h2
          id="trading-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          💱 Trading Strategy for Wealth
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">High-Demand Flips</h3>
            <p className="text-xs text-[#768294] leading-relaxed mb-3">
              Items with High demand sell quickly at full market value. Watch for underpriced
              listings and flip immediately.
            </p>
            <ul className="space-y-1.5">
              {highDemand.map((t) => (
                <li key={t.id} className="flex items-center justify-between text-xs">
                  <Link
                    href={`/grow-a-garden/trading/${t.id}`}
                    className="text-[#BAC4D1] hover:text-[#00E676] transition truncate"
                  >
                    {t.name}
                  </Link>
                  <span className="text-[#00E676] font-bold ml-2">{formatValue(t.value)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF8C00] mb-2">Rising Trend Holds</h3>
            <p className="text-xs text-[#768294] leading-relaxed mb-3">
              Items with Rising trend gain value over time. Buy early, hold, sell at peak.
            </p>
            <ul className="space-y-1.5">
              {risingItems.map((t) => (
                <li key={t.id} className="flex items-center justify-between text-xs">
                  <Link
                    href={`/grow-a-garden/trading/${t.id}`}
                    className="text-[#BAC4D1] hover:text-[#00E676] transition truncate"
                  >
                    {t.name}
                  </Link>
                  <span className="text-[#FF8C00] font-bold ml-2">{formatValue(t.value)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          Browse all {trading.length} tradeable items in the{" "}
          <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">
            Trading Database
          </Link>
          .
        </p>
      </section>

      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/how-to-get-rich" />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
