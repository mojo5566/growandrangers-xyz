# BloxPulse — Codes Cleanup Plan: `/grow-a-garden/codes`

> Page: `/grow-a-garden/codes`
> Component: `src/app/grow-a-garden/codes/page.tsx`
> Data file: `src/data/garden/codes.ts`
> Review date: June 8, 2026

---

## Question 1: Are any AI-generated codes displayed to users?

**Yes. All 12 codes are AI-generated and displayed to users as if verified.**

The page currently renders:
- 6 active codes in a table with code, reward, and note
- 6 expired codes in a dimmed table with code, reward, and expiration date

Worse, the page makes two **false claims**:

| Claim | Location | Reality |
|-------|----------|---------|
| "Every code is verified manually by the BloxPulse team." | Meta description (`data.description`) | Zero codes verified |
| "All 6 active codes verified and working." | Last Updated banner | All 6 are AI-generated |

Users who attempt to redeem these codes in-game will get errors. This is a **trust-damaging UX problem**.

---

## Question 2: Which data file powers this page?

**`src/data/garden/codes.ts`**

Import chain:
```
src/app/grow-a-garden/codes/page.tsx
  -> import data from "@/data/garden/codes"
      -> import type { CodesPageData } from "../types"
```

The `CodesPageData` interface is in `src/data/types.ts`. The page component is a pure renderer — all content comes from the data file.

---

## Question 3: Is the page currently using placeholder data?

**Yes. 100% placeholder. Every field is AI-generated.**

| Field | Count | Source |
|-------|-------|--------|
| title | 1 | AI Generated |
| description | 1 | AI Generated (includes false verification claim) |
| updatedAt | 1 | AI Generated |
| breadcrumbs | 2 | Structural (acceptable) |
| activeCodes | 6 | AI Generated |
| expiredCodes | 6 | AI Generated |
| howToRedeem | 4 steps | AI Generated (references unverified game UI) |
| faq | 5 items | AI Generated (references unverified items/mechanics) |
| relatedGuides | 3 links | Structural (links to existing pages) |

The content architecture (types, interfaces, data separation) is production-ready. Only the **values** are placeholder.

---

## Question 4: What content would remain if all unverified codes were removed?

If we strip all AI-generated content, here is what survives:

### Survives (structural / internal links)

| Section | Content | Status |
|---------|---------|--------|
| Breadcrumbs | Home → Grow a Garden Codes | ✅ Structural |
| Related Guides | 3 internal links to other pages | ✅ Structural |
| Page layout | ContentLayout wrapper, grid, borders | ✅ UI only |

### Questionable (references unverified game details)

| Section | Content | Issue |
|---------|---------|-------|
| How to Redeem (step 1) | "Launch Grow a Garden from Roblox" | Game name may be real; "bird icon" unverified |
| How to Redeem (step 2) | "Codes button (bird icon) on left-hand side menu" | UI description unverified |
| How to Redeem (step 3) | "codes are case-sensitive" | Generic advice, acceptable |
| How to Redeem (step 4) | "Rewards appear in your inventory instantly" | Generic, acceptable |

### Must Be Removed (verified as AI-generated)

| Section | Content | Why |
|---------|---------|-----|
| Active Codes table | 6 codes with rewards and notes | All AI-generated |
| Expired Codes table | 6 codes with expiration dates | All AI-generated |
| Last Updated banner | "All 6 active codes verified and working" | False claim |
| Meta description | "Every code is verified manually" | False claim |
| FAQ Q1 | "Codes button (bird icon) on the left-side menu" | References unverified UI |
| FAQ Q2 | Code case-sensitivity advice | Generic but tied to fake codes |
| FAQ Q3 | "We check for new codes daily" | False claim about verification process |
| FAQ Q4 | "Save Mutation Shards for mutation-boosted events" | References AI-invented mechanic |
| FAQ Q5 | "Pet Growth Potions stack up to 5 for 75% boost" | Fabricated game mechanic |

---

## Cleanup Strategy

### Option A: Full Removal (Recommended for truthfulness)

Remove all unverified data. The page becomes a skeleton:

```
Page: /grow-a-garden/codes
├── Title (updated to remove false claims)
├── Description (updated to note codes are pending)
├── Breadcrumbs ✅
├── Last Updated (updated: "No verified codes available")
├── Active Codes: EMPTY
├── Expired Codes: EMPTY
├── How to Redeem (generic Roblox instructions only)
├── FAQ (reduced to 1-2 generic questions)
└── Related Guides ✅
```

**Resulting data file:**

| Field | Old | New |
|-------|-----|-----|
| title | "Grow a Garden Codes — All Active & Expired Promo Codes (June 2026)" | "Grow a Garden Codes (June 2026)" |
| description | "...Every code is verified manually..." | "Find working Grow a Garden promo codes. We update this page as soon as new codes are released." |
| activeCodes | 6 items | `[]` (empty) |
| expiredCodes | 6 items | `[]` (empty) |
| faq | 5 items | 2 generic items (how to redeem, why codes expire) |
| howToRedeem | 4 steps | 3 generic steps (no unverified UI details) |

### Option B: Add Disclaimer (Faster, less honest)

Keep AI-generated codes but add a prominent disclaimer:

> ⚠️ **Note:** Codes listed below are example placeholders. Official codes are not yet available. Check back after the next game update.

**Risk:** Users who miss the disclaimer will still try fake codes and lose trust.

### Option C: Hybrid (Recommended for launch)

- Clear all active/expired codes (Option A)
- Keep How to Redeem as generic Roblox instructions
- Keep structural elements (breadcrumbs, related guides)
- Add a "No codes available yet — check back soon" placeholder
- When real codes are found, populate the arrays

---

## Recommended Action

**Option A: Full Removal.** A skeleton page with honest messaging is better than a page with fake codes that damages user trust.

### Data file changes (`src/data/garden/codes.ts`):

```
activeCodes: []      // was: 6 AI-generated codes
expiredCodes: []     // was: 6 AI-generated codes
faq: reduced to 2    // was: 5 items with unverified mechanics
title: updated       // remove false verification claim
description: updated // remove "verified manually" claim
```

### Page remains functional:
- Layout, breadcrumbs, related guides — all work with empty arrays
- The `{data.activeCodes.length}` in Last Updated will show "0"
- Tables simply render nothing (empty `.map()`)

---

*Report only — no files were modified.*
