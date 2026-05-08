# Artisan Studios web client

## Contributor note: intentionally untracked artifacts

To keep the repository focused on canonical source and configuration, do **not** commit generated artifacts from local build/export runs.

Intentionally untracked artifacts include:

- Next.js build and export outputs: `.next/`, `out/`
- Build caches and bundle artifacts: `.cache/`, `webpack/`
- Local logs and crash output: `*.log`, `logfile`, `yarn-error.log*`
- Generic build/test outputs: `coverage/`, `dist/`, `build/`

Commit only source content (pages, MDX/content, utilities) and project configuration.
