---
name: qa-test
description: Executa testes e verifica cobertura de codigo. Suporta unit, integration, E2E e cobertura global.
argument-hint: "<all | unit | integration | e2e | coverage | NomeDoComponente>"
context: fork
agent: qa
---

Execute testes e verifique cobertura para: **$ARGUMENTS**

## O que fazer

1. Identifique o escopo solicitado:
   - `all` — roda todos os testes
   - `unit` — apenas testes unitarios (Vitest)
   - `integration` — testes de integracao (RTL)
   - `e2e` — testes end-to-end (Playwright)
   - `coverage` — roda testes com relatorio de cobertura
   - `NomeDoComponente` — testes especificos de um componente

2. Execute os testes adequados:
   - Vitest: `npx vitest run` (unit/integration)
   - Vitest coverage: `npx vitest run --coverage`
   - Playwright: `npx playwright test` (E2E)

3. Analise resultados:
   - Testes passando/falhando
   - Cobertura vs thresholds (80% global, 90% criticos)
   - Exclusoes: `src/components/ui/` (primitivos shadcn)

4. Reporte com evidencias:
   - Output dos comandos
   - Cobertura por arquivo/funcao
   - Testes falhando com detalhes do erro
   - Sugestoes de correcao para falhas

## Thresholds

| Escopo | Minimo | Meta |
|--------|--------|------|
| Global | 80% | 90% |
| Caminhos criticos | 90% | 95% |

## Testing Trophy

Priorize testes de integracao sobre unitarios. E2E apenas para fluxos criticos.

## Exemplos de uso

- `/qa-test all` — roda todos os testes
- `/qa-test coverage` — relatorio de cobertura
- `/qa-test LoginForm` — testes do componente LoginForm
- `/qa-test e2e` — testes end-to-end
