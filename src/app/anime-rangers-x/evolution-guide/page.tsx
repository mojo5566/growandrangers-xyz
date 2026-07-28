import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import Link from "next/link";
import data from "@/data/rangers/evolution-guide";

export const metadata: Metadata = {
  title: `${data.title}`,
  description: data.description,
  keywords: [
    "Anime Rangers X evolution guide",
    "Re:Rangers X evolution",
    "evolution requirements",
    "evolution stones farming",
    "Awakening Core",
    "how to evolve units",
  ],
  alternates: { canonical: "/anime-rangers-x/evolution-guide" },
  openGraph: {
    title: data.title,
    description: data.description,
    type: "website",
  },
};

const tierBadge: Record<string, string> = {
  S: "text-[#FF3D00] bg-[rgba(255,61,0,0.12)]",
  A: "text-[#FF8C00] bg-[rgba(255,140,0,0.12)]",
  B: "text-[#FFD700] bg-[rgba(255,215,0,0.12)]",
  C: "text-[#3A86FF] bg-[rgba(58,134,255,0.12)]",
};

export default function EvolutionGuidePage() {
  return (
    <ContentLayout
      title={data.title}
      description={data.description}
      breadcrumbs={data.breadcrumbs}
      canonicalPath="/anime-rangers-x/evolution-guide"
      accent="rangers"
      updatedAt={data.updatedAt}
    >
      {/* Overview */}
      <section aria-labelledby="overview">
        <h2 id="overview" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          Evolution Overview
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm text-[#BAC4D1] leading-relaxed">{data.overview.description}</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {data.overview.highlights.map((s, i) => (
              <div key={i} className="flex gap-2 text-xs text-[#BAC4D1]">
                <span className="text-[#FF3D00] shrink-0">▸</span> {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evolution Stages Table */}
      <section aria-labelledby="stages">
        <h2 id="stages" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          Evolution Stages & Requirements
        </h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1fr_1.5fr_1.2fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="code-text text-[#768294]">EVOLUTION</span>
            <span className="code-text text-[#768294]">REQUIREMENTS</span>
            <span className="code-text text-[#768294]">BONUS</span>
          </div>
          {data.stages.map((s, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_1.5fr_1.2fr] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
            >
              <span className="text-sm font-semibold text-[#BAC4D1]">{s.from}</span>
              <span className="text-xs text-[#BAC4D1]">{s.mats}</span>
              <span className="text-xs font-semibold text-[#FF3D00]">{s.stats}</span>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-[#768294]">{data.totalCost}</p>
      </section>

      {/* Evolution Materials */}
      <section aria-labelledby="materials">
        <h2 id="materials" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          Evolution Materials & How to Farm Them
        </h2>
        <div className="space-y-4">
          {data.materials.map((m, i) => (
            <div key={i} className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
              <h3 className="text-base font-semibold text-white">
                {m.icon} {m.name}
              </h3>
              <p className="mt-1 text-sm text-[#BAC4D1]">{m.desc}</p>
              <div className="mt-3">
                <h4 className="text-xs font-semibold text-[#768294] mb-1">Sources:</h4>
                <ul className="space-y-1">
                  {m.sources.map((s, j) => (
                    <li key={j} className="flex gap-2 text-xs text-[#BAC4D1]">
                      <span className="text-[#FF3D00] shrink-0">▸</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-3 rounded-lg bg-[#1E212B] p-3">
                <p className="text-xs text-[#3A86FF]">
                  <strong>Pro Tip:</strong> {m.tip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Units to Evolve First */}
      <section aria-labelledby="best-units">
        <h2 id="best-units" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          Best Units to Evolve First
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <ol className="space-y-3">
            {data.bestUnitsSteps.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="code-text text-[#FF3D00] font-bold text-lg shrink-0">{s.step}.</span>
                <div>
                  <h4 className="text-sm font-semibold text-white">{s.title}</h4>
                  <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Evolution Priority Tier List */}
      <section aria-labelledby="priority">
        <h2 id="priority" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          Evolution Priority Tier List
        </h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[60px_1fr_2fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="code-text text-[#768294]">PRIORITY</span>
            <span className="code-text text-[#768294]">UNIT</span>
            <span className="code-text text-[#768294]">REASON</span>
          </div>
          {data.priorityList.map((p, i) => (
            <div
              key={i}
              className="grid grid-cols-[60px_1fr_2fr] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
            >
              <span className={`code-text rounded px-1.5 py-0.5 text-xs text-center ${tierBadge[p.tier]}`}>
                {p.tier}
              </span>
              <span className="text-sm font-semibold text-[#BAC4D1]">{p.unit}</span>
              <span className="text-xs text-[#768294]">{p.reason}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section aria-labelledby="mistakes">
        <h2 id="mistakes" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          Common Mistakes to Avoid
        </h2>
        <div className="space-y-3">
          {data.mistakes.map((m, i) => (
            <div key={i} className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
              <div className="flex items-start gap-3">
                <span className="code-text text-[#FF3D00] text-lg shrink-0">!</span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{m.title}</h3>
                  <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </div>
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
