import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import { mutations, getMutationsByTier } from "@/data/garden/database/mutations";

export const metadata: Metadata = {
  title: "Grow a Garden Mutations List — All 22",
  description:
    "Complete Grow a Garden mutations database with multiplier, tier, roll rate, and passives for every mutation. Find the best mutation for your farm.",
  keywords: [
    "Grow a Garden mutations",
    "Grow a Garden mutation database",
    "all mutations Grow a Garden",
    "mutation list Grow a Garden",
    "Aurelian Crown",
    "mutation multiplier",
  ],
  alternates: { canonical: "/grow-a-garden/mutations" },
  openGraph: {
    title: "Grow a Garden Mutations List — All 22",
    description:
      "Complete Grow a Garden mutations database with multiplier, tier, roll rate, and passives for every mutation.",
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
  S: "🔴 S Tier — Best Mutations",
  A: "🟠 A Tier — Strong Mutations",
  B: "🟡 B Tier — Niche Mutations",
  C: "🔵 C Tier — Starter & Weak Mutations",
};

const tierOrder = ["S", "A", "B", "C"] as const;

const relatedGuides = [
  {
    href: "/grow-a-garden/mutation-tier-list",
    label: "Mutation Tier List",
    description: "Full mutation rankings with detailed analysis",
  },
  {
    href: "/grow-a-garden/best-mutations",
    label: "Best Mutations Guide",
    description: "Which mutations to roll for and why",
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
    question: "What is the best mutation in Grow a Garden?",
    answer:
      "Aurelian Crown is the best mutation overall with a 4.0× multiplier and no seasonal or time restrictions. Its connected-plot harvest passive also eliminates manual replanting time on large farms.",
  },
  {
    question: "How do I get mutations in Grow a Garden?",
    answer:
      "Mutations are obtained by rolling with shards. Higher-tier mutations have lower roll rates — S-Tier mutations like Aurelian Crown have about a 1.2% roll rate. Some mutations like Leporine Bloom are exclusive to seasonal events.",
  },
  {
    question: "Do mutation multipliers stack with pet multipliers?",
    answer:
      "Yes, mutation and pet multipliers stack multiplicatively. For example, Aurelian Crown (4.0×) with Golden Phoenix Chick (5.0×) gives a total 20.0× multiplier on crop harvests.",
  },
  {
    question: "Should I keep B-Tier mutations or reroll?",
    answer:
      "B-Tier mutations like Pyroclast Husk (2.2×) and Hoarfrost Corolla (2.5× in Winter) are solid for secondary plots. Reroll your main plot for S/A-Tier, but keep B-Tier on secondary plots until you get better rolls.",
  },
];

export default function MutationsDatabasePage() {
  return (
    <ContentLayout
      title="Grow a Garden Mutations Database"
      description="Complete database of every mutation in Grow a Garden — multiplier, tier, roll rate, and passives at a glance. Click any mutation for the full breakdown."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Mutations Database", href: "/grow-a-garden/mutations" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/mutations"
      updatedAt="July 19, 2026"
    >
      {/* Mutation Tables by Tier */}
      <section aria-labelledby="mutations-heading">
        <h2 id="mutations-heading" className="font-heading text-[24px] font-semibold text-white lg:text-[28px] mb-6">
          🧬 All Mutations by Tier
        </h2>

        {tierOrder.map((tier) => {
          const tierMutations = getMutationsByTier(tier);
          return (
            <div key={tier} className="mb-8">
              <h3 className="font-heading text-[18px] font-semibold text-white mb-3">
                {tierHeadings[tier]}
              </h3>
              <div className="overflow-hidden rounded-xl border border-[#252936]">
                <div className="grid grid-cols-[1fr_80px_50px_80px] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
                  <span className="text-xs font-semibold text-[#768294]">NAME</span>
                  <span className="text-xs font-semibold text-[#768294]">MULTI</span>
                  <span className="text-xs font-semibold text-[#768294]">TIER</span>
                  <span className="text-xs font-semibold text-[#768294]">ROLL RATE</span>
                </div>
                {tierMutations.map((mutation) => (
                  <div
                    key={mutation.id}
                    className="grid grid-cols-[1fr_80px_50px_80px] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition"
                  >
                    <Link
                      href={`/grow-a-garden/mutations/${mutation.id}`}
                      className="text-sm font-semibold text-[#BAC4D1] hover:text-[#00E676] transition"
                    >
                      {mutation.name}
                    </Link>
                    <span className="text-xs font-semibold text-[#00E676]">{mutation.multiplier}×</span>
                    <span className={`rounded px-1.5 py-0.5 text-xs font-semibold ${tierBadge[mutation.tier]}`}>
                      {mutation.tier}
                    </span>
                    <span className="text-xs text-[#768294]">{mutation.rollRate}</span>
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
