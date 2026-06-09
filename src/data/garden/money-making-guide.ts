import type { EvolutionPageData } from "../types";
import { crops } from "./database/crops";
import { mutations } from "./database/mutations";
import { pets } from "./database/pets";

const goldenWheat = crops.find((c) => c.id === "golden-wheat")!;
const crystalBerry = crops.find((c) => c.id === "crystal-berry")!;
const luckyCarrot = crops.find((c) => c.id === "lucky-carrot")!;
const aurelianCrown = mutations.find((m) => m.id === "aurelian-crown")!;
const goldenPhoenix = pets.find((p) => p.id === "golden-phoenix-chick")!;
const leporineBloom = mutations.find((m) => m.id === "leporine-bloom")!;
const luckyBunny = pets.find((p) => p.id === "lucky-clover-bunny")!;

function buildMoneyGuideData(): EvolutionPageData {
  return {
    title: "Grow a Garden Money Making Guide — Max Coins Per Hour (June 2026)",
    description: "The ultimate coin farming guide for Grow a Garden. Learn early-game money strategies, mid-game scaling, endgame optimization, best crop and mutation combinations, AFK income methods, and how to reach 10,000+ coins per minute.",
    updatedAt: "June 8, 2026",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Grow a Garden Money Making Guide", href: "/grow-a-garden/money-making-guide" },
    ],

    overview: {
      description: `Coins are the lifeblood of Grow a Garden. They buy plots, seeds, eggs, and upgrades. Every decision — which crop to plant, which mutation to roll, which pet to hatch — ultimately serves one goal: maximizing your coin income. This guide breaks down the math behind coin farming at every stage, from your first ${goldenWheat.coins}-coin harvest to endgame setups generating 10,000+ coins per minute through optimized mutation and pet stacking.`,
      highlights: [
        `Plant ${goldenWheat.name} on your main plot as soon as possible — ${goldenWheat.coinsPerMinute} coins-per-minute, the highest in the game`,
        `A 4.0x mutation (${aurelianCrown.name}) turns ${goldenWheat.coins} coins into 1,920 coins per harvest`,
        `Add a 5.0x pet (${goldenPhoenix.name}) and one harvest yields 9,600 coins — a 20x multiplier`,
        "Expand to 4 plots before investing heavily in mutations — plot count multiplies all other income sources",
        "AFK with long-cycle crops (Crystal Berry, 5 min) for passive income while you are away",
        "Use Double Harvest Boosts during boosted events on your best crop for 19,200-coin single harvests",
      ],
    },

    stages: [
      { from: "Early Game (0-30 min)", mats: "1-2 plots, Basic Seeds", stats: `Plant ${goldenWheat.name} or Carrots. Earn 500-1,000 coins per cycle. Prioritize plot expansion over everything.` },
      { from: "Mid Game (30 min - 3 hrs)", mats: "3-4 plots, B-Tier+ mutations", stats: "Target 1,500-3,000 coins per harvest cycle. Roll B-Tier+ mutations on main plot. Hatch first Rare pet. Upgrade to Golden Wheat seeds." },
      { from: "Late Game (3-10 hrs)", mats: "4-6 plots, A-Tier+ mutations, A-Tier pet", stats: "Target 5,000-8,000 coins per cycle. A-Tier+ mutations on all plots. Legendary Egg hatched. S-Tier pet active. Stack Double Harvest Boosts." },
      { from: "Endgame (10+ hrs)", mats: "6+ plots, S-Tier mutations, S-Tier pet", stats: `Target 9,600+ coins per ${goldenWheat.name} harvest. Full Aurelian Crown + Golden Phoenix Chick synergy. 10,000+ coins-per-minute sustained.` },
    ],
    totalCost: "Approximately 75,000 Coins to build an endgame farm generating 10,000+ coins-per-minute",

    materials: [
      {
        name: `${goldenWheat.name} — The Best Crop`,
        icon: "🌾",
        desc: `${goldenWheat.coins} coins per ${goldenWheat.growthTime} = ${goldenWheat.coinsPerMinute} coins-per-minute. The most profitable crop by a wide margin. All-season availability means it is always the right choice for your main plots. No seasonal penalty, no time-of-day restriction — just pure, consistent profit.`,
        sources: [`Base value: ${goldenWheat.coins} coins`, `With ${aurelianCrown.name} (${aurelianCrown.multiplier.toFixed(1)}x): ${(goldenWheat.coins * aurelianCrown.multiplier).toFixed(0)} coins`, `With ${aurelianCrown.name} + ${goldenPhoenix.name} (${(aurelianCrown.multiplier * goldenPhoenix.multiplier).toFixed(1)}x total): ${(goldenWheat.coins * aurelianCrown.multiplier * goldenPhoenix.multiplier).toFixed(0)} coins`, `With Double Harvest Boost: ${(goldenWheat.coins * aurelianCrown.multiplier * goldenPhoenix.multiplier * 2).toFixed(0)} coins (single harvest)`],
        tip: `Always plant ${goldenWheat.name} on your highest-mutation plot. The high base value (${goldenWheat.coins} coins) means every multiplier scales harder. A 4.0x mutation on ${goldenWheat.name} (1,920 coins) outperforms the same mutation on Basic Potato (400 coins) by nearly 5x. Crop base value is the foundation — everything multiplies from it.`,
      },
      {
        name: `${crystalBerry.name} — Best AFK Crop`,
        icon: "💎",
        desc: `${crystalBerry.coins} coins per ${crystalBerry.growthTime} = ${crystalBerry.coinsPerMinute} coins-per-minute. Lower profit rate than ${goldenWheat.name} but the longer growth cycle means fewer replanting actions — ideal for semi-AFK and fully AFK farming sessions.`,
        sources: [`Base value: ${crystalBerry.coins} coins`, `With 4.0x mutation: ${(crystalBerry.coins * 4).toFixed(0)} coins`, `With 4.0x mutation + 5.0x pet: ${(crystalBerry.coins * 20).toFixed(0)} coins`],
        tip: `Plant ${crystalBerry.name} on all plots when you plan to be AFK for 5+ minutes. The longer cycle means you check in less frequently. For active play, ${goldenWheat.name} (3 min cycle, ${goldenWheat.coinsPerMinute} coins/min) generates 90% more income per minute. Match your crop to your play style.`,
      },
      {
        name: `${luckyCarrot.name} — Fastest Profit Crop`,
        icon: "🥕",
        desc: `${luckyCarrot.coins} coins per ${luckyCarrot.growthTime} = ${luckyCarrot.coinsPerMinute} coins-per-minute. The fastest non-C-tier crop. Excellent for active players who harvest frequently. The short 2-minute cycle demands attention but rewards with high throughput.`,
        sources: [`Base value: ${luckyCarrot.coins} coins`, `Coins-per-minute: ${luckyCarrot.coinsPerMinute} — second only to ${goldenWheat.name} among viable crops`, `Spring seasonal (+20% bonus during Spring)`],
        tip: `Use ${luckyCarrot.name} on secondary plots during active play sessions. The 2-minute cycle means you are harvesting 30 times per hour — each harvest with mutation and pet multipliers applied. This throughput can actually exceed ${goldenWheat.name} in raw coins-per-hour if you are fast enough. High-effort, high-reward.`,
      },
      {
        name: "Double Harvest Boost Strategy",
        icon: "⚡",
        desc: "Consumable that doubles your next harvest yield. The single most powerful coin multiplier in the game — but only for one harvest. Timing is everything.",
        sources: ["Promo codes (most reliable source)", "Daily spin wheel", "Seasonal events", "Premium shop (500 Coins each)"],
        tip: `Optimal use: wait for your ${aurelianCrown.name} (4.0x) plot to grow a ${goldenWheat.name} (${goldenWheat.coins} base) with ${goldenPhoenix.name} (5.0x) active, then pop the boost. Result: ${(goldenWheat.coins * aurelianCrown.multiplier * goldenPhoenix.multiplier * 2).toFixed(0)} coins from a single harvest. Never waste a Double Harvest Boost on an unmutated crop or a low-value seed.`,
      },
    ],

    bestUnitsSteps: [
      { step: "1", title: "Expand to 2 Plots Before Anything Else", desc: "Your first 400 Coins should buy a second plot. Two plots double your income. No mutation, pet, or seed upgrade provides a guaranteed 100% income boost for 400 Coins. Plot expansion is always the best early-game investment — it multiplies every other source of income." },
      { step: "2", title: "Upgrade Seeds Immediately After Plot Expansion", desc: `Wheat (50 coins) → Carrots (80 coins) → ${goldenWheat.name} (${goldenWheat.coins} coins). Each seed upgrade pays for itself in 2-3 harvest cycles. The jump from Wheat to ${goldenWheat.name} alone increases per-harvest income by ${((goldenWheat.coins / 50 - 1) * 100).toFixed(0)}%. Do this on every plot as soon as you can afford it.` },
      { step: "3", title: "Get Your First Pet Multiplier Online", desc: `A 500-Coin Basic Egg gives you a permanent farm-wide multiplier. Even Common Garden Cat (1.0x) teaches the mechanic, but any pet with 1.1x+ is pure profit. A 1.5x pet on 4 plots earning 500 coins each = 3,000 coins per cycle vs 2,000 without — the pet pays for itself in under 10 cycles.` },
      { step: "4", title: "Roll for B-Tier+ Mutations on Main Plot", desc: "Save 50+ Mutation Shards. Wait for a boosted event. Bulk roll 10 at once. Apply your best result to your Golden Wheat plot. A 2.2x Pyroclast Husk turns 480 coins into 1,056 — an immediate +576 coins per harvest. Mutations are the engine of mid-game coin scaling." },
      { step: "5", title: "Expand to 4-6 Plots for Compound Growth", desc: "Each additional plot is a multiplier on your mutation and pet investments. Going from 3 to 6 plots doubles your income without changing anything else. Plot 4 costs 1,200 Coins. Plot 5 costs 1,800 Coins. Plot 6 costs 2,500 Coins. Every single one is worth it — the ROI is permanent." },
      { step: "6", title: "Stack Mutation + Pet for Exponential Gains", desc: `This is where coin income explodes. ${aurelianCrown.name} (${aurelianCrown.multiplier.toFixed(1)}x) x ${goldenPhoenix.name} (${goldenPhoenix.multiplier.toFixed(1)}x) = ${(aurelianCrown.multiplier * goldenPhoenix.multiplier).toFixed(1)}x total multiplier. ${goldenWheat.name} base (${goldenWheat.coins}) x ${(aurelianCrown.multiplier * goldenPhoenix.multiplier).toFixed(1)}x = ${(goldenWheat.coins * aurelianCrown.multiplier * goldenPhoenix.multiplier).toFixed(0)} coins per harvest. On 6 plots: ${(goldenWheat.coins * aurelianCrown.multiplier * goldenPhoenix.multiplier * 6).toFixed(0)} coins per cycle. This is endgame farming.` },
      { step: "7", title: "Optimize AFK vs Active Income", desc: `Active play: ${goldenWheat.name} on all plots (3 min cycle, ${goldenWheat.coinsPerMinute} coins/min). Check every 3 minutes. Maximum profit, maximum effort. AFK play: ${crystalBerry.name} on all plots (5 min cycle, ${crystalBerry.coinsPerMinute} coins/min). Check every 5-10 minutes. 48% less profit but 70% less attention. Match your crop to your availability.` },
      { step: "8", title: "Reinvest Coins — Never Let Them Sit Idle", desc: "Coins in your balance earn nothing. Coins invested in a new plot, better seeds, or a Rare Egg generate permanent income. The compound growth effect is real: 5,000 Coins reinvested today might generate 50,000 Coins next week. Every Coin sitting idle is a missed opportunity. Always have a plan for your next purchase." },
    ],

    priorityList: [
      { tier: "S", unit: "Plot Expansion (up to 6 plots)", reason: "Each plot is a permanent, guaranteed income multiplier. No RNG, no conditions. Going from 1 to 6 plots multiplies all other investments by 6x. This is the single highest-ROI action in the game at every stage." },
      { tier: "S", unit: `Seed Upgrades → ${goldenWheat.name}`, reason: `${goldenWheat.name} (${goldenWheat.coins} coins, ${goldenWheat.coinsPerMinute} coins/min) is ${((goldenWheat.coinsPerMinute / 100 - 1) * 100).toFixed(0)}% more profitable than the next-best all-season crop. Upgrading from Wheat (50 coins) to ${goldenWheat.name} increases per-harvest income by ${((goldenWheat.coins / 50 - 1) * 100).toFixed(0)}%. Do this on every plot.` },
      { tier: "A", unit: `First Pet (any multiplier above 1.0x)`, reason: "A permanent farm-wide multiplier for 500 Coins. Even a 1.1x pet generates +10% income on every plot forever. Pays for itself in 5-10 cycles, then prints pure profit. There is no reason to delay this purchase beyond your first plot expansion." },
      { tier: "A", unit: `B-Tier+ Mutation on ${goldenWheat.name} Plot`, reason: `A 2.2x mutation on ${goldenWheat.name} turns ${goldenWheat.coins} into ${(goldenWheat.coins * 2.2).toFixed(0)} coins — the single largest per-harvest income spike in the mid-game. Save shards, wait for events, roll smart. One good mutation transforms your farm.` },
      { tier: "A", unit: `${aurelianCrown.name} (${aurelianCrown.multiplier.toFixed(1)}x) + ${goldenPhoenix.name} (${goldenPhoenix.multiplier.toFixed(1)}x)`, reason: `The ${(aurelianCrown.multiplier * goldenPhoenix.multiplier).toFixed(1)}x dream combo. ${(goldenWheat.coins * aurelianCrown.multiplier * goldenPhoenix.multiplier).toFixed(0)} coins per ${goldenWheat.name} harvest. This is the endgame target. Every Coin you earn should eventually fund this combination.` },
      { tier: "B", unit: "Double Harvest Boosts on Best Crop", reason: "A well-timed Double Harvest Boost doubles a single harvest. Applied to a fully-stacked Golden Wheat setup, one boost = 19,200 coins. Collect boosts from codes and save them for your highest-value harvests. Never use them casually." },
      { tier: "B", unit: `${leporineBloom.name} + ${luckyBunny.name} Seasonal Combo`, reason: `Seasonal exclusive synergy. ${leporineBloom.name} (${leporineBloom.multiplier.toFixed(1)}x) + ${luckyBunny.name} (${luckyBunny.multiplier.toFixed(1)}x) + 18% rabbit bonus = ~${(leporineBloom.multiplier * 1.18 * luckyBunny.multiplier).toFixed(1)}x effective. Obtainable only during Easter. If you have both, this is your secondary plot's dream setup.` },
      { tier: "C", unit: "Cosmetics, Decorations, Non-Essential Spending", reason: "Every Coin spent on a scarecrow skin is a Coin not spent on plot expansion, seed upgrades, or eggs. Cosmetics provide zero income. Delay all cosmetic purchases until you have 6 plots with A-Tier+ mutations and an S-Tier pet. Your farm should be profitable before it is pretty." },
    ],

    mistakes: [
      { title: "Buying Cosmetics Before Plots", desc: "The Farm Shop sells fences, scarecrow skins, and themed decorations. None generate a single Coin. A 400-Coin cosmetic is a permanent 0% ROI. A 400-Coin second plot is a permanent 100% ROI. The math is not ambiguous. Decorate your farm after it is profitable, not before." },
      { title: "Letting Coins Sit in Your Balance", desc: "5,000 Coins sitting in your balance earn 0 coins per minute. 5,000 Coins invested in a new plot earn income every harvest cycle forever. Idle coins are wasted potential. Always know what you are saving for and why. If you do not have a planned purchase within the next hour, reinvest." },
      { title: "Planting Low-Value Crops on High-Mutation Plots", desc: `A ${aurelianCrown.name} (${aurelianCrown.multiplier.toFixed(1)}x) on Basic Potato (100 coins) = 400 coins. The same mutation on ${goldenWheat.name} (${goldenWheat.coins} coins) = ${(goldenWheat.coins * aurelianCrown.multiplier).toFixed(0)} coins — ${((goldenWheat.coins * aurelianCrown.multiplier) / (100 * aurelianCrown.multiplier) - 1).toFixed(0)}% more. Always apply your best mutations to your highest-value crops. The base value is the multiplier's foundation.` },
      { title: "Using Double Harvest Boosts on Unoptimized Harvests", desc: "A Double Harvest Boost on an unmutated Wheat harvest (50 coins) doubles to 100 — a gain of 50 coins. The same boost on a fully-stacked Golden Wheat harvest (9,600 coins) doubles to 19,200 — a gain of 9,600 coins. Same item, 192x the value. Boost timing is the difference between wasting an item and printing money." },
      { title: "Ignoring AFK Income Potential", desc: "When you are not playing, your crops do not earn anything unless they were planted before you left. Always plant Crystal Berry (5 min cycle) before logging off or going AFK. Unharvested crops do not generate passive income — they just sit there. Five minutes of planning before AFK can net you 20,000+ coins while you are away." },
      { title: "Rolling Mutation Shards Outside Boosted Events", desc: "The math is definitive. 100 shards rolled normally = ~1 S-Tier result. 100 shards rolled during a +50% boosted event = ~5-6 S-Tier results. The event calendar should dictate your rolling schedule. Patience between events is literally worth 5x the shard value. Impatience is the most expensive mistake in the game." },
    ],

    faq: [
      { question: "What is the fastest way to make Coins in Grow a Garden?", answer: `Plant ${goldenWheat.name} (${goldenWheat.coinsPerMinute} coins/min) on all plots with your best mutations. Keep a high-tier pet active. Use Double Harvest Boosts on your best plot. Expand to 6 plots. At maximum optimization, you can earn 10,000+ coins per minute through mutation and pet stacking.` },
      { question: "Should I plant all-season or seasonal crops for money?", answer: `All-season crops (${goldenWheat.name}, ${crystalBerry.name}) provide consistent income year-round — always use them on your main plots. Seasonal crops (Neon Pumpkin, Frost Melon, Magma Pepper) are for secondary plots — plant them during their active season for the +20% bonus, then switch back. Consistent main-plot income funds everything else.` },
      { question: "How do mutations and pets stack for coin income?", answer: `They multiply together. ${aurelianCrown.name} (${aurelianCrown.multiplier.toFixed(1)}x) x ${goldenPhoenix.name} (${goldenPhoenix.multiplier.toFixed(1)}x) = ${(aurelianCrown.multiplier * goldenPhoenix.multiplier).toFixed(1)}x total. ${goldenWheat.name} (${goldenWheat.coins}) x ${(aurelianCrown.multiplier * goldenPhoenix.multiplier).toFixed(1)}x = ${(goldenWheat.coins * aurelianCrown.multiplier * goldenPhoenix.multiplier).toFixed(0)} coins per harvest. This multiplicative stacking is why you invest in both systems — the product is greater than the sum.` },
      { question: "How many plots should I buy before focusing on mutations?", answer: "Get 4 plots before seriously investing in mutations. Use free starter shards to learn the system, but spend Coins on plot expansion, not extra shards. Four plots with average mutations earn more than one plot with a perfect mutation. Plot count is the foundation — mutations are the multiplier on top." },
      { question: "What is the best AFK money-making strategy?", answer: `Plant ${crystalBerry.name} (5 min cycle) on all plots with your best mutations and pet active before going AFK. The longer cycle means you can check in every 5-10 minutes instead of every 3. For extended AFK (30+ minutes), plant Crystal Berry on all plots — you will return to a full harvest ready to collect.` },
      { question: "Are Double Harvest Boosts worth buying with Coins?", answer: "Only in the endgame. At 500 Coins each from the premium shop, a boost needs to generate more than 500 Coins in bonus value to be worth it. On a fully-stacked Golden Wheat harvest (9,600 coins), one boost generates 9,600 bonus coins — a 19x return. On an unmutated Wheat harvest (50 coins), it generates 50 bonus coins — a 0.1x return. The answer depends entirely on your farm setup." },
      { question: "When should I buy Rare and Legendary Eggs for coin farming?", answer: "Basic Egg (500 Coins) immediately — get any pet multiplier online. Rare Egg (2,000 Coins) after you have 3-4 plots with B-Tier+ mutations — the 2.0x+ pet multiplier amplifies everything. Legendary Egg (10,000 Coins) only in the endgame — when 10,000 Coins is less than 10 minutes of farming income. The egg tier you buy should match your farm's income level." },
      { question: "How do seasonal events affect coin farming?", answer: "Seasonal events provide boosted mutation roll rates (+50% S/A-Tier odds) — this is when you spend saved Mutation Shards to upgrade your plots. Events also drop limited-time crops and pets that may have unique synergy bonuses. Plan your shard saving around the event calendar: save between events, spend during events. The cycle repeats four times per year." },
    ],

    relatedGuides: [
      { label: "Crop Value List", href: "/grow-a-garden/crop-value-list", description: "Every crop ranked by coins-per-minute and profit potential" },
      { label: "Best Mutations Guide", href: "/grow-a-garden/best-mutations", description: "Mutation rolling strategy and optimal plot setups" },
      { label: "Best Pets Guide", href: "/grow-a-garden/best-pets", description: "Maximize coin income with the right pet multipliers" },
      { label: "Active Codes", href: "/grow-a-garden/codes", description: "Get free Coins, boosts, and shards from promo codes" },
    ],
  };
}

const data = buildMoneyGuideData();
export default data;
