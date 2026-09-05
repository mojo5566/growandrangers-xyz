import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { seeds } from "@/data/garden/database/seeds";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Best Seeds in Grow a Garden — Ranked",
  description:
    "Ranked comparison of every seed in Grow a Garden by tier, rarity, recorded price, and growth time.",
  keywords: [
    "best seeds Grow a Garden",
    "Grow a Garden seed ranking",
    "Mythstar Seed",
    "Phoenix Bloom Seed vs Star Melon",
    "top seeds Grow a Garden 2026",
  ],
  alternates: { canonical: "/grow-a-garden/best-seeds" },
  openGraph: {
    title: "Best Seeds in Grow a Garden — Ranked",
    description:
      "Ranked comparison of every seed by tier, rarity, recorded price, and growth time.",
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

const faqs = [
  {
    question: "What is the best seed in Grow a Garden?",
    answer:
      "The Mythstar Seed is the top entry in this project’s comparison because it has the highest recorded tier rating and Mythical rarity. Use the ranking as an editorial reference, then confirm current availability, requirements, and mechanics in the game or official announcements.",
  },
  {
    question: "Which seed has the highest recorded tier rating?",
    answer:
      "Mythstar Seed is the highest-ranked seed in this project reference. The ranking is based on recorded seed fields such as tier rating and rarity; it is not a statement about market price, demand, or trade outcomes.",
  },
  {
    question: "What should I check before using a seed?",
    answer:
      "Check the seed’s recorded currency, price, tier, rarity, growth time, and season in the table. Availability and gameplay behavior can change, so confirm those details in the current game or an official announcement before spending currency.",
  },
  {
    question: "How should I read seasonal seed entries?",
    answer:
      "The Season column is a recorded availability label for this project. It can help you compare entries, but it does not predict future availability or establish a market premium. Confirm event timing and availability in the current game or official announcements.",
  },
  {
    question: "How does seed tier affect crop output?",
    answer:
      "This page records seed tier and related fields for comparison. It does not establish that tier alone determines crop output or mutation behavior. Check the current game and official announcements for the mechanics that connect a seed to its crop.",
  },
  {
    question: "Which seed is easiest to compare for a beginner?",
    answer:
      "Star Melon Seed is a straightforward comparison entry because its recorded row includes tier, rarity, price, growth time, and season. Beginners can use those fields to understand the table, while confirming the current in-game requirements before choosing what to plant.",
  },
  {
    question: "Do seed prices change with game updates?",
    answer:
      "The prices shown here are project-recorded seed fields, not a live feed. Game updates may change prices, currencies, growth behavior, or availability. Recheck the current game or official announcements when a patch or event changes the seed system.",
  },
];

export default function BestSeedsPage() {
  return (
    <ContentLayout
      title="Best Seeds in Grow a Garden"
      description="Ranked comparison of every seed in Grow a Garden — compare recorded tier, rarity, price, growth time, and season fields."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Best Seeds", href: "/grow-a-garden/best-seeds" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-seeds"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Seeds"
      keywords={["best seeds Grow a Garden", "Grow a Garden seed ranking", "Mythstar Seed", "Phoenix Bloom Seed vs Star Melon", "top seeds Grow a Garden 2026"]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - AI search summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          Mythstar Seed is the top entry in this project’s seed comparison, with a recorded Mythical rarity and S-tier rating. The table is an editorial reference for comparing recorded tier, rarity, price, growth time, and season fields; confirm current mechanics and availability in the game or official announcements.
        </p>
      </section>

      {/* Hero Intro */}
      <section className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          Seeds are a core part of the Grow a Garden progression system. This comparison ranks all{" "}
          {seeds.length} seeds by recorded tier rating and rarity, then presents the recorded price, currency,
          growth time, and season fields. Use it as a compact project reference and confirm current game behavior
          before making a choice.
        </p>
      </section>

      {/* Ranked Comparison Table */}
      <section aria-labelledby="ranking-heading">
        <h2
          id="ranking-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          🏆 Ranked Comparison — Tier, Rarity & Growth
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
                <th className="py-3 px-3 font-semibold">Record</th>
              </tr>
            </thead>
            <tbody>
              {rankedSeeds.map((seed, i) => (
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
                    {seed.price.toLocaleString()} {seed.currency === "Robux" ? "R$" : "🪙"}
                  </td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{seed.growthTime}</td>
                  <td className="py-3 px-3 text-xs text-[#768294]">{seed.season}</td>
                  <td className="py-3 px-3 text-xs text-[#768294]">Project seed record</td>
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
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">🎯 Highest Recorded Tier</h3>
            <p className="text-xs text-[#BAC4D1] leading-relaxed">
              <Link href="/grow-a-garden/seeds/mythstar-seed" className="font-semibold text-[#00E676] hover:underline">
                Mythstar Seed
              </Link>{" "}
              — recorded as Mythical rarity with an S-tier rating. Confirm its current mechanics and availability in the game.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-[#FF8C00] mb-2">☀️ Seasonal Reference</h3>
            <p className="text-xs text-[#BAC4D1] leading-relaxed">
              <Link href="/grow-a-garden/seeds/phoenix-bloom-seed" className="font-semibold text-[#00E676] hover:underline">
                Phoenix Bloom Seed
              </Link>{" "}
              — recorded with a Summer season label. Confirm event timing and availability before relying on it.
            </p>
          </div>
          <div className="rounded-xl border border-[#FFD700]/30 bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-[#FFD700] mb-2">🌱 All-Season Reference</h3>
            <p className="text-xs text-[#BAC4D1] leading-relaxed">
              <Link href="/grow-a-garden/seeds/star-melon-seed" className="font-semibold text-[#00E676] hover:underline">
                Star Melon Seed
              </Link>{" "}
              — recorded as Legendary and all-season in this project reference. Check the current in-game row before planting.
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
