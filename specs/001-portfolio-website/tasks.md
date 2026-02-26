# Tasks: Juliana Professional Portfolio Website

**Input**: Design documents from `/specs/001-portfolio-website/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Test tasks were not generated because the specification does not request TDD or automated tests for this feature.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and baseline web app structure

- [X] T001 Initialize Next.js 14 + TypeScript + Tailwind project configuration in package.json
- [X] T002 Create base App Router files in app/layout.tsx
- [X] T003 [P] Create base landing page scaffold in app/page.tsx
- [X] T004 [P] Create global Tailwind stylesheet scaffold in app/globals.css
- [X] T005 [P] Create centralized profile data module scaffold in src/data/profile.ts

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared components and data contracts that all stories depend on

**⚠️ CRITICAL**: No user story work should begin until this phase is complete

- [X] T006 Define portfolio domain types and exported content schema in src/data/profile.ts
- [X] T007 Create reusable section wrapper component in src/components/Section.tsx
- [X] T008 [P] Create reusable header/navigation shell in src/components/Header.tsx
- [X] T009 [P] Create reusable footer/contact shell in src/components/Footer.tsx
- [X] T010 Add base metadata structure and semantic document landmarks in app/layout.tsx
- [X] T011 Add global color tokens, spacing baseline, and focus defaults in app/globals.css

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Present Professional Profile (Priority: P1) 🎯 MVP

**Goal**: Let recruiters quickly understand Juliana's profile, strengths, and categorized competencies

**Independent Test**: Open homepage and verify hero identity block, about content, and categorized skills with proficiency levels

### Implementation for User Story 1

- [X] T012 [US1] Populate professional profile, strengths, and section labels in src/data/profile.ts
- [X] T013 [P] [US1] Populate skill categories and skill entries with proficiency levels in src/data/profile.ts
- [X] T014 [P] [US1] Implement skill card component with level badge in src/components/CardSkill.tsx
- [X] T015 [US1] Implement hero and about rendering using profile data in app/page.tsx
- [X] T016 [US1] Implement categorized skills rendering and ordering in app/page.tsx
- [X] T017 [US1] Implement empty-skill-category fallback state in app/page.tsx

**Checkpoint**: User Story 1 is fully functional and independently testable

---

## Phase 4: User Story 2 - Access Resume and Contact Path (Priority: P2)

**Goal**: Allow recruiters to download CV and reach contact information in one interaction

**Independent Test**: Click CV action and verify download/feedback behavior; click contact CTA and verify jump to contact section

### Implementation for User Story 2

- [X] T018 [US2] Add resume asset metadata and contact channels in src/data/profile.ts
- [X] T019 [US2] Add primary actions (Baixar CV and Contato) in hero section in app/page.tsx
- [X] T020 [P] [US2] Implement contact section details and links in src/components/Footer.tsx
- [X] T021 [US2] Implement unavailable-CV user-friendly feedback behavior in app/page.tsx
- [X] T022 [P] [US2] Add CV file asset for download in public/cv.pdf

**Checkpoint**: User Stories 1 and 2 both work independently

---

## Phase 5: User Story 3 - Review Portfolio Comfortably on Any Device (Priority: P3)

**Goal**: Ensure responsive readability plus persistent light/dark theme preference

**Independent Test**: Verify layout at mobile and desktop widths; toggle theme; refresh and confirm persisted preference

### Implementation for User Story 3

- [X] T023 [P] [US3] Implement theme toggle control with persisted preference in src/components/Header.tsx
- [X] T024 [P] [US3] Implement hydration-safe theme initialization on root html class in app/layout.tsx
- [X] T025 [US3] Implement responsive section spacing and typography for mobile/md/lg in app/page.tsx
- [X] T026 [US3] Implement dark/light contrast refinements and readable tokens in app/globals.css
- [X] T027 [US3] Implement keyboard-visible focus states for interactive controls in app/globals.css

**Checkpoint**: All user stories are independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final quality pass across all stories

- [X] T028 Add final SEO metadata and Open Graph content in app/layout.tsx
- [X] T029 [P] Run full quickstart acceptance checklist and record results in specs/001-portfolio-website/quickstart.md
- [X] T030 [P] Record Lighthouse performance/accessibility/SEO outcomes and remediation notes in specs/001-portfolio-website/checklists/lighthouse.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: No dependencies
- **Phase 2 (Foundational)**: Depends on Phase 1; blocks all user stories
- **Phase 3 (US1)**: Depends on Phase 2 only
- **Phase 4 (US2)**: Depends on Phase 2 only
- **Phase 5 (US3)**: Depends on Phase 2 only
- **Phase 6 (Polish)**: Depends on completion of selected user stories

### User Story Dependency Graph

- **US1 (P1)**: Starts after Foundational; no dependency on other stories
- **US2 (P2)**: Starts after Foundational; no dependency on US1 implementation details
- **US3 (P3)**: Starts after Foundational; no dependency on US1/US2 implementation details

Recommended delivery order: **US1 → US2 → US3**

### Parallel Opportunities

- Setup: T003, T004, T005 can run in parallel after T001/T002
- Foundational: T008 and T009 can run in parallel after T006/T007
- US1: T013 and T014 can run in parallel after T012
- US2: T022 can run in parallel with T019-T021 after T018
- US3: T023 and T024 can run in parallel before responsive and styling refinements
- Polish: T029 and T030 can run in parallel after T028

---

## Parallel Example: User Story 1

- [ ] T013 [P] [US1] Populate skill categories and skill entries with proficiency levels in src/data/profile.ts
- [ ] T014 [P] [US1] Implement skill card component with level badge in src/components/CardSkill.tsx

## Parallel Example: User Story 2

- [ ] T022 [P] [US2] Add CV file asset for download in public/cv.pdf
- [ ] T020 [P] [US2] Implement contact section details and links in src/components/Footer.tsx

## Parallel Example: User Story 3

- [ ] T023 [P] [US3] Implement theme toggle control with persisted preference in src/components/Header.tsx
- [ ] T024 [P] [US3] Implement hydration-safe theme initialization on root html class in app/layout.tsx

---

## Implementation Strategy

### MVP First (User Story 1)

1. Complete Phase 1 (Setup)
2. Complete Phase 2 (Foundational)
3. Complete Phase 3 (US1)
4. Validate US1 independently before proceeding

### Incremental Delivery

1. Deliver US1 (core profile value)
2. Deliver US2 (resume and contact conversion path)
3. Deliver US3 (responsiveness and persistent theming)
4. Run Phase 6 polish and final validation

### Team Parallelization Strategy

1. Team completes Phase 1-2 together
2. Then split by stories:
   - Dev A: US1
   - Dev B: US2
   - Dev C: US3
3. Integrate and run Phase 6 jointly

---

## Notes

- All tasks follow the required checklist format: `- [ ] T### [P] [US#] Description with file path`
- `[P]` marks tasks that can run in parallel safely
- Story labels are used only in user-story phases
- Each story remains independently testable from specification acceptance scenarios
