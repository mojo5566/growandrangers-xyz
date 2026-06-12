import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import TierTable from "@/components/TierTable";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anime Rangers X Trait Tier List (2026) — Best Traits Ranked | BloxPulse",
  description:
    "Complete Anime Rangers X trait tier list ranking every trait from Unique to Common. Optimal unit pairings, reroll strategy, and the Re:Rangers trait rework explained.",
};

const traitTiers = [
  { name: "Time Rewind", tier: "Mythic", description: "Reset cooldowns on kill (Chrono Slayer)" },
  { name: "God-Speed", tier: "Mythic", description: "+50% attack speed, stacking (Storm Ronin)" },
  { name: "Monarch", tier: "Legendary", description: "+30% all stats when HP above 80%" },
  { name: "Void Touch", tier: "Legendary", description: "Attacks ignore 25% defense (Void Empress)" },
  { name: "Drop Rate+", tier: "Epic", description: "+20% gem drop rate (farm units)" },
  { name: "Cooldown-", tier: "Epic", description: "-15% ability cooldown (all units)" },
  { name: "Lifesteal", tier: "Epic", description: "Heal 10% of damage dealt" },
  { name: "Fortress", tier: "Rare", description: "+15% defense, taunt enemies (Stone Colossus)" },
  { name: "Scout", tier: "Rare", description: "+10% movement speed, detect stealth" },
  { name: "Basic ATK+", tier: "Common", description: "+5% base attack damage" },
];

const faqs = [
  {
    question: "What is the best trait in Anime Rangers X?",
    answer: "Time Rewind is the current best trait because it resets all ability cooldowns on kill, enabling near-infinite ultimate chains on Chrono Slayer. God-Speed is the best farming trait with its stacking attack speed bonus.",
  },
  {
    question: "How do I get better traits for my units?",
    answer: "Use Trait Rolls obtained from codes, events, and gem purchases. Save your rolls for Mythic and Legendary units — applying rare traits to Common units is wasteful since they will be replaced as your roster improves.",
  },
  {
    question: "Can I change a trait once it is applied?",
    answer: "Yes, you can reroll traits at any time using a Trait Roll item. The previous trait is permanently replaced, so make sure you are satisfied before committing a high-tier trait to a unit. The Re:Rangers update added a trait lock feature for 50 Gems.",
  },
];

export default function TraitTierListPage() {
  return (
    <ContentLayout
      title="Anime Rangers X Trait Tier List — Every Trait Ranked (June 2026)"
      description="All traits ranked from Unique/Mythic to Common with recommended unit pairings. Includes the trait rework changes from the Re:Rangers title restructure."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Anime Rangers X Trait Tier List", href: "/rangers/trait-tier-list" },
      ]}
      canonicalPath="/anime-rangers-x/trait-tier-list" accent="rangers"
    >
      <section aria-labelledby="trait-table">
        <h2 id="trait-table" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          🧬 Complete Trait Rankings
        </h2>
        <TierTable rows={traitTiers} colHeaders={["TRAIT", "TIER", "BEST ON"]} />
      </section>

      <section aria-labelledby="pairings" className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
        <h2 id="pairings" className="font-heading text-[20px] font-semibold text-white mb-3">
          🔗 Optimal Trait-to-Unit Pairings
        </h2>
        <div className="space-y-2">
          {[
            ["Time Rewind", "Chrono Slayer", "Infinite ultimate chains at wave 80+"],
            ["God-Speed", "Storm Ronin", "Maximum DPS for speed farming"],
            ["Void Touch", "Void Empress", "Amplifies her AOE nuke potential"],
            ["Drop Rate+", "Any farm unit", "Best on dedicated gem-farming loadouts"],
          ].map(([trait, unit, why], i) => (
            <div key={i} className="flex items-start gap-3 border-l-2 border-[#FF3D00] bg-[#1E212B] p-3">
              <div className="flex-1">
                <span className="text-sm font-semibold text-[#BAC4D1]">{trait}</span>
                <span className="text-xs text-[#768294] ml-2">→ {unit}</span>
              </div>
              <span className="text-xs text-[#768294]">{why}</span>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="related">
        <h2 id="related" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
          🔗 Related Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/rangers/unit-tier-list" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00]">
            <span className="text-sm font-semibold text-[#BAC4D1]">⚔️ Unit Tier List →</span>
            <p className="mt-1 text-xs text-[#768294]">See which units deserve your best traits</p>
          </Link>
          <Link href="/rangers/evolution-guide" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00]">
            <span className="text-sm font-semibold text-[#BAC4D1]">🔮 Evolution Guide →</span>
            <p className="mt-1 text-xs text-[#768294]">Evolve units to unlock trait slots</p>
          </Link>
        </div>
      </section>

      <ContentFAQ faqs={faqs} />
    </ContentLayout>
  );
}
