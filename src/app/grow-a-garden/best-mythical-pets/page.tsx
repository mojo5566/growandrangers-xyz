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
    "Editorial comparison of S-Tier pet records in Grow a Garden, including internal multiplier, ability, and trading fields with source limitations.",
  keywords: [
    "best mythical pets Grow a Garden",
    "S-Tier pet comparison Grow a Garden",
    "Grow a Garden legendary pets guide",
    "Golden Phoenix Chick value",
    "Golden Dragon vs Crystal Unicorn Foal",
    "Grow a Garden pet comparison",
  ],
  alternates: { canonical: "/grow-a-garden/best-mythical-pets" },
  openGraph: {
    title: "Best Mythical Pets in Grow a Garden",
    description:
      "Editorial comparison of S-Tier pet records — internal multipliers, abilities, and trading fields with source limitations.",
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

// Compare project records marked S-Tier, sorted by the internal multiplier field.
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

const internalDescriptionNotice =
  "The database description is not rendered here. Verify any ability or use-case claim against current in-game information or an accessible official source.";

const faqs = [
  {
    question: "What is the best mythical pet in Grow a Garden?",
    answer:
      "This page does not establish an official best pet. In the project data, Golden Phoenix Chick appears first in the editorial comparison because its recorded multiplier is 5.0x. The multiplier and auto-collect description are internal records that have not been independently verified here, and they do not guarantee in-game performance or earnings.",
  },
  {
    question: "How do legendary pets compare to mythical pets?",
    answer:
      "The page compares project records marked S-Tier and also displays the separate rarity labels found in the internal trading records. S-Tier is not treated as equivalent to an official Mythical rarity. The recorded multipliers, abilities, accessibility, and trading fields require verification against current game information and are not presented as official facts.",
  },
  {
    question: "Which legendary pet has the highest trading value?",
    answer:
      "The internal trading records currently show Golden Dragon with a higher recorded value than Crystal Unicorn Foal among the entries displayed on this page. These values, demand labels, and trend labels are project records—not official prices, live market quotes, or independently verified transaction data.",
  },
  {
    question: "Are mythical pets worth the investment?",
    answer:
      "This page does not provide investment advice or a value-retention forecast. Whether a pet is useful depends on verified game mechanics, the player's goals, and current trading conditions; the internal multiplier and trading fields should not be used as the sole basis for a purchase or trade.",
  },
  {
    question: "Where can I trade for mythical and legendary pets?",
    answer:
      "The linked Trading Database can be used to inspect the project's internal records. It does not provide official pricing, live market quotes, or independently verified transaction data, and this page does not designate a venue as safest. Confirm current trading rules and conditions through the game or an accessible official source.",
  },
  {
    question: "Which pet should beginners get first?",
    answer:
      "This page does not prescribe a beginner purchase or income threshold. Beginners can compare their current goals and available in-game information with the internal pet records, while treating the recorded tiers, multipliers, abilities, and acquisition details as unverified until checked against a reliable current source.",
  },
  {
    question: "Are mythical pets worth trading for?",
    answer:
      "This page does not recommend a specific trade, bundle, coin amount, hatching budget, or route as more efficient. A trade decision would require current, independently sourced market evidence and verified game information; the linked Trading Database is an internal reference only.",
  },
];

export default function BestMythicalPetsPage() {
  return (
    <ContentLayout
      title="Best Mythical Pets in Grow a Garden"
      description="Editorial comparison of project records marked S-Tier in Grow a Garden, with internal multiplier, ability, source, and trading fields. Rarity and market information require independent verification."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Best Mythical Pets", href: "/grow-a-garden/best-mythical-pets" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-mythical-pets"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Pets"
      keywords={[
        "best mythical pets Grow a Garden",
        "S-Tier pet comparison Grow a Garden",
        "Grow a Garden legendary pets guide",
        "Golden Phoenix Chick value",
        "Golden Dragon vs Crystal Unicorn Foal",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - AI search summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          This page compares three project records currently marked <strong className="text-white">S-Tier</strong> and orders them by their recorded internal multiplier: <strong className="text-white">Golden Phoenix Chick</strong> (5.0×), <strong className="text-white">Golden Dragon</strong> (4.8×), then <strong className="text-white">Crystal Unicorn Foal</strong> (4.5×). These tier, multiplier, ability, source, rarity, and trading fields are internal records or otherwise unverified here; S-Tier does not establish official Mythical rarity, official strength, live market value, or guaranteed earnings. This page does not provide hatch odds, acquisition costs, trade recommendations, or guaranteed outcomes.
        </p>
      </section>

      {/* Hero Intro */}
      <section className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          This editorial comparison covers the {topPets.length} records selected by the project&apos;s internal{" "}
          <strong className="text-white">S-Tier</strong> tag. It shows each record&apos;s multiplier, source, ability
          description, and separate trading fields so readers can inspect how the entries differ. These fields and
          descriptions have not been independently verified on this page; they do not establish official rarity,
          current market conditions, or a coins-per-hour result. Check current in-game information or an accessible
          official source before relying on them.
        </p>
      </section>

      {/* Ranked Comparison Table */}
      <section aria-labelledby="ranking-heading">
        <h2
          id="ranking-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          🏆 Editorial S-Tier Comparison — Internal Fields
        </h2>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">#</th>
                <th className="py-3 px-3 font-semibold">Pet</th>
                <th className="py-3 px-3 font-semibold">Tier</th>
                <th className="py-3 px-3 font-semibold">Recorded Multiplier</th>
                <th className="py-3 px-3 font-semibold">Source Record</th>
                <th className="py-3 px-3 font-semibold">Ability (Internal Record)</th>
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
          💰 Internal Trading Record Comparison
        </h2>
        <p className="mb-4 text-xs leading-relaxed text-[#768294]">
          The value, demand, and trend fields below come from the project&apos;s internal <code>trading.ts</code> records.
          They are not official pricing, live market quotes, or independently verified transaction data, and should not
          be used as the sole basis for a trade or investment decision. The rarity labels are also displayed as recorded
          internal fields and are not used to equate S-Tier with an official Mythical rarity.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">Pet</th>
                <th className="py-3 px-3 font-semibold">Recorded Rarity</th>
                <th className="py-3 px-3 font-semibold">Internal Value Record</th>
                <th className="py-3 px-3 font-semibold">Internal Demand Label</th>
                <th className="py-3 px-3 font-semibold">Internal Trend Label</th>
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
          ⚖️ Quick Editorial Comparisons
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
                <span className="text-xs font-semibold text-[#00E676]">Recorded multiplier: {pet.multiplier.toFixed(1)}x</span>
              </div>
              <p className="text-xs text-[#768294] leading-relaxed">
                <strong className="text-[#BAC4D1]">Description boundary:</strong> {internalDescriptionNotice}
              </p>
              {t && (
                <p className="mt-3 text-xs text-[#BAC4D1]">
                  <strong className="text-[#00E676]">Internal value record:</strong> {formatValue(t.value)} •{" "}
                  <strong className="text-[#00E676]">Internal demand label:</strong> {t.demand} •{" "}
                  <strong className="text-[#00E676]">Internal trend label:</strong> {t.trend}
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
