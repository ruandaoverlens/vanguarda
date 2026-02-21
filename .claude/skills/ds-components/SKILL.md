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

> Nenhum componente instalado ainda. Use `/ds-manage add <componente>` para instalar.

<!-- LISTA_COMPONENTES_INICIO -->
| Componente | Arquivo | Instalado em |
|------------|---------|--------------|
<!-- LISTA_COMPONENTES_FIM -->

## Componentes disponiveis no shadcn/ui

Para instalar: `/ds-manage add <nome>`

Exemplos: accordion, alert, alert-dialog, avatar, badge, breadcrumb, button, calendar, card, carousel, chart, checkbox, collapsible, combobox, command, context-menu, data-table, date-picker, dialog, drawer, dropdown-menu, form, hover-card, input, input-otp, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, switch, table, tabs, textarea, toast, toggle, toggle-group, tooltip

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
