# TASKS.md — Roadmap do Projeto Vanguarda

Arquivo de controle de tarefas. Consultar sempre no inicio de cada sessao.

**Legenda:** `[ ]` pendente | `[x]` concluido | `[-]` cancelado

---

## Fase 0 — Documentacao e planejamento

- [x] Definir stack (Next.js, TypeScript, Tailwind, Supabase)
- [x] Criar README.md
- [x] Criar CLAUDE.md (contexto para o Claude Code)
- [x] Criar .env.example e .env (template de variaveis)
- [x] Criar TASKS.md (este arquivo)
- [x] Criar .gitignore adequado ao projeto

## Fase 1 — Setup do projeto

- [x] Inicializar Next.js com create-next-app (App Router, TypeScript, Tailwind)
- [x] Instalar e configurar Supabase SDK (@supabase/supabase-js, @supabase/ssr)
- [x] Criar Supabase client (src/lib/supabase/client.ts, server.ts, middleware.ts)
- [x] Criar middleware de sessao (src/middleware.ts)
- [x] Configurar variaveis de ambiente (.env.local com credenciais reais)
- [x] Validar build do projeto (next build OK)

## Fase 2 — Autenticacao (Supabase Auth)

- [ ] Configurar provider de autenticacao no Supabase
- [ ] Implementar pagina de login/cadastro
- [ ] Implementar logout
- [ ] Proteger rotas autenticadas (middleware)
- [ ] Testar fluxo completo de auth

## Fase 3 — Banco de dados

- [ ] Modelar schema inicial no Supabase
- [ ] Criar tabelas e relacoes
- [ ] Configurar Row Level Security (RLS)
- [ ] Criar queries/funcoes de acesso aos dados

## Fase 4 — Storage

- [ ] Configurar bucket no Supabase Storage
- [ ] Implementar upload de arquivos
- [ ] Implementar listagem/download de arquivos
- [ ] Configurar politicas de acesso ao storage

## Fase 5 — UI e paginas

- [ ] Definir layout base (header, sidebar, footer)
- [ ] Criar paginas principais
- [ ] Implementar navegacao
- [ ] Responsividade

## Fase 6 — Deploy

- [ ] Configurar projeto na Vercel
- [ ] Configurar variaveis de ambiente em producao
- [ ] Primeiro deploy
- [ ] Configurar dominio (opcional)

---

## Notas tecnicas

- Next.js 16 deprecou `middleware` em favor de `proxy`. Migrar quando necessario.
- Supabase client separado em 3 arquivos: browser (client.ts), server (server.ts), middleware (middleware.ts)

> Ultima atualizacao: 2026-02-13 — Fase 1 completa. Projeto Supabase criado (sa-east-1, ID: pppoerbszfgahlcercyt)
