import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { mutations, getMutationsByTier } from "@/data/garden/database/mutations";
import { crops } from "@/data/garden/database/crops";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Grow a Garden Mutation Guide",
  description:
    "Complete Grow a Garden mutation guide: what mutations are, how multipliers work, how to get mutations, best combinations, and profit examples with real numbers.",
  keywords: [
    "Grow a Garden mutation guide",
    "Grow a Garden mutations explained",
    "Grow a Garden mutation multiplier",
    "how to get mutations Grow a Garden",
    "Grow a Garden mutation combinations",
    "Grow a Garden mutation profit",
  ],
  alternates: { canonical: "/grow-a-garden/mutation-guide" },
  openGraph: {
    title: "Grow a Garden Mutation Guide",
    description:
      "What mutations are, how multipliers work, how to get mutations, best combinations, and profit examples.",
    type: "website",
  },
};

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

// All mutations sorted by multiplier
const rankedMutations = [...mutations].sort((a, b) => b.multiplier - a.multiplier);

// Tier counts
const tierCounts = {
  S: getMutationsByTier("S").length,
  A: getMutationsByTier("A").length,
  B: getMutationsByTier("B").length,
  C: getMutationsByTier("C").length,
};

// Top crop for profit examples
const topCrop = [...crops].sort((a, b) => b.coins - a.coins)[0];

// Profit example: top crop × top mutation
const topMutation = rankedMutations[0];
const profitExample = {
  base: topCrop.coins,
  multiplier: topMutation.multiplier,
  total: Math.round(topCrop.coins * topMutation.multiplier),
  profit: Math.round(topCrop.coins * topMutation.multiplier) - topCrop.coins,
};

// Best combinations: top 3 mutations × top 3 crops
const top3Mutations = rankedMutations.slice(0, 3);
const top3Crops = [...crops].sort((a, b) => b.coins - a.coins).slice(0, 3);

const faqs = [
  {
    question: "What are mutations in Grow a Garden?",
    answer:
      "Mutations are permanent multipliers applied to a specific plot of land. Each harvest from that plot is multiplied by the mutation's multiplier value (ranging from 0.8× to 6.0×). Mutations are obtained by spending Mutation Shards at the Mutation Station. Once applied, a mutation stays on that plot until you overwrite it with another mutation — there's no refund.",
  },
  {
    question: "How do mutation multipliers work?",
    answer:
      "Total harvest value = crop base coins × mutation multiplier × pet multiplier. For example, Golden Wheat (480 coins) × Aurelian Crown (4.0× mutation) × Golden Phoenix Chick (5.0× pet) = 9,600 coins per harvest. Mutations stack multiplicatively with pet multipliers, which is why getting both online dramatically scales farm income.",
  },
  {
    question: "How do I get mutations in Grow a Garden?",
    answer:
      "Visit the Mutation Station (unlocks at 1,500 total coins earned) and spend Mutation Shards. Single rolls cost 1 shard (~1.2% S-Tier rate); bulk rolls of 10 cost 10 shards (~11% S-Tier rate). Shards come from daily login rewards (3-5 per day), promo codes (10-20 per drop), seasonal events (20-50 per event), and any additional sources enabled by the current game version.",
  },
  {
    question: "What is the best mutation in Grow a Garden?",
    answer:
      `Prismatic Rainbow is the strongest mutation at 6.0× multiplier, followed by Midas Bloom (5.0×) and Aurelian Crown (4.0×). On the highest-value crop (${topCrop.name} at ${topCrop.coins} coins), a ${topMutation.name} mutation yields ${profitExample.total.toLocaleString()} coins per harvest — a +${((profitExample.multiplier - 1) * 100).toFixed(0)}% profit increase over baseline.`,
  },
  {
    question: "Should I single-roll or bulk-roll mutations?",
    answer:
      "Always bulk-roll. Single-roll S-Tier rate is ~1.2% per shard; bulk-rolling 10 shards at once raises the effective S-Tier chance to ~11% per session. Save 50+ shards before rolling seriously, and ideally wait for a boosted event to multiply your odds further. Single-rolling starter shards is the #1 reason new players get stuck with C-Tier mutations.",
  },
  {
    question: "Can mutations be removed or refunded?",
    answer:
      "No. Once applied, a mutation stays on the plot until overwritten by another mutation roll. There's no refund — the previous mutation is permanently lost. Always check your new roll's multiplier before applying. If you roll a C-Tier mutation while having a B-Tier active, do NOT apply the C-Tier; save the shard for another bulk-roll session.",
  },
];

export default function MutationGuidePage() {
  return (
    <ContentLayout
      title="Grow a Garden Mutation Guide"
      description="Complete Grow a Garden mutation guide: what mutations are, how multipliers work, how to get mutations, best combinations, and profit examples with real numbers."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Mutation Guide", href: "/grow-a-garden/mutation-guide" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/mutation-guide"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Mutations"
      keywords={[
        "Grow a Garden mutation guide",
        "Grow a Garden mutations explained",
        "Grow a Garden mutation multiplier",
        "how to get mutations Grow a Garden",
        "Grow a Garden mutation combinations",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - AI search summary */}
      <section
        aria-labelledby="quick-answer-heading"
        className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5"
      >
        <h2
          id="quick-answer-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3"
        >
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          Mutations are permanent plot-level multipliers (0.8× to 6.0×) that stack multiplicatively
          with pet multipliers — total harvest = crop base × mutation × pet. Roll them at the
          Mutation Station (unlocks at 1,500 coins) using Mutation Shards: single-roll costs 1
          shard (~1.2% S-Tier), bulk-roll 10 costs 10 shards (~11%). Prismatic Rainbow (6.0×) is
          the strongest, turning 480-coin Golden Wheat into 2,880 coins before pet stacking.
        </p>
      </section>

      {/* What are mutations */}
      <section aria-labelledby="what-heading">
        <h2
          id="what-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🧬 What Are Mutations?
        </h2>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            Mutations are permanent multipliers applied to a specific plot of land in Grow a Garden.
            Each harvest from that plot is multiplied by the mutation&apos;s multiplier value,
            ranging from 0.8× (a penalty from Withered Husk) to 6.0× (the maximum from Prismatic
            Rainbow). Once applied, mutations stay on the plot until you overwrite them with
            another roll — there&apos;s no refund on the previous mutation.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#768294]">
            Mutations are the single biggest wealth multiplier in the game. A 6.0× Prismatic
            Rainbow on a 480-coin Golden Wheat plot turns every harvest from 480 coins into 2,880
            coins — and that&apos;s before pet multipliers. Browse all {mutations.length} mutations
            in the{" "}
            <Link href="/grow-a-garden/mutations" className="text-[#00E676] hover:underline">
              Mutations Database
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Multiplier Explanation */}
      <section aria-labelledby="multiplier-heading">
        <h2
          id="multiplier-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ✖️ How Multipliers Work
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936] mb-4">
            <code className="text-sm text-white font-mono">
              Total Harvest = Crop Base × Mutation × Pet
            </code>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Step 1: Base</div>
              <div className="text-sm font-semibold text-white mt-1">{topCrop.name}</div>
              <div className="text-lg font-bold text-[#00E676]">{profitExample.base} 🪙</div>
            </div>
            <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Step 2: × Mutation</div>
              <div className="text-sm font-semibold text-white mt-1">{topMutation.name}</div>
              <div className="text-lg font-bold text-[#FF8C00]">{profitExample.multiplier}×</div>
            </div>
            <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Step 3: Total</div>
              <div className="text-sm font-semibold text-white mt-1">Per Harvest</div>
              <div className="text-lg font-bold text-[#00E676]">
                {profitExample.total.toLocaleString()} 🪙
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-[#768294]">
            Profit increase vs baseline:{" "}
            <span className="text-[#00E676] font-bold">
              +{profitExample.profit.toLocaleString()} coins (+{((profitExample.multiplier - 1) * 100).toFixed(0)}%)
            </span>
            . Add a 5.0× pet multiplier for{" "}
            <span className="text-[#00E676] font-bold">
              {(profitExample.total * 5).toLocaleString()} coins per harvest
            </span>
            .
          </p>
        </div>
      </section>

      {/* How to Get Mutations */}
      <section aria-labelledby="how-to-get-heading">
        <h2
          id="how-to-get-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🔮 How to Get Mutations
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-3">Step 1: Unlock the Mutation Station</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Earn 1,500 total coins to unlock the Mutation Station in the Lab building. This is
              typically achievable within 30-45 minutes of starting. The unlock is permanent — you
              only need to do this once.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-3">Step 2: Collect Mutation Shards</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Shards come from daily login rewards (3-5/day), promo codes (10-20/drop — see our
              Codes page), seasonal events (20-50/event), and any additional sources enabled by
              the current game version. Target 50+ shards before rolling seriously.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-3">Step 3: Bulk-Roll During Boosted Events</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Single-roll S-Tier rate: ~1.2%. Bulk-roll 10 at once: ~11%. Boosted events multiply
              these rates 2-3×. Wait for an event before spending your saved shards.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-3">Step 4: Apply to Your Main Plot</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Apply mutations to your highest-CPM plot first. The mutation multiplier applies to
              every harvest on that plot, permanently. Stack with a pet multiplier for exponential
              income growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mutation Tier Distribution */}
      <section aria-labelledby="distribution-heading">
        <h2
          id="distribution-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📊 Mutation Tier Distribution
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { tier: "S", count: tierCounts.S, mult: "3.5× - 6.0×", color: tierColors.S },
            { tier: "A", count: tierCounts.A, mult: "2.5× - 3.4×", color: tierColors.A },
            { tier: "B", count: tierCounts.B, mult: "1.7× - 2.4×", color: tierColors.B },
            { tier: "C", count: tierCounts.C, mult: "1.0× - 1.6×", color: tierColors.C },
          ].map((t) => (
            <div
              key={t.tier}
              className="rounded-xl border bg-[#14161D] p-4 text-center"
              style={{ borderColor: t.color + "33" }}
            >
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: t.color }}
              >
                {t.count}
              </div>
              <div className="text-xs text-[#768294] uppercase tracking-wider">
                {t.tier}-Tier
              </div>
              <div className="text-xs text-[#BAC4D1] mt-1">{t.mult}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Combinations */}
      <section aria-labelledby="combos-heading">
        <h2
          id="combos-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🏆 Best Mutation Combinations
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          Top 3 mutations × top 3 crops — pre-calculated yield per harvest using recorded fields. The intersection of
          highest recorded multipliers and highest recorded base values yields the mathematically highest-yield combinations in
          this example.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[640px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">Mutation</th>
                <th className="py-3 px-3 font-semibold">Multiplier</th>
                {top3Crops.map((c) => (
                  <th key={c.id} className="py-3 px-3 font-semibold text-center">
                    {c.name}
                    <div className="text-[10px] text-[#768294] font-normal mt-0.5">
                      {c.coins} base
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {top3Mutations.map((m) => (
                <tr key={m.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3">
                    <Link
                      href={`/grow-a-garden/mutations/${m.id}`}
                      className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {m.name}
                    </Link>
                  </td>
                  <td className="py-3 px-3 text-sm font-bold text-[#FF8C00]">{m.multiplier}×</td>
                  {top3Crops.map((c) => {
                    const value = Math.round(c.coins * m.multiplier);
                    return (
                      <td key={c.id} className="py-3 px-3 text-center">
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
        <p className="mt-3 text-xs text-[#768294]">
          For more combination analysis, see our{" "}
          <Link
            href="/grow-a-garden/best-mutation-combinations"
            className="text-[#00E676] hover:underline"
          >
            Best Mutation Combinations
          </Link>{" "}
          guide or try the{" "}
          <Link
            href="/grow-a-garden/mutation-calculator"
            className="text-[#00E676] hover:underline"
          >
            Mutation Calculator
          </Link>
          .
        </p>
      </section>

      {/* Profit Examples */}
      <section aria-labelledby="examples-heading">
        <h2
          id="examples-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          💰 Profit Examples
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              label: "No Mutation",
              crop: topCrop.name,
              calc: `${topCrop.coins} × 1.0×`,
              total: topCrop.coins,
              color: "#768294",
            },
            {
              label: "B-Tier Mutation",
              crop: topCrop.name,
              calc: `${topCrop.coins} × 2.0×`,
              total: topCrop.coins * 2,
              color: "#FFD700",
            },
            {
              label: "S-Tier Mutation",
              crop: topCrop.name,
              calc: `${topCrop.coins} × ${topMutation.multiplier}×`,
              total: profitExample.total,
              color: "#FF3D00",
            },
          ].map((ex) => (
            <div
              key={ex.label}
              className="rounded-xl border bg-[#14161D] p-4"
              style={{ borderColor: ex.color + "33" }}
            >
              <div className="text-xs uppercase tracking-wider mb-1" style={{ color: ex.color }}>
                {ex.label}
              </div>
              <div className="text-xs text-[#768294] mb-2">{ex.crop}</div>
              <div className="text-xs font-mono text-[#BAC4D1] mb-2">{ex.calc}</div>
              <div className="text-2xl font-bold" style={{ color: ex.color }}>
                {ex.total.toLocaleString()} 🪙
              </div>
            </div>
          ))}
        </div>
      </section>

      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/mutation-guide" />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
