import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { crops } from "@/data/garden/database/crops";
import { mutations } from "@/data/garden/database/mutations";
import guideData from "@/data/garden/best-crops";

export const metadata: Metadata = {
  title: "Best Crops in Grow a Garden — Ranked by Tier",
  description:
    "Ranked comparison of every Grow a Garden crop by recorded tier, coin field, growth time, season, and mutation multipliers.",
  keywords: [
    "best crops Grow a Garden",
    "Grow a Garden crop ranking",
    "highest tier crops",
    "Golden Wheat vs Star Melon",
    "top crops Grow a Garden 2026",
  ],
  alternates: { canonical: "/grow-a-garden/best-crops" },
  openGraph: {
    title: "Best Crops in Grow a Garden — Ranked by Tier",
    description:
      "Ranked comparison of every crop by recorded tier, coin field, growth time, season, and mutation multipliers.",
    type: "website",
  },
};

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

// Sort by recorded tier, then by the recorded coin field for a compact reference order.
const rankedCrops = [...crops].sort((a, b) => {
  if (b.tierRating !== a.tierRating) return b.tierRating - a.tierRating;
  return b.coins - a.coins;
});

// S-Tier mutations for mutation potential section
const sTierMutations = mutations.filter((m) => m.tier === "S");
const aTierMutations = mutations.filter((m) => m.tier === "A");

const faqs = [
  {
    question: "What is the best crop in Grow a Garden?",
    answer:
      "Golden Wheat is the top entry in this project’s crop comparison, with a recorded S-tier rating, coin field, growth time, and all-season label. Treat those fields as an editorial reference and confirm current crop mechanics in the game or official announcements.",
  },
  {
    question: "How is this crop list ordered?",
    answer:
      "The list is ordered by the project’s recorded tier rating, then by the recorded coin field. Growth time, season, and mutation multipliers remain visible for comparison. This ordering is an editorial reference, not an earnings ranking or forecast.",
  },
  {
    question: "Which crop has the highest mutation potential?",
    answer:
      "This project records crop tier and mutation fields separately. The table can be used to compare those labels, but it does not establish mutation roll rates, compatibility, or a guaranteed relationship between crop tier and mutation results. Confirm current mechanics in the game.",
  },
  {
    question: "Should I plant seasonal crops or all-season crops?",
    answer:
      "Use the Season column as a recorded availability label. Seasonal behavior, bonuses, and restrictions can change, so confirm current event timing and crop behavior in the game or official announcements before planting.",
  },
  {
    question: "How do mutations affect crop profitability?",
    answer:
      "Mutation multipliers are recorded comparison fields in this project. You can review the multiplier values in the Mutations Database, but current stacking rules and harvest results should be confirmed in the game or official announcements.",
  },
  {
    question: "What is the fastest-growing crop in Grow a Garden?",
    answer:
      "Golden Wheat has the shortest recorded growth time among the entries highlighted by this page. Growth behavior and offline effects can change, so use the displayed duration as a project record and confirm the current game rules.",
  },
  {
    question: "Should I buy crops or seeds first?",
    answer:
      "The crop and seed pages describe different recorded entries. Compare the crop’s tier, coin field, growth time, and season with the corresponding seed record, then confirm the current planting and regrowth rules in the game before spending currency.",
  },
];

export default function BestCropsPage() {
  return (
    <ContentLayout
      title="Best Crops in Grow a Garden"
      description="Ranked comparison of every Grow a Garden crop by recorded tier, coin field, growth time, season, and mutation multipliers."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Best Crops", href: "/grow-a-garden/best-crops" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-crops"
      updatedAt={guideData.updatedAt}
      articleSection="Crops"
      keywords={[
        "best crops Grow a Garden",
        "Grow a Garden crop ranking",
        "highest tier crops",
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
          Golden Wheat is the top entry in this project’s crop comparison, with a recorded S-tier rating, coin field, growth time, and all-season label. The ranking is an editorial reference rather than an earnings forecast; confirm current mechanics in the game or official announcements.
        </p>
      </section>

      {/* Hero Intro */}
      <section className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          Crop choice is part of the Grow a Garden progression system. This comparison ranks all {crops.length}{" "}
          crops by recorded tier rating and coin field, then shows growth time, season, and mutation multipliers.
          Use the table as an editorial reference and confirm current crop behavior before making a choice.
        </p>
      </section>

      {/* Ranked Comparison Table */}
      <section aria-labelledby="ranking-heading">
        <h2
          id="ranking-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          🏆 Ranked by Recorded Tier and Coin Field
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
                <th className="py-3 px-3 font-semibold">Season</th>
                <th className="py-3 px-3 font-semibold">Record</th>
              </tr>
            </thead>
            <tbody>
              {rankedCrops.map((crop, i) => (
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
                  <td className="py-3 px-3 text-xs text-[#768294]">{crop.season}</td>
                  <td className="py-3 px-3 text-xs text-[#768294]">Project crop record</td>
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
          ✨ Recorded Mutation Fields
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          This section lists recorded mutation tier and multiplier fields for page-level comparison. These records do
          not establish stacking rules, harvest results, or earnings outcomes.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Recorded S-Tier Entries</h3>
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
            <h3 className="text-sm font-semibold text-[#FF8C00] mb-2">Recorded A-Tier Entries</h3>
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
            The{" "}
            <Link href="/grow-a-garden/value-calculator" className="text-[#00E676] hover:underline">
              Value Calculator
            </Link>{" "}
              can display mathematical comparisons using recorded inputs. The results are project references, not
              game-result or earnings predictions.
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
