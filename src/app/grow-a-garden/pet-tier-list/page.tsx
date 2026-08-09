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
    "Grow a Garden editorial pet ranking",
    "Grow a Garden pet team fit",
    "Grow a Garden pet progression guide",
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
        aria-label="Editorial pet tier comparison"
        className="hidden overflow-hidden rounded-xl border border-[#252936] lg:block"
      >
        <div
          role="row"
          className="grid grid-cols-[1.15fr_90px_1.15fr_1.35fr_1.6fr] gap-3 bg-[#1E212B] px-4 py-2.5"
        >
          {[
            "PET",
            "EDITORIAL TIER",
            "PLANNING USE",
            "TEAM FIT",
            "PLAYER DECISION",
          ].map((header) => (
            <span
              key={header}
              role="columnheader"
              className="code-text min-w-0 text-[10px] text-[#768294]"
            >
              {header}
            </span>
          ))}
        </div>
        {rows.map((row) => (
          <div
            key={row.id}
            role="row"
            data-pet-id={row.id}
            className="grid grid-cols-[1.15fr_90px_1.15fr_1.35fr_1.6fr] items-start gap-3 border-t border-[#252936] px-4 py-3 transition hover:bg-[#1E212B]"
          >
            <span role="cell" className="min-w-0 break-words text-sm font-semibold text-[#BAC4D1]">
              {row.name}
            </span>
            <span
              role="cell"
              className="code-text rounded-md px-1.5 py-0.5 text-center text-xs"
              style={{
                color: tierColors[row.tier] || "#BAC4D1",
                backgroundColor: (tierColors[row.tier] || "#BAC4D1") + "1a",
              }}
            >
              {row.tier}
            </span>
            <span role="cell" className="min-w-0 break-words text-xs leading-relaxed text-[#BAC4D1]">
              {row.planningUse}
            </span>
            <span role="cell" className="min-w-0 break-words text-xs leading-relaxed text-[#768294]">
              {row.teamFit}
            </span>
            <span role="cell" className="min-w-0 break-words text-xs leading-relaxed text-[#BAC4D1]">
              {row.decision}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-3 lg:hidden">
        {rows.map((row) => (
          <article
            key={row.id}
            data-pet-id={row.id}
            className="rounded-xl border border-[#252936] bg-[#14161D] p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="min-w-0 break-words text-sm font-semibold text-white">{row.name}</h3>
              <span
                className="code-text shrink-0 rounded-md px-2 py-0.5 text-xs"
                style={{
                  color: tierColors[row.tier] || "#BAC4D1",
                  backgroundColor: (tierColors[row.tier] || "#BAC4D1") + "1a",
                }}
              >
                {row.tier}
              </span>
            </div>
            <dl className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                ["Planning use", row.planningUse],
                ["Team fit", row.teamFit],
                ["Player decision", row.decision],
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
      articleSection="Grow a Garden Pets"
      keywords={[
        "Grow a Garden pet tier list",
        "Grow a Garden editorial pet ranking",
        "Grow a Garden pet team fit",
        "Grow a Garden pet progression guide",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox pets" }, { name: "Roblox game guides" }]}
      itemList={data.petOrder.map((pet, index) => ({
        name: pet.name,
        position: index + 1,
        url: `/grow-a-garden/pets/${pet.id}`,
      }))}
    >
      <section
        aria-labelledby="quick-answer-heading"
        className="rounded-xl border border-[#00E676]/30 bg-[#101A18] p-5"
      >
        <h2
          id="quick-answer-heading"
          className="mb-3 font-heading text-[20px] font-semibold text-white lg:text-[24px]"
        >
          Quick Answer
        </h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          This is GrowAndRangers&apos; editorial Pet Tier List for the {data.petOrder.length} pet names
          in its current project record. Use the S to C groups to compare general utility, team fit,
          progression value, flexibility, and situational usefulness. It is not an official ranking
          or live data table, so confirm current effects, values, availability, and restrictions in
          the game interface or developer announcements.
        </p>
      </section>

      <section aria-labelledby="scope-heading" className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <h2 id="scope-heading" className="mb-3 font-heading text-[20px] font-semibold text-white">
            Scope and Version Note
          </h2>
          <ul className="space-y-2">
            {data.dataScope.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-relaxed text-[#BAC4D1]">
                <span className="shrink-0 text-[#00E676]">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <h2 className="mb-3 font-heading text-[20px] font-semibold text-white">
            Editorial Ranking Method
          </h2>
          <ul className="space-y-2">
            {data.rankingMethod.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-relaxed text-[#BAC4D1]">
                <span className="shrink-0 text-[#00E676]">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section aria-labelledby="roles-heading">
        <h2
          id="roles-heading"
          className="mb-4 font-heading text-[20px] font-semibold text-white lg:text-[24px]"
        >
          Guide Responsibilities
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {data.pageRoles.map((role) => (
            <article key={role.href} className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
              {role.href === "/grow-a-garden/pet-tier-list" ? (
                <h3 className="text-sm font-semibold text-white">{role.label}</h3>
              ) : (
                <h3 className="text-sm font-semibold text-white">
                  <Link href={role.href} className="hover:text-[#00E676] hover:underline">
                    {role.label}
                  </Link>
                </h3>
              )}
              <p className="mt-2 text-sm leading-relaxed text-[#768294]">{role.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="explanation-heading">
        <h2
          id="explanation-heading"
          className="mb-4 font-heading text-[20px] font-semibold text-white lg:text-[24px]"
        >
          Editorial Tier Guide
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

      {data.tierExplanation.map((tierGroup) => (
        <section key={tierGroup.tier} aria-labelledby={`tier-${tierGroup.tier}`}>
          <h2
            id={`tier-${tierGroup.tier}`}
            className="mb-2 font-heading text-[22px] font-semibold lg:text-[26px]"
            style={{ color: tierColors[tierGroup.tier] }}
          >
            {tierGroup.tier}-Tier Editorial Group
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-[#768294]">{tierGroup.desc}</p>
          <PetTierTable rows={data.tierRows[tierGroup.tier]} />
        </section>
      ))}

      <section aria-labelledby="decision-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="decision-heading" className="mb-3 font-heading text-[20px] font-semibold text-white">
          How to Use the Editorial Tiers
        </h2>
        <ul className="space-y-2">
          {data.decisionTips.map((tip) => (
            <li key={tip} className="flex gap-2 text-sm leading-relaxed text-[#BAC4D1]">
              <span className="shrink-0 text-[#00E676]">-</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="related-heading">
        <h2
          id="related-heading"
          className="mb-4 font-heading text-[20px] font-semibold text-white lg:text-[24px]"
        >
          Related Grow a Garden Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676]"
            >
              <span className="text-sm font-semibold text-[#BAC4D1] transition group-hover:text-[#00E676]">
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
