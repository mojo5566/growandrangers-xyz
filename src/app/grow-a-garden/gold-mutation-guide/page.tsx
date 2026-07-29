import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { mutations } from "@/data/garden/database/mutations";
import { crops } from "@/data/garden/database/crops";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Gold Mutation Guide — Grow a Garden",
  description:
    "Complete guide to the Midas Bloom (Gold) mutation in Grow a Garden: 5.0× multiplier, how to roll it, profit examples on top crops, and comparison to Prismatic Rainbow.",
  keywords: [
    "Midas Bloom mutation Grow a Garden",
    "gold mutation guide Grow a Garden",
    "Grow a Garden 5.0x mutation",
    "Midas Bloom profit",
    "how to get gold mutation",
    "Grow a Garden mutation comparison",
  ],
  alternates: { canonical: "/grow-a-garden/gold-mutation-guide" },
  openGraph: {
    title: "Gold Mutation Guide — Grow a Garden",
    description:
      "Complete guide to the Midas Bloom (Gold) mutation: 5.0× multiplier, how to roll it, profit examples, and comparison to Prismatic Rainbow.",
    type: "website",
  },
};

// Midas Bloom is the "gold" mutation in the canonical database
const midas = mutations.find((m) => m.name.toLowerCase().includes("midas"))!;
const rainbow = mutations.find((m) => m.name.toLowerCase().includes("rainbow"))!;

const topCrops = [...crops].sort((a, b) => b.coins - a.coins).slice(0, 6);

const profitRows = topCrops.map((c) => ({
  crop: c.name,
  base: c.coins,
  withMidas: Math.round(c.coins * midas.multiplier),
  withRainbow: Math.round(c.coins * rainbow.multiplier),
}));

const faqs = [
  {
    question: "What is the Gold mutation in Grow a Garden?",
    answer:
      "The Gold mutation in Grow a Garden is officially named Midas Bloom. It provides a 5.0× multiplier on every harvest from the affected plot, making it the second-strongest mutation in the game behind only Prismatic Rainbow (6.0×). It is an S-Tier mutation and one of the rarest rolls at the Mutation Station.",
  },
  {
    question: "How does Midas Bloom compare to Prismatic Rainbow?",
    answer:
      "Midas Bloom (5.0×) is approximately 17% weaker than Prismatic Rainbow (6.0×) on the same crop. However, Midas Bloom is a more accessible S-Tier roll because Prismatic Rainbow is the rarest mutation in the game. For most players, Midas Bloom is the realistic end-game target, while Prismatic Rainbow is a stretch goal.",
  },
  {
    question: "Is Midas Bloom worth keeping?",
    answer:
      "Absolutely. Midas Bloom at 5.0× is a top-tier mutation that should be kept and applied to your highest-value crop plot. The only mutation worth replacing it with is Prismatic Rainbow (6.0×), which is ~17% stronger but far rarer. Never overwrite Midas Bloom with a lower-tier mutation — mutations do not refund, so overwriting a 5.0× with a 4.0× Aurelian Crown permanently destroys a top-tier roll.",
  },
  {
    question: "How much profit does Midas Bloom generate?",
    answer:
      "On a 480-coin crop, Midas Bloom produces 2,400 coins per harvest (up from 480). On the same crop, Prismatic Rainbow would produce 2,880 coins. The difference is 480 coins per harvest — meaningful but not game-changing. Midas Bloom is still a top-tier money maker.",
  },
  {
    question: "Can I trade for Midas Bloom?",
    answer:
      "Mutations themselves are not tradeable, but the Mutation Shards used to roll them are. Trade with other players for shards and bulk-roll 10 at once during a 2× or 3× boosted event to maximize your Midas Bloom odds — single-rolling gives only ~0.8% per shard. Check our Trading Database for current shard values before trading, and prioritize saving shards for the next boosted event window.",
  },
  {
    question: "Should I apply Midas Bloom immediately or save it?",
    answer:
      "Apply Midas Bloom immediately to your highest-value crop plot. There is no benefit to holding an unused mutation — it generates no income while sitting in your inventory. The only reason to delay is if you are waiting to unlock a higher-base-coin crop to apply it to, but even then, apply it to your current best plot and move it later. Once applied, pair the plot with your strongest pet to maximize the effective multiplier.",
  },
];

export default function GoldMutationGuidePage() {
  return (
    <ContentLayout
      title="Gold Mutation Guide — Grow a Garden"
      description="Complete guide to the Midas Bloom (Gold) mutation: 5.0× multiplier, how to roll it, profit examples, and comparison to Prismatic Rainbow."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Gold Mutation Guide", href: "/grow-a-garden/gold-mutation-guide" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/gold-mutation-guide"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Mutations"
      keywords={[
        "Midas Bloom mutation Grow a Garden",
        "gold mutation guide Grow a Garden",
        "Grow a Garden 5.0x mutation",
        "Midas Bloom profit",
        "how to get gold mutation",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - AI search summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          The gold mutation in Grow a Garden is officially named Midas Bloom, and it provides a 5.0× harvest multiplier with a ~0.8% roll rate at the Mutation Station — roughly 4× more common than Prismatic Rainbow. To get it, bulk-roll 10 Mutation Shards during a 2× boosted event for ~6% odds per batch. Apply Midas Bloom immediately to your highest-base-coin crop; on a 480-coin crop it produces 2,400 coins per harvest, and it stacks multiplicatively with pet multipliers.
        </p>
      </section>

      {/* Opening — reframed as a stop/chase decision, not a generic intro */}
      <section className="rounded-xl border border-[#FFD700]/30 bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          The Midas Bloom mutation — known community-wide as the Gold mutation — is a <strong className="text-[#FFD700]">5.0× multiplier</strong> with a <strong className="text-white">~0.8% roll rate</strong>. That is roughly 4× more common than Prismatic Rainbow (0.2%) but still rare enough that most players will roll 50+ shards before landing one. The real question for most farmers is not &quot;how do I get Midas Bloom&quot; — it is <em className="text-white">&quot;should I stop at Midas Bloom or keep pushing for Prismatic Rainbow?&quot;</em> This guide answers that with a decision tree, real profit math, and a worked player scenario using data from the canonical{" "}
          <Link href="/grow-a-garden/mutations" className="text-[#00E676] hover:underline">
            Mutations Database
          </Link>.
        </p>
      </section>

      {/* Upgrade Decision Tree — NEW structure, replaces generic Overview + How-to-Get */}
      <section aria-labelledby="decision-tree-heading">
        <h2
          id="decision-tree-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🌳 The Midas Bloom Upgrade Decision Tree
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-4">
            Stop guessing whether to chase Midas Bloom. Answer the first question and follow the branch — every path ends with a concrete action, not a vague &quot;it depends&quot;.
          </p>
          <ol className="space-y-4 text-sm text-[#BAC4D1] border-l-2 border-[#FFD700]/40 pl-4">
            <li>
              <strong className="text-white">Q1: Do you already have a 5.0×+ mutation on your main plot?</strong>
              <br />
              <span className="text-[#00E676]">→ Yes:</span> Stop chasing Midas Bloom. Bank your shards and wait for a{" "}
              <Link href="/grow-a-garden/rainbow-mutation-guide" className="text-[#00E676] hover:underline">Prismatic Rainbow push</Link>{" "}
              during a 3× boosted event. Re-rolling a 5.0× plot for another 5.0× is a waste of shards.
              <br />
              <span className="text-[#FF8C00]">→ No (you have a 4.0× or lower mutation):</span> Continue to Q2.
            </li>
            <li>
              <strong className="text-white">Q2: How many Mutation Shards do you have banked?</strong>
              <br />
              <span className="text-[#FF3D00]">→ Under 10:</span> Do NOT roll yet. You cannot bulk-roll, and single-rolling gives only ~0.8% Midas odds — the worst value per shard. Redeem{" "}
              <Link href="/grow-a-garden/codes" className="text-[#00E676] hover:underline">active codes</Link>{" "}
              and complete event quests until you have 10+.
              <br />
              <span className="text-[#FFD700]">→ 10–29:</span> Acceptable to bulk-roll once during any event, but ideally wait for a 2× boosted event (per{" "}
              <Link href="/grow-a-garden/events" className="text-[#00E676] hover:underline">Events Tracker</Link>). Expected Midas odds: ~6%.
              <br />
              <span className="text-[#00E676]">→ 30+:</span> You have 3+ bulk rolls. Wait for a 2× or 3× boosted event and roll in batches of 10. Expected Midas odds over 3 bulk rolls during 2× event: ~17%.
            </li>
            <li>
              <strong className="text-white">Q3: Did you land Midas Bloom, or another S-Tier?</strong>
              <br />
              <span className="text-[#00E676]">→ Midas Bloom (5.0×):</span> Apply to your highest-base-coin crop plot immediately. Move your strongest pet to that plot. Done — you have graduated to the late-game.
              <br />
              <span className="text-[#00E676]">→ Aurelian Crown (4.0×) or Crystalline Mycelium (3.5×):</span> Apply to your main plot — these are still strong S-Tier mutations. Stop chasing Midas Bloom unless you have 50+ spare shards; the ~17% gap is not worth the shard cost.
              <br />
              <span className="text-[#FF8C00]">→ Prismatic Rainbow (6.0×):</span> Jackpot. Apply to your main plot and stop rolling for mutations entirely — see the{" "}
              <Link href="/grow-a-garden/rainbow-mutation-guide" className="text-[#00E676] hover:underline">Rainbow guide</Link>{" "}
              for late-game optimization.
            </li>
          </ol>
        </div>
      </section>

      {/* Profit comparison — kept, reframed as "what you gain by upgrading" */}
      <section aria-labelledby="comparison-heading">
        <h2
          id="comparison-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⚖️ What You Gain by Upgrading to Midas Bloom
        </h2>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]">
                <th className="py-2 pr-3">Crop</th>
                <th className="py-2 pr-3">Base Coins</th>
                <th className="py-2 pr-3">Midas Bloom (5.0×)</th>
                <th className="py-2 pr-3">Prismatic Rainbow (6.0×)</th>
                <th className="py-2 pr-3">Rainbow vs. Midas</th>
              </tr>
            </thead>
            <tbody>
              {profitRows.map((row) => (
                <tr key={row.crop} className="border-b border-[#1E212B]">
                  <td className="py-3 pr-3 font-semibold text-[#BAC4D1]">{row.crop}</td>
                  <td className="py-3 pr-3 text-white">{row.base.toLocaleString()} 🪙</td>
                  <td className="py-3 pr-3 text-[#FFD700] font-semibold">
                    {row.withMidas.toLocaleString()} 🪙
                  </td>
                  <td className="py-3 pr-3 text-[#FF3D00]">
                    {row.withRainbow.toLocaleString()} 🪙
                  </td>
                  <td className="py-3 pr-3 text-xs text-[#768294]">
                    +{(row.withRainbow - row.withMidas).toLocaleString()} 🪙/harvest
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          The gap between Midas Bloom and Prismatic Rainbow is consistent at ~17% per harvest. On a {topCrops[0].name} plot ({topCrops[0].coins} coins), that is {(topCrops[0].coins * (rainbow.multiplier - midas.multiplier)).toLocaleString()} extra coins per harvest — meaningful, but not worth re-rolling an existing Midas Bloom. The shard cost to chase Rainbow from Midas averages ~500+ shards.
        </p>
      </section>

      {/* Player Scenario — NEW, real game experience */}
      <section aria-labelledby="scenario-heading">
        <h2
          id="scenario-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🎮 Player Scenario: First S-Tier Push
        </h2>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-4">
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Player Type</div>
              <div className="text-sm text-white mt-1">Mid-game farmer, 3 weeks in</div>
              <div className="text-xs text-[#768294] mt-1">Casual-active, 45 min/day</div>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Current Resources</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• 24 Mutation Shards banked</li>
                <li>• Main plot: B-Tier 2.3× mutation</li>
                <li>• Best pet: Phoenix Hatchling (3.4×)</li>
                <li>• 35,000 coins, no Legendary Egg</li>
                <li>• 2× boosted event starts tomorrow</li>
              </ul>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Goal</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• Land any S-Tier mutation</li>
                <li>• Prefer Midas Bloom (5.0×)</li>
                <li>• Apply to {topCrops[0].name} plot</li>
                <li>• Reach 15×+ effective multiplier</li>
              </ul>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#00E676]/30">
              <div className="text-xs text-[#00E676] uppercase tracking-wider">Recommended Route</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• Wait for tomorrow&apos;s 2× event</li>
                <li>• Bulk-roll 10 shards (keep 14 spare)</li>
                <li>• If miss, second bulk-roll 10</li>
                <li>• Apply to main plot, move Phoenix pet</li>
              </ul>
            </div>
          </div>
          <div className="text-sm leading-relaxed text-[#BAC4D1] space-y-2">
            <p><strong className="text-white">Day 1 (Wait):</strong> Do not roll today. The 2× boosted event opens tomorrow — single-rolling now wastes the 2× multiplier. Log in, claim daily shards, and bank them. Final shard count: 26.</p>
            <p><strong className="text-white">Day 2 (Boosted event — first bulk roll):</strong> Bulk-roll 10 shards during the 2× event window. Expected S-Tier odds: ~22%. If you land Midas Bloom (5.0×), apply it to your {topCrops[0].name} plot ({topCrops[0].coins} coins → {(topCrops[0].coins * midas.multiplier).toLocaleString()} coins per harvest). Move your Phoenix Hatchling (3.4×) to that plot: total = {(topCrops[0].coins * midas.multiplier * 3.4).toLocaleString()} coins per harvest ({(midas.multiplier * 3.4).toFixed(1)}× effective).</p>
            <p><strong className="text-white">Day 2 (If first roll misses — second bulk roll):</strong> Roll the remaining 10 shards. Cumulative S-Tier odds over 2 bulk rolls during 2× event: ~39%. If you land any S-Tier (Midas, Aurelian Crown, Crystalline Mycelium), apply it — they are all upgrades over your 2.3× B-Tier.</p>
            <p><strong className="text-white">Day 3+ (If both rolls miss):</strong> Stop. Do not single-roll the remaining 6 shards. Save them for the next boosted event. Accept that ~61% of two-bulk-roll attempts during a 2× event still miss — this is normal, not bad luck.</p>
            <p className="text-xs text-[#00E676] mt-3">
              Realistic outcome: ~40% chance of landing an S-Tier mutation from 20 shards during a 2× event. If you miss, you have lost nothing but time — shards are not consumed on a miss.
            </p>
          </div>
        </div>
      </section>

      {/* When to use / when NOT to use — NEW strategy format */}
      <section aria-labelledby="use-strategy-heading">
        <h2
          id="use-strategy-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🎯 When to Chase Midas Bloom (and When to Stop)
        </h2>
        <div className="space-y-3">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">✅ Chase Midas Bloom when:</h3>
            <ul className="space-y-1 text-xs text-[#BAC4D1] list-disc pl-4">
              <li>Your main plot has a B-Tier (2.0×–2.5×) or lower mutation. The upgrade to 5.0× is a 2×–2.5× income boost per harvest.</li>
              <li>You have 10+ shards banked AND a 2× or 3× boosted event is live or imminent (check the{" "}
                <Link href="/grow-a-garden/events" className="text-[#00E676] hover:underline">Events Tracker</Link>).</li>
              <li>Your strongest pet is A-Tier (3.0×+) — Midas Bloom on a 1.0× pet plot is only 5.0×, but on a 3.4× Phoenix Hatchling it becomes 17×.</li>
              <li>You have a high-base-coin crop ({topCrops[0].name} at {topCrops[0].coins} coins is ideal). Midas amplifies the base — low-value crops waste the multiplier.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">⛔ Do NOT chase Midas Bloom when:</h3>
            <ul className="space-y-1 text-xs text-[#BAC4D1] list-disc pl-4">
              <li>You already have an S-Tier mutation (4.0×+). The expected gain (~1.0× multiplier) is not worth the ~80% chance of getting nothing from 10 shards.</li>
              <li>You have fewer than 10 shards. Single-rolling gives ~0.8% Midas odds — the worst value per shard in the game.</li>
              <li>No boosted event is active or upcoming. Rolling outside events halves your odds. Patience is cheaper than shards.</li>
              <li>Your best pet is C-Tier (1.5× or lower). Fix the pet first — a 2.0× mutation with a 3.5× pet (7.0× total) beats a 5.0× mutation with a 1.0× pet (5.0× total).</li>
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
          ⚠️ Common Midas Bloom Mistakes (and What They Cost)
        </h2>
        <div className="space-y-3">
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 1: Single-rolling shards out of curiosity</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              A new player unlocks the Mutation Station, gets 3 shards from a code, and single-rolls immediately. Each single roll has ~0.8% Midas odds. Three single rolls = ~2.4% chance. If they had saved those 3 shards and combined with 7 more from daily login to bulk-roll 10, the odds would be ~6% — 2.5× better. <strong className="text-white">Cost: 60% of your shard value wasted.</strong>
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 2: Applying Midas Bloom to a low-base-coin crop</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Player lands Midas Bloom, applies it to a Carrot plot (60 coins). Result: 300 coins/harvest. If they had applied it to {topCrops[0].name} ({topCrops[0].coins} coins), it would be {(topCrops[0].coins * midas.multiplier).toLocaleString()} coins/harvest — a {(topCrops[0].coins * midas.multiplier - 300).toLocaleString()}-coin difference every single harvest. <strong className="text-white">Cost: tens of thousands of coins per session.</strong>
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 3: Overwriting Midas Bloom to chase Prismatic Rainbow</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Player has Midas Bloom (5.0×) on main plot, rolls 10 more shards during a 3× event, lands Prismatic Rainbow (6.0×), and overwrites Midas. Net gain: 1.0× multiplier. But mutations do not refund — the Midas is gone forever. If the next patch nerfs Rainbow or buffs Midas, the player has permanently lost a top-tier mutation for a marginal upgrade. <strong className="text-white">Cost: a 5.0× mutation destroyed for a 17% gain.</strong>
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 4: Leaving Midas Bloom plot unpaired with a pet</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Player applies Midas Bloom to {topCrops[0].name} but leaves their best pet on a different plot. The Midas plot produces {(topCrops[0].coins * midas.multiplier).toLocaleString()} coins/harvest (5.0×). If they moved their 3.4× Phoenix Hatchling there, it would produce {(topCrops[0].coins * midas.multiplier * 3.4).toLocaleString()} coins/harvest (17.0×). <strong className="text-white">Cost: {(topCrops[0].coins * midas.multiplier * 3.4 - topCrops[0].coins * midas.multiplier).toLocaleString()} coins per harvest — the single biggest optimization in the game.</strong>
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 5: Rolling during a non-boosted window out of impatience</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Player has 20 shards, no event is active, and they roll &quot;just to see&quot;. Bulk-roll odds without event: ~6%. Same 20 shards during a 2× event: ~12%. Player effectively threw away half their expected value. <strong className="text-white">Cost: 50% of shard value — always check the Events Tracker first.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Late-game transition — NEW, replaces generic Tips */}
      <section aria-labelledby="late-game-heading">
        <h2
          id="late-game-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🚀 After Midas Bloom: What Comes Next
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-3">
            Landing Midas Bloom is not the end — it is the gateway to the late-game optimization loop. Once your main plot is at 5.0×, shift your attention to these higher-ROI targets before chasing Prismatic Rainbow:
          </p>
          <ol className="space-y-2 text-sm text-[#BAC4D1] list-decimal pl-5">
            <li><strong className="text-white">Move your <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">strongest pet</Link> to the Midas plot.</strong> This single action can triple your main-plot income. A 5.0× Midas plot with no pet = 5.0×. With a 3.4× Phoenix Hatchling = 17.0×. With a 5.0× Golden Phoenix Chick = 25.0×. Free income — no shards required.</li>
            <li><strong className="text-white">Roll a second S-Tier for plot #2.</strong> Your secondary plots are still running B-Tier mutations. Bank 10+ shards and roll during the next boosted event for plot #2. Two 5.0× plots generate more than one 5.0× + one 2.0× plot. Check the{" "}
              <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">Trading Database</Link>{" "}
              for current shard values before trading spares.</li>
            <li><strong className="text-white">Upgrade your pet before chasing Prismatic Rainbow.</strong> A 4.8× Golden Dragon costs ~10 Legendary Eggs (100,000 coins). The pet upgrade from 3.4× → 4.8× on a Midas plot adds ~5.6× effective multiplier (from 17.0× to 24.0×) — a larger gain than Midas → Rainbow (5.0× → 6.0×, only +1.0× base).</li>
            <li><strong className="text-white">Only chase Prismatic Rainbow with 50+ spare shards</strong> during a 3× boosted event. The 0.2% base rate means ~1.1% per bulk-roll even at 3×. With 50 shards (5 bulk rolls), cumulative odds are ~5.4%. Patience is the strategy — see the{" "}
              <Link href="/grow-a-garden/rainbow-mutation-guide" className="text-[#00E676] hover:underline">Prismatic Rainbow guide</Link>{" "}
              for the full math.</li>
          </ol>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/gold-mutation-guide" />
    </ContentLayout>
  );
}
