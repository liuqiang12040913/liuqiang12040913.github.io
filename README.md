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

## Notes

- Put static files in `/public`.
- If deploying to a PROJECT repo (not `username.github.io`), set `basePath` and `assetPrefix` in `next.config.js`.
