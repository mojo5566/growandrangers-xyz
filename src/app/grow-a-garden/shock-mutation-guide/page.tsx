import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { mutations } from "@/data/garden/database/mutations";
import { crops } from "@/data/garden/database/crops";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Shock Mutation Guide — Grow a Garden",
  description:
    "Complete guide to shock-themed mutations in Grow a Garden: Frozen Bloom, Wet Bloom, Glowing Bloom, and Toxic Bloom. Multipliers, profit examples, and when to use each.",
  keywords: [
    "shock mutation Grow a Garden",
    "Frozen Bloom mutation",
    "Wet Bloom mutation",
    "Glowing Bloom mutation",
    "Toxic Bloom mutation",
    "Grow a Garden weather mutations",
  ],
  alternates: { canonical: "/grow-a-garden/shock-mutation-guide" },
  openGraph: {
    title: "Shock Mutation Guide — Grow a Garden",
    description:
      "Complete guide to shock-themed mutations: Frozen Bloom, Wet Bloom, Glowing Bloom, and Toxic Bloom with multipliers and profit examples.",
    type: "website",
  },
};

// "Shock" mutations — weather/elemental-themed bloom mutations
const shockMutations = mutations
  .filter((m) =>
    ["frozen", "wet", "glowing", "toxic", "giant", "rotten"].some((k) =>
      m.name.toLowerCase().includes(k)
    )
  )
  .sort((a, b) => b.multiplier - a.multiplier);

const topCrops = [...crops].sort((a, b) => b.coins - a.coins).slice(0, 5);

const profitMatrix = shockMutations.map((m) => ({
  mutation: m.name,
  multiplier: m.multiplier,
  tier: m.tier,
  profits: topCrops.map((c) => ({
    crop: c.name,
    value: Math.round(c.coins * m.multiplier),
  })),
}));

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

// Helper: lookup specific mutations for matrix references
const frozenBloom = shockMutations.find((m) => m.name === "Frozen Bloom");
const giantBloom = shockMutations.find((m) => m.name === "Giant Bloom");
const glowingBloom = shockMutations.find((m) => m.name === "Glowing Bloom");
const wetBloom = shockMutations.find((m) => m.name === "Wet Bloom");
const rottenBloom = shockMutations.find((m) => m.name === "Rotten Bloom");

const faqs = [
  {
    question: "What are shock mutations in Grow a Garden?",
    answer:
      "Shock mutations are a family of weather- and element-themed bloom mutations in Grow a Garden. They include Frozen Bloom, Wet Bloom, Glowing Bloom, Toxic Bloom, Giant Bloom, and Rotten Bloom. These mutations occupy the mid-tier of the mutation ecosystem, with multipliers ranging from below 1.0× (Rotten Bloom) to mid-tier values. They are common early-game rolls and useful for filling plots before acquiring S-Tier mutations.",
  },
  {
    question: "Which shock mutation is the best?",
    answer:
      "Among the shock-themed bloom mutations, the ones with the highest multipliers are the most valuable. Use our ranking table below to compare them. Generally, Glowing Bloom and Giant Bloom tend to be the strongest in this family, while Rotten Bloom is the only mutation in the game with a multiplier below 1.0× — it actually reduces crop value and should be overwritten immediately.",
  },
  {
    question: "Should I keep shock mutations or reroll for S-Tier?",
    answer:
      "Keep shock mutations on your secondary plots while you work toward S-Tier mutations for your main plot. Once you have a Prismatic Rainbow or Midas Bloom for your main plot, reroll the shock mutations on your secondary plots. Always keep at least one mid-tier mutation per plot — even a 2.0× mutation is better than no mutation.",
  },
  {
    question: "Is Rotten Bloom ever useful?",
    answer:
      "No. Rotten Bloom is the only mutation in the game with a multiplier below 1.0× — it actively reduces your crop value. If you roll Rotten Bloom, do not apply it. If you accidentally apply it, overwrite it with any other mutation as soon as possible. There is no scenario where Rotten Bloom is desirable.",
  },
  {
    question: "Do shock mutations stack with pet multipliers?",
    answer:
      "Yes. All mutation multipliers stack multiplicatively with pet multipliers, including shock mutations. A 2.0× shock mutation paired with a 3.5× pet produces a 7.0× effective multiplier — competitive with an unboosted A-Tier mutation plot.",
  },
  {
    question: "Where can I see all shock mutations in the database?",
    answer:
      "Browse the complete Mutations Database at /grow-a-garden/mutations for every mutation in the game, including all shock-themed bloom mutations with their multipliers, tiers, and descriptions.",
  },
];

export default function ShockMutationGuidePage() {
  return (
    <ContentLayout
      title="Shock Mutation Guide — Grow a Garden"
      description="Complete guide to shock-themed mutations: Frozen Bloom, Wet Bloom, Glowing Bloom, and Toxic Bloom with multipliers and profit examples."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Shock Mutation Guide", href: "/grow-a-garden/shock-mutation-guide" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/shock-mutation-guide"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Opening — reframed as filler-mutation strategy, not a generic intro */}
      <section className="rounded-xl border border-[#3A86FF]/30 bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          Shock mutations are the <strong className="text-white">filler mutations</strong> of Grow a Garden — the weather- and element-themed rolls you land while chasing{" "}
          <Link href="/grow-a-garden/rainbow-mutation-guide" className="text-[#00E676] hover:underline">Prismatic Rainbow</Link>{" "}
          or{" "}
          <Link href="/grow-a-garden/gold-mutation-guide" className="text-[#00E676] hover:underline">Midas Bloom</Link>. They range from {frozenBloom?.multiplier}× (Frozen Bloom, A-Tier) down to {rottenBloom?.multiplier}× (Rotten Bloom, actively harmful). The mistake most players make is treating shock mutations as main-plot candidates — they are not. They are <em className="text-white">bridge income</em> for secondary plots while you bank shards for S-Tier pushes. This guide shows you exactly which shock mutation belongs on which plot, when to reroll them, and how to avoid the Rotten Bloom trap. Data is pulled from the canonical{" "}
          <Link href="/grow-a-garden/mutations" className="text-[#00E676] hover:underline">Mutations Database</Link>.
        </p>
      </section>

      {/* Plot-Slot Allocation Matrix — NEW structure, replaces generic Ranking Table */}
      <section aria-labelledby="allocation-heading">
        <h2
          id="allocation-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🗺️ Plot-Slot Allocation Matrix (Which Shock Goes Where)
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-4">
            Stop ranking shock mutations by multiplier alone. The right shock mutation depends on <strong className="text-white">which plot it is filling</strong> and <strong className="text-white">what season it is</strong>. Use this matrix to allocate rolls efficiently — a 1.9× Wet Bloom on a rain-night main plot outperforms a 3.0× Giant Bloom on a secondary carrot plot.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-[#1E212B] text-[#768294]">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Mutation</th>
                  <th className="px-4 py-2 text-left font-semibold">Base × / Peak ×</th>
                  <th className="px-4 py-2 text-left font-semibold">Best Plot Slot</th>
                  <th className="px-4 py-2 text-left font-semibold">Worst Plot Slot</th>
                  <th className="px-4 py-2 text-left font-semibold">Keep or Reroll?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#252936]">
                {shockMutations.map((m) => {
                  const isRotten = m.name === "Rotten Bloom";
                  const isFrozen = m.name === "Frozen Bloom";
                  const isGiant = m.name === "Giant Bloom";
                  const isGlowing = m.name === "Glowing Bloom";
                  const isWet = m.name === "Wet Bloom";
                  const peak = m.conditionalBonus?.bonusMultiplier ?? m.multiplier;
                  return (
                    <tr key={m.id} className={isRotten ? "bg-[#FF3D00]/5" : ""}>
                      <td className="px-4 py-3">
                        <Link
                          href={`/grow-a-garden/mutations/${m.id}`}
                          className="text-[#00E676] hover:underline font-semibold"
                        >
                          {m.name}
                        </Link>
                        <span className="block text-xs text-[#768294]">{m.tier}-Tier · {m.rollRate}</span>
                      </td>
                      <td className="px-4 py-3 text-white">
                        {m.multiplier}×{m.conditionalBonus && <span className="text-[#00E676]"> / {m.conditionalBonus.bonusMultiplier}×</span>}
                      </td>
                      <td className="px-4 py-3 text-xs text-[#00E676]">
                        {isRotten
                          ? "None — never apply"
                          : isFrozen
                          ? "AFK plots (preservation passive) during Winter"
                          : isGiant
                          ? "Crop-volume event plots (double-yield passive)"
                          : isGlowing
                          ? "Secondary plots on expansion-phase farms (seed-drop passive)"
                          : isWet
                          ? "Rain-weather main plot (peaks at 2.3× during rain)"
                          : "Toxic Bloom: temporary pest-defense only"}
                      </td>
                      <td className="px-4 py-3 text-xs text-[#FF3D00]">
                        {isRotten
                          ? "Any plot — destroys value and spreads"
                          : isFrozen
                          ? "Active-play main plot in Summer (only 3.2×, no synergy)"
                          : isGiant
                          ? "Pure coin-farming main plot (no coin-value doubling)"
                          : isGlowing
                          ? "Mature farm with full seed stock (passive wasted)"
                          : isWet
                          ? "Dry-weather plots (drops to 1.9× base)"
                          : "Any plot needing multiplier (1.3× is too low)"}
                      </td>
                      <td className="px-4 py-3 text-xs text-[#BAC4D1]">
                        {isRotten
                          ? "🔴 Overwrite immediately"
                          : m.multiplier >= 3.0
                          ? "🟢 Keep on secondary plots until 2nd S-Tier"
                          : m.multiplier >= 2.0
                          ? "🟡 Keep until A-Tier rolled"
                          : "🟠 Reroll at next boosted event"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[#768294]">
            The matrix above assumes you have at least one S-Tier mutation on your main plot. If you do not, your highest-multiplier shock mutation ({frozenBloom?.name} at {frozenBloom?.multiplier}× during Winter) belongs on your main plot temporarily — see the player scenario below.
          </p>
        </div>
      </section>

      {/* Profit Comparison — kept, reframed as "bridge income while filling" */}
      <section aria-labelledby="profit-heading">
        <h2
          id="profit-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          💰 Bridge Income Per Harvest (Top 5 Crops)
        </h2>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]">
                <th className="py-2 pr-3">Mutation</th>
                {topCrops.map((c) => (
                  <th key={c.id} className="py-2 pr-3">{c.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {profitMatrix.map((row) => (
                <tr key={row.mutation} className={row.mutation === "Rotten Bloom" ? "bg-[#FF3D00]/5" : "border-b border-[#1E212B]"}>
                  <td className="py-3 pr-3 font-semibold text-[#BAC4D1]">
                    {row.mutation} ({row.multiplier}×)
                  </td>
                  {row.profits.map((p) => (
                    <td key={p.crop} className="py-3 pr-3 text-xs text-[#00E676]">
                      {p.value.toLocaleString()} 🪙
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          Values calculated from the canonical Crops Database × each mutation&apos;s base multiplier. Frozen Bloom jumps to {frozenBloom?.conditionalBonus?.bonusMultiplier}× during Winter; Wet Bloom jumps to {wetBloom?.conditionalBonus?.bonusMultiplier}× during rain. Add a <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">pet multiplier</Link> for the full effective value. Rotten Bloom values are shown in red — they represent <em>lost</em> income, not gained.
        </p>
      </section>

      {/* Player Scenario — NEW, real game experience */}
      <section aria-labelledby="scenario-heading">
        <h2
          id="scenario-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🎮 Player Scenario: Early-Game Bridge Strategy
        </h2>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-4">
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Player Type</div>
              <div className="text-sm text-white mt-1">Early-game farmer, 5 days in</div>
              <div className="text-xs text-[#768294] mt-1">Active player, 30 min/day</div>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Current Resources</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• 3 plots unlocked</li>
                <li>• Best pet: Thunder Hawk Chick (1.8×)</li>
                <li>• 8 Mutation Shards (cannot bulk-roll 10)</li>
                <li>• All plots running no mutation</li>
                <li>• No boosted event active</li>
              </ul>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Goal</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• Get any mutation on all 3 plots</li>
                <li>• Bank shards for S-Tier push later</li>
                <li>• Reach 5,000 coins/hour</li>
                <li>• Avoid wasting shards on single rolls</li>
              </ul>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#00E676]/30">
              <div className="text-xs text-[#00E676] uppercase tracking-wider">Recommended Route</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• Do NOT roll 8 shards yet</li>
                <li>• Wait for daily login + code = 10+</li>
                <li>• Bulk-roll 10, accept any result</li>
                <li>• Apply shock mutation to plot #2 (not main)</li>
              </ul>
            </div>
          </div>
          <div className="text-sm leading-relaxed text-[#BAC4D1] space-y-2">
            <p><strong className="text-white">Day 5 (Patience):</strong> Player has 8 shards from tutorial + 2 daily logins. The temptation is to single-roll 8 times for &quot;any mutation&quot;. Resist this. Single-roll S-Tier odds are ~1.2%; shock mutation odds per single roll are ~30% (Frozen, Wet, Glowing, Toxic, Giant, Rotten combined). Eight single rolls give ~95% chance of <em>something</em> — but at the cost of 8 shards that could have been 1 bulk-roll with ~11% S-Tier odds.</p>
            <p><strong className="text-white">Day 6 (Bulk-roll):</strong> Claim daily login shard (+1) and redeem the latest{" "}
              <Link href="/grow-a-garden/codes" className="text-[#00E676] hover:underline">active code</Link>{" "}
              (+5 shards). Now at 14 shards — bulk-roll 10. Expected outcome: ~11% S-Tier, ~60% A/B-Tier shock, ~22% C-Tier (Toxic or Rotten). Most likely result: a shock mutation like {glowingBloom?.name} ({glowingBloom?.multiplier}×) or {frozenBloom?.name} ({frozenBloom?.multiplier}×).</p>
            <p><strong className="text-white">Day 6 (Allocation):</strong> If you landed {glowingBloom?.name} ({glowingBloom?.multiplier}×), apply it to plot #2 (secondary), not plot #1 (main). Reason: you will roll an S-Tier for plot #1 later, and overwriting a {glowingBloom?.multiplier}× mutation wastes it. Plot #1 stays empty until you land a 4.0×+ roll.</p>
            <p><strong className="text-white">Day 7–14 (Accumulate):</strong> Keep the remaining 4 shards. Do not single-roll. Repeat daily logins and code redemption until you have 10+ shards again, then bulk-roll for plot #3. Goal: all 3 plots running at least a 2.0× shock mutation within 2 weeks, with shards banked for the next boosted event.</p>
            <p className="text-xs text-[#00E676] mt-3">
              Result: 3 plots running shock mutations generating ~{Math.round(topCrops[2].coins * 2.3).toLocaleString()}–{Math.round(topCrops[2].coins * 3.2).toLocaleString()} coins/harvest each (with 1.8× pet = ~{Math.round(topCrops[2].coins * 2.3 * 1.8).toLocaleString()}–{Math.round(topCrops[2].coins * 3.2 * 1.8).toLocaleString()} effective). Not end-game income, but enough to fund Rare Eggs and <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">shard trading</Link> for the eventual S-Tier push.
            </p>
          </div>
        </div>
      </section>

      {/* When to keep / when to reroll — NEW strategy format */}
      <section aria-labelledby="reroll-strategy-heading">
        <h2
          id="reroll-strategy-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🎯 When to Keep a Shock Mutation (and When to Reroll)
        </h2>
        <div className="space-y-3">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">✅ Keep the shock mutation when:</h3>
            <ul className="space-y-1 text-xs text-[#BAC4D1] list-disc pl-4">
              <li>The plot currently has <strong>no mutation</strong>. Even a 1.3× Toxic Bloom beats nothing — apply it temporarily and reroll later.</li>
              <li>It is {frozenBloom?.name} ({frozenBloom?.multiplier}× base, {frozenBloom?.conditionalBonus?.bonusMultiplier}× Winter) on an AFK plot. The preservation passive prevents crop spoilage during long offline periods — worth more than the multiplier.</li>
              <li>It is {glowingBloom?.name} ({glowingBloom?.multiplier}×) on a farm with fewer than 6 plots. The 5% bonus-seed drop passive compounds long-term value on expansion-phase farms.</li>
              <li>You have fewer than 10 spare shards. Rerolling with single rolls is always worse than keeping what you have.</li>
              <li>A boosted event is not active. Rerolling outside events halves your S-Tier odds — wait.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">⛔ Reroll the shock mutation when:</h3>
            <ul className="space-y-1 text-xs text-[#BAC4D1] list-disc pl-4">
              <li>It is <strong>{rottenBloom?.name} ({rottenBloom?.multiplier}×)</strong>. Overwrite immediately — it actively destroys crop value and spreads to adjacent plots. This is the only mandatory reroll in the game.</li>
              <li>It is {wetBloom?.name} ({wetBloom?.multiplier}×) on a plot in a dry biome. Without rain, the 1.9× base is too low for a main plot. Move to a rain-prone plot or reroll.</li>
              <li>The plot is your <strong>main plot</strong> and you have 10+ shards banked during a boosted event. A 3.0× {giantBloom?.name} on your main plot is leaving 2.0×+ multiplier on the table — push for S-Tier.</li>
              <li>You already have an S-Tier mutation on your main plot and the shock mutation is on plot #2 with 20+ shards banked. Upgrade plot #2 to A-Tier or higher before filling plot #3.</li>
              <li>The shock mutation is {`Toxic Bloom`} (1.3×) and you have rolled anything else. Toxic is the weakest non-rotten shock mutation — even {wetBloom?.name} (1.9×) is a 46% upgrade.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common mistakes — replaces templated Tips ul */}
      <section aria-labelledby="mistakes-heading">
        <h2
          id="mistakes-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⚠️ Common Shock Mutation Mistakes (and What They Cost)
        </h2>
        <div className="space-y-3">
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 1: Leaving Rotten Bloom on a plot &quot;because it is still a mutation&quot;</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              A new player rolls Rotten Bloom (0.5×), sees it is a mutation, and leaves it on the plot thinking &quot;any mutation is better than none&quot;. Wrong. Rotten Bloom <strong className="text-white">halves</strong> crop value and <strong className="text-white">spreads to adjacent plots</strong>, corrupting neighboring mutations. A {topCrops[0].name} plot ({topCrops[0].coins} coins) with Rotten Bloom produces {Math.round(topCrops[0].coins * 0.5).toLocaleString()} coins — less than half the base. If it spreads to an adjacent S-Tier plot, the damage is catastrophic. <strong className="text-white">Cost: 50%+ of plot income, plus adjacent plot corruption.</strong>
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 2: Putting a shock mutation on the main plot when an S-Tier is available</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Player has {frozenBloom?.name} ({frozenBloom?.multiplier}×) and Midas Bloom (5.0×) in their inventory. They apply Frozen to the main plot &quot;because Winter is coming&quot; and Midas to a secondary plot. This is backwards — Midas belongs on the highest-base-coin plot, always. Even during Winter, {frozenBloom?.multiplier}× ({frozenBloom?.conditionalBonus?.bonusMultiplier}× conditional) does not beat 5.0× Midas. <strong className="text-white">Cost: ~1.2×–1.8× multiplier on the main plot every harvest.</strong>
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 3: Rerolling a 2.3× {glowingBloom?.name} with single rolls hoping for a 3.0×+</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Player is unhappy with {glowingBloom?.name} ({glowingBloom?.multiplier}×) on plot #2 and single-rolls 5 shards to chase {giantBloom?.name} ({giantBloom?.multiplier}×). Each single roll has ~6% odds of Giant Bloom. Five single rolls = ~27% chance. But if they had saved those 5 shards + 5 more to bulk-roll, the S-Tier odds alone would be ~11%, plus the same ~6% Giant odds per roll. <strong className="text-white">Cost: wasted shards for the same expected outcome, plus lost opportunity for S-Tier.</strong>
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 4: Overwriting {frozenBloom?.name} on an AFK plot</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Player upgrades their main plot to Midas Bloom and decides to &quot;clean up&quot; plot #2 by overwriting {frozenBloom?.name} ({frozenBloom?.multiplier}×) with a rolled A-Tier mutation. But Frozen Bloom&apos;s preservation passive was preventing crop spoilage during their 8-hour offline windows. Without it, the plot loses ~15% of harvests to spoilage. The new 3.5× mutation produces 3.5× base × 85% = 2.975× effective — barely better than the 3.2× Frozen with no spoilage. <strong className="text-white">Cost: lost the preservation passive for a marginal multiplier gain.</strong>
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 5: Treating {giantBloom?.name} as a coin-farm mutation</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Player reads &quot;{giantBloom?.multiplier}× with double-yield passive&quot; and assumes it doubles coin value. It does not — it doubles <em>item volume</em>, not coin value per item. A {topCrops[0].name} harvest with Giant Bloom produces {Math.round(topCrops[0].coins * giantBloom!.multiplier).toLocaleString()} coins worth of crops (3.0× base), plus a second crop drop — but the second drop is at base value, not 3.0×. Effective coin value: {Math.round(topCrops[0].coins * giantBloom!.multiplier).toLocaleString()} + {topCrops[0].coins.toLocaleString()} = {Math.round(topCrops[0].coins * giantBloom!.multiplier + topCrops[0].coins).toLocaleString()} coins, not {Math.round(topCrops[0].coins * giantBloom!.multiplier * 2).toLocaleString()}. <strong className="text-white">Cost: misallocated plot — Giant Bloom belongs on volume-objective plots, not pure coin farms.</strong>
            </p>
          </div>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/shock-mutation-guide" />
    </ContentLayout>
  );
}
