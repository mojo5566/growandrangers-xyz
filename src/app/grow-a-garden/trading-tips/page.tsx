import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { trading } from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Trading Tips for Grow a Garden",
  description:
    "Proven trading tips for Grow a Garden: how to evaluate offers, spot scams, time your trades, and build a profitable trading strategy with verified market values.",
  keywords: [
    "Grow a Garden trading tips",
    "Grow a Garden trading strategy",
    "Grow a Garden scam prevention",
    "Grow a Garden fair trade",
    "Grow a Garden trading guide",
    "how to trade in Grow a Garden",
  ],
  alternates: { canonical: "/grow-a-garden/trading-tips" },
  openGraph: {
    title: "Trading Tips for Grow a Garden",
    description:
      "Proven trading tips: how to evaluate offers, spot scams, time your trades, and build a profitable trading strategy.",
    type: "website",
  },
};

// High-demand and rising items for "what to trade" section
const highDemand = trading.filter((t) => t.demand === "High").slice(0, 8);
const risingTrend = trading.filter((t) => t.trend === "Rising").slice(0, 6);
// Fair vs unfair trade examples using real database entries
const fairExample = trading.find((t) => t.name === "Crystal Unicorn Foal");
const fairCounter = trading.find((t) => t.name === "Golden Dragon");
const scamExample = trading.find((t) => t.name === "Golden Phoenix Chick");
const scamCounter = trading.find((t) => t.name === "Dust Bunny");

const faqs = [
  {
    question: "How do I know if a trade is fair in Grow a Garden?",
    answer:
      "A trade is fair when both items have similar verified trade values in our Trading Database. Look up both items, compare their current values, and ensure the difference is within 10-15%. If one side is offering an item worth significantly more, it is either a scam or they are expecting you to add currency (coins) to balance the trade.",
  },
  {
    question: "What are the most common trading scams in Grow a Garden?",
    answer:
      "Common scams include: offering a look-alike item with lower value, claiming an item is 'limited edition' when it is not, pressuring you to trade quickly before you can verify, and offering too-good-to-be-true deals. Always verify values in our Trading Database, never trade under time pressure, and double-check the exact item you are receiving before confirming.",
  },
  {
    question: "When is the best time to trade in Grow a Garden?",
    answer:
      "The best time to trade is during major updates and events, when market activity is highest and new items enter circulation. If you own items with 'Rising' trends, hold them — they are appreciating. If you own items with 'Falling' trends, trade them before the value drops further. Avoid trading during off-peak hours when fewer players are online.",
  },
  {
    question: "Should I trade my rare pet for multiple less-rare items?",
    answer:
      "Usually no. Rare items (especially S-Tier pets) appreciate over time and are hard to re-acquire. Trading one rare item for multiple less-rare items dilutes your holdings and makes it harder to trade back up. Only do this if the total value of the less-rare items significantly exceeds your rare item's value.",
  },
  {
    question: "How do I build a profitable trading strategy?",
    answer:
      "Start by stockpiling high-demand items from our Trading Database. Monitor trends weekly — buy items with 'Rising' trends and sell them when demand peaks. Diversify across categories (pets, seeds, crops, mutations) to spread risk. Never put all your wealth into a single item. Reinvest profits into higher-tier items as your trading capital grows.",
  },
  {
    question: "Where can I check current trade values?",
    answer:
      "Check our Trading Database at /grow-a-garden/trading for current verified values of every tradeable item. Values are reviewed weekly and updated to reflect market conditions. Always cross-reference both items in the database before confirming any trade.",
  },
];

export default function TradingTipsPage() {
  return (
    <ContentLayout
      title="Trading Tips for Grow a Garden"
      description="Proven trading tips: how to evaluate offers, spot scams, time your trades, and build a profitable trading strategy."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Trading Tips", href: "/grow-a-garden/trading-tips" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/trading-tips"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Opening — concrete loss number rather than generic intro */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          A player with a <strong className="text-white">Golden Phoenix Chick</strong> (verified value 5,000,000 coins) accepts a trade for a <strong className="text-white">Dust Bunny</strong> + 50,000 coins because the trader said &quot;Dust Bunny is rare, only drops during special events.&quot; Net loss: <strong className="text-[#FF3D00]">4,949,500 coins</strong>. This scenario plays out daily. Trading is the fastest way to accelerate your farm — and the fastest way to lose months of progress in 10 seconds. Always cross-check any pet offer against the{" "}
          <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">Pets Database</Link>{" "}
          before committing, and use the real{" "}
          <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">Trading Database</Link>{" "}
          values to show you exactly how to evaluate, negotiate, and close trades without getting scammed.
        </p>
      </section>

      {/* Real Trade Dialogue — NEW section, replaces templated "How to Evaluate" ol-list */}
      <section aria-labelledby="dialogue-heading">
        <h2
          id="dialogue-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          💬 Real Trade Dialogue: Fair vs Scam
        </h2>
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Fair Trade Example */}
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-3">✅ Fair Trade Example</h3>
            <div className="space-y-2 text-xs text-[#BAC4D1] mb-3">
              <p><strong className="text-white">Trader:</strong> &quot;Trading my {fairCounter?.name ?? "Golden Dragon"} for your {fairExample?.name ?? "Crystal Unicorn Foal"}. Fair?&quot;</p>
              <p><strong className="text-white">You:</strong> &quot;Let me check values.&quot;</p>
              <p className="text-[#768294]">[You open the Trading Database.]</p>
              <p><strong className="text-white">You:</strong> &quot;{fairExample?.name} is {fairExample?.value.toLocaleString()} coins, {fairCounter?.name} is {fairCounter?.value.toLocaleString()} coins. Difference is {fairExample && fairCounter ? Math.round(Math.abs(fairExample.value - fairCounter.value) / Math.max(fairExample.value, fairCounter.value) * 100) : 0}%. Fair trade, accept.&quot;</p>
            </div>
            <div className="rounded bg-[#1E212B] p-2 border border-[#252936] text-xs text-[#768294]">
              <strong className="text-[#00E676]">Why it&apos;s fair:</strong> Value gap under 15%, both items in high demand, both are S-Tier pets. No pressure, time to verify, clean negotiation.
            </div>
          </div>

          {/* Scam Example */}
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-3">🚫 Scam Example</h3>
            <div className="space-y-2 text-xs text-[#BAC4D1] mb-3">
              <p><strong className="text-white">Scammer:</strong> &quot;TRADE FAST — giving away {scamExample?.name ?? "Golden Phoenix Chick"} for {scamCounter?.name ?? "Dust Bunny"} + 50k. Only got 30 seconds, hurry!&quot;</p>
              <p><strong className="text-white">You:</strong> &quot;Let me check values.&quot;</p>
              <p className="text-[#768294]">[You open the Trading Database.]</p>
              <p><strong className="text-white">You:</strong> &quot;{scamExample?.name} is {scamExample?.value.toLocaleString()} coins. {scamCounter?.name} is {scamCounter?.value.toLocaleString()} coins. You&apos;re offering 5M value for 50k value. Decline.&quot;</p>
              <p><strong className="text-white">Scammer:</strong> &quot;Dust Bunny is super rare, only from events. Trust me bro.&quot;</p>
              <p><strong className="text-white">You:</strong> &quot;Database says Dust Bunny drops from Basic Eggs at 1.0× multiplier. Not rare. Reported.&quot;</p>
            </div>
            <div className="rounded bg-[#1E212B] p-2 border border-[#252936] text-xs text-[#768294]">
              <strong className="text-[#FF3D00]">Scam red flags:</strong> Time pressure, value gap 99%, fake rarity claim, no patience for verification. Walk away.
            </div>
          </div>
        </div>
      </section>

      {/* Fair Trade Calculator Table — NEW, fixes "no Table" gap from audit */}
      <section aria-labelledby="fairness-heading">
        <h2
          id="fairness-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📊 Fair Trade Calculator (Real Values)
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-3">
            A trade is <strong className="text-white">fair</strong> when the value gap is under 15%. Anything above 25% is either a scam or requires coin balancing. Use this table to estimate fair-trade corridors using real database values.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-[#1E212B] text-[#768294]">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Your Item</th>
                  <th className="px-4 py-2 text-left font-semibold">Verified Value</th>
                  <th className="px-4 py-2 text-left font-semibold">Fair Counter-Trade Range (±15%)</th>
                  <th className="px-4 py-2 text-left font-semibold">Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#252936]">
                {trading
                  .filter((t) => t.value >= 500000)
                  .slice(0, 8)
                  .map((item) => {
                    const min = Math.round(item.value * 0.85);
                    const max = Math.round(item.value * 1.15);
                    return (
                      <tr key={item.id}>
                        <td className="px-4 py-3 text-[#BAC4D1]">
                          <Link
                            href={`/grow-a-garden/trading/${item.id}`}
                            className="text-[#00E676] hover:underline"
                          >
                            {item.name}
                          </Link>
                          <span className="text-xs text-[#768294]"> ({item.category})</span>
                        </td>
                        <td className="px-4 py-3 text-white">{item.value.toLocaleString()} 🪙</td>
                        <td className="px-4 py-3 text-[#00E676]">
                          {min.toLocaleString()} – {max.toLocaleString()} 🪙
                        </td>
                        <td className="px-4 py-3 text-xs text-[#768294]">
                          {item.trend === "Rising" && "Hold — value appreciating"}
                          {item.trend === "Stable" && "Trade freely at market value"}
                          {item.trend === "Falling" && "Trade away — value dropping"}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[#768294]">
            Values sourced from the canonical Trading Database. Last reviewed {CONTENT_UPDATED_AT}.
          </p>
        </div>
      </section>

      {/* Worked Example — NEW section, replaces templated "Building a Strategy" ol-list */}
      <section aria-labelledby="example-heading">
        <h2
          id="example-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📋 Worked Example: 7-Day Trading Flip
        </h2>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <div className="grid gap-3 sm:grid-cols-2 mb-4">
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Player resources (Day 1)</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• 1 duplicate A-Tier pet (Phoenix Hatchling, 1.3M value)</li>
                <li>• 200,000 coins banked</li>
                <li>• No prior trading experience</li>
                <li>• No S-Tier items</li>
              </ul>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Goal (Day 7)</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• Convert duplicate into S-Tier item</li>
                <li>• Build 3M+ coin trade value</li>
                <li>• Avoid losing value to scams or bad trades</li>
                <li>• Diversify across at least 2 categories</li>
              </ul>
            </div>
          </div>
          <div className="text-sm leading-relaxed text-[#BAC4D1] space-y-2">
            <p><strong className="text-white">Day 1–2 (Research):</strong> Open the{" "}
              <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">Trading Database</Link>{" "}
              and identify items with <strong className="text-white">Rising</strong> trends. Note 3-5 target items whose values are within 15% of your Phoenix Hatchling (1.3M coins). Filter for <strong className="text-white">High demand</strong> — these are easiest to trade.</p>
            <p><strong className="text-white">Day 3 (First trade):</strong> List the Phoenix Hatchling in trade chat with the verified value: <em>&quot;Trading Phoenix Hatchling (1.3M verified) for Frost Wolf Pup (850k) + 450k coins — fair, no rush.&quot;</em> Take 5–10 minutes per offer; walk away from anyone pressuring you. Target a fair-value exchange with another trader who needs a Phoenix.</p>
            <p><strong className="text-white">Day 4–5 (Hold and re-list):</strong> Now holding Frost Wolf Pup (850k, Winter seasonal — value rises 10–15% in Winter weeks). Re-list at 950k value during a Winter Event. The 100k spread is your profit margin. Use the 450k coins to buy 2 Rare Eggs — expected yield: 1 B-Tier pet (~200k value) plus chance at A-Tier.</p>
            <p><strong className="text-white">Day 6–7 (Trade up):</strong> Trade the Frost Wolf Pup (now 950k) + B-Tier pet (200k) + 200k coins for a Starlight Doe (1.3M). You&apos;ve converted a duplicate Phoenix Hatchling into a Starlight Doe plus 250k coins profit — without ever spending Robux or risking your farm.</p>
            <p className="text-xs text-[#00E676] mt-3">
              Result: 1.3M starting value → 1.55M ending value (Starlight Doe + 250k coins) in 7 days. Compound weekly for 4 weeks and you&apos;re at S-Tier pet trade range (2.4M+).
            </p>
          </div>
        </div>
      </section>

      {/* Scam Pattern Reference — replaces templated 4-card "Scams" grid */}
      <section aria-labelledby="scam-patterns-heading">
        <h2
          id="scam-patterns-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🚫 Scam Pattern Reference (Memorize These)
        </h2>
        <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-5">
          <ol className="space-y-3 text-sm text-[#BAC4D1]">
            <li>
              <strong className="text-[#FF3D00]">Pattern 1: Time Pressure + Urgency</strong>
              <br />
              <span className="text-[#768294]">&quot;Trade fast, only 30 seconds!&quot; / &quot;Someone else is offering, decide now!&quot;</span>
              <br />
              <span className="text-[#00E676]">→ Defense:</span> Legitimate traders wait. Walk away from any trade with an artificial deadline.
            </li>
            <li>
              <strong className="text-[#FF3D00]">Pattern 2: Fake Rarity Inflation</strong>
              <br />
              <span className="text-[#768294]">&quot;Dust Bunny is super rare, only from events.&quot;</span>
              <br />
              <span className="text-[#00E676]">→ Defense:</span> Always verify in the{" "}
              <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">Trading Database</Link>. If the item&apos;s source is &quot;Basic Egg&quot; or &quot;Rare Egg,&quot; it is not event-exclusive.
            </li>
            <li>
              <strong className="text-[#FF3D00]">Pattern 3: Look-Alike Substitution</strong>
              <br />
              <span className="text-[#768294]">Offering &quot;Golden Dragon&quot; but actually trading a renamed &quot;Garden Caterpillar&quot; — visual icons can look similar in the trade window.</span>
              <br />
              <span className="text-[#00E676]">→ Defense:</span> Click every item to open its full profile. Read the exact name and multiplier before confirming.
            </li>
            <li>
              <strong className="text-[#FF3D00]">Pattern 4: Bait-and-Switch Mid-Trade</strong>
              <br />
              <span className="text-[#768294]">Trader shows the agreed item, then cancels and re-opens the trade with a look-alike lower-value item, hoping you don&apos;t re-check.</span>
              <br />
              <span className="text-[#00E676]">→ Defense:</span> Re-verify EVERY time the trade window reopens. Never assume the second offer matches the first.
            </li>
            <li>
              <strong className="text-[#FF3D00]">Pattern 5: Too-Good-To-Be-True Giveaway</strong>
              <br />
              <span className="text-[#768294]">&quot;Free Golden Phoenix Chick, just trade me any pet for verification.&quot;</span>
              <br />
              <span className="text-[#00E676]">→ Defense:</span> No one gives away 5M-coin items for free. Block the trader and report.
            </li>
          </ol>
        </div>
      </section>

      {/* What to Trade Right Now — kept but compressed, replaces templated "What to Trade" 2-col grid */}
      <section aria-labelledby="what-to-trade-heading">
        <h2
          id="what-to-trade-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📈 What to Trade Right Now (Live Database Pull)
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-[#00E676] mb-2">High-Demand (Easy to Trade)</h3>
              <ul className="space-y-1.5">
                {highDemand.slice(0, 6).map((item) => (
                  <li key={item.id} className="text-xs text-[#BAC4D1]">
                    <Link href={`/grow-a-garden/trading/${item.id}`} className="text-[#00E676] hover:underline">
                      {item.name}
                    </Link>{" "}
                    — {item.value.toLocaleString()} 🪙 ({item.category})
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#FF8C00] mb-2">Rising Trend (Hold if Owned)</h3>
              <ul className="space-y-1.5">
                {risingTrend.slice(0, 6).map((item) => (
                  <li key={item.id} className="text-xs text-[#BAC4D1]">
                    <Link href={`/grow-a-garden/trading/${item.id}`} className="text-[#00E676] hover:underline">
                      {item.name}
                    </Link>{" "}
                    — {item.value.toLocaleString()} 🪙 ({item.demand} demand)
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/trading-tips" />
    </ContentLayout>
  );
}
