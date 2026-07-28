import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import ValueCalculator from "@/components/ValueCalculator";

export const metadata: Metadata = {
  title: "Grow a Garden Value Calculator — Crop Coin Value Estimator (June 2026)",
  description:
    "Free Grow a Garden value calculator. Select a crop, enter its weight, and choose a mutation to instantly estimate the sell value, multiplier, crop tier, and value ranking.",
  keywords: [
    "Grow a Garden value calculator",
    "Grow a Garden crop calculator",
    "Grow a Garden coin estimator",
    "crop value calculator Grow a Garden",
    "mutation multiplier calculator",
    "Grow a Garden profit calculator",
    "crop weight value Grow a Garden",
  ],
  alternates: { canonical: "/grow-a-garden/value-calculator" },
  openGraph: {
    title: "Grow a Garden Value Calculator — Coin Estimator",
    description:
      "Instantly estimate crop sell values with any mutation multiplier. Pick a crop, enter weight, and see the coin value, tier, and ranking.",
    type: "website",
  },
};

const faqs = [
  {
    question: "How does the Grow a Garden value calculator work?",
    answer:
      "The calculator multiplies the crop's base coin value by the weight you enter and the mutation multiplier. The formula is: base coins × weight × mutation multiplier = estimated sell value. For example, Golden Wheat (480 coins) at 1.0 kg with Aurelian Crown (4.0×) equals 1,920 coins.",
  },
  {
    question: "What is crop weight and how do I find it?",
    answer:
      "Crop weight is a stat shown on each harvested crop in your inventory. Heavier crops sell for more — a 2.0 kg Golden Wheat is worth twice as much as a 1.0 kg one. The weight stat is randomized at harvest time, with larger weights being rarer.",
  },
  {
    question: "Do pet multipliers stack with the calculated value?",
    answer:
      "Yes. Pet multipliers stack multiplicatively with mutation multipliers. To estimate the full stacked value, multiply the calculator result by your pet's multiplier. For example, a 1,920 coin result with a Golden Phoenix Chick (5.0×) would sell for 9,600 coins.",
  },
  {
    question: "What does the value ranking mean?",
    answer:
      "The ranking shows how your selected crop compares to all other crops when using the same mutation. A rank of #1 means your crop produces the highest coin value among all crops with that mutation. The S/A/B/C ranking tier is based on percentile: top 5% = S, top 20% = A, top 50% = B, and below = C.",
  },
  {
    question: "Are conditional mutation bonuses included in the calculation?",
    answer:
      "The base calculation uses the mutation's standard multiplier. Conditional bonuses (like Hoarfrost Corolla's Winter bonus) are shown separately in the results. To calculate with the conditional bonus, manually multiply the result by the bonus multiplier during the active condition.",
  },
  {
    question: "How accurate are the crop base values?",
    answer:
      "All crop base values are pulled directly from our canonical Grow a Garden database, which is verified against in-game data and updated regularly. Values reflect the June 2026 game state. If a recent update changed a value, check the Crop Value List for the latest figures.",
  },
];

export default function ValueCalculatorPage() {
  return (
    <ContentLayout
      title="Grow a Garden Value Calculator"
      description="Instantly estimate the sell value of any crop with any mutation. Pick a crop, enter its weight, select a mutation, and see the estimated coin value, multiplier, crop tier, and value ranking."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden", href: "/grow-a-garden" },
        { label: "Value Calculator", href: "/grow-a-garden/value-calculator" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden/value-calculator"
      updatedAt="July 19, 2026"
    >
      {/* Intro */}
      <section
        aria-labelledby="intro-heading"
        className="rounded-xl border border-[#00E676]/20 bg-[#00E676]/5 p-4"
      >
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          <strong className="text-white">How to use:</strong> Select a crop from the database, enter
          its weight in kilograms, and choose a mutation. The calculator instantly shows the estimated
          coin value, mutation multiplier, crop tier, and where the crop ranks among all crops with that
          mutation. All values come from our canonical crop and mutation databases.
        </p>
      </section>

      {/* Interactive Calculator */}
      <ValueCalculator />

      {/* Related Content */}
      <RelatedContent
        category="guide"
        game="garden"
        currentPath="/grow-a-garden/value-calculator"
      />

      {/* FAQ */}
      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
