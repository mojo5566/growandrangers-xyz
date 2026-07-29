import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import Link from "next/link";
import data from "@/data/garden/beginner-guide";
import { pets } from "@/data/garden/database/pets";
import { seeds } from "@/data/garden/database/seeds";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Grow a Garden Beginner Guide — Start Your Farm",
  description:
    "Beginner walkthrough for Grow a Garden on Roblox. Learn early game progression, first pets, first seeds, farming loop, and mistakes to avoid.",
  keywords: [
    "Grow a Garden beginner guide",
    "how to start Grow a Garden",
    "Grow a Garden tutorial",
    "Grow a Garden farming guide",
    "Grow a Garden progression",
    "Grow a Garden first pet",
    "Grow a Garden first seed",
  ],
  alternates: { canonical: "/grow-a-garden/beginner-guide" },
  openGraph: {
    title: "Grow a Garden Beginner Guide — Start Your Farm",
    description:
      "Beginner walkthrough — early game progression, first pets, first seeds, farming loop, and mistakes to avoid.",
    type: "website",
  },
};

const tierBadge: Record<string, string> = {
  "S": "bg-[#FF3D00]/20 text-[#FF3D00]",
  "A": "bg-[#FF8C00]/20 text-[#FF8C00]",
  "B": "bg-[#FFD700]/20 text-[#FFD700]",
  "C": "bg-[#3A86FF]/20 text-[#3A86FF]",
};

// First pets recommendation — C-Tier and B-Tier pets (early-game accessible)
const firstPets = pets
  .filter((p) => p.tier === "C" || p.tier === "B")
  .sort((a, b) => {
    // Sort by tier (C first as most accessible, then B), then by multiplier
    const tierOrder = { C: 0, B: 1 } as const;
    if (tierOrder[a.tier as "C" | "B"] !== tierOrder[b.tier as "C" | "B"]) {
      return tierOrder[a.tier as "C" | "B"] - tierOrder[b.tier as "C" | "B"];
    }
    return b.multiplier - a.multiplier;
  });

// First seeds recommendation — Common and Uncommon rarity (cheapest entry)
const firstSeeds = seeds
  .filter((s) => s.rarity === "Common" || s.rarity === "Uncommon")
  .sort((a, b) => a.price - b.price);

export default function BeginnerGuidePage() {
  return (
    <ContentLayout
      title="Grow a Garden Beginner Guide"
      description="Beginner walkthrough for Grow a Garden on Roblox — early game progression, first pets, first seeds, farming loop, and mistakes to avoid. Sourced from canonical pets and seeds databases."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Beginner Guide", href: "/grow-a-garden/beginner-guide" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/beginner-guide"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Beginner Guide"
      keywords={[
        "Grow a Garden beginner guide",
        "how to start Grow a Garden",
        "Grow a Garden tutorial",
        "Grow a Garden farming guide",
        "Grow a Garden progression",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - AI search summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          Grow a Garden is a Roblox farming simulator where you plant crops, harvest them for coins,
          and stack multipliers through mutations and pets. You can earn your first 1,000 coins in
          under 15 minutes with Wheat and Carrot Seeds, unlock the Mutation Station at 1,500 coins,
          and hatch a 500-coin Basic Egg for a permanent passive multiplier. The core rule: reinvest
          every coin into plot expansion (up to 4 plots) before cosmetics or premium eggs.
        </p>
      </section>

      {/* Last Updated */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-4" aria-label="Last updated">
        <div className="flex items-center gap-2">
          <span className="text-sm">🕒</span>
          <p className="text-sm text-[#BAC4D1]">
            <strong className="text-white">Last Updated:</strong> {CONTENT_UPDATED_AT}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section aria-labelledby="overview-heading">
        <h2 id="overview-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">🌱 Game Overview</h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm text-[#BAC4D1] leading-relaxed">{data.overview.description}</p>
          <ul className="mt-4 space-y-2">
            {data.overview.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#BAC4D1]">
                <span className="text-[#00E676] shrink-0 mt-0.5">✔</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Early Game Progression */}
      <section aria-labelledby="stages-heading">
        <h2 id="stages-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">📈 Early Game Progression</h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1.2fr_1.2fr_1.5fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="text-xs font-semibold text-[#768294]">STAGE</span>
            <span className="text-xs font-semibold text-[#768294]">REQUIREMENTS</span>
            <span className="text-xs font-semibold text-[#768294]">MILESTONE</span>
          </div>
          {data.stages.map((s, i) => (
            <div key={i} className="grid grid-cols-[1.2fr_1.2fr_1.5fr] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition">
              <span className="text-sm font-semibold text-[#BAC4D1]">{s.from}</span>
              <span className="text-xs text-[#768294]">{s.mats}</span>
              <span className="text-xs text-[#BAC4D1]">{s.stats}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-[#768294]">{data.totalCost}</p>
      </section>

      {/* Step-by-Step Guide */}
      <section aria-labelledby="steps-heading">
        <h2 id="steps-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">📋 Step-by-Step Walkthrough</h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <ol className="space-y-3">
            {data.bestUnitsSteps.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-[#00E676] font-bold text-lg shrink-0">{s.step}.</span>
                <div>
                  <h4 className="text-sm font-semibold text-white">{s.title}</h4>
                  <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* First Pets Recommendation — NEW SECTION */}
      <section aria-labelledby="first-pets-heading">
        <h2 id="first-pets-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">🐾 First Pets Recommendation</h2>
        <p className="text-xs text-[#768294] mb-4">
          Start with affordable pets from Basic Eggs (500 Coins) and Rare Eggs (2,000 Coins). These C-Tier and
          B-Tier pets provide solid multipliers while you save for higher tiers. All data is sourced from our
          canonical{" "}
          <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">
            Pets Database
          </Link>
          .
        </p>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1.5fr_60px_1fr_2fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="text-xs font-semibold text-[#768294]">PET</span>
            <span className="text-xs font-semibold text-[#768294]">TIER</span>
            <span className="text-xs font-semibold text-[#768294]">MULTIPLIER</span>
            <span className="text-xs font-semibold text-[#768294]">WHY START HERE</span>
          </div>
          {firstPets.map((pet) => (
            <div
              key={pet.id}
              className="grid grid-cols-[1.5fr_60px_1fr_2fr] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
            >
              <Link
                href={`/grow-a-garden/pets/${pet.id}`}
                className="text-sm font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
              >
                {pet.name}
              </Link>
              <span className={`rounded px-1.5 py-0.5 text-xs text-center font-semibold ${tierBadge[pet.tier]}`}>
                {pet.tier}
              </span>
              <span className="text-sm font-bold text-[#00E676]">{pet.multiplier.toFixed(1)}x</span>
              <span className="text-xs text-[#768294]">{pet.abilities[0]}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          💡 <strong className="text-[#BAC4D1]">Tip:</strong> Equip Bamboo Panda Cub (1.5x) from a Basic Egg as
          your first pet. Its stacking growth-speed bonus scales well even into mid-game. Once you have 4 plots
          running, switch to a Rare Egg pet like Frost Wolf Pup (2.2x → 3.3x Winter) for seasonal specialization.
        </p>
      </section>

      {/* First Seeds Recommendation — NEW SECTION */}
      <section aria-labelledby="first-seeds-heading">
        <h2 id="first-seeds-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">🌱 First Seeds Recommendation</h2>
        <p className="text-xs text-[#768294] mb-4">
          Common and Uncommon seeds are the cheapest entry point. All of these are Sheckle-purchased (no Robux)
          and grow into crops that pay back the seed cost within 1-3 harvest cycles. Data sourced from our
          canonical{" "}
          <Link href="/grow-a-garden/seeds" className="text-[#00E676] hover:underline">
            Seeds Database
          </Link>
          .
        </p>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="text-xs font-semibold text-[#768294]">SEED</span>
            <span className="text-xs font-semibold text-[#768294]">RARITY</span>
            <span className="text-xs font-semibold text-[#768294]">PRICE</span>
            <span className="text-xs font-semibold text-[#768294]">GROWTH</span>
            <span className="text-xs font-semibold text-[#768294]">SEASON</span>
          </div>
          {firstSeeds.map((seed) => (
            <div
              key={seed.id}
              className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
            >
              <Link
                href={`/grow-a-garden/seeds/${seed.id}`}
                className="text-sm font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
              >
                {seed.name}
              </Link>
              <span className="text-xs text-[#BAC4D1]">{seed.rarity}</span>
              <span className="text-xs text-[#BAC4D1]">{seed.price} 🪙</span>
              <span className="text-xs text-[#BAC4D1]">{seed.growthTime}</span>
              <span className="text-xs text-[#BAC4D1]">{seed.season}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          💡 <strong className="text-[#BAC4D1]">Tip:</strong> Start with Wild Grass Seeds (free with tutorial)
          and switch to Basic Potato Seeds (100 Coins) as soon as you can afford them. The 30-second cycle is
          excellent for learning the farming loop. Once you have 4 plots, upgrade to Bean or Sunflower seeds for
          a comfortable all-season rotation.
        </p>
      </section>

      {/* Farming Loop — NEW SECTION */}
      <section aria-labelledby="farming-loop-heading">
        <h2 id="farming-loop-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">🔄 The Farming Loop</h2>
        <p className="text-xs text-[#768294] mb-4">
          The core Grow a Garden gameplay loop. Master this cycle and your farm will scale itself.
        </p>
        <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="code-text rounded bg-[#00E676]/20 px-2 py-0.5 text-xs font-semibold text-[#00E676] shrink-0">1</span>
              <div>
                <h4 className="text-sm font-semibold text-white">Plant Seeds</h4>
                <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                  Open your seed inventory (B key), select a seed, click on an empty plot. Each plot grows one
                  crop at a time. Prioritize all-season seeds (Wild Grass, Basic Potato, Bean) for early-game
                  stability.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="code-text rounded bg-[#00E676]/20 px-2 py-0.5 text-xs font-semibold text-[#00E676] shrink-0">2</span>
              <div>
                <h4 className="text-sm font-semibold text-white">Wait for Growth</h4>
                <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                  Crops take 15 seconds to 10 minutes to mature depending on the seed tier. Use this window to
                  redeem codes, check daily quests, or hatch pets. Crops do not die from neglect — they just sit
                  there until harvested.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="code-text rounded bg-[#00E676]/20 px-2 py-0.5 text-xs font-semibold text-[#00E676] shrink-0">3</span>
              <div>
                <h4 className="text-sm font-semibold text-white">Harvest for Coins</h4>
                <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                  Click mature crops (golden glow) to harvest. Coins are credited instantly, multiplied by your
                  active pet and any mutation on the plot. Always harvest before logging off — unharvested crops
                  earn nothing.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="code-text rounded bg-[#00E676]/20 px-2 py-0.5 text-xs font-semibold text-[#00E676] shrink-0">4</span>
              <div>
                <h4 className="text-sm font-semibold text-white">Reinvest Coins</h4>
                <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                  Buy more plots (400 → 800 → 1,200 Coins), upgrade to higher-tier seeds, or save for a Rare Egg.
                  Never sit on idle coins — every Coin reinvested compounds your income. See the Spending
                  Priority Tier List below for the optimal order.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="code-text rounded bg-[#00E676]/20 px-2 py-0.5 text-xs font-semibold text-[#00E676] shrink-0">5</span>
              <div>
                <h4 className="text-sm font-semibold text-white">Roll Mutations (when shards available)</h4>
                <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                  Save 50+ Mutation Shards, then bulk-roll at the Mutation Station during a boosted event. Apply
                  S-Tier and A-Tier mutations to your highest-CPM plot. Mutations stack multiplicatively with
                  pet multipliers — this is where your income explodes.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="code-text rounded bg-[#00E676]/20 px-2 py-0.5 text-xs font-semibold text-[#00E676] shrink-0">6</span>
              <div>
                <h4 className="text-sm font-semibold text-white">Hatch Better Pets (when affordable)</h4>
                <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                  Once 4 plots are running with B-Tier mutations, start buying Rare Eggs (2,000 Coins) for
                  A-Tier pets. Only buy Legendary Eggs (10,000 Coins) in endgame when Coins are abundant. See
                  the{" "}
                  <Link href="/grow-a-garden/pet-guide" className="text-[#00E676] hover:underline">
                    Pet Guide
                  </Link>{" "}
                  for the full pet system.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Key Resources */}
      <section aria-labelledby="resources-heading">
        <h2 id="resources-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">💰 Key Resources & Currencies</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {data.materials.map((m, i) => (
            <div key={i} className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{m.icon}</span>
                <h3 className="text-sm font-semibold text-white">{m.name}</h3>
              </div>
              <p className="text-xs text-[#BAC4D1] leading-relaxed mb-3">{m.desc}</p>
              <div className="mb-3">
                <span className="text-xs font-semibold text-[#768294]">Sources:</span>
                <ul className="mt-1 space-y-0.5">
                  {m.sources.map((src, j) => (
                    <li key={j} className="text-xs text-[#768294] flex gap-1.5">
                      <span className="text-[#00E676] shrink-0">+</span> {src}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
                <p className="text-xs text-[#00E676] leading-relaxed">💡 {m.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spending Priority Tier List */}
      <section aria-labelledby="priority-heading">
        <h2 id="priority-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">⭐ Spending Priority Tier List</h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[60px_1fr_2fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="text-xs font-semibold text-[#768294]">PRIORITY</span>
            <span className="text-xs font-semibold text-[#768294]">INVESTMENT</span>
            <span className="text-xs font-semibold text-[#768294]">REASON</span>
          </div>
          {data.priorityList.map((p, i) => (
            <div key={i} className="grid grid-cols-[60px_1fr_2fr] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition">
              <span className={`rounded px-1.5 py-0.5 text-xs text-center font-semibold ${tierBadge[p.tier] || "bg-[#3A86FF]/20 text-[#3A86FF]"}`}>{p.tier}</span>
              <span className="text-sm font-semibold text-[#BAC4D1]">{p.unit}</span>
              <span className="text-xs text-[#768294]">{p.reason}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mistakes to Avoid */}
      <section aria-labelledby="mistakes-heading">
        <h2 id="mistakes-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">⚠️ Mistakes to Avoid</h2>
        <div className="space-y-3">
          {data.mistakes.map((m, i) => (
            <div key={i} className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
              <div className="flex items-start gap-3">
                <span className="text-[#FF3D00] text-lg shrink-0 font-bold">!</span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{m.title}</h3>
                  <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <RelatedContent
        category="guide"
        game="garden"
        currentPath="/grow-a-garden/beginner-guide"
      />

      {/* FAQ */}
      <ContentFAQ faqs={data.faq} />
    </ContentLayout>
  );
}
