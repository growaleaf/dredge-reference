// Dredge Fish & Aberration Reference -- data layer.
// Source: gameplay.tips DREDGE Encyclopedia Guide (dated April 4, 2023), fetched 2026-11-16.
// Covers base-game fish only (dredge.wiki.gg and dredge.fandom.com returned 403 on fetch).
// DLC fish (Pale Reach, Iron Rig) are NOT covered -- no second reachable source with real
// values was found for them. Any value not present in the source is "not published".
// Sell price is the AVERAGE/base rate shown by the source; the source itself states actual
// sale value varies with the size (quality) of the individual catch.
// A few source rows had their own internal typos (duplicated/truncated names); each one
// is disclosed verbatim in that row's "note" field rather than silently corrected or hidden.

const SOURCES = {
  gameplay_tips: {
    name: "Gameplay Tips -- DREDGE Encyclopedia Guide",
    url: "https://gameplay.tips/guides/dredge-encyclopedia-guide.html",
    published: "2023-04-04",
    fetched: "2026-11-16",
    note: "Base-game fish only (7 regions incl. Exotic) plus their aberrations. Fetched and parsed directly from the live page.",
  },
};

// ---- Base fish: region, zone, sell price, time of day, tool, known aberrations ----
const FISH = [
  { num: 1, name: "Blue Mackerel", region: "The Marrows", zone: "Coastal", exotic: false, sellPrice: 10.0, sellPriceRaw: "$10.00", time: "Day", tool: "Rod/Trawl", aberrations: ["Grotesque", "Lumpy", "Many-Eyed"], mission: "\"Figure in Blue\", M7 – 1. request", spot: "L7", source: "gameplay_tips" },
  { num: 2, name: "Cod", region: "The Marrows", zone: "Coastal", exotic: false, sellPrice: 18.0, sellPriceRaw: "$18.00", time: "Day", tool: "Rod/Trawl", aberrations: ["All-Seeing", "Fanged", "Three-Headed"], mission: null, spot: "K8", source: "gameplay_tips" },
  { num: 3, name: "Arrow Squid", region: "The Marrows", zone: "Coastal", exotic: false, sellPrice: 14.0, sellPriceRaw: "$14.00", time: "Night", tool: "Rod/Trawl", aberrations: ["Brood", "Snag"], mission: "\"Caught to Order\", J8 – 2. request", spot: "J8", source: "gameplay_tips" },
  { num: 4, name: "Grey Eel", region: "The Marrows", zone: "Shallow", exotic: false, sellPrice: 18.0, sellPriceRaw: "$18.00", time: "Day/Night", tool: "Rod/Trawl", aberrations: ["Barbed", "Host"], mission: "\"Caught to Order\", J8 – 1. request", spot: "K8", source: "gameplay_tips" },
  { num: 5, name: "Gulf Flounder", region: "The Marrows", zone: "Shallow", exotic: false, sellPrice: 18.0, sellPriceRaw: "$18.00", time: "Day", tool: "Rod/Trawl", aberrations: ["Cyclopean", "Riddled"], mission: "\"Caught to Order\", J8 – 1. request", spot: "K8", source: "gameplay_tips" },
  { num: 6, name: "Black Grouper", region: "The Marrows", zone: "Shallow", exotic: false, sellPrice: 35.0, sellPriceRaw: "$35.00", time: "Night", tool: "Rod/Trawl", aberrations: ["Tusked", "Voltaic"], mission: "\"Caught to Order\", J8 – 2. request", spot: "K9", source: "gameplay_tips" },
  { num: 7, name: "Stingray", region: "The Marrows", zone: "Shallow", exotic: false, sellPrice: 60.0, sellPriceRaw: "$60.00", time: "Day/Night", tool: "Rod", aberrations: ["Shard"], mission: null, spot: "J7", source: "gameplay_tips" },
  { num: 8, name: "Sailfish", region: "The Marrows", zone: "Oceanic", exotic: false, sellPrice: 120.0, sellPriceRaw: "$120.00", time: "Day", tool: "Rod/Trawl", aberrations: ["Sallow"], mission: "\"Figure in Red\", L14 – 2. request", spot: "K10/K11", source: "gameplay_tips" },
  { num: 9, name: "Bronze Whaler", region: "The Marrows", zone: "Oceanic", exotic: false, sellPrice: 100.0, sellPriceRaw: "$100.00", time: "Day", tool: "Rod/Trawl", aberrations: ["Bloodskin"], mission: null, spot: "K8", source: "gameplay_tips" },
  { num: 10, name: "Blacktip Reef Shark", region: "The Marrows", zone: "Oceanic", exotic: false, sellPrice: 120.0, sellPriceRaw: "$120.00", time: "Night", tool: "Rod/Trawl", aberrations: ["Cleft-mouth"], mission: null, spot: "K7", source: "gameplay_tips" },
  { num: 11, name: "Common Crab", region: "The Marrows", zone: "0-25m", exotic: false, sellPrice: 5.25, sellPriceRaw: "$5.25", time: "Day/Night", tool: "Pot", aberrations: [], mission: "\"Caught to Order\", J8 – 3. request", spot: "J8", source: "gameplay_tips" },
  { num: 12, name: "Fiddler Crab", region: "The Marrows", zone: "0-10m", exotic: false, sellPrice: 35.0, sellPriceRaw: "$35.00", time: "Day/Night", tool: "Pot", aberrations: [], mission: "\"Caught to Order\", J8 – 3. request", spot: "J8", source: "gameplay_tips" },
  { num: 13, name: "Oceanic Perch", region: "Gale Cliffs", zone: "Coastal", exotic: false, sellPrice: 5.5, sellPriceRaw: "$5.50", time: "Day", tool: "Rod/Trawl", aberrations: ["Gnashing"], mission: "\"Figure in Blue\", M7 – 2. request", spot: "M4", source: "gameplay_tips" },
  { num: 14, name: "Tiger Mackerel", region: "Gale Cliffs", zone: "Coastal", exotic: false, sellPrice: 12.5, sellPriceRaw: "$12.50", time: "Day", tool: "Rod/Trawl", aberrations: ["Flayed", "Bearded"], mission: null, spot: "N4", source: "gameplay_tips" },
  { num: 15, name: "Black Sea Bass", region: "Gale Cliffs", zone: "Coastal", exotic: false, sellPrice: 15.0, sellPriceRaw: "$15.00", time: "Night", tool: "Rod/Trawl/Pot", aberrations: ["Scouring"], mission: null, spot: "N4", source: "gameplay_tips" },
  { num: 16, name: "Stonefish", region: "Gale Cliffs", zone: "Shallow", exotic: false, sellPrice: 22.0, sellPriceRaw: "$22.00", time: "Day/Night", tool: "Rod/Trawl", aberrations: ["Gelatinous"], mission: null, spot: "N4", source: "gameplay_tips" },
  { num: 17, name: "Blackmouth Salmon", region: "Gale Cliffs", zone: "Coastal", exotic: false, sellPrice: 20.0, sellPriceRaw: "$20.00", time: "Day/Night", tool: "Rod/Trawl", aberrations: ["Decaying"], mission: null, spot: "N4", source: "gameplay_tips" },
  { num: 18, name: "Conger Eel", region: "Gale Cliffs", zone: "Shallow", exotic: false, sellPrice: 50.0, sellPriceRaw: "$50.00", time: "Night", tool: "Rod", aberrations: ["Sprouting"], mission: "\"Best Before\", M4", spot: "N4/O4", source: "gameplay_tips" },
  { num: 19, name: "Devil Ray", region: "Gale Cliffs", zone: "Oceanic", exotic: false, sellPrice: 55.0, sellPriceRaw: "$55.00", time: "Night", tool: "Rod/Trawl", aberrations: ["Whithered"], mission: null, spot: "O4/OP", source: "gameplay_tips" },
  { num: 20, name: "Sturgeon", region: "Gale Cliffs", zone: "Oceanic", exotic: false, sellPrice: 50.0, sellPriceRaw: "$50.00", time: "Day", tool: "Rod/Trawl", aberrations: ["Translucent"], mission: null, spot: "O4/O5", source: "gameplay_tips" },
  { num: 21, name: "Wreckfish", region: "Gale Cliffs", zone: "Shallow", exotic: false, sellPrice: 60.0, sellPriceRaw: "$60.00", time: "Day", tool: "Rod", aberrations: ["Shattered", "bony"], mission: null, spot: "N4", source: "gameplay_tips" },
  { num: 22, name: "Rock Crab", region: "Gale Cliffs", zone: "0-25m", exotic: false, sellPrice: 11.5, sellPriceRaw: "$11.50", time: "Day/Night", tool: "Pot", aberrations: [], mission: null, spot: "N4", source: "gameplay_tips" },
  { num: 23, name: "Decorator Crab", region: "Gale Cliffs", zone: "0-5m", exotic: false, sellPrice: 27.0, sellPriceRaw: "$27.00", time: "Day/Night", tool: "Pot", aberrations: [], mission: null, spot: "N4", source: "gameplay_tips" },
  { num: 24, name: "Aurora Jellyfish", region: "Stellar Basin", zone: "Coastal", exotic: false, sellPrice: 10.0, sellPriceRaw: "$10.00", time: "Night", tool: "Trawl", aberrations: ["Parhelion"], mission: null, spot: "Use net around the island", source: "gameplay_tips" },
  { num: 25, name: "Fangtooth", region: "Stellar Basin", zone: "Abyssal", exotic: false, sellPrice: 8.0, sellPriceRaw: "$8.00", time: "Day/Night", tool: "Rod", aberrations: ["Cursed"], mission: "\"Figure in Gold\", K2 – 2. request", spot: "H3/G3", source: "gameplay_tips" },
  { num: 26, name: "Barreleye", region: "Stellar Basin", zone: "Abyssal", exotic: false, sellPrice: 15.0, sellPriceRaw: "$15.00", time: "Day/Night", tool: "Rod", aberrations: ["Voideye"], mission: "\"Figure in Purple\", E10 – 3. request", spot: "E1", source: "gameplay_tips" },
  { num: 27, name: "Firefly Squid", region: "Stellar Basin", zone: "Coastal", exotic: false, sellPrice: 15.0, sellPriceRaw: "$15.00", time: "Night", tool: "Rod/Trawl", aberrations: ["Radiant"], mission: null, spot: "E2", source: "gameplay_tips" },
  { num: 28, name: "Red Snapper", region: "Stellar Basin", zone: "Coastal", exotic: false, sellPrice: 13.0, sellPriceRaw: "$13.00", time: "Day", tool: "Rod/Trawl", aberrations: ["Blood"], mission: "\"Figure in Gold\", K2 – 1. request", spot: "K2", source: "gameplay_tips" },
  { num: 29, name: "Giant Amphipod", region: "Stellar Basin", zone: "Hadal", exotic: false, sellPrice: 30.0, sellPriceRaw: "$30.00", time: "Day/Night", tool: "Rod", aberrations: ["Ruptured"], mission: null, spot: "E3 (Easy after finishing “Research Assistant”, D5)", source: "gameplay_tips" },
  { num: 30, name: "Loosejaw", region: "Stellar Basin", zone: "Abyssal", exotic: false, sellPrice: 25.0, sellPriceRaw: "$25.00", time: "Day/Night", tool: "Rod", aberrations: ["Perished"], mission: null, spot: "B4 (Red glowing eyes)", source: "gameplay_tips" },
  { num: 31, name: "Snailfish", region: "Stellar Basin", zone: "Hadal", exotic: false, sellPrice: 40.0, sellPriceRaw: "$40.00", time: "Day/Night", tool: "Rod", aberrations: ["Calcified"], mission: null, spot: "E3 (Easy after finishing “Research Assistant”, D5)", source: "gameplay_tips" },
  { num: 32, name: "Coral Grouper", region: "Stellar Basin", zone: "Shallow", exotic: false, sellPrice: 40.0, sellPriceRaw: "$40.00", time: "Day", tool: "Rod", aberrations: ["Consumed"], mission: null, spot: "F3", source: "gameplay_tips" },
  { num: 33, name: "Glowing Octopus", region: "Stellar Basin", zone: "Shallow", exotic: false, sellPrice: 40.0, sellPriceRaw: "$40.00", time: "Night", tool: "Rod/Pot", aberrations: ["Medusa"], mission: null, spot: "E2", source: "gameplay_tips" },
  { num: 34, name: "Anglerfish", region: "Stellar Basin", zone: "Abyssal", exotic: false, sellPrice: 50.0, sellPriceRaw: "$50.00", time: "Day/Night", tool: "Rod", aberrations: ["Bursting"], mission: null, spot: "C3", source: "gameplay_tips" },
  { num: 35, name: "Barracuda", region: "Stellar Basin", zone: "Shallow", exotic: false, sellPrice: 35.0, sellPriceRaw: "$35.00", time: "Day", tool: "Rod", aberrations: ["Savage"], mission: null, spot: "E2", source: "gameplay_tips" },
  { num: 36, name: "Hammerhead Shark", region: "Stellar Basin", zone: "Oceanic", exotic: false, sellPrice: 175.0, sellPriceRaw: "$175.00", time: "Day/Night", tool: "Rod", aberrations: ["Gazing"], mission: null, spot: "D1", source: "gameplay_tips" },
  { num: 37, name: "Crown of Thorns", region: "Stellar Basin", zone: "0-5m", exotic: false, sellPrice: 10.0, sellPriceRaw: "$10.00", time: "Day/Night", tool: "Pot", aberrations: [], mission: null, spot: "E2", source: "gameplay_tips" },
  { num: 38, name: "Blue Crab", region: "Stellar Basin", zone: "0-5m", exotic: false, sellPrice: 15.0, sellPriceRaw: "$15.00", time: "Day/Night", tool: "Pot", aberrations: [], mission: "\"Figure in Gold\", K2 – 3. request", spot: "E2", source: "gameplay_tips" },
  { num: 39, name: "Spiny Lobster", region: "Stellar Basin", zone: "5-50m", exotic: false, sellPrice: 30.0, sellPriceRaw: "$30.00", time: "Day/Night", tool: "Pot", aberrations: [], mission: null, spot: "E2", source: "gameplay_tips" },
  { num: 40, name: "Grey Mullet", region: "Twisted Strand", zone: "Coastal", exotic: false, sellPrice: 14.0, sellPriceRaw: "$14.00", time: "Day/Night", tool: "Rod/Trawl", aberrations: ["Entwined"], mission: null, spot: "F12/F13", source: "gameplay_tips" },
  { num: 41, name: "Tarpon", region: "Twisted Strand", zone: "Shallow", exotic: false, sellPrice: 25.0, sellPriceRaw: "$25.00", time: "Day/Night", tool: "Rod/Trawl", aberrations: ["Blistered"], mission: "\"Figure in Purple\", E10 – Fish 1", spot: "E11/F11", source: "gameplay_tips" },
  { num: 42, name: "Sergeant Fish", region: "Twisted Strand", zone: "Mangrove", exotic: false, sellPrice: 30.0, sellPriceRaw: "$30.00", time: "Day", tool: "Rod/Trawl", aberrations: ["Vortex"], mission: null, spot: "F14/F15", source: "gameplay_tips" },
  { num: 43, name: "Gar", region: "Twisted Strand", zone: "Mangrove", exotic: false, sellPrice: 40.0, sellPriceRaw: "$40.00", time: "Day", tool: "Rod/Trawl", aberrations: ["Clawfin"], mission: null, spot: "F12/F13", source: "gameplay_tips" },
  { num: 44, name: "Longfin Eel", region: "Twisted Strand", zone: "Mangrove", exotic: false, sellPrice: 65.0, sellPriceRaw: "$65.00", time: "Night", tool: "Rod", aberrations: ["Twinned"], mission: null, spot: "F13 (Right outside of Airman)", source: "gameplay_tips" },
  { num: 45, name: "Catfish", region: "Twisted Strand", zone: "Mangrove", exotic: false, sellPrice: 70.0, sellPriceRaw: "$70.00", time: "Night", tool: "Rod/Trawl", aberrations: ["Nightwing"], mission: null, spot: "E13 (South of Airman)", source: "gameplay_tips" },
  { num: 46, name: "Horseshoe Crab", region: "Twisted Strand", zone: "0-10m", exotic: false, sellPrice: 12.5, sellPriceRaw: "$12.50", time: "Day/Night", tool: "Pot", aberrations: [], mission: "\"Figure in Purple\", E10 – Fish 2", spot: "G12 (Entrance West of Rickety Pontoon)", source: "gameplay_tips" },
  { num: 47, name: "Giant Mud Crab", region: "Twisted Strand", zone: "5-25m", exotic: false, sellPrice: 50.0, sellPriceRaw: "$50.00", time: "Day/Night", tool: "Pot", aberrations: [], mission: null, spot: "G12 (Entrance West of Rickety Pontoon)", source: "gameplay_tips" },
  { num: 48, name: "Armored Searobin", region: "Devil’s Spine", zone: "Shallow", exotic: false, sellPrice: 22.0, sellPriceRaw: "$22.00", time: "Day", tool: "Rod/Trawl", aberrations: ["Ossified"], mission: null, spot: "P12", source: "gameplay_tips" },
  { num: 49, name: "Cusk Eel", region: "Devil’s Spine", zone: "Volcanic", exotic: false, sellPrice: 30.0, sellPriceRaw: "$30.00", time: "Night", tool: "Rod/Trawl", aberrations: ["Infernal"], mission: "\"Figure in Red\", L14 – Fish 1", spot: "N14", source: "gameplay_tips" },
  { num: 50, name: "Snake Mackerel", region: "Devil’s Spine", zone: "Coastal", exotic: false, sellPrice: 22.0, sellPriceRaw: "$22.00", time: "Day/Night", tool: "Rod/Trawl", aberrations: ["Serpentine"], mission: "\"Figure in Blue\", M7 – Fish 3", spot: "P11/P12", source: "gameplay_tips" },
  { num: 51, name: "Pale Skate", region: "Devil’s Spine", zone: "Volcanic", exotic: false, sellPrice: 55.0, sellPriceRaw: "$55.00", time: "Day", tool: "Rod/Trawl", aberrations: ["Defaced"], mission: null, spot: "O12", source: "gameplay_tips" },
  { num: 52, name: "Ghost Shark", region: "Devil’s Spine", zone: "Abyssal", exotic: false, sellPrice: 50.0, sellPriceRaw: "$50.00", time: "Day/Night", tool: "Rod", aberrations: ["Rapt"], mission: null, spot: "Q13", source: "gameplay_tips" },
  { num: 53, name: "Frilled Shark", region: "Devil’s Spine", zone: "Volcanic", exotic: false, sellPrice: 125.0, sellPriceRaw: "$125.00", time: "Day/Night", tool: "Rod", aberrations: ["Twisted"], mission: "\"Figure in Red\", L14 – Fish 3", spot: "O12", source: "gameplay_tips" },
  { num: 54, name: "Volcano Snail", region: "Devil’s Spine", zone: "0-10m", exotic: false, sellPrice: 27.0, sellPriceRaw: "$27.00", time: "Day/Night", tool: "Pot", aberrations: [], mission: null, spot: "P12", source: "gameplay_tips" },
  { num: 55, name: "Squat Lobster", region: "Devil’s Spine", zone: "0-25m", exotic: false, sellPrice: 45.0, sellPriceRaw: "$45.00", time: "Day/Night", tool: "Pot", aberrations: [], mission: null, spot: "P12", source: "gameplay_tips" },
  { num: 56, name: "Spider Crab", region: "Devil’s Spine", zone: "0-infinity", exotic: false, sellPrice: 80.0, sellPriceRaw: "$80.00", time: "Day/Night", tool: "Pot", aberrations: [], mission: null, spot: "P12", source: "gameplay_tips" },
  { num: 57, name: "Anchovy", region: "Open Ocean", zone: "Oceanic", exotic: false, sellPrice: 6.5, sellPriceRaw: "$6.50", time: "Day/Night", tool: "Trawl", aberrations: ["Anchovy King"], mission: null, spot: "Use net while traveling between islands.", source: "gameplay_tips" },
  { num: 58, name: "Scarlet Prawn", region: "Open Ocean", zone: "Oceanic(0-infinity)", exotic: false, sellPrice: 7.0, sellPriceRaw: "$7.00", time: "Day/Night", tool: "Trawl/Pot", aberrations: [], mission: null, spot: "Use net while traveling between islands or put pot where you find other “Oceanic” fish", source: "gameplay_tips" },
  { num: 59, name: "Blackfin Tuna", region: "Open Ocean", zone: "Oceanic", exotic: false, sellPrice: 20.0, sellPriceRaw: "$20.00", time: "Day/Night", tool: "Rod/Trawl", aberrations: ["Razormouth"], mission: null, spot: "J5", source: "gameplay_tips" },
  { num: 60, name: "Viperfish", region: "Open Ocean", zone: "Abyssal", exotic: false, sellPrice: 24.0, sellPriceRaw: "$24.00", time: "Day/Night", tool: "Rod", aberrations: ["Decrepit", "Collapsed"], mission: null, spot: "K5", source: "gameplay_tips" },
  { num: 61, name: "Moonfish", region: "Open Ocean", zone: "Oceanic", exotic: false, sellPrice: 45.0, sellPriceRaw: "$45.00", time: "Night", tool: "Rod", aberrations: ["Skeletal"], mission: null, spot: "I4/J4", source: "gameplay_tips" },
  { num: 62, name: "Rattail", region: "Open Ocean", zone: "Hadal", exotic: false, sellPrice: 60.0, sellPriceRaw: "$60.00", time: "Day/Night", tool: "Rod", aberrations: ["Congealed"], mission: null, spot: "M9/N9", source: "gameplay_tips" },
  { num: 63, name: "Ocean Sunfish", region: "Open Ocean", zone: "Oceanic", exotic: false, sellPrice: 115.0, sellPriceRaw: "$115.00", time: "Day", tool: "Rod", aberrations: ["Charred"], mission: null, spot: "B7/C7", source: "gameplay_tips" },
  { num: 64, name: "Oarfish", region: "Gale Cliffs", zone: "Abyssal", exotic: true, sellPrice: 250.0, sellPriceRaw: "$250.00", time: "Day/Night", tool: "Rod", aberrations: [], mission: "\"Recording Rarities\", N5 (Dusty Pontoon)", spot: "P3, Behind waterfall", source: "gameplay_tips" },
  { num: 65, name: "Gulper Eel", region: "Stellar Basin", zone: "Hadal", exotic: true, sellPrice: 250.0, sellPriceRaw: "$250.00", time: "Day/Night", tool: "Rod", aberrations: [], mission: "\"Recording Rarities\", N5 (Dusty Pontoon)", spot: "F4, trench extending Northeast from the central pit", source: "gameplay_tips" },
  { num: 66, name: "Goliath Tigerfish", region: "Twisted Strand", zone: "Mangrove", exotic: true, sellPrice: 250.0, sellPriceRaw: "$250.00", time: "Day/Night", tool: "Rod", aberrations: [], mission: "\"Recording Rarities\", N5 (Dusty Pontoon)", spot: "F14, destroy tree with explosives", source: "gameplay_tips" },
  { num: 67, name: "Coelacanth", region: "Devil’s Spine", zone: "Abyssal", exotic: true, sellPrice: 250.0, sellPriceRaw: "$250.00", time: "Day/Night", tool: "Rod", aberrations: [], mission: "\"Recording Rarities\", N5 (Dusty Pontoon)", spot: "Q12-13, Blow up the rocks with explosives", source: "gameplay_tips" },
];

// ---- Aberrations: mutated fish, their own stats, and the base fish they mutate from ----
const ABERRATIONS = [
  { num: 68, name: "Grotesque Mackerel", region: "The Marrows", zone: "Coastal", sellPrice: 30.0, sellPriceRaw: "$30.00", time: "Day", tool: "Rod/Trawl", baseFish: "Blue Mackerel", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 69, name: "Lumpy Mackerel", region: "The Marrows", zone: "Coastal", sellPrice: 35.0, sellPriceRaw: "$35.00", time: "Day", tool: "Rod/Trawl", baseFish: "Blue Mackerel", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 70, name: "Many-Eyed Mackerel", region: "The Marrows", zone: "Coastal", sellPrice: 40.0, sellPriceRaw: "$40.00", time: "Day", tool: "Rod/Trawl", baseFish: "Blue Mackerel", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 71, name: "All-Seeing Cod", region: "The Marrows", zone: "Coastal", sellPrice: 50.0, sellPriceRaw: "$50.00", time: "Day", tool: "Rod/Trawl", baseFish: "Cod", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 72, name: "Fanged Cod", region: "The Marrows", zone: "Coastal", sellPrice: 60.0, sellPriceRaw: "$60.00", time: "Day", tool: "Rod/Trawl", baseFish: "Cod", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 73, name: "Three-Headed Cod", region: "The Marrows", zone: "Coastal", sellPrice: 70.0, sellPriceRaw: "$70.00", time: "Day", tool: "Rod/Trawl", baseFish: "Cod", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 74, name: "Brood Squid", region: "The Marrows", zone: "Coastal", sellPrice: 32.0, sellPriceRaw: "$32.00", time: "Night", tool: "Rod/Trawl", baseFish: "Arrow Squid", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 75, name: "Snag Squid", region: "The Marrows", zone: "Coastal", sellPrice: 38.0, sellPriceRaw: "$38.00", time: "Night", tool: "Rod/Trawl", baseFish: "Arrow Squid", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 76, name: "Barbed Eel", region: "The Marrows", zone: "Shallow", sellPrice: 50.0, sellPriceRaw: "$50.00", time: "Day/Night", tool: "Rod/Trawl", baseFish: "Grey Eel", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 77, name: "Host Eel", region: "The Marrows", zone: "Shallow", sellPrice: 60.0, sellPriceRaw: "$60.00", time: "Day/Night", tool: "Rod/Trawl", baseFish: "Grey Eel", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 78, name: "Cyclopean Flounder", region: "The Marrows", zone: "Shallow", sellPrice: 60.0, sellPriceRaw: "$60.00", time: "Day", tool: "Rod/Trawl", baseFish: "Gulf Flounder", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 79, name: "Riddled Flounder", region: "The Marrows", zone: "Shallow", sellPrice: 70.0, sellPriceRaw: "$70.00", time: "Day", tool: "Rod/Trawl", baseFish: "Gulf Flounder", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 80, name: "Tusked Grouper", region: "The Marrows", zone: "Shallow", sellPrice: 85.0, sellPriceRaw: "$85.00", time: "Night", tool: "Rod/Trawl", baseFish: "Black Grouper", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 81, name: "Voltaic Grouper", region: "The Marrows", zone: "Shallow", sellPrice: 100.0, sellPriceRaw: "$100.00", time: "Night", tool: "Rod/Trawl", baseFish: "Black Grouper", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 82, name: "Shard ray", region: "The Marrows", zone: "Shallow", sellPrice: 150.0, sellPriceRaw: "$150.00", time: "Day/Night", tool: "Rod", baseFish: "Stingray", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 83, name: "Sallow Sailfish", region: "The Marrows", zone: "Oceanic", sellPrice: 350.0, sellPriceRaw: "$350.00", time: "Day", tool: "Rod/Trawl", baseFish: "Sailfish", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 84, name: "Bloodskin Shark", region: "The Marrows", zone: "Oceanic", sellPrice: 220.0, sellPriceRaw: "$220.00", time: "Day", tool: "Rod/Trawl", baseFish: "Bronze Whaler", mission: null, spot: null, note: "source text read \"Bronze Whaler Bloodskin\"; corrected to base fish \"Bronze Whaler\" (#9) using the source's own base-fish aberration list, which names \"Bloodskin\" as Bronze Whaler's aberration", source: "gameplay_tips" },
  { num: 85, name: "Cleft-mouth Shark", region: "The Marrows", zone: "Oceanic", sellPrice: 275.0, sellPriceRaw: "$275.00", time: "Night", tool: "Rod/Trawl", baseFish: "Blacktip Reef Shark", mission: null, spot: null, note: "source text read \"Blacktip Reef Shark Cleft-mouth\"; corrected to base fish \"Blacktip Reef Shark\" (#10) using the source's own base-fish aberration list, which names \"Cleft-mouth\" as Blacktip Reef Shark's aberration", source: "gameplay_tips" },
  { num: 86, name: "Gnashing Perch", region: "Gale Cliffs", zone: "Coastal", sellPrice: 17.0, sellPriceRaw: "$17.00", time: "Day", tool: "Rod/Trawl", baseFish: "Oceanic Perch", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 87, name: "Flayed Mackerel", region: "Gale Cliffs", zone: "Coastal", sellPrice: 35.0, sellPriceRaw: "$35.00", time: "Day", tool: "Rod/Trawl", baseFish: "Tiger Mackerel", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 88, name: "Bearded Mackerel", region: "Gale Cliffs", zone: "Coastal", sellPrice: 45.0, sellPriceRaw: "$45.00", time: "Day", tool: "Rod/Trawl", baseFish: "Tiger Mackerel", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 89, name: "Scouring Bass", region: "Gale Cliffs", zone: "Coastal", sellPrice: 35.0, sellPriceRaw: "$35.00", time: "Night", tool: "Rod/Trawl/Pot", baseFish: "Black Sea Bass", mission: null, spot: null, note: "source text read \"Black Sea\" (truncated); corrected to base fish \"Black Sea Bass\" (#15), the only base fish matching that name", source: "gameplay_tips" },
  { num: 90, name: "Gelatinous Stonefish", region: "Gale Cliffs", zone: "Shallow", sellPrice: 45.0, sellPriceRaw: "$45.00", time: "Day/Night", tool: "Rod/Trawl", baseFish: "Stonefish", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 91, name: "Decaying Salmon", region: "Gale Cliffs", zone: "Coastal", sellPrice: 50.0, sellPriceRaw: "$50.00", time: "Day/Night", tool: "Rod/Trawl", baseFish: "Blackmouth Salmon", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 92, name: "Sprouting Eel", region: "Gale Cliffs", zone: "Shallow", sellPrice: 115.0, sellPriceRaw: "$115.00", time: "Night", tool: "Rod", baseFish: "Conger Eel", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 93, name: "Whithered Ray", region: "Gale Cliffs", zone: "Oceanic", sellPrice: 120.0, sellPriceRaw: "$120.00", time: "Night", tool: "Rod/Trawl", baseFish: "Devil Ray", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 94, name: "Translucent Sturgeon", region: "Gale Cliffs", zone: "Oceanic", sellPrice: 95.0, sellPriceRaw: "$95.00", time: "Day", tool: "Rod/Trawl", baseFish: "Sturgeon", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 95, name: "Shattered Wreckfish", region: "Gale Cliffs", zone: "Shallow", sellPrice: 120.0, sellPriceRaw: "$120.00", time: "Day", tool: "Rod", baseFish: "Wreckfish", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 96, name: "Bony Wreckfish", region: "Gale Cliffs", zone: "Shallow", sellPrice: 140.0, sellPriceRaw: "$140.00", time: "Day", tool: "Rod", baseFish: "Wreckfish", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 97, name: "Parhelion Jellyfish", region: "Stellar Basin", zone: "Coastal", sellPrice: 25.0, sellPriceRaw: "$25.00", time: "Night", tool: "Trawl", baseFish: "Aurora Jellyfish", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 98, name: "Cursed Fangtooth", region: "Stellar Basin", zone: "Abyssal", sellPrice: 24.0, sellPriceRaw: "$24.00", time: "Day/Night", tool: "Rod", baseFish: "Fangtooth", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 99, name: "Voideye", region: "Stellar Basin", zone: "Abyssal", sellPrice: 40.0, sellPriceRaw: "$40.00", time: "Day/Night", tool: "Rod", baseFish: "Barreleye", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 100, name: "Radiant Squid", region: "Stellar Basin", zone: "Coastal", sellPrice: 50.0, sellPriceRaw: "$50.00", time: "Night", tool: "Rod/Trawl", baseFish: "Firefly Squid", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 101, name: "Blood Snapper", region: "Stellar Basin", zone: "Coastal", sellPrice: 30.0, sellPriceRaw: "$30.00", time: "Day", tool: "Rod/Trawl", baseFish: "Red Snapper", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 102, name: "Ruptured Vessel", region: "Stellar Basin", zone: "Hadal", sellPrice: 60.0, sellPriceRaw: "$60.00", time: "Day/Night", tool: "Rod", baseFish: "Giant Amphipod", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 103, name: "Perished Loosejaw", region: "Stellar Basin", zone: "Abyssal", sellPrice: 65.0, sellPriceRaw: "$65.00", time: "Day/Night", tool: "Rod", baseFish: "Loosejaw", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 104, name: "Calcified Snailfish", region: "Stellar Basin", zone: "Hadal", sellPrice: 85.0, sellPriceRaw: "$85.00", time: "Day/Night", tool: "Rod", baseFish: "Snailfish", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 105, name: "Consumed Grouper", region: "Stellar Basin", zone: "Shallow", sellPrice: 100.0, sellPriceRaw: "$100.00", time: "Day", tool: "Rod", baseFish: "Coral Grouper", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 106, name: "Medusa Octopus", region: "Stellar Basin", zone: "Shallow", sellPrice: 95.0, sellPriceRaw: "$95.00", time: "Night", tool: "Rod/Pot", baseFish: "Glowing Octopus", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 107, name: "Bursting Anglerfish", region: "Stellar Basin", zone: "Abyssal", sellPrice: 110.0, sellPriceRaw: "$110.00", time: "Day/Night", tool: "Rod", baseFish: "Anglerfish", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 108, name: "Savage Barracuda", region: "Stellar Basin", zone: "Shallow", sellPrice: 80.0, sellPriceRaw: "$80.00", time: "Day", tool: "Rod", baseFish: "Barracuda", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 109, name: "Gazing Shark", region: "Stellar Basin", zone: "Oceanic", sellPrice: 425.0, sellPriceRaw: "$425.00", time: "Day/Night", tool: "Rod", baseFish: "Hammerhead Shark", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 110, name: "Entwined Mullet", region: "Twisted Strand", zone: "Coastal", sellPrice: 30.0, sellPriceRaw: "$30.00", time: "Day/Night", tool: "Rod/Trawl", baseFish: "Grey Mullet", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 111, name: "Blistered Tarpon", region: "Twisted Strand", zone: "Shallow", sellPrice: 60.0, sellPriceRaw: "$60.00", time: "Day/Night", tool: "Rod/Trawl", baseFish: "Tarpon", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 112, name: "Vortex Interloper", region: "Twisted Strand", zone: "Mangrove", sellPrice: 70.0, sellPriceRaw: "$70.00", time: "Day", tool: "Rod/Trawl", baseFish: "Sergeant Fish", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 113, name: "Clawfin Gar", region: "Twisted Strand", zone: "Mangrove", sellPrice: 100.0, sellPriceRaw: "$100.00", time: "Day", tool: "Rod/Trawl", baseFish: "Gar", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 114, name: "Twinned Eels", region: "Twisted Strand", zone: "Mangrove", sellPrice: 155.0, sellPriceRaw: "$155.00", time: "Night", tool: "Rod", baseFish: "Longfin Eel", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 115, name: "Nightwing Catfish", region: "Twisted Strand", zone: "Mangrove", sellPrice: 180.0, sellPriceRaw: "$180.00", time: "Night", tool: "Rod/Trawl", baseFish: "Catfish", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 116, name: "Ossified Searobin", region: "Devil’s Spine", zone: "Shallow", sellPrice: 55.0, sellPriceRaw: "$55.00", time: "Day", tool: "Rod/Trawl", baseFish: "Armored Searobin", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 117, name: "Infernal Eel", region: "Devil’s Spine", zone: "Volcanic", sellPrice: 80.0, sellPriceRaw: "$80.00", time: "Night", tool: "Rod/Trawl", baseFish: "Cusk Eel", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 118, name: "Serpentine Mackerel", region: "Devil’s Spine", zone: "Coastal", sellPrice: 50.0, sellPriceRaw: "$50.00", time: "Day/Night", tool: "Rod/Trawl", baseFish: "Snake Mackerel", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 119, name: "Defaced Skate", region: "Devil’s Spine", zone: "Volcanic", sellPrice: 135.0, sellPriceRaw: "$135.00", time: "Day", tool: "Rod/Trawl", baseFish: "Pale Skate", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 120, name: "Rapt Shark", region: "Devil’s Spine", zone: "Abyssal", sellPrice: 120.0, sellPriceRaw: "$120.00", time: "Day/Night", tool: "Rod", baseFish: "Ghost Shark", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 121, name: "Twisted Shark", region: "Devil’s Spine", zone: "Volcanic", sellPrice: 300.0, sellPriceRaw: "$300.00", time: "Day/Night", tool: "Rod", baseFish: "Frilled Shark", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 122, name: "Anchovy King", region: "Open Ocean", zone: "Oceanic", sellPrice: 18.0, sellPriceRaw: "$18.00", time: "Day/Night", tool: "Trawl", baseFish: "Anchovy", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 123, name: "Razormouth Tuna", region: "Open Ocean", zone: "Oceanic", sellPrice: 50.0, sellPriceRaw: "$50.00", time: "Day/Night", tool: "Rod/Trawl", baseFish: "Blackfin Tuna", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 124, name: "Decrepit Viperfish", region: "Open Ocean", zone: "Abyssal", sellPrice: 60.0, sellPriceRaw: "$60.00", time: "Day/Night", tool: "Rod", baseFish: "Viperfish", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 125, name: "Collapsed Viperfish", region: "Open Ocean", zone: "Abyssal", sellPrice: 30.0, sellPriceRaw: "$30.00", time: "Day/Night", tool: "Rod", baseFish: "Viperfish", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 126, name: "Skeletal Moonfish", region: "Open Ocean", zone: "Oceanic", sellPrice: 110.0, sellPriceRaw: "$110.00", time: "Night", tool: "Rod", baseFish: "Moonfish", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 127, name: "Congealed Rattail", region: "Open Ocean", zone: "Hadal", sellPrice: 130.0, sellPriceRaw: "$130.00", time: "Day/Night", tool: "Rod", baseFish: "Rattail", mission: null, spot: null, note: null, source: "gameplay_tips" },
  { num: 128, name: "Ocean Sunfish", region: "Open Ocean", zone: "Oceanic", sellPrice: 275.0, sellPriceRaw: "$275", time: "Day", tool: "Rod", baseFish: "Charred", mission: null, spot: null, note: "source inconsistency, shown as published: entry #128 is named \"Ocean Sunfish\" (duplicating base fish #63) and lists \"Aberration of: Charred\" -- but base fish #63 Ocean Sunfish itself lists \"Charred\" as its own aberration. The source appears to have swapped the aberration name and base-fish name for this entry. Not corrected because which name is the typo cannot be verified from this source alone.", source: "gameplay_tips" },
];

function allRegions(list) {
  return Array.from(new Set(list.map(r => r.region))).sort();
}

function allTimes(list) {
  return Array.from(new Set(list.map(r => r.time))).sort();
}

function allTools(list) {
  return Array.from(new Set(list.map(r => r.tool))).sort();
}

function findByName(list, name) {
  return list.find(r => r.name.toLowerCase() === name.toLowerCase());
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    SOURCES, FISH, ABERRATIONS,
    allRegions, allTimes, allTools, findByName,
  };
}
