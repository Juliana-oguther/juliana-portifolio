# Quickstart - Juliana Professional Portfolio Website

## Prerequisites

- Node.js 20 LTS
- npm 10+ (or compatible package manager)

## 1) Install dependencies

1. Open repository root.
2. Install packages.

## 2) Start development server

1. Run local development mode.
2. Open the local URL in browser.

## 3) Provide required content assets

- Ensure profile data exists in `src/data/profile.ts`.
- Ensure CV file exists at `public/cv.pdf`.

## 4) Validate core user stories

### P1: Professional profile visibility

- Confirm Hero includes name, role, location, and summary.
- Confirm skills are grouped by category with proficiency levels.

### P2: Resume + contact actions

- Click CV action and confirm file download starts.
- Click contact action and confirm navigation to contact section.

### P3: Responsive + theme

- Validate layout on mobile and desktop widths.
- Toggle theme and refresh page; confirm preference persists.

## 5) Accessibility and SEO checks

- Confirm semantic heading order and keyboard navigation.
- Confirm metadata includes title, description, Open Graph basics.
- Run Lighthouse on production build and verify score targets (>= 90).

## 6) Build for production

1. Build application.
2. Start production server and re-run acceptance checks.

---

## Registro de execução (2026-02-14)

### Resultado das validações

- Build de produção: **PASS** (`next build` concluído)
- P1 (perfil profissional): **PASS**
	- Hero com nome, headline, localização e resumo no primeiro bloco
	- Competências agrupadas por categoria com nível de proficiência
- P2 (CV + contato): **PASS**
	- Ação “Baixar CV” com download do arquivo em `public/cv.pdf`
	- Ação “Contato” direciona para a seção de contato
- P3 (responsivo + tema): **PASS**
	- Layout adaptável em mobile/desktop sem overflow horizontal
	- Alternância de tema com persistência via `localStorage`
- Semântica/SEO base: **PASS**
	- Estrutura de landmarks/seções com hierarquia de títulos
	- Metadados principais e Open Graph adicionados em layout
