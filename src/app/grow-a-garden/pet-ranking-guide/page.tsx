import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { pets } from "@/data/garden/database/pets";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Grow a Garden Pet Ranking Guide",
  description:
    "Complete Grow a Garden pet ranking guide: S/A/B/C tier explanation, why pets rank differently, and early vs late game pet picks. Sourced from canonical pet database.",
  keywords: [
    "Grow a Garden pet ranking",
    "Grow a Garden pet tier list",
    "Grow a Garden S A B C tier",
    "Grow a Garden pet tiers explained",
    "Grow a Garden best pets",
    "Grow a Garden early vs late game pets",
  ],
  alternates: { canonical: "/grow-a-garden/pet-ranking-guide" },
  openGraph: {
    title: "Grow a Garden Pet Ranking Guide",
    description:
      "S/A/B/C tier explanation, why pets rank differently, and early vs late game pet picks.",
    type: "website",
  },
};

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

// Group all pets by tier
const petsByTier = (["S", "A", "B", "C"] as const).map((tier) => ({
  tier,
  pets: pets
    .filter((p) => p.tier === tier)
    .sort((a, b) => b.multiplier - a.multiplier),
  count: pets.filter((p) => p.tier === tier).length,
}));

const tierDescriptions = [
  {
    tier: "S",
    color: tierColors.S,
    label: "Endgame Multipliers",
    mult: "4.5× - 5.0×",
    desc: "The endgame-defining pets. S-Tier pets multiply your entire farm income by 4.5-5×, permanently. They're listed as obtained from Legendary Eggs (10,000 coins each) with a low hatch rate — the exact rate is not independently verified here — or from limited-time seasonal events. If you get one, it transforms your farm — a 5.0× Golden Phoenix Chick on a 4-plot Golden Wheat farm with Aurelian Crown mutations can generate 1M+ coins per hour.",
  },
  {
    tier: "A",
    color: tierColors.A,
    label: "Strong Mid-Late Game",
    mult: "3.0× - 4.0×",
    desc: "Strong mid-to-late game pets that bridge the gap between Rare Egg RNG and Legendary Egg gambling. A-Tier pets typically come from Rare Eggs (2,000 coins each) with a moderate drop rate, or from seasonal events. They provide a meaningful multiplier jump over B-Tier and are the realistic target for active mid-game players.",
  },
  {
    tier: "B",
    color: tierColors.B,
    label: "Solid Mid-Game",
    mult: "2.0× - 2.9×",
    desc: "Solid mid-game pets. B-Tier pets are the workhorses of an established farm — reliable multipliers that pay for themselves quickly. Most come from Rare Eggs with frequent drop rates. A 2.5× B-Tier pet on a B-Tier mutation plot doubles your income vs no pet, and that's before stacking with mutations.",
  },
  {
    tier: "C",
    color: tierColors.C,
    label: "Starter Foundation",
    mult: "1.5× - 1.9×",
    desc: "Starter pets. C-Tier pets are the most common Basic Egg (500 coins) drops and provide the foundation for new players. Even the worst C-Tier pet at 1.5× multiplier pays for itself in 5-6 harvest cycles. They're meant to be replaced by B-Tier or higher as your farm matures, but getting one online early is critical for progression speed.",
  },
];

const faqs = [
  {
    question: "How are pets ranked in Grow a Garden?",
    answer:
      "Pets are ranked into four tiers based on their coin multiplier: S-Tier (4.5×-5.0×), A-Tier (3.0×-4.0×), B-Tier (2.0×-2.9×), and C-Tier (1.5×-1.9×). The multiplier is the primary ranking metric — it directly multiplies every harvest's coin value. Secondary factors include passive abilities, source egg rarity, and seasonal synergy bonuses.",
  },
  {
    question: "Why are some pets ranked higher than others with similar multipliers?",
    answer:
      "Passive abilities break ties. A 3.5× pet with auto-collect (eliminates harvest time) ranks higher than a 3.5× pet with no passive, because the time saved translates to additional coins-per-hour beyond the raw multiplier. Seasonal bonuses also affect rankings — a pet with +20% Winter bonus ranks higher for Winter-focused farms.",
  },
  {
    question: "What's the difference between early game and late game pets?",
    answer:
      "Early game pets (C-Tier, 1.5×-1.9×) are obtained from 500-coin Basic Eggs and pay for themselves in 5-6 harvest cycles. Late game pets (S-Tier, 4.5×-5.0×) come from 10,000-coin Legendary Eggs with a low listed hatch rate — the exact rate is not independently verified here — and they're endgame goals. Mid-game pets (B-Tier, 2.0×-2.9×) bridge the gap.",
  },
  {
    question: "Which pet tier should I target first?",
    answer:
      "Target B-Tier as your first meaningful milestone — usually 3-5 hours into the game. B-Tier pets come from Rare Eggs (2,000 coins) with reasonable drop rates and provide a 2.0×-2.9× multiplier that meaningfully doubles your farm income. S-Tier pets are endgame goals requiring significant Legendary Egg investment.",
  },
  {
    question: "Are S-Tier pets worth the Legendary Egg cost?",
    answer:
      "This page does not make a purchase recommendation. Legendary Eggs are listed with a low S-Tier hatch rate that is not independently verified here, so the average coin cost per S-Tier pet can be high. Whether that cost is worthwhile depends on your current farm income and progression priorities, which should be checked against the current game.",
  },
  {
    question: "How should I read the pet ranking?",
    answer:
      "Pet ranking on this page compares multiplier, tier, passive ability, and source egg rarity. The Trading Database may show matching internal project-recorded fields, but those records are not official game outcomes, transaction amounts, or live market quotes. Use the ranking to compare gameplay attributes only.",
  },
];

export default function PetRankingGuidePage() {
  return (
    <ContentLayout
      title="Grow a Garden Pet Ranking Guide"
      description="Complete Grow a Garden pet ranking guide: S/A/B/C tier explanation, why pets rank differently, and early vs late game pet picks. Sourced from canonical pet database."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Pet Ranking Guide", href: "/grow-a-garden/pet-ranking-guide" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/pet-ranking-guide"
      updatedAt={CONTENT_UPDATED_AT}
      articleSection="Pets"
      keywords={[
        "Grow a Garden pet ranking",
        "Grow a Garden pet tier list",
        "Grow a Garden S A B C tier",
        "Grow a Garden pet tiers explained",
        "Grow a Garden best pets",
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
          Pets are ranked into four tiers by coin multiplier: S-Tier (4.5×-5.0× from Legendary
          Eggs), A-Tier (3.0×-4.0× from Rare Eggs), B-Tier (2.0×-2.9×, the mid-game workhorse), and
          C-Tier (1.5×-1.9× from Basic Eggs). Multiplier is the primary metric; passive abilities,
          source egg rarity, and seasonal synergy break ties. Trading-related fields are maintained separately
          as internal project records and are not transaction amounts, market premiums, or trade recommendations.
        </p>
      </section>

      {/* Hero */}
      <section className="rounded-xl border border-[#FF3D00]/30 bg-[#FF3D00]/5 p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          Grow a Garden ranks all {pets.length} pets into four tiers (S, A, B, C) based on their
          coin multiplier, passive abilities, and source egg rarity. This guide explains what each
          tier means, why pets rank differently even at similar multipliers, and which pets to
          target in early vs late game. For the full tier list, see our{" "}
          <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">
            Pets Database
          </Link>
          .
        </p>
      </section>

      {/* Tier Explanation */}
      <section aria-labelledby="tiers-heading">
        <h2
          id="tiers-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🏆 S / A / B / C Tier Explained
        </h2>
        <div className="space-y-3">
          {tierDescriptions.map((t) => (
            <div
              key={t.tier}
              className="rounded-xl border bg-[#14161D] p-4"
              style={{ borderColor: t.color + "33" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-xl font-bold"
                  style={{ color: t.color, backgroundColor: t.color + "1a" }}
                >
                  {t.tier}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-sm font-semibold text-white">{t.label}</h3>
                    <span
                      className="rounded px-2 py-0.5 text-xs font-bold"
                      style={{ color: t.color, backgroundColor: t.color + "1a" }}
                    >
                      {t.mult}
                    </span>
                  </div>
                  <p className="text-xs text-[#768294] leading-relaxed">{t.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Pets Rank Differently */}
      <section aria-labelledby="why-heading">
        <h2
          id="why-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🤔 Why Pets Rank Differently
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">1. Multiplier Power</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              The raw coin multiplier is the primary ranking factor. A 5.0× pet is 3.3× more
              powerful than a 1.5× pet — that compounds across every harvest and every plot.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">2. Passive Ability Impact</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Auto-collect, double-harvest procs, and connected-plot harvesting all translate to
              additional coins-per-hour beyond the raw multiplier. These break ties between
              same-multiplier pets.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">3. Source Egg Rarity</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Pets from Legendary Eggs (10K coins) tend to rank higher than pets from Basic Eggs
              (500 coins), because the cost is justified only by superior multipliers and abilities.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">4. Seasonal Synergy</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Pets with seasonal bonuses (e.g., +20% in Winter) rank higher for season-focused
              farms. Pair with seasonal mutations for stacked multiplier effects.
            </p>
          </div>
        </div>
      </section>

      {/* Pets by Tier */}
      <section aria-labelledby="by-tier-heading">
        <h2
          id="by-tier-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📋 Pets by Tier
        </h2>
        <div className="space-y-4">
          {petsByTier.map(({ tier, pets: tierPets, count }) => (
            <div
              key={tier}
              className="rounded-xl border bg-[#14161D] p-4"
              style={{ borderColor: tierColors[tier] + "33" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded text-sm font-bold"
                  style={{ color: tierColors[tier], backgroundColor: tierColors[tier] + "1a" }}
                >
                  {tier}
                </span>
                <h3 className="text-sm font-semibold text-white">Tier Pets ({count})</h3>
              </div>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {tierPets.slice(0, 9).map((p) => (
                  <Link
                    key={p.id}
                    href={`/grow-a-garden/pets/${p.id}`}
                    className="rounded-lg bg-[#1E212B] p-3 border border-[#252936] hover:border-[#00E676] transition"
                  >
                    <div className="text-xs font-semibold text-white truncate">{p.name}</div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-[#768294]">{p.source}</span>
                      <span
                        className="text-sm font-bold"
                        style={{ color: tierColors[tier] }}
                      >
                        {p.multiplier}×
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Early vs Late Game */}
      <section aria-labelledby="early-late-heading">
        <h2
          id="early-late-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⏳ Early Game vs Late Game Pets
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#3A86FF]/30 bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-[#3A86FF] mb-3">Early Game (0-5 hours)</h3>
            <ul className="space-y-2 text-xs text-[#BAC4D1]">
              <li className="flex gap-2">
                <span className="text-[#00E676] shrink-0">✓</span>
                <span>Target: C-Tier and B-Tier pets from Basic Eggs (500 coins)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00E676] shrink-0">✓</span>
                <span>Realistic multiplier: 1.5×-2.5×</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00E676] shrink-0">✓</span>
                <span>Strategy: Bulk-hatch 3-5 Basic Eggs for B-Tier drops</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00E676] shrink-0">✓</span>
                <span>Goal: Get any pet online within first 30 minutes</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#FF3D00] shrink-0">✗</span>
                <span className="text-[#768294]">Avoid: Legendary Eggs (10K coins) — too expensive early</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-[#FF3D00] mb-3">Late Game (10+ hours)</h3>
            <ul className="space-y-2 text-xs text-[#BAC4D1]">
              <li className="flex gap-2">
                <span className="text-[#00E676] shrink-0">✓</span>
                <span>Target: S-Tier and A-Tier pets from Legendary Eggs (10K coins)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00E676] shrink-0">✓</span>
                <span>Realistic multiplier: 3.5×-5.0×</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00E676] shrink-0">✓</span>
                <span>Strategy: Bulk-hatch Legendary Eggs during boosted events</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00E676] shrink-0">✓</span>
                <span>Goal: Equip a 5.0× Golden Phoenix Chick or 4.5× Crystal Unicorn Foal</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#FF3D00] shrink-0">✗</span>
                <span className="text-[#768294]">Avoid: Wasting coins on Basic Eggs — multiplier too low for endgame farm</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <RelatedContent
        category="guide"
        game="garden"
        currentPath="/grow-a-garden/pet-ranking-guide"
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
