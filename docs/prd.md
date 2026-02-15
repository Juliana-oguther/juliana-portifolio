Perfeito, Juliana.
Vou criar um **PRD robusto, técnico e estruturado**, pronto para você colar dentro do GitHub Copilot Chat ou usar como `PRD.md` no repositório.

Estou usando como base as informações do seu currículo  para já deixar o produto alinhado com seu posicionamento profissional (Analista de Suporte com foco em PACS, DICOM, Cloud e DevOps).

---

# 📄 PRD — Personal Portfolio Website

**Product Requirements Document**

---

# 1. Visão Geral do Produto

## 1.1 Nome do Projeto

`juliana-portfolio`

## 1.2 Objetivo

Criar um site de currículo profissional moderno, responsivo e acessível, desenvolvido com:

* **Next.js 14+ (App Router)**
* **TypeScript**
* **Tailwind CSS**
* Sem bibliotecas adicionais

O site deve posicionar Juliana como:

> Analista de Suporte Técnico com foco em Cloud, Monitoramento, Integrações Hospitalares e DevOps.

---

# 2. Objetivos Estratégicos

## 2.1 Objetivo Principal

Apresentar experiência técnica de forma clara, moderna e profissional para recrutadores da área de:

* Suporte Técnico N1/N2
* Cloud Operations
* DevOps Jr
* Engenharia de Suporte
* Monitoramento e Infraestrutura

## 2.2 Objetivos Secundários

* Demonstrar organização e maturidade técnica
* Exibir estrutura de código limpa (recrutadores técnicos analisam isso)
* Ter base escalável para futura adição de:

  * Projetos
  * Blog técnico
  * Seção de experiências detalhadas
  * Internacionalização

---

# 3. Público-Alvo

* Recrutadores técnicos
* Tech Leads
* Gestores de Infra / Cloud
* Empresas SaaS de saúde
* Empresas de tecnologia

---

# 4. Requisitos Funcionais

## 4.1 Estrutura de Seções

### 4.1.1 Home (Hero Section)

Deve conter:

* Nome completo
* Cargo profissional
* Localização
* Resumo profissional curto
* Botões:

  * Baixar CV (PDF local)
  * Contato (âncora para rodapé)

Resumo base extraído do currículo :

> Analista de Suporte Técnico com experiência em PACS, DICOM, integrações hospitalares, monitoramento e suporte N1/N2 em ambientes cloud.

---

### 4.1.2 Sobre Mim

Conteúdo:

* Texto profissional em tom claro e objetivo
* Lista de valores/forças:

  * Comunicação clara
  * Troubleshooting estruturado
  * Mentalidade DevOps
  * Foco em SLA
  * Colaboração cross-team
  * Aprendizado contínuo

---

### 4.1.3 Capacitações

Skills organizadas por categorias:

#### 1️⃣ Suporte & Infraestrutura

* SLA & Atendimento Técnico
* Troubleshooting N1/N2
* Diagnóstico de rede
* Logs e análise de incidentes

#### 2️⃣ Saúde Digital

* PACS
* DICOM
* Integrações Hospitalares (Tasy, Totvs, Clinux etc.)
* Telemedicina

#### 3️⃣ Desenvolvimento

* JavaScript
* jQuery
* PHP (Laravel)
* APIs REST
* MVC
* PostgreSQL

#### 4️⃣ Cloud & DevOps (em evolução)

* Fundamentos de Cloud
* Monitoramento (DataDog – estudo)
* Linux
* Conceitos DevOps
* Automação com Python

Cada skill deve conter:

* Nome
* Categoria
* Nível: Básico | Intermediário | Avançado

---

# 5. Requisitos Não Funcionais

## 5.1 Arquitetura

* Next.js 14+
* App Router
* layout.tsx obrigatório
* Estrutura modular
* Dados centralizados em `src/data/profile.ts`

## 5.2 Performance

* Lighthouse score > 90
* Sem bibliotecas extras
* CSS apenas Tailwind

## 5.3 Acessibilidade

* HTML semântico
* Uso correto de headings
* Contraste adequado
* Navegação por teclado

## 5.4 Responsividade

Mobile-first obrigatório.

Breakpoints:

* Mobile padrão
* md
* lg

---

# 6. Estrutura Técnica do Projeto

```
/app
  layout.tsx
  page.tsx
  globals.css

/src
  /components
    Header.tsx
    Section.tsx
    CardSkill.tsx
    Footer.tsx
  /data
    profile.ts

/public
  cv.pdf
```

---

# 7. Tema Claro/Escuro

## Requisitos:

* Botão no Header
* Usar `class="dark"` no `<html>`
* Persistência via `localStorage`
* Sem bibliotecas externas

---

# 8. SEO

No layout.tsx deve conter:

* title
* description
* metadata
* open graph básico

Exemplo:

```
title: Juliana Gutierrez | Analista de Suporte Técnico
description: Portfólio profissional com foco em Cloud, PACS, DICOM e DevOps.
```

---

# 9. Design System

## 9.1 Visual

* Minimalista
* Tipografia moderna
* Espaçamento generoso
* Cards suaves
* Transições leves
* Profissional, não infantil

## 9.2 Cores sugeridas

Primária:

* Azul técnico (ex: blue-600)

Neutros:

* Zinc / Slate

Dark mode:

* Fundo zinc-900
* Texto zinc-100

---

# 10. Critérios de Aceitação

✅ Projeto compila sem erro
✅ Layout responsivo
✅ Tema dark funciona
✅ Skills organizadas corretamente
✅ Código organizado e legível
✅ SEO configurado
✅ PDF disponível para download

---

# 11. Fora de Escopo (v1)

* Backend
* CMS
* Banco de dados
* Autenticação
* Blog
* Testes automatizados

---

# 12. Publicação

## Deploy recomendado:

### Vercel

Passos:

1. Criar repositório no GitHub
2. Subir projeto
3. Conectar no Vercel
4. Deploy automático
5. Configurar domínio personalizado (opcional)

---

# 13. Roadmap Futuro

Fase 2:

* Seção Experiência detalhada
* Projetos
* Timeline animada
* Blog técnico
* Inglês como idioma secundário

Fase 3:

* Internacionalização (i18n)
* SEO avançado
* Analytics