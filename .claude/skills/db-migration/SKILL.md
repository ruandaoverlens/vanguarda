---
name: db-migration
description: Cria e aplica uma migration no Supabase para o projeto Vanguarda. Use para criar tabelas, alterar schema ou configurar RLS.
argument-hint: "<descricao-da-migration>"
context: fork
agent: devops
---
Crie e aplique uma migration no Supabase para: **$ARGUMENTS**

Siga o fluxo: montar SQL → mostrar ao usuario → aprovar → aplicar via `apply_migration` → validar com `list_tables` e `get_advisors` (security).
