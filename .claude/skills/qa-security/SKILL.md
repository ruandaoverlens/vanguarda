---
name: qa-security
description: Audita seguranca do projeto em 6 areas — dependencias, secrets, RLS, headers, autenticacao e validacao de inputs.
context: fork
agent: qa
---

Execute uma **auditoria de seguranca** completa do projeto.

## O que fazer

Verifique as **6 areas** de seguranca:

### 1. Dependencias
- Execute `npm audit` e analise o resultado
- Zero tolerancia para vulnerabilidades **high** e **critical**
- Sugira fix (`npm audit fix`) ou upgrade especifico

### 2. Secrets
- Busque secrets hardcoded no codigo (API keys, tokens, passwords)
- Verifique que `.env.local` esta no `.gitignore`
- Busque patterns: `sk-`, `Bearer`, `password =`, `secret =`, `key =`
- Verifique que nenhum `NEXT_PUBLIC_` expoe dados sensiveis

### 3. RLS (Row Level Security)
- Verifique que toda tabela no Supabase tem RLS habilitado
- Verifique que policies cobrem SELECT, INSERT, UPDATE, DELETE conforme necessario
- Busque queries que bypassam RLS (service_role key no client)

### 4. Headers de Seguranca
- Verifique `next.config.ts` para headers de seguranca:
  - Content-Security-Policy (CSP)
  - X-Frame-Options
  - X-Content-Type-Options
  - Strict-Transport-Security (HSTS)
  - Referrer-Policy

### 5. Autenticacao
- Verifique que auth usa `getUser()` (nunca `getSession()`)
- Verifique que middleware protege todas as rotas necessarias
- Verifique token refresh no middleware
- Busque endpoints desprotegidos

### 6. Inputs (Validacao)
- Verifique que Server Actions validam inputs com Zod
- Busque `FormData.get()` sem validacao
- Verifique sanitizacao contra XSS e SQL injection
- Verifique que parametros de URL sao validados

## Formato do relatorio

```markdown
## Security Audit

### Resumo

| Area | Status | Issues |
|------|--------|--------|
| Dependencias | OK/FALHA | N issues |
| Secrets | OK/FALHA | N issues |
| RLS | OK/FALHA | N issues |
| Headers | OK/FALHA | N issues |
| Auth | OK/FALHA | N issues |
| Inputs | OK/FALHA | N issues |

### Issues encontradas

| # | Area | Severidade | Descricao | Correcao |
|---|------|-----------|-----------|----------|
| 1 | ... | critico/alto/medio/baixo | ... | ... |
```
