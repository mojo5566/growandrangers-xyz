import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import { crops } from "@/data/garden/database/crops";
import { mutations } from "@/data/garden/database/mutations";
import { trading } from "@/data/garden/database/trading";
import { pets } from "@/data/garden/database/pets";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Grow a Garden Calculators — Reference Tools",
  description:
    "Free Grow a Garden reference tools for comparing recorded crop, mutation, pet, and trading fields with simple mathematical formulas.",
  keywords: [
    "Grow a Garden calculator",
    "Grow a Garden reference calculator",
    "crop value calculator Grow a Garden",
    "mutation calculator Grow a Garden",
    "trading comparison calculator",
    "Grow a Garden multiplier calculator",
  ],
  alternates: { canonical: "/grow-a-garden/calculators" },
  openGraph: {
    title: "Grow a Garden Calculators — Reference Tools",
    description:
      "Free Grow a Garden reference tools for comparing recorded fields and simple mathematical relationships.",
    type: "website",
  },
};

const calculatorCards = [
  {
    title: "Crop Value Calculator",
    description:
      "Compare recorded crop and mutation fields with the project’s documented formulas. See base values, multipliers, and calculated reference results.",
    href: "/grow-a-garden/crop-value-calculator",
    icon: "🌾",
    accent: "#00E676",
    stat: `${crops.length} crops × ${mutations.length} mutations`,
  },
  {
    title: "Mutation Profit Calculator",
    description:
      "Compare recorded mutation multipliers and calculated reference results against a baseline crop value.",
    href: "/grow-a-garden/mutation-calculator",
    icon: "✨",
    accent: "#FF8C00",
    stat: `${mutations.length} mutations ranked`,
  },
  {
    title: "Trading Record Calculator",
    description:
      "Compare recorded trading fields by category, rarity, demand, and trend. These are project reference labels, not live prices.",
    href: "/grow-a-garden/trading-calculator",
    icon: "💱",
    accent: "#FFD700",
    stat: `${trading.length} recorded item entries`,
  },
  {
    title: "Pet Value Calculator",
    description:
      "Compare recorded pet multipliers and project reference labels such as tier, rarity, demand, and trend.",
    href: "/grow-a-garden/pet-value-calculator",
    icon: "🐾",
    accent: "#3A86FF",
    stat: `${pets.length} pets ranked`,
  },
];

const faqs = [
  {
    question: "How do Grow a Garden calculators work?",
    answer:
      "Each tool reads recorded fields from the project databases and applies simple formulas where appropriate. Crop and mutation tools show mathematical comparisons using base values and multipliers; trading and pet tools organize recorded labels rather than reporting live or verified prices.",
  },
  {
    question: "Are Grow a Garden calculator values accurate?",
    answer:
      "The displayed inputs are project-recorded values and labels, not a live or independently verified feed. Game updates can change mechanics or values, so confirm current details in the game or official announcements.",
  },
  {
    question: "Do pet multipliers stack with mutation multipliers?",
    answer:
      "The tools can show multiplication between recorded pet and mutation multipliers when the relevant calculator supports it. Treat the result as a mathematical reference, and confirm the current stacking rules in the game or official announcements.",
  },
  {
    question: "Which calculator should I use first?",
    answer:
      "Start with the tool that matches the fields you want to compare. Crop and mutation tools explain recorded base values and multipliers; trading and pet tools help you review project labels without making a market or transaction recommendation.",
  },
  {
    question: "Why are some crops worth more than others at the same tier?",
    answer:
      "The project records crop fields such as base coin value, growth time, tier, and season. A comparison between those fields is not a complete gameplay rule or earnings forecast; check current crop mechanics in the game or official announcements.",
  },
  {
    question: "How often are calculator values updated?",
    answer:
      "The tools change when their underlying project records change. The displayed date identifies the project content review, not a market sampling time or guarantee of current game state. Recheck important details after patches and events.",
  },
];

export default function CalculatorsHubPage() {
  return (
    <ContentLayout
      title="Grow a Garden Calculators"
      description="Free Grow a Garden reference tools for comparing recorded crop, mutation, pet, and trading fields with simple mathematical formulas."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Calculators", href: "/grow-a-garden/calculators" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/calculators"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Hero Intro */}
      <section className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          Review Grow a Garden records with simple mathematical references. The tools below organize
          crop, mutation, pet, and trading fields from the project databases. Results are rendered at
          build time for quick lookup; confirm current mechanics and availability in the game or
          official announcements.
        </p>
      </section>

      {/* Calculator Cards */}
      <section aria-labelledby="calc-heading">
        <h2
          id="calc-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🧮 Choose a Calculator
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {calculatorCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-xl border border-[#252936] bg-[#14161D] p-5 transition hover:border-[#00E676]"
              style={{ borderColor: "transparent" }}
            >
              <div
                className="flex items-center gap-3 mb-3 pb-3 border-b"
                style={{ borderColor: card.accent + "33" }}
              >
                <span className="text-2xl" aria-hidden>
                  {card.icon}
                </span>
                <div className="flex-1">
                  <h3
                    className="text-base font-semibold transition group-hover:text-[#00E676]"
                    style={{ color: card.accent }}
                  >
                    {card.title} →
                  </h3>
                  <span className="code-text text-xs" style={{ color: card.accent }}>
                    {card.stat}
                  </span>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-[#768294]">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* How Calculators Work */}
      <section aria-labelledby="how-heading">
        <h2
          id="how-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⚙️ How Calculators Work
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">1. Source Data</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Values and labels come from the project databases for crops, mutations, pets, and
              trading items. They are editorial records, not a live or independently verified feed.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">2. Pre-Compute</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Calculations run at build time. Crop and mutation comparisons use the recorded inputs
              and documented formulas, then render as static HTML for quick lookup.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">3. Stack Multipliers</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Where supported, a result can be expressed as base × mutation × pet. This is a
              mathematical reference, not a guarantee of how current game mechanics stack.
            </p>
          </div>
          <div className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
            <h3 className="text-sm font-semibold text-[#00E676] mb-2">4. Review Recorded Labels</h3>
            <p className="text-xs text-[#768294] leading-relaxed">
              Use the trading calculator to review recorded category, rarity, demand, and trend
              labels. It does not determine a fair price or recommend a transaction.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section aria-labelledby="stats-heading">
        <h2
          id="stats-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📊 Database Coverage
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-4 text-center">
            <div className="text-2xl font-bold text-[#00E676]">{crops.length}</div>
            <div className="text-xs text-[#768294] mt-1">Crops Recorded</div>
          </div>
          <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-4 text-center">
            <div className="text-2xl font-bold text-[#FF8C00]">{mutations.length}</div>
            <div className="text-xs text-[#768294] mt-1">Mutations Recorded</div>
          </div>
          <div className="rounded-xl border border-[#3A86FF]/30 bg-[#14161D] p-4 text-center">
            <div className="text-2xl font-bold text-[#3A86FF]">{pets.length}</div>
            <div className="text-xs text-[#768294] mt-1">Pets Recorded</div>
          </div>
          <div className="rounded-xl border border-[#FFD700]/30 bg-[#14161D] p-4 text-center">
            <div className="text-2xl font-bold text-[#FFD700]">{trading.length}</div>
            <div className="text-xs text-[#768294] mt-1">Trading Records</div>
          </div>
        </div>
      </section>

      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/calculators" />

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
