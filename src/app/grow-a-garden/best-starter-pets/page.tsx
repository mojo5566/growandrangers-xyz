import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { pets } from "@/data/garden/database/pets";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Best Starter Pets in Grow a Garden",
  description:
    "Best beginner-friendly pets in Grow a Garden: passive abilities, early game ranking, and recommended progression from Basic Egg to mid-tier pets. Sourced from canonical pet database.",
  keywords: [
    "best starter pets Grow a Garden",
    "Grow a Garden beginner pets",
    "Grow a Garden first pet",
    "Grow a Garden Basic Egg pets",
    "Grow a Garden early game pets",
    "Grow a Garden pet progression",
  ],
  alternates: { canonical: "/grow-a-garden/best-starter-pets" },
  openGraph: {
    title: "Best Starter Pets in Grow a Garden",
    description:
      "Best beginner-friendly pets: passive abilities, early game ranking, and recommended progression.",
    type: "website",
  },
};

// C-Tier pets (Basic Egg most common)
const cTierPets = pets
  .filter((p) => p.tier === "C")
  .sort((a, b) => b.multiplier - a.multiplier);

// B-Tier pets (Basic Egg rare / Rare Egg common)
const bTierPets = pets
  .filter((p) => p.tier === "B")
  .sort((a, b) => b.multiplier - a.multiplier);

// All Basic Egg source pets — most accessible for beginners
const basicEggPets = pets
  .filter((p) => p.source === "Basic Egg")
  .sort((a, b) => b.multiplier - a.multiplier);

// Rare Egg pets — mid-game target
const rareEggPets = pets
  .filter((p) => p.source === "Rare Egg")
  .sort((a, b) => b.multiplier - a.multiplier)
  .slice(0, 5);

// Top starter picks — sorted by multiplier, only C and B tier
const topStarterPicks = [...cTierPets, ...bTierPets]
  .sort((a, b) => b.multiplier - a.multiplier)
  .slice(0, 8);

const faqs = [
  {
    question: "What is the best starter pet in Grow a Garden?",
    answer:
      "The best starter pet is the highest-multiplier C-Tier or B-Tier pet you can hatch from a 500-coin Basic Egg. Even the worst C-Tier pet at 1.5× multiplier pays for itself in 5-6 harvest cycles. Don't wait for Rare or Legendary Eggs — get a Basic Egg pet online within your first 30 minutes of play.",
  },
  {
    question: "How much does a Basic Egg cost in Grow a Garden?",
    answer:
      "Basic Eggs cost 500 coins each from the Pet Shop. They're the most accessible egg type and primarily produce C-Tier pets (1.5×-2.0× multipliers) with occasional B-Tier drops. For starter players, bulk-hatching 2-3 Basic Eggs gives the best multiplier-per-coin ratio.",
  },
  {
    question: "When should I upgrade to Rare Eggs?",
    answer:
      "Upgrade to Rare Eggs (2,000 coins each) once you have 4 plots running with B-Tier mutations. The 4x cost increase over Basic Eggs is justified only when your base farm income can absorb the cost without slowing plot expansion. Typical timing: 3-5 hours into the game.",
  },
  {
    question: "Should I buy a Legendary Egg as a beginner?",
    answer:
      "No. Legendary Eggs cost 10,000 coins with only a ~5% S-Tier pet rate. As a beginner, that same 10,000 coins could expand your farm from 4 to 6 plots — a guaranteed 50% income increase. Save Legendary Eggs for the endgame when coins are abundant.",
  },
  {
    question: "Do pet multipliers stack with each other?",
    answer:
      "No, only one pet multiplier applies at a time — the highest equipped pet's multiplier is what counts. However, pet multipliers DO stack multiplicatively with mutation multipliers, which is the key mechanic for endgame income. A 2.5× B-Tier pet on a 4.0× Aurelian Crown mutation plot yields 10× total value per harvest, and stacking both systems is more impactful than chasing a single high-tier pet. See our Pet Guide for the full breakdown.",
  },
  {
    question: "What abilities do starter pets have?",
    answer:
      "Starter pets (C-Tier and B-Tier) typically have basic passive abilities like auto-watering, faster harvest animation, or small growth speed bonuses. The higher-tier pets (A and S) have more impactful passives like auto-collect, double-harvest procs, and connected-plot harvesting. See the Pets Database for each pet's specific abilities.",
  },
];

export default function BestStarterPetsPage() {
  return (
    <ContentLayout
      title="Best Starter Pets in Grow a Garden"
      description="Best beginner-friendly pets in Grow a Garden: passive abilities, early game ranking, and recommended progression from Basic Egg to mid-tier pets. Sourced from canonical pet database."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Best Starter Pets", href: "/grow-a-garden/best-starter-pets" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-starter-pets"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Pets"
      keywords={[
        "best starter pets Grow a Garden",
        "Grow a Garden beginner pets",
        "Grow a Garden first pet",
        "Grow a Garden Basic Egg pets",
        "Grow a Garden early game pets",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - AI search summary */}
      <section
        aria-labelledby="quick-answer-heading"
        className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5"
      >
        <h2
          id="quick-answer-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3"
        >
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          The best starter pets come from 500-coin Basic Eggs: target the highest-multiplier C-Tier
          (1.5×-2.0×) or B-Tier (2.0×-2.5×) drops like Bamboo Panda Cub or Ember Fox Kit. Even the
          worst C-Tier pet pays for itself in 5-6 harvest cycles. Hatch 2-3 Basic Eggs within your
          first 30 minutes, then switch to 2,000-coin Rare Eggs once you have 4 plots running with
          B-Tier mutations.
        </p>
      </section>

      {/* Hero */}
      <section className="rounded-xl border border-[#3A86FF]/30 bg-[#3A86FF]/5 p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          Your first pet is the most impactful early-game purchase in Grow a Garden. A 500-coin
          Basic Egg pays for itself in 5-6 harvest cycles and provides a permanent multiplier that
          stacks with every mutation. This guide ranks the best starter pets by multiplier,
          explains their passive abilities, and shows the optimal progression from Basic Egg to
          mid-tier team. For the full pet system deep dive, see our{" "}
          <Link href="/grow-a-garden/pet-guide" className="text-[#00E676] hover:underline">
            Pet Guide
          </Link>
          .
        </p>
      </section>

      {/* Top Starter Picks */}
      <section aria-labelledby="picks-heading">
        <h2
          id="picks-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🏆 Top Starter Pet Picks
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          Ranked by multiplier — these are the highest-value pets you can hatch within your first
          1-3 hours of play. All are sourced from Basic or Rare Eggs. Browse the full{" "}
          {pets.length} pets in the{" "}
          <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">
            Pets Database
          </Link>
          .
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">#</th>
                <th className="py-3 px-3 font-semibold">Pet</th>
                <th className="py-3 px-3 font-semibold">Tier</th>
                <th className="py-3 px-3 font-semibold">Multiplier</th>
                <th className="py-3 px-3 font-semibold">Source</th>
                <th className="py-3 px-3 font-semibold">Key Ability</th>
              </tr>
            </thead>
            <tbody>
              {topStarterPicks.map((p, i) => (
                <tr key={p.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3 text-[#768294]">{i + 1}</td>
                  <td className="py-3 px-3">
                    <Link
                      href={`/grow-a-garden/pets/${p.id}`}
                      className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {p.name}
                    </Link>
                  </td>
                  <td className="py-3 px-3 text-xs text-[#768294]">{p.tier}</td>
                  <td className="py-3 px-3 text-sm font-bold text-[#00E676]">{p.multiplier}×</td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{p.source}</td>
                  <td className="py-3 px-3 text-xs text-[#768294] truncate max-w-[200px]">
                    {p.abilities[0]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Passive Abilities Explained */}
      <section aria-labelledby="abilities-heading">
        <h2
          id="abilities-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⚙️ Starter Pet Passive Abilities
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              ability: "Auto-Water",
              desc: "Automatically waters the pet's plot every 60 seconds. Saves significant manual time on large farms. Common on B-Tier aquatically-themed pets.",
            },
            {
              ability: "Faster Harvest",
              desc: "Harvest animation completes 50% faster. Increases actions-per-minute for active players. Found on pets like the Ember Fox Kit.",
            },
            {
              ability: "Growth Speed Bonus",
              desc: "Crops grow 10-25% faster while the pet is equipped. Excellent for fast-cycling farms using short-growth crops like Carrot (2 min).",
            },
            {
              ability: "Pest Resistance",
              desc: "Reduces the chance of pest invasions on the pet's plot. Defensive passive — valuable for high-value crops where losses are painful.",
            },
            {
              ability: "Coin Bonus",
              desc: "Adds a small flat coin bonus on top of the multiplier. Less impactful at scale but helpful for early-game income jumps.",
            },
            {
              ability: "Seasonal Synergy",
              desc: "Activates a bonus multiplier during a specific season (e.g., +20% in Winter). Pairs naturally with seasonal mutations for stacked bonuses.",
            },
          ].map((a) => (
            <div key={a.ability} className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
              <h3 className="text-sm font-semibold text-[#00E676] mb-1">{a.ability}</h3>
              <p className="text-xs text-[#768294] leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Egg Source Breakdown */}
      <section aria-labelledby="eggs-heading">
        <h2
          id="eggs-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🥚 Egg Source Breakdown for Starters
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#3A86FF]/30 bg-[#14161D] p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-[#3A86FF]">Basic Egg (500 coins)</h3>
              <span className="text-xs text-[#768294]">{basicEggPets.length} pets</span>
            </div>
            <p className="text-xs text-[#768294] leading-relaxed mb-3">
              The starter egg. Primarily produces C-Tier pets with occasional B-Tier drops. Best
              value per coin for first 3-5 hatches.
            </p>
            <div className="space-y-1.5">
              {basicEggPets.slice(0, 5).map((p) => (
                <div key={p.id} className="flex items-center justify-between text-xs">
                  <Link
                    href={`/grow-a-garden/pets/${p.id}`}
                    className="text-[#BAC4D1] hover:text-[#00E676] transition"
                  >
                    {p.name}
                  </Link>
                  <span className="text-[#00E676] font-bold">{p.multiplier}×</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-[#FF8C00]">Rare Egg (2,000 coins)</h3>
              <span className="text-xs text-[#768294]">mid-game target</span>
            </div>
            <p className="text-xs text-[#768294] leading-relaxed mb-3">
              The mid-game upgrade. Primarily produces B-Tier and A-Tier pets. Switch to these once
              you have 4 plots and a B-Tier mutation.
            </p>
            <div className="space-y-1.5">
              {rareEggPets.map((p) => (
                <div key={p.id} className="flex items-center justify-between text-xs">
                  <Link
                    href={`/grow-a-garden/pets/${p.id}`}
                    className="text-[#BAC4D1] hover:text-[#00E676] transition"
                  >
                    {p.name}
                  </Link>
                  <span className="text-[#00E676] font-bold">{p.multiplier}×</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Progression */}
      <section aria-labelledby="progression-heading">
        <h2
          id="progression-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🗺️ Recommended Pet Progression
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <ol className="space-y-3">
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3A86FF]/20 text-xs font-bold text-[#3A86FF]">
                1
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">First Basic Egg (0-1 hour)</h3>
                <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                  Spend 500 coins on a Basic Egg as soon as the Pet Shop unlocks. Hatch immediately
                  — even a C-Tier 1.5× pet pays for itself in 5-6 harvest cycles.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3A86FF]/20 text-xs font-bold text-[#3A86FF]">
                2
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">Bulk Basic Eggs (1-3 hours)</h3>
                <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                  Hatch 2-3 more Basic Eggs to fish for B-Tier drops. Equip the highest multiplier
                  pet you hatch. Total cost: 1,500-2,000 coins for 3-4 pets.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3A86FF]/20 text-xs font-bold text-[#3A86FF]">
                3
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">First Rare Egg (3-5 hours)</h3>
                <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                  Once you have 4 plots running with B-Tier mutations, switch to Rare Eggs (2,000
                  coins each). Target a 2.5×+ multiplier pet to replace your Basic Egg starter.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3A86FF]/20 text-xs font-bold text-[#3A86FF]">
                4
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">Bulk Rare Eggs (5-10 hours)</h3>
                <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                  Hatch 3-5 Rare Eggs to fish for A-Tier drops. Aim for a 3.0×+ multiplier as your
                  main pet. Total cost: 6,000-10,000 coins.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3A86FF]/20 text-xs font-bold text-[#3A86FF]">
                5
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">Legendary Eggs (10+ hours)</h3>
                <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                  Only after your farm generates 50K+ coins/hour. Legendary Eggs (10,000 coins each)
                  have a ~5% S-Tier drop rate — gambles, but the 4.5×-5.0× S-Tier pets are
                  endgame-defining.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <RelatedContent
        category="guide"
        game="garden"
        currentPath="/grow-a-garden/best-starter-pets"
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
