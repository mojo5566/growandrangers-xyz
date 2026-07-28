# IndexNow Key File Report — GrowAndRangers.xyz

**Date:** July 28, 2026

---

## 1. File Location

```
public/a7d8af18bc874bada160af81f32b830f.txt
```

**File content (pure UTF-8 text, no trailing content):**

```
a7d8af18bc874bada160af81f32b830f
```

Next.js App Router automatically serves files in `public/` at the site root — no routing config needed.

---

## 2. Access URL

After Vercel deployment, the key file will be accessible at:

```
https://growandrangers.xyz/a7d8af18bc874bada160af81f32b830f.txt
```

### Verification (after deployment)

```bash
curl https://growandrangers.xyz/a7d8af18bc874bada160af81f32b830f.txt
# Expected response:
# a7d8af18bc874bada160af81f32b830f
```

The response must:
- Return HTTP 200
- Body exactly matches the key: `a7d8af18bc874bada160af81f32b830f`

---

## 3. Build Result

```
> next build

▲ Next.js 16.2.7 (Turbopack)
✓ Compiled successfully in 37.2s
✓ TypeScript check passed (0 errors)
✓ Generating static pages using 15 workers (324/324) in 28.9s
```

| Check | Result |
|-------|--------|
| TypeScript errors | **0** ✅ |
| Build exit code | **0** ✅ |
| Static pages generated | **324/324** ✅ |
| Failed routes | **None** ✅ |

---

## 4. Deployment

```bash
npx vercel --prod

# Verify after deployment
curl https://growandrangers.xyz/a7d8af18bc874bada160af81f32b830f.txt
```

The key file will be live immediately after Vercel deployment completes.

---

## 5. Summary

| Item | Detail |
|------|--------|
| Key | `a7d8af18bc874bada160af81f32b830f` |
| File path | `public/a7d8af18bc874bada160af81f32b830f.txt` |
| Access URL | `https://growandrangers.xyz/a7d8af18bc874bada160af81f32b830f.txt` |
| File format | Pure UTF-8 text |
| Build status | ✅ 0 errors, 324/324 pages |

**READY TO DEPLOY** ✅
