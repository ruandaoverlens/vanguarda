---
name: deploy
description: Faz deploy do projeto Vanguarda na Vercel. Apenas invocacao manual.
disable-model-invocation: true
---

Faca o deploy do projeto Vanguarda na Vercel.

## Pre-deploy checklist

Antes de qualquer deploy, verifique:

1. **Build local:** rode `npm run build` e confirme que passa sem erros
2. **Git limpo:** verifique se nao ha mudancas nao commitadas
3. **Variaveis de ambiente:** confirme que as variaveis do Supabase estao configuradas na Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. **Branch:** confirme em qual branch estamos e se e a correta para deploy

## Deploy

1. Mostre o checklist ao usuario e peca confirmacao
2. Se tudo ok, use a tool `deploy_to_vercel` do Vercel MCP
3. Acompanhe o status do deployment
4. Se falhar, consulte os build logs com `get_deployment_build_logs`

## Pos-deploy

1. Verifique se o deployment esta acessivel
2. Reporte a URL do deployment ao usuario
3. Atualize `TASKS.md` se o deploy faz parte do roadmap
