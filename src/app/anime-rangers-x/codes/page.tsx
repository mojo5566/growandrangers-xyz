import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import Link from "next/link";
import data from "@/data/rangers/codes";

export const metadata: Metadata = {
  title: `${data.title}`,
  description: data.description,
  keywords: ["Anime Rangers X codes", "Anime Rangers X promo codes", "Roblox codes"],
  alternates: { canonical: "/anime-rangers-x/codes" },
  openGraph: { title: data.title, description: data.description, type: "website" },
};

export default function AnimeRangersXCodesPage() {
  return (
    <ContentLayout title={data.title} description={data.description} breadcrumbs={data.breadcrumbs} canonicalPath="/anime-rangers-x/codes" accent="rangers" updatedAt={data.updatedAt}>
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-4" aria-label="Last updated">
        <div className="flex items-center gap-2"><span className="text-sm">🕒</span><p className="text-sm text-[#BAC4D1]"><strong className="text-white">Last Updated:</strong> {data.updatedAt} — All {data.activeCodes.length} active codes verified and working.</p></div>
      </section>
      <section aria-labelledby="active-heading">
        <h2 id="active-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">🎁 Active Codes</h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1fr_1.3fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center"><span className="code-text text-[#768294]">CODE</span><span className="code-text text-[#768294]">REWARD</span></div>
          {data.activeCodes.map((c,i)=>(<div key={i} className="grid grid-cols-[1fr_1.3fr] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"><div><code className="text-sm font-bold text-[#BAC4D1] select-all">{c.code}</code></div><div><p className="text-xs text-[#BAC4D1]">{c.reward}</p><p className="mt-0.5 text-xs text-[#768294]">{c.note}</p></div></div>))}
        </div>
      </section>
      <section aria-labelledby="expired-heading">
        <h2 id="expired-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">⏳ Expired Codes</h2>
        <div className="overflow-hidden rounded-xl border border-[#252936] opacity-60">
          <div className="grid grid-cols-[1fr_1fr_1fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center"><span className="code-text text-[#768294]">CODE</span><span className="code-text text-[#768294]">REWARD</span><span className="code-text text-[#768294]">EXPIRED</span></div>
          {data.expiredCodes.map((c,i)=>(<div key={i} className="grid grid-cols-[1fr_1fr_1fr] gap-2 border-t border-[#252936] px-4 py-3 items-center"><code className="text-sm text-[#768294] line-through">{c.code}</code><span className="text-xs text-[#768294]">{c.reward}</span><span className="text-xs text-[#768294]">{c.expiredOn}</span></div>))}
        </div>
      </section>
      <section aria-labelledby="howto-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="howto-heading" className="font-heading text-[20px] font-semibold text-white mb-4">📋 How to Redeem Codes in Anime Rangers X</h2>
        <div className="space-y-3">{data.howToRedeem.map((step,i)=>(<div key={i} className="flex gap-3"><span className="code-text text-[#FF3D00] shrink-0 mt-0.5">{i+1}.</span><p className="text-sm text-[#BAC4D1]" dangerouslySetInnerHTML={{__html:step}}/></div>))}</div>
      </section>
      <section aria-labelledby="related-heading">
        <h2 id="related-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">🔗 Related Anime Rangers X Guides</h2>
        <div className="grid gap-3 sm:grid-cols-3">{data.relatedGuides.map((g,i)=>(<Link key={i} href={g.href} className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00] group"><span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#FF3D00] transition">{g.label} →</span><p className="mt-1 text-xs text-[#768294]">{g.description}</p></Link>))}</div>
      </section>
      <ContentFAQ faqs={data.faq} />
    </ContentLayout>
  );
}
