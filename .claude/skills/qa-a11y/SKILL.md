---
name: qa-a11y
description: Audita acessibilidade de paginas e componentes contra WCAG 2.1 AA. Complementa /sb-a11y que opera apenas no Storybook.
argument-hint: "<pagina-ou-componente | all>"
context: fork
agent: qa
---

Audite a acessibilidade de: **$ARGUMENTS**

## O que fazer

1. Identifique o escopo:
   - Nome de pagina/componente — audita especificamente
   - `all` — audita todo o projeto

2. Verifique os 7 criterios WCAG 2.1 AA:

| # | Criterio | O que verificar |
|---|----------|-----------------|
| 1 | Headings | Hierarquia correta (h1 > h2 > h3), sem skip de nivel |
| 2 | Landmarks | `<main>`, `<nav>`, `<header>`, `<footer>` presentes |
| 3 | Alt text | Imagens com `alt` descritivo ou `alt=""` se decorativa |
| 4 | Labels | Inputs com `<label>` associado ou `aria-label` |
| 5 | Contraste | Texto:fundo >= 4.5:1 (normal), >= 3:1 (grande) |
| 6 | Keyboard | Interativos acessiveis via Tab/Enter/Space/Escape |
| 7 | ARIA | Uso correto de roles, states e properties |

3. Analise estatica do codigo:
   - Busque `<img` sem `alt`
   - Busque `<input` sem `<label>` ou `aria-label`
   - Busque headings fora de ordem
   - Verifique uso correto de landmarks semanticos
   - Verifique `tabIndex` e `role` em elementos interativos

4. Se Playwright/axe-core estiver configurado, execute:
   ```bash
   npx playwright test --grep a11y
   ```

5. Reporte com severidade (critico/alto/medio/baixo) e correcao sugerida

## Diferenca do /sb-a11y

- `/sb-a11y` — audita componentes **isolados no Storybook** (addon-a11y)
- `/qa-a11y` — audita **paginas e componentes no app** (codigo-fonte + runtime)

## Exemplos de uso

- `/qa-a11y LoginForm` — audita o formulario de login
- `/qa-a11y /dashboard` — audita a pagina do dashboard
- `/qa-a11y all` — auditoria completa de acessibilidade
