import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import Link from "next/link";
import data from "@/data/garden2/night-stealing-guide";

export const metadata: Metadata = {
  title: `${data.title}`,
  description: data.description,
  keywords: ["Grow a Garden 2 stealing", "GaG2 night raid", "Grow a Garden 2 garden gnome", "GaG2 defense", "how to steal in Grow a Garden 2"],
  alternates: { canonical: "/grow-a-garden-2/night-stealing-guide" },
  openGraph: { title: data.title, description: data.description, type: "website" },
};

const raidTactics = [
  { icon: "🕵️", title: "Scout Before Night", text: "Visit neighboring farms during the day. Note which plots have high-value crops and which owners are likely offline at night." },
  { icon: "🏃", title: "Plan Your Escape Route", text: "Memorize the path back to your plot before stealing. You only have 2:30 — wasting 10 seconds navigating can cost the entire raid." },
  { icon: "🎯", title: "Target Unprotected Farms", text: "Farms without gnomes or visible traps are easy targets. If you see a gnome patrolling, skip that farm — it's not worth the risk." },
  { icon: "📦", title: "Secure Loot Fast", text: "Grab 1-2 high-value crops and run. Greed gets you caught. Stolen crops must reach your plot to count — dying mid-escape loses everything." },
  { icon: "🤝", title: "Coordinate with Guild", text: "Guildmates can create diversions or scout multiple farms simultaneously. Solo raiding is risky; team raids are efficient." },
  { icon: "⏰", title: "Time the Last 30 Seconds", text: "The safest window is the final 30 seconds of night — owners are often checking their own farms. But you must reach your plot before day breaks." },
];

const defenseSetups = [
  { item: "Garden Gnome", cost: "100,000 Sheckles", rarity: "Epic", duration: "10 minutes", effect: "Automatically kicks any intruder on your plot. Best automated defense available.", priority: "Must-have for any plot with crops worth 50K+ Sheckles." },
  { item: "Shovel (Manual)", cost: "Free (starter item)", rarity: "Common", duration: "Permanent", effect: "Stand guard and whack intruders yourself. Effective but requires you to be online and attentive.", priority: "Fallback when you can't afford a gnome or it's on cooldown." },
  { item: "Traps", cost: "Varies by type", rarity: "Rare+", duration: "Single-use", effect: "Hidden traps that stun or slow intruders. Placement is key — put them near your most valuable plots.", priority: "Supplement gnomes, don't replace them. Best used on entrance paths." },
  { item: "Teleport Pad", cost: "50,000,000 Sheckles", rarity: "Mythic", duration: "Permanent", effect: "Instantly teleport home if you're caught raiding. The ultimate escape tool for serious thieves.", priority: "Endgame luxury. Only worth it if you raid nightly and have spare Sheckles." },
];

const riskLevels = [
  { level: "Low Risk", color: "#00E676", description: "Farm has no gnomes, owner offline, low-value crops. Good for practice raids.", reward: "Small — basic crops worth 5-20K Sheckles" },
  { level: "Medium Risk", color: "#FFD700", description: "Farm has 1 gnome or owner may be online. Mid-value crops present.", reward: "Moderate — 20-100K Sheckles per successful raid" },
  { level: "High Risk", color: "#FF8C00", description: "Multiple gnomes, traps, and owner likely online. High-value crops with defenses.", reward: "High — 100K-500K Sheckles, but 60%+ chance of getting caught" },
  { level: "Extreme Risk", color: "#FF3D00", description: "Fully defended farm with mythic-tier gnomes, traps everywhere, and an active owner waiting.", reward: "Massive — 500K+ Sheckles, but 90%+ chance of failure" },
];

export default function NightStealingGuidePage() {
  return (
    <ContentLayout title={data.title} description={data.description} breadcrumbs={data.breadcrumbs} canonicalPath="/grow-a-garden-2/night-stealing-guide" accent="garden" updatedAt={data.updatedAt}>
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          The <strong className="text-white">night stealing mechanic</strong> is Grow a Garden 2's headline feature.
          Every night cycle (lasting ~2 minutes 30 seconds), you can raid other players' farms for their crops —
          but they can raid yours too. This guide covers both <strong className="text-[#00E676]">offense (raiding)</strong> and
          <strong className="text-[#FF3D00]"> defense (protecting your farm)</strong>.
        </p>
      </section>

      <section aria-labelledby="raid-heading">
        <h2 id="raid-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">🕵️ Raid Tactics — How to Steal Successfully</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {raidTactics.map((t) => (
            <div key={t.title} className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
              <span className="text-2xl">{t.icon}</span>
              <h3 className="mt-2 text-sm font-semibold text-white">{t.title}</h3>
              <p className="mt-1 text-xs text-[#768294]">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="defense-heading">
        <h2 id="defense-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">🛡️ Defense Setup — Protect Your Farm</h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1fr_1fr_0.7fr_0.7fr_1.5fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="text-xs font-semibold text-[#768294]">ITEM</span>
            <span className="text-xs font-semibold text-[#768294]">COST</span>
            <span className="text-xs font-semibold text-[#768294]">RARITY</span>
            <span className="text-xs font-semibold text-[#768294]">DURATION</span>
            <span className="text-xs font-semibold text-[#768294]">EFFECT</span>
          </div>
          {defenseSetups.map((d, i) => (
            <div key={i} className="grid grid-cols-[1fr_1fr_0.7fr_0.7fr_1.5fr] gap-2 border-t border-[#252936] px-4 py-3 items-start">
              <span className="text-xs font-semibold text-[#BAC4D1]">{d.item}</span>
              <span className="text-xs text-[#00E676]">{d.cost}</span>
              <span className="text-xs text-[#768294]">{d.rarity}</span>
              <span className="text-xs text-[#768294]">{d.duration}</span>
              <div>
                <p className="text-xs text-[#BAC4D1]">{d.effect}</p>
                <p className="mt-0.5 text-xs text-[#768294]"><strong>Priority:</strong> {d.priority}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="risk-heading">
        <h2 id="risk-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">⚠️ Risk vs Reward Assessment</h2>
        <div className="space-y-3">
          {riskLevels.map((r) => (
            <div key={r.level} className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: r.color }} />
                <span className="text-sm font-semibold text-white">{r.level}</span>
              </div>
              <p className="text-xs text-[#768294]">{r.description}</p>
              <p className="mt-1 text-xs text-[#BAC4D1]"><strong>Reward:</strong> {r.reward}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="related-heading">
        <h2 id="related-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">🔗 Related Guides</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {data.relatedGuides.map((g, i) => (
            <Link key={i} href={g.href} className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676] group">
              <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">{g.label} →</span>
              <p className="mt-1 text-xs text-[#768294]">{g.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <ContentFAQ faqs={data.faq} />
    </ContentLayout>
  );
}
