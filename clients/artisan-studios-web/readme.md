# Artisan Studios Web

## MDX strategy (App Router-compatible static builds)

This app uses a **single** MDX integration path via `@next/mdx` in `next.config.js`.

### Configuration contract

- `@next/mdx` is the only MDX compiler integration.
- `pageExtensions` is explicitly set to `js`, `jsx`, `md`, and `mdx`.
- MDX Rust compiler support (`experimental.mdxRs`) is enabled for current Next 13 builds.
- Remark/rehype plugin arrays are intentionally explicit and currently empty.
  - Re-enable plugins only when a concrete authoring need is introduced and the plugin is confirmed compatible with `@next/mdx` + MDX v2 in this repo.

## Content source strategy

Author MDX as content-first documents under `content/`, then expose them through route files in `pages/` (or `app/` if/when App Router routes are added).

### Current mapping for screening criteria

Legacy route-backed files currently live in `pages/screening-criteria/**` and should be mirrored/migrated to:

- `pages/screening-criteria/current-screening-criteria.mdx` -> `content/screening-criteria/current-screening-criteria.mdx`
- `pages/screening-criteria/historical-screening-criteria/criteria-effective-20220129.mdx` -> `content/screening-criteria/historical/criteria-effective-20220129.mdx`
- `pages/screening-criteria/historical-screening-criteria/criteria-effective-20220131.mdx` -> `content/screening-criteria/historical/criteria-effective-20220131.mdx`
- `pages/screening-criteria/historical-screening-criteria/criteria-effective-20220202.mdx` -> `content/screening-criteria/historical/criteria-effective-20220202.mdx`

## Authoring workflow

1. Add/update MDX in `content/screening-criteria/**`.
2. Keep route paths stable by importing or re-exporting that content from `pages/` route files.
3. Run local build checks:
   - `npm run build`
   - `npm run static-export`
4. If the build fails due to syntax/extensions, verify the file extension is `.md` or `.mdx` and included in `pageExtensions`.

## Notes

- The `content` webpack alias points to `clients/artisan-studios-web/content` for stable imports.
- For App Router adoption, prefer route handlers/components under `app/**` that render MDX from `content/**` while keeping the same MDX compilation strategy.
