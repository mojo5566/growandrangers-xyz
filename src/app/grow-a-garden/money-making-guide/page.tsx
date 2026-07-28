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
  title: "Money Making Guide — Grow a Garden Coins",
  description:
    "Fastest ways to earn coins in Grow a Garden: best crops by CPM, best pets by multiplier, mutation farming strategy, and trading strategy. All sourced from canonical databases.",
  keywords: [
    "Grow a Garden money making",
    "Grow a Garden coin farming",
    "Grow a Garden max coins",
    "Grow a Garden profit guide",
    "best crops for coins Grow a Garden",
    "Grow a Garden trading strategy",
  ],
  alternates: { canonical: "/grow-a-garden/money-making-guide" },
  openGraph: {
    title: "Money Making Guide — Grow a Garden Coins",
    description:
      "Fastest ways to earn coins: best crops, best pets, mutation farming, and trading strategy.",
    type: "website",
  },
};

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

const demandBadge: Record<string, string> = {
  High: "bg-[#00E676]/20 text-[#00E676]",
  Medium: "bg-[#FFD700]/20 text-[#FFD700]",
  Low: "bg-[#768294]/20 text-[#BAC4D1]",
};

function formatValue(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2).replace(/\.00$/, "")}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return value.toString();
}

// Best crops by CPM (excluding C-Tier speed-challenge crops with impractical cycles)
const bestCrops = [...crops]
  .filter((c) => c.tier !== "C" || c.coinsPerMinute < 100)
  .sort((a, b) => b.coinsPerMinute - a.coinsPerMinute)
  .slice(0, 8);

// Best pets by multiplier
const bestPets = [...pets].sort((a, b) => b.multiplier - a.multiplier).slice(0, 6);

// Best mutations for farming (S and A-Tier)
const bestMutations = [...getMutationsByTier("S"), ...getMutationsByTier("A")]
  .sort((a, b) => b.multiplier - a.multiplier)
  .slice(0, 6);

// Trading strategy — top high-demand items
const topTradingItems = [...getHighDemandItems()]
  .sort((a, b) => b.value - a.value)
  .slice(0, 6);

// Rising trading items
const risingTradingItems = [...getTradingByTrend("Rising")]
  .sort((a, b) => b.value - a.value)
  .slice(0, 4);

const faqs = [
  {
    question: "What is the fastest way to earn coins in Grow a Garden?",
    answer:
      "The fastest sustainable coin rate comes from Golden Wheat (160 CPM) stacked with an S-Tier pet (5.0x) and an S-Tier mutation like Aurelian Crown (4.0x) — yielding up to 3,200 coins per minute. Active players can sustain this indefinitely on all-season crops. For shorter bursts, Sun Tomato (200 CPM) and Basic Potato (200 CPM) are technically faster but require constant replanting.",
  },
  {
    question: "Which crops make the most coins per minute?",
    answer:
      "Golden Wheat is the all-season leader at 160 coins per minute. Lucky Carrot (140 CPM, Spring) and Star Melon (125 CPM, all-season) are strong alternatives. Sun Tomato and Basic Potato technically hit 200 CPM but their 30-60 second cycles make them impractical for sustained farming. See our Crops Database for the full ranking.",
  },
  {
    question: "Which pets are best for making money?",
    answer:
      "The Golden Phoenix Chick (5.0x) is the best pet for coin farming — its auto-collect passive eliminates harvesting downtime. Crystal Unicorn Foal (4.5x) and Golden Dragon (4.8x) are strong alternatives. For budget players, A-Tier pets like Neon Dragon Hatchling (3.5x) and Lucky Clover Bunny (3.2x) provide excellent value per egg cost.",
  },
  {
    question: "How do I farm mutations efficiently?",
    answer:
      "Mutation farming requires Mutation Shards, obtainable from daily quests, events, and the Robux store. S-Tier mutations have a ~1.2-1.4% roll rate. The fastest path is Premium Event Seeds (Robux) which guarantee a mutation roll on every harvest. Lucky Clover Seeds boost roll rates by +25% on adjacent crops. Target S-Tier mutations like Aurelian Crown and Crystalline Mycelium for maximum value.",
  },
  {
    question: "Is trading a good way to make coins?",
    answer:
      "Yes — trading can outpace farming for endgame players. High-demand pets like Golden Phoenix Chick (5M Sheckles) and Golden Dragon (2.8M Sheckles) command premium prices. Rising-trend items appreciate over time, making them good hold-and-flip candidates. Always check our Trading Values database for current prices and trends before trading.",
  },
  {
    question: "What should I invest in first?",
    answer:
      "Investment priority: (1) Buy Rare Eggs until you have an A-Tier pet, (2) Switch to all-season S-Tier crops like Golden Wheat, (3) Start rolling mutations with saved shards, (4) Save for Legendary Eggs to chase S-Tier pets, (5) Begin trading surplus high-value items. Pets provide the largest single multiplier jump — prioritize them before mutations.",
  },
];

export default function MoneyMakingGuidePage() {
  return (
    <ContentLayout
      title="Grow a Garden Money Making Guide"
      description="Fastest ways to earn coins in Grow a Garden — best crops by CPM, best pets by multiplier, mutation farming strategy, and trading strategy. All sourced from canonical databases."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Money Making Guide", href: "/grow-a-garden/money-making-guide" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/money-making-guide"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Hero Intro */}
      <section className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          Making coins in Grow a Garden is a stacking game — <strong className="text-white">crop value</strong>{" "}
          × <strong className="text-white">pet multiplier</strong> ×{" "}
          <strong className="text-white">mutation multiplier</strong>. This guide covers the four pillars of
          coin income: best crops, best pets, mutation farming, and trading strategy. All data is sourced from
          our canonical{" "}
          <Link href="/grow-a-garden/crops" className="text-[#00E676] hover:underline">crops</Link>,{" "}
          <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">pets</Link>,{" "}
          <Link href="/grow-a-garden/mutations" className="text-[#00E676] hover:underline">mutations</Link>, and{" "}
          <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">trading</Link> databases.
        </p>
      </section>

      {/* Fastest Ways to Earn Coins */}
      <section aria-labelledby="fastest-heading">
        <h2
          id="fastest-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          ⚡ Fastest Ways to Earn Coins
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-white mb-1">🌱 Crop Farming</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Plant high-CPM crops like Golden Wheat. Sustainable baseline income — 160+ coins/min.
            </p>
          </div>
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-white mb-1">🐾 Pet Multipliers</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Equip S-Tier pets to multiply every harvest. A 5.0x pet turns 160 CPM into 800 CPM.
            </p>
          </div>
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-white mb-1">🧬 Mutation Farming</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Roll S-Tier mutations to multiply crop value. Aurelian Crown (4.0x) on Golden Wheat = 640 CPM.
            </p>
          </div>
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-white mb-1">💰 Trading</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Flip high-demand items. Top trades exceed 1M Sheckles per transaction.
            </p>
          </div>
        </div>
      </section>

      {/* Best Crops */}
      <section aria-labelledby="best-crops">
        <h2
          id="best-crops"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          🌱 Best Crops for Coins
        </h2>
        <p className="text-xs text-[#768294] mb-4">
          Ranked by Coins Per Minute (CPM) — the canonical metric for sustainable crop income. C-Tier
          speed-challenge crops (200 CPM but 30-60 sec cycles) are excluded as impractical.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">#</th>
                <th className="py-3 px-3 font-semibold">Crop</th>
                <th className="py-3 px-3 font-semibold">Tier</th>
                <th className="py-3 px-3 font-semibold">Coins</th>
                <th className="py-3 px-3 font-semibold">Growth</th>
                <th className="py-3 px-3 font-semibold">CPM</th>
                <th className="py-3 px-3 font-semibold">Season</th>
              </tr>
            </thead>
            <tbody>
              {bestCrops.map((crop, i) => (
                <tr key={crop.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3 text-[#768294]">{i + 1}</td>
                  <td className="py-3 px-3">
                    <Link
                      href={`/grow-a-garden/crops/${crop.id}`}
                      className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {crop.name}
                    </Link>
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className="code-text inline-block rounded px-2 py-0.5 text-xs font-semibold"
                      style={{ color: tierColors[crop.tier], backgroundColor: tierColors[crop.tier] + "1a" }}
                    >
                      {crop.tier}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{crop.coins} 🪙</td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{crop.growthTime}</td>
                  <td className="py-3 px-3 text-sm font-bold text-[#00E676]">{crop.coinsPerMinute}</td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{crop.season}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          👉 Browse the full{" "}
          <Link href="/grow-a-garden/crops" className="text-[#00E676] hover:underline">
            Crops Database
          </Link>{" "}
          or use the{" "}
          <Link href="/grow-a-garden/value-calculator" className="text-[#00E676] hover:underline">
            Value Calculator
          </Link>{" "}
          to estimate yields with mutations.
        </p>
      </section>

      {/* Best Pets */}
      <section aria-labelledby="best-pets">
        <h2
          id="best-pets"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          🐾 Best Pets for Coin Multipliers
        </h2>
        <p className="text-xs text-[#768294] mb-4">
          Pets apply a coin multiplier to every harvest while equipped. Ranked by base multiplier — the single
          most important pet stat for income.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">#</th>
                <th className="py-3 px-3 font-semibold">Pet</th>
                <th className="py-3 px-3 font-semibold">Tier</th>
                <th className="py-3 px-3 font-semibold">Multiplier</th>
                <th className="py-3 px-3 font-semibold">Source</th>
                <th className="py-3 px-3 font-semibold">Key Ability</th>
              </tr>
            </thead>
            <tbody>
              {bestPets.map((pet, i) => (
                <tr key={pet.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3 text-[#768294]">{i + 1}</td>
                  <td className="py-3 px-3">
                    <Link
                      href={`/grow-a-garden/pets/${pet.id}`}
                      className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {pet.name}
                    </Link>
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className="code-text inline-block rounded px-2 py-0.5 text-xs font-semibold"
                      style={{ color: tierColors[pet.tier], backgroundColor: tierColors[pet.tier] + "1a" }}
                    >
                      {pet.tier}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-base font-bold text-[#00E676]">{pet.multiplier.toFixed(1)}x</td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{pet.source}</td>
                  <td className="py-3 px-3 text-xs text-[#768294]">{pet.abilities[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          👉 See the full{" "}
          <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">
            Pets Database
          </Link>{" "}
          or read the{" "}
          <Link href="/grow-a-garden/pet-guide" className="text-[#00E676] hover:underline">
            Pet Guide
          </Link>{" "}
          for the system explanation.
        </p>
      </section>

      {/* Mutation Farming Strategy */}
      <section aria-labelledby="mutation-strategy">
        <h2
          id="mutation-strategy"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          🧬 Mutation Farming Strategy
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5 mb-4">
          <p className="text-sm text-[#BAC4D1] leading-relaxed mb-3">
            Mutations multiply crop coin value and stack <strong className="text-white">multiplicatively</strong>{" "}
            with pet multipliers. The strategy is simple: roll mutations on your highest-CPM crops while your
            strongest pet is equipped. Below are the top mutations to target.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
              <p className="text-xs text-[#768294] mb-1">Stacking example</p>
              <p className="text-sm font-bold text-[#00E676]">
                Golden Wheat (480) × Aurelian Crown (4.0x) × Phoenix Chick (5.0x) = 9,600 coins
              </p>
            </div>
            <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
              <p className="text-xs text-[#768294] mb-1">S-Tier roll rate</p>
              <p className="text-sm font-bold text-[#00E676]">~1.2% – 1.4% per shard</p>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">#</th>
                <th className="py-3 px-3 font-semibold">Mutation</th>
                <th className="py-3 px-3 font-semibold">Tier</th>
                <th className="py-3 px-3 font-semibold">Multiplier</th>
                <th className="py-3 px-3 font-semibold">Roll Rate</th>
                <th className="py-3 px-3 font-semibold">Best Use</th>
              </tr>
            </thead>
            <tbody>
              {bestMutations.map((m, i) => (
                <tr key={m.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3 text-[#768294]">{i + 1}</td>
                  <td className="py-3 px-3">
                    <Link
                      href={`/grow-a-garden/mutations/${m.id}`}
                      className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {m.name}
                    </Link>
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className="code-text inline-block rounded px-2 py-0.5 text-xs font-semibold"
                      style={{ color: tierColors[m.tier], backgroundColor: tierColors[m.tier] + "1a" }}
                    >
                      {m.tier}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-base font-bold text-[#00E676]">{m.multiplier.toFixed(1)}x</td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{m.rollRate}</td>
                  <td className="py-3 px-3 text-xs text-[#768294]">{m.bestUse ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          👉 Read the full{" "}
          <Link href="/grow-a-garden/best-mutations" className="text-[#00E676] hover:underline">
            Best Mutations Guide
          </Link>{" "}
          for combinations and trading value impact.
        </p>
      </section>

      {/* Trading Strategy */}
      <section aria-labelledby="trading-strategy">
        <h2
          id="trading-strategy"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          💰 Trading Strategy
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 mb-4">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-white mb-2">High-Demand Flips</h3>
            <p className="text-xs text-[#BAC4D1] leading-relaxed mb-3">
              Items with High demand sell quickly. Buy low from inactive players, sell at market rate to active
              buyers. Focus on pets — they have the highest absolute values.
            </p>
            <ul className="space-y-1.5">
              {topTradingItems.slice(0, 4).map((item) => (
                <li key={item.id} className="flex items-center justify-between gap-2">
                  <Link
                    href={`/grow-a-garden/trading/${item.id}`}
                    className="text-xs text-[#BAC4D1] hover:text-[#00E676] transition"
                  >
                    {item.name}
                  </Link>
                  <span className="text-xs font-semibold text-[#00E676]">{formatValue(item.value)} 🪙</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-white mb-2">Rising Trend Holds</h3>
            <p className="text-xs text-[#BAC4D1] leading-relaxed mb-3">
              Rising-trend items appreciate over time. Hold these for days or weeks, then sell at a premium.
              Driven by meta shifts and update synergies.
            </p>
            <ul className="space-y-1.5">
              {risingTradingItems.map((item) => (
                <li key={item.id} className="flex items-center justify-between gap-2">
                  <Link
                    href={`/grow-a-garden/trading/${item.id}`}
                    className="text-xs text-[#BAC4D1] hover:text-[#00E676] transition"
                  >
                    {item.name}
                  </Link>
                  <span className="text-xs font-semibold text-[#00E676]">{formatValue(item.value)} 🪙</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">#</th>
                <th className="py-3 px-3 font-semibold">Item</th>
                <th className="py-3 px-3 font-semibold">Category</th>
                <th className="py-3 px-3 font-semibold">Value</th>
                <th className="py-3 px-3 font-semibold">Demand</th>
                <th className="py-3 px-3 font-semibold">Trend</th>
              </tr>
            </thead>
            <tbody>
              {topTradingItems.map((item, i) => (
                <tr key={item.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3 text-[#768294]">{i + 1}</td>
                  <td className="py-3 px-3">
                    <Link
                      href={`/grow-a-garden/trading/${item.id}`}
                      className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {item.name}
                    </Link>
                  </td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{item.category}</td>
                  <td className="py-3 px-3 text-sm font-bold text-[#00E676]">{formatValue(item.value)} 🪙</td>
                  <td className="py-3 px-3">
                    <span className={`rounded px-2 py-0.5 text-xs font-semibold ${demandBadge[item.demand]}`}>
                      {item.demand}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{item.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          👉 Browse the full{" "}
          <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">
            Trading Values Database
          </Link>{" "}
          or see the{" "}
          <Link href="/grow-a-garden/top-trading-items" className="text-[#00E676] hover:underline">
            Top Trading Items
          </Link>{" "}
          ranking.
        </p>
      </section>

      <RelatedContent
        category="guide"
        game="garden"
        currentPath="/grow-a-garden/money-making-guide"
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
