import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import Link from "next/link";
import data from "@/data/garden/crop-value-list";

export const metadata: Metadata = {
  title: `${data.title} | BloxPulse`,
  description: data.description,
  keywords: [
    "Grow a Garden crop values",
    "Grow a Garden best crops",
    "crop profit guide",
    "Grow a Garden farming guide 2026",
    "golden wheat value",
    "crop value list",
  ],
  alternates: { canonical: "/grow-a-garden/crop-value-list" },
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

export default function CropValueListPage() {
  return (
    <ContentLayout
      title={data.title}
      description={data.description}
      breadcrumbs={data.breadcrumbs}
      canonicalPath="/grow-a-garden/crop-value-list"
      accent="garden"
      updatedAt={data.updatedAt}
    >
      {/* Full Crop Table */}
      <section aria-labelledby="full-table-heading">
        <h2
          id="full-table-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          💰 Complete Crop Value Rankings
        </h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1fr_80px_80px_100px] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="code-text text-[#768294]">CROP</span>
            <span className="code-text text-[#768294]">COINS</span>
            <span className="code-text text-[#768294]">TIME</span>
            <span className="code-text text-[#768294]">SEASON</span>
          </div>
          {data.crops.map((c, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_80px_80px_100px] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
            >
              <div className="flex items-center gap-2">
                <span className={`code-text rounded px-1.5 py-0.5 text-xs ${tierBadge[c.tier]}`}>
                  {c.tier}
                </span>
                <span className="text-sm font-semibold text-[#BAC4D1]">{c.name}</span>
              </div>
              <span className="text-sm font-bold text-[#00E676]">{c.coins}</span>
              <span className="text-xs text-[#768294]">{c.time}</span>
              <span className="text-xs text-[#768294]">{c.season}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tier Details */}
      <section aria-labelledby="why-heading">
        <h2
          id="why-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          📋 Why Each Crop Is in Its Tier
        </h2>
        {data.tierDetails.map((tier) => (
          <div key={tier.name} className="mb-6">
            <h3 className="text-sm font-semibold mb-2" style={{ color: tier.color }}>
              {tier.name}
            </h3>
            <div className="rounded-lg border border-[#252936] bg-[#14161D] p-3">
              <p className="text-xs text-[#BAC4D1] leading-relaxed">{tier.why}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Profit Stacking */}
      <section aria-labelledby="stacking-heading">
        <h2
          id="stacking-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          📈 Profit Stacking: Mutation + Pet Multipliers
        </h2>
        <p className="text-sm text-[#768294] mb-4">
          See how crop values scale with S-Tier mutation (4.0x) and S-Tier pet (5.0x):
        </p>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1fr_80px_100px_100px_80px] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="code-text text-[#768294]">CROP</span>
            <span className="code-text text-[#768294]">BASE</span>
            <span className="code-text text-[#768294]">+ MUTATION</span>
            <span className="code-text text-[#768294]">+ PET</span>
            <span className="code-text text-[#768294]">PPM</span>
          </div>
          {data.profitStacks.map((p, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_80px_100px_100px_80px] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
            >
              <span className="text-xs text-[#BAC4D1]">{p.name}</span>
              <span className="text-xs text-[#BAC4D1]">{p.base}</span>
              <span className="text-xs text-[#FF8C00]">{p.sMut}</span>
              <span className="text-xs font-bold text-[#00E676]">{p.sMutPet}</span>
              <span className="text-xs text-[#768294]">{p.ppm}/min</span>
            </div>
          ))}
        </div>
      </section>

      {/* Farming Strategy */}
      <section
        aria-labelledby="strategy-heading"
        className="rounded-xl border border-[#252936] bg-[#14161D] p-5"
      >
        <h2
          id="strategy-heading"
          className="font-heading text-[20px] font-semibold text-white mb-3"
        >
          🎯 Optimal Farming Strategy
        </h2>
        <ul className="space-y-2">
          {data.strategyTips.map((tip, i) => (
            <li key={i} className="flex gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0">▸</span>
              <span dangerouslySetInnerHTML={{ __html: tip }} />
            </li>
          ))}
        </ul>
      </section>

      {/* Related Guides */}
      <section aria-labelledby="related-heading">
        <h2
          id="related-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          🔗 Related Grow a Garden Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.relatedGuides.map((g, i) => (
            <Link
              key={i}
              href={g.href}
              className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676] group"
            >
              <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
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
