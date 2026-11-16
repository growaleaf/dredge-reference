// Headless tests. Run with: node test.js
const assert = require("assert");
const {
  SOURCES, FISH, ABERRATIONS, allRegions, allTimes, allTools, findByName,
} = require("./data.js");

let passed = 0;
function test(name, fn) {
  try {
    fn();
    passed++;
    console.log("PASS -", name);
  } catch (e) {
    console.error("FAIL -", name, "-", e.message);
    process.exitCode = 1;
  }
}

// 1. Base fish row count matches the source's own numbering (#1-#67, before aberrations start at #68).
test("fish row count is 67", () => {
  assert.strictEqual(FISH.length, 67);
});

// 2. Aberration row count matches the source's own numbering (#68-#128).
test("aberration row count is 61", () => {
  assert.strictEqual(ABERRATIONS.length, 61);
});

// 3. No duplicate names within fish or within aberrations.
test("no duplicate fish or aberration names", () => {
  assert.strictEqual(new Set(FISH.map(f => f.name)).size, FISH.length);
  assert.strictEqual(new Set(ABERRATIONS.map(a => a.name)).size, ABERRATIONS.length);
});

// 4. Every fish and aberration row carries a numeric sell price (no invented/blank values).
test("every fish and aberration row has a numeric sellPrice", () => {
  for (const row of [...FISH, ...ABERRATIONS]) {
    assert.strictEqual(typeof row.sellPrice, "number");
    assert.ok(row.sellPrice > 0, row.name + " sellPrice should be > 0");
  }
});

// 5. Known-answer lookup: Blue Mackerel (#1, first fish on the source page).
test("known-answer: Blue Mackerel is The Marrows/Coastal, $10.00, Day, Rod/Trawl", () => {
  const f = findByName(FISH, "Blue Mackerel");
  assert.ok(f);
  assert.strictEqual(f.region, "The Marrows");
  assert.strictEqual(f.zone, "Coastal");
  assert.strictEqual(f.sellPrice, 10);
  assert.strictEqual(f.time, "Day");
  assert.strictEqual(f.tool, "Rod/Trawl");
  assert.deepStrictEqual(f.aberrations, ["Grotesque", "Lumpy", "Many-Eyed"]);
});

// 6. Known-answer: Gazing Shark (aberration of Hammerhead Shark) is the single
//    highest-value row in the whole dataset at $425.00.
test("known-answer: Gazing Shark is the highest-value row, $425 aberration of Hammerhead Shark", () => {
  const a = findByName(ABERRATIONS, "Gazing Shark");
  assert.ok(a);
  assert.strictEqual(a.sellPrice, 425);
  assert.strictEqual(a.baseFish, "Hammerhead Shark");
  const maxPrice = Math.max(...FISH.map(f => f.sellPrice), ...ABERRATIONS.map(a => a.sellPrice));
  assert.strictEqual(maxPrice, 425);
});

// 7. Known-answer: Common Crab (#11) is the lowest-value base fish at $5.25.
test("known-answer: Common Crab is the lowest-value base fish, $5.25", () => {
  const f = findByName(FISH, "Common Crab");
  assert.ok(f);
  assert.strictEqual(f.sellPrice, 5.25);
  const minFishPrice = Math.min(...FISH.map(x => x.sellPrice));
  assert.strictEqual(minFishPrice, 5.25);
});

// 8. The four Exotic-category fish (Oarfish, Gulper Eel, Goliath Tigerfish,
//    Coelacanth) are each $250.00 and flagged exotic: true.
test("all four Exotic fish are $250.00 and flagged exotic", () => {
  const exoticNames = ["Oarfish", "Gulper Eel", "Goliath Tigerfish", "Coelacanth"];
  const exotic = FISH.filter(f => f.exotic);
  assert.strictEqual(exotic.length, 4);
  for (const name of exoticNames) {
    const f = findByName(FISH, name);
    assert.ok(f, name + " should exist");
    assert.strictEqual(f.exotic, true);
    assert.strictEqual(f.sellPrice, 250);
  }
});

// 9. Every aberration's baseFish resolves to a real base-fish row, including
//    the two rows whose source text had a duplicated-name typo (#84, #85),
//    which were corrected using the base fish's own aberration list rather
//    than invented. (#128 is excepted: the source itself swaps the name and
//    baseFish fields for that row, disclosed via its "note" field, not corrected.)
test("every aberration's baseFish resolves to a real fish row (except disclosed #128 source swap)", () => {
  for (const a of ABERRATIONS) {
    if (a.num === 128) continue;
    const base = findByName(FISH, a.baseFish);
    assert.ok(base, a.name + " baseFish \"" + a.baseFish + "\" does not resolve to a fish row");
  }
});

// 10. The two corrected rows (#84, #85) carry a disclosure note; they are not
//     silently fixed.
test("corrected rows #84 and #85 carry a disclosure note", () => {
  const bloodskin = ABERRATIONS.find(a => a.num === 84);
  const cleftmouth = ABERRATIONS.find(a => a.num === 85);
  assert.ok(bloodskin.note && bloodskin.note.length > 0);
  assert.ok(cleftmouth.note && cleftmouth.note.length > 0);
  assert.strictEqual(bloodskin.baseFish, "Bronze Whaler");
  assert.strictEqual(cleftmouth.baseFish, "Blacktip Reef Shark");
});

// 11. Time-of-day values are drawn only from the three known states produced
//     by decoding the source's sun/moon glyphs into text — never a raw emoji
//     and never an invented fourth state.
test("all time values are Day, Night, or Day/Night (glyphs decoded to text)", () => {
  const known = new Set(["Day", "Night", "Day/Night"]);
  for (const row of [...FISH, ...ABERRATIONS]) {
    assert.ok(known.has(row.time), row.name + " has unexpected time value: " + row.time);
    assert.ok(!/[☀-➿]/.test(row.time), row.name + " time value still contains an emoji glyph");
  }
});

// 12. No row anywhere in the dataset (name, mission, spot, note fields)
//     contains the target-emoji glyph the source used for missions — it must
//     have been stripped to plain text per the no-emoji-as-meaning rule.
test("no row contains the source's target-emoji glyph", () => {
  for (const row of [...FISH, ...ABERRATIONS]) {
    const fields = [row.name, row.mission, row.spot, row.note].filter(Boolean);
    for (const f of fields) {
      assert.ok(!f.includes("\u{1F3AF}"), row.name + " field still contains the target emoji");
    }
  }
});

// 13. allRegions/allTimes/allTools return non-empty, de-duplicated lists
//     usable as filter-dropdown options.
test("allRegions/allTimes/allTools are non-empty and de-duplicated", () => {
  const regions = allRegions(FISH);
  const times = allTimes(FISH);
  const tools = allTools(FISH);
  assert.ok(regions.length > 0 && times.length > 0 && tools.length > 0);
  assert.strictEqual(new Set(regions).size, regions.length);
  assert.ok(regions.includes("The Marrows"));
  assert.ok(times.includes("Night"));
  assert.ok(tools.includes("Rod"));
});

// 14. findByName is case-insensitive and returns undefined for a name that
//     is not on either list (never fabricates a row).
test("findByName is case-insensitive, returns undefined for unknown names", () => {
  assert.ok(findByName(FISH, "blue mackerel"));
  assert.strictEqual(findByName(FISH, "Totally Fake Fish"), undefined);
  assert.strictEqual(findByName(ABERRATIONS, "Totally Fake Aberration"), undefined);
});

// 15. Every row's source id resolves to a real entry in SOURCES (no dangling citation).
test("every row's source id resolves in SOURCES", () => {
  for (const row of [...FISH, ...ABERRATIONS]) {
    assert.ok(SOURCES[row.source], row.name + " has unresolved source id: " + row.source);
  }
});

// 16. sellPriceRaw parses back to the same numeric value as sellPrice for
//     every row (catches a transcription slip between the raw and parsed form).
test("sellPriceRaw parses back to the same number as sellPrice", () => {
  for (const row of [...FISH, ...ABERRATIONS]) {
    const parsed = parseFloat(row.sellPriceRaw.replace(/[^0-9.]/g, ""));
    assert.strictEqual(parsed, row.sellPrice, row.name + " sellPriceRaw/sellPrice mismatch");
  }
});

// 17. Known-answer: haul-calculator arithmetic for a small basket (2 Blue
//     Mackerel + 1 Gazing Shark) totals 2*10 + 1*425 = $445.00 — the exact
//     calculation the page's haul calculator performs per row.
test("known-answer: haul total for 2 Blue Mackerel + 1 Gazing Shark is $445.00", () => {
  const mackerel = findByName(FISH, "Blue Mackerel");
  const shark = findByName(ABERRATIONS, "Gazing Shark");
  const total = 2 * mackerel.sellPrice + 1 * shark.sellPrice;
  assert.strictEqual(total, 445);
});

// 18. Every base-fish aberration name listed inline on a fish row also
//     appears as the start of some aberration row's own name (cross-check
//     the two tables agree with each other, catching a one-sided edit).
//     Exception: Ocean Sunfish (#63) lists "Charred" as its aberration, but
//     the source's own aberration row #128 swaps the name/baseFish fields
//     (disclosed in ABERRATIONS[127].note) so no row literally starts with
//     "Charred" -- this is the source's inconsistency, not a parsing bug.
test("every fish row's listed aberration name matches an aberration row (except disclosed Ocean Sunfish swap)", () => {
  for (const f of FISH) {
    if (f.name === "Ocean Sunfish") continue;
    for (const aberName of f.aberrations) {
      const match = ABERRATIONS.find(a => a.name.toLowerCase().startsWith(aberName.toLowerCase()));
      assert.ok(match, `Fish "${f.name}" lists aberration "${aberName}" with no matching ABERRATIONS row`);
    }
  }
});

console.log(`\n${passed}/18 tests reported (see PASS/FAIL lines above)`);
if (process.exitCode) {
  console.error("\nSOME TESTS FAILED");
} else {
  console.log("\nALL TESTS PASSED");
}
