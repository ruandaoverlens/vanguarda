---
name: qa-audit
description: Executa auditoria completa do projeto — testes, acessibilidade, performance, seguranca e qualidade de codigo. Gera scorecard consolidado.
context: fork
agent: qa
---

Execute uma **auditoria completa** do projeto Vanguarda.

## O que fazer

Rode todos os sub-audits sequencialmente e consolide os resultados:

### 1. Testes e Cobertura
- Execute `npx vitest run --coverage` (se configurado)
- Verifique cobertura vs thresholds (80% global, 90% criticos)
- Liste testes falhando

### 2. Acessibilidade (WCAG 2.1 AA)
- Verifique headings, landmarks, alt text, labels, contraste, keyboard, ARIA
- Analise estatica do codigo-fonte
- Execute testes de a11y se disponiveis

### 3. Performance (Core Web Vitals)
- Analise estatica: `"use client"`, `next/image`, `next/font`, `select('*')`
- Verifique Server vs Client Components
- Execute Lighthouse CI se configurado

### 4. Seguranca
- `npm audit` (deps)
- Busca de secrets no codigo
- Verificacao de RLS
- Headers de seguranca
- Auth patterns (`getUser` vs `getSession`)
- Validacao de inputs (Zod)

### 5. Qualidade de Codigo
- Busque anti-padroes: `any`, `as` desnecessario, `eslint-disable`, `@ts-ignore`
- Verifique convencoes do projeto (CLAUDE.md)
- Imports corretos (`@/` paths)

## Formato do scorecard

```markdown
## Auditoria Completa — Scorecard

**Status geral:** SAUDAVEL | ATENCAO | CRITICO

| Area | Score | Status | Issues |
|------|-------|--------|--------|
| Testes | X% cobertura | OK/ATENCAO/CRITICO | N issues |
| Acessibilidade | N violacoes | OK/ATENCAO/CRITICO | N issues |
| Performance | LCP/CLS/INP | OK/ATENCAO/CRITICO | N issues |
| Seguranca | N vulns | OK/ATENCAO/CRITICO | N issues |
| Codigo | N anti-padroes | OK/ATENCAO/CRITICO | N issues |

### Criterios de classificacao
- **SAUDAVEL**: Todas as areas OK, zero issues criticos
- **ATENCAO**: Issues medios encontrados, nenhum critico
- **CRITICO**: Pelo menos 1 issue critico ou de seguranca high

### Top 5 prioridades

| # | Area | Severidade | Descricao | Correcao sugerida |
|---|------|-----------|-----------|-------------------|
| 1 | ... | ... | ... | ... |
```

## Exemplos de uso

- `/qa-audit` — auditoria completa do projeto
