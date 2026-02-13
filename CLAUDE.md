# CLAUDE.md — Contexto do projeto Vanguarda

Este arquivo serve como fonte de verdade para o Claude Code sobre o projeto.

## Sobre o projeto

Vanguarda e uma aplicacao web fullstack moderna em fase inicial (greenfield).

## Stack definida

- **Framework:** Next.js com App Router
- **Linguagem:** TypeScript
- **UI:** React
- **Estilizacao:** Tailwind CSS
- **Auth:** Supabase Auth
- **Banco de dados:** Supabase (PostgreSQL)
- **Storage:** Supabase Storage
- **Runtime:** Node.js v25.6.0 / npm 11.8.0

## Decisoes tecnicas tomadas

1. App Router (e nao Pages Router) — padrao moderno do Next.js
2. TypeScript — tipagem estatica para seguranca e DX
3. Tailwind CSS — estilizacao utilitaria
4. Supabase como BaaS unico (auth + db + storage) — simplifica infraestrutura

## Convencoes

- Documentar decisoes aqui antes de implementar
- Manter `TASKS.md` atualizado a cada etapa concluida
- Variaveis de ambiente sensiveis nunca no repositorio (usar `.env.local`)
- Commits em portugues ou ingles (a definir com o usuario)

## Handoff

**IMPORTANTE:** No inicio de cada conversa, leia `TASKS.md` para entender o estado atual do projeto — o que ja foi feito e qual e o proximo passo.
