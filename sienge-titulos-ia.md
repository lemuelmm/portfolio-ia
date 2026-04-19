# Contexto do Projeto: Criação de Títulos com IA

## Sobre este documento

Documento de transferência de contexto para continuidade do projeto em novo ambiente. Consolida todas as decisões, dados, artefatos e diretrizes acumulados ao longo do projeto.

---

## 1. Visão geral do projeto

**Projeto:** Criação de Títulos com IA (evolução)
**Time:** KillBills / Contas a Pagar
**Jornada:** Jornada Financeira
**Fase atual:** Validação
**Designer:** Lemuel
**PM:** Mika (principal stakeholder, voz das demandas de clientes)
**Produto:** Sienge (SaaS para construção civil, 25+ anos de mercado)

### O que estamos fazendo

Evoluindo a feature existente de criação de títulos com IA. A v1 já existe e funciona assim: o usuário faz upload de PDF, a IA extrai campos, e o usuário é direcionado para a tela legada de criação de título para concluir.

A evolução adiciona um **fluxo de criação em lote (batch)**, com uma nova experiência de revisão e criação que substitui o redirecionamento para a tela legada. O foco é no fluxo em lote; o fluxo unitário permanece inalterado por enquanto, aguardando resultados da validação.

### O que define sucesso

- Redução mensurável no tempo de criação de um título
- Redução no tempo de revisão/validação de um título lido pela IA
- Adoção e métricas positivas de uso do fluxo em lote

### Restrições fundamentais

- **Material UI (MUI):** biblioteca de componentes obrigatória, não negociável
- **Sistema legado:** 25 anos de mercado, qualquer mudança precisa manter coerência visual com o existente
- **Navegação por teclado:** princípio central do design, otimizado para power users
- **Benchmarks de referência:** Expensify, QuickBooks (validação de documentos), Linear, Superhuman (interfaces para power users), MUI X Data Grid (edição em lote)

---

## 2. Modelo de interação escolhido

O modelo de interação definido para o fluxo em lote é **grid + drawer sequencial**.

### Como funciona

1. Usuário faz upload de PDFs/XLSX
2. IA processa e extrai campos
3. Títulos aparecem em um **grid/tabela** com status de cada um (Completo, Incompleto, Validado)
4. Usuário clica em um título no grid para abrir um **drawer lateral** com os campos do título
5. No drawer, revisa/edita campos e avança sequencialmente ("Salvar e ir para o próximo")
6. Barra de progresso indica quantos títulos foram salvos

### Alternativas descartadas

- Split-view com tela legada
- Edição inline no grid
- Wizard passo a passo

---

## 3. Protótipos existentes

Existem protótipos de alta fidelidade no Figma para o fluxo completo em lote:

- Modal de upload
- Estado de processamento/sucesso da IA
- Grid/tabela com badges de status
- Drawer sequencial (desktop e mobile)

---

## 4. Decisões de design em aberto

Três decisões aguardam resultado da validação com usuários:

### 4.1 O que a barra de progresso deve contar?
- Opção A: títulos visitados
- Opção B: títulos salvos
- **Recomendação:** títulos salvos (reflete progresso real)

### 4.2 "Salvar e ir para o próximo" deve estar sempre visível?
- Opção A: sempre visível
- Opção B: aparece só quando há edições
- **Recomendação:** sempre visível

### 4.3 Qual título abre primeiro no drawer?
- Opção A: primeiro da lista
- Opção B: primeiro incompleto
- Opção C: o título clicado no grid
- **Recomendação:** clicar em um título no grid abre aquele título; uma ação geral de "revisar todos" abre o primeiro não salvo

---

## 5. Dados de analytics (v1 atual)

Todos os dados abaixo são da v1 existente. Não existe analytics do fluxo em lote porque ele ainda não foi implementado.

### 5.1 Funil de navegação (1.726 inícios)

- ~50% seguem pelo fluxo IA até o fim
- ~31% migram para criação manual
- ~4% fazem loop de volta para IA
- Pós-criação: ~27-31% clicam em itens do menu, ~11-13% vão para "Consultar"
- Drop-off dentro do fluxo é muito baixo (<1%)

**Insight principal:** metade dos usuários não completa o fluxo IA. Muitos dispersam para menus ou "Consultar" após criar um título.

### 5.2 Funil de repetição (6 etapas, 30 dias, conversão total 21,24%)

1.756 inícios → primeiro "Continuar" 56,72% (996) → reentrada 58,94% (587) → "Continuar" 95,74% (562) → reentrada 67,97% (382) → "Continuar" 97,64% (373)

- **O primeiro "Continuar" é o maior ponto de queda (56%):** esse é o principal problema do funil e o desafio central do design
- "Continuar" nas etapas seguintes converte a 95-97%
- Tempos medianos: step 1→2 ~16,5 min; step 2→3 ~2,1 hrs; step 3→4 ~335 seg; step 4→5 ~1,7 hrs

### 5.3 Distribuição de frequência (30 dias, fev-mar)

- ~87% dos usuários fazem menos de 10 usos/dia (média ~174 usuários/dia)
- Uso moderado (10-<20x): ~17,7/dia
- Power users (40+x/dia): menos de 2/dia em média
- Uso em finais de semana próximo de zero: confirma uso estritamente profissional

### 5.4 Comportamento pós-criação

"Consultar" após criar parece ser comportamento intencional (conferir títulos criados), não confusão.

---

## 6. Matriz CSD (resumo)

A matriz completa está documentada separadamente. Resumo executivo:

- **8 Certezas:** baseadas em analytics e fatos do produto
- **13 Suposições:** hipóteses a validar sobre confiança na IA, usabilidade do fluxo, comportamento do usuário e viabilidade técnica
- **14 Dúvidas:** perguntas abertas a investigar via entrevistas e observação
- **4 dimensões:** usabilidade do fluxo, confiança do usuário na IA, comportamento/rotina do usuário, precisão técnica da IA

### Itens mais críticos para a validação

- **S3/D8:** Por que 31% migram para o manual? É desconfiança, hábito ou falha de usabilidade?
- **S4/D7:** O drawer sequencial é a melhor forma de revisar, ou os usuários preferem acesso aleatório via grid?
- **S12/D13:** A precisão da IA é boa o suficiente para que a revisão seja confirmação e não retrabalho?
- **D10:** Quantos títulos o usuário precisa criar por vez? (dimensiona o ganho real do lote)

### Pontos de atrito confirmados (via feedback espontâneo de consultores)

- Cadastro automático de credor quando o credor não existe: quebra de fluxo
- IA não identifica tipo de documento nem número do documento: campos sempre manuais

---

## 7. Pesquisa com usuários

### Status atual

Pesquisa em andamento, fase de recrutamento. Outreach enviado para ~10 contatos (usuários + parceiros de canal).

| Contato | Tipo | Status |
|---|---|---|
| Raniely (Eurotech) | Usuário | Respondeu. Disse que não tem parte contábil/fiscal configurada. Aguardando confirmação sobre uso da feature. |
| Alexandre Barbosa | Usuário | Respondeu. Pendente agendar. |
| Marllos Kratka (PSA) | Canal | Sem resposta |
| João Perez | Canal | Sem resposta |
| Maria - faturamento (S. Fernandes) | Usuário | Sem resposta |
| Maria - financeiro (S. Fernandes) | Usuário | Sem resposta (mesma empresa, avaliar se entrevista as duas) |
| Tatiana Souza (BRZ Engenharia) | Usuário | Sem resposta |
| Jonatas (URB3) | Usuário | Sem resposta |
| Cassia (Gruporg Engenharia) | Usuário | Sem resposta |
| Caroline Machado (NG7 Consultoria) | Usuário | Sem resposta |

**Meta:** 5-8 entrevistas
**Nota:** recrutamento estagnou por conta de fechamento mensal (equipes de contas a pagar ocupadas no fim do mês). Follow-ups planejados para a semana seguinte (terça em diante).

### Abordagem de recrutamento

- Outreach para usuários: abre com "identificamos que você usa a funcionalidade" (senso de seleção pessoal)
- Nunca menciona criação em lote para não gerar viés
- Incentivo: acesso antecipado/exclusivo à nova versão
- Outreach para parceiros de canal: tom mais direto e de pares

---

## 8. Artefatos do projeto

| Artefato | Descrição |
|---|---|
| Matriz CSD completa | 8 certezas, 13 suposições, 14 dúvidas com dimensões e métodos de investigação |
| Plano de pesquisa | Roteiro estruturado para entrevistas de validação |
| Acompanhamento de recrutamento | Tracker com status de cada contato |
| Design case doc | Documento de case em construção (template + conteúdo parcial) |
| Protótipos Figma | Alta fidelidade: upload, processamento, grid, drawer (desktop + mobile) |

---

## 9. No horizonte

- Completar entrevistas de pesquisa e sintetizar achados
- Resolver as 3 decisões de design em aberto com base na validação
- Revisitar o fluxo unitário com base nos resultados
- Futuro potencial: exclusão em massa (pós-criação, na tela de listagem) com seleção por checkbox + barra de ações + modal de confirmação pesado

---

## 10. Ferramentas e ambiente

- **Analytics:** Mixpanel / Amplitude (extração de coortes para recrutamento)
- **Design:** Figma (protótipos), Miro (board de discovery)
- **Prototipação auxiliar:** Google Stitch (exploração de componentes MUI)
- **Componentes:** Material UI (MUI X Data Grid para padrões de tabela)
- **Comunicação:** Microsoft Teams

---

## 11. Modo de trabalho preferido

- **Confirmação antes de produzir:** Claude pergunta de forma estruturada, confirma interpretação, depois produz output
- **Construção iterativa:** artefatos são rascunhados e refinados em múltiplas trocas, nunca de uma vez só
- **Escrita:** sem travessões longos (em dashes) em nenhum output escrito (lê como gerado por IA). Usar dois pontos ou pontuação alternativa
- **Idioma:** português brasileiro para documentos e comunicações. Registrar linguístico deve acompanhar o contexto
