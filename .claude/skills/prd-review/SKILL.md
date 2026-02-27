---
name: prd-review
description: Revisa o PRD existente e propoe melhorias em completude, clareza, priorizacao e criterios de aceitacao.
context: fork
agent: pm
---

Execute uma **revisao completa** do PRD existente.

## O que fazer

1. Leia `docs/PRD.md` (obrigatorio — se nao existir, informe que e necessario gerar primeiro via `/prd`)
2. Leia `docs/BRIEFING.md` para validacao cruzada
3. Leia `CLAUDE.md` e `docs/ARCHITECTURE.md` para contexto tecnico

## Checklist de revisao

### Completude
- Todas as 10 secoes do template estao preenchidas?
- Cada epico tem pelo menos 3 criterios de aceitacao mensuraveis?
- Requisitos nao-funcionais estao especificos (nao genericos)?
- Cronograma de releases tem marcos claros?

### Consistencia
- Features do BRIEFING.md estao refletidas nos epicos?
- Decisoes tecnicas do CLAUDE.md sao respeitadas?
- Nao ha contradicoes internas entre secoes?
- IDs de epicos (EP-XX) sao sequenciais e rastreavéis?

### Priorizacao
- Distribuicao MoSCoW e equilibrada (nem tudo e Must)?
- MVP tem escopo enxuto (max 5-7 epicos)?
- Dependencias entre epicos estao mapeadas sem ciclos?

### Qualidade
- Criterios de aceitacao sao testáveis e mensuráveis?
- Metricas de sucesso sao quantificáveis?
- Riscos tem mitigacoes concretas (nao vagas)?
- Personas sao especificas (nao genericas)?

## Formato do report

```markdown
## PRD Review

**Versao revisada:** [versao do PRD]
**Score geral:** [X/10]

### Pontos fortes
- ...

### Problemas encontrados

| # | Secao | Severidade | Problema | Sugestao |
|---|-------|-----------|----------|----------|
| 1 | ...   | Alta/Media/Baixa | ... | ... |

### Recomendacoes
1. ...

### Proximos passos
- Corrigir problemas de severidade Alta
- Re-rodar `/prd-review` apos correcoes
- Quando aprovado, prosseguir com `/backlog`
```
