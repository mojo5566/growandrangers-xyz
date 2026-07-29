import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { mutations } from "@/data/garden/database/mutations";
import { crops } from "@/data/garden/database/crops";
import { trading } from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Rainbow Mutation Guide — Grow a Garden",
  description:
    "Complete guide to the Prismatic Rainbow mutation in Grow a Garden: 6.0× multiplier, how to roll it, profit examples on every top crop, and strategy for stacking with pets.",
  keywords: [
    "Prismatic Rainbow mutation Grow a Garden",
    "rainbow mutation guide Grow a Garden",
    "Grow a Garden 6.0x mutation",
    "best mutation Grow a Garden",
    "how to get rainbow mutation",
    "Prismatic Rainbow profit",
  ],
  alternates: { canonical: "/grow-a-garden/rainbow-mutation-guide" },
  openGraph: {
    title: "Rainbow Mutation Guide — Grow a Garden",
    description:
      "Complete guide to the Prismatic Rainbow mutation: 6.0× multiplier, how to roll it, profit examples, and stacking strategy.",
    type: "website",
  },
};

// Prismatic Rainbow is the "rainbow" mutation in the canonical database
const rainbow = mutations.find((m) => m.name.toLowerCase().includes("rainbow"))!;

// Top crops for profit examples
const topCrops = [...crops].sort((a, b) => b.coins - a.coins).slice(0, 8);

const profitRows = topCrops.map((c) => ({
  crop: c.name,
  base: c.coins,
  withRainbow: Math.round(c.coins * rainbow.multiplier),
  profit: Math.round(c.coins * (rainbow.multiplier - 1)),
}));

// Trading entries for mutation category
const mutationTrades = trading.filter(
  (t) => t.category === "Mutation" && t.name.toLowerCase().includes("rainbow")
);

// Stacked multiplier table — per pet tier
const petTiers = [
  { tier: "S-Tier (Golden Phoenix Chick)", multiplier: 5.0, total: 30.0 },
  { tier: "A-Tier (Neon Dragon Hatchling)", multiplier: 3.5, total: 21.0 },
  { tier: "B-Tier (Frost Wolf Pup, Winter)", multiplier: 3.3, total: 19.8 },
  { tier: "C-Tier (Bamboo Panda Cub)", multiplier: 1.5, total: 9.0 },
];

const faqs = [
  {
    question: "What is the Rainbow mutation in Grow a Garden?",
    answer:
      "The Rainbow mutation in Grow a Garden is officially named Prismatic Rainbow. It is the highest-multiplier mutation in the game at 6.0×, meaning every harvest from a plot with this mutation is worth 6 times the crop's base coin value. It is an S-Tier mutation and the rarest roll possible at the Mutation Station.",
  },
  {
    question: "How rare is the Prismatic Rainbow mutation?",
    answer:
      "Prismatic Rainbow is the rarest mutation in the game. The single-roll S-Tier rate is approximately 1.2%, and Prismatic Rainbow is one of several S-Tier mutations, so the per-roll chance of specifically Prismatic Rainbow is even lower. Bulk-rolling 10 shards at once raises the combined S-Tier rate to roughly 11%, and boosted events can multiply this further.",
  },
  {
    question: "How much money does the Rainbow mutation make?",
    answer:
      "On the highest-value crop, the Prismatic Rainbow mutation multiplies the base coin value by 6.0×. For example, a 480-coin crop becomes 2,880 coins per harvest. Add a 5.0× pet multiplier and the same harvest becomes 14,400 coins. Over a full farming session, this is the single biggest wealth multiplier in the game.",
  },
  {
    question: "Should I overwrite a lower mutation with Prismatic Rainbow?",
    answer:
      "Always yes. Prismatic Rainbow at 6.0× is strictly better than every other mutation in the game — the next-strongest is Midas Bloom at 5.0×. If you roll it, apply it to your highest-value crop plot immediately and move your best pet there to stack the multiplier. There is no scenario where keeping a lower-tier mutation over Prismatic Rainbow is correct, even if that mutation has a useful passive.",
  },
  {
    question: "Can I trade for a Prismatic Rainbow mutation?",
    answer:
      "Mutations themselves are not tradeable, but the Mutation Shards used to roll them are. You can trade with other players for shards and then bulk-roll 10 at once during a boosted event to maximize your Prismatic Rainbow odds — single-rolling gives only ~0.4% per shard, the worst value in the game. Check our Trading Database for current shard values before making any trade.",
  },
  {
    question: "Does Prismatic Rainbow stack with pet multipliers?",
    answer:
      "Yes. Mutation multipliers stack multiplicatively with pet multipliers. A Prismatic Rainbow (6.0×) plot paired with a Golden Phoenix Chick (5.0×) produces a 30× effective multiplier on the crop's base coin value. This is the highest possible single-harvest multiplier in the game.",
  },
];

export default function RainbowMutationGuidePage() {
  return (
    <ContentLayout
      title="Rainbow Mutation Guide — Grow a Garden"
      description="Complete guide to the Prismatic Rainbow mutation: 6.0× multiplier, how to roll it, profit examples, and stacking strategy."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Rainbow Mutation Guide", href: "/grow-a-garden/rainbow-mutation-guide" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/rainbow-mutation-guide"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Mutations"
      keywords={[
        "Prismatic Rainbow mutation Grow a Garden",
        "rainbow mutation guide Grow a Garden",
        "Grow a Garden 6.0x mutation",
        "best mutation Grow a Garden",
        "how to get rainbow mutation",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - AI search summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          To get the Prismatic Rainbow (rainbow) mutation in Grow a Garden, roll Mutation Shards at the Mutation Station during a boosted event. A single roll has roughly a 0.4–1.2% chance, but bulk-rolling 10 shards during a 2× boosted event raises your odds to ~7.3% (and ~11% during a 3× event). The mutation applies a 6.0× harvest multiplier — pair it with your highest-base-coin crop and best pet for a 30× effective multiplier.
        </p>
      </section>

      {/* Opening — concrete probability number rather than templated intro */}
      <section className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          Roll a single Mutation Shard at the Mutation Station and the chance of landing Prismatic Rainbow is roughly <strong className="text-[#FF3D00]">0.4–1.2%</strong> — the rarest single outcome in the game. Roll 10 shards at once during a boosted event and your combined S-Tier odds jump to roughly <strong className="text-white">22–33%</strong>, with Prismatic Rainbow being one of several possible S-Tier outcomes. The difference between &quot;I rolled for months and never saw it&quot; and &quot;I got it in my second bulk roll&quot; is almost entirely about <em className="text-white">when</em> and <em className="text-white">how</em> you roll — not luck. This guide covers the math, the strategy, and the profit numbers using data from the canonical{" "}
          <Link href="/grow-a-garden/mutations" className="text-[#00E676] hover:underline">Mutations Database</Link>.
        </p>
      </section>

      {/* Probability breakdown — NEW section, replaces "Overview" 4-stat card */}
      <section aria-labelledby="probability-heading">
        <h2
          id="probability-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🎲 The Real Probability Math (Stop Guessing)
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-4">
            Most players waste shards because they do not understand the math. Here is exactly what each rolling strategy buys you, based on the canonical ~1.2% per-roll S-Tier rate and the assumption that Prismatic Rainbow is 1 of ~3 S-Tier outcomes.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-[#1E212B] text-[#768294]">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Strategy</th>
                  <th className="px-4 py-2 text-left font-semibold">Shards Used</th>
                  <th className="px-4 py-2 text-left font-semibold">S-Tier Odds (Any)</th>
                  <th className="px-4 py-2 text-left font-semibold">Prismatic Rainbow Odds</th>
                  <th className="px-4 py-2 text-left font-semibold">Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#252936]">
                <tr>
                  <td className="px-4 py-3 text-[#BAC4D1]">Single roll, no event</td>
                  <td className="px-4 py-3 text-white">1</td>
                  <td className="px-4 py-3 text-[#768294]">~1.2%</td>
                  <td className="px-4 py-3 text-[#FF3D00]">~0.4%</td>
                  <td className="px-4 py-3 text-xs text-[#768294]">Never do this — worst value per shard</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#BAC4D1]">Bulk roll 10, no event</td>
                  <td className="px-4 py-3 text-white">10</td>
                  <td className="px-4 py-3 text-[#768294]">~11%</td>
                  <td className="px-4 py-3 text-[#FFD700]">~3.7%</td>
                  <td className="px-4 py-3 text-xs text-[#768294]">Acceptable, but suboptimal</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#BAC4D1]">Single roll, boosted event (2× rate)</td>
                  <td className="px-4 py-3 text-white">1</td>
                  <td className="px-4 py-3 text-[#768294]">~2.4%</td>
                  <td className="px-4 py-3 text-[#FFD700]">~0.8%</td>
                  <td className="px-4 py-3 text-xs text-[#768294]">Still worse than bulk — avoid</td>
                </tr>
                <tr className="bg-[#00E676]/5">
                  <td className="px-4 py-3 text-[#00E676] font-semibold">Bulk roll 10, boosted event (2× rate)</td>
                  <td className="px-4 py-3 text-white">10</td>
                  <td className="px-4 py-3 text-[#00E676] font-semibold">~22%</td>
                  <td className="px-4 py-3 text-[#00E676] font-semibold">~7.3%</td>
                  <td className="px-4 py-3 text-xs text-[#00E676]">✅ Best value — always wait for this window</td>
                </tr>
                <tr className="bg-[#00E676]/5">
                  <td className="px-4 py-3 text-[#00E676] font-semibold">Bulk roll 10, boosted event (3× rate)</td>
                  <td className="px-4 py-3 text-white">10</td>
                  <td className="px-4 py-3 text-[#00E676] font-semibold">~33%</td>
                  <td className="px-4 py-3 text-[#00E676] font-semibold">~11%</td>
                  <td className="px-4 py-3 text-xs text-[#00E676]">✅ Jackpot window — major update launches only</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[#768294]">
            Bottom line: 1 bulk roll during a 2× boosted event has the same expected value as ~18 single rolls with no event. Patience is not optional — it is the strategy.
          </p>
        </div>
      </section>

      {/* Profit table — kept, refined framing */}
      <section aria-labelledby="profit-heading">
        <h2
          id="profit-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          💰 Profit Per Harvest (Real Crop Values)
        </h2>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]">
                <th className="py-2 pr-3">Crop</th>
                <th className="py-2 pr-3">Base Coins</th>
                <th className="py-2 pr-3">With Rainbow (6.0×)</th>
                <th className="py-2 pr-3">Profit per Harvest</th>
              </tr>
            </thead>
            <tbody>
              {profitRows.map((row) => (
                <tr key={row.crop} className="border-b border-[#1E212B]">
                  <td className="py-3 pr-3 font-semibold text-[#BAC4D1]">{row.crop}</td>
                  <td className="py-3 pr-3 text-white">{row.base.toLocaleString()} 🪙</td>
                  <td className="py-3 pr-3 text-[#00E676] font-semibold">
                    {row.withRainbow.toLocaleString()} 🪙
                  </td>
                  <td className="py-3 pr-3 text-[#00E676]">
                    +{row.profit.toLocaleString()} 🪙
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          Calculated from the canonical Crops Database × Prismatic Rainbow ({rainbow.multiplier}×). Pet multiplier not included — see the stacking table below.
        </p>
      </section>

      {/* Worked Example — NEW section, replaces templated "How to Get" 4-step grid */}
      <section aria-labelledby="example-heading">
        <h2
          id="example-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📋 Player Scenario: 2-Week Prismatic Rainbow Push
        </h2>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-4">
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Player Type</div>
              <div className="text-sm text-white mt-1">Mid-game farmer, 2–3 weeks in</div>
              <div className="text-xs text-[#768294] mt-1">Active player, ~1 hour/day</div>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Current Resources (Day 1)</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• 0 Mutation Shards</li>
                <li>• Mutation Station unlocked</li>
                <li>• 4 plots, A-Tier pet (3.5×) equipped</li>
                <li>• 50,000 coins banked</li>
                <li>• Next boosted event in ~7 days</li>
              </ul>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Goal (Day 14)</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• Roll Prismatic Rainbow mutation</li>
                <li>• Apply to highest-value crop plot</li>
                <li>• Stack with best available pet</li>
                <li>• Reach 20×+ effective multiplier</li>
              </ul>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#00E676]/30">
              <div className="text-xs text-[#00E676] uppercase tracking-wider">Recommended Route</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• Save shards until boosted event</li>
                <li>• Bulk-roll 10 at once, never single</li>
                <li>• Apply to {topCrops[0].name} plot</li>
                <li>• Move best pet to the rainbow plot</li>
              </ul>
            </div>
          </div>
          <div className="text-sm leading-relaxed text-[#BAC4D1] space-y-2">
            <p><strong className="text-white">Day 1–6 (Shard accumulation):</strong> Do NOT roll yet. Maximize shard income: redeem every{" "}
              <Link href="/grow-a-garden/codes" className="text-[#00E676] hover:underline">active code</Link>{" "}
              (typically 10–20 shards per drop), claim daily login (3–5 shards/day = 18–30 over 6 days), and complete the weekly seasonal event quest (20–50 shards). Target: 50+ shards banked before the boosted event begins.</p>
            <p><strong className="text-white">Day 7 (Boosted event opens — roll):</strong> Wait for the boosted event window to open (verify in the{" "}
              <Link href="/grow-a-garden/events" className="text-[#00E676] hover:underline">Events Tracker</Link>). Bulk-roll 10 shards at once. Expected outcome: ~22% chance of any S-Tier, ~7.3% chance of Prismatic Rainbow specifically. If you miss, roll a second batch of 10. Two bulk rolls = ~14% chance of Prismatic Rainbow.</p>
            <p><strong className="text-white">Day 8–10 (Apply or re-roll):</strong> If you landed Prismatic Rainbow, immediately apply it to your highest-base-coin crop plot ({topCrops[0].name}, {topCrops[0].coins} coins). At 6.0× × your 3.5× pet = 21× multiplier = {(topCrops[0].coins * 6.0 * 3.5).toLocaleString()} coins per harvest on that plot. If you missed, save remaining shards for the next boosted event — do not single-roll out of frustration.</p>
            <p><strong className="text-white">Day 11–14 (Optimize the stack):</strong> Move your strongest pet to the Prismatic Rainbow plot. If you own a Golden Phoenix Chick (5.0×), the plot now produces 30× multiplier = {(topCrops[0].coins * 30).toLocaleString()} coins per harvest. Reinvest the income into Rare Eggs to push for an S-Tier pet for the other plots.</p>
            <p className="text-xs text-[#00E676] mt-3">
              Result: From 0 shards and a 3.5× pet to a 21×–30× main plot in 14 days — at zero Robux cost. The key was patience: rolling only during the boosted event window.
            </p>
          </div>
        </div>
      </section>

      {/* Stacking table — kept, refined */}
      <section aria-labelledby="stacking-heading">
        <h2
          id="stacking-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🏆 Pet Stacking: Real Effective Multipliers
        </h2>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-3">
            Prismatic Rainbow (6.0×) stacks <strong className="text-white">multiplicatively</strong> with pet multipliers. Here is what each pet tier produces on a Prismatic Rainbow plot, using {topCrops[0].name} ({topCrops[0].coins} coins) as the base crop.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-[#1E212B] text-[#768294]">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Pet</th>
                  <th className="px-4 py-2 text-left font-semibold">Pet Multiplier</th>
                  <th className="px-4 py-2 text-left font-semibold">Total Multiplier (6.0× × Pet)</th>
                  <th className="px-4 py-2 text-left font-semibold">Coins Per Harvest ({topCrops[0].name})</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#252936]">
                {petTiers.map((p) => (
                  <tr key={p.tier}>
                    <td className="px-4 py-3 text-[#BAC4D1]">{p.tier}</td>
                    <td className="px-4 py-3 text-white">{p.multiplier}×</td>
                    <td className="px-4 py-3 text-[#00E676] font-semibold">{p.total.toFixed(1)}×</td>
                    <td className="px-4 py-3 text-[#00E676] font-semibold">
                      {Math.round(topCrops[0].coins * p.total).toLocaleString()} 🪙
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[#768294]">
            A Golden Phoenix Chick (5.0×) on a Prismatic Rainbow plot is the strongest single-plot configuration in the game — 30× effective multiplier.
          </p>
        </div>
      </section>

      {/* Common mistakes — NEW section, replaces templated Tips */}
      <section aria-labelledby="mistakes-heading">
        <h2
          id="mistakes-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⚠️ Common Prismatic Rainbow Mistakes
        </h2>
        <div className="space-y-3">
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 1: Single-rolling shards out of impatience</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Single-rolling gives ~1.2% S-Tier odds. Bulk-rolling 10 gives ~11%. You are throwing away 9× value every time you single-roll. Always save 10 shards before touching the Mutation Station.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 2: Rolling outside boosted event windows</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              A 2× boosted event doubles your odds. Rolling 50 shards outside an event gives ~55% S-Tier odds; rolling the same 50 during a 2× event gives ~80%. Check the{" "}
              <Link href="/grow-a-garden/events" className="text-[#00E676] hover:underline">Events Tracker</Link>{" "}
              before spending a single shard.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 3: Applying Prismatic Rainbow to a low-value crop plot</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              The 6.0× multiplier amplifies the base. On a 60-coin Carrot, Prismatic Rainbow adds 300 coins per harvest. On a {topCrops[0].coins}-coin {topCrops[0].name}, it adds {(topCrops[0].coins * 5).toLocaleString()} coins. Always apply to your highest-base-coin plot.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 4: Overwriting Prismatic Rainbow with another mutation</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Mutations cannot be refunded. If you overwrite Prismatic Rainbow (6.0×) with a Midas Bloom (5.0×) hoping for synergy, you have permanently lost the strongest mutation in the game. Never overwrite Prismatic Rainbow — period.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 5: Not pairing Prismatic Rainbow with your best pet</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              A Prismatic Rainbow plot with no pet (6.0×) is weaker than a Midas Bloom plot with a Golden Phoenix Chick (5.0× × 5.0× = 25×). Always move your strongest pet to the Prismatic Rainbow plot — pet multipliers stack multiplicatively.
            </p>
          </div>
        </div>
      </section>

      {/* Late-game insight — NEW section */}
      <section aria-labelledby="late-game-heading">
        <h2
          id="late-game-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🚀 Late-Game: What to Do After You Roll Prismatic Rainbow
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-3">
            Once you have Prismatic Rainbow on your main plot, the next wealth multipliers are:
          </p>
          <ol className="space-y-2 text-sm text-[#BAC4D1] list-decimal pl-5">
            <li><strong className="text-white">Maximize pet pairing on the Prismatic Rainbow plot.</strong> Move your <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">strongest pet</Link> here. If you own a Golden Phoenix Chick, this plot alone produces 30× = {(topCrops[0].coins * 30).toLocaleString()} coins per harvest.</li>
            <li><strong className="text-white">Roll a second S-Tier mutation for plot #2.</strong> Midas Bloom (5.0×) pairs well with Golden Dragon (4.8×, doubles golden-tier crops) for a 24× effective multiplier.</li>
            <li><strong className="text-white">Trade duplicate shards during the next event.</strong> Players who missed Prismatic Rainbow will pay a premium — check the{" "}
              <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">Trading Database</Link>{" "}
              for current shard values.</li>
            <li><strong className="text-white">Resist re-rolling the Prismatic Rainbow plot.</strong> Even if a new S-Tier mutation is added in an update, Prismatic Rainbow remains the highest multiplier in the game. Do not gamble what you already have.</li>
          </ol>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/rainbow-mutation-guide" />
    </ContentLayout>
  );
}
