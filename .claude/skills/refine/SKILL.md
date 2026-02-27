---
name: refine
description: Refina stories do backlog — divide stories grandes, adiciona detalhes, re-estima complexidade e atualiza acceptance criteria.
argument-hint: "[S-xxx | epico | all]"
context: fork
agent: sm
---

Execute **refinamento (grooming)** do backlog: **$ARGUMENTS**

## O que fazer

1. Leia `docs/BACKLOG.md` (backlog atual)
2. Leia `docs/PRD.md` (contexto de requisitos)
3. Identifique o escopo do refinamento:
   - Se `S-xxx` especificado: refine essa story especifica
   - Se `epico` especificado: refine todas as stories desse epico
   - Se `all` ou nada: analise todo o backlog

### Acoes de refinamento

Para cada story no escopo:

**Dividir stories grandes:**
- Se estimativa > G (> 8h), quebre em stories menores
- Cada sub-story deve passar em INVEST
- Manter rastreabilidade (S-001 → S-001a, S-001b)

**Adicionar detalhes:**
- Completar acceptance criteria faltantes (Given/When/Then)
- Listar arquivos-alvo em tasks sem eles
- Detalhar tasks vagas (Tipo 3 → Tipo 1 ou 2)

**Re-estimar:**
- Reavaliar complexidade com base em contexto atualizado
- Verificar se P/M/G continua correto apos mudancas no projeto

**Atualizar dependencias:**
- Verificar se dependencias entre stories mudaram
- Identificar novas dependencias surgidas durante desenvolvimento
- Detectar dependencias circulares (anti-padrao)

**Validar INVEST:**
- Toda story refinada deve passar nos 6 criterios:
  - I (Independente), N (Negociavel), V (Valiosa)
  - E (Estimavel), S (Small), T (Testavel)

## Formato do output

```markdown
## Refinamento — Resultado

**Escopo:** [S-xxx | Epico X | Backlog completo]
**Stories analisadas:** N
**Stories modificadas:** N

### Alteracoes

| Story | Acao | Detalhe |
|-------|------|---------|
| S-001 | Dividida | → S-001a (P) + S-001b (M) |
| S-003 | Re-estimada | M → G (complexidade de integracao) |
| S-005 | AC adicionados | +2 criterios Given/When/Then |

### Alertas
- [Se houver stories que nao passam INVEST]
- [Se houver dependencias circulares]
```

4. Atualize `docs/BACKLOG.md` com as alteracoes
5. Atualize `TASKS.md` se necessario

## Se o BACKLOG.md nao existir

Informe ao usuario que e necessario gerar o backlog primeiro (via `/backlog`).
