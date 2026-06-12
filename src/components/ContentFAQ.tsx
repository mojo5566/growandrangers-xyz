"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface ContentFAQProps {
  faqs: FAQItem[];
}

function FAQJsonLd({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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

export default function ContentFAQ({ faqs }: ContentFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section aria-labelledby="page-faq-heading">
      <FAQJsonLd faqs={faqs} />

      <h2
        id="page-faq-heading"
        className="mb-4 font-heading text-[20px] font-semibold text-white lg:text-[24px]"
      >
        📖 Frequently Asked Questions
      </h2>

      <div className="rounded-xl border border-[#252936] divide-y divide-[#252936] overflow-hidden">
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between px-4 py-3 text-left transition hover:bg-[#1E212B]"
              aria-expanded={openIndex === i}
            >
              <span className="text-sm font-semibold text-[#BAC4D1] pr-4">
                {faq.question}
              </span>
              <span
                className={`text-[#768294] transition-transform shrink-0 ${openIndex === i ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                ▼
              </span>
            </button>
            {openIndex === i && (
              <div className="px-4 pb-3">
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
