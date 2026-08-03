import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { eggs, getEggById, getPetsFromEgg, getEggRarityDistribution } from "@/data/garden/database/eggs";

const tierBadge: Record<string, string> = {
  S: "bg-[#FF3D00]/20 text-[#FF3D00]",
  A: "bg-[#FF8C00]/20 text-[#FF8C00]",
  B: "bg-[#FFD700]/20 text-[#FFD700]",
  C: "bg-[#3A86FF]/20 text-[#3A86FF]",
};

export function generateStaticParams() {
  return eggs.map((egg) => ({ id: egg.id }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  return (async () => {
    const { id } = await params;
    const egg = getEggById(id);
    if (!egg) return { title: "Egg Not Found" };

    const eggPets = getPetsFromEgg(egg.id);
    const dist = getEggRarityDistribution(egg.id);
    const sTierPct = dist.S;
    const aTierPct = dist.A;

    return {
      title: `${egg.name} — Price, Hatch Time & Pet Drop Rates`,
      description: `Complete ${egg.name} breakdown: ${egg.price.toLocaleString()} ${egg.currency} price, ${egg.hatchTime} hatch time, ${eggPets.length} pets obtainable (${sTierPct}% S-Tier, ${aTierPct}% A-Tier). Pet drop rates and rarity distribution.`,
      keywords: [
        `${egg.name} Grow a Garden`,
        `${egg.name} price`,
        `${egg.name} drop rates`,
        `${egg.name} pets`,
        `${egg.name} hatch time`,
        ...egg.aliases.map((a) => `${a} Grow a Garden`),
      ],
      alternates: { canonical: `/grow-a-garden/eggs/${egg.id}` },
      openGraph: {
        title: `${egg.name} — Price, Hatch Time & Pet Drop Rates`,
        description: `${egg.price.toLocaleString()} ${egg.currency} • ${egg.hatchTime} hatch • ${eggPets.length} pets • ${sTierPct}% S-Tier, ${aTierPct}% A-Tier`,
        type: "website",
      },
    };
  })();
}

export default async function EggDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const egg = getEggById(id);
  if (!egg) notFound();

  const eggPets = getPetsFromEgg(egg.id);
  const dist = getEggRarityDistribution(egg.id);
  const totalRate = eggPets.reduce((sum, p) => sum + p.dropRate, 0);

  const faqs = [
    {
      question: `How much does a ${egg.name} cost?`,
      answer: `${egg.name} costs ${egg.price.toLocaleString()} ${egg.currency}. ${
        egg.currency === "Coins"
          ? "Purchased from the in-game shop with Coins earned from farming."
          : egg.currency === "Event Tickets"
          ? "Purchased with Event Tickets earned through event activities — does not consume Coins."
          : "Purchased with Robux."
      }`,
    },
    {
      question: `What is the hatch time for a ${egg.name}?`,
      answer: `${egg.name} hatches in ${egg.hatchTime}. Hatch time is the wait between purchasing the egg and seeing which pet you got. It is a minor consideration — the price and pet pool matter far more for your farming strategy.`,
    },
    {
      question: `What pets can you get from a ${egg.name}?`,
      answer: `${egg.name} can hatch ${eggPets.length} pet${eggPets.length === 1 ? "" : "s"}: ${eggPets
        .map((p) => `${p.pet.name} (${p.dropRate}%)`)
        .join(", ")}. The rarest pull is ${eggPets[eggPets.length - 1].pet.name} at ${eggPets[eggPets.length - 1].dropRate}% chance.`,
    },
    {
      question: `Is the ${egg.name} worth buying?`,
      answer:
        egg.tier === "S"
          ? `Yes — ${egg.name} is the only source of S-Tier pets in Grow a Garden. If you can afford the ${egg.price.toLocaleString()} ${egg.currency} cost without stalling your farm, it is the single best coin investment in the game. Each S-Tier pull multiplies your farming income by 4.5×-5.0×.`
          : egg.tier === "B" || egg.tier === "A"
          ? `${egg.name} is worth buying in the ${egg.tier === "B" ? "mid-game" : "event-driven phases"} — it provides ${egg.tier}-Tier pets that meaningfully boost your multiplier. Once you can comfortably afford ${egg.price.toLocaleString()} ${egg.currency}, this egg is a solid investment.`
          : `${egg.name} is a starter egg — buy one with your first ${egg.price.toLocaleString()} ${egg.currency} to bootstrap your pet multiplier, then upgrade to Rare Eggs as soon as your income allows.` ,
    },
  ];

  return (
    <ContentLayout
      title={`${egg.name} — Egg Database`}
      description={egg.description}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Eggs Database", href: "/grow-a-garden/eggs" },
        { label: egg.name, href: `/grow-a-garden/eggs/${egg.id}` },
      ]}
      accent="garden"
      canonicalPath={`/grow-a-garden/eggs/${egg.id}`}
    >
      {/* Overview / Core Stats */}
      <section aria-labelledby="overview-heading">
        <h2 id="overview-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          📋 Egg Overview
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Price</span>
            <p className="mt-1 text-lg font-bold text-[#00E676]">
              {egg.price.toLocaleString()} {egg.currency === "Coins" ? "🪙" : "🎟️"}
            </p>
            <p className="mt-1 text-xs text-[#768294]">{egg.currency}</p>
          </div>
          <div className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Hatch Time</span>
            <p className="mt-1 text-lg font-bold text-white">{egg.hatchTime}</p>
          </div>
          <div className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Tier</span>
            <p className="mt-1">
              <span className={`rounded px-2 py-0.5 text-sm font-semibold ${tierBadge[egg.tier]}`}>
                {egg.tier}
              </span>
            </p>
          </div>
          <div className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Pets Available</span>
            <p className="mt-1 text-lg font-bold text-white">{eggPets.length}</p>
            <p className="mt-1 text-xs text-[#768294]">{totalRate}% total drop rate</p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section aria-labelledby="desc-heading">
        <h2 id="desc-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-3">
          📝 About the {egg.name}
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">{egg.description}</p>
        </div>
      </section>

      {/* Pets Obtainable */}
      <section aria-labelledby="pets-heading">
        <h2 id="pets-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          🐾 Pets Obtainable from {egg.name}
        </h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1fr_80px_120px_80px_100px] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="text-xs font-semibold text-[#768294]">PET</span>
            <span className="text-xs font-semibold text-[#768294]">TIER</span>
            <span className="text-xs font-semibold text-[#768294]">MULTIPLIER</span>
            <span className="text-xs font-semibold text-[#768294]">DROP RATE</span>
            <span className="text-xs font-semibold text-[#768294]">DROP BAR</span>
          </div>
          {eggPets.map(({ pet, dropRate }) => (
            <div
              key={pet.id}
              className="grid grid-cols-[1fr_80px_120px_80px_100px] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
            >
              <Link
                href={`/grow-a-garden/pets/${pet.id}`}
                className="text-sm font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
              >
                {pet.name}
              </Link>
              <span className={`rounded px-1.5 py-0.5 text-xs font-semibold w-fit ${tierBadge[pet.tier]}`}>
                {pet.tier}
              </span>
              <span className="text-xs text-[#BAC4D1]">{pet.multiplier}× base</span>
              <span className="text-xs font-semibold text-[#00E676]">{dropRate}%</span>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#0B0C10]">
                <div
                  className="h-full rounded-full bg-[#00E676]"
                  style={{ width: `${Math.max(2, (dropRate / 30) * 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rarity Distribution */}
      <section aria-labelledby="rarity-heading">
        <h2 id="rarity-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          📊 Rarity Distribution
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <div className="space-y-3">
            {(["S", "A", "B", "C"] as const).map((tier) => {
              const pct = dist[tier];
              if (pct === 0) return null;
              return (
                <div key={tier} className="flex items-center gap-3">
                  <span className={`w-8 rounded px-1.5 py-0.5 text-xs font-semibold text-center ${tierBadge[tier]}`}>
                    {tier}
                  </span>
                  <div className="flex-1 h-3 overflow-hidden rounded-full bg-[#0B0C10]">
                    <div
                      className={`h-full rounded-full ${
                        tier === "S" ? "bg-[#FF3D00]" : tier === "A" ? "bg-[#FF8C00]" : tier === "B" ? "bg-[#FFD700]" : "bg-[#3A86FF]"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-[#BAC4D1] w-12 text-right">{pct}%</span>
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-xs text-[#768294] leading-relaxed">
            Each hatch from a {egg.name} has the above chance of producing a pet of each tier. The distribution sums to {totalRate}% (any rounding is due to integer drop rates).
          </p>
        </div>
      </section>

      {/* Strengths & Weaknesses */}
      <section aria-labelledby="analysis-heading">
        <h2 id="analysis-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          ⚖️ Strengths &amp; Weaknesses
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
            <h3 className="mb-3 text-sm font-semibold text-[#00E676]">✓ Strengths</h3>
            <ul className="space-y-2">
              {egg.strengths.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[#BAC4D1]">
                  <span className="text-[#00E676] shrink-0 mt-0.5">+</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#FF3D00]/30 bg-[#FF3D00]/5 p-5">
            <h3 className="mb-3 text-sm font-semibold text-[#FF3D00]">✗ Weaknesses</h3>
            <ul className="space-y-2">
              {egg.weaknesses.map((w, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[#BAC4D1]">
                  <span className="text-[#FF3D00] shrink-0 mt-0.5">−</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Other Eggs Navigation */}
      <section aria-labelledby="other-eggs-heading">
        <h2 id="other-eggs-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          🥚 Other Eggs
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {eggs
            .filter((e) => e.id !== egg.id)
            .map((e) => (
              <Link
                key={e.id}
                href={`/grow-a-garden/eggs/${e.id}`}
                className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676] group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
                    {e.name} →
                  </span>
                  <span className={`rounded px-1.5 py-0.5 text-xs font-semibold ${tierBadge[e.tier]}`}>
                    {e.tier}
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#768294]">
                  {e.price.toLocaleString()} {e.currency === "Coins" ? "🪙" : "🎟️"} • {e.hatchTime}
                </p>
              </Link>
            ))}
        </div>
      </section>

      <RelatedContent
        category="eggs"
        game="garden"
        currentPath={`/grow-a-garden/eggs/${egg.id}`}
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
