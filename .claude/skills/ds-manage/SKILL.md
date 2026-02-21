---
name: ds-manage
description: Gerencia o Design System — instala componentes shadcn, atualiza tokens e audita compliance.
argument-hint: "<acao> [detalhes]"
context: fork
agent: designops
---

Tarefa de governanca do Design System: **$ARGUMENTS**

## Acoes disponiveis

- `add <componente>` — Instala um componente shadcn/ui (ex: `add button`, `add card dialog`)
- `audit` — Audita compliance do DS no projeto (cores hardcoded, componentes nao catalogados, etc.)
- `update-tokens` — Atualiza tokens no globals.css
- `list` — Lista componentes instalados
- `remove <componente>` — Remove um componente do DS

## Exemplos de uso

- `/ds-manage add button` — instala o componente Button do shadcn
- `/ds-manage add card dialog` — instala Card e Dialog
- `/ds-manage audit` — verifica compliance do DS
- `/ds-manage update-tokens` — atualiza tokens no globals.css
- `/ds-manage list` — lista componentes instalados
