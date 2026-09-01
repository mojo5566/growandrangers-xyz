import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { pets } from "@/data/garden/database/pets";
import { trading } from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Mythical Pets Tier List & Ranking",
  description:
    "Editorial comparison of project records marked S-Tier, ordered by recorded multiplier. Ability, rarity, value, demand, and trend are internal or unverified fields, not independently verified official facts or live-market data.",
  keywords: [
    "mythical pets tier list Grow a Garden",
    "Grow a Garden mythical pet ranking",
    "S-tier pet tier list Grow a Garden",
    "legendary pet comparison Grow a Garden",
    "mythical pet multiplier ranking",
    "Grow a Garden pet tier list",
  ],
  alternates: { canonical: "/grow-a-garden/best-mythical-pets-ranking" },
  openGraph: {
    title: "Mythical Pets Tier List & Ranking",
    description:
      "Editorial comparison of project records marked S-Tier, ordered by recorded multiplier. Ability, rarity, value, demand, and trend are internal or unverified fields, not independently verified official facts or live-market data.",
    type: "website",
  },
};

// This page compares records marked S-Tier in the project database; S-Tier is
// not treated as a verified rarity classification.
const mythicalPets = pets
  .filter((p) => p.tier === "S")
  .sort((a, b) => b.multiplier - a.multiplier);

const tradingByName = new Map<string, (typeof trading)[number]>();
for (const t of trading) {
  if (t.category === "Pet") tradingByName.set(t.name.toLowerCase(), t);
}

const rankedRows = mythicalPets.map((p) => {
  const trade = tradingByName.get(p.name.toLowerCase());
  return {
    id: p.id,
    name: p.name,
    multiplier: p.multiplier,
    ability: p.abilities[0] ?? "—",
    source: p.source,
    tradeValue: trade?.value ?? null,
    demand: trade?.demand ?? null,
    trend: trade?.trend ?? null,
    tierRating: p.tierRating,
  };
});

const faqs = [
  {
    question: "What counts as a mythical pet in Grow a Garden?",
    answer:
      "This page uses the project's internal S-Tier tag to select records for an editorial comparison. That tag is not treated as proof that every listed pet has the same official rarity: the related internal trading records use their own rarity labels. Multiplier, ability, source, and acquisition details have not been independently verified on this page.",
  },
  {
    question: "Which mythical pet has the highest multiplier?",
    answer:
      "In the current project data, Golden Phoenix Chick appears first because its recorded multiplier is 5.0×, followed by Golden Dragon at 4.8× and Crystal Unicorn Foal at 4.5×. This is an editorial ordering of internal records, not an official strength ranking or a guarantee of in-game results; the listed abilities also need to be checked against current game information.",
  },
  {
    question: "How rare are mythical pets in Grow a Garden?",
    answer:
      "This page does not provide hatch probabilities or expected-count estimates because it currently has no official drop-rate table that can be cited here. Actual drop results should be checked against current in-game information or an accessible official announcement.",
  },
  {
    question: "Should I trade for a mythical pet or hatch one?",
    answer:
      "This page does not recommend trading or hatching as the more efficient route. Its comparison uses project records only; the linked Trading Database contains internal editorial value, demand, and trend fields, not official prices or independently verified transaction data. Check current game information before making a decision.",
  },
  {
    question: "Do mythical pets retain their value after updates?",
    answer:
      "This page does not make a retention, appreciation, or post-update market prediction. The internal value and trend fields are snapshots without a cited market sample or a defined forecasting method, so they should not be treated as evidence of future value.",
  },
  {
    question: "Does this page confirm pet slot limits or multiplier stacking?",
    answer:
      "No. This page does not independently verify pet slot limits, multiplier stacking behavior, or an optimal setup. Treat the comparison as an editorial view of project records and check the current in-game information or an accessible official announcement before relying on any mechanic or setup claim.",
  },
];

export default function BestMythicalPetsRankingPage() {
  return (
    <ContentLayout
      title="Mythical Pets Tier List & Ranking"
      description="Editorial comparison of project pet records marked S-Tier, ordered by recorded multiplier. This is not an official or complete Mythical-pet list. Ability, rarity, value, demand, and trend are internal records or unverified fields; trading fields are not official prices, live market quotes, or independently verified transaction data. Check current in-game information or accessible official announcements for facts that depend on game rules, availability, or version."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Mythical Pets Tier List", href: "/grow-a-garden/best-mythical-pets-ranking" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-mythical-pets-ranking"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Pets"
      keywords={[
        "mythical pets tier list Grow a Garden",
        "Grow a Garden mythical pet ranking",
        "S-tier pet tier list Grow a Garden",
        "legendary pet comparison Grow a Garden",
        "mythical pet multiplier ranking",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - scope and method summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          This page is an editorial comparison of the three records currently marked <strong className="text-white">S-Tier</strong> in the project database. The displayed order is produced by filtering that internal tag and sorting the recorded multiplier: <strong className="text-white">Golden Phoenix Chick</strong> (5.0×), <strong className="text-white">Golden Dragon</strong> (4.8×), then <strong className="text-white">Crystal Unicorn Foal</strong> (4.5×). These records, including their abilities and use-case notes, have not been independently verified here and do not represent an official strength list or guaranteed earnings. This page does not estimate hatch odds, costs, or expected results.
        </p>
      </section>

      {/* Opening — source and scope boundary */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          This page does not provide hatch probabilities or expected-count estimates because there is currently no official drop-rate table that can be cited here. Actual drop results should be checked against current in-game information or an accessible official announcement. The comparison below uses the project&apos;s internal pet records and is intended to help readers inspect the recorded differences between these entries, not to establish an official best pet or a guaranteed result. It links to the canonical{" "}
          <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">Pets Database</Link>{" "}
          and{" "}
          <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">Trading Database</Link>.
        </p>
      </section>

      {/* Head-to-head comparison matrix — replaces single ranked table */}
      <section aria-labelledby="comparison-heading">
        <h2
          id="comparison-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⚔️ Head-to-Head Comparison Matrix
        </h2>
        <p className="mb-4 text-xs leading-relaxed text-[#768294]">
          The value and demand columns reproduce fields from the project&apos;s internal trading records. They are not official prices, live market quotes, or independently verified transaction data, and should not be used as the sole basis for a trade or investment decision.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]">
                <th className="py-2 pr-3">Pet</th>
                <th className="py-2 pr-3">Recorded Multiplier</th>
                <th className="py-2 pr-3">Ability (Internal Record)</th>
                <th className="py-2 pr-3">Possible Fit (Editorial)</th>
                <th className="py-2 pr-3">Limitation to Verify</th>
                <th className="py-2 pr-3">Internal Value Record</th>
                <th className="py-2 pr-3">Internal Demand Label</th>
              </tr>
            </thead>
            <tbody>
              {rankedRows.map((row, i) => (
                <tr key={row.id} className="border-b border-[#1E212B]">
                  <td className="py-3 pr-3">
                    <span className="text-xs text-[#768294]">#{i + 1}</span>
                    <br />
                    <Link
                      href={`/grow-a-garden/pets/${row.id}`}
                      className="text-[#00E676] hover:underline font-semibold"
                    >
                      {row.name}
                    </Link>
                  </td>
                  <td className="py-3 pr-3 font-semibold text-white">{row.multiplier}×</td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{row.ability}</td>
                  <td className="py-3 pr-3 text-xs text-[#00E676]">
                    {row.id === "golden-phoenix-chick" && "Collection-oriented comparison; verify auto-collect behavior"}
                    {row.id === "crystal-unicorn-foal" && "Active-harvest comparison; verify proc behavior"}
                    {row.id === "golden-dragon" && "Gold-mutation comparison; verify the recorded synergy"}
                  </td>
                  <td className="py-3 pr-3 text-xs text-[#FF3D00]">
                    {row.id === "golden-phoenix-chick" && "No independently verified fast-crop comparison"}
                    {row.id === "crystal-unicorn-foal" && "Recorded proc outcome requires verification"}
                    {row.id === "golden-dragon" && "Recorded gold-mutation interaction requires verification"}
                  </td>
                  <td className="py-3 pr-3 text-xs text-[#00E676]">
                    {row.tradeValue ? row.tradeValue.toLocaleString() : "—"}
                  </td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{row.demand ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Hatching information boundary */}
      <section aria-labelledby="hatching-log-heading">
        <h2
          id="hatching-log-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📊 Hatching Information Boundary
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            This page does not provide hatch probabilities or expected-count estimates because it currently has no official drop-rate table that can be cited here. Actual drop results should be checked against current in-game information or an accessible official announcement. No acquisition cost, expected yield, or guarantee is inferred from the internal multiplier records.
          </p>
        </div>
      </section>

      {/* Trading and acquisition decision boundary */}
      <section aria-labelledby="example-heading">
        <h2
          id="example-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📋 Why This Page Does Not Recommend a Trade Route
        </h2>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <div className="text-sm leading-relaxed text-[#BAC4D1] space-y-2">
            <p>A worked trade or hatching example would require independently sourced drop rates, transaction samples, and definitions for value and demand. Those inputs are not established on this page, so it does not recommend a specific trade bundle, purchase budget, holding period, investment, or route as more efficient.</p>
            <p>The linked <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">Trading Database</Link> is useful for locating the project&apos;s internal records, but its value, demand, and trend fields are not official prices, live market quotes, or independently verified transaction data. They should not be the sole basis for a trade decision.</p>
          </div>
        </div>
      </section>

      {/* Verification checklist without unsupported economic advice */}
      <section aria-labelledby="when-not-heading">
        <h2
          id="when-not-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🛑 What to Verify Before Choosing a Pet
        </h2>
        <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-5">
          <ul className="space-y-3 text-sm text-[#BAC4D1]">
            <li><strong className="text-white">Ability behavior:</strong> compare the internal description with current in-game information before relying on an auto-collect, harvest, or mutation interaction.</li>
            <li><strong className="text-white">Current classification:</strong> the page selects internal S-Tier records; do not assume that this editorial tier is the same as an official rarity label.</li>
            <li><strong className="text-white">Current acquisition information:</strong> use the game and accessible official announcements for available eggs, events, and drop information.</li>
            <li><strong className="text-white">Trading context:</strong> treat the value, demand, and trend fields as internal editorial records, not as a live quote, verified sale, or forecast.</li>
            <li><strong className="text-white">Version scope:</strong> re-check the underlying facts after updates because this page does not independently establish a version-specific evidence record.</li>
          </ul>
        </div>
      </section>

      {/* Acquisition information boundary */}
      <section aria-labelledby="routes-heading">
        <h2
          id="routes-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🎯 Acquisition Information Boundary
        </h2>
        <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            This page does not infer an acquisition route, cost, probability, expected yield, or trade outcome from the internal pet records. For current egg and event availability, consult in-game information or an accessible official announcement. For trading context, use the{" "}
            <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">Trading Database</Link> as an internal reference only; its records are not official or independently verified market data.
          </p>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/best-mythical-pets-ranking" />
    </ContentLayout>
  );
}
