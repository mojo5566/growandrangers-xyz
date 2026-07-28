import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { updates, getUpdateById } from "@/data/garden/database/updates";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return updates.map((update) => ({ id: update.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const update = getUpdateById(id);
  if (!update) return { title: "Update Not Found" };

  return {
    title: `${update.title} — Grow a Garden Update`,
    description: update.summary,
    keywords: [
      update.title,
      "Grow a Garden update",
      `${update.title} patch notes`,
      `${update.title} new items`,
      "Grow a Garden changelog",
      update.type,
      ...(update.version ? [`v${update.version}`] : []),
    ],
    alternates: { canonical: `/grow-a-garden/updates/${id}` },
    openGraph: {
      title: `${update.title} — Grow a Garden Update`,
      description: update.summary,
      type: "article",
    },
  };
}

const typeBadge: Record<string, string> = {
  Update: "bg-[#00E676]/20 text-[#00E676]",
  Event: "bg-[#FF8C00]/20 text-[#FF8C00]",
  Patch: "bg-[#3A86FF]/20 text-[#3A86FF]",
  "Admin Abuse": "bg-[#FF3D00]/20 text-[#FF3D00]",
};

const statusBadge: Record<string, string> = {
  Current: "bg-[#00E676]/20 text-[#00E676]",
  Archived: "bg-[#768294]/20 text-[#BAC4D1]",
};

const itemTypeColors: Record<string, string> = {
  crops: "text-[#00E676]",
  pets: "text-[#FF8C00]",
  seeds: "text-[#FFD700]",
  mutations: "text-[#FF3D00]",
};

const itemTypeLabels: Record<string, string> = {
  crops: "🌱 New Crops",
  pets: "🐾 New Pets",
  seeds: "🌰 New Seeds",
  mutations: "✨ New Mutations",
};

export default async function UpdateDetailPage({ params }: PageProps) {
  const { id } = await params;
  const update = getUpdateById(id);

  if (!update) notFound();

  const faqs = [
    {
      question: `When was ${update.title} released?`,
      answer: `${update.title} was released in ${update.date}${
        update.version ? ` as version ${update.version}` : ""
      }. It is classified as a ${update.type.toLowerCase()} and is currently ${update.status.toLowerCase()}.`,
    },
    {
      question: `What was included in ${update.title}?`,
      answer: `${update.summary} Key features include: ${update.features
        .slice(0, 3)
        .join("; ")}. See the full feature list above for all changes.`,
    },
    ...(update.newItems && Object.values(update.newItems).some((arr) => arr && arr.length > 0)
      ? [
          {
            question: `What new items were added in ${update.title}?`,
            answer: Object.entries(update.newItems)
              .filter(([, arr]) => arr && arr.length > 0)
              .map(([key, arr]) => `${itemTypeLabels[key]}: ${(arr as string[]).join(", ")}`)
              .join(". "),
          },
        ]
      : []),
    {
      question: `Is ${update.title} still active?`,
      answer:
        update.status === "Current"
          ? `Yes, ${update.title} is currently active. Its features and changes are part of the live game.`
          : `No, ${update.title} has been archived. Its features have been incorporated into the base game, but any limited-time events or items associated with it are no longer available.`,
    },
  ];

  const hasNewItems =
    update.newItems &&
    Object.values(update.newItems).some((arr) => arr && arr.length > 0);

  return (
    <ContentLayout
      title={update.title}
      description={update.summary}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Updates", href: "/grow-a-garden/updates" },
        { label: update.title, href: `/grow-a-garden/updates/${update.id}` },
      ]}
      accent="garden"
      canonicalPath={`/grow-a-garden/updates/${update.id}`}
      updatedAt={update.updatedAt}
    >
      {/* Core Meta */}
      <section aria-labelledby="meta-heading">
        <h2 id="meta-heading" className="sr-only">
          Update metadata
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Type</span>
            <p className="mt-1">
              <span className={`rounded px-2 py-0.5 text-sm font-semibold ${typeBadge[update.type]}`}>
                {update.type}
              </span>
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Status</span>
            <p className="mt-1">
              <span className={`rounded px-2 py-0.5 text-sm font-semibold ${statusBadge[update.status]}`}>
                {update.status}
              </span>
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Date</span>
            <p className="mt-1 text-sm font-semibold text-[#BAC4D1]">{update.date}</p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Version</span>
            <p className="mt-1 text-sm font-semibold text-[#BAC4D1]">
              {update.version ? `v${update.version}` : "—"}
            </p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section aria-labelledby="summary-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2
          id="summary-heading"
          className="font-heading text-[20px] font-semibold text-white mb-3"
        >
          📝 Summary
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">{update.summary}</p>
      </section>

      {/* Features */}
      <section aria-labelledby="features-heading">
        <h2
          id="features-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          ✅ Features & Changes
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <ul className="space-y-3">
            {update.features.map((feature, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#BAC4D1]">
                <span className="text-[#00E676] shrink-0 mt-0.5">+</span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* New Items */}
      {hasNewItems && (
        <section aria-labelledby="new-items-heading">
          <h2
            id="new-items-heading"
            className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
          >
            🆕 New Items Added
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(update.newItems!)
              .filter(([, arr]) => arr && arr.length > 0)
              .map(([key, arr]) => (
                <div
                  key={key}
                  className="rounded-xl border border-[#252936] bg-[#14161D] p-5"
                >
                  <h3 className={`text-sm font-semibold mb-3 ${itemTypeColors[key]}`}>
                    {itemTypeLabels[key]}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(arr as string[]).map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-[#252936] bg-[#1E212B] px-3 py-1.5 text-sm text-[#BAC4D1]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Back to Updates List */}
      <section>
        <Link
          href="/grow-a-garden/updates"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#00E676] hover:underline"
        >
          ← Back to All Updates
        </Link>
      </section>

      {/* Related Content */}
      <RelatedContent
        category="updates"
        game="garden"
        currentPath={`/grow-a-garden/updates/${update.id}`}
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
