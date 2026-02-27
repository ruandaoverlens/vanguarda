# Workflow de Planejamento — Projeto Vanguarda

> Documento que descreve o processo de planejamento e preparação de projetos antes do desenvolvimento.
> Este workflow transforma uma ideia bruta em um backlog estruturado e pronto para execução.

---

## Visão Geral

O workflow de planejamento é composto por **4 fases sequenciais** + **1 quality gate**, executadas por agentes especializados. Cada fase produz um artefato que alimenta a próxima, garantindo rastreabilidade e qualidade.

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1e293b', 'primaryTextColor': '#f8fafc', 'primaryBorderColor': '#475569', 'lineColor': '#94a3b8', 'secondaryColor': '#0f172a', 'tertiaryColor': '#334155', 'background': '#020617', 'mainBkg': '#1e293b', 'nodeBorder': '#475569', 'clusterBkg': '#0f172a', 'clusterBorder': '#334155', 'titleColor': '#f8fafc', 'edgeLabelBackground': '#1e293b'}}}%%

flowchart TD
    START([🎯 Nova ideia de projeto]) --> CHECK{Briefing\nexiste?}

    CHECK -->|Não| PHASE1
    CHECK -->|Sim| PHASE2

    subgraph PHASE1 [" 📋 FASE 1 — Discovery "]
        direction TB
        BA[Briefing Agent]
        BA -->|Perguntas guiadas| USER((Usuário))
        USER -->|Respostas| BA
        BA --> BRIEF[📄 BRIEFING.md]
    end

    subgraph PHASE2 [" 📐 FASE 2 — Definição "]
        direction TB
        PM1[Product Manager Agent]
        PM1 --> PRD[📄 PRD.md]
    end

    subgraph PHASE3 [" 🔨 FASE 3 — Decomposição "]
        direction TB
        SM[Scrum Master Agent]
        SM --> BACKLOG[📄 BACKLOG.md]
    end

    subgraph GATE [" ✅ QUALITY GATE "]
        direction TB
        QA[QA / PM Review]
        QA -->|Aprovado| OK([✓ Pronto para dev])
        QA -->|Reprovado| FEEDBACK[Feedback loop]
    end

    PHASE1 --> PHASE2
    PHASE2 --> PHASE3
    PHASE3 --> GATE
    FEEDBACK -->|Volta à fase com problema| PHASE1
    FEEDBACK -->|Volta à fase com problema| PHASE2
    FEEDBACK -->|Volta à fase com problema| PHASE3

    OK --> DEV[🚀 Workflow de Desenvolvimento]

    style PHASE1 fill:#1e3a5f,stroke:#3b82f6,stroke-width:2px,color:#e0f2fe
    style PHASE2 fill:#3b1f5e,stroke:#8b5cf6,stroke-width:2px,color:#ede9fe
    style PHASE3 fill:#1a3c34,stroke:#10b981,stroke-width:2px,color:#d1fae5
    style GATE fill:#5c3a1e,stroke:#f59e0b,stroke-width:2px,color:#fef3c7
    style START fill:#0f172a,stroke:#94a3b8,color:#f8fafc
    style DEV fill:#0f172a,stroke:#94a3b8,color:#f8fafc
    style OK fill:#064e3b,stroke:#10b981,color:#d1fae5
```

---

## Mapa de Agentes

Cada fase é executada por um agente especializado com responsabilidades bem definidas.

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1e293b', 'primaryTextColor': '#f8fafc', 'primaryBorderColor': '#475569', 'lineColor': '#94a3b8', 'secondaryColor': '#0f172a', 'tertiaryColor': '#334155'}}}%%

block-beta
    columns 4

    block:discovery:1
        columns 1
        A["📋 Briefing Agent"]
        A1["Discovery & Elicitação"]
    end

    block:definition:1
        columns 1
        B["📐 Product Manager"]
        B1["PRD & Épicos"]
    end

    block:decomposition:1
        columns 1
        C["🔨 Scrum Master"]
        C1["Stories & Tasks"]
    end

    block:quality:1
        columns 1
        D["✅ QA Gate"]
        D1["Validação & Feedback"]
    end

    style discovery fill:#1e3a5f,stroke:#3b82f6,stroke-width:2px,color:#e0f2fe
    style definition fill:#3b1f5e,stroke:#8b5cf6,stroke-width:2px,color:#ede9fe
    style decomposition fill:#1a3c34,stroke:#10b981,stroke-width:2px,color:#d1fae5
    style quality fill:#5c3a1e,stroke:#f59e0b,stroke-width:2px,color:#fef3c7
```

| Agente | Slug | Responsabilidade | Input | Output |
|--------|------|------------------|-------|--------|
| **Briefing** | `briefing` | Conduzir discovery com o usuário, fazer perguntas estratégicas | Ideia bruta do usuário | `BRIEFING.md` |
| **Product Manager** | `pm` | Traduzir briefing em PRD profissional, definir épicos | `BRIEFING.md` | `PRD.md` + Épicos |
| **Scrum Master** | `sm` | Decompor PRD em stories e tasks seguindo Agile/Scrum | `PRD.md` | `BACKLOG.md` |
| **QA Gate** | `qa-gate` | Validar qualidade e completude de todos os artefatos | Todos os artefatos | Aprovação ou Feedback |

---

## Fase 1 — Discovery (Briefing Agent)

### Objetivo

Transformar uma ideia vaga em um briefing estruturado e detalhado. O agente conduz uma entrevista guiada com o usuário.

### Fluxo detalhado

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1e293b', 'primaryTextColor': '#f8fafc', 'lineColor': '#3b82f6', 'secondaryColor': '#0f172a'}}}%%

sequenceDiagram
    participant U as 👤 Usuário
    participant BA as 📋 Briefing Agent
    participant FS as 📂 File System

    BA->>FS: Verifica se BRIEFING.md existe
    alt Briefing já existe
        BA->>U: Briefing encontrado. Deseja revisar ou prosseguir?
    else Briefing não existe
        BA->>U: Vamos construir o briefing do projeto!
        loop Entrevista guiada
            BA->>U: Pergunta sobre visão, público, funcionalidades...
            U->>BA: Resposta do usuário
            BA->>BA: Processa e identifica gaps
        end
        BA->>FS: Gera BRIEFING.md
        BA->>U: Briefing concluído! Resumo apresentado.
    end
```

### Conhecimentos do agente

- **Stack técnica:** Next.js (App Router), TypeScript, Tailwind CSS, Supabase (Auth + DB + Storage), shadcn/ui
- **Gestão de projetos:** Sabe fazer as perguntas certas para extrair requisitos
- **UX/Produto:** Entende personas, jornadas de usuário, MVP vs produto completo

### Categorias de perguntas

O Briefing Agent cobre **6 dimensões**:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1e293b', 'primaryTextColor': '#f8fafc', 'lineColor': '#3b82f6'}}}%%

mindmap
    root((Briefing))
        🎯 Visão
            Problema que resolve
            Proposta de valor
            Diferencial competitivo
        👥 Público
            Personas principais
            Jornadas de usuário
            Necessidades & dores
        ⚙️ Funcionalidades
            Features core (MVP)
            Features desejáveis
            Features futuras
        🏗️ Técnico
            Integrações externas
            Requisitos de performance
            Restrições técnicas
        📊 Negócio
            Modelo de monetização
            Métricas de sucesso (KPIs)
            Timeline desejada
        🎨 Design
            Referências visuais
            Tom & voz da marca
            Acessibilidade
```

### Artefato de saída: `BRIEFING.md`

Localização: `docs/BRIEFING.md`

Estrutura esperada:
- Visão do projeto
- Público-alvo e personas
- Funcionalidades (core, desejáveis, futuras)
- Requisitos técnicos e integrações
- Métricas de sucesso
- Restrições e premissas
- Referências visuais e de UX

---

## Fase 2 — Definição (Product Manager Agent)

### Objetivo

Traduzir o briefing em um **PRD (Product Requirements Document)** profissional, com épicos e critérios de aceitação claros.

### Fluxo detalhado

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1e293b', 'primaryTextColor': '#f8fafc', 'lineColor': '#8b5cf6', 'secondaryColor': '#0f172a'}}}%%

sequenceDiagram
    participant PM as 📐 Product Manager
    participant FS as 📂 File System
    participant U as 👤 Usuário

    PM->>FS: Lê BRIEFING.md
    PM->>PM: Analisa e estrutura requisitos
    PM->>PM: Define épicos de alto nível
    PM->>PM: Estabelece critérios de aceitação
    PM->>PM: Mapeia dependências entre épicos
    PM->>FS: Gera PRD.md
    PM->>U: PRD pronto para revisão
    alt Usuário tem ajustes
        U->>PM: Feedback e ajustes
        PM->>FS: Atualiza PRD.md
    end
```

### Responsabilidades do PM

- Traduzir linguagem de negócio em requisitos técnicos
- Definir **épicos** (agrupamentos de alto nível)
- Estabelecer **critérios de aceitação** por épico
- Priorizar features (MoSCoW ou similar)
- Identificar riscos e dependências
- Definir escopo do MVP vs releases futuras

### Artefato de saída: `PRD.md`

Localização: `docs/PRD.md`

Estrutura esperada:
- Resumo executivo
- Objetivos e métricas de sucesso
- Personas e jornadas
- Épicos com descrição e critérios de aceitação
- Requisitos não-funcionais (performance, segurança, acessibilidade)
- Arquitetura de alto nível
- Riscos e mitigações
- Cronograma de releases (MVP → V1 → V2)

---

## Fase 3 — Decomposição (Scrum Master Agent)

### Objetivo

Decompor o PRD em **stories** e **tasks** granulares, prontas para desenvolvimento, seguindo metodologia Agile/Scrum.

### Fluxo detalhado

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1e293b', 'primaryTextColor': '#f8fafc', 'lineColor': '#10b981', 'secondaryColor': '#0f172a'}}}%%

sequenceDiagram
    participant SM as 🔨 Scrum Master
    participant FS as 📂 File System

    SM->>FS: Lê PRD.md (épicos + requisitos)
    SM->>SM: Decompõe épicos em user stories
    SM->>SM: Aplica formato "Como [persona]..."
    SM->>SM: Define critérios de aceitação por story
    SM->>SM: Quebra stories em tasks técnicas
    SM->>SM: Estima complexidade (story points)
    SM->>SM: Organiza em sprints sugeridas
    SM->>FS: Gera BACKLOG.md
```

### Hierarquia Agile

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1e293b', 'primaryTextColor': '#f8fafc', 'lineColor': '#10b981'}}}%%

graph TD
    EPIC[📦 Épico<br/><i>Definido pelo PM</i>] --> STORY1[📝 User Story 1]
    EPIC --> STORY2[📝 User Story 2]
    EPIC --> STORY3[📝 User Story N]

    STORY1 --> TASK1A[⚡ Task 1.1]
    STORY1 --> TASK1B[⚡ Task 1.2]
    STORY2 --> TASK2A[⚡ Task 2.1]
    STORY2 --> TASK2B[⚡ Task 2.2]
    STORY2 --> TASK2C[⚡ Task 2.3]
    STORY3 --> TASK3A[⚡ Task 3.1]

    style EPIC fill:#3b1f5e,stroke:#8b5cf6,stroke-width:2px,color:#ede9fe
    style STORY1 fill:#1a3c34,stroke:#10b981,stroke-width:2px,color:#d1fae5
    style STORY2 fill:#1a3c34,stroke:#10b981,stroke-width:2px,color:#d1fae5
    style STORY3 fill:#1a3c34,stroke:#10b981,stroke-width:2px,color:#d1fae5
    style TASK1A fill:#1e3a5f,stroke:#3b82f6,stroke-width:1px,color:#e0f2fe
    style TASK1B fill:#1e3a5f,stroke:#3b82f6,stroke-width:1px,color:#e0f2fe
    style TASK2A fill:#1e3a5f,stroke:#3b82f6,stroke-width:1px,color:#e0f2fe
    style TASK2B fill:#1e3a5f,stroke:#3b82f6,stroke-width:1px,color:#e0f2fe
    style TASK2C fill:#1e3a5f,stroke:#3b82f6,stroke-width:1px,color:#e0f2fe
    style TASK3A fill:#1e3a5f,stroke:#3b82f6,stroke-width:1px,color:#e0f2fe
```

### Divisão de responsabilidades

| Nível | Quem define | Formato |
|-------|-------------|---------|
| **Épico** | Product Manager | Título + descrição + critérios de aceitação |
| **User Story** | Scrum Master | "Como [persona], quero [ação] para [benefício]" |
| **Task** | Scrum Master | Tarefa técnica granular, executável em horas |

### Artefato de saída: `BACKLOG.md`

Localização: `docs/BACKLOG.md`

Estrutura esperada:
- Épicos (herdados do PRD)
  - User Stories por épico
    - Critérios de aceitação
    - Story points (estimativa)
    - Tasks técnicas
  - Dependências entre stories
- Sugestão de sprints
- Definition of Done (DoD)

---

## Fase 4 — Quality Gate

### Objetivo

Validar que todos os artefatos estão completos, consistentes e prontos para alimentar o workflow de desenvolvimento.

### Checklist de validação

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1e293b', 'primaryTextColor': '#f8fafc', 'lineColor': '#f59e0b'}}}%%

graph LR
    subgraph BRIEFING_CHECK [" Briefing "]
        B1[Visão clara?]
        B2[Público definido?]
        B3[Features listadas?]
        B4[Restrições mapeadas?]
    end

    subgraph PRD_CHECK [" PRD "]
        P1[Épicos definidos?]
        P2[Critérios de aceitação?]
        P3[Requisitos não-funcionais?]
        P4[MVP delimitado?]
    end

    subgraph BACKLOG_CHECK [" Backlog "]
        S1[Stories no formato correto?]
        S2[Tasks granulares?]
        S3[Estimativas presentes?]
        S4[Dependências mapeadas?]
    end

    BRIEFING_CHECK --> VERDICT
    PRD_CHECK --> VERDICT
    BACKLOG_CHECK --> VERDICT

    VERDICT{Todos os checks<br/>passaram?}
    VERDICT -->|Sim| APPROVED[✅ Aprovado]
    VERDICT -->|Não| REJECTED[🔄 Feedback]

    style BRIEFING_CHECK fill:#1e3a5f,stroke:#3b82f6,stroke-width:2px,color:#e0f2fe
    style PRD_CHECK fill:#3b1f5e,stroke:#8b5cf6,stroke-width:2px,color:#ede9fe
    style BACKLOG_CHECK fill:#1a3c34,stroke:#10b981,stroke-width:2px,color:#d1fae5
    style APPROVED fill:#064e3b,stroke:#10b981,stroke-width:2px,color:#d1fae5
    style REJECTED fill:#5c1d1d,stroke:#ef4444,stroke-width:2px,color:#fee2e2
```

### Critérios de aprovação

| Artefato | Critério | Obrigatório |
|----------|----------|:-----------:|
| `BRIEFING.md` | Todas as 6 dimensões preenchidas | ✅ |
| `BRIEFING.md` | Sem ambiguidades ou contradições | ✅ |
| `PRD.md` | Pelo menos 1 épico definido | ✅ |
| `PRD.md` | Cada épico com critérios de aceitação | ✅ |
| `PRD.md` | MVP claramente delimitado | ✅ |
| `PRD.md` | Requisitos não-funcionais presentes | ✅ |
| `BACKLOG.md` | Stories no formato "Como X, quero Y para Z" | ✅ |
| `BACKLOG.md` | Cada story com pelo menos 1 task | ✅ |
| `BACKLOG.md` | Estimativas em story points | ⚠️ |
| `BACKLOG.md` | Sprints sugeridas | ⚠️ |

### Feedback loop

Quando o QA Gate reprova, ele:
1. Identifica exatamente **qual artefato** tem problema
2. Descreve **o que está faltando ou inconsistente**
3. Aponta **qual agente** precisa corrigir
4. O fluxo retorna à fase correspondente

---

## Fluxo de Arquivos

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1e293b', 'primaryTextColor': '#f8fafc', 'lineColor': '#94a3b8'}}}%%

graph LR
    subgraph DOCS [" 📁 docs/ "]
        BRIEF[BRIEFING.md]
        PRD[PRD.md]
        BACKLOG[BACKLOG.md]
    end

    subgraph ROOT [" 📁 raiz "]
        CLAUDE[CLAUDE.md]
        TASKS[TASKS.md]
    end

    BRIEF -->|lido pelo PM| PRD
    PRD -->|lido pelo SM| BACKLOG
    BACKLOG -->|fonte de verdade| CLAUDE
    BACKLOG -->|atualiza| TASKS

    style DOCS fill:#0f172a,stroke:#334155,stroke-width:2px,color:#f8fafc
    style ROOT fill:#0f172a,stroke:#334155,stroke-width:2px,color:#f8fafc
    style BACKLOG fill:#064e3b,stroke:#10b981,stroke-width:2px,color:#d1fae5
    style CLAUDE fill:#5c3a1e,stroke:#f59e0b,stroke-width:2px,color:#fef3c7
```

### Relação entre artefatos

- **`BRIEFING.md`** → Input para o PM. Contém a visão crua do projeto.
- **`PRD.md`** → Input para o SM. Contém requisitos estruturados e épicos.
- **`BACKLOG.md`** → **Fonte de verdade** do projeto. O Claude lê este arquivo (via `CLAUDE.md`) para saber:
  - Onde estamos no projeto
  - Quais são os próximos passos
  - Status de cada story/task
- **`CLAUDE.md`** → Referencia `BACKLOG.md` como handoff principal.
- **`TASKS.md`** → Mantido em sync com o backlog para tracking rápido.

---

## Ciclo de Vida Completo

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1e293b', 'primaryTextColor': '#f8fafc', 'lineColor': '#94a3b8'}}}%%

stateDiagram-v2
    [*] --> Ideação: Nova ideia

    state "📋 Discovery" as Discovery {
        [*] --> VerificaBriefing
        VerificaBriefing --> EntrevistaUsuario: Não existe
        VerificaBriefing --> ProssegueComExistente: Já existe
        EntrevistaUsuario --> GeraBriefing
        GeraBriefing --> [*]
        ProssegueComExistente --> [*]
    }

    state "📐 Definição" as Definicao {
        [*] --> AnalisaBriefing
        AnalisaBriefing --> EstruturaRequisitos
        EstruturaRequisitos --> DefineEpicos
        DefineEpicos --> GeraPRD
        GeraPRD --> [*]
    }

    state "🔨 Decomposição" as Decomposicao {
        [*] --> LePRD
        LePRD --> CriaStories
        CriaStories --> CriaTasks
        CriaTasks --> EstimaComplexidade
        EstimaComplexidade --> OrganizaSprints
        OrganizaSprints --> GeraBacklog
        GeraBacklog --> [*]
    }

    state "✅ Quality Gate" as QualityGate {
        [*] --> ValidaBriefing
        ValidaBriefing --> ValidaPRD
        ValidaPRD --> ValidaBacklog
        ValidaBacklog --> Veredicto
        Veredicto --> [*]: Aprovado
        Veredicto --> FeedbackLoop: Reprovado
        FeedbackLoop --> [*]
    }

    Ideação --> Discovery
    Discovery --> Definicao
    Definicao --> Decomposicao
    Decomposicao --> QualityGate
    QualityGate --> Desenvolvimento: Aprovado
    QualityGate --> Discovery: Feedback (briefing)
    QualityGate --> Definicao: Feedback (PRD)
    QualityGate --> Decomposicao: Feedback (backlog)
    Desenvolvimento --> [*]
```

---

## Resumo dos Skills/Commands

Após a criação dos agentes, os seguintes comandos estarão disponíveis:

| Comando | Agente | Descrição |
|---------|--------|-----------|
| `/briefing` | Briefing | Inicia ou revisa o briefing do projeto |
| `/prd` | Product Manager | Gera PRD a partir do briefing |
| `/backlog` | Scrum Master | Decompõe PRD em stories e tasks |
| `/qa-gate` | QA Gate | Valida todos os artefatos de planejamento |

---

## Próximos passos

Os agentes descritos neste documento precisam ser criados. As tarefas estão registradas em `TASKS.md` na seção **"Fase 7 — Workflow de Planejamento (Agentes)"**.

Após a criação dos agentes de planejamento, será criado um segundo documento: **`WORKFLOW-DEVELOPMENT.md`** — descrevendo o fluxo de desenvolvimento (coding, review, testing, deploy).

---

> Última atualização: 2026-02-27
