import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { crops } from "@/data/garden/database/crops";
import { mutations } from "@/data/garden/database/mutations";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Crop Value Calculator — Grow a Garden Profit",
  description:
    "Pre-calculated crop profit table for every Grow a Garden crop × every mutation. See base value, mutation bonus, and total value at a glance.",
  keywords: [
    "Grow a Garden crop value calculator",
    "crop profit calculator Grow a Garden",
    "Grow a Garden coin calculator",
    "crop × mutation value table",
    "Grow a Garden harvest value",
    "Grow a Garden profit table",
  ],
  alternates: { canonical: "/grow-a-garden/crop-value-calculator" },
  openGraph: {
    title: "Crop Value Calculator — Grow a Garden Profit",
    description:
      "Pre-calculated crop profit table for every crop × every mutation. Base value, bonus, and total at a glance.",
    type: "website",
  },
};

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

// Top 5 highest-multiplier mutations for the cross-table
const topMutations = [...mutations]
  .sort((a, b) => b.multiplier - a.multiplier)
  .slice(0, 5);

// All crops sorted by base coin value (descending) for the main table
const cropsByValue = [...crops].sort((a, b) => b.coins - a.coins);

// Best mutation for each crop (highest multiplier)
const cropsWithBestMutation = cropsByValue.map((crop) => {
  const bestMutation = [...mutations].sort((a, b) => b.multiplier - a.multiplier)[0];
  const totalValue = Math.round(crop.coins * bestMutation.multiplier);
  const bonus = totalValue - crop.coins;
  return {
    crop,
    bestMutation,
    baseValue: crop.coins,
    bonus,
    totalValue,
  };
});

// For the top crop (Golden Wheat), show value under every mutation
const topCrop = cropsByValue[0];
const topCropBreakdown = mutations.map((m) => ({
  mutation: m,
  baseValue: topCrop.coins,
  multiplier: m.multiplier,
  totalValue: Math.round(topCrop.coins * m.multiplier),
  bonus: Math.round(topCrop.coins * m.multiplier) - topCrop.coins,
}));

// Quantity multipliers (1, 10, 100 harvests)
const quantityScenarios = [1, 10, 100];

// Pre-compute quantity scenarios for top crop × top mutation
const topCombo = {
  crop: topCrop,
  mutation: topMutations[0],
  perHarvest: Math.round(topCrop.coins * topMutations[0].multiplier),
};

const faqs = [
  {
    question: "How is crop value calculated in Grow a Garden?",
    answer:
      "Base crop value × mutation multiplier = total value. For example, Golden Wheat (480 base coins) × Aurelian Crown (4.0× mutation) = 1,920 coins per harvest. Pet multipliers stack multiplicatively on top — a 5.0× pet brings the same harvest to 9,600 coins.",
  },
  {
    question: "Which crop has the highest recorded value and CPM?",
    answer:
      `Golden Wheat tops this dataset by both recorded base value and CPM (coins-per-minute). At ${topCrop.coins} recorded base coins with a 3-minute grow time, it produces a recorded 160 CPM — the highest recorded value in this dataset. Stacked with ${topMutations[0].name} (${topMutations[0].multiplier}×), the stacking math yields ${topCombo.perHarvest.toLocaleString()} coins in a single harvest.`,
  },
  {
    question: "How do mutations affect crop value?",
    answer:
      "Each mutation applies a multiplier to the base crop value. Mutations range from 0.8× (Withered Husk, a penalty) to 6.0× (Prismatic Rainbow). Stacking an S-Tier mutation on an S-Tier crop is the highest-profit combination in the game — see the table above for the full breakdown.",
  },
  {
    question: "Does the calculator include seasonal crop bonuses?",
    answer:
      "The base calculation uses standard crop values. Seasonal bonuses (+20% during a crop's active season) are applied in-game on top of the calculated value. To estimate seasonal profit, multiply the calculator result by 1.2 for in-season crops.",
  },
  {
    question: "How does quantity affect total value?",
    answer:
      "Total value scales linearly with quantity. 1 harvest of Golden Wheat × Aurelian Crown = 1,920 coins. 10 harvests = 19,200 coins. 100 harvests = 192,000 coins. The quantity table above shows pre-computed values for 1, 10, and 100 harvests of the top crop × top mutation pairing.",
  },
  {
    question: "Should I sell my crops or trade them?",
    answer:
      "The Trading Calculator only displays internal project-recorded fields. Those records cannot be compared with harvest coins to establish a real trading return, and this page does not recommend selling or trading. Keep the game's harvest coin values and Trading recorded units as separate, non-equivalent references.",
  },
];

export default function CropValueCalculatorPage() {
  return (
    <ContentLayout
      title="Grow a Garden Crop Value Calculator"
      description="Pre-calculated profit table for every Grow a Garden crop × every mutation. See base value, mutation bonus, and total value at a glance — no inputs required."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Calculators", href: "/grow-a-garden/calculators" },
        { label: "Crop Value Calculator", href: "/grow-a-garden/crop-value-calculator" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/crop-value-calculator"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Formula Card */}
      <section className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 className="text-sm font-semibold text-[#00E676] mb-2">🧮 Calculation Formula</h2>
        <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
          <code className="text-sm text-white font-mono">
            Total Value = Base Crop Coins × Mutation Multiplier
          </code>
        </div>
        <p className="text-xs text-[#768294] mt-3 leading-relaxed">
          Pet multipliers stack multiplicatively on top — multiply the result by your pet&apos;s
          multiplier (e.g. × 5.0 for Golden Phoenix Chick) for the full stacked value.
        </p>
      </section>

      {/* Main Calculator Table — Crop × Best Mutation */}
      <section aria-labelledby="main-heading">
        <h2
          id="main-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🌾 Crop Value × Best Mutation
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          Every crop paired with its highest-multiplier mutation ({topMutations[0].name} at{" "}
          {topMutations[0].multiplier}×). Shows base value, mutation bonus, and total harvest value.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">#</th>
                <th className="py-3 px-3 font-semibold">Crop</th>
                <th className="py-3 px-3 font-semibold">Tier</th>
                <th className="py-3 px-3 font-semibold">Base Value</th>
                <th className="py-3 px-3 font-semibold">Mutation</th>
                <th className="py-3 px-3 font-semibold">Multiplier</th>
                <th className="py-3 px-3 font-semibold">Bonus</th>
                <th className="py-3 px-3 font-semibold">Total Value</th>
              </tr>
            </thead>
            <tbody>
              {cropsWithBestMutation.map(({ crop, bestMutation, baseValue, bonus, totalValue }, i) => (
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
                      style={{
                        color: tierColors[crop.tier],
                        backgroundColor: tierColors[crop.tier] + "1a",
                      }}
                    >
                      {crop.tier}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-sm text-[#BAC4D1]">{baseValue.toLocaleString()}</td>
                  <td className="py-3 px-3">
                    <Link
                      href={`/grow-a-garden/mutations/${bestMutation.id}`}
                      className="text-xs text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {bestMutation.name}
                    </Link>
                  </td>
                  <td className="py-3 px-3 text-xs font-bold text-[#FF8C00]">
                    {bestMutation.multiplier}×
                  </td>
                  <td className="py-3 px-3 text-xs text-[#00E676]">
                    +{bonus.toLocaleString()}
                  </td>
                  <td className="py-3 px-3 text-sm font-bold text-[#00E676]">
                    {totalValue.toLocaleString()} 🪙
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Top Crop × All Mutations */}
      <section aria-labelledby="breakdown-heading">
        <h2
          id="breakdown-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📊 {topCrop.name} × Every Mutation
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          The highest-CPM crop ({topCrop.name} at {topCrop.coins} base coins) tested against every
          mutation in the database. Sorted by total value descending.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[640px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">#</th>
                <th className="py-3 px-3 font-semibold">Mutation</th>
                <th className="py-3 px-3 font-semibold">Tier</th>
                <th className="py-3 px-3 font-semibold">Base</th>
                <th className="py-3 px-3 font-semibold">Multiplier</th>
                <th className="py-3 px-3 font-semibold">Bonus</th>
                <th className="py-3 px-3 font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {[...topCropBreakdown]
                .sort((a, b) => b.totalValue - a.totalValue)
                .map(({ mutation, baseValue, multiplier, bonus, totalValue }, i) => (
                  <tr
                    key={mutation.id}
                    className="border-b border-[#252936] hover:bg-[#1E212B] transition"
                  >
                    <td className="py-3 px-3 text-[#768294]">{i + 1}</td>
                    <td className="py-3 px-3">
                      <Link
                        href={`/grow-a-garden/mutations/${mutation.id}`}
                        className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                      >
                        {mutation.name}
                      </Link>
                    </td>
                    <td className="py-3 px-3">
                      <span
                        className="code-text inline-block rounded px-2 py-0.5 text-xs font-semibold"
                        style={{
                          color: tierColors[mutation.tier],
                          backgroundColor: tierColors[mutation.tier] + "1a",
                        }}
                      >
                        {mutation.tier}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-xs text-[#BAC4D1]">{baseValue.toLocaleString()}</td>
                    <td className="py-3 px-3 text-xs font-bold text-[#FF8C00]">{multiplier}×</td>
                    <td className="py-3 px-3 text-xs text-[#00E676]">
                      +{bonus.toLocaleString()}
                    </td>
                    <td className="py-3 px-3 text-sm font-bold text-[#00E676]">
                      {totalValue.toLocaleString()} 🪙
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Quantity Scenarios */}
      <section aria-labelledby="quantity-heading">
        <h2
          id="quantity-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🔢 Quantity Scaler — {topCombo.crop.name} × {topCombo.mutation.name}
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          Total value scales linearly with quantity. Each row shows the cumulative coin payout for
          bulk harvests of the top crop × top mutation pairing.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {quantityScenarios.map((qty) => {
            const total = topCombo.perHarvest * qty;
            return (
              <div
                key={qty}
                className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4 text-center"
              >
                <div className="text-xs text-[#768294] uppercase tracking-wider mb-1">
                  {qty} Harvest{qty > 1 ? "s" : ""}
                </div>
                <div className="text-2xl font-bold text-[#00E676]">
                  {total.toLocaleString()}
                </div>
                <div className="text-xs text-[#768294] mt-1">coins</div>
                <div className="text-xs text-[#768294] mt-2 pt-2 border-t border-[#252936]">
                  {topCombo.perHarvest.toLocaleString()} × {qty}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Top Crop × Top 5 Mutations */}
      <section aria-labelledby="top5-heading">
        <h2
          id="top5-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⭐ {topCrop.name} × Top 5 Mutations
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {topMutations.map((m) => {
            const total = Math.round(topCrop.coins * m.multiplier);
            const bonus = total - topCrop.coins;
            return (
              <div
                key={m.id}
                className="rounded-xl border border-[#252936] bg-[#14161D] p-4 hover:border-[#00E676] transition"
              >
                <Link
                  href={`/grow-a-garden/mutations/${m.id}`}
                  className="text-sm font-semibold text-[#BAC4D1] hover:text-[#00E676] transition block"
                >
                  {m.name}
                </Link>
                <div className="text-xs text-[#FF8C00] font-bold mt-1">{m.multiplier}× multiplier</div>
                <div className="mt-3 pt-3 border-t border-[#252936] space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#768294]">Base</span>
                    <span className="text-[#BAC4D1]">{topCrop.coins.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#768294]">Bonus</span>
                    <span className="text-[#00E676]">+{bonus.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold pt-1 border-t border-[#252936]">
                    <span className="text-[#768294]">Total</span>
                    <span className="text-[#00E676]">{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <RelatedContent
        category="guide"
        game="garden"
        currentPath="/grow-a-garden/crop-value-calculator"
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
