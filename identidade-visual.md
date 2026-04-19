# Identidade Visual

Sistema de design do novo portfólio. Complementa o [arquitetura-site.md](arquitetura-site.md) (estrutura de páginas) e o [portfolio-conteudo.md](portfolio-conteudo.md) (texto final).

---

## Abordagem

Brutalismo minimalista e atemporal, inspirado no DNA comum dos quatro portfólios em [REFERENCES.md](REFERENCES.md): tipografia forte, imagem como apoio, nada decorativo.

Posicionamento estético: começar mais próximo do **Ed Chao** (tipografia dominante, blocos geométricos onde entrariam imagens) e migrar para **Tom Parkes** quando os assets finais (GIFs, fotos, screenshots) chegarem. Mesmo layout, densidade visual diferente. Estratégia chamada aqui de **Parkes-flirt**.

---

## Tipografia

### Famílias

- **Display**: Space Grotesk, bold. Carrega personalidade nos títulos e números.
- **Corpo**: Inter, regular e medium. Segura a leitura sem brigar com o display.

Ambas gratuitas via Google Fonts ou self-hosted.

### Escala

| Uso | Fonte | Tamanho | Peso |
|---|---|---|---|
| Page title / Hero | Space Grotesk | 64 a 80px | Bold |
| Número de impacto | Space Grotesk | 48 a 60px | Bold |
| "Próximo case" (link) | Space Grotesk | 40 a 48px | Bold |
| Parte / Subtítulo | Space Grotesk | 36 a 40px | Bold |
| Item de lista destaque | Space Grotesk | 24 a 28px | Bold |
| Lead paragraph | Inter | 20px | Regular |
| Body | Inter | 18px | Regular |
| Small / UI | Inter | 14 a 16px | Regular |
| Label (uppercase) | Inter | 12 a 14px | Medium |

---

## Paleta

**Opção 2**: branco creme + preto profundo + verde floresta como acento.

| Token | Valor | Uso |
|---|---|---|
| Fundo | `#FAFAF7` | Background de todas as páginas |
| Texto primário | `#0A0A0A` | Títulos e corpo principal |
| Texto secundário | `#666666` | Metadata, datas, labels |
| Linhas / divisores | `#E0E0E0` | Separadores entre seções |
| Acento | `#2D4A2B` | Hover de link, microdetalhes |

O verde floresta amarra a trilha de sustentabilidade sem virar slogan colorido. Aplicação parcimoniosa.

---

## Espaçamento

- Grid base: 8px
- Padding lateral da página: 32px (mobile), 80px (desktop), 120px (wide)
- Gap entre seções: 120 a 160px
- Gap entre elementos: 16 a 32px
- Largura máxima de leitura: ~700px para texto corrido

---

## Princípios de layout

1. **Coluna única** em todas as páginas. Largura de leitura constante.
2. **Divisores finos** entre seções, não cards nem caixas.
3. **Labels uppercase pequenos** organizam hierarquia sem competir com o conteúdo.
4. **Números em destaque isolados**: métricas de impacto (60%, 80%, 90%+) aparecem em display grande, separadas do parágrafo.
5. **Slots de imagem sempre full-width** do container. Quando vazios, viram blocos geométricos discretos, não "placeholder feio".
6. **Sem animação ornamental**. Transições mínimas (hover simples, scroll natural).
7. **Nav no topo não fixa**, footer pesado com contato.

---

## Wireframes

### Home (/)

```
[nav topo]

LEMUEL MONTEIRO
PRODUCT DESIGNER

Cinco anos construindo produtos digitais,
com uma trilha consistente em sustentabilidade.

Juazeiro do Norte, Ceará

────

SOBRE
[parágrafo curto com versão curta do "Sobre mim"]
→ Ler mais

────

TRABALHOS

[slot]  SIENGE · STARIAN
        Discovery de IA para criação de títulos
        em lote. 2025 a atual  →

[slot]  GEOPARK ARARIPE
        Digitalização dos processos de avaliação
        ambiental (UNESCO). 2024  →

[slot]  YOUSE SEGUROS
        Login com CPF e Calculadora de CO2.
        2022 a 2024  →

[slot]  PAGURU DIGITAL SOLUTIONS
        Projetos em educação, saúde e jurídico.
        2020 a 2022  →

────

[footer]
```

### Case page (/work/{slug})

```
[nav topo]

← Trabalhos

YOUSE SEGUROS                     (Space Grotesk 64-80px bold)
Product Designer via BOLD Brasil  (Inter 20px)
2022 a 2024

[slot 16:9 para hero image ou GIF]

────

CONTEXTO                          (label uppercase 14px)
[parágrafo 18px]

────

PARTE 1
LOGIN COM CPF                     (Space Grotesk 40px)

O PROBLEMA
[parágrafo + bullets]

A DECISÃO
[parágrafo]

O ROLLOUT
1. Faseamento
2. Construção das perguntas
3. Métrica por fase

IMPACTO
60%                               (Space Grotesk 60px bold, isolado)
redução em contatos de suporte relacionados a login.
[continua]

[slot de GIF ou imagem]

────

PARTE 2
CALCULADORA DE CO2
[mesma estrutura]

IMPACTO
90%+                              (Space Grotesk 60px bold)
satisfação (thumbs up) na tela principal.

[grid 2x2 de screenshots]

REPERCUSSÃO NA IMPRENSA
→ Terra
→ Revista Cobertura
→ Youse ESG

────

TAMBÉM ATUEI EM
Endosso de contrato. [parágrafo curto]

PRÓXIMO CASE
GEOPARK ARARIPE →                 (Space Grotesk 48px link)

[footer]
```

**Variações por case**:
- Youse e Geopark: estrutura completa com hero image e partes.
- Sienge e Paguru: estrutura enxuta, sem "Partes", sem hero image, só contexto + conteúdo + próximo case.

### Sobre (/sobre)

```
[nav topo]

SOBRE                             (Space Grotesk 64-80px)

[parágrafo lead em Inter 20px: abertura do "Sobre longa"]
[parágrafos seguintes em 18px]

────

COMO TRABALHO                     (label 14px uppercase)
[parágrafo de abertura]

Confirmação antes do pixel        (Space Grotesk 24px bold)
[descrição Inter 18px]

Dados primeiro
[descrição]

IA como ferramenta de exploração
[descrição]

Construção iterativa
[descrição]

────

COMPETÊNCIAS

01  Discovery baseado em dados    (Space Grotesk 28px)
    [explicação breve Inter 16px]

02  Design de interfaces para operação
03  Produtos com impacto socioambiental
04  Prototipação iterativa em Figma + IA

────

EDUCAÇÃO

Bacharelado em Sistemas de Informação
UniFAP · 2017 a 2021

Certificações
· Google UX Design (Coursera)
· Design for the 21st Century com Don Norman (IxDF)
· EFSET B2

[footer]
```

### Fora do trabalho (/fora-do-trabalho)

```
[nav topo]

FORA DO TRABALHO                  (Space Grotesk 64-80px)

"Tentando descobrir meu lugar em um mundo novo todo dia, com curiosidade e resiliência."
                                  (Space Grotesk 36px, citação)

Juazeiro do Norte · Maio 2025     (Inter 14px, meta)

────

Fotografia                        (Space Grotesk 56px bold, cada interesse
Cozinha                            em linha própria, espaçamento generoso)
Jiu-jitsu
Trilha
Animal
Planta
Agrofloresta

────

GALERIA                           (label 14px uppercase)

[grid 3x3 de placeholders 1:1]    (slots Parkes-flirt)
[conforme fotos chegarem, substitui]

[footer]
```

---

## Componentes padrão

### Navegação topo

```
LEMUEL MONTEIRO              trabalhos · sobre · fora do trabalho
```

- Logo texto à esquerda, menu à direita.
- Itens em Inter 14-16px, uppercase opcional.
- Hover com verde floresta.
- Não fixa (deixa scroll natural).

### Footer

```
────────────────────────────────────────

lemuelmonteirom@gmail.com                  Juazeiro do Norte · CE
LinkedIn                                   2026
```

- Presente em todas as páginas.
- Inter 14-16px, texto secundário para meta.
- Links sublinhados só em hover.

### Slot de imagem

- Quando vazio: fundo levemente mais escuro que o background (`#F0F0EC`), nada dentro.
- Quando preenchido: imagem ocupa todo o slot, sem moldura.
- Aspect ratios padrão: 16:9 (hero), 4:3 (screenshot), 1:1 (galeria).

---

## Assets pendentes

- Preview visual de cada case (4 imagens ou blocos tratados)
- GIF do login Youse
- Foto do Geopark (em campo ou no território do Araripe)
- Galeria inicial de /fora-do-trabalho (fotografia, trilha, cozinha)

---

## Próximos passos sugeridos

1. **Stack de desenvolvimento**: decisão entre Astro (estático, bom para portfólio), 11ty (minimalista) ou HTML/CSS puro. Influencia como o conteúdo é estruturado em arquivos.
2. **Prototipação no Figma** (opcional): um frame por página tipo, aplicando os tokens. Útil para ver a respiração real antes de codar.
3. **Produção de assets** com specs concretas (dimensões, formato, duração de GIF, estilo de foto).
