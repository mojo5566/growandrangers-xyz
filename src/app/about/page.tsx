import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import { CONTENT_UPDATED_AT } from "@/lib/content-dates";

export const metadata: Metadata = {
  title: "About BloxPulse",
  description:
    "About BloxPulse: purpose of our Grow a Garden database, how content is researched, the update process, and our editorial standards.",
  keywords: [
    "about BloxPulse",
    "Grow a Garden database",
    "editorial standards",
    "content methodology",
    "Roblox guide site",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About BloxPulse",
    description:
      "Purpose of our Grow a Garden database, how content is researched, the update process, and our editorial standards.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <ContentLayout
      title="About BloxPulse"
      description="About BloxPulse: purpose of our Grow a Garden database, how content is researched, the update process, and our editorial standards."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
      ]}
      accent="garden"
      canonicalPath="/about"
      updatedAt={CONTENT_UPDATED_AT}
    >
      {/* What is BloxPulse */}
      <section aria-labelledby="what-heading">
        <h2
          id="what-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📰 What BloxPulse Is
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            BloxPulse is a fan-made, read-only guide site dedicated to Roblox
            games — primarily <strong>Grow a Garden</strong> and{" "}
            <strong>Anime Rangers X</strong>. Our mission is to give the Roblox
            community a fast, reliable, and ad-supported reference for working
            promo codes, item databases, tier rankings, value calculators, and
            in-depth gameplay guides.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">
            We publish at{" "}
            <a
              href="https://growandrangers.xyz"
              className="text-[#00E676] hover:underline"
            >
              growandrangers.xyz
            </a>{" "}
            and serve hundreds of static pages covering crops, seeds, pets,
            mutations, eggs, codes, updates, trading values, and events. Every
            page is prerendered at build time so the site loads instantly on any
            device.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-[#768294]">
            BloxPulse is an independent fan project. We are not affiliated with,
            endorsed by, or sponsored by Roblox Corporation or any game developer
            mentioned on this site.
          </p>
        </div>
      </section>

      {/* Purpose of the Database */}
      <section aria-labelledby="purpose-heading">
        <h2
          id="purpose-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🎯 Purpose of the Grow a Garden Database
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            The Grow a Garden database was created to solve three problems that
            players face every day:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <strong>Scattered information</strong> — Crop values, mutation
              multipliers, and pet stats are spread across wikis, YouTube videos,
              and Discord servers. We consolidate them into a single, searchable
              source of truth.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <strong>Outdated codes</strong> — Most code lists online still
              feature expired codes from 2025. We verify every code against the
              game and clearly mark each as Active or Expired.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <strong>No clear trading values</strong> — Players get scammed
              without a trusted reference. Our{" "}
              <Link
                href="/grow-a-garden/trading"
                className="text-[#00E676] hover:underline"
              >
                trading database
              </Link>{" "}
              tracks rarity, demand, and value trends for 50 in-game items.
            </li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">
            Beyond raw data, we build tools that act on it — for example, our{" "}
            <Link
              href="/grow-a-garden/value-calculator"
              className="text-[#00E676] hover:underline"
            >
              Value Calculator
            </Link>{" "}
            computes total harvest value using real crop, mutation, and pet
            multipliers from our databases.
          </p>
        </div>
      </section>

      {/* How Content Is Researched */}
      <section aria-labelledby="research-heading">
        <h2
          id="research-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🔍 How Content Is Researched
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            Every database entry and guide is researched through a multi-step
            verification process before it is published:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">1.</span>
              <strong>In-game verification</strong> — Stats such as crop coin
              values, mutation multipliers, and pet abilities are checked by
              playing the current version of the game.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">2.</span>
              <strong>Official source cross-check</strong> — Patch notes, official
              Roblox game descriptions, and developer announcements are reviewed
              for each major update.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">3.</span>
              <strong>Community signal</strong> — We monitor community-reported
              stats (Discord, subreddit, wiki edit history) for discrepancies and
              re-verify anything that conflicts with our data.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">4.</span>
              <strong>Math sanity check</strong> — Profit examples in our guides
              are computed directly from the canonical database values, not
              estimated.
            </li>
          </ul>
          <p className="mt-3 text-xs leading-relaxed text-[#768294]">
            If you spot a stat that disagrees with the current game version,
            please report it on our{" "}
            <Link href="/contact" className="text-[#00E676] hover:underline">
              Contact page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Database Update Process */}
      <section aria-labelledby="update-heading">
        <h2
          id="update-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🔄 Database Update Process
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            Our databases live in version-controlled TypeScript files under{" "}
            <code className="rounded bg-[#1E212B] px-1.5 py-0.5 text-xs text-[#00E676] font-mono">
              src/data/garden/database/
            </code>
            . Each entity (pet, seed, crop, mutation, code, update, trading value,
            event) has a single canonical source file. Every page on the site
            imports from these files — there is no copy-pasted data.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#BAC4D1]">
            The update cadence is:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <strong>Daily</strong> — Codes page and trading values are reviewed
              for changes; the homepage and game hubs are rebuilt with the latest
              date stamp.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <strong>Weekly</strong> — Tier lists, calculators, and guide pages
              are re-verified for balance changes.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">•</span>
              <strong>Per game update</strong> — Whenever the game ships a patch
              (e.g., the Zen Update), new crops, mutations, pets, and codes are
              added within 48 hours.
            </li>
          </ul>
          <p className="mt-3 text-xs leading-relaxed text-[#768294]">
            Each entry carries an <code className="text-[#00E676]">updatedAt</code>{" "}
            field that flows through to the sitemap and the visible &quot;Last
            updated&quot; trust signal on every page.
          </p>
        </div>
      </section>

      {/* Editorial Standards */}
      <section aria-labelledby="editorial-heading">
        <h2
          id="editorial-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          📐 Editorial Standards
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            We hold every page to the following editorial standards:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">✅</span>
              <strong>Original content</strong> — All guides are written from
              scratch by the BloxPulse editorial team. We do not republish wiki
              text or YouTube transcripts.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">✅</span>
              <strong>Real numbers, not estimates</strong> — Coin values,
              multipliers, and prices are pulled directly from the canonical
              databases, never invented for narrative convenience.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">✅</span>
              <strong>Minimum content depth</strong> — Every guide article is at
              least 1,500 words with proper H2/H3 hierarchy, internal links to
              databases, and at least 5 frequently asked questions.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">✅</span>
              <strong>No fake codes</strong> — Codes are clearly marked Active or
              Expired. We never publish placeholder codes to inflate the count.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">✅</span>
              <strong>Structured data on every page</strong> — Breadcrumb, Article,
              and FAQPage JSON-LD schemas are emitted automatically so search
              engines can validate our content.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#00E676] shrink-0 mt-0.5">✅</span>
              <strong>Clear disclaimers</strong> — Every page footer reminds
              readers that BloxPulse is a fan-made resource and is not affiliated
              with Roblox Corporation.
            </li>
          </ul>
        </div>
      </section>

      {/* What We Do Not Do */}
      <section aria-labelledby="notdo-heading">
        <h2
          id="notdo-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          🚫 What We Do Not Do
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            To set clear expectations, here is what BloxPulse will never publish:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#FF3D00] shrink-0 mt-0.5">✗</span>
              Exploit tutorials, hack instructions, or any content that violates
              the Roblox Terms of Service.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#FF3D00] shrink-0 mt-0.5">✗</span>
              Leaked unreleased content presented as confirmed.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#FF3D00] shrink-0 mt-0.5">✗</span>
              Paid placement disguised as editorial recommendations.
            </li>
            <li className="flex items-start gap-2 text-sm text-[#BAC4D1]">
              <span className="text-[#FF3D00] shrink-0 mt-0.5">✗</span>
              AI-generated low-quality filler that exists only to game search
              rankings.
            </li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section aria-labelledby="contact-heading">
        <h2
          id="contact-heading"
          className="mb-4 font-heading text-[24px] font-semibold text-white lg:text-[28px]"
        >
          ✉️ Get in Touch
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <p className="text-sm leading-relaxed text-[#BAC4D1]">
            Questions, corrections, or partnership ideas are welcome on our{" "}
            <Link href="/contact" className="text-[#00E676] hover:underline">
              Contact page
            </Link>
            . For privacy concerns, see our{" "}
            <Link href="/privacy-policy" className="text-[#00E676] hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>
    </ContentLayout>
  );
}
