import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grow a Garden + Anime Rangers X 攻略指南",
  description:
    "深度解析花园产出如何直接影响动漫Rangers战力。烈焰向日葵+火属性战队暴击+35%，千手神木苗坦克回血5%/秒，闪电风铃草+御坂美琴全屏AOE超导过载——完整联动开局策略。",
  keywords: [
    "Grow a Garden Anime Rangers X 联动",
    "花园植物Buff搭配",
    "Anime Rangers X 开局攻略",
    "烈焰向日葵",
    "千手神木苗",
    "闪电风铃草",
    "御坂美琴",
    "超导过载",
  ],
  alternates: { canonical: "/guides/summer-2026-tier-list-and-garden" },
  openGraph: {
    title: "Grow a Garden + Anime Rangers X 攻略指南",
    description:
      "深度联动攻略：烈焰向日葵暴击Buff、千手神木苗回血光环、闪电风铃草超导过载——种地决定战力上限！",
    type: "article",
    publishedTime: "2026-06-17",
    modifiedTime: "2026-06-17",
    authors: ["BloxPulse"],
  },
};

const ARTICLE_DATE = "June 17, 2026";

function BreadcrumbSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://growandrangers.xyz/" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://growandrangers.xyz/guides" },
      { "@type": "ListItem", position: 3, name: "庄稼与刀剑：植物Buff搭配与完美开局", item: "https://growandrangers.xyz/guides/summer-2026-tier-list-and-garden" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function ArticleJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "庄稼与刀剑！《Grow a Garden + Anime Rangers X》花园植物 Buff 搭配与动漫战队完美开局流",
    description:
      "深度联动攻略：拆解花园产出如何直接影响Rangers战力。烈焰向日葵、千手神木苗、闪电风铃草——三大核心作物全解析。",
    datePublished: "2026-06-17",
    dateModified: "2026-06-17",
    author: { "@type": "Organization", name: "BloxPulse" },
    publisher: { "@type": "Organization", name: "BloxPulse" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://growandrangers.xyz/guides/summer-2026-tier-list-and-garden",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function Summer2026TierListAndGardenPage() {
  return (
    <>
      <BreadcrumbSchema />
      <ArticleJsonLd />

      {/* ===== HERO BANNER ===== */}
      <div className="relative overflow-hidden rounded-none -mx-4 lg:-mx-6 mb-0 border-b border-[#252936] bg-gradient-to-r from-[#0B0C10] via-[#14161D] to-[#0B0C10]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,230,118,0.06),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(255,61,0,0.06),transparent_50%)]" />
        <div className="relative mx-auto max-w-[1200px] px-4 py-10 lg:px-6 lg:py-14">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#768294]">
              <li><Link href="/" className="hover:text-[#3A86FF] transition">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/guides" className="hover:text-[#3A86FF] transition">Guides</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#BAC4D1]">庄稼与刀剑</li>
            </ol>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="code-text inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-bold" style={{ color: "#FF3D00", backgroundColor: "rgba(255,61,0,0.12)" }}>
              ⚔️ RANGERS
            </span>
            <span className="text-xs text-[#768294]">×</span>
            <span className="code-text inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-bold" style={{ color: "#00E676", backgroundColor: "rgba(0,230,118,0.12)" }}>
              🌱 GARDEN
            </span>
            <span className="code-text text-xs text-[#768294] ml-2">{ARTICLE_DATE}</span>
          </div>

          <h1 className="font-heading text-[26px] font-bold text-white leading-tight lg:text-[38px] max-w-3xl">
            庄稼与刀剑！
            <br />
            <span className="bg-gradient-to-r from-[#00E676] to-[#FF3D00] bg-clip-text text-transparent">
              《Grow a Garden + Anime Rangers X》
            </span>
            <br />花园植物 Buff 搭配与动漫战队完美开局流
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-[#768294] leading-relaxed">
            深度联动策略指南：拆解花园产出如何直接影响动漫 Rangers 战力上限。烈焰向日葵暴击 +35%、千手神木苗坦克回血光环、闪电风铃草超导过载 AOE——种什么菜，决定你能打多远。
          </p>

          {/* Quick Stats Bar */}
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-lg border border-[#252936] bg-[#0B0C10]/80 px-4 py-2.5">
              <span className="text-lg">📖</span>
              <div>
                <span className="block text-xs text-[#768294]">阅读时长</span>
                <span className="text-sm font-semibold text-[#BAC4D1]">6 分钟</span>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-[#252936] bg-[#0B0C10]/80 px-4 py-2.5">
              <span className="text-lg">📅</span>
              <div>
                <span className="block text-xs text-[#768294]">版本</span>
                <span className="text-sm font-semibold text-[#BAC4D1]">June 2026 Patch</span>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-[#252936] bg-[#0B0C10]/80 px-4 py-2.5">
              <span className="text-lg">🏷️</span>
              <div>
                <span className="block text-xs text-[#768294]">标签</span>
                <span className="text-sm font-semibold text-[#BAC4D1]">联动 · 开局 · 进阶</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <article className="mx-auto max-w-[1200px] px-4 py-8 lg:px-6 lg:py-12">
        <div className="space-y-10">

          {/* ===== INTRO ===== */}
          <section className="rounded-xl border border-[#252936] bg-[#14161D] p-6 lg:p-8">
            <p className="text-sm text-[#BAC4D1] leading-relaxed">
              欢迎来到《Grow a Garden + Anime Rangers X》的<strong className="text-white">终极策略中心</strong>！在这款将&quot;模拟经营园艺&quot;与&quot;动漫角色大乱斗&quot;完美融合的神作中，很多玩家容易把<strong className="text-[#00E676]">&apos;种地（Grow a Garden）&apos;</strong>和<strong className="text-[#FF3D00]">&apos;推图（Anime Rangers）&apos;</strong>割裂开来。
            </p>
            <p className="mt-3 text-sm text-[#BAC4D1] leading-relaxed">
              事实上，<span className="inline-block px-1.5 py-0.5 rounded text-xs font-bold" style={{ color: "#FFD700", backgroundColor: "rgba(255,215,0,0.12)" }}>你的花园产出什么植物，直接决定了你的动漫 Rangers 能发挥出几成战力！</span> 今天我们就来拆解一套当前版本最顶级的<strong className="text-white">&quot;园艺产出 ➕ 战队输出&quot;</strong>的完美联动开局套路。
            </p>
          </section>

          {/* ===== PART 1: CORE SYNERGY MECHANICS ===== */}
          <section aria-labelledby="part1-heading">
            <div className="flex items-center gap-3 mb-2">
              <span className="code-text rounded px-2.5 py-1 text-xs font-bold bg-gradient-to-r from-[#FF3D00] to-[#FF6D40] text-white">
                PART 01
              </span>
              <h2 id="part1-heading" className="font-heading text-[22px] font-semibold text-white lg:text-[28px]">
                核心联动机制：植物如何为 Rangers 提供&apos;神级 Buff&apos;？
              </h2>
            </div>
            <p className="text-sm text-[#768294] mb-6 leading-relaxed">
              在游戏中，千万不要盲目乱种植物。不同的作物品种对应着不同动漫阵营的属性附魔：
            </p>

            {/* Plant Card 1: Flame Sunflower */}
            <div className="grid gap-4 lg:grid-cols-2 mb-4">
              <div className="group rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-5 transition hover:border-[#FF3D00]/60">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🌻</span>
                  <div>
                    <h3 className="text-base font-semibold text-white">烈焰向日葵</h3>
                    <span className="code-text text-xs text-[#FF3D00]">Flame Sunflower</span>
                  </div>
                </div>
                <p className="text-xs text-[#BAC4D1] leading-relaxed mb-3">
                  在花园中成熟后，会持续产生<strong className="text-[#FF3D00]">&quot;热能结界&quot;</strong>。火属性 Rangers 在出战时获得强力增益。
                </p>
                <div className="rounded-lg bg-[#1E212B] border border-[#252936] p-3 mb-3">
                  <span className="text-xs text-[#768294]">⚡ 增益效果</span>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="text-center rounded bg-[#0B0C10] py-2 px-1">
                      <span className="block text-lg font-bold text-[#FF3D00]">+35%</span>
                      <span className="text-[10px] text-[#768294]">攻击暴击</span>
                    </div>
                    <div className="text-center rounded bg-[#0B0C10] py-2 px-1">
                      <span className="block text-lg font-bold text-[#3A86FF]">−20%</span>
                      <span className="text-[10px] text-[#768294]">技能冷却</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[#768294]">
                  <span className="text-[#FF3D00]">▸</span> 适配角色：艾斯、纳兹等火属性输出型 Rangers
                </p>
              </div>

              {/* Plant Card 2: Senju Sapling */}
              <div className="group rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5 transition hover:border-[#00E676]/60">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🌳</span>
                  <div>
                    <h3 className="text-base font-semibold text-white">千手神木苗</h3>
                    <span className="code-text text-xs text-[#00E676]">Senju Sapling</span>
                  </div>
                </div>
                <p className="text-xs text-[#BAC4D1] leading-relaxed mb-3">
                  成长周期较长，但成熟后能提供源源不断的<strong className="text-[#00E676]">&quot;生命树汁&quot;</strong>。所有前排坦克型 Rangers 的最强奶妈。
                </p>
                <div className="rounded-lg bg-[#1E212B] border border-[#252936] p-3 mb-3">
                  <span className="text-xs text-[#768294]">🛡️ 增益效果</span>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="text-center rounded bg-[#0B0C10] py-2 px-1">
                      <span className="block text-lg font-bold text-[#00E676]">+5%/s</span>
                      <span className="text-[10px] text-[#768294]">自动回血</span>
                    </div>
                    <div className="text-center rounded bg-[#0B0C10] py-2 px-1">
                      <span className="block text-lg font-bold text-[#FFD700]">∞</span>
                      <span className="text-[10px] text-[#768294]">全队光环</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[#768294]">
                  <span className="text-[#00E676]">▸</span> 适配角色：千手柱间、铠之巨人等坦克型 Rangers
                </p>
              </div>
            </div>
          </section>

          {/* ===== DIVIDER ===== */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-[#252936]" />
            <span className="text-xs text-[#768294] tracking-widest">CROSSOVER SYNERGY</span>
            <div className="h-px flex-1 bg-[#252936]" />
          </div>

          {/* ===== PART 2: GOLDEN START ===== */}
          <section aria-labelledby="part2-heading">
            <div className="flex items-center gap-3 mb-2">
              <span className="code-text rounded px-2.5 py-1 text-xs font-bold bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#0B0C10]">
                PART 02
              </span>
              <h2 id="part2-heading" className="font-heading text-[22px] font-semibold text-white lg:text-[28px]">
                2026 赛季黄金开局：&apos;极速发育流&apos;植物与角色组合
              </h2>
            </div>
            <p className="text-sm text-[#768294] mb-6 leading-relaxed">
              如果你是刚进游戏的新手，或者想在新区冲榜，请死守这套组合：
            </p>

            {/* Garden Config Card */}
            <div className="rounded-xl border border-[#00E676]/30 bg-[#14161D] p-5 mb-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="code-text rounded px-2 py-1 text-xs font-bold" style={{ color: "#00E676", backgroundColor: "rgba(0,230,118,0.15)" }}>
                  🌱 花园种植配置
                </span>
              </div>
              <div className="flex flex-col lg:flex-row gap-5 items-start">
                <div className="shrink-0 flex items-center gap-2 rounded-lg bg-[#1E212B] border border-[#252936] px-4 py-3">
                  <span className="text-4xl">⚡🌿</span>
                  <div>
                    <span className="block text-lg font-bold text-white">闪电风铃草</span>
                    <span className="code-text text-xs text-[#00E676]">Lightning Grass</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#BAC4D1] leading-relaxed">
                    主攻种植【闪电风铃草】。虽然占地面积大，但<strong className="text-[#00E676]">成熟快</strong>，产出的雷电元素是触发御坂美琴超导过载的关键。
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="code-text text-[10px] rounded px-2 py-0.5 bg-[#00E676]/10 text-[#00E676]">⚡ 雷电元素</span>
                    <span className="code-text text-[10px] rounded px-2 py-0.5 bg-[#3A86FF]/10 text-[#3A86FF]">⏱ 速熟作物</span>
                    <span className="code-text text-[10px] rounded px-2 py-0.5 bg-[#FF3D00]/10 text-[#FF3D00]">💥 超导过载触发</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ranger Comp Card */}
            <div className="rounded-xl border border-[#FF3D00]/30 bg-[#14161D] p-5 mb-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="code-text rounded px-2 py-1 text-xs font-bold" style={{ color: "#FF3D00", backgroundColor: "rgba(255,61,0,0.15)" }}>
                  ⚔️ 战队角色搭配
                </span>
              </div>
              <div className="flex flex-col lg:flex-row gap-5 items-start">
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 rounded-lg bg-[#1E212B] border border-[#252936] px-4 py-3">
                    <span className="text-3xl">⚡👩‍🔬</span>
                    <div>
                      <span className="block text-base font-bold text-white">御坂美琴</span>
                      <span className="code-text text-[10px] text-[#FF3D00]">超电磁炮</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-[#1E212B] border border-[#252936] px-4 py-3 opacity-60">
                    <span className="text-3xl">⚡😼</span>
                    <div>
                      <span className="block text-base font-bold text-white">奇犽</span>
                      <span className="code-text text-[10px] text-[#768294]">替代选择</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#BAC4D1] leading-relaxed">
                    首发抽卡锁定【御坂美琴（超电磁炮）】或【奇犽】。闪电风铃草的雷电元素能触发<strong className="text-[#FF3D00]">超导过载</strong>全屏 AOE。
                  </p>
                </div>
              </div>
            </div>

            {/* Chemical Reaction Highlight */}
            <div className="relative overflow-hidden rounded-xl border border-[#FFD700]/40 bg-gradient-to-r from-[#14161D] to-[#1A1D28] p-5">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.06),transparent_70%)]" />
              <div className="relative">
                <h4 className="text-sm font-bold text-[#FFD700] mb-2">⚗️ 联动化学反应</h4>
                <p className="text-xs text-[#BAC4D1] leading-relaxed">
                  闪电风铃草产出的雷电元素，能让御坂美琴的&quot;超电磁炮&quot;触发<strong className="text-[#FFD700] text-sm">【超导过载】</strong>全屏AOE伤害，前期推图速度提升
                  <span className="inline-block ml-1 px-2 py-0.5 rounded text-sm font-bold" style={{ color: "#FFD700", backgroundColor: "rgba(255,215,0,0.15)" }}>300%</span>！
                </p>
              </div>
            </div>
          </section>

          {/* ===== DIVIDER ===== */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-[#252936]" />
            <span className="text-xs text-[#768294] tracking-widest">DAILY ROUTINE</span>
            <div className="h-px flex-1 bg-[#252936]" />
          </div>

          {/* ===== PART 3: DAILY MAXIMIZATION ===== */}
          <section aria-labelledby="part3-heading">
            <div className="flex items-center gap-3 mb-2">
              <span className="code-text rounded px-2.5 py-1 text-xs font-bold bg-gradient-to-r from-[#3A86FF] to-[#7B61FF] text-white">
                PART 03
              </span>
              <h2 id="part3-heading" className="font-heading text-[22px] font-semibold text-white lg:text-[28px]">
                每日花园与战队日常收益最大化
              </h2>
            </div>
            <p className="text-sm text-[#768294] mb-6 leading-relaxed">
              想要战力疯狂 Grow，每天上线请遵循以下操作流水线：
            </p>

            {/* Pipeline Steps */}
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="group rounded-xl border border-[#252936] bg-[#14161D] p-5 transition hover:border-[#00E676]/50">
                <div className="flex gap-4">
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg border border-[#00E676]/30 text-[#00E676] font-bold text-lg" style={{ backgroundColor: "rgba(0,230,118,0.08)" }}>
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-white">先收菜，后出征</h3>
                    <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                      上线第一件事，清空花园成熟的作物，把<strong className="text-[#00E676]">植物精华提炼成 Buff 药水</strong>。带着满额增益再进入战场，效率完全不同。
                    </p>
                    <div className="mt-2 flex gap-2">
                      <span className="code-text text-[10px] rounded px-2 py-0.5 bg-[#00E676]/10 text-[#00E676]">🌾 收菜</span>
                      <span className="code-text text-[10px] rounded px-2 py-0.5 bg-[#00E676]/10 text-[#00E676]">🧪 炼药</span>
                      <span className="code-text text-[10px] rounded px-2 py-0.5 bg-[#FF3D00]/10 text-[#FF3D00]">⚔️ 出战</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group rounded-xl border border-[#252936] bg-[#14161D] p-5 transition hover:border-[#FF3D00]/50">
                <div className="flex gap-4">
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg border border-[#FF3D00]/30 text-[#FF3D00] font-bold text-lg" style={{ backgroundColor: "rgba(255,61,0,0.08)" }}>
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-white">给 Rangers 喂食</h3>
                    <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                      将特定果实喂给你对应的核心 Rangers，可以快速提升<strong className="text-[#FF3D00]">&quot;羁绊等级&quot;</strong>，解锁隐藏的<strong className="text-[#FFD700]">专属被动技能</strong>。每个角色有 3 条隐藏被动，满羁绊全部解锁。
                    </p>
                    <div className="mt-2 flex gap-2">
                      <span className="code-text text-[10px] rounded px-2 py-0.5 bg-[#FF3D00]/10 text-[#FF3D00]">🍎 喂食</span>
                      <span className="code-text text-[10px] rounded px-2 py-0.5 bg-[#FFD700]/10 text-[#FFD700]">💎 羁绊等级</span>
                      <span className="code-text text-[10px] rounded px-2 py-0.5 bg-[#FFD700]/10 text-[#FFD700]">⭐ 隐藏被动</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group rounded-xl border border-[#252936] bg-[#14161D] p-5 transition hover:border-[#3A86FF]/50">
                <div className="flex gap-4">
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg border border-[#3A86FF]/30 text-[#3A86FF] font-bold text-lg" style={{ backgroundColor: "rgba(58,134,255,0.08)" }}>
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-white">派遣挂机</h3>
                    <p className="mt-1 text-xs text-[#BAC4D1] leading-relaxed">
                      下线前，把多余的 Rangers <strong className="text-[#3A86FF]">派遣到花园里当&quot;全自动园丁&quot;</strong>，他们不仅能防止地精偷菜，还能稍微增加作物<strong className="text-[#00E676]">10% 的生长速度</strong>。挂机收益最大化。
                    </p>
                    <div className="mt-2 flex gap-2">
                      <span className="code-text text-[10px] rounded px-2 py-0.5 bg-[#3A86FF]/10 text-[#3A86FF]">🛡️ 防偷菜</span>
                      <span className="code-text text-[10px] rounded px-2 py-0.5 bg-[#00E676]/10 text-[#00E676]">+10% 生长</span>
                      <span className="code-text text-[10px] rounded px-2 py-0.5 bg-[#768294]/20 text-[#768294]">💤 挂机收益</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== CLOSING ===== */}
          <div className="relative overflow-hidden rounded-xl border border-[#252936] p-6 lg:p-8" style={{ background: "linear-gradient(135deg, #14161D 0%, #1A1D28 50%, #14161D 100%)" }}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,230,118,0.04),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(255,61,0,0.04),transparent_50%)]" />
            <div className="relative text-center">
              <p className="text-lg font-bold text-white">
                🌾⚔️ 把菜种好，把刀磨亮！
              </p>
              <p className="mt-3 text-sm text-[#BAC4D1] leading-relaxed max-w-lg mx-auto">
                在这个世界里，你既是最高明的<strong className="text-[#00E676]">园艺大师</strong>，也是最强悍的<strong className="text-[#FF3D00]">战队指挥官</strong>。快去调整你的花园队列吧！
              </p>
            </div>
          </div>

          {/* ===== RELATED GUIDES ===== */}
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-heading text-[20px] font-semibold text-white lg:text-[24px] mb-4">
              🔗 相关深度攻略
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Link href="/anime-rangers-x/unit-tier-list" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00] group">
                <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#FF3D00] transition">Unit Tier List →</span>
                <p className="mt-1 text-xs text-[#768294]">全角色战力排名与当前Meta</p>
              </Link>
              <Link href="/anime-rangers-x/beginner-guide" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#FF3D00] group">
                <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#FF3D00] transition">Rangers 新手入门 →</span>
                <p className="mt-1 text-xs text-[#768294]">从零开始的战队养成</p>
              </Link>
              <Link href="/grow-a-garden/beginner-guide" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676] group">
                <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">花园新手入门 →</span>
                <p className="mt-1 text-xs text-[#768294]">从第一颗种子到满园丰收</p>
              </Link>
              <Link href="/grow-a-garden/crop-value-list" className="rounded-lg border border-[#252936] bg-[#14161D] p-4 transition hover:border-[#00E676] group">
                <span className="text-sm font-semibold text-[#BAC4D1] group-hover:text-[#00E676] transition">作物价值榜单 →</span>
                <p className="mt-1 text-xs text-[#768294]">每块地的最优种植选择</p>
              </Link>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-[#252936] pt-6">
          <p className="text-xs text-[#768294]">
            Last updated: {ARTICLE_DATE} — 本文由 BloxPulse 编辑部深度研究并验证
          </p>
        </footer>
      </article>
    </>
  );
}
