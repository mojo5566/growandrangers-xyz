import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import {
  updates,
  getCurrentUpdates,
  getArchivedUpdates,
} from "@/data/garden/database/updates";

export const metadata: Metadata = {
  title: "Grow a Garden Updates — Patch Notes & Events",
  description:
    "Complete Grow a Garden update tracker — every patch, event, and content drop with new items, features, and version history. Browse current and archived updates.",
  keywords: [
    "Grow a Garden updates",
    "Grow a Garden patch notes",
    "Grow a Garden events",
    "Grow a Garden version history",
    "Zen Update",
    "Grow a Garden changelog",
  ],
  alternates: { canonical: "/grow-a-garden/updates" },
  openGraph: {
    title: "Grow a Garden Updates — Patch Notes & Events",
    description:
      "Complete Grow a Garden update tracker — every patch, event, and content drop with new items and features.",
    type: "website",
  },
};

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

const faqs = [
  {
    question: "What is the latest Grow a Garden update?",
    answer:
      "The latest major update is the Zen Update (v2.4.0, June 2026), which introduced Zen-themed decorations, three new active codes (RDCAward, BEANORLEAVE10, torigate), 19 new crops, 8 new mutations, and 8 new pets including Golden Dragon and Prismatic Rainbow. See the Zen Update page for full patch notes.",
  },
  {
    question: "How often does Grow a Garden get updates?",
    answer:
      "Grow a Garden typically receives one major content update per month, with smaller bug-fix patches in between. Seasonal events (Spring, Summer, Autumn, Winter) run quarterly and introduce limited-time seeds, pets, and cosmetic decorations. Admin abuse incidents are addressed immediately with hotfix patches.",
  },
  {
    question: "Are expired event items ever coming back?",
    answer:
      "Some seasonal event items return annually — for example, Frost Melon Seed returns every Winter, and Neon Pumpkin Seed returns every Autumn. However, code-redeemable cosmetics (like the Bee Hat from HONEYBEE2025) are typically one-time exclusives and do not return once the code expires.",
  },
  {
    question: "What is an Admin Abuse incident?",
    answer:
      "An Admin Abuse incident occurs when a game moderator uses admin tools to spawn unauthorized items, manipulate the economy, or grant unfair advantages. These incidents are investigated, offending items are rolled back, and the moderators involved are removed. We document these incidents transparently in the update tracker.",
  },
  {
    question: "Where can I find new Grow a Garden codes?",
    answer:
      "New codes are typically released alongside major updates and events. The Zen Update introduced RDCAward, BEANORLEAVE10, and torigate. Check our Grow a Garden Codes page for the full list of active and expired codes — we verify and update it within hours of any new code drop.",
  },
];

export default function UpdatesDatabasePage() {
  const currentUpdates = getCurrentUpdates();
  const archivedUpdates = getArchivedUpdates();

  return (
    <ContentLayout
      title="Grow a Garden Updates"
      description="Complete tracker of every Grow a Garden update, patch, event, and incident — with new items, features, and version history. Browse current and archived updates."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Updates", href: "/grow-a-garden/updates" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/updates"
      updatedAt="July 19, 2026"
    >
      {/* Current Updates */}
      <section aria-labelledby="current-heading">
        <h2
          id="current-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-6"
        >
          🟢 Current Updates
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {currentUpdates.map((update) => (
            <Link
              key={update.id}
              href={`/grow-a-garden/updates/${update.id}`}
              className="group rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5 transition hover:border-[#00E676]"
            >
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className={`rounded px-2 py-0.5 text-xs font-semibold ${typeBadge[update.type]}`}>
                  {update.type}
                </span>
                <span className={`rounded px-2 py-0.5 text-xs font-semibold ${statusBadge[update.status]}`}>
                  {update.status}
                </span>
                {update.version && (
                  <span className="code-text text-xs text-[#768294]">v{update.version}</span>
                )}
                <span className="text-xs text-[#768294]">• {update.date}</span>
              </div>
              <span className="text-base font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition block">
                {update.title} →
              </span>
              <p className="mt-2 text-xs leading-relaxed text-[#768294] line-clamp-3">
                {update.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Archived Updates */}
      <section aria-labelledby="archived-heading">
        <h2
          id="archived-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-6"
        >
          📦 Archived Updates
        </h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1fr_90px_80px_90px_60px] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="text-xs font-semibold text-[#768294]">TITLE</span>
            <span className="text-xs font-semibold text-[#768294]">TYPE</span>
            <span className="text-xs font-semibold text-[#768294]">VERSION</span>
            <span className="text-xs font-semibold text-[#768294]">DATE</span>
            <span className="text-xs font-semibold text-[#768294]">STATUS</span>
          </div>
          {archivedUpdates.map((update) => (
            <div
              key={update.id}
              className="grid grid-cols-[1fr_90px_80px_90px_60px] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
            >
              <Link
                href={`/grow-a-garden/updates/${update.id}`}
                className="text-sm font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
              >
                {update.title}
              </Link>
              <span className={`rounded px-1.5 py-0.5 text-xs font-semibold w-fit ${typeBadge[update.type]}`}>
                {update.type}
              </span>
              <span className="text-xs text-[#768294]">
                {update.version ? `v${update.version}` : "—"}
              </span>
              <span className="text-xs text-[#768294]">{update.date}</span>
              <span className={`rounded px-1.5 py-0.5 text-xs font-semibold ${statusBadge[update.status]}`}>
                {update.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section aria-labelledby="stats-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2
          id="stats-heading"
          className="font-heading text-[20px] font-semibold text-white mb-4"
        >
          📊 Update History at a Glance
        </h2>
        <div className="grid gap-3 sm:grid-cols-4">
          <div className="rounded-lg border border-[#252936] bg-[#1E212B] p-3">
            <span className="text-xs text-[#768294]">Total Updates</span>
            <p className="mt-1 text-lg font-bold text-[#BAC4D1]">{updates.length}</p>
          </div>
          <div className="rounded-lg border border-[#252936] bg-[#1E212B] p-3">
            <span className="text-xs text-[#768294]">Current</span>
            <p className="mt-1 text-lg font-bold text-[#00E676]">{currentUpdates.length}</p>
          </div>
          <div className="rounded-lg border border-[#252936] bg-[#1E212B] p-3">
            <span className="text-xs text-[#768294]">Archived</span>
            <p className="mt-1 text-lg font-bold text-[#BAC4D1]">{archivedUpdates.length}</p>
          </div>
          <div className="rounded-lg border border-[#252936] bg-[#1E212B] p-3">
            <span className="text-xs text-[#768294]">Latest</span>
            <p className="mt-1 text-sm font-bold text-[#00E676]">{updates[0].date}</p>
          </div>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
