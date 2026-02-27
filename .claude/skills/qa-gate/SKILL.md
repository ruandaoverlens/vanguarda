---
name: qa-gate
description: Valida artefatos de planejamento (BRIEFING.md, PRD.md, BACKLOG.md) contra criterios de qualidade. Emite veredito APROVADO ou REPROVADO com feedback detalhado.
context: fork
agent: qa
---

Execute o **Planning QA Gate** — validacao completa dos artefatos de planejamento.

## O que fazer

1. Leia os artefatos de planejamento:
   - `docs/BRIEFING.md`
   - `docs/PRD.md`
   - `docs/BACKLOG.md`

2. Valide cada artefato contra seu checklist:

### BRIEFING.md — 6 dimensoes obrigatorias
- Visao (problema, proposta de valor, diferencial)
- Publico (personas, jornadas)
- Funcionalidades (core MVP, desejaveis, futuras)
- Tecnico (integracoes, performance, restricoes)
- Negocio (monetizacao, KPIs, timeline)
- Design (referencias visuais, tom & voz, a11y)
- Sem ambiguidades ou contradicoes

### PRD.md — criterios obrigatorios
- Pelo menos 1 epico definido
- Cada epico com criterios de aceitacao
- MVP claramente delimitado
- Requisitos nao-funcionais presentes
- Riscos e mitigacoes identificados
- Arquitetura compativel com stack

### BACKLOG.md — criterios obrigatorios
- Stories no formato "Como [persona], quero [acao] para [beneficio]"
- Cada story com pelo menos 1 task tecnica
- Criterios de aceitacao por story
- (Desejavel) Estimativas em story points
- (Desejavel) Dependencias mapeadas
- (Desejavel) Sprints sugeridas

3. Faca **validacao cruzada** entre artefatos:
   - Features do BRIEFING refletidas no PRD?
   - Epicos do PRD com stories no BACKLOG?
   - Requisitos nao-funcionais com tasks correspondentes?

4. Emita veredito no formato padrao:
   - Tabela criterio/status/observacao por artefato
   - Se REPROVADO: tabela com artefato/problema/agente responsavel

## Formato do veredito

```markdown
## QA Gate — Veredito

**Status:** APROVADO | REPROVADO

### Validacao por artefato

| Artefato | Criterio | Status | Observacao |
|----------|----------|--------|------------|
| BRIEFING.md | ... | OK/FALHA | ... |

### Feedback (se REPROVADO)

| # | Artefato | Problema | Agente responsavel |
|---|----------|----------|--------------------|
| 1 | ... | ... | briefing/pm/sm |
```
