---
name: sprint
description: Planeja ou reorganiza sprints — define sprint goals, aloca stories, ajusta prioridades e verifica capacidade.
argument-hint: "[numero | plan | replan]"
context: fork
agent: sm
---

Execute **sprint planning**: **$ARGUMENTS**

## O que fazer

1. Leia `docs/BACKLOG.md` (backlog com stories e sprints atuais)
2. Leia `TASKS.md` (estado atual do projeto)
3. Identifique a acao:
   - Se `plan` ou sem argumento: planejar proximos sprints
   - Se numero (ex: `2`): detalhar ou ajustar sprint especifico
   - Se `replan`: reorganizar todos os sprints com base no progresso atual

### Sprint Planning

**Regras de planejamento:**
- Cadencia: 1 semana por sprint
- Cada sprint tem um **Sprint Goal** claro (1 frase)
- Prioridade de alocacao: must → should → could
- Respeitar dependencias entre stories (story bloqueada nao entra no sprint)
- Capacidade: considerar estimativas P/M/G das stories

**Criterios de alocacao:**
- Stories `must` entram primeiro
- Stories sem dependencias pendentes tem prioridade
- Evitar sprints sobrecarregados (max ~3 stories G ou equivalente)
- Stories do mesmo epico agrupadas quando possivel

### Replanning

Quando `replan`:
1. Verificar quais stories ja foram concluidas (status em BACKLOG.md/TASKS.md)
2. Mover stories nao concluidas para sprints futuros
3. Recalcular alocacao com base no progresso real
4. Ajustar Sprint Goals se necessario

## Formato do output

```markdown
## Sprint Planning — Resultado

**Acao:** plan | replan | sprint N
**Total de sprints:** N
**Stories alocadas:** N/N

### Sprint 1 — [Goal]
**Periodo:** Semana de DD/MM
**Capacidade:** N stories (XP + YM + ZG)

| Story | Titulo | Estimativa | Prioridade | Depende de |
|-------|--------|-----------|------------|------------|
| S-001 | ...    | P         | must       | nenhuma    |
| S-002 | ...    | M         | must       | S-001      |

### Sprint 2 — [Goal]
...

### Stories nao alocadas (backlog futuro)
| Story | Motivo |
|-------|--------|
| S-010 | Prioridade `could`, sem sprint disponivel |
```

4. Atualize a secao "Sprints Sugeridos" em `docs/BACKLOG.md`
5. Atualize `TASKS.md` se necessario

## Se o BACKLOG.md nao existir

Informe ao usuario que e necessario gerar o backlog primeiro (via `/backlog`).
