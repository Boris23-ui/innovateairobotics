# CLAUDE.md

## gstack

Use the `/browse` skill from gstack for all web browsing. Never use `mcp__Claude_in_Chrome__*` tools directly.

Available skills:
- `/plan-ceo-review` — CEO/founder-mode plan review
- `/plan-eng-review` — Eng manager-mode plan review
- `/review` — Pre-landing PR review
- `/ship` — Ship workflow (merge, test, review, bump, push, PR)
- `/browse` — Headless browser for QA testing and site dogfooding
- `/qa` — Systematic QA testing
- `/setup-browser-cookies` — Import cookies from your real browser
- `/retro` — Weekly engineering retrospective

If gstack skills aren't working, run `cd .claude/skills/gstack && ./setup` to build the binary and register skills.
