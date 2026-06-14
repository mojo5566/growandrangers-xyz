export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedGuide {
  label: string;
  href: string;
  description: string;
}

export interface RelatedLink {
  label: string;
  href: string;
  description: string;
  category: string;
}

export interface TierEntry {
  name: string;
  tier: string;
  description: string;
}

export interface CodeEntry {
  code: string;
  reward: string;
  note?: string;
  source?: string;
}

export interface ExpiredCodeEntry {
  code: string;
  reward: string;
  expiredOn: string;
  source?: string;
}

export interface GuidePageData {
  title: string;
  description: string;
  updatedAt: string;
  breadcrumbs: { label: string; href: string }[];
  faq: FAQItem[];
  relatedGuides: RelatedGuide[];
}

export interface CodesPageData extends GuidePageData {
  activeCodes: CodeEntry[];
  expiredCodes: ExpiredCodeEntry[];
  howToRedeem: string[];
  lastChecked?: string;
  sources?: { name: string; url: string; type: string; lastChecked: string }[];
}

export interface TierListPageData extends GuidePageData {
  tierExplanation: { tier: string; color: string; label: string; desc: string }[];
  tiers: { name: string; entries: TierEntry[]; description: string }[];
  detailCards: {
    name: string;
    rank: string;
    desc: string;
    strengths: string[];
    weaknesses: string[];
    bestUse?: string;
    bestOn?: string;
    color: string;
  }[];
  strategyTips?: string[];
  teamComps?: { name: string; units: string; desc: string }[];
  pairingTable?: { trait: string; unit: string; why: string }[];
  beginnerPicks?: { name: string; why: string; replacement: string }[];
  progressionAdvice?: { stage: string; targetUnits: string; goal: string }[];
}

export interface CropValueEntry {
  name: string;
  coins: number;
  time: string;
  season: string;
  tier: string;
}

export interface ProfitStackEntry {
  name: string;
  base: number;
  sMut: string;
  sMutPet: string;
  ppm: string;
}

export interface CropValuesPageData extends GuidePageData {
  crops: CropValueEntry[];
  profitStacks: ProfitStackEntry[];
  strategyTips: string[];
  tierDetails: { name: string; why: string; color: string }[];
}

export interface EvolutionPageData extends GuidePageData {
  overview: { description: string; highlights: string[] };
  stages: { from: string; mats: string; stats: string }[];
  totalCost: string;
  materials: { name: string; icon: string; desc: string; sources: string[]; tip: string }[];
  bestUnitsSteps: { step: string; title: string; desc: string }[];
  priorityList: { tier: string; unit: string; reason: string }[];
  mistakes: { title: string; desc: string }[];
}

export interface TierCropDetail {
  name: string;
  coins: number;
  growthTime: string;
  season: string;
  coinsPerMinute: number;
  description: string;
  recommendedUse: string;
}

export interface StageCrop {
  name: string;
  why: string;
  priority: number;
}

export interface ProfitComparisonRow {
  name: string;
  baseCoins: number;
  growthTime: string;
  coinsPerMinute: number;
  coinsPerHour: number;
  withMutation4x: number;
  withMutationAndPet20x: number;
  season: string;
  tier: string;
}

export interface FarmingTip {
  title: string;
  description: string;
}

export interface ValueListPageData extends GuidePageData {
  introduction: string;
  valueListUses: string[];
  tierCrops: {
    S: TierCropDetail[];
    A: TierCropDetail[];
    B: TierCropDetail[];
    C: TierCropDetail[];
  };
  beginnerCrops: StageCrop[];
  midGameCrops: StageCrop[];
  endgameCrops: StageCrop[];
  profitComparison: ProfitComparisonRow[];
  farmingTips: FarmingTip[];
}
