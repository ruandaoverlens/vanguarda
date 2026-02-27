---
name: sb-a11y
description: Audita acessibilidade de um componente ou de todo o Storybook usando addon-a11y.
argument-hint: "<NomeDoComponente | all>"
context: fork
agent: storybook-expert
---

Audite a acessibilidade de: **$ARGUMENTS**

## O que fazer

1. Verifique se `@storybook/addon-a11y` esta configurado
2. Analise o componente para problemas de acessibilidade (labels, contraste, ARIA, keyboard nav)
3. Adicione/atualize stories que exponham issues de a11y
4. Configure parametros `a11y` nas stories para regras customizadas se necessario
5. Garanta que elementos interativos tem stories de keyboard navigation
6. Reporte violacoes encontradas com nivel de severidade

## Exemplos de uso

- `/sb-a11y Button` — audita acessibilidade do componente Button
- `/sb-a11y LoginForm` — audita formulario de login (labels, focus, keyboard)
- `/sb-a11y all` — audita todos os componentes com stories

## Contexto

- Siga WCAG 2.1 AA como baseline
- Verifique: roles, labels, contraste, focus management, keyboard navigation
