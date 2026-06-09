# BloxPulse — Best Pets Audit: `/grow-a-garden/best-pets`

> File audited: `src/data/garden/best-pets.ts`
> Cross-referenced: `src/data/garden/pet-tier-list.ts`, `https://wikigrowagarden.com/codes/`
> Audit date: June 8, 2026

---

## Pets Mentioned in `best-pets.ts`

### 1. Golden Phoenix Chick

| Field | Detail |
|-------|--------|
| **Name** | Golden Phoenix Chick |
| **Listed Multiplier** | 5.0x |
| **Source** | `src/data/garden/best-pets.ts` (AI-generated) |
| **Cross-reference** | Also in `pet-tier-list.ts` at 5.0x — values match |
| **Verified / Unverified** | **UNVERIFIED** |
| **Evidence** | No official source documents this pet name. Not found on wikigrowagarden.com. The wiki confirms pets exist (via "Rare Pet Egg" code reward) but does not name specific pets. All multipliers and descriptions are AI-generated placeholder data. |

---

### 2. Lucky Clover Bunny

| Field | Detail |
|-------|--------|
| **Name** | Lucky Clover Bunny |
| **Listed Multiplier** | 4.5x base, 5.3x effective with Leporine Bloom synergy |
| **Source** | `src/data/garden/best-pets.ts` (AI-generated) |
| **Cross-reference** | Also in `pet-tier-list.ts` at 3.2x base, 3.68x effective — **VALUES CONFLICT** |
| **Verified / Unverified** | **UNVERIFIED** |
| **Evidence** | Data discrepancy between files: 4.5x vs 3.2x is a 40% difference. Described as "Easter event exclusive" but Easter 2026 event could not be verified. No official documentation confirms this pet, its seasonal exclusivity, or its synergy with Leporine Bloom mutation. |

---

### 3. Crystal Unicorn Foal

| Field | Detail |
|-------|--------|
| **Name** | Crystal Unicorn Foal |
| **Listed Multiplier** | 4.8x |
| **Source** | `src/data/garden/best-pets.ts` (AI-generated) |
| **Cross-reference** | Also in `pet-tier-list.ts` at 4.5x — **VALUES CONFLICT** |
| **Verified / Unverified** | **UNVERIFIED** |
| **Evidence** | 4.8x vs 4.5x discrepancy between files. Described as a Legendary Egg drop but no official drop rates confirmed. Pet name follows AI fantasy naming convention (gemstone + mythical creature + juvenile suffix). No source verification. |

---

### 4. Frost Wolf Pup

| Field | Detail |
|-------|--------|
| **Name** | Frost Wolf Pup |
| **Listed Multiplier** | 3.5x base, 4.0x effective during Winter |
| **Source** | `src/data/garden/best-pets.ts` (AI-generated) |
| **Cross-reference** | Also in `pet-tier-list.ts` at 2.2x — **VALUES CONFLICT** |
| **Verified / Unverified** | **UNVERIFIED** |
| **Evidence** | 3.5x vs 2.2x is a 59% discrepancy — the largest data conflict between files. Winter seasonal bonus is plausible for a farming game but unverifiable. "Frost" prefix follows AI seasonal naming pattern. No official documentation. |

---

### 5. Shadow Fox Kit

| Field | Detail |
|-------|--------|
| **Name** | Shadow Fox Kit |
| **Listed Multiplier** | 3.2x |
| **Source** | `src/data/garden/best-pets.ts` (AI-generated) |
| **Cross-reference** | **NOT FOUND** in `pet-tier-list.ts`. Closest match: "Celestial Fox Kit" at 3.0x — likely a naming inconsistency between files |
| **Verified / Unverified** | **UNVERIFIED** |
| **Evidence** | This pet name does not appear in any other source file. The pet-tier-list.ts has "Celestial Fox Kit" (3.0x) which appears to be the same conceptual pet with a different name. Indicates AI generation without cross-file consistency checks. |

---

### 6. Common Prairie Dog

| Field | Detail |
|-------|--------|
| **Name** | Common Prairie Dog |
| **Listed Multiplier** | 1.1x |
| **Source** | `src/data/garden/best-pets.ts` (AI-generated) |
| **Cross-reference** | **NOT FOUND** in `pet-tier-list.ts`. Closest matches: "Common Garden Cat" (1.0x) and "Dust Bunny" (1.0x) — different names, different multipliers |
| **Verified / Unverified** | **UNVERIFIED** |
| **Evidence** | Starter-tier pet concept is plausible but the specific name and multiplier are unverifiable. pet-tier-list.ts uses different starter pets (Garden Cat, Dust Bunny). Data inconsistency suggests independent AI generation of each file. |

---

## Cross-File Data Conflicts

| Pet | best-pets.ts | pet-tier-list.ts | Delta |
|-----|-------------|------------------|-------|
| Golden Phoenix Chick | 5.0x | 5.0x | ✅ Match |
| Crystal Unicorn Foal | 4.8x | 4.5x | ❌ 0.3x diff |
| Lucky Clover Bunny | 4.5x | 3.2x | ❌ 1.3x diff |
| Frost Wolf Pup | 3.5x | 2.2x | ❌ 1.3x diff |
| Shadow Fox Kit | 3.2x | Not found | ❌ Missing (Celestial Fox Kit: 3.0x) |
| Common Prairie Dog | 1.1x | Not found | ❌ Missing (Common Garden Cat: 1.0x) |

**4 of 6 pets have data conflicts or naming inconsistencies across files.**

---

## Source Verification

| Source Checked | Type | Status |
|----------------|------|--------|
| wikigrowagarden.com/codes/ | Community Wiki | Pets system confirmed to exist (HONEYBEE2025 code gives "1 Rare Pet Egg"). No specific pet names documented. |
| Official Discord | Official | UNVERIFIED — no server identified |
| Official Roblox Group | Official | UNVERIFIED — no group identified |
| In-Game Testing | Community | NOT PERFORMED — game not independently accessible |
| `pet-tier-list.ts` | Project Data | All names are AI-generated; 4/6 have conflicts with best-pets.ts |

---

## Summary

| Pet Name | Verified | Source |
|-----------|----------|--------|
| Golden Phoenix Chick | ❌ UNVERIFIED | AI-generated |
| Lucky Clover Bunny | ❌ UNVERIFIED | AI-generated |
| Crystal Unicorn Foal | ❌ UNVERIFIED | AI-generated |
| Frost Wolf Pup | ❌ UNVERIFIED | AI-generated |
| Shadow Fox Kit | ❌ UNVERIFIED | AI-generated (inconsistent naming) |
| Common Prairie Dog | ❌ UNVERIFIED | AI-generated (inconsistent naming) |

**6/6 pets UNVERIFIED.** All names, multipliers, synergy bonuses, and seasonal descriptors in `best-pets.ts` are AI-generated placeholder content. No single pet name can be traced to an official or community-verified source. Cross-file data conflicts suggest independent AI generation of each file with no shared ground truth.

---

*Report only — no files were modified.*
