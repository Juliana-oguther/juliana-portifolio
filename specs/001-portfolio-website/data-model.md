# Data Model - Juliana Professional Portfolio Website

## 1) ProfessionalProfile

Represents hero/about-level identity data.

### Fields

- `fullName` (string, required, 2-120 chars)
- `headline` (string, required, 5-140 chars)
- `location` (string, required, 2-120 chars)
- `summary` (string, required, 40-320 chars)
- `strengths` (string[], required, min 3, max 12, unique values)
- `contact` (ContactInfo, required)

### Validation Rules

- All required string fields are trimmed and non-empty.
- `summary` should be concise and recruiter-readable.
- `strengths` values must be human-readable labels.

---

## 2) ContactInfo

Represents contact channels shown in footer/contact section.

### Fields

- `email` (string, required, valid email format)
- `phone` (string, optional, normalized display format)
- `linkedinUrl` (string, optional, valid https URL)
- `githubUrl` (string, optional, valid https URL)

### Validation Rules

- At least one direct channel (`email` or `linkedinUrl`) must exist.
- URLs must start with `https://`.

---

## 3) SkillCategory

Represents a business grouping for skills.

### Fields

- `id` (string, required, slug format)
- `name` (string, required, 2-80 chars)
- `displayOrder` (integer, required, >= 1)

### Validation Rules

- `id` must be unique.
- `displayOrder` must be unique across categories.

---

## 4) Skill

Represents one competency item under a category.

### Fields

- `id` (string, required, slug format)
- `name` (string, required, 2-100 chars)
- `categoryId` (string, required, references `SkillCategory.id`)
- `level` (enum, required: `Básico` | `Intermediário` | `Avançado`)
- `displayOrder` (integer, required, >= 1)

### Validation Rules

- `(categoryId, displayOrder)` pair should be unique for stable ordering.
- `categoryId` must reference an existing category.
- `name` values should avoid duplicates within same category.

---

## 5) PortfolioSection

Represents top-level sections on the page.

### Fields

- `id` (enum, required: `home` | `about` | `skills` | `contact`)
- `title` (string, required, 2-80 chars)
- `anchor` (string, required, URL-fragment-safe)
- `displayOrder` (integer, required, >= 1)
- `isVisible` (boolean, required, default `true`)

### Validation Rules

- `anchor` must be unique and match section navigation links.
- At least required core sections are visible.

---

## 6) ThemePreference

Represents user-selected UI theme mode persisted in browser storage.

### Fields

- `mode` (enum, required: `light` | `dark`)
- `updatedAt` (datetime, optional)

### Validation Rules

- Stored value must fallback to `light` when invalid.
- `mode` must immediately map to root HTML class toggle.

### State Transitions

- `light` -> `dark` on toggle action.
- `dark` -> `light` on toggle action.

---

## 7) ResumeAsset

Represents downloadable curriculum artifact.

### Fields

- `filePath` (string, required, points to `/public` asset)
- `label` (string, required, 2-80 chars)
- `isAvailable` (boolean, required)
- `lastUpdated` (date, optional)

### Validation Rules

- `filePath` must resolve to an existing public asset at build/deploy time.
- If `isAvailable = false`, UI must show a non-technical error message per FR-012.

---

## Relationships Summary

- One `ProfessionalProfile` has one `ContactInfo`.
- One `SkillCategory` has many `Skill` items.
- `PortfolioSection` defines navigation and render ordering for page blocks.
- One client session has one `ThemePreference` state persisted locally.
- One portfolio contains one active `ResumeAsset` in v1.
