import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { mutations, getMutationsByTier } from "@/data/garden/database/mutations";
import { trading } from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Best Mutations in Grow a Garden — Ranked",
  description:
    "Every Grow a Garden mutation ranked by multiplier and value. Compare S-Tier mutations, best combinations, and trading value impact in one place.",
  keywords: [
    "best mutations Grow a Garden",
    "Grow a Garden mutation ranking",
    "Aurelian Crown multiplier",
    "Prismatic Rainbow mutation",
    "Grow a Garden mutation combinations",
    "mutation trading value Grow a Garden",
  ],
  alternates: { canonical: "/grow-a-garden/best-mutations" },
  openGraph: {
    title: "Best Mutations in Grow a Garden — Ranked",
    description:
      "Every mutation ranked by multiplier, with best combinations and trading value impact.",
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

// Ranked mutations — sorted by multiplier descending
const rankedMutations = [...mutations].sort((a, b) => b.multiplier - a.multiplier);

// Top 10 highest-multiplier mutations
const topMutations = rankedMutations.slice(0, 10);

// S-Tier mutations for combination analysis
const sTierMutations = getMutationsByTier("S");

// A-Tier mutations for combination analysis
const aTierMutations = getMutationsByTier("A");

// Join mutations with trading database for trade value impact
const mutationsWithTrading = topMutations.map((m) => {
  const tradingEntry = trading.find(
    (t) => t.category === "Mutation" && t.name.toLowerCase() === m.name.toLowerCase()
  );
  return { mutation: m, trading: tradingEntry };
});

// Best pet for stacking reference
const bestPetMultiplier = 5.0; // Golden Phoenix Chick

const faqs = [
  {
    question: "What is the best mutation in Grow a Garden?",
    answer:
      "Prismatic Rainbow is the highest-multiplier mutation in the game at 6.0x, followed by Midas Bloom at 5.0x and Aurelian Crown at 4.0x. Aurelian Crown is generally considered the best overall due to its connected-plot harvest passive — it quadruples harvesting speed on large farms. Prismatic Rainbow is rare and purely multiplier-based.",
  },
  {
    question: "How do mutation multipliers work?",
    answer:
      "Each mutation has a base multiplier (ranging from 0.8x to 6.0x) that replaces the standard 1.0x harvest value. The multiplier applies to the base crop coin value — for example, a Golden Wheat harvest (480 coins) with a 4.0x Aurelian Crown mutation yields 1,920 coins. Mutations stack multiplicatively with pet multipliers for total yield.",
  },
  {
    question: "What are the best mutation combinations?",
    answer:
      "The best combinations pair high-multiplier mutations with high-multiplier pets. The theoretical maximum is 30.0x — Prismatic Rainbow (6.0x) × Golden Phoenix Chick (5.0x). A more practical endgame target is 20.0x from Aurelian Crown (4.0x) × Golden Phoenix Chick (5.0x), which adds the auto-collect and connected-plot passives for unmatched farming speed.",
  },
  {
    question: "How does mutation trading value work?",
    answer:
      `Mutations are tradeable items in the Grow a Garden market. Higher-tier mutations command premium values — S-Tier mutations like Aurelian Crown and Crystalline Mycelium trade for hundreds of thousands of Sheckles. Demand varies by season and meta. Check our ${trading.filter(t => t.category === "Mutation").length} tradeable mutations in the Trading Values database for current prices and trends.`,
  },
  {
    question: "How rare are S-Tier mutations?",
    answer:
      "S-Tier mutations have an approximate roll rate of 1.2% to 1.4% from standard mutation shards. Premium Event Seeds (Robux-only) guarantee a mutation roll on every harvest, making them the fastest path to S-Tier mutations. Lucky Clover Seeds (Spring Robux) boost mutation roll rates by +25% on adjacent crops.",
  },
  {
    question: "Should I prioritize mutations or pets first?",
    answer:
      "Pets first. A single S-Tier pet like Crystal Unicorn Foal (4.5x) provides a guaranteed multiplier on every harvest, while mutations require rolling and may not land on your most valuable crops. Once you have at least one A-Tier pet, start investing in mutation shards — the multiplicative stacking makes both upgrades essential for endgame farms.",
  },
];

export default function BestMutationsPage() {
  return (
    <ContentLayout
      title="Best Mutations in Grow a Garden"
      description="Ranked comparison of every Grow a Garden mutation — multipliers, best combinations, trading value impact, and rolling strategy. Sourced from the canonical mutations and trading databases."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Best Mutations", href: "/grow-a-garden/best-mutations" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-mutations"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Mutations"
      keywords={["best mutations Grow a Garden", "Grow a Garden mutation ranking", "Aurelian Crown multiplier", "Prismatic Rainbow mutation", "Grow a Garden mutation combinations"]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - AI search summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          Prismatic Rainbow is the highest-multiplier mutation at 6.0x, followed by Midas Bloom at 5.0x and Aurelian Crown at 4.0x. Aurelian Crown is considered the best overall because its connected-plot passive quadruples harvesting speed on large farms. Mutations stack multiplicatively with pets — Aurelian Crown plus a Golden Phoenix Chick (5.0x) reaches 20.0x total yield, while the theoretical max is 30.0x. S-Tier mutations roll at roughly 1.2-1.4% from standard shards, so Premium Event Seeds speed up acquisition.
        </p>
      </section>

      {/* Hero Intro */}
      <section className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          Mutations are the second-largest multiplier source in Grow a Garden after pets. This guide ranks all{" "}
          <strong className="text-white">{mutations.length} mutations</strong> by multiplier, explains how the
          multiplier mechanic works, identifies the best pet+mutation combinations, and shows the live trading
          value impact of each top-tier mutation. All data is sourced from our canonical{" "}
          <Link href="/grow-a-garden/mutations" className="text-[#00E676] hover:underline">
            Mutations Database
          </Link>{" "}
          and{" "}
          <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">
            Trading Values Database
          </Link>
          .
        </p>
      </section>

      {/* Mutation Ranking Table */}
      <section aria-labelledby="ranking-heading">
        <h2
          id="ranking-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          🏆 Mutation Ranking — Top 10 by Multiplier
        </h2>
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
              {topMutations.map((m, i) => (
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
                      {m.tier}-Tier
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
      </section>

      {/* Multiplier Explanation */}
      <section aria-labelledby="multiplier-heading">
        <h2
          id="multiplier-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          🔢 How Mutation Multipliers Work
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm text-[#BAC4D1] leading-relaxed mb-4">
            Every mutation has a <strong className="text-white">base multiplier</strong> that replaces the
            standard 1.0x harvest value. When a mutation is applied to a crop plot, every harvest from that
            plot yields <strong className="text-white">crop base value × mutation multiplier</strong> coins.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-[#1E212B] p-4 border border-[#252936]">
              <p className="text-xs text-[#768294] mb-1">Example: Aurelian Crown on Golden Wheat</p>
              <p className="text-sm font-bold text-[#00E676]">
                480 coins × 4.0x = 1,920 coins per harvest
              </p>
            </div>
            <div className="rounded-lg bg-[#1E212B] p-4 border border-[#252936]">
              <p className="text-xs text-[#768294] mb-1">Example: Prismatic Rainbow on Golden Wheat</p>
              <p className="text-sm font-bold text-[#00E676]">
                480 coins × 6.0x = 2,880 coins per harvest
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs text-[#768294] leading-relaxed">
            Mutations stack <strong className="text-white">multiplicatively</strong> with pet multipliers. The
            same Aurelian Crown harvest with a Golden Phoenix Chick equipped (5.0x) yields{" "}
            <strong className="text-[#00E676]">9,600 coins</strong> (480 × 4.0 × 5.0).
          </p>
        </div>
      </section>

      {/* Best Mutation Combinations */}
      <section aria-labelledby="combinations-heading">
        <h2
          id="combinations-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          🎯 Best Mutation + Pet Combinations
        </h2>
        <p className="text-xs text-[#768294] mb-4">
          The strongest farm setups pair S-Tier mutations with S-Tier pets. Below are the top combinations
          ranked by total yield multiplier.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">Mutation</th>
                <th className="py-3 px-3 font-semibold">Pet</th>
                <th className="py-3 px-3 font-semibold">Mutation Mult.</th>
                <th className="py-3 px-3 font-semibold">Pet Mult.</th>
                <th className="py-3 px-3 font-semibold">Total Yield</th>
              </tr>
            </thead>
            <tbody>
              {sTierMutations.map((m) => (
                <tr key={m.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3">
                    <Link
                      href={`/grow-a-garden/mutations/${m.id}`}
                      className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {m.name}
                    </Link>
                  </td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">Golden Phoenix Chick</td>
                  <td className="py-3 px-3 text-sm font-semibold text-[#00E676]">{m.multiplier.toFixed(1)}x</td>
                  <td className="py-3 px-3 text-sm font-semibold text-[#00E676]">{bestPetMultiplier.toFixed(1)}x</td>
                  <td className="py-3 px-3 text-base font-bold text-[#00E676]">
                    {(m.multiplier * bestPetMultiplier).toFixed(1)}x
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-[#1E212B] p-4 border border-[#252936]">
            <p className="text-xs text-[#768294] mb-1">S-Tier mutations available:</p>
            <p className="text-sm font-bold text-white">{sTierMutations.length} mutations</p>
            <p className="mt-1 text-xs text-[#BAC4D1]">
              {sTierMutations.map((m) => m.name).join(", ")}
            </p>
          </div>
          <div className="rounded-lg bg-[#1E212B] p-4 border border-[#252936]">
            <p className="text-xs text-[#768294] mb-1">A-Tier alternatives:</p>
            <p className="text-sm font-bold text-white">{aTierMutations.length} mutations</p>
            <p className="mt-1 text-xs text-[#BAC4D1]">
              {aTierMutations.slice(0, 5).map((m) => m.name).join(", ")}
              {aTierMutations.length > 5 && ` + ${aTierMutations.length - 5} more`}
            </p>
          </div>
        </div>
      </section>

      {/* Trading Value Impact */}
      <section aria-labelledby="trading-heading">
        <h2
          id="trading-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          💰 Trading Value Impact
        </h2>
        <p className="text-xs text-[#768294] mb-4">
          Mutations are tradeable items. The table below shows the live market value of each top-tier mutation,
          sourced from our Trading Values database. High-demand mutations can sell quickly at premium prices.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">Mutation</th>
                <th className="py-3 px-3 font-semibold">Rarity</th>
                <th className="py-3 px-3 font-semibold">Trade Value</th>
                <th className="py-3 px-3 font-semibold">Demand</th>
                <th className="py-3 px-3 font-semibold">Trend</th>
                <th className="py-3 px-3 font-semibold">Trade Link</th>
              </tr>
            </thead>
            <tbody>
              {mutationsWithTrading.map(({ mutation, trading: t }) => (
                <tr key={mutation.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3 font-semibold text-[#BAC4D1]">{mutation.name}</td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{t?.rarity ?? "—"}</td>
                  <td className="py-3 px-3 text-sm font-bold text-[#00E676]">
                    {t ? `${formatValue(t.value)} 🪙` : "—"}
                  </td>
                  <td className="py-3 px-3">
                    {t ? (
                      <span className={`rounded px-2 py-0.5 text-xs font-semibold ${demandBadge[t.demand]}`}>
                        {t.demand}
                      </span>
                    ) : (
                      <span className="text-xs text-[#768294]">—</span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{t?.trend ?? "—"}</td>
                  <td className="py-3 px-3">
                    {t ? (
                      <Link
                        href={`/grow-a-garden/trading/${t.id}`}
                        className="text-xs font-semibold text-[#00E676] hover:underline"
                      >
                        View trade page →
                      </Link>
                    ) : (
                      <span className="text-xs text-[#768294]">Not traded</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* All Mutations by Tier */}
      <section aria-labelledby="all-tier-heading">
        <h2
          id="all-tier-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          📋 All Mutations by Tier
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {(["S", "A", "B", "C"] as const).map((tier) => {
            const tierMutations = getMutationsByTier(tier);
            return (
              <div key={tier} className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="code-text rounded px-2 py-0.5 text-xs font-semibold"
                    style={{ color: tierColors[tier], backgroundColor: tierColors[tier] + "1a" }}
                  >
                    {tier}-Tier
                  </span>
                  <span className="text-xs text-[#768294]">{tierMutations.length} mutations</span>
                </div>
                <ul className="space-y-2">
                  {tierMutations.map((m) => (
                    <li key={m.id} className="flex items-center justify-between gap-2">
                      <Link
                        href={`/grow-a-garden/mutations/${m.id}`}
                        className="text-xs text-[#BAC4D1] hover:text-[#00E676] transition"
                      >
                        {m.name}
                      </Link>
                      <span className="text-xs font-semibold text-[#00E676]">{m.multiplier.toFixed(1)}x</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <RelatedContent
        category="guide"
        game="garden"
        currentPath="/grow-a-garden/best-mutations"
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
