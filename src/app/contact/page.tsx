import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Contact BloxPulse",
  description:
    "Contact BloxPulse for copyright questions, data correction requests, partnership inquiries, and general feedback about Grow a Garden guides.",
  keywords: [
    "contact BloxPulse",
    "Grow a Garden feedback",
    "data correction request",
    "copyright question",
    "partnership inquiry",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact BloxPulse",
    description:
      "Contact BloxPulse for copyright questions, data correction requests, partnership inquiries, and general feedback.",
    type: "website",
  },
};

const CONTACT_EMAIL = "contact@growandrangers.xyz";

export default function ContactPage() {
  return (
    <ContentLayout
      title="Contact BloxPulse"
      description="Contact BloxPulse for copyright questions, data correction requests, partnership inquiries, and general feedback about Grow a Garden guides."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Contact", href: "/contact" },
      ]}
      accent="garden"
      canonicalPath="/contact"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Introduction */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          We welcome feedback, corrections, and questions from the Roblox
          community. Whether you spotted a stale trading value, found a typo in a
          guide, or want to collaborate, this page tells you exactly how to reach
          us and what to expect.
        </p>
      </section>

      {/* Contact Email */}
      <section aria-labelledby="email-heading">
        <h2
          id="email-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ✉️ Contact Email
        </h2>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            For all inquiries, please email us at:
          </p>
          <div className="mt-3 rounded-lg bg-[#1E212B] p-3 border border-[#252936]">
            <code className="text-sm text-[#00E676] font-mono break-all">
              {CONTACT_EMAIL}
            </code>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-[#768294]">
            To help us triage your message quickly, please include the page URL
            you are writing about and a clear subject line (e.g.,{" "}
            <em>&quot;Correction: Golden Wheat coin value&quot;</em>).
          </p>
          <p className="mt-3 text-xs leading-relaxed text-[#768294]">
            <strong>Response time:</strong> We aim to reply within 3 business days
            for corrections and 5 business days for general inquiries. Partnership
            inquiries may take up to 10 business days.
          </p>
        </div>
      </section>

      {/* Copyright Questions */}
      <section aria-labelledby="copyright-heading">
        <h2
          id="copyright-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ©️ Copyright Questions
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            BloxPulse respects intellectual property. If you believe that any
            content on this site infringes your copyright or the copyright of
            someone you represent, please send a notice that includes:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              A physical or electronic signature of the copyright owner or an
              authorized agent.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              Identification of the copyrighted work you claim has been infringed.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              The exact URL on growandrangers.xyz where the allegedly infringing
              material is located.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              Your contact information (name, email, and phone number).
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              A statement that you have a good-faith belief that the use is not
              authorized, and a statement under penalty of perjury that the
              information in your notice is accurate.
            </li>
          </ul>
          <p className="mt-3 text-xs leading-relaxed text-[#768294]">
            We will review valid takedown notices within 1 business day of
            receipt and remove the disputed material promptly.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">
            Please also see our site-wide disclaimer in the footer: BloxPulse is a
            fan-made resource and is not affiliated with Roblox Corporation. All
            game names and assets belong to their respective developers.
          </p>
        </div>
      </section>

      {/* Data Correction Requests */}
      <section aria-labelledby="correction-heading">
        <h2
          id="correction-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🔧 Data Correction Requests
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            We verify every database entry against the live game, but balance
            updates happen fast. If you spot a stat that disagrees with the
            current game version, we want to know. Common correction topics:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <strong>Crop coin values</strong> — e.g., a crop&apos;s base coins
              changed in a recent patch. See our{" "}
              <Link
                href="/grow-a-garden/crops"
                className="text-[#00E676] hover:underline"
              >
                Crops Database
              </Link>
              .
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <strong>Mutation multipliers</strong> — e.g., a mutation&apos;s
              multiplier was rebalanced. See our{" "}
              <Link
                href="/grow-a-garden/mutations"
                className="text-[#00E676] hover:underline"
              >
                Mutations Database
              </Link>
              .
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <strong>Pet stats</strong> — e.g., a pet&apos;s multiplier or tier
              changed. See our{" "}
              <Link
                href="/grow-a-garden/pets"
                className="text-[#00E676] hover:underline"
              >
                Pets Database
              </Link>
              .
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <strong>Code status</strong> — e.g., a code marked Active has
              actually expired. See our{" "}
              <Link
                href="/grow-a-garden/codes"
                className="text-[#00E676] hover:underline"
              >
                Codes page
              </Link>
              .
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <strong>Trading values</strong> — e.g., a trade value has shifted
              significantly. See our{" "}
              <Link
                href="/grow-a-garden/trading"
                className="text-[#00E676] hover:underline"
              >
                Trading Database
              </Link>
              .
            </li>
          </ul>
          <p className="mt-3 text-xs leading-relaxed text-[#768294]">
            When reporting a correction, please include the entity name, the
            current value on our site, the corrected value, and ideally a
            screenshot from the game. We re-verify every correction before
            publishing.
          </p>
        </div>
      </section>

      {/* Partnership Inquiries */}
      <section aria-labelledby="partnership-heading">
        <h2
          id="partnership-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🤝 Partnership Inquiries
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            We are open to partnerships that benefit the Roblox community.
            Examples of partnerships we consider:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <strong>Content collaborations</strong> with other Roblox guide
              sites, YouTubers, or community creators.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <strong>Tool integrations</strong> — fan-made calculators, browser
              extensions, or companion apps that want to use our open data
              patterns.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <strong>Community contributions</strong> — experienced players who
              want to help verify stats or contribute guide content.
            </li>
          </ul>
          <p className="mt-3 text-xs leading-relaxed text-[#768294]">
            Please note: we do not accept paid placements in our tier lists,
            trading values, or guide content. Any sponsored content (if accepted)
            will be clearly disclosed.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">
            For partnership inquiries, please email us with the subject line{" "}
            <em>&quot;Partnership Inquiry&quot;</em> and include a brief
            description of your proposal, your audience or platform, and what you
            hope to achieve.
          </p>
        </div>
      </section>

      {/* General Feedback */}
      <section aria-labelledby="feedback-heading">
        <h2
          id="feedback-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          💬 General Feedback
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            Suggestions for new guides, calculators, or database entities are
            welcome. We prioritize requests that benefit the broadest segment of
            the community. Examples of feedback we act on:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              New calculator ideas (e.g., a seed ROI calculator).
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              Missing crops, mutations, or pets in our databases.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              UI/UX improvements (accessibility, mobile layout, readability).
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              Bug reports (broken links, rendering issues, schema errors).
            </li>
          </ul>
        </div>
      </section>

      {/* What Happens Next */}
      <section aria-labelledby="next-heading">
        <h2
          id="next-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⏭️ What Happens Next
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            Once we receive your message, here is what you can expect:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">1.</span>
              We acknowledge receipt within 1 business day.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">2.</span>
              For corrections, we re-verify the reported stat in-game and publish
              an update if needed.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">3.</span>
              For copyright notices, we remove disputed material within 1
              business day of validating the notice.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">4.</span>
              For partnerships, we schedule a follow-up call or email thread to
              scope the collaboration.
            </li>
          </ul>
        </div>
      </section>

      {/* Related Links */}
      <section aria-labelledby="related-heading">
        <h2
          id="related-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🔗 Related Pages
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <ul className="space-y-2">
            <li className="text-sm">
              <Link
                href="/about"
                className="text-[#00E676] hover:underline"
              >
                About BloxPulse
              </Link>{" "}
              <span className="text-[#768294]">— our mission and editorial standards</span>
            </li>
            <li className="text-sm">
              <Link
                href="/privacy-policy"
                className="text-[#00E676] hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              <span className="text-[#768294]">— how we handle data and cookies</span>
            </li>
          </ul>
        </div>
      </section>
    </ContentLayout>
  );
}
