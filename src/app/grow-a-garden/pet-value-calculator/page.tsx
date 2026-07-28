import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { pets, getPetsByTier, type Pet } from "@/data/garden/database/pets";
import {
  trading,
  getHighDemandItems,
  getTradingByTrend,
} from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Pet Value Calculator — Grow a Garden",
  description:
    "Compare every Grow a Garden pet by multiplier, tier, rarity, demand, trend, and trade value. Pre-computed pet value table from canonical databases.",
  keywords: [
    "Grow a Garden pet value calculator",
    "Grow a Garden pet trade value",
    "Grow a Garden pet multiplier ranking",
    "Grow a Garden pet tier list",
    "Grow a Garden pet rarity guide",
    "Grow a Garden pet demand trend",
  ],
  alternates: { canonical: "/grow-a-garden/pet-value-calculator" },
  openGraph: {
    title: "Pet Value Calculator — Grow a Garden",
    description:
      "Compare every pet by multiplier, tier, rarity, demand, trend, and trade value. Pre-computed pet value table.",
    type: "website",
  },
};

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

const rarityColors: Record<string, string> = {
  Common: "#9CA3AF",
  Rare: "#3A86FF",
  Epic: "#A855F7",
  Legendary: "#FF8C00",
  Mythical: "#FF3D00",
};

const demandColors: Record<string, string> = {
  Low: "#768294",
  Medium: "#FFD700",
  High: "#00E676",
};

const trendColors: Record<string, string> = {
  Rising: "#00E676",
  Stable: "#FFD700",
  Falling: "#FF3D00",
};

function formatValue(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2).replace(/\.00$/, "")}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return value.toString();
}

// Build pet value entries by joining pets.ts with trading.ts (Pet category)
// Match on case-insensitive name. Pets without a trading entry are still listed
// with their multiplier and tier, but trade value shows as "Not traded".
interface PetValueEntry {
  pet: Pet;
  trade:
    | {
        id: string;
        rarity: string;
        demand: string;
        trend: string;
        value: number;
        notes?: string;
      }
    | null;
}

const petTradingByName = new Map<string, (typeof trading)[number]>();
for (const t of trading) {
  if (t.category === "Pet") {
    petTradingByName.set(t.name.toLowerCase(), t);
  }
}

const petValueEntries: PetValueEntry[] = pets.map((pet) => {
  const trade = petTradingByName.get(pet.name.toLowerCase()) ?? null;
  return { pet, trade };
});

// Sort by trade value descending (pets without trade value sort last, by multiplier desc)
const rankedPets = [...petValueEntries].sort((a, b) => {
  const av = a.trade?.value ?? -1;
  const bv = b.trade?.value ?? -1;
  if (av !== bv) return bv - av;
  return b.pet.multiplier - a.pet.multiplier;
});

// Tier distribution
const tierS = getPetsByTier("S");
const tierA = getPetsByTier("A");
const tierB = getPetsByTier("B");
const tierC = getPetsByTier("C");

// Pets with trade entries
const tradedPets = petValueEntries.filter((e) => e.trade !== null);

// Top multipliers (by pet.multiplier desc)
const topMultipliers = [...pets].sort((a, b) => b.multiplier - a.multiplier).slice(0, 6);

// High-demand pets (filtered from trading Pet category)
const highDemandPets = getHighDemandItems()
  .filter((t) => t.category === "Pet")
  .sort((a, b) => b.value - a.value);

// Rising-trend pets
const risingPets = getTradingByTrend("Rising")
  .filter((t) => t.category === "Pet")
  .sort((a, b) => b.value - a.value);

// Stable-trend pets
const stablePets = getTradingByTrend("Stable")
  .filter((t) => t.category === "Pet")
  .sort((a, b) => b.value - a.value);

// Falling-trend pets
const fallingPets = getTradingByTrend("Falling")
  .filter((t) => t.category === "Pet")
  .sort((a, b) => b.value - a.value);

// Tier stats with accent colors
const tierStats = [
  { label: "S-Tier", count: tierS.length, accent: "#FF3D00", description: "Top-tier multipliers (4.5x+)" },
  { label: "A-Tier", count: tierA.length, accent: "#FF8C00", description: "Strong multipliers (3.0x–4.4x)" },
  { label: "B-Tier", count: tierB.length, accent: "#FFD700", description: "Mid multipliers (1.8x–2.9x)" },
  { label: "C-Tier", count: tierC.length, accent: "#3A86FF", description: "Starter multipliers (1.0x–1.5x)" },
];

const faqs = [
  {
    question: "How is Grow a Garden pet value calculated?",
    answer:
      "Pet value combines two datasets: the pet's coin multiplier (from the pets database) and the player-to-player trade value (from the trading database). The calculator shows both metrics side-by-side so you can evaluate farming impact AND market liquidity for every pet.",
  },
  {
    question: "What is the most valuable pet in Grow a Garden?",
    answer: rankedPets[0]?.trade
      ? `${rankedPets[0].pet.name} is the most valuable pet at ${rankedPets[0].trade.value.toLocaleString()} coins trade value (${rankedPets[0].trade.rarity} rarity, ${rankedPets[0].trade.demand} demand). It has a ${rankedPets[0].pet.multiplier}x coin multiplier and is ${rankedPets[0].trade.trend.toLowerCase()} in the current market.`
      : "The most valuable pet updates as the market shifts — see the top of the ranking table above for the current #1.",
  },
  {
    question: "Which pet has the highest coin multiplier?",
    answer:
      "The Golden Phoenix Chick leads with a 5.0x coin multiplier, followed by the Golden Dragon at 4.8x and Crystal Unicorn Foal at 4.5x. These S-Tier pets stack multiplicatively with crop base value and mutation multipliers to deliver the highest coins-per-hour ceiling in the game.",
  },
  {
    question: "Why is a higher-multiplier pet sometimes worth less in trade?",
    answer:
      "Trade value reflects player demand, not just multiplier. A 3.5x pet from Rare Eggs (Neon Dragon Hatchling) trades higher than a 4.0x seasonal pet because supply is tighter. Demand (Low/Medium/High) and trend (Rising/Stable/Falling) drive price independently of multiplier.",
  },
  {
    question: "Should I trade a Falling-trend pet?",
    answer:
      "Falling-trend pets are losing market value — trade or sell them quickly before further drops. Rising-trend pets are gaining value — hold them longer for maximum profit. Stable-trend pets are safe to trade at any time at their listed value. Always check both trend and demand before committing.",
  },
  {
    question: "How do pet multipliers stack with mutations?",
    answer:
      "Pet multipliers stack multiplicatively with mutation multipliers and crop base value. Total = crop base × mutation multiplier × pet multiplier. For example, a Golden Wheat crop (480 coins) with Prismatic Rainbow (6.0x) and Golden Phoenix Chick (5.0x) sells for 480 × 6.0 × 5.0 = 14,400 coins per harvest.",
  },
];

export default function PetValueCalculatorPage() {
  return (
    <ContentLayout
      title="Grow a Garden Pet Value Calculator"
      description="Compare every Grow a Garden pet by multiplier, tier, rarity, demand, trend, and trade value. Pre-computed pet value table from canonical databases — no inputs required."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Calculators", href: "/grow-a-garden/calculators" },
        { label: "Pet Value Calculator", href: "/grow-a-garden/pet-value-calculator" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/pet-value-calculator"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Formula Card */}
      <section className="rounded-xl border border-[#3A86FF]/30 bg-[#3A86FF]/5 p-5">
        <h2 className="text-sm font-semibold text-[#3A86FF] mb-2">🐾 How Pet Value Works</h2>
        <p className="text-xs text-[#768294] leading-relaxed">
          Each pet has six metrics: <strong className="text-[#BAC4D1]">Multiplier</strong> (coin yield bonus),
          {" "}<strong className="text-[#BAC4D1]">Tier</strong> (S/A/B/C farming strength),{" "}
          <strong className="text-[#BAC4D1]">Rarity</strong> (trade drop tier),{" "}
          <strong className="text-[#BAC4D1]">Demand</strong> (buyer interest),{" "}
          <strong className="text-[#BAC4D1]">Trend</strong> (price direction), and{" "}
          <strong className="text-[#BAC4D1]">Trade Value</strong> (market price). Use all six together
          to plan farm builds and identify profitable pet trades.
        </p>
      </section>

      {/* Tier Distribution */}
      <section aria-labelledby="tier-heading">
        <h2
          id="tier-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🏆 Pet Tier Distribution
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tierStats.map((tier) => (
            <div
              key={tier.label}
              className="rounded-xl border bg-[#14161D] p-4"
              style={{ borderColor: tier.accent + "33" }}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className="code-text inline-block rounded px-2 py-0.5 text-sm font-bold"
                  style={{
                    color: tier.accent,
                    backgroundColor: tier.accent + "1a",
                  }}
                >
                  {tier.label}
                </span>
                <span className="text-2xl font-bold" style={{ color: tier.accent }}>
                  {tier.count}
                </span>
              </div>
              <p className="text-xs text-[#768294] mt-1">{tier.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Complete Pet Value Ranking */}
      <section aria-labelledby="ranking-heading">
        <h2
          id="ranking-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🥇 Complete Pet Value Ranking
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          All {pets.length} pets ranked by trade value (where available) and multiplier. Pets without
          an active trading entry are sorted by multiplier and marked “Not traded”.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[860px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">#</th>
                <th className="py-3 px-3 font-semibold">Pet</th>
                <th className="py-3 px-3 font-semibold">Tier</th>
                <th className="py-3 px-3 font-semibold">Multiplier</th>
                <th className="py-3 px-3 font-semibold">Rarity</th>
                <th className="py-3 px-3 font-semibold">Demand</th>
                <th className="py-3 px-3 font-semibold">Trend</th>
                <th className="py-3 px-3 font-semibold">Trade Value</th>
              </tr>
            </thead>
            <tbody>
              {rankedPets.map((entry, i) => {
                const { pet, trade } = entry;
                return (
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
                        className="code-text inline-block rounded px-2 py-0.5 text-xs font-bold"
                        style={{
                          color: tierColors[pet.tier],
                          backgroundColor: tierColors[pet.tier] + "1a",
                        }}
                      >
                        {pet.tier}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-sm font-bold text-[#00E676]">
                      {pet.multiplier.toFixed(1)}x
                    </td>
                    <td className="py-3 px-3">
                      {trade ? (
                        <span
                          className="code-text inline-block rounded px-2 py-0.5 text-xs font-semibold"
                          style={{
                            color: rarityColors[trade.rarity],
                            backgroundColor: rarityColors[trade.rarity] + "1a",
                          }}
                        >
                          {trade.rarity}
                        </span>
                      ) : (
                        <span className="text-xs text-[#768294]">—</span>
                      )}
                    </td>
                    <td className="py-3 px-3">
                      {trade ? (
                        <span
                          className="inline-block rounded px-2 py-0.5 text-xs font-semibold"
                          style={{
                            color: demandColors[trade.demand],
                            backgroundColor: demandColors[trade.demand] + "1a",
                          }}
                        >
                          {trade.demand}
                        </span>
                      ) : (
                        <span className="text-xs text-[#768294]">—</span>
                      )}
                    </td>
                    <td className="py-3 px-3">
                      {trade ? (
                        <span
                          className="inline-block rounded px-2 py-0.5 text-xs font-semibold"
                          style={{
                            color: trendColors[trade.trend],
                            backgroundColor: trendColors[trade.trend] + "1a",
                          }}
                        >
                          {trade.trend}
                        </span>
                      ) : (
                        <span className="text-xs text-[#768294]">—</span>
                      )}
                    </td>
                    <td className="py-3 px-3 text-sm font-bold text-[#FFD700]">
                      {trade ? `${formatValue(trade.value)} 🪙` : <span className="text-xs text-[#768294] font-normal">Not traded</span>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Top Multipliers */}
      <section aria-labelledby="multiplier-heading">
        <h2
          id="multiplier-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⚡ Highest Multiplier Pets
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          Pets ranked by coin multiplier — the single most important stat for farming profit. Stack
          these with high-value crops and mutations for maximum coins-per-hour.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topMultipliers.map((pet) => (
            <div
              key={pet.id}
              className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4 hover:border-[#00E676] transition"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <Link
                  href={`/grow-a-garden/pets/${pet.id}`}
                  className="text-sm font-semibold text-white hover:text-[#00E676] transition"
                >
                  {pet.name}
                </Link>
                <span
                  className="code-text inline-block rounded px-1.5 py-0.5 text-xs font-bold"
                  style={{
                    color: tierColors[pet.tier],
                    backgroundColor: tierColors[pet.tier] + "1a",
                  }}
                >
                  {pet.tier}
                </span>
              </div>
              <div className="text-2xl font-bold text-[#00E676] mb-2">
                {pet.multiplier.toFixed(1)}x
              </div>
              <p className="text-xs text-[#768294] leading-relaxed mb-2">{pet.abilities[0]}</p>
              <p className="text-xs text-[#768294]">
                Source: <span className="text-[#BAC4D1]">{pet.source}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* High-Demand Pets */}
      <section aria-labelledby="demand-heading">
        <h2
          id="demand-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🔥 High-Demand Pets ({highDemandPets.length})
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          Pets with the highest buyer interest — these sell quickly at full market value. Focus
          trades here for fast liquidity.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {highDemandPets.slice(0, 9).map((t) => {
            const petMatch = pets.find((p) => p.name.toLowerCase() === t.name.toLowerCase());
            return (
              <div
                key={t.id}
                className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4 hover:border-[#00E676] transition"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Link
                    href={`/grow-a-garden/trading/${t.id}`}
                    className="text-sm font-semibold text-white hover:text-[#00E676] transition"
                  >
                    {t.name}
                  </Link>
                  <span className="rounded bg-[#00E676]/20 px-1.5 py-0.5 text-xs font-semibold text-[#00E676]">
                    {t.rarity}
                  </span>
                </div>
                <div className="text-xl font-bold text-[#00E676] mb-2">
                  {formatValue(t.value)} 🪙
                </div>
                <div className="flex items-center gap-2 text-xs">
                  {petMatch && (
                    <span className="text-[#3A86FF] font-semibold">
                      {petMatch.multiplier.toFixed(1)}x mult
                    </span>
                  )}
                  <span
                    className="inline-block rounded px-1.5 py-0.5 font-semibold"
                    style={{
                      color: trendColors[t.trend],
                      backgroundColor: trendColors[t.trend] + "1a",
                    }}
                  >
                    {t.trend}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trend Analysis */}
      <section aria-labelledby="trend-heading">
        <h2
          id="trend-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📈 Pet Trade Trend Analysis
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">
              ↑ Rising ({risingPets.length})
            </h3>
            <p className="text-xs text-[#768294] mb-3">
              Gaining value — hold for maximum profit.
            </p>
            <ul className="space-y-1.5">
              {risingPets.slice(0, 5).map((t) => (
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
          <div className="rounded-xl border border-[#FFD700]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FFD700] mb-2">
              → Stable ({stablePets.length})
            </h3>
            <p className="text-xs text-[#768294] mb-3">
              Holding value — safe to trade at any time.
            </p>
            <ul className="space-y-1.5">
              {stablePets.slice(0, 5).map((t) => (
                <li key={t.id} className="flex items-center justify-between text-xs">
                  <Link
                    href={`/grow-a-garden/trading/${t.id}`}
                    className="text-[#BAC4D1] hover:text-[#00E676] transition truncate"
                  >
                    {t.name}
                  </Link>
                  <span className="text-[#FFD700] font-bold ml-2">{formatValue(t.value)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">
              ↓ Falling ({fallingPets.length})
            </h3>
            <p className="text-xs text-[#768294] mb-3">
              Losing value — sell quickly before further drops.
            </p>
            <ul className="space-y-1.5">
              {fallingPets.slice(0, 5).map((t) => (
                <li key={t.id} className="flex items-center justify-between text-xs">
                  <Link
                    href={`/grow-a-garden/trading/${t.id}`}
                    className="text-[#BAC4D1] hover:text-[#00E676] transition truncate"
                  >
                    {t.name}
                  </Link>
                  <span className="text-[#FF3D00] font-bold ml-2">{formatValue(t.value)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Coverage Stats */}
      <section aria-labelledby="coverage-heading">
        <h2
          id="coverage-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📊 Database Coverage
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-[#3A86FF]/30 bg-[#14161D] p-4 text-center">
            <div className="text-2xl font-bold text-[#3A86FF]">{pets.length}</div>
            <div className="text-xs text-[#768294] mt-1">Total Pets</div>
          </div>
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4 text-center">
            <div className="text-2xl font-bold text-[#00E676]">{tradedPets.length}</div>
            <div className="text-xs text-[#768294] mt-1">Tradeable Pets</div>
          </div>
          <div className="rounded-xl border border-[#FFD700]/30 bg-[#14161D] p-4 text-center">
            <div className="text-2xl font-bold text-[#FFD700]">{highDemandPets.length}</div>
            <div className="text-xs text-[#768294] mt-1">High-Demand Pets</div>
          </div>
        </div>
      </section>

      <RelatedContent
        category="guide"
        game="garden"
        currentPath="/grow-a-garden/pet-value-calculator"
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
