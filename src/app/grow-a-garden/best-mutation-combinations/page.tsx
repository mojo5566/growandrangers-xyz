import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { mutations } from "@/data/garden/database/mutations";
import { crops } from "@/data/garden/database/crops";
import { pets } from "@/data/garden/database/pets";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Best Mutation Combinations — Grow a Garden",
  description:
    "Highest-value mutation × crop × pet combinations in Grow a Garden with real coin values. Pre-calculated profit per harvest for every top-tier stack.",
  keywords: [
    "best mutation combinations Grow a Garden",
    "Grow a Garden mutation stacking",
    "Grow a Garden crop mutation pet combo",
    "highest profit mutation Grow a Garden",
    "Grow a Garden best mutation crop pair",
    "Grow a Garden mutation pet stack",
  ],
  alternates: { canonical: "/grow-a-garden/best-mutation-combinations" },
  openGraph: {
    title: "Best Mutation Combinations — Grow a Garden",
    description:
      "Highest-value mutation × crop × pet combinations with real coin values. Pre-calculated profit per harvest for every top-tier stack.",
    type: "website",
  },
};

// Top 3 mutations
const topMutations = [...mutations].sort((a, b) => b.multiplier - a.multiplier).slice(0, 3);
// Top 5 crops by base coins
const topCrops = [...crops].sort((a, b) => b.coins - a.coins).slice(0, 5);
// Top 3 pets by multiplier
const topPets = [...pets].sort((a, b) => b.multiplier - a.multiplier).slice(0, 3);

// Build combination matrix: top 3 mutations × top 5 crops (no pet)
const cropMutationCombos = topMutations.flatMap((m) =>
  topCrops.map((c) => ({
    mutation: m.name,
    crop: c.name,
    base: c.coins,
    multiplier: m.multiplier,
    total: Math.round(c.coins * m.multiplier),
  }))
).sort((a, b) => b.total - a.total).slice(0, 10);

// Full stack: top mutation × top crop × top pet
const fullStacks = topMutations.flatMap((m) =>
  topPets.map((p) => ({
    mutation: m.name,
    multiplier: m.multiplier,
    pet: p.name,
    petMultiplier: p.multiplier,
    crop: topCrops[0].name,
    base: topCrops[0].coins,
    total: Math.round(topCrops[0].coins * m.multiplier * p.multiplier),
  }))
).sort((a, b) => b.total - a.total);

// Reference values for narrative
const bestMutation = topMutations[0];
const bestPet = topPets[0];
const bestCrop = topCrops[0];
const midTierPet = pets.find((p) => p.name === "Phoenix Hatchling") ?? topPets[2];

const faqs = [
  {
    question: "What is the best mutation combination in Grow a Garden?",
    answer:
      "The best mutation combination is Prismatic Rainbow (6.0×) on the highest-value crop paired with the Golden Phoenix Chick (5.0×). This produces a 30× effective multiplier on the crop's base coin value — the highest possible single-harvest payout in the game. On a 480-coin crop, this combination yields 14,400 coins per harvest.",
  },
  {
    question: "How do mutation and pet multipliers stack?",
    answer:
      "Mutation and pet multipliers stack multiplicatively. Total harvest = crop base coins × mutation multiplier × pet multiplier. For example, a 480-coin crop × Prismatic Rainbow (6.0×) × Golden Phoenix Chick (5.0×) = 14,400 coins. This is why pairing your best pet with your best mutation on your highest-value crop is the single most profitable farm configuration.",
  },
  {
    question: "Should I spread mutations across plots or stack on one?",
    answer:
      "Spread them. Each plot can only have one mutation, and pet multipliers do not stack with each other. The optimal setup is one high-tier mutation per plot, each paired with your best available pet. If you only have one S-Tier mutation, put it on your highest-value crop plot and fill the rest with the best mutations you can roll.",
  },
  {
    question: "What is the best crop for mutation stacking?",
    answer:
      "The best crop is the one with the highest base coin value, because mutation and pet multipliers amplify the base rather than add to it. A 6.0× mutation on a 60-coin Carrot yields 360 coins, but the same mutation on a 480-coin crop yields 2,880 coins — an 8× difference. Check our Crops Database for the current highest-value crop, and always apply your strongest mutation to your highest-base-coin plot for maximum profit.",
  },
  {
    question: "Can I have multiple mutations on the same plot?",
    answer:
      "No. Each plot can only have one mutation at a time. Applying a new mutation overwrites the previous one with no refund, so the destroyed mutation is gone permanently. This is why you should never apply a lower-tier mutation to a plot that already has a higher-tier mutation — the loss is irreversible, even if the new mutation has a tempting passive.",
  },
  {
    question: "How do I calculate my farm's total income?",
    answer:
      "Use our Value Calculator at /grow-a-garden/value-calculator to estimate your farm's coins-per-harvest. Enter your crop, mutation, and pet to get the exact total for a single plot. For a full farm overview, sum the per-plot values across all your active plots — this lets you spot which plot is underperforming and whether a mutation or pet should be moved to a higher-base-coin crop.",
  },
];

export default function BestMutationCombinationsPage() {
  return (
    <ContentLayout
      title="Best Mutation Combinations — Grow a Garden"
      description="Highest-value mutation × crop × pet combinations with real coin values. Pre-calculated profit per harvest for every top-tier stack."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Best Mutation Combinations", href: "/grow-a-garden/best-mutation-combinations" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-mutation-combinations"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Mutations"
      keywords={[
        "best mutation combinations Grow a Garden",
        "Grow a Garden mutation stacking",
        "Grow a Garden crop mutation pet combo",
        "highest profit mutation Grow a Garden",
        "Grow a Garden best mutation crop pair",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - AI search summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          The best mutation combination in Grow a Garden is Prismatic Rainbow (6.0×) on your highest-base-coin crop paired with the Golden Phoenix Chick (5.0×) pet, producing a 30× effective multiplier — 14,400 coins per harvest on a 480-coin crop. Multipliers stack multiplicatively (crop base × mutation × pet), and because each plot holds only one mutation and one pet, the optimal farm layout spreads your strongest mutations and pets across your highest-base-coin crops rather than concentrating them.
        </p>
      </section>

      {/* Opening — reframed as a layout problem, not a ranking problem */}
      <section className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          The combination question is not &quot;what is the best stack?&quot; — that is always {bestMutation.name} ({bestMutation.multiplier}×) × {bestCrop.name} ({bestCrop.coins} coins) × {bestPet.name} ({bestPet.multiplier}×) = <strong className="text-[#00E676]">{Math.round(bestCrop.coins * bestMutation.multiplier * bestPet.multiplier).toLocaleString()} coins per harvest</strong>. The real question is <em className="text-white">&quot;given the mutations, pets, and crops I actually have, how do I allocate them across my plots?&quot;</em> That is a layout problem — and the answer changes completely based on whether you have 1 S-Tier mutation or 3, one 5.0× pet or three 2.0× pets. This guide walks through the layout workflow with real data from the canonical{" "}
          <Link href="/grow-a-garden/mutations" className="text-[#00E676] hover:underline">Mutations</Link>,{" "}
          <Link href="/grow-a-garden/crops" className="text-[#00E676] hover:underline">Crops</Link>, and{" "}
          <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">Pets</Link>{" "}
          databases.
        </p>
      </section>

      {/* The Stacking Formula — kept, reframed as "why layout matters" */}
      <section aria-labelledby="formula-heading">
        <h2
          id="formula-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ✖️ The Stacking Formula (And Why It Forces Layout Decisions)
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936] mb-3">
            <code className="text-sm text-white font-mono">
              Plot Income = Crop Base × Mutation × Pet
            </code>
          </div>
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            All three multipliers stack <strong>multiplicatively</strong>, not additively. A 6.0× mutation and a 5.0× pet produce a 30× effective multiplier — not 11×. This is why layout matters: because each plot can only hold <strong className="text-white">one mutation</strong> and <strong className="text-white">one pet</strong>, you cannot concentrate all your multipliers on a single plot. The optimal layout spreads your best mutations and pets across your highest-base-coin crops — and the allocation order is non-obvious.
          </p>
        </div>
      </section>

      {/* Farm Layout Workflow — NEW structure, replaces templated Strategy 4-card grid */}
      <section aria-labelledby="layout-heading">
        <h2
          id="layout-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🗺️ The 5-Step Farm Layout Workflow
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-4">
            Stop guessing where to put your next mutation or pet. Follow these 5 steps in order — each step assumes the previous one is complete. Skipping steps is the #1 cause of misallocated plots.
          </p>
          <ol className="space-y-4 text-sm text-[#BAC4D1] list-decimal pl-5">
            <li>
              <strong className="text-white">Sort your crops by base coin value (descending).</strong>
              <br />
              Your highest-base-coin crop gets the strongest mutation+pet combo. This is non-negotiable — multipliers amplify the base, so a 6.0× mutation on a 60-coin Carrot (360 coins) is worth less than a 2.0× mutation on a {bestCrop.coins}-coin {bestCrop.name} ({(bestCrop.coins * 2).toLocaleString()} coins). Check the{" "}
              <Link href="/grow-a-garden/crops" className="text-[#00E676] hover:underline">Crops Database</Link>{" "}
              for current values.
            </li>
            <li>
              <strong className="text-white">Sort your mutations by multiplier (descending).</strong>
              <br />
              Rank every mutation you own from highest to lowest multiplier. The strongest goes to plot #1 (highest-base-coin crop), the second-strongest to plot #2, and so on. Ignore passives at this stage — multiplier is the dominant factor for coin income.
            </li>
            <li>
              <strong className="text-white">Sort your pets by multiplier (descending).</strong>
              <br />
              Rank every pet you own. The strongest pet goes to plot #1, paired with the strongest mutation — this is your &quot;main plot&quot; and should produce 50–70% of your farm income. The second-strongest pet goes to plot #2.
            </li>
            <li>
              <strong className="text-white">Check for synergy passives before finalizing.</strong>
              <br />
              Some mutation+pet pairs have synergy bonuses that override the strict multiplier ranking. Examples: {midTierPet.name} ({midTierPet.multiplier}×) pairs exceptionally well with {bestMutation.name} because the pet&apos;s revival passive protects the high-value crop. Check the{" "}
              <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">Pets Database</Link>{" "}
              for each pet&apos;s strengths and pairings.
            </li>
            <li>
              <strong className="text-white">Never overwrite a higher-tier mutation with a lower one.</strong>
              <br />
              If you roll a new mutation, compare its multiplier to the plot it would go on. If the new mutation is <em>lower</em>, do not apply it — bank it for a future plot or <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">trade the shard</Link>. Mutations do not refund.
            </li>
          </ol>
          <p className="mt-4 text-xs text-[#00E676]">
            Result of following this workflow: every multiplier is on the plot where it contributes the most coin income. A 4-plot farm with one 6.0×, one 5.0×, one 3.5×, and one 2.3× mutation — each on the right crop with the right pet — outperforms a 4-plot farm with four 4.0× mutations placed randomly.
          </p>
        </div>
      </section>

      {/* Top 10 Combo table — kept, reframed as "the ceiling" */}
      <section aria-labelledby="top-combos-heading">
        <h2
          id="top-combos-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🏆 The Theoretical Ceiling: Top 10 Mutation × Crop Combos
        </h2>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]">
                <th className="py-2 pr-3">Rank</th>
                <th className="py-2 pr-3">Mutation</th>
                <th className="py-2 pr-3">Crop</th>
                <th className="py-2 pr-3">Base</th>
                <th className="py-2 pr-3">Multiplier</th>
                <th className="py-2 pr-3">Total/Harvest</th>
              </tr>
            </thead>
            <tbody>
              {cropMutationCombos.map((combo, i) => (
                <tr key={`${combo.mutation}-${combo.crop}`} className="border-b border-[#1E212B]">
                  <td className="py-3 pr-3 font-semibold text-[#BAC4D1]">#{i + 1}</td>
                  <td className="py-3 pr-3 text-[#FF3D00]">{combo.mutation}</td>
                  <td className="py-3 pr-3 text-[#BAC4D1]">{combo.crop}</td>
                  <td className="py-3 pr-3 text-white">{combo.base.toLocaleString()} 🪙</td>
                  <td className="py-3 pr-3 text-white">{combo.multiplier}×</td>
                  <td className="py-3 pr-3 text-[#00E676] font-semibold">
                    {combo.total.toLocaleString()} 🪙
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          Top 3 mutations × top 5 crops, ranked by total value per harvest. This is the theoretical ceiling — most players will not have {bestMutation.name} for months. The layout workflow above works with whatever mutations you actually own.
        </p>
      </section>

      {/* Full Stack table — kept, reframed as "the dream config" */}
      <section aria-labelledby="full-stack-heading">
        <h2
          id="full-stack-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🚀 The Dream Config: Mutation × Crop × Pet
        </h2>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]">
                <th className="py-2 pr-3">Rank</th>
                <th className="py-2 pr-3">Mutation</th>
                <th className="py-2 pr-3">Pet</th>
                <th className="py-2 pr-3">Crop</th>
                <th className="py-2 pr-3">Effective Multiplier</th>
                <th className="py-2 pr-3">Total/Harvest</th>
              </tr>
            </thead>
            <tbody>
              {fullStacks.map((stack, i) => (
                <tr key={`${stack.mutation}-${stack.pet}`} className="border-b border-[#1E212B]">
                  <td className="py-3 pr-3 font-semibold text-[#BAC4D1]">#{i + 1}</td>
                  <td className="py-3 pr-3 text-[#FF3D00]">{stack.mutation}</td>
                  <td className="py-3 pr-3 text-[#00E676]">{stack.pet}</td>
                  <td className="py-3 pr-3 text-[#BAC4D1]">{stack.crop}</td>
                  <td className="py-3 pr-3 text-white">
                    {(stack.multiplier * stack.petMultiplier).toFixed(1)}×
                  </td>
                  <td className="py-3 pr-3 text-[#00E676] font-semibold">
                    {stack.total.toLocaleString()} 🪙
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          Top 3 mutations × top 3 pets on {topCrops[0].name}. The #1 stack ({bestMutation.name} + {bestPet.name}) is the strongest possible single-plot configuration in the game — but only ~1% of players will ever achieve it. The layout workflow works with whatever subset you own.
        </p>
      </section>

      {/* Player Scenario — NEW, real game experience */}
      <section aria-labelledby="scenario-heading">
        <h2
          id="scenario-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🎮 Player Scenario: 4-Plot Layout Optimization
        </h2>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-4">
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Player Type</div>
              <div className="text-sm text-white mt-1">Mid-game farmer, 5 weeks in</div>
              <div className="text-xs text-[#768294] mt-1">Active player, 1 hour/day</div>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Current Resources</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• 4 plots unlocked</li>
                <li>• Mutations: Midas (5.0×), Frozen (3.2×), Glowing (2.3×), Wet (1.9×)</li>
                <li>• Pets: Phoenix Hatchling (3.4×), Neon Dragon (3.5×), Forest Fox (2.1×), Thunder Hawk (1.8×)</li>
                <li>• Crops: {topCrops[0].name}, {topCrops[1].name}, {topCrops[2].name}, {topCrops[3].name}</li>
              </ul>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Goal</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• Maximize total farm income per hour</li>
                <li>• Allocate 4 mutations × 4 pets × 4 crops</li>
                <li>• Avoid wasting a strong pet on a weak plot</li>
              </ul>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#00E676]/30">
              <div className="text-xs text-[#00E676] uppercase tracking-wider">Recommended Route</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• Plot 1: Midas × {topCrops[0].name} × Neon Dragon</li>
                <li>• Plot 2: Frozen × {topCrops[1].name} × Phoenix</li>
                <li>• Plot 3: Glowing × {topCrops[2].name} × Forest Fox</li>
                <li>• Plot 4: Wet × {topCrops[3].name} × Thunder Hawk</li>
              </ul>
            </div>
          </div>
          <div className="text-sm leading-relaxed text-[#BAC4D1] space-y-2">
            <p><strong className="text-white">Step 1 — Sort crops by base coins:</strong> {topCrops[0].name} ({topCrops[0].coins}) &gt; {topCrops[1].name} ({topCrops[1].coins}) &gt; {topCrops[2].name} ({topCrops[2].coins}) &gt; {topCrops[3].name} ({topCrops[3].coins}). Plot #1 gets the highest base, plot #4 gets the lowest.</p>
            <p><strong className="text-white">Step 2 — Sort mutations by multiplier:</strong> Midas (5.0×) &gt; Frozen (3.2×) &gt; Glowing (2.3×) &gt; Wet (1.9×). Plot #1 gets Midas, plot #2 gets Frozen, plot #3 gets Glowing, plot #4 gets Wet.</p>
            <p><strong className="text-white">Step 3 — Sort pets by multiplier:</strong> Neon Dragon (3.5×) &gt; Phoenix Hatchling (3.4×) &gt; Forest Fox (2.1×) &gt; Thunder Hawk (1.8×). The temptation is to put Neon Dragon on plot #1 with Midas — but wait. Step 4 changes this.</p>
            <p><strong className="text-white">Step 4 — Check synergy passives:</strong> Phoenix Hatchling has a &quot;revives one wilted crop per day&quot; passive. On plot #1 ({topCrops[0].name} at {topCrops[0].coins} coins), the revival saves {topCrops[0].coins.toLocaleString()} coins per day if the crop wilts. On plot #4 ({topCrops[3].name} at {topCrops[3].coins} coins), it only saves {topCrops[3].coins.toLocaleString()} coins. So Phoenix belongs on plot #1 or #2, not #4. Neon Dragon (3.5×, no synergy passive) is fine on plot #1 — but the 0.1× gap over Phoenix (3.4×) is only {(topCrops[0].coins * 5.0 * 0.1).toLocaleString()} coins/harvest. The revival passive on plot #1 is worth more than 0.1× multiplier. Final pet allocation: Phoenix on plot #1, Neon Dragon on plot #2.</p>
            <p><strong className="text-white">Final layout &amp; income:</strong></p>
            <ul className="list-disc pl-5 text-xs text-[#BAC4D1] space-y-1">
              <li>Plot 1: {topCrops[0].name} ({topCrops[0].coins}) × Midas (5.0×) × Phoenix (3.4×) = <strong className="text-[#00E676]">{Math.round(topCrops[0].coins * 5.0 * 3.4).toLocaleString()} coins/harvest</strong> (17.0× effective)</li>
              <li>Plot 2: {topCrops[1].name} ({topCrops[1].coins}) × Frozen (3.2×) × Neon Dragon (3.5×) = <strong className="text-[#00E676]">{Math.round(topCrops[1].coins * 3.2 * 3.5).toLocaleString()} coins/harvest</strong> (11.2× effective)</li>
              <li>Plot 3: {topCrops[2].name} ({topCrops[2].coins}) × Glowing (2.3×) × Forest Fox (2.1×) = <strong className="text-[#00E676]">{Math.round(topCrops[2].coins * 2.3 * 2.1).toLocaleString()} coins/harvest</strong> (4.8× effective)</li>
              <li>Plot 4: {topCrops[3].name} ({topCrops[3].coins}) × Wet (1.9×) × Thunder Hawk (1.8×) = <strong className="text-[#00E676]">{Math.round(topCrops[3].coins * 1.9 * 1.8).toLocaleString()} coins/harvest</strong> (3.4× effective)</li>
            </ul>
            <p className="text-xs text-[#00E676] mt-3">
              Total farm income: ~{(Math.round(topCrops[0].coins * 5.0 * 3.4) + Math.round(topCrops[1].coins * 3.2 * 3.5) + Math.round(topCrops[2].coins * 2.3 * 2.1) + Math.round(topCrops[3].coins * 1.9 * 1.8)).toLocaleString()} coins per harvest cycle. Compare to the naive layout (Midas + Neon Dragon on plot #1, Phoenix on plot #2): plot #1 gains {(Math.round(topCrops[0].coins * 5.0 * 3.5) - Math.round(topCrops[0].coins * 5.0 * 3.4)).toLocaleString()} coins, but plot #2 loses {(Math.round(topCrops[1].coins * 3.2 * 3.4) - Math.round(topCrops[1].coins * 3.2 * 3.5)).toLocaleString()} coins — net loss of {((Math.round(topCrops[0].coins * 5.0 * 3.5) - Math.round(topCrops[0].coins * 5.0 * 3.4)) - (Math.round(topCrops[1].coins * 3.2 * 3.4) - Math.round(topCrops[1].coins * 3.2 * 3.5))).toLocaleString()} coins per harvest, <em>plus</em> lost revival passive value on the high-value plot.
            </p>
          </div>
        </div>
      </section>

      {/* When to concentrate vs spread — NEW strategy format */}
      <section aria-labelledby="strategy-heading">
        <h2
          id="strategy-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🎯 When to Concentrate (and When to Spread)
        </h2>
        <div className="space-y-3">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">✅ Concentrate your best multipliers on plot #1 when:</h3>
            <ul className="space-y-1 text-xs text-[#BAC4D1] list-disc pl-4">
              <li>You have only <strong>one</strong> S-Tier mutation and <strong>one</strong> A-Tier+ pet. Putting both on plot #1 with your highest-base-coin crop produces 50–70% of your total farm income from a single plot.</li>
              <li>Your secondary plots are running low-base-coin crops. A 5.0× mutation on a 60-coin Carrot (300 coins) gains less than 1.0× multiplier on a {bestCrop.coins}-coin {bestCrop.name} ({(bestCrop.coins * 1).toLocaleString()} coins).</li>
              <li>You are saving for a Rare Egg or Legendary Egg. Concentrated income on plot #1 reaches the egg cost threshold faster than spread income.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">⛔ Spread your multipliers across plots when:</h3>
            <ul className="space-y-1 text-xs text-[#BAC4D1] list-disc pl-4">
              <li>You have <strong>two or more</strong> S-Tier mutations. Concentrating both on plot #1 is impossible (one mutation per plot) — the second belongs on plot #2.</li>
              <li>All your plots are running similar-base-coin crops. The multiplier amplification is equal across plots, so spread is strictly better than concentration.</li>
              <li>You have multiple strong pets (3.0×+). Pet multipliers do not stack on the same plot — putting your second 3.5× pet on plot #1 instead of plot #2 wastes it entirely.</li>
              <li>You are saving for a major purchase that requires consistent income over time. Spread layouts are less vulnerable to a single plot&apos;s crop spoiling or being overwritten.</li>
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
          ⚠️ Common Combination Mistakes (and What They Cost)
        </h2>
        <div className="space-y-3">
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 1: Putting the strongest pet on the wrong plot</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Player has a 5.0× Golden Phoenix Chick and a 1.5× Bamboo Panda Cub. They put the Phoenix Chick on plot #3 (running a 100-coin crop) because &quot;plot #3 needs help&quot;. Result: 100 × 5.0× = 500 coins/harvest on plot #3. If they had put the Phoenix Chick on plot #1 ({topCrops[0].name} at {topCrops[0].coins} coins with Midas 5.0×), it would be {(topCrops[0].coins * 5.0 * 5.0).toLocaleString()} coins/harvest — a {(topCrops[0].coins * 5.0 * 5.0 - 500).toLocaleString()}-coin difference per harvest. <strong className="text-white">Cost: ~{(topCrops[0].coins * 5.0 * 5.0 - 500).toLocaleString()} coins per harvest — the single most expensive mistake in the game.</strong>
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 2: Stacking multiple pets on the same plot</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Player equips both their Golden Phoenix Chick (5.0×) and Neon Dragon (3.5×) on plot #1, expecting 8.5× multiplier. Actual result: only the <em>strongest</em> pet applies — 5.0×. The Neon Dragon is wasted and could have been producing 3.5× on plot #2. <strong className="text-white">Cost: {(topCrops[1].coins * 3.5).toLocaleString()} coins per harvest on plot #2 — pure waste.</strong>
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 3: Overwriting a 5.0× Midas Bloom with a 4.0× Aurelian Crown</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Player rolls Aurelian Crown (4.0×) and thinks &quot;connected-plot harvest&quot; passive makes it better than Midas Bloom (5.0×). They overwrite Midas on their main plot. The passive is useful, but 4.0× × {topCrops[0].coins} = {(topCrops[0].coins * 4.0).toLocaleString()} coins is strictly less than 5.0× × {topCrops[0].coins} = {(topCrops[0].coins * 5.0).toLocaleString()} coins. The passive saves ~2 seconds of clicking — not worth a 1.0× multiplier loss. <strong className="text-white">Cost: {(topCrops[0].coins * 1.0).toLocaleString()} coins per harvest, permanently.</strong>
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 4: Applying a strong mutation to a low-base-coin crop</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Player lands Midas Bloom (5.0×) and applies it to a Carrot plot (60 coins) because &quot;that plot needs the boost&quot;. Result: 60 × 5.0× = 300 coins/harvest. If applied to {topCrops[0].name} ({topCrops[0].coins} coins), it would be {(topCrops[0].coins * 5.0).toLocaleString()} coins/harvest — a {(topCrops[0].coins * 5.0 - 300).toLocaleString()}-coin difference every single harvest. <strong className="text-white">Cost: {(topCrops[0].coins * 5.0 - 300).toLocaleString()} coins per harvest — enough to fund a Legendary Egg every ~30 harvests.</strong>
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 5: Ignoring the layout workflow and placing rolls randomly</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Player rolls 4 mutations in a week and applies each to &quot;whichever plot is closest&quot; without checking base coin values or pet allocation. Result: Midas (5.0×) ends up on plot #3 (100-coin crop), Wet Bloom (1.9×) on plot #1 ({topCrops[0].coins}-coin crop). Total farm income: {(100 * 5.0 + topCrops[0].coins * 1.9).toLocaleString()} coins from those two plots. With correct layout: {(topCrops[0].coins * 5.0 + 100 * 1.9).toLocaleString()} coins. <strong className="text-white">Cost: {((topCrops[0].coins * 5.0 + 100 * 1.9) - (100 * 5.0 + topCrops[0].coins * 1.9)).toLocaleString()} coins per harvest from misallocation alone.</strong>
            </p>
          </div>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/best-mutation-combinations" />
    </ContentLayout>
  );
}
