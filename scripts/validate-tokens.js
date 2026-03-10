#!/usr/bin/env node

/**
 * Token Validator — WCAG Contrast Ratio Checks
 *
 * Parses public/tokens.css and validates that every semantic
 * foreground/background color pair meets WCAG 2.1 contrast thresholds.
 *
 * Exit 0 = all pass, Exit 1 = failures found.
 * No external dependencies.
 */

const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// 1. Parse tokens.css — extract custom properties per mode
// ---------------------------------------------------------------------------

const cssPath = path.resolve(__dirname, "../public/tokens.css");
const css = fs.readFileSync(cssPath, "utf-8");

/** Extract all --color-* and surface/fill declarations from a CSS block. */
function extractVars(block) {
  const vars = {};
  const re =
    /--(color[\w-]+|[\w-]*surface[\w-]*|[\w-]*fill[\w-]*)\s*:\s*([^;]+);/g;
  let m;
  while ((m = re.exec(block))) {
    vars[`--${m[1]}`] = m[2].trim();
  }
  return vars;
}

// Light mode: everything in :root outside @media
const lightBlock = css.replace(/@media\s*\([^)]*\)\s*\{[\s\S]*?\n\}/g, "");
const lightTokens = extractVars(lightBlock);

// Dark mode: merge light tokens with overrides from ALL prefers-color-scheme: dark blocks
const darkOverrides = {};
const darkRe =
  /@media\s*\(prefers-color-scheme:\s*dark\)\s*\{([\s\S]*?\n\s*\})\s*\}/g;
let darkMatch;
while ((darkMatch = darkRe.exec(css))) {
  Object.assign(darkOverrides, extractVars(darkMatch[1]));
}
const darkTokens = { ...lightTokens, ...darkOverrides };

// ---------------------------------------------------------------------------
// 2. Color math (sRGB)
// ---------------------------------------------------------------------------

/** Parse hex (#rrggbb or #rgb) → [r, g, b] 0–255. */
function hexToRgb(hex) {
  hex = hex.replace("#", "");
  if (hex.length === 3)
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  return [
    parseInt(hex.slice(0, 2), 16),
    parseInt(hex.slice(2, 4), 16),
    parseInt(hex.slice(4, 6), 16),
  ];
}

/** Parse rgba(r, g, b, a) → { r, g, b, a } with r/g/b 0–255. */
function parseRgba(str) {
  const m = str.match(
    /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)/,
  );
  if (!m) return null;
  return { r: +m[1], g: +m[2], b: +m[3], a: m[4] !== undefined ? +m[4] : 1 };
}

/** Resolve a CSS value to [r, g, b] (0–255), compositing alpha over a background. */
function resolve(value, bgRgb) {
  // hex
  if (value.startsWith("#")) return hexToRgb(value);
  // rgba
  const c = parseRgba(value);
  if (c) {
    return [
      Math.round(c.r * c.a + bgRgb[0] * (1 - c.a)),
      Math.round(c.g * c.a + bgRgb[1] * (1 - c.a)),
      Math.round(c.b * c.a + bgRgb[2] * (1 - c.a)),
    ];
  }
  return null;
}

/** Relative luminance per WCAG 2.1. */
function luminance([r, g, b]) {
  const [rs, gs, bs] = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/** Contrast ratio (always >= 1). */
function contrastRatio(rgb1, rgb2) {
  const l1 = luminance(rgb1);
  const l2 = luminance(rgb2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

// ---------------------------------------------------------------------------
// 3. Define expected pairs
// ---------------------------------------------------------------------------

/**
 * Each pair: { fg, bg, usage, level }
 *   level = "AA"  → 4.5:1 for normal text, 3:1 for large text
 *           "AA-large" → 3:1  (large text / UI components)
 */
const pairDefs = [
  // Primary labels on surfaces
  {
    fg: "--color-label",
    bg: "--color-surface",
    usage: "primary text on surface",
    level: "AA",
  },
  {
    fg: "--color-label",
    bg: "--color-surface-secondary",
    usage: "primary text on secondary surface",
    level: "AA",
  },
  {
    fg: "--color-label-secondary",
    bg: "--color-surface",
    usage: "secondary text on surface",
    level: "AA",
  },
  {
    fg: "--color-label-secondary",
    bg: "--color-surface-secondary",
    usage: "secondary text on secondary surface",
    level: "AA",
  },
  {
    fg: "--color-label-tertiary",
    bg: "--color-surface",
    usage: "tertiary text on surface",
    level: "AA-large",
  },
  {
    fg: "--color-label-tertiary",
    bg: "--color-surface-secondary",
    usage: "tertiary text on secondary surface",
    level: "AA-large",
  },

  // Tints on surfaces (used as label-sized text and icons)
  {
    fg: "--color-tint-action",
    bg: "--color-surface",
    usage: "action tint on surface",
    level: "AA",
  },
  {
    fg: "--color-tint-action",
    bg: "--color-surface-secondary",
    usage: "action tint on secondary surface",
    level: "AA",
  },
  {
    fg: "--color-tint-destructive",
    bg: "--color-surface",
    usage: "destructive tint on surface",
    level: "AA-large",
  },
  {
    fg: "--color-tint-destructive",
    bg: "--color-surface-secondary",
    usage: "destructive tint on secondary surface",
    level: "AA-large",
  },
  {
    fg: "--color-tint-positive",
    bg: "--color-surface",
    usage: "positive tint on surface",
    level: "AA-large",
  },
  {
    fg: "--color-tint-positive",
    bg: "--color-surface-secondary",
    usage: "positive tint on secondary surface",
    level: "AA-large",
  },

  // Grays on surfaces (often used for icons and secondary UI)
  {
    fg: "--color-gray",
    bg: "--color-surface",
    usage: "gray on surface",
    level: "AA-large",
  },
  {
    fg: "--color-gray",
    bg: "--color-surface-secondary",
    usage: "gray on secondary surface",
    level: "AA-large",
  },
];

// ---------------------------------------------------------------------------
// 4. Run checks
// ---------------------------------------------------------------------------

const THRESHOLDS = { AA: 4.5, "AA-large": 3 };

let failures = 0;
let passes = 0;

function check(mode, tokens, bgBase) {
  console.log(`\n── ${mode} mode ──`);
  for (const pair of pairDefs) {
    const bgValue = tokens[pair.bg];
    const fgValue = tokens[pair.fg];

    if (!bgValue || !fgValue) {
      console.log(`  SKIP  ${pair.usage} — token missing`);
      continue;
    }

    const bgRgb = resolve(bgValue, bgBase);
    if (!bgRgb) {
      console.log(`  SKIP  ${pair.usage} — cannot resolve bg "${bgValue}"`);
      continue;
    }

    const fgRgb = resolve(fgValue, bgRgb);
    if (!fgRgb) {
      console.log(`  SKIP  ${pair.usage} — cannot resolve fg "${fgValue}"`);
      continue;
    }

    const ratio = contrastRatio(fgRgb, bgRgb);
    const threshold = THRESHOLDS[pair.level];
    const ok = ratio >= threshold;

    const tag = ok ? "PASS" : "FAIL";
    const symbol = ok ? "\x1b[32m✓\x1b[0m" : "\x1b[31m✗\x1b[0m";
    const ratioStr = ratio.toFixed(2);

    console.log(
      `  ${symbol} ${tag}  ${ratioStr}:1  (need ${threshold}:1 ${pair.level})  ${pair.usage}`,
    );

    if (ok) passes++;
    else failures++;
  }
}

console.log("Token Validation — WCAG Contrast Checks");
console.log("========================================");

// Light mode: compositing base is white
check("Light", lightTokens, [255, 255, 255]);

// Dark mode: compositing base is dark surface
const darkSurfaceRgb = hexToRgb(darkTokens["--color-surface"] || "#1c1c1e");
check("Dark", darkTokens, darkSurfaceRgb);

// ---------------------------------------------------------------------------
// 5. Summary
// ---------------------------------------------------------------------------

console.log("\n────────────────────────────────────");
console.log(`  ${passes} passed, ${failures} failed`);
console.log("────────────────────────────────────");

process.exit(failures > 0 ? 1 : 0);
