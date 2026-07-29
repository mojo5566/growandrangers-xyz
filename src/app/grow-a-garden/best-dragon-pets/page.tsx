import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { pets } from "@/data/garden/database/pets";
import { trading } from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Best Dragon Pets in Grow a Garden",
  description:
    "Every Grow a Garden dragon pet ranked: Golden Dragon, Neon Dragon Hatchling, and Baby Dragon by multiplier, ability, trade value, and which to chase first.",
  keywords: [
    "best dragon pet Grow a Garden",
    "Grow a Garden Golden Dragon",
    "Grow a Garden Neon Dragon Hatchling",
    "Grow a Garden Baby Dragon",
    "dragon pet tier list Grow a Garden",
    "dragon pet multiplier Grow a Garden",
  ],
  alternates: { canonical: "/grow-a-garden/best-dragon-pets" },
  openGraph: {
    title: "Best Dragon Pets in Grow a Garden",
    description:
      "Ranked comparison of every dragon pet in Grow a Garden with multipliers, abilities, and trade values.",
    type: "website",
  },
};

// Dragon-themed pets from the canonical database
const dragonPets = pets
  .filter((p) =>
    /dragon/i.test(p.name) ||
    /dragon/i.test(p.id) ||
    p.aliases.some((a) => /dragon/i.test(a))
  )
  .sort((a, b) => b.multiplier - a.multiplier);

// Cross-reference trading values by name (case-insensitive)
const tradingByName = new Map<string, (typeof trading)[number]>();
for (const t of trading) {
  if (t.category === "Pet") tradingByName.set(t.name.toLowerCase(), t);
}

const dragonRows = dragonPets.map((p) => {
  const trade = tradingByName.get(p.name.toLowerCase());
  return {
    name: p.name,
    tier: p.tier,
    multiplier: p.multiplier,
    source: p.source,
    ability: p.abilities[0] ?? "—",
    tradeValue: trade?.value ?? null,
    demand: trade?.demand ?? null,
    trend: trade?.trend ?? null,
    id: p.id,
  };
});

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

const faqs = [
  {
    question: "What is the best dragon pet in Grow a Garden?",
    answer:
      "The Golden Dragon is the strongest dragon pet in Grow a Garden. It pairs a top-tier multiplier with consistently high demand on the trading market, making it the best dragon pet for both active farming and long-term value. The Neon Dragon Hatchling is the best budget dragon because it is hatched from a Rare Egg instead of a Legendary Egg.",
  },
  {
    question: "How do I get the Golden Dragon in Grow a Garden?",
    answer:
      "The Golden Dragon hatches from Legendary Eggs, which cost 10,000 coins each from the Egg Shop. The base drop rate for a Golden Dragon is very low (around 1-3% per Legendary Egg), so most players need to open 30+ eggs to hatch one. Save coins from your main farming loop and consider bulk-hatching during boosted events to improve your odds.",
  },
  {
    question: "Is the Neon Dragon Hatchling good for beginners?",
    answer:
      "Yes. The Neon Dragon Hatchling comes from a Rare Egg (much cheaper than a Legendary Egg) and still provides a solid multiplier. Its fire-immunity ability is situational but useful during Summer Event farming when fire damage events are more common. It is the most accessible dragon pet for new players.",
  },
  {
    question: "Can dragon pets be traded in Grow a Garden?",
    answer:
      "Yes. All dragon pets are tradeable and command some of the highest values in the trading market. The Golden Dragon in particular is one of the highest-value tradeable items in the entire game. See our Trading Database for current verified market values and demand trends for each dragon pet.",
  },
  {
    question: "Do dragon pets stack with mutations?",
    answer:
      "Yes. Pet multipliers stack multiplicatively with mutation multipliers. A Golden Dragon paired with a Prismatic Rainbow mutation (6.0x) on a high-value crop can produce some of the largest single-harvest payouts in the game. Always run your best dragon pet on your highest-multiplier plot.",
  },
  {
    question: "Should I keep duplicate dragon pets?",
    answer:
      "Keep one dragon pet for active farming and trade any duplicates. Duplicate Legendary-tier dragons hold significant trade value — a second Golden Dragon trades for roughly 2.8M Sheckles, enough to acquire S-Tier mutation shards or event-exclusive items you may have missed. Running two identical dragons on separate plots does not stack their multipliers, so the duplicate generates zero extra income while held. List it in the Trading Database once you have a stable A-Tier backup pet on your secondary plot.",
  },
];

export default function BestDragonPetsPage() {
  return (
    <ContentLayout
      title="Best Dragon Pets in Grow a Garden"
      description="Ranked comparison of every dragon pet in Grow a Garden with multipliers, abilities, and trade values."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Best Dragon Pets", href: "/grow-a-garden/best-dragon-pets" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-dragon-pets"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Pets"
      keywords={[
        "best dragon pet Grow a Garden",
        "Grow a Garden Golden Dragon",
        "Grow a Garden Neon Dragon Hatchling",
        "Grow a Garden Baby Dragon",
        "dragon pet tier list Grow a Garden",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - AI search summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          The best dragon pet in Grow a Garden is the <strong className="text-white">Golden Dragon</strong> at 4.8× multiplier from Legendary Eggs, followed by the <strong className="text-white">Neon Dragon Hatchling</strong> at 4.2× from Rare Eggs. Players earning under 50,000 coins per hour should target the Neon Dragon Hatchling — Rare Eggs cost 2,000 coins versus 10,000 for Legendary, making it 5× cheaper per attempt. Bulk-hatch 30 Legendary Eggs during a boosted event for a realistic shot at the Golden Dragon.
        </p>
      </section>

      {/* Opening — concrete failure case rather than generic intro */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          A player opens 5 Legendary Eggs (50,000 coins) hoping for a Golden Dragon, gets 5 Common pets, and quits. Another player opens 30 Legendary Eggs during a boosted event and lands 2 S-Tier dragons. The difference is not luck — it is <strong className="text-white">bulk-hatching discipline + event timing</strong>. This guide uses real{" "}
          <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">Trading Database</Link>{" "}
          values and the canonical{" "}
          <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">Pets Database</Link>{" "}
          to show you which dragon to chase based on your actual coin income — not a generic ranking.
        </p>
      </section>

      {/* Resource-path decision flow — replaces generic Ranking Table + How to Get 4-card grid */}
      <section aria-labelledby="decision-heading">
        <h2 id="decision-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          🐉 Which Dragon Should You Chase? (Resource-Path Flow)
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-4">
            The right dragon depends on your <strong className="text-white">current coin income per hour</strong>. Answer the first question and follow the branch.
          </p>
          <ol className="space-y-4 text-sm text-[#BAC4D1] border-l-2 border-[#252936] pl-4">
            <li>
              <strong className="text-white">Q1: Are you earning under 5,000 coins/hour?</strong>
              <br />
              <span className="text-[#00E676]">→ Yes:</span> Stop chasing dragons entirely. You cannot afford Legendary Eggs (10,000 each) without stalling your farm. Plant{" "}
              <Link href="/grow-a-garden/seeds" className="text-[#00E676] hover:underline">Golden Wheat</Link>{" "}
              on all plots, redeem{" "}
              <Link href="/grow-a-garden/codes" className="text-[#00E676] hover:underline">active codes</Link>, and reach 5,000 coins/hour before returning.
            </li>
            <li>
              <strong className="text-white">Q2: Earning 5,000–50,000 coins/hour?</strong>
              <br />
              <span className="text-[#00E676]">→ Target: Neon Dragon Hatchling</span> (4.2× multiplier) from Rare Eggs (2,000 coins each). Rare Eggs are 5× cheaper than Legendary Eggs and still hatch a strong dragon. Budget: 20,000 coins for 10 Rare Eggs. Use this dragon as your main plot pet for 2–3 weeks while you save for Legendary Egg attempts.
            </li>
            <li>
              <strong className="text-white">Q3: Earning 50,000–200,000 coins/hour?</strong>
              <br />
              <span className="text-[#00E676]">→ Target: Baby Dragon</span> (2.2× multiplier, Rare Egg) as a stopgap OR skip straight to Legendary Egg attempts if you have 300,000+ coins banked. At this income, you can afford 30+ Legendary Eggs (the statistical break-even for one S-Tier dragon).
            </li>
            <li>
              <strong className="text-white">Q4: Earning 200,000+ coins/hour?</strong>
              <br />
              <span className="text-[#00E676]">→ Target: Golden Dragon</span> (4.8× multiplier, Legendary Egg). Bulk-hatch 30–50 Legendary Eggs during a{" "}
              <Link href="/grow-a-garden/events" className="text-[#00E676] hover:underline">boosted event</Link>{" "}
              for ~2× S-Tier odds. Expected cost: 300,000–500,000 coins. Expected yield: 1 S-Tier dragon with ~5–8% drop rate per bulk-30.
            </li>
          </ol>
        </div>
      </section>

      {/* Compact reference table — kept for data lookup, compressed */}
      <section aria-labelledby="ranking-heading">
        <h2 id="ranking-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          📊 Dragon Pet Quick Reference
        </h2>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]">
                <th className="py-2 pr-3">Pet</th>
                <th className="py-2 pr-3">Tier</th>
                <th className="py-2 pr-3">Multiplier</th>
                <th className="py-2 pr-3">Source</th>
                <th className="py-2 pr-3">Trade Value</th>
                <th className="py-2 pr-3">Best For</th>
              </tr>
            </thead>
            <tbody>
              {dragonRows.map((row, i) => (
                <tr key={row.id} className="border-b border-[#1E212B]">
                  <td className="py-3 pr-3">
                    <Link href={`/grow-a-garden/pets/${row.id}`} className="text-[#00E676] hover:underline font-semibold">
                      {row.name}
                    </Link>
                  </td>
                  <td className="py-3 pr-3">
                    <span className="rounded px-2 py-0.5 text-xs font-bold" style={{ color: tierColors[row.tier], background: tierColors[row.tier] + "22" }}>
                      {row.tier}
                    </span>
                  </td>
                  <td className="py-3 pr-3 font-semibold text-white">{row.multiplier}×</td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{row.source}</td>
                  <td className="py-3 pr-3 text-xs text-[#00E676]">
                    {row.tradeValue ? row.tradeValue.toLocaleString() + " 🪙" : "—"}
                  </td>
                  <td className="py-3 pr-3 text-xs text-[#768294]">
                    {i === 0 ? "End-game farming + trade" : i === 1 ? "Mid-game Rare Egg target" : "Beginner stopgap"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          Trade values from canonical Trading Database. Last reviewed {CONTENT_UPDATED_AT}.
        </p>
      </section>

      {/* Real player scenario — NEW, replaces templated "Detailed Analysis" */}
      <section aria-labelledby="scenario-heading">
        <h2 id="scenario-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          🎮 Player Scenario: Mid-Game Dragon Push
        </h2>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <div className="grid gap-3 sm:grid-cols-2 mb-4">
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Player Type</div>
              <div className="text-sm text-white mt-1">Mid-game farmer, 3 weeks in</div>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Current Resources</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• 4 plots, Golden Wheat on all</li>
                <li>• Gem Butterfly pet (2.5×), no dragon</li>
                <li>• 180,000 coins banked</li>
                <li>• No S-Tier mutation rolled</li>
              </ul>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 mb-4">
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Goal</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• Acquire first dragon pet within 7 days</li>
                <li>• Boost farm income above 200,000 coins/hour</li>
                <li>• Avoid stalling farm to afford the egg</li>
              </ul>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Recommended Route</div>
              <ul className="mt-1 text-xs text-[#00E676] space-y-1">
                <li>• Day 1-3: Buy 10 Rare Eggs (20,000 coins)</li>
                <li>• Day 4: Expect ~1 Neon Dragon Hatchling</li>
                <li>• Day 5-7: Run on main plot, save for Legendary Eggs</li>
              </ul>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            <strong className="text-white">Why not Legendary Eggs directly?</strong> At 180,000 coins, you can afford 18 Legendary Eggs — but the statistical expectation for a Golden Dragon is 30+ eggs. Going all-in on Legendary Eggs has a ~40% chance of yielding zero S-Tier pets, leaving you broke and stuck. Rare Eggs at 2,000 coins each give you 90 attempts for the same budget — enough to reliably land a Neon Dragon Hatchling (4.2×) and still have 100,000+ coins left for farming reinvestment.
          </p>
        </div>
      </section>

      {/* When to use / when NOT to use — NEW strategy format */}
      <section aria-labelledby="use-strategy-heading">
        <h2 id="use-strategy-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          🎯 When to Use (and Not Use) Each Dragon
        </h2>
        <div className="space-y-3">
          {dragonRows.map((row) => (
            <div key={row.id} className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
              <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                <h3 className="font-heading text-base font-semibold text-white">
                  <Link href={`/grow-a-garden/pets/${row.id}`} className="text-[#00E676] hover:underline">
                    {row.name}
                  </Link>
                  <span className="text-xs text-[#768294] ml-2">({row.multiplier}×, {row.tier}-Tier)</span>
                </h3>
              </div>
              <div className="grid gap-2 sm:grid-cols-2 text-xs">
                <div className="rounded bg-[#00E676]/5 p-2 border border-[#00E676]/20">
                  <div className="text-[#00E676] font-semibold mb-1">✅ Use when</div>
                  <p className="text-[#BAC4D1]">
                    {row.name === "Golden Dragon"
                      ? "End-game farming with 4+ plots and a 5.0×+ mutation. You have 300k+ coins to bulk-hatch Legendary Eggs during a boosted event."
                      : row.name === "Neon Dragon Hatchling"
                      ? "Mid-game (5k–50k coins/hour). You want a dragon pet but cannot afford Legendary Egg bulk-hatching yet. Best value-per-coin dragon."
                      : "Early game as a stopgap. You already have 2,000 coins for a Rare Egg but no real farming income yet. Replace within 2 weeks."}
                  </p>
                </div>
                <div className="rounded bg-[#FF3D00]/5 p-2 border border-[#FF3D00]/20">
                  <div className="text-[#FF3D00] font-semibold mb-1">⚠️ Do NOT use when</div>
                  <p className="text-[#BAC4D1]">
                    {row.name === "Golden Dragon"
                      ? "You have under 200,000 coins banked. A single 30-egg bulk-hatch with zero S-Tier drops would wipe your savings and stall your farm for 3+ days."
                      : row.name === "Neon Dragon Hatchling"
                      ? "You already have 200,000+ coins/hour income. At that point, Rare Eggs are a waste — switch to Legendary Egg bulk-hatches for Golden Dragon chances."
                      : "You have access to Rare Eggs and 5,000+ coins/hour. Skip the Baby Dragon and aim directly for Neon Dragon Hatchling — the 2× multiplier gap pays for itself within 3 days."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common mistakes — NEW, replaces templated Tips ul-list */}
      <section aria-labelledby="mistakes-heading">
        <h2 id="mistakes-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          ⚠️ Common Dragon Pet Mistakes
        </h2>
        <div className="space-y-3">
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 1: Buying 1-2 Legendary Eggs at a time</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Single Legendary Eggs have ~1–3% Golden Dragon odds. Two eggs = ~5%. Most players who do this get zero dragons and quit. The statistical break-even is 30+ eggs bulk-hatched during a boosted event. Save coins until you can afford 30 at once.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 2: Hatching outside boosted events</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Boosted events roughly double S-Tier drop rates. Hatching 30 eggs outside an event wastes ~50% of your coin investment. Check the{" "}
              <Link href="/grow-a-garden/events" className="text-[#00E676] hover:underline">Events Tracker</Link>{" "}
              weekly and time your bulk-hatch to coincide with the next event window.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 3: Trading your only dragon pet</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Even a mathematically fair trade leaves you with zero dragon multiplier. The income loss from losing a 4.2×+ pet exceeds any one-time trade value within 2–3 days. Only trade duplicate dragons — never your only one.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 4: Pairing dragon with a low-tier mutation</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              A 4.8× Golden Dragon on a 1.0× crop plot = 4.8× effective. The same dragon on a 6.0× Prismatic Rainbow plot = 28.8× effective. Always pair your dragon with your highest-tier mutation on your highest-base-coin crop. Anything else wastes the dragon multiplier.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 5: Spending Robux on eggs without a fallback plan</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Robux-bought Legendary Eggs have the same RNG as coin-bought ones. If you spend 500 Robux on 5 eggs and get zero S-Tier, you have no in-game coin fallback. Always bulk-hatch with in-game coins first; reserve Robux for event-exclusive items only.
            </p>
          </div>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/best-dragon-pets" />
    </ContentLayout>
  );
}
