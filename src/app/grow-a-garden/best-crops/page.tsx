import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { crops } from "@/data/garden/database/crops";
import { mutations } from "@/data/garden/database/mutations";
import { trading } from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Best Crops in Grow a Garden — Ranked by CPM",
  description:
    "Ranked comparison of every Grow a Garden crop by coin value, coins-per-minute (CPM), and mutation potential. Cross-referenced with live trading values to find the most profitable crops to plant.",
  keywords: [
    "best crops Grow a Garden",
    "Grow a Garden crop ranking",
    "highest CPM crops",
    "Golden Wheat vs Star Melon",
    "top crops Grow a Garden 2026",
    "most profitable crops",
  ],
  alternates: { canonical: "/grow-a-garden/best-crops" },
  openGraph: {
    title: "Best Crops in Grow a Garden — Ranked by CPM",
    description:
      "Ranked comparison of every crop by coin value, CPM, mutation potential, and trading value.",
    type: "website",
  },
};

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

function formatValue(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2).replace(/\.00$/, "")}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return value.toString();
}

// Sort crops by CPM (coins-per-minute) descending — the primary profitability metric
const rankedCrops = [...crops].sort((a, b) => b.coinsPerMinute - a.coinsPerMinute);

// Join with trading database
const cropsWithTrading = rankedCrops.map((crop) => {
  const tradingEntry = trading.find(
    (t) => t.category === "Crop" && t.name.toLowerCase() === crop.name.toLowerCase()
  );
  return { crop, trading: tradingEntry };
});

// S-Tier mutations for mutation potential section
const sTierMutations = mutations.filter((m) => m.tier === "S");
const aTierMutations = mutations.filter((m) => m.tier === "A");

const faqs = [
  {
    question: "What is the best crop in Grow a Garden?",
    answer:
      "Golden Wheat is the best crop in the game with the highest coins-per-minute (CPM) at 160/min. It's all-season, has an S-tier rating, and stacks multiplicatively with mutations and pets. A single harvest with a 5.0x pet and 6.0x Prismatic Rainbow mutation yields 4,800 coins — and Golden Wheat grows in just 3 minutes.",
  },
  {
    question: "What is CPM (coins-per-minute) and why does it matter?",
    answer:
      "CPM = coin value ÷ growth time in minutes. It's the single most important profitability metric because it normalizes crops with different growth times. A 480-coin crop that grows in 3 minutes (CPM 160) is more profitable than a 5,000-coin crop that grows in 60 minutes (CPM 83). Always rank crops by CPM, not raw coin value — a high-coin crop with a long growth time ties up your plot for far less income per minute than a fast grower.",
  },
  {
    question: "Which crop has the highest mutation potential?",
    answer:
      "S-tier crops (Golden Wheat, Star Melon, Phoenix Bloom) have the highest mutation roll rates. When paired with a Mythstar Seed (the only seed that can spawn S-Tier mutations), these crops can roll the 6.0x Prismatic Rainbow mutation — turning a 480-coin harvest into 2,880 coins before pet multipliers. Because mutations amplify the crop's base value, S-tier crops benefit the most from mutation stacking and should always be planted on your highest-multiplier plot.",
  },
  {
    question: "Should I plant seasonal crops or all-season crops?",
    answer:
      "During a crop's active season, seasonal crops outperform all-season crops of the same tier due to the +20% seasonal bonus. Off-season, switch back to all-season S-tier crops (Golden Wheat, Star Melon) so your plots keep producing. Never plant a seasonal crop outside its season — it won't grow at all, leaving the plot idle and generating zero income while you wait for the season to return.",
  },
  {
    question: "How do mutations affect crop profitability?",
    answer:
      "Mutations multiply crop value — a 6.0x Prismatic Rainbow mutation turns a 480-coin Golden Wheat harvest into 2,880 coins. Multi-tier mutation stacking (e.g., Gold + Rainbow) can push a single harvest past 10,000 coins. See our Mutations Database for the full multiplier list and our Value Calculator to estimate exact yields with your specific crop, mutation, and pet combination before committing shards to a roll.",
  },
  {
    question: "What is the fastest-growing crop in Grow a Garden?",
    answer:
      "Golden Wheat is both the fastest-growing and most profitable crop, maturing in just 3 minutes. This short growth cycle is what gives it the highest CPM in the game — you can harvest it 20 times per hour. Fast-growing crops also benefit more from active play than slow crops, because the mutation and pet multipliers apply on every harvest. For AFK sessions, pair Golden Wheat with a Frozen Bloom mutation to prevent spoilage during offline windows.",
  },
  {
    question: "Should I buy crops or seeds first?",
    answer:
      "Buy the seed first. Seeds are one-time purchases that grow into crops indefinitely — you only need one seed per plot. Once planted, the crop regrows on every cycle at no additional cost, and every harvest is amplified by your mutation and pet multipliers. Prioritize S-Tier seeds like Golden Wheat and Star Melon for your main plots, then branch into event-exclusive seeds during their seasonal windows. Never spend coins on the crop itself when the seed pays back within a few dozen harvests.",
  },
];

export default function BestCropsPage() {
  return (
    <ContentLayout
      title="Best Crops in Grow a Garden"
      description="Ranked comparison of every Grow a Garden crop by coin value, coins-per-minute (CPM), and mutation potential — cross-referenced with live trading values to find the most profitable crops to plant."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Best Crops", href: "/grow-a-garden/best-crops" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-crops"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Crops"
      keywords={[
        "best crops Grow a Garden",
        "Grow a Garden crop ranking",
        "highest CPM crops",
        "Golden Wheat vs Star Melon",
        "top crops Grow a Garden 2026",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - AI search summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          The best crop in Grow a Garden is Golden Wheat, which has the highest coins-per-minute (CPM 160), an S-tier rating, all-season availability, and a 3-minute growth time. A single harvest with a 5.0× pet and 6.0× Prismatic Rainbow mutation yields 4,800 coins. Always rank crops by CPM rather than raw coin value — a 480-coin crop that grows in 3 minutes outearns a 5,000-coin crop that takes an hour.
        </p>
      </section>

      {/* Hero Intro */}
      <section className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          Crop choice is the single biggest profit lever in Grow a Garden. This comparison ranks all {crops.length}{" "}
          crops by <strong className="text-white">coins-per-minute (CPM)</strong> — the true profitability metric that
          normalizes for growth time. We&apos;ve also cross-referenced each crop with the live trading market and
          highlighted mutation potential so you can pick the right crop for your build, your season, and your
          mutation-farming strategy.
        </p>
      </section>

      {/* Ranked Comparison Table */}
      <section aria-labelledby="ranking-heading">
        <h2
          id="ranking-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          🏆 Ranked by CPM (Coins Per Minute)
        </h2>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[820px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">#</th>
                <th className="py-3 px-3 font-semibold">Crop</th>
                <th className="py-3 px-3 font-semibold">Tier</th>
                <th className="py-3 px-3 font-semibold">Coins</th>
                <th className="py-3 px-3 font-semibold">Growth</th>
                <th className="py-3 px-3 font-semibold">CPM</th>
                <th className="py-3 px-3 font-semibold">Season</th>
                <th className="py-3 px-3 font-semibold">Trade Value</th>
              </tr>
            </thead>
            <tbody>
              {cropsWithTrading.map(({ crop, trading: t }, i) => (
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
                      style={{ color: tierColors[crop.tier], backgroundColor: tierColors[crop.tier] + "1a" }}
                    >
                      {crop.tier}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-sm text-[#BAC4D1]">{crop.coins.toLocaleString()}</td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{crop.growthTime}</td>
                  <td className="py-3 px-3 text-sm font-bold text-[#00E676]">{crop.coinsPerMinute}</td>
                  <td className="py-3 px-3 text-xs text-[#768294]">{crop.season}</td>
                  <td className="py-3 px-3 text-xs font-bold text-[#00E676]">
                    {t ? `${formatValue(t.value)} 🪙` : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Mutation Potential */}
      <section aria-labelledby="mutation-heading">
        <h2
          id="mutation-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          ✨ Mutation Potential — Best Multipliers to Stack
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          Crops don&apos;t exist in isolation — their true value comes from mutation stacking. Pair an S-tier crop
          with these top mutations for exponential profit gains:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">S-Tier Mutations (Best)</h3>
            <ul className="space-y-1.5">
              {sTierMutations.map((m) => (
                <li key={m.id} className="text-xs text-[#BAC4D1]">
                  <Link
                    href={`/grow-a-garden/mutations/${m.id}`}
                    className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                  >
                    {m.name}
                  </Link>{" "}
                  — <span className="text-[#00E676] font-bold">{m.multiplier}x</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF8C00] mb-2">A-Tier Mutations (Strong)</h3>
            <ul className="space-y-1.5">
              {aTierMutations.slice(0, 5).map((m) => (
                <li key={m.id} className="text-xs text-[#BAC4D1]">
                  <Link
                    href={`/grow-a-garden/mutations/${m.id}`}
                    className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                  >
                    {m.name}
                  </Link>{" "}
                  — <span className="text-[#00E676] font-bold">{m.multiplier}x</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-[#252936] bg-[#1E212B] p-3">
          <p className="text-xs text-[#768294]">
            💡 <strong className="text-[#BAC4D1]">Pro tip:</strong> Use the{" "}
            <Link href="/grow-a-garden/value-calculator" className="text-[#00E676] hover:underline">
              Value Calculator
            </Link>{" "}
            to estimate exact yields with any crop + mutation + pet combination.
          </p>
        </div>
      </section>

      <RelatedContent
        category="guide"
        game="garden"
        currentPath="/grow-a-garden/best-crops"
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
