import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import RelatedContent from "@/components/RelatedContent";
import beginnerFarming from "@/data/garden/beginner-farming";

export const metadata: Metadata = {
  title: "Beginner Farming — Grow a Garden",
  description: beginnerFarming.description,
  keywords: [
    "Grow a Garden beginner guide",
    "farming guide June 2026",
    "how to start Grow a Garden",
    "beginner tips",
    "first day farming",
  ],
  alternates: { canonical: "/grow-a-garden/beginner-farming/" },
  openGraph: {
    title: "Beginner Farming — Grow a Garden",
    description: beginnerFarming.description,
    type: "website",
  },
};

export default function BeginnerFarmingPage() {
  return (
    <ContentLayout
      title={beginnerFarming.title}
      description={beginnerFarming.description}
      breadcrumbs={beginnerFarming.breadcrumbs}
      accent="garden"
      canonicalPath="/grow-a-garden/beginner-farming/"
      updatedAt={beginnerFarming.updatedAt}
    >
      {/* Introduction */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <p className="text-sm text-[#BAC4D1] leading-relaxed">{beginnerFarming.intro}</p>
      </section>

      {/* Step-by-Step Guide */}
      <section aria-labelledby="steps-heading">
        <h2 id="steps-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          📋 Step-by-Step Progression
        </h2>
        <div className="space-y-4">
          {beginnerFarming.steps.map((step) => (
            <div key={step.step} className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
              <div className="flex items-start gap-3">
                <span
                  className="code-text inline-flex shrink-0 items-center justify-center rounded-md w-7 h-7 text-sm font-bold"
                  style={{ color: "#00E676", backgroundColor: "rgba(0,230,118,0.12)" }}
                >
                  {step.step}
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#BAC4D1] leading-relaxed">{step.description}</p>
                  <p className="mt-2 text-xs text-[#768294] italic">{step.tip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* First Day Goals */}
      <section aria-labelledby="goals-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="goals-heading" className="font-heading text-[20px] font-semibold text-white mb-3">
          🎯 First Day Goals
        </h2>
        <ul className="space-y-2">
          {beginnerFarming.firstDayGoals.map((goal, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">✅</span>
              {goal}
            </li>
          ))}
        </ul>
      </section>

      {/* Common Mistakes */}
      <section aria-labelledby="mistakes-heading" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="mistakes-heading" className="font-heading text-[20px] font-semibold text-white mb-3">
          ⚠️ Common Beginner Mistakes
        </h2>
        <div className="space-y-3">
          {beginnerFarming.mistakes.map((mistake, i) => (
            <div key={i} className="border-l-2 border-[#FF3D00] pl-4">
              <h3 className="text-sm font-semibold text-[#BAC4D1]">{mistake.title}</h3>
              <p className="mt-1 text-xs text-[#768294]">{mistake.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <RelatedContent category="guide" game="garden" currentPath="/grow-a-garden/beginner-farming/" />

      <ContentFAQ faqs={beginnerFarming.faq} />
    </ContentLayout>
  );
}
