import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import Link from "next/link";
import data from "@/data/garden2/codes";

export const metadata: Metadata = {
  title: `${data.title}`,
  description: data.description,
  keywords: ["Grow a Garden 2 codes", "GaG2 codes", "Grow a Garden 2 promo codes", "Roblox Grow a Garden 2", "TEAMGREENBEAN"],
  alternates: { canonical: "/grow-a-garden-2/codes" },
  openGraph: { title: data.title, description: data.description, type: "website" },
};

export default function GrowAGarden2CodesPage() {
  return (
    <ContentLayout title={data.title} description={data.description} breadcrumbs={data.breadcrumbs} canonicalPath="/grow-a-garden-2/codes" accent="garden" updatedAt={data.updatedAt}>
      <section className="rounded-xl border border-[#00E676]/20 bg-[#00E676]/5 p-4" aria-label="New game notice">
        <div className="flex items-center gap-2">
          <span className="text-sm">🆕</span>
          <p className="text-sm text-[#BAC4D1]">
            <strong className="text-white">Grow a Garden 2</strong> just launched in June 2026. New codes are expected frequently during the launch period — bookmark this page and check daily.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-4" aria-label="Last updated">
        <div className="flex items-center gap-2">
          <span className="text-sm">🕒</span>
          <p className="text-sm text-[#BAC4D1]">
            <strong className="text-white">Last Checked:</strong> {data.lastChecked} — {data.activeCodes.length} active code{data.activeCodes.length !== 1 ? "s" : ""} verified.
          </p>
        </div>
      </section>

      <section aria-labelledby="active-heading">
        <h2 id="active-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">🎁 Active Codes</h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1fr_1.3fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="code-text text-[#768294]">CODE</span>
            <span className="code-text text-[#768294]">REWARD</span>
          </div>
          {data.activeCodes.map((c, i) => (
            <div key={i} className="grid grid-cols-[1fr_1.3fr] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition">
              <div>
                <code className="text-sm font-bold text-[#00E676] select-all">{c.code}</code>
              </div>
              <div>
                <p className="text-xs text-[#BAC4D1]">{c.reward}</p>
                <p className="mt-0.5 text-xs text-[#768294]">{c.note}</p>
              </div>
            </div>
          ))}
        </div>
        {data.activeCodes.length === 0 && (
          <p className="text-sm text-[#768294]">No active codes at this time. Check back soon.</p>
        )}
      </section>

      <section aria-labelledby="howto-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="howto-heading" className="font-heading text-[20px] font-semibold text-white mb-4">📋 How to Redeem Codes in Grow a Garden 2</h2>
        <div className="space-y-3">
          {data.howToRedeem.map((step, i) => (
            <div key={i} className="flex gap-3">
              <span className="code-text text-[#00E676] shrink-0 mt-0.5">{i + 1}.</span>
              <p className="text-sm text-[#BAC4D1]" dangerouslySetInnerHTML={{ __html: step }} />
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="related-heading">
        <h2 id="related-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">🔗 Related Grow a Garden 2 Guides</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {data.relatedGuides.map((g, i) => (
            <Link key={i} href={g.href} className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676] group">
              <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">{g.label} →</span>
              <p className="mt-1 text-xs text-[#768294]">{g.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <ContentFAQ faqs={data.faq} />
    </ContentLayout>
  );
}
