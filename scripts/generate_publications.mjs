// scripts/generate_publications.mjs
//
// Reads  data/publications.bib
// Writes data/publications.generated.ts
//
// Publications are grouped by RESEARCH DIRECTION (custom BibTeX field `area`)
// rather than by publication type. Each entry also carries a compact venue tag
// (e.g. "INFOCOM '26"), a list of research keywords (custom field `keywords`),
// and an optional award badge (custom field `award`, or a `note` mentioning
// "best paper").
//
// Custom BibTeX fields:
//   area       = wireless | embodied | cps         (required)
//   keywords   = {Kw One; Kw Two; Kw Three}        (2-3 recommended, ";"-separated)
//   award      = {Best Paper Award}                 (optional)
//   shortvenue = {TVT}                               (optional acronym override)

import fs from "node:fs";
import path from "node:path";
import bibtexParse from "bibtex-parse-js";

const ROOT = process.cwd();
const BIB_PATH = path.join(ROOT, "data", "publications.bib");
const OUT_PATH = path.join(ROOT, "data", "publications.generated.ts");

// ---------------------------------------------------------------------------
// Research directions (order here = order on the page)
// ---------------------------------------------------------------------------
const AREAS = [
  {
    id: "wireless",
    title: "Wireless Networks",
    description:
      "Trustworthy AI-based network control for open and programmable mobile networks, including O-RAN automation, network slicing, continual adaptation under network dynamics, and end-to-end resource orchestration.",
  },
  {
    id: "embodied",
    title: "Embodied Intelligence",
    description:
      "Connecting autonomous agents so they perceive and compute together, through cooperative perception, edge intelligence, collaborative vehicle-edge computing, and distributed inference.",
  },
  {
    id: "cps",
    title: "Cyber-Physical Systems",
    description:
      "Closing the loop between the physical and digital worlds with wireless digital twins, physical-AI integration, and predictive decision-making grounded in real-world measurements.",
  },
];

// Accept a few spellings for the `area` field.
const AREA_ALIASES = {
  wireless: "wireless",
  "wireless networks": "wireless",
  "next-generation wireless networks": "wireless",
  "next generation wireless networks": "wireless",
  embodied: "embodied",
  "embodied intelligence": "embodied",
  "collective embodied intelligence": "embodied",
  cps: "cps",
  "cyber-physical systems": "cps",
  "cyber physical systems": "cps",
};

// Journal acronyms (regex on the full journal name -> tag text).
// Conferences usually carry their acronym in parentheses and need no mapping.
const JOURNAL_ACRONYMS = [
  [/transactions on vehicular technology/i, "TVT"],
  [/transactions on intelligent vehicles/i, "TIV"],
  [/transactions on machine learning in communications and networking/i, "TMLCN"],
  [/open journal of the communications society/i, "OJ-COMS"],
  [/network magazine|^ieee network$/i, "IEEE Network"],
  [/vehicular technology magazine/i, "IEEE VT Magazine"],
  [/transactions on mobile computing/i, "TMC"],
  [/transactions on networking/i, "ToN"],
  [/journal on selected areas in communications/i, "JSAC"],
  [/transactions on wireless communications/i, "TWC"],
  [/transactions on communications/i, "TCOM"],
  [/communications magazine/i, "IEEE ComMag"],
  [/wireless communications magazine|^ieee wireless communications$/i, "IEEE WCM"],
  [/internet of things journal/i, "IoT-J"],
  [/transactions on network and service management/i, "TNSM"],
  [/transactions on parallel and distributed systems/i, "TPDS"],
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function clean(s = "") {
  return String(s)
    .replace(/[{}]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractYear(tags = {}) {
  const y = clean(tags.year || "");
  const m = y.match(/(\d{4})/);
  if (m) return Number(m[1]);
  for (const f of ["booktitle", "journal", "note", "howpublished"]) {
    if (!tags[f]) continue;
    const mm = clean(tags[f]).match(/(\d{4})/g);
    if (mm && mm.length) return Number(mm[mm.length - 1]);
  }
  return 0;
}

// "Last, First and Last, First" -> ["First Last", "First Last"]
function extractAuthors(tags = {}) {
  const raw = clean(tags.author || tags.editor || "");
  if (!raw) return [];
  return raw
    .split(/\s+and\s+/i)
    .map((a) => a.trim())
    .filter(Boolean)
    .map((a) => {
      const idx = a.indexOf(",");
      if (idx === -1) return a; // already "First Last"
      const last = a.slice(0, idx).trim();
      const first = a.slice(idx + 1).trim();
      return `${first} ${last}`.replace(/\s+/g, " ").trim();
    });
}

function extractVenue(tags = {}, entryType = "") {
  if (tags.journal) return clean(tags.journal);
  if (tags.booktitle) return clean(tags.booktitle);
  if (tags.publisher) return clean(tags.publisher);
  return clean(entryType);
}

function classifyKind(tags = {}, entryType = "") {
  const hasJournal = Boolean(clean(tags.journal || ""));
  return entryType === "article" || hasJournal ? "journal" : "conference";
}

function venueAcronym(venue, tags = {}, kind, key) {
  if (tags.shortvenue) return clean(tags.shortvenue);

  // 1) Text in the last pair of parentheses, e.g. "(INFOCOM)", "(INFOCOM WKSHPS)"
  const paren = venue.match(/\(([^()]+)\)\s*$/);
  if (paren) return paren[1].trim();

  // 2) Known journal names
  if (kind === "journal") {
    for (const [re, acr] of JOURNAL_ACRONYMS) {
      if (re.test(venue)) return acr;
    }
  }

  // 3) Fallback: initials of significant words
  const stop = new Set([
    "ieee", "acm", "the", "of", "on", "and", "in", "for", "proceedings",
    "international", "conference", "symposium", "workshop", "workshops",
    "journal", "transactions", "annual",
  ]);
  const initials = venue
    .replace(/\d+(st|nd|rd|th)?/g, " ")
    .split(/[\s/,-]+/)
    .filter((w) => w && !stop.has(w.toLowerCase()))
    .map((w) => w[0].toUpperCase())
    .join("");
  console.warn(
    `[pubs] ${key}: no acronym rule for venue "${venue}" -> using "${initials}". ` +
      `Add a shortvenue={...} field or extend JOURNAL_ACRONYMS.`
  );
  return initials || venue;
}

function extractKeywords(tags = {}) {
  const raw = clean(tags.keywords || "");
  if (!raw) return [];
  const sep = raw.includes(";") ? ";" : ",";
  return raw
    .split(sep)
    .map((k) => k.trim())
    .filter(Boolean);
}

function extractAward(tags = {}) {
  const award = clean(tags.award || "");
  if (award) return award;
  const note = clean(tags.note || "").toLowerCase();
  if (note.includes("best paper")) return "Best Paper Award";
  return undefined;
}

function resolveArea(tags = {}, key) {
  const raw = clean(tags.area || "").toLowerCase();
  if (!raw) {
    console.warn(`[pubs] ${key}: missing area={...}; placed under "Other".`);
    return "other";
  }
  const id = AREA_ALIASES[raw];
  if (!id) {
    console.warn(`[pubs] ${key}: unknown area "${raw}"; placed under "Other".`);
    return "other";
  }
  return id;
}

// ---------------------------------------------------------------------------
// Generate
// ---------------------------------------------------------------------------
function generate(bibText) {
  const entries = bibtexParse.toJSON(bibText);
  const items = [];

  for (const e of entries) {
    const tags = e.entryTags || {};
    const entryType = String(e.entryType || "").toLowerCase();
    const key = e.citationKey || "(no key)";

    const title = clean(tags.title || "");
    if (!title) continue;

    const year = extractYear(tags);
    const venue = extractVenue(tags, entryType);
    const kind = classifyKind(tags, entryType);
    const venueShort = venueAcronym(venue, tags, kind, key);
    const yy = year ? String(year).slice(-2) : "";
    const venueTag = yy ? `${venueShort} '${yy}` : venueShort;
    const keywords = extractKeywords(tags);
    if (keywords.length === 0) {
      console.warn(`[pubs] ${key}: no keywords={...}.`);
    }
    const award = extractAward(tags);
    const areaId = resolveArea(tags, key);

    items.push({
      areaId,
      item: {
        id: key,
        title,
        authors: extractAuthors(tags),
        venue,
        venueShort,
        venueTag,
        year,
        kind,
        keywords,
        ...(award ? { award } : {}),
      },
    });
  }

  // Newest first; entries from the same year keep their order in the .bib
  // (Array.prototype.sort is stable).
  const byYearDesc = (a, b) => (b.year || 0) - (a.year || 0);

  const areas = [];
  for (const def of AREAS) {
    const list = items.filter((x) => x.areaId === def.id).map((x) => x.item);
    if (list.length === 0) continue;
    areas.push({ ...def, items: list.sort(byYearDesc) });
  }
  const other = items.filter((x) => x.areaId === "other").map((x) => x.item);
  if (other.length) {
    areas.push({
      id: "other",
      title: "Other Publications",
      description: "",
      items: other.sort(byYearDesc),
    });
  }

  const all = items.map((x) => x.item).sort(byYearDesc);
  return { areas, all };
}

function emit({ areas, all }) {
  return `// AUTO-GENERATED by scripts/generate_publications.mjs from data/publications.bib
// Do not edit by hand. Run \`npm run pubs\` after editing the .bib file.

export type PublicationKind = "conference" | "journal";

export type Publication = {
  id: string;            // BibTeX citation key
  title: string;
  authors: string[];     // "First Last" order, as listed on the paper
  venue: string;         // full venue name
  venueShort: string;    // acronym, e.g. "INFOCOM", "TVT"
  venueTag: string;      // acronym + 2-digit year, e.g. "INFOCOM '26"
  year: number;
  kind: PublicationKind;
  keywords: string[];    // 2-3 research keywords
  award?: string;        // e.g. "Best Paper Award"
};

export type ResearchArea = {
  id: string;            // "wireless" | "embodied" | "cps" | "other"
  title: string;
  description: string;   // one-sentence summary of the research direction
  items: Publication[];  // newest first
};

export const researchAreas: ResearchArea[] = ${JSON.stringify(areas, null, 2)};

export const allPublications: Publication[] = ${JSON.stringify(all, null, 2)};
`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
(function main() {
  try {
    if (!fs.existsSync(BIB_PATH)) {
      console.error("Error: data/publications.bib not found at:", BIB_PATH);
      process.exit(2);
    }
    const bibText = fs.readFileSync(BIB_PATH, "utf8");
    const result = generate(bibText);
    fs.writeFileSync(OUT_PATH, emit(result), "utf8");
    const summary = result.areas
      .map((a) => `${a.title}: ${a.items.length}`)
      .join(", ");
    console.log(
      `Wrote ${path.relative(ROOT, OUT_PATH)} (${result.all.length} publications; ${summary}).`
    );
  } catch (err) {
    console.error("ERROR running publication generator:", err);
    process.exit(1);
  }
})();
