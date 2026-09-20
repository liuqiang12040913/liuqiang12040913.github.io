# Academic Portfolio (Next.js + Tailwind) — GitHub Pages

## Local Dev

```bash
npm install
npm run dev
```

## Deploy

1. Push to GitHub.
2. In GitHub repo settings:
   - Settings → Pages
   - Source: GitHub Actions
3. Push to `main`.

## Publications

Publications flow from BibTeX to the page:

```
data/publications.bib  ->  npm run pubs  ->  data/publications.generated.ts  ->  /publications
```

`npm run build` runs `npm run pubs` automatically, so the generated file is always
in sync when deploying. Run it by hand after editing the `.bib` to see changes in
`npm run dev`.

The page groups papers by research direction (not by venue type) and reads three
custom BibTeX fields per entry:

| Field        | Example                                   | Notes                                           |
|--------------|-------------------------------------------|-------------------------------------------------|
| `area`       | `area={wireless}`                         | `wireless`, `embodied`, or `cps` (required)     |
| `keywords`   | `keywords={O-RAN; Network Automation; Interpretable AI}` | 2-3 short keywords, `;`-separated |
| `award`      | `award={Best Paper Award}`                | Optional; renders a badge next to the venue tag |
| `shortvenue` | `shortvenue={TVT}`                        | Optional override for the venue acronym         |

Venue acronyms are otherwise taken from the text in parentheses in `booktitle`
(e.g. `(INFOCOM)`), or from the journal mapping in
`scripts/generate_publications.mjs`. Within a research direction, papers are
sorted newest first; papers from the same year keep their order in the `.bib`.
The direction titles and one-sentence descriptions live in the `AREAS` array at
the top of the same script.

## Notes

- Put static files in `/public`.
- If deploying to a PROJECT repo (not `username.github.io`), set `basePath` and `assetPrefix` in `next.config.js`.
