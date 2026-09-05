import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import { getPetsByTier } from "@/data/garden/database/pets";

export const metadata: Metadata = {
  title: "Grow a Garden Pets List — All 20 Pets",
  description:
    "Complete Grow a Garden pets list with multiplier, tier, source, and abilities for every pet. Browse all pets in the database.",
  keywords: [
    "Grow a Garden pets",
    "Grow a Garden pets list",
    "all Grow a Garden pets",
    "Grow a Garden pet database",
    "pet list Grow a Garden",
    "Golden Phoenix Chick",
    "pet multiplier",
  ],
  alternates: { canonical: "/grow-a-garden/pets" },
  openGraph: {
    title: "Grow a Garden Pets List — All 20 Pets",
    description:
      "Complete Grow a Garden pets list with multiplier, tier, source, and abilities for every pet.",
    type: "website",
  },
};

const tierBadge: Record<string, string> = {
  S: "bg-[#FF3D00]/20 text-[#FF3D00]",
  A: "bg-[#FF8C00]/20 text-[#FF8C00]",
  B: "bg-[#FFD700]/20 text-[#FFD700]",
  C: "bg-[#3A86FF]/20 text-[#3A86FF]",
};

const tierHeadings: Record<string, string> = {
  S: "🔴 S Tier — Best Pets",
  A: "🟠 A Tier — Strong Pets",
  B: "🟡 B Tier — Niche Pets",
  C: "🔵 C Tier — Starter & Weak Pets",
};

const tierOrder = ["S", "A", "B", "C"] as const;

const relatedGuides = [
  {
    href: "/grow-a-garden/pet-tier-list",
    label: "Pet Tier List",
    description: "Full pet rankings with detailed analysis",
  },
  {
    href: "/grow-a-garden/best-pets",
    label: "Best Pets Guide",
    description: "Which pets to hatch and why",
  },
  {
    href: "/grow-a-garden/beginner-guide",
    label: "Beginner Guide",
    description: "Everything new players need to know to get started",
  },
  {
    href: "/grow-a-garden/codes",
    label: "Codes",
    description: "Latest active codes for free rewards",
  },
];

const faqs = [
  {
    question: "What is the best pet in Grow a Garden?",
    answer:
      "Golden Phoenix Chick is the best pet with a 5.0× multiplier and auto-collect passive. Crystal Unicorn Foal (4.5×) is second best and can occasionally outperform on fast-growing crops due to its double-harvest proc.",
  },
  {
    question: "How do I get pets in Grow a Garden?",
    answer:
      "Pets are obtained by hatching eggs — Basic Eggs (500 Coins), Rare Eggs (2,000 Coins), and Legendary Eggs (10,000 Coins). Higher-tier eggs have better drop rates for high-multiplier pets. Some pets like Lucky Clover Bunny are exclusive to seasonal events.",
  },
  {
    question: "Do pet multipliers stack with mutations?",
    answer:
      "Yes, pet and mutation multipliers stack multiplicatively. For example, Golden Phoenix Chick (5.0×) with Aurelian Crown (4.0×) gives 20.0× total yield on harvests.",
  },
  {
    question: "Which egg should I buy for pets?",
    answer:
      "If you can afford Legendary Eggs, they are the only way to get S-Tier pets. For budget players, Rare Eggs offer A-Tier pets like Neon Dragon Hatchling (3.5×) at a fraction of the cost. Basic Eggs are only worth it for early-game B/C-Tier pets.",
  },
];

export default function PetsDatabasePage() {
  return (
    <ContentLayout
      title="Grow a Garden Pets List"
      description="Complete list of every pet in Grow a Garden — multiplier, tier, source, and abilities at a glance. Click any pet for the full breakdown."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Pets Database", href: "/grow-a-garden/pets" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/pets"
      updatedAt="July 19, 2026"
    >
      {/* Pet Tables by Tier */}
      <section aria-labelledby="pets-heading">
        <h2 id="pets-heading" className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-6">
          🐾 All Pets by Tier
        </h2>

        {tierOrder.map((tier) => {
          const tierPets = getPetsByTier(tier);
          return (
            <div key={tier} className="mb-8">
              <h3 className="font-heading text-[18px] font-semibold text-white mb-3">
                {tierHeadings[tier]}
              </h3>
              <div className="overflow-hidden rounded-xl border border-[#252936]">
                <div className="grid grid-cols-[1fr_80px_50px_1fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
                  <span className="text-xs font-semibold text-[#768294]">NAME</span>
                  <span className="text-xs font-semibold text-[#768294]">MULTI</span>
                  <span className="text-xs font-semibold text-[#768294]">TIER</span>
                  <span className="text-xs font-semibold text-[#768294]">SOURCE</span>
                </div>
                {tierPets.map((pet) => (
                  <div
                    key={pet.id}
                    className="grid grid-cols-[1fr_80px_50px_1fr] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
                  >
                    <Link
                      href={`/grow-a-garden/pets/${pet.id}`}
                      className="text-sm font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {pet.name}
                    </Link>
                    <span className="text-xs font-semibold text-[#00E676]">{pet.multiplier}×</span>
                    <span className={`rounded px-1.5 py-0.5 text-xs font-semibold ${tierBadge[pet.tier]}`}>
                      {pet.tier}
                    </span>
                    <span className="text-xs text-[#768294]">{pet.source}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Related Guides */}
      <section aria-labelledby="related-heading">
        <h2 id="related-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          🔗 Related Grow a Garden Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {relatedGuides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676] group"
            >
              <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
                {g.label} →
              </span>
              <p className="mt-1 text-xs text-[#768294]">{g.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
