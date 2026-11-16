# Dredge Fish & Aberration Reference

Static site (`index.html` + `data.js`) for a Dredge player mid-run with a full cargo hold, deciding fast which catch to sell to the fish merchant and which to keep for the collector — filtered by region, time of day, and tool, plus a cargo-haul calculator for a quick total.

## Sections

1. **Fish (67)** — region/zone, sell price, time of day, tool, and known aberrations for every base-game fish on the source page (six regions plus the Exotic category), searchable and filterable, sortable by any column.
2. **Aberrations (61)** — the same fields for every mutated fish, plus the base fish each one mutates from (click a base-fish name to jump back to the Fish tab and search for it).
3. **Cargo-Haul Calculator** — enter a count per fish or aberration, see a running total and which rows in your haul are the top three sellers.

No dedicated Dredge calculator or database exists (per Gate 2) — this reference is assembled directly from one static prose guide.

## Data provenance

- Fish and aberration tables: [Gameplay Tips — DREDGE Encyclopedia Guide](https://gameplay.tips/guides/dredge-encyclopedia-guide.html), published 2023-04-04, fetched and parsed directly from the live page on 2026-11-16. Row counts (67 base fish numbered #1–#67, 61 aberrations numbered #68–#128) match the source's own continuous numbering.
- `dredge.wiki.gg` and `dredge.fandom.com` both returned 403 Forbidden on direct fetch; Fandom is off-limits per charter regardless. No second reachable source was found, so DLC fish from the Pale Reach and Iron Rig expansions (released after this guide was written) are **not covered**.
- Sun/moon glyphs on the source (`[U+2600]`/`[U+1F319]`) were decoded to the text `Day`/`Night`/`Day/Night` rather than carried through as emoji. The mission-marker glyph (`[U+1F3AF]`) was stripped from mission text entirely, per the no-emoji-as-meaning rule.

No value in this reference was invented. The source itself has a handful of internal typos:

- Two aberration rows (`#84 Bloodskin Shark`, `#85 Cleft-mouth Shark`) list an "Aberration of" field with the aberration's own name wrongly appended to the base fish (`"Bronze Whaler Bloodskin"`, `"Blacktip Reef Shark Cleft-mouth"`). Both were corrected to the plain base-fish name using the source's own base-fish aberration list (each base fish names that exact aberration as its own), and each corrected row carries a `note` field disclosing the original source text.
- One aberration row (`#89 Scouring Bass`) lists its base fish as the truncated `"Black Sea"`; corrected to `"Black Sea Bass"` (#15), the only base fish matching that name, with the correction disclosed in its `note` field.
- One row (`#128`) appears to swap its own name and base-fish fields with base fish `#63 Ocean Sunfish` (both reference "Charred" vs "Ocean Sunfish" in opposite fields) — this was **not** corrected, since which field is the typo cannot be verified from this source alone. It is shown exactly as published, with the inconsistency disclosed in its `note` field and excepted from the one test that would otherwise flag it as a cross-table mismatch.

No other value is guessed: any field the source does not publish is literal text `"not published"`. Sell price is the source's stated AVERAGE/base rate; the page's footer and haul-calculator caption both state that actual payout varies with the size (quality) of the individual catch.

## Running / testing

```
node test.js                     # 18/18 known-answer + row-count + disclosure + arithmetic tests
python3 -m http.server 8000      # serve the folder, then open http://localhost:8000/
```
