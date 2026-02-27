---
name: ds-foundations
description: Referencia do Design System — tokens, tipografia, cores, espacamento, border-radius e modo escuro.
---

# Design System Foundations — Vanguarda

Referencia viva dos tokens e foundations do Design System. Atualizado pelo agent DesignOps.

## Stack base

- **shadcn/ui** (new-york style) + **Radix UI** + **Tailwind CSS 4**
- Config: `components.json` na raiz do projeto
- Tokens: CSS variables em `src/app/globals.css`
- Helper: `cn()` em `src/lib/utils.ts` (clsx + tailwind-merge)

## Tipografia

- **Sans (display):** Outfit via `next/font` (`--font-outfit`) — `font-sans` — **sempre uppercase** (auto via CSS)
- **Body (default):** Inter via `next/font` (`--font-inter`) — `font-body` — fonte padrao do body
- **Mono (tertiary):** JetBrains Mono via `next/font` (`--font-jetbrains-mono`) — `font-mono`

### Convencao de uso tipografico

| Elemento | Fonte | Uppercase | Quando usar |
|----------|-------|-----------|-------------|
| h1 | Outfit (`font-sans`) | Auto | Titulos curtos, hero, brand |
| h2-h6 | Inter (`font-body`) | Nao | Titulos de conteudo, secoes |
| Button | Outfit (`font-sans`) | Auto | Todos os botoes |
| Body/p | Inter (`font-body`) | Nao | Texto corrido, paragrafos |
| Code | JetBrains Mono (`font-mono`) | Nao | Codigo, valores tecnicos |

> `font-sans` aplica `text-transform: uppercase` e `letter-spacing: 0.05em` automaticamente via base layer.

### Font sizes (Figma: font.size)

Definidos como CSS custom properties `--font-size-*` em `:root`. Uso: `text-[length:var(--font-size-sm)]`.

| Token | Valor | px |
|-------|-------|----|
| `--font-size-xs` | 0.75rem | 12 |
| `--font-size-2xs` | 0.875rem | 14 |
| `--font-size-3xs` | 1rem | 16 |
| `--font-size-4xs` | 1.125rem | 18 |
| `--font-size-sm` | 1.25rem | 20 |
| `--font-size-2sm` | 1.5rem | 24 |
| `--font-size-3sm` | 1.75rem | 28 |
| `--font-size-4sm` | 2rem | 32 |
| `--font-size-md` | 2.25rem | 36 |
| `--font-size-2md` | 2.5rem | 40 |
| `--font-size-3md` | 3rem | 48 |
| `--font-size-4md` | 3.5rem | 56 |
| `--font-size-lg` | 4rem | 64 |
| `--font-size-2lg` | 4.5rem | 72 |
| `--font-size-3lg` | 5rem | 80 |
| `--font-size-4lg` | 5.5rem | 88 |
| `--font-size-xl` | 6rem | 96 |
| `--font-size-2xl` | 7rem | 112 |
| `--font-size-3xl` | 7.5rem | 120 |
| `--font-size-4xl` | 8.75rem | 140 |

### Font weights (Figma: font.weight)

Mapeados ao Tailwind padrao: `font-thin` (100), `font-extralight` (200), `font-light` (300), `font-normal` (400), `font-medium` (500), `font-semibold` (600), `font-bold` (700), `font-extrabold` (800), `font-black` (900).

## Paleta de cores

### Surface (Figma: color.surface)

Escala neutra usada como base para tokens semanticos. Tailwind: `bg-surface-*`, `text-surface-*`.

| Token | Hex | Uso |
|-------|-----|-----|
| `surface-white` | #FFFFFF | Fundo claro |
| `surface-100` | #F2F2F2 | Secondary, muted |
| `surface-200` | #E7E7E7 | Borders leves |
| `surface-300` | #D4D4D4 | Borders, input |
| `surface-400` | #BCBCBC | Placeholders |
| `surface-500` | #A4A4A4 | Ring, muted text |
| `surface-600` | #5E5E5E | Muted foreground |
| `surface-700` | #484848 | Dark borders |
| `surface-800` | #303030 | Dark secondary |
| `surface-900` | #202020 | Dark card |
| `surface-950` | #101010 | Foreground, dark bg |
| `surface-black` | #000000 | Preto absoluto |

### Brand (Figma: color.brand)

Cores de marca. Tailwind: `bg-brand-*`, `text-brand-*`.

| Token | Hex | Nome |
|-------|-----|------|
| `brand-atmos` | #77C5D5 | Azul claro |
| `brand-kobold` | #006298 | Azul profundo |
| `brand-bleu` | #5691A1 | Azul medio |
| `brand-midori` | #3A913F | Verde |
| `brand-sahara` | #D6A461 | Dourado |
| `brand-boreal` | #8B355F | Magenta |
| `brand-cotta` | #872526 | Vermelho escuro |
| `brand-antar` | #BFE3ED | Azul pastel |
| `brand-azzay` | #79876D | Verde oliva |
| `brand-cloro` | #E2E99C | Verde claro |
| `brand-arena` | #FAEDBC | Areia |
| `brand-carota` | #F87C56 | Laranja |
| `brand-khewra` | #DC625E | Vermelho medio |
| `brand-nubia` | #FBDD7A | Amarelo |
| `brand-calla` | #F4C3CC | Rosa |

### Semantic (shadcn/ui)

Tokens semanticos mapeados aos primitivos surface/brand. Suportam light/dark mode.

| Token | Light | Dark | Tailwind |
|-------|-------|------|----------|
| `--background` | surface-white | surface-950 | `bg-background` |
| `--foreground` | surface-950 | surface-100 | `text-foreground` |
| `--card` | surface-white | surface-900 | `bg-card` |
| `--primary` | brand-atmos | brand-atmos | `bg-primary` |
| `--secondary` | surface-100 | surface-800 | `bg-secondary` |
| `--muted` | surface-200 | surface-800 | `bg-muted` |
| `--muted-foreground` | surface-600 | surface-500 | `text-muted-foreground` |
| `--accent` | surface-100 | surface-800 | `bg-accent` |
| `--destructive` | oklch red | oklch red | `bg-destructive` |
| `--border` | surface-300 | surface-700 | `border-border` |
| `--input` | surface-300 | surface-700 | `border-input` |
| `--ring` | surface-500 | surface-600 | `ring-ring` |

Charts usam brand colors (kobold, midori, sahara, boreal, carota no light; atmos, cloro, nubia, calla, carota no dark).

### Modo escuro

Ativado pela classe `.dark`. Variante Tailwind: `@custom-variant dark (&:is(.dark *))`.

## Espacamento

Scale padrao do Tailwind CSS (base 4px). Tokens do Figma cobertos nativamente:
0, 2, 4, 8, 12, 14, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 80, 88, 96, 112, 128, 160, 192 px.

## Border Radius

Escala absoluta do Figma (substitui a escala derivada anterior):

| Token | Valor | px | Tailwind |
|-------|-------|----|----------|
| `--radius-min` | 0.25rem | 4 | `rounded-min` |
| `--radius-xxs` | 0.375rem | 6 | `rounded-xxs` |
| `--radius-xs` | 0.5rem | 8 | `rounded-xs` |
| `--radius-sm` | 0.75rem | 12 | `rounded-sm` |
| `--radius-md` | 1rem | 16 | `rounded-md` |
| `--radius-lg` | 1.5rem | 24 | `rounded-lg` |
| `--radius-xl` | 2rem | 32 | `rounded-xl` |
| `--radius-2xl` | 3rem | 48 | `rounded-2xl` |
| `--radius-max` | 9999px | pill | `rounded-max` |

## Content width

`--content-width: 82rem` (1312px) — Figma breakpoint.width.

## Base layer

```css
* { @apply border-border outline-ring/50; }
body { @apply bg-background text-foreground font-body; }
h1 { @apply font-sans; }
.font-sans { text-transform: uppercase; letter-spacing: 0.05em; }
```

## Para alterar tokens

Use `/ds-manage update-tokens` — nunca edite `globals.css` diretamente sem passar pelo DesignOps.
