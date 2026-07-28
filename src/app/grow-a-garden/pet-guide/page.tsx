import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { pets } from "@/data/garden/database/pets";
import { mutations } from "@/data/garden/database/mutations";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Pet Guide — Grow a Garden System Explained",
  description:
    "Complete guide to the Grow a Garden pet system: passive abilities, multipliers, seasonal bonuses, mutation interactions, egg sources, and how to build a pet team.",
  keywords: [
    "Grow a Garden pet guide",
    "Grow a Garden pet system",
    "pet passive abilities Grow a Garden",
    "pet multipliers Grow a Garden",
    "pet leveling Grow a Garden",
    "Grow a Garden pet mutations",
  ],
  alternates: { canonical: "/grow-a-garden/pet-guide" },
  openGraph: {
    title: "Pet Guide — Grow a Garden System Explained",
    description:
      "Complete guide to the Grow a Garden pet system — passives, multipliers, leveling, and mutation interactions.",
    type: "website",
  },
};

const tierColors: Record<string, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

// Group pets by tier for the system overview
const petsByTier = (["S", "A", "B", "C"] as const).map((tier) => ({
  tier,
  pets: pets.filter((p) => p.tier === tier),
}));

// Top multiplier pets (top 6)
const topMultipliers = [...pets].sort((a, b) => b.multiplier - a.multiplier).slice(0, 6);

// Pets with seasonal bonuses
const seasonalPets = pets.filter((p) => p.seasonalBonus);

// S-Tier mutations for pet-mutation stacking
const sTierMutations = mutations.filter((m) => m.tier === "S");

const faqs = [
  {
    question: "How does the pet system work in Grow a Garden?",
    answer:
      "Pets in Grow a Garden are permanent companions that apply a coin multiplier to every harvest on your farm. Each pet has a base multiplier (ranging from 1.5x to 5.0x), one or more passive abilities, and may have a seasonal bonus that activates during specific seasons or times of day. Pets are obtained by hatching eggs purchased with Coins or Robux.",
  },
  {
    question: "What are pet passive abilities and how do they work?",
    answer:
      "Passive abilities are special effects that activate automatically while the pet is equipped. Examples include Golden Phoenix Chick's auto-collect (eliminates manual harvesting), Crystal Unicorn Foal's double-harvest proc (chance to double yield), Aqua Otter Kit's auto-water (waters adjacent plots), and Frost Wolf Pup's +50% Winter bonus. Passives stack with the base multiplier to determine effective coins-per-hour.",
  },
  {
    question: "How do pets interact with mutations?",
    answer:
      "Pet multipliers stack multiplicatively with mutation multipliers. For example, a Golden Phoenix Chick (5.0x) paired with an Aurelian Crown mutation (4.0x) produces a 20.0x total yield — the theoretical maximum in the current meta. Always equip your highest-multiplier pet when rolling mutations, as the stacking is automatic and applies to every harvest on the affected plot.",
  },
  {
    question: "What is the best pet in Grow a Garden?",
    answer:
      "The Golden Phoenix Chick is the best pet in the game with a 5.0x multiplier and auto-collect passive. It is the only Mythical-rarity pet, hatched exclusively from Legendary Eggs at approximately 5% drop rate. For players who cannot obtain it, the Golden Dragon (4.8x) and Crystal Unicorn Foal (4.5x) are the strongest Legendary alternatives.",
  },
  {
    question: "Which eggs should I hatch for pets?",
    answer:
      "Egg choice depends on your budget. Basic Eggs (500 Coins) are best for early-game pet collection — they yield C-Tier and B-Tier pets. Rare Eggs (2,000 Coins) unlock A-Tier pets like Neon Dragon Hatchling and Celestial Fox Kit. Legendary Eggs (10,000 Coins) are the only source of S-Tier pets including Golden Phoenix Chick. Always check our Eggs Database for current drop rates before buying.",
  },
  {
    question: "Do pets level up in Grow a Garden?",
    answer:
      "Pets do not have a traditional XP-based leveling system. Instead, pet value scales through rarity tiers (C → B → A → S) and synergies. Higher-tier pets have higher base multipliers and stronger passives. To 'upgrade' your pet team, hatch higher-tier eggs and replace lower-tier pets. Seasonal events also occasionally introduce limited-time pets with unique synergies.",
  },
];

export default function PetGuidePage() {
  return (
    <ContentLayout
      title="Grow a Garden Pet Guide"
      description="Complete guide to the Grow a Garden pet system — passive abilities, multipliers, leveling through tiers, seasonal bonuses, mutation interactions, and egg sources."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Pet Guide", href: "/grow-a-garden/pet-guide" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/pet-guide"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Hero Intro */}
      <section className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5">
        <p className="text-sm text-[#BAC4D1] leading-relaxed">
          Pets are the single largest multiplier source in Grow a Garden. A maxed pet team can multiply your
          coins-per-hour by <strong className="text-white">5x or more</strong> — bigger than any single crop or
          mutation upgrade. This guide covers the pet system end-to-end: how passives work, how multipliers
          stack with mutations, which eggs to chase, and which {pets.length} pets are worth keeping. All data is
          sourced from our canonical{" "}
          <Link href="/grow-a-garden/pets" className="text-[#00E676] hover:underline">
            Pets Database
          </Link>
          .
        </p>
      </section>

      {/* Pet System Explanation */}
      <section aria-labelledby="system-heading">
        <h2
          id="system-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          🐾 Pet System Explained
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-white mb-2">Base Multiplier</h3>
            <p className="text-xs text-[#BAC4D1] leading-relaxed">
              Every pet has a base coin multiplier applied to every harvest while equipped. Multipliers range from{" "}
              <strong className="text-[#00E676]">1.5x</strong> (C-Tier) to{" "}
              <strong className="text-[#00E676]">5.0x</strong> (Mythical). The multiplier is unconditional —
              it works on every crop, every season, every harvest.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-white mb-2">Tier System</h3>
            <p className="text-xs text-[#BAC4D1] leading-relaxed">
              Pets are classified into four tiers:{" "}
              <span style={{ color: tierColors.S }} className="font-semibold">S</span>,{" "}
              <span style={{ color: tierColors.A }} className="font-semibold">A</span>,{" "}
              <span style={{ color: tierColors.B }} className="font-semibold">B</span>, and{" "}
              <span style={{ color: tierColors.C }} className="font-semibold">C</span>. Higher tiers mean higher
              multipliers, stronger passives, and rarer egg sources. Tier replaces a traditional leveling system.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-white mb-2">Egg Sources</h3>
            <p className="text-xs text-[#BAC4D1] leading-relaxed">
              Pets are hatched from eggs purchased with Coins or Robux. Basic Eggs (500 Coins) yield C/B-Tier
              pets, Rare Eggs (2,000 Coins) yield A-Tier pets, Legendary Eggs (10,000 Coins) yield S-Tier pets.
              See our{" "}
              <Link href="/grow-a-garden/eggs" className="text-[#00E676] hover:underline">
                Eggs Database
              </Link>{" "}
              for full drop rates.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
            <h3 className="text-sm font-semibold text-white mb-2">Seasonal Bonuses</h3>
            <p className="text-xs text-[#BAC4D1] leading-relaxed">
              Some pets have a <code className="text-[#00E676]">seasonalBonus</code> that activates during a
              specific season or time of day. When active, the pet&apos;s effective multiplier increases —
              sometimes by an entire tier. Plan your pet rotation around the current season.
            </p>
          </div>
        </div>
      </section>

      {/* Pet Tier Distribution */}
      <section aria-labelledby="distribution-heading">
        <h2
          id="distribution-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          📊 Pet Tier Distribution
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {petsByTier.map(({ tier, pets: tierPets }) => (
            <div
              key={tier}
              className="rounded-xl border border-[#252936] bg-[#14161D] p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="code-text rounded px-2 py-0.5 text-xs font-semibold"
                  style={{ color: tierColors[tier], backgroundColor: tierColors[tier] + "1a" }}
                >
                  {tier}-Tier
                </span>
                <span className="text-xs text-[#768294]">{tierPets.length} pets</span>
              </div>
              <ul className="space-y-1">
                {tierPets.slice(0, 5).map((pet) => (
                  <li key={pet.id}>
                    <Link
                      href={`/grow-a-garden/pets/${pet.id}`}
                      className="text-xs text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {pet.name} ({pet.multiplier.toFixed(1)}x)
                    </Link>
                  </li>
                ))}
                {tierPets.length > 5 && (
                  <li className="text-xs text-[#768294]">+ {tierPets.length - 5} more</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Passive Abilities */}
      <section aria-labelledby="passives-heading">
        <h2
          id="passives-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          ⚡ Passive Abilities
        </h2>
        <p className="text-xs text-[#768294] mb-4">
          Every pet has at least one passive ability that activates automatically while equipped. Passives
          either save time (auto-collect, auto-water), boost yield (double-harvest, stacking bonuses), or
          provide situational protection (fire immunity). Below are the most impactful passives in the game.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">Pet</th>
                <th className="py-3 px-3 font-semibold">Tier</th>
                <th className="py-3 px-3 font-semibold">Multiplier</th>
                <th className="py-3 px-3 font-semibold">Passive Ability</th>
              </tr>
            </thead>
            <tbody>
              {topMultipliers.map((pet) => (
                <tr key={pet.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
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
                  <td className="py-3 px-3 text-base font-bold text-[#00E676]">{pet.multiplier.toFixed(1)}x</td>
                  <td className="py-3 px-3 text-xs text-[#BAC4D1]">{pet.abilities[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Leveling through Tiers */}
      <section aria-labelledby="leveling-heading">
        <h2
          id="leveling-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          📈 Leveling — Tier Progression
        </h2>
        <p className="text-xs text-[#768294] mb-4">
          Grow a Garden pets do not have a traditional XP system. Instead, you &quot;level up&quot; by acquiring
          higher-tier pets through better eggs. Each tier jump roughly doubles your effective multiplier.
        </p>
        <div className="space-y-3">
          <div className="rounded-xl border border-[#3A86FF]/30 bg-[#14161D] p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="code-text rounded bg-[#3A86FF]/20 px-2 py-0.5 text-xs font-semibold text-[#3A86FF]">
                C-Tier
              </span>
              <h3 className="text-sm font-semibold text-white">Early Game (500–2,000 Coins)</h3>
            </div>
            <p className="text-xs text-[#BAC4D1] leading-relaxed">
              Start with Basic Eggs. Target: <strong className="text-white">Bamboo Panda Cub (1.5x)</strong> with
              its stacking growth speed bonus. Equip any C-Tier pet while saving for Rare Eggs.
            </p>
          </div>
          <div className="rounded-xl border border-[#FFD700]/30 bg-[#14161D] p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="code-text rounded bg-[#FFD700]/20 px-2 py-0.5 text-xs font-semibold text-[#FFD700]">
                B-Tier
              </span>
              <h3 className="text-sm font-semibold text-white">Mid Game (2,000–10,000 Coins)</h3>
            </div>
            <p className="text-xs text-[#BAC4D1] leading-relaxed">
              Save for Rare Eggs. Target: <strong className="text-white">Frost Wolf Pup (2.2x → 3.3x Winter)</strong>{" "}
              or <strong className="text-white">Magma Lizard Hatchling (2.0x → 3.0x Summer)</strong> for
              seasonal specialization, or <strong className="text-white">Aqua Otter Kit (1.9x)</strong> for
              auto-water quality-of-life.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="code-text rounded bg-[#FF8C00]/20 px-2 py-0.5 text-xs font-semibold text-[#FF8C00]">
                A-Tier
              </span>
              <h3 className="text-sm font-semibold text-white">Late Game (10,000+ Coins)</h3>
            </div>
            <p className="text-xs text-[#BAC4D1] leading-relaxed">
              Continue investing in Rare Eggs. Target:{" "}
              <strong className="text-white">Neon Dragon Hatchling (3.5x)</strong> or{" "}
              <strong className="text-white">Lucky Clover Bunny (3.2x + Leporine Bloom synergy)</strong> for the
              strongest A-Tier performance. Seasonal events may offer limited A-Tier pets.
            </p>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="code-text rounded bg-[#FF3D00]/20 px-2 py-0.5 text-xs font-semibold text-[#FF3D00]">
                S-Tier
              </span>
              <h3 className="text-sm font-semibold text-white">End Game (Legendary Egg grind)</h3>
            </div>
            <p className="text-xs text-[#BAC4D1] leading-relaxed">
              Buy Legendary Eggs (10,000 Coins each). Target:{" "}
              <strong className="text-white">Crystal Unicorn Foal (4.5x)</strong> as your first S-Tier, then{" "}
              <strong className="text-white">Golden Phoenix Chick (5.0x)</strong> — the only Mythical pet and
              the undisputed best in the game.
            </p>
          </div>
        </div>
      </section>

      {/* Mutation Interaction */}
      <section aria-labelledby="mutation-heading">
        <h2
          id="mutation-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          🧬 Pet + Mutation Interaction
        </h2>
        <p className="text-xs text-[#768294] mb-4">
          Pet multipliers and mutation multipliers stack <strong className="text-white">multiplicatively</strong>.
          This is the single most important mechanic in the game — a strong pet on a mutated crop can produce
          10x–20x yields. Below are the S-Tier mutations and how they stack with top pets.
        </p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[760px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#252936] text-left text-xs text-[#768294] uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold">Mutation</th>
                <th className="py-3 px-3 font-semibold">Multiplier</th>
                <th className="py-3 px-3 font-semibold">+ Phoenix Chick (5.0x)</th>
                <th className="py-3 px-3 font-semibold">+ Crystal Unicorn (4.5x)</th>
              </tr>
            </thead>
            <tbody>
              {sTierMutations.map((m) => (
                <tr key={m.id} className="border-b border-[#252936] hover:bg-[#1E212B] transition">
                  <td className="py-3 px-3">
                    <Link
                      href={`/grow-a-garden/mutations/${m.id}`}
                      className="font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {m.name}
                    </Link>
                  </td>
                  <td className="py-3 px-3 text-sm font-bold text-[#00E676]">{m.multiplier.toFixed(1)}x</td>
                  <td className="py-3 px-3 text-sm font-bold text-[#00E676]">
                    {(m.multiplier * 5.0).toFixed(1)}x
                  </td>
                  <td className="py-3 px-3 text-sm font-bold text-[#00E676]">
                    {(m.multiplier * 4.5).toFixed(1)}x
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
          <p className="text-xs text-[#00E676] leading-relaxed">
            💡 <strong>Pro tip:</strong> The theoretical maximum yield is{" "}
            <strong className="text-white">20.0x</strong> — Golden Phoenix Chick (5.0x) × Aurelian Crown
            mutation (4.0x). Always equip your strongest pet before rolling mutations.
          </p>
        </div>
      </section>

      {/* Seasonal Bonus Pets */}
      {seasonalPets.length > 0 && (
        <section aria-labelledby="seasonal-heading">
          <h2
            id="seasonal-heading"
            className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
          >
            🌦️ Seasonal Bonus Pets
          </h2>
          <p className="text-xs text-[#768294] mb-4">
            These pets gain an additional multiplier during specific seasons or times of day. Rotate them into
            your active slot when their bonus is active for maximum value.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {seasonalPets.map((pet) => (
              <div
                key={pet.id}
                className="rounded-xl border border-[#252936] bg-[#14161D] p-4"
              >
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <Link
                    href={`/grow-a-garden/pets/${pet.id}`}
                    className="text-sm font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                  >
                    {pet.name}
                  </Link>
                  <span className="text-xs text-[#768294]">
                    {pet.multiplier.toFixed(1)}x →{" "}
                    <strong className="text-[#00E676]">
                      {pet.seasonalBonus!.bonusMultiplier.toFixed(1)}x
                    </strong>{" "}
                    in {pet.seasonalBonus!.season}
                  </span>
                </div>
                <p className="text-xs text-[#768294] leading-relaxed">
                  {pet.abilities[0]}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Links to Database */}
      <section aria-labelledby="database-links-heading">
        <h2
          id="database-links-heading"
          className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-4"
        >
          🔗 Explore the Pet Database
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/grow-a-garden/pets"
            className="group rounded-lg border border-[#00E676]/30 bg-[#14161D] p-4 transition hover:border-[#00E676]"
          >
            <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
              All Pets Database →
            </span>
            <p className="mt-1 text-xs text-[#768294]">Browse every pet with full stats and abilities</p>
          </Link>
          <Link
            href="/grow-a-garden/pet-tier-list"
            className="group rounded-lg border border-[#00E676]/30 bg-[#14161D] p-4 transition hover:border-[#00E676]"
          >
            <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
              Pet Tier List →
            </span>
            <p className="mt-1 text-xs text-[#768294]">Full S to C ranking with analysis</p>
          </Link>
          <Link
            href="/grow-a-garden/eggs"
            className="group rounded-lg border border-[#00E676]/30 bg-[#14161D] p-4 transition hover:border-[#00E676]"
          >
            <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
              Eggs Database →
            </span>
            <p className="mt-1 text-xs text-[#768294]">Egg prices, hatch times, and drop rates</p>
          </Link>
          <Link
            href="/grow-a-garden/best-pets"
            className="group rounded-lg border border-[#00E676]/30 bg-[#14161D] p-4 transition hover:border-[#00E676]"
          >
            <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
              Best Pets Guide →
            </span>
            <p className="mt-1 text-xs text-[#768294]">Top picks and how to get them efficiently</p>
          </Link>
          <Link
            href="/grow-a-garden/best-mythical-pets"
            className="group rounded-lg border border-[#00E676]/30 bg-[#14161D] p-4 transition hover:border-[#00E676]"
          >
            <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
              Best Mythical Pets →
            </span>
            <p className="mt-1 text-xs text-[#768294]">Ranked S-Tier pets with trading values</p>
          </Link>
          <Link
            href="/grow-a-garden/trading"
            className="group rounded-lg border border-[#00E676]/30 bg-[#14161D] p-4 transition hover:border-[#00E676]"
          >
            <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
              Trading Values →
            </span>
            <p className="mt-1 text-xs text-[#768294]">Current market values for every pet</p>
          </Link>
        </div>
      </section>

      <RelatedContent
        category="guide"
        game="garden"
        currentPath="/grow-a-garden/pet-guide"
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
