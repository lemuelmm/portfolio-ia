# Brief de prototipagem — Portfólio de Lemuel Monteiro

Documento autocontido para prototipar em Lovable, Figma Make, Google AI Studio, Google Stitch ou similar. Não precisa de anexos.

---

## Objetivo

Prototipar a **home** e **uma página de case (Geopark Araripe)** de um portfólio de Product Designer. Estilo: **brutalismo minimalista atemporal**. Tipografia carrega o peso, imagem é apoio. Nenhuma animação ornamental.

Público-alvo: recrutadores (leitura rápida) e clientes de freelance (leitura longa). O site precisa ser escaneável em 10 segundos e sustentar leitura profunda depois.

---

## Stack alvo

Site estático, multi-page, HTML/CSS (ou Astro/React gerando HTML estático). **Sem backend, sem autenticação, sem IA em runtime, sem animações de scroll, sem parallax, sem partículas.** Transições limitadas a hover simples (cor de link).

---

## Sistema visual

### Tipografia

- **Display**: Space Grotesk Bold (títulos, números de impacto, links grandes). Google Fonts.
- **Corpo**: Inter Regular/Medium (texto, UI, labels). Google Fonts.

Escala:

| Uso | Fonte | Tamanho | Peso |
|---|---|---|---|
| Hero / page title | Space Grotesk | 64–80px | Bold |
| Número de impacto (isolado) | Space Grotesk | 48–60px | Bold |
| Link "próximo case" | Space Grotesk | 40–48px | Bold |
| Parte / subtítulo | Space Grotesk | 36–40px | Bold |
| Item de lista destaque | Space Grotesk | 24–28px | Bold |
| Lead paragraph | Inter | 20px | Regular |
| Body | Inter | 18px | Regular |
| Small / UI | Inter | 14–16px | Regular |
| Label uppercase | Inter | 12–14px | Medium, letter-spacing 0.08em |

### Paleta

| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#FAFAF7` | Fundo de todas as páginas (branco creme) |
| `--text` | `#0A0A0A` | Títulos e corpo principal (preto profundo) |
| `--text-muted` | `#666666` | Metadata, datas, labels |
| `--divider` | `#E0E0E0` | Linhas finas entre seções |
| `--accent` | `#2D4A2B` | Hover de link, microdetalhes (verde floresta) |
| `--slot-empty` | `#F0F0EC` | Fundo de slot de imagem vazio |

Verde floresta é acento parcimonioso — amarra a trilha de sustentabilidade do portfólio. Nunca grandes superfícies, nunca título colorido.

### Espaçamento

- Grid base: 8px.
- Padding lateral: 32px mobile / 80px desktop / 120px wide.
- Gap entre seções: 120–160px.
- Gap entre elementos: 16–32px.
- Largura máxima de leitura: ~700px para texto corrido (coluna única, centralizada ou alinhada à esquerda).

### Princípios de layout

1. **Coluna única** em todas as páginas. Sem grids de múltiplas colunas para texto.
2. **Divisores finos** (1px, `--divider`) entre seções. Nunca cards, nunca caixas, nunca sombras.
3. **Labels uppercase pequenos** (Inter 12–14px) organizam hierarquia sem competir com o conteúdo.
4. **Números em destaque isolados**: métricas (80%, 60%, 90%+) em linha própria, Space Grotesk 48–60px bold, texto descritivo abaixo em Inter 18px.
5. **Slots de imagem full-width do container**. Quando vazios, fundo `--slot-empty`, sem texto de placeholder, sem moldura. Proporções: 16:9 (hero), 4:3 (screenshot), 1:1 (galeria).
6. **Nav no topo não fixa**. Scroll natural.
7. **Footer pesado** com contato, presente em todas as páginas.

---

## Componentes globais

### Nav (topo, não fixa)

```
LEMUEL MONTEIRO                         Trabalhos  ·  Sobre  ·  Fora do trabalho
```

- Logo texto à esquerda (Inter medium 14–16px, linka para `/`).
- Menu à direita (Inter 14–16px, itens separados por ` · `).
- Hover muda cor para `--accent`.
- Padding vertical 24–32px.

### Footer (em todas as páginas)

```
────────────────────────────────────────────────────

lemuelmonteirom@gmail.com                 Juazeiro do Norte · CE
LinkedIn                                  2026
```

- Divisor fino acima.
- Duas colunas em desktop, empilhado em mobile.
- Inter 14–16px, cor `--text-muted` para metadata à direita.
- Links sublinhados só em hover.

---

## Páginas a prototipar

### 1. Home (`/`)

```
[ NAV TOPO ]

LEMUEL MONTEIRO                           ← Space Grotesk 64–80px bold
PRODUCT DESIGNER                          ← Inter 20px, text-muted

Cinco anos construindo produtos digitais,
com uma trilha consistente em sustentabilidade.   ← Inter 20px lead, max ~700px

Juazeiro do Norte · Ceará                 ← Inter 14px, text-muted

──────────── divisor ────────────

SOBRE                                     ← label uppercase 14px, text-muted

Product Designer com cinco anos de experiência em produtos digitais.
Atuo hoje na Starian (antiga Softplan), no time de Contas a Pagar do Sienge,
e mantenho uma trilha consistente de projetos em sustentabilidade:
Geopark Araripe (UNESCO), GIR e a Calculadora de CO2 da Youse Seguros.
                                          ← Inter 18px, max ~700px

→ Ler mais                                ← link para /sobre, Inter 16px

──────────── divisor ────────────

TRABALHOS                                 ← label uppercase 14px

[slot 4:3 vazio]   SIENGE · STARIAN       ← Space Grotesk 28px bold
                   Discovery de IA para criação de títulos em lote.
                   2025 a atual  →        ← Inter 16px, text-muted

[slot 4:3 vazio]   GEOPARK ARARIPE
                   Digitalização dos processos de avaliação
                   ambiental (UNESCO). 2024  →

[slot 4:3 vazio]   YOUSE SEGUROS
                   Login com CPF e Calculadora de CO2.
                   2022 a 2024  →

[slot 4:3 vazio]   PAGURU DIGITAL SOLUTIONS
                   Projetos em educação, saúde e jurídico.
                   2020 a 2022  →

[ FOOTER ]
```

**Notas da home:**
- Cards de case **não são caixas**. São linhas com slot de imagem à esquerda (ou em cima no mobile) e texto à direita. Divisor fino entre cards.
- Card inteiro é clicável, leva para `/work/{slug}`.
- Hover no card: texto muda para `--accent`.
- A seta `→` é parte do texto, não ícone separado.

### 2. Case: Geopark Araripe (`/work/geopark`)

```
[ NAV TOPO ]

← Trabalhos                               ← Inter 14px, text-muted, linka para /

GEOPARK ARARIPE                           ← Space Grotesk 64–80px bold
Designer de Produtos                      ← Inter 20px
Abril a Dezembro de 2024 · Crato, CE      ← Inter 16px, text-muted

[ slot 16:9 vazio — hero ]                ← fundo --slot-empty, sem texto dentro

──────────── divisor ────────────

CONTEXTO                                  ← label uppercase 14px

Atuei no Geopark Araripe, instituição ligada à UNESCO que atua como
catalisador de transformação sustentável na região do Cariri cearense
(área que engloba a Floresta Nacional do Araripe, a primeira FLONA do
Brasil). O foco do projeto era digitalizar os processos de avaliação
das áreas de preservação.
                                          ← Inter 18px, max ~700px

──────────── divisor ────────────

HISTÓRICO DO PROJETO                      ← label uppercase 14px

Esse projeto atravessou três fases da minha trajetória, e cada retomada
trouxe refinamentos baseados no que eu tinha aprendido no intervalo.
                                          ← Inter 18px

01   Graduação (NexTI)                    ← Space Grotesk 24–28px bold
     Primeiro contato, estruturação do problema e protótipo inicial.  ← Inter 16px

02   Período voluntário
     Retomada por conta própria, com refinamentos baseados em experiências
     acumuladas no mercado.

03   2024 com a instituição
     Liderança direta da implementação da solução digital, dentro da
     estrutura do Geopark.

──────────── divisor ────────────

O DESAFIO                                 ← label uppercase 14px

O processo manual de avaliação dos locais de preservação, feito com
papel e caneta em campo, gerava atrasos na coleta e análise dos dados.
Esses atrasos comprometiam o planejamento das ações de conservação,
que é o trabalho central do Geopark.
                                          ← Inter 18px

──────────── divisor ────────────

A ABORDAGEM                               ← label uppercase 14px

Liderança de time                         ← Space Grotesk 24–28px bold
Coordenação do time de desenvolvimento em ciclos ágeis.   ← Inter 16px

Definição de escopo
Identificação da necessidade de uma fórmula matemática para mensurar
as condições dos locais avaliados, gerando relatórios mais precisos
para os gestores.

Pesquisa e design
Entrevistas com stakeholders (avaliadores e gestores), protótipos
de alta fidelidade e testes de usabilidade.

──────────── divisor ────────────

A SOLUÇÃO                                 ← label uppercase 14px

App para avaliadores                      ← Space Grotesk 24–28px bold
Ferramenta de coleta em campo, substituindo o caderno e caneta
do processo anterior.

[ slot 4:3 vazio — screenshot app ]

Painel web para gestores
Consolidação dos dados, aplicação da fórmula matemática e geração
de relatórios para tomada de decisão.

[ slot 4:3 vazio — screenshot painel ]

──────────── divisor ────────────

IMPACTO                                   ← label uppercase 14px

80%                                       ← Space Grotesk 60px bold, isolado em linha própria
redução no tempo do processo de avaliação.   ← Inter 18px, linha seguinte

Ferramenta em fase de testes finais com gestores ambientais ao fim
da minha atuação em 2024.
                                          ← Inter 18px

──────────── divisor ────────────

PRÓXIMO CASE                              ← label uppercase 14px

YOUSE SEGUROS  →                          ← Space Grotesk 40–48px bold, linka para /work/youse

[ FOOTER ]
```

**Notas do case:**
- Hero image é o único slot 16:9. Demais slots são 4:3.
- Métrica "80%" aparece sozinha em linha própria, sem parágrafo em volta. Texto descritivo na linha seguinte.
- Linha "Próximo case" é o único elemento tipográfico grande depois da métrica — serve como call-to-read.

---

## Critérios de aceitação

O protótipo está pronto quando:

1. **Hierarquia tipográfica**: olhando a página sem ler, dá para distinguir título > subtítulo > label > corpo sem esforço.
2. **Respiração**: nenhum bloco de conteúdo está apertado. Gap mínimo entre seções = 120px.
3. **Coluna única** mantida em toda a leitura. Texto nunca passa de ~700px.
4. **Slots vazios** parecem intencionais (bloco com fundo levemente mais escuro), não "placeholder feio".
5. **Métrica de impacto (80%)** é a coisa mais visível da página depois do título do case.
6. **Navegação topo + footer** iguais nas duas páginas.
7. **Mobile**: hero desce para 40–48px, padding lateral cai para 32px, cards de case viram empilhados (slot em cima, texto embaixo), footer vira uma coluna.
8. **Zero animações ornamentais**. Nenhuma transição além de hover de link (cor → verde floresta).

---

## O que evitar (erros comuns de geradores de IA)

- **Não** colocar cards com sombra, borda arredondada pronunciada ou fundo colorido.
- **Não** adicionar ícones decorativos (emojis, ilustrações, ícones de seção).
- **Não** usar gradientes, blurs ou glassmorphism.
- **Não** colocar animações de scroll, fade-in, parallax, contadores animados.
- **Não** usar mais de duas fontes (Space Grotesk + Inter, só isso).
- **Não** preencher slots de imagem com stock photos — deixar vazios como blocos geométricos.
- **Não** inventar seções extras ("Depoimentos", "Skills em barras de progresso", "Timeline animada").
- **Não** colocar menu hambúrguer no desktop. Mobile pode ter hambúrguer simples, mas opcional.
- **Não** criar uma página `/contato` separada. O contato vive no footer.

---

## Entregáveis esperados

1. Home (`/`) navegável.
2. Case Geopark (`/work/geopark`) navegável.
3. Link da home levando para o case e de volta (botão "← Trabalhos").
4. Responsivo (desktop + mobile no mínimo).
5. Código exportável (HTML/CSS ou componente React) — vai ser refinado depois em Astro.
