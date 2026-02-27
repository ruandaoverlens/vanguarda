---
name: prd
description: Gera ou revisa o PRD a partir do briefing do projeto. Invoca o Product Manager para traduzir o briefing em epicos, criterios de aceitacao e cronograma de releases.
argument-hint: "[generate | review | update]"
context: fork
agent: pm
---

Tarefa de Product Management: **$ARGUMENTS**

## Contexto

Voce e o Product Manager do projeto Vanguarda. Siga o modelo de operacao padrao:

1. **VERIFICAR** — Checar se `docs/BRIEFING.md` existe (produzido pelo Analyst) e se `docs/PRD.md` ja existe
2. **ANALISAR** — Leitura profunda do briefing + contexto tecnico (`CLAUDE.md`, `docs/ARCHITECTURE.md`)
3. **ESTRUTURAR** — Agrupar em epicos, classificar MoSCoW, definir criterios de aceitacao
4. **REDIGIR** — Gerar `docs/PRD.md` no template padrao (10 secoes)
5. **APRESENTAR** — Resumo executivo ao usuario
6. **REFINAR** — Ciclo de feedback ate aprovacao

## Acoes disponiveis

- `generate` — Gera um novo PRD a partir do `docs/BRIEFING.md`
- `review` — Revisa e propoe melhorias ao `docs/PRD.md` existente
- `update` — Atualiza secoes especificas do PRD (preserva o resto)
- (sem argumento) — Verifica estado atual e pergunta ao usuario o que deseja fazer

## Comandos especificos

Para acoes especificas, prefira os slash commands dedicados:
- `/prd-review` — revisar PRD existente e propor melhorias
- `/prd-epic <nome>` — adicionar ou detalhar um epico especifico

## Arquivos de referencia

- `docs/BRIEFING.md` — Input principal (Fase 1)
- `docs/PRD.md` — Output desta fase (Fase 2)
- `CLAUDE.md` — Decisoes tecnicas do projeto
- `docs/ARCHITECTURE.md` — Arquitetura do sistema
- `docs/WORKFLOW-PLANNING.md` — Workflow completo de planejamento
