---
name: progress
description: Rastreia progresso do backlog — stories concluidas, sprint atual, velocidade e bloqueios.
argument-hint: "[sprint N | all]"
context: fork
agent: sm
---

Rastreie o **progresso** do backlog: **$ARGUMENTS**

## O que fazer

1. Leia `docs/BACKLOG.md` (backlog com status das stories)
2. Leia `TASKS.md` (estado atual do projeto)
3. Analise o codebase para verificar implementacao real (Glob/Grep nos arquivos-alvo)
4. Identifique o escopo:
   - Se `sprint N` especificado: progresso desse sprint
   - Se `all` ou sem argumento: progresso geral do backlog

### Analise de progresso

Para cada story, verifique:

**Status (3 niveis):**
- **Concluida**: todos os AC verificaveis, arquivos-alvo existem e implementados
- **Em progresso**: alguns AC concluidos, implementacao parcial
- **Pendente**: nenhum AC concluido, nao iniciada

**Verificacao de AC:**
- Para cada acceptance criteria (Given/When/Then), verifique se ha evidencia no codigo
- Busque nos arquivos-alvo listados nas tasks
- Verifique se os componentes/paginas/rotas existem

**Deteccao de bloqueios:**
- Stories com dependencias nao concluidas
- Tasks que referenciam arquivos inexistentes ou incompletos
- Inconsistencias entre BACKLOG.md e estado real do codigo

### Metricas

- **Velocidade**: stories concluidas por sprint
- **Burndown**: stories restantes vs sprints restantes
- **Saude das dependencias**: bloqueios ativos

## Formato do output

```markdown
## Progresso — Relatorio

**Data:** YYYY-MM-DD
**Escopo:** Sprint N | Backlog completo

### Resumo

| Metrica | Valor |
|---------|-------|
| Stories totais | N |
| Concluidas | N (XX%) |
| Em progresso | N (XX%) |
| Pendentes | N (XX%) |
| Bloqueadas | N |

### Por Sprint

| Sprint | Goal | Stories | Concluidas | Status |
|--------|------|---------|-----------|--------|
| Sprint 1 | ... | N | N/N | Concluido/Em andamento/Pendente |
| Sprint 2 | ... | N | N/N | ... |

### Detalhamento (sprint atual ou solicitado)

| Story | Status | AC concluidos | Observacao |
|-------|--------|--------------|------------|
| S-001 | Concluida | 3/3 | Todos AC verificados |
| S-002 | Em progresso | 1/3 | Falta integracao com API |
| S-003 | Bloqueada | 0/2 | Depende de S-002 |

### Bloqueios ativos

| Story | Bloqueada por | Motivo |
|-------|--------------|--------|
| S-003 | S-002 | Dependencia direta |

### Proximos passos sugeridos
1. [Acao recomendada com base no progresso]
2. [...]
```

5. Atualize status das stories em `docs/BACKLOG.md` se necessario
6. Atualize `TASKS.md` se necessario

## Se o BACKLOG.md nao existir

Informe ao usuario que e necessario gerar o backlog primeiro (via `/backlog`).
