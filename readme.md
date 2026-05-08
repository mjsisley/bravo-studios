## Updating Screening Criteria (Source of Truth)

To update the criteria shown on the live site, edit files in `clients/artisan-studios-web/pages/screening-criteria/`:

1. Update the current criteria in `clients/artisan-studios-web/pages/screening-criteria/current-screening-criteria.mdx`.
2. Create a historical snapshot in `clients/artisan-studios-web/pages/screening-criteria/historical-screening-criteria/` using `criteria-effective-YYYYMMDD.mdx`.
3. Add the new historical entry to `clients/artisan-studios-web/pages/screening-criteria/historical-screening-criteria/index.js` so it appears on the historical criteria page.

> Note: The `pages/screening-criteria` directory is the source of truth for published criteria content.

