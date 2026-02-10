# DIAGNOSTIC REPORT - Production Blank Page Issue
**Date**: February 10, 2026  
**Site**: grupotranservica.com  
**Status**: RESOLVED

## Issue Description
Production site at grupotranservica.com displaying blank page with only `<div id="root"></div>` empty - React app not mounting.

## Root Cause Analysis

### Primary Cause: Circular ES Module Dependency + Read-Only Filesystem

Vite's `manualChunks` configuration creates two vendor chunks:
- `vendor-react-DwTNCwuz.js` (279KB) - packages with "react" in path
- `vendor-tYHK78aa.js` (522KB) - everything else

These chunks have a **circular dependency**:
- `vendor-react` imports 29 bindings from `vendor` (scheduler, use-sync-external-store, @tanstack/query-core, etc.)
- `vendor` imports 8 bindings from `vendor-react` (React hooks used by wouter, etc.)

During ES module evaluation, this circular import causes `TypeError: Cannot read properties of undefined (reading 'useState')` because React's exports are `undefined` when `vendor` tries to use them during module initialization.

### Why It Worked in Development
Development mode uses Vite's dev server with unbundled ES modules - no chunking, no circular dependency.

### Why the Previous Fix Failed in Production
The previous `fixCircularDeps()` implementation:
1. Read vendor chunks from disk at server startup
2. Merged them into a single file using IIFE wrapping
3. **Wrote the fixed files back to disk** via `fs.writeFileSync()`

**Problem**: Replit's production deployment environment has a **read-only filesystem**. The `writeFileSync()` calls fail silently (caught by try/catch), and the original circular-dependency files continue to be served by `serveStatic()`, causing the blank page.

## Fix Applied

### In-Memory Middleware Approach
Instead of writing fixed files to disk, the fix now:
1. Reads original vendor chunks from disk at startup
2. Detects circular dependency between them
3. Creates merged content **in memory** (stored in a `Map<string, Buffer>`)
4. Registers Express middleware **before** `serveStatic()` that intercepts requests for the vendor chunk URLs
5. Serves the fixed content directly from memory with proper Content-Type and Cache-Control headers

This approach is **filesystem-independent** - works regardless of whether the disk is read-only or writable.

### Merge Strategy (IIFE Wrapping)
Both chunks use short minified variable names (a, b, c...) that would collide in a naive concatenation. The fix:
1. Wraps vendor code in an IIFE: `(function(){ ...vendor code... })()`
2. Wraps vendor-react code in a separate IIFE: `(function(){ ...vendor-react code... })()`
3. Vendor IIFE executes first (defines scheduler, helpers)
4. Vendor-react IIFE executes second (uses scheduler, defines React)
5. Cross-chunk bindings mapped via intermediate variables (`__v$xxx`, `__vr$xxx`)
6. Single export statement at the end covers all bindings
7. Original vendor file becomes thin re-export: `export{...}from"./vendor-react-DwTNCwuz.js"`

### Result
- Merged vendor-react: 806KB (self-contained, no circular imports)
- Thin vendor re-export: 589 bytes (imports from vendor-react only)
- No circular dependency between chunks
- React mounts correctly

## Files Involved

| File | Original Size | After Fix | Notes |
|------|--------------|-----------|-------|
| vendor-react-DwTNCwuz.js | 279,707 B | 806,184 B | Merged (served from memory) |
| vendor-tYHK78aa.js | 522,916 B | 589 B | Thin re-export (served from memory) |
| index-Dtj0gYyq.js | 126,817 B | unchanged | Entry point |
| index-CYDM7Y6A.css | 119,958 B | unchanged | Styles |

## Verification

### Production Asset Check (via curl)
```
HTTP/2 200  vendor-react: 806,192 bytes ✓
HTTP/2 200  vendor: 589 bytes ✓  
HTTP/2 200  index.js: 126,817 bytes ✓
```

### Server Startup Log
```
[express] Circular dependency detected between vendor chunks. Fixing with IIFE merge...
[express] Fixed circular dependency (in-memory): merged vendor-tYHK78aa.js (522910B) + vendor-react-DwTNCwuz.js (279705B) = 806184B
[express]   vendor-react imports from vendor: 29 bindings
[express]   vendor imports from vendor-react: 8 bindings
[express] Serving 2 patched vendor chunks from memory
[express] serving on port 5000
```

## Key File
- `server/index.ts` - Contains `fixCircularDeps()`, `circularDepOverrides` Map, and middleware registration
