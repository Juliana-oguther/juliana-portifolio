# Implementation Plan: Juliana Professional Portfolio Website

**Branch**: `001-portfolio-website` | **Date**: 2026-02-14 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-portfolio-website/spec.md`

## Summary

Build a single-page professional portfolio website that enables recruiters to quickly evaluate Juliana's profile, download her CV, and find contact paths. The solution uses a modern web stack with server-rendered metadata, modular components, centralized content data, responsive layout, semantic accessibility, and persistent light/dark theme preference.

## Technical Context

**Language/Version**: TypeScript 5.x, Node.js 20 LTS runtime for build tooling  
**Primary Dependencies**: Next.js 14+ (App Router), React 18, Tailwind CSS  
**Storage**: Local static files (`public/cv.pdf`) and in-app structured data (`src/data/profile.ts`), browser `localStorage` for theme preference  
**Testing**: Manual acceptance testing from specification scenarios + Lighthouse audit (Performance/Accessibility/SEO)  
**Target Platform**: Modern desktop and mobile browsers (latest 2 versions of Chromium, Firefox, Safari)  
**Project Type**: Web application (frontend-rendered single-site portfolio)  
**Performance Goals**: Lighthouse score >= 90 for Performance, Accessibility, and SEO on production build  
**Constraints**: No additional UI/state libraries; semantic HTML required; keyboard navigability required; mobile-first responsive behavior; clear fallback for missing CV asset  
**Scale/Scope**: One portfolio website, 4 core sections (Hero, About, Skills, Contact), approximately 20-40 structured skill entries

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

The file [\.specify/memory/constitution.md](../../.specify/memory/constitution.md) is a template with placeholder sections and no ratified project principles.

### Pre-Phase-0 Gate Assessment

- Gate definitions present: **No** (placeholders only)
- Blocking constitutional constraints: **None detected**
- Result: **PASS (provisional)** — planning can proceed with standard quality controls from spec and template workflow.

### Post-Phase-1 Re-Check

- Design artifacts conflict with constitution: **No**
- New violations introduced by data model/contracts: **No**
- Result: **PASS**

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-website/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── openapi.yaml
└── tasks.md
```

### Source Code (repository root)

```text
app/
├── layout.tsx
├── page.tsx
└── globals.css

src/
├── components/
│   ├── Header.tsx
│   ├── Section.tsx
│   ├── CardSkill.tsx
│   └── Footer.tsx
└── data/
    └── profile.ts

public/
└── cv.pdf
```

**Structure Decision**: Use a single Next.js web application with App Router and modular UI components. This directly matches the product scope (single portfolio site) and keeps implementation lightweight while preserving scalability for future sections.

## Phase 0 - Research Plan

Research tasks executed:

1. Define best-practice structure for Next.js 14 App Router portfolio with centralized content data.
2. Define safe theme persistence pattern with `class="dark"` and `localStorage` (FOUC avoidance and hydration safety).
3. Define recruiter-facing SEO metadata baseline (title, description, Open Graph) for single-page profile sites.
4. Define accessibility and responsive validation approach aligned to success criteria and Lighthouse.

Output artifact: [research.md](./research.md)

## Phase 1 - Design & Contracts Plan

Design tasks executed:

1. Derive data entities and validation constraints from functional requirements.
2. Model frontend domain data objects and relationships for profile, skills, sections, theme preference, and resume asset.
3. Define contract-first API surface for user actions and content retrieval as OpenAPI schema.
4. Create developer quickstart flow for local setup, run, validation, and acceptance checks.
5. Update AI agent context for current plan stack.

Output artifacts:

- [data-model.md](./data-model.md)
- [contracts/openapi.yaml](./contracts/openapi.yaml)
- [quickstart.md](./quickstart.md)

## Phase 2 - Task Planning Readiness

Ready for `/speckit.tasks` generation. User stories are independently testable, constraints are explicit, and contracts/data model are complete for implementation breakdown.

## Complexity Tracking

No constitution violations requiring justification.
