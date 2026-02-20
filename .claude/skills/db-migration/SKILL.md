---
name: db-migration
description: Cria e aplica uma migration no Supabase para o projeto Vanguarda. Use para criar tabelas, alterar schema ou configurar RLS.
argument-hint: "<descricao-da-migration>"
---

Crie uma migration no Supabase para: **$ARGUMENTS**

## Contexto do projeto

- Supabase project ID: `pppoerbszfgahlcercyt`
- Region: sa-east-1

## Regras

1. Sempre use a tool `apply_migration` do Supabase MCP para aplicar migrations — nunca SQL direto via `execute_sql` para DDL
2. Nomeie a migration em snake_case descritivo (ex: `create_users_table`, `add_avatar_to_profiles`)
3. Sempre ative **RLS** em tabelas novas: `ALTER TABLE <tabela> ENABLE ROW LEVEL SECURITY;`
4. Inclua policies basicas de RLS junto com a criacao da tabela
5. Use `uuid` como tipo de ID primario, com `gen_random_uuid()` como default
6. Inclua `created_at TIMESTAMPTZ DEFAULT now()` em toda tabela
7. Referencie `auth.users(id)` para foreign keys de usuario

## Fluxo

1. Entenda o que o usuario quer criar/alterar
2. Monte o SQL da migration
3. Mostre o SQL ao usuario para aprovacao ANTES de aplicar
4. Aplique via `apply_migration`
5. Verifique com `list_tables` se a tabela foi criada
6. Rode `get_advisors` (security) para checar se ha alertas
7. Atualize `TASKS.md` se a migration faz parte de uma tarefa do roadmap
