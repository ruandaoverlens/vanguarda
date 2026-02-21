---
name: auth-guard
description: Adiciona protecao de autenticacao a uma rota ou pagina do Next.js usando Supabase Auth.
argument-hint: "<caminho-da-rota>"
context: fork
agent: frontend
---

Adicione protecao de autenticacao para a rota **$ARGUMENTS**.

## Contexto

- Use `getUser()` (nunca `getSession()`) para verificar autenticacao
- Redirecione para `/login` se nao autenticado
- Server Components usam `@/lib/supabase/server`
- Client Components usam `@/lib/supabase/client`
- O middleware em `src/middleware.ts` ja gerencia refresh de sessao — nao duplique essa logica
