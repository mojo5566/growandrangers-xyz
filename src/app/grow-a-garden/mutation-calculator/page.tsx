import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { crops } from "@/data/garden/database/crops";
import { mutations } from "@/data/garden/database/mutations";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Mutation Calculator — Grow a Garden Profit",
  description:
    "Compare mutation profit on every Grow a Garden crop. See multiplier, estimated value, and profit comparison vs baseline harvest for each mutation × crop pairing.",
  keywords: [
    "Grow a Garden mutation calculator",
    "mutation profit calculator Grow a Garden",
    "Grow a Garden multiplier calculator",
    "mutation vs crop profit",
    "Grow a Garden mutation comparison",
    "best mutation per crop",
  ],
  alternates: { canonical: "/grow-a-garden/mutation-calculator" },
  openGraph: {
    title: "Mutation Calculator — Grow a Garden Profit",
    description:
      "Compare mutation profit on every crop. See multiplier, estimated value, and profit comparison vs baseline.",
    type: "website",
  },
};

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

// All mutations sorted by multiplier descending
const rankedMutations = [...mutations].sort((a, b) => b.multiplier - a.multiplier);

// Baseline = no mutation (1.0×)
const BASELINE_MULTIPLIER = 1.0;

// Top 5 crops by base value — for cross-mutation comparison
const topCrops = [...crops].sort((a, b) => b.coins - a.coins).slice(0, 5);

// For each mutation, compute: multiplier, best crop pairing, baseline comparison
const mutationAnalysis = rankedMutations.map((m) => {
  const bestCrop = [...crops].sort((a, b) => b.coins - a.coins)[0];
  const estimatedValue = Math.round(bestCrop.coins * m.multiplier);
  const baselineValue = bestCrop.coins;
  const profitDelta = estimatedValue - baselineValue;
  const profitPct = Math.round((m.multiplier - BASELINE_MULTIPLIER) * 100);
  return {
    mutation: m,
    bestCrop,
    multiplier: m.multiplier,
    estimatedValue,
    baselineValue,
    profitDelta,
    profitPct,
  };
});

// S-Tier mutations only — for the highlight section
const sTierMutations = mutationAnalysis.filter((a) => a.mutation.tier === "S");

const faqs = [
  {
    question: "How is mutation profit calculated?",
    answer:
      "Mutation profit = (crop base value × mutation multiplier) − crop base value. For example, Golden Wheat (480 coins) × Aurelian Crown (4.0×) = 1,920 coins. Profit vs baseline = 1,920 − 480 = +1,440 coins (+300%).",
  },
  {
    question: "Which mutation is the most profitable?",
    answer:
      `Prismatic Rainbow is the most profitable mutation at 6.0× multiplier. On the highest-value crop (Golden Wheat at 480 coins), it yields 2,880 coins per harvest — a +500% profit increase vs baseline. Midas Bloom (5.0×) is second at 2,400 coins.`,
  },
  {
    question: "What is a baseline harvest in Grow a Garden?",
    answer:
      "A baseline harvest is the crop's base coin value with no mutation applied (1.0× multiplier). For Golden Wheat, that's 480 coins. The profit comparison column shows how much extra each mutation adds on top of this baseline.",
  },
  {
    question: "Should I reroll a B-Tier mutation for an S-Tier?",
    answer:
      "It depends on your shard budget. S-Tier mutations have ~1.2% roll rate vs B-Tier's ~11%. Statistically, you'd need ~83 rolls to expect one S-Tier. If you have 50+ shards saved and an active boosted event, rerolling is worth it. Otherwise, the B-Tier's reliable 2.0× multiplier is better than risking a C-Tier reroll.",
  },
  {
    question: "Do conditional mutation bonuses show in the calculator?",
    answer:
      "The calculator uses the standard multiplier. Conditional bonuses (e.g., Hoarfrost Corolla's +25% during Winter) are noted in each mutation's database entry. To estimate conditional profit, multiply the result by the bonus multiplier during the active condition.",
  },
  {
    question: "How does mutation profit compare to trading?",
    answer:
      "S-Tier mutated crops often command 5-10× premium on the trade market vs their base sell value. A Prismatic Rainbow Golden Wheat harvest sells for 2,880 coins but can trade for 15,000+ coins. Check the Trading Value Calculator to compare sell-vs-trade decisions.",
  },
];

export default function MutationCalculatorPage() {
  return (
    <ContentLayout
      title="Grow a Garden Mutation Profit Calculator"
      description="Compare mutation profit on every Grow a Garden crop. See multiplier, estimated value, and profit comparison vs baseline harvest — pre-calculated from canonical databases."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Calculators", href: "/grow-a-garden/calculators" },
        { label: "Mutation Calculator", href: "/grow-a-garden/mutation-calculator" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/mutation-calculator"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Formula Card */}
      <section className="rounded-xl border border-[#FF8C00]/30 bg-[#FF8C00]/5 p-5">
        <h2 className="text-sm font-semibold text-[#FF8C00] mb-2">🧮 Profit Calculation</h2>
        <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936] space-y-2">
          <code className="text-sm text-white font-mono block">
            Estimated Value = Crop Base × Mutation Multiplier
          </code>
          <code className="text-sm text-white font-mono block">
            Profit Delta = Estimated Value − Baseline (1.0×)
          </code>
          <code className="text-sm text-white font-mono block">
            Profit % = (Multiplier − 1.0) × 100
          </code>
        </div>
        <p className="text-xs text-[#768294] mt-3 leading-relaxed">
          Baseline = no mutation applied. Profit comparison shows how much extra each mutation
          adds. S-Tier mutations deliver +400-500% profit; C-Tier mutations deliver +0-40%.
        </p>
      </section>

      {/* Main Mutation Comparison Table */}
      <section aria-labelledby="ranking-heading">
        <h2
          id="ranking-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🏆 Mutation Profit Ranking
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          All {mutations.length} mutations ranked by multiplier. Estimated value uses the
          highest-base crop ({topCrops[0].name} at {topCrops[0].coins} coins). Profit delta and
          percentage compare against the no-mutation baseline.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[820px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">#</th>
                <th className="py-3 px-3 font-semibold">Mutation</th>
                <th className="py-3 px-3 font-semibold">Tier</th>
                <th className="py-3 px-3 font-semibold">Multiplier</th>
                <th className="py-3 px-3 font-semibold">Baseline</th>
                <th className="py-3 px-3 font-semibold">Estimated</th>
                <th className="py-3 px-3 font-semibold">Profit Δ</th>
                <th className="py-3 px-3 font-semibold">Profit %</th>
              </tr>
            </thead>
            <tbody>
              {mutationAnalysis.map(
                ({ mutation, multiplier, baselineValue, estimatedValue, profitDelta, profitPct }, i) => (
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
                    <td className="py-3 px-3 text-sm font-bold text-[#FF8C00]">{multiplier}×</td>
                    <td className="py-3 px-3 text-xs text-[#768294]">
                      {baselineValue.toLocaleString()}
                    </td>
                    <td className="py-3 px-3 text-sm font-bold text-[#00E676]">
                      {estimatedValue.toLocaleString()} 🪙
                    </td>
                    <td
                      className={`py-3 px-3 text-xs font-bold ${
                        profitDelta >= 0 ? "text-[#00E676]" : "text-[#FF3D00]"
                      }`}
                    >
                      {profitDelta >= 0 ? "+" : ""}
                      {profitDelta.toLocaleString()}
                    </td>
                    <td
                      className={`py-3 px-3 text-xs font-bold ${
                        profitPct >= 0 ? "text-[#00E676]" : "text-[#FF3D00]"
                      }`}
                    >
                      {profitPct >= 0 ? "+" : ""}
                      {profitPct}%
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* S-Tier Mutation Highlights */}
      <section aria-labelledby="s-tier-heading">
        <h2
          id="s-tier-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🔥 S-Tier Mutations — Highest Profit
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sTierMutations.map(({ mutation, multiplier, estimatedValue, profitDelta, profitPct }) => (
            <div
              key={mutation.id}
              className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4 hover:border-[#FF3D00] transition"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <Link
                  href={`/grow-a-garden/mutations/${mutation.id}`}
                  className="text-sm font-semibold text-white hover:text-[#00E676] transition"
                >
                  {mutation.name}
                </Link>
                <span
                  className="code-text inline-block rounded px-2 py-0.5 text-xs font-semibold"
                  style={{ color: "#FF3D00", backgroundColor: "#FF3D001a" }}
                >
                  S
                </span>
              </div>
              <div className="text-2xl font-bold text-[#FF8C00] mb-2">{multiplier}×</div>
              <div className="space-y-1 text-xs pt-2 border-t border-[#252936]">
                <div className="flex justify-between">
                  <span className="text-[#768294]">Estimated</span>
                  <span className="text-[#00E676] font-bold">
                    {estimatedValue.toLocaleString()} 🪙
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#768294]">Profit Δ</span>
                  <span className="text-[#00E676] font-bold">
                    +{profitDelta.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#768294]">Profit %</span>
                  <span className="text-[#00E676] font-bold">+{profitPct}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Crops × Top Mutations Cross-Table */}
      <section aria-labelledby="cross-heading">
        <h2
          id="cross-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📊 Top Crops × Top Mutations
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          Estimated value per harvest for the top 5 crops × top 5 mutations. Find the optimal
          crop-mutation pairing for your farm.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">Crop</th>
                {rankedMutations.slice(0, 5).map((m) => (
                  <th key={m.id} className="py-3 px-3 font-semibold text-center">
                    {m.name}
                    <div className="text-[10px] text-[#FF8C00] font-bold mt-0.5">{m.multiplier}×</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {topCrops.map((crop) => (
                <tr key={crop.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3">
                    <Link
                      href={`/grow-a-garden/crops/${crop.id}`}
                      className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {crop.name}
                    </Link>
                    <div className="text-[10px] text-[#768294]">{crop.coins} base</div>
                  </td>
                  {rankedMutations.slice(0, 5).map((m) => {
                    const value = Math.round(crop.coins * m.multiplier);
                    return (
                      <td key={m.id} className="py-3 px-3 text-center">
                        <span className="text-sm font-bold text-[#00E676]">
                          {value.toLocaleString()}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <RelatedContent
        category="guide"
        game="garden"
        currentPath="/grow-a-garden/mutation-calculator"
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
