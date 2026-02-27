---
name: sb-story
description: Cria stories CSF3 para um componente seguindo as convencoes do Storybook do Vanguarda.
argument-hint: "<NomeDoComponente>"
context: fork
agent: storybook-expert
---

Crie stories para o componente **$ARGUMENTS** seguindo CSF3 e as convencoes do projeto.

## O que fazer

1. Leia o codigo-fonte do componente para entender props, variantes e estados
2. Crie o arquivo `.stories.tsx` co-localizado com o componente
3. Defina o `meta` com title (hierarquia por dominio), component, `tags: ['autodocs']`, argTypes e parameters
4. Escreva stories: Default, variantes (sizes, colors, states), composicoes e dark mode
5. Adicione interaction tests com `play` functions para elementos interativos
6. Verifique o QA checklist do agent

## Hierarquia de titles

```
Primitives/Button          # src/components/ui/button.tsx
Dashboard/StatsCard        # src/components/dashboard/stats-card.tsx
Auth/LoginForm             # src/components/auth/login-form.tsx
Shared/PageHeader          # src/components/shared/page-header.tsx
```

## Contexto

- Consulte `ds-foundations` para tokens e `ds-components` para primitivos disponiveis
- Use CSF3 com TypeScript (`Meta<typeof Component>`, `StoryObj<typeof meta>`, `satisfies`)
- Nunca modifique arquivos em `src/components/ui/`
