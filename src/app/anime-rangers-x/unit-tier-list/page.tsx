import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import TierTable from "@/components/TierTable";
import Link from "next/link";
import data from "@/data/rangers/unit-tier-list";
import { units } from "@/data/rangers/database/units";

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "Anime Rangers X unit tier list",
    "Anime Rangers X unit rankings",
    "Anime Rangers X S tier units",
    "Re:Rangers X unit tier list",
  ],
  alternates: { canonical: "/anime-rangers-x/unit-tier-list" },
  openGraph: {
    title: data.title,
    description: data.description,
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
      description={data.description}
      breadcrumbs={data.breadcrumbs}
      canonicalPath="/anime-rangers-x/unit-tier-list"
      accent="rangers"
      updatedAt={data.updatedAt}
      articleSection="Anime Rangers X Units"
      keywords={["Anime Rangers X unit tier list", "Anime Rangers X unit rankings", "Re:Rangers X unit tier list"]}
      about={[{ name: "Anime Rangers X" }, { name: "Re:Rangers X" }, { name: "Roblox game guides" }]}
    >
      <section className="rounded-xl border border-[#FF3D00]/30 bg-[#1A1210] p-5" aria-labelledby="scope-heading">
        <h2 id="scope-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Scope and Version Note
        </h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          This page is the complete ranking view for the units currently recorded in the project&apos;s Anime Rangers X database. It is a snapshot of the source data, not a verified official patch list. Units, traits, sources, and evolution requirements that are not present in that database are intentionally not added.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-white">How the tier is assigned</h3>
            <p className="mt-1 text-xs leading-relaxed text-[#768294]">
              Tier combines the recorded role, rarity, ability profile, and the tier value in the canonical unit record. It is not based on an invented summon rate, damage test, or live market value.
            </p>
          </div>
          <div className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-white">How to use this page</h3>
            <p className="mt-1 text-xs leading-relaxed text-[#768294]">
              Use this page to compare the full roster and then open a unit detail page for its recorded traits, source, and evolution fields. For recommendations by beginner, boss, or farming goal, use the <Link href="/anime-rangers-x/best-units" className="ml-1 text-[#FF3D00] hover:underline">Best Units guide</Link>.
            </p>
          </div>
        </div>
      </section>
      {/* Tier Explanation */}
      <section aria-labelledby="tiers-heading">
        <h2 id="tiers-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          Tier Ranking System
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {data.tierExplanation.map((t) => (
            <div key={t.tier} className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
              <span className="code-text text-lg" style={{ color: t.color }}>
                {t.tier}-Tier
              </span>
              <p className="mt-1 text-sm font-semibold text-white">{t.label}</p>
              <p className="mt-1 text-xs text-[#768294]">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Per-Tier Sections */}
      {(["S", "A", "B", "C"] as const).map((tier) => {
        const tierUnits = units.filter((unit) => unit.tier === tier);
        const explanation = data.tierExplanation.find((item) => item.tier === tier);
        return (
          <section key={tier} aria-labelledby={`tier-${tier}`}>
            <h2 id={`tier-${tier}`} className="font-heading text-[22px] font-semibold lg:text-[26px] mb-2" style={{ color: tierColors[tier] }}>
              {tier}-Tier Units
            </h2>
            <p className="text-sm text-[#768294] mb-4">{explanation?.desc}</p>
            <TierTable rows={tierUnits.map((unit) => ({ name: unit.name, tier: unit.tier, description: `${unit.rarity} ${unit.role} / ${unit.element}` }))} colHeaders={["UNIT", "TIER", "ROLE"]} />
          </section>
        );
      })}

      <section aria-labelledby="record-fields-heading">
        <h2 id="record-fields-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          Why Each Unit Ranks Here
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-[#768294]">
          Every card below is generated from the canonical unit record. The placement follows the stored tier; role, traits, source, and evolution fields are shown without adding unrecorded rates or mode bonuses.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {units.map((unit) => (
            <article key={unit.id} className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
              <div className="flex items-start justify-between gap-3">
                <div><h3 className="text-sm font-semibold text-white">{unit.name}</h3><p className="mt-1 text-xs text-[#768294]">{unit.rarity} / {unit.element} / {unit.role}</p></div>
                <span className="code-text rounded px-2 py-0.5 text-xs font-semibold" style={{ color: tierColors[unit.tier], backgroundColor: tierColors[unit.tier] + "1a" }}>{unit.tier}-Tier</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[#BAC4D1]">{unit.description}</p>
              <dl className="mt-3 grid gap-2 text-xs">
                <div><dt className="text-[#768294]">Why it ranks here</dt><dd className="text-[#BAC4D1]">{unit.strengths[0]} Limitation: {unit.weaknesses[0]}</dd></div>
                <div><dt className="text-[#768294]">Mode fit</dt><dd className="text-[#BAC4D1]">No separate mode field is recorded; evaluate this {unit.role} from its ultimate, passive, and limitations.</dd></div>
                <div><dt className="text-[#768294]">Best trait direction</dt><dd className="text-[#BAC4D1]">{unit.bestTraits.join(", ") || "Not recorded"}</dd></div>
                <div><dt className="text-[#768294]">Recorded source</dt><dd className="text-[#BAC4D1]">{unit.sources.join(", ") || "Not recorded"}</dd></div>
                <div><dt className="text-[#768294]">Evolution field</dt><dd className="text-[#BAC4D1]">{unit.evolutionCost || "Not recorded"}</dd></div>
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
          {data.relatedGuides.map((g, i) => (
            <Link
              key={i}
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
