import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import Link from "next/link";
import data from "@/data/garden2/guild-guide";

export const metadata: Metadata = {
  title: `${data.title} | BloxPulse`,
  description: data.description,
  keywords: ["Grow a Garden 2 guild", "GaG2 guild guide", "Grow a Garden 2 Ice Snake", "Grow a Garden 2 Black Dragon", "GaG2 guild competition", "Grow a Garden 2 clan"],
  alternates: { canonical: "/grow-a-garden-2/guild-guide" },
  openGraph: { title: data.title, description: data.description, type: "website" },
};

const guildBenefits = [
  { icon: "🐉", title: "Black Dragon Pet", text: "The rarest guild reward. Top 25 only. Higher multiplier than Ice Snake — the ultimate status symbol." },
  { icon: "❄️", title: "Ice Snake Pet", text: "Exclusive guild competition reward for top 100. Boosts crop growth speed. Unobtainable through any other method." },
  { icon: "🤝", title: "Mutual Farm Protection", text: "Guild members' farms are protected from each other. No friendly fire during night stealing — coordinate defense without worry." },
  { icon: "🏆", title: "Weekly Competitions", text: "Compete in events like 'Biggest Plant' for exclusive rewards and leaderboard ranking." },
  { icon: "🏪", title: "Guild-Only Shop Items", text: "Access exclusive items in the shop that are only available to guild members." },
  { icon: "💬", title: "Coordination & Strategy", text: "Plan night defense rotations, share farming tips, and coordinate raid parties against rival guilds." },
];

const competitions = [
  { name: "Biggest Plant", description: "Grow the heaviest single plant on your plot. Weight is determined by crop type, tier, and mutation multiplier.", active: true, tip: "Focus on S-Tier crops with high base weight. Stack mutation multipliers for maximum mass." },
  { name: "Most Sheckles Earned", description: "Total Sheckles earned by all guild members during the competition window.", active: false, tip: "Coordinate harvesting schedules so all members harvest during the same window for maximum output." },
  { name: "Most Crops Stolen", description: "Total crops stolen by guild members during night cycles. Rewards aggressive raiding playstyles.", active: false, tip: "Organize raid parties — 3-4 members hitting different farms simultaneously maximizes total loot." },
];

const progressionTips = [
  { stage: "Join a Guild (Day 1)", action: "Search for open guilds in the guild menu. Join any active guild with 10+ members. Don't wait for the 'perfect' guild — you can switch later.", priority: "P0 — Do this immediately" },
  { stage: "Contribute Daily (Week 1)", action: "Harvest crops and participate in the current competition. Even small contributions help your guild's ranking.", priority: "P0 — Daily activity" },
  { stage: "Create Your Own Guild (Week 2+)", action: "If you have 500K+ Sheckles and 5+ active friends, consider creating your own guild for better coordination.", priority: "P1 — Optional but rewarding" },
  { stage: "Compete for Ice Snake (Week 3+)", action: "Push your guild into the top 100 of the weekly leaderboard for the Ice Snake pet. Requires coordinated effort from all members.", priority: "P1 — High-value reward" },
  { stage: "Push for Black Dragon (Week 5+)", action: "Aim for the top 25 to earn the Black Dragon pet — the rarest guild reward with a higher multiplier than Ice Snake. Competition is extremely fierce.", priority: "P1 — Elite reward" },
  { stage: "Expand Guild Capacity", action: "Use Sheckles or competition milestones to increase member capacity beyond the default 20.", priority: "P2 — For competitive guilds" },
];

export default function GuildGuidePage() {
  return (
    <ContentLayout title={data.title} description={data.description} breadcrumbs={data.breadcrumbs} canonicalPath="/grow-a-garden-2/guild-guide" accent="garden" updatedAt={data.updatedAt}>
      <section className="rounded-xl border border-[#252936] bg-[#14161D] p-4">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          The <strong className="text-white">guild system</strong> is one of Grow a Garden 2's biggest additions over the original.
          Guilds let you team up for weekly competitions, earn exclusive rewards like the <strong className="text-[#00E676]">Black Dragon</strong> and <strong className="text-[#00E676]">Ice Snake pets</strong>,
          and coordinate night defense with trusted allies. This guide covers everything from joining your first guild to competing for top-tier rewards.
        </p>
      </section>

      <section aria-labelledby="benefits-heading">
        <h2 id="benefits-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">🎁 Guild Benefits</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {guildBenefits.map((b) => (
            <div key={b.title} className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
              <span className="text-2xl">{b.icon}</span>
              <h3 className="mt-2 text-sm font-semibold text-white">{b.title}</h3>
              <p className="mt-1 text-xs text-[#768294]">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="competition-heading">
        <h2 id="competition-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">🏆 Weekly Competitions</h2>
        <div className="space-y-3">
          {competitions.map((c) => (
            <div key={c.name} className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm font-semibold text-white">{c.name}</h3>
                {c.active ? (
                  <span className="code-text rounded bg-[#00E676]/20 px-2 py-0.5 text-[10px] font-bold text-[#00E676]">ACTIVE</span>
                ) : (
                  <span className="code-text rounded bg-[#252936] px-2 py-0.5 text-[10px] font-bold text-[#768294]">ROTATING</span>
                )}
              </div>
              <p className="text-xs text-[#768294]">{c.description}</p>
              <p className="mt-1 text-xs text-[#BAC4D1]"><strong>💡 Tip:</strong> {c.tip}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="progression-heading">
        <h2 id="progression-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">📈 Guild Progression Guide</h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1.2fr_2fr_1fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="text-xs font-semibold text-[#768294]">STAGE</span>
            <span className="text-xs font-semibold text-[#768294]">ACTION</span>
            <span className="text-xs font-semibold text-[#768294]">PRIORITY</span>
          </div>
          {progressionTips.map((p, i) => (
            <div key={i} className="grid grid-cols-[1.2fr_2fr_1fr] gap-2 border-t border-[#252936] px-4 py-3 items-start">
              <span className="text-xs font-semibold text-[#00E676]">{p.stage}</span>
              <span className="text-xs text-[#BAC4D1]">{p.action}</span>
              <span className="text-xs text-[#768294]">{p.priority}</span>
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
