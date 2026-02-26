# Juliana Portfólio — Website Profissional

<p align="center">
  Portfólio profissional interativo construído com Next.js, foco em performance, legibilidade e apresentação técnica de perfil, competências e currículo.
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-14.2.5-000000?logo=nextdotjs&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-18.3.1-20232A?logo=react&logoColor=61DAFB" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.5.4-3178C6?logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3.4.7-06B6D4?logo=tailwindcss&logoColor=white" />
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer_Motion-11.0.0-0055FF?logo=framer&logoColor=white" />
  <img alt="PostCSS" src="https://img.shields.io/badge/PostCSS-8.4.39-DD3A0A?logo=postcss&logoColor=white" />
  <img alt="ESLint" src="https://img.shields.io/badge/ESLint-8.57.0-4B32C3?logo=eslint&logoColor=white" />
</p>

---

## Demonstração visual

### GIF de navegação

<p align="center">
  <img src="docs/preview.gif" alt="Demonstração em GIF do portfólio" width="820" />
</p>

> Se o arquivo `docs/preview.gif` ainda não existir no repositório, grave uma navegação curta da página inicial e salve com esse nome para aparecer automaticamente no README.

---

## Visão técnica do projeto

Este projeto é uma aplicação **Next.js 14 (App Router)** para apresentar um portfólio profissional com estética editorial, animações suaves e navegação orientada por seções.

### O que o sistema faz

- Renderiza uma landing page completa com seções de:
  - Hero (apresentação profissional)
  - Sobre
  - Competências por categoria
  - Contato
- Exibe dados estruturados de perfil, skills e currículos a partir de uma fonte única em `src/data/profile.ts`.
- Suporta **internacionalização simples (PT/EN)** em cliente, com persistência da linguagem em `localStorage`.
- Implementa **tema claro/escuro** com preferência salva e script de inicialização para evitar flicker.
- Inclui elementos de UX visual:
  - barra de progresso de scroll
  - partículas em background
  - parallax decorativo
  - animações com Framer Motion e componentes de reveal/stagger
- Disponibiliza download de currículo em múltiplos idiomas.

### Arquitetura resumida

- `app/layout.tsx`
  - Define metadata de SEO/Open Graph.
  - Carrega fontes Google (`Inter` e `Playfair Display`) com `next/font`.
  - Inicializa tema com script inline antes da renderização visual.
- `app/page.tsx`
  - Orquestra o estado da página (idioma e comportamento de rolagem).
  - Faz localização de textos e mapeia categorias/skills para renderização.
  - Compõe a tela com componentes reutilizáveis do diretório `src/components`.
- `src/components`
  - Componentes visuais, animações, seções e elementos de navegação.
- `src/data/profile.ts`
  - Modelo e conteúdo do domínio: perfil, contato, skills, seções e arquivos de currículo.

---

## Tecnologias usadas

### Core

- **Next.js 14.2.5** (App Router)
- **React 18.3.1**
- **TypeScript 5.5.4**

### UI e experiência

- **Tailwind CSS 3.4.7**
- **Framer Motion 11.0.0**
- **next/font** para carregamento otimizado de tipografia

### Qualidade e build

- **ESLint + eslint-config-next**
- **PostCSS + Autoprefixer**
- **Node.js/NPM** para execução dos scripts

---

## Requisitos

- **Node.js 18+** (recomendado LTS atual)
- **npm**

---

## Como executar o projeto

### 1) Instalar dependências

```bash
npm install
```

### 2) Rodar em desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:3000`

### 3) Build de produção

```bash
npm run build
```

### 4) Subir versão de produção local

```bash
npm run start
```

### 5) Lint

```bash
npm run lint
```

---

## Scripts disponíveis

- `npm run clean` → remove cache `.next`
- `npm run dev` → inicia servidor de desenvolvimento
- `npm run build` → limpa cache e gera build
- `npm run start` → inicia servidor com build gerada
- `npm run lint` → valida padrões de código

### Atalhos Windows inclusos

- `start-dev.bat` → limpa cache e inicia `next dev`
- `start-fresh.bat` → limpa cache, gera build e inicia `next dev`

---

## Estrutura principal

```text
app/
  layout.tsx
  page.tsx
src/
  components/
  data/
    profile.ts
public/
docs/
specs/
```

---

## SEO e metadados

O projeto define metadados no App Router (`title`, `description` e `openGraph`) para melhorar descoberta e compartilhamento em redes.

---

## Status

Projeto funcional para portfólio profissional, com base sólida para evolução de conteúdo, novas seções e integrações futuras.
