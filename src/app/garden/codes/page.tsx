import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grow a Garden Codes (June 2026) — Active Promo Codes List | BloxPulse",
  description:
    "Complete list of working Grow a Garden promo codes for June 2026. Redeem for Mutation Shards, Coins, Lucky Clovers, and exclusive seasonal items. Updated daily.",
};

const codes = [
  { code: "GAG_SPRING26", reward: "x10 Mutation Shards", status: "Active", note: "Spring seasonal code" },
  { code: "GARDEN_FEST", reward: "x500 Coins + Lucky Clover", status: "Active", note: "Festival event exclusive" },
  { code: "BLOOM_BOOST", reward: "x3 Pet Growth Potions", status: "Active", note: "New player welcome code" },
  { code: "SEEDS_4ALL", reward: "x20 Rare Seeds", status: "Active", note: "Community milestone reward" },
  { code: "GREEN_THUMB", reward: "x5 Double Harvest Boosts", status: "Active", note: "Gardening week special" },
  { code: "MUTA_WAVE3", reward: "x8 Mutation Shards + x150 Coins", status: "Expired", note: "Expired in May 2026" },
  { code: "WINTER_CROP", reward: "Limited Snowy Carrot Seed", status: "Expired", note: "Expired February 2026" },
];

const faqs = [
  {
    question: "How do I redeem Grow a Garden codes?",
    answer: "Launch Grow a Garden in Roblox, tap the Codes button (bird icon) on the left side menu, enter the code exactly as shown, and press Redeem. Rewards are instantly credited to your inventory.",
  },
  {
    question: "How often are new Grow a Garden codes released?",
    answer: "New codes are typically released during major updates, seasonal events (Easter, Summer, Halloween, Winter), and when the game hits visit milestones. We update this list within hours of any new code drop.",
  },
  {
    question: "Why is my Grow a Garden code not working?",
    answer: "Codes are case-sensitive and expire after their event window. Make sure you are entering the code exactly as shown (all caps with underscores). If a code still does not work, it has likely expired — check our status column.",
  },
  {
    question: "Where can I find the best mutations for these shards?",
    answer: "Check our Grow a Garden Mutation Tier List for a ranked breakdown of every mutation by rarity, crop multiplier, and pet synergy. We update the tier list every patch cycle.",
  },
];

export default function GardenCodesPage() {
  return (
    <ContentLayout
      title="Grow a Garden Codes (June 2026) — All Active Promo Codes"
      description="Redeem these working Grow a Garden promo codes for Mutation Shards, Coins, Lucky Clovers, and seasonal event rewards. We verify every code manually and update this list daily."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Grow a Garden Codes", href: "/garden/codes" },
      ]}
      canonicalPath="/grow-a-garden/codes" accent="garden"
    >
      {/* Code Table */}
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
              <span className={`code-text text-center text-xs rounded-md px-1.5 py-0.5 ${c.status === "Active" ? "text-[#00E676] bg-[rgba(0,230,118,0.12)]" : "text-[#768294] bg-[rgba(118,130,148,0.1)]"}`}>
                {c.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* How to Redeem */}
      <section aria-labelledby="how-to">
        <h2 id="how-to" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          📋 How to Redeem Grow a Garden Codes
        </h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5 space-y-3">
          <div className="flex gap-3">
            <span className="code-text text-[#00E676] shrink-0 mt-0.5">1.</span>
            <p className="text-sm text-[#BAC4D1]">Launch <strong>Grow a Garden</strong> from the Roblox platform.</p>
          </div>
          <div className="flex gap-3">
            <span className="code-text text-[#00E676] shrink-0 mt-0.5">2.</span>
            <p className="text-sm text-[#BAC4D1]">Locate the <strong>Codes button</strong> (bird icon) on the left-hand side menu.</p>
          </div>
          <div className="flex gap-3">
            <span className="code-text text-[#00E676] shrink-0 mt-0.5">3.</span>
            <p className="text-sm text-[#BAC4D1]">Enter the code <strong>exactly as displayed</strong> above (codes are case-sensitive).</p>
          </div>
          <div className="flex gap-3">
            <span className="code-text text-[#00E676] shrink-0 mt-0.5">4.</span>
            <p className="text-sm text-[#BAC4D1]">Press <strong>Redeem</strong> — rewards are credited to your inventory instantly.</p>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section aria-labelledby="related">
        <h2 id="related" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          🔗 Related Grow a Garden Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/garden/mutation-tier-list" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676]">
            <span className="text-sm font-semibold text-[#BAC4D1]">🌱 Mutation Tier List →</span>
            <p className="mt-1 text-xs text-[#768294]">Ranked mutations by rarity, multiplier, and synergy</p>
          </Link>
          <Link href="/garden/crop-values" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676]">
            <span className="text-sm font-semibold text-[#BAC4D1]">💰 Crop Value List →</span>
            <p className="mt-1 text-xs text-[#768294]">Optimal crops for maximum coin profit per harvest</p>
          </Link>
          <Link href="/garden/pet-tier-list" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676]">
            <span className="text-sm font-semibold text-[#BAC4D1]">🐣 Pet Tier List →</span>
            <p className="mt-1 text-xs text-[#768294]">Best pets ranked by hatching odds and multiplier</p>
          </Link>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
