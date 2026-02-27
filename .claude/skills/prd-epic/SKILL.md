---
name: prd-epic
description: Adiciona ou detalha um epico especifico no PRD. Use para expandir, refinar ou criar novos epicos.
argument-hint: "<nome-do-epico>"
context: fork
agent: pm
---

Gerencie um epico especifico no PRD: **$ARGUMENTS**

## O que fazer

1. Leia `docs/PRD.md` (obrigatorio — se nao existir, informe que e necessario gerar primeiro via `/prd`)
2. Leia `docs/BRIEFING.md` para contexto

## Acoes possiveis

### Adicionar novo epico
- Se o argumento descreve uma funcionalidade que nao existe como epico no PRD
- Atribua o proximo ID sequencial (EP-XX)
- Defina descricao, prioridade MoSCoW, release, dependencias e criterios de aceitacao (min 3)
- Atualize o cronograma de releases se necessario

### Detalhar epico existente
- Se o argumento referencia um epico ja existente (por ID ou nome)
- Expanda descricao, adicione criterios de aceitacao, refine dependencias
- Mantenha consistencia com outros epicos

### Listar epicos
- Se invocado sem argumento ou com `list`
- Mostre tabela resumida: ID, nome, prioridade, release, num criterios de aceitacao

## Formato de epico

```markdown
### EP-XX: [Nome do Epico]
- **Descricao:** ...
- **Prioridade:** Must | Should | Could | Won't
- **Release:** MVP | V1 | V2+
- **Dependencias:** EP-YY (se houver)
- **Criterios de Aceitacao:**
  - [ ] Criterio mensuravel 1
  - [ ] Criterio mensuravel 2
  - [ ] Criterio mensuravel 3
```

## Apos concluir

- Atualize `docs/PRD.md` com o epico adicionado/refinado
- Informe o usuario sobre impacto no cronograma e dependencias
