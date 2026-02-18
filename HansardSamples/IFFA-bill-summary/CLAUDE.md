# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an analysis workspace within the **fairplay** monorepo, focused on comparing the NZ **Infrastructure Funding and Financing Amendment Bill (2025)** against the **Infrastructure Funding and Financing Act 2020**. It is part of a broader project exploring NZ parliamentary and legislative data.

## Repository Structure (monorepo at `/Users/chrisbc/DEV/fairplay`)

- `feeds/nz_legislation_api/` — Python client for the NZ Legislation API (`api.legislation.govt.nz`)
- `HansardSamples/` — Legislative document samples and AI-assisted analyses
  - `IFFA-bill-summary/` — **This directory**: IFFA bill-vs-act comparison
  - `Analysis/`, `MD/`, `PDF/` — Other legislative analyses (e.g. BSA Disestablishment)
- `website-demo/` — React+Vite+MUI prototype website (TypeScript)
- `JiveSessions/` — Design/concept session transcripts
- `opencode-sessions/`, `claude-sessions/` — AI coding session logs

## NZ Legislation API Client

Located at `feeds/nz_legislation_api/`. Uses `uv` for dependency management.

```bash
# Setup (from feeds/nz_legislation_api/)
uv sync

# Run CLI to search and download legislation
uv run python scripts/cli.py --search-term "infrastructure funding" --download --types pdf,xml --download-folder downloads

# Dry run to preview actions
uv run python scripts/cli.py --search-term "privacy" --dry-run
```

Requires `API_KEY` in `feeds/nz_legislation_api/.env` (also supports `API_ENDPOINT` override). The client handles rate limiting (429), auth errors, and pagination.

## Data Files in This Directory

- `IFFFA-latest.jsonl` / `IFFA-search.jsonl` — API search results (one JSON object per line) for the IFFA bill and act
- `downloads/` — Downloaded legislation files (HTML, PDF, XML) with naming convention `{work_id}.{type}`
- `sessions/` — AI session transcripts that produced the analyses
- `IFFA-bill-summary-of-changes_vs_act_of_2020.md` — The primary analysis output

## Key Conventions

- Work IDs follow the pattern: `act_public_{year}_{number}` or `bill_government_{year}_{number}`
- Download URLs use `demo.legislation.govt.nz` (preview site, becoming main site)
- JSONL format is used for all search result exports
- The XML format from the legislation API contains the full structured text of legislation, suitable for detailed clause-by-clause analysis

## Website Demo

Located at `website-demo/`. React 19 + Vite + MUI 7 + TypeScript.

```bash
# From website-demo/
npm install
npm run dev      # Dev server
npm run build    # Production build
npm run lint     # ESLint
```
