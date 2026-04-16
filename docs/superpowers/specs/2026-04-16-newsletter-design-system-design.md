# Newsletter Design System Website Design

## Summary

This document defines phase 1 of a bilingual (`fr` / `en`) website that acts as an interactive guideline system for the brand's newsletter design. The site is human-readable first, but every approved newsletter block also exposes structured data that can later be reused by other channels, including an MCP-facing interface.

Phase 1 is intentionally scoped around the newsletter channel. It should establish the foundations, reusable newsletter blocks, and the structured definitions that make the system portable. The site is internal-first for a small team, but must still be understandable enough for broader collaborators.

## Goals

- Make newsletter design guidance easier to use than static notes.
- Define reusable structured data for newsletter blocks.
- Localize the UI, guideline content, and data labels in French and English.
- Create a source of truth that can later expand toward e-commerce and other delivery channels.

## Non-Goals

- Building a full newsletter builder in phase 1.
- Modeling full cross-channel content architecture beyond newsletter blocks.
- Solving asset management, campaign publishing, or ESP integration.

## Product Direction

The chosen direction is a docs-first website with an explicit schema layer.

The website should balance two needs:

- Human guidance: show illustrated rules, examples, and editorial recommendations.
- Structured portability: show the machine-readable shape of the same block definitions.

This avoids overbuilding an editor too early while still making the underlying data model stable enough for future integrations.

## Information Architecture

The website should contain four top-level areas.

### 1. Foundations

This section explains the global rules shared across all newsletter blocks.

Initial foundations include:

- spacing scale
- typography
- color system
- CTA styles
- responsiveness guidance
- image sizing guidance
- footer and icon sizing constraints

These rules derive directly from the current newsletter notes and become the common language of the block system.

### 2. Block Library

This section is the primary surface of the site. Each newsletter block gets its own page.

Initial block candidates:

- `header`
- `hero-image`
- `hero-copy`
- `cta`
- `product-wildcard`
- `text-image`
- `reassurance`
- `brand-story`
- `footer-columns`

Each block page should include:

- purpose
- when to use it
- visual example
- responsive behavior
- do and don't guidance
- field definitions
- required versus optional data
- bilingual labels and descriptions
- one or more structured payload examples

### 3. Schema Layer

This section explains the shared structured model used by all blocks.

It should cover:

- block identity
- naming conventions
- localization model
- field types
- required and optional semantics
- validation rules
- example payloads

This section exists to make the design system portable into future channels and interfaces without requiring readers to infer the schema from the docs pages alone.

### 4. Composed Newsletter Examples

This section shows complete example newsletters assembled from approved blocks.

The purpose is not to provide a full builder, but to:

- demonstrate how blocks combine
- improve internal adoption
- show valid composition patterns
- help readers connect isolated block rules to real newsletters

## UX Structure

The recommended layout is:

- left navigation with section hierarchy
- main content panel for guidelines and examples
- FR/EN language switch available globally
- block pages with three content views:
  - `Guidelines`
  - `Structure`
  - `Examples`

This keeps the experience readable for non-technical users while still exposing the structured layer clearly.

## Data Model

The primary reusable unit in phase 1 is the block.

Tokens remain global and shared, but blocks are the main bridge between editorial guidance and machine-readable structure.

Each block should have two parallel definitions.

### Human Definition

This is the documentation layer intended for designers, marketers, and collaborators.

Fields include:

- name
- purpose
- usage conditions
- visual rules
- responsive behavior
- content guidance
- do and don't examples

### Structured Definition

This is the machine-readable layer intended for reuse in future systems.

Fields include:

- stable block key
- localized label in `fr` and `en`
- localized description in `fr` and `en`
- field list
- field types
- required or optional status
- constraints
- example payloads

### Example Block Shape

```json
{
  "key": "hero-image",
  "label": {
    "fr": "Image hero",
    "en": "Hero image"
  },
  "description": {
    "fr": "Image principale cliquable en haut de newsletter",
    "en": "Primary clickable image near the top of the newsletter"
  },
  "fields": [
    {
      "key": "image",
      "type": "asset",
      "required": true
    },
    {
      "key": "href",
      "type": "url",
      "required": true
    },
    {
      "key": "hook",
      "type": "richText",
      "required": false
    }
  ]
}
```

## Model Layers

Phase 1 should define three related layers.

### 1. Foundation Tokens

Reusable primitives such as:

- spacing scale
- colors
- typography
- CTA variants
- image and icon size constraints

### 2. Block Definitions

Contracts for each reusable newsletter module.

These should be language-neutral in their technical keys and localizable in their editorial metadata.

### 3. Block Examples

Sample instances that demonstrate valid usage and localized content.

These examples should support both learning and validation.

## Localization Strategy

Phase 1 must localize:

- the site UI
- the written guideline content
- the block labels and descriptions

Technical identifiers must remain stable and language-neutral:

- block keys
- field keys
- enum values where practical

Localized content should be applied to:

- labels
- descriptions
- examples
- explanatory copy

This preserves portability while still making the system fully bilingual for human users.

## Validation Model

Validation should make the system trustworthy without making phase 1 overly rigid.

There are three validation levels.

### 1. Schema Validity

Checks include:

- required fields exist
- values match expected types
- allowed values are respected
- localization rules are followed

### 2. Design Rule Validity

Checks encode brand and newsletter rules derived from the source notes.

Initial examples:

- logo maximum height is `128px`
- reassurance icons maximum height is `96px`
- CTA placement should remain above the mobile fold guideline
- spacing must come from the approved scale

These rules are design-system checks, not only technical checks.

### 3. Documentation Completeness

Every block should include:

- guideline content
- structured definition
- at least one example
- bilingual metadata

## Error Handling

Errors and warnings should be readable and editorial in tone.

The UI should distinguish between:

- schema errors
- design rule warnings
- missing translations

Examples:

- "Required image field is missing"
- "CTA link is valid, but placement breaks newsletter guidance"
- "English label is missing"

This distinction matters because a block can be structurally valid while still violating brand recommendations.

## Testing Strategy

Phase 1 testing should focus on reliability and usability.

### Schema Tests

- block definitions parse successfully
- required fields are enforced
- field types are enforced
- bilingual metadata exists for all blocks

### Design Rule Tests

- foundation token values match the approved system
- design constraints are encoded correctly
- valid and intentionally invalid examples produce expected results

### Rendering Checks

- each block page renders guideline content
- each block page renders structure content
- each block page renders examples
- FR/EN switching works consistently
- composed examples use approved blocks only

### Adoption Checks

Success should also be measured qualitatively:

- a team member can find a block quickly
- a team member can understand its rule without extra explanation
- a team member can reuse its data shape with confidence

## Evolution Path

Phase 1 should establish newsletter as the source model before the system expands.

Recommended progression:

1. newsletter foundations
2. newsletter block library
3. composed newsletter examples
4. structured reuse across channels
5. e-commerce design system alignment

This sequence reduces risk by validating one channel deeply before generalizing the model elsewhere.

## Open Decisions Deferred

The following items are intentionally left for implementation planning rather than solved in this design:

- exact file structure and route structure
- exact schema format choice
- whether examples are stored as JSON, TypeScript objects, or another typed source
- whether design rules are expressed as code, metadata, or both
- visual styling details of the site itself beyond the structural UX described here

## Success Criteria

Phase 1 is successful when:

- the team prefers the site over static notes for newsletter guidance
- each approved newsletter block has a bilingual guideline page
- each approved newsletter block has a stable structured definition
- readers can understand both the visual rule and the data contract
- the structured definitions are ready to be reused later in an MCP-oriented interface
