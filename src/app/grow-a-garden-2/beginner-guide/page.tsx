import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import ContentFAQ from "@/components/ContentFAQ";
import Link from "next/link";
import data from "@/data/garden2/beginner-guide";

export const metadata: Metadata = {
  title: `${data.title} | BloxPulse`,
  description: data.description,
  keywords: ["Grow a Garden 2 beginner guide", "GaG2 tutorial", "how to start Grow a Garden 2", "Grow a Garden 2 walkthrough", "GaG2 Sheckles"],
  alternates: { canonical: "/grow-a-garden-2/beginner-guide" },
  openGraph: { title: data.title, description: data.description, type: "website" },
};

const overviewPoints = [
  { icon: "🌱", title: "Plant Your First Crop", text: "Start with free seeds from the TEAMGREENBEAN code. Green Beans grow fast and give you early Sheckles to reinvest." },
  { icon: "🪙", title: "Earn Sheckles", text: "Harvest crops and sell them for Sheckles — the new currency. Reinvest immediately into more plots and seeds." },
  { icon: "🌙", title: "Survive the Night", text: "When night falls (2:30), other players can raid your farm. Deploy garden gnomes or stand guard with a shovel." },
  { icon: "🏰", title: "Join a Guild", text: "Guilds unlock weekly competitions with exclusive rewards. Join one as soon as possible — solo play misses major content." },
  { icon: "🏪", title: "Visit the Item Shop", text: "The shop in the market area sells gnomes, ladders, and teleport pads. Start with cheap utility items before splurging on gnomes." },
  { icon: "❄️", title: "Compete for the Ice Snake", text: "The Ice Snake pet is the top guild reward. It boosts crop growth speed — a game-changer for active farmers." },
];

const progression = [
  { stage: "First 5 Minutes", goal: "Complete tutorial, redeem TEAMGREENBEAN code, plant first Green Bean seeds", tip: "Don't skip the tutorial — it explains the stealing mechanic which is unique to GaG2." },
  { stage: "5-15 Minutes", goal: "Harvest first crops, earn 5,000+ Sheckles, buy second plot", tip: "Reinvest all Sheckles into plots and seeds. Never sit on idle currency." },
  { stage: "15-30 Minutes", goal: "Join a guild, explore the item shop, experience first night cycle", tip: "Join any open guild immediately — even a casual guild gives you competition access and farm protection from guildmates." },
  { stage: "30-60 Minutes", goal: "Buy first Garden Gnome (100K Sheckles), expand to 4+ plots", tip: "Prioritize the gnome over plot expansion if you're getting raided frequently at night." },
  { stage: "1-3 Hours", goal: "Participate in guild competition, unlock mid-tier crops, build defense system", tip: "The 'Biggest Plant' competition rewards heavy crops — focus on high-weight varieties over fast-growers." },
];

const mistakes = [
  "Sitting on idle Sheckles instead of reinvesting in plots and seeds",
  "Ignoring the guild system — you miss exclusive pets and weekly rewards",
  "Going AFK during night without deploying a gnome — your crops WILL be stolen",
  "Buying expensive shop items before having a stable farming income",
  "Stealing from high-level farms without an escape plan — you'll get kicked and lose everything",
  "Not redeeming the TEAMGREENBEAN code before starting — free seeds save 30K+ Sheckles",
];

export default function GaG2BeginnerGuidePage() {
  return (
    <ContentLayout title={data.title} description={data.description} breadcrumbs={data.breadcrumbs} canonicalPath="/grow-a-garden-2/beginner-guide" accent="garden" updatedAt={data.updatedAt}>
      <section className="rounded-xl border border-[#00E676]/20 bg-[#00E676]/5 p-4">
        <p className="text-sm leading-relaxed text-[#BAC4D1]">
          <strong className="text-white">Grow a Garden 2</strong> launched in June 2026 and hit 300 million visits in its first week.
          This guide covers everything new players need to know: the day/night cycle, Sheckles economy, guild system,
          item shop, and how to protect your farm from nighttime thieves.
        </p>
      </section>

      <section aria-labelledby="overview-heading">
        <h2 id="overview-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">🌱 Getting Started — The Basics</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {overviewPoints.map((p) => (
            <div key={p.title} className="rounded-lg border border-[#252936] bg-[#14161D] p-4">
              <span className="text-2xl">{p.icon}</span>
              <h3 className="mt-2 text-sm font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-xs text-[#768294]">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="progression-heading">
        <h2 id="progression-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">📈 Progression Roadmap</h2>
        <div className="overflow-hidden rounded-xl border border-[#252936]">
          <div className="grid grid-cols-[1fr_1.5fr_1.5fr] gap-2 bg-[#1E212B] px-4 py-2.5 items-center">
            <span className="text-xs font-semibold text-[#768294]">TIMEFRAME</span>
            <span className="text-xs font-semibold text-[#768294]">GOAL</span>
            <span className="text-xs font-semibold text-[#768294]">TIP</span>
          </div>
          {progression.map((p, i) => (
            <div key={i} className="grid grid-cols-[1fr_1.5fr_1.5fr] gap-2 border-t border-[#252936] px-4 py-3 items-start">
              <span className="text-xs font-semibold text-[#00E676]">{p.stage}</span>
              <span className="text-xs text-[#BAC4D1]">{p.goal}</span>
              <span className="text-xs text-[#768294]">{p.tip}</span>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="mistakes-heading">
        <h2 id="mistakes-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">❌ Common Beginner Mistakes</h2>
        <div className="rounded-xl border border-[#252936] bg-[#14161D] p-5">
          <ul className="space-y-2">
            {mistakes.map((m, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#BAC4D1]">
                <span className="text-[#FF3D00] shrink-0 mt-0.5">✗</span>
                {m}
              </li>
            ))}
          </ul>
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
