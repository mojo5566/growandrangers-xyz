import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anime Rangers X Codes (June 2026) — Active Promo Codes List | BloxPulse",
  description:
    "Complete list of working Anime Rangers X promo codes for June 2026. Redeem for Gems, XP Boosts, Rare Trait Rolls, and exclusive unit unlocks. Updated daily.",
};

const codes = [
  { code: "RANGERS_UPD6", reward: "x500 Gems & XP Boost", status: "Active", note: "Update 6 launch code" },
  { code: "ANIMEX_WAVE", reward: "x300 Gems & Rare Trait Roll", status: "Active", note: "Wave update exclusive" },
  { code: "RE_RANGERS", reward: "x400 Gems & 2x XP (1hr)", status: "Active", note: "Title restructure event" },
  { code: "MYTHIC_DROP", reward: "x1 Mythic Unit Summon", status: "Active", note: "Community 50K members" },
  { code: "TRAIT_BOOST", reward: "x2 Legendary Trait Rolls", status: "Active", note: "Trait system rework" },
  { code: "RANGER_SUMMER", reward: "x200 Gems & Summer Capsule", status: "Expired", note: "Expired May 2026" },
  { code: "WAVE_10K", reward: "x150 Gems & Gold Boost", status: "Expired", note: "Expired April 2026" },
];

const faqs = [
  {
    question: "How do I redeem Anime Rangers X codes?",
    answer: "Launch Anime Rangers X in Roblox, open the Settings menu (gear icon), tap the Codes tab, enter the code exactly as shown, and press Redeem. Rewards appear instantly in your inventory.",
  },
  {
    question: "Where can I spend the Gems I get from codes?",
    answer: "Gems are the premium currency used for unit summons, trait rerolls, and XP boosts. We recommend saving Gems for Mythic-tier summon banners which have the highest chance of S-tier units. Check our Unit Tier List for summon priorities.",
  },
  {
    question: "What is the best way to use Rare Trait Rolls?",
    answer: "Save Rare Trait Rolls for your Mythic or Legendary units. Applying them to Common or Rare units is wasteful. Our Trait Tier List shows the optimal trait-to-unit pairings for maximum combat effectiveness.",
  },
];

export default function RangersCodesPage() {
  return (
    <ContentLayout
      title="Anime Rangers X Codes (June 2026) — All Active Promo Codes"
      description="Redeem these working Anime Rangers X promo codes for Gems, XP Boosts, Rare Trait Rolls, and Mythic Unit Summons. Every code verified and updated daily by our team."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Anime Rangers X Codes", href: "/rangers/codes" },
      ]}
      canonicalPath="/anime-rangers-x/codes" accent="rangers"
    >
      <section aria-labelledby="active-codes">
        <h2 id="active-codes" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          🎁 Active & Expired Codes
        </h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1fr_1.2fr_70px] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="code-text text-[#768294]">CODE</span>
            <span className="code-text text-[#768294]">REWARD</span>
            <span className="code-text text-center text-[#768294]">STATUS</span>
          </div>
          {codes.map((c, i) => (
            <div key={i} className="grid grid-cols-[1fr_1.2fr_70px] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition">
              <code className="text-sm font-bold text-[#BAC4D1]">{c.code}</code>
              <span className="text-xs text-[#BAC4D1]">{c.reward}</span>
              <span className={`code-text text-center text-xs rounded-md px-1.5 py-0.5 ${c.status === "Active" ? "text-[#FF3D00] bg-[rgba(255,61,0,0.12)]" : "text-[#768294] bg-[rgba(118,130,148,0.1)]"}`}>
                {c.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="how-to">
        <h2 id="how-to" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          📋 How to Redeem Anime Rangers X Codes
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5 space-y-3">
          {["Launch Anime Rangers X from Roblox.", "Open Settings (gear icon) and tap the Codes tab.", "Enter the code exactly as displayed above.", "Press Redeem — rewards are credited instantly."].map((step, i) => (
            <div key={i} className="flex gap-3">
              <span className="code-text text-[#FF3D00] shrink-0 mt-0.5">{i + 1}.</span>
              <p className="text-sm text-[#BAC4D1]">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="related">
        <h2 id="related" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          🔗 Related Anime Rangers X Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/rangers/unit-tier-list" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00]">
            <span className="text-sm font-semibold text-[#BAC4D1]">⚔️ Unit Tier List →</span>
            <p className="mt-1 text-xs text-[#768294]">Know which units to summon with your Gems</p>
          </Link>
          <Link href="/rangers/trait-tier-list" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00]">
            <span className="text-sm font-semibold text-[#BAC4D1]">🧬 Trait Tier List →</span>
            <p className="mt-1 text-xs text-[#768294]">Best traits to apply with your Trait Rolls</p>
          </Link>
          <Link href="/rangers/evolution-guide" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00]">
            <span className="text-sm font-semibold text-[#BAC4D1]">🔮 Evolution Guide →</span>
            <p className="mt-1 text-xs text-[#768294]">Evolve your units efficiently</p>
          </Link>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
