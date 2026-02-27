---
name: sb-audit
description: Audita cobertura de stories — identifica componentes sem stories e verifica qualidade das existentes.
context: fork
agent: storybook-expert
---

Audite a cobertura e qualidade das stories do Storybook.

## O que fazer

1. Liste todos os componentes em `src/components/` (ui/, dominios e shared)
2. Identifique quais componentes tem stories e quais nao tem
3. Para stories existentes, verifique:
   - Formato CSF3 com TypeScript correto
   - Tag `autodocs` presente
   - Variantes cobertas (default, sizes, states, dark mode)
   - Interaction tests para elementos interativos
   - Hierarquia de titles consistente
4. Gere um relatorio com:
   - Cobertura total (X de Y componentes)
   - Componentes sem stories (lista)
   - Stories com problemas de qualidade (lista + issues)
   - Recomendacoes priorizadas

## Exemplos de uso

- `/sb-audit` — audita tudo
- Apos instalar novos componentes shadcn, rode para verificar cobertura
