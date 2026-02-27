# Workflow de Desenvolvimento — Projeto Vanguarda

> Documento que descreve o processo de desenvolvimento do projeto, do backlog ao deploy.
> Complementa o `WORKFLOW-PLANNING.md` (que cobre da ideia ao backlog).

---

## Visao Geral

O workflow de desenvolvimento transforma stories do `BACKLOG.md` em codigo funcional, testado e deployado. E composto por **6 fases**, executadas por agentes especializados com separacao clara de responsabilidades.

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1e293b', 'primaryTextColor': '#f8fafc', 'primaryBorderColor': '#475569', 'lineColor': '#94a3b8', 'secondaryColor': '#0f172a', 'tertiaryColor': '#334155', 'background': '#020617', 'mainBkg': '#1e293b', 'nodeBorder': '#475569', 'clusterBkg': '#0f172a', 'clusterBorder': '#334155', 'titleColor': '#f8fafc', 'edgeLabelBackground': '#1e293b'}}}%%

flowchart TD
    START([BACKLOG.md aprovado]) --> PICK

    PICK[Selecionar story da sprint] --> CHECK{Precisa de\ninfra/schema?}

    CHECK -->|Sim| INFRA
    CHECK -->|Nao| UI

    subgraph INFRA [" 1. Infraestrutura "]
        direction TB
        DEV1[DevOps Agent]
        DEV1 --> MIG[Migration Supabase]
        DEV1 --> RLS[Configurar RLS]
        DEV1 --> TYPES[Gerar TypeScript types]
    end

    subgraph DS [" 2. Design System "]
        direction TB
        DSA[DesignOps Agent]
        DSA --> TOKEN[Tokens / Variaveis]
        DSA --> PRIM[Instalar primitivos]
    end

    subgraph UI [" 3. UI & Logica "]
        direction TB
        FE[Frontend Agent]
        FE --> COMP[Componentes de negocio]
        FE --> PAGE[Paginas e layouts]
        FE --> HOOK[Hooks e integracao]
    end

    subgraph SB [" 4. Documentacao "]
        direction TB
        SBE[Storybook Expert]
        SBE --> STORY[Stories CSF3]
        SBE --> DOCS[Docs MDX]
        SBE --> ITEST[Interaction tests]
    end

    subgraph QA [" 5. Qualidade "]
        direction TB
        QAA[QA Agent]
        QAA --> TEST[Testes unit/integ/E2E]
        QAA --> A11Y[Acessibilidade WCAG]
        QAA --> PERF[Performance CWV]
        QAA --> SEC[Seguranca]
    end

    subgraph REVIEW [" 6. Review & Deploy "]
        direction TB
        REV[Code review]
        REV --> COMMIT[Commit]
        COMMIT --> DEPLOY[Deploy Vercel]
    end

    INFRA --> DS
    DS --> UI
    UI --> SB
    SB --> QA
    QA --> REVIEW

    REVIEW --> DONE([Story concluida])
    DONE --> PICK

    style INFRA fill:#1e3a5f,stroke:#3b82f6,stroke-width:2px,color:#e0f2fe
    style DS fill:#3b1f5e,stroke:#8b5cf6,stroke-width:2px,color:#ede9fe
    style UI fill:#1a3c34,stroke:#10b981,stroke-width:2px,color:#d1fae5
    style SB fill:#2d3748,stroke:#a78bfa,stroke-width:2px,color:#e9d5ff
    style QA fill:#5c3a1e,stroke:#f59e0b,stroke-width:2px,color:#fef3c7
    style REVIEW fill:#1c1917,stroke:#94a3b8,stroke-width:2px,color:#f8fafc
    style START fill:#0f172a,stroke:#94a3b8,color:#f8fafc
    style DONE fill:#064e3b,stroke:#10b981,color:#d1fae5
```

---

## Mapa de Agentes de Desenvolvimento

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1e293b', 'primaryTextColor': '#f8fafc', 'lineColor': '#94a3b8', 'secondaryColor': '#0f172a'}}}%%

block-beta
    columns 5

    block:infra:1
        columns 1
        A["DevOps Agent"]
        A1["DB, Deploy, Seguranca"]
    end

    block:ds:1
        columns 1
        B["DesignOps Agent"]
        B1["Tokens & Primitivos"]
    end

    block:ui:1
        columns 1
        C["Frontend Agent"]
        C1["Componentes & Paginas"]
    end

    block:sb:1
        columns 1
        D["Storybook Expert"]
        D1["Stories & Docs"]
    end

    block:qa:1
        columns 1
        E["QA Agent"]
        E1["Testes & Auditorias"]
    end

    style infra fill:#1e3a5f,stroke:#3b82f6,stroke-width:2px,color:#e0f2fe
    style ds fill:#3b1f5e,stroke:#8b5cf6,stroke-width:2px,color:#ede9fe
    style ui fill:#1a3c34,stroke:#10b981,stroke-width:2px,color:#d1fae5
    style sb fill:#2d3748,stroke:#a78bfa,stroke-width:2px,color:#e9d5ff
    style qa fill:#5c3a1e,stroke:#f59e0b,stroke-width:2px,color:#fef3c7
```

| Agente | Slug | Escopo | Nunca faz |
|--------|------|--------|-----------|
| **DevOps** | `devops` | Migrations, RLS, deploy, seguranca, performance | DROP/TRUNCATE sem confirmacao |
| **DesignOps** | `designops` | Tokens CSS, instalar primitivos shadcn, compliance DS | Criar componentes de negocio |
| **Frontend** | `frontend` | Componentes de negocio, paginas, layouts, hooks | Editar `ui/` ou tokens |
| **Storybook Expert** | `storybook-expert` | Stories CSF3, docs MDX, interaction tests, a11y | Editar `ui/` ou logica de negocio |
| **QA** | `qa` | Testes, acessibilidade, performance, seguranca | Aprovar gates sem evidencias |

---

## Fase 1 — Infraestrutura (DevOps Agent)

### Quando executar

Apenas quando a story requer alteracoes no banco de dados, storage, ou configuracoes de deploy.

### Fluxo

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1e293b', 'primaryTextColor': '#f8fafc', 'lineColor': '#3b82f6'}}}%%

sequenceDiagram
    participant DEV as DevOps Agent
    participant SB as Supabase
    participant FS as File System

    DEV->>SB: apply_migration (DDL)
    DEV->>SB: Configurar RLS policies
    DEV->>SB: get_advisors (security + performance)
    DEV->>SB: generate_typescript_types
    DEV->>FS: Atualizar database.types.ts
    DEV->>FS: Criar/atualizar queries em src/lib/supabase/queries/
```

### Comando principal

```
/db-migration <descricao-da-migration>
```

### Regras

- Sempre usar `apply_migration` para DDL (nunca `execute_sql`)
- Sempre configurar RLS em novas tabelas
- Sempre checar advisors (seguranca + performance) apos mudancas de schema
- Nunca expor credenciais ou secrets
- Gerar TypeScript types apos cada migration

---

## Fase 2 — Design System (DesignOps Agent)

### Quando executar

Quando a story necessita de novos primitivos UI ou ajustes em tokens.

### Fluxo

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1e293b', 'primaryTextColor': '#f8fafc', 'lineColor': '#8b5cf6'}}}%%

sequenceDiagram
    participant DSA as DesignOps Agent
    participant CLI as shadcn CLI
    participant FS as File System

    DSA->>CLI: npx shadcn@latest add <componente>
    CLI->>FS: Instala em src/components/ui/
    DSA->>FS: Atualiza ds-components (catalogo)
    DSA->>FS: Atualiza globals.css (se tokens novos)
    DSA->>FS: Atualiza ds-foundations (se tokens novos)
```

### Comandos principais

```
/ds-manage add <componente>      # Instalar primitivo shadcn
/ds-manage audit                 # Auditar compliance do DS
/ds-manage update-tokens         # Atualizar tokens
```

### Regras

- Primitivos instalados **apenas** via CLI shadcn (nunca manualmente)
- Tokens vivem exclusivamente em `src/app/globals.css`
- Documentar alteracoes nas skills `ds-foundations` e `ds-components`
- Frontend **nunca** edita `src/components/ui/` — solicita via `/ds-manage`

---

## Fase 3 — UI e Logica (Frontend Agent)

### Quando executar

Sempre — toda story que envolve interface passa por esta fase.

### Fluxo

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1e293b', 'primaryTextColor': '#f8fafc', 'lineColor': '#10b981'}}}%%

sequenceDiagram
    participant FE as Frontend Agent
    participant DS as ds-foundations / ds-components
    participant FS as File System

    FE->>DS: Consultar tokens e componentes disponiveis
    FE->>FS: Criar componente de negocio
    Note right of FE: src/components/<dominio>/<Nome>.tsx
    FE->>FS: Criar pagina (se necessario)
    Note right of FE: src/app/<rota>/page.tsx
    FE->>FS: Criar hooks (se necessario)
    Note right of FE: src/hooks/use-<nome>.ts
```

### Comandos principais

```
/new-component <NomeComponente>  # Criar componente de negocio
/new-page <rota>                 # Criar pagina Next.js
```

### Regras

- **Server Components** como padrao (`"use client"` apenas com interatividade)
- Named exports, TypeScript strict, apenas Tailwind para estilos
- Sempre exportar `metadata` em paginas
- Usar `getUser()` (nunca `getSession()`) para verificar autenticacao
- Componentes de negocio em `src/components/<dominio>/`
- Consultar `ds-foundations` e `ds-components` antes de criar UI

### Estrutura de componentes

```
src/components/
├── ui/                    # Primitivos shadcn (GOVERNANCA — nao editar)
├── dashboard/             # Componentes do dominio dashboard
├── auth/                  # Componentes do dominio auth
├── shared/                # Componentes reutilizaveis entre dominios
└── <novo-dominio>/        # Conforme necessidade da story
```

---

## Fase 4 — Documentacao (Storybook Expert)

### Quando executar

Apos criar ou modificar componentes — toda UI publica deve ter stories.

### Fluxo

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1e293b', 'primaryTextColor': '#f8fafc', 'lineColor': '#a78bfa'}}}%%

sequenceDiagram
    participant SBE as Storybook Expert
    participant FS as File System

    SBE->>FS: Criar story CSF3
    Note right of SBE: <Componente>.stories.tsx (co-locado)
    SBE->>FS: Adicionar interaction tests (play functions)
    SBE->>FS: Criar docs MDX (se componente complexo)
    SBE->>SBE: Validar a11y via addon-a11y
```

### Comandos principais

```
/sb-story <NomeComponente>       # Criar stories CSF3
/sb-test <NomeComponente>        # Adicionar interaction tests
/sb-docs <NomeComponente>        # Criar documentacao MDX
/sb-a11y <NomeComponente>        # Auditar acessibilidade no Storybook
/sb-audit                        # Auditar cobertura de stories
```

### Regras

- Sempre CSF3 (nunca CSF2)
- Story co-locada ao lado do componente: `<Nome>.stories.tsx`
- Sempre incluir `tags: ['autodocs']` e `satisfies Meta<typeof Component>`
- Layout: `'centered'` para componentes pequenos, `'padded'` para maiores
- Nunca modificar `src/components/ui/`

---

## Fase 5 — Qualidade (QA Agent)

### Quando executar

Antes de commitar — toda mudanca significativa deve passar por QA.

### Fluxo

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1e293b', 'primaryTextColor': '#f8fafc', 'lineColor': '#f59e0b'}}}%%

sequenceDiagram
    participant QA as QA Agent
    participant FS as File System
    participant BR as Browser/Runtime

    QA->>FS: Rodar testes unitarios (Vitest)
    QA->>FS: Rodar testes de integracao (RTL)
    QA->>BR: Rodar testes E2E (Playwright)
    QA->>BR: Auditar acessibilidade (axe-core, WCAG 2.1 AA)
    QA->>BR: Auditar performance (Core Web Vitals)
    QA->>FS: Auditar seguranca (npm audit, RLS, headers)
    QA->>QA: Gerar relatorio com evidencias
```

### Comandos principais

```
/qa-test all                     # Rodar todos os testes
/qa-test coverage                # Verificar cobertura de codigo
/qa-a11y <pagina>                # Auditar acessibilidade
/qa-perf <pagina>                # Auditar Core Web Vitals
/qa-security                     # Auditar seguranca
/qa-audit                        # Auditoria completa (tudo acima)
```

### Piramide de testes (Testing Trophy)

```
Prioridade: Integration > Unit > E2E > Static
```

| Tipo | Ferramenta | Cobertura alvo |
|------|-----------|----------------|
| Unit | Vitest | 80% global / 90% critico |
| Integration | React Testing Library | 80% global / 90% critico |
| E2E | Playwright | Fluxos criticos |
| A11y | axe-core | WCAG 2.1 AA |
| Performance | Lighthouse CI | LCP < 2.5s, CLS < 0.1, INP < 200ms |

### Severidades

Cada issue recebe uma severidade: **critical**, **alto**, **medium**, **low**. O QA sempre sugere correcoes concretas.

---

## Fase 6 — Review e Deploy

### Code Review

```
/review                          # Review antes de commit
```

O review verifica: TypeScript, React patterns, Tailwind, Supabase, seguranca e convencoes do projeto.

### Deploy

O DevOps Agent gerencia deploys via Vercel MCP:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1e293b', 'primaryTextColor': '#f8fafc', 'lineColor': '#94a3b8'}}}%%

flowchart LR
    COMMIT[Commit] --> PUSH[Push to branch]
    PUSH --> PREVIEW[Preview Deploy]
    PREVIEW --> VALIDATE[Validar preview]
    VALIDATE -->|OK| MERGE[Merge to main]
    MERGE --> PROD[Production Deploy]

    style COMMIT fill:#1e293b,stroke:#475569,color:#f8fafc
    style PUSH fill:#1e293b,stroke:#475569,color:#f8fafc
    style PREVIEW fill:#1e3a5f,stroke:#3b82f6,color:#e0f2fe
    style VALIDATE fill:#5c3a1e,stroke:#f59e0b,color:#fef3c7
    style MERGE fill:#1a3c34,stroke:#10b981,color:#d1fae5
    style PROD fill:#064e3b,stroke:#10b981,color:#d1fae5
```

---

## Separacao de Responsabilidades

### Quem faz o que

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1e293b', 'primaryTextColor': '#f8fafc', 'lineColor': '#94a3b8'}}}%%

graph TD
    subgraph GOVERNANCA [" Governanca "]
        DSA2[DesignOps]
        DSA2 --> G1[globals.css tokens]
        DSA2 --> G2[src/components/ui/]
        DSA2 --> G3[ds-foundations skill]
        DSA2 --> G4[ds-components skill]
    end

    subgraph CRIACAO [" Criacao "]
        FE2[Frontend]
        FE2 --> C1["src/components/&lt;dominio&gt;/"]
        FE2 --> C2["src/app/**/page.tsx"]
        FE2 --> C3["src/app/**/layout.tsx"]
        FE2 --> C4[src/hooks/]
    end

    subgraph INFRA2 [" Infraestrutura "]
        DEV2[DevOps]
        DEV2 --> I1[Supabase migrations]
        DEV2 --> I2[RLS policies]
        DEV2 --> I3[Vercel deploy]
        DEV2 --> I4[database.types.ts]
    end

    subgraph DOC [" Documentacao "]
        SBE2[Storybook Expert]
        SBE2 --> D1[*.stories.tsx]
        SBE2 --> D2[*.mdx docs]
        SBE2 --> D3[Interaction tests]
    end

    subgraph QUAL [" Qualidade "]
        QA2[QA Agent]
        QA2 --> Q1[Testes]
        QA2 --> Q2[A11y audit]
        QA2 --> Q3[Performance audit]
        QA2 --> Q4[Security audit]
    end

    style GOVERNANCA fill:#3b1f5e,stroke:#8b5cf6,stroke-width:2px,color:#ede9fe
    style CRIACAO fill:#1a3c34,stroke:#10b981,stroke-width:2px,color:#d1fae5
    style INFRA2 fill:#1e3a5f,stroke:#3b82f6,stroke-width:2px,color:#e0f2fe
    style DOC fill:#2d3748,stroke:#a78bfa,stroke-width:2px,color:#e9d5ff
    style QUAL fill:#5c3a1e,stroke:#f59e0b,stroke-width:2px,color:#fef3c7
```

### Fronteiras criticas

| Fronteira | Regra |
|-----------|-------|
| Frontend → DesignOps | Frontend **nunca** edita `src/components/ui/` nem tokens. Usa `/ds-manage`. |
| DevOps → Producao | **Nunca** DROP/TRUNCATE sem confirmacao explicita do usuario. |
| QA → Aprovacao | **Nunca** aprova sem evidencias (output de comandos, numeros, codigo). |
| Storybook → Logica | **Nunca** modifica logica de negocio. Apenas documenta e testa UI isolada. |

---

## Referencia Rapida de Comandos

### Desenvolvimento

| Comando | O que faz | Agente |
|---------|-----------|--------|
| `/new-component <Nome>` | Cria componente de negocio | Frontend |
| `/new-page <rota>` | Cria pagina Next.js | Frontend |
| `/db-migration <desc>` | Cria migration Supabase | DevOps |
| `/ds-manage add <comp>` | Instala primitivo shadcn | DesignOps |
| `/ds-manage audit` | Audita compliance do DS | DesignOps |
| `/auth-guard` | Adiciona protecao de autenticacao | DevOps |

### Documentacao

| Comando | O que faz | Agente |
|---------|-----------|--------|
| `/sb-story <Nome>` | Cria stories CSF3 | Storybook Expert |
| `/sb-test <Nome>` | Adiciona interaction tests | Storybook Expert |
| `/sb-docs <Nome>` | Cria docs MDX | Storybook Expert |
| `/sb-setup` | Instala Storybook 8.x | Storybook Expert |

### Qualidade

| Comando | O que faz | Agente |
|---------|-----------|--------|
| `/review` | Code review antes de commit | -- |
| `/qa-test all` | Roda todos os testes | QA |
| `/qa-a11y <page>` | Audita acessibilidade | QA |
| `/qa-perf <page>` | Audita performance | QA |
| `/qa-security` | Audita seguranca | QA |
| `/qa-audit` | Auditoria completa | QA |

### Gestao

| Comando | O que faz | Agente |
|---------|-----------|--------|
| `/status` | Estado atual do projeto | -- |
| `/progress` | Progresso do backlog | SM |
| `/sprint` | Planeja/reorganiza sprints | SM |
| `/refine` | Refina stories do backlog | SM |

---

## Exemplo: Desenvolvendo uma Story Completa

Supondo a story: *"Como usuario, quero editar meu perfil para atualizar minhas informacoes"*

```
1. Ler story no BACKLOG.md → entender criterios de aceitacao
2. /db-migration add-profile-fields        → DevOps cria migration se necessario
3. /ds-manage add dialog                   → DesignOps instala Dialog se nao existe
4. /new-component ProfileForm              → Frontend cria formulario
5. /new-page dashboard/profile             → Frontend cria pagina
6. /sb-story ProfileForm                   → Storybook documenta componente
7. /sb-test ProfileForm                    → Storybook adiciona interaction tests
8. /qa-test all                            → QA roda testes
9. /qa-a11y dashboard/profile              → QA verifica acessibilidade
10. /review                                → Code review final
11. Commit e deploy
12. Atualizar status no BACKLOG.md
```

---

## Relacao com o Workflow de Planejamento

Este workflow **comeca onde o planejamento termina**:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1e293b', 'primaryTextColor': '#f8fafc', 'lineColor': '#94a3b8'}}}%%

flowchart LR
    subgraph PLAN [" Planejamento "]
        direction LR
        B[Briefing] --> P[PRD] --> S[Backlog] --> G[QA Gate]
    end

    subgraph DEV [" Desenvolvimento "]
        direction LR
        I[Infra] --> D[DS] --> U[UI] --> SB2[Storybook] --> Q[QA] --> R[Deploy]
    end

    PLAN -->|BACKLOG.md aprovado| DEV

    style PLAN fill:#0f172a,stroke:#334155,stroke-width:2px,color:#f8fafc
    style DEV fill:#0f172a,stroke:#334155,stroke-width:2px,color:#f8fafc
```

- **Entrada:** `docs/BACKLOG.md` aprovado pelo QA Gate
- **Saida:** Feature funcional, testada e deployada
- **Feedback:** Se durante o desenvolvimento surgir necessidade de mudanca no escopo, o fluxo retorna ao planejamento (PM ou SM)

---

> Ultima atualizacao: 2026-02-27
