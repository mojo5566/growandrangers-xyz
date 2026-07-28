import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { crops, getCropById } from "@/data/garden/database/crops";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return crops.map((crop) => ({ id: crop.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const crop = getCropById(id);
  if (!crop) return { title: "Crop Not Found" };

  return {
    title: `${crop.name} — Grow a Garden Crop Guide`,
    description: crop.description,
    keywords: [
      crop.name,
      "Grow a Garden crop",
      `${crop.name} coins`,
      `${crop.name} growth time`,
      `${crop.name} CPM`,
      "June 2026",
      ...crop.aliases,
    ],
    alternates: { canonical: `/grow-a-garden/crops/${id}` },
    openGraph: {
      title: `${crop.name} — Grow a Garden Crop Guide`,
      description: crop.description,
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

const relatedGuides = [
  {
    href: "/grow-a-garden/crop-value-list",
    label: "Crop Value List",
    description: "Detailed crop profit rankings and value comparisons",
  },
  {
    href: "/grow-a-garden/crops",
    label: "All Crops Database",
    description: "Browse every crop in the Grow a Garden database",
  },
  {
    href: "/grow-a-garden/beginner-guide",
    label: "Beginner Guide",
    description: "Everything new players need to know to get started",
  },
];

export default async function CropDetailPage({ params }: PageProps) {
  const { id } = await params;
  const crop = getCropById(id);

  if (!crop) notFound();

  const faqs = [
    {
      question: `How much does ${crop.name} earn per harvest?`,
      answer: `${crop.name} earns ${crop.coins} coins per harvest with a growth time of ${crop.growthTime}, resulting in ${crop.coinsPerMinute} coins per minute (CPM).`,
    },
    {
      question: `When should I plant ${crop.name}?`,
      answer:
        crop.season === "All"
          ? `${crop.name} is an all-season crop, so you can plant it any time of year without worrying about seasonal restrictions.`
          : `${crop.name} is a ${crop.season}-season crop. Plant it during ${crop.season} for a +20% seasonal bonus. Switch to all-season crops outside ${crop.season}.`,
    },
    ...(crop.tier === "S" || crop.tier === "A"
      ? [
          {
            question: `Is ${crop.name} worth investing in?`,
            answer: `Yes. As a ${crop.tier}-Tier crop, ${crop.name} is among the best in the game. ${crop.description}`,
          },
        ]
      : []),
  ];

  return (
    <ContentLayout
      title={crop.name}
      description={crop.description}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Crops", href: "/grow-a-garden/crops" },
        { label: crop.name, href: `/grow-a-garden/crops/${crop.id}` },
      ]}
      accent="garden"
      canonicalPath={`/grow-a-garden/crops/${crop.id}`}
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Core Stats */}
      <section aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          📊 Crop Stats
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Coins per Harvest</span>
            <p className="mt-1 text-lg font-bold text-white">{crop.coins} 🪙</p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Growth Time</span>
            <p className="mt-1 text-lg font-bold text-white">{crop.growthTime}</p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Season</span>
            <p className="mt-1 text-lg font-bold text-white">{crop.season}</p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Tier</span>
            <p className="mt-1">
              <span className={`rounded px-2 py-0.5 text-sm font-semibold ${tierBadge[crop.tier]}`}>
                {crop.tier}
              </span>
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <span className="text-xs text-[#768294]">Coins Per Minute</span>
            <p className="mt-1 text-lg font-bold text-[#00E676]">{crop.coinsPerMinute} CPM</p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section aria-labelledby="desc-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="desc-heading" className="font-heading text-[20px] font-semibold text-white mb-3">
          📝 About {crop.name}
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed">{crop.description}</p>
      </section>

      {/* Best Mutations for This Crop */}
      <section aria-labelledby="mutations-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="mutations-heading" className="font-heading text-[20px] font-semibold text-white mb-3">
          🧬 Best Mutations for {crop.name}
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed mb-4">
          Mutations multiply your crop harvest value. The best mutations for {crop.name} depend on your playstyle —
          S-Tier mutations like Aurelian Crown (4.0×) provide the highest raw multiplier, while seasonal mutations
          can outperform during their active window.
        </p>
        <Link
          href="/grow-a-garden/mutation-tier-list"
          className="inline-flex items-center gap-1 text-sm font-semibold text-[#00E676] hover:underline"
        >
          View Mutation Tier List →
        </Link>
      </section>

      {/* Best Pets for This Crop */}
      <section aria-labelledby="pets-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="pets-heading" className="font-heading text-[20px] font-semibold text-white mb-3">
          🐾 Best Pets for {crop.name}
        </h2>
        <p className="text-sm text-[#BAC4D1] leading-relaxed mb-4">
          Pets stack multiplicatively with mutations for massive yield bonuses. The Golden Phoenix Chick (5.0×) is the
          best overall pet, while seasonal pets like Frost Wolf Pup can outperform during Winter.
        </p>
        <Link
          href="/grow-a-garden/pet-tier-list"
          className="inline-flex items-center gap-1 text-sm font-semibold text-[#00E676] hover:underline"
        >
          View Pet Tier List →
        </Link>
      </section>

      {/* Related Guides */}
      <RelatedContent
        category="crops"
        game="garden"
        currentPath={`/grow-a-garden/crops/${crop.id}`}
      />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
