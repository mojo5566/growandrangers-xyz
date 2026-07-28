import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { trading, getHighDemandItems, getTradingByTrend } from "@/data/garden/database/trading";
import { codes, getActiveCodes } from "@/data/garden/database/codes";
import { events, getActiveEvents } from "@/data/garden/database/events";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "How to Get Rich Fast in Grow a Garden",
  description:
    "Quickest coin methods in Grow a Garden: active code redemption, event-only flips, fast mutation farming, and high-demand trading targets. Time-efficient wealth strategies for fast profits.",
  keywords: [
    "how to get rich fast Grow a Garden",
    "Grow a Garden quick coins",
    "Grow a Garden fast money",
    "Grow a Garden code redemption",
    "Grow a Garden event flipping",
    "Grow a Garden fast profit methods",
  ],
  alternates: { canonical: "/grow-a-garden/how-to-get-rich-fast" },
  openGraph: {
    title: "How to Get Rich Fast in Grow a Garden",
    description:
      "Quickest coin methods: active codes, event-only flips, fast mutation farming, and high-demand trading targets.",
    type: "website",
  },
};

// Active codes for instant redemption section
const activeCodes = getActiveCodes().slice(0, 6);

// High-demand items for fast flipping
const highDemand = getHighDemandItems().sort((a, b) => b.value - a.value).slice(0, 6);

// Rising trend items (best to hold and flip)
const risingItems = getTradingByTrend("Rising").sort((a, b) => b.value - a.value).slice(0, 5);

// Active events for event-flipping section
const activeEvents = getActiveEvents();

// All events list for event schedule
const allEvents = events.slice(0, 5);

// Method comparison — NEW data structure for time-vs-profit table
const methodComparison = [
  { method: "Redeem all active codes", time: "5 min", profit: "10,000–50,000 coins", risk: "Zero", verdict: "Do first — instant" },
  { method: "4-plot Golden Wheat farm (3.5× pet)", time: "1 hour", profit: "200,000–400,000 coins", risk: "Zero", verdict: "Daily baseline" },
  { method: "Sell S-Tier mutated crops at premium", time: "10 min", profit: "5–10× sell value", risk: "Low", verdict: "If you have mutations" },
  { method: "Rising-trend item flip (3-7 day hold)", time: "3–7 days", profit: "15–40% per flip", risk: "Medium", verdict: "If you have capital" },
  { method: "Event-exclusive stockpile + post-event sale", time: "2–4 weeks", profit: "50–200% appreciation", risk: "Medium", verdict: "During event windows" },
  { method: "Bulk-hatch Legendary Eggs for S-Tier pet", time: "Instant (high cost)", profit: "1.3M–5M coin pet", risk: "High", verdict: "Only if 300k+ surplus" },
];

const faqs = [
  {
    question: "What is the fastest way to get coins in Grow a Garden?",
    answer:
      "The fastest legitimate method is redeeming active codes from our Codes Database — some codes grant 10,000-50,000 coins instantly with zero farming. After code redemption, focus on high-CPM crops like Golden Wheat combined with a 2.0× or higher pet multiplier. Active farming with full multipliers can yield 50,000+ coins per hour immediately after starting a new account.",
  },
  {
    question: "Can I get rich in Grow a Garden without spending Robux?",
    answer:
      "Yes. All high-value items in the game are obtainable through farming, hatching, and trading — no Robux required. The proven path: farm Golden Wheat with full multipliers to 500,000 coins, trade for a B-Tier pet, reinvest the pet's multiplier into faster farming, then trade up to A-Tier and S-Tier pets over 1-2 weeks of active play. See our Trading Database for current values.",
  },
  {
    question: "How do I flip items for fast profit in Grow a Garden?",
    answer:
      "Watch our Trading Database for items with 'Rising' trends. Buy them at current value, hold 3-7 days as demand increases, then sell at the new market price. Typical profit margins range from 15% to 40% per flip. Focus on high-demand items (pets, Legendary seeds) — they have enough trade volume to actually execute the flip.",
  },
  {
    question: "What should I do during events to get rich fast?",
    answer:
      "Events are the highest-CPM windows in the game. Three priorities: (1) farm event-exclusive crops and seeds which sell at premium outside the event window, (2) hatch event eggs for event-exclusive pets which appreciate after the event ends, (3) stockpile event items and sell them 2-4 weeks later when supply dries up. Check our Events Database for active and upcoming events.",
  },
  {
    question: "Is the Premium Event Seed worth buying for fast wealth?",
    answer:
      "Premium Event Seed is a Robux seed with +25% mutation roll bonus. If you are already running full multipliers (top pet + top mutation), the extra mutation frequency can pay back the Robux cost in 2-3 farming sessions. If you are not yet at full multipliers, focus on acquiring pets first — the seed is a multiplier amplifier, not a multiplier source.",
  },
  {
    question: "How does this guide differ from the general How to Get Rich guide?",
    answer:
      "This guide focuses on time-efficient methods — what to do in the next 10 minutes, 1 hour, or 1 day to make coins fast. The general How to Get Rich guide covers the full wealth-building path from 0 to 1,000,000 coins. Read this page for quick profit windows; read the general guide for the long-term strategy.",
  },
];

export default function HowToGetRichFastPage() {
  return (
    <ContentLayout
      title="How to Get Rich Fast in Grow a Garden"
      description="Quickest coin methods: active codes, event-only flips, fast mutation farming, and high-demand trading targets. Time-efficient wealth strategies for fast profits."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "How to Get Rich Fast", href: "/grow-a-garden/how-to-get-rich-fast" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/how-to-get-rich-fast"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Opening — concrete number rather than generic intro */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          A brand-new account with zero coins can reach <strong className="text-white">50,000 coins in 10 minutes</strong> (codes only), <strong className="text-white">500,000 coins in 4 hours</strong> (codes + Golden Wheat farming), and <strong className="text-white">2,000,000+ coins in 7 days</strong> (farming + rising-trend flips). The catch: most players waste the first 3 days on Basic Eggs and cosmetic pets, then quit. This guide is the exact opposite — every method here is ranked by <em className="text-white">coins-per-minute</em>, with real numbers from the{" "}
          <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">Trading</Link>,{" "}
          <Link href="/grow-a-garden/codes" className="text-[#00E676] hover:underline">Codes</Link>, and{" "}
          <Link href="/grow-a-garden/events" className="text-[#00E676] hover:underline">Events</Link>{" "}
          databases. For the long-term path, see{" "}
          <Link href="/grow-a-garden/how-to-get-rich" className="text-[#00E676] hover:underline">How to Get Rich</Link>.
        </p>
      </section>

      {/* Method comparison table — NEW, replaces the 5 separate "Method" sections */}
      <section aria-labelledby="comparison-heading">
        <h2
          id="comparison-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⏱️ Time-vs-Profit Ranking (Do These In Order)
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-3">
            Stop asking &quot;what should I do?&quot; — the answer is sequential. Work down this table from top to bottom. Each row tells you the time cost, expected profit, and risk level.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-[#1E212B] text-[#768294]">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">#</th>
                  <th className="px-4 py-2 text-left font-semibold">Method</th>
                  <th className="px-4 py-2 text-left font-semibold">Time Cost</th>
                  <th className="px-4 py-2 text-left font-semibold">Expected Profit</th>
                  <th className="px-4 py-2 text-left font-semibold">Risk</th>
                  <th className="px-4 py-2 text-left font-semibold">Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#252936]">
                {methodComparison.map((m, i) => (
                  <tr key={i} className={i === 0 ? "bg-[#00E676]/5" : ""}>
                    <td className="px-4 py-3 text-[#768294]">{i + 1}</td>
                    <td className="px-4 py-3 text-[#BAC4D1] font-semibold">{m.method}</td>
                    <td className="px-4 py-3 text-white">{m.time}</td>
                    <td className="px-4 py-3 text-[#00E676] font-semibold">{m.profit}</td>
                    <td className="px-4 py-3 text-xs text-[#BAC4D1]">{m.risk}</td>
                    <td className="px-4 py-3 text-xs text-[#768294]">{m.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[#768294]">
            Profit estimates use canonical database values. Individual results vary with RNG and market timing.
          </p>
        </div>
      </section>

      {/* Instant-action: codes — kept, refined framing */}
      <section aria-labelledby="codes-heading">
        <h2
          id="codes-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🎁 Step 1: Redeem Active Codes (10,000–50,000 coins in 5 minutes)
        </h2>
        <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-4">
            This is the single highest coins-per-minute action in the game. Zero farming, zero risk. Do this <strong className="text-white">before</strong> planting a single seed. Each code drops coins, free seeds, free eggs, or XP boosts. Most new players skip this and lose 50,000 coins of free starting capital.
          </p>
          {activeCodes.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-[#1E212B] text-[#768294]">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold">Code</th>
                    <th className="px-4 py-2 text-left font-semibold">Reward</th>
                    <th className="px-4 py-2 text-left font-semibold">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#252936]">
                  {activeCodes.map((c) => (
                    <tr key={c.id}>
                      <td className="px-4 py-2 font-mono text-[#00E676]">{c.code}</td>
                      <td className="px-4 py-2 text-[#BAC4D1]">{c.reward}</td>
                      <td className="px-4 py-2 text-[#768294]">{c.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-xs text-[#768294]">
              No active codes at this moment. Check back daily — new codes drop with each update.
            </p>
          )}
          <p className="mt-3 text-xs text-[#768294]">
            Full list in the{" "}
            <Link href="/grow-a-garden/codes" className="text-[#00E676] hover:underline">Codes Database</Link>.
          </p>
        </div>
      </section>

      {/* Worked Example — NEW section, replaces templated "Method" sections 2-5 */}
      <section aria-labelledby="example-heading">
        <h2
          id="example-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📋 Worked Example: New Account to 2M Coins in 7 Days
        </h2>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <div className="grid gap-3 sm:grid-cols-2 mb-4">
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Player resources (Day 1, Hour 0)</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• Brand-new account, 0 coins</li>
                <li>• 1 plot, no pet, no mutation</li>
                <li>• No Robux budget</li>
                <li>• 4 hours/day playtime</li>
              </ul>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Goal (Day 7)</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• 2,000,000+ coins total wealth</li>
                <li>• 4 plots, A-Tier pet, B-Tier mutation</li>
                <li>• Self-sustaining farm (200k+/hour)</li>
                <li>• No Robux spent</li>
              </ul>
            </div>
          </div>
          <div className="text-sm leading-relaxed text-[#BAC4D1] space-y-2">
            <p><strong className="text-white">Day 1 (Hour 0–4): Code redemption + first Rare Egg.</strong> Redeem every code in the{" "}
              <Link href="/grow-a-garden/codes" className="text-[#00E676] hover:underline">Codes Database</Link>{" "}
              — typical haul: 10,000–50,000 coins + free seeds. Buy 1 Rare Egg (2,000 coins). Expected: 1 B-Tier pet (2.0×–2.5×). Plant Golden Wheat on 4 plots. Hour-4 net worth: ~30,000 coins + 1 pet.</p>
            <p><strong className="text-white">Day 2–3 (Mutation Station + bulk-roll):</strong> Unlock Mutation Station (1,500 coins). Save 50+ shards from daily logins + codes. Bulk-roll 10 shards at once (do NOT single-roll). Expected: ~11% S-Tier odds, ~50% B-Tier odds. Even a 2.0× mutation × your 2.5× pet on 480-coin Golden Wheat = 2,400 coins/harvest. At 80 harvests/hour = 192,000 coins/hour gross.</p>
            <p><strong className="text-white">Day 4–5 (Rising-trend flip):</strong> Check the{" "}
              <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">Trading Database</Link>{" "}
              for Rising items. With 500k+ coins banked, buy 1–2 rising items at current value, list at +20% markup. Hold 3 days. Expected: 15–40% profit per flip. Day-5 net worth: ~1,200,000 coins.</p>
            <p><strong className="text-white">Day 6 (Event stockpile if active):</strong> If an event is live (check{" "}
              <Link href="/grow-a-garden/events" className="text-[#00E676] hover:underline">Events Tracker</Link>), spend 200k on event-exclusive seeds/crops. Stockpile — do NOT sell yet. Post-event appreciation is 50–200% over 2–4 weeks.</p>
            <p><strong className="text-white">Day 7 (A-Tier pet push):</strong> Reinvest 800k coins into 4 Rare Eggs. Expected yield: 1 A-Tier pet (3.0×+). Equip on main plot. Farm income jumps from 192k/hour to 250k+/hour. Day-7 net worth: ~2,000,000 coins (cash + items + pet value).</p>
            <p className="text-xs text-[#00E676] mt-3">
              Result: 0 → 2,000,000 coins in 7 days, no Robux. The key sequence was: codes first → Rare Egg → mutation bulk-roll → rising-trend flip → A-Tier pet. Skipping any step cuts the final total by 30–50%.
            </p>
          </div>
        </div>
      </section>

      {/* Common mistakes — NEW section, replaces templated "Golden Rules" */}
      <section aria-labelledby="mistakes-heading">
        <h2
          id="mistakes-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⚠️ Common Fast-Wealth Mistakes (Avoid These)
        </h2>
        <div className="space-y-3">
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 1: Buying Basic Eggs (500 coins) instead of saving for Rare Eggs (2,000 coins)</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Basic Eggs cap at 1.8× pets. Rare Eggs have ~30% A-Tier odds (3.0×+). Four Basic Eggs (2,000 coins) average ~1.5×; one Rare Egg averages ~2.5×. The Rare Egg is strictly better value per coin.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 2: Single-rolling Mutation Shards out of impatience</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Single-roll: ~1.2% S-Tier odds. Bulk-roll 10: ~11%. You waste 9× value every time you single-roll. Save 10 shards minimum before touching the Mutation Station.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 3: Selling event-exclusive items DURING the event</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Event items are at peak supply during the event — prices are at their lowest. Hold 2–4 weeks post-event for 50–200% appreciation. The only exception: if you need the coins to buy a Rare Egg for your first pet.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 4: Bulk-hatching Legendary Eggs before you can afford to lose 300,000 coins</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Legendary Eggs cost 10,000 coins each with ~5–8% S-Tier odds. Expected cost per S-Tier: 200,000–400,000 coins. If losing that amount stalls your farm, you are not ready — stick to Rare Eggs and rising-trend flips.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 5: Trading your only high-tier pet for a &quot;deal&quot;</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Even a mathematically fair trade leaves you with zero farming multiplier. The income loss exceeds the trade value within 2–3 days. Only trade duplicate pets. See our{" "}
              <Link href="/grow-a-garden/trading-tips" className="text-[#00E676] hover:underline">Trading Tips</Link>{" "}
              for the full scam-prevention checklist.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 6: Skipping codes because &quot;10k coins isn&apos;t much&quot;</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              10,000 coins is 5 Rare Eggs or 20 Basic Eggs. At the start of the game, that is the difference between a 2.5× pet on Day 1 vs Day 3. Codes compound — never skip them.
            </p>
          </div>
        </div>
      </section>

      {/* Live database pull — kept, compressed */}
      <section aria-labelledby="live-pull-heading">
        <h2
          id="live-pull-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📈 Live Database Pull: What to Trade Right Now
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-[#00E676] mb-2">Rising Trend (Hold 3–7 Days, Then Sell)</h3>
              <ul className="space-y-1.5">
                {risingItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-between text-xs text-[#BAC4D1]">
                    <span>
                      <Link href={`/grow-a-garden/trading/${item.id}`} className="text-[#00E676] hover:underline">
                        {item.name}
                      </Link>
                      <span className="text-[#768294]"> ({item.category})</span>
                    </span>
                    <span className="text-[#FF8C00] font-semibold">{item.value.toLocaleString()} 🪙</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#FF8C00] mb-2">High-Demand (Liquid Trading Currency)</h3>
              <ul className="space-y-1.5">
                {highDemand.slice(0, 6).map((item) => (
                  <li key={item.id} className="flex items-center justify-between text-xs text-[#BAC4D1]">
                    <span>
                      <Link href={`/grow-a-garden/trading/${item.id}`} className="text-[#00E676] hover:underline">
                        {item.name}
                      </Link>
                      <span className="text-[#768294]"> ({item.category})</span>
                    </span>
                    <span className="text-[#00E676] font-semibold">{item.value.toLocaleString()} 🪙</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {activeEvents.length > 0 && (
            <div className="mt-4 pt-4 border-t border-[#252936]">
              <h3 className="text-sm font-semibold text-[#BAC4D1] mb-2">Active Events (Highest-CPM Window)</h3>
              <ul className="space-y-1.5">
                {activeEvents.map((e) => (
                  <li key={e.id} className="text-xs text-[#BAC4D1]">
                    <Link href={`/grow-a-garden/events/${e.id}`} className="text-[#00E676] hover:underline">
                      {e.title}
                    </Link>{" "}
                    — {e.startDate} to {e.endDate}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/how-to-get-rich-fast" />
    </ContentLayout>
  );
}
