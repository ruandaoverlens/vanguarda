---
name: ds-components
description: Catalogo de componentes do Design System — lista de primitivos shadcn/ui instalados e regras de uso.
---

# Design System Components — Vanguarda

Catalogo vivo dos componentes do Design System. Atualizado pelo agent DesignOps.

## Localizacao

- **Primitivos (shadcn/ui):** `src/components/ui/`
- **Componentes de negocio:** `src/components/` (fora de `ui/`)

## Componentes instalados

<!-- LISTA_COMPONENTES_INICIO -->
| Componente | Arquivo | Instalado em |
|------------|---------|--------------|
| accordion | `src/components/ui/accordion.tsx` | 2026-02-27 |
| alert | `src/components/ui/alert.tsx` | 2026-02-27 |
| alert-dialog | `src/components/ui/alert-dialog.tsx` | 2026-02-27 |
| aspect-ratio | `src/components/ui/aspect-ratio.tsx` | 2026-02-27 |
| avatar | `src/components/ui/avatar.tsx` | 2026-02-27 |
| badge | `src/components/ui/badge.tsx` | 2026-02-27 |
| breadcrumb | `src/components/ui/breadcrumb.tsx` | 2026-02-27 |
| button | `src/components/ui/button.tsx` | 2026-02-27 |
| button-group | `src/components/ui/button-group.tsx` | 2026-02-27 |
| calendar | `src/components/ui/calendar.tsx` | 2026-02-27 |
| card | `src/components/ui/card.tsx` | 2026-02-27 |
| carousel | `src/components/ui/carousel.tsx` | 2026-02-27 |
| chart | `src/components/ui/chart.tsx` | 2026-02-27 |
| checkbox | `src/components/ui/checkbox.tsx` | 2026-02-27 |
| collapsible | `src/components/ui/collapsible.tsx` | 2026-02-27 |
| combobox | `src/components/ui/combobox.tsx` | 2026-02-27 |
| command | `src/components/ui/command.tsx` | 2026-02-27 |
| context-menu | `src/components/ui/context-menu.tsx` | 2026-02-27 |
| dialog | `src/components/ui/dialog.tsx` | 2026-02-27 |
| direction | `src/components/ui/direction.tsx` | 2026-02-27 |
| drawer | `src/components/ui/drawer.tsx` | 2026-02-27 |
| dropdown-menu | `src/components/ui/dropdown-menu.tsx` | 2026-02-27 |
| empty | `src/components/ui/empty.tsx` | 2026-02-27 |
| field | `src/components/ui/field.tsx` | 2026-02-27 |
| form | `src/components/ui/form.tsx` | 2026-02-27 |
| hover-card | `src/components/ui/hover-card.tsx` | 2026-02-27 |
| input | `src/components/ui/input.tsx` | 2026-02-27 |
| input-group | `src/components/ui/input-group.tsx` | 2026-02-27 |
| input-otp | `src/components/ui/input-otp.tsx` | 2026-02-27 |
| item | `src/components/ui/item.tsx` | 2026-02-27 |
| kbd | `src/components/ui/kbd.tsx` | 2026-02-27 |
| label | `src/components/ui/label.tsx` | 2026-02-27 |
| menubar | `src/components/ui/menubar.tsx` | 2026-02-27 |
| native-select | `src/components/ui/native-select.tsx` | 2026-02-27 |
| navigation-menu | `src/components/ui/navigation-menu.tsx` | 2026-02-27 |
| pagination | `src/components/ui/pagination.tsx` | 2026-02-27 |
| popover | `src/components/ui/popover.tsx` | 2026-02-27 |
| progress | `src/components/ui/progress.tsx` | 2026-02-27 |
| radio-group | `src/components/ui/radio-group.tsx` | 2026-02-27 |
| resizable | `src/components/ui/resizable.tsx` | 2026-02-27 |
| scroll-area | `src/components/ui/scroll-area.tsx` | 2026-02-27 |
| select | `src/components/ui/select.tsx` | 2026-02-27 |
| separator | `src/components/ui/separator.tsx` | 2026-02-27 |
| sheet | `src/components/ui/sheet.tsx` | 2026-02-27 |
| sidebar | `src/components/ui/sidebar.tsx` | 2026-02-27 |
| skeleton | `src/components/ui/skeleton.tsx` | 2026-02-27 |
| slider | `src/components/ui/slider.tsx` | 2026-02-27 |
| sonner | `src/components/ui/sonner.tsx` | 2026-02-27 |
| spinner | `src/components/ui/spinner.tsx` | 2026-02-27 |
| switch | `src/components/ui/switch.tsx` | 2026-02-27 |
| table | `src/components/ui/table.tsx` | 2026-02-27 |
| tabs | `src/components/ui/tabs.tsx` | 2026-02-27 |
| textarea | `src/components/ui/textarea.tsx` | 2026-02-27 |
| toggle | `src/components/ui/toggle.tsx` | 2026-02-27 |
| toggle-group | `src/components/ui/toggle-group.tsx` | 2026-02-27 |
| tooltip | `src/components/ui/tooltip.tsx` | 2026-02-27 |
<!-- LISTA_COMPONENTES_FIM -->

**Total: 56 componentes instalados** — catálogo completo do shadcn/ui (toast deprecated, substituido por sonner).

### Hook auxiliar

| Hook | Arquivo | Usado por |
|------|---------|-----------|
| use-mobile | `src/hooks/use-mobile.ts` | sidebar |

## Regras de uso

### Primitivos (`src/components/ui/`)
- **NAO edite** estes arquivos diretamente
- Composicao e customizacao via props e classes Tailwind
- Variantes via `cva` (class variance authority)
- Acessibilidade: Radix UI cuida dos `aria-*` — nao remova

### Componentes de negocio (`src/components/`)
- Componham primitivos do DS
- Named exports (`export function`, nao `export default`)
- Props tipadas com interface TypeScript
- Use `cn()` de `@/lib/utils` para merge condicional de classes

### Exemplo de composicao

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface UserCardProps {
  name: string;
  className?: string;
}

export function UserCard({ name, className }: UserCardProps) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="outline" size="sm">Ver perfil</Button>
      </CardContent>
    </Card>
  );
}
```

## Para adicionar componentes

Use `/ds-manage add <componente>` — o agent DesignOps instalara via CLI e atualizara este catalogo.
