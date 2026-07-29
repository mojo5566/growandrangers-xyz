import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { trading } from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Rare Items Value Guide — Grow a Garden",
  description:
    "Complete value guide to the rarest tradeable items in Grow a Garden. Ranked by trade value, demand, and trend. Verify fair trades before you commit.",
  keywords: [
    "rare items value Grow a Garden",
    "Grow a Garden item value guide",
    "Grow a Garden trade values",
    "rarest items Grow a Garden",
    "Grow a Garden price guide",
    "Grow a Garden high value items",
  ],
  alternates: { canonical: "/grow-a-garden/rare-items-value" },
  openGraph: {
    title: "Rare Items Value Guide — Grow a Garden",
    description:
      "Complete value guide to the rarest tradeable items in Grow a Garden. Ranked by trade value, demand, and trend.",
    type: "website",
  },
};

// Top 20 most valuable tradeable items
const rareItems = [...trading]
  .sort((a, b) => b.value - a.value)
  .slice(0, 20);

const rarityColors: Record<string, string> = {
  Common: "#768294",
  Rare: "#3A86FF",
  Epic: "#9D4EDD",
  Legendary: "#FF8C00",
  Mythical: "#FF3D00",
};

const demandColors: Record<string, string> = {
  High: "#00E676",
  Medium: "#FFD700",
  Low: "#FF3D00",
};

// Pre-compute category aggregates
const categories = ["Pet", "Seed", "Crop", "Mutation"] as const;
const categoryStats = categories.map((cat) => {
  const items = trading.filter((t) => t.category === cat);
  const avg = items.length > 0
    ? Math.round(items.reduce((sum, t) => sum + t.value, 0) / items.length)
    : 0;
  const max = items.length > 0 ? Math.max(...items.map((t) => t.value)) : 0;
  return { cat, items, avg, max };
});

// Pre-compute trend buckets for the Hold vs Sell decision tree
const risingItems = rareItems.filter((i) => i.trend === "Rising");
const fallingItems = rareItems.filter((i) => i.trend === "Falling");
const stableItems = rareItems.filter((i) => i.trend === "Stable");

// A representative high-value Rising item for the worked example
const featuredRising = risingItems[0];
const featuredFalling = fallingItems[0];

const faqs = [
  {
    question: "What is the rarest item in Grow a Garden?",
    answer:
      "The rarest tradeable items in Grow a Garden are the highest-value pets and mutations. The Golden Phoenix Chick and Golden Dragon consistently top the trade value list because they combine rarity (low Legendary Egg drop rates) with high utility (top-tier multipliers). Check the ranking table below for the current top 20 most valuable items.",
  },
  {
    question: "How are item values determined in Grow a Garden?",
    answer:
      "Item values in our Trading Database are determined by a combination of rarity (drop rate or availability), utility (multiplier or ability), and market demand. We review values weekly and adjust based on observed trade patterns. Values fluctuate with each major update as new items enter the market.",
  },
  {
    question: "Should I trade my rare items now or hold them?",
    answer:
      "It depends on the item's trend. Items with a 'Rising' trend are appreciating — hold them. Items with a 'Falling' trend are depreciating — consider trading them before the value drops further. Items with a 'Stable' trend can be traded whenever you need the currency. Always check the current trend before committing.",
  },
  {
    question: "How do I avoid getting scammed in trades?",
    answer:
      "Always verify the current trade value in our Trading Database before accepting any offer. Be wary of offers that seem too good to be true — they usually are. Never trade with unverified players, and always double-check the item you are receiving before confirming the trade. See our Trading Tips guide for detailed scam prevention advice.",
  },
  {
    question: "Do rare items retain their value after updates?",
    answer:
      "Generally yes, but it depends on the update. Updates that introduce new competing items can reduce demand for existing rare items. Updates that buff existing items can increase their value. Monitor the trend column in our Trading Database — items with 'Falling' trends after an update may need to be traded quickly.",
  },
  {
    question: "Where can I see all tradeable items in Grow a Garden?",
    answer:
      "Browse the complete Trading Database at /grow-a-garden/trading for every tradeable item with verified values, demand levels, and trend indicators. The database covers pets, seeds, crops, and mutations across all rarity tiers from Common to Mythical. Each item page shows its current trade value, demand rating, and price trend so you can evaluate offers on the spot. Values are reviewed weekly and adjusted after every major game update.",
  },
];

export default function RareItemsValuePage() {
  return (
    <ContentLayout
      title="Rare Items Value Guide — Grow a Garden"
      description="Complete value guide to the rarest tradeable items in Grow a Garden. Ranked by trade value, demand, and trend."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Rare Items Value", href: "/grow-a-garden/rare-items-value" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/rare-items-value"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Trading"
      keywords={["rare items value Grow a Garden", "Grow a Garden item value guide", "Grow a Garden trade values", "rarest items Grow a Garden", "Grow a Garden price guide"]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - AI search summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          The Golden Phoenix Chick and Golden Dragon top the rare-items value list, both classified as Mythical with High demand and multi-million-coin trade values. The Golden Phoenix Chick alone sits near 5,000,000 coins and is currently Rising. Use the Hold vs Sell decision tree — Rising items should be held, Falling items sold within 7 days. All 20 top items are ranked with live trend data from the Trading Database.
        </p>
      </section>

      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          The single hardest decision in the rare-items market is not{" "}
          <em>what</em> to buy — it is <strong className="text-white">whether to hold or sell</strong>{" "}
          what you already own. This guide is built around that decision. The
          ranking table below shows the top 20 most valuable items from the
          canonical{" "}
          <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">
            Trading Database
          </Link>
          , but the real value is in the{" "}
          <a href="#decision-tree-heading" className="text-[#00E676] hover:underline">
            Hold vs Sell decision tree
          </a>{" "}
          further down — answer three questions and get a concrete action.
        </p>
      </section>

      {/* ── Hold vs Sell Decision Tree (the core of this page) ── */}
      <section aria-labelledby="decision-tree-heading">
        <h2
          id="decision-tree-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🌳 The Hold vs Sell Decision Tree
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-4">
            Stop guessing. Answer Q1 first and follow the branch — every path
            ends with a concrete action, not a vague "it depends". This tree
            assumes you already <em>own</em> the item; if you are deciding
            whether to <em>buy</em>, jump to the{" "}
            <a href="#buyer-matrix-heading" className="text-[#00E676] hover:underline">
              Buyer Matrix
            </a>{" "}
            below.
          </p>
          <ol className="space-y-4 text-sm text-[#BAC4D1] border-l-2 border-[#00E676]/40 pl-4">
            <li>
              <strong className="text-white">Q1: What is the item's current trend in the Trading Database?</strong>
              <br />
              <span className="text-[#00E676]">→ Rising:</span> Hold. The item is
              appreciating — selling now means leaving coins on the table.
              Proceed to Q2 to decide <em>how long</em> to hold.
              <br />
              <span className="text-[#FF3D00]">→ Falling:</span> Sell within the
              next 7 days, unless the item is core to your active farming build
              (you are using it on a plot right now). Every day you wait, the
              value drops further. See{" "}
              <a href="#falling-trap-heading" className="text-[#00E676] hover:underline">
                The Falling Trend Trap
              </a>{" "}
              below.
              <br />
              <span className="text-[#FFD700]">→ Stable:</span> Flexible. Sell
              only if you need the currency for a specific purchase (e.g. a
              Legendary Egg or a seasonal seed). Otherwise, hold — stable items
              do not lose value and may flip to Rising after an update.
            </li>
            <li>
              <strong className="text-white">Q2 (Rising only): Is the item actively equipped on a plot, or sitting in storage?</strong>
              <br />
              <span className="text-[#00E676]">→ Equipped and producing:</span> Hold
              indefinitely. The item is generating income <em>and</em>{" "}
              appreciating — this is the best-case scenario. Do not sell unless
              you have a direct upgrade lined up.
              <br />
              <span className="text-[#FFD700]">→ In storage (not equipped):</span>{" "}
              Hold for up to 30 days, then re-evaluate. If the trend is still
              Rising after 30 days, keep holding. If it flips to Stable, sell —
              the appreciation window has closed and you are tying up capital
              for no gain.
            </li>
            <li>
              <strong className="text-white">Q3 (Rising + equipped): Is a major game update announced?</strong>
              <br />
              <span className="text-[#00E676]">→ No update announced:</span> Hold.
              Nothing will disrupt the item's value in the short term.
              <br />
              <span className="text-[#FF8C00]">→ Update announced that adds new competing items:</span>{" "}
              Consider selling 1–2 weeks <em>before</em> the update drops. New
              items typically cannibalize demand for existing ones — the trend
              may flip to Falling the day the update goes live. Check the{" "}
              <Link href="/grow-a-garden/updates" className="text-[#00E676] hover:underline">
                Updates Tracker
              </Link>{" "}
              for announced patches.
              <br />
              <span className="text-[#00E676]">→ Update announced that buffs your item's category:</span>{" "}
              Hold through the update — demand spikes are common in the 48 hours
              after a buff. Sell into the spike, not before it.
            </li>
          </ol>
        </div>
      </section>

      {/* ── Trend Bucket Quick Reference ── */}
      <section aria-labelledby="trend-buckets-heading">
        <h2
          id="trend-buckets-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📊 Trend Bucket Quick Reference
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-[#00E676]">▲ Rising ({risingItems.length})</h3>
              <span className="text-xs text-[#768294]">HOLD</span>
            </div>
            <p className="text-xs text-[#768294] mb-2">
              Appreciating. Selling now locks in a loss vs. waiting.
            </p>
            <ul className="space-y-1 text-xs">
              {risingItems.slice(0, 5).map((i) => (
                <li key={i.id}>
                  <Link
                    href={`/grow-a-garden/trading/${i.id}`}
                    className="text-[#00E676] hover:underline"
                  >
                    {i.name}
                  </Link>
                  <span className="text-[#768294]"> · {i.value.toLocaleString()} 🪙</span>
                </li>
              ))}
              {risingItems.length > 5 && (
                <li className="text-[#768294] italic">+ {risingItems.length - 5} more</li>
              )}
            </ul>
          </div>
          <div className="rounded-xl border border-[#FFD700]/30 bg-[#14161D] p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-[#FFD700]">■ Stable ({stableItems.length})</h3>
              <span className="text-xs text-[#768294]">FLEXIBLE</span>
            </div>
            <p className="text-xs text-[#768294] mb-2">
              Flat. Sell only if you need the currency now.
            </p>
            <ul className="space-y-1 text-xs">
              {stableItems.slice(0, 5).map((i) => (
                <li key={i.id}>
                  <Link
                    href={`/grow-a-garden/trading/${i.id}`}
                    className="text-[#00E676] hover:underline"
                  >
                    {i.name}
                  </Link>
                  <span className="text-[#768294]"> · {i.value.toLocaleString()} 🪙</span>
                </li>
              ))}
              {stableItems.length > 5 && (
                <li className="text-[#768294] italic">+ {stableItems.length - 5} more</li>
              )}
            </ul>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-[#FF3D00]">▼ Falling ({fallingItems.length})</h3>
              <span className="text-xs text-[#768294]">SELL FAST</span>
            </div>
            <p className="text-xs text-[#768294] mb-2">
              Depreciating. Sell within 7 days unless actively equipped.
            </p>
            <ul className="space-y-1 text-xs">
              {fallingItems.slice(0, 5).map((i) => (
                <li key={i.id}>
                  <Link
                    href={`/grow-a-garden/trading/${i.id}`}
                    className="text-[#00E676] hover:underline"
                  >
                    {i.name}
                  </Link>
                  <span className="text-[#768294]"> · {i.value.toLocaleString()} 🪙</span>
                </li>
              ))}
              {fallingItems.length > 5 && (
                <li className="text-[#768294] italic">+ {fallingItems.length - 5} more</li>
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Top 20 Ranking Table ── */}
      <section aria-labelledby="ranking-heading">
        <h2
          id="ranking-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          💎 Top 20 Most Valuable Items
        </h2>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]">
                <th className="py-2 pr-3">Rank</th>
                <th className="py-2 pr-3">Item</th>
                <th className="py-2 pr-3">Category</th>
                <th className="py-2 pr-3">Rarity</th>
                <th className="py-2 pr-3">Trade Value</th>
                <th className="py-2 pr-3">Demand</th>
                <th className="py-2 pr-3">Trend</th>
                <th className="py-2 pr-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {rareItems.map((item, i) => {
                const action =
                  item.trend === "Rising" ? "Hold" :
                  item.trend === "Falling" ? "Sell" :
                  "Flexible";
                const actionColor =
                  item.trend === "Rising" ? "#00E676" :
                  item.trend === "Falling" ? "#FF3D00" :
                  "#FFD700";
                return (
                  <tr key={item.id} className="border-b border-[#1E212B]">
                    <td className="py-3 pr-3 font-semibold text-[#BAC4D1]">#{i + 1}</td>
                    <td className="py-3 pr-3">
                      <Link
                        href={`/grow-a-garden/trading/${item.id}`}
                        className="text-[#00E676] hover:underline"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{item.category}</td>
                    <td className="py-3 pr-3">
                      <span
                        className="rounded px-2 py-0.5 text-xs font-bold"
                        style={{
                          color: rarityColors[item.rarity] ?? "#768294",
                          background: (rarityColors[item.rarity] ?? "#768294") + "22",
                        }}
                      >
                        {item.rarity}
                      </span>
                    </td>
                    <td className="py-3 pr-3 text-sm font-semibold text-[#00E676]">
                      {item.value.toLocaleString()} 🪙
                    </td>
                    <td className="py-3 pr-3">
                      <span
                        className="text-xs font-semibold"
                        style={{ color: demandColors[item.demand] ?? "#768294" }}
                      >
                        {item.demand}
                      </span>
                    </td>
                    <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{item.trend}</td>
                    <td className="py-3 pr-3">
                      <span
                        className="rounded px-2 py-0.5 text-xs font-bold"
                        style={{ color: actionColor, background: actionColor + "22" }}
                      >
                        {action}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          Values sourced from the canonical Trading Database. Last reviewed{" "}
          {CONTENT_UPDATED_AT}.
        </p>
      </section>

      {/* ── Real Player Scenario ── */}
      <section aria-labelledby="scenario-heading">
        <h2
          id="scenario-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🎮 Player Scenario: The Hold-vs-Sell Dilemma
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-4">
            A concrete example of walking the decision tree. The item and values
            are pulled directly from the Trading Database above — no hypothetical
            numbers.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-4">
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Player Type</div>
              <div className="text-sm text-white mt-1">Late-game trader, 6 weeks in</div>
              <div className="text-xs text-[#768294] mt-1">Active trader, ~2 hours/day</div>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Current Holdings</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                {featuredRising && (
                  <li>• 1× {featuredRising.name} ({featuredRising.value.toLocaleString()} 🪙, {featuredRising.trend})</li>
                )}
                {featuredFalling && (
                  <li>• 1× {featuredFalling.name} ({featuredFalling.value.toLocaleString()} 🪙, {featuredFalling.trend})</li>
                )}
                <li>• 500,000 🪙 in bank</li>
                <li>• Main plot uses S-Tier mutation (do not disrupt)</li>
              </ul>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Goal (Next 14 Days)</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• Maximize total portfolio value</li>
                <li>• Free up 1M 🪙 for a Legendary Egg pull</li>
                <li>• Avoid holding depreciating assets</li>
                <li>• Keep the S-Tier farming plot intact</li>
              </ul>
            </div>
            <div className="rounded bg-[#00E676]/10 p-3 border border-[#00E676]/30">
              <div className="text-xs text-[#00E676] uppercase tracking-wider">Recommended Route</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                {featuredRising && (
                  <li>• <strong className="text-white">{featuredRising.name}:</strong> Q1=Rising → Q2=In storage → Hold up to 30 days, re-evaluate</li>
                )}
                {featuredFalling && (
                  <li>• <strong className="text-white">{featuredFalling.name}:</strong> Q1=Falling → Sell within 7 days. Not equipped, so no farming loss</li>
                )}
                <li>• Use {featuredFalling ? featuredFalling.value.toLocaleString() + " 🪙" : "proceeds"} from sale toward the Legendary Egg fund</li>
                <li>• Re-check trends in 14 days — flip {featuredRising?.name ?? "Rising item"} to sell if it goes Stable</li>
              </ul>
            </div>
          </div>
          <div className="rounded bg-[#1E212B] p-3 border-l-2 border-[#00E676]">
            <p className="text-xs text-[#BAC4D1]">
              <strong className="text-white">Why this works:</strong> The player
              did not sell both items reflexively. The Rising item keeps
              appreciating in storage (zero opportunity cost), while the Falling
              item is liquidated before it drops further. The net result is a
              larger Legendary Egg fund <em>and</em> a higher-value portfolio —
              the two goals are not in conflict when you follow the tree.
            </p>
          </div>
        </div>
      </section>

      {/* ── Buyer Matrix ── */}
      <section aria-labelledby="buyer-matrix-heading">
        <h2
          id="buyer-matrix-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🛒 Buyer Matrix (When to Buy, Not Hold)
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-4">
            The decision tree above covers the <em>sell-side</em>. If you are on
            the buy-side, invert the logic — but not perfectly. Some items are
            worth buying even at a premium because their utility pays for
            itself. Use this matrix instead of guessing.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-[#1E212B] text-[#768294]">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Trend</th>
                  <th className="px-4 py-2 text-left font-semibold">Demand</th>
                  <th className="px-4 py-2 text-left font-semibold">Buy?</th>
                  <th className="px-4 py-2 text-left font-semibold">Reasoning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#252936]">
                <tr className="text-[#BAC4D1]">
                  <td className="px-4 py-3 text-xs"><span className="text-[#00E676]">▲ Rising</span></td>
                  <td className="px-4 py-3 text-xs">High</td>
                  <td className="px-4 py-3 text-xs font-semibold text-[#FF8C00]">Only if you will use it now</td>
                  <td className="px-4 py-3 text-xs">You are paying a premium. Only worth it if the item goes straight onto a plot and starts producing. Never buy to flip — the spread is too thin.</td>
                </tr>
                <tr className="text-[#BAC4D1]">
                  <td className="px-4 py-3 text-xs"><span className="text-[#00E676]">▲ Rising</span></td>
                  <td className="px-4 py-3 text-xs">Low/Medium</td>
                  <td className="px-4 py-3 text-xs font-semibold text-[#00E676]">Yes — buy</td>
                  <td className="px-4 py-3 text-xs">Rising trend + low demand means the price is still climbing but the market has not caught on yet. Best buy window.</td>
                </tr>
                <tr className="text-[#BAC4D1]">
                  <td className="px-4 py-3 text-xs"><span className="text-[#FFD700]">■ Stable</span></td>
                  <td className="px-4 py-3 text-xs">Any</td>
                  <td className="px-4 py-3 text-xs font-semibold text-[#FFD700]">Yes, if you need it</td>
                  <td className="px-4 py-3 text-xs">Stable items are fairly priced. Buy when you have a concrete use case — do not speculate.</td>
                </tr>
                <tr className="text-[#BAC4D1]">
                  <td className="px-4 py-3 text-xs"><span className="text-[#FF3D00]">▼ Falling</span></td>
                  <td className="px-4 py-3 text-xs">High</td>
                  <td className="px-4 py-3 text-xs font-semibold text-[#FF3D00]">Wait — price is still dropping</td>
                  <td className="px-4 py-3 text-xs">High demand means the price floor has not been found yet. Wait 7–14 days for the trend to stabilize before buying.</td>
                </tr>
                <tr className="text-[#BAC4D1]">
                  <td className="px-4 py-3 text-xs"><span className="text-[#FF3D00]">▼ Falling</span></td>
                  <td className="px-4 py-3 text-xs">Low</td>
                  <td className="px-4 py-3 text-xs font-semibold text-[#00E676]">Yes — discount buy</td>
                  <td className="px-4 py-3 text-xs">Low demand + falling trend = desperate sellers. This is the best time to pick up utility items cheap, but only if the utility is permanent (multiplier pets, mutation seeds).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── The Falling Trend Trap ── */}
      <section aria-labelledby="falling-trap-heading">
        <h2
          id="falling-trap-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⚠️ The Falling Trend Trap (Most Common Mistake)
        </h2>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <ol className="space-y-4 text-sm text-[#BAC4D1] list-decimal pl-5">
            <li>
              <strong className="text-white">"It will bounce back" — holding a Falling item hoping for a reversal.</strong>
              <br />
              <span className="text-xs">
                The most expensive mistake in the rare-items market. Once an
                item's trend flips to Falling, it is usually because a newer,
                better item has entered the market (per the{" "}
                <Link href="/grow-a-garden/updates" className="text-[#00E676] hover:underline">
                  Updates Tracker
                </Link>
                ). The trend rarely reverses — it accelerates downward as more
                holders panic-sell. <span className="text-[#FF3D00]">Cost: 10–30% value loss per week held.</span>{" "}
                Fix: set a 7-day hard stop. If the trend has not flipped to
                Stable after 7 days, sell at market price — do not wait for a
                bounce that is not coming.
              </span>
            </li>
            <li>
              <strong className="text-white">Selling a Rising item to "lock in profits".</strong>
              <br />
              <span className="text-xs">
                The mirror-image mistake. Selling a Rising item early means you
                capture today's price but miss tomorrow's higher price. The only
                valid reason to sell a Rising item is if you have an immediate,
                concrete use for the currency (e.g. funding a Legendary Egg pull
                during a 2× drop event). <span className="text-[#FF3D00]">Cost: 5–15% missed appreciation per week sold early.</span>{" "}
                Fix: only sell Rising items when the currency will earn more
                than the item's weekly appreciation rate.
              </span>
            </li>
            <li>
              <strong className="text-white">Trusting verbal offers without checking the database.</strong>
              <br />
              <span className="text-xs">
                A buyer offers 80% of database value "because demand is low".
                You accept, then check the{" "}
                <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">
                  Trading Database
                </Link>{" "}
                afterward and realize the item was Rising.{" "}
                <span className="text-[#FF3D00]">Cost: 20%+ immediate loss.</span>{" "}
                Fix: <em>always</em> verify the trend <em>before</em> the trade,
                not after. If a buyer is rushing you, that is a red flag —
                Rising items do not need to be sold at a discount.
              </span>
            </li>
            <li>
              <strong className="text-white">Selling an equipped item that is actively producing.</strong>
              <br />
              <span className="text-xs">
                You sell a 3.5× pet for 1.8M 🪙 because the trend is Stable and
                you want the cash. But the pet was generating 200K 🪙/day on your
                main plot — you have now replaced a 200K/day income with a
                one-time 1.8M payout that runs out in 9 days.{" "}
                <span className="text-[#FF3D00]">Cost: permanent income loss.</span>{" "}
                Fix: never sell an equipped item unless you have a direct
                replacement ready. The farm income is worth more than the sale
                price over any reasonable time horizon.
              </span>
            </li>
          </ol>
        </div>
      </section>

      {/* ── Value by Category ── */}
      <section aria-labelledby="categories-heading">
        <h2
          id="categories-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📊 Value by Category
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categoryStats.map(({ cat, items, avg, max }) => (
            <div key={cat} className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
              <h3 className="text-sm font-semibold text-[#00E676] mb-2">{cat}s</h3>
              <p className="text-xs text-[#768294]">{items.length} items</p>
              <p className="text-xs text-[#BAC4D1] mt-1">
                Avg: <span className="text-[#00E676]">{avg.toLocaleString()} 🪙</span>
              </p>
              <p className="text-xs text-[#BAC4D1]">
                Max: <span className="text-[#00E676]">{max.toLocaleString()} 🪙</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Strategy: When to Use This Guide ── */}
      <section aria-labelledby="strategy-heading">
        <h2
          id="strategy-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🎯 When to Use This Guide (and When Not To)
        </h2>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-[#00E676] mb-3">✅ Use this guide when…</h3>
            <ul className="space-y-2 text-xs text-[#BAC4D1]">
              <li className="flex items-start gap-2">
                <span className="text-[#00E676] shrink-0 mt-0.5">→</span>
                <span>
                  You own an item and need to decide whether to sell it today
                  or hold. Run the decision tree.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00E676] shrink-0 mt-0.5">→</span>
                <span>
                  A buyer is pressuring you to sell quickly. Check the trend
                  column — Rising means hold, Falling means sell (but not to
                  that buyer at a discount).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00E676] shrink-0 mt-0.5">→</span>
                <span>
                  A major update was announced. Re-evaluate every Rising item
                  in your portfolio using Q3 of the decision tree.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00E676] shrink-0 mt-0.5">→</span>
                <span>
                  You are planning a large purchase (Legendary Egg, Mythstar
                  Seed) and need to liquidate. Sell Stable/Falling first,
                  Rising last.
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-3">⛔ Do NOT use this guide when…</h3>
            <ul className="space-y-2 text-xs text-[#BAC4D1]">
              <li className="flex items-start gap-2">
                <span className="text-[#FF3D00] shrink-0 mt-0.5">→</span>
                <span>
                  The item is equipped on your main plot and generating income.
                  The decision tree values the item as a tradeable asset, not as
                  a productive tool. See the{" "}
                  <Link href="/grow-a-garden/best-mutation-combinations" className="text-[#00E676] hover:underline">
                    Farm Layout guide
                  </Link>{" "}
                  for equipped-item decisions.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF3D00] shrink-0 mt-0.5">→</span>
                <span>
                  You are a brand-new player (under 1 week in). Rare-item
                  trading is a late-game activity — focus on{" "}
                  <Link href="/grow-a-garden/best-legendary-seeds" className="text-[#00E676] hover:underline">
                    Legendary Seeds
                  </Link>{" "}
                  and{" "}
                  <Link href="/grow-a-garden/codes" className="text-[#00E676] hover:underline">
                    active codes
                  </Link>{" "}
                  first. Build your <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">pet collection</Link> before entering the rare-items market.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF3D00] shrink-0 mt-0.5">→</span>
                <span>
                  The Trading Database was updated less than 24 hours ago.
                  Post-update values can be volatile — wait 48 hours for the
                  market to settle before making a move.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF3D00] shrink-0 mt-0.5">→</span>
                <span>
                  You are trading with a friend at a discounted "goodwill"
                  price. The decision tree optimizes for market value —
                  interpersonal trades have different rules.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/rare-items-value" />
    </ContentLayout>
  );
}
