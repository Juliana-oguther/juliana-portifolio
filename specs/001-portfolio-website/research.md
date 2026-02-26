# Phase 0 Research - Juliana Professional Portfolio Website

## Decision 1: Use a single Next.js App Router web app with centralized profile data

- **Decision**: Implement the portfolio as one Next.js 14+ App Router application with content centralized in `src/data/profile.ts` and rendered by modular UI components.
- **Rationale**: Matches feature scope (single portfolio site), minimizes complexity, and preserves maintainability for future sections (projects/blog/i18n).
- **Alternatives considered**:
  - Multi-app split (frontend/backend): rejected as unnecessary for static profile content.
  - CMS-driven architecture: rejected for v1 due to higher setup/maintenance cost.

## Decision 2: Persist theme using `localStorage` and root `dark` class with hydration-safe initialization

- **Decision**: Theme preference is stored in `localStorage`; the root HTML element receives/removes `dark` class. Initial theme should be read early to avoid flash-of-incorrect-theme.
- **Rationale**: Satisfies FR-008 and SC-005 without external packages, aligns with Tailwind dark-mode pattern.
- **Alternatives considered**:
  - Cookie-based preference: rejected because there is no backend/session requirement in v1.
  - Third-party theme library: rejected due to explicit no-extra-library constraint.

## Decision 3: Define SEO baseline in app metadata (title, description, Open Graph)

- **Decision**: Configure metadata in app layout including `title`, `description`, and Open Graph fields for recruiter-visible sharing cards.
- **Rationale**: Directly fulfills FR-009 with minimal implementation complexity and no external dependencies.
- **Alternatives considered**:
  - Advanced SEO tooling/plugins: rejected for v1 simplicity and no-extra-library requirement.
  - Per-section dynamic metadata: rejected because v1 is a single-page portfolio.

## Decision 4: Accessibility and responsiveness validated by semantic checks + Lighthouse audit

- **Decision**: Validate semantic heading structure, keyboard navigation, color contrast, and responsive layout behavior manually; use Lighthouse thresholds for measurable acceptance.
- **Rationale**: Aligns with FR-010/FR-011 and SC-004 while remaining technology-agnostic and practical for v1.
- **Alternatives considered**:
  - Full automated accessibility pipeline in CI: deferred to future phase (outside current scope).

## Decision 5: Contract-first content and interaction endpoints (future-ready)

- **Decision**: Define an OpenAPI contract for profile/skills/sections retrieval, CV metadata retrieval, and theme preference update endpoint.
- **Rationale**: Provides clear integration boundaries for future API-backed evolution while current implementation can remain static/in-app.
- **Alternatives considered**:
  - No formal contract: rejected due to reduced clarity for future expansions.
  - GraphQL contract: rejected to keep v1 integration surface straightforward.

## Clarification Resolution Status

All technical context clarifications are resolved for planning. No `NEEDS CLARIFICATION` items remain.
