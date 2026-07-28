import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { pets } from "@/data/garden/database/pets";
import { seeds } from "@/data/garden/database/seeds";
import { crops } from "@/data/garden/database/crops";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "How to Start Grow a Garden",
  description:
    "Complete starter walkthrough for Grow a Garden: first steps, beginner farming loop, first crops, first pets, mistakes to avoid, and a progression roadmap to scale your farm.",
  keywords: [
    "how to start Grow a Garden",
    "Grow a Garden beginner walkthrough",
    "Grow a Garden first steps",
    "Grow a Garden starter guide",
    "Grow a Garden first crop",
    "Grow a Garden first pet",
  ],
  alternates: { canonical: "/grow-a-garden/how-to-start" },
  openGraph: {
    title: "How to Start Grow a Garden",
    description:
      "Complete starter walkthrough: first steps, farming loop, first crops, first pets, and a progression roadmap.",
    type: "website",
  },
};

// Starter-friendly pets (C-Tier and B-Tier — early game accessible)
const firstPets = pets
  .filter((p) => p.tier === "C" || p.tier === "B")
  .sort((a, b) => b.multiplier - a.multiplier)
  .slice(0, 5);

// Cheap Common/Uncommon seeds for the very first plantings
const firstSeeds = seeds
  .filter((s) => s.rarity === "Common" || s.rarity === "Uncommon")
  .sort((a, b) => a.price - b.price)
  .slice(0, 5);

// Easiest first crops (low tier, fast growth, all-season)
const firstCrops = crops
  .filter((c) => c.season === "All" && (c.tier === "C" || c.tier === "B"))
  .sort((a, b) => a.growthSeconds - b.growthSeconds)
  .slice(0, 5);

const faqs = [
  {
    question: "How do I start playing Grow a Garden?",
    answer:
      "Open Roblox, search 'Grow a Garden', and click Join. You'll spawn on a starter plot with free Wheat Seeds. Open your inventory (default key: B), select the seeds, and click your plot to plant. Wait 2-3 minutes, click the mature crop to harvest, and you've earned your first coins. The whole onboarding loop takes under 5 minutes.",
  },
  {
    question: "What is the first crop I should plant in Grow a Garden?",
    answer:
      "Start with the free Wheat Seeds given at spawn. After 2-3 harvests (around 500-600 coins), upgrade to Carrot Seeds — they cost more upfront but yield 60% higher profit per harvest. Once you have four plots and a B-Tier mutation, transition to higher-tier crops like Berry or Lucky Carrot for sustained early-game profit.",
  },
  {
    question: "When should I hatch my first pet?",
    answer:
      "Hatch your first pet from a Basic Egg (500 coins) right after unlocking the Mutation Station — usually around the 30-45 minute mark. Even a Common C-Tier pet at 1.5x multiplier provides a permanent passive income boost that pays for itself in 5-6 harvest cycles. Pets stack multiplicatively with mutations, so getting one online early accelerates every other system in the game.",
  },
  {
    question: "What's the biggest mistake new Grow a Garden players make?",
    answer:
      "Spending coins on cosmetics before expanding plots. The Farm Shop sells decorative fences and themed plot skins — none generate income. Every coin spent on cosmetics before reaching 4 plots with B-Tier mutations is a coin that could have compounded through plot expansion. Decorate later; optimize first.",
  },
  {
    question: "How long does it take to get a profitable farm running?",
    answer:
      "With optimal play: 30 minutes to your first mutation and pet, 2 hours to 4 plots with B-Tier mutations, and 5-10 hours to reach the mid-game tier where S/A-Tier pets and mutations become realistic targets. The game is designed for steady progression — rushing via premium currency is unnecessary if you reinvest coins into plots and mutations.",
  },
  {
    question: "Should I follow the Beginner Guide or this How to Start page?",
    answer:
      "This page is a quick-start overview; the Beginner Guide goes deeper with step-by-step walkthroughs, resource management tips, and a full spending priority tier list. Read this page first to understand the game's flow, then follow the Beginner Guide for the detailed optimization path.",
  },
];

export default function HowToStartPage() {
  return (
    <ContentLayout
      title="How to Start Grow a Garden"
      description="Complete starter walkthrough: first steps, beginner farming loop, first crops, first pets, mistakes to avoid, and a progression roadmap to scale your farm."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "How to Start", href: "/grow-a-garden/how-to-start" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/how-to-start"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Game Overview */}
      <section aria-labelledby="overview-heading">
        <h2
          id="overview-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🌱 What is Grow a Garden?
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            Grow a Garden is a Roblox farming simulator where you plant crops, harvest them for
            coins, unlock powerful mutations to multiply your yield, hatch pets for permanent
            passive multipliers, and trade rare items with other players. The game rewards
            patience and reinvestment — every coin you earn should go back into expanding your
            farm, not into cosmetics. The core loop takes 2 minutes to learn but weeks to master,
            with depth in mutation stacking, seasonal synergies, and a fully player-driven trade
            economy.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#768294]">
            For a deeper dive into systems and strategy, follow our{" "}
            <Link
              href="/grow-a-garden/beginner-guide"
              className="text-[#00E676] hover:underline"
            >
              Beginner Guide
            </Link>{" "}
            after reading this overview.
          </p>
        </div>
      </section>

      {/* First Steps */}
      <section aria-labelledby="first-steps-heading">
        <h2
          id="first-steps-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🚀 Your First 5 Minutes
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <ol className="space-y-3">
            <li className="flex gap-3">
              <span className="text-[#00E676] font-bold text-lg shrink-0">1.</span>
              <div>
                <h3 className="text-sm font-semibold text-white">Join the Game</h3>
                <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                  Search &quot;Grow a Garden&quot; on Roblox and join the official server. You&apos;ll
                  spawn on a single starter plot with free Wheat Seeds in your inventory.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#00E676] font-bold text-lg shrink-0">2.</span>
              <div>
                <h3 className="text-sm font-semibold text-white">Plant Your First Crop</h3>
                <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                  Open your inventory with <code className="text-[#00E676]">B</code>, select Wheat
                  Seeds, and click your plot. Wheat matures in 2-3 minutes — watch the progress bar.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#00E676] font-bold text-lg shrink-0">3.</span>
              <div>
                <h3 className="text-sm font-semibold text-white">Harvest for Coins</h3>
                <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                  Click the mature crop to harvest. Your first Wheat sells for ~50 coins. Repeat
                  2-3 times to hit 500 coins.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#00E676] font-bold text-lg shrink-0">4.</span>
              <div>
                <h3 className="text-sm font-semibold text-white">Buy a Second Plot</h3>
                <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                  Visit the Farm Shop and buy Plot #2 for 400 coins. Two plots double your passive
                  income — plot expansion is the highest-ROI investment in the entire game.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#00E676] font-bold text-lg shrink-0">5.</span>
              <div>
                <h3 className="text-sm font-semibold text-white">Upgrade Your Seeds</h3>
                <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                  Replace Wheat with Carrot Seeds (100 coins/seed, sells for 80 coins). The upgrade
                  pays for itself in 2 harvest cycles per plot. Browse the full{" "}
                  <Link
                    href="/grow-a-garden/seeds"
                    className="text-[#00E676] hover:underline"
                  >
                    Seeds Database
                  </Link>{" "}
                  for all options.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Beginner Farming Loop */}
      <section aria-labelledby="loop-heading">
        <h2
          id="loop-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🔄 Beginner Farming Loop
        </h2>
        <div className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1] mb-4">
            Master this 6-step loop before chasing advanced strategies. It reliably generates
            1,000-2,000 coins per cycle in the early game and forms the foundation of every
            endgame farm.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { step: "Plant", desc: "Select highest-tier seeds you can afford. Plant all available plots." },
              { step: "Wait", desc: "Crops grow on a timer. Use this window to hatch pets or check the trade hub." },
              { step: "Harvest", desc: "Click mature crops to collect. Yield = base × mutation × pet multiplier." },
              { step: "Sell", desc: "Crops auto-sell for coins on harvest. Coins appear in your top bar." },
              { step: "Reinvest", desc: "Spend coins on the next priority: plots > mutations > pets > seeds." },
              { step: "Repeat", desc: "Stack multipliers each cycle. Compounding is the key to scaling." },
            ].map((s, i) => (
              <div key={i} className="rounded-lg border border-[#252936] bg-[#1E212B] p-3">
                <div className="text-xs font-semibold text-[#00E676] uppercase tracking-wider">
                  Step {i + 1}
                </div>
                <div className="text-sm font-semibold text-white mt-1">{s.step}</div>
                <div className="text-xs text-[#768294] mt-1 leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First Crops Recommendation */}
      <section aria-labelledby="first-crops-heading">
        <h2
          id="first-crops-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🌾 First Crops Recommendation
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          Beginner-friendly crops ranked by ease of access and growth speed. All-season crops are
          preferred because they never lock you out of income. Once you have 4 plots, transition to
          higher-tier crops from the{" "}
          <Link href="/grow-a-garden/crops" className="text-[#00E676] hover:underline">
            Crops Database
          </Link>
          .
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[640px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">Crop</th>
                <th className="py-3 px-3 font-semibold">Tier</th>
                <th className="py-3 px-3 font-semibold">Coins</th>
                <th className="py-3 px-3 font-semibold">Growth</th>
                <th className="py-3 px-3 font-semibold">CPM</th>
              </tr>
            </thead>
            <tbody>
              {firstCrops.map((c) => (
                <tr key={c.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3">
                    <Link
                      href={`/grow-a-garden/crops/${c.id}`}
                      className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {c.name}
                    </Link>
                  </td>
                  <td className="py-3 px-3 text-xs text-[#768294]">{c.tier}</td>
                  <td className="py-3 px-3 text-sm text-[#BAC4D1]">{c.coins.toLocaleString()}</td>
                  <td className="py-3 px-3 text-xs text-[#768294]">{c.growthTime}</td>
                  <td className="py-3 px-3 text-sm font-bold text-[#00E676]">{c.coinsPerMinute}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* First Pets Recommendation */}
      <section aria-labelledby="first-pets-heading">
        <h2
          id="first-pets-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🐾 First Pets Recommendation
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          These C-Tier and B-Tier pets are accessible from Basic and Rare Eggs early game. Even
          the lowest-tier pet provides a permanent multiplier that stacks with every harvest. Visit
          the{" "}
          <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">
            Pets Database
          </Link>{" "}
          for the full ranking.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {firstPets.map((p) => (
            <div
              key={p.id}
              className="rounded-xl border border-[#252936] bg-[#14161D] p-4 hover:border-[#00E676] transition"
            >
              <Link
                href={`/grow-a-garden/pets/${p.id}`}
                className="text-sm font-semibold text-white hover:text-[#00E676] transition block"
              >
                {p.name}
              </Link>
              <div className="text-xs text-[#768294] mt-1">{p.source}</div>
              <div className="text-lg font-bold text-[#00E676] mt-2">{p.multiplier}× multiplier</div>
              <p className="text-xs text-[#768294] mt-2 leading-relaxed line-clamp-2">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Early Mistakes to Avoid */}
      <section aria-labelledby="mistakes-heading">
        <h2
          id="mistakes-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⚠️ Early Mistakes to Avoid
        </h2>
        <div className="space-y-3">
          {[
            {
              title: "Buying Cosmetics Before Plots",
              desc: "Decorative fences and themed plot skins generate zero income. Every coin spent on cosmetics before reaching 4 plots with B-Tier mutations is wasted compounding potential.",
            },
            {
              title: "Spending Mutation Shards One at a Time",
              desc: "Single-roll S-Tier rate is ~1.2%. Save 50+ shards and bulk-roll during boosted events for 5-10x better odds. Yolo rolling starter shards is the #1 reason new players get stuck with C-Tier mutations.",
            },
            {
              title: "Planting Crops Right Before Logging Off",
              desc: "Crops don't generate passive income while unharvested. Always harvest all mature crops before logging off — your farm earns nothing while you're away.",
            },
            {
              title: "Skipping the Pet System",
              desc: "A 500-coin Basic Egg pays for itself in 5-6 harvest cycles and generates permanent income forever. Pets are not an endgame luxury — they're a core early-game multiplier.",
            },
            {
              title: "Buying Legendary Eggs Too Early",
              desc: "Legendary Eggs cost 10,000 coins for a ~5% S-Tier pet rate. That same 10,000 coins could expand your farm from 4 to 6 plots — a guaranteed 50% income increase. Buy Legendary Eggs only in the endgame.",
            },
          ].map((m, i) => (
            <div key={i} className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
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

      {/* Progression Roadmap */}
      <section aria-labelledby="roadmap-heading">
        <h2
          id="roadmap-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🗺️ Progression Roadmap
        </h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1fr_1.2fr_1.5fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="text-xs font-semibold text-[#768294]">STAGE</span>
            <span className="text-xs font-semibold text-[#768294]">INVESTMENT</span>
            <span className="text-xs font-semibold text-[#768294]">GOAL</span>
          </div>
          {[
            { stage: "0-15 min", inv: "Starter plot + free seeds", goal: "Earn first 1,000 coins, unlock second plot" },
            { stage: "15-45 min", inv: "1,500 coins + starter shards", goal: "Unlock Mutation Station, roll first mutation, hatch first pet" },
            { stage: "45 min - 2 hrs", inv: "5,000 coins + 50 shards", goal: "Expand to 4 plots, target B-Tier mutation on main plot" },
            { stage: "2-10 hrs", inv: "15,000+ coins + 200 shards", goal: "B-Tier mutations on all plots, mid-tier pet team, seed upgrades" },
            { stage: "10+ hrs", inv: "50,000+ coins", goal: "S/A-Tier mutations, Legendary Egg pets, trade hub flipping" },
          ].map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_1.2fr_1.5fr] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
            >
              <span className="text-sm font-semibold text-[#BAC4D1]">{row.stage}</span>
              <span className="text-xs text-[#768294]">{row.inv}</span>
              <span className="text-xs text-[#BAC4D1]">{row.goal}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          For the full detailed walkthrough with step-by-step instructions, see our{" "}
          <Link href="/grow-a-garden/beginner-guide" className="text-[#00E676] hover:underline">
            Beginner Guide
          </Link>
          .
        </p>
      </section>

      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/how-to-start" />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
