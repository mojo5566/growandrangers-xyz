# IndexNow Setup Guide — GrowAndRangers.xyz

**Last Updated:** July 28, 2026

This document describes the IndexNow integration for automatic search engine notification when game content is updated.

---

## What is IndexNow?

IndexNow is an open protocol that lets websites notify search engines (Bing, Yandex, Naver, Seznam) when content is added or updated. Instead of waiting for crawlers to discover changes, you push a notification — Bing typically recrawls within 24-48 hours.

**Key benefit:** Game content (codes, events, updates) goes stale fast. IndexNow ensures Bing indexes new codes and event pages within hours, not weeks.

---

## 1. Key Generation

The IndexNow key is already generated and deployed:

```
Key:    a1b2c3d4e5f60718293a4b5c6d7e8f90
File:   public/a1b2c3d4e5f60718293a4b5c6d7e8f90.txt
URL:    https://growandrangers.xyz/a1b2c3d4e5f60718293a4b5c6d7e8f90.txt
```

### How the key was generated

The key is a 32-character hexadecimal string (16 bytes). Per the IndexNow spec, the key must be 8-128 hex characters, and a file named `{key}.txt` must be accessible at the site root containing the key as its body.

### Regenerating the key (if needed)

If you need to rotate the key:

```bash
# Generate a new 32-char hex key
node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"

# Create the key file in public/
# Replace <NEW_KEY> with the generated value
echo "<NEW_KEY>" > public/<NEW_KEY>.txt

# Update the key in scripts/indexnow-submit.js
# Set INDEXNOW_KEY = "<NEW_KEY>"
```

---

## 2. File Structure

```
public/
  a1b2c3d4e5f60718293a4b5c6d7e8f90.txt   ← Key verification file (served at root)

scripts/
  indexnow-submit.js                       ← Submission script (pure Node.js)

package.json
  "indexnow": "node scripts/indexnow-submit.js"
```

---

## 3. Vercel Deployment

### Key file deployment

The key file lives in `public/` — Next.js automatically serves files in this directory at the root URL. No special Vercel config needed.

After deploying, verify the key file is accessible:

```bash
curl https://growandrangers.xyz/a1b2c3d4e5f60718293a4b5c6d7e8f90.txt
# Should return: a1b2c3d4e5f60718293a4b5c6d7e8f90
```

### Deployment workflow

```bash
# 1. Build and deploy
npm run build
npx vercel --prod

# 2. Submit updated URLs to IndexNow
npm run indexnow
```

The `npm run indexnow` command runs locally and submits URLs to the IndexNow API. It does not need to run on Vercel — it just needs network access to `api.indexnow.org`.

---

## 4. Usage

### Default submission (recommended)

Submits high-frequency pages + new SEO articles + database list pages (~40 URLs):

```bash
npm run indexnow
```

This covers:
- Homepage and hub pages
- All 3 codes pages (grow-a-garden, anime-rangers-x, grow-a-garden-2)
- Events, updates, trading pages
- 15 new SEO article pages
- 12 database list pages

### Submit all sitemap URLs

Submits all 324 URLs from the live sitemap:

```bash
npm run indexnow -- --all
```

Use this only after major site-wide updates. The script fetches `/sitemap.xml` from the live site and submits every URL.

### Submit specific URLs

```bash
npm run indexnow -- --urls /grow-a-garden/codes /grow-a-garden/events
```

Use this for targeted submissions after editing specific pages.

---

## 5. What the Script Does

1. **Verifies the key file** — Fetches `https://growandrangers.xyz/{key}.txt` and confirms the content matches the key. Aborts if verification fails.
2. **Builds the URL list** — Uses the built-in path sets (or sitemap.xml for `--all`).
3. **Submits in batches** — POSTs to `api.indexnow.org/IndexNow` in batches of 100 URLs.
4. **Reports results** — Shows success/failure count and HTTP status codes.

### IndexNow status codes

| Code | Meaning | Action |
|------|---------|--------|
| 200 | OK — URLs submitted successfully | None |
| 202 | Accepted — will process asynchronously | None |
| 400 | Bad request — invalid payload | Check key format |
| 403 | Forbidden — key verification failed | Verify key file is accessible |
| 422 | Unprocessable — invalid URL format | Check URL format |

---

## 6. When to Run

| Scenario | Command |
|----------|---------|
| After deploying new codes | `npm run indexnow -- --urls /grow-a-garden/codes /anime-rangers-x/codes /grow-a-garden-2/codes` |
| After publishing a new SEO article | `npm run indexnow -- --urls /grow-a-garden/new-article-path` |
| After a major content update | `npm run indexnow` |
| After a site-wide update (e.g., new database) | `npm run indexnow -- --all` |
| After deploying event/update pages | `npm run indexnow -- --urls /grow-a-garden/events /grow-a-garden/updates` |

---

## 7. Submission Scope (Default Mode)

### High-Frequency Pages (14 URLs)

```
/                              (homepage)
/grow-a-garden                 (hub)
/anime-rangers-x               (hub)
/grow-a-garden-2               (hub)
/grow-a-garden/codes           (daily code updates)
/anime-rangers-x/codes         (daily code updates)
/grow-a-garden-2/codes         (daily code updates)
/grow-a-garden/events          (weekly event drops)
/grow-a-garden/updates         (weekly update drops)
/grow-a-garden/trading         (daily market values)
/grow-a-garden/top-trading-items
/grow-a-garden/rare-items-value
/grow-a-garden/trading-tips
```

### New SEO Articles (15 URLs)

```
/grow-a-garden/best-dragon-pets
/grow-a-garden/best-phoenix-pets
/grow-a-garden/best-event-pets
/grow-a-garden/best-summer-pets
/grow-a-garden/best-pets-for-money
/grow-a-garden/best-mythical-pets
/grow-a-garden/best-mythical-pets-ranking
/grow-a-garden/rainbow-mutation-guide
/grow-a-garden/gold-mutation-guide
/grow-a-garden/shock-mutation-guide
/grow-a-garden/best-mutation-combinations
/grow-a-garden/best-legendary-seeds
/grow-a-garden/best-event-seeds
/grow-a-garden/how-to-level-fast
/grow-a-garden/how-to-get-rich-fast
```

### Database List Pages (12 URLs)

```
/grow-a-garden/pets
/grow-a-garden/mutations
/grow-a-garden/crops
/grow-a-garden/seeds
/grow-a-garden/eggs
/grow-a-garden/mutation-tier-list
/grow-a-garden/pet-tier-list
/grow-a-garden/crop-value-list
/grow-a-garden/best-crops
/grow-a-garden/best-pets
/grow-a-garden/best-mutations
/grow-a-garden/best-seeds
```

**Total default submission: ~41 URLs**

---

## 8. Technical Details

- **No external dependencies** — uses only Node.js built-in `https` and `fs` modules
- **IndexNow endpoint:** `https://api.indexnow.org/IndexNow`
- **Batch size:** 100 URLs per request (IndexNow supports up to 10,000)
- **Key verification:** Script auto-verifies the key file before submitting
- **Search engines reached:** Bing, Yandex, Naver, Seznam (all participate in IndexNow)

---

## 9. Troubleshooting

### Key file verification fails

```bash
# Check if the key file is deployed
curl -I https://growandrangers.xyz/a1b2c3d4e5f60718293a4b5c6d7e8f90.txt

# Should return HTTP 200
# If 404, redeploy: npm run build && npx vercel --prod
```

### Submission returns 403

The IndexNow API could not verify the key file. Wait a few minutes after deployment for the key file to propagate, then retry.

### Submission returns 422

Check that all URLs in the payload start with `https://growandrangers.xyz`. The script handles this automatically, but custom URLs passed via `--urls` must be valid paths.

### Bing doesn't recrawl after submission

IndexNow is a hint, not a command. Bing prioritizes recrawls based on site authority and content frequency. High-frequency pages (codes, events) typically get recrawled within 24 hours; low-priority pages may take longer.
