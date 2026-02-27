---
name: sb-docs
description: Cria paginas de documentacao MDX no Storybook para componentes ou guias do Design System.
argument-hint: "<topico>"
context: fork
agent: storybook-expert
---

Crie documentacao no Storybook para: **$ARGUMENTS**

## O que fazer

1. Crie paginas MDX com documentacao detalhada do topico solicitado
2. Use blocos interativos: `<Canvas>`, `<Story>`, `<Controls>`, `<ArgTypes>`
3. Documente: API do componente (props), guidelines de uso, do's/don'ts
4. Para tokens do DS, mostre brand colors, tipografia, espacamento e radius visualmente
5. Garanta que autodocs esta habilitado nos componentes relacionados

## Exemplos de uso

- `/sb-docs Button` — documenta o componente Button com props, variantes e exemplos
- `/sb-docs design-tokens` — cria pagina visual dos tokens do Design System
- `/sb-docs getting-started` — cria pagina de introducao da biblioteca de componentes
- `/sb-docs colors` — documenta a paleta de cores (surface + brand)

## Contexto

- Consulte `ds-foundations` para tokens e `ds-components` para catalogo
- Use MDX format compativel com Storybook 8.x
