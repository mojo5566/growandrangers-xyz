import type { Metadata } from "next";
import Link from "next/link";
import ContentFAQ from "@/components/ContentFAQ";
import ContentLayout from "@/components/ContentLayout";
import data from "@/data/rangers/trait-reroll";

const PAGE_KEYWORDS = [
  "Anime Rangers X trait reroll",
  "Re:Rangers X trait reroll guide",
  "how to reroll traits Anime Rangers X",
  "best units for Trait Rerolls",
  "Anime Rangers X Trait Rerolls",
];

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: PAGE_KEYWORDS,
  alternates: { canonical: "/anime-rangers-x/trait-reroll" },
  openGraph: {
    title: data.title,
    description: data.description,
    type: "website",
  },
};

const priorityColors: Record<string, string> = {
  Highest: "bg-[#FF3D00]/20 text-[#FF3D00]",
  High: "bg-[#FF8C00]/20 text-[#FF8C00]",
  Medium: "bg-[#FFD700]/20 text-[#FFD700]",
  Low: "bg-[#3A86FF]/20 text-[#3A86FF]",
};

export default function TraitRerollPage() {
  return (
    <ContentLayout
      title={data.title}
      description={data.description}
      breadcrumbs={data.breadcrumbs}
      canonicalPath="/anime-rangers-x/trait-reroll"
      accent="rangers"
      updatedAt={data.updatedAt}
      articleSection="Traits"
      keywords={PAGE_KEYWORDS}
      about={[
        { name: "Anime Rangers X" },
        { name: "Re:Rangers X" },
        { name: "Roblox game guides" },
      ]}
    >
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#FF3D00]/40 bg-[#FF3D00]/10 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Quick Answer
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">{data.quickAnswer}</p>
      </section>

      <section aria-labelledby="process-heading">
        <h2 id="process-heading" className="mb-4 font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          What Trait Rerolls Do and How to Use Them
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <ol className="space-y-4">
            {data.process.map((item) => (
              <li key={item.step} className="flex gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#FF3D00]/20 text-sm font-bold text-[#FF3D00]">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#BAC4D1]">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="units-heading">
        <h2 id="units-heading" className="mb-4 font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Which Units Are Worth Trait Rerolls?
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-[#768294]">
          Rank the investment by role and account longevity, then use the current <Link href="/anime-rangers-x/unit-tier-list" className="text-[#3A86FF] hover:underline">Unit Tier List</Link> and <Link href="/anime-rangers-x/best-units" className="text-[#3A86FF] hover:underline">Best Units guide</Link> to check individual candidates.
        </p>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="hidden grid-cols-[90px_1fr_1.5fr] gap-3 bg-[#1E212B] px-4 py-2.5 sm:grid">
            <span className="text-xs font-semibold text-[#768294]">PRIORITY</span>
            <span className="text-xs font-semibold text-[#768294]">UNIT TYPE</span>
            <span className="text-xs font-semibold text-[#768294]">GUIDANCE</span>
          </div>
          {data.unitPriorities.map((item) => (
            <div key={item.priority} className="grid grid-cols-1 items-start gap-2 border-t border-[#252936] px-4 py-3 transition hover:bg-[#1E212B] sm:grid-cols-[90px_1fr_1.5fr] sm:items-center sm:gap-3">
              <span className={`justify-self-start rounded px-2 py-1 text-center text-xs font-semibold sm:justify-self-stretch ${priorityColors[item.priority]}`}>{item.priority}</span>
              <span className="text-sm font-semibold text-[#BAC4D1]">{item.units}</span>
              <span className="text-xs leading-relaxed text-[#768294]">{item.guidance}</span>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="keep-heading">
        <h2 id="keep-heading" className="mb-4 font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Keep or Continue Rerolling?
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-[#768294]">
          Compare the effect with the unit&apos;s role in the <Link href="/anime-rangers-x/trait-tier-list" className="text-[#3A86FF] hover:underline">Trait Tier List</Link>. These rules avoid relying on unverified odds or hidden mechanics.
        </p>
        <div className="space-y-3">
          {data.keepRules.map((rule) => (
            <div key={`${rule.decision}-${rule.when}`} className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
              <div className="flex flex-wrap items-start gap-3">
                <span className="rounded bg-[#FF3D00]/20 px-2 py-1 text-xs font-semibold text-[#FF3D00]">{rule.decision}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-white">{rule.when}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#BAC4D1]">{rule.reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="strategy-heading">
        <h2 id="strategy-heading" className="mb-4 font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Beginner, Mid-Game, and Late-Game Resource Strategy
        </h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {data.resourceStrategy.map((item) => (
            <article key={item.stage} className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
              <h3 className="text-base font-semibold text-[#FF3D00]">{item.stage}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#BAC4D1]">{item.approach}</p>
              <p className="mt-3 rounded-lg border border-[#252936] bg-[#1E212B] p-3 text-xs leading-relaxed text-[#768294]">
                <strong className="text-white">Goal:</strong> {item.target}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="codes-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="codes-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          How to Get Trait Rerolls from Codes
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">
          Open the <Link href="/anime-rangers-x/codes" className="font-semibold text-[#3A86FF] hover:underline">Anime Rangers X Codes page</Link> and look for currently listed rewards that include Trait Rerolls. Copy each code exactly, launch the game, open its code redemption control, paste the code, and confirm. Some entries may have level requirements or case-sensitive spelling.
        </p>
        <p className="mt-3 text-xs leading-relaxed text-[#768294]">
          Code availability changes without notice. The Codes page is the maintained source for the site&apos;s current list; this strategy guide deliberately does not duplicate a fixed set of codes that could expire.
        </p>
      </section>

      <section aria-labelledby="mistakes-heading">
        <h2 id="mistakes-heading" className="mb-4 font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Common Trait Reroll Mistakes
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {data.mistakes.map((mistake) => (
            <article key={mistake.title} className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
              <h3 className="text-sm font-semibold text-white">{mistake.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#BAC4D1]">{mistake.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="related-heading">
        <h2 id="related-heading" className="mb-4 font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Related Anime Rangers X Guides
        </h2>
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
