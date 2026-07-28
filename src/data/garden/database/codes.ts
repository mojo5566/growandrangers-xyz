// ============================================================
// Grow a Garden — Canonical Codes Database
// Single source of truth for all promo code entities.
// All page data files should import from here.
// ============================================================

/** codes interface */
export interface GardenCode {
  id: string;
  code: string;
  reward: string;
  status: "Active" | "Expired";
  type: "Official" | "Event" | "Community";
  dateAdded: string;
  updatedAt: string;
  notes?: string;
}

export const codes: GardenCode[] = [
  // ---------- Active Codes ----------
  {
    id: "rdcaward",
    code: "RDCAward",
    reward: "RDC Award Trophy (cosmetic decoration)",
    status: "Expired",
    type: "Official",
    dateAdded: "June 2026",
    updatedAt: "July 27, 2026",
    notes: "Zen Update — expired July 2026, confirmed inactive across both GAG and GAG2",
  },
  {
    id: "beanorleave10",
    code: "BEANORLEAVE10",
    reward: "Green Bean Chamber (cosmetic decoration)",
    status: "Expired",
    type: "Official",
    dateAdded: "June 2026",
    updatedAt: "July 27, 2026",
    notes: "Zen Update — expired July 2026, confirmed inactive across both GAG and GAG2",
  },
  {
    id: "torigate",
    code: "torigate",
    reward: "Whispering Torii Gate (cosmetic decoration)",
    status: "Expired",
    type: "Official",
    dateAdded: "June 2026",
    updatedAt: "July 27, 2026",
    notes: "Zen Update — expired July 2026, confirmed inactive across both GAG and GAG2",
  },
  // ---------- Expired Codes ----------
  {
    id: "honeybee2025",
    code: "HONEYBEE2025",
    reward: "x1 Rare Pet Egg + Bee Hat Item",
    status: "Expired",
    type: "Event",
    dateAdded: "2025",
    updatedAt: "July 27, 2026",
    notes: "Bizzy Bees Update — expired post-Zen Update",
  },
  {
    id: "goldencarrot",
    code: "GOLDENCARROT",
    reward: "x1 Golden Fertilizer + 200 Coins",
    status: "Expired",
    type: "Official",
    dateAdded: "2025",
    updatedAt: "July 27, 2026",
    notes: "100M Visits Milestone — expired 2025",
  },
  {
    id: "wikifriend",
    code: "WIKIFRIEND",
    reward: "Wiki Hat + 300 Coins",
    status: "Expired",
    type: "Community",
    dateAdded: "2025",
    updatedAt: "July 27, 2026",
    notes: "Wiki Launch — expired 2025",
  },
  {
    id: "summerfun25",
    code: "SUMMERFUN25",
    reward: "Summer Hat + x2 Uncommon Seed Packs + 1,000 Coins",
    status: "Expired",
    type: "Event",
    dateAdded: "2025",
    updatedAt: "July 27, 2026",
    notes: "Expired September 15, 2025",
  },
  {
    id: "lunarglow10",
    code: "LUNARGLOW10",
    reward: "x3 Basic Seed Packs + 500 Coins",
    status: "Expired",
    type: "Event",
    dateAdded: "2025",
    updatedAt: "July 27, 2026",
    notes: "Expired August 31, 2025",
  },
  {
    id: "spring2025",
    code: "SPRING2025",
    reward: "Spring Decorations + 200 Coins",
    status: "Expired",
    type: "Event",
    dateAdded: "2025",
    updatedAt: "July 27, 2026",
    notes: "Expired May 31, 2025",
  },
  {
    id: "firstharvest",
    code: "FIRSTHARVEST",
    reward: "Starter Pack (x3 Basic Seeds + 100 Coins)",
    status: "Expired",
    type: "Official",
    dateAdded: "2025",
    updatedAt: "July 27, 2026",
    notes: "Expired April 1, 2025",
  },
  {
    id: "gardenlove",
    code: "GARDENLOVE",
    reward: "Heart Decorations + 250 Coins",
    status: "Expired",
    type: "Event",
    dateAdded: "2025",
    updatedAt: "July 27, 2026",
    notes: "Expired February 28, 2025",
  },
  {
    id: "starbud",
    code: "STARBUD",
    reward: "Star Bud cosmetic decoration",
    status: "Expired",
    type: "Official",
    dateAdded: "June 2026",
    updatedAt: "July 27, 2026",
    notes: "Zen Update — expired July 2026",
  },
  {
    id: "wateryoplants",
    code: "WATERYOPLANTS",
    reward: "10 Common Watering Cans",
    status: "Active",
    type: "Official",
    dateAdded: "July 2026",
    updatedAt: "July 27, 2026",
    notes: "Summer Event Part 2 — verified July 2026, shared code for GAG and GAG2",
  },
  {
    id: "remembertodrinkwater",
    code: "REMEMBERTODRINKWATER",
    reward: "1 Common Watering Can",
    status: "Active",
    type: "Official",
    dateAdded: "July 2026",
    updatedAt: "July 27, 2026",
    notes: "Summer Event Part 2 — verified July 2026, shared code for GAG and GAG2",
  },
  {
    id: "teamgreenbean",
    code: "TEAMGREENBEAN",
    reward: "3 Green Bean Seeds",
    status: "Active",
    type: "Official",
    dateAdded: "June 2026",
    updatedAt: "July 27, 2026",
    notes: "GAG2 launch code — verified July 2026, shared code for GAG and GAG2",
  },
];

export function getCodeById(id: string): GardenCode | undefined {
  return codes.find((c) => c.id === id);
}

export function getCodeByCode(code: string): GardenCode | undefined {
  const lower = code.toLowerCase();
  return codes.find((c) => c.code.toLowerCase() === lower);
}

export function getActiveCodes(): GardenCode[] {
  return codes.filter((c) => c.status === "Active");
}

export function getExpiredCodes(): GardenCode[] {
  return codes.filter((c) => c.status === "Expired");
}

export function getCodesByType(type: GardenCode["type"]): GardenCode[] {
  return codes.filter((c) => c.type === type);
}
