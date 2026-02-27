---
name: sb-setup
description: Instala e configura o Storybook 8.x para Next.js App Router + TypeScript + Tailwind CSS 4 + shadcn/ui.
context: fork
agent: storybook-expert
---

Configure o Storybook no projeto Vanguarda.

## O que fazer

1. Instale o Storybook 8.x com framework `@storybook/nextjs`
2. Configure `.storybook/main.ts` com addons essenciais, path aliases e TypeScript
3. Configure `.storybook/preview.ts` com decorators globais (globals.css, fontes, tokens, tema dark/light)
4. Instale addons: essentials, a11y, interactions, links, themes
5. Adicione scripts npm: `storybook` (dev) e `build-storybook` (static build)
6. Valide que o Storybook inicia sem erros

## Contexto

- Consulte o skill `ds-foundations` para tokens e padroes visuais
- Consulte o skill `ds-components` para primitivos instalados
- Fontes do projeto: Outfit (primary), Inter (body), JetBrains Mono (mono)
- Tokens em CSS variables (oklch) definidos em `src/app/globals.css`
