import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { mutations } from "@/data/garden/database/mutations";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

const rainbowRecord = mutations.find((m) => m.name === "Prismatic Rainbow");

const boundaryDescription =
  "A project-reference page for the Prismatic Rainbow entry in Grow a Garden. It does not provide official rates, live market quotes, independently verified transaction data, or gameplay recommendations.";

export const metadata: Metadata = {
  title: "Rainbow Mutation Project Reference — Grow a Garden",
  description: boundaryDescription,
  keywords: [
    "Prismatic Rainbow Grow a Garden",
    "rainbow mutation reference Grow a Garden",
    "Grow a Garden mutation project reference",
  ],
  alternates: { canonical: "/grow-a-garden/rainbow-mutation-guide" },
  openGraph: {
    title: "Rainbow Mutation Project Reference — Grow a Garden",
    description: boundaryDescription,
    type: "website",
  },
};

const faqs = [
  {
    question: "What does this Prismatic Rainbow page document?",
    answer:
      "This is an editorial project-reference page for the Prismatic Rainbow entry. It records the page's scope and links to related reference pages; it does not establish game mechanics, acquisition conditions, rates, or outcomes.",
  },
  {
    question: "Does this page provide mutation probabilities or gameplay instructions?",
    answer:
      "No. This page does not present official probabilities, drop rates, event schedules, stacking rules, or instructions for using a mutation. Those claims require evidence that is not supplied on this page.",
  },
  {
    question: "Can this page be used to value a trade?",
    answer:
      "No. This page does not provide official prices, live market quotes, independently verified transaction data, fairness determinations, or buying, selling, holding, profit, or investment guidance.",
  },
];

export default function RainbowMutationGuidePage() {
  return (
    <ContentLayout
      title="Rainbow Mutation Project Reference — Grow a Garden"
      description={boundaryDescription}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Rainbow Mutation Reference", href: "/grow-a-garden/rainbow-mutation-guide" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/rainbow-mutation-guide"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Mutations"
      keywords={[
        "Prismatic Rainbow Grow a Garden",
        "rainbow mutation reference Grow a Garden",
        "Grow a Garden mutation project reference",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      <section aria-labelledby="scope-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="scope-heading" className="mb-3 font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Reference Scope
        </h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          This page is an internal editorial reference for the entry named Prismatic Rainbow. It is not a verified game-mechanics guide and does not claim that the entry&apos;s name, rarity, availability, effects, or acquisition details are complete or current.
        </p>
      </section>

      <section aria-labelledby="record-heading">
        <h2 id="record-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          How to Read This Reference
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            Project labels and comparisons are editorial records used for site navigation and internal organization. They are not official game data, live market information, independently verified transaction records, or a substitute for source-backed gameplay documentation.
          </p>
        </div>
      </section>

      <section aria-labelledby="entry-fields-heading">
        <h2 id="entry-fields-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          Recorded Entry Fields
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          {rainbowRecord ? (
            <dl className="grid gap-3 sm:grid-cols-2">
              <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
                <dt className="text-xs text-[#768294] uppercase tracking-wider">Recorded name</dt>
                <dd className="text-sm text-white mt-1">{rainbowRecord.name}</dd>
              </div>
              <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
                <dt className="text-xs text-[#768294] uppercase tracking-wider">Recorded multiplier label</dt>
                <dd className="text-sm text-white mt-1">{rainbowRecord.multiplier}×</dd>
              </div>
              <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
                <dt className="text-xs text-[#768294] uppercase tracking-wider">Recorded tier label</dt>
                <dd className="text-sm text-white mt-1">{rainbowRecord.tier}</dd>
              </div>
              <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
                <dt className="text-xs text-[#768294] uppercase tracking-wider">Recorded roll-rate label</dt>
                <dd className="text-sm text-white mt-1">{rainbowRecord.rollRate}</dd>
              </div>
            </dl>
          ) : (
            <p className="text-sm text-[#768294]">
              No entry named Prismatic Rainbow exists in the project mutation dataset currently.
            </p>
          )}
          <p className="mt-3 text-xs text-[#768294]">
            These fields are stored project records shown as labels. The roll-rate and multiplier labels are not independently verified probabilities or confirmed game mechanics; check the current game or official announcements for actual behavior.
          </p>
        </div>
      </section>

      <section aria-labelledby="boundaries-heading">
        <h2 id="boundaries-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          Information Boundaries
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#BAC4D1]">
            <li>No mutation probability, drop-rate, event, resource, multiplier, crop-output, pet-effect, or availability claim is made here.</li>
            <li>No projected outcome, optimization route, or recommendation for a player&apos;s gameplay choices is provided.</li>
            <li>No trade price, market forecast, fairness judgment, or buying, selling, holding, profit, or investment guidance is provided.</li>
          </ul>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/rainbow-mutation-guide" />
    </ContentLayout>
  );
}
