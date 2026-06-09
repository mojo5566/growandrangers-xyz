# BloxPulse: SEO-First Gaming Portal (Figma UI/UX Design Specification)
This design specification transforms **BloxPulse** from a SaaS dashboard structure into a high-performance, **SEO-first content portal**. Inspired by the high-density layout of *Pro Game Guides* and the clean layout of *GameLeap*, this system is architected to rank for high-volume search queries and long-tail keywords (e.g., *"Roblox Grow a Garden mutation codes 2026"*, *"Anime Rangers X unit tier list best traits"*).
Every component is designed with clear content structures, semantic header tags (H1 to H4), and indexable tables to help search engine crawlers understand and rank the page quickly.
## 1. Design System Tokens (Figma Styles)
### Color Architecture (SEO Dark Mode)
The color scale focuses on reading comfort and clear structural hierarchy. Bright accents are reserved for semantic callouts, copy buttons, and clear category markers.
| Token Name | Value | Semantic Role / SEO Utility |
|---|---|---|
| Bg/Canvas | #0B0C10 | Page background body. Max contract against light text. |
| Bg/Surface | #14161D | Article cards, table rows, and content container panels. |
| Bg/Surface-Alt | #1E212B | Inline code boxes, tag backgrounds, input fields. |
| Text/Heading | #FFFFFF | Primary headers (H1, H2, H3) to catch the user's eye. |
| Text/Body | #BAC4D1 | Content copy, optimized for extended reading comfort. |
| Text/Muted | #768294 | Timestamps, table column headers, breadcrumb links. |
| Brand/Primary | #3A86FF | Clickable text links, global category tags. |
| Accent/Garden | #00E676 | Category badges and section indicators for *Grow a Garden*. |
| Accent/Rangers | #FF3D00 | Category badges and section indicators for *Anime Rangers X*. |
| Border/Subdued | #252936 | Horizontal section breaks and structural card dividers. |
### Typography Scale (Semantic Structure)
Every typographic style maps directly to an HTML tag to guarantee clean semantic structure for search engines.
 * **Display H1 (Hero Title):** Space Grotesk | Bold (700) | 36px (Mobile) / 48px (Desktop) | *Maps to <h1>*
 * **Section H2 (Hub Titles):** Space Grotesk | Semi-Bold (600) | 24px (Mobile) / 32px (Desktop) | *Maps to <h2>*
 * **Article H3 (Card Titles):** Inter | Semi-Bold (600) | 16px (Mobile) / 20px (Desktop) | *Maps to <h3>*
 * **Body Text:** Inter | Regular (400) | 15px | Line-Height: 160% | *Maps to <p>*
 * **Code Text / Badges:** Inter | Bold (700) | 13px | Monospace track | *Maps to <code> / <span>*
### Grid, Spacing & Layout Constraints
 * **Base Unit:** 8px progressive spacing system (8px, 16px, 24px, 32px, 64px).
 * **Mobile Layout:** 4-Column Fluid Grid | 16px Margins | 16px Gutters | Target Width: 390px.
 * **Desktop Layout:** 12-Column Centered Grid | 24px Margins | 24px Gutters | Max Structural Width: 1200px.
## 2. Component Hierarchy (SEO & Layout Building Blocks)
### 🧩 [Component] Content_Header_Group
A block placed at the start of each hub to establish quick keyword context for search engines and readers alike.
 * **Visual Structure:** A category tag aligned with an H2 header, followed by a 2-line contextual paragraph.
 * **Figma Auto-Layout:** Vertical layout, 8px spacing, fixed width stretching to parent container.
### 🧩 [Component] SEO_Data_Table
A simplified layout that replaces complex dashboard widgets with easy-to-read, indexable table rows.
 * **Visual Structure:**
```
[ Column Header: Muted Text ]                  [ Column Header: Muted Text ]
----------------------------------------------------------------------------
⚡ Row Title (H3 Link)                         🏷️ Metatag / Static Value Label

```
 * **Figma Auto-Layout:** Horizontal row layout with text sets aligned to the left and right edges. Includes a Border/Subdued line along the bottom edge.
### 🧩 [Component] 1-Tap_Promo_Card
An active promo card designed to increase engagement metrics (CTR) and reduce bounce rates.
 * **Visual Structure:** Contains an alphanumeric code string inside an inline box, a copy action button, and a text string listing verified reward details.
 * **Interaction State:** Clicking changes the layout background to #1E212B, swaps the text string to [ ✅ COPIED ], and triggers an instant system clipboard copy.
## 3. Figma Layer & Hierarchy Architecture
```
📁 [Frame] SEO_Homepage_Portal_Desktop_1440
 ├── 📁 [Component] Global_Navigation (Header wrapper)
 ├── 📁 [Frame] Semantic_Main_Content_Area (1200px Max-Width Layout)
 │    ├── 📁 [Section] Hero_Search_Zone (H1 + Search Box Wrapper)
 │    ├── 📁 [Section] Master_Promo_Codes_Container
 │    │    ├── 📁 [Sub-Frame] Garden_Codes_Flexbox [Auto-Layout: Wrap]
 │    │    └── 📁 [Sub-Frame] Rangers_Codes_Flexbox [Auto-Layout: Wrap]
 │    ├── 📁 [Section] Grow_A_Garden_SEO_Hub (Left Column Grid)
 │    │    ├── 🟩 [Instance] Content_Header_Group (Targeting primary keywords)
 │    │    ├── 🟩 [Instance] SEO_Data_Table (Direct link indexes)
 │    │    └── 📁 [Frame] Latest_Patch_Notes_Feed (Semantic text lists)
 │    ├── 📁 [Section] Anime_Rangers_X_SEO_Hub (Right Column Grid)
 │    │    ├── 🟩 [Instance] Content_Header_Group (Targeting primary keywords)
 │    │    ├── 🟩 [Instance] SEO_Data_Table (Direct link indexes)
 │    │    └── 📁 [Frame] Latest_Updates_Feed (Semantic text lists)
 │    └── 📁 [Section] Longtail_FAQ_Accordion_Section (H2 + Markdown Schema layout)
 └── 📁 [Component] Portal_Footer

```
## 4. Mobile Viewport Layout Blueprint (390px Fluid)
The mobile view optimizes for vertical reading, stacking essential content blocks so users can find codes and guides without unnecessary horizontal scrolling.
```
+------------------------------------------+
| 🌐 BloxPulse Logo                     ☰  |
+------------------------------------------+
|                                          |
|  <h1> Roblox Codes & Guides Portal </h1>  |
|  <p> Get working promo codes, tier       |
|  lists, and gameplay guides. </p >        |
|                                          |
|  [ 🔍 Search games, codes, or guides... ]|
|                                          |
+------------------------------------------+
| 🎁 ACTIVE REDEEMABLE CODES               |
|                                          |
|  🌱 Grow a Garden Codes                  |
|  +-------------------------------------+ |
|  | SEED_GROW_2026         | [📋 COPY]  | |
|  | 💰 500 free Sheckles (Verified Today) | |
|  +-------------------------------------+ |
|                                          |
|  ⚔️ Anime Rangers X Codes                 |
|  +-------------------------------------+ |
|  | TRAIT_REROLL_X         | [📋 COPY]  | |
|  | 💎 200 free Gems (Active Code)        | |
|  +-------------------------------------+ |
+------------------------------------------+
| 🌱 GROW A GARDEN HUB                     |
| <p> Find the latest mutation updates,    |
| crop prices, and pet guides. </p >       |
|                                          |
|  > 🏆 Ultimate Mutation Tier List        |
|  > 🐾 Best Pets Multiplier Guide         |
|  > 💰 Current Crop Value List            |
|                                          |
| 🕒 Latest Patch Notes                    |
| • April 24, 2026 — Easter Mutation Event |
|   Added 5 new legendary mutations and    |
|   the exclusive Bunny Pet Egg container. |
+------------------------------------------+
| ⚔️ ANIME RANGERS X HUB                  |
| <p> Level up your squad with combat      |
| trait indexes and progression paths. </p >|
|                                          |
|  > 🏆 Meta Unit Strength Tier List       |
|  > 🧬 Fighter Trait Tier List            |
|  > 🛠️ Character Evolution Guide          |
|                                          |
| 🕒 Latest Updates                        |
| • June 2026 — Re:Rangers Balance Patch   |
|   Reworked 3 legacy traits and adjusted  |
|   infinite base wave gold multipliers.   |
+------------------------------------------+
| ❓ FREQUENTLY ASKED QUESTIONS            |
| [v] How do I redeem codes in Roblox?    |
| [v] When do tier lists get updated?     |
+------------------------------------------+

```
## 5. Desktop Viewport Layout Architecture (1440px Fixed)
The desktop layout transitions into a classic 2-column resource directory layout, mirroring high-authority portals like *Pro Game Guides* and *GameLeap* to present substantial text content directly above the fold.
```
+----------------------------------------------------------------------------------------------------+
| 🌐 BloxPulse Portal           [🌱 Grow a Garden]    [⚔️ Anime Rangers X]                [🔍 Search] |
+----------------------------------------------------------------------------------------------------+
|                                                                                                    |
|             <h1> Ultimate Roblox Codes, Tier Lists & Gameplay Guides Portal </h1>                  |
|     <p> Your index for updated working codes, meta tier rankings, and item values. </p >            |
|                    [ 🔍 Search active codes, tier lists, or keyword guides... ]                    |
|                                                                                                    |
+----------------------------------------------------------------------------------------------------+
| 🎁 LATEST ACTIVE PROMO CODES (Updated Daily)                                                       |
| -------------------------------------------------------------------------------------------------- |
| 🌱 GROW A GARDEN CODES                         | ⚔️ ANIME RANGERS X CODES                         |
| +--------------------------------------------+ | +-----------------------------------------------+ |
| | CODE: GAG_SPRING26       | 📋 ONE-TAP COPY | | | CODE: RANGERS_UPD6       | 📋 ONE-TAP COPY    | |
| | Reward: x10 Mutation Shards (Active)       | | | Reward: x500 Gems & XP Boost (Active)         | |
| +--------------------------------------------+ | +-----------------------------------------------+ |
+----------------------------------------------------------------------------------------------------+
| 📊 COMPLETE GAME HUBS & ESSENTIAL RESOURCE DIRECTORIES                                             |
| -------------------------------------------------------------------------------------------------- |
| 🌱 GROW A GARDEN CENTRAL                       | ⚔️ ANIME RANGERS X CENTRAL                       |
| <h2> Grow a Garden Master Wiki Guides </h2>    | <h2> Anime Rangers X Tier Lists & Guides </h2>   |
| <p> Master your farm with our vetted crop     | <p> Build the perfect team using current meta     |
| value sheets, mutation breakdowns, and pet   | unit tier lists, evolution paths, and optimal     |
| multiplier systems. </p >                      | trait rolls. </p >                                 |
|                                                |                                                   |
|  > 🏆 Rarity Mutation Tier List (V2.1)         |  > 🏆 Mythic Unit Strategic Tier List             |
|  > 🐾 Pet Hatching & Multiplier Guide         |  > 🧬 Character Trait Modifier Table              |
|  > 💰 Economy Crop Value List                  |  > 🛠️ Unit Evolution Requirements Guide           |
|  > 📅 Active World Event Calendar Guide        |  > 💎 Infinite Mode Fast Gem Farming Guide        |
|                                                |                                                   |
| 🕒 Latest Patch Notes & Game Updates           | 🕒 Current Version Log & Rebalances               |
|  • April 2026 — Easter Event Update            |  • June 2026 — Re:Rangers Title Restructure      |
|    Introduced the tier-5 Bunny Mutation, path  |    Complete progression overhaul balancing        |
|    fixes, and permanent trade catalog codes.   |    infinite wave drop rates and base unit pools.   |
+----------------------------------------------------------------------------------------------------+
| 💡 LONGE-TAIL SEARCH KEYWORD ACCORDIONS (Google Rich Snippets Schema)                              |
| -------------------------------------------------------------------------------------------------- |
| [v] How do I redeem item reward promo codes inside Roblox games?                                   |
|     To redeem codes, launch the target game in Roblox, locate the Twitter/Bird or Codes button on   |
|     the side interface menu, paste the code text string, and hit submit to verify.                 |
+----------------------------------------------------------------------------------------------------+

```
### 6. Senior Designer SEO Implementation Directives
 1. **Indexable Data Structure:** Content lists and tables use standard text layouts rather than inside-canvas code arrays. This configuration ensures that search engine spiders can crawl, index, and pull content highlights directly into Google Rich Snippets.
 2. **Strategic Keyword Density:** Heading blocks use natural keyword spacing (such as *"Master Wiki Guides"*, *"Tier Lists & Guides"*) to capture specific long-tail search traffic without over-optimizing content blocks.
 3. **No Extraneous Dashboard Elements:** The interface excludes tracking scripts, data visualizations, and client-side metrics containers, keeping page load speeds low and maximizing performance metrics (Core Web Vitals).
