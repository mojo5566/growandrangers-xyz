import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { crops } from "@/data/garden/database/crops";
import { pets } from "@/data/garden/database/pets";
import { mutations } from "@/data/garden/database/mutations";
import { events, getActiveEvents } from "@/data/garden/database/events";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "How to Level Fast in Grow a Garden",
  description:
    "Fastest XP and leveling methods in Grow a Garden: best crops for XP, mutation XP bonuses, pet multipliers, event stacking, and an optimized daily routine to reach max level quickly.",
  keywords: [
    "how to level fast Grow a Garden",
    "Grow a Garden XP guide",
    "Grow a Garden level up fast",
    "Grow a Garden fastest XP",
    "Grow a Garden max level",
    "Grow a Garden leveling strategy",
  ],
  alternates: { canonical: "/grow-a-garden/how-to-level-fast" },
  openGraph: {
    title: "How to Level Fast in Grow a Garden",
    description:
      "Fastest XP methods: best crops, mutation bonuses, pet multipliers, event stacking, and an optimized daily routine.",
    type: "website",
  },
};

// Fast-growth crops for maximum harvest cycles per hour (most XP comes from harvesting)
const fastCrops = [...crops]
  .filter((c) => c.growthSeconds <= 240)
  .sort((a, b) => b.coinsPerMinute - a.coinsPerMinute)
  .slice(0, 6);

// Top pets by multiplier (XP scales with pet multiplier in Grow a Garden)
const topPets = [...pets].sort((a, b) => b.multiplier - a.multiplier).slice(0, 5);

// Top mutations for XP stacking
const topMutations = [...mutations].sort((a, b) => b.multiplier - a.multiplier).slice(0, 4);

// Active events that may boost XP
const activeEvents = getActiveEvents();

// All events list for event-stacking section
const allEvents = events.slice(0, 5);

const faqs = [
  {
    question: "What is the fastest way to level up in Grow a Garden?",
    answer:
      "Stack three multipliers on a fast-growth crop: high CPM crop (Golden Wheat) × top mutation (Prismatic Rainbow 6.0×) × top pet (Golden Phoenix Chick 5.0×). Harvest every 3 minutes on 4 plots. This combination yields up to 30× base XP per cycle and can push you from level 1 to 50 in under 8 hours of active farming.",
  },
  {
    question: "Do pets increase XP gain in Grow a Garden?",
    answer:
      "Yes. Pet multipliers apply to both coin value and XP from each harvest. A 5.0× pet like Golden Phoenix Chick multiplies your XP per harvest by 5×. Stack this with mutations and you can reach 30× base XP per cycle, dramatically accelerating leveling. Always equip your highest-multiplier pet while farming.",
  },
  {
    question: "Which crops give the most XP in Grow a Garden?",
    answer:
      "Fast-growth crops with high CPM give the most XP per hour because XP scales with harvest frequency, not crop tier. Golden Wheat (3-minute growth, 480 coins) is the gold standard for synchronized 4-plot harvesting. Berry and Carrot are strong early-game alternatives while you save up. Avoid slow-growth crops like Moonflower — their high per-harvest XP is undercut by long cycle times that throttle your harvests per hour.",
  },
  {
    question: "How long does it take to reach max level in Grow a Garden?",
    answer:
      "With optimal play (4 plots, S-Tier pet, S-Tier mutation, active events): 6-10 hours of focused farming. With mid-tier gear (B-Tier pet, A-Tier mutation): 20-30 hours. Without pets or mutations: 50+ hours. The single biggest acceleration comes from acquiring a top pet — even a B-Tier pet cuts leveling time by more than half.",
  },
  {
    question: "Do events increase XP gain in Grow a Garden?",
    answer:
      "Yes. Seasonal events like Summer Harvest and Winter Festival add XP bonuses ranging from 1.5× to 2.0× for the duration of the event, and these stack multiplicatively with your pet and mutation multipliers for maximum effect. A 2.0× event on top of a 5.0× pet and 6.0× mutation turns a 30× cycle into a 60× cycle. Always check our Events Database for active bonuses before starting a farming session.",
  },
  {
    question: "Is it better to farm one plot actively or multiple plots passively?",
    answer:
      "Active farming on 4 plots is dramatically faster than passive farming on 1. Each additional plot multiplies your harvest cycles per hour. Four plots harvested every 3 minutes equals 80 harvests per hour versus 20 on a single plot — a 4× XP difference. Expand to 4 plots as your first major investment before any other upgrade.",
  },
];

export default function HowToLevelFastPage() {
  return (
    <ContentLayout
      title="How to Level Fast in Grow a Garden"
      description="Fastest XP and leveling methods: best crops for XP, mutation XP bonuses, pet multipliers, event stacking, and an optimized daily routine to reach max level quickly."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "How to Level Fast", href: "/grow-a-garden/how-to-level-fast" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/how-to-level-fast"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Beginner Guide"
      keywords={[
        "how to level fast Grow a Garden",
        "Grow a Garden XP guide",
        "Grow a Garden level up fast",
        "Grow a Garden fastest XP",
        "Grow a Garden max level",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - AI search summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          Stack three multipliers on Golden Wheat (3-minute growth, 480 coins): a top mutation like
          Prismatic Rainbow (6.0×) and a top pet like Golden Phoenix Chick (5.0×). Harvesting 4 plots
          every 3 minutes yields up to 30× base XP per cycle, pushing you from level 1 to 50 in
          under 8 hours of active farming. Expand to 4 plots before any other upgrade — it
          quadruples your harvest cycles per hour.
        </p>
      </section>

      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          Leveling in Grow a Garden rewards the same activities that make you coins — harvesting
          crops, hatching pets, and triggering mutations. The secret to fast leveling is not
          grinding longer; it is stacking the right multipliers on the right crops. This guide
          walks through the optimal progression path using data from our{" "}
          <Link href="/grow-a-garden/crops" className="text-[#00E676] hover:underline">
            Crops Database
          </Link>{" "}
          and{" "}
          <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">
            Pets Database
          </Link>
          .
        </p>
      </section>

      <section aria-labelledby="xp-mechanics-heading">
        <h2
          id="xp-mechanics-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🧠 How XP Works in Grow a Garden
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-3">
            XP in Grow a Garden is awarded per harvest and scales with three multipliers:
          </p>
          <ul className="space-y-2 text-sm text-[#BAC4D1]">
            <li>
              <strong className="text-white">Crop base value</strong> — higher-coin crops award
              more XP per harvest.
            </li>
            <li>
              <strong className="text-white">Mutation multiplier</strong> — mutated crops award
              multiplied XP. A 6.0× Prismatic Rainbow crop awards 6× the base XP.
            </li>
            <li>
              <strong className="text-white">Pet multiplier</strong> — your equipped pet&apos;s
              multiplier applies to XP. A 5.0× pet multiplies XP by 5×.
            </li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-[#768294]">
            Total XP per harvest = crop XP × mutation multiplier × pet multiplier. All three
            stack multiplicatively, so even small upgrades compound into large XP gains.
          </p>
        </div>
      </section>

      <section aria-labelledby="best-crops-heading">
        <h2
          id="best-crops-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🌾 Best Crops for Fast XP
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[#252936] bg-[#14161D]">
          <table className="min-w-full text-sm">
            <thead className="bg-[#1E212B] text-[#768294]">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Crop</th>
                <th className="px-4 py-3 text-left font-semibold">Growth</th>
                <th className="px-4 py-3 text-left font-semibold">Coins</th>
                <th className="px-4 py-3 text-left font-semibold">CPM</th>
                <th className="px-4 py-3 text-left font-semibold">Tier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#252936]">
              {fastCrops.map((c) => (
                <tr key={c.id} className="hover:bg-[#1E212B]">
                  <td className="px-4 py-3">
                    <Link
                      href={`/grow-a-garden/crops/${c.id}`}
                      className="text-[#00E676] hover:underline"
                    >
                      {c.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-[#BAC4D1]">{c.growthTime}</td>
                  <td className="px-4 py-3 text-[#BAC4D1]">{c.coins} 🪙</td>
                  <td className="px-4 py-3 text-[#00E676]">{c.coinsPerMinute}</td>
                  <td className="px-4 py-3 text-[#BAC4D1]">{c.tier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          Crops sourced from the canonical{" "}
          <Link href="/grow-a-garden/crops" className="text-[#00E676] hover:underline">
            Crops Database
          </Link>
          . Last reviewed {CONTENT_UPDATED_AT}.
        </p>
      </section>

      <section aria-labelledby="pet-multipliers-heading">
        <h2
          id="pet-multipliers-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🐾 Pet Multipliers for XP
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topPets.map((p) => (
            <div
              key={p.id}
              className="rounded-xl border border-[#252936] bg-[#14161D] p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <Link
                  href={`/grow-a-garden/pets/${p.id}`}
                  className="text-sm font-semibold text-[#00E676] hover:underline"
                >
                  {p.name}
                </Link>
                <span
                  className={`text-xs px-2 py-0.5 rounded ${
                    p.tier === "S"
                      ? "bg-red-500/20 text-red-400"
                      : p.tier === "A"
                        ? "bg-orange-500/20 text-orange-400"
                        : p.tier === "B"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {p.tier}
                </span>
              </div>
              <p className="text-xs text-[#768294]">
                {p.multiplier.toFixed(1)}× XP multiplier
              </p>
              <p className="mt-1 text-xs text-[#768294]">Source: {p.source}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          Full pet list in the{" "}
          <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">
            Pets Database
          </Link>
          .
        </p>
      </section>

      <section aria-labelledby="mutation-stacking-heading">
        <h2
          id="mutation-stacking-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ✨ Mutation XP Stacking
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-4">
            Mutations multiply your XP per harvest. The rarer the mutation, the higher the
            multiplier. Top mutations from our{" "}
            <Link
              href="/grow-a-garden/mutations"
              className="text-[#00E676] hover:underline"
            >
              Mutations Database
            </Link>
            :
          </p>
          <ul className="space-y-2">
            {topMutations.map((m) => (
              <li
                key={m.id}
                className="flex items-center justify-between rounded-lg bg-[#1E212B] px-3 py-2"
              >
                <Link
                  href={`/grow-a-garden/mutations/${m.id}`}
                  className="text-sm text-[#00E676] hover:underline"
                >
                  {m.name}
                </Link>
                <span className="text-sm font-semibold text-[#00E676]">
                  {m.multiplier.toFixed(1)}× XP
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-[#768294]">
            Pro tip: Use Lucky Clover Seeds (+25% mutation roll) from our{" "}
            <Link href="/grow-a-garden/seeds" className="text-[#00E676] hover:underline">
              Seeds Database
            </Link>{" "}
            to increase mutation frequency during long farming sessions.
          </p>
        </div>
      </section>

      <section aria-labelledby="events-heading">
        <h2
          id="events-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🎉 Event Stacking for Maximum XP
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          {activeEvents.length > 0 ? (
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-[#00E676] mb-2">
                Currently Active Events
              </h3>
              <ul className="space-y-1.5">
                {activeEvents.map((e) => (
                  <li key={e.id} className="text-xs text-[#BAC4D1]">
                    <Link
                      href={`/grow-a-garden/events/${e.id}`}
                      className="text-[#00E676] hover:underline"
                    >
                      {e.title}
                    </Link>{" "}
                    — check event page for XP bonus details
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="mb-4 text-xs text-[#768294]">
              No events currently active. Plan your leveling pushes around upcoming events for
              maximum XP gain.
            </p>
          )}
          <h3 className="text-sm font-semibold text-[#BAC4D1] mb-2">Upcoming & Recent Events</h3>
          <ul className="space-y-1.5">
            {allEvents.map((e) => (
              <li key={e.id} className="text-xs text-[#BAC4D1]">
                <Link
                  href={`/grow-a-garden/events/${e.id}`}
                  className="text-[#00E676] hover:underline"
                >
                  {e.title}
                </Link>{" "}
                — {e.type}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-[#768294]">
            See the full{" "}
            <Link href="/grow-a-garden/events" className="text-[#00E676] hover:underline">
              Events Database
            </Link>{" "}
            for all scheduled events.
          </p>
        </div>
      </section>

      <section aria-labelledby="routine-heading">
        <h2
          id="routine-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⏱️ Optimized Daily Leveling Routine
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <ol className="space-y-3 text-sm text-[#BAC4D1]">
            <li>
              <strong className="text-white">1. Redeem active codes (2 min).</strong> Check our{" "}
              <Link href="/grow-a-garden/codes" className="text-[#00E676] hover:underline">
                Codes Database
              </Link>{" "}
              for free XP boosts and bonus seeds.
            </li>
            <li>
              <strong className="text-white">2. Equip your highest-multiplier pet.</strong> Even a
              B-Tier pet at 2.0× doubles your XP gain.
            </li>
            <li>
              <strong className="text-white">3. Plant fast-growth crops on all 4 plots.</strong>{" "}
              Golden Wheat (3 min) is optimal — synchronize all plots to harvest together.
            </li>
            <li>
              <strong className="text-white">4. Apply Lucky Clover Seeds for mutation rolls.</strong>{" "}
              Mutations multiply XP — even a 2× mutation doubles your leveling speed.
            </li>
            <li>
              <strong className="text-white">5. Harvest every 3 minutes for 1 hour.</strong> 20
              harvest cycles × 4 plots = 80 harvests per hour.
            </li>
            <li>
              <strong className="text-white">6. Reinvest coins into plot expansion.</strong>{" "}
              Priority: 4 plots → B-Tier pet → mutation seeds → S-Tier pet.
            </li>
            <li>
              <strong className="text-white">7. Time sessions around events.</strong> 2× XP
              events halve your leveling time — save your longest sessions for event windows.
            </li>
          </ol>
        </div>
      </section>

      <section aria-labelledby="milestones-heading">
        <h2
          id="milestones-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🎯 Leveling Milestones
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[#252936] bg-[#14161D]">
          <table className="min-w-full text-sm">
            <thead className="bg-[#1E212B] text-[#768294]">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Level Range</th>
                <th className="px-4 py-3 text-left font-semibold">Focus</th>
                <th className="px-4 py-3 text-left font-semibold">Expected Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#252936]">
              <tr>
                <td className="px-4 py-3 text-[#BAC4D1]">1 → 10</td>
                <td className="px-4 py-3 text-[#BAC4D1]">
                  Free Wheat Seeds, first Basic Egg hatch
                </td>
                <td className="px-4 py-3 text-[#00E676]">30-45 min</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-[#BAC4D1]">10 → 25</td>
                <td className="px-4 py-3 text-[#BAC4D1]">
                  4 plots, B-Tier pet, A-Tier mutation seeds
                </td>
                <td className="px-4 py-3 text-[#00E676]">2-3 hours</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-[#BAC4D1]">25 → 40</td>
                <td className="px-4 py-3 text-[#BAC4D1]">
                  A-Tier pet, S-Tier mutation farming
                </td>
                <td className="px-4 py-3 text-[#00E676]">3-5 hours</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-[#BAC4D1]">40 → 50</td>
                <td className="px-4 py-3 text-[#BAC4D1]">
                  S-Tier pet, Prismatic Rainbow mutation stacking
                </td>
                <td className="px-4 py-3 text-[#00E676]">2-4 hours</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          Times assume active farming with optimal multipliers. Casual play will take 2-3× longer.
        </p>
      </section>

      <section aria-labelledby="tips-heading">
        <h2
          id="tips-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          💡 Golden Leveling Rules
        </h2>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">✅</span>
              Always equip your highest-multiplier pet before farming.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">✅</span>
              Synchronize all 4 plots to the same crop and growth time for batch harvesting.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">✅</span>
              Use Lucky Clover Seeds to boost mutation frequency.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">✅</span>
              Time long sessions around 2× XP events from our Events Database.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">✅</span>
              Reinvest coins into plot expansion before any cosmetic purchase.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#FF3D00] shrink-0 mt-0.5">⚠️</span>
              Avoid slow-growth crops (Moonflower, Dragon Fruit) during leveling pushes — long
              cycles kill XP per hour.
            </li>
          </ul>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/how-to-level-fast" />
    </ContentLayout>
  );
}
