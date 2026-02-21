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

- **Sans:** Geist Sans via `next/font` (`--font-geist-sans`)
- **Mono:** Geist Mono via `next/font` (`--font-geist-mono`)
- Classes Tailwind: `font-sans`, `font-mono`

## Paleta de cores (tokens semanticos)

Todos os tokens usam formato **oklch()** e estao definidos em `globals.css`.

### Light mode (`:root`)

| Token | Uso | Tailwind class |
|-------|-----|----------------|
| `--background` | Fundo da pagina | `bg-background` |
| `--foreground` | Texto principal | `text-foreground` |
| `--card` | Fundo de cards | `bg-card` |
| `--card-foreground` | Texto em cards | `text-card-foreground` |
| `--popover` | Fundo de popovers | `bg-popover` |
| `--popover-foreground` | Texto em popovers | `text-popover-foreground` |
| `--primary` | Acoes principais | `bg-primary`, `text-primary` |
| `--primary-foreground` | Texto sobre primary | `text-primary-foreground` |
| `--secondary` | Acoes secundarias | `bg-secondary` |
| `--secondary-foreground` | Texto sobre secondary | `text-secondary-foreground` |
| `--muted` | Fundos sutis | `bg-muted` |
| `--muted-foreground` | Texto secundario | `text-muted-foreground` |
| `--accent` | Destaques | `bg-accent` |
| `--accent-foreground` | Texto sobre accent | `text-accent-foreground` |
| `--destructive` | Erros/remocao | `bg-destructive`, `text-destructive` |
| `--border` | Bordas | `border-border` |
| `--input` | Bordas de inputs | `border-input` |
| `--ring` | Focus rings | `ring-ring` |

### Charts
| Token | Tailwind class |
|-------|----------------|
| `--chart-1` a `--chart-5` | `bg-chart-1` a `bg-chart-5` |

### Sidebar
| Token | Tailwind class |
|-------|----------------|
| `--sidebar` | `bg-sidebar` |
| `--sidebar-foreground` | `text-sidebar-foreground` |
| `--sidebar-primary` | `bg-sidebar-primary` |
| `--sidebar-accent` | `bg-sidebar-accent` |
| `--sidebar-border` | `border-sidebar-border` |

### Modo escuro

Ativado pela classe `.dark` no elemento raiz. Todos os tokens acima possuem variantes dark definidas em `.dark {}` no `globals.css`.

Variante Tailwind: `@custom-variant dark (&:is(.dark *))` — use com `dark:bg-*`, `dark:text-*`.

## Espacamento

Scale padrao do Tailwind CSS (base 4px):
- `p-1` = 4px, `p-2` = 8px, `p-4` = 16px, `p-6` = 24px, `p-8` = 32px...
- Mesma logica para `m-`, `gap-`, `space-`

## Border Radius

Token base: `--radius: 0.625rem` (10px)

| Token | Valor | Tailwind class |
|-------|-------|----------------|
| `--radius-sm` | `calc(var(--radius) - 4px)` | `rounded-sm` |
| `--radius-md` | `calc(var(--radius) - 2px)` | `rounded-md` |
| `--radius-lg` | `var(--radius)` | `rounded-lg` |
| `--radius-xl` | `calc(var(--radius) + 4px)` | `rounded-xl` |
| `--radius-2xl` | `calc(var(--radius) + 8px)` | `rounded-2xl` |

## Base layer

```css
* { @apply border-border outline-ring/50; }
body { @apply bg-background text-foreground; }
```

## Para alterar tokens

Use `/ds-manage update-tokens` — nunca edite `globals.css` diretamente sem passar pelo DesignOps.
