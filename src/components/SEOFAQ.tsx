"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I redeem item reward promo codes inside Roblox games?",
    answer:
      "To redeem codes, launch the target game in Roblox, locate the Twitter/Bird or Codes button on the side interface menu, paste the code text string, and hit submit to verify.",
  },
  {
    question: "How often are Grow a Garden promo codes updated?",
    answer:
      "New codes are typically released alongside major game updates, seasonal events (Easter, Summer, Halloween, Winter), and when the game reaches milestone like 100M visits. We verify and update our code list daily.",
  },
  {
    question: "What are the best traits to roll for in Anime Rangers X?",
    answer:
      "The current meta favors Unique-tier traits like Time Rewind, God-Speed, and Monarch. For farming, prioritize Drop Rate and Cooldown Reduction. Our tier list table ranks all traits with their optimal unit pairings.",
  },
  {
    question: "Where can I find the latest Grow a Garden mutation tier list?",
    answer:
      "Our mutation tier list (v2.1) is maintained in the Grow a Garden hub section above. It ranks all mutations by rarity tier, crop value multiplier, and pet synergy — updated every patch cycle.",
  },
  {
    question: "Do you cover other Roblox games beyond Grow a Garden and Anime Rangers X?",
    answer:
      "Currently our deep-dive hub coverage focuses on Grow a Garden and Anime Rangers X. We are actively expanding our coverage — bookmark us and check back for new game hubs launching soon.",
  },
];

function FAQJsonLd({ items }: { items: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function SEOFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="mx-auto max-w-[1200px] px-4 py-12 lg:px-6 lg:py-16"
      aria-labelledby="faq-heading"
    >
      <FAQJsonLd items={faqs} />

      <h2
        id="faq-heading"
        className="mb-8 font-heading text-[24px] font-semibold text-white lg:text-[32px]"
      >
        📖 Frequently Asked Questions
      </h2>

      <div className="rounded-xl border border-[#252936] divide-y divide-[#252936] overflow-hidden">
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-[#1E212B]"
              aria-expanded={openIndex === i}
            >
              <span className="text-sm font-semibold text-[#BAC4D1] pr-4">
                {faq.question}
              </span>
              <span
                className={`text-[#768294] transition-transform shrink-0 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                ▼
              </span>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-4">
                <p className="text-sm leading-relaxed text-[#768294]">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
