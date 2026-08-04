import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import data, { type PetTierTableRow } from "@/data/garden/pet-tier-list";

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: [
    "Grow a Garden pet tier list",
    "Grow a Garden best pets",
    "best pets for beginners Grow a Garden",
    "best pets for money Grow a Garden",
    "best pets for mutations Grow a Garden",
    "pet hatching guide",
  ],
  alternates: { canonical: "/grow-a-garden/pet-tier-list" },
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

function PetTierTable({ rows }: { rows: PetTierTableRow[] }) {
  return (
    <div>
      <div
        role="table"
        aria-label="Pet tier comparison"
        className="hidden lg:block overflow-hidden rounded-xl border border-[#252936]"
      >
        <div
          role="row"
          className="grid grid-cols-[1.05fr_52px_1.35fr_1.1fr_0.9fr_1.25fr_1.25fr] gap-3 bg-[#1E212B] px-4 py-2.5"
        >
          {["PET", "TIER", "ABILITY", "BEST USE", "HOW TO GET", "MUTATION FIT", "WHY IT RANKS"].map((header) => (
            <span key={header} role="columnheader" className="code-text min-w-0 text-[10px] text-[#768294]">
              {header}
            </span>
          ))}
        </div>
        {rows.map((row) => (
          <div
            key={row.name}
            role="row"
            className="grid grid-cols-[1.05fr_52px_1.35fr_1.1fr_0.9fr_1.25fr_1.25fr] gap-3 border-t border-[#252936] px-4 py-3 items-start hover:bg-[#1E212B] transition"
          >
            <span role="cell" className="min-w-0 break-words text-sm font-semibold text-[#BAC4D1]">
              {row.name}
            </span>
            <span
              role="cell"
              className="code-text rounded-md px-1.5 py-0.5 text-center text-xs"
              style={{ color: tierColors[row.tier] || "#BAC4D1", backgroundColor: (tierColors[row.tier] || "#BAC4D1") + "1a" }}
            >
              {row.tier}
            </span>
            <span role="cell" className="min-w-0 break-words text-xs leading-relaxed text-[#768294]">
              {row.ability}
            </span>
            <span role="cell" className="min-w-0 break-words text-xs leading-relaxed text-[#BAC4D1]">
              {row.bestUse}
            </span>
            <span role="cell" className="min-w-0 break-words text-xs leading-relaxed text-[#BAC4D1]">
              {row.source}
            </span>
            <span role="cell" className="min-w-0 break-words text-xs leading-relaxed text-[#768294]">
              {row.mutationCompatibility}
            </span>
            <span role="cell" className="min-w-0 break-words text-xs leading-relaxed text-[#BAC4D1]">
              {row.why}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-3 lg:hidden">
        {rows.map((row) => (
          <article key={row.name} className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="min-w-0 break-words text-sm font-semibold text-white">{row.name}</h3>
              <span
                className="code-text shrink-0 rounded-md px-2 py-0.5 text-xs"
                style={{ color: tierColors[row.tier] || "#BAC4D1", backgroundColor: (tierColors[row.tier] || "#BAC4D1") + "1a" }}
              >
                {row.tier}
              </span>
            </div>
            <dl className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                ["Ability", row.ability],
                ["Best use", row.bestUse],
                ["How to get", row.source],
                ["Mutation fit", row.mutationCompatibility],
                ["Why it ranks here", row.why],
              ].map(([label, value]) => (
                <div key={label} className="min-w-0">
                  <dt className="code-text text-[10px] uppercase text-[#768294]">{label}</dt>
                  <dd className="mt-1 break-words text-xs leading-relaxed text-[#BAC4D1]">{value}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function PetTierListPage() {
  return (
    <ContentLayout
      title={data.title}
      description={data.description}
      breadcrumbs={data.breadcrumbs}
      canonicalPath="/grow-a-garden/pet-tier-list"
      accent="garden"
      updatedAt={data.updatedAt}
      articleSection="Grow a Garden Pets"
      keywords={[
        "Grow a Garden pet tier list",
        "Grow a Garden best pets",
        "best pets for beginners Grow a Garden",
        "best pets for money Grow a Garden",
        "best pets for mutations Grow a Garden",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox pets" }, { name: "Roblox game guides" }]}
      itemList={data.detailCards.map((card, index) => ({
        name: card.name,
        position: index + 1,
        url: "/grow-a-garden/pets/" + card.name.toLowerCase().replaceAll(" ", "-"),
      }))}
    >
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#101A18] p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          Within the 22 records currently in the canonical database, Golden Phoenix Chick is the broadest
          all-season choice, while Golden Dragon is more specialized for golden-tier crops. For a new farm,
          Thunder Hawk Chick is the clearest accessible starting option in this data set. Choose Lucky Clover
          Bunny, Shadow Cat, or Night Owl only when the recorded mutation or time condition matches your plan.
          This is a database-backed comparison, not a claim that the live roster or values are complete.
        </p>
      </section>

      <section aria-labelledby="scope-heading" className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <h2 id="scope-heading" className="font-heading text-[20px] font-semibold text-white mb-3">
            Data Scope
          </h2>
          <ul className="space-y-2">
            {data.dataScope.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-relaxed text-[#BAC4D1]">
                <span className="text-[#00E676] shrink-0">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <h2 className="font-heading text-[20px] font-semibold text-white mb-3">
            How the Ranking Works
          </h2>
          <ul className="space-y-2">
            {data.rankingMethod.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-relaxed text-[#BAC4D1]">
                <span className="text-[#00E676] shrink-0">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="goals-heading">
        <h2 id="goals-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          Best Pets by Player Goal
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {data.comparisonSections.map((section) => (
            <article key={section.title} className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
              <h3 className="font-heading text-lg font-semibold text-white">{section.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#768294]">{section.summary}</p>
              <ul className="mt-4 space-y-3">
                {section.picks.map((pick) => (
                  <li key={pick.name} className="text-sm leading-relaxed text-[#BAC4D1]">
                    <Link href={pick.href} className="font-semibold text-[#00E676] hover:underline">
                      {pick.name}
                    </Link>
                    <span className="text-[#BAC4D1]"> - {pick.rationale}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="beginner-path-heading">
        <h2 id="beginner-path-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          Beginner Pet Upgrade Path
        </h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {data.beginnerPath.map((step) => (
            <article key={step.step} className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
              <span className="code-text rounded-md bg-[#00E676]/10 px-2 py-0.5 text-xs font-semibold text-[#00E676]">
                Step {step.step}
              </span>
              <h3 className="mt-3 text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#BAC4D1]">{step.guidance}</p>
              <Link href={step.href} className="mt-4 inline-block text-sm font-semibold text-[#00E676] hover:underline">
                {step.linkLabel} -&gt;
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="explanation-heading">
        <h2 id="explanation-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          Pet Tier Ranking System
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {data.tierExplanation.map((tier) => (
            <div key={tier.tier} className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
              <span className="code-text text-lg" style={{ color: tier.color }}>
                {tier.tier}-Tier
              </span>
              <p className="mt-1 text-sm font-semibold text-white">{tier.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-[#768294]">{tier.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {data.tiers.map((tierGroup) => {
        const tier = tierGroup.name.charAt(0) as "S" | "A" | "B" | "C";
        return (
          <section key={tierGroup.name} aria-labelledby={"tier-" + tier}>
            <h2
              id={"tier-" + tier}
              className="font-heading text-[22px] font-semibold text-white lg:text-[26px] mb-2"
              style={{ color: tierColors[tier] }}
            >
              {tierGroup.name}
            </h2>
            <p className="text-sm leading-relaxed text-[#768294] mb-4">{tierGroup.description}</p>
            <PetTierTable rows={data.tierRows[tier]} />
          </section>
        );
      })}

      <section aria-labelledby="details-heading">
        <h2 id="details-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          Detailed Pet Decisions
        </h2>
        <div className="space-y-4">
          {data.detailCards.map((card) => (
            <article key={card.name} className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h3 className="text-base font-semibold text-white">{card.name}</h3>
                <span
                  className="code-text inline-block rounded px-2 py-0.5 text-xs font-semibold"
                  style={{ color: card.color, backgroundColor: card.color + "1a" }}
                >
                  {card.rank}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[#BAC4D1] mb-4">{card.desc}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase text-[#00E676] mb-2">Best use</h4>
                  <p className="text-xs leading-relaxed text-[#BAC4D1]">{card.bestUse}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase text-[#768294] mb-2">How to get</h4>
                  <p className="text-xs leading-relaxed text-[#BAC4D1]">{card.bestOn}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase text-[#FF3D00] mb-2">Limit and upgrade decision</h4>
                  <p className="text-xs leading-relaxed text-[#BAC4D1]">{card.decision}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase text-[#3A86FF] mb-2">Recorded evidence</h4>
                  <ul className="space-y-1">
                    {card.evidence.map((item) => (
                      <li key={item} className="text-xs leading-relaxed text-[#BAC4D1]">
                        - {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {data.pairingTable && data.pairingTable.length > 0 && (
        <section aria-labelledby="synergy-heading">
          <h2 id="synergy-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
            Recorded Pet and Mutation Examples
          </h2>
          <p className="text-sm leading-relaxed text-[#768294] mb-4">
            These examples come from the canonical database. They are not a guarantee of live-game stacking,
            and the recorded values should be checked against the current client before you build around them.
          </p>
          <div className="hidden sm:block overflow-hidden rounded-xl border border-[#252936]">
            <div className="grid grid-cols-3 gap-3 bg-[#1E212B] px-4 py-2.5">
              <span className="code-text text-[#768294]">PET</span>
              <span className="code-text text-[#768294]">MUTATION OR CONTEXT</span>
              <span className="code-text text-[#768294]">RECORDED VALUE</span>
            </div>
            {data.pairingTable.map((row) => (
              <div key={row.trait} className="grid grid-cols-3 gap-3 border-t border-[#252936] px-4 py-3">
                <span className="min-w-0 break-words text-xs text-[#BAC4D1]">{row.trait}</span>
                <span className="min-w-0 break-words text-xs text-[#BAC4D1]">{row.unit}</span>
                <span className="min-w-0 break-words text-xs font-bold text-[#00E676]">{row.why}</span>
              </div>
            ))}
          </div>
          <div className="space-y-3 sm:hidden">
            {data.pairingTable.map((row) => (
              <div key={row.trait} className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
                <p className="text-sm font-semibold text-white">{row.trait}</p>
                <p className="mt-2 text-xs leading-relaxed text-[#BAC4D1]">{row.unit}</p>
                <p className="mt-2 text-xs font-bold text-[#00E676]">{row.why}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section aria-labelledby="strategy-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="strategy-heading" className="font-heading text-[20px] font-semibold text-white mb-3">
          Pet Hatching and Upgrade Strategy
        </h2>
        <ul className="space-y-2">
          {data.strategyTips?.map((tip) => (
            <li key={tip} className="flex gap-2 text-sm leading-relaxed text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0">-</span>
              <span dangerouslySetInnerHTML={{ __html: tip }} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="related-heading">
        <h2 id="related-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          Related Grow a Garden Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676] group"
            >
              <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
                {guide.label} -&gt;
              </span>
              <p className="mt-1 text-xs leading-relaxed text-[#768294]">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <ContentFAQ faqs={data.faq} />
    </ContentLayout>
  );
}
