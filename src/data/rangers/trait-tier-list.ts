import type { TierListPageData } from "../types";

const data: TierListPageData = {
  title: "Anime Rangers X Trait Tier List — Every Trait Ranked (July 2026)",
  description: "All traits ranked from Mythic to Common with detailed strengths, weaknesses, optimal unit pairings, and reroll strategy. Includes the Re:Rangers trait system rework changes.",
  updatedAt: "July 7, 2026",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Anime Rangers X Trait Tier List", href: "/anime-rangers-x/trait-tier-list" },
  ],
  tierExplanation: [
    { tier: "Mythic", color: "#FF3D00", label: "Game-changing", desc: "Best traits; define your build" },
    { tier: "Legendary", color: "#FF8C00", label: "Excellent", desc: "Strong universal traits" },
    { tier: "Epic", color: "#A020F0", label: "Solid", desc: "Viable; strong in specific roles" },
    { tier: "Rare/Common", color: "#3A86FF", label: "Budget", desc: "Placeholder; replace when possible" },
  ],
  tiers: [
    { name: "Mythic-Tier — Game-Changing Traits", description: "These traits fundamentally alter how a unit plays. Extremely rare rolls but worth every Trait Roll you spend chasing them. Now featuring 2026 Anime Crossover traits.", entries: [
      { name: "Time Rewind", tier: "Mythic", description: "Reset all cooldowns on kill" },
      { name: "God-Speed", tier: "Mythic", description: "+50% attack speed, stacking per kill" },
      { name: "Dual Wield", tier: "Mythic", description: "2026 SAO crossover — every attack hits twice at 75% ATK each, including ultimates" },
      { name: "Sharingan", tier: "Mythic", description: "2026 Naruto crossover — 25% chance to copy the next enemy ability; +20% crit rate" },
    ]},
    { name: "Legendary-Tier — Excellent Traits", description: "Powerful universal traits that work on nearly any unit. Much easier to roll than Mythic traits and provide consistent value.", entries: [
      { name: "Monarch", tier: "Legendary", description: "+30% all stats when HP above 80%" },
      { name: "Void Touch", tier: "Legendary", description: "Attacks ignore 25% enemy defense" },
      { name: "Spirit Bomb", tier: "Legendary", description: "2026 DBZ crossover — -30% ultimate cooldown, +10% max HP true damage proc" },
      { name: "Rasengan", tier: "Legendary", description: "2026 Naruto crossover — +5% damage per shadow clone spawned, stacking" },
      { name: "Bankai", tier: "Legendary", description: "2026 Bleach crossover — +40% ATK below 50% HP, bloodlust inverse scaling" },
    ]},
    { name: "Epic-Tier — Solid Role Traits", description: "Viable traits that excel in specific roles — farming, support, or sustain. Keep these until you roll a Legendary or Mythic upgrade.", entries: [
      { name: "Drop Rate+", tier: "Epic", description: "+20% gem and stone drop rate" },
      { name: "Cooldown-", tier: "Epic", description: "-15% ability cooldown time" },
      { name: "Lifesteal", tier: "Epic", description: "Heal 10% of damage dealt" },
      { name: "Haki", tier: "Epic", description: "2026 One Piece crossover — 15% chance to stun on hit, ignores enemy shields" },
      { name: "Nen Boost", tier: "Epic", description: "2026 HxH crossover — +12% ATK, +12% DEF; doubles below 30% HP" },
    ]},
    { name: "Rare & Common-Tier — Budget Traits", description: "Basic traits that serve as placeholders. Replace as soon as you roll anything Epic or higher.", entries: [
      { name: "Fortress", tier: "Rare", description: "+15% defense, taunt enemies on hit" },
      { name: "Scout", tier: "Rare", description: "+10% movement speed, detect invisible" },
      { name: "Basic ATK+", tier: "Common", description: "+5% base attack damage" },
    ]},
  ],
  detailCards: [
    { name: "Time Rewind", rank: "Mythic-Tier #1", desc: "The single best trait. Resets all ability cooldowns instantly on kill, enabling infinite ultimate chains on high-DPS units. At high wave density, this trait effectively removes cooldowns as a mechanic.", strengths: ["Enables infinite ultimate chains","Scales infinitely with wave density","Best-in-slot on Chrono Slayer","No downside or conditional requirement"], weaknesses: ["Mythic rarity — extremely rare roll","Less effective on low-kill-speed units","Wasted on support units that rarely land kills","Overkill in easy content"], bestOn: "Chrono Slayer (S-Tier synergy). Also strong on Void Empress for AOE ult spam. Do not waste on support or tank units.", color: "#FF3D00" },
    { name: "God-Speed", rank: "Mythic-Tier #2", desc: "Massive attack speed steroid that stacks +50% per kill, cumulatively turning any unit into a blender. Especially devastating on units with built-in attack speed buffs like Storm Ronin.", strengths: ["+50% attack speed per kill stacks infinitely","Turns any DPS unit into a hyper-carry","Exceptional on Storm Ronin (stacks with speed buff)","Dominates wave-clear and farming content"], weaknesses: ["Requires kills to stack — weak start","Stacks reset on unit death","Less effective against single bosses","Mythic rarity makes it hard to obtain"], bestOn: "Storm Ronin (S-Tier synergy for speed farming). Also excellent on Blaze Archon for rapid burn application.", color: "#FF3D00" },
    { name: "Dual Wield", rank: "Mythic-Tier #3 — 2026 SAO Crossover", desc: "The 2026 SAO crossover's flagship trait. Every attack — including ultimates — strikes twice at 75% ATK per hit, a flat +50% effective damage multiplier that scales with every buff and stat. Unlike Time Rewind (kill-dependent) or God-Speed (stacking), Dual Wield delivers its full value from the very first hit. The true power emerges when paired with Kirito, whose Dual Wield passive procs on every dual-hit, doubling the multiplier again for 2.25x effective damage on every attack.", strengths: ["+50% damage on every attack from first hit — no ramp","Doubles ultimate hit count — absurd burst value","Scales multiplicatively with all buffs and passives","Namesake synergy with Kirito's Dual Wield passive"], weaknesses: ["Mythic rarity — extremely rare roll","Second hit deals only 75% ATK — not a true 2x multiplier","No defensive or utility value — pure damage","Wasted on tanks, healers, and CC supports"], bestOn: "Kirito (S-Tier namesake synergy — passive procs on every Dual Wield hit). Also exceptional on Goku and Chrono Slayer for ultimate burst amplification.", color: "#FF3D00" },
    { name: "Sharingan", rank: "Mythic-Tier #4 — 2026 Naruto Crossover", desc: "The 2026 Naruto crossover's flagship trait and the only trait in the game that interacts with enemy abilities. Grants a 25% chance on hit to copy the next enemy ability cast within 5 seconds — usable once. Also provides a passive +20% critical rate. The copy inherits the enemy's element, damage scaling, and cooldown, making it uniquely powerful against bosses with strong abilities. Highly variable in value but game-breaking when it lands a key copy in boss content.", strengths: ["Only trait that copies enemy abilities — unique mechanic","+20% passive crit rate is a strong universal boost","Scales infinitely against boss-heavy content","Game-changing when a key ability is copied"], weaknesses: ["25% proc chance — RNG-dependent","Copy is single-use and time-limited (5s window)","Less effective against trash mobs without notable abilities","Mythic rarity and RNG make it unreliable for consistent value"], bestOn: "Sasuke (S-Tier namesake synergy for thematic accuracy). Also strong on any high-DPS unit pushing boss content. Avoid on support or farming units.", color: "#FF3D00" },
    { name: "Monarch", rank: "Legendary-Tier #3", desc: "+30% to all stats (ATK, DEF, SPD) while above 80% HP. A straightforward, consistent power boost that rewards good positioning and heal support.", strengths: ["+30% all stats is a massive universal boost","No kill requirement","Works on any unit role","Legendary rarity — easier to roll than Mythic"], weaknesses: ["Deactivates below 80% HP","Requires healer support to maintain uptime","Less peak potential than Mythic traits","Wasted if you take frequent chip damage"], bestOn: "Blaze Archon or any DPS with Tide Guardian support. Also strong on Frost Monarch for tankier CC support.", color: "#FF8C00" },
    { name: "Void Touch", rank: "Legendary-Tier #4", desc: "Attacks ignore 25% of enemy defense. Equivalent to a ~33% damage increase against high-defense targets (wave 60+ bosses). Scales better the further you push.", strengths: ["Effective ~33% damage increase vs high-defense","Scales better in late-game content","No activation condition","Excellent for boss-killing"], weaknesses: ["Less effective vs low-defense enemies","No benefit to non-damage stats","Slightly weaker than Monarch in easy content","Dark element locked — only Void Empress gains full value"], bestOn: "Void Empress (namesake synergy). Strong on any DPS unit pushing past wave 60.", color: "#FF8C00" },
    { name: "Drop Rate+", rank: "Epic-Tier #5", desc: "Increases gem and Evolution Stone drop rates by 20%. Not a combat trait, but the most valuable farming trait. Over hundreds of runs, the resource acceleration is unmatched.", strengths: ["+20% resource drops accelerates all progression","Stacks with event drop bonuses","Best trait for dedicated farming loadouts","Epic rarity — easy to obtain"], weaknesses: ["Zero combat benefit","Useless in boss fights and progression pushes","Takes up a trait slot that could be damage","Only valuable when actively farming"], bestOn: "Any dedicated farming unit. Equip on a secondary unit in your speed farm team. Swap for progression content.", color: "#A020F0" },
    { name: "Cooldown-", rank: "Epic-Tier #6", desc: "Reduces all ability cooldowns by 15%. A reliable support trait that improves ability uptime across the board. Valuable on units with long base cooldowns.", strengths: ["Universal cooldown reduction for all abilities","Scales well with long-cooldown units","Improves team survivability through more frequent heals/CC","Epic rarity — accessible"], weaknesses: ["Only 15% reduction — modest impact","Less valuable on spammy units","No direct damage or stat increase","Outclassed by Time Rewind on kill-heavy units"], bestOn: "Frost Monarch and Tide Guardian (reduces critical support cooldowns). Also useful on Void Empress. Avoid on Chrono Slayer.", color: "#A020F0" },
    { name: "Fortress", rank: "Rare-Tier", desc: "+15% defense and taunts enemies on hit. A solid defensive trait that helps dedicated tanks hold aggro and survive longer.", strengths: ["Extra defense and built-in taunt utility","Helps tanks maintain aggro","Easy to roll (Rare tier)","Decent budget option for tank units"], weaknesses: ["Only 15% defense — modest mitigation","Taunt is weaker than Stone Colossus's ability","Outclassed by higher-tier traits","No offensive benefit"], bestOn: "Stone Colossus (stacks with his existing taunt). Budget option for any frontline unit. Replace with Monarch or Mythic trait.", color: "#3A86FF" },
    { name: "Scout", rank: "Rare-Tier", desc: "+10% movement speed and the ability to detect invisible enemies. A niche utility trait valuable in specific content with stealth enemies.", strengths: ["Movement speed helps with dodging","Detects invisible enemies (niche content)","Easy to roll (Rare tier)"], weaknesses: ["Only 10% speed — barely noticeable","Invisible detection useless in most content","No combat stat bonus","Outclassed by almost any other trait"], bestOn: "Wind Scout for thematic synergy. Budget placeholder. Not recommended for serious content.", color: "#3A86FF" },
  ],
  pairingTable: [
    { trait: "Time Rewind", unit: "Chrono Slayer", why: "Infinite ultimate chains at wave 80+" },
    { trait: "God-Speed", unit: "Storm Ronin", why: "Maximum DPS for speed farming" },
    { trait: "Void Touch", unit: "Void Empress", why: "Amplifies AOE nuke with 25% defense pen" },
    { trait: "Monarch", unit: "Blaze Archon", why: "+30% all stats — best universal Legendary" },
    { trait: "Drop Rate+", unit: "Farm unit", why: "Best on dedicated gem-farming loadouts" },
    { trait: "Cooldown-", unit: "Frost Monarch", why: "More frequent freezes = safer high-wave pushes" },
  ],
  faq: [
    { question: "What is the best trait in Anime Rangers X?", answer: "Time Rewind (Mythic #1) is the best trait — it resets all cooldowns on kill, enabling infinite ultimate chains on Chrono Slayer. God-Speed (Mythic #2) is the best farming trait with its stacking +50% attack speed per kill." },
    { question: "How do I get better traits?", answer: "Use Trait Rolls obtained from promo codes, events, and gem purchases. Save your rolls for Mythic and Legendary units. Stack multiple rolls for better odds during trait-boosted events." },
    { question: "Can I change a trait after applying it?", answer: "Yes, rerolling replaces the current trait permanently. There is no refund. The Re:Rangers update added a trait lock feature for 50 Gems that prevents accidental rerolls." },
    { question: "Which trait is best for beginners?", answer: "Monarch (Legendary) is the best beginner-friendly trait — +30% all stats with a simple HP condition. It is significantly easier to roll than Mythic traits and works on any unit. Pair with Tide Guardian to maintain the 80% HP threshold." },
  ],
  relatedGuides: [
    { label: "Unit Tier List", href: "/anime-rangers-x/unit-tier-list", description: "See which units deserve your best traits" },
    { label: "Evolution Guide", href: "/anime-rangers-x/evolution-guide", description: "Evolve units to unlock more trait slots" },
    { label: "Active Codes", href: "/anime-rangers-x/codes", description: "Get free Trait Rolls from promo codes" },
  ],
};

export default data;
