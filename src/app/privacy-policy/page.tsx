import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for BloxPulse Grow a Garden guides, databases, and tools.",
  keywords: [
    "BloxPulse privacy policy",
    "Grow a Garden privacy",
    "AdSense privacy disclosure",
    "cookie policy",
    "third-party advertising",
  ],
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy",
    description:
      "Privacy policy for BloxPulse Grow a Garden guides, databases, and tools.",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <ContentLayout
      title="Privacy Policy"
      description="Privacy policy for BloxPulse Grow a Garden guides, databases, and tools."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ]}
      accent="garden"
      canonicalPath="/privacy-policy"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* Introduction */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          This Privacy Policy explains how BloxPulse (&quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;) collects, uses, and protects information when you visit
          growandrangers.xyz (the &quot;Site&quot;). By using the Site, you agree to the
          practices described below. This policy applies only to this website and
          not to any third-party services we may link to.
        </p>
      </section>

      {/* Information We Collect */}
      <section aria-labelledby="collect-heading">
        <h2
          id="collect-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📋 Information We Collect
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            BloxPulse is a static, read-only guide site. We do <strong>not</strong>{" "}
            require account registration and we do <strong>not</strong> ask you for
            personally identifiable information such as your name, email, address,
            or phone number.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">
            We may collect the following non-personal information automatically when
            you browse the Site:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              Anonymous analytics data (page views, browser type, device category,
              country, referral source).
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              Aggregate usage patterns used to improve content ordering and site
              structure.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              Standard server logs which may include IP address (used only for
              security and abuse prevention).
            </li>
          </ul>
          <p className="mt-3 text-xs leading-relaxed text-[#768294]">
            We do not sell, rent, or share non-personal aggregate data with any
            third party for direct marketing purposes.
          </p>
        </div>
      </section>

      {/* Cookies */}
      <section aria-labelledby="cookies-heading">
        <h2
          id="cookies-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🍪 Cookies and Similar Technologies
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            Cookies are small text files stored on your device by your browser. We
            use cookies and similar technologies for the following purposes:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <strong>Essential cookies</strong> — required for the website to
              function (e.g., remembering your menu state on mobile).
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <strong>Analytics cookies</strong> — used to understand how visitors
              interact with the site so we can improve content quality.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <strong>Advertising cookies</strong> — set by Google and other
              ad partners (see the AdSense section below).
            </li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">
            Most browsers allow you to refuse or delete cookies. Doing so will not
            prevent you from reading our guides, but may limit some interactive
            features such as the calculator tools.
          </p>
        </div>
      </section>

      {/* Google AdSense Disclosure */}
      <section aria-labelledby="adsense-heading">
        <h2
          id="adsense-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          💰 Google AdSense Advertising Disclosure
        </h2>
        <div className="rounded-xl border border-[#FF8C00]/30 bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            BloxPulse is monetized through Google AdSense. We display ads served by
            Google AdSense on this website. The following disclosures apply:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#FF8C00] shrink-0 mt-0.5">•</span>
              Google, as a third-party vendor, uses cookies to serve ads on this
              site based on your prior visits to this and other websites.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#FF8C00] shrink-0 mt-0.5">•</span>
              Google&apos;s use of advertising cookies enables it and its partners to
              serve ads to our users based on their visit to this site and/or other
              sites on the Internet.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#FF8C00] shrink-0 mt-0.5">•</span>
              Users may opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00E676] hover:underline"
              >
                Google Ads Settings
              </a>
              .
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#FF8C00] shrink-0 mt-0.5">•</span>
              Users may also opt out of third-party vendors&apos; use of cookies for
              personalized advertising by visiting{" "}
              <a
                href="https://www.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00E676] hover:underline"
              >
                www.aboutads.info
              </a>
              .
            </li>
          </ul>
          <p className="mt-3 text-xs leading-relaxed text-[#768294]">
            For more information about how Google uses data when you use our
            partner sites, see{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3A86FF] hover:underline"
            >
              Google&apos;s Privacy &amp; Terms
            </a>
            .
          </p>
        </div>
      </section>

      {/* Third-Party Advertising Partners */}
      <section aria-labelledby="partners-heading">
        <h2
          id="partners-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🤝 Third-Party Advertising Partners
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            We currently partner with Google AdSense as our advertising provider.
            Third-party vendors, including Google, may use cookies to serve ads
            based on a user&apos;s prior visits to this website or other websites.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">
            These third parties may use automated tools to collect non-personal
            information (such as IP address, browser type, and pages visited) for
            analytics and ad-serving purposes. This data is governed by the
            respective privacy policies of those providers.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-[#768294]">
            If we add additional advertising partners in the future, we will update
            this section accordingly.
          </p>
        </div>
      </section>

      {/* User Choices */}
      <section aria-labelledby="choices-heading">
        <h2
          id="choices-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ⚙️ Your Choices and Rights
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            You have several options for managing how your information is used on
            this site:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <strong>Manage cookies</strong> — Configure your browser to accept,
              block, or delete cookies. See your browser&apos;s help documentation
              for instructions.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <strong>Opt out of personalized ads</strong> — Visit{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00E676] hover:underline"
              >
                Google Ads Settings
              </a>{" "}
              to opt out of interest-based advertising.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <strong>Use private browsing</strong> — Incognito or private mode
              limits cookies set during your session.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <strong>Request data correction</strong> — If you believe any
              user-submitted content (such as a code submission) is inaccurate,
              contact us via our{" "}
              <Link
                href="/contact"
                className="text-[#00E676] hover:underline"
              >
                Contact page
              </Link>
              .
            </li>
          </ul>
        </div>
      </section>

      {/* Data Security */}
      <section aria-labelledby="security-heading">
        <h2
          id="security-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🔒 Data Security
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            We take reasonable technical and organizational measures to protect
            any information collected against unauthorized access, alteration, or
            disclosure. Because BloxPulse is a static site that does not collect or
            store sensitive personal data, the risk of a meaningful data breach is
            minimal. We do not store payment card information, passwords, or any
            other sensitive identifiers on our servers.
          </p>
        </div>
      </section>

      {/* Children&apos;s Privacy */}
      <section aria-labelledby="children-heading">
        <h2
          id="children-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          👨‍👩‍👧 Children&apos;s Privacy
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            BloxPulse covers Roblox games which are popular with younger audiences,
            but we do not knowingly collect personal information from children
            under 13. If you are a parent or guardian and believe your child has
            provided us with personal information, please contact us and we will
            promptly delete such data. We do not direct any marketing
            communications to children.
          </p>
        </div>
      </section>

      {/* Changes to This Policy */}
      <section aria-labelledby="changes-heading">
        <h2
          id="changes-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📝 Changes to This Privacy Policy
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            We may update this Privacy Policy from time to time to reflect changes
            in our practices or for legal, operational, or regulatory reasons. When
            we do, we will revise the &quot;Last updated&quot; date at the bottom of
            this page. We encourage you to review this page periodically to stay
            informed about how we protect your information.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section aria-labelledby="contact-heading">
        <h2
          id="contact-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ✉️ Contact Information
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            If you have any questions, concerns, or requests regarding this Privacy
            Policy or the handling of your information, please contact us through
            our{" "}
            <Link href="/contact" className="text-[#00E676] hover:underline">
              Contact page
            </Link>
            . We aim to respond to all legitimate privacy inquiries within 5
            business days.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-[#768294]">
            For takedown requests related to copyrighted material, see the
            disclaimer in our site footer.
          </p>
        </div>
      </section>
    </ContentLayout>
  );
}
