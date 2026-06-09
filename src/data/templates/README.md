# Content Templates

Copy a template to create new guide pages quickly.

## Usage

1. Copy the template to `src/data/[game]/[page-name].ts`
2. Fill in the placeholder values
3. Create the page route:
   ```
   src/app/[game]/[page-name]/page.tsx
   ```
4. Import your data file and use the corresponding component pattern

## Template Types

| Template | For | Imports |
|----------|-----|---------|
| `codes.template.ts` | Promo code lists | `CodesPageData` |
| `tier-list.template.ts` | Unit/mutation/trait rankings | `TierListPageData` |
| `guide.template.ts` | Evolution, farming, strategy guides | `EvolutionPageData` |
| `value-list.template.ts` | Item values, prices, profit tables | `CropValuesPageData` |

## Fields included in every template

- `title` — H1 heading + meta title
- `description` — meta description + intro paragraph
- `updatedAt` — "Last Updated" timestamp
- `breadcrumbs` — navigation breadcrumb trail
- `faq` — FAQ accordion items (5 recommended for SEO)
- `relatedGuides` — internal cross-links (3 recommended)

## SEO fields

All templates include the fields needed for:
- `<title>` tag
- `<meta name="description">`
- Open Graph (`og:title`, `og:description`)
- Schema.org structured data (auto-injected by ContentLayout + ContentFAQ)
- BreadcrumbList JSON-LD
- FAQPage JSON-LD

## Example: Creating a new codes page

```ts
// 1. Copy template
cp src/data/templates/codes.template.ts src/data/new-game/codes.ts

// 2. Fill in data
// Edit codes.ts with your game's codes, FAQ, etc.

// 3. Create page route at src/app/new-game/codes/page.tsx:
import data from "@/data/new-game/codes";
// ...render using ContentLayout + ContentFAQ...
```
