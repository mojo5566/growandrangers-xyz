# BloxPulse — Content Status Report

> Audit of all existing pages for data quality, source verification, and production readiness.
> Generated: June 8, 2026

---

## Status Definitions

| Status | Code | Description |
|--------|------|-------------|
| Real Data | 🟢 | Content verified against official sources; production-ready |
| Partially Verified | 🟡 | Some data confirmed; remaining data is estimated or unverified |
| AI Placeholder | 🟠 | All data is AI-generated; no official sources confirmed |
| Missing | 🔴 | Page route exists but has no substantive content |

---

## Homepage

| URL | Status | Priority | Est. Search Demand | Manual Research |
|-----|--------|----------|-------------------|-----------------|
| `/` | 🟠 AI Placeholder | 1 | Very High | Yes |

**Details:** Hero copy, CTA labels, promo code examples, Trending Guide cards, and FAQ are all AI-generated placeholder content. No real game data or verified codes are displayed. Promo codes (GAG_SPRING26, RANGERS_UPD6, etc.) are fictional.

---

## Grow a Garden — Primary URLs (`/grow-a-garden/`)

| # | URL | Status | Priority | Est. Search Demand | Manual Research |
|---|-----|--------|----------|-------------------|-----------------|
| 1 | `/grow-a-garden/codes` | 🟠 AI Placeholder | 1 | Very High | Yes |
| 2 | `/grow-a-garden/mutation-tier-list` | 🟠 AI Placeholder | 1 | High | Yes |
| 3 | `/grow-a-garden/pet-tier-list` | 🟠 AI Placeholder | 1 | High | Yes |
| 4 | `/grow-a-garden/crop-value-list` | 🟠 AI Placeholder | 1 | High | Yes |

### Page Details

#### `/grow-a-garden/codes`
- **Data Source:** `src/data/garden/codes.ts`
- **Active Codes:** 6 (GAG_SPRING26, GARDEN_FEST, BLOOM_BOOST, SEEDS_4ALL, GREEN_THUMB, FARM_LIFE) — all fictional
- **Expired Codes:** 6 — all fictional
- **FAQ:** 5 items — AI-generated
- **Verification:** SOURCES.md confirms no official sources found. All codes, rewards, and how-to-redeem steps are unverified.

#### `/grow-a-garden/mutation-tier-list`
- **Data Source:** `src/data/garden/mutation-tier-list.ts`
- **Mutations:** 14 (Aurelian Crown, Crystalline Mycelium, Leporine Bloom, etc.) — all fictional names
- **Multipliers:** 0.8× to 4.0× — estimated values, no source verification
- **Roll Rates:** ~1.2% to ~35% — estimated, no source verification
- **Detail Cards:** 11 cards with strengths/weaknesses/best use — AI-generated
- **Verification:** All 14 entries UNVERIFIED per SOURCES.md. No official patch notes, community wiki, or datamined data.

#### `/grow-a-garden/pet-tier-list`
- **Data Source:** `src/data/garden/pet-tier-list.ts`
- **Pets:** 9 (Golden Phoenix Chick, Crystal Unicorn Foal, etc.) — all fictional names
- **Multipliers:** 1.0× to 5.0× — estimated values
- **Synergy Table:** 5 pet + mutation combos — AI-generated calculations
- **Verification:** No official pet data sources found.

#### `/grow-a-garden/crop-value-list`
- **Data Source:** `src/data/garden/crop-value-list.ts`
- **Crops:** 11 (Golden Wheat, Crystal Berry, Neon Pumpkin, etc.) — fictional names
- **Coin Values:** 50 to 480 — estimated values
- **Profit Stacking Table:** 6 entries — AI-generated calculations
- **Verification:** No official crop economy data found.

---

## Grow a Garden — Legacy URLs (`/garden/`)

| # | URL | Status | Priority | Est. Search Demand | Manual Research |
|---|-----|--------|----------|-------------------|-----------------|
| 5 | `/garden/codes` | 🟠 AI Placeholder | 2 | Medium | Yes |
| 6 | `/garden/mutation-tier-list` | 🟠 AI Placeholder | 2 | Medium | Yes |
| 7 | `/garden/pet-tier-list` | 🟠 AI Placeholder | 2 | Medium | Yes |
| 8 | `/garden/crop-values` | 🟠 AI Placeholder | 2 | Medium | Yes |

**Details:** These are legacy routes created before the `/grow-a-garden/` URL structure was adopted. The data is older and less complete than the primary URLs. Each page uses inline data rather than the `src/data/` content architecture. Consider redirecting to primary URLs once content is verified.

---

## Anime Rangers X — Primary URLs (`/anime-rangers-x/`)

| # | URL | Status | Priority | Est. Search Demand | Manual Research |
|---|-----|--------|----------|-------------------|-----------------|
| 9 | `/anime-rangers-x/codes` | 🟠 AI Placeholder | 1 | Very High | Yes |
| 10 | `/anime-rangers-x/unit-tier-list` | 🟠 AI Placeholder | 1 | High | Yes |
| 11 | `/anime-rangers-x/trait-tier-list` | 🟠 AI Placeholder | 1 | High | Yes |
| 12 | `/anime-rangers-x/evolution-guide` | 🟠 AI Placeholder | 1 | High | Yes |

### Page Details

#### `/anime-rangers-x/codes`
- **Data Source:** `src/data/rangers/codes.ts`
- **Active Codes:** 6 (RANGERS_UPD6, ANIMEX_WAVE, RE_RANGERS, etc.) — all fictional
- **Expired Codes:** 6 — all fictional
- **Verification:** No official sources found.

#### `/anime-rangers-x/unit-tier-list`
- **Data Source:** `src/data/rangers/unit-tier-list.ts`
- **Units:** 11 (Chrono Slayer, Void Empress, Blaze Archon, etc.) — all fictional
- **Detail Cards:** 9 cards with strengths/weaknesses/best use — AI-generated
- **Team Comps:** 4 compositions — AI-generated
- **Verification:** No official unit data or balance patch notes found.

#### `/anime-rangers-x/trait-tier-list`
- **Data Source:** `src/data/rangers/trait-tier-list.ts`
- **Traits:** 9 (Time Rewind, God-Speed, Monarch, etc.) — all fictional
- **Detail Cards:** 7 cards — AI-generated
- **Pairing Table:** 6 optimal pairings — AI-generated
- **Verification:** No official trait system documentation found.

#### `/anime-rangers-x/evolution-guide`
- **Data Source:** `src/data/rangers/evolution-guide.ts`
- **Evolution Stages:** 4 stages — fictional costs
- **Materials:** 3 (Evolution Stones, Gems, Awakening Core) — fictional
- **Priority List:** 5 tiers — AI-generated
- **Verification:** No official evolution system data found.

---

## Anime Rangers X — Legacy URLs (`/rangers/`)

| # | URL | Status | Priority | Est. Search Demand | Manual Research |
|---|-----|--------|----------|-------------------|-----------------|
| 13 | `/rangers/codes` | 🟠 AI Placeholder | 2 | Medium | Yes |
| 14 | `/rangers/unit-tier-list` | 🟠 AI Placeholder | 2 | Medium | Yes |
| 15 | `/rangers/trait-tier-list` | 🟠 AI Placeholder | 2 | Medium | Yes |
| 16 | `/rangers/evolution-guide` | 🟠 AI Placeholder | 2 | Medium | Yes |

**Details:** Legacy routes created before the `/anime-rangers-x/` URL structure. Data is inline rather than using `src/data/`. Consider redirecting once primary content is verified.

---

## Infrastructure Pages

| URL | Status | Notes |
|-----|--------|-------|
| `/sitemap.xml` | 🟢 Real Data | Auto-generated by Next.js; lists all static routes |
| `/robots.txt` | 🟢 Real Data | Auto-generated; accurate crawl rules |
| `/_not-found` | 🟢 Real Data | Next.js default 404 page |

---

## Summary

| Status | Count | Pages |
|--------|-------|-------|
| 🟢 Real Data | 3 | sitemap.xml, robots.txt, _not-found |
| 🟡 Partially Verified | 0 | — |
| 🟠 AI Placeholder | 16 | All 16 content pages (8 primary + 8 legacy) |
| 🔴 Missing | 0 | — |

**Overall Assessment:**

- **100% of content pages (16/16) are AI Placeholder status.**
- Zero pages contain verified real game data.
- The fictional games "Grow a Garden" and "Anime Rangers X" have no discoverable official Discord, Roblox group, X account, patch notes, community wiki, or game client for data verification.
- All values (multipliers, coin amounts, gem costs, roll rates, tier rankings) are estimated and unverified.
- The content architecture (`src/data/`, templates, types) is production-ready — only the data itself needs replacement with verified values when sources become available.

**Recommended Actions:**

1. **If game is real:** Locate and verify official sources → update SOURCES.md → audit and correct data → reclassify pages as Real Data
2. **If game is fictional/demo:** All pages remain AI Placeholder status until real game data is provided
3. **Legacy URLs** (`/garden/`, `/rangers/`): Set up 301 redirects to `/grow-a-garden/` and `/anime-rangers-x/` primary URLs to consolidate SEO value
4. **Homepage:** Promo code examples and Trending Guide cards need real data or should be clearly labeled as examples
