---
name: sb-test
description: Adiciona interaction tests com play functions nas stories de um componente.
argument-hint: "<NomeDoComponente>"
context: fork
agent: storybook-expert
---

Adicione interaction tests para as stories do componente **$ARGUMENTS**.

## O que fazer

1. Leia as stories existentes do componente
2. Adicione `play` functions usando `@storybook/test` (expect, userEvent, within, fn)
3. Teste interacoes: clicks, typing, submit, hover, keyboard navigation
4. Teste mudancas de estado e renderizacao condicional
5. Use mock functions com `fn()` e verifique chamadas
6. Siga o padrao Arrange-Act-Assert

## Template

```typescript
import { expect, fn, userEvent, within } from '@storybook/test';

export const WithInteraction: Story = {
  args: {
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};
```

## Contexto

- Se o componente nao tem stories, crie-as primeiro (use `/sb-story <componente>`)
- Use CSF3 com TypeScript
