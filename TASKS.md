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

- [x] Configurar provider de autenticacao no Supabase (email/password — habilitado por padrao)
- [x] Implementar pagina de login/cadastro (`src/app/login/page.tsx`, `src/app/signup/page.tsx`)
- [x] Implementar logout (Server Action em `src/app/auth/actions.ts`)
- [x] Proteger rotas autenticadas (`src/middleware.ts` — protege `/dashboard*`)
- [x] Callback de confirmacao de email (`src/app/auth/callback/route.ts`)
- [x] Pagina placeholder dashboard (`src/app/dashboard/page.tsx`)
- [x] Componentes shadcn/ui instalados (button, card, input, label, separator)
- [x] Validar build (next build OK)
- [ ] Testar fluxo completo de auth (login, signup, logout, protecao de rotas)

## Fase 3 — Banco de dados

- [x] Modelar schema inicial no Supabase (tabela `profiles`)
- [x] Criar tabelas e relacoes (migration `create_profiles_table_with_rls`)
- [x] Configurar Row Level Security (RLS) — 3 policies: SELECT, UPDATE, INSERT por `auth.uid()`
- [x] Triggers: `on_auth_user_created` (SECURITY DEFINER) + `on_profiles_updated` (updated_at)
- [x] Gerar TypeScript types (`src/lib/supabase/database.types.ts`)
- [x] Tipar clients Supabase com `Database` generic
- [x] Criar queries/funcoes de acesso aos dados (`src/lib/supabase/queries/profiles.ts`)

## Fase 4 — Storage

- [x] Configurar bucket no Supabase Storage (migration `create_avatars_bucket_and_policies`)
- [x] Bucket `avatars`: publico, 2MB limit, image/jpeg|png|webp|gif
- [x] Configurar politicas de acesso ao storage — 4 policies por `auth.uid()` (INSERT, UPDATE, DELETE, SELECT)
- [x] Implementar upload de arquivos (`src/lib/supabase/storage.ts`)
- [x] Implementar listagem/download de arquivos (`listUserFiles`, `getAvatarPublicUrl`)
- [x] Server action para upload de avatar (`src/app/dashboard/actions.ts`)


## Fase 5 — UI e Design System

- [x] Instalar todos os componentes shadcn/ui (56 componentes — catalogo completo)
- [x] Atualizar `globals.css` com nova paleta de cores/tokens
- [x] Instalar e configurar Storybook para gerenciamento de componentes
- [x] Documentar arquitetura e stack do projeto (`docs/ARCHITECTURE.md`)
- [x] Documentar Design System completo (`docs/DESIGN-SYSTEM.md`)

## Fase 6 — Deploy

- [ ] Configurar projeto na Vercel
- [ ] Configurar variaveis de ambiente em producao
- [ ] Primeiro deploy
- [ ] Configurar dominio (opcional)

## Fase 7 — Workflow de Planejamento (Agentes)

> Documentacao do workflow: `docs/WORKFLOW-PLANNING.md`

- [x] Documentar workflow de planejamento (`docs/WORKFLOW-PLANNING.md`)
- [x] Criar agente **Briefing** (`briefing`)
  - Agente: `.claude/agents/briefing.md`
  - Skill: `.claude/skills/briefing/SKILL.md` (comando `/briefing`)
  - Conhecimento: stack do projeto, gestao de projetos, UX discovery
  - Responsabilidade: conduzir entrevista guiada e gerar `docs/BRIEFING.md`
  - Deve verificar se briefing ja existe antes de iniciar
- [x] Criar agente **Product Manager** (`pm`)
  - Agente: `.claude/agents/pm.md`
  - Skills: `/prd`, `/prd-review`, `/prd-epic`
  - Conhecimento: product management, PRD writing, priorizacao MoSCoW
  - Responsabilidade: ler briefing e gerar `docs/PRD.md` com epicos e criterios de aceitacao
  - Tambem responsavel por definir epicos e participar do quality gate
- [x] Criar agente **Scrum Master** (`sm`)
  - Agente: `.claude/agents/sm.md`
  - Skill: `.claude/skills/backlog/SKILL.md` (comando `/backlog`)
  - Conhecimento: Agile/Scrum, decomposicao de requisitos, estimativas, INVEST, DoD
  - Responsabilidade: decompor PRD em stories e tasks, gerar `docs/BACKLOG.md`
  - Formato de stories: "Como [persona], quero [acao] para [beneficio]"
- [x] Criar agente **QA** (`qa`) — escopo estendido: Planning QA Gate + Development QA
  - Agente: `.claude/agents/qa.md`
  - Skills: `/qa`, `/qa-gate`, `/qa-test`, `/qa-a11y`, `/qa-perf`, `/qa-security`, `/qa-audit`
  - Memoria persistente: `.claude/agent-memory/qa/`
  - Planning: valida BRIEFING.md, PRD.md, BACKLOG.md contra checklists
  - Development: testes (Vitest/Playwright), a11y (WCAG 2.1 AA), performance (CWV), seguranca (6 areas)
  - Nota: escopo expandido alem do QA Gate original — cobre todo o ciclo de qualidade
- [x] Integrar `BACKLOG.md` como fonte de verdade no `CLAUDE.md`
- [x] Documentar workflow de desenvolvimento (`docs/WORKFLOW-DEVELOPMENT.md`)

---

## Notas tecnicas

- Next.js 16 deprecou `middleware` em favor de `proxy`. Migrar quando necessario.
- Supabase client separado em 3 arquivos: browser (client.ts), server (server.ts), middleware (middleware.ts)

> Ultima atualizacao: 2026-02-27 — Fase 7 concluida. Agente Briefing (antes Analyst) renomeado para consistencia com o sistema.
