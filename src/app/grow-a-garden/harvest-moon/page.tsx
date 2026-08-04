import type { Metadata } from "next";
import Link from "next/link";
import ContentFAQ from "@/components/ContentFAQ";
import ContentLayout from "@/components/ContentLayout";

export const metadata: Metadata = {
  title: "Grow a Garden Harvest Moon Guide — Moon Coins & Lunar Lantern",
  description:
    "Learn how the Harvest Moon event works in Grow a Garden, including Moonbeam Fruit, Moon Coins, seven milestones, Lunar Lantern, and confirmed rewards.",
  keywords: [
    "Grow a Garden Harvest Moon event",
    "Grow a Garden Moon Coins",
    "Grow a Garden Moonbeam mutation",
    "Grow a Garden Lunar Lantern Seed",
    "Grow a Garden Moon Egg",
    "Grow a Garden Moon Staff",
  ],
  alternates: { canonical: "/grow-a-garden/harvest-moon" },
  openGraph: {
    title: "Grow a Garden Harvest Moon Guide — Moon Coins & Lunar Lantern",
    description:
      "Learn how the Harvest Moon event works in Grow a Garden, including Moonbeam Fruit, Moon Coins, seven milestones, Lunar Lantern, and confirmed rewards.",
    type: "article",
  },
};

const officialSources = [
  {
    label: "Grow a Garden official Harvest Moon announcement on X",
    href: "https://x.com/GrowaGardenRblx/status/2083652567951626698",
  },
  {
    label: "Grow a Garden official Roblox page",
    href: "https://www.roblox.com/games/126884695634066/Grow-a-Garden",
  },
];

const faqs = [
  {
    question: "How do I start the Harvest Moon event in Grow a Garden?",
    answer:
      "Place the required fruits on the pillars around the Harvest Moon platform. When all required fruits are placed, the Harvest Moon weather is summoned.",
  },
  {
    question: "How long does Harvest Moon weather last?",
    answer:
      "The official announcement says that Harvest Moon weather lasts for 10 minutes.",
  },
  {
    question: "How do I get Moon Coins?",
    answer:
      "During Harvest Moon weather, fruits can obtain the Moonbeam mutation. Sell Moonbeam-mutated fruit at the sell stand to receive Moon Coins.",
  },
  {
    question: "How do I unlock the Lunar Lantern Seed?",
    answer:
      "Moon Coin Madness has seven milestones. The official announcement says that reaching all seven milestones unlocks the Lunar Lantern Seed.",
  },
  {
    question: "Are the Harvest Moon drop rates and shop prices known?",
    answer:
      "No reliable official values for drop rates, shop prices, reward quantities, or hidden pet and mutation mechanics were included in the announcement. Check the current game client before relying on those details.",
  },
];

export default function HarvestMoonPage() {
  return (
    <ContentLayout
      title="Grow a Garden Harvest Moon Guide — Moon Coins & Lunar Lantern"
      description="Learn how the Harvest Moon event works in Grow a Garden, including Moonbeam Fruit, Moon Coins, seven milestones, Lunar Lantern, and confirmed rewards."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Harvest Moon", href: "/grow-a-garden/harvest-moon" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/harvest-moon"
      articleSection="Events"
      keywords={[
        "Grow a Garden Harvest Moon event",
        "Grow a Garden Moon Coins",
        "Grow a Garden Lunar Lantern Seed",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Harvest Moon event" }]}
    >
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="mb-3 font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Quick Answer
        </h2>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          Harvest Moon is a live Grow a Garden event built around a shared weather trigger. Place the required fruits on the surrounding pillars, wait for Harvest Moon weather, collect Moonbeam-mutated fruit, and sell it for Moon Coins. Moon Coin Madness has seven milestones, and completing all seven unlocks the Lunar Lantern Seed.
        </p>
      </section>

      <section aria-labelledby="what-is-heading">
        <h2 id="what-is-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          What Is the Harvest Moon Event?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">
          Harvest Moon is an event with a team-based trigger, temporary weather, a mutation objective, and a Moon Coin reward track. The official announcement confirms the event is for GAG 1 and is available in the original Grow a Garden experience. Its exact end date is not stated in the official material reviewed for this guide.
        </p>
      </section>

      <section aria-labelledby="start-heading">
        <h2 id="start-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          How to Start Harvest Moon
        </h2>
        <ol className="mt-4 space-y-3 text-sm leading-relaxed text-[#BAC4D1]">
          <li className="rounded-xl border border-[#252936] bg-[#14161D] p-4"><strong className="text-white">1. Find the event platform.</strong> Look for the pillars surrounding the Harvest Moon platform.</li>
          <li className="rounded-xl border border-[#252936] bg-[#14161D] p-4"><strong className="text-white">2. Place the required fruits.</strong> The official announcement does not list the fruit requirements, so check the current in-game prompts.</li>
          <li className="rounded-xl border border-[#252936] bg-[#14161D] p-4"><strong className="text-white">3. Complete the set.</strong> When all required fruits are placed, Harvest Moon weather is summoned.</li>
        </ol>
      </section>

      <section aria-labelledby="weather-heading">
        <h2 id="weather-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          How Harvest Moon Weather Works
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
            <h3 className="font-semibold text-white">Temporary event weather</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#BAC4D1]">The official announcement says the weather lasts for 10 minutes after the trigger is completed.</p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
            <h3 className="font-semibold text-white">Work together</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#BAC4D1]">Players can team up to complete the event progress faster. The announcement does not specify a required team size.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="moonbeam-heading">
        <h2 id="moonbeam-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          How to Get Moonbeam Fruit
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">
          During Harvest Moon weather, your fruits can obtain the Moonbeam mutation. The official post does not provide a chance, multiplier, or guaranteed-fruit rule, so treat those details as needs in-game verification. For the wider mutation reference, see the <Link href="/grow-a-garden/mutations" className="font-semibold text-[#00E676] hover:underline">Mutations Database</Link>.
        </p>
      </section>

      <section aria-labelledby="coins-heading">
        <h2 id="coins-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          How to Earn Moon Coins
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">
          Take Moonbeam-mutated fruit to the sell stand during the event and exchange it for Moon Coins. The announcement confirms the exchange, but not the amount awarded per fruit or the shop prices. Those values should be checked in the live game before spending or planning a farming route.
        </p>
      </section>

      <section aria-labelledby="milestones-heading">
        <h2 id="milestones-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Moon Coin Madness and the Seven Milestones
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">
          Moon Coin Madness is the event&apos;s weekly Moon Coin progression track. It contains seven milestones. Each milestone awards a reward when its requirement is met, but the official announcement does not publish the exact thresholds, reward list, or reward quantities. Use the in-game track as the source of truth for those values.
        </p>
        <div className="mt-4 rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
          <p className="text-sm font-semibold leading-relaxed text-white">Complete all seven milestones to unlock the Lunar Lantern Seed.</p>
        </div>
      </section>

      <section aria-labelledby="plants-heading">
        <h2 id="plants-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Confirmed Plants and Seeds
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">The official announcement lists these new plants: Moongrain Meadow, Lunar Lantern, Astral Grape, Fennel, Crescent Reed, and Lunar Lily. It also specifically names the Lunar Lantern Seed as the reward for completing all seven milestones. No prices, tiers, growth times, or values are confirmed here.</p>
        <Link href="/grow-a-garden/seeds" className="mt-4 inline-block text-sm font-semibold text-[#00E676] hover:underline">Browse the Seeds Database →</Link>
      </section>

      <section aria-labelledby="pets-heading">
        <h2 id="pets-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Confirmed Pets and Eggs
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">The official post names Moon Dragon and Night Horse and says that at least two additional Harvest Moon pets exist, without naming them. It also introduces a Moon Egg with four possible Harvest Moon pets inside. Drop rates and pet abilities are not confirmed in the source.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/grow-a-garden/pets" className="rounded-lg border border-[#252936] px-4 py-2 text-sm font-semibold text-[#BAC4D1] transition hover:border-[#00E676] hover:text-[#00E676]">Pets Database →</Link>
          <Link href="/grow-a-garden/eggs" className="rounded-lg border border-[#252936] px-4 py-2 text-sm font-semibold text-[#BAC4D1] transition hover:border-[#00E676] hover:text-[#00E676]">Eggs Database →</Link>
        </div>
      </section>

      <section aria-labelledby="items-heading">
        <h2 id="items-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Moon Egg, Moon Crate and Moon Staff
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4"><h3 className="font-semibold text-white">Moon Egg</h3><p className="mt-2 text-sm leading-relaxed text-[#BAC4D1]">Contains four possible Harvest Moon pets, according to the official announcement.</p></div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4"><h3 className="font-semibold text-white">Moon Crate</h3><p className="mt-2 text-sm leading-relaxed text-[#BAC4D1]">Contains six possible Harvest Moon cosmetics, according to the official announcement.</p></div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4"><h3 className="font-semibold text-white">Moon Staff</h3><p className="mt-2 text-sm leading-relaxed text-[#BAC4D1]">The official description says it helps attract Moonbeam mutations during the event.</p></div>
        </div>
      </section>

      <section aria-labelledby="fixes-heading">
        <h2 id="fixes-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Quality-of-Life Changes and Fixes
        </h2>
        <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-[#BAC4D1] sm:grid-cols-2">
          <li className="rounded-xl border border-[#252936] bg-[#14161D] p-4">Pet loadouts should load when switching from the Bee Garden.</li>
          <li className="rounded-xl border border-[#252936] bg-[#14161D] p-4">Crates and eggs that became invisible in gardens were fixed.</li>
          <li className="rounded-xl border border-[#252936] bg-[#14161D] p-4">Various lag, plant, pet, and performance issues were addressed.</li>
          <li className="rounded-xl border border-[#252936] bg-[#14161D] p-4">Wasp Dungeon wall behavior and the Tanning Mirror placement bug were fixed.</li>
        </ul>
      </section>

      <section aria-labelledby="verification-heading" className="rounded-xl border border-[#FFD700]/30 bg-[#FFD700]/5 p-5">
        <h2 id="verification-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          Unverified or In-Game Verification Details
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">The following details are intentionally not stated as facts on this page: required fruit names, Moon Coin amounts, shop prices, milestone thresholds, exact rewards and quantities, mutation chances or multipliers, Moon Egg drop rates, the two unnamed pets, the event end date, and any hidden pet or seed mechanics.</p>
      </section>

      <section aria-labelledby="sources-heading">
        <h2 id="sources-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">Official Sources</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {officialSources.map((source) => (
            <li key={source.href}><Link href={source.href} className="text-[#00E676] hover:underline" rel="nofollow">{source.label} ↗</Link></li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="related-heading">
        <h2 id="related-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">Related Grow a Garden Guides</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/grow-a-garden/events" className="rounded-lg border border-[#252936] px-4 py-2 text-sm font-semibold text-[#BAC4D1] transition hover:border-[#00E676] hover:text-[#00E676]">Events Tracker →</Link>
          <Link href="/grow-a-garden/updates" className="rounded-lg border border-[#252936] px-4 py-2 text-sm font-semibold text-[#BAC4D1] transition hover:border-[#00E676] hover:text-[#00E676]">Updates Tracker →</Link>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
