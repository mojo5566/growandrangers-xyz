import type { Metadata } from "next";
import Link from "next/link";
import ContentFAQ from "@/components/ContentFAQ";
import ContentLayout from "@/components/ContentLayout";
import TierTable from "@/components/TierTable";
import data from "@/data/rangers/trait-tier-list";
import { traits } from "@/data/rangers/database/traits";
import { units } from "@/data/rangers/database/units";

const PAGE_KEYWORDS = [
  "Anime Rangers X trait tier list",
  "Anime Rangers X best traits",
  "Anime Rangers X trait effects",
  "Re:Rangers X trait tier list",
];

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: PAGE_KEYWORDS,
  alternates: { canonical: "/anime-rangers-x/trait-tier-list" },
  openGraph: { title: data.title, description: data.description, type: "website" },
};

const tierColors: Record<string, string> = {
  Mythic: "#FF3D00",
  Legendary: "#FF8C00",
  Epic: "#A020F0",
  Rare: "#3A86FF",
  Common: "#768294",
};

const tierOrder = ["Mythic", "Legendary", "Epic", "Rare", "Common"] as const;

function findUnit(name: string) {
  const normalized = name.toLowerCase();
  return units.find(
    (unit) =>
      unit.name.toLowerCase() === normalized ||
      unit.aliases.some((alias) => alias.toLowerCase() === normalized),
  );
}

export default function TraitTierListPage() {
  const topTraits = traits.filter((trait) => trait.tier === "Mythic");

  return (
    <ContentLayout
      title={data.title}
      description={data.description}
      breadcrumbs={data.breadcrumbs}
      canonicalPath="/anime-rangers-x/trait-tier-list"
      accent="rangers"
      updatedAt={data.updatedAt}
      articleSection="Anime Rangers X Traits"
      keywords={PAGE_KEYWORDS}
      about={[{ name: "Anime Rangers X" }, { name: "Re:Rangers X" }, { name: "Roblox game guides" }]}
    >
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#FF3D00]/40 bg-[#FF3D00]/10 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">Quick Answer</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">
          The highest stored tier contains {topTraits.map((trait) => trait.name).join(", ")}. Keep one when its recorded effect supports the unit&apos;s actual role. A lower-tier role match can still be more useful than a higher label whose trigger or effect the unit cannot use.
        </p>
      </section>

      <section aria-labelledby="scope-heading" className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <h2 id="scope-heading" className="font-heading text-[20px] font-semibold text-white">Data Scope</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">
            This page covers all {traits.length} records in the canonical Trait database: names, stored tiers, effects, strengths, limitations, and recorded unit matches. It does not display roll rates or claim an official live-game ranking.
          </p>
        </article>
        <article className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <h2 className="font-heading text-[20px] font-semibold text-white">Ranking Method</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">
            Traits are grouped by the tier saved in the canonical record. The effect and role match explain the placement; no invented probability, reroll cost, patch change, or hidden game mechanic is used.
          </p>
        </article>
      </section>

      <section aria-labelledby="tiers-heading">
        <h2 id="tiers-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">Complete Trait Ranking</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {tierOrder.map((tier) => {
            const count = traits.filter((trait) => trait.tier === tier).length;
            return (
              <div key={tier} className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
                <span className="code-text text-sm" style={{ color: tierColors[tier] }}>{tier}</span>
                <p className="mt-1 text-sm font-semibold text-white">{count} traits</p>
                <p className="mt-1 text-xs text-[#768294]">Stored database tier</p>
              </div>
            );
          })}
        </div>
      </section>

      {tierOrder.map((tier) => {
        const tierTraits = traits.filter((trait) => trait.tier === tier);
        return (
          <section key={tier} aria-labelledby={`tier-${tier}`}>
            <h2 id={`tier-${tier}`} className="font-heading text-[22px] font-semibold lg:text-[26px] mb-2" style={{ color: tierColors[tier] }}>{tier}-Tier Traits</h2>
            <p className="mb-4 text-sm text-[#768294]">Compare the recorded effect before deciding whether the trait matches a unit&apos;s role.</p>
            <TierTable
              rows={tierTraits.map((trait) => ({ name: trait.name, tier: trait.tier, description: trait.effect }))}
              colHeaders={["TRAIT", "TIER", "EFFECT"]}
            />
          </section>
        );
      })}

      <section aria-labelledby="details-heading">
        <h2 id="details-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">Trait Effects and Unit Fit</h2>
        <p className="mb-4 text-sm leading-relaxed text-[#768294]">
          The database does not store a separate Boss, idle, story, or farming mode field. Mode claims are therefore limited to what the recorded effect explicitly supports, such as resource drops, kill triggers, defense penetration, healing, or cooldown use.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {traits.map((trait) => (
            <article key={trait.id} className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-white">{trait.name}</h3>
                <span className="code-text rounded px-2 py-0.5 text-xs font-semibold" style={{ color: tierColors[trait.tier], backgroundColor: tierColors[trait.tier] + "1a" }}>{trait.tier}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">{trait.effect}</p>
              <dl className="mt-4 grid gap-3 text-xs">
                <div><dt className="font-semibold text-[#00E676]">Why keep it</dt><dd className="mt-1 leading-relaxed text-[#BAC4D1]">{trait.strengths[0]}</dd></div>
                <div><dt className="font-semibold text-[#FF8C00]">Condition or limitation</dt><dd className="mt-1 leading-relaxed text-[#BAC4D1]">{trait.weaknesses[0]}</dd></div>
                <div>
                  <dt className="font-semibold text-[#3A86FF]">Recorded unit fit</dt>
                  <dd className="mt-1 flex flex-wrap gap-x-2 gap-y-1 text-[#BAC4D1]">
                    {trait.bestOn.length > 0 ? trait.bestOn.map((name) => {
                      const unit = findUnit(name);
                      return unit ? <Link key={name} href={`/anime-rangers-x/units/${unit.id}`} className="hover:text-[#FF3D00] hover:underline">{name}</Link> : <span key={name}>{name}</span>;
                    }) : <span>Not recorded</span>}
                  </dd>
                </div>
              </dl>
              <Link href={`/anime-rangers-x/traits/${trait.id}`} className="mt-4 inline-block text-xs font-semibold text-[#FF3D00] hover:underline">Open {trait.name} detail -&gt;</Link>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="reroll-boundary-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="reroll-boundary-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">When to Stop Rerolling</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">
          This ranking helps identify whether an effect fits the unit; it does not prescribe a cost or number of attempts. Stop when you have a useful role match or reach the budget set before rolling. For the actual process, replacement risk, stopping rules, and resource management, use the <Link href="/anime-rangers-x/trait-reroll" className="font-semibold text-[#FF3D00] hover:underline">Trait Reroll Guide</Link>.
        </p>
      </section>

      <section aria-labelledby="related-heading">
        <h2 id="related-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">Related Anime Rangers X Guides</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {data.relatedGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="group rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00]">
              <span className="text-sm font-semibold text-[#BAC4D1] transition group-hover:text-[#FF3D00]">{guide.label} -&gt;</span>
              <p className="mt-1 text-xs text-[#768294]">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <ContentFAQ faqs={data.faq} />
    </ContentLayout>
  );
}
