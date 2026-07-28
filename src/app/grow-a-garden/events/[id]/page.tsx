import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { events, getEventById } from "@/data/garden/database/events";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return events.map((event) => ({ id: event.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const event = getEventById(id);
  if (!event) return { title: "Event Not Found" };

  return {
    title: `${event.title} — Grow a Garden Event`,
    description: event.description,
    keywords: [
      event.title,
      "Grow a Garden event",
      `${event.title} rewards`,
      `${event.title} dates`,
      event.type,
      event.status,
      "Grow a Garden events tracker",
    ],
    alternates: { canonical: `/grow-a-garden/events/${id}` },
    openGraph: {
      title: `${event.title} — Grow a Garden Event`,
      description: event.description,
      type: "article",
    },
  };
}

const typeBadge: Record<string, string> = {
  Season: "bg-[#00E676]/20 text-[#00E676]",
  Event: "bg-[#3A86FF]/20 text-[#3A86FF]",
  Limited: "bg-[#FF8C00]/20 text-[#FF8C00]",
  "Admin Abuse": "bg-[#FF3D00]/20 text-[#FF3D00]",
};

const statusBadge: Record<string, string> = {
  Active: "bg-[#00E676]/20 text-[#00E676]",
  Upcoming: "bg-[#FFD700]/20 text-[#FFD700]",
  Ended: "bg-[#768294]/20 text-[#BAC4D1]",
};

export default async function EventDetailPage({ params }: PageProps) {
  const { id } = await params;
  const event = getEventById(id);

  if (!event) notFound();

  const faqs = [
    {
      question: `When did ${event.title} run?`,
      answer: `${event.title} ran from ${event.startDate} to ${event.endDate}. It is currently ${event.status.toLowerCase()} and classified as a ${event.type} event.`,
    },
    {
      question: `What were the rewards for ${event.title}?`,
      answer: `${event.title} offered ${event.rewards.length} rewards: ${event.rewards
        .slice(0, 3)
        .join("; ")}${event.rewards.length > 3 ? "; and more." : "."} See the full rewards list above for details.`,
    },
    {
      question: `Is ${event.title} still active?`,
      answer:
        event.status === "Active"
          ? `Yes — ${event.title} is currently active until ${event.endDate}. Participate now to claim all rewards before the event ends.`
          : event.status === "Upcoming"
          ? `Not yet — ${event.title} is scheduled to start on ${event.startDate}. Mark your calendar so you don't miss the launch.`
          : `No — ${event.title} ended on ${event.endDate}. Its rewards are no longer obtainable, except for items that have returned in subsequent events.`,
    },
    {
      question: `Will ${event.title} return in the future?`,
      answer:
        event.type === "Season"
          ? `Yes — seasonal events typically return annually. ${event.title} follows the ${event.startDate.split(" ")[0] === "December" || event.startDate.split(" ")[0] === "February" ? "Winter" : event.startDate.split(" ")[0] === "September" || event.startDate.split(" ")[0] === "November" ? "Autumn" : event.startDate.split(" ")[0] === "June" || event.startDate.split(" ")[0] === "August" ? "Summer" : "Spring"} seasonal cycle and is expected to return next year with similar rewards but new cosmetics.`
          : event.type === "Limited"
          ? `Possibly — limited-time events like ${event.title} sometimes return by popular demand, but there's no guarantee. If it returns, it will likely have new rewards alongside classics.`
          : event.type === "Admin Abuse"
          ? `No — admin abuse incidents are one-time events. We document them transparently for community reference, but the incident itself is closed.`
          : `${event.type} events like ${event.title} may or may not return. Check the Upcoming Events page for any announcement of a similar event.`,
    },
  ];

  return (
    <ContentLayout
      title={event.title}
      description={event.description}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Events", href: "/grow-a-garden/events" },
        { label: event.title, href: `/grow-a-garden/events/${event.id}` },
      ]}
      accent="garden"
      canonicalPath={`/grow-a-garden/events/${event.id}`}
      updatedAt={event.updatedAt}
    >
      {/* Core Meta */}
      <section aria-labelledby="meta-heading">
        <h2 id="meta-heading" className="sr-only">
          Event metadata
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Type</span>
            <p className="mt-1">
              <span className={`rounded px-2 py-0.5 text-sm font-semibold ${typeBadge[event.type]}`}>
                {event.type}
              </span>
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Status</span>
            <p className="mt-1">
              <span className={`rounded px-2 py-0.5 text-sm font-semibold ${statusBadge[event.status]}`}>
                {event.status}
              </span>
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Start Date</span>
            <p className="mt-1 text-sm font-semibold text-[#BAC4D1]">{event.startDate}</p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">End Date</span>
            <p className="mt-1 text-sm font-semibold text-[#BAC4D1]">{event.endDate}</p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section aria-labelledby="description-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2
          id="description-heading"
          className="font-heading text-[20px] font-semibold text-white mb-3"
        >
          📝 Event Description
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">{event.description}</p>
      </section>

      {/* Rewards */}
      <section aria-labelledby="rewards-heading">
        <h2
          id="rewards-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          🎁 Rewards
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <ul className="space-y-3">
            {event.rewards.map((reward, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#BAC4D1]">
                <span className="text-[#00E676] shrink-0 mt-0.5">🎁</span>
                <span className="leading-relaxed">{reward}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Back to Events List */}
      <section>
        <Link
          href="/grow-a-garden/events"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#00E676] hover:underline"
        >
          ← Back to All Events
        </Link>
      </section>

      {/* Related Content */}
      <RelatedContent
        category="events"
        game="garden"
        currentPath={`/grow-a-garden/events/${event.id}`}
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
