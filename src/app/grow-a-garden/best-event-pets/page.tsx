import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { pets } from "@/data/garden/database/pets";
import { events } from "@/data/garden/database/events";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Best Event Pets in Grow a Garden",
  description:
    "Compare event-exclusive pets in Grow a Garden by recorded tier, multiplier, ability, and source. Use this page as an editorial reference for checking current game details.",
  keywords: [
    "best event pets Grow a Garden",
    "Grow a Garden event pet ranking",
    "Frost Wolf Pup Grow a Garden",
    "Verdant Sprite Grow a Garden",
    "limited time pet Grow a Garden",
    "seasonal event pet Grow a Garden",
  ],
  alternates: { canonical: "/grow-a-garden/best-event-pets" },
  openGraph: {
    title: "Best Event Pets in Grow a Garden",
    description:
      "Compare event-exclusive pets by recorded multipliers, tiers, abilities, and source labels.",
    type: "website",
  },
};

// Event-source pets are the canonical "event pets"
const eventPets = pets
  .filter((p) => p.source === "Seasonal Event")
  .sort((a, b) => b.multiplier - a.multiplier);

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

const faqs = [
  {
    question: "Which event pet is ranked highest here?",
    answer:
      "The first entry in this project’s comparison has the highest recorded multiplier among the event-source entries. The ordering is an editorial reference based on recorded fields, not an official tier list or a recommendation to acquire a specific pet.",
  },
  {
    question: "Are event pets better than regular pets?",
    answer:
      "This page does not make that judgment. Event-source entries differ from always-available entries in the recorded source label, and multipliers should be read alongside tier, ability, and source fields. Confirm current gameplay impact in the game or official announcements.",
  },
  {
    question: "Can I still get event pets after the event ends?",
    answer:
      "Acquisition rules depend on the current game state and whether an event returns. This page records the source label stored for each pet, but it does not track live availability or re-release schedules. Check the Events Tracker and official announcements for current details.",
  },
  {
    question: "Which event pet should I prioritize?",
    answer:
      "This page does not make acquisition or spending recommendations. Review the recorded tier, multiplier, ability, and source fields for each entry, then confirm current event details in the game or official announcements.",
  },
  {
    question: "Do event pets come back in future events?",
    answer:
      "Re-release behavior is not recorded in this project’s pet fields. Some seasonal events recur, but whether a specific pet returns should be confirmed through official announcements rather than inferred from this comparison.",
  },
  {
    question: "Should I trade my event pet?",
    answer:
      "This page does not assign trade values or make transaction recommendations. Whether and how pets can be traded depends on the current game rules, so confirm in the game before planning around trading.",
  },
];

export default function BestEventPetsPage() {
  return (
    <ContentLayout
      title="Best Event Pets in Grow a Garden"
      description="Compare event-exclusive pets by recorded tier, multiplier, ability, and source labels."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Best Event Pets", href: "/grow-a-garden/best-event-pets" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-event-pets"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Pets"
      keywords={[
        "best event pets Grow a Garden",
        "Grow a Garden event pet ranking",
        "Frost Wolf Pup Grow a Garden",
        "Verdant Sprite Grow a Garden",
        "limited time pet Grow a Garden",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - AI search summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          This page lists Grow a Garden pets whose recorded source label is “Seasonal Event,” sorted by recorded multiplier. The table is an editorial reference for tier, multiplier, ability, and source fields. Confirm acquisition rules and current gameplay effects in the game or official announcements.
        </p>
      </section>

      {/* Opening — scope framing */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          This page narrows the{" "}
          <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">Pets Database</Link>{" "}
          to entries whose recorded source is a seasonal event. It keeps the comparison focused on fields that are present in the project records: pet name, tier, multiplier, ability, and source. Because those records do not include an evidence trail for every mechanic, use them as a reference and verify important details in the current game.
        </p>
      </section>

      {/* Event pet comparison table */}
      <section aria-labelledby="ranking-heading">
        <h2 id="ranking-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          🎉 Event Pet Quick Reference
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          {eventPets.length === 0 ? (
            <p className="text-sm text-[#768294]">
              No event-source pets in the project database currently. Check the{" "}
              <Link href="/grow-a-garden/events" className="text-[#00E676] hover:underline">Events Tracker</Link>{" "}
              for upcoming event pet releases.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-[#1E212B] text-[#768294]">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold">Pet</th>
                    <th className="px-4 py-2 text-left font-semibold">Multiplier</th>
                    <th className="px-4 py-2 text-left font-semibold">Tier</th>
                    <th className="px-4 py-2 text-left font-semibold">Ability</th>
                    <th className="px-4 py-2 text-left font-semibold">Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#252936]">
                  {eventPets.map((pet) => (
                    <tr key={pet.id} className="text-[#BAC4D1]">
                      <td className="px-4 py-3">
                        <Link href={`/grow-a-garden/pets/${pet.id}`} className="text-[#00E676] hover:underline font-semibold">
                          {pet.name}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-white font-semibold">{pet.multiplier}×</td>
                      <td className="px-4 py-3">
                        <span className="rounded px-2 py-0.5 text-xs font-bold" style={{ color: tierColors[pet.tier], background: tierColors[pet.tier] + "22" }}>
                          {pet.tier}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs">{pet.abilities[0] ?? "—"}</td>
                      <td className="px-4 py-3 text-xs">{pet.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <p className="mt-3 text-xs text-[#768294]">
            Entries are sorted by the recorded multiplier. This ordering is an internal record comparison, not an official ranking or a statement about trade value.
          </p>
        </div>
      </section>

      {/* Upcoming events — neutral release tracker */}
      <section aria-labelledby="upcoming-heading">
        <h2 id="upcoming-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          📅 Upcoming Event Windows
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-3">
            The Events Tracker records announced events and their listed reward text. Reward wording is reproduced as recorded and does not confirm drop rules, availability, or pet stats.
          </p>
          <ul className="mt-3 space-y-2">
            {events
              .filter((e) => e.status === "Upcoming" && e.rewards.some((r) => /pet/i.test(r)))
              .map((ev) => (
                <li key={ev.id} className="text-sm text-[#BAC4D1]">
                  <Link href={`/grow-a-garden/events/${ev.id}`} className="text-[#00E676] hover:underline">
                    {ev.title}
                  </Link>{" "}
                  <span className="text-xs text-[#768294]">
                    ({ev.startDate} – {ev.endDate})
                  </span>
                  <ul className="mt-1 ml-4 space-y-1">
                    {ev.rewards
                      .filter((r) => /pet/i.test(r))
                      .map((r, i) => (
                        <li key={i} className="text-xs text-[#768294]">
                          • {r}
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/best-event-pets" />
    </ContentLayout>
  );
}
