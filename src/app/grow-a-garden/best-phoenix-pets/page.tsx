import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { pets } from "@/data/garden/database/pets";
import { trading } from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Best Phoenix Pets in Grow a Garden",
  description:
    "Ranked comparison of every phoenix pet in Grow a Garden: Golden Phoenix Chick and Phoenix Hatchling. Multipliers, abilities, trade values, and hatching strategy.",
  keywords: [
    "best phoenix pet Grow a Garden",
    "Grow a Garden Golden Phoenix Chick",
    "Grow a Garden Phoenix Hatchling",
    "phoenix pet multiplier Grow a Garden",
    "phoenix pet tier list",
    "how to get phoenix pet Grow a Garden",
  ],
  alternates: { canonical: "/grow-a-garden/best-phoenix-pets" },
  openGraph: {
    title: "Best Phoenix Pets in Grow a Garden",
    description:
      "Ranked comparison of every phoenix pet in Grow a Garden with multipliers, abilities, and trade values.",
    type: "website",
  },
};

const phoenixPets = pets
  .filter(
    (p) =>
      /phoenix/i.test(p.name) ||
      /phoenix/i.test(p.id) ||
      p.aliases.some((a) => /phoenix/i.test(a))
  )
  .sort((a, b) => b.multiplier - a.multiplier);

const tradingByName = new Map<string, (typeof trading)[number]>();
for (const t of trading) {
  if (t.category === "Pet") tradingByName.set(t.name.toLowerCase(), t);
}

const phoenixRows = phoenixPets.map((p) => {
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
    description: p.description,
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
    question: "What is the best phoenix pet in Grow a Garden?",
    answer:
      "The Golden Phoenix Chick is the best phoenix pet and arguably the best pet in the entire game. Its 5.0× multiplier combined with an auto-collect passive ability eliminates harvesting downtime, making it the highest coins-per-hour pet available. The Phoenix Hatchling is a more accessible alternative for mid-game players.",
  },
  {
    question: "How do I get the Golden Phoenix Chick?",
    answer:
      "The Golden Phoenix Chick hatches from Legendary Eggs, which cost 10,000 coins each. The drop rate is approximately 5% per Legendary Egg, so you should expect to open 15-25 eggs on average to hatch one. Save coins, bulk-hatch during boosted events, and consider trading high-value items if the egg grind takes too long.",
  },
  {
    question: "What does the Golden Phoenix Chick auto-collect ability do?",
    answer:
      "The auto-collect ability automatically harvests any mature crop on your farm without you needing to click each plot manually. This eliminates harvesting downtime and effectively multiplies your coins-per-hour beyond what the 5.0× multiplier alone suggests, especially when running 4+ plots with short grow times.",
  },
  {
    question: "Is the Phoenix Hatchling worth keeping?",
    answer:
      "Yes, especially for mid-game players. The Phoenix Hatchling provides a strong multiplier at a more accessible price point than the Golden Phoenix Chick. Even after upgrading to a Golden Phoenix Chick, the Phoenix Hatchling retains strong trade value due to consistent demand from players building their first serious farm.",
  },
  {
    question: "Do phoenix pets work with mutation multipliers?",
    answer:
      "Yes. Pet multipliers stack multiplicatively with mutation multipliers. A Golden Phoenix Chick (5.0×) paired with a Prismatic Rainbow mutation (6.0×) produces a 30× effective multiplier on the crop's base coin value — one of the highest single-harvest payouts possible in the game.",
  },
  {
    question: "What is the trade value of a Golden Phoenix Chick?",
    answer:
      "The Golden Phoenix Chick is one of the highest-value tradeable items in the game. Its verified trade value is tracked in our Trading Database and is reviewed weekly. Demand is consistently 'High' because it is the centerpiece pet for end-game farms. Never accept an offer without first checking the current verified value.",
  },
];

export default function BestPhoenixPetsPage() {
  return (
    <ContentLayout
      title="Best Phoenix Pets in Grow a Garden"
      description="Ranked comparison of every phoenix pet in Grow a Garden with multipliers, abilities, and trade values."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Best Phoenix Pets", href: "/grow-a-garden/best-phoenix-pets" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-phoenix-pets"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Opening — concrete number framing */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          The Golden Phoenix Chick (5.0× multiplier) on a 6.0× Prismatic Rainbow plot produces <strong className="text-white">14,400 coins per harvest</strong> on a 480-coin crop. The same setup without the phoenix pet produces 2,880 coins. That 5× gap is why phoenix owners out-earn non-phoenix owners by <strong className="text-white">10M+ coins per week</strong> on the same farm. This guide compares every phoenix pet using canonical{" "}
          <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">Pets Database</Link>{" "}
          stats and{" "}
          <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">Trading Database</Link>{" "}
          values — focused on <em className="text-white">when each ability actually pays off</em>, not a generic tier list.
        </p>
      </section>

      {/* Ability comparison matrix — replaces generic Ranking Table */}
      <section aria-labelledby="ability-heading">
        <h2 id="ability-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          🔥 Ability vs. Multiplier Comparison Matrix
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-3">
            Stop comparing phoenix pets by multiplier alone. The Golden Phoenix Chick's <strong className="text-white">auto-collect passive</strong> is what makes it the end-game pick — it eliminates click latency on 4+ plots, effectively multiplying your <em>coins-per-hour</em> (not just coins-per-harvest) beyond what the 5.0× number suggests.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-[#1E212B] text-[#768294]">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Pet</th>
                  <th className="px-4 py-2 text-left font-semibold">Multiplier</th>
                  <th className="px-4 py-2 text-left font-semibold">Passive Ability</th>
                  <th className="px-4 py-2 text-left font-semibold">Plots Needed to Shine</th>
                  <th className="px-4 py-2 text-left font-semibold">Real-World CPM Boost</th>
                  <th className="px-4 py-2 text-left font-semibold">Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#252936]">
                {phoenixRows.map((row) => (
                  <tr key={row.id} className="text-[#BAC4D1]">
                    <td className="px-4 py-3">
                      <Link href={`/grow-a-garden/pets/${row.id}`} className="text-[#00E676] hover:underline font-semibold">
                        {row.name}
                      </Link>
                      <span className="block text-xs text-[#768294]">{row.tier}-Tier</span>
                    </td>
                    <td className="px-4 py-3 text-white font-semibold">{row.multiplier}×</td>
                    <td className="px-4 py-3 text-xs">{row.ability}</td>
                    <td className="px-4 py-3 text-xs">
                      {row.name === "Golden Phoenix Chick" ? "4+ plots (auto-collect scales with plot count)" : "1–3 plots (passive does not scale)"}
                    </td>
                    <td className="px-4 py-3 text-xs text-[#00E676]">
                      {row.name === "Golden Phoenix Chick" ? "+40–60% effective CPM (no click latency)" : "Multiplier only — no CPM boost"}
                    </td>
                    <td className="px-4 py-3 text-xs text-[#768294]">
                      {row.name === "Golden Phoenix Chick" ? "End-game must-have" : "Mid-game bridge pet"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[#768294]">
            CPM = coins per minute. Auto-collect eliminates the 2–4 seconds of click latency per plot per harvest cycle — a hidden multiplier that does not show up in the pet's displayed multiplier number.
          </p>
        </div>
      </section>

      {/* Player scenario — NEW */}
      <section aria-labelledby="scenario-heading">
        <h2 id="scenario-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          🎮 Player Scenario: Phoenix vs. Dragon Decision
        </h2>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <div className="grid gap-3 sm:grid-cols-2 mb-4">
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Player Type</div>
              <div className="text-sm text-white mt-1">Late-game farmer, 5 weeks in</div>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Current Resources</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• 6 plots, Star Melon on main, Golden Wheat on 5 secondary</li>
                <li>• Golden Dragon (4.8×) on main plot</li>
                <li>• 2.8M coins banked</li>
                <li>• Midas Bloom (5.0×) mutation on main plot</li>
                <li>• Clicking 6 plots manually each cycle (~25 sec lost/cycle)</li>
              </ul>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 mb-4">
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Goal</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• Decide: Trade Golden Dragon for Golden Phoenix Chick?</li>
                <li>• Maximize coins-per-hour, not just per-harvest</li>
              </ul>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Recommended Route</div>
              <ul className="mt-1 text-xs text-[#00E676] space-y-1">
                <li>• Do NOT trade — acquire Phoenix Chick separately via Legendary Eggs</li>
                <li>• Auto-collect is a CPM multiplier, not a per-harvest multiplier</li>
                <li>• Keep Golden Dragon on main plot; Phoenix Chick is for 4+ secondary plots</li>
              </ul>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            <strong className="text-white">Why not trade?</strong> The Golden Dragon's 4.8× multiplier applies to one plot at a time. The Phoenix Chick's 5.0× multiplier is only 4% higher — but its auto-collect passive applies to <em>all</em> plots on your farm. On a 6-plot farm, auto-collect saves you ~25 seconds per harvest cycle, which is the equivalent of running an extra 1–2 harvest cycles per hour. On a 2.8M-coin farm, that is an extra 200k–400k coins per hour of <em>active play</em>. However: the Golden Dragon's trade value (2.8M coins) is the foundation of your farm's net worth. Trading it for a Phoenix Chick leaves you with zero Legendary-tier pet on your main plot — the income drop on that plot alone exceeds the auto-collect savings. The correct play is to acquire both: Dragon on main, Phoenix Chick on secondary.
          </p>
        </div>
      </section>

      {/* When to use — NEW strategy format */}
      <section aria-labelledby="use-strategy-heading">
        <h2 id="use-strategy-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          🎯 When to Use (and Not Use) Each Phoenix Pet
        </h2>
        <div className="space-y-3">
          {phoenixRows.map((row) => (
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
                    {row.name === "Golden Phoenix Chick"
                      ? "You have 4+ plots and active-play sessions of 1+ hour. The auto-collect passive only matters when you are clicking through plots — it does nothing for idle farming. Best paired with a Prismatic Rainbow (6.0×) or Midas Bloom (5.0×) mutation on your highest-base-coin crop."
                      : "You have 1–3 plots and cannot afford Legendary Eggs yet. The Phoenix Hatchling's 3.5× multiplier is the highest accessible multiplier from Rare Eggs (2,000 coins each) and holds strong trade value as you scale up."}
                  </p>
                </div>
                <div className="rounded bg-[#FF3D00]/5 p-2 border border-[#FF3D00]/20">
                  <div className="text-[#FF3D00] font-semibold mb-1">⚠️ Do NOT use when</div>
                  <p className="text-[#BAC4D1]">
                    {row.name === "Golden Phoenix Chick"
                      ? "You have under 4 plots OR you idle-farm (offline/auto). The auto-collect passive is wasted on idle farms. On a 1-plot farm, the 4% multiplier gap over a Golden Dragon does not justify the 5M+ coin trade value."
                      : "You already have a Golden Phoenix Chick or Golden Dragon. The Phoenix Hatchling's 3.5× multiplier is strictly worse than both — trade it to a newer player for rising-trend items, or hold it as a duplicate for future trade leverage."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common mistakes — NEW */}
      <section aria-labelledby="mistakes-heading">
        <h2 id="mistakes-heading" className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]">
          ⚠️ Common Phoenix Pet Mistakes
        </h2>
        <div className="space-y-3">
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 1: Thinking auto-collect boosts multiplier</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Auto-collect does not increase your per-harvest coin value. It increases your <em>coins-per-hour</em> by removing click latency. On a 1-plot idle farm, the Golden Phoenix Chick is functionally identical to a 5.0× pet without the passive. Only run it on multi-plot active farms.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 2: Trading Golden Dragon for Golden Phoenix Chick</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Both are S-Tier and have similar trade values (~2.8M vs ~5M coins). But the Phoenix Chick is 5× rarer (5% drop vs 25% drop from Legendary Eggs). Most "fair" trades of Dragon-for-Phoenix-Chick are actually net losses because the Phoenix Chick's scarcity premium is not reflected in the displayed trade value. Acquire both separately — do not trade one for the other.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 3: Pairing Phoenix Chick with a low-tier crop</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              A 5.0× pet on a 60-coin Carrot = 300 coins/harvest. The same pet on a 480-coin Star Melon = 2,400 coins/harvest. Always pair your phoenix with the highest-base-coin crop you can grow. The pet multiplier amplifies the base — a low base wastes the pet.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 4: Hatching Phoenix Chick without a mutation plot ready</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              A 5.0× pet with no mutation = 5.0× effective. The same pet with a 6.0× Prismatic Rainbow = 30× effective. If you hatch a Phoenix Chick before unlocking the Mutation Station, you are leaving a 6× multiplier gap on the table. Always unlock Mutation Station first (1,500 coins), roll a 2.0×+ mutation, then chase the Phoenix Chick. Redeem <Link href="/grow-a-garden/codes" className="text-[#00E676] hover:underline">active codes</Link> if you need a coin boost for the station unlock.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 5: Skipping Phoenix Hatchling because it's "not the best"</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              The Phoenix Hatchling (3.5×) is the strongest pet you can hatch from a Rare Egg. Most players skip it because they want the Golden Phoenix Chick — and end up with no phoenix pet at all for 4+ weeks. Take the Phoenix Hatchling as a bridge; it holds its trade value well and can be traded for a Legendary Egg later.
            </p>
          </div>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/best-phoenix-pets" />
    </ContentLayout>
  );
}
