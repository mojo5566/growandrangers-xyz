import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { pets } from "@/data/garden/database/pets";
import { trading } from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Best Mythical Pets in Grow a Garden",
  description:
    "Best mythical pets in Grow a Garden ranked by multiplier, trading value, and cultivation cost. Find which S-tier pet is worth chasing for your farm.",
  keywords: [
    "best mythical pets Grow a Garden",
    "strongest mythical pets Grow a Garden",
    "Grow a Garden legendary pets guide",
    "Golden Phoenix Chick value",
    "Golden Dragon vs Crystal Unicorn Foal",
    "mythical pet cultivation value",
  ],
  alternates: { canonical: "/grow-a-garden/best-mythical-pets" },
  openGraph: {
    title: "Best Mythical Pets in Grow a Garden",
    description:
      "Guide to the best and strongest mythical pets — multipliers, trading values, and cultivation value.",
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

const trendBadge: Record<string, string> = {
  Rising: "bg-[#00E676]/20 text-[#00E676]",
  Stable: "bg-[#768294]/20 text-[#BAC4D1]",
  Falling: "bg-[#FF3D00]/20 text-[#FF3D00]",
};

function formatValue(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2).replace(/\.00$/, "")}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return value.toString();
}

// Get S-Tier pets (mythical-tier equivalent in this game) sorted by multiplier desc
const topPets = pets
  .filter((p) => p.tier === "S")
  .sort((a, b) => b.multiplier - a.multiplier);

// Join with trading database
const petsWithTrading = topPets.map((pet) => {
  const tradingEntry = trading.find(
    (t) => t.category === "Pet" && t.name.toLowerCase() === pet.name.toLowerCase()
  );
  return { pet, trading: tradingEntry };
});

const faqs = [
  {
    question: "What is the best mythical pet in Grow a Garden?",
    answer:
      "The Golden Phoenix Chick is the best pet in the game with a 5.0x multiplier and auto-collect passive. It's the only true Mythical-rarity pet in the trading market, valued at approximately 5 million Sheckles. The auto-collect ability eliminates harvesting downtime, effectively multiplying coins-per-hour well beyond the raw multiplier.",
  },
  {
    question: "How do legendary pets compare to mythical pets?",
    answer:
      "Mythical pets (only Golden Phoenix Chick currently) sit at 5.0x multiplier with a 5M Sheckle trade value. Legendary pets range from 4.2x to 4.8x multiplier with trade values from 1.5M to 2.8M Sheckles. The gap is significant but Legendary pets are far more accessible — most end-game players will run a Legendary team before earning a Mythical.",
  },
  {
    question: "Which legendary pet has the highest trading value?",
    answer:
      "The Golden Dragon has the highest trading value among Legendary pets at approximately 2.8M Sheckles, with High demand and a Rising trend. It was added in the Zen Update (June 2026) and demand currently outstrips supply. The Crystal Unicorn Foal is second at 2.4M with Stable demand.",
  },
  {
    question: "Are mythical pets worth the investment?",
    answer:
      "Yes — if you can afford one. Mythical pets hold their value extremely well due to rarity, and the multiplier difference compounds over thousands of harvests. However, only pursue a Mythical if you have a fully-built Legendary team first — the marginal gain from Legendary to Mythical is smaller than the jump from Epic to Legendary.",
  },
  {
    question: "Where can I trade for mythical and legendary pets?",
    answer:
      "Use our Trading Values database to check current market prices before trading. Always use a trusted middleman for high-value trades (anything above 1M Sheckles), screenshot the agreement, and never trade with unverified accounts. The official Discord trading channel is the safest venue.",
  },
];

export default function BestMythicalPetsPage() {
  return (
    <ContentLayout
      title="Best Mythical Pets in Grow a Garden"
      description="Guide to the best and strongest mythical pets in Grow a Garden — multipliers, trading values, and cultivation value to help you decide which mythical pet to chase."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Best Mythical Pets", href: "/grow-a-garden/best-mythical-pets" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-mythical-pets"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Hero Intro */}
      <section className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          The top of Grow a Garden&apos;s pet meta is dominated by <strong className="text-white">Mythical</strong> and{" "}
          <strong className="text-white">Legendary</strong> pets — the rarest and most powerful companions in the game.
          This comparison ranks all {topPets.length} top-tier pets by multiplier, then cross-references each one with the
          live trading market to show you current value, demand, and trend. Use this data to decide which egg to hatch
          next, which pet to chase in trades, and which one will give you the biggest coins-per-hour boost.
        </p>
      </section>

      {/* Ranked Comparison Table */}
      <section aria-labelledby="ranking-heading">
        <h2
          id="ranking-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          🏆 Ranked Comparison — Multiplier & Stats
        </h2>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">#</th>
                <th className="py-3 px-3 font-semibold">Pet</th>
                <th className="py-3 px-3 font-semibold">Tier</th>
                <th className="py-3 px-3 font-semibold">Multiplier</th>
                <th className="py-3 px-3 font-semibold">Source</th>
                <th className="py-3 px-3 font-semibold">Key Ability</th>
              </tr>
            </thead>
            <tbody>
              {petsWithTrading.map(({ pet }, i) => (
                <tr key={pet.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3 text-[#768294]">{i + 1}</td>
                  <td className="py-3 px-3">
                    <Link
                      href={`/grow-a-garden/pets/${pet.id}`}
                      className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {pet.name}
                    </Link>
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className="code-text inline-block rounded px-2 py-0.5 text-xs font-semibold"
                      style={{ color: tierColors[pet.tier], backgroundColor: tierColors[pet.tier] + "1a" }}
                    >
                      {pet.tier}-Tier
                    </span>
                  </td>
                  <td className="py-3 px-3 text-base font-bold text-[#00E676]">{pet.multiplier.toFixed(1)}x</td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{pet.source}</td>
                  <td className="py-3 px-3 text-xs text-[#768294]">{pet.abilities[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Value & Demand Comparison */}
      <section aria-labelledby="value-heading">
        <h2
          id="value-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          💰 Trading Value & Demand Comparison
        </h2>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">Pet</th>
                <th className="py-3 px-3 font-semibold">Rarity</th>
                <th className="py-3 px-3 font-semibold">Value</th>
                <th className="py-3 px-3 font-semibold">Demand</th>
                <th className="py-3 px-3 font-semibold">Trend</th>
                <th className="py-3 px-3 font-semibold">Trade Link</th>
              </tr>
            </thead>
            <tbody>
              {petsWithTrading.map(({ pet, trading: t }) => (
                <tr key={pet.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3 font-semibold text-[#BAC4D1]">{pet.name}</td>
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
                  <td className="py-3 px-3">
                    {t ? (
                      <span className={`rounded px-2 py-0.5 text-xs font-semibold ${trendBadge[t.trend]}`}>
                        {t.trend}
                      </span>
                    ) : (
                      <span className="text-xs text-[#768294]">—</span>
                    )}
                  </td>
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

      {/* Quick Verdicts */}
      <section aria-labelledby="verdicts-heading">
        <h2
          id="verdicts-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          ⚖️ Quick Verdicts
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {petsWithTrading.map(({ pet, trading: t }) => (
            <div key={pet.id} className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
              <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                <Link
                  href={`/grow-a-garden/pets/${pet.id}`}
                  className="text-base font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                >
                  {pet.name}
                </Link>
                <span className="text-base font-bold text-[#00E676]">{pet.multiplier.toFixed(1)}x</span>
              </div>
              <p className="text-xs text-[#768294] leading-relaxed">{pet.description}</p>
              {t && (
                <p className="mt-3 text-xs text-[#BAC4D1]">
                  <strong className="text-[#00E676]">Trade value:</strong> {formatValue(t.value)} •{" "}
                  <strong className="text-[#00E676]">Demand:</strong> {t.demand} •{" "}
                  <strong className="text-[#00E676]">Trend:</strong> {t.trend}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <RelatedContent
        category="guide"
        game="garden"
        currentPath="/grow-a-garden/best-mythical-pets"
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
