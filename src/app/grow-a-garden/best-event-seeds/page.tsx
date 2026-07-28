import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { seeds } from "@/data/garden/database/seeds";
import { crops } from "@/data/garden/database/crops";
import { events } from "@/data/garden/database/events";
import { trading } from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Best Event Seeds in Grow a Garden",
  description:
    "Ranked guide to every event-exclusive seed in Grow a Garden: Phoenix Bloom, Neon Pumpkin, Frost Melon, Magma Pepper, Premium Event, Lucky Clover, and Frostbloom.",
  keywords: [
    "best event seeds Grow a Garden",
    "Grow a Garden Phoenix Bloom Seed",
    "Grow a Garden Neon Pumpkin Seed",
    "Grow a Garden Frost Melon Seed",
    "Grow a Garden Magma Pepper Seed",
    "event exclusive seed Grow a Garden",
  ],
  alternates: { canonical: "/grow-a-garden/best-event-seeds" },
  openGraph: {
    title: "Best Event Seeds in Grow a Garden",
    description:
      "Ranked guide to every event-exclusive seed in Grow a Garden with prices, crops, and event availability.",
    type: "website",
  },
};

// Event-exclusive seeds — identified by season or event-tied names
const eventSeedNames = [
  "phoenix-bloom-seed",
  "neon-pumpkin-seed",
  "frost-melon-seed",
  "magma-pepper-seed",
  "premium-event-seed",
  "lucky-clover-seed",
  "frostbloom-seed",
];

const eventSeeds = seeds
  .filter((s) => eventSeedNames.includes(s.id))
  .sort((a, b) => {
    const tierOrder = { S: 0, A: 1, B: 2, C: 3 };
    return tierOrder[a.tier] - tierOrder[b.tier] || b.price - a.price;
  });

const cropMap = new Map(crops.map((c) => [c.id, c]));
const tradingByName = new Map<string, (typeof trading)[number]>();
for (const t of trading) {
  if (t.category === "Seed") tradingByName.set(t.name.toLowerCase(), t);
}

// Map seed to event by scanning event rewards
const eventBySeedName = new Map<string, string>();
for (const seed of eventSeeds) {
  const shortName = seed.name.replace(" Seed", "").toLowerCase();
  for (const ev of events) {
    if (ev.rewards.some((r) => r.toLowerCase().includes(shortName))) {
      eventBySeedName.set(seed.id, ev.id);
      break;
    }
  }
}

const seedRows = eventSeeds.map((s) => {
  const crop = s.cropId ? cropMap.get(s.cropId) : undefined;
  const trade = tradingByName.get(s.name.toLowerCase());
  const eventId = eventBySeedName.get(s.id);
  return {
    id: s.id,
    name: s.name,
    tier: s.tier,
    price: s.price,
    currency: s.currency,
    season: s.season,
    cropName: crop?.name ?? "—",
    cropCoins: crop?.coins ?? null,
    tradeValue: trade?.value ?? null,
    demand: trade?.demand ?? null,
    trend: trade?.trend ?? null,
    eventId,
  };
});

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

// Build the seasonal stockpile calendar — sorted by real calendar order
const seasonOrder = ["Spring", "Summer", "Autumn", "Winter"] as const;
const seasonMeta = {
  Spring: { months: "March – May", color: "#00E676", icon: "🌱" },
  Summer: { months: "June – August", color: "#FF3D00", icon: "☀️" },
  Autumn: { months: "September – November", color: "#FF8C00", icon: "🍂" },
  Winter: { months: "December – February", color: "#3A86FF", icon: "❄️" },
} as const;

const stockpileCalendar = seasonOrder.map((season) => {
  const inSeason = seedRows.filter((s) => s.season === season);
  const offSeason = seedRows.filter((s) => s.season !== season && s.season !== "All");
  return { season, inSeason, offSeason };
});

// Off-season premium candidates: seeds whose trade value rises after their event ends
const offSeasonPlays = seedRows.filter((s) => s.trend === "Rising" && s.season !== "All");

const faqs = [
  {
    question: "What are event seeds in Grow a Garden?",
    answer:
      "Event seeds are seeds that are only available during specific seasonal or limited-time events. They include Summer seeds (Phoenix Bloom, Magma Pepper), Autumn seeds (Neon Pumpkin), Winter seeds (Frost Melon, Frostbloom), Spring seeds (Lucky Clover), and premium event seeds (Premium Event Seed). Once the event ends, the seed becomes unavailable except through trading.",
  },
  {
    question: "Which event seed is the best?",
    answer:
      "The best event seed depends on the season. The Phoenix Bloom Seed (Summer) is among the strongest because it is S-Tier and grows into a high-value crop. The Premium Event Seed is also strong because it guarantees a mutation roll. Check the ranking table below for the full comparison.",
  },
  {
    question: "Can I still get event seeds after the event ends?",
    answer:
      "Only through trading. Event seeds are not re-released unless the same event returns in a future year. If you missed an event seed, monitor the Trading Database for current verified values and trade with players who stocked up during the event window.",
  },
  {
    question: "Are event seeds worth buying with Robux?",
    answer:
      "It depends on the seed. Event seeds that guarantee a mutation roll (such as the Premium Event Seed) can be worth the Robux if you are actively rolling for S-Tier mutations. Pure cosmetic or low-tier event seeds are usually not worth the real-money cost — wait for the in-game coin route if available.",
  },
  {
    question: "Do event seeds come back every year?",
    answer:
      "Seasonal event seeds (Summer, Autumn, Winter, Spring) tend to return annually with their respective events. Limited-time event seeds (Lunar New Year, Valentine's) are less predictable. Check our Events Tracker for upcoming events that may re-release specific seeds.",
  },
  {
    question: "Should I stockpile event seeds?",
    answer:
      "Yes, if you have the storage and coins. Event seeds often appreciate in trade value after the event ends because no new supply enters the market. Stockpile seeds that are S-Tier or have guaranteed mutation rolls — these hold value best. Avoid stockpiling low-tier event seeds.",
  },
];

export default function BestEventSeedsPage() {
  return (
    <ContentLayout
      title="Best Event Seeds in Grow a Garden"
      description="Ranked guide to every event-exclusive seed in Grow a Garden with prices, crops, and event availability."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Best Event Seeds", href: "/grow-a-garden/best-event-seeds" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-event-seeds"
      updatedAt={CONTENT_UPDATED_AT}
    >
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          Event seeds are the only <strong className="text-white">limited-supply</strong> seeds in
          Grow a Garden. Once an event ends, no new stock enters the market — prices are set
          entirely by who stocked up and who did not. This guide is built around that single rule:
          the seeds you buy <em>during</em> the event window are worth more than the seeds you
          trade for <em>after</em> it. Track the windows on the{" "}
          <Link href="/grow-a-garden/events" className="text-[#00E676] hover:underline">
            Events Tracker
          </Link>{" "}
          and cross-reference values with the canonical{" "}
          <Link href="/grow-a-garden/seeds" className="text-[#00E676] hover:underline">
            Seeds Database
          </Link>{" "}
          and{" "}
          <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">
            Trading Database
          </Link>
          .
        </p>
      </section>

      {/* ── Seasonal Stockpile Calendar ── */}
      <section aria-labelledby="calendar-heading">
        <h2
          id="calendar-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📅 The Seasonal Stockpile Calendar
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5 mb-4">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            Each season has a <strong className="text-white">buy window</strong> (event live —
            prices are lowest) and an <strong className="text-white">off-season</strong> (event
            ended — prices rise as supply dries up). The golden rule: buy the seed you will
            <em> need next season</em> during the <em>current</em> season, not when you actually
            need it.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stockpileCalendar.map(({ season, inSeason }) => {
            const meta = seasonMeta[season];
            return (
              <div
                key={season}
                className="rounded-xl border bg-[#14161D] p-4"
                style={{ borderColor: meta.color + "40" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{meta.icon}</span>
                  <h3 className="text-sm font-semibold" style={{ color: meta.color }}>
                    {season}
                  </h3>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[#768294] mb-3">
                  {meta.months}
                </div>
                {inSeason.length === 0 ? (
                  <p className="text-xs text-[#768294] italic">No exclusive event seeds this season.</p>
                ) : (
                  <ul className="space-y-2">
                    {inSeason.map((s) => (
                      <li key={s.id} className="text-xs">
                        <Link
                          href={`/grow-a-garden/seeds/${s.id}`}
                          className="text-[#00E676] hover:underline font-semibold"
                        >
                          {s.name}
                        </Link>
                        <div className="text-[#768294] mt-0.5">
                          {s.price.toLocaleString()} {s.currency === "Robux" ? "Robux" : "Sheckles"}
                          {" · "}
                          <span style={{ color: tierColors[s.tier] }}>{s.tier}-Tier</span>
                        </div>
                        {s.trend === "Rising" && (
                          <div className="text-[10px] text-[#00E676] mt-0.5">▲ Rising trade value</div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          Buy windows match the in-game event schedule. Off-season prices are sourced from the
          Trading Database (verified {CONTENT_UPDATED_AT}).
        </p>
      </section>

      {/* ── Off-Season Premium Plays ── */}
      <section aria-labelledby="offseason-heading">
        <h2
          id="offseason-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📈 Off-Season Premium Plays (Buy Now, Sell Later)
        </h2>
        <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-4">
            These seeds have a <strong className="text-[#00E676]">Rising</strong> trend in the
            Trading Database — meaning their trade value is climbing <em>right now</em>. If you
            can buy them during their event window, do it. If the event has already ended, the
            longer you wait the more you will pay.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-[#1E212B] text-[#768294]">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Seed</th>
                  <th className="px-4 py-2 text-left font-semibold">Season</th>
                  <th className="px-4 py-2 text-left font-semibold">Event Price</th>
                  <th className="px-4 py-2 text-left font-semibold">Current Trade Value</th>
                  <th className="px-4 py-2 text-left font-semibold">Premium</th>
                  <th className="px-4 py-2 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#252936]">
                {offSeasonPlays.map((s) => {
                  const premium = s.tradeValue && s.currency === "Sheckles"
                    ? Math.round(((s.tradeValue - s.price) / s.price) * 100)
                    : null;
                  return (
                    <tr key={s.id} className="text-[#BAC4D1]">
                      <td className="px-4 py-3">
                        <Link
                          href={`/grow-a-garden/seeds/${s.id}`}
                          className="text-[#00E676] hover:underline font-semibold"
                        >
                          {s.name}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-xs">{s.season}</td>
                      <td className="px-4 py-3 text-xs">
                        {s.price.toLocaleString()} {s.currency === "Robux" ? "Robux" : "🪙"}
                      </td>
                      <td className="px-4 py-3 text-xs text-[#00E676]">
                        {s.tradeValue ? s.tradeValue.toLocaleString() + " 🪙" : "—"}
                      </td>
                      <td className="px-4 py-3 text-xs">
                        {premium !== null && premium > 0 ? (
                          <span className="rounded bg-[#00E676]/15 px-2 py-0.5 font-bold text-[#00E676]">
                            +{premium}%
                          </span>
                        ) : (
                          <span className="text-[#768294]">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-xs">
                        {s.season === "Summer" || s.season === "Winter" ? (
                          <span className="text-[#FFD700]">Stockpile during event</span>
                        ) : (
                          <span className="text-[#FF8C00]">Buy if event is live</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Full Ranking Table ── */}
      <section aria-labelledby="ranking-heading">
        <h2
          id="ranking-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🎉 Full Event Seed Ranking
        </h2>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]">
                <th className="py-2 pr-3">Rank</th>
                <th className="py-2 pr-3">Seed</th>
                <th className="py-2 pr-3">Tier</th>
                <th className="py-2 pr-3">Season</th>
                <th className="py-2 pr-3">Price</th>
                <th className="py-2 pr-3">Grows Into</th>
                <th className="py-2 pr-3">Crop Value</th>
                <th className="py-2 pr-3">Trade Value</th>
              </tr>
            </thead>
            <tbody>
              {seedRows.map((row, i) => (
                <tr key={row.id} className="border-b border-[#1E212B]">
                  <td className="py-3 pr-3 font-semibold text-[#BAC4D1]">#{i + 1}</td>
                  <td className="py-3 pr-3">
                    <Link
                      href={`/grow-a-garden/seeds/${row.id}`}
                      className="text-[#00E676] hover:underline"
                    >
                      {row.name}
                    </Link>
                  </td>
                  <td className="py-3 pr-3">
                    <span
                      className="rounded px-2 py-0.5 text-xs font-bold"
                      style={{
                        color: tierColors[row.tier],
                        background: tierColors[row.tier] + "22",
                      }}
                    >
                      {row.tier}
                    </span>
                  </td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{row.season}</td>
                  <td className="py-3 pr-3 text-white">
                    {row.price.toLocaleString()} {row.currency === "Robux" ? "Robux" : "🪙"}
                  </td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{row.cropName}</td>
                  <td className="py-3 pr-3 text-xs text-[#00E676]">
                    {row.cropCoins ? row.cropCoins.toLocaleString() + " 🪙" : "—"}
                  </td>
                  <td className="py-3 pr-3 text-xs text-[#00E676]">
                    {row.tradeValue ? row.tradeValue.toLocaleString() : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          Prices and crop values sourced from the canonical Seeds and{" "}
          <Link href="/grow-a-garden/crops" className="text-[#00E676] hover:underline">Crops</Link>{" "}
          databases. Trade
          values sourced from the Trading Database. Last reviewed {CONTENT_UPDATED_AT}.
        </p>
      </section>

      {/* ── Real Player Scenario ── */}
      <section aria-labelledby="scenario-heading">
        <h2
          id="scenario-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🎮 Player Scenario: The Spring-to-Summer Rotation
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-4">
            A concrete example of how the seasonal stockpile calendar plays out. Names are
            illustrative, but the numbers and the strategy are pulled directly from the
            databases above.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-4">
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Player Type</div>
              <div className="text-sm text-white mt-1">Mid-game farmer, 4 weeks in</div>
              <div className="text-xs text-[#768294] mt-1">Active ~1 hour/day, F2P (no Robux)</div>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Current Resources (Late Spring)</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• 60,000 Sheckles banked</li>
                <li>• 4 plots unlocked</li>
                <li>• A-Tier pet (3.0×) equipped</li>
                <li>• Spring Event ends in 3 days</li>
                <li>• Summer Event starts in ~2 weeks</li>
              </ul>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Goal (End of Summer Event)</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• Own at least 2 Phoenix Bloom Seeds</li>
                <li>• Reserve 20,000 Sheckles for Summer event spends</li>
                <li>• Skip Lucky Clover Seed (Robux-only, F2P)</li>
                <li>• Finish Summer with 1 S-Tier Summer crop plot</li>
              </ul>
            </div>
            <div className="rounded bg-[#00E676]/10 p-3 border border-[#00E676]/30">
              <div className="text-xs text-[#00E676] uppercase tracking-wider">Recommended Route</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• <strong className="text-white">Day 1–3:</strong> Spend 10,000 on 1 Frost Melon Seed for Winter prep (off-season discount)</li>
                <li>• <strong className="text-white">Day 4–14:</strong> Farm normally, save the rest</li>
                <li>• <strong className="text-white">Day 15:</strong> Summer event opens — buy 2× Phoenix Bloom Seed (100,000 total). Use savings + sell 1 Frost Melon Seed at +20% premium</li>
                <li>• <strong className="text-white">Day 16+:</strong> Plant Phoenix Bloom on best plot, harvest aggressively during Summer bonus window</li>
              </ul>
            </div>
          </div>
          <div className="rounded bg-[#1E212B] p-3 border-l-2 border-[#00E676]">
            <p className="text-xs text-[#BAC4D1]">
              <strong className="text-white">Why this works:</strong> The player bought Frost
              Melon at its <em>lowest</em> price (off-season, low demand) and flipped part of
              the stack during the Summer event rush when Winter-prep buyers are active. The
              profit funded the Phoenix Bloom purchase — zero net Sheckle loss, two seasonal
              crops secured.
            </p>
          </div>
        </div>
      </section>

      {/* ── Strategy: When to Buy vs When to Skip ── */}
      <section aria-labelledby="strategy-heading">
        <h2
          id="strategy-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🎯 When to Buy vs When to Skip
        </h2>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-[#00E676] mb-3">
              ✅ Buy when…
            </h3>
            <ul className="space-y-2 text-xs text-[#BAC4D1]">
              <li className="flex items-start gap-2">
                <span className="text-[#00E676] shrink-0 mt-0.5">→</span>
                <span>
                  <strong className="text-white">The event is live.</strong> Prices are at
                  their lowest because supply is unlimited during the window. This is the only
                  time you should ever pay full Sheckle price.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00E676] shrink-0 mt-0.5">→</span>
                <span>
                  <strong className="text-white">The seed is S-Tier or guarantees a mutation roll.</strong>{" "}
                  Phoenix Bloom, Premium Event Seed, Frostbloom, Lucky Clover — these hold or
                  increase value because the underlying ability (mutation roll, high-tier crop)
                  is always useful.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00E676] shrink-0 mt-0.5">→</span>
                <span>
                  <strong className="text-white">You need it for an upcoming season.</strong> If
                  Summer is 2 weeks away and you have no Summer seed, buy Phoenix Bloom during
                  the Spring off-season discount window — do not wait until Summer when everyone
                  is buying.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00E676] shrink-0 mt-0.5">→</span>
                <span>
                  <strong className="text-white">The Trading Database trend is "Rising".</strong>{" "}
                  This is the single most reliable signal that demand is outpacing supply — the
                  price will be higher next week.
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-3">
              ⛔ Skip when…
            </h3>
            <ul className="space-y-2 text-xs text-[#BAC4D1]">
              <li className="flex items-start gap-2">
                <span className="text-[#FF3D00] shrink-0 mt-0.5">→</span>
                <span>
                  <strong className="text-white">It is a Robux seed and you are F2P.</strong>{" "}
                  Lucky Clover (99 Robux) and Frostbloom (75 Robux) are strong, but only worth
                  it if you are already spending Robux on the game. The Sheckle-route Phoenix
                  Bloom covers 80% of the same ground for free.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF3D00] shrink-0 mt-0.5">→</span>
                <span>
                  <strong className="text-white">The event is over and the trend is "Falling".</strong>{" "}
                  Magma Pepper Seed is the classic trap — Summer-only, but outclassed by Phoenix
                  Bloom in the same season. After Summer ends, its price keeps dropping, not
                  rising. Never buy it off-season.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF3D00] shrink-0 mt-0.5">→</span>
                <span>
                  <strong className="text-white">You already own an all-season S-Tier seed.</strong>{" "}
                  Mythstar Seed and Star Melon Seed work year-round. A seasonal seed is only a
                  strict upgrade during its own event window — outside of it, your all-season
                  seed outperforms.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF3D00] shrink-0 mt-0.5">→</span>
                <span>
                  <strong className="text-white">You cannot afford to bulk-buy.</strong> A
                  single event seed is a speculative bet; 2–3 is a strategy. If you only have
                  enough for one, save the coins for the next event instead.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Common Mistakes ── */}
      <section aria-labelledby="mistakes-heading">
        <h2
          id="mistakes-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⚠️ Common Mistakes (and What They Cost You)
        </h2>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <ol className="space-y-4 text-sm text-[#BAC4D1] list-decimal pl-5">
            <li>
              <strong className="text-white">Buying event seeds at full price after the event ends.</strong>
              <br />
              <span className="text-xs">
                The classic mistake. A Phoenix Bloom Seed that cost 50,000 Sheckles during the
                Summer event can trade for 320,000+ Sheckles a month later (per the{" "}
                <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">
                  Trading Database
                </Link>
                ). <span className="text-[#FF3D00]">Cost: ~6× overpay.</span> Fix: track event
                dates on the{" "}
                <Link href="/grow-a-garden/events" className="text-[#00E676] hover:underline">
                  Events Tracker
                </Link>{" "}
                and buy during the window, even if you do not need the seed yet.
              </span>
            </li>
            <li>
              <strong className="text-white">Stockpiling Magma Pepper Seeds "because they are cheap".</strong>
              <br />
              <span className="text-xs">
                Magma Pepper is A-Tier and Summer-only, but it is outclassed by Phoenix Bloom in
                every scenario. Its trade trend is{" "}
                <span className="text-[#FF3D00]">Falling</span> — meaning the longer you hold
                it, the less it is worth. <span className="text-[#FF3D00]">Cost: capital locked
                in a depreciating asset.</span> Fix: only stockpile seeds with a "Rising" or
                "Stable" trend in the Trading Database.
              </span>
            </li>
            <li>
              <strong className="text-white">Spending Robux on Premium Event Seeds without a mutation plan.</strong>
              <br />
              <span className="text-xs">
                Premium Event Seed (199 Robux) guarantees a mutation roll on every harvest — but
                if you do not have Mutation Shards or a plot ready to apply the roll, you are
                paying real money for a chance you cannot use.{" "}
                <span className="text-[#FF3D00]">Cost: 199 Robux wasted per seed.</span> Fix:
                only buy Premium Event Seeds when you have an active mutation farming setup
                (Mutation Station unlocked, 5+ shards banked, main plot cleared).
              </span>
            </li>
            <li>
              <strong className="text-white">Skipping the seasonal seed entirely because "it is only one season".</strong>
              <br />
              <span className="text-xs">
                A common F2P mistake. Even if you only use Phoenix Bloom for 3 months, the
                Summer bonus window can generate more coins in those 3 months than an all-season
                A-Tier seed generates all year. <span className="text-[#FF3D00]">Cost: missed
                2–3× multiplier during the peak season.</span> Fix: always secure at least one
                seed per season, even if it is the only one you can afford.
              </span>
            </li>
          </ol>
        </div>
      </section>

      {/* ── Action Checklist ── */}
      <section aria-labelledby="checklist-heading">
        <h2
          id="checklist-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ✅ Action Checklist
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">☐</span>
              Check the{" "}
              <Link href="/grow-a-garden/events" className="text-[#00E676] hover:underline">
                Events Tracker
              </Link>{" "}
              for the next event start date.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">☐</span>
              Identify which seasonal seeds you are missing from the{" "}
              <Link href="/grow-a-garden/seeds" className="text-[#00E676] hover:underline">
                Seeds Database
              </Link>
              .
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">☐</span>
              Verify the current trade trend (Rising/Stable/Falling) on the{" "}
              <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">
                Trading Database
              </Link>{" "}
              before any purchase.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">☐</span>
              During the event window, buy 2+ copies of any S-Tier seasonal seed (Phoenix Bloom,
              Frost Melon) — one to plant, one to trade.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">☐</span>
              Off-season, only buy seeds with a "Rising" trend — never buy a "Falling" seed at a
              premium.
            </li>
          </ul>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/best-event-seeds" />
    </ContentLayout>
  );
}
