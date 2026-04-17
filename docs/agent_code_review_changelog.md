# Agent Code Review - Changelog

## 2026-04-17 (documentation)

### Changed

- Updated `docs/agent_code_review_guide.md` project context with canonical **`/brand/[system]`** routing and **`/systems`** redirect behavior.

## 2026-04-17

### Added

- Created `docs/agent_code_review_guide.md` to define a standard code review framework for agents.
- Added severity model (`critical`, `high`, `medium`, `low`) and required evidence-based findings.
- Added mandatory output structure: `Findings`, `Questions / Hypotheses`, `Resume secondaire`.
- Added verification checklist and recommended commands (`npm run lint`, `npm run build`).
- Added Definition of Done for review completion criteria.

### Added (Rule)

- Created `.cursor/rules/code-review-agent.mdc` as an always-on rule for agent code review behavior.
- Rule now enforces:
  - severity prioritization,
  - file-path citation per finding,
  - actionable fix proposals,
  - explicit handling when no blocking issue is found,
  - minimal verification expectations.

### Notes

- The rule delegates detailed process and checklist guidance to:
  - `docs/agent_code_review_guide.md`
