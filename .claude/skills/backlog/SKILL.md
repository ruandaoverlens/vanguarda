---
name: backlog
description: Decompoe PRD em stories e tasks seguindo Agile/Scrum. Gera docs/BACKLOG.md.
argument-hint: "[opcoes]"
context: fork
agent: sm
---

Decomponha o PRD em user stories e tasks tecnicas: **$ARGUMENTS**

## Fluxo

1. Leia `docs/PRD.md` (input principal — epicos e requisitos do PM)
2. Leia `CLAUDE.md` (contexto tecnico e convencoes do projeto)
3. Decomponha cada epico em user stories (formato "Como X, quero Y para Z")
4. Defina acceptance criteria (Given/When/Then) para cada story
5. Quebre stories em tasks tecnicas granulares (max 4h, com arquivos-alvo)
6. Estime complexidade (P/M/G)
7. Mapeie dependencias entre stories
8. Organize em sprints sugeridos (1 semana cada)
9. Gere `docs/BACKLOG.md`
10. Atualize `TASKS.md`

## Se o PRD nao existir

Informe ao usuario que e necessario gerar o PRD primeiro (via `/prd`).
