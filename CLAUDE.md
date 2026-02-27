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
5. shadcn/ui como Design System base (new-york style, Radix UI, Tailwind CSS 4)
6. Separacao governanca/criacao do DS via agents DesignOps e Frontend
7. Componentes de negocio organizados em subpastas tematicas por dominio

## Convencoes

- Documentar decisoes aqui antes de implementar
- Manter `TASKS.md` atualizado a cada etapa concluida
- Variaveis de ambiente sensiveis nunca no repositorio (usar `.env.local`)
- Commits em portugues ou ingles (a definir com o usuario)

## Performance Web

- Server Components como padrao (Client Components apenas com interatividade)
- `next/image` para imagens, `next/font` para fontes
- Minimizar bundle JS do client
- Queries Supabase com SELECT seletivo (nao `select('*')`)

### Core Web Vitals (alvos)

| Metrica | Alvo    |
|---------|---------|
| LCP     | < 2.5s  |
| CLS     | < 0.1   |
| INP     | < 200ms |

## Design System

### Arquitetura

O DS segue separacao de **governanca** (DesignOps) e **criacao** (Frontend):

```
GOVERNANCA (DesignOps)               CRIACAO (Frontend)
├── src/app/globals.css (tokens)     ├── src/components/<dominio>/*.tsx
├── src/components/ui/ (primitivos)  ├── src/app/**/page.tsx
├── ds-foundations (skill)           ├── src/app/**/layout.tsx
└── ds-components (skill)           └── Consome primitivos, nunca edita
```

### Stack do DS

- **Base:** shadcn/ui (new-york style) + Radix UI + Tailwind CSS 4
- **Tokens:** CSS variables em `globals.css` (hex + oklch para destructive)
- **Helper:** `cn()` em `src/lib/utils.ts` (clsx + tailwind-merge)
- **Fontes:** Outfit (display, uppercase) + Inter (body) + JetBrains Mono via next/font
- **Primary:** atmos (#77C5D5) — brand color principal
- **Icones:** lucide-react
- **Config:** `components.json` na raiz

### Estrutura de componentes

```
src/components/
├── ui/                    # Primitivos shadcn (GOVERNANCA — nao editar)
├── dashboard/             # Componentes do dominio dashboard
├── auth/                  # Componentes do dominio auth
├── shared/                # Componentes reutilizaveis entre dominios
└── ...                    # Novos dominios conforme necessidade
```

### Regras do DS

- Primitivos em `ui/` sao instalados via CLI (`npx shadcn@latest add`) — nunca editados manualmente
- Componentes de negocio ficam em subpastas tematicas por dominio
- Frontend nunca toca em `ui/` nem em tokens — usa `/ds-manage` para solicitar
- Tokens alterados apenas via DesignOps
- Skills `ds-foundations` e `ds-components` sao a documentacao viva do DS

### Comandos do DS

- `/ds-manage add <componente>` — instala primitivo shadcn via DesignOps
- `/ds-manage audit` — audita compliance do DS
- `/ds-manage update-tokens` — atualiza tokens
- `/new-component <Nome>` — cria componente de negocio via Frontend
- `/new-page <rota>` — cria pagina via Frontend

## Backlog — Fonte de verdade

O arquivo `docs/BACKLOG.md` e a **fonte de verdade** do projeto para desenvolvimento. Ele contem:

- **Epicos** (herdados do PRD) com status e prioridade
- **User Stories** no formato "Como [persona], quero [acao] para [beneficio]"
- **Tasks tecnicas** granulares por story, com estimativas em story points
- **Dependencias** entre stories
- **Sprints** organizadas com status de progresso

### Hierarquia de documentos

```
docs/BRIEFING.md   → Visao e requisitos brutos (input do PM)
docs/PRD.md        → Requisitos estruturados e epicos (input do SM)
docs/BACKLOG.md    → Stories e tasks prontas para execucao (FONTE DE VERDADE)
TASKS.md           → Tracking rapido de fases e marcos do projeto
```

### Regras de uso

1. **Inicio de sessao:** leia `docs/BACKLOG.md` para saber o que desenvolver a seguir
2. **Consulte `TASKS.md`** para contexto de fases e marcos ja concluidos
3. **Ao concluir uma story/task:** atualize o status no `BACKLOG.md` (e `TASKS.md` se relevante)
4. **Se o BACKLOG.md nao existir:** o workflow de planejamento ainda nao foi executado — use `/briefing` → `/prd` → `/backlog` → `/qa-gate`

### Workflows documentados

- **Planejamento:** `docs/WORKFLOW-PLANNING.md` — da ideia ao backlog
- **Desenvolvimento:** `docs/WORKFLOW-DEVELOPMENT.md` — do backlog ao deploy
