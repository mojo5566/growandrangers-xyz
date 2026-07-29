import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { seeds } from "@/data/garden/database/seeds";
import { crops } from "@/data/garden/database/crops";
import { trading } from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Best Legendary Seeds in Grow a Garden",
  description:
    "Ranked comparison of every Legendary seed in Grow a Garden: Mythstar, Phoenix Bloom, Star Melon, Golden Wheat, Lucky Clover, and Shadow Spine. Prices, crops, and trade values.",
  keywords: [
    "best legendary seeds Grow a Garden",
    "Grow a Garden Mythstar Seed",
    "Grow a Garden Phoenix Bloom Seed",
    "Grow a Garden Star Melon Seed",
    "Grow a Garden Golden Wheat Seed",
    "legendary seed ranking Grow a Garden",
  ],
  alternates: { canonical: "/grow-a-garden/best-legendary-seeds" },
  openGraph: {
    title: "Best Legendary Seeds in Grow a Garden",
    description:
      "Ranked comparison of every Legendary seed in Grow a Garden with prices, crops, and trade values.",
    type: "website",
  },
};

const legendarySeeds = seeds
  .filter((s) => s.rarity === "Legendary")
  .sort((a, b) => {
    const tierOrder = { S: 0, A: 1, B: 2, C: 3 };
    return tierOrder[a.tier] - tierOrder[b.tier] || a.price - b.price;
  });

// Build a map of cropId → crop for cross-reference
const cropMap = new Map(crops.map((c) => [c.id, c]));

// Build a map of seed name → trading value
const tradingByName = new Map<string, (typeof trading)[number]>();
for (const t of trading) {
  if (t.category === "Seed") tradingByName.set(t.name.toLowerCase(), t);
}

const seedRows = legendarySeeds.map((s) => {
  const crop = s.cropId ? cropMap.get(s.cropId) : undefined;
  const trade = tradingByName.get(s.name.toLowerCase());
  const cropCoins = crop?.coins ?? 0;
  // Payback period (in harvests) at base crop value, no multiplier
  const paybackBase = cropCoins > 0 ? Math.ceil(s.price / cropCoins) : null;
  // Payback period with typical mid-game multiplier (3.5× = ~2.0× mutation × ~1.75× pet)
  const typicalMultiplier = 3.5;
  const paybackMidGame = cropCoins > 0 ? Math.ceil(s.price / (cropCoins * typicalMultiplier)) : null;
  return {
    id: s.id,
    name: s.name,
    tier: s.tier,
    price: s.price,
    cropName: crop?.name ?? "—",
    cropCoins,
    tradeValue: trade?.value ?? null,
    demand: trade?.demand ?? null,
    trend: trade?.trend ?? null,
    paybackBase,
    paybackMidGame,
  };
});

// Sort by payback period (mid-game) ascending — fastest payback first
const paybackRanking = [...seedRows].sort((a, b) => {
  if (a.paybackMidGame === null) return 1;
  if (b.paybackMidGame === null) return -1;
  return a.paybackMidGame - b.paybackMidGame;
});

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

// Reference values for narrative
const fastestPayback = paybackRanking[0];
const slowestPayback = paybackRanking[paybackRanking.length - 1];

const faqs = [
  {
    question: "What is the best Legendary seed in Grow a Garden?",
    answer:
      "The best Legendary seed depends on your farm's stage. For pure profit per harvest, the Mythstar Seed and Phoenix Bloom Seed are the top contenders — both are S-Tier seeds that grow into high-value crops. For trade value, the Phoenix Bloom Seed commands premium demand because it is Summer-event-exclusive. Check the ranking table below for the full comparison.",
  },
  {
    question: "How do Legendary seeds compare to Mythical seeds?",
    answer:
      "Mythical seeds are rarer and often event-exclusive, but Legendary seeds are more accessible and still produce top-tier crops. The best Legendary seeds (Mythstar, Phoenix Bloom, Star Melon, Golden Wheat) are all S-Tier and competitive with Mythical seeds in terms of the crops they produce. Most end-game farms run a mix of Legendary and Mythical seeds.",
  },
  {
    question: "Are Legendary seeds worth the price?",
    answer:
      "Yes, once your farm generates enough income to afford them. Legendary seeds cost significantly more than Rare or Uncommon seeds, but the crops they produce have much higher base coin values, which compounds with mutation and pet multipliers. Always invest in Legendary seeds for your main plot before spending on cosmetics — a 5.0× mutation on a high-value Legendary crop earns back the seed price in a fraction of the time a Rare crop would.",
  },
  {
    question: "Can I trade Legendary seeds?",
    answer:
      "Yes. Legendary seeds are tradeable and hold their value well. Event-exclusive Legendary seeds (such as Phoenix Bloom during Summer) often appreciate after the event ends because no new supply enters the market. Check our Trading Database for current verified values, and stockpile two seeds when possible — one to plant and one to trade after prices rise.",
  },
  {
    question: "Which Legendary seed should I buy first?",
    answer:
      "Start with a year-round Legendary seed (not event-exclusive) so you can buy it at any time. The Golden Wheat Seed is a strong entry point because it is S-Tier and grows into one of the highest-value crops in the game. Once you have a stable coin income, branch into event-exclusive Legendary seeds during their event windows.",
  },
  {
    question: "Do Legendary seeds work with mutations and pets?",
    answer:
      "Yes. The crop that grows from a Legendary seed benefits from mutation and pet multipliers just like any other crop. Because Legendary seeds grow into high-base-coin crops, the multiplier effect is amplified — a 6.0× Prismatic Rainbow mutation on a 480-coin Legendary crop produces 2,880 coins per harvest, and pairing that plot with a 5.0× pet pushes it to 14,400 coins per harvest.",
  },
];

export default function BestLegendarySeedsPage() {
  return (
    <ContentLayout
      title="Best Legendary Seeds in Grow a Garden"
      description="Ranked comparison of every Legendary seed in Grow a Garden with prices, crops, and trade values."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Best Legendary Seeds", href: "/grow-a-garden/best-legendary-seeds" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-legendary-seeds"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Seeds"
      keywords={[
        "best legendary seeds Grow a Garden",
        "Grow a Garden Mythstar Seed",
        "Grow a Garden Phoenix Bloom Seed",
        "Grow a Garden Star Melon Seed",
        "Grow a Garden Golden Wheat Seed",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - AI search summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          The best Legendary seeds in Grow a Garden are the Mythstar Seed and Phoenix Bloom Seed — both S-Tier and the top profit-per-harvest contenders. For a first purchase, the Golden Wheat Seed is the strongest entry point because it is S-Tier, available year-round, and grows into one of the highest-value crops. Phoenix Bloom Seed commands premium trade demand because it is Summer-event-exclusive; buy it during the event window, as it appreciates sharply once supply dries up.
        </p>
      </section>

      {/* Opening — reframed as investment payback analysis */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          Legendary seeds are the most expensive purchase a mid-game farmer will make — prices range from thousands to tens of thousands of coins. The question is not &quot;which is the best Legendary seed?&quot; but <em className="text-white">&quot;which Legendary seed pays for itself the fastest?&quot;</em> A {fastestPayback?.name} at {fastestPayback?.price.toLocaleString()} coins that pays back in {fastestPayback?.paybackMidGame} harvests (mid-game multiplier) is a better investment than a {slowestPayback?.name} at {slowestPayback?.price.toLocaleString()} coins that takes {slowestPayback?.paybackMidGame} harvests to break even. This guide ranks every Legendary seed from the canonical{" "}
          <Link href="/grow-a-garden/seeds" className="text-[#00E676] hover:underline">Seeds Database</Link>{" "}
          by payback period, using real crop values from our{" "}
          <Link href="/grow-a-garden/crops" className="text-[#00E676] hover:underline">Crops Database</Link>{" "}
          and verified trading values.
        </p>
      </section>

      {/* Payback Period Ranking — NEW structure, replaces generic Ranking Table */}
      <section aria-labelledby="payback-heading">
        <h2
          id="payback-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          💰 Payback Period Ranking (Fastest to Slowest ROI)
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-4">
            Payback period = seed price ÷ crop coins per harvest. Lower is better — it means the seed pays for itself faster. We show two scenarios: <strong className="text-white">base</strong> (no mutation, no pet) and <strong className="text-white">mid-game</strong> (3.5× effective multiplier = ~2.0× mutation × ~1.75× pet). The mid-game column is what most farmers will actually experience.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-[#1E212B] text-[#768294]">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Rank</th>
                  <th className="px-4 py-2 text-left font-semibold">Seed</th>
                  <th className="px-4 py-2 text-left font-semibold">Tier</th>
                  <th className="px-4 py-2 text-left font-semibold">Price</th>
                  <th className="px-4 py-2 text-left font-semibold">Crop / Value</th>
                  <th className="px-4 py-2 text-left font-semibold">Payback (Base)</th>
                  <th className="px-4 py-2 text-left font-semibold">Payback (3.5× Mid-Game)</th>
                  <th className="px-4 py-2 text-left font-semibold">Trade Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#252936]">
                {paybackRanking.map((row, i) => (
                  <tr key={row.id} className="text-[#BAC4D1]">
                    <td className="px-4 py-3 font-semibold text-white">#{i + 1}</td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/grow-a-garden/seeds/${row.id}`}
                        className="text-[#00E676] hover:underline font-semibold"
                      >
                        {row.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className="rounded px-2 py-0.5 text-xs font-bold"
                        style={{
                          color: tierColors[row.tier],
                          background: tierColors[row.tier] + "22",
                        }}
                      >
                        {row.tier}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-white">{row.price.toLocaleString()} 🪙</td>
                    <td className="px-4 py-3 text-xs">
                      <span className="text-[#BAC4D1]">{row.cropName}</span>
                      <br />
                      <span className="text-[#00E676]">{row.cropCoins > 0 ? row.cropCoins.toLocaleString() + " 🪙" : "—"}</span>
                    </td>
                    <td className="px-4 py-3 text-xs text-[#FFD700]">
                      {row.paybackBase !== null ? `${row.paybackBase} harvests` : "—"}
                    </td>
                    <td className="px-4 py-3 text-xs font-semibold" style={{ color: row.paybackMidGame !== null && row.paybackMidGame <= 20 ? "#00E676" : row.paybackMidGame !== null && row.paybackMidGame <= 50 ? "#FFD700" : "#FF3D00" }}>
                      {row.paybackMidGame !== null ? `${row.paybackMidGame} harvests` : "—"}
                    </td>
                    <td className="px-4 py-3 text-xs text-[#00E676]">
                      {row.tradeValue ? row.tradeValue.toLocaleString() : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[#768294]">
            Green = pays back in under 20 harvests (strong investment). Yellow = 21–50 harvests (acceptable). Red = 50+ harvests (only buy if you need the crop for a specific mutation synergy). Payback periods assume the crop is harvested on every cycle — actual time depends on growth speed.
          </p>
        </div>
      </section>

      {/* Player Scenario — NEW, real game experience */}
      <section aria-labelledby="scenario-heading">
        <h2
          id="scenario-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🎮 Player Scenario: First Legendary Seed Purchase
        </h2>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-4">
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Player Type</div>
              <div className="text-sm text-white mt-1">Mid-game farmer, 4 weeks in</div>
              <div className="text-xs text-[#768294] mt-1">Active player, 45 min/day</div>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Current Resources</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• 4 plots, all running Rare-tier seeds</li>
                <li>• Best pet: Neon Dragon Hatchling (3.5×)</li>
                <li>• Best mutation: Glowing Bloom (2.3×)</li>
                <li>• 52,000 coins banked</li>
                <li>• Effective multiplier: ~8.0× (2.3× × 3.5×)</li>
              </ul>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Goal</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• Buy first Legendary seed</li>
                <li>• Recover cost within 2 weeks</li>
                <li>• Maximize coins-per-hour gain</li>
                <li>• Keep 20,000 coins as reserve</li>
              </ul>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#00E676]/30">
              <div className="text-xs text-[#00E676] uppercase tracking-wider">Recommended Route</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• Buy {fastestPayback?.name} ({fastestPayback?.price.toLocaleString()} coins)</li>
                <li>• Plant on plot #1 (highest base)</li>
                <li>• Apply Glowing Bloom mutation</li>
                <li>• Move Neon Dragon to plot #1</li>
              </ul>
            </div>
          </div>
          <div className="text-sm leading-relaxed text-[#BAC4D1] space-y-2">
            <p><strong className="text-white">The decision:</strong> Player has 52,000 coins and wants to buy their first Legendary seed. They are tempted by the {slowestPayback?.name} at {slowestPayback?.price.toLocaleString()} coins because it is the &quot;most expensive = best&quot; mental model. Wrong. The {slowestPayback?.name} takes {slowestPayback?.paybackMidGame} harvests to pay back at the player&apos;s 8.0× effective multiplier — that is {slowestPayback ? Math.ceil(slowestPayback.paybackMidGame! / 4) : 0}+ days of farming just to break even.</p>
            <p><strong className="text-white">The correct pick:</strong> {fastestPayback?.name} at {fastestPayback?.price.toLocaleString()} coins. Payback period at 8.0× multiplier: {fastestPayback ? Math.ceil(fastestPayback.price / (fastestPayback.cropCoins * 8.0)) : 0} harvests. At ~4 harvests/day, that is {fastestPayback ? Math.ceil(Math.ceil(fastestPayback.price / (fastestPayback.cropCoins * 8.0)) / 4) : 0} days to recover the cost. After that, every harvest is pure profit.</p>
            <p><strong className="text-white">The income jump:</strong> Before the purchase, plot #1 was running a Rare-tier crop worth ~{Math.round(fastestPayback ? fastestPayback.cropCoins * 0.3 : 0)} coins/harvest. With {fastestPayback?.name} ({fastestPayback?.cropCoins} coins) + Glowing Bloom (2.3×) + Neon Dragon (3.5×), plot #1 now produces <strong className="text-[#00E676]">{fastestPayback ? Math.round(fastestPayback.cropCoins * 2.3 * 3.5).toLocaleString() : 0} coins per harvest</strong> — a {fastestPayback ? Math.round((fastestPayback.cropCoins * 2.3 * 3.5) / (fastestPayback.cropCoins * 0.3 * 2.3 * 3.5) * 100) : 0}% increase on that plot.</p>
            <p><strong className="text-white">The reserve:</strong> After buying {fastestPayback?.name}, the player has {(52000 - (fastestPayback?.price ?? 0)).toLocaleString()} coins remaining — above the 20,000-coin reserve threshold. They can continue farming and save for the next Legendary seed (target: {paybackRanking[1]?.name} at {paybackRanking[1]?.price.toLocaleString()} coins) without going broke.</p>
            <p className="text-xs text-[#00E676] mt-3">
              Result: First Legendary seed pays for itself in ~{fastestPayback ? Math.ceil(Math.ceil(fastestPayback.price / (fastestPayback.cropCoins * 8.0)) / 4) : 0} days, then generates pure profit. The player avoided the &quot;most expensive = best&quot; trap and chose by payback period instead.
            </p>
          </div>
        </div>
      </section>

      {/* When to buy / when to wait — NEW strategy format */}
      <section aria-labelledby="buy-strategy-heading">
        <h2
          id="buy-strategy-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🎯 When to Buy a Legendary Seed (and When to Wait)
        </h2>
        <div className="space-y-3">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">✅ Buy a Legendary seed when:</h3>
            <ul className="space-y-1 text-xs text-[#BAC4D1] list-disc pl-4">
              <li>Your coin reserve after purchase is ≥ 20,000 coins. Going broke on a seed purchase leaves no buffer for Rare Eggs or{" "}
                <Link href="/grow-a-garden/codes" className="text-[#00E676] hover:underline">code redemption</Link>{" "}
                gaps.</li>
              <li>The seed&apos;s payback period (mid-game column) is ≤ 30 harvests. Anything above 30 means the seed takes &gt;1 week to break even — only acceptable if you need the crop for a specific mutation synergy.</li>
              <li>You have an A-Tier or stronger pet (3.0×+). A Legendary crop with no pet multiplier takes 3× longer to pay back. Fix the pet first if needed.</li>
              <li>You have a B-Tier or stronger mutation (2.0×+) ready to apply to the new crop plot. The mutation multiplier dramatically shortens the payback period.</li>
              <li>It is an event-exclusive Legendary seed (e.g., Phoenix Bloom during Summer) and the event window is closing. Event-exclusive seeds appreciate after the event — see the{" "}
                <Link href="/grow-a-garden/best-event-seeds" className="text-[#00E676] hover:underline">Event Seeds guide</Link>.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">⛔ Wait and save your coins when:</h3>
            <ul className="space-y-1 text-xs text-[#BAC4D1] list-disc pl-4">
              <li>The purchase would leave you under 20,000 coins. A single Rare Egg (2,000 coins) or Legendary Egg (10,000 coins) purchase would bankrupt you.</li>
              <li>The seed&apos;s payback period is &gt;50 harvests. You are paying a premium for a crop that will not generate meaningful income for 2+ weeks.</li>
              <li>Your best pet is C-Tier (1.5× or lower). A Legendary crop at 1.5× multiplier produces less than a Rare crop at 3.5× multiplier. Upgrade the pet first.</li>
              <li>You have no mutation ready for the new plot. A Legendary crop with no mutation takes 3.5× longer to pay back than the same crop with a 3.5× mutation.</li>
              <li>A boosted event is imminent (check the{" "}
                <Link href="/grow-a-garden/events" className="text-[#00E676] hover:underline">Events Tracker</Link>). Event-exclusive Legendary seeds may be discounted or re-released — wait for the event window.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Detailed Analysis — kept, reframed as "ROI breakdown per seed" */}
      <section aria-labelledby="analysis-heading">
        <h2
          id="analysis-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📊 ROI Breakdown Per Seed
        </h2>
        <div className="space-y-4">
          {paybackRanking.map((row, i) => (
            <div
              key={row.id}
              className="rounded-xl border border-[#252936] bg-[#14161D] p-5"
            >
              <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                <h3 className="font-heading text-lg font-semibold text-white">
                  #{i + 1} — {row.name}
                </h3>
                <span
                  className="rounded px-2 py-0.5 text-xs font-bold"
                  style={{
                    color: tierColors[row.tier],
                    background: tierColors[row.tier] + "22",
                  }}
                >
                  {row.tier}-Tier
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-xs">
                <div className="rounded bg-[#1E212B] p-2 border border-[#252936]">
                  <div className="text-[#768294] uppercase tracking-wider">Price</div>
                  <div className="text-white mt-1">{row.price.toLocaleString()} coins</div>
                </div>
                <div className="rounded bg-[#1E212B] p-2 border border-[#252936]">
                  <div className="text-[#768294] uppercase tracking-wider">Crop / Value</div>
                  <div className="text-[#BAC4D1] mt-1">{row.cropName}</div>
                  <div className="text-[#00E676]">{row.cropCoins > 0 ? row.cropCoins.toLocaleString() + " coins/harvest" : "—"}</div>
                </div>
                <div className="rounded bg-[#1E212B] p-2 border border-[#252936]">
                  <div className="text-[#768294] uppercase tracking-wider">Payback (3.5× mid-game)</div>
                  <div className="mt-1 font-semibold" style={{ color: row.paybackMidGame !== null && row.paybackMidGame <= 20 ? "#00E676" : row.paybackMidGame !== null && row.paybackMidGame <= 50 ? "#FFD700" : "#FF3D00" }}>
                    {row.paybackMidGame !== null ? `${row.paybackMidGame} harvests` : "—"}
                  </div>
                </div>
                <div className="rounded bg-[#1E212B] p-2 border border-[#252936]">
                  <div className="text-[#768294] uppercase tracking-wider">Trade Value / Trend</div>
                  <div className="text-[#00E676] mt-1">{row.tradeValue ? row.tradeValue.toLocaleString() + " coins" : "—"}</div>
                  <div className="text-[#BAC4D1]">{row.demand ?? "—"} demand · {row.trend ?? "—"}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common mistakes — replaces templated Tips ul */}
      <section aria-labelledby="mistakes-heading">
        <h2
          id="mistakes-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⚠️ Common Legendary Seed Mistakes (and What They Cost)
        </h2>
        <div className="space-y-3">
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 1: Buying the most expensive Legendary seed first</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Player has 50,000 coins and buys the {slowestPayback?.name} at {slowestPayback?.price.toLocaleString()} coins because &quot;higher price = better seed&quot;. The crop produces {slowestPayback?.cropCoins} coins/harvest — payback at 3.5× multiplier takes {slowestPayback?.paybackMidGame} harvests. If they had bought {fastestPayback?.name} at {fastestPayback?.price.toLocaleString()} coins instead, payback would be {fastestPayback?.paybackMidGame} harvests — {slowestPayback && fastestPayback ? slowestPayback.paybackMidGame! - fastestPayback.paybackMidGame! : 0} fewer harvests to break even. <strong className="text-white">Cost: {slowestPayback && fastestPayback ? (slowestPayback.price - fastestPayback.price).toLocaleString() : 0} coins of capital tied up longer, plus delayed income from the slower-paying crop.</strong>
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 2: Buying a Legendary seed with no mutation or pet ready</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Player buys {fastestPayback?.name} ({fastestPayback?.price.toLocaleString()} coins) but has no mutation banked and only a 1.0× Common Garden Cat. The crop produces {fastestPayback?.cropCoins} coins/harvest at base — payback takes {fastestPayback?.paybackBase} harvests instead of {fastestPayback?.paybackMidGame}. At ~4 harvests/day, that is {fastestPayback ? Math.ceil(fastestPayback.paybackBase! / 4) : 0} days instead of {fastestPayback ? Math.ceil(fastestPayback.paybackMidGame! / 4) : 0} days. <strong className="text-white">Cost: {fastestPayback ? Math.ceil((fastestPayback.paybackBase! - fastestPayback.paybackMidGame!) / 4) : 0} extra days to break even — the seed sits underperforming while the player scrambles to roll a mutation.</strong>
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 3: Spending the entire coin reserve on one Legendary seed</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Player has 30,000 coins and buys a 28,000-coin Legendary seed, leaving only 2,000 coins. The next day, a Rare Egg goes on sale for 2,000 coins — but the player needs those coins for daily expenses. They miss the egg. Two weeks later, they still have not recovered the 28,000-coin investment because they had no mutation ready. <strong className="text-white">Cost: missed Rare Egg opportunity + delayed payback + zero coin buffer for emergencies.</strong>
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 4: Planting a Legendary seed on a secondary plot</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Player buys {fastestPayback?.name} but plants it on plot #3 (a low-multiplier plot) &quot;to spread the wealth&quot;. The crop&apos;s high base coin value is amplified by the plot&apos;s mutation and pet — plot #1 has the strongest of both. Planting on plot #3 means the crop produces at 2.0× instead of 8.0×, extending payback from {fastestPayback?.paybackMidGame} to {fastestPayback ? Math.ceil(fastestPayback.price / (fastestPayback.cropCoins * 2.0)) : 0} harvests. <strong className="text-white">Cost: {fastestPayback ? Math.ceil(fastestPayback.price / (fastestPayback.cropCoins * 2.0)) - fastestPayback.paybackMidGame! : 0} extra harvests to break even — always plant Legendary seeds on your strongest plot.</strong>
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 5: Ignoring trade value when buying event-exclusive Legendary seeds</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Player buys a Phoenix Bloom Seed during Summer for 50,000 coins, plants it, and harvests the crop. Two months later, they realize the seed itself trades for 80,000+ coins post-event because no new supply enters the market. They consumed a tradeable asset worth 80,000 coins to produce a crop worth {fastestPayback?.cropCoins} coins/harvest. If they had bought two seeds — one to plant, one to hold for trade — they would have profited 30,000+ coins on the second seed alone. <strong className="text-white">Cost: 30,000+ coins of unrealized trade value — always check the Trading Database before consuming event-exclusive seeds.</strong>
            </p>
          </div>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/best-legendary-seeds" />
    </ContentLayout>
  );
}
