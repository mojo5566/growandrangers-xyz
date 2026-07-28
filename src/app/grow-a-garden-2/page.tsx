import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";

export const metadata: Metadata = {
  title: "Grow a Garden 2 — Codes & Guides",
  description: "Complete Grow a Garden 2 hub: active promo codes, beginner guide, night stealing tactics, guild system guide, and all new features. Updated daily for the Roblox sequel.",
  alternates: { canonical: "/grow-a-garden-2/" },
  openGraph: {
    title: "Grow a Garden 2 — Codes & Guides",
    description: "Complete Grow a Garden 2 hub with codes, guides, and feature breakdowns.",
    type: "website",
  },
};

const guideLinks = [
  { title: "Active Codes", description: "All working Grow a Garden 2 promo codes — updated daily.", href: "/grow-a-garden-2/codes" },
  { title: "Beginner Guide", description: "Complete walkthrough: day/night cycle, Sheckles, planting, and more.", href: "/grow-a-garden-2/beginner-guide" },
  { title: "Night Stealing Guide", description: "Master raid tactics, defense setups, and garden gnome placement.", href: "/grow-a-garden-2/night-stealing-guide" },
  { title: "Guild Guide", description: "Create guilds, win weekly competitions, and earn the Black Dragon & Ice Snake pets.", href: "/grow-a-garden-2/guild-guide" },
];

const newFeatures = [
  { icon: "🌙", title: "Day/Night Cycle & Stealing", description: "Night lasts ~2:30. Raid other farms or defend yours with gnomes and traps." },
  { icon: "🏰", title: "Guild System", description: "Join weekly competitions like 'Biggest Plant'. Win the Black Dragon (top 25) or Ice Snake (top 100) pets." },
  { icon: "🏪", title: "Item Shop", description: "Buy gnomes, teleport pads, ladders and more. Prices range from 30K to 50M Sheckles." },
  { icon: "🪙", title: "Sheckles Currency", description: "New currency replacing Coins. Earn via farming, stealing, and guild activities." },
  { icon: "🧙", title: "Garden Gnomes", description: "Epic-rarity defenders. 100K Sheckles each, patrol for 10 min, kick intruders." },
  { icon: "🐉", title: "Black Dragon Pet", description: "The rarest guild reward — top 25 only. Higher multiplier than Ice Snake." },
];

const faqs = [
  { question: "What is Grow a Garden 2?", answer: "Grow a Garden 2 is the sequel to the hit Roblox farming simulator Grow a Garden. Launched in June 2026, it adds a day/night cycle with stealing mechanics, a guild system with weekly competitions, an item shop, and a new currency called Sheckles. The original game remains active alongside the sequel." },
  { question: "Is Grow a Garden 2 free?", answer: "Yes, Grow a Garden 2 is completely free to play on Roblox. Optional in-game purchases exist using Robux, but all core gameplay is accessible without spending real money." },
  { question: "Should I play Grow a Garden 1 or 2?", answer: "Both games are active and worth playing. Grow a Garden 1 offers the classic farming experience with a mature meta. Grow a Garden 2 adds social features like stealing and guilds, making it better for players who want competitive and community-driven gameplay." },
  { question: "What's new in Grow a Garden 2?", answer: "The biggest additions are: night stealing (raid other players' farms), guild system (weekly competitions for exclusive pets), item shop (buy defensive gnomes and utility items), and the Sheckles currency system. The core planting and mutation mechanics return from the original." },
  { question: "How do I redeem codes in Grow a Garden 2?", answer: "Launch the game, click the silver gear icon in the top-left corner, paste your code into the input field, and click Claim. Check our Codes page for all active codes and step-by-step instructions." },
];

export default function GrowAGarden2HubPage() {
  return (
    <ContentLayout
      title="Grow a Garden 2 Hub"
      description="Complete Grow a Garden 2 hub: active promo codes, beginner guide, night stealing tactics, guild system guide, and all new features. Updated daily for the Roblox sequel."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden 2", href: "/grow-a-garden-2" },
      ]}
      accent="garden"
      canonicalPath="/grow-a-garden-2/"
    >
      {/* New Game Banner */}
      <section className="rounded-xl border border-[#00E676]/30 bg-gradient-to-r from-[#00E676]/5 to-transparent p-5">
        <span className="code-text inline-block rounded-md bg-[#00E676]/10 px-2.5 py-1 text-xs font-bold text-[#00E676] mb-3">
          🆕 NEW GAME — LAUNCHED JUNE 2026
        </span>
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          <strong className="text-white">Grow a Garden 2</strong> is the sequel to the hit Roblox farming simulator.
          The game launched in June 2026 and reached <strong className="text-[#00E676]">300 million visits</strong> in its first week.
          New features include a day/night cycle with stealing, guilds, an item shop, and the Sheckles currency.
        </p>
      </section>

      {/* New Features */}
      <section aria-labelledby="features-heading">
        <h2 id="features-heading" className="mb-4 font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          ✨ What&apos;s New in Grow a Garden 2
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {newFeatures.map((f) => (
            <div key={f.title} className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
              <span className="text-2xl">{f.icon}</span>
              <h3 className="mt-2 text-sm font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-xs text-[#768294]">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Guides */}
      <section aria-labelledby="guides-heading">
        <h2 id="guides-heading" className="mb-4 font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          🔥 Popular Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {guideLinks.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676]"
            >
              <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">
                {guide.title} →
              </span>
              <p className="mt-1 text-xs text-[#768294]">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Cross-link to original */}
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 className="font-heading text-[20px] font-semibold text-white lg:text-[24px]">
          🌱 Still Playing the Original?
        </h2>
        <p className="mt-2 text-sm text-[#768294]">
          Grow a Garden 1 is still active and updated. Check out our complete original game coverage:
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link href="/grow-a-garden/" className="rounded-lg border border-[#252936] px-4 py-2 text-xs font-semibold text-[#BAC4D1] transition hover:border-[#00E676] hover:text-[#00E676]">
            Grow a Garden Hub →
          </Link>
          <Link href="/grow-a-garden/codes" className="rounded-lg border border-[#252936] px-4 py-2 text-xs font-semibold text-[#BAC4D1] transition hover:border-[#00E676] hover:text-[#00E676]">
            Original Codes →
          </Link>
          <Link href="/grow-a-garden/crops" className="rounded-lg border border-[#252936] px-4 py-2 text-xs font-semibold text-[#BAC4D1] transition hover:border-[#00E676] hover:text-[#00E676]">
            Crops Database →
          </Link>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
