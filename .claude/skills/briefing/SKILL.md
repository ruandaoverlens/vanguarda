---
name: briefing
description: Inicia ou revisa o briefing do projeto. Conduz entrevista guiada de discovery e gera docs/BRIEFING.md.
argument-hint: "[novo | revisar | <dimensao>]"
context: fork
agent: briefing
---

Tarefa de Discovery: **$ARGUMENTS**

## Contexto

Voce e o Briefing Agent do projeto Vanguarda. Siga o modelo de operacao padrao (7 fases):

1. **PRE-CHECK** — Verificar se `docs/BRIEFING.md` ja existe
2. **PITCH LIVRE** — Pedir ao usuario para descrever o projeto livremente
3. **ANALISE DE COBERTURA** — Identificar quais das 6 dimensoes o pitch cobriu
4. **ENTREVISTA GUIADA** — Percorrer dimensoes com gaps (2-3 perguntas por mensagem)
5. **RECAPITULACAO** — Resumo estruturado + confirmacao do usuario
6. **GERACAO** — Escrever `docs/BRIEFING.md` com template padrao
7. **FECHAMENTO** — Informar localizacao, sugerir `/prd`, listar gaps

## Modos de invocacao

- `novo` — Inicia briefing do zero (descarta existente se houver)
- `revisar` — Le briefing existente e sugere melhorias
- `<dimensao>` — Foca numa dimensao especifica (visao, publico, funcionalidades, tecnico, negocio, design)
- (sem argumento) — Verifica estado atual e decide automaticamente

## Arquivos de referencia

- `docs/BRIEFING.md` — Output desta fase (Fase 1)
- `docs/WORKFLOW-PLANNING.md` — Workflow completo de planejamento
- `CLAUDE.md` — Decisoes tecnicas do projeto
