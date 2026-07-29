import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import Link from "next/link";
import data from "@/data/garden/best-pets";

export const metadata: Metadata = {
  title: `${data.title}`,
  description: data.description,
  keywords: ["Grow a Garden best pets", "best pets Grow a Garden", "Grow a Garden pet guide", "pet hatching guide", "pet egg strategy", "pet multipliers"],
  alternates: { canonical: "/grow-a-garden/best-pets" },
  openGraph: { title: data.title, description: data.description, type: "website" },
};

const tierBadge: Record<string, string> = {
  "S": "bg-[#FF3D00]/20 text-[#FF3D00]",
  "A": "bg-[#FF8C00]/20 text-[#FF8C00]",
  "B": "bg-[#FFD700]/20 text-[#FFD700]",
  "C": "bg-[#3A86FF]/20 text-[#3A86FF]",
};

export default function BestPetsPage() {
  return (
    <ContentLayout title={data.title} description={data.description} breadcrumbs={data.breadcrumbs} canonicalPath="/grow-a-garden/best-pets" accent="garden" updatedAt={data.updatedAt} articleSection="Pets" keywords={["Grow a Garden best pets", "best pets Grow a Garden", "Grow a Garden pet guide", "pet hatching guide", "pet egg strategy"]} about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}>

      {/* Quick Answer - AI search summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          The best pet is Golden Phoenix Chick at 5.0× multiplier, hatched from Legendary Eggs (10,000 coins, ~5% drop rate) — it pairs with Aurelian Crown (4.0×) for a 20.0× maximum yield. Close alternatives are Golden Dragon (4.8×) and Crystal Unicorn Foal (4.5×). For mid-game, target A-Tier pets like Neon Dragon Hatchling (3.5×) from Rare Eggs, and always use Pet Growth Potions before hatching eggs over 2,000 coins.
        </p>
      </section>

      {/* Last Updated */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-4" aria-label="Last updated">
        <div className="flex items-center gap-2">
          <span className="text-sm">🕒</span>
          <p className="text-sm text-[#BAC4D1]">
            <strong className="text-white">Last Updated:</strong> {data.updatedAt}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section aria-labelledby="overview-heading">
        <h2 id="overview-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">🐾 Why Pets Matter</h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm text-[#BAC4D1] leading-relaxed">{data.overview.description}</p>
          <ul className="mt-4 space-y-2">
            {data.overview.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#BAC4D1]">
                <span className="text-[#00E676] shrink-0 mt-0.5">✔</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Progression Stages */}
      <section aria-labelledby="stages-heading">
        <h2 id="stages-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">📈 Pet Progression Roadmap</h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1.2fr_1.2fr_1.5fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="text-xs font-semibold text-[#768294]">STAGE</span>
            <span className="text-xs font-semibold text-[#768294]">INVESTMENT</span>
            <span className="text-xs font-semibold text-[#768294]">GOAL</span>
          </div>
          {data.stages.map((s, i) => (
            <div key={i} className="grid grid-cols-[1.2fr_1.2fr_1.5fr] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition">
              <span className="text-sm font-semibold text-[#BAC4D1]">{s.from}</span>
              <span className="text-xs text-[#768294]">{s.mats}</span>
              <span className="text-xs text-[#BAC4D1]">{s.stats}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-[#768294]">{data.totalCost}</p>
      </section>

      {/* Egg Types & Resources */}
      <section aria-labelledby="resources-heading">
        <h2 id="resources-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">🥚 Egg Types & Hatching Resources</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {data.materials.map((m, i) => (
            <div key={i} className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{m.icon}</span>
                <h3 className="text-sm font-semibold text-white">{m.name}</h3>
              </div>
              <p className="text-xs text-[#BAC4D1] leading-relaxed mb-3">{m.desc}</p>
              <div className="mb-3">
                <span className="text-xs font-semibold text-[#768294]">Sources:</span>
                <ul className="mt-1 space-y-0.5">
                  {m.sources.map((src, j) => (
                    <li key={j} className="text-xs text-[#768294] flex gap-1.5">
                      <span className="text-[#00E676] shrink-0">+</span> {src}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
                <p className="text-xs text-[#00E676] leading-relaxed">💡 {m.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Step-by-Step Hatching Strategy */}
      <section aria-labelledby="steps-heading">
        <h2 id="steps-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">📋 Pet Hatching Strategy</h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <ol className="space-y-3">
            {data.bestUnitsSteps.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-[#00E676] font-bold text-lg shrink-0">{s.step}.</span>
                <div>
                  <h4 className="text-sm font-semibold text-white">{s.title}</h4>
                  <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Best Pets Priority */}
      <section aria-labelledby="priority-heading">
        <h2 id="priority-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">⭐ Pet Priority Tier List</h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[60px_1fr_2fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="text-xs font-semibold text-[#768294]">PRIORITY</span>
            <span className="text-xs font-semibold text-[#768294]">PET / INVESTMENT</span>
            <span className="text-xs font-semibold text-[#768294]">REASON</span>
          </div>
          {data.priorityList.map((p, i) => (
            <div key={i} className="grid grid-cols-[60px_1fr_2fr] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition">
              <span className={`rounded px-1.5 py-0.5 text-xs text-center font-semibold ${tierBadge[p.tier] || "bg-[#3A86FF]/20 text-[#3A86FF]"}`}>{p.tier}</span>
              <span className="text-sm font-semibold text-[#BAC4D1]">{p.unit}</span>
              <span className="text-xs text-[#768294]">{p.reason}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section aria-labelledby="mistakes-heading">
        <h2 id="mistakes-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">⚠️ Common Pet Mistakes</h2>
        <div className="space-y-3">
          {data.mistakes.map((m, i) => (
            <div key={i} className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
              <div className="flex items-start gap-3">
                <span className="text-[#FF3D00] text-lg shrink-0 font-bold">!</span>
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
      <section aria-labelledby="related-heading">
        <h2 id="related-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">🔗 Related Guides</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {data.relatedGuides.map((g, i) => (
            <Link key={i} href={g.href} className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676] group">
              <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">{g.label} →</span>
              <p className="mt-1 text-xs text-[#768294]">{g.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <ContentFAQ faqs={data.faq} />
    </ContentLayout>
  );
}
