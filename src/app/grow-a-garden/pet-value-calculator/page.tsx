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
  TRADING_RECORD_VALUE_LABEL,
  formatTradingRecordValue,
} from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Pet Multiplier & Record Reference — Grow a Garden",
  description:
    "Compare Grow a Garden pets by multiplier, tier, ability, and recorded trading fields. Internal project reference only, not official prices, live market quotes, or independently verified transaction data.",
  keywords: [
    "Grow a Garden pet multiplier reference",
    "Grow a Garden pet record comparison",
    "Grow a Garden pet multiplier ranking",
    "Grow a Garden pet tier list",
    "Grow a Garden pet ability reference",
    "Grow a Garden internal trading records",
  ],
  alternates: { canonical: "/grow-a-garden/pet-value-calculator" },
  openGraph: {
    title: "Pet Multiplier & Record Reference — Grow a Garden",
    description:
      "Compare pet multipliers, tiers, abilities, and internal project trading fields. Not official prices, live market quotes, or independently verified transaction data.",
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

// Join the pet records with matching internal trading records for side-by-side reference.
// Match on case-insensitive name so unmatched pets remain visible.
interface PetValueEntry {
  pet: Pet;
  trade:
    | {
        id: string;
        rarity: string;
        demand: string;
        trend: string;
        value: number;
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

// Sort by the pet's recorded multiplier, then by the internal record value.
const rankedPets = [...petValueEntries].sort((a, b) => {
  if (a.pet.multiplier !== b.pet.multiplier) return b.pet.multiplier - a.pet.multiplier;
  return (b.trade?.value ?? -1) - (a.trade?.value ?? -1);
});

// Tier distribution
const tierS = getPetsByTier("S");
const tierA = getPetsByTier("A");
const tierB = getPetsByTier("B");
const tierC = getPetsByTier("C");

// Pets with matching internal trading records
const matchedRecordPets = petValueEntries.filter((e) => e.trade !== null);

// Top multipliers (by pet.multiplier desc)
const topMultipliers = [...pets].sort((a, b) => b.multiplier - a.multiplier).slice(0, 6);

// Internal demand labels (filtered from the Pet records)
const highDemandPets = getHighDemandItems()
  .filter((t) => t.category === "Pet")
  .sort((a, b) => b.value - a.value);

// Internal trend labels
const risingPets = getTradingByTrend("Rising")
  .filter((t) => t.category === "Pet")
  .sort((a, b) => b.value - a.value);

// Internal trend labels
const stablePets = getTradingByTrend("Stable")
  .filter((t) => t.category === "Pet")
  .sort((a, b) => b.value - a.value);

// Internal trend labels
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
    question: "What does this Grow a Garden pet reference compare?",
    answer:
      "The page compares each pet's recorded multiplier, tier, and ability with matching internal trading-record fields where available. The trading fields are project references only, not official prices, live market quotes, or independently verified transaction data.",
  },
  {
    question: "Which pet has the highest recorded multiplier?",
    answer: topMultipliers[0]
      ? `${topMultipliers[0].name} has the highest multiplier in the current pet dataset at ${topMultipliers[0].multiplier.toFixed(1)}x. This is a comparison of the project's pet records, not a forecast of harvest output or trading results.`
      : "No pet multiplier records are available in the current dataset.",
  },
  {
    question: "What do the pet tiers represent here?",
    answer:
      "S, A, B, and C are the tier labels stored in the pet dataset. They organize the records for comparison and do not establish drop rates, availability, market value, or a recommended choice.",
  },
  {
    question: "What does a matching trading record add?",
    answer:
      "A matching record adds the project's recorded rarity, demand, trend, and numeric value fields. These labels and numbers are shown as internal references and should not be interpreted as transaction evidence or an exchange outcome.",
  },
  {
    question: "What do demand and trend labels mean on this page?",
    answer:
      "Demand and trend are labels recorded in the internal project data. They do not measure active buyers, transaction speed, recent movement, future change, or likely results.",
  },
  {
    question: "Does this page calculate combined harvest output?",
    answer:
      "No. The page displays the multiplier stored for each pet and does not turn it into earnings, hourly estimates, or a broader return calculation. Use the game's current mechanics directly when checking how systems interact.",
  },
];

export default function PetValueCalculatorPage() {
  return (
    <ContentLayout
      title="Grow a Garden Pet Multiplier & Record Reference"
      description="Compare Grow a Garden pets by multiplier, tier, ability, and recorded trading fields. Internal project reference only, not official prices, live market quotes, or independently verified transaction data."
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
      {/* Reference summary */}
      <section className="rounded-xl border border-[#3A86FF]/30 bg-[#3A86FF]/5 p-5">
        <h2 className="text-sm font-semibold text-[#3A86FF] mb-2">🐾 Pet Record Fields</h2>
        <p className="text-xs text-[#768294] leading-relaxed">
          Each pet record includes a <strong className="text-[#BAC4D1]">Multiplier</strong>,{" "}
          <strong className="text-[#BAC4D1]">Tier</strong>, and ability description. Where a pet name
          matches an internal trading record, the table also shows recorded rarity, demand, trend, and
          value fields. Those fields are project references, not official prices, live market quotes, or
          independently verified transactions.
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

      {/* Complete Pet Comparison */}
      <section aria-labelledby="ranking-heading">
        <h2
          id="ranking-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🥇 Complete Pet Comparison
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          All {pets.length} pets are sorted by the multiplier stored in the pet dataset. Matching
          internal trading records are shown alongside them; pets without a match remain in the table.
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
                <th className="py-3 px-3 font-semibold">Recorded Value</th>
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
                      {trade ? `${formatTradingRecordValue(trade.value)} ${TRADING_RECORD_VALUE_LABEL}` : <span className="text-xs text-[#768294] font-normal">No matching record</span>}
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
          Pets sorted by the multiplier stored in the pet dataset. The list is a project comparison
          and does not estimate earnings or rank trading outcomes.
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
            </div>
          ))}
        </div>
      </section>

      {/* Internal demand labels */}
      <section aria-labelledby="demand-heading">
        <h2
          id="demand-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🔥 High Internal Demand Labels ({highDemandPets.length})
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          Pet records carrying the High internal demand label. This label does not establish buyer
          activity, transaction speed, liquidity, or price.
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
                  {formatTradingRecordValue(t.value)} {TRADING_RECORD_VALUE_LABEL}
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

      {/* Internal trend labels */}
      <section aria-labelledby="trend-heading">
        <h2
          id="trend-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📈 Pet Internal Trend Labels
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">
              ↑ Rising ({risingPets.length})
            </h3>
            <p className="text-xs text-[#768294] mb-3">
              Records carrying the Rising internal trend label. This does not establish live movement
              or a recommendation to buy, sell, or hold.
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
                  <span className="text-[#00E676] font-bold ml-2">{formatTradingRecordValue(t.value)} {TRADING_RECORD_VALUE_LABEL}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#FFD700]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FFD700] mb-2">
              → Stable ({stablePets.length})
            </h3>
            <p className="text-xs text-[#768294] mb-3">
              Records carrying the Stable internal trend label. This does not establish a trade result
              or a recommendation.
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
                  <span className="text-[#FFD700] font-bold ml-2">{formatTradingRecordValue(t.value)} {TRADING_RECORD_VALUE_LABEL}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">
              ↓ Falling ({fallingPets.length})
            </h3>
            <p className="text-xs text-[#768294] mb-3">
              Records carrying the Falling internal trend label. This does not establish live movement
              or a recommendation.
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
                  <span className="text-[#FF3D00] font-bold ml-2">{formatTradingRecordValue(t.value)} {TRADING_RECORD_VALUE_LABEL}</span>
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
          📊 Pet Record Coverage
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-[#3A86FF]/30 bg-[#14161D] p-4 text-center">
            <div className="text-2xl font-bold text-[#3A86FF]">{pets.length}</div>
            <div className="text-xs text-[#768294] mt-1">Total Pets</div>
          </div>
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4 text-center">
            <div className="text-2xl font-bold text-[#00E676]">{matchedRecordPets.length}</div>
            <div className="text-xs text-[#768294] mt-1">Matched Trading Records</div>
          </div>
          <div className="rounded-xl border border-[#FFD700]/30 bg-[#14161D] p-4 text-center">
            <div className="text-2xl font-bold text-[#FFD700]">{highDemandPets.length}</div>
            <div className="text-xs text-[#768294] mt-1">High Internal Demand Labels</div>
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
