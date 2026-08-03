import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { seeds, getSeedById } from "@/data/garden/database/seeds";
import { getCropById } from "@/data/garden/database/crops";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return seeds.map((seed) => ({ id: seed.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const seed = getSeedById(id);
  if (!seed) return { title: "Seed Not Found" };

  return {
    title: `${seed.name} — Grow a Garden Seed Guide`,
    description: seed.description,
    keywords: [
      seed.name,
      "Grow a Garden seed",
      `${seed.name} price`,
      `${seed.name} rarity`,
      `${seed.name} growth time`,
      `${seed.currency} seed`,
      ...seed.aliases,
    ],
    alternates: { canonical: `/grow-a-garden/seeds/${id}` },
    openGraph: {
      title: `${seed.name} — Grow a Garden Seed Guide`,
      description: seed.description,
      type: "website",
    },
  };
}

const tierBadge: Record<string, string> = {
  S: "bg-[#FF3D00]/20 text-[#FF3D00]",
  A: "bg-[#FF8C00]/20 text-[#FF8C00]",
  B: "bg-[#FFD700]/20 text-[#FFD700]",
  C: "bg-[#3A86FF]/20 text-[#3A86FF]",
};

const rarityBadge: Record<string, string> = {
  Mythical: "bg-[#FF3D00]/20 text-[#FF3D00]",
  Legendary: "bg-[#FF8C00]/20 text-[#FF8C00]",
  Rare: "bg-[#FFD700]/20 text-[#FFD700]",
  Uncommon: "bg-[#3A86FF]/20 text-[#3A86FF]",
  Common: "bg-[#768294]/20 text-[#BAC4D1]",
};

export default async function SeedDetailPage({ params }: PageProps) {
  const { id } = await params;
  const seed = getSeedById(id);

  if (!seed) notFound();

  const linkedCrop = seed.cropId ? getCropById(seed.cropId) : undefined;

  const faqs = [
    {
      question: `How much does ${seed.name} cost?`,
      answer: `${seed.name} costs ${seed.price.toLocaleString()} ${seed.currency}. ${
        seed.currency === "Robux"
          ? "Robux is the premium currency purchased with real money."
          : "Sheckles are earned in-game by selling harvested crops."
      }`,
    },
    {
      question: `How long does ${seed.name} take to grow?`,
      answer: `${seed.name} has a growth time of ${seed.growthTime} (${seed.growthSeconds} seconds). ${
        seed.growthSeconds <= 120
          ? "This is a fast cycle — best for active players who can replant frequently."
          : seed.growthSeconds <= 360
          ? "This is a moderate cycle — balanced for both active and semi-AFK play."
          : "This is a long cycle — ideal for semi-AFK players who check in periodically."
      }`,
    },
    {
      question: `When can I plant ${seed.name}?`,
      answer:
        seed.season === "All"
          ? `${seed.name} is an all-season seed, so you can plant it any time of year without worrying about seasonal restrictions.`
          : `${seed.name} is a ${seed.season}-season seed. Plant it during ${seed.season} for a +20% seasonal bonus. Switch to all-season seeds outside ${seed.season}.`,
    },
    ...(seed.tier === "S" || seed.tier === "A"
      ? [
          {
            question: `Is ${seed.name} worth buying?`,
            answer: `Yes. As a ${seed.tier}-Tier ${seed.rarity} seed, ${seed.name} is among the best in the game. ${seed.description}`,
          },
        ]
      : []),
    ...(linkedCrop
      ? [
          {
            question: `What crop does ${seed.name} produce?`,
            answer: `${seed.name} grows into ${linkedCrop.name}, which sells for ${linkedCrop.coins} coins per harvest with a base CPM of ${linkedCrop.coinsPerMinute}. See the ${linkedCrop.name} crop page for full stats and mutation compatibility.`,
          },
        ]
      : []),
  ];

  return (
    <ContentLayout
      title={seed.name}
      description={seed.description}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Seeds", href: "/grow-a-garden/seeds" },
        { label: seed.name, href: `/grow-a-garden/seeds/${seed.id}` },
      ]}
      accent="garden"
      canonicalPath={`/grow-a-garden/seeds/${seed.id}`}
      updatedAt={seed.updatedAt}
    >
      {/* Core Stats */}
      <section aria-labelledby="stats-heading">
        <h2
          id="stats-heading"
          className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
        >
          📊 Core Stats
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Rarity</span>
            <p className="mt-1">
              <span className={`rounded px-2 py-0.5 text-sm font-semibold ${rarityBadge[seed.rarity]}`}>
                {seed.rarity}
              </span>
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Tier</span>
            <p className="mt-1">
              <span className={`rounded px-2 py-0.5 text-sm font-semibold ${tierBadge[seed.tier]}`}>
                {seed.tier}-Tier
              </span>
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Price</span>
            <p className="mt-1 text-lg font-bold text-[#00E676]">
              {seed.price.toLocaleString()} {seed.currency === "Sheckles" ? "🪙" : "💎"}
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Growth Time</span>
            <p className="mt-1 text-sm font-semibold text-[#BAC4D1]">{seed.growthTime}</p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Season</span>
            <p className="mt-1 text-sm font-semibold text-[#BAC4D1]">{seed.season}</p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Currency</span>
            <p className="mt-1 text-sm font-semibold text-[#BAC4D1]">{seed.currency}</p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section aria-labelledby="desc-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2
          id="desc-heading"
          className="font-heading text-[20px] font-semibold text-white mb-3"
        >
          📝 About {seed.name}
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">{seed.description}</p>
      </section>

      {/* Aliases */}
      {seed.aliases.length > 0 && (
        <section aria-labelledby="aliases-heading">
          <h2
            id="aliases-heading"
            className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
          >
            🔁 Also Known As
          </h2>
          <div className="flex flex-wrap gap-2">
            {seed.aliases.map((alias) => (
              <span
                key={alias}
                className="rounded-lg border border-[#252936] bg-[#14161D] px-3 py-1.5 text-sm text-[#BAC4D1]"
              >
                {alias}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Linked Crop */}
      {linkedCrop && (
        <section aria-labelledby="crop-heading">
          <h2
            id="crop-heading"
            className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4"
          >
            🌾 Grows Into: {linkedCrop.name}
          </h2>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
            <p className="text-sm text-[#BAC4D1] leading-relaxed mb-4">{linkedCrop.description}</p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-[#252936] bg-[#1E212B] p-3">
                <span className="text-xs text-[#768294]">Sell Price</span>
                <p className="mt-1 text-sm font-bold text-[#00E676]">{linkedCrop.coins} 🪙</p>
              </div>
              <div className="rounded-lg border border-[#252936] bg-[#1E212B] p-3">
                <span className="text-xs text-[#768294]">CPM</span>
                <p className="mt-1 text-sm font-bold text-[#BAC4D1]">{linkedCrop.coinsPerMinute}</p>
              </div>
              <div className="rounded-lg border border-[#252936] bg-[#1E212B] p-3">
                <span className="text-xs text-[#768294]">Tier</span>
                <p className="mt-1">
                  <span className={`rounded px-1.5 py-0.5 text-xs font-semibold ${tierBadge[linkedCrop.tier]}`}>
                    {linkedCrop.tier}
                  </span>
                </p>
              </div>
            </div>
            <Link
              href={`/grow-a-garden/crops/${linkedCrop.id}`}
              className="mt-4 inline-block text-sm font-semibold text-[#00E676] hover:underline"
            >
              View {linkedCrop.name} Crop Page →
            </Link>
          </div>
        </section>
      )}

      {/* Related Content */}
      <RelatedContent category="seeds" game="garden" currentPath={`/grow-a-garden/seeds/${seed.id}`} />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
