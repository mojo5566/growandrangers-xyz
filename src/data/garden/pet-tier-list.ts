import type { TierListPageData } from "../types";
import { pets, getPetsByTier } from "./database/pets";

export interface PetTierTableRow {
  name: string;
  tier: string;
  ability: string;
  bestUse: string;
  source: string;
  mutationCompatibility: string;
  why: string;
}

export interface PetComparisonPick {
  name: string;
  href: string;
  rationale: string;
}

export interface PetComparisonSection {
  title: string;
  summary: string;
  picks: PetComparisonPick[];
}

type PetDetailCard = TierListPageData["detailCards"][number] & {
  bestUse: string;
  decision: string;
  evidence: string[];
};

type PetTierListData = Omit<TierListPageData, "detailCards"> & {
  detailCards: PetDetailCard[];
  tierRows: Record<"S" | "A" | "B" | "C", PetTierTableRow[]>;
  dataScope: string[];
  rankingMethod: string[];
  comparisonSections: PetComparisonSection[];
  beginnerPath: { step: string; title: string; guidance: string; href: string; linkLabel: string }[];
};

const petUseNotes: Record<string, { bestUse: string; mutationCompatibility: string; limitation: string }> = {
  "golden-phoenix-chick": {
    bestUse: "All-season harvesting when you want the highest recorded general multiplier and automatic collection.",
    mutationCompatibility: "Works with any mutation in this database; no named conditional synergy is recorded.",
    limitation: "The database records no source odds, so treat it as a target pet rather than a planned short-term purchase.",
  },
  "crystal-unicorn-foal": {
    bestUse: "Short-cycle crops where a double-harvest proc can increase the ceiling of each run.",
    mutationCompatibility: "No named conditional pairing is recorded; compare the base multiplier with your crop plan.",
    limitation: "The double-harvest effect is chance-based in the recorded ability, so income can vary between harvests.",
  },
  "neon-dragon-hatchling": {
    bestUse: "Farms where fire protection and a strong general multiplier solve a real crop-loss risk.",
    mutationCompatibility: "No named conditional mutation pairing is recorded.",
    limitation: "Fire protection only matters when that threat is relevant to your current crop route.",
  },
  "celestial-fox-kit": {
    bestUse: "Night-focused farming that can consistently use its time-gated bonus.",
    mutationCompatibility: "The database records a night-time pairing with night-active mutations; verify current rules in game.",
    limitation: "Its recorded bonus is tied to night play, so it is less compelling for daytime-only sessions.",
  },
  "lucky-clover-bunny": {
    bestUse: "Players who already use Leporine Bloom and want a rabbit-type synergy.",
    mutationCompatibility: "Named pairing: Leporine Bloom; the database records an additional 18% bonus for that combination.",
    limitation: "The recorded value depends on owning the matching mutation and on seasonal availability.",
  },
  "frost-wolf-pup": {
    bestUse: "Winter-focused farming where its seasonal multiplier and Winter mutation pairing are active.",
    mutationCompatibility: "Named pairing: Hoarfrost Corolla and other Winter-focused entries in the database.",
    limitation: "Its best recorded value is seasonal, so compare its normal state before using it year-round.",
  },
  "magma-lizard-hatchling": {
    bestUse: "Summer rotations that can use its seasonal multiplier and fire-adjacent mutation pairing.",
    mutationCompatibility: "Named pairing: Igneous Spore and other Summer/fire-focused entries in the database.",
    limitation: "Its strongest recorded use is Summer-specific rather than a permanent all-purpose upgrade.",
  },
  "aqua-otter-kit": {
    bestUse: "Large farms where automatic watering removes repeated manual work.",
    mutationCompatibility: "The database notes overlap with Crystalline Mycelium's watering utility; compare before investing.",
    limitation: "Automatic watering loses value when another equipped effect already covers watering.",
  },
  "thunder-hawk-chick": {
    bestUse: "Early active play when a Basic Egg pet and faster harvest actions matter more than peak multiplier.",
    mutationCompatibility: "No named conditional mutation pairing is recorded.",
    limitation: "Its recorded multiplier is lower than Rare Egg and Legendary Egg options, so it is mainly an early stepping stone.",
  },
  "bamboo-panda-cub": {
    bestUse: "Consistent players who can maintain consecutive harvest cycles while building a first upgrade path.",
    mutationCompatibility: "No named conditional mutation pairing is recorded.",
    limitation: "The stacking effect depends on repeated harvests, so missed cycles reduce its practical value.",
  },
  "common-garden-cat": {
    bestUse: "Learning the pet system before a player has a meaningful farming passive.",
    mutationCompatibility: "No gameplay mutation compatibility is recorded.",
    limitation: "A 1.0x recorded multiplier means it does not improve harvest value.",
  },
  "dust-bunny": {
    bestUse: "Cosmetic collecting rather than crop progression.",
    mutationCompatibility: "No gameplay mutation compatibility is recorded.",
    limitation: "A 1.0x recorded multiplier and cosmetic-only ability make it a collection pick, not a farming pick.",
  },
  "golden-dragon": {
    bestUse: "Golden-tier crop farms that can consistently use its crop-specific value effect.",
    mutationCompatibility: "The database describes synergy with gold-focused crop and mutation entries; it is not universal.",
    limitation: "Its recorded passive is crop-specific, so it is less universal than an all-crop multiplier pet.",
  },
  "phoenix-hatchling": {
    bestUse: "Protecting an important crop from a single wilt or spoil event while retaining a strong multiplier.",
    mutationCompatibility: "No named conditional mutation pairing is recorded.",
    limitation: "The recorded revival effect is limited, so it should protect priority crops rather than replace good routing.",
  },
  "forest-fox-kit": {
    bestUse: "Expansion phases where bonus seed drops help grow the farm over several harvests.",
    mutationCompatibility: "No named conditional mutation pairing is recorded.",
    limitation: "Seed drops are chance-based in the recorded ability, so its payoff is less direct than a higher multiplier.",
  },
  "night-owl": {
    bestUse: "Night-hour farming where harvest speed is more valuable than an all-day bonus.",
    mutationCompatibility: "Named pairing: Phosphor Sporebloom and other night-active entries in the database.",
    limitation: "Its recorded bonus is tied to night hours, so it needs the right play schedule.",
  },
  "garden-turtle": {
    bestUse: "Patient players farming slower, higher-value crops and accepting longer growth cycles.",
    mutationCompatibility: "No named conditional mutation pairing is recorded.",
    limitation: "The recorded trade-off slows growth, which can hurt active short-cycle farming.",
  },
  "common-bunny": {
    bestUse: "Early active play when a small harvest-speed improvement is available from a Basic Egg.",
    mutationCompatibility: "The database explicitly records no Leporine Bloom synergy.",
    limitation: "Its recorded multiplier and speed bonus are both modest compared with B-Tier options.",
  },
  "garden-caterpillar": {
    bestUse: "Multi-plot farms where adjacent-plot growth support is more useful than personal multiplier.",
    mutationCompatibility: "No named conditional mutation pairing is recorded.",
    limitation: "The recorded benefit is adjacency-based, so layout matters more than raw pet strength.",
  },
  "garden-snail": {
    bestUse: "Collection or experimentation with its tile-based trail effect.",
    mutationCompatibility: "No named conditional mutation pairing is recorded.",
    limitation: "Its recorded direct multiplier is 1.0x and the trail effect is narrow.",
  },
  "shadow-cat": {
    bestUse: "Night-time mutation farming and Campfire Ritual progression when those systems are active.",
    mutationCompatibility: "The database records night mutation and Inferno Shard interactions; verify event availability first.",
    limitation: "Its recorded shard and mutation value depends on night timing and event-system availability.",
  },
  "flame-bear": {
    bestUse: "Summer or fire-crop rotations that can use its coin bonus and spoilage protection.",
    mutationCompatibility: "Named pairing: Pyroclast Husk and other fire-adjacent entries in the database.",
    limitation: "Its recorded best case requires fire crops or Summer conditions rather than general farming.",
  },
};

function noteFor(pet: (typeof pets)[number]) {
  const note = petUseNotes[pet.id];
  return {
    bestUse: note?.bestUse ?? pet.abilities[0],
    mutationCompatibility: note?.mutationCompatibility ?? "No named conditional mutation pairing is recorded.",
    decision: note?.limitation ?? "Use it only while its recorded ability fits your current farm plan.",
  };
}

function buildPetTierListData(): PetTierListData {
  const tierColors: Record<string, string> = {
    S: "#FF3D00",
    A: "#FF8C00",
    B: "#FFD700",
    C: "#3A86FF",
  };
  const tierLabels: Record<string, string> = {
    S: "Best-in-slot",
    A: "Excellent",
    B: "Solid",
    C: "Budget",
  };
  const tierDescs: Record<string, string> = {
    S: "The highest-ranked records in this database for broad farming value. Their abilities still need to match your crops and play time.",
    A: "Strong alternatives that either give up some general power or become better in a specific situation.",
    B: "Useful seasonal, utility, or budget choices that can remain practical while your farm is developing.",
    C: "Starter or narrow-use records. They can be useful temporarily, but their limitations should guide your next upgrade.",
  };
  const tierOrder = ["S", "A", "B", "C"] as const;
  const tierPets = {
    S: getPetsByTier("S"),
    A: getPetsByTier("A"),
    B: getPetsByTier("B"),
    C: getPetsByTier("C"),
  };

  const tierRows = Object.fromEntries(
    tierOrder.map((tier) => [
      tier,
      tierPets[tier].map((pet) => {
        const note = noteFor(pet);
        return {
          name: pet.name,
          tier: pet.tier,
          ability: pet.abilities.join("; "),
          bestUse: note.bestUse,
          source: pet.source,
          mutationCompatibility: note.mutationCompatibility,
          why: pet.multiplier.toFixed(1) + "x recorded multiplier; " + note.bestUse,
        };
      }),
    ]),
  ) as Record<"S" | "A" | "B" | "C", PetTierTableRow[]>;

  return {
    title: "Grow a Garden Pet Tier List - S to C Ranking",
    description:
      "Compare the 22 pets in the current Grow a Garden database by tier, ability, source, money-making value, and mutation fit. Unverified roster data is intentionally excluded.",
    updatedAt: "August 3, 2026",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Grow a Garden Pet Tier List", href: "/grow-a-garden/pet-tier-list" },
    ],
    tierExplanation: tierOrder.map((tier) => ({
      tier,
      color: tierColors[tier],
      label: tierLabels[tier],
      desc:
        tier === "S"
          ? "Highest recorded general value"
          : tier === "A"
            ? "Strong alternatives and synergies"
            : tier === "B"
              ? "Seasonal, utility, or budget picks"
              : "Starter and narrow-use options",
    })),
    tiers: tierOrder.map((tier) => ({
      name: tier + "-Tier - " + tierLabels[tier] + " Pets",
      description: tierDescs[tier],
      entries: tierPets[tier].map((pet) => ({
        name: pet.name,
        tier: pet.tier,
        description: pet.multiplier.toFixed(1) + "x recorded multiplier, " + pet.abilities[0].toLowerCase(),
      })),
    })),
    tierRows,
    dataScope: [
      "This page ranks the 22 pet records currently present in the canonical pets database.",
      "Multiplier, ability, tier, source, seasonal notes, and named synergies are shown only when recorded in that database.",
      "The list does not claim to be the complete live-game roster. Unverified pets, drop rates, prices, and version changes are intentionally excluded.",
      "Check the current game client and official channels before spending Coins or relying on a seasonal interaction.",
    ],
    rankingMethod: [
      "The editorial tier combines the recorded multiplier, ability usefulness, source accessibility, and fit for common farming goals.",
      "S-Tier favors broad value; A, B, and C include increasingly conditional, budget, starter, or collection-focused choices.",
      "Seasonal and time-gated bonuses are treated as conditional rather than permanent upgrades.",
      "No live market value, unsourced drop rate, or assumed pity system is used to create a rank.",
    ],
    comparisonSections: [
      {
        title: "Best Overall Pets",
        summary: "Use these when you want broad farming value rather than a narrow seasonal effect.",
        picks: [
          { name: "Golden Phoenix Chick", href: "/grow-a-garden/pets/golden-phoenix-chick", rationale: "Highest recorded multiplier in this database with automatic collection." },
          { name: "Crystal Unicorn Foal", href: "/grow-a-garden/pets/crystal-unicorn-foal", rationale: "Strong multiplier with a double-harvest proc for short-cycle crops." },
          { name: "Golden Dragon", href: "/grow-a-garden/pets/golden-dragon", rationale: "Near-top multiplier when your farm actually uses golden-tier crops." },
        ],
      },
      {
        title: "Best Beginner Pets",
        summary: "Prioritize useful, accessible effects before chasing a premium or seasonal record.",
        picks: [
          { name: "Thunder Hawk Chick", href: "/grow-a-garden/pets/thunder-hawk-chick", rationale: "Basic Egg access and faster harvest actions support active early play." },
          { name: "Garden Turtle", href: "/grow-a-garden/pets/garden-turtle", rationale: "Basic Egg option for patient players using longer crop cycles." },
          { name: "Forest Fox Kit", href: "/grow-a-garden/pets/forest-fox-kit", rationale: "Bonus seed drops can help while expanding a new farm." },
        ],
      },
      {
        title: "Best Money-Making Pets",
        summary: "These picks are based on recorded multiplier or crop-value effects, not a live market price.",
        picks: [
          { name: "Golden Phoenix Chick", href: "/grow-a-garden/pets/golden-phoenix-chick", rationale: "Broad multiplier and automatic collection suit general harvest income." },
          { name: "Golden Dragon", href: "/grow-a-garden/pets/golden-dragon", rationale: "Its recorded effect is strongest on golden-tier crops." },
          { name: "Crystal Unicorn Foal", href: "/grow-a-garden/pets/crystal-unicorn-foal", rationale: "Double-harvest upside can help short-cycle farming runs." },
        ],
      },
      {
        title: "Best Mutation Pets",
        summary: "Choose a pet only when the named mutation or event condition is part of your plan.",
        picks: [
          { name: "Lucky Clover Bunny", href: "/grow-a-garden/pets/lucky-clover-bunny", rationale: "Recorded Leporine Bloom synergy makes it a focused rabbit-type choice." },
          { name: "Shadow Cat", href: "/grow-a-garden/pets/shadow-cat", rationale: "Recorded night mutation and Inferno Shard interactions support a Campfire-focused build." },
          { name: "Night Owl", href: "/grow-a-garden/pets/night-owl", rationale: "Recorded night-hour pairing favors mutation sessions on that schedule." },
        ],
      },
      {
        title: "Best Easily Obtainable Pets",
        summary: "These records come from Basic Eggs and are useful before a player has premium options.",
        picks: [
          { name: "Thunder Hawk Chick", href: "/grow-a-garden/pets/thunder-hawk-chick", rationale: "Practical early harvest utility from a Basic Egg." },
          { name: "Garden Turtle", href: "/grow-a-garden/pets/garden-turtle", rationale: "A budget option for slower, higher-value crop cycles." },
          { name: "Common Bunny", href: "/grow-a-garden/pets/common-bunny", rationale: "Small active-play improvement while saving for a stronger pet." },
        ],
      },
      {
        title: "Conditional or Overrated Picks",
        summary: "These pets are not automatically bad; their value drops when the recorded condition is not part of your play.",
        picks: [
          { name: "Frost Wolf Pup", href: "/grow-a-garden/pets/frost-wolf-pup", rationale: "Its peak value is seasonal, so all-season players may prefer a generalist." },
          { name: "Aqua Otter Kit", href: "/grow-a-garden/pets/aqua-otter-kit", rationale: "Automatic watering is less valuable when another effect already covers that task." },
          { name: "Golden Dragon", href: "/grow-a-garden/pets/golden-dragon", rationale: "Its crop-specific effect is harder to justify on a non-golden farm." },
        ],
      },
    ],
    beginnerPath: [
      {
        step: "1",
        title: "Start with a recorded Basic Egg option",
        guidance:
          "For a new farm, use Basic Egg records such as Thunder Hawk Chick, Garden Turtle, Common Bunny, or Bamboo Panda Cub as temporary tools. The goal is to get a usable pet effect without treating the first hatch as a final build.",
        href: "/grow-a-garden/beginner-guide",
        linkLabel: "Beginner Guide",
      },
      {
        step: "2",
        title: "Switch from starter value to farming value",
        guidance:
          "Once your crop route is stable, prioritize a pet that improves normal harvest income or removes a real bottleneck. Golden Phoenix Chick, Golden Dragon, and Crystal Unicorn Foal are the strongest money-focused records on this page, but their sources are not presented as guaranteed outcomes.",
        href: "/grow-a-garden/money-making-guide",
        linkLabel: "Money Making Guide",
      },
      {
        step: "3",
        title: "Use mutation pets only when the condition is active",
        guidance:
          "Lucky Clover Bunny, Night Owl, Shadow Cat, Frost Wolf Pup, Magma Lizard Hatchling, and Flame Bear are best judged by their recorded condition. Do not rank a conditional bonus as permanent unless your farm actually uses that mutation, season, time window, or event system.",
        href: "/grow-a-garden/mutation-tier-list",
        linkLabel: "Mutation Tier List",
      },
    ],
    detailCards: pets.map((pet) => {
      const note = noteFor(pet);
      return {
        name: pet.name,
        rank: "Why " + pet.tier + "-Tier",
        desc:
          pet.name +
          " is ranked from the recorded " +
          pet.multiplier.toFixed(1) +
          "x multiplier, " +
          pet.source +
          " source, and ability: " +
          pet.abilities.join("; ") +
          ".",
        strengths: pet.strengths,
        weaknesses: pet.weaknesses,
        bestUse: note.bestUse,
        decision: note.decision,
        bestOn: pet.source,
        evidence: [
          pet.multiplier.toFixed(1) + "x recorded multiplier",
          pet.source + " source",
          pet.abilities.join("; "),
        ],
        color: tierColors[pet.tier],
      };
    }),
    strategyTips: [
      "Match the pet to the job: general multiplier for regular harvests, utility for a real farm bottleneck, and seasonal or mutation pets only when their condition is active.",
      "Compare your current pet with the table before spending on another egg. This guide does not assume an exact drop rate or guarantee a particular result.",
      "Use the Grow a Garden Codes page for rewards currently listed there, then verify the code and reward in the game client because codes and requirements can change.",
      "When a pet's value is conditional, compare its base effect with an all-season alternative instead of treating the peak bonus as permanent.",
    ],
    pairingTable: [
      { trait: "Golden Phoenix Chick (5.0x)", unit: "Aurelian Crown context (4.0x)", why: "20.0x recorded example" },
      { trait: "Crystal Unicorn Foal (4.5x)", unit: "Aurelian Crown context (4.0x)", why: "18.0x recorded example" },
      { trait: "Lucky Clover Bunny (3.2x)", unit: "Leporine Bloom (+18%)", why: "14.0x recorded example" },
      { trait: "Neon Dragon Hatchling (3.5x)", unit: "Crystalline Mycelium context (3.5x)", why: "12.3x recorded example" },
      { trait: "Celestial Fox Kit (3.0x)", unit: "Phosphor Sporebloom context (3.0x)", why: "9.0x recorded example" },
    ],
    faq: [
      {
        question: "What is the best pet in Grow a Garden?",
        answer: "Within the 22 records in this site's canonical database, Golden Phoenix Chick has the highest recorded multiplier and automatic collection. That is a database comparison, not an official live-game guarantee; verify the current client before spending for it.",
      },
      {
        question: "Which pet is best for beginners?",
        answer: "Thunder Hawk Chick is the clearest early option in this database because it is listed as a Basic Egg pet with a faster harvest action. Garden Turtle and Common Bunny are other budget records, but each has a narrower trade-off.",
      },
      {
        question: "Which pets are best for mutations?",
        answer: "Use Lucky Clover Bunny for the recorded Leporine Bloom pairing, Shadow Cat for the recorded night mutation and Campfire interactions, or Night Owl for a night-focused setup. These are conditional recommendations, not universal rankings.",
      },
      {
        question: "Which pet is best for making money?",
        answer: "Golden Phoenix Chick is the broadest multiplier choice in this database. Golden Dragon is more specialized for golden-tier crops, while Crystal Unicorn Foal trades consistency for double-harvest upside. No live market or coins-per-hour claim is made here.",
      },
      {
        question: "How do I get each pet?",
        answer: "Use the Source field in the tier cards or open a pet detail page for the recorded source: Basic Egg, Rare Egg, Legendary Egg, or Seasonal Event. Exact odds and current event availability are not claimed unless the database records them.",
      },
      {
        question: "Are lower-tier pets still worth using?",
        answer: "Yes, when they are accessible or solve a specific early-game problem. B-Tier and C-Tier pets can be useful as temporary, seasonal, utility, or collection choices; replace them when a higher-value pet improves your normal farming loop.",
      },
      {
        question: "Is this a complete live-game pet list?",
        answer: "No. It ranks the 22 pet records currently present in the site's canonical database. Pets or mechanics that cannot be verified from the current data are intentionally not added just to match a larger third-party roster.",
      },
    ],
    relatedGuides: [
      { label: "Mutation Tier List", href: "/grow-a-garden/mutation-tier-list", description: "Compare mutations before choosing a pet pairing" },
      { label: "Money Making Guide", href: "/grow-a-garden/money-making-guide", description: "Choose a pet for your farming route and income goal" },
      { label: "Beginner Guide", href: "/grow-a-garden/beginner-guide", description: "Follow an early-game route before investing in premium eggs" },
      { label: "Pets Database", href: "/grow-a-garden/pets", description: "Browse every pet record and open individual detail pages" },
      { label: "Crops Database", href: "/grow-a-garden/crops", description: "Match pet effects to the crops you actually grow" },
      { label: "Seeds Database", href: "/grow-a-garden/seeds", description: "Check seed cost, growth, and seasonal records" },
      { label: "Active Codes", href: "/grow-a-garden/codes", description: "Check currently listed rewards before hatching" },
    ],
  };
}

const data = buildPetTierListData();
export default data;
