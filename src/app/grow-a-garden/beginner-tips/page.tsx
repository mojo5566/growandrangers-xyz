import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { mutations, getMutationsByTier } from "@/data/garden/database/mutations";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Grow a Garden Beginner Tips",
  description:
    "10 actionable Grow a Garden beginner tips covering farming efficiency, resource management, pet usage, and mutation basics — ranked by impact for new players.",
  keywords: [
    "Grow a Garden beginner tips",
    "Grow a Garden tips and tricks",
    "Grow a Garden farming efficiency",
    "Grow a Garden resource management",
    "Grow a Garden pet tips",
    "Grow a Garden mutation basics",
  ],
  alternates: { canonical: "/grow-a-garden/beginner-tips" },
  openGraph: {
    title: "Grow a Garden Beginner Tips",
    description:
      "10 actionable tips covering farming efficiency, resource management, pet usage, and mutation basics.",
    type: "website",
  },
};

// C-Tier and B-Tier mutations for "mutation basics" section
const starterMutations = [...getMutationsByTier("C"), ...getMutationsByTier("B")].slice(0, 6);
const topMutations = [...mutations].sort((a, b) => b.multiplier - a.multiplier).slice(0, 3);

const tips = [
  {
    n: 1,
    title: "Expand Plots Before Anything Else",
    category: "Resource Management",
    body: "Your first 2,000 coins should always go to plot expansion. Going from 1 plot to 4 plots quadruples your earning potential — no mutation, pet, or consumable comes close. Plot #2 costs 400 coins, Plot #3 costs 800, Plot #4 costs 1,200. Get all four before spending a single coin on cosmetics or premium eggs. Every plot is a permanent income generator that compounds with every multiplier you add later.",
  },
  {
    n: 2,
    title: "Always Harvest Before Logging Off",
    category: "Farming Efficiency",
    body: "Crops pause growth the moment you log off, but mature crops sitting unharvested earn zero passive income. Before closing the game, walk through every plot and click each mature crop. This single habit can add 500-2,000 coins per session depending on your farm size. Make it as automatic as saving your game.",
  },
  {
    n: 3,
    title: "Save Mutation Shards for Bulk Rolling",
    category: "Resource Management",
    body: "Single-roll S-Tier rate is ~1.2%. Save 50+ shards and bulk-roll during boosted events for 5-10x better odds. New players burn starter shards one at a time and end up with five C-Tier mutations they immediately want to reroll. Patience here pays off — a single bulk-roll session can land an S-Tier that doubles your farm income.",
  },
  {
    n: 4,
    title: "Hatch a Basic Egg on Day One",
    category: "Pet Usage",
    body: "A 500-coin Basic Egg pays for itself in 5-6 harvest cycles and provides a permanent multiplier forever. Even the worst pet (1.5x C-Tier) on a 1,000-coin-per-cycle farm generates an extra 500 coins per cycle. Pets stack multiplicatively with mutations, so getting one online early accelerates every other system in the game. Don't wait — the math overwhelmingly favors early hatching.",
  },
  {
    n: 5,
    title: "Upgrade Seeds in Tier Order",
    category: "Farming Efficiency",
    body: "Replace Wheat with Carrot Seeds after 2-3 harvests (net +60 coins per harvest). Upgrade to Berry Seeds once you have 4 plots (sells for 120 coins vs Carrot's 80). Always calculate: if the seed cost is less than 5x the per-harvest profit increase, it's worth it. The full seed tier list is in our Seeds Database.",
  },
  {
    n: 6,
    title: "Apply Mutations to Your Main Plot First",
    category: "Mutation Basics",
    body: "When you roll a mutation, apply it to your highest-CPM plot — the one growing Golden Wheat or your best all-season crop. Mutations stack with pet multipliers, so the highest base yield benefits most. Secondary plots can hold C-Tier placeholders while you save shards for B-Tier or better on the main plot.",
  },
  {
    n: 7,
    title: "Use Seasonal Crops During Their Active Season",
    category: "Farming Efficiency",
    body: "Seasonal crops get a +20% bonus during their active season. A Winter Frost Melon at 58 CPM jumps to 70 CPM during Winter — outperforming some A-Tier all-season crops. Rotate your plots: all-season crops as your base, plus one or two seasonal slots for whatever's currently in season. Check the Crops Database for each crop's season.",
  },
  {
    n: 8,
    title: "Check Promo Codes Daily",
    category: "Resource Management",
    body: "Promo codes drop 10-20 free Mutation Shards, occasional Basic Eggs, and sometimes premium consumables. Codes typically release with major updates, seasonal events, and milestone celebrations. We verify and update our codes list daily — bookmark the Codes page and check it before every play session.",
  },
  {
    n: 9,
    title: "Time Your Double Harvest Boosts",
    category: "Pet Usage",
    body: "Double Harvest Boosts double your next harvest yield. Never waste one on a C-Tier crop or without an active mutation. The optimal use: wait for a 4.0x Aurelian Crown plot to grow a 480-coin Golden Wheat, then activate the boost for 3,840 coins in a single click. Stack with a pet multiplier for even more.",
  },
  {
    n: 10,
    title: "Treat Trading Records as Reference Only",
    category: "Database Notes",
    body: "The Trading Database contains internal project-recorded value, demand, and trend fields for reference only. They are not official game outcomes, transaction amounts, or live market quotes. Verify current in-game information independently.",
  },
];

const faqs = [
  {
    question: "What is the most important beginner tip in Grow a Garden?",
    answer:
      "Expand plots before anything else. Going from 1 to 4 plots quadruples your earning potential and is the highest-value permanent upgrade for early-game coins. Plot #2 costs 400 coins, Plot #3 costs 800, and Plot #4 costs 1,200 — together less than one Legendary Egg. Cosmetic items, premium eggs, and even mutation shards should all wait until you have 4 plots running with B-Tier mutations.",
  },
  {
    question: "How can I improve my farming efficiency in Grow a Garden?",
    answer:
      "Three habits: (1) Always harvest before logging off — unharvested crops earn zero passive income. (2) Upgrade seeds in tier order — Wheat to Carrot to Berry. (3) Use seasonal crops during their active season for the +20% bonus. These three habits alone can double your coins-per-hour within the first week of play.",
  },
  {
    question: "When should I start using mutations?",
    answer:
      "Apply your first mutation (even a C-Tier) the moment you unlock the Mutation Station — usually around the 30-minute mark. Even a 1.2x Verdant Runner is a 20% income boost on that plot. For serious rolling, save 50+ shards and bulk-roll during boosted events. See our Mutations Database for the full tier list.",
  },
  {
    question: "What is the best beginner pet to hatch first?",
    answer:
      "Hatch a Basic Egg (500 coins) right after unlocking the Mutation Station. Even the worst C-Tier pet at 1.5x multiplier provides a permanent income boost that pays for itself in 5-6 harvest cycles. Don't buy Rare or Legendary Eggs early game — bulk-hatch Basic Eggs until you have 2-3 pets online.",
  },
  {
    question: "How do I know which mutations are worth keeping?",
    answer:
      "B-Tier mutations (1.7x-2.2x) are the sweet spot of affordability and power — Pyroclast Husk and Hoarfrost Corolla are reliable targets with a ~10-12% roll rate. S-Tier (3.5x-6.0x) are extremely rare and should always be kept. C-Tier (1.0x-1.4x) are placeholders — replace when you roll a B-Tier or better. Never overwrite a B-Tier+ mutation without saving shards for a guaranteed improvement.",
  },
  {
    question: "Where can I find more Grow a Garden tips and guides?",
    answer:
      "Start with our Beginner Guide for the full walkthrough, then explore the Money Making Guide for advanced coin strategies and the Pet Guide for the pet system deep dive. For specialized topics, browse the Crops Database for per-crop profit data, the Mutations Database for the full tier list, and the Codes page for free daily shards and eggs. All guides are linked from the Grow a Garden hub page.",
  },
];

export default function BeginnerTipsPage() {
  return (
    <ContentLayout
      title="Grow a Garden Beginner Tips"
      description="10 actionable Grow a Garden beginner tips covering farming efficiency, resource management, pet usage, and mutation basics — ranked by impact for new players."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Beginner Tips", href: "/grow-a-garden/beginner-tips" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/beginner-tips"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Beginner Guide"
      keywords={[
        "Grow a Garden beginner tips",
        "Grow a Garden tips and tricks",
        "Grow a Garden farming efficiency",
        "Grow a Garden resource management",
        "Grow a Garden pet tips",
      ]}
      about={[{ name: "Grow a Garden" }, { name: "Roblox game guides" }]}
    >
      {/* Quick Answer - AI search summary */}
      <section aria-labelledby="quick-answer-heading" className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <h2 id="quick-answer-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          Quick Answer
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          Expand to 4 plots before anything else — going from 1 to 4 plots (400 → 800 → 1,200 coins)
          quadruples your earning potential and is the highest-value permanent upgrade for early-game
          coins. Always
          harvest before logging off, since unharvested crops earn zero passive income. Hatch a
          500-coin Basic Egg on day one (pays back in 5-6 cycles), save 50+ Mutation Shards for
          bulk-rolling, and never buy Legendary Eggs until endgame.
        </p>
      </section>

      {/* Intro */}
      <section className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          Ten high-impact tips for new Grow a Garden players, organized by category: resource
          management, farming efficiency, pet usage, and mutation basics. Apply these in your first
          week to skip the trial-and-error phase and scale your farm fast. For the full step-by-step
          walkthrough, see our{" "}
          <Link href="/grow-a-garden/beginner-guide" className="text-[#00E676] hover:underline">
            Beginner Guide
          </Link>
          .
        </p>
      </section>

      {/* Tips List */}
      <section aria-labelledby="tips-heading">
        <h2
          id="tips-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          💡 Top 10 Beginner Tips
        </h2>
        <div className="space-y-3">
          {tips.map((tip) => (
            <div
              key={tip.n}
              className="rounded-xl border border-[#252936] bg-[#14161D] p-4 hover:border-[#00E676] transition"
            >
              <div className="flex items-start gap-3 mb-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00E676]/20 text-sm font-bold text-[#00E676]">
                  {tip.n}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-sm font-semibold text-white">{tip.title}</h3>
                    <span className="rounded bg-[#1E212B] px-1.5 py-0.5 text-[10px] font-semibold text-[#768294] uppercase tracking-wider">
                      {tip.category}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#BAC4D1] leading-relaxed pl-11">{tip.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mutation Basics */}
      <section aria-labelledby="mutation-basics-heading">
        <h2
          id="mutation-basics-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ✨ Mutation Basics — Quick Reference
        </h2>
        <p className="text-sm text-[#768294] mb-4 leading-relaxed">
          Mutations are permanent multipliers applied to a plot. Each crop harvest is multiplied by
          the plot&apos;s mutation multiplier, then by your pet&apos;s multiplier. Here are the most
          common early-game mutations and the top-tier targets to save shards for.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[#3A86FF]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#3A86FF] mb-3">
              Early-Game Mutations (B/C Tier)
            </h3>
            <ul className="space-y-1.5">
              {starterMutations.map((m) => (
                <li key={m.id} className="flex items-center justify-between text-xs">
                  <Link
                    href={`/grow-a-garden/mutations/${m.id}`}
                    className="text-[#BAC4D1] hover:text-[#00E676] transition"
                  >
                    {m.name}
                  </Link>
                  <span className="text-[#00E676] font-bold">{m.multiplier}×</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-3">
              Top Target Mutations (S Tier)
            </h3>
            <ul className="space-y-1.5">
              {topMutations.map((m) => (
                <li key={m.id} className="flex items-center justify-between text-xs">
                  <Link
                    href={`/grow-a-garden/mutations/${m.id}`}
                    className="text-[#BAC4D1] hover:text-[#00E676] transition"
                  >
                    {m.name}
                  </Link>
                  <span className="text-[#FF8C00] font-bold">{m.multiplier}×</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-3 text-xs text-[#768294]">
          Browse all {mutations.length} mutations in the{" "}
          <Link href="/grow-a-garden/mutations" className="text-[#00E676] hover:underline">
            Mutations Database
          </Link>
          .
        </p>
      </section>

      {/* Resource Management Summary */}
      <section aria-labelledby="resources-heading">
        <h2
          id="resources-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📦 Resource Management Summary
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <div className="text-2xl mb-1">🪙</div>
            <h3 className="text-sm font-semibold text-white mb-1">Coins</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Always reinvest. Priority order: plots → mutations → pets → seeds → cosmetics (last).
              Never sit on idle coins.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <div className="text-2xl mb-1">🔮</div>
            <h3 className="text-sm font-semibold text-white mb-1">Mutation Shards</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Save 50+ before bulk-rolling. Never single-roll. Wait for boosted events to maximize
              S-Tier odds (~11% bulk vs ~1.2% single).
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <div className="text-2xl mb-1">⚡</div>
            <h3 className="text-sm font-semibold text-white mb-1">Boosts</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Stack Double Harvest Boosts with high-tier mutations + pet multipliers. Never waste on
              a C-Tier plot or without an active mutation.
            </p>
          </div>
        </div>
      </section>

      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/beginner-tips" />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
