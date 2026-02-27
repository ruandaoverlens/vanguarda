---
name: qa-perf
description: Audita performance de paginas contra Core Web Vitals e boas praticas de Next.js/React.
argument-hint: "<pagina | all>"
context: fork
agent: qa
---

Audite a performance de: **$ARGUMENTS**

## O que fazer

1. Identifique o escopo:
   - Nome de pagina — audita especificamente
   - `all` — audita todo o projeto

2. Verifique **Core Web Vitals** vs targets:

| Metrica | Alvo | Ferramenta |
|---------|------|------------|
| LCP | < 2.5s | Lighthouse CI |
| CLS | < 0.1 | Lighthouse CI |
| INP | < 200ms | Lighthouse CI |

3. Faca **analise estatica** do codigo:

| # | Verificacao | Como |
|---|------------|------|
| 1 | `"use client"` desnecessarios | Grep por `"use client"` — verificar se componente realmente precisa |
| 2 | Imagens sem `next/image` | Grep por `<img` fora de componentes `next/image` |
| 3 | Fontes sem `next/font` | Verificar se fontes usam o sistema de `next/font` |
| 4 | `select('*')` | Grep por `.select('*')` — queries devem ser seletivas |
| 5 | Bundle size | Verificar imports pesados, dynamic imports ausentes |
| 6 | Server vs Client | Componentes que poderiam ser Server Components |

4. Se Lighthouse CI estiver configurado, execute e colete metricas

5. Reporte com:
   - Metricas atuais vs targets
   - Lista de problemas com severidade
   - Sugestao de correcao concreta para cada item

## Targets (do CLAUDE.md)

| Metrica | Alvo |
|---------|------|
| LCP | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |

## Exemplos de uso

- `/qa-perf /dashboard` — audita performance do dashboard
- `/qa-perf /login` — audita performance da pagina de login
- `/qa-perf all` — auditoria completa de performance
