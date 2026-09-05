import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { codes } from "@/data/garden/database/codes";
import { events } from "@/data/garden/database/events";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

const boundary =
  "The entries on this page are internal editorial project records for reference. They are not official prices, live market quotes, or independently verified transaction data.";

export const metadata: Metadata = {
  title: "Grow a Garden Project Reference Navigation",
  description: `${boundary} This page lists selected recorded entries without strategy or outcome claims.`,
  keywords: ["Grow a Garden project reference", "Grow a Garden recorded entries"],
  alternates: { canonical: "/grow-a-garden/how-to-get-rich-fast" },
  openGraph: {
    title: "Grow a Garden Project Reference Navigation",
    description: `${boundary} This page lists selected recorded entries without strategy or outcome claims.`,
    type: "website",
  },
};

const codeRecords = codes.slice(0, 8);
const eventRecords = events.slice(0, 8);

const faqs = [
  {
    question: "What does this page list?",
    answer:
      "This page lists selected code and event entries from the project dataset and links to their dedicated record pages. It is a navigation reference rather than a time-sensitive guide.",
  },
  {
    question: "Do these records establish current availability or rewards?",
    answer:
      "No. Recorded code, reward, event, and date fields do not establish current availability, game mechanics, rewards, or future outcomes. Confirm current details through accessible official information.",
  },
  {
    question: "Does this page provide trading or investment advice?",
    answer:
      "No. This editorial project-reference page does not determine trade fairness and does not provide buying, selling, holding, profit, earnings, investment, or strategy advice.",
  },
];

export default function HowToGetRichFastPage() {
  return (
    <ContentLayout
      title="Grow a Garden Project Reference Navigation"
      description={`${boundary} This is a recorded-entry reference only.`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Project Reference Navigation", href: "/grow-a-garden/how-to-get-rich-fast" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/how-to-get-rich-fast"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Project records"
      keywords={["Grow a Garden project reference", "Grow a Garden recorded entries"]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      <section className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 className="mb-3 font-heading text-[20px] font-semibold text-white lg:text-[24px]">Internal record navigation</h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          {boundary} The listed fields are for locating project records. They do not claim current
          availability, a fastest route, a predicted outcome, or a recommended action.
        </p>
      </section>

      <section aria-labelledby="code-records-heading">
        <h2 id="code-records-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">Selected code records</h2>
        <p className="mb-4 text-sm leading-relaxed text-[#BAC4D1]">Code and reward fields are recorded project data. Confirm current availability and details independently before using a code.</p>
        <div className="overflow-x-auto"><table className="w-full border-collapse text-sm"><thead><tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]"><th className="py-2 pr-3">Code record</th><th className="py-2 pr-3">Recorded reward</th><th className="py-2 pr-3">Recorded type</th></tr></thead><tbody>{codeRecords.map((code) => <tr key={code.id} className="border-b border-[#1E212B]"><td className="py-3 pr-3"><Link href="/grow-a-garden/codes" className="text-[#00E676] hover:underline">{code.code}</Link></td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{code.reward}</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{code.type}</td></tr>)}</tbody></table></div>
      </section>

      <section aria-labelledby="event-records-heading">
        <h2 id="event-records-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">Selected event records</h2>
        <p className="mb-4 text-sm leading-relaxed text-[#BAC4D1]">Event names and dates are recorded labels. They are not a statement that an event is active, available, or scheduled.</p>
        <div className="overflow-x-auto"><table className="w-full border-collapse text-sm"><thead><tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]"><th className="py-2 pr-3">Event record</th><th className="py-2 pr-3">Recorded start date</th><th className="py-2 pr-3">Recorded end date</th></tr></thead><tbody>{eventRecords.map((event) => <tr key={event.id} className="border-b border-[#1E212B]"><td className="py-3 pr-3"><Link href={`/grow-a-garden/events/${event.id}`} className="text-[#00E676] hover:underline">{event.title}</Link></td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{event.startDate}</td><td className="py-3 pr-3 text-xs text-[#BAC4D1]">{event.endDate}</td></tr>)}</tbody></table></div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/how-to-get-rich-fast" />
    </ContentLayout>
  );
}