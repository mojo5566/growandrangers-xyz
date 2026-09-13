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
      answer: `The dataset records ${event.title} with a start date of ${event.startDate} and an end date of ${event.endDate}, with a recorded status of ${event.status.toLowerCase()} and an event type of ${event.type}. These are recorded project references — dates and availability can change in the game, so check the in-game event panel for live details.`,
    },
    {
      question: `What rewards are recorded for ${event.title}?`,
      answer: `The dataset records ${event.rewards.length} rewards for ${event.title}, including ${event.rewards
        .slice(0, 3)
        .join("; ")}${event.rewards.length > 3 ? "; and more." : "."} The full recorded rewards list is shown above. Recorded rewards are reference fields and do not establish guaranteed outcomes.`,
    },
    {
      question: `Is ${event.title} still active?`,
      answer:
        event.status === "Active"
          ? `The dataset records this event's status as Active, with an end date of ${event.endDate}. A recorded status may not reflect live availability for every player — check the in-game event panel and current version information to confirm whether the event is still running and what it currently requires.`
          : event.status === "Upcoming"
          ? `The dataset records a scheduled start date of ${event.startDate}. Recorded schedules can change, so check the in-game event panel and official announcements for the live schedule.`
          : `The dataset records this event as Ended on ${event.endDate}. The recorded rewards are historical reference fields; whether specific items return in later events is not established by this page.`,
    },
    {
      question: `Will ${event.title} return in the future?`,
      answer: `This dataset does not record any future return schedule for ${event.title}. Whether a ${event.type.toLowerCase()} event returns is decided in the game, so check the in-game event panel, the game's official announcements, and current patch notes for any news. This page only records the event fields shown above.`,
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

      {/* How to read this event record */}
      <section aria-labelledby="read-heading">
        <h2
          id="read-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          📖 How to read this event record
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm text-[#BAC4D1] leading-relaxed mb-3">
            This page records the event fields currently stored for {event.title} in the project dataset. The status, dates, rewards, and description shown here are recorded project references and may not represent live availability for every player. The listed fields do not by themselves establish official rules, live event status, drop probabilities, or guaranteed rewards — check the in-game event panel and current version information for live requirements and availability.
          </p>
          <ul className="space-y-1.5 text-sm text-[#BAC4D1]">
            <li>▸ Recorded type: {event.type}</li>
            <li>▸ Recorded status: {event.status}</li>
            <li>▸ Recorded start date: {event.startDate}</li>
            <li>▸ Recorded end date: {event.endDate}</li>
            <li>▸ Recorded rewards: {event.rewards.length} entries</li>
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
