# Vanguarda

Aplicacao web fullstack moderna construida com Next.js e Supabase.

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router) |
| Linguagem | TypeScript |
| UI | React 19 |
| Estilizacao | Tailwind CSS 4 |
| Auth | Supabase Auth |
| Banco de dados | Supabase (PostgreSQL) |
| Storage | Supabase Storage |
| Runtime | Node.js v25.6.0 |
| Package Manager | npm 11.8.0 |

## Pre-requisitos

- Node.js >= 25
- npm >= 11
- Conta no [Supabase](https://supabase.com)

## Setup local

```bash
# 1. Clone o repositorio
git clone https://github.com/<seu-usuario>/vanguarda.git
cd vanguarda

# 2. Instale as dependencias
npm install

# 3. Configure as variaveis de ambiente
cp .env.example .env.local
# Preencha .env.local com suas credenciais do Supabase

# 4. Rode o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

## Estrutura do projeto

```
vanguarda/
├── src/
│   ├── app/          # App Router (pages, layouts, rotas)
│   ├── components/   # Componentes React reutilizaveis
│   ├── lib/          # Utilitarios e configuracoes (supabase client)
│   └── types/        # Tipos TypeScript
├── public/           # Assets estaticos
├── .env.example      # Template de variaveis de ambiente
├── CLAUDE.md         # Contexto do projeto para o Claude Code
└── TASKS.md          # Roadmap e controle de tarefas
```

## Decisoes tecnicas

Documentadas em `CLAUDE.md`. Progresso em `TASKS.md`.
