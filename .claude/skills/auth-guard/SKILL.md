---
name: auth-guard
description: Adiciona protecao de autenticacao a uma rota ou pagina do Next.js usando Supabase Auth.
argument-hint: "<caminho-da-rota>"
---

Adicione protecao de autenticacao para a rota `$ARGUMENTS`.

## Contexto

O projeto usa Supabase Auth com os seguintes clients:
- `src/lib/supabase/server.ts` — para Server Components e Route Handlers
- `src/lib/supabase/client.ts` — para Client Components
- `src/lib/supabase/middleware.ts` — para o middleware de sessao

## Padrao de protecao (Server Component)

Para proteger uma pagina no App Router:

```tsx
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function PaginaProtegida() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main>
      <p>Bem-vindo, {user.email}</p>
    </main>
  );
}
```

## Regras

1. Sempre use `getUser()` (nao `getSession()`) para verificar auth — `getUser()` valida com o servidor Supabase
2. Redirecione para `/login` se nao autenticado
3. Em Server Components, use o client de `@/lib/supabase/server`
4. Em Client Components, use o client de `@/lib/supabase/client`
5. O middleware em `src/middleware.ts` ja gerencia refresh de sessao — nao duplique essa logica

## Fluxo

1. Leia o arquivo da pagina alvo
2. Adicione a verificacao de auth seguindo o padrao acima
3. Ajuste os imports necessarios
4. Pergunte ao usuario se precisa de algum controle de acesso adicional (roles, permissoes)
