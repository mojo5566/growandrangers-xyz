import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anime Rangers X Evolution Guide (2026) — Full Requirements & Costs | BloxPulse",
  description:
    "Complete Anime Rangers X evolution guide covering all evolution stages, material requirements, gem costs, and stat boosts. Learn how to evolve every unit tier efficiently.",
};

const evoStages = [
  { from: "Common → Rare", materials: "x50 Evolution Stones + x5,000 Gems", stats: "+50% base stats" },
  { from: "Rare → Epic", materials: "x120 Evolution Stones + x12,000 Gems", stats: "+75% base stats, unlock Trait Slot 2" },
  { from: "Epic → Legendary", materials: "x250 Evolution Stones + x25,000 Gems", stats: "+100% stats, unlock Ultimate ability" },
  { from: "Legendary → Mythic", materials: "x500 Evolution Stones + x50,000 Gems + x1 Awakening Core", stats: "+150% stats, unlock Trait Slot 3" },
];

const faqs = [
  {
    question: "How long does it take to evolve a unit to Mythic tier?",
    answer: "For a free-to-play player, evolving a Legendary to Mythic takes approximately 2-3 weeks of consistent grinding. Focus on completing daily missions for Evolution Stones and saving Gems from promo codes to accelerate the process.",
  },
  {
    question: "What is the fastest way to farm Evolution Stones?",
    answer: "Infinite Mode is the most efficient stone farming method — each full clear past wave 40 drops 5-10 Evolution Stones. Our Infinite Mode Fast Gem Farming Guide covers optimal loadouts and strategies for maximizing your stone yield per run.",
  },
  {
    question: "Should I evolve Rare units or save for better ones?",
    answer: "Only invest Evolution Stones in Epic-tier units and above. Rare and Common units are quickly outclassed and the stone investment is not refundable. Check our Unit Tier List to identify which units are worth the evolution cost.",
  },
];

export default function EvolutionGuidePage() {
  return (
    <ContentLayout
      title="Anime Rangers X Evolution Guide — Full Requirements & Costs (2026)"
      description="Step-by-step guide to evolving your Anime Rangers X units from Common to Mythic. Includes material costs, gem requirements, stat boosts, and farming strategies."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Anime Rangers X Evolution Guide", href: "/rangers/evolution-guide" },
      ]}
      canonicalPath="/anime-rangers-x/evolution-guide" accent="rangers"
    >
      {/* Stage Overview */}
      <section aria-labelledby="evo-stages">
        <h2 id="evo-stages" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          🔮 Evolution Stages & Requirements
        </h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1fr_1.5fr_1.2fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="code-text text-[#768294]">EVOLUTION</span>
            <span className="code-text text-[#768294]">REQUIREMENTS</span>
            <span className="code-text text-[#768294]">STAT BOOST</span>
          </div>
          {evoStages.map((s, i) => (
            <div key={i} className="grid grid-cols-[1fr_1.5fr_1.2fr] gap-2 border-t border-[#252936] px-4 py-3 items-center hover:bg-[#1E212B] transition">
              <span className="text-sm font-semibold text-[#BAC4D1]">{s.from}</span>
              <span className="text-xs text-[#BAC4D1]">{s.materials}</span>
              <span className="text-xs font-semibold text-[#FF3D00]">{s.stats}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How to Farm */}
      <section aria-labelledby="farming" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="farming" className="font-heading text-[20px] font-semibold text-white mb-3">
          ⛏️ How to Farm Evolution Materials
        </h2>
        <div className="space-y-3">
          {[
            { title: "Evolution Stones", desc: "Farm Infinite Mode past wave 40 (5-10 stones per clear). Daily missions award 15-20 stones. Weekly boss raids drop 50+ stones on first clear." },
            { title: "Gems", desc: "Redeem active promo codes (check our Codes page). Complete daily achievements (100-200 Gems/day). Participate in weekend events for bonus Gem drops." },
            { title: "Awakening Core (Mythic only)", desc: "Obtained from the Legendary+ Boss Raid with a 5% drop rate. Also available in the premium shop for 100,000 Gems. The rarest evolution material in the game." },
          ].map((mat, i) => (
            <div key={i} className="border-l-2 border-[#FF3D00] bg-[#1E212B] p-3">
              <h3 className="text-sm font-semibold text-white">{mat.title}</h3>
              <p className="mt-1 text-xs text-[#768294]">{mat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Evolution Priority */}
      <section aria-labelledby="priority" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="priority" className="font-heading text-[20px] font-semibold text-white mb-3">
          🎯 Evolution Priority Order
        </h2>
        <ol className="space-y-2">
          {[
            "Evolve your main DPS unit (Chrono Slayer / Void Empress) to Legendary first.",
            "Evolve your CC/Support unit (Frost Monarch / Tide Guardian) to Epic for Trait Slot 2.",
            "Push your DPS to Mythic — this is a long grind, start saving Awakening Cores early.",
            "Evolve secondary DPS and support units only after your core team is optimized.",
          ].map((tip, i) => (
            <li key={i} className="flex gap-2 text-sm text-[#BAC4D1]">
              <span className="code-text text-[#FF3D00]">{i + 1}.</span>
              <span>{tip}</span>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="related">
        <h2 id="related" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          🔗 Related Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/rangers/unit-tier-list" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00]">
            <span className="text-sm font-semibold text-[#BAC4D1]">⚔️ Unit Tier List →</span>
            <p className="mt-1 text-xs text-[#768294]">Decide which units to evolve first</p>
          </Link>
          <Link href="/rangers/codes" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00]">
            <span className="text-sm font-semibold text-[#BAC4D1]">🎁 Active Codes →</span>
            <p className="mt-1 text-xs text-[#768294]">Get free Gems to fund your evolution costs</p>
          </Link>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
