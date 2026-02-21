---
name: new-component
description: Cria um novo componente React com TypeScript e Tailwind seguindo o Design System do Vanguarda.
argument-hint: "<NomeDoComponente>"
context: fork
agent: frontend
---

Crie o componente **$ARGUMENTS** seguindo o Design System do projeto.

## Contexto

- Localizacao: `src/components/` (componentes de negocio, NAO primitivos do DS)
- Consulte o skill `ds-components` para saber quais primitivos estao disponiveis
- Consulte o skill `ds-foundations` para tokens e padroes visuais
- Se precisar de um primitivo que nao existe, informe o usuario para usar `/ds-manage add <componente>`
