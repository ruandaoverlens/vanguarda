---
name: new-page
description: Cria uma nova pagina no Next.js App Router seguindo o Design System do Vanguarda.
argument-hint: "<caminho-da-rota>"
context: fork
agent: frontend
---

Crie uma nova pagina para a rota **$ARGUMENTS** seguindo o Design System do projeto.

## Contexto

- Use Server Components por padrao
- Exporte `metadata` com titulo e descricao
- Consulte o skill `ds-components` para primitivos disponiveis
- Consulte o skill `ds-foundations` para tokens e padroes visuais
- Se precisar de um primitivo que nao existe, informe o usuario para usar `/ds-manage add <componente>`
