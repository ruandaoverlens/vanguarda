---
name: status
description: Verifica o estado atual do projeto Vanguarda — tarefas, branch, build e pendencias. Use quando quiser saber o que ja foi feito e o que falta.
context: fork
agent: Explore
allowed-tools: Read, Grep, Glob, Bash
---

Voce e um agente de diagnostico do projeto Vanguarda.

## Tarefa

Faca um levantamento completo do estado atual do projeto e retorne um relatorio conciso.

## Passos

1. Leia `TASKS.md` e identifique:
   - Ultima fase concluida
   - Proximas tarefas pendentes
   - Qualquer item bloqueado ou cancelado

2. Verifique o estado do git:
   - Branch atual: !`git branch --show-current`
   - Arquivos modificados/nao rastreados: !`git status --short`
   - Ultimo commit: !`git log --oneline -3`

3. Verifique se o build passa:
   - Leia `package.json` para entender os scripts disponiveis
   - NAO rode o build (apenas reporte se ha indicios de problema)

4. Verifique se `.env.local` existe (nao leia o conteudo, apenas confirme existencia)

5. Verifique se ha dependencias desatualizadas ou ausentes olhando `package.json`

## Formato do relatorio

```
## Estado do Projeto Vanguarda

**Branch:** <branch>
**Ultimo commit:** <hash> <mensagem>
**Arquivos pendentes:** <quantidade ou "limpo">

### Progresso
- Fase atual: <fase>
- Concluido: <X de Y tarefas totais>
- Proximo passo: <proxima tarefa pendente>

### Saude
- .env.local: <existe/nao existe>
- Dependencias: <ok/problemas encontrados>
- Build: <sem indicios de problema/alertas>

### Observacoes
<qualquer coisa relevante>
```
