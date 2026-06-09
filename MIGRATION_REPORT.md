# BloxPulse — Migration Report: Canonical Database

> Migration date: June 8, 2026
> Source: `src/data/garden/database/` (pets.ts, mutations.ts, crops.ts)
> Target: 4 page data files

---

## Files Migrated

| # | File | Status | Imports From |
|---|------|--------|-------------|
| 1 | `src/data/garden/mutation-tier-list.ts` | ✅ Migrated | `./database/mutations` |
| 2 | `src/data/garden/pet-tier-list.ts` | ✅ Migrated | `./database/pets` |
| 3 | `src/data/garden/crop-value-list.ts` | ✅ Migrated | `./database/crops` |
| 4 | `src/data/garden/best-pets.ts` | ✅ Migrated | `./database/pets` |

## Build Result

```
✓ Compiled successfully in 2.8s
✓ Finished TypeScript in 3.8s
✓ 24 static routes generated
✓ Zero errors
```

---

## Duplicate Definitions Removed

### mutation-tier-list.ts

| Removed | Lines Removed | Now Generated From |
|---------|--------------|-------------------|
| 14 inline mutation entries | ~200 | `getMutationsByTier("S"/"A"/"B"/"C")` |
| 14 inline detailCards | ~150 | `mutations.map(...)` |
| 4 inline tierExplanation entries | ~16 | Generated from tier constants |
| 4 duplicate tier descriptions | ~16 | Centralized tierDescs map |

**Total removed: ~382 lines of duplicate data → ~100 lines of generator code**

### pet-tier-list.ts

| Removed | Lines Removed | Now Generated From |
|---------|--------------|-------------------|
| 12 inline pet entries | ~180 | `getPetsByTier("S"/"A"/"B"/"C")` |
| 9 inline detailCards | ~120 | `pets.map(...)` |
| 4 tierExplanation entries | ~16 | Generated from tier constants |
| 5 inline pairing table entries | ~15 | Hardcoded (cross-references mutations) |

**Total removed: ~331 lines → ~120 lines of generator code**

### crop-value-list.ts

| Removed | Lines Removed | Now Generated From |
|---------|--------------|-------------------|
| 11 inline crop entries | ~110 | `crops` sorted by coins |
| 5 inline tierDetails (duplicate crop data) | ~25 | `getCropsByTier(...).map(c => c.name).join(", ")` |
| Hardcoded crop name references in strategyTips | ~0 | Already used crop names directly |

**Total removed: ~135 lines → ~75 lines of generator code**

### best-pets.ts

| Removed | Lines Removed | Now Generated From |
|---------|--------------|-------------------|
| Inline pet multiplier values (5 instances) | ~10 | `pets.find(...).multiplier` |
| Inline pet names (8 instances) | ~8 | `pets.find(...).name` |
| Inline synergy calculations | ~5 | Computed from canonical values |
| Inline seasonal bonus values | ~3 | `pet.seasonalBonus?.bonusMultiplier` |

**Total removed: ~26 lines of hardcoded values → replaced with dynamic imports**

---

## Data Flow (After Migration)

```
src/data/garden/database/
├── pets.ts          ──→  pet-tier-list.ts     (all tier entries + detailCards)
│                    ──→  best-pets.ts         (names, multipliers, bonuses)
│
├── mutations.ts     ──→  mutation-tier-list.ts (all tier entries + detailCards)
│
└── crops.ts         ──→  crop-value-list.ts    (all crop entries + tierDetails)
```

**Single source of truth:** To update Golden Phoenix Chick's multiplier from 5.0x to 5.2x, change ONE value in `database/pets.ts`. All pages automatically reflect the change on next build.

---

## Remaining Conflicts

| # | Conflict | Status | Notes |
|---|----------|--------|-------|
| 1 | Egg system incompatibility (Basic/Rare/Legendary vs Golden/Crystal Eggs) | 🔴 Unresolved | pet-tier-list.ts strategyTips reference "Golden Eggs (50,000)" and "Crystal Eggs (35,000)" which don't exist in database/pets.ts. These tips are editorial content — not entity data. Left as-is pending game verification. |
| 2 | pairingTable in pet-tier-list.ts uses mutation aliases | 🟡 Mitigated | Pairing table uses canonical mutation names ("Aurelian Crown", "Leporine Bloom", "Crystalline Mycelium", "Phosphor Sporebloom") instead of old aliases. |
| 3 | best-pets.ts editorial text references "Common Prairie Dog" alias | 🟢 Mitigated | Uses canonical `commonCat.name` which resolves to "Common Garden Cat". The old alias "Common Prairie Dog" is registered in database/pets.ts aliases field. |
| 4 | Leporine Bloom synergy bonus in best-pets.ts FAQ | 🟢 Resolved | Uses canonical +18% from database/mutations.ts (matching mutation source file). |
| 5 | Crystal Unicorn Foal multiplier | 🟢 Resolved | Uses canonical 4.5x from database/pets.ts. |

---

## What Was Not Changed

| Element | Reason |
|---------|--------|
| Page layouts (page.tsx files) | Not in scope — only data files migrated |
| SEO metadata | Preserved as-is in each data file |
| FAQ content | Editorial — preserved as-is |
| Internal links (relatedGuides) | Structural — preserved as-is |
| strategyTips | Editorial — preserved as-is (minor name corrections applied) |
| best-pets.ts editorial descriptions | Preserved — only replaced inline hardcoded pet names/multipliers with database references |
| crop-value-list.ts profitStacks | Hardcoded table — these are computed displays, not entity definitions |

---

## Summary

| Metric | Value |
|--------|-------|
| Files migrated | 4 |
| Duplicate entity definitions removed | ~874 lines |
| New generator code | ~295 lines |
| Net reduction | ~579 lines |
| Build errors | 0 |
| Remaining conflicts | 1 (egg system — editorial, low priority) |
| Canonical entities referenced | 12 pets + 14 mutations + 11 crops = 37 |
| Pages rendering from database | 4 |
| Next update needed | When real game data is verified |

---

*Migration complete. All pages import from canonical database. Zero build errors.*
