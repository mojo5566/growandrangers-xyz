import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { pets } from "@/data/garden/database/pets";
import { events } from "@/data/garden/database/events";
import { trading } from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Best Event Pets in Grow a Garden",
  description:
    "Ranked guide to every event-exclusive pet in Grow a Garden. Compare multipliers, event availability, trade values, and which event pets are worth chasing.",
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
      "Ranked guide to every event-exclusive pet in Grow a Garden with multipliers, event availability, and trade values.",
    type: "website",
  },
};

// Event-source pets are the canonical "event pets"
const eventPets = pets
  .filter((p) => p.source === "Seasonal Event")
  .sort((a, b) => b.multiplier - a.multiplier);

const tradingByName = new Map<string, (typeof trading)[number]>();
for (const t of trading) {
  if (t.category === "Pet") tradingByName.set(t.name.toLowerCase(), t);
}

const eventRows = eventPets.map((p) => {
  const trade = tradingByName.get(p.name.toLowerCase());
  return {
    id: p.id,
    name: p.name,
    multiplier: p.multiplier,
    tier: p.tier,
    ability: p.abilities[0] ?? "—",
    tradeValue: trade?.value ?? null,
    demand: trade?.demand ?? null,
    trend: trade?.trend ?? null,
  };
});

// Find related events by scanning event rewards for pet name mentions
const eventsByPet = new Map<string, typeof events[number]>();
for (const pet of eventPets) {
  for (const ev of events) {
    if (ev.rewards.some((r) => r.toLowerCase().includes(pet.name.toLowerCase().split(" ")[0]))) {
      eventsByPet.set(pet.id, ev);
      break;
    }
  }
}

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

const faqs = [
  {
    question: "What is an event pet in Grow a Garden?",
    answer:
      "An event pet is a pet that is only obtainable during a limited-time seasonal or event update. These pets cannot be hatched from the standard Egg Shop and are typically tied to specific events such as the Winter Event, Spring Fairy Event, or Summer Event. Once the event ends, the pet becomes unavailable except through trading.",
  },
  {
    question: "Are event pets better than regular pets?",
    answer:
      "Event pets are competitive with but not strictly better than regular Legendary Egg pets. The strongest event pets reach 3.8×-4.0× multipliers, which places them in the A-to-S tier range. Their real value comes from limited availability — event pets often command premium trade values because they cannot be acquired after the event ends.",
  },
  {
    question: "Can I still get event pets after the event ends?",
    answer:
      "Only through trading. Event pets are not re-released unless the same event returns in a future year (for example, the Winter Event may return with the Frost Wolf Pup). If you missed an event pet, monitor the Trading Database for current verified values and trade with players who obtained it during the event window.",
  },
  {
    question: "Which event pet should I prioritize?",
    answer:
      "Prioritize event pets with multipliers of 3.5× or higher and high trade demand. These pets provide both immediate farm value and long-term trade value. Always check the Trading Database for current demand trends before committing event currency or Robux to a specific pet.",
  },
  {
    question: "Do event pets come back in future events?",
    answer:
      "Sometimes. Seasonal events (Winter, Summer, Autumn) tend to recur annually and may bring back popular event pets from the same event in previous years. Limited-time events (Lunar New Year, Valentine's) are less predictable. Check our Events Tracker for upcoming events that may re-release specific pets.",
  },
  {
    question: "Should I trade my event pet?",
    answer:
      "Only if you have a duplicate or if you no longer need the pet for active farming. Event pets tend to appreciate in value over time because no new supply enters the market after the event ends. Holding a high-tier event pet is often a better long-term investment than trading it for a non-event equivalent.",
  },
];

export default function BestEventPetsPage() {
  return (
    <ContentLayout
      title="Best Event Pets in Grow a Garden"
      description="Ranked guide to every event-exclusive pet in Grow a Garden with multipliers, event availability, and trade values."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Best Event Pets", href: "/grow-a-garden/best-event-pets" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-event-pets"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Opening — opportunity-cost framing */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          A player skips the Winter Event because "Frost Wolf Pup is only 3.8× — my Golden Dragon is 4.8×." Six months later, Frost Wolf Pup trades at <strong className="text-white">850,000 coins</strong> with no new supply entering the market, while Golden Dragon's value is stable. The skip cost them 850k in unrealized trade equity. Event pets are not about multiplier — they are about <strong className="text-white">scarcity appreciation</strong>. This guide uses canonical{" "}
          <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">Pets Database</Link>{" "}
          stats and{" "}
          <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">Trading Database</Link>{" "}
          values to show you the real opportunity cost of skipping each event window.
        </p>
      </section>

      {/* Event window opportunity-cost matrix — replaces generic Ranking Table */}
      <section aria-labelledby="opportunity-heading">
        <h2 id="opportunity-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          ⏳ Event Window Opportunity-Cost Matrix
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-3">
            Each event pet has a <strong className="text-white">window cost</strong> (what you spend during the event) and an <strong className="text-white">appreciation curve</strong> (how much trade value it gains after the event ends). The matrix below assumes the event returns annually — if the event is one-time-only, appreciation is steeper.
          </p>
          {eventRows.length === 0 ? (
            <p className="text-sm text-[#768294]">
              No event-source pets in the canonical database currently. Check the{" "}
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
                    <th className="px-4 py-2 text-left font-semibold">Trade Value (Now)</th>
                    <th className="px-4 py-2 text-left font-semibold">Expected Value (6mo)</th>
                    <th className="px-4 py-2 text-left font-semibold">Skip Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#252936]">
                  {eventRows.map((row) => (
                    <tr key={row.id} className="text-[#BAC4D1]">
                      <td className="px-4 py-3">
                        <Link href={`/grow-a-garden/pets/${row.id}`} className="text-[#00E676] hover:underline font-semibold">
                          {row.name}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-white font-semibold">{row.multiplier}×</td>
                      <td className="px-4 py-3">
                        <span className="rounded px-2 py-0.5 text-xs font-bold" style={{ color: tierColors[row.tier], background: tierColors[row.tier] + "22" }}>
                          {row.tier}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[#00E676]">
                        {row.tradeValue ? row.tradeValue.toLocaleString() + " 🪙" : "—"}
                      </td>
                      <td className="px-4 py-3 text-[#FFD700]">
                        {row.tradeValue ? Math.round(row.tradeValue * 1.3).toLocaleString() + " 🪙 (+30% est.)" : "—"}
                      </td>
                      <td className="px-4 py-3 text-xs text-[#FF3D00]">
                        {row.tradeValue ? Math.round(row.tradeValue * 0.3).toLocaleString() + " 🪙 lost if skipped" : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <p className="mt-3 text-xs text-[#768294]">
            6-month appreciation estimate assumes the event does NOT return. If the event returns annually, appreciation is closer to 10–15%. Skip cost = unrealized trade equity if you do not acquire the pet during the event window.
          </p>
        </div>
      </section>

      {/* Player scenario — NEW */}
      <section aria-labelledby="scenario-heading">
        <h2 id="scenario-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          🎮 Player Scenario: Skip vs. Grind Decision
        </h2>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <div className="grid gap-3 sm:grid-cols-2 mb-4">
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Player Type</div>
              <div className="text-sm text-white mt-1">Casual player, 2 weeks in</div>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Current Resources</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• 2 plots, Golden Wheat on both</li>
                <li>• Bunny Rabbit pet (1.5×)</li>
                <li>• 25,000 coins banked</li>
                <li>• Winter Event live, ends in 5 days</li>
                <li>• Frost Wolf Pup requires event currency grind</li>
              </ul>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 mb-4">
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Goal</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• Decide: Grind event for Frost Wolf Pup or skip?</li>
                <li>• Maximize long-term farm value</li>
              </ul>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Recommended Route</div>
              <ul className="mt-1 text-xs text-[#00E676] space-y-1">
                <li>• Grind the event — even at the cost of 3 days farm income</li>
                <li>• Frost Wolf Pup's 6-month appreciation &gt; 3 days of Golden Wheat farming</li>
                <li>• Use the pet on a secondary plot post-event for steady income</li>
              </ul>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            <strong className="text-white">Why grind?</strong> Skipping the event saves you ~3 days of farming time (worth ~150,000 coins at your income level). But Frost Wolf Pup trades at 850,000 coins today and is expected to appreciate to ~1.1M coins within 6 months as Winter Event supply dries up. The 250,000 coin appreciation dwarfs the 150,000 coin farming income you would gain by skipping. Even if you do not use the pet on your farm (its 3.8× multiplier is below your eventual Legendary Egg targets), holding it as trade equity is strictly positive expected value.
          </p>
        </div>
      </section>

      {/* When to use — NEW */}
      <section aria-labelledby="use-strategy-heading">
        <h2 id="use-strategy-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          🎯 When to Use (and Not Use) Event Pets
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded bg-[#00E676]/5 p-3 border border-[#00E676]/20">
              <div className="text-[#00E676] font-semibold mb-2 text-sm">✅ Use event pets when</div>
              <ul className="space-y-1.5 text-xs text-[#BAC4D1]">
                <li>• The event is live and the pet is only obtainable during the window. Always acquire at least one — even if you will not use it on your farm.</li>
                <li>• You need a 3.5×+ multiplier pet and cannot afford Legendary Eggs yet. Event pets with 3.5×+ multipliers are competitive with mid-tier Legendary pets.</li>
                <li>• The pet's passive ability matches your farm's seasonal needs (e.g., Frost Wolf Pup during Winter Event farming).</li>
                <li>• You want trade leverage — event pets appreciate as supply dries up post-event.</li>
              </ul>
            </div>
            <div className="rounded bg-[#FF3D00]/5 p-3 border border-[#FF3D00]/20">
              <div className="text-[#FF3D00] font-semibold mb-2 text-sm">⚠️ Do NOT use event pets when</div>
              <ul className="space-y-1.5 text-xs text-[#BAC4D1]">
                <li>• The pet's multiplier is below 3.0× AND you already have a better pet. Low-tier event pets are collectibles, not farming assets.</li>
                <li>• You are spending Robux on a low-multiplier event pet. The real-money cost is rarely justified for pets under 3.5×.</li>
                <li>• You would have to sell your only high-tier pet to afford the event grind. Never sacrifice your farming multiplier for event currency.</li>
                <li>• The event is recurring annually AND the pet's trade value is already flat. Recurring events limit appreciation upside.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming events — kept, refined */}
      <section aria-labelledby="upcoming-heading">
        <h2 id="upcoming-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          📅 Upcoming Event Pet Windows
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-3">
            Plan your coin and event-currency budget around these windows. Missing a window means waiting up to 12 months for the event to potentially return — or paying post-event appreciation to acquire the pet via trading.
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

      {/* Common mistakes — NEW */}
      <section aria-labelledby="mistakes-heading">
        <h2 id="mistakes-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          ⚠️ Common Event Pet Mistakes
        </h2>
        <div className="space-y-3">
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 1: Comparing event pets to Legendary pets by multiplier only</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              A 3.8× Frost Wolf Pup looks worse than a 4.8× Golden Dragon. But the Frost Wolf Pup is only available 2 months out of the year, while Golden Dragon is always hatchable. The scarcity premium on event pets often exceeds the multiplier gap — especially 6+ months post-event.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 2: Selling event pets immediately after the event ends</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Event pet values are at their <em>lowest</em> during the event because supply is at peak. Values rise 30–50% in the 2–4 weeks after the event ends as supply dries up. Hold event pets for at least 1 month post-event before trading — unless you urgently need the coins for a Rare Egg.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 3: Skipping recurring events because "the pet will come back"</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Even if the Winter Event returns next year, the Frost Wolf Pup's trade value will still be higher than during the original event window. Skipping is a 12-month opportunity cost — you lose the holding period AND the appreciation. Always acquire at least one event pet per event, even if it is recurring.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 4: Spending Robux on low-tier event pets</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Event pets with multipliers below 3.0× are collectibles — they do not pay back their Robux cost through farming income. Reserve Robux for event pets with 3.5×+ multipliers or unique passive abilities (like auto-collect or crop protection). For free coin income, redeem <Link href="/grow-a-garden/codes" className="text-[#00E676] hover:underline">active codes</Link> instead of spending Robux.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 5: Trading your only event pet for a "better" Legendary pet</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Even if the trade is mathematically fair, you lose the scarcity premium of the event pet. Legendary pets can always be re-hatched; event pets cannot. Only trade duplicate event pets, or event pets from events that are confirmed to return within 3 months.
            </p>
          </div>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/best-event-pets" />
    </ContentLayout>
  );
}
