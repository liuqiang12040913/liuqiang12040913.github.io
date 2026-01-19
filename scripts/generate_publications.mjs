// scripts/generate-publications.mjs
import fs from "node:fs";
import path from "node:path";
import bibtexParse from "bibtex-parse-js";

/*
  Output file: data/publications.generated.ts

  Exports:
    export type PublicationItem = {
      title: string;
      authors: string;
      venue: string;   // FULL journal/conference name (no abbr)
      year: number;
      isBestPaper?: boolean;
    };

    export type PublicationSection = {
      sectionTitle: "Conference Papers" | "Journal Articles";
      items: PublicationItem[];
    };

    export const publicationGroups: PublicationSection[] = [...]
*/

const ROOT = process.cwd();
const BIB_PATH = path.join(ROOT, "data", "publications.bib");
const OUT_PATH = path.join(ROOT, "data", "publications.generated.ts");

function clean(s = "") {
  return String(s)
    .replace(/^\s+|\s+$/g, "")
    .replace(/[{}]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function yearFromTags(tags = {}) {
  // prefer tags.year, fallback to looking inside other fields
  const y = (tags.year || "").toString().trim();
  const m = y.match(/(\d{4})/);
  if (m) return Number(m[1]);

  // try to find last 4-digit year in title/notes/other
  const fields = ["booktitle", "journal", "note", "title", "howpublished"];
  for (const f of fields) {
    if (!tags[f]) continue;
    const mm = String(tags[f]).match(/(\d{4})/g);
    if (mm && mm.length) return Number(mm[mm.length - 1]);
  }
  return 0;
}

function authorsToString(authorRaw = "") {
  const s = clean(authorRaw);
  // BibTeX authors use "and" between authors. Preserve "Last, First" formatting.
  return s;
}

function extractTitle(tags = {}) {
  return clean(tags.title || "");
}

function extractAuthors(tags = {}) {
  const raw = tags.author || tags.editor || "";
  return authorsToString(raw);
}

function extractVenue(tags = {}, entryType = "") {
  // FULL venue name only (no abbreviation logic here)
  if (tags.journal) return clean(tags.journal);
  if (tags.booktitle) return clean(tags.booktitle);
  if (tags.publisher) return clean(tags.publisher);

  // fallback (rare)
  return clean(entryType);
}

function extractYear(tags = {}) {
  return yearFromTags(tags);
}

function classifySection(tags = {}, entryType = "") {
  const t = String(entryType || "").toLowerCase();
  const hasJournal = Boolean((tags.journal || "").toString().trim());

  // BibTeX standard: article -> journal
  if (t === "article" || hasJournal) return "Journal Articles";

  // proceedings-ish -> conference
  return "Conference Papers";
}

function isBestPaper(tags = {}) {
  const note = (tags.note || "").toString().toLowerCase();
  return (
    note.includes("best paper") ||
    note.includes("best paper award") ||
    note.includes("bestpaper")
  );
}

function generate(bibText) {
  const entries = bibtexParse.toJSON(bibText);
  const converted = [];

  for (const e of entries) {
    const tags = e.entryTags || {};
    const entryType = (e.entryType || "").toString().toLowerCase();

    const title = extractTitle(tags);
    if (!title) continue;

    const authors = extractAuthors(tags);
    const venue = extractVenue(tags, entryType);
    const year = extractYear(tags);
    const sectionTitle = classifySection(tags, entryType);
    const best = isBestPaper(tags);

    converted.push({
      sectionTitle,
      item: {
        title,
        authors,
        venue,
        year,
        ...(best ? { isBestPaper: true } : {}),
      },
    });
  }

  // Group by sectionTitle
  const groupsMap = new Map();
  for (const { sectionTitle, item } of converted) {
    if (!groupsMap.has(sectionTitle)) groupsMap.set(sectionTitle, []);
    groupsMap.get(sectionTitle).push(item);
  }

  // Convert to array and sort items by year desc, then title
  const groups = [];
  for (const [sectionTitle, items] of groupsMap.entries()) {
    items.sort(
      (a, b) =>
        (b.year || 0) - (a.year || 0) || a.title.localeCompare(b.title)
    );
    groups.push({ sectionTitle, items });
  }

  // Sort groups in a preferred order
  const preferred = ["Conference Papers", "Journal Articles"];
  groups.sort((a, b) => {
    const ia = preferred.indexOf(a.sectionTitle);
    const ib = preferred.indexOf(b.sectionTitle);
    if (ia === -1 && ib === -1) return a.sectionTitle.localeCompare(b.sectionTitle);
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });

  return groups;
}

function emit(groups) {
  return `export type PublicationItem = {
  title: string;
  authors: string;
  venue: string;   // FULL journal/conference name (no abbr)
  year: number;
  isBestPaper?: boolean;
};

export type PublicationSection = {
  sectionTitle: string;
  items: PublicationItem[];
};

export const publicationGroups: PublicationSection[] = ${JSON.stringify(groups, null, 2)};
`;
}

// --- main
(function main() {
  try {
    if (!fs.existsSync(BIB_PATH)) {
      console.error("Error: data/publications.bib not found. Put your .bib at:", BIB_PATH);
      process.exit(2);
    }

    const bibText = fs.readFileSync(BIB_PATH, "utf8");
    const groups = generate(bibText);
    const out = emit(groups);

    fs.writeFileSync(OUT_PATH, out, "utf8");
    console.log(`Wrote ${OUT_PATH} (${groups.length} groups).`);
  } catch (err) {
    console.error("ERROR running publication generator:", err);
    process.exit(1);
  }
})();
