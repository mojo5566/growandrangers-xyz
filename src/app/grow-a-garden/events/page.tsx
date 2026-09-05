import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import {
  events,
  getActiveEvents,
  getUpcomingEvents,
  getEndedEvents,
} from "@/data/garden/database/events";

export const metadata: Metadata = {
  title: "Grow a Garden Events — Active, Upcoming & Past",
  description:
    "Complete Grow a Garden events tracker — every active, upcoming, and past event with rewards, dates, and details. Browse seasonal events, limited-time celebrations, and admin abuse incidents.",
  keywords: [
    "Grow a Garden events",
    "Grow a Garden active events",
    "Grow a Garden upcoming events",
    "Grow a Garden seasonal events",
    "Grow a Garden limited events",
    "Grow a Garden event rewards",
    "Summer Event 2026",
  ],
  alternates: { canonical: "/grow-a-garden/events" },
  openGraph: {
    title: "Grow a Garden Events — Active, Upcoming & Past",
    description:
      "Complete Grow a Garden events tracker with rewards, dates, and details for every event.",
    type: "website",
  },
};

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

const faqs = [
  {
    question: "What events are currently active in Grow a Garden?",
    answer:
      "As of the September 5, 2026 check, the active event is Cooking Event 2026, introduced by the August 29, 2026 update (1.65.0). Recently ended events include the Harvest Moon Event (August 1–29, 2026), Summer Event 2026, Zen Update Celebration, and Campfire Event Part 3. Check the Active Events section above for the current list and full reward details.",
  },
  {
    question: "What is the next Grow a Garden event?",
    answer:
      "The next upcoming events are Autumn Event 2026 (September–November 2026, returning Neon Pumpkin Seed), Halloween Event 2026 (October 2026, spooky cosmetics and code drops), and Winter Event 2026 (December 2026–February 2027, returning Frost Melon Seed and Frost Wolf Pup pet).",
  },
  {
    question: "Do seasonal events return every year?",
    answer:
      "Yes — Spring, Summer, Autumn, and Winter seasonal events return annually with similar reward structures (+20% harvest bonus, themed seeds, and event-exclusive pets). However, the specific cosmetic items and codes change each year. Some items from past events become exclusive collector's items.",
  },
  {
    question: "What is an Admin Abuse event?",
    answer:
      "An Admin Abuse event is documented when a game moderator uses admin tools to spawn unauthorized items or exploit bugs for personal gain. These incidents are investigated transparently — offending items are rolled back, moderators are removed, and affected players receive compensation. We document them in the events tracker for full transparency.",
  },
  {
    question: "How long do limited-time events usually last?",
    answer:
      "Limited-time events typically last 1–4 weeks. Examples include Valentine's Event (1 week), Lunar New Year (2 weeks), and Halloween (1 month). Seasonal events last longer — usually 2–3 months — to give players ample time to grind the seasonal crops and pets.",
  },
  {
    question: "Where can I find new event codes?",
    answer:
      "Event codes are typically released at the start of an event and sometimes drop throughout the event window (especially during Halloween). Check our Grow a Garden Codes page for the full list of active and expired codes — we update it within hours of any new code drop.",
  },
];

export default function EventsDatabasePage() {
  const activeEvents = getActiveEvents();
  const upcomingEvents = getUpcomingEvents();
  const endedEvents = getEndedEvents();

  return (
    <ContentLayout
      title="Grow a Garden Events"
      description="Complete tracker of every Grow a Garden event — active, upcoming, and past. Browse seasonal events, limited-time celebrations, milestone rewards, and admin abuse incidents with full reward lists and dates."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Events", href: "/grow-a-garden/events" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/events"
      updatedAt="July 19, 2026"
    >
      {/* Quick Stats */}
      <section aria-labelledby="stats-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="stats-heading" className="sr-only">
          Event stats
        </h2>
        <div className="grid gap-3 sm:grid-cols-4">
          <div className="rounded-lg border border-[#252936] bg-[#1E212B] p-3">
            <span className="text-xs text-[#768294]">Total Events</span>
            <p className="mt-1 text-lg font-bold text-[#BAC4D1]">{events.length}</p>
          </div>
          <div className="rounded-lg border border-[#00E676]/30 bg-[#00E676]/5 p-3">
            <span className="text-xs text-[#768294]">Active</span>
            <p className="mt-1 text-lg font-bold text-[#00E676]">{activeEvents.length}</p>
          </div>
          <div className="rounded-lg border border-[#FFD700]/30 bg-[#FFD700]/5 p-3">
            <span className="text-xs text-[#768294]">Upcoming</span>
            <p className="mt-1 text-lg font-bold text-[#FFD700]">{upcomingEvents.length}</p>
          </div>
          <div className="rounded-lg border border-[#252936] bg-[#1E212B] p-3">
            <span className="text-xs text-[#768294]">Ended</span>
            <p className="mt-1 text-lg font-bold text-[#BAC4D1]">{endedEvents.length}</p>
          </div>
        </div>
      </section>

      {/* Active Events */}
      <section aria-labelledby="active-heading">
        <h2
          id="active-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-6"
        >
          🟢 Active Events
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {activeEvents.map((event) => (
            <Link
              key={event.id}
              href={`/grow-a-garden/events/${event.id}`}
              className="group rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5 transition hover:border-[#00E676]"
            >
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className={`rounded px-2 py-0.5 text-xs font-semibold ${typeBadge[event.type]}`}>
                  {event.type}
                </span>
                <span className={`rounded px-2 py-0.5 text-xs font-semibold ${statusBadge[event.status]}`}>
                  {event.status}
                </span>
                <span className="text-xs text-[#768294]">
                  • {event.startDate} – {event.endDate}
                </span>
              </div>
              <span className="text-base font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition block">
                {event.title} →
              </span>
              <p className="mt-2 text-xs leading-relaxed text-[#768294] line-clamp-3">
                {event.description}
              </p>
              <p className="mt-3 text-xs font-semibold text-[#00E676]">
                🎁 {event.rewards.length} rewards
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="harvest-moon-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="harvest-moon-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Harvest Moon Event Guide
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#BAC4D1]">
          Read the separate Harvest Moon guide for the confirmed event flow, Moonbeam mutation, Moon Coins, seven milestones, Lunar Lantern Seed, and official reward details.
        </p>
        <Link href="/grow-a-garden/harvest-moon" className="mt-3 inline-block text-sm font-semibold text-[#00E676] hover:underline">
          Open the Harvest Moon Guide →
        </Link>
      </section>

      {/* Upcoming Events */}
      <section aria-labelledby="upcoming-heading">
        <h2
          id="upcoming-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-6"
        >
          📅 Upcoming Events
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <Link
              key={event.id}
              href={`/grow-a-garden/events/${event.id}`}
              className="group rounded-xl border border-[#FFD700]/30 bg-[#14161D] p-5 transition hover:border-[#FFD700]"
            >
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className={`rounded px-2 py-0.5 text-xs font-semibold ${typeBadge[event.type]}`}>
                  {event.type}
                </span>
                <span className={`rounded px-2 py-0.5 text-xs font-semibold ${statusBadge[event.status]}`}>
                  {event.status}
                </span>
              </div>
              <span className="text-base font-semibold text-[#BAC4D1] group-hover:text-[#FFD700] transition block">
                {event.title} →
              </span>
              <p className="mt-2 text-xs leading-relaxed text-[#768294] line-clamp-2">
                {event.description}
              </p>
              <p className="mt-3 text-xs text-[#FFD700]">
                🗓️ {event.startDate}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Ended Events */}
      <section aria-labelledby="ended-heading">
        <h2
          id="ended-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-6"
        >
          📦 Ended Events
        </h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1fr_100px_90px_140px_60px] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="text-xs font-semibold text-[#768294]">TITLE</span>
            <span className="text-xs font-semibold text-[#768294]">TYPE</span>
            <span className="text-xs font-semibold text-[#768294]">STATUS</span>
            <span className="text-xs font-semibold text-[#768294]">DATES</span>
            <span className="text-xs font-semibold text-[#768294]">REWARDS</span>
          </div>
          {endedEvents.map((event) => (
            <div
              key={event.id}
              className="grid grid-cols-[1fr_100px_90px_140px_60px] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
            >
              <Link
                href={`/grow-a-garden/events/${event.id}`}
                className="text-sm font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
              >
                {event.title}
              </Link>
              <span className={`rounded px-1.5 py-0.5 text-xs font-semibold w-fit ${typeBadge[event.type]}`}>
                {event.type}
              </span>
              <span className={`rounded px-1.5 py-0.5 text-xs font-semibold w-fit ${statusBadge[event.status]}`}>
                {event.status}
              </span>
              <span className="text-xs text-[#768294]">
                {event.startDate} – {event.endDate}
              </span>
              <span className="text-xs text-[#768294]">{event.rewards.length}</span>
            </div>
          ))}
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
