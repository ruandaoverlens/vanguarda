---
name: new-component
description: Cria um novo componente React com TypeScript e Tailwind seguindo os padroes do Vanguarda.
argument-hint: "<NomeDoComponente>"
---

Crie o componente `$ARGUMENTS` seguindo os padroes do projeto.

## Regras

1. Crie em `src/components/<nome-do-componente>.tsx` (kebab-case para arquivo, PascalCase para export)
2. Use TypeScript com interface de Props tipada
3. Use Tailwind CSS para estilizacao — nenhum CSS externo
4. Componente funcional com arrow function
5. Exporte como **named export** (nao default)
6. So adicione `"use client"` se o componente realmente precisar de interatividade (useState, useEffect, onClick, etc.)

## Template base

```tsx
interface NomeDoComponenteProps {
  // props aqui
}

export function NomeDoComponente({ }: NomeDoComponenteProps) {
  return (
    <div>
      {/* conteudo */}
    </div>
  );
}
```

## Apos criar

1. Pergunte ao usuario se o componente precisa de estado ou efeitos (para decidir "use client")
2. Se for um componente de UI reutilizavel, considere criar em `src/components/ui/`
