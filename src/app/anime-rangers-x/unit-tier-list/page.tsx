import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import TierTable from "@/components/TierTable";
import Link from "next/link";
import data from "@/data/rangers/unit-tier-list";
import { units } from "@/data/rangers/database/units";

const pageDescription = "Compare the Anime Rangers X roster with an editorial tier list based on recorded roles and team fit. Verify current stats, sources, and version changes in-game before investing.";

export const metadata: Metadata = {
  title: data.title,
  description: pageDescription,
  keywords: [
    "Anime Rangers X unit tier list",
    "Anime Rangers X unit rankings",
    "Anime Rangers X S tier units",
    "Re:Rangers X unit tier list",
  ],
  alternates: { canonical: "/anime-rangers-x/unit-tier-list" },
  openGraph: {
    title: data.title,
    description: pageDescription,
    type: "website",
  },
};

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

export default function UnitTierListPage() {
  return (
    <ContentLayout
      title={data.title}
      description={pageDescription}
      breadcrumbs={data.breadcrumbs}
      canonicalPath="/anime-rangers-x/unit-tier-list"
      accent="rangers"
      articleSection="Anime Rangers X Units"
      keywords={["Anime Rangers X unit tier list", "Anime Rangers X unit rankings", "Re:Rangers X unit tier list"]}
      about={[{ name: "Anime Rangers X" }, { name: "Re:Rangers X" }, { name: "Roblox game guides" }]}
    >
      <section className="rounded-xl border border-[#FF3D00]/30 bg-[#1A1210] p-5" aria-labelledby="quick-answer-heading">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          This is an editorial Anime Rangers X unit tier list based on the roster currently recorded by GrowAndRangers. Use the tiers as a starting point, then choose a unit that fits your team&apos;s damage, control, support, or progression needs. Exact stats, summon sources, and version changes must be confirmed in the current game client or a developer announcement.
        </p>
      </section>

      <section className="rounded-xl border border-[#FF3D00]/30 bg-[#1A1210] p-5" aria-labelledby="scope-heading">
        <h2 id="scope-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Scope and Version Note
        </h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          This page is an editorial ranking of the units currently recorded in the GrowAndRangers project data. It is a roster snapshot, not an official ranking or complete patch list. Unit stats, effects, summon sources, and evolution requirements can change; verify those details in-game before spending resources.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-white">How the tier is assigned</h3>
            <p className="mt-1 text-xs leading-relaxed text-[#768294]">
              Tier is an editorial judgment informed by the recorded role, rarity, ability profile, team fit, and progression value. These criteria are not official game ratings.
            </p>
          </div>
          <div className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-white">How to use this page</h3>
            <p className="mt-1 text-xs leading-relaxed text-[#768294]">
              Use this page to compare the recorded roster and then open a unit detail page for its recorded fields. For recommendations by beginner, boss, or farming goal, use the <Link href="/anime-rangers-x/best-units" className="ml-1 text-[#FF3D00] hover:underline">Best Units guide</Link>.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="ranking-method-heading">
        <h2 id="ranking-method-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          How This Tier List Is Ranked
        </h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          The editorial ranking weighs qualitative factors rather than unverified numbers: damage role, crowd control, support utility, team fit, progression value, and flexibility across player goals. A higher tier indicates a stronger recorded fit for common situations, not a guaranteed result or an official meta verdict.
        </p>
      </section>
      {/* Tier Explanation */}
      <section aria-labelledby="tiers-heading">
        <h2 id="tiers-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          Tier Ranking System
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            ["S", "High-priority editorial picks", "Strong fits for teams built around a clear win condition."],
            ["A", "Strong role fits", "Reliable choices that suit many team plans."],
            ["B", "Situational options", "Useful for specific roles or progression stages."],
            ["C", "Early roster options", "Helpful while learning the game or filling a gap."],
          ].map(([tier, label, desc]) => (
            <div key={tier} className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
              <span className="code-text text-lg" style={{ color: tierColors[tier] }}>
                {tier}-Tier
              </span>
              <p className="mt-1 text-sm font-semibold text-white">{label}</p>
              <p className="mt-1 text-xs text-[#768294]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Per-Tier Sections */}
      {(["S", "A", "B", "C"] as const).map((tier) => {
        const tierUnits = units.filter((unit) => unit.tier === tier);
        return (
          <section key={tier} aria-labelledby={`tier-${tier}`}>
            <h2 id={`tier-${tier}`} className="font-heading text-[22px] font-semibold lg:text-[26px] mb-2" style={{ color: tierColors[tier] }}>
              {tier}-Tier Units
            </h2>
            <p className="text-sm text-[#768294] mb-4">{tier === "S" ? "High-priority editorial picks for teams built around a clear win condition." : tier === "A" ? "Strong role fits that can anchor or complete many team plans." : tier === "B" ? "Situational options for progression, specific roles, or limited rosters." : "Early roster options for learning the game before a stronger recorded fit is available."}</p>
            <TierTable rows={tierUnits.map((unit) => ({ name: unit.name, tier: unit.tier, description: `${unit.rarity} ${unit.role} / ${unit.element}` }))} colHeaders={["UNIT", "TIER", "ROLE"]} />
          </section>
        );
      })}

      <section aria-labelledby="record-fields-heading">
        <h2 id="record-fields-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          Why Each Unit Ranks Here
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-[#768294]">
          Each card is a recorded roster snapshot. The placement follows the stored editorial tier, while the role and element are shown as project data. For current stats, traits, sources, and evolution details, open the unit record and verify the live game before investing.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {units.map((unit) => (
            <article key={unit.id} className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
              <div className="flex items-start justify-between gap-3">
                <div><h3 className="text-sm font-semibold text-white">{unit.name}</h3><p className="mt-1 text-xs text-[#768294]">{unit.rarity} / {unit.element} / {unit.role}</p></div>
                <span className="code-text rounded px-2 py-0.5 text-xs font-semibold" style={{ color: tierColors[unit.tier], backgroundColor: tierColors[unit.tier] + "1a" }}>{unit.tier}-Tier</span>
              </div>
              <dl className="mt-3 grid gap-2 text-xs">
                <div><dt className="text-[#768294]">Editorial fit</dt><dd className="text-[#BAC4D1]">Recorded as a {unit.role} option for the {unit.tier}-Tier roster snapshot. Confirm current performance in-game.</dd></div>
                <div><dt className="text-[#768294]">Current-data note</dt><dd className="text-[#BAC4D1]">Stats, effects, sources, traits, and evolution details are not treated as official here.</dd></div>
              </dl>
              <Link href={`/anime-rangers-x/units/${unit.id}`} className="mt-3 inline-block text-xs font-semibold text-[#FF3D00] hover:underline">Open {unit.name} detail -&gt;</Link>
            </article>
          ))}
        </div>
      </section>

      {/* Related Guides */}
      <section aria-labelledby="related">
        <h2 id="related" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          🔗 Related Anime Rangers X Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/anime-rangers-x/units" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00] group">
            <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#FF3D00] transition">Unit Database -&gt;</span>
            <p className="mt-1 text-xs text-[#768294]">Open recorded unit detail pages and verify current in-game information.</p>
          </Link>
          {[
            { label: "Trait Tier List", href: "/anime-rangers-x/trait-tier-list", description: "Compare the project's recorded trait groupings." },
            { label: "Trait Reroll Guide", href: "/anime-rangers-x/trait-reroll", description: "Plan rerolls around the units you keep." },
            { label: "Evolution Guide", href: "/anime-rangers-x/evolution-guide", description: "Review the project's evolution guidance." },
          ].map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00] group"
            >
              <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#FF3D00] transition">
                {g.label} →
              </span>
              <p className="mt-1 text-xs text-[#768294]">{g.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <ContentFAQ faqs={data.faq} />
    </ContentLayout>
  );
}
