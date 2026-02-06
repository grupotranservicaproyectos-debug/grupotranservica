# TRANSERVICA Production Blank Page - Diagnostic Report

**Date:** February 6, 2026  
**Affected URLs:**  
- https://grupotranservica.com  
- https://grupotranservicacom.replit.app  

**Symptom:** Both URLs serve HTML correctly (HTTP 200, 25,531 bytes), but the page renders completely blank. The `<div id="root"></div>` container remains empty — React never mounts.

---

## 1. HTTP Response Headers (HTML page)

```
HTTP/2 200
content-type: text/html; charset=UTF-8
content-length: 25531
cache-control: private, max-age=0
cross-origin-opener-policy: same-origin-allow-popups
cross-origin-resource-policy: cross-origin
strict-transport-security: max-age=63072000; includeSubDomains
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
x-xss-protection: 1; mode=block
referrer-policy: strict-origin-when-cross-origin
permissions-policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()
server: Google Frontend
via: 1.1 google
x-powered-by: Express
```

**Note:** Two duplicate `strict-transport-security` headers — one from our Express app (max-age=31536000) and one from the Replit/Google Frontend infrastructure (max-age=63072000).

---

## 2. JavaScript Asset Loading

All JavaScript chunks return **HTTP 200** from production with correct content sizes:

| File | HTTP Status | Size (bytes) | Content-Type | Match Local? |
|------|------------|-------------|--------------|-------------|
| vendor-react-D0lnFW21.js | 200 | 136,342 | application/javascript | YES |
| vendor-misc-BugrAvYs.js | 200 | 395,333 | application/javascript | YES |
| index-0FihaUdy.js | 200 | 131,963 | application/javascript | YES |
| vendor-query-OEAMpfaQ.js | 200 | 3,075 | application/javascript | YES |
| vendor-icons-7Uhx0TRZ.js | 200 | 13,310 | application/javascript | YES |
| index-BxOr27ad.css | 200 | 121,234 | text/css | YES |

All lazy-loaded chunks (29 total) are present and return HTTP 200.

JS asset response headers (no CSP/COOP applied to static assets):
```
cache-control: private, max-age=31536000, immutable
cross-origin-resource-policy: cross-origin
x-content-type-options: nosniff
```

Replit-injected scripts also return HTTP 200:
- `https://replit.com/public/js/replit-dev-banner.js` — 200
- `https://replit-cdn.com/feedback-widget/widget.global.js` — 200

---

## 3. Browser Console Error (from Playwright testing)

**Primary Error:**
```
TypeError: Cannot read properties of undefined (reading 'useState')
```

This error occurs during ES module evaluation and prevents React from mounting into `#root`.

---

## 4. Content Security Policy

CSP is applied ONLY to HTML responses (not static assets):

```
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://www.youtube-nocookie.com https://s.ytimg.com https://replit.com https://replit-cdn.com https://www.googletagmanager.com https://www.google-analytics.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com data:;
img-src 'self' data: https: blob: https://i.ytimg.com https://img.youtube.com;
connect-src 'self' https://api.openrouter.ai https://generativelanguage.googleapis.com https://www.google-analytics.com https://vitals.vercel-insights.com wss: ws:;
object-src 'none';
base-uri 'self';
form-action 'self';
frame-ancestors 'self';
upgrade-insecure-requests
```

**Assessment:** CSP appears correct. `'self'` allows all same-origin scripts. `replit.com` and `replit-cdn.com` are allowed for Replit-injected scripts.

---

## 5. ROOT CAUSE: Circular Module Dependency

### The Problem

The Vite build configuration uses `manualChunks` to split vendor code. This creates a **circular ES module dependency** between the two main vendor chunks:

**vendor-react** imports from **vendor-misc:**
```js
import{af as e, ag as n} from "./vendor-misc-BugrAvYs.js"
```

**vendor-misc** imports from **vendor-react:**
```js
import{r as Ve, a as qe, R as Ze, j as ze, b as We, c as He} from "./vendor-react-D0lnFW21.js"
```

### Why This Breaks React

The build target is `es2015`, which causes Rollup/Terser to use `var` declarations. When the browser evaluates these circular modules:

1. Browser starts evaluating `vendor-react` (main entry point imports it)
2. `vendor-react` imports `{af, ag}` from `vendor-misc` → browser pauses and starts evaluating `vendor-misc`
3. `vendor-misc` imports `{r as Ve}` from `vendor-react` — but `vendor-react` hasn't finished evaluating yet
4. Due to `var` hoisting (es2015 target), `Ve` resolves to `undefined` instead of the React module
5. `vendor-misc` proceeds with `var et = Ve` → `et` is permanently `undefined`
6. `vendor-misc` finishes; browser returns to `vendor-react` and finishes
7. By now, vendor-react's exports are properly assigned, BUT vendor-misc already captured `undefined` in step 4-5
8. When app code calls `useState`, it dereferences through the broken chain → **"Cannot read properties of undefined (reading 'useState')"**

### What vendor-react imports from vendor-misc

The two symbols vendor-react needs are:

- **`af` → `Ke`**: A `getDefaultExport` helper function:
  ```js
  function Ke(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
  }
  ```

- **`ag` → `Ge`**: The `use-sync-external-store` shim module:
  ```js
  var Ge = Ye.exports  // Where Ye uses Ve (React) internally
  ```
  This depends on React (`Ve`) which creates the actual circular initialization problem.

### What `manualChunks` configuration causes this

```js
// vite.config.ts - current configuration
manualChunks(id) {
  if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/")) {
    return "vendor-react";  // React core only
  }
  // ... other chunks ...
  if (id.includes("node_modules")) {
    return "vendor-misc";   // EVERYTHING else, including scheduler, use-sync-external-store
  }
}
```

The `scheduler` and `use-sync-external-store` packages are React's internal dependencies but get placed in `vendor-misc` (the catch-all), creating the circular dependency.

---

## 6. Recommended Fix

### Option A: Fix manualChunks (preferred)

Include React's internal dependencies in the same chunk:

```js
manualChunks(id) {
  if (
    id.includes("node_modules/react/") ||
    id.includes("node_modules/react-dom/") ||
    id.includes("node_modules/scheduler/") ||
    id.includes("node_modules/react-is/") ||
    id.includes("node_modules/use-sync-external-store/")
  ) {
    return "vendor-react";
  }
  // ... rest unchanged
}
```

### Option B: Remove manualChunks entirely

Let Vite/Rollup handle chunk splitting automatically (safe default):

```js
rollupOptions: {
  output: {
    // Remove manualChunks entirely
    chunkFileNames: "assets/[name]-[hash].js",
    entryFileNames: "assets/[name]-[hash].js",
    assetFileNames: "assets/[name]-[hash].[ext]",
  }
}
```

### Option C: Change build target

Change `target: "es2015"` to `target: "es2020"` or `target: "esnext"`. Modern targets use `const/let` which interact differently with circular dependencies (temporal dead zone instead of silent `undefined`). This alone may not fix the issue but would produce a more informative error.

---

## 7. Why Development Works But Production Doesn't

- **Development (Vite dev server):** Serves individual ES modules directly from `node_modules`. No chunk splitting, no circular dependency — each module is loaded independently.
- **Production (Vite build):** Uses Rollup to bundle code into chunks per the `manualChunks` configuration. This creates the circular dependency between `vendor-react` and `vendor-misc`.

---

## 8. Additional Notes

- **Build output is correct:** `dist/index.mjs` (84KB server bundle) and all 30 client-side chunks are generated successfully
- **Production server starts fine:** Express server boots and serves on port 5000 without errors
- **File integrity verified:** MD5 checksums match between local build and production-served files
- **No CORS issues:** All assets are same-origin, `Cross-Origin-Resource-Policy: cross-origin` is set
- **No missing files:** All 29 lazy-loaded chunks exist and return HTTP 200

---

## 9. Environment Details

- **Runtime:** Node.js v20.20.0
- **Framework:** React 18 + Vite 6
- **Build tool:** Vite with Rollup + Terser
- **Server:** Express.js behind Google Frontend (Replit Autoscale deployment)
- **Deployment target:** `autoscale`
- **Build target:** `es2015`
- **Repl ID:** 9b84f722-47f3-4aea-ab6f-7512c11ef56c

---

## 10. Constraint

The `vite.config.ts` file is currently locked from editing in this environment. The fix requires modifying the `manualChunks` function in `vite.config.ts` to include `scheduler` and `use-sync-external-store` in the `vendor-react` chunk, breaking the circular dependency.
