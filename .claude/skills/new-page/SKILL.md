---
name: new-page
description: Cria uma nova pagina no Next.js App Router seguindo os padroes do projeto Vanguarda.
argument-hint: "<caminho-da-rota>"
---

Crie uma nova pagina para a rota `$ARGUMENTS` seguindo os padroes do projeto.

## Regras

1. Use o App Router — o arquivo deve ser criado em `src/app/<rota>/page.tsx`
2. O componente deve ser um **Server Component** por padrao (sem "use client")
3. Exporte `metadata` com titulo e descricao adequados
4. Use Tailwind CSS para estilizacao
5. TypeScript strict — tipar tudo
6. Se a pagina precisar de dados do Supabase, importe o client de `@/lib/supabase/server`

## Template base

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "<Titulo da pagina>",
  description: "<Descricao da pagina>",
};

export default function NomeDaPagina() {
  return (
    <main>
      <h1>Titulo</h1>
    </main>
  );
}
```

## Apos criar

1. Confirme que a estrutura de pastas esta correta
2. Se a rota for dinamica (ex: `[id]`), use `generateStaticParams` ou deixe como SSR
3. Pergunte ao usuario se a pagina precisa de autenticacao (se sim, aplique o padrao de auth-guard)
