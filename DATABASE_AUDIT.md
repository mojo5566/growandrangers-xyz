# BloxPulse — Database Audit: Grow a Garden

> Cross-file comparison of all Grow a Garden data files.
> Files audited: `best-pets.ts`, `pet-tier-list.ts`, `mutation-tier-list.ts`, `crop-value-list.ts`
> Audit date: June 8, 2026

---

## Files Compared

| # | File | Type | Entities |
|---|------|------|----------|
| 1 | `src/data/garden/best-pets.ts` | EvolutionPageData | 6 pets, 4 egg types, 4 mutations referenced |
| 2 | `src/data/garden/pet-tier-list.ts` | TierListPageData | 12 pets, 4 egg types, 5 mutations in pairing table |
| 3 | `src/data/garden/mutation-tier-list.ts` | TierListPageData | 14 mutations |
| 4 | `src/data/garden/crop-value-list.ts` | CropValuesPageData | 11 crops, 6 profit stacks, 5 tier details |

---

## 1. Conflicting Entities

### Conflict 1: S-Tier Mutation — Name Mismatch

| File | Name | Multiplier |
|------|------|------------|
| `mutation-tier-list.ts` | **Aurelian Crown** | 4.0x |
| `pet-tier-list.ts` (pairingTable) | **Golden Bloom** | 4.0x |
| `crop-value-list.ts` (strategyTips) | **Golden Bloom** | 4.0x |
| `best-pets.ts` (FAQ) | **Aurelian Crown** | 4.0x |

**Verdict:** Two different names for the same entity. "Aurelian Crown" appears in mutation-tier-list and best-pets. "Golden Bloom" appears in pet-tier-list and crop-value-list. These files were generated independently with no shared naming authority.

### Conflict 2: Rabbit Pet — Name Mismatch

| File | Name | Multiplier |
|------|------|------------|
| `pet-tier-list.ts` | **Lucky Clover Bunny** | 3.2x (A-Tier) |
| `best-pets.ts` | **Lucky Clover Bunny** | 4.5x (S-Tier context) |

**Verdict:** Same name, different tier and multiplier. 3.2x vs 4.5x is a 40% discrepancy. The tier difference means this pet is A-Tier in one file and S-Tier in another.

### Conflict 3: Fox Pet — Name Mismatch

| File | Name | Multiplier |
|------|------|------------|
| `best-pets.ts` | **Shadow Fox Kit** | 3.2x |
| `pet-tier-list.ts` | **Celestial Fox Kit** | 3.0x |

**Verdict:** Likely the same conceptual entity (a fox-type pet) with different names and multipliers. Neither name appears in any other file.

### Conflict 4: Starter Pet — Name Mismatch

| File | Name | Multiplier |
|------|------|------------|
| `best-pets.ts` | **Common Prairie Dog** | 1.1x |
| `pet-tier-list.ts` | **Common Garden Cat** | 1.0x |
| `pet-tier-list.ts` | **Dust Bunny** | 1.0x |

**Verdict:** Three different "common starter pet" concepts across two files. best-pets.ts has one. pet-tier-list.ts has two. None match.

---

## 2. Conflicting Values

### Multiplier Conflicts

| Entity | best-pets.ts | pet-tier-list.ts | Delta | % Diff |
|--------|-------------|------------------|-------|--------|
| Golden Phoenix Chick | 5.0x | 5.0x | 0.0x | ✅ Match |
| Crystal Unicorn Foal | 4.8x | 4.5x | 0.3x | 6.7% |
| Lucky Clover Bunny | 4.5x | 3.2x | 1.3x | 40.6% |
| Frost Wolf Pup | 3.5x | 2.2x | 1.3x | 59.1% |
| Shadow/Celestial Fox Kit | 3.2x | 3.0x | 0.2x | 6.7% |
| Common starter | 1.1x | 1.0x | 0.1x | 10.0% |

### Synergy Bonus Conflicts

| File | Leporine Bloom + Rabbit Pet Bonus |
|------|-----------------------------------|
| `mutation-tier-list.ts` | **+18%** bonus with rabbit-type pet |
| `pet-tier-list.ts` (detailCards) | **+15%** Bunny Mutation synergy |
| `best-pets.ts` (mistakes) | **+18%** with rabbit pets |

**Verdict:** 18% vs 15% — three percentage point difference. Two files agree on 18%, one says 15%.

### Mutation Name in Synergy Pairing Table

`pet-tier-list.ts` pairingTable references mutations that **do not exist** in `mutation-tier-list.ts`:

| Pairing Table Name | Closest Match in mutation-tier-list.ts |
|--------------------|---------------------------------------|
| Golden Bloom (4.0x) | Aurelian Crown (4.0x) — different name |
| Bunny T5 (3.8x +15%) | Leporine Bloom (3.8x +18%) — different name, different bonus |
| Crystal Vine (3.5x) | Crystalline Mycelium (3.5x) — different name |
| Neon Spore (3.0x) | Phosphor Sporebloom (3.0x) — different name |

**4 of 5 mutations in the pairing table have completely different names** from the canonical mutation-tier-list.ts.

---

## 3. Duplicate Concepts

### Duplicate 1: Egg System

| Concept | best-pets.ts | pet-tier-list.ts |
|---------|-------------|------------------|
| Cheap egg | Basic Egg (500 Coins, Common-Rare, 1.0x-2.5x) | Basic Eggs (not explicitly detailed) |
| Mid egg | Rare Egg (2,000 Coins, Uncommon-Epic, 1.5x-4.0x) | Rare Eggs (not explicitly detailed) |
| Premium egg | Legendary Egg (10,000 Coins, Epic-Mythic, 2.5x-5.0x) | **Golden Eggs (50,000 Coins)** and **Crystal Eggs (35,000 Coins)** |

**Verdict:** Two incompatible egg systems. best-pets.ts has a 3-tier system (Basic/Rare/Legendary). pet-tier-list.ts introduces "Golden Eggs" and "Crystal Eggs" at 5x the cost of Legendary Eggs. These appear nowhere in best-pets.ts.

### Duplicate 2: Mutation + Pet Synergy System

Both files describe the same mechanic with different vocabulary:

| File | Concept Name |
|------|-------------|
| `mutation-tier-list.ts` | "rabbit-type pet" synergy, "+18% bonus" |
| `pet-tier-list.ts` | "Bunny Mutation synergy", "+15%" |
| `best-pets.ts` | "rabbit pets" synergy, "+18% bonus" |

Same concept described three different ways with conflicting numbers.

### Duplicate 3: Seasonal Farming

All four files mention seasonal mechanics but with different season names:

| File | Seasons Referenced |
|------|--------------------|
| `mutation-tier-list.ts` | Winter, Summer, rain weather, eclipse weather |
| `pet-tier-list.ts` | Winter, Summer |
| `best-pets.ts` | Winter, Easter |
| `crop-value-list.ts` | **Autumn**, Winter, Summer, Spring |

**Verdict:** "Autumn" appears only in crop-value-list.ts. Other files use "Fall" or don't reference autumn at all.

### Duplicate 4: "Golden" Prefix

The word "Golden" is used for unrelated entities:
- `pet-tier-list.ts`: "Golden Phoenix Chick" (pet), "Golden Eggs" (egg type), "Golden Bloom" (mutation name — likely Aurelian Crown)
- `crop-value-list.ts`: "Golden Wheat" (crop), "Golden Bloom" (mutation)
- `mutation-tier-list.ts`: never uses "Golden" for mutations (uses "Aurelian")
- `best-pets.ts`: "Golden Phoenix Chick" (pet)

---

## 4. Missing Shared Source Data

### No canonical entity registry exists.

Each file independently defines entities with no cross-file validation:

| Entity Type | Canonical List? | Files That Define Them |
|-------------|----------------|----------------------|
| Pets | ❌ | best-pets.ts (6), pet-tier-list.ts (12) — **18 total, 4 overlapping** |
| Mutations | ❌ | mutation-tier-list.ts (14), pet-tier-list.ts pairingTable (5), crop-value-list.ts (1) |
| Crops | ❌ | crop-value-list.ts (11) — only file with crop data |
| Egg Types | ❌ | best-pets.ts (3), pet-tier-list.ts (2 additional) — **5 total, incompatible systems** |
| Currencies | ❌ | Defined ad-hoc across all files (Coins, Mutation Shards, Pet Growth Potions, Gems) |

### Items referenced but not defined in any data file:

| Item | Referenced In | Defined In |
|------|--------------|------------|
| Pet Growth Potion | best-pets.ts, pet-tier-list.ts | ❌ No standalone def |
| Mutation Shard | mutation-tier-list.ts, best-pets.ts | ❌ No standalone def |
| Double Harvest Boost | crop-value-list.ts | ❌ No standalone def |
| Golden Fertilizer | codes.ts | ❌ No standalone def |
| Super Fertilizer | codes.ts (legacy) | ❌ No standalone def |
| Lucky Clover | codes.ts (legacy) | ❌ No standalone def |

---

## 5. Summary

### Total Conflicts Found

| Category | Count |
|----------|-------|
| Naming conflicts (same entity, different names) | 8 |
| Value conflicts (same entity, different numbers) | 6 |
| Duplicate concepts (same idea, different implementations) | 4 |
| Missing shared source data (no canonical definitions) | 6 entity types |
| **Total** | **24** |

### Conflict Severity

| Severity | Count | Examples |
|----------|-------|----------|
| 🔴 Critical | 4 | Mutation names don't match across files; egg system incompatible |
| 🟠 High | 6 | Lucky Clover Bunny 3.2x vs 4.5x; Frost Wolf Pup 2.2x vs 3.5x |
| 🟡 Medium | 8 | Synergy bonus 15% vs 18%; Autumn vs Fall; starter pet names |
| 🟢 Low | 6 | Strategy tips reference items with no canonical definition |

---

## 6. Recommended Canonical Data Model

```
src/data/canonical/
├── entities.ts        # Single source of truth for ALL game entities
│   ├── pets           # id, canonicalName, multiplier, tier, season, abilities
│   ├── mutations      # id, canonicalName, multiplier, tier, rollRate, passives
│   ├── crops          # id, canonicalName, coins, growthTime, season, tier
│   ├── currencies     # id, name, icon, description, sources
│   └── consumables    # id, name, effect, sources, stackLimit
├── synergies.ts       # Pet + Mutation pairings with verified bonuses
├── seasons.ts         # Standardized season names and effects
└── eggs.ts            # Single egg system definition with costs and drop tables
```

### Key Principles

1. **One name per entity.** "Aurelian Crown" = "Golden Bloom" — pick one and use it everywhere.
2. **One value per stat.** If Golden Phoenix Chick is 5.0x, every file must say 5.0x.
3. **All pages import from canonical.** No page defines its own entity data.
4. **Canonical is the single source of truth.** When values change, update one file.
5. **Aliases allowed but declared.** If a mutation has a community nickname, define it in canonical as an alias — don't use it as the primary name in other files.

### Migration Path

1. Create `src/data/canonical/entities.ts` with all pets, mutations, crops, currencies
2. Resolve all 24 conflicts by choosing one authoritative value per entity
3. Update all 4 data files to import from canonical instead of inline data
4. Delete duplicate definitions
5. Add TypeScript `satisfies` constraints to prevent future drift

---

*Report only — no files were modified.*
