import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { seeds } from "@/data/garden/database/seeds";
import { trading } from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Best Seeds in Grow a Garden — Ranked",
  description:
    "Ranked comparison of every seed in Grow a Garden by tier, rarity, price, and growth time. Cross-referenced with live trading values to find the most profitable seeds to buy and stockpile.",
  keywords: [
    "best seeds Grow a Garden",
    "Grow a Garden seed ranking",
    "Mythstar Seed value",
    "Phoenix Bloom Seed vs Star Melon",
    "top seeds Grow a Garden 2026",
    "most profitable seeds",
  ],
  alternates: { canonical: "/grow-a-garden/best-seeds" },
  openGraph: {
    title: "Best Seeds in Grow a Garden — Ranked",
    description:
      "Ranked comparison of every seed by tier, rarity, price, growth time, and trading value.",
    type: "website",
  },
};

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

const rarityBadge: Record<string, string> = {
  Mythical: "bg-[#FF3D00]/20 text-[#FF3D00]",
  Legendary: "bg-[#FF8C00]/20 text-[#FF8C00]",
  Rare: "bg-[#3A86FF]/20 text-[#3A86FF]",
  Uncommon: "bg-[#00E676]/20 text-[#00E676]",
  Common: "bg-[#768294]/20 text-[#BAC4D1]",
};

function formatValue(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2).replace(/\.00$/, "")}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return value.toString();
}

// Sort seeds by tier rating (S first), then by rarity weight
const rarityWeight: Record<string, number> = {
  Mythical: 5,
  Legendary: 4,
  Rare: 3,
  Uncommon: 2,
  Common: 1,
};

const rankedSeeds = [...seeds].sort((a, b) => {
  if (b.tierRating !== a.tierRating) return b.tierRating - a.tierRating;
  return rarityWeight[b.rarity] - rarityWeight[a.rarity];
});

// Join with trading database
const seedsWithTrading = rankedSeeds.map((seed) => {
  const tradingEntry = trading.find(
    (t) => t.category === "Seed" && t.name.toLowerCase() === seed.name.toLowerCase()
  );
  return { seed, trading: tradingEntry };
});

const faqs = [
  {
    question: "What is the best seed in Grow a Garden?",
    answer:
      "The Mythstar Seed is the best seed in the game — it's the only Mythical-rarity seed and the only seed that can spawn S-Tier mutations on planting. At 250,000 Sheckles it's expensive, but its trading value sits at approximately 750,000 Sheckles due to High demand and a Rising trend. Serious mutation farmers stockpile Mythstars.",
  },
  {
    question: "Which seed gives the highest trading value?",
    answer:
      "Mythstar Seed has the highest trading value at approximately 750K Sheckles, followed by Phoenix Bloom Seed (320K, Summer-only) and Star Melon Seed (280K, all-season). All three have High demand. If you're trading seeds rather than planting them, prioritize these three.",
  },
  {
    question: "Are Robux seeds worth buying for trading?",
    answer:
      "Robux seeds (Premium Event Seed at 199 Robux, Frostbloom at 75 Robux, Lucky Clover at 99 Robux) typically trade at a slight discount to their Robux equivalent. They're worth buying for personal use but not for profit-flipping — the Sheckles-equivalent value is usually below what you paid in Robux. The exception is Premium Event Seed during mutation-farming meta shifts.",
  },
  {
    question: "Should I stockpile seasonal seeds off-season?",
    answer:
      "Yes — seasonal seeds like Phoenix Bloom (Summer), Frost Melon (Winter), and Neon Pumpkin (Autumn) trade at a significant premium off-season due to scarcity. Buy during the event at base price, hold for 2-3 months, and sell when demand spikes ahead of the next event cycle. Phoenix Bloom Seed is currently Rising in value for this exact reason.",
  },
  {
    question: "How does seed tier affect crop output?",
    answer:
      "Seed tier directly determines the tier of crop it produces — an S-tier seed grows an S-tier crop. Higher-tier crops have higher coin values, higher coins-per-minute (CPM), and better mutation roll rates. Always plant the highest-tier seed you can afford; the ROI on tier upgrades is the single biggest profit lever in the game.",
  },
];

export default function BestSeedsPage() {
  return (
    <ContentLayout
      title="Best Seeds in Grow a Garden"
      description="Ranked comparison of every seed in Grow a Garden — compare tier, rarity, price, growth time, and live trading value to find the most profitable seeds to buy, plant, and stockpile."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Best Seeds", href: "/grow-a-garden/best-seeds" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-seeds"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Hero Intro */}
      <section className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          Seeds are the foundation of every profitable Grow a Garden farm. This comparison ranks all{" "}
          {seeds.length} seeds by tier rating and rarity, then cross-references each one with the live trading market
          to surface the best seeds to buy, plant, and stockpile. Whether you&apos;re chasing the Mythical Mythstar
          for S-Tier mutation farming or stockpiling seasonal seeds for off-season profit, the data below is your
          shortcut to the right decision.
        </p>
      </section>

      {/* Ranked Comparison Table */}
      <section aria-labelledby="ranking-heading">
        <h2
          id="ranking-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          🏆 Ranked Comparison — Value, Rarity & Growth
        </h2>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[820px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">#</th>
                <th className="py-3 px-3 font-semibold">Seed</th>
                <th className="py-3 px-3 font-semibold">Tier</th>
                <th className="py-3 px-3 font-semibold">Rarity</th>
                <th className="py-3 px-3 font-semibold">Price</th>
                <th className="py-3 px-3 font-semibold">Growth</th>
                <th className="py-3 px-3 font-semibold">Season</th>
                <th className="py-3 px-3 font-semibold">Trade Value</th>
              </tr>
            </thead>
            <tbody>
              {seedsWithTrading.map(({ seed, trading: t }, i) => (
                <tr key={seed.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3 text-[#768294]">{i + 1}</td>
                  <td className="py-3 px-3">
                    <Link
                      href={`/grow-a-garden/seeds/${seed.id}`}
                      className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {seed.name}
                    </Link>
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className="code-text inline-block rounded px-2 py-0.5 text-xs font-semibold"
                      style={{ color: tierColors[seed.tier], backgroundColor: tierColors[seed.tier] + "1a" }}
                    >
                      {seed.tier}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span className={`rounded px-2 py-0.5 text-xs font-semibold ${rarityBadge[seed.rarity]}`}>
                      {seed.rarity}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">
                    {formatValue(seed.price)} {seed.currency === "Robux" ? "R$" : "🪙"}
                  </td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{seed.growthTime}</td>
                  <td className="py-3 px-3 text-xs text-[#768294]">{seed.season}</td>
                  <td className="py-3 px-3 text-xs font-bold text-[#00E676]">
                    {t ? `${formatValue(t.value)} 🪙` : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Top Picks */}
      <section aria-labelledby="top-picks-heading">
        <h2
          id="top-picks-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          ⭐ Top Picks by Use Case
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">🎯 Best for Mutation Farming</h3>
            <p className="text-xs text-[#BAC4D1] leading-relaxed">
              <Link href="/grow-a-garden/seeds/mythstar-seed" className="font-semibold text-[#00E676] hover:underline">
                Mythstar Seed
              </Link>{" "}
              — only seed that can spawn S-Tier mutations. 250K Sheckles, 12 min growth, Mythical rarity. Trade value 750K and rising.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-[#FF8C00] mb-2">💰 Best for Profit Trading</h3>
            <p className="text-xs text-[#BAC4D1] leading-relaxed">
              <Link href="/grow-a-garden/seeds/phoenix-bloom-seed" className="font-semibold text-[#00E676] hover:underline">
                Phoenix Bloom Seed
              </Link>{" "}
              — Summer-only, 50K Sheckles, trades at 320K. Stock up during Summer Event for off-season profit.
            </p>
          </div>
          <div className="rounded-xl border border-[#FFD700]/30 bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-[#FFD700] mb-2">🌱 Best All-Season Starter</h3>
            <p className="text-xs text-[#BAC4D1] leading-relaxed">
              <Link href="/grow-a-garden/seeds/star-melon-seed" className="font-semibold text-[#00E676] hover:underline">
                Star Melon Seed
              </Link>{" "}
              — Legendary, all-season, 15K Sheckles. Solid trade value at 280K with High demand and Stable trend.
            </p>
          </div>
        </div>
      </section>

      <RelatedContent
        category="guide"
        game="garden"
        currentPath="/grow-a-garden/best-seeds"
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
