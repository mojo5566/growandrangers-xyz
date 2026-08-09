import { getPetsByTier } from "./database/pets";

export type PetEditorialTier = "S" | "A" | "B" | "C";

export interface PetTierTableRow {
  id: string;
  name: string;
  tier: PetEditorialTier;
  planningUse: string;
  teamFit: string;
  decision: string;
}

interface PetEditorialProfile {
  planningUse: string;
  teamFit: string;
  decision: string;
}

const tierOrder = ["S", "A", "B", "C"] as const;

const tierColors: Record<PetEditorialTier, string> = {
  S: "#FF3D00",
  A: "#FF8C00",
  B: "#FFD700",
  C: "#3A86FF",
};

const tierLabels: Record<PetEditorialTier, string> = {
  S: "Broad editorial priority",
  A: "High-value team options",
  B: "Progression and situational options",
  C: "Starter, collection, or narrow options",
};

const tierDescriptions: Record<PetEditorialTier, string> = {
  S: "Editorially grouped for broad utility, flexible team fit, and lasting progression value. Confirm each live effect before investing.",
  A: "Editorially grouped as useful alternatives for defined team needs, with more context required than the S-Tier group.",
  B: "Editorially grouped for progression, utility, or situational roles that can be valuable when they solve a current farm need.",
  C: "Editorially grouped as starter, collection, or narrow-use choices. Their value depends heavily on the player's current options and goals.",
};

const editorialProfiles: Record<string, PetEditorialProfile> = {
  "golden-phoenix-chick": {
    planningUse: "Flexible general farming",
    teamFit: "Farms that need a broadly useful generalist",
    decision: "Compare it with a specialist when one specific farm bottleneck matters more than flexibility.",
  },
  "crystal-unicorn-foal": {
    planningUse: "Active farming flexibility",
    teamFit: "Established farms that can benefit from an active-play option",
    decision: "Confirm the current effect and decide whether its play pattern fits your normal harvest routine.",
  },
  "golden-dragon": {
    planningUse: "Specialized crop planning",
    teamFit: "Teams built around a defined crop or farming focus",
    decision: "Use it only when the live description supports the crop plan you are actually running.",
  },
  "neon-dragon-hatchling": {
    planningUse: "General utility with a defensive angle",
    teamFit: "Balanced teams that value both farming and protection",
    decision: "Check whether its current utility solves a real problem instead of duplicating another team member.",
  },
  "celestial-fox-kit": {
    planningUse: "Conditional farming setup",
    teamFit: "Teams organized around a specific play window",
    decision: "Verify the live condition and choose it only when that condition matches your usual schedule.",
  },
  "lucky-clover-bunny": {
    planningUse: "Synergy-focused planning",
    teamFit: "Theme-specific teams that already support its role",
    decision: "Confirm the current pairing in the game before building a team around it.",
  },
  "phoenix-hatchling": {
    planningUse: "Farm stability",
    teamFit: "Teams that value protection alongside progression",
    decision: "Compare its current protection role with the utility already supplied by the rest of the team.",
  },
  "shadow-cat": {
    planningUse: "Event or condition-focused utility",
    teamFit: "Teams pursuing a specific event or timed objective",
    decision: "Treat it as situational until the current game confirms that the relevant system is active.",
  },
  "flame-bear": {
    planningUse: "Seasonal or theme-focused farming",
    teamFit: "Teams built around a matching seasonal plan",
    decision: "Confirm the current condition and compare its off-condition value before committing resources.",
  },
  "frost-wolf-pup": {
    planningUse: "Seasonal progression",
    teamFit: "Teams with a matching seasonal objective",
    decision: "Use it when the relevant season or theme is part of the current plan, not as an assumed all-purpose choice.",
  },
  "magma-lizard-hatchling": {
    planningUse: "Theme-specific farming",
    teamFit: "Teams focused on a matching crop or seasonal theme",
    decision: "Check the live effect and keep it only while the matching farm plan remains useful.",
  },
  "aqua-otter-kit": {
    planningUse: "Routine farm utility",
    teamFit: "Farms trying to reduce repeated manual chores",
    decision: "Avoid duplicating utility that another equipped option already provides.",
  },
  "thunder-hawk-chick": {
    planningUse: "Early active progression",
    teamFit: "Developing farms that favor an active routine",
    decision: "Use it as a progression option and reassess when the team's needs become more specialized.",
  },
  "forest-fox-kit": {
    planningUse: "Farm expansion support",
    teamFit: "Developing teams focused on expanding their farming loop",
    decision: "Choose it when expansion support matters more than another immediate team role.",
  },
  "night-owl": {
    planningUse: "Time-specific utility",
    teamFit: "Teams whose normal play schedule matches its role",
    decision: "Confirm the current timing requirement before treating it as a regular team option.",
  },
  "garden-turtle": {
    planningUse: "Patient progression",
    teamFit: "Teams using a slower, deliberate farming routine",
    decision: "Compare its pace with your normal crop cycle before keeping it in an active team.",
  },
  "bamboo-panda-cub": {
    planningUse: "Developing farm consistency",
    teamFit: "Early teams that value a repeatable farming routine",
    decision: "Keep it while it supports steady progression, then reassess when a clearer role becomes available.",
  },
  "common-garden-cat": {
    planningUse: "Starter system learning",
    teamFit: "New teams learning how pet roles affect farm planning",
    decision: "Use it as a temporary learning option rather than an assumed long-term requirement.",
  },
  "dust-bunny": {
    planningUse: "Collection-focused use",
    teamFit: "Collections or casual teams without a specific farming need",
    decision: "Choose it for collection value only when progression utility is not the priority.",
  },
  "common-bunny": {
    planningUse: "Early active farming",
    teamFit: "Starter teams that need a simple active-play option",
    decision: "Reassess it once another pet better matches the team's main farming goal.",
  },
  "garden-caterpillar": {
    planningUse: "Layout-aware support",
    teamFit: "Teams whose farm layout can use localized utility",
    decision: "Confirm that the current layout and live effect make the role useful before equipping it.",
  },
  "garden-snail": {
    planningUse: "Narrow utility or collection",
    teamFit: "Experimental teams testing a specialized role",
    decision: "Use it only when its live behavior solves a specific need or supports a collection goal.",
  },
};

function buildPetTierListData() {
  const tierRows = Object.fromEntries(
    tierOrder.map((tier) => [
      tier,
      getPetsByTier(tier).map((pet) => {
        const profile = editorialProfiles[pet.id] ?? {
          planningUse: "Flexible roster option",
          teamFit: "Teams comparing options for an open role",
          decision: "Confirm the current in-game description before using resources on this pet.",
        };

        return {
          id: pet.id,
          name: pet.name,
          tier,
          ...profile,
        };
      }),
    ]),
  ) as Record<PetEditorialTier, PetTierTableRow[]>;

  const petOrder = tierOrder.flatMap((tier) => tierRows[tier]);

  return {
    title: "Grow a Garden Pet Tier List - Editorial S to C Ranking",
    description:
      "Compare GrowAndRangers' editorial S to C grouping for 22 pet names, with qualitative planning uses, team fit, and player decision guidance.",
    updatedAt: "August 3, 2026",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Grow a Garden Pet Tier List", href: "/grow-a-garden/pet-tier-list" },
    ],
    tierRows,
    petOrder,
    tierExplanation: tierOrder.map((tier) => ({
      tier,
      color: tierColors[tier],
      label: tierLabels[tier],
      desc: tierDescriptions[tier],
    })),
    dataScope: [
      "This is GrowAndRangers' editorial Pet Tier List for the 22 pet names in its current project record. It is not an official ranking or patch note.",
      "The page provides a complete editorial S to C grouping, qualitative use cases, and player decision guidance.",
      "It does not present exact multipliers, egg sources, drop rates, probabilities, income values, cooldowns, or hidden mechanics as live-game facts.",
      "Confirm current effects, availability, values, and restrictions in the game interface or developer announcements before spending resources.",
    ],
    rankingMethod: [
      "General utility: how often a pet can help across ordinary farming plans.",
      "Team fit: how clearly a pet can fill a useful role without duplicating the rest of the team.",
      "Progression value: whether the pet can support a player's current stage and next practical decision.",
      "Flexibility: how easily the pet can move between different farm goals or team setups.",
      "Situational usefulness: whether a narrower role becomes valuable under the right condition, season, event, or layout.",
    ],
    decisionTips: [
      "Start with the role your current team is missing, then compare pets within that role.",
      "Treat the letter tier as an editorial shortcut, not a substitute for the live pet description.",
      "Prefer team fit over a higher letter when the higher group does not support your current farm plan.",
      "Recheck the game interface after updates because effects, availability, and restrictions can change.",
    ],
    pageRoles: [
      {
        label: "Pet Tier List",
        href: "/grow-a-garden/pet-tier-list",
        description: "The complete GrowAndRangers editorial S to C grouping.",
      },
      {
        label: "Goal-Based Pet Guide",
        href: "/grow-a-garden/best-pets",
        description: "Recommendations organized around specific player goals.",
      },
      {
        label: "Pets Database",
        href: "/grow-a-garden/pets",
        description: "Individual pet records and entity-level browsing.",
      },
    ],
    faq: [
      {
        question: "What is this Grow a Garden Pet Tier List?",
        answer: "It is GrowAndRangers' editorial S to C grouping for the 22 pet names in its current project record. It helps players compare broad uses and team fit, but it is not an official ranking, patch note, or live pet data table.",
      },
      {
        question: "How are pets assigned to editorial tiers?",
        answer: "The grouping uses qualitative judgments about general utility, team fit, progression value, flexibility, and situational usefulness. A letter tier is a planning shortcut, not a statement of live power.",
      },
      {
        question: "Does a higher tier mean a pet is always the right choice?",
        answer: "No. A lower editorial tier can be a better fit when it fills the role your team needs. Confirm the current pet description and compare it with your active farm plan before investing resources.",
      },
      {
        question: "Why are exact pet multipliers and drop rates not shown?",
        answer: "This page does not have a reliable per-pet developer source for every version-sensitive field. Exact values, sources, probabilities, cooldowns, and hidden mechanics should therefore be checked in the current game interface or developer announcements.",
      },
      {
        question: "How should I use the planning guidance?",
        answer: "Identify the missing role in your team, compare the qualitative use and team-fit notes, and then verify the live effect. Recheck after game updates because availability and behavior can change.",
      },
      {
        question: "Where should I look for recommendations by player goal?",
        answer: "Use the separate goal-based pet guide for recommendations organized around particular objectives. This page remains focused on the complete editorial tier grouping.",
      },
      {
        question: "Is this a complete official live-game pet list?",
        answer: "No. It covers 22 pet names in the current GrowAndRangers project record and does not guarantee a complete live roster. Use the Pets Database for entity records and the game interface for current availability.",
      },
    ],
    relatedGuides: [
      {
        label: "Goal-Based Pet Guide",
        href: "/grow-a-garden/best-pets",
        description: "Choose recommendations by a specific player objective",
      },
      {
        label: "Pets Database",
        href: "/grow-a-garden/pets",
        description: "Browse individual pet records separately from editorial ranking",
      },
      {
        label: "Pet Ranking Guide",
        href: "/grow-a-garden/pet-ranking-guide",
        description: "Understand how to interpret tier groupings and trade-offs",
      },
    ],
  };
}

const data = buildPetTierListData();

export default data;
