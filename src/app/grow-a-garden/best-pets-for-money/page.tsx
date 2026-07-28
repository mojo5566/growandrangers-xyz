import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { pets } from "@/data/garden/database/pets";
import { trading } from "@/data/garden/database/trading";
import { crops } from "@/data/garden/database/crops";
import { mutations } from "@/data/garden/database/mutations";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Best Pets for Money in Grow a Garden",
  description:
    "Ranked list of the best pets for making money in Grow a Garden. Compare coins-per-hour potential, multipliers, and trade value to pick the most profitable pet for your farm.",
  keywords: [
    "best pets for money Grow a Garden",
    "most profitable pet Grow a Garden",
    "Grow a Garden pet money making",
    "highest multiplier pet Grow a Garden",
    "Grow a Garden coins per hour pet",
    "best pet for farming Grow a Garden",
  ],
  alternates: { canonical: "/grow-a-garden/best-pets-for-money" },
  openGraph: {
    title: "Best Pets for Money in Grow a Garden",
    description:
      "Ranked list of the best pets for making money with multipliers, coins-per-hour estimates, and trade values.",
    type: "website",
  },
};

// Build pet value ranking: multiplier × (trade value as proxy for rarity)
const tradingByName = new Map<string, (typeof trading)[number]>();
for (const t of trading) {
  if (t.category === "Pet") tradingByName.set(t.name.toLowerCase(), t);
}

const topCrop = [...crops].sort((a, b) => b.coins - a.coins)[0];
const topMutation = [...mutations].sort((a, b) => b.multiplier - a.multiplier)[0];

const moneyRanked = pets
  .map((p) => {
    const trade = tradingByName.get(p.name.toLowerCase());
    // Estimated coins per harvest on the best crop with the best mutation
    const estimatedCoinsPerHarvest = Math.round(
      topCrop.coins * topMutation.multiplier * p.multiplier
    );
    return {
      id: p.id,
      name: p.name,
      tier: p.tier,
      multiplier: p.multiplier,
      source: p.source,
      estimatedCoinsPerHarvest,
      tradeValue: trade?.value ?? null,
      demand: trade?.demand ?? null,
      ability: p.abilities[0] ?? "—",
    };
  })
  .sort((a, b) => b.estimatedCoinsPerHarvest - a.estimatedCoinsPerHarvest)
  .slice(0, 12);

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

// Three representative player profiles for the decision tree
const budgetPet = moneyRanked.find((r) => r.tier === "B" && r.source === "Rare Egg");
const midPet = moneyRanked.find((r) => r.tier === "A");
const endgamePet = moneyRanked.find((r) => r.tier === "S");

const faqs = [
  {
    question: "Which pet makes the most money in Grow a Garden?",
    answer:
      "The Golden Phoenix Chick makes the most money in Grow a Garden. Its 5.0× multiplier is the highest in the game, and its auto-collect passive eliminates harvesting downtime, effectively multiplying your coins-per-hour beyond what the multiplier alone suggests. On the best crop with the best mutation, it can produce over 14,000 coins per harvest.",
  },
  {
    question: "How is pet money-making potential calculated?",
    answer:
      "Money-making potential = crop base coins × mutation multiplier × pet multiplier. For example, on the highest-value crop with the best mutation, a 5.0× pet produces roughly 30,000 coins per harvest. The actual coins-per-hour also depends on crop grow time and the pet's passive abilities (such as auto-collect or double-harvest procs).",
  },
  {
    question: "Are high-tier pets always better for money?",
    answer:
      "Usually yes, but not always. A high-tier pet with a situational ability (such as fire immunity) may underperform a lower-tier pet with a passive income ability (such as auto-collect or double-harvest). Always consider the pet's ability in addition to its raw multiplier when evaluating money-making potential.",
  },
  {
    question: "What is the best budget pet for money?",
    answer:
      "The best budget pets are B-Tier pets hatched from Rare Eggs. They provide a solid 2.5×-3.5× multiplier at a fraction of the Legendary Egg cost. They are the recommended stepping stone for players who cannot yet afford to bulk-hatch Legendary Eggs.",
  },
  {
    question: "Does pet multiplier stack with mutation multiplier?",
    answer:
      "Yes. Pet multipliers stack multiplicatively with mutation multipliers. This is why running your best pet on your highest-multiplier plot produces exponentially more income than running the same pet on an unmutated plot. Always pair your best pet with your best mutation.",
  },
  {
    question: "How many plots should I run for maximum money?",
    answer:
      "Four plots is the sweet spot. Each plot can run one pet and one mutation. With four plots, you can diversify across seasons and crop grow times while still keeping your best pet on your highest-multiplier plot. Additional plots beyond four have diminishing returns unless you have the Golden Phoenix Chick's auto-collect to manage them.",
  },
];

export default function BestPetsForMoneyPage() {
  return (
    <ContentLayout
      title="Best Pets for Money in Grow a Garden"
      description="Ranked list of the best pets for making money with multipliers, coins-per-hour estimates, and trade values."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Best Pets for Money", href: "/grow-a-garden/best-pets-for-money" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-pets-for-money"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Opening hook — replaces templated intro */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          A new player hatches a <strong className="text-white">Common Garden Cat</strong> (1.0×) and waits 4 days before affording a Rare Egg. A second player saves the same coins, skips the Basic Egg, and hatches a <strong className="text-white">Neon Dragon Hatchling</strong> (3.5×) on day one. By the end of week one, player two has 3.5× more harvest income and is already rolling mutations. The pet you chase — and when you chase it — decides your first month of farming more than any other choice in the game.
        </p>
        <p className="mt-3 text-xs leading-relaxed text-[#768294]">
          This page ranks every pet by estimated coins-per-harvest using the canonical{" "}
          <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">Pets</Link>,{" "}
          <Link href="/grow-a-garden/crops" className="text-[#00E676] hover:underline">Crops</Link>,{" "}
          <Link href="/grow-a-garden/mutations" className="text-[#00E676] hover:underline">Mutations</Link>{" "}
          and{" "}
          <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">Trading</Link>{" "}
          databases. Estimation basis: best crop ({topCrop.name}, {topCrop.coins} coins) × best mutation ({topMutation.name}, {topMutation.multiplier}×) × pet multiplier.
        </p>
      </section>

      {/* Decision Tree — replaces "Money-Making Tiers" 4-card grid */}
      <section aria-labelledby="decision-heading">
        <h2
          id="decision-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🌳 Which Pet Should You Chase? (Decision Tree)
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-4">
            Stop reading ranked lists and asking &quot;which pet is best.&quot; The right pet depends on your current coin income. Answer the first question and follow the branch.
          </p>
          <ol className="space-y-3 text-sm text-[#BAC4D1] border-l-2 border-[#252936] pl-4">
            <li>
              <strong className="text-white">Q1: Are you earning under 2,000 coins per hour?</strong>
              <br />
              <span className="text-[#00E676]">→ Yes:</span> Do not buy any egg yet. Redeem{" "}
              <Link href="/grow-a-garden/codes" className="text-[#00E676] hover:underline">active codes</Link>{" "}
              for free coins, plant Carrot/Wheat on 1 plot, and save 2,000 coins for a Rare Egg. Target:{" "}
              <strong className="text-white">Thunder Hawk Chick</strong> (1.8×) from Basic Egg as a stopgap, OR skip straight to Rare Egg if patient.
            </li>
            <li>
              <strong className="text-white">Q2: Are you earning 2,000–10,000 coins per hour?</strong>
              <br />
              <span className="text-[#00E676]">→ Yes:</span> Buy Rare Eggs (2,000 coins). Target:{" "}
              <strong className="text-white">Neon Dragon Hatchling</strong> (3.5×) or{" "}
              <strong className="text-white">Celestial Fox Kit</strong> (3.0×, 3.3× at night). This is the best value-per-coin tier. Do not buy Legendary Eggs yet — the S-Tier drop rate is too low to justify at this income level.
            </li>
            <li>
              <strong className="text-white">Q3: Are you earning 10,000+ coins per hour?</strong>
              <br />
              <span className="text-[#00E676]">→ Yes:</span> Now you can bulk-hatch Legendary Eggs (10,000 coins each). Target:{" "}
              <strong className="text-white">Golden Phoenix Chick</strong> (5.0×, auto-collect) or{" "}
              <strong className="text-white">Golden Dragon</strong> (4.8×, doubles golden-tier crops). Budget 20–40 eggs for a reasonable S-Tier shot — that is 200,000–400,000 coins minimum.
            </li>
            <li>
              <strong className="text-white">Q4: Did you hatch a duplicate S-Tier pet?</strong>
              <br />
              <span className="text-[#00E676]">→ Yes:</span> Trade it immediately. One pet per plot means duplicates generate zero income. Trade for a different S-Tier pet or S-Tier mutation shards. Check the{" "}
              <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">Trading Database</Link>{" "}
              for current verified value before listing.
            </li>
          </ol>
        </div>
      </section>

      {/* Ranked table — kept, but moved below the decision tree so readers act first */}
      <section aria-labelledby="ranking-heading">
        <h2
          id="ranking-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          💰 Coins-Per-Harvest Ranking (Top 12)
        </h2>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs uppercase tracking-wider text-[#768294]">
                <th className="py-2 pr-3">Rank</th>
                <th className="py-2 pr-3">Pet</th>
                <th className="py-2 pr-3">Tier</th>
                <th className="py-2 pr-3">Multiplier</th>
                <th className="py-2 pr-3">Coins/Harvest</th>
                <th className="py-2 pr-3">Trade Value</th>
                <th className="py-2 pr-3">Passive Ability</th>
              </tr>
            </thead>
            <tbody>
              {moneyRanked.map((row, i) => (
                <tr key={row.id} className="border-b border-[#1E212B]">
                  <td className="py-3 pr-3 font-semibold text-[#BAC4D1]">#{i + 1}</td>
                  <td className="py-3 pr-3">
                    <Link
                      href={`/grow-a-garden/pets/${row.id}`}
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
                  <td className="py-3 pr-3 font-semibold text-white">{row.multiplier}×</td>
                  <td className="py-3 pr-3 text-sm font-semibold text-[#00E676]">
                    {row.estimatedCoinsPerHarvest.toLocaleString()} 🪙
                  </td>
                  <td className="py-3 pr-3 text-xs text-[#00E676]">
                    {row.tradeValue ? row.tradeValue.toLocaleString() : "—"}
                  </td>
                  <td className="py-3 pr-3 text-xs text-[#BAC4D1]">{row.ability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Worked Example — NEW section, replaces generic "Strategy" ol-list */}
      <section aria-labelledby="example-heading">
        <h2
          id="example-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📋 Worked Example: 7-Day Pet Upgrade Path
        </h2>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <div className="grid gap-3 sm:grid-cols-2 mb-4">
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Player resources (Day 1)</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• 1,500 coins saved</li>
                <li>• 1 plot, Carrot (60 coins, 1-min growth)</li>
                <li>• No pet equipped</li>
                <li>• No mutation rolled</li>
              </ul>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">Goal (Day 7)</div>
              <ul className="mt-1 text-xs text-[#BAC4D1] space-y-1">
                <li>• 4 plots, Golden Wheat (480 coins, 3-min)</li>
                <li>• A-Tier pet equipped (3.0×+)</li>
                <li>• At least one B-Tier mutation (2.0×+)</li>
                <li>• 10,000+ coins/hour sustained income</li>
              </ul>
            </div>
          </div>
          <div className="text-sm leading-relaxed text-[#BAC4D1] space-y-2">
            <p><strong className="text-white">Day 1–2 (Build capital):</strong> Redeem every code in the{" "}
              <Link href="/grow-a-garden/codes" className="text-[#00E676] hover:underline">Codes Database</Link>{" "}
              — typical haul is 10,000–30,000 coins plus free seeds. Skip the Basic Egg entirely. Use Carrot until you can afford 4 plots, then switch to Golden Wheat.
            </p>
            <p><strong className="text-white">Day 3 (First Rare Egg):</strong> At ~10,000 coins banked, buy a Rare Egg (2,000 coins). Expect a B-Tier pet (~70% odds) — even a 2.0× multiplier doubles your income instantly. Worst case: a 1.8× Thunder Hawk Chick still triples your Day-1 income.
            </p>
            <p><strong className="text-white">Day 4–5 (Mutation Station):</strong> Unlock the Mutation Station (1,500 coins). Bulk-roll 10 shards at once for ~11% S-Tier odds. Even a B-Tier 2.0× mutation × your 3.0× pet on a 480-coin Golden Wheat = 2,880 coins/harvest. At 4 plots × 20 harvests/hour, that is 230,400 coins/hour gross.
            </p>
            <p><strong className="text-white">Day 6–7 (A-Tier push):</strong> Reinvest coins into more Rare Eggs. Target a 3.0×–3.5× A-Tier pet ({midPet?.name ?? "Celestial Fox Kit"} or {budgetPet?.name ?? "Neon Dragon Hatchling"}). Do not chase Legendary Eggs yet — at 10,000 coins each, the expected cost per S-Tier hatch is 200,000+ coins.
            </p>
            <p className="text-xs text-[#00E676] mt-3">
              Result: From 1,500 coins and zero pets to 4 plots, A-Tier pet, B-Tier mutation, and 200,000+ coins/hour — in 7 days, with no Robux.
            </p>
          </div>
        </div>
      </section>

      {/* Common Mistakes — NEW section, replaces generic Tips */}
      <section aria-labelledby="mistakes-heading">
        <h2
          id="mistakes-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⚠️ Common Pet Money Mistakes
        </h2>
        <div className="space-y-3">
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 1: Bulk-buying Basic Eggs (500 coins) hoping for a 1.8× pet</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              The 1.8× Thunder Hawk Chick is the best Basic Egg outcome, but a single Rare Egg (2,000 coins) has a ~30% chance of an A-Tier 3.0×+ pet — strictly better than 4× Basic Eggs. Skip Basic Eggs unless you literally cannot reach 2,000 coins.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 2: Buying a cosmetic pet (Dust Bunny, Common Garden Cat) for &quot;collection&quot;</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Cosmetic pets are 1.0× — they generate zero income. Every coin spent on cosmetics before you own an A-Tier farming pet is a coin that should have gone toward Rare Eggs. Buy cosmetics only after your farm runs itself.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 3: Equipping two pets on adjacent plots thinking they stack</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Pet multipliers do NOT stack. One pet per plot, period. The optimal setup is your strongest pet on your strongest mutation on your highest-value crop — then second-strongest on second plot, and so on.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 4: Chasing Legendary Eggs before you can afford to lose 200,000 coins</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              The S-Tier drop rate is roughly 5–8% per Legendary Egg. Most players need 20–40 eggs to land a specific S-Tier pet. At 10,000 coins per egg, that is 200,000–400,000 coins. If losing that amount would stall your farm, you are not ready — keep running A-Tier pets.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">Mistake 5: Trading away your only good pet for a &quot;deal&quot;</h3>
            <p className="text-xs leading-relaxed text-[#768294]">
              Even if a trade is mathematically fair, trading your only 3.5× pet for a 4.5M-coin item leaves you with zero farming multiplier. The income loss often exceeds the trade value within 2–3 days. Only trade duplicate pets.
            </p>
          </div>
        </div>
      </section>

      {/* Late-game transition — NEW section */}
      <section aria-labelledby="late-game-heading">
        <h2
          id="late-game-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🚀 Late-Game Transition: When to Chase S-Tier
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-3">
            The jump from A-Tier (3.5×) to S-Tier (5.0×) costs an average of 200,000–400,000 coins in Legendary Eggs. The income gain is 1.5× — significant, but only worth it once your bankroll can absorb the loss without stalling the farm.
          </p>
          <div className="grid gap-3 sm:grid-cols-3 mb-3">
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">S-Tier: Golden Phoenix Chick</div>
              <div className="text-sm font-bold text-[#FF3D00]">5.0× + auto-collect</div>
              <p className="text-xs text-[#768294] mt-1">Auto-collect eliminates manual harvesting time — multiplies effective coins-per-hour beyond the raw 5.0× number.</p>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">S-Tier: Golden Dragon</div>
              <div className="text-sm font-bold text-[#FF3D00]">4.8× + golden-crop doubling</div>
              <p className="text-xs text-[#768294] mt-1">Pairs with gold mutations (Midas Bloom) for explosive coin value. Situational ceiling higher than Phoenix.</p>
            </div>
            <div className="rounded bg-[#1E212B] p-3 border border-[#252936]">
              <div className="text-xs text-[#768294] uppercase tracking-wider">S-Tier: Crystal Unicorn Foal</div>
              <div className="text-sm font-bold text-[#FF3D00]">4.5× + double-harvest proc</div>
              <p className="text-xs text-[#768294] mt-1">RNG-dependent, but on fast crops (1–2 min growth) can situationally out-earn Phoenix.</p>
            </div>
          </div>
          <p className="text-xs text-[#768294]">
            Reference the full S-Tier comparison in our{" "}
            <Link href="/grow-a-garden/best-mythical-pets-ranking" className="text-[#00E676] hover:underline">Mythical Pets Ranking</Link>{" "}
            and use the{" "}
            <Link href="/grow-a-garden/value-calculator" className="text-[#00E676] hover:underline">Value Calculator</Link>{" "}
            to model your specific farm.
          </p>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/best-pets-for-money" />
    </ContentLayout>
  );
}
