import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { pets, getPetsByTier } from "@/data/garden/database/pets";
import { crops } from "@/data/garden/database/crops";
import { mutations } from "@/data/garden/database/mutations";
import { trading } from "@/data/garden/database/trading";
import { getActiveEvents } from "@/data/garden/database/events";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Best Summer Pets — Grow a Garden Summer Event Pet Guide",
  description:
    "Best pets for Summer in Grow a Garden: top Summer pets ranked by multiplier, seasonal bonus stacking, Summer crop and mutation synergy, acquisition guide, and trading values. Sourced from canonical databases.",
  keywords: [
    "best summer pets grow a garden",
    "grow a garden summer pets",
    "summer event pets",
    "magma lizard hatchling",
    "flame bear pet",
    "summer pet ranking",
    "grow a garden summer farming",
  ],
  alternates: { canonical: "/grow-a-garden/best-summer-pets" },
  openGraph: {
    title: "Best Summer Pets — Grow a Garden Summer Event Pet Guide",
    description:
      "Top Summer pets ranked, seasonal bonus stacking, Summer crop and mutation synergy, acquisition guide, and trading values.",
    type: "website",
  },
};

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

const rarityColors: Record<string, string> = {
  Mythical: "#E91E63",
  Legendary: "#FF8C00",
  Epic: "#9C27B0",
  Rare: "#3A86FF",
  Common: "#768294",
};

const trendBadge: Record<string, string> = {
  Rising: "bg-[#00E676]/20 text-[#00E676]",
  Stable: "bg-[#FFD700]/20 text-[#FFD700]",
  Falling: "bg-[#FF3D00]/20 text-[#FF3D00]",
};

function formatValue(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2).replace(/\.00$/, "")}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return value.toString();
}

// Summer-relevant pets — pets with Summer bonus OR fire-themed synergy OR Campfire Event pets
// Magma Lizard Hatchling has explicit Summer bonus (3.0x during Summer)
// Flame Bear & Shadow Cat are Campfire Event Part 3 pets with Summer synergy
// Phoenix Hatchling is fire-themed and pairs with Summer crops
const summerPets = pets.filter((p) =>
  p.seasonalBonus?.season === "Summer" ||
  p.id === "flame-bear" ||
  p.id === "shadow-cat" ||
  p.id === "phoenix-hatchling" ||
  p.id === "magma-lizard-hatchling"
);

// Sort Summer pets by effective Summer multiplier (seasonal bonus if Summer, else base)
const summerPetsRanked = [...summerPets].sort((a, b) => {
  const aMult = a.seasonalBonus?.season === "Summer" ? a.seasonalBonus.bonusMultiplier : a.multiplier;
  const bMult = b.seasonalBonus?.season === "Summer" ? b.seasonalBonus.bonusMultiplier : b.multiplier;
  return bMult - aMult;
});

// Top general pets that work well in Summer (S and A-Tier all-season pets)
const topAllSeasonPets = [
  ...getPetsByTier("S"),
  ...getPetsByTier("A"),
].sort((a, b) => b.multiplier - a.multiplier).slice(0, 6);

// Summer crops — only crops available during Summer season
const summerCrops = [...crops]
  .filter((c) => c.season === "Summer" || c.season === "All")
  .sort((a, b) => b.coinsPerMinute - a.coinsPerMinute)
  .slice(0, 8);

// Summer-relevant mutations — Emberglow is the Summer staple
const summerMutations = [...mutations]
  .filter((m) =>
    m.id === "emberglow" ||
    m.id === "midas-bloom" ||
    m.id === "prismatic-rainbow" ||
    m.id === "aurelian-crown"
  )
  .sort((a, b) => b.multiplier - a.multiplier);

// Summer-relevant trading items — pets, seeds, crops, mutations with Summer synergy
const summerTradingItems = trading.filter((t) =>
  t.id === "pet-ember-serpent" ||
  t.id === "pet-flame-bear" ||
  t.id === "pet-shadow-cat" ||
  t.id === "seed-phoenix-bloom" ||
  t.id === "seed-magma-pepper" ||
  t.id === "crop-phoenix-bloom" ||
  t.id === "crop-magma-pepper" ||
  t.id === "mutation-emberglow"
).sort((a, b) => b.value - a.value);

// Active Summer event
const activeSummerEvent = getActiveEvents().find((e) =>
  e.title.toLowerCase().includes("summer")
);

// Stacking example: Phoenix Bloom × Magma Lizard Hatchling (Summer) × Emberglow
const summerCrop = summerCrops.find((c) => c.id === "crop-phoenix-bloom") ?? summerCrops[0];
const summerPet = summerPetsRanked[0];
const summerMutation = summerMutations[0];
const effectiveSummerPetMult = summerPet.seasonalBonus?.season === "Summer"
  ? summerPet.seasonalBonus.bonusMultiplier
  : summerPet.multiplier;
const summerStackedPerHarvest = Math.round(
  summerCrop.coins * summerMutation.multiplier * effectiveSummerPetMult
);

const faqs = [
  {
    question: "What are the best Summer pets in Grow a Garden?",
    answer:
      "The top Summer pets are: (1) Magma Lizard Hatchling — 2.0x base jumps to 3.0x during Summer (Rare Egg, accessible). (2) Flame Bear — 3.0x base with +20% coin value on fire-type crops and Summer spoilage immunity (Campfire Event Part 3 exclusive). (3) Shadow Cat — 2.8x base with night-time mutation boost and Inferno Shard drops (Campfire Event Part 3 exclusive). (4) Phoenix Hatchling — 3.4x base with daily crop revival passive (Rare Egg, fire-themed). Magma Lizard Hatchling is the best budget Summer pet; Flame Bear is the best premium Summer pet.",
  },
  {
    question: "How does the Summer Event bonus work with pets?",
    answer:
      "The Summer Event 2026 grants +20% harvest value on all Summer crops — this stacks multiplicatively with pet multipliers and mutation multipliers. Example: Phoenix Bloom (5,000 coins base) × Magma Lizard Hatchling Summer bonus (3.0x) × Emberglow mutation (2.8x) × Summer Event bonus (1.2x) = 50,400 coins per harvest. The seasonal bonus is the single largest multiplier available during the Summer window.",
  },
  {
    question: "Should I use Magma Lizard Hatchling or Golden Phoenix Chick in Summer?",
    answer:
      "Golden Phoenix Chick (5.0x) still outperforms Magma Lizard Hatchling (3.0x Summer bonus) in absolute multiplier. However, Magma Lizard Hatchling is far more accessible (Rare Egg, 2,000 Coins) vs Golden Phoenix Chick (Legendary Egg, 10,000 Coins, ~5% drop rate). For budget players, Magma Lizard Hatchling is the best Summer value. For endgame players, Golden Phoenix Chick remains the top choice regardless of season.",
  },
  {
    question: "When is the Grow a Garden Summer Event 2026?",
    answer:
      "The Summer Event 2026 runs from June through August 2026. It introduces Summer-only crops (Phoenix Bloom, Magma Pepper), the Phoenix Bloom Seed (50,000 Sheckles), and a +20% harvest value bonus on all Summer crops. The event also includes the Premium Event Seed Pack (199 Robux) with guaranteed mutation rolls. Plan your Summer wealth sprint to coincide with this window for maximum income.",
  },
  {
    question: "Which Summer crops work best with Summer pets?",
    answer:
      "Phoenix Bloom (12,500 Sheckles value, Rising trend) is the most valuable Summer crop — pair with Magma Lizard Hatchling (3.0x Summer) and Emberglow mutation (2.8x) for the highest Summer income. Magma Pepper (5,200 Sheckles, Falling trend) is a budget alternative with a faster 4-minute growth cycle. For all-season baseline income, Golden Wheat (160 CPM) remains the workhorse crop during Summer.",
  },
  {
    question: "How do I get the Flame Bear pet in Grow a Garden?",
    answer:
      "Flame Bear is a Campfire Event Part 3 exclusive pet with a 3.0x base multiplier, +20% coin value on fire-type crops, and Summer spoilage immunity. It was released during the Campfire Event Part 3 update (June 20, 2026). Campfire Event pets are typically obtained through event-specific mechanics — check the Events Database for current availability. Flame Bear trades at ~600K Sheckles value with Stable demand.",
  },
];

export default function BestSummerPetsPage() {
  return (
    <ContentLayout
      title="Grow a Garden Best Summer Pets — Summer Event Pet Guide"
      description="Best pets for Summer in Grow a Garden: top Summer pets ranked by multiplier, seasonal bonus stacking, Summer crop and mutation synergy, acquisition guide, and trading values. Sourced from canonical databases."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Best Summer Pets", href: "/grow-a-garden/best-summer-pets" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/best-summer-pets"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Hero Intro */}
      <section className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          Summer is the highest-income season in Grow a Garden — the{" "}
          <strong className="text-white">+20% Summer Event bonus</strong> on harvest value stacks
          multiplicatively with pet multipliers and mutation multipliers. This guide ranks the best Summer
          pets, explains seasonal bonus stacking, and shows how to combine Summer pets with{" "}
          <Link href="/grow-a-garden/crops" className="text-[#00E676] hover:underline">Summer crops</Link> and{" "}
          <Link href="/grow-a-garden/mutations" className="text-[#00E676] hover:underline">Summer mutations</Link>{" "}
          for maximum income. All values sourced from our canonical{" "}
          <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">pets</Link> and{" "}
          <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">trading</Link> databases.
        </p>
        {activeSummerEvent && (
          <div className="mt-3 rounded-lg bg-[#FF8C00]/10 border border-[#FF8C00]/30 p-3">
            <p className="text-xs text-[#FF8C00] font-semibold">
              ☀️ ACTIVE: {activeSummerEvent.title} ({activeSummerEvent.startDate} – {activeSummerEvent.endDate})
            </p>
            <p className="text-xs text-[#BAC4D1] mt-1">
              +20% harvest value on all Summer crops — stack with Summer pets for maximum income.
            </p>
          </div>
        )}
      </section>

      {/* Why Summer Pets Matter */}
      <section aria-labelledby="why-summer-pets">
        <h2
          id="why-summer-pets"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          ☀️ Why Summer Pets Matter
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 mb-4">
          <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-white mb-2">The Summer Multiplier Stack</h3>
            <p className="text-xs text-[#BAC4D1] leading-relaxed">
              Summer income is calculated as: <strong className="text-white">crop base × Summer pet bonus ×
              Summer mutation × Summer Event +20%</strong>. The seasonal bonus stacks multiplicatively — not
              additively — meaning a 3.0x Summer pet combined with a 2.8x Summer mutation and the +20% event
              bonus yields a 10.08x effective multiplier on Summer crops.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-white mb-2">Why Summer Beats Other Seasons</h3>
            <ul className="text-xs text-[#BAC4D1] leading-relaxed space-y-1">
              <li>• Phoenix Bloom (12,500 Sheckles) is the highest-value seasonal crop</li>
              <li>• Summer Event runs 3 months (June–August) — longest seasonal window</li>
              <li>• Multiple Summer pets available (Magma Lizard, Flame Bear, Shadow Cat, Phoenix)</li>
              <li>• Campfire Event Part 3 pets overlap with Summer for double synergy</li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <h3 className="text-sm font-semibold text-white mb-3">The Summer Wealth Formula</h3>
          <div className="text-center">
            <div className="text-xs text-[#768294] uppercase tracking-wider mb-2">
              Single Summer Harvest Calculation
            </div>
            <div className="text-lg sm:text-xl font-mono text-white mb-4">
              {summerCrop.coins.toLocaleString()} × {effectiveSummerPetMult}× × {summerMutation.multiplier}× × 1.2 ={" "}
              <span className="text-[#FF8C00] font-bold">{(summerStackedPerHarvest * 1.2).toLocaleString()} 🪙</span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
                <div className="text-[#768294]">Summer Crop</div>
                <div className="text-sm font-semibold text-white mt-1">{summerCrop.name}</div>
                <div className="text-[#00E676] font-bold">{summerCrop.coins.toLocaleString()} 🪙</div>
              </div>
              <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
                <div className="text-[#768294]">Summer Pet</div>
                <div className="text-sm font-semibold text-white mt-1">{summerPet.name}</div>
                <div className="text-[#FF8C00] font-bold">{effectiveSummerPetMult}×</div>
              </div>
              <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
                <div className="text-[#768294]">Summer Mutation</div>
                <div className="text-sm font-semibold text-white mt-1">{summerMutation.name}</div>
                <div className="text-[#9C27B0] font-bold">{summerMutation.multiplier}×</div>
              </div>
            </div>
            <p className="text-xs text-[#768294] mt-3">
              × 4 plots = {(((summerStackedPerHarvest * 1.2) * 4) / 1000).toFixed(0)}K per Summer harvest cycle
            </p>
          </div>
        </div>
      </section>

      {/* Top Summer Pets Ranked */}
      <section aria-labelledby="summer-pets-ranked">
        <h2
          id="summer-pets-ranked"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          🏆 Top Summer Pets Ranked
        </h2>
        <p className="text-xs text-[#768294] mb-4">
          Ranked by effective Summer multiplier — pets with explicit Summer seasonal bonuses are evaluated at
          their Summer value. All-season S-Tier pets are included for comparison as they remain the strongest
          options even during Summer.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">#</th>
                <th className="py-3 px-3 font-semibold">Pet</th>
                <th className="py-3 px-3 font-semibold">Tier</th>
                <th className="py-3 px-3 font-semibold">Base Mult.</th>
                <th className="py-3 px-3 font-semibold">Summer Mult.</th>
                <th className="py-3 px-3 font-semibold">Source</th>
                <th className="py-3 px-3 font-semibold">Summer Synergy</th>
              </tr>
            </thead>
            <tbody>
              {summerPetsRanked.map((pet, i) => {
                const summerMult = pet.seasonalBonus?.season === "Summer"
                  ? pet.seasonalBonus.bonusMultiplier
                  : pet.multiplier;
                const isSummerBoosted = pet.seasonalBonus?.season === "Summer";
                return (
                  <tr key={pet.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                    <td className="py-3 px-3 text-[#768294]">{i + 1}</td>
                    <td className="py-3 px-3">
                      <Link
                        href={`/grow-a-garden/pets/${pet.id}`}
                        className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                      >
                        {pet.name}
                      </Link>
                    </td>
                    <td className="py-3 px-3">
                      <span
                        className="code-text inline-block rounded px-2 py-0.5 text-xs font-semibold"
                        style={{ color: tierColors[pet.tier], backgroundColor: tierColors[pet.tier] + "1a" }}
                      >
                        {pet.tier}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-xs text-[#BAC4D1]">{pet.multiplier.toFixed(1)}×</td>
                    <td className="py-3 px-3">
                      <span className={`text-base font-bold ${isSummerBoosted ? "text-[#FF8C00]" : "text-[#00E676]"}`}>
                        {summerMult.toFixed(1)}×
                      </span>
                      {isSummerBoosted && (
                        <span className="ml-1 text-xs text-[#FF8C00]">☀️</span>
                      )}
                    </td>
                    <td className="py-3 px-3 text-xs text-[#BAC4D1]">{pet.source}</td>
                    <td className="py-3 px-3 text-xs text-[#768294]">
                      {pet.abilities[0].length > 50 ? pet.abilities[0].slice(0, 50) + "..." : pet.abilities[0]}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 mt-4">
          <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-white mb-2">☀️ Best Budget Summer Pet</h3>
            <p className="text-xs text-[#BAC4D1] leading-relaxed">
              <Link href="/grow-a-garden/pets/magma-lizard-hatchling" className="text-[#00E676] hover:underline">
                Magma Lizard Hatchling
              </Link>{" "}
              — 2.0x base jumps to <strong className="text-white">3.0x during Summer</strong>. Obtainable from
              Rare Eggs (2,000 Coins each). Pairs perfectly with Phoenix Bloom and Emberglow mutation for the
              canonical Summer farming build.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-white mb-2">🔥 Best Premium Summer Pet</h3>
            <p className="text-xs text-[#BAC4D1] leading-relaxed">
              <Link href="/grow-a-garden/pets/flame-bear" className="text-[#00E676] hover:underline">
                Flame Bear
              </Link>{" "}
              — 3.0x base with <strong className="text-white">+20% coin value on fire-type crops</strong> and
              Summer spoilage immunity. Campfire Event Part 3 exclusive. Trades at ~600K Sheckles. The premium
              choice for dedicated Summer farmers.
            </p>
          </div>
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          👉 See the full{" "}
          <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">
            Pets Database
          </Link>{" "}
          for all pets, or read the{" "}
          <Link href="/grow-a-garden/pet-guide" className="text-[#00E676] hover:underline">
            Pet Guide
          </Link>{" "}
          for the system explanation.
        </p>
      </section>

      {/* Summer Pet Acquisition Guide */}
      <section aria-labelledby="summer-acquisition">
        <h2
          id="summer-acquisition"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          🎯 Summer Pet Acquisition Guide
        </h2>
        <p className="text-xs text-[#768294] mb-4">
          Summer pets come from three sources: Rare Eggs (budget), Campfire Event Part 3 (premium), and
          Legendary Eggs (endgame). Below is the fastest acquisition path for each Summer pet.
        </p>
        <div className="space-y-3">
          {[
            {
              pet: "Magma Lizard Hatchling",
              source: "Rare Egg (2,000 Coins)",
              dropRate: "~15% from Rare Eggs",
              time: "1–3 hours of farming",
              strategy: "Bulk-buy Rare Eggs after Phase 2 of the wealth sprint. Magma Lizard Hatchling is the most accessible Summer pet — expect 1 drop per 6–8 eggs on average.",
              color: "#FFD700",
            },
            {
              pet: "Flame Bear",
              source: "Campfire Event Part 3 (event-exclusive)",
              dropRate: "Event mechanic — check Events DB",
              time: "Event window only",
              strategy: "Obtained through Campfire Event Part 3 mechanics (typically ritual or quest-based). Available only during the event window. If missed, trade for it at ~600K Sheckles.",
              color: "#FF8C00",
            },
            {
              pet: "Shadow Cat",
              source: "Campfire Event Part 3 (event-exclusive)",
              dropRate: "Event mechanic — check Events DB",
              time: "Event window only",
              strategy: "Campfire Event Part 3 exclusive. Inferno Shard drop chance makes it valuable for ritual farming. Trades at ~800K Sheckles with Rising trend — acquire via trade if event has ended.",
              color: "#9C27B0",
            },
            {
              pet: "Phoenix Hatchling",
              source: "Rare Egg (2,000 Coins)",
              dropRate: "~10% from Rare Eggs",
              time: "2–4 hours of farming",
              strategy: "Fire-themed A-Tier pet with daily crop revival passive. Pairs naturally with Summer crops. Strong all-season choice that shines during Summer due to fire synergy.",
              color: "#FF3D00",
            },
          ].map((row) => (
            <div
              key={row.pet}
              className="rounded-xl border border-[#252936] bg-[#14161D] p-4 hover:border-[#FF8C00] transition"
            >
              <div className="flex items-start gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{ backgroundColor: row.color + "33", color: row.color }}
                >
                  🔥
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h3 className="text-sm font-semibold text-white">{row.pet}</h3>
                    <span className="rounded bg-[#FF8C00]/20 px-2 py-0.5 text-xs font-semibold text-[#FF8C00]">
                      ⏱ {row.time}
                    </span>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2 mt-2 text-xs">
                    <div>
                      <span className="text-[#768294]">Source: </span>
                      <span className="text-[#BAC4D1]">{row.source}</span>
                    </div>
                    <div>
                      <span className="text-[#768294]">Drop Rate: </span>
                      <span className="text-[#BAC4D1]">{row.dropRate}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-[#BAC4D1] leading-relaxed">{row.strategy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summer Crop & Mutation Synergy */}
      <section aria-labelledby="summer-synergy">
        <h2
          id="summer-synergy"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          🌱 Summer Crop & Mutation Synergy
        </h2>
        <p className="text-xs text-[#768294] mb-4">
          Summer pets reach full potential only when paired with Summer crops and Summer mutations. Below are
          the canonical Summer crops and the mutations that maximize Summer pet income.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 mb-4">
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">🌾 Top Summer Crops</h3>
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="min-w-[480px] w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                    <th className="py-3 px-3 font-semibold">Crop</th>
                    <th className="py-3 px-3 font-semibold">Tier</th>
                    <th className="py-3 px-3 font-semibold">CPM</th>
                    <th className="py-3 px-3 font-semibold">Season</th>
                  </tr>
                </thead>
                <tbody>
                  {summerCrops.slice(0, 6).map((crop) => (
                    <tr key={crop.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                      <td className="py-3 px-3">
                        <Link
                          href={`/grow-a-garden/crops/${crop.id}`}
                          className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition text-xs"
                        >
                          {crop.name}
                        </Link>
                      </td>
                      <td className="py-3 px-3">
                        <span
                          className="code-text inline-block rounded px-2 py-0.5 text-xs font-semibold"
                          style={{ color: tierColors[crop.tier], backgroundColor: tierColors[crop.tier] + "1a" }}
                        >
                          {crop.tier}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-xs font-bold text-[#00E676]">{crop.coinsPerMinute}</td>
                      <td className="py-3 px-3 text-xs text-[#BAC4D1]">{crop.season}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">✨ Summer Mutations</h3>
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="min-w-[480px] w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                    <th className="py-3 px-3 font-semibold">Mutation</th>
                    <th className="py-3 px-3 font-semibold">Tier</th>
                    <th className="py-3 px-3 font-semibold">Mult.</th>
                    <th className="py-3 px-3 font-semibold">Roll Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {summerMutations.map((m) => (
                    <tr key={m.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                      <td className="py-3 px-3">
                        <Link
                          href={`/grow-a-garden/mutations/${m.id}`}
                          className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition text-xs"
                        >
                          {m.name}
                        </Link>
                      </td>
                      <td className="py-3 px-3">
                        <span
                          className="code-text inline-block rounded px-2 py-0.5 text-xs font-semibold"
                          style={{ color: tierColors[m.tier], backgroundColor: tierColors[m.tier] + "1a" }}
                        >
                          {m.tier}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-xs font-bold text-[#00E676]">{m.multiplier.toFixed(1)}×</td>
                      <td className="py-3 px-3 text-xs text-[#BAC4D1]">{m.rollRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <h3 className="text-sm font-semibold text-white mb-3">🔥 The Canonical Summer Build</h3>
          <p className="text-xs text-[#BAC4D1] leading-relaxed mb-3">
            The highest-income Summer build combines four elements. This is the canonical Summer farming stack:
          </p>
          <ol className="space-y-2 text-xs text-[#BAC4D1] leading-relaxed list-decimal pl-5">
            <li><strong className="text-white">Pet:</strong> Magma Lizard Hatchling (3.0x Summer bonus) for budget, or Golden Phoenix Chick (5.0x) for endgame.</li>
            <li><strong className="text-white">Crop:</strong> Phoenix Bloom (12,500 Sheckles value, Rising trend) on all 4 plots — the most valuable Summer crop.</li>
            <li><strong className="text-white">Mutation:</strong> Emberglow (2.8x, Summer staple) on Phoenix Bloom plots — rolls reliably during Summer.</li>
            <li><strong className="text-white">Event bonus:</strong> Summer Event 2026 (+20% harvest value on Summer crops) — active June–August.</li>
          </ol>
          <div className="mt-3 rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
            <p className="text-xs text-[#768294] mb-1">Canonical Summer Stack Example:</p>
            <p className="text-sm font-mono text-white">
              Phoenix Bloom (5,000) × Magma Lizard (3.0x) × Emberglow (2.8x) × Summer Event (1.2x) ={" "}
              <span className="text-[#FF8C00] font-bold">50,400 🪙</span> per harvest
            </p>
          </div>
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          👉 Browse the full{" "}
          <Link href="/grow-a-garden/seeds" className="text-[#00E676] hover:underline">
            Seeds Database
          </Link>{" "}
          for Summer seed availability, or read the{" "}
          <Link href="/grow-a-garden/best-mutations" className="text-[#00E676] hover:underline">
            Best Mutations Guide
          </Link>{" "}
          for mutation farming strategy.
        </p>
      </section>

      {/* Summer Wealth Sprint */}
      <section aria-labelledby="summer-sprint">
        <h2
          id="summer-sprint"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          💰 Summer Wealth Sprint
        </h2>
        <p className="text-xs text-[#768294] mb-4">
          The Summer Event window (June–August) is the highest-income period in Grow a Garden. Below is the
          time-boxed Summer wealth sprint — align your farming with the active Summer Event for maximum income.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">Time Window</th>
                <th className="py-3 px-3 font-semibold">Summer Method</th>
                <th className="py-3 px-3 font-semibold">Expected Coins</th>
                <th className="py-3 px-3 font-semibold">Summer Stack</th>
              </tr>
            </thead>
            <tbody>
              {[
                { time: "15 min", method: "Magma Pepper harvest + Summer bonus", coins: "10K – 25K", stack: "Magma Pepper × any pet × 1.2x event" },
                { time: "1 hour", method: "Phoenix Bloom × Magma Lizard", coins: "80K – 150K", stack: "Phoenix Bloom × 3.0x Summer × 1.2x event" },
                { time: "4 hours", method: "Full Summer mutation stack", coins: "400K – 800K", stack: "Phoenix Bloom × Magma Lizard × Emberglow × 1.2x" },
                { time: "8 hours", method: "S-Tier Summer farming", coins: "1M – 3M", stack: "Phoenix Bloom × Phoenix Chick × Prismatic × 1.2x" },
                { time: "1 week", method: "Summer Event full push", coins: "5M – 15M+", stack: "Full S-Tier stack + Summer bonus + flips" },
              ].map((row) => (
                <tr key={row.time} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3">
                    <span className="rounded bg-[#FF8C00]/20 px-2 py-0.5 text-xs font-semibold text-[#FF8C00]">
                      {row.time}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-xs font-semibold text-[#BAC4D1]">{row.method}</td>
                  <td className="py-3 px-3 text-sm font-bold text-[#00E676]">{row.coins} 🪙</td>
                  <td className="py-3 px-3 text-xs text-[#768294]">{row.stack}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5 mt-4">
          <h3 className="text-sm font-semibold text-white mb-3">☀️ Summer Event Action Checklist</h3>
          <ul className="space-y-2 text-xs text-[#BAC4D1] leading-relaxed">
            <li><strong className="text-white">Stock up on Phoenix Bloom Seeds</strong> (50K Sheckles each) early in the event — prices rise as the event nears its end.</li>
            <li><strong className="text-white">Bulk-hatch Rare Eggs</strong> for a Magma Lizard Hatchling before the event ends — Summer bonus is wasted without a Summer pet.</li>
            <li><strong className="text-white">Roll Emberglow mutations</strong> on all 4 plots — Emberglow is the Summer staple mutation with stable demand.</li>
            <li><strong className="text-white">Avoid Magma Pepper</strong> (Falling trend) unless budget-constrained — Phoenix Bloom dominates the Summer meta.</li>
            <li><strong className="text-white">Trade surplus Summer items</strong> during the event — demand peaks when active players need event-specific gear.</li>
          </ul>
        </div>
      </section>

      {/* Summer Pet Trading Values */}
      <section aria-labelledby="summer-trading">
        <h2
          id="summer-trading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          💱 Summer Pet & Item Trading Values
        </h2>
        <p className="text-xs text-[#768294] mb-4">
          Summer-relevant trading items — pets, seeds, crops, and mutations with Summer synergy. Values
          sourced from the canonical trading database. Use these to plan Summer flips and holds.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">#</th>
                <th className="py-3 px-3 font-semibold">Item</th>
                <th className="py-3 px-3 font-semibold">Category</th>
                <th className="py-3 px-3 font-semibold">Rarity</th>
                <th className="py-3 px-3 font-semibold">Value</th>
                <th className="py-3 px-3 font-semibold">Demand</th>
                <th className="py-3 px-3 font-semibold">Trend</th>
              </tr>
            </thead>
            <tbody>
              {summerTradingItems.map((item, i) => (
                <tr key={item.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3 text-[#768294]">{i + 1}</td>
                  <td className="py-3 px-3">
                    <Link
                      href={`/grow-a-garden/trading/${item.id}`}
                      className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {item.name}
                    </Link>
                  </td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{item.category}</td>
                  <td className="py-3 px-3">
                    <span
                      className="code-text inline-block rounded px-2 py-0.5 text-xs font-semibold"
                      style={{
                        color: rarityColors[item.rarity],
                        backgroundColor: rarityColors[item.rarity] + "1a",
                      }}
                    >
                      {item.rarity}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-sm font-bold text-[#00E676]">{formatValue(item.value)} 🪙</td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{item.demand}</td>
                  <td className="py-3 px-3">
                    <span className={`rounded px-2 py-0.5 text-xs font-semibold ${trendBadge[item.trend]}`}>
                      {item.trend}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 mt-4">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">📈 Summer Investment Holds</h3>
            <p className="text-xs text-[#BAC4D1] leading-relaxed">
              <strong className="text-white">Phoenix Bloom Seed (320K, Rising)</strong> — Summer-only with
              seasonal demand spikes. Stock up off-season and sell at premium during Summer Event.{" "}
              <strong className="text-white">Shadow Cat (800K, Rising)</strong> — Campfire Event Part 3
              exclusive with Inferno Shard value — appreciates as event nears end.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-2">📉 Summer Items to Avoid</h3>
            <p className="text-xs text-[#BAC4D1] leading-relaxed">
              <strong className="text-white">Magma Pepper Seed (55K, Falling)</strong> — outclassed by Phoenix
              Bloom in the Summer meta. Liquidate immediately if held.{" "}
              <strong className="text-white">Magma Pepper crop (5,200, Falling)</strong> — same trend, lower
              absolute value. Sell surplus to active players during Summer Event.
            </p>
          </div>
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          👉 Browse the full{" "}
          <Link href="/grow-a-garden/trading" className="text-[#00E676] hover:underline">
            Trading Values Database
          </Link>{" "}
          or read the{" "}
          <Link href="/grow-a-garden/trading-tips" className="text-[#00E676] hover:underline">
            Trading Tips Guide
          </Link>{" "}
          for scam prevention and advanced strategies.
        </p>
      </section>

      {/* All-Season Alternatives & Common Mistakes */}
      <section aria-labelledby="summer-mistakes">
        <h2
          id="summer-mistakes"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          ⚠️ Summer Pet Mistakes & All-Season Alternatives
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 mb-4">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-[#00E676] mb-3">✅ Summer Pet Do&apos;s</h3>
            <ul className="space-y-2 text-xs text-[#BAC4D1] leading-relaxed">
              <li><strong className="text-white">Equip a Summer-bonus pet:</strong> Magma Lizard Hatchling (3.0x Summer) outperforms its 2.0x base during Summer.</li>
              <li><strong className="text-white">Pair with Phoenix Bloom:</strong> Highest-value Summer crop — 12,500 Sheckles per harvest with Rising trend.</li>
              <li><strong className="text-white">Roll Emberglow mutations:</strong> Summer staple mutation (2.8x) — stable demand and reliable rolls.</li>
              <li><strong className="text-white">Farm during the active Summer Event:</strong> +20% harvest bonus is the largest seasonal multiplier available.</li>
              <li><strong className="text-white">Hold Phoenix Bloom Seeds:</strong> Off-season stockpiling sells at premium when Summer Event returns.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-3">❌ Summer Pet Don&apos;ts</h3>
            <ul className="space-y-2 text-xs text-[#BAC4D1] leading-relaxed">
              <li><strong className="text-white">Don&apos;t ignore all-season S-Tier pets:</strong> Golden Phoenix Chick (5.0x) still beats Magma Lizard (3.0x Summer) — use Summer pets only if you lack S-Tier.</li>
              <li><strong className="text-white">Don&apos;t invest in Magma Pepper:</strong> Falling trend — Phoenix Bloom dominates the Summer meta.</li>
              <li><strong className="text-white">Don&apos;t waste the Summer Event window:</strong> 3 months of +20% bonus is the longest seasonal window — plan your wealth sprint around it.</li>
              <li><strong className="text-white">Don&apos;t switch pets mid-event:</strong> Each pet levels independently. Pick one Summer pet and stick with it through August.</li>
              <li><strong className="text-white">Don&apos;t sell Summer items at event end:</strong> Demand drops post-event — hold Summer-exclusive items for off-season premium.</li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <h3 className="text-sm font-semibold text-white mb-3">🔄 All-Season Alternatives (When Summer Ends)</h3>
          <p className="text-xs text-[#BAC4D1] leading-relaxed mb-3">
            When the Summer Event ends, Summer pets lose their seasonal bonus. Switch to all-season S-Tier pets
            for sustained income. Below are the top all-season alternatives that work year-round:
          </p>
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="min-w-[640px] w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                  <th className="py-3 px-3 font-semibold">Pet</th>
                  <th className="py-3 px-3 font-semibold">Tier</th>
                  <th className="py-3 px-3 font-semibold">Multiplier</th>
                  <th className="py-3 px-3 font-semibold">Source</th>
                </tr>
              </thead>
              <tbody>
                {topAllSeasonPets.map((pet) => (
                  <tr key={pet.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                    <td className="py-3 px-3">
                      <Link
                        href={`/grow-a-garden/pets/${pet.id}`}
                        className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition text-xs"
                      >
                        {pet.name}
                      </Link>
                    </td>
                    <td className="py-3 px-3">
                      <span
                        className="code-text inline-block rounded px-2 py-0.5 text-xs font-semibold"
                        style={{ color: tierColors[pet.tier], backgroundColor: tierColors[pet.tier] + "1a" }}
                      >
                        {pet.tier}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-sm font-bold text-[#00E676]">{pet.multiplier.toFixed(1)}×</td>
                    <td className="py-3 px-3 text-xs text-[#BAC4D1]">{pet.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          👉 Combine Summer pets with our{" "}
          <Link href="/grow-a-garden/how-to-get-rich-fast" className="text-[#00E676] hover:underline">
            How to Get Rich Fast
          </Link>{" "}
          guide and the{" "}
          <Link href="/grow-a-garden/how-to-level-fast" className="text-[#00E676] hover:underline">
            How to Level Fast
          </Link>{" "}
          guide for the full Summer wealth stack.
        </p>
      </section>

      <RelatedContent
        category="guide"
        game="garden"
        currentPath="/grow-a-garden/best-summer-pets"
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
