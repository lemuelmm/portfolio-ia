# Conteúdo do Portfólio

Versão final do texto que vai para o site. Fonte bruta: [portfolio-historico.md](portfolio-historico.md). Decisões editoriais: [portfolio-planejamento.md](portfolio-planejamento.md).

---

## Tagline

> Lemuel Monteiro. Product Designer. Cinco anos construindo produtos digitais, com uma trilha consistente em sustentabilidade. Baseado em Juazeiro do Norte, Ceará.

Obs: dependendo do layout, nome e localização podem sair da tagline e virar bloco de header (nome grande, "Product Designer, Juazeiro do Norte/CE" como meta, tagline abaixo).

---

## Sobre mim

### Versão curta (hero / topo)

> Product Designer com cinco anos de experiência em produtos digitais. Atuo hoje na Starian (antiga Softplan), no time de Contas a Pagar do Sienge, e mantenho uma trilha consistente de projetos em sustentabilidade: Geopark Araripe (UNESCO), GIR e a Calculadora de CO2 da Youse Seguros.

### Versão longa (página About)

> Sou Lemuel Monteiro, Product Designer brasileiro. Hoje atuo na Starian (antiga Softplan), no produto Sienge, desenhando interfaces de contas a pagar para construção civil, com foco em fluxos densos para power users.
>
> Antes, trabalhei na Youse Seguros via BOLD Brasil em projetos de autenticação (migração de login para CPF com perguntas de segurança) e no produto de Calculadora de CO2, que virou solução independente de consciência ambiental.
>
> Desde a graduação em Sistemas de Informação, tenho uma trilha consistente em projetos com impacto socioambiental: o Geopark Araripe (UNESCO), onde liderei a digitalização dos processos de avaliação ambiental, e a GIR, onde contribuí voluntariamente com a plataforma de gestão de resíduos.
>
> Minha prática combina rigor de decisão (pesquisa com dados, matriz CSD, validação antes do pixel) com atenção ao que o produto deixa no mundo.

---

## Competências

1. **Discovery baseado em dados**: analytics + pesquisa qualitativa.
2. **Design de interfaces para operação**: power users, densidade de informação, navegação por teclado.
3. **Produtos com impacto socioambiental**: sustentabilidade como prática, não como slogan.
4. **Prototipação iterativa em Figma + IA**: uso de IA como ferramenta de exploração e rascunho antes do refino no Figma.

---

## Como trabalho

> Começo com confirmação: não desenho enquanto não tenho clareza sobre o problema. Na prática, quatro hábitos:
>
> - **Confirmação antes do pixel**: uso matriz CSD para separar certezas, suposições e dúvidas antes de abrir o Figma.
> - **Dados primeiro**: leio analytics de uso antes de propor qualquer mudança. Se os dados não respondem, recorto pesquisa qualitativa.
> - **IA como ferramenta de exploração**: uso Claude e Google Stitch para rascunhar artefatos e explorar componentes antes de refinar no Figma.
> - **Construção iterativa**: protótipos evoluem em ciclos curtos de validação, não em entrega única.

---

## Cases

### Youse Seguros (via BOLD Brasil)
**Product Designer | Jun. 2022 a Mar. 2024**

**Contexto**

Atuei na Youse Seguros, seguradora 100% digital brasileira, por meio da BOLD Brasil. Trabalhei em dois produtos principais: autenticação no app e site, e o produto de seguro auto por quilometragem rodada, que abrigava a Calculadora de CO2.

---

#### Parte 1: Login com CPF e perguntas de segurança

**O problema**

A base de acesso da Youse estava ancorada em e-mail e senha, e o modelo tinha três falhas estruturais:

- **E-mails compartilhados**: vários clientes usando o mesmo endereço, o que invalidava qualquer metrificação de comunicação.
- **E-mails desatualizados**: sem forma de saber se o canal ainda era válido.
- **Sem chave única confiável**: a base não estava normalizada por pessoa.

**A decisão**

CPF foi escolhido como chave primária porque é único por pessoa e permite normalizar a base. Com CPF no lugar, perguntas de segurança entraram como alternativa à senha em casos de recuperação e primeiro acesso.

**O rollout**

Três cuidados centrais:

1. **Faseamento**: lançamento gradual para não impactar clientes com login ativo.
2. **Construção das perguntas**: perguntas que só o cliente saberia responder, com caminhos de ajuda para quando erra, contagem de tentativas e bloqueio após múltiplas respostas erradas.
3. **Métrica por fase**: acompanhamento de taxa de acerto, contatos de ajuda e recuperação de senha antes de avançar cada fase.

**Impacto**

Redução de cerca de 60% em contatos de suporte relacionados a login e acesso. Base de clientes passou a ser normalizada por CPF, o que destravou metrificação de comunicação e manutenção mais precisa do canal de contato.

**Artefatos**
- GIF: fluxo completo de primeiro acesso com CPF e perguntas de segurança (a produzir)
- Protótipo Figma: fluxo completo (entrada, confirmação de dados, perguntas, desbloqueio)

---

#### Parte 2: Calculadora de CO2

**O problema / oportunidade**

O seguro auto da Youse opera no modelo "paga o quanto usa", cobrando pelo Km rodado. Os dados de Km já estavam sendo coletados pelo app, o que abria uma oportunidade inédita: traduzir isso em impacto ambiental e educação do cliente, sem pedir nenhum dado novo.

**A solução**

Desenhei uma calculadora que mostra quanto CO2 o cliente emitiu no mês a partir do Km rodado e do tipo de combustível, com dicas acionáveis para reduzir a pegada: transporte alternativo, carona solidária, apoio a ONGs que compensam emissão.

Três destaques de design:

- **Contexto junto do número**: "acima do recomendado" ao lado de "1800 Kg de CO2", para que o dado signifique algo.
- **Três caminhos de ação**: reduzir uso, compensar via ONG, apoiar iniciativas.
- **Vínculo com o produto**: seguro auto por Km entra como opção real de redução, não como vitrine.

**Impacto**

- **Satisfação alta**: mais de 90% de avaliação positiva (thumbs up na interface) entre usuários que concluíram o onboarding e chegaram à tela principal da calculadora.
- **Expansão para toda a base**: a calculadora saiu do escopo do seguro por Km e virou feature independente, disponível para qualquer cliente Youse com carro.
- **Conscientização ambiental**: relatos espontâneos de clientes e repercussão em imprensa (ver abaixo), reforçando o pilar ESG da empresa.

**Repercussão na imprensa**
- [Terra: Calculadora permite a segurados medir quantidade de carbono emitida por carros](https://www.terra.com.br/economia/calculadora-permite-a-segurados-medir-quantidade-de-carbono-emitida-por-carros,dc5429be9ae8262c8001528862c65f69n672ypsn.html)
- [Revista Cobertura: Youse lança calculadora que mede emissão de CO2 vinculada ao seguro auto](https://www.revistacobertura.com.br/noticias/auto-servicos/youse-lanca-calculadora-que-mede-emissao-de-co2-vinculada-ao-seguro-auto-pay-per-use/)
- [Youse: Iniciativas de conscientização e redução de impacto ambiental](https://www.youse.com.br/blog/imprensa/releases/esg/youse-reforca-iniciativas-de-conscientizacao-e-reducao-de-impacto-ambiental)

**Artefatos**
- GIF: fluxo de cálculo e resultado da calculadora
- Screenshot: formulário de entrada (combustível + Km rodado)
- Screenshot: resultado com classificação e número
- Screenshot: caminhos de redução de emissões
- Screenshot: apoio a ONG parceira para compensação

---

#### Também atuei em

**Endosso de contrato**: edição de dados cadastrais e coberturas (Km de guincho, beneficiários de seguro de vida) diretamente no app, reduzindo dependência de canais de atendimento.

---

### Geopark Araripe (UNESCO)
**Designer de Produtos | Abr. 2024 a Dez. 2024 · Crato, CE**

**Contexto**

Atuei no Geopark Araripe, instituição ligada à UNESCO que atua como catalisador de transformação sustentável na região do Cariri cearense (área que engloba a Floresta Nacional do Araripe, a primeira FLONA do Brasil). O foco do projeto era digitalizar os processos de avaliação das áreas de preservação.

**Histórico do projeto**

Esse projeto atravessou três fases da minha trajetória, e cada retomada trouxe refinamentos baseados no que eu tinha aprendido no intervalo:

1. **Graduação (NexTI)**: primeiro contato, estruturação do problema e protótipo inicial de solução.
2. **Período voluntário**: retomada por conta própria, com refinamentos baseados em experiências acumuladas no mercado.
3. **2024 com a instituição**: liderança direta da implementação da solução digital, dentro da estrutura do Geopark.

**O desafio**

O processo manual de avaliação dos locais de preservação, feito com papel e caneta em campo, gerava atrasos na coleta e análise dos dados. Esses atrasos comprometiam o planejamento das ações de conservação, que é o trabalho central do Geopark.

**A abordagem**

- **Liderança de time**: coordenação do time de desenvolvimento em ciclos ágeis.
- **Definição de escopo**: identificação da necessidade de uma fórmula matemática para mensurar as condições dos locais avaliados, gerando relatórios mais precisos para os gestores.
- **Pesquisa e design**: entrevistas com stakeholders (avaliadores e gestores), protótipos de alta fidelidade e testes de usabilidade.

**A solução**

- **App para avaliadores**: ferramenta de coleta em campo, substituindo o caderno e caneta do processo anterior.
- **Painel web para gestores**: consolidação dos dados, aplicação da fórmula matemática e geração de relatórios para tomada de decisão.

**Impacto**

Redução de 80% no tempo do processo de avaliação. Ferramenta em fase de testes finais com gestores ambientais ao fim da minha atuação em 2024.

**Artefatos**

- Screenshots do app de avaliação em campo
- Screenshots do painel web de gestão
- Foto em campo / no território do Araripe (a incluir)

### Sienge · Starian (antiga Softplan)
**Designer de Produtos | Mai. 2025 a Atual**

Atuo no produto Sienge (SaaS para construção civil com mais de 25 anos de mercado), no time KillBills / Contas a Pagar da Jornada Financeira. Entrei pela Softplan em maio de 2025 e continuei na Starian após a cisão em agosto do mesmo ano.

Hoje estou em discovery de uma evolução da criação de títulos com IA, com foco em fluxo em lote: upload de múltiplos documentos, extração automática de campos e revisão sequencial. Trabalho com interfaces densas para power users, navegação por teclado como princípio e uso matriz CSD para estruturar certezas, suposições e dúvidas antes de abrir o Figma.

**Temas e ferramentas ativos**

- Discovery com analytics (Mixpanel, Amplitude) antes do Figma
- Pesquisa qualitativa com usuários e parceiros de canal
- Material UI (MUI X Data Grid) para padrões de tabela e edição em lote
- Google Stitch como ferramenta de exploração de componentes
- Benchmarking explícito (Expensify, Linear, Superhuman, QuickBooks)

Posso contar mais em conversa.

### Paguru Digital Solutions
**UX/UI Designer (Set. 2020 a Jan. 2021) → Product Designer (Jan. 2021 a Fev. 2022) · Juazeiro do Norte, CE**

**Contexto**

Atuei em projetos para clientes externos em diversos setores: educação, saúde, jurídico e serviços. Papel com foco em descoberta de produto, validação de problemas, definição de escopo, fluxos e prototipação em baixa e alta fidelidade.

Três projetos de destaque:

**Sistema para escolas de dança**

Pequenas e médias escolas dependiam de ferramentas desconectadas para gerenciar alunos, pagamentos e turmas, o que dificultava a operação e a transferência de conhecimento entre pessoas. Desenhei um aplicativo integrado (matrículas, frequência, pagamentos, emissão de recibos, interação entre professores, alunos e gestores) acompanhado de um painel web para tarefas administrativas, com interface baseada em Material Design. O resultado reduziu o tempo de gerenciamento operacional e viabilizou um modelo de assinatura acessível para esse segmento.

**PlantON (app de gestão de plantões)**

Gestores de hospitais dependiam de grupos de WhatsApp para encontrar médicos disponíveis, o que tornava o preenchimento de vagas lento e desorganizado. Desenhei um app que conecta gestores e médicos plantonistas, com publicação de plantões por critérios e integração com redes sociais. O resultado eliminou a dependência do WhatsApp, reduziu o tempo de preenchimento de vagas e melhorou o alinhamento entre as duas pontas.

**ExtraJud (consulta jurídica para cartórios)**

Atuei na definição do problema, do público-alvo (titulares, colaboradores e concurseiros) e dos fluxos do app, com interface baseada em Material Design / Material You. O projeto buscava acelerar consultas jurídicas da operação de cartórios por meio de tecnologia.

---

## Educação

**Formação**

Bacharelado em Sistemas de Informação | UniFAP (Centro Universitário Paraíso) | 2017 a 2021

**Certificações**

- Google UX Design (Coursera)
- Design for the 21st Century com Don Norman (IxDF)
- EFSET B2 (inglês Upper Intermediate)

---

## Fora do trabalho

> Tentando descobrir meu lugar em um mundo novo todo dia, com curiosidade e resiliência.

- Fotografia
- Cozinha
- Jiu-jitsu
- Trilha
- Animal
- Planta
- Agrofloresta

---

## Contato

- E-mail: lemuelmonteirom@gmail.com
- LinkedIn: https://www.linkedin.com/in/lemuelmonteiro
