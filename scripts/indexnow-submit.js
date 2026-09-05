#!/usr/bin/env node
/**
 * IndexNow Auto-Submit Script
 *
 * Notifies Bing (and other IndexNow-compatible engines) when game content
 * is updated. Uses the IndexNow protocol — a single POST to api.indexnow.org
 * fans out to all participating search engines.
 *
 * Usage:
 *   npm run indexnow              # Submit default priority URLs
 *   npm run indexnow -- --all     # Submit all 324 sitemap URLs
 *   npm run indexnow -- --urls /path1 /path2   # Submit specific paths
 *
 * No external dependencies — pure Node.js (https module).
 */

let https;

// ============================================================
// Configuration
// ============================================================

const BASE_URL = "https://growandrangers.xyz";
const INDEXNOW_KEY = "a7d8af18bc874bada160af81f32b830f";
const INDEXNOW_KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`;
const INDEXNOW_ENDPOINT = "api.indexnow.org";
const INDEXNOW_PATH = "/IndexNow";

// Max URLs per IndexNow batch request (spec recommends ≤ 10,000)
const BATCH_SIZE = 100;

// ============================================================
// URL Sets — categorized by update frequency
// ============================================================

/**
 * High-frequency update pages — content that changes daily/weekly.
 * These are the URLs most worth re-submitting after a content update.
 */
const HIGH_FREQUENCY_PATHS = [
  // Homepage & hubs
  "",
  "/grow-a-garden",
  "/anime-rangers-x",
  "/grow-a-garden-2",

  // Codes (daily updates)
  "/grow-a-garden/codes",
  "/anime-rangers-x/codes",
  "/grow-a-garden-2/codes",

  // Events & Updates (weekly content drops)
  "/grow-a-garden/events",
  "/grow-a-garden/updates",
  "/grow-a-garden/trading",
  "/grow-a-garden/top-trading-items",

  // Trading value (daily market shifts)
  "/grow-a-garden/rare-items-value",
  "/grow-a-garden/trading-tips",
];

/**
 * New SEO article pages — submitted once after publish, then on major edits.
 * These are the 15 articles added in the July 2026 content expansion.
 */
const NEW_SEO_ARTICLE_PATHS = [
  // Pet专题
  "/grow-a-garden/best-dragon-pets",
  "/grow-a-garden/best-phoenix-pets",
  "/grow-a-garden/best-event-pets",
  "/grow-a-garden/best-summer-pets",
  "/grow-a-garden/best-pets-for-money",
  "/grow-a-garden/best-mythical-pets",
  "/grow-a-garden/best-mythical-pets-ranking",

  // Mutation专题
  "/grow-a-garden/rainbow-mutation-guide",
  "/grow-a-garden/gold-mutation-guide",
  "/grow-a-garden/shock-mutation-guide",
  "/grow-a-garden/best-mutation-combinations",

  // Seed专题
  "/grow-a-garden/best-legendary-seeds",
  "/grow-a-garden/best-event-seeds",

  // Beginner专题
  "/grow-a-garden/how-to-level-fast",
  "/grow-a-garden/how-to-get-rich-fast",
];

/**
 * Database list pages — re-submit when database entries are added/edited.
 */
const DATABASE_LIST_PATHS = [
  "/grow-a-garden/pets",
  "/grow-a-garden/mutations",
  "/grow-a-garden/crops",
  "/grow-a-garden/seeds",
  "/grow-a-garden/eggs",
  "/grow-a-garden/mutation-tier-list",
  "/grow-a-garden/pet-tier-list",
  "/grow-a-garden/crop-value-list",
  "/grow-a-garden/best-crops",
  "/grow-a-garden/best-pets",
  "/grow-a-garden/best-mutations",
  "/grow-a-garden/best-seeds",
];

// ============================================================
// Default submission set (covers the user's requested scope)
// ============================================================

const DEFAULT_PATHS = [
  ...HIGH_FREQUENCY_PATHS,
  ...NEW_SEO_ARTICLE_PATHS,
  ...DATABASE_LIST_PATHS,
];

// ============================================================
// IndexNow submission logic
// ============================================================

/**
 * Read sitemap.ts-derived URL list for --all mode.
 * Since sitemap.ts is TypeScript, we parse the staticPages array with regex
 * rather than importing it. For --all mode, we fall back to a fetch of the
 * live /sitemap.xml if parsing fails.
 */
async function getAllUrls() {
  return new Promise((resolve, reject) => {
    const req = https.get(
      `${BASE_URL}/sitemap.xml`,
      { timeout: 15000 },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          const urlMatches = data.match(/<loc>([^<]+)<\/loc>/g) || [];
          const urls = urlMatches
            .map((m) => m.replace(/<\/?loc>/g, ""))
            .filter((u) => u.startsWith(BASE_URL));
          resolve(urls);
        });
      }
    );
    req.on("error", reject);
    req.on("timeout", () => {
      req.destroy();
      reject(new Error("sitemap.xml fetch timeout"));
    });
  });
}

/**
 * Submit a batch of URLs to IndexNow.
 * @param {string[]} urls - Full URLs to submit
 * @returns {Promise<{status: number, body: string}>}
 */
function submitBatch(urls) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      host: "growandrangers.xyz",
      key: INDEXNOW_KEY,
      keyLocation: INDEXNOW_KEY_LOCATION,
      urlList: urls,
    });

    const options = {
      hostname: INDEXNOW_ENDPOINT,
      port: 443,
      path: INDEXNOW_PATH,
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Host": INDEXNOW_ENDPOINT,
        "Content-Length": Buffer.byteLength(payload),
      },
    };

    const req = https.request(options, (res) => {
      let body = "";
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => {
        resolve({ status: res.statusCode, body });
      });
    });

    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

/**
 * Verify the key file is accessible on the live site.
 */
function verifyKeyFile() {
  return new Promise((resolve) => {
    const req = https.get(
      `${INDEXNOW_KEY_LOCATION}`,
      { timeout: 10000 },
      (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
          const ok =
            res.statusCode === 200 && body.trim() === INDEXNOW_KEY;
          resolve({ ok, status: res.statusCode, body: body.trim() });
        });
      }
    );
    req.on("error", () => resolve({ ok: false, status: 0, body: "" }));
    req.on("timeout", () => {
      req.destroy();
      resolve({ ok: false, status: 0, body: "timeout" });
    });
  });
}

// ============================================================
// CLI entry point
// ============================================================

async function main() {
  https = await import("node:https");
  const args = process.argv.slice(2);

  // Parse flags
  const useAll = args.includes("--all");
  const urlsFlagIdx = args.indexOf("--urls");
  const customUrls =
    urlsFlagIdx !== -1 ? args.slice(urlsFlagIdx + 1) : null;

  // Determine which URLs to submit
  let paths;
  if (customUrls) {
    paths = customUrls;
  } else if (useAll) {
    console.log("📡 Fetching full sitemap from live site...");
    try {
      const allUrls = await getAllUrls();
      paths = allUrls.map((u) => u.replace(BASE_URL, ""));
      console.log(`   Retrieved ${paths.length} URLs from sitemap.xml`);
    } catch (err) {
      console.error("   ✗ Failed to fetch sitemap.xml:", err.message);
      console.error("   Falling back to default URL set.");
      paths = DEFAULT_PATHS;
    }
  } else {
    paths = DEFAULT_PATHS;
  }

  // Deduplicate
  const uniquePaths = [...new Set(paths)].filter(Boolean);
  const fullUrls = uniquePaths.map((p) =>
    p.startsWith("http") ? p : `${BASE_URL}${p.startsWith("/") ? p : "/" + p}`
  );

  console.log("");
  console.log("═══════════════════════════════════════════════════");
  console.log("  IndexNow Submission — GrowAndRangers.xyz");
  console.log("═══════════════════════════════════════════════════");
  console.log(`  Endpoint:  https://${INDEXNOW_ENDPOINT}${INDEXNOW_PATH}`);
  console.log(`  Key:       ${INDEXNOW_KEY}`);
  console.log(`  Key file:  ${INDEXNOW_KEY_LOCATION}`);
  console.log(`  URLs:      ${fullUrls.length}`);
  console.log("───────────────────────────────────────────────────");
  console.log('');

  // Step 1: Verify key file is accessible
  console.log("🔑 Step 1: Verifying key file is accessible...");
  const keyCheck = await verifyKeyFile();
  if (keyCheck.ok) {
    console.log(`   ✓ Key file verified (HTTP 200, content matches)`);
  } else {
    console.error(`   ✗ Key file verification FAILED`);
    console.error(`     Status: ${keyCheck.status || "no response"}`);
    console.error(`     Expected: HTTP 200 with content "${INDEXNOW_KEY}"`);
    console.error(`     Got: "${keyCheck.body}"`);
    console.error('');
    console.error('     Make sure the site is deployed and the key file');
    console.error('     is accessible at the root before submitting.');
    process.exit(1);
  }
  console.log('');

  // Step 2: Submit URLs in batches
  console.log(`📤 Step 2: Submitting ${fullUrls.length} URLs in batches of ${BATCH_SIZE}...`);

  let successCount = 0;
  let failCount = 0;
  const batches = [];
  for (let i = 0; i < fullUrls.length; i += BATCH_SIZE) {
    batches.push(fullUrls.slice(i, i + BATCH_SIZE));
  }

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    const batchNum = i + 1;
    process.stdout.write(`   Batch ${batchNum}/${batches.length} (${batch.length} URLs)... `);

    try {
      const result = await submitBatch(batch);

      // IndexNow status codes:
      // 200 = OK, 202 = Accepted (will process async), 422 = Invalid format
      if (result.status === 200 || result.status === 202) {
        console.log(`✓ ${result.status} ${result.status === 200 ? "OK" : "Accepted"}`);
        successCount += batch.length;
      } else {
        console.log(`✗ ${result.status}`);
        if (result.body) console.log(`     ${result.body.slice(0, 200)}`);
        failCount += batch.length;
      }
    } catch (err) {
      console.log(`✗ ERROR: ${err.message}`);
      failCount += batch.length;
    }
  }

  console.log('');
  console.log('───────────────────────────────────────────────────');
  console.log(`  Result: ${successCount} submitted, ${failCount} failed`);
  if (successCount > 0) {
    console.log('  Status: ✓ IndexNow notified successfully');
    console.log('');
    console.log('  Bing will recrawl the submitted URLs within');
    console.log('  ~24-48 hours. No further action needed.');
  } else {
    console.log('  Status: ✗ Submission failed');
    process.exit(1);
  }
  console.log('═══════════════════════════════════════════════════');
  console.log('');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
