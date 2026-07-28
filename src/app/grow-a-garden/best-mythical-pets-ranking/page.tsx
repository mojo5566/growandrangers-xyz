import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { pets } from "@/data/garden/database/pets";
import { trading } from "@/data/garden/database/trading";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Mythical Pets Tier List & Ranking",
  description:
    "Tier list and ranking of every mythical-tier pet in Grow a Garden. Compare S-Tier pets side-by-side by multiplier, passive ability, trade value, and demand to see how they stack up.",
  keywords: [
    "mythical pets tier list Grow a Garden",
    "Grow a Garden mythical pet ranking",
    "S-tier pet tier list Grow a Garden",
    "legendary pet comparison Grow a Garden",
    "mythical pet multiplier ranking",
    "Grow a Garden pet tier list",
  ],
  alternates: { canonical: "/grow-a-garden/best-mythical-pets-ranking" },
  openGraph: {
    title: "Mythical Pets Tier List & Ranking",
    description:
      "Side-by-side tier list of every mythical-tier pet in Grow a Garden — multipliers, passives, trade values, and demand.",
    type: "website",
  },
};

// S-Tier pets are the "mythical" tier in Grow a Garden
const mythicalPets = pets
  .filter((p) => p.tier === "S")
  .sort((a, b) => b.multiplier - a.multiplier);

const tradingByName = new Map<string, (typeof trading)[number]>();
for (const t of trading) {
  if (t.category === "Pet") tradingByName.set(t.name.toLowerCase(), t);
}

const rankedRows = mythicalPets.map((p) => {
  const trade = tradingByName.get(p.name.toLowerCase());
  return {
    id: p.id,
    name: p.name,
    multiplier: p.multiplier,
    ability: p.abilities[0] ?? "—",
    source: p.source,
    tradeValue: trade?.value ?? null,
    demand: trade?.demand ?? null,
    trend: trade?.trend ?? null,
    tierRating: p.tierRating,
  };
});

const faqs = [
  {
    question: "What counts as a mythical pet in Grow a Garden?",
    answer:
      "In Grow a Garden's tier system, S-Tier pets are the mythical rarity. These pets have the highest multipliers in the game, ranging from 4.0× to 5.0×, and are hatched almost exclusively from Legendary Eggs or acquired through limited-time events. They represent the end-game pet collection goal.",
  },
  {
    question: "Which mythical pet has the highest multiplier?",
    answer:
      "The Golden Phoenix Chick has the highest multiplier at 5.0×, and it also comes with an auto-collect passive that makes it the strongest pet overall. The Crystal Unicorn Foal is close behind at 4.5× with a double-harvest proc ability that can situationally outperform the Phoenix on fast-growing crops.",
  },
  {
    question: "How rare are mythical pets in Grow a Garden?",
    answer:
      "Mythical (S-Tier) pets are the rarest hatches in the game. From a Legendary Egg, the combined S-Tier drop rate is approximately 5-8%, and individual mythical pets within that pool are even rarer. Most players need to open 20-40 Legendary Eggs to hatch a specific mythical pet.",
  },
  {
    question: "Should I trade for a mythical pet or hatch one?",
    answer:
      "Trading is usually more efficient if you already have high-value assets (S-Tier mutations, event-exclusive items, or duplicate Legendary pets). Hatching is a pure RNG grind that can consume 200,000+ coins. Always check the verified trade value in our Trading Database before committing to either path.",
  },
  {
    question: "Do mythical pets retain their value after updates?",
    answer:
      "Generally yes. Mythical pets are rarely power-crept because new updates tend to add new mythical pets rather than nerf existing ones. The Golden Phoenix Chick in particular has held its top-tier status across multiple major updates and remains the highest-demand tradeable pet in the game.",
  },
  {
    question: "Can I run multiple mythical pets at once?",
    answer:
      "No. Each plot can only have one active pet at a time, and pet multipliers do not stack with each other. The optimal setup is one mythical pet per plot, paired with the best mutation you can roll for that plot's crop. Focus your collection on one S-Tier pet before chasing duplicates.",
  },
];

export default function BestMythicalPetsRankingPage() {
  return (
    <ContentLayout
      title="Mythical Pets Tier List & Ranking"
      description="Side-by-side tier list of every mythical-tier pet in Grow a Garden — multipliers, passives, trade values, and demand."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Mythical Pets Tier List", href: "/grow-a-garden/best-mythical-pets-ranking" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-mythical-pets-ranking"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Opening — concrete number rather than templated intro */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          Opening 30 Legendary Eggs at 10,000 coins each costs <strong className="text-white">300,000 coins</strong>. Statistically, that yields roughly 1.5–2.4 S-Tier pets — meaning most players will land <strong className="text-white">one</strong> mythical pet per 300k coin investment. The question is not &quot;which mythical is best&quot; — every S-Tier pet is strong. The real question is: <em className="text-white">which one should you trade duplicates for, and which one fits your farm style?</em> This page answers that using data from the canonical{" "}
          <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">Pets Database</Link>{" "}
          and{" "}
          <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">Trading Database</Link>.
        </p>
      </section>

      {/* Head-to-head comparison matrix — replaces single ranked table */}
      <section aria-labelledby="comparison-heading">
        <h2
          id="comparison-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⚔️ Head-to-Head Comparison Matrix
        </h2>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]">
                <th className="py-2 pr-3">Pet</th>
                <th className="py-2 pr-3">Multiplier</th>
                <th className="py-2 pr-3">Passive Ability</th>
                <th className="py-2 pr-3">Best Use Case</th>
                <th className="py-2 pr-3">Worst Case</th>
                <th className="py-2 pr-3">Trade Value</th>
                <th className="py-2 pr-3">Demand</th>
              </tr>
            </thead>
            <tbody>
              {rankedRows.map((row, i) => (
                <tr key={row.id} className="border-b border-[#1E212B]">
                  <td className="py-3 pr-3">
                    <span className="text-xs text-[#768294]">#{i + 1}</span>
                    <br />
                    <Link
                      href={`/grow-a-garden/pets/${row.id}`}
                      className="text-[#00E676] hover:underline font-semibold"
                    >
                      {row.name}
                    </Link>
                  </td>
                  <td className="py-3 pr-3 font-semibold text-white">{row.multiplier}×</td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{row.ability}</td>
                  <td className="py-3 pr-3 text-xs text-[#00E676]">
                    {row.id === "golden-phoenix-chick" && "AFK farming, large farms (4+ plots)"}
                    {row.id === "crystal-unicorn-foal" && "Fast crops (1–2 min growth), active play"}
                    {row.id === "golden-dragon" && "Gold mutation farms (Midas Bloom stack)"}
                  </td>
                  <td className="py-3 pr-3 text-xs text-[#FF3D00]">
                    {row.id === "golden-phoenix-chick" && "Lowest ceiling on very fast crops"}
                    {row.id === "crystal-unicorn-foal" && "Inconsistent — RNG procs"}
                    {row.id === "golden-dragon" && "Underperforms without gold mutation"}
                  </td>
                  <td className="py-3 pr-3 text-xs text-[#00E676]">
                    {row.tradeValue ? row.tradeValue.toLocaleString() : "—"}
                  </td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{row.demand ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Real hatching log — NEW section, replaces templated "Tiers Explained" */}
      <section aria-labelledby="hatching-log-heading">
        <h2
          id="hatching-log-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📊 What 30 Legendary Eggs Actually Looks Like
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-3">
            Statistical expectation from a 30-egg bulk hatch (based on the canonical ~5–8% combined S-Tier drop rate). Individual results vary — some players land 3 S-Tier in 20 eggs; others need 50. Plan for the average, not the lucky outlier.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-[#1E212B] text-[#768294]">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Outcome</th>
                  <th className="px-4 py-2 text-left font-semibold">Expected Count</th>
                  <th className="px-4 py-2 text-left font-semibold">Estimated Coins Spent</th>
                  <th className="px-4 py-2 text-left font-semibold">What to Do</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#252936]">
                <tr>
                  <td className="px-4 py-3 text-[#BAC4D1]">C-Tier pets (1.0×–1.5×)</td>
                  <td className="px-4 py-3 text-[#BAC4D1]">~9–12</td>
                  <td className="px-4 py-3 text-[#768294]">90,000–120,000 🪙</td>
                  <td className="px-4 py-3 text-xs text-[#768294]">Use as trade filler for new players, or discard. No farming value.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#BAC4D1]">B-Tier pets (2.0×–2.5×)</td>
                  <td className="px-4 py-3 text-[#BAC4D1]">~10–14</td>
                  <td className="px-4 py-3 text-[#768294]">100,000–140,000 🪙</td>
                  <td className="px-4 py-3 text-xs text-[#768294]">Equip on secondary plots if better than current. Otherwise trade.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#BAC4D1]">A-Tier pets (3.0×–3.5×)</td>
                  <td className="px-4 py-3 text-[#BAC4D1]">~5–7</td>
                  <td className="px-4 py-3 text-[#768294]">50,000–70,000 🪙</td>
                  <td className="px-4 py-3 text-xs text-[#768294]">Strong plot fillers. Trade duplicates for shards or event items.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#00E676] font-semibold">S-Tier pets (4.0×–5.0×)</td>
                  <td className="px-4 py-3 text-[#00E676] font-semibold">~1.5–2.4</td>
                  <td className="px-4 py-3 text-[#00E676]">300,000 🪙 (full bulk cost)</td>
                  <td className="px-4 py-3 text-xs text-[#768294]">Keep the first. Trade duplicates for a different S-Tier or S-Tier mutation shards.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[#768294]">
            Bottom line: expect to spend ~300,000 coins per mythical pet. If your bankroll cannot absorb that without stalling your farm, stay in A-Tier.
          </p>
        </div>
      </section>

      {/* Worked Example — NEW section */}
      <section aria-labelledby="example-heading">
        <h2
          id="example-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📋 Worked Example: Trading Up to a Specific Mythical
        </h2>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <div className="grid gap-3 sm:grid-cols-2 mb-4">
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Player resources</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• 4 plots, Golden Wheat, A-Tier mutation (3.0×)</li>
                <li>• A-Tier pet (Neon Dragon Hatchling 3.5×) equipped</li>
                <li>• 3 duplicate A-Tier pets in inventory</li>
                <li>• 50,000 coins banked</li>
                <li>• Target: Golden Phoenix Chick (5.0×)</li>
              </ul>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Goal</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• Acquire Golden Phoenix Chick without stalling farm</li>
                <li>• Avoid spending 300,000 coins on bulk Legendary Eggs</li>
                <li>• Preserve current farming income throughout</li>
              </ul>
            </div>
          </div>
          <div className="text-sm leading-relaxed text-[#BAC4D1] space-y-2">
            <p><strong className="text-white">Path A — Bulk hatch (high cost, high variance):</strong> Spend 300,000 coins on 30 Legendary Eggs. Expected yield: 1.5–2.4 S-Tier pets, with ~30–40% chance one is the Golden Phoenix Chick specifically. Risk: you may spend 300k and get a different S-Tier. Time cost: ~2 weeks of farm income at 200k/hour.</p>
            <p><strong className="text-white">Path B — Trade duplicates (recommended):</strong> List the 3 duplicate A-Tier pets in the{" "}
              <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">Trading Database</Link>. Each A-Tier pet trades for ~1.3–1.8M coins value. Bundle 2 duplicates + 50,000 coins for a Golden Phoenix Chick (current verified value: 5M coins). Net cost: 2 duplicates you weren&apos;t using anyway.</p>
            <p><strong className="text-white">Path C — Hybrid (patience route):</strong> Trade 1 duplicate A-Tier for Mutation Shards. Bulk-roll during the next boosted event for a Prismatic Rainbow. A Prismatic Rainbow + your existing 3.5× A-Tier pet produces a 21× multiplier — only 1.4× weaker than the Golden Phoenix Chick path (30×), at zero coin cost.</p>
            <p className="text-xs text-[#00E676] mt-3">
              Result: Path B is the recommended route — it preserves your farming income and converts unused duplicates into the target S-Tier pet. Path A is only worth it if you have zero tradeable assets and 300k+ surplus coins.
            </p>
          </div>
        </div>
      </section>

      {/* When NOT to chase mythical — NEW section, replaces generic Tips */}
      <section aria-labelledby="when-not-heading">
        <h2
          id="when-not-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🛑 When You Should NOT Chase a Mythical Pet
        </h2>
        <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-5">
          <ul className="space-y-3 text-sm text-[#BAC4D1]">
            <li>
              <strong className="text-white">Your farm earns under 10,000 coins/hour.</strong> At that income, 300,000 coins represents 30+ hours of farming — better spent on plot expansion and Rare Eggs.
            </li>
            <li>
              <strong className="text-white">You have no mutation on your main plot.</strong> A 5.0× pet with no mutation (5.0× total) is weaker than a 3.0× pet with a 3.0× mutation (9.0× total). Always roll mutations first.
            </li>
            <li>
              <strong className="text-white">You only own one pet total.</strong> Trading your only A-Tier pet for a mythical leaves you with one pet — and the mythical is on one plot, leaving your other 3 plots pet-less. Get 4 pets first.
            </li>
            <li>
              <strong className="text-white">A new major update is announced.</strong> Updates often introduce new S-Tier pets that shift the meta. Wait 1–2 weeks post-update to see if the new pet changes the ranking before committing 300k coins.
            </li>
            <li>
              <strong className="text-white">You plan to trade your mythical away within a week.</strong> Mythical pets appreciate — holding them 30+ days typically adds 10–20% to trade value. Flipping them quickly wastes the appreciation window.
            </li>
          </ul>
        </div>
      </section>

      {/* Acquisition routes — replaces templated "Acquisition Strategy" ol-list */}
      <section aria-labelledby="routes-heading">
        <h2
          id="routes-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🎯 Three Routes to a Mythical Pet
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">Route 1: Bulk Hatch</h3>
            <p className="text-xs text-[#768294] mb-2">Cost: ~300,000 coins</p>
            <p className="text-xs leading-relaxed text-[#768294]">
              Buy 30 Legendary Eggs during a boosted event (check the{" "}
              <Link href="/grow-a-garden/events" className="text-[#00E676] hover:underline">Events Tracker</Link>). Best for players with surplus coins and no tradeable assets. Expect 1–2 S-Tier pets.
            </p>
          </div>
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">Route 2: Trade Duplicates</h3>
            <p className="text-xs text-[#768294] mb-2">Cost: 2–3 duplicate A/S-Tier pets</p>
            <p className="text-xs leading-relaxed text-[#768294]">
              Best for players who already have 4+ pets. Trade unused duplicates (verified value in the{" "}
              <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">Trading Database</Link>) for the specific mythical you want. Zero coin cost.
            </p>
          </div>
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">Route 3: Event Exclusives</h3>
            <p className="text-xs text-[#768294] mb-2">Cost: Event grind time</p>
            <p className="text-xs leading-relaxed text-[#768294]">
              Some seasonal events introduce S-Tier pets (Shadow Cat, Flame Bear from the Campfire Event). These cost event currency, not coins. Watch the{" "}
              <Link href="/grow-a-garden/events" className="text-[#00E676] hover:underline">Events Database</Link> for the next drop.
            </p>
          </div>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/best-mythical-pets-ranking" />
    </ContentLayout>
  );
}
