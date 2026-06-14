import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import bestCrops from "@/data/garden/best-crops";

export const metadata: Metadata = {
  title: "Best Crops Guide — Grow a Garden (June 2026) | BloxPulse",
  description: bestCrops.description,
  keywords: [
    "best crops Grow a Garden",
    "Grow a Garden crop ranking",
    "top crops June 2026",
    "Golden Wheat",
    "Crystal Berry",
    "crop tier list",
  ],
  alternates: { canonical: "/grow-a-garden/best-crops/" },
  openGraph: {
    title: "Best Crops Guide — Grow a Garden (June 2026) | BloxPulse",
    description: bestCrops.description,
    type: "website",
  },
};

export default function BestCropsPage() {
  return (
    <ContentLayout
      title={bestCrops.title}
      description={bestCrops.description}
      breadcrumbs={bestCrops.breadcrumbs}
      accent="garden"
      canonicalPath="/grow-a-garden/best-crops/"
      updatedAt={bestCrops.updatedAt}
    >
      {/* Introduction */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <p className="text-sm text-[#BAC4D1] leading-relaxed">{bestCrops.intro}</p>
      </section>

      {/* Top Crops Table */}
      <section aria-labelledby="top-crops-heading">
        <h2 id="top-crops-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          🏆 Top Crops Ranked
        </h2>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[700px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">Crop</th>
                <th className="py-3 px-3 font-semibold">Tier</th>
                <th className="py-3 px-3 font-semibold">Coins</th>
                <th className="py-3 px-3 font-semibold">Growth</th>
                <th className="py-3 px-3 font-semibold">Season</th>
                <th className="py-3 px-3 font-semibold">CPM</th>
                <th className="py-3 px-3 font-semibold">Best Pairing</th>
              </tr>
            </thead>
            <tbody>
              {bestCrops.topCrops.map((crop) => {
                const tierColor =
                  crop.tier === "S" ? "#FF3D00" :
                  crop.tier === "A" ? "#FF8C00" :
                  crop.tier === "B" ? "#FFD700" :
                  "#3A86FF";
                return (
                  <tr key={crop.name} className="border-b border-[#252936] hover:bg-[#1E212B]/50 transition">
                    <td className="py-3 px-3">
                      <span className="font-semibold text-white">{crop.name}</span>
                      <p className="text-xs text-[#768294] mt-0.5">{crop.why.slice(0, 60)}…</p>
                    </td>
                    <td className="py-3 px-3">
                      <span
                        className="code-text inline-block rounded px-2 py-0.5 text-xs font-semibold"
                        style={{ color: tierColor, backgroundColor: tierColor + "1a" }}
                      >
                        {crop.tier}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-white font-semibold">{crop.coins} 🪙</td>
                    <td className="py-3 px-3 text-[#BAC4D1]">{crop.growthTime}</td>
                    <td className="py-3 px-3 text-[#BAC4D1]">{crop.season}</td>
                    <td className="py-3 px-3 text-[#00E676] font-semibold">{crop.coinsPerMinute} CPM</td>
                    <td className="py-3 px-3 text-xs text-[#768294] max-w-[200px]">{crop.bestWith}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Strategy Tips */}
      <section aria-labelledby="strategy-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="strategy-heading" className="font-heading text-[20px] font-semibold text-white mb-3">
          💡 Pro Strategy Tips
        </h2>
        <ul className="space-y-2">
          {bestCrops.strategyTips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">▸</span>
              {tip}
            </li>
          ))}
        </ul>
      </section>

      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/best-crops/" />

      <ContentFAQ faqs={bestCrops.faq} />
    </ContentLayout>
  );
}
