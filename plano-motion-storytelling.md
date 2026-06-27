# Plano de Motion + Storytelling

Plano para explorar alternativas de **movimento e narrativa** no portfólio, evoluindo o DNA
brutalista já decidido. Complementa o [identidade-visual.md](identidade-visual.md) (sistema visual),
o [referencias-pesquisa.md](referencias-pesquisa.md) (Grupo A/B de referências) e o
[arquitetura-site.md](arquitetura-site.md) (estrutura de páginas).

> **Como nasceu:** a partir das novas referências (o Grupo B "fora da caixa") e do pedido de algo
> "divertido e expressionista", sem trair a sobriedade que já funciona. A entrega é este plano **+ três
> protótipos navegáveis** isolados em `/lab`, para comparar antes de decidir.

---

## Decisões travadas

| Eixo | Decisão |
|---|---|
| **Relação com o DNA** | **Evoluir**, não romper. Brutalismo atemporal intacto (creme · tinta · verde-floresta, Space Grotesk + Inter, coluna única, barras verdes). Motion entra com parcimônia. Caminho "suíço + motion" tipo Corentin Bernadou. |
| **Pele expressiva** | **Tipografia cinética** + **glitch / digital-bruto**. As duas conversam direto com um site que já aposta na tipografia e no contraste. |
| **Base (sempre presente)** | Microinterações de recompensa + scrollytelling. Não são "tema", são fundação nas três direções. |
| **Entrega** | Plano (este doc) + protótipos comparáveis em `/lab`. |
| **Linha vermelha** | Nada de WebGL/3D pesado nem motion ornamental. Envelhece mal, custa caro, e contraria o "viável em Astro estático" do [REFERENCES.md](REFERENCES.md). |

---

## Filosofia: motion a serviço da narrativa

Sete princípios que regem qualquer animação daqui pra frente:

1. **Movimento conta história, não decora.** Toda animação responde a "que parte da narrativa isso
   ajuda a ler?". Se a resposta é "nenhuma", corta.
2. **Um clímax por página.** O número de impacto (60%, >90%) é o pico emocional do case. Ele ganha o
   gesto mais forte; o resto recua para não competir.
3. **Dose de 5–10%.** A régua do Grupo B inteiro: 5% de Aristide Benoist já muda a percepção;
   100% cansa. Sobriedade é a base; expressão é tempero.
4. **Propósito > novidade.** Reveal no scroll, hover com retorno, número que sobe — gestos legíveis,
   não efeito por efeito.
5. **`prefers-reduced-motion` é cidadão de primeira classe.** Quem pede calma recebe a versão estática,
   completa e bonita. Não é fallback de segunda; é um público.
6. **Degradar sem JS.** Sem JavaScript, o conteúdo nasce visível e legível. Motion é enhancement.
7. **Performance é parte do design.** Só `transform` e `opacity` (compositor da GPU). Nada que cause
   reflow no scroll. Orçamento de animação tratado como orçamento de bytes.

---

## O arco narrativo e onde o motion entra

A espinha de case que já existe (Hero → Contexto → Problema → Decisão → Impacto → Próximo) **já é
storytelling**. O motion só precisa dar ritmo a ela. Mapa beat a beat:

| Beat | Trabalho narrativo | Tratamento de motion |
|---|---|---|
| **Hero (home/case)** | "Quem é / do que se trata" | Entrada do nome (montagem cinética ou decode glitch). Barra verde **desenha** em vez de aparecer. Nome reativo ao cursor (opcional). |
| **Contexto** | Situar | Reveal sóbrio (sobe + fade). Sem firula — é leitura. |
| **O problema** | Tensão | Bullets entram em cascata (stagger), um a um, criando a sensação de "lista de falhas se acumulando". |
| **A decisão** | Virada | Reveal único e firme. Pode ganhar um filete verde que se desenha ao lado. |
| **Impacto (número)** | **Clímax** | O gesto-assinatura: número sobe em odômetro **ou** decodifica de ruído; assenta com um "snap" cromático. É aqui que o glitch ganha licença. |
| **Imprensa / também atuei** | Desfecho | Reveal calmo, hover discreto nos links. |
| **Próximo case** | Continuidade / gancho | Link com energia (scramble no hover, seta que desliza). Entre páginas: **View Transitions** costuram a navegação (o título "vaza" de uma página para a outra). |

Princípio transversal: **a densidade de motion sobe até o clímax e desce depois.** A página tem
respiração dramática, como um parágrafo tem pontuação.

---

## As três direções (protótipos)

Cada uma aplica o **mesmo conteúdo real** (hero, lista de trabalhos, número da Youse, próximo case)
para comparar maçãs com maçãs. Abra e role:

### A — Tipografia Cinética → `/lab/cinetica`

- **Ideia:** o tipo performa a narrativa. Nome **magnético** (as letras inclinam e crescem perto do
  cursor), títulos que **se montam** letra a letra ao entrar em cena, número de impacto em **odômetro**.
- **Vibe:** craft, vivo, premium-sóbrio. O "suíço + motion".
- **Prós:** casa 100% com o DNA tipográfico; envelhece bem; barato de manter.
- **Contras:** sutil demais para quem quer "uau" imediato; o efeito magnético é desktop-only.
- **Roubar daqui:** energia e acabamento sem sair da sobriedade.

### B — Glitch / Digital-Bruto → `/lab/glitch`

- **Ideia:** o site "boota". O nome **se decodifica** de ruído, a faixa verde do DNA vira **ticker**
  em movimento, o trabalho é um **arquivo de terminal** (numerado, monoespaço, hover invertido), e o
  número de impacto **quebra a tela** (fundo preto, scanlines, split cromático).
- **Vibe:** humor, atitude, personalidade forte. O oposto do genérico.
- **Prós:** memorável; diferencia na hora; diverte.
- **Contras:** mais "datado" no longo prazo; precisa de mão firme para não virar enfeite; exige
  cuidado redobrado de acessibilidade (sem flashes agressivos).
- **Roubar daqui:** ousadia e voz — mesmo que aplicada só em um detalhe.

### C — Híbrido **(recomendado)** → `/lab/hibrido`

- **Ideia:** espinha **cinética calma e brutalista**; o glitch entra **uma única vez**, no clímax — o
  número sobe e dá um **snap cromático** ao assentar, todo in-palette (menta + tinta). Um piscar de
  glitch no link "próximo case". O resto respira.
- **Vibe:** ~90% sobriedade, ~10% expressão. É o "evoluir o DNA" literal.
- **Prós:** o melhor dos dois; seguro para mandar a recrutador **e** com alma; sustentável.
- **Contras:** menos espetáculo que B (de propósito).
- **Roubar daqui:** o equilíbrio. **É a versão que eu defenderia para o site real.**

> **Recomendação:** ir de **C**, usando **A** e **B** como banco de ideias — promover um gesto de B
> (ex.: o ticker, ou o decode só na home) quando quiser uma dose extra de personalidade.

---

## Sistema de motion (tokens)

Estende o [tokens.css](src/styles/tokens.css) sem mexer no que existe. Já implementado em
[src/styles/lab.css](src/styles/lab.css):

```css
/* Easings com personalidade (não o "ease" genérico) */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);   /* entradas: rápido e assenta */
--ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1); /* overshoot lúdico */
--ease-in-out:  cubic-bezier(0.65, 0, 0.35, 1);    /* transições simétricas */

/* Durações */
--dur-fast: 180ms;   /* hovers, micro */
--dur-base: 420ms;   /* reveals de elemento */
--dur-slow: 760ms;   /* heros, barras */
--stagger:  60ms;    /* atraso entre itens em sequência */
```

Regras de bolso: hover ≈ 150–200ms; entrada de conteúdo ≈ 400–800ms; stagger de 28ms (letras) a
60ms (blocos); curva padrão de entrada = `--ease-out-expo`.

---

## Stack técnica

Tudo viável em **Astro estático**, sem framework de runtime. O que foi construído nos protótipos:

| Camada | Escolha | Por quê |
|---|---|---|
| **Reveal no scroll** | `IntersectionObserver` + rede de segurança por varredura | Barato e universal. A varredura garante que **nada fica invisível** em refresh com scroll restaurado, salto por âncora ou scroll muito rápido. |
| **Toolkit de motion** | [src/scripts/lab-motion.js](src/scripts/lab-motion.js) — vanilla, ~200 linhas, zero dependência | `initReveals`, `initCountUp`, `scramble`, `initMagneticType`, `splitChars`. Honesto e leve. |
| **Tipografia cinética** | `transform`/`opacity` por letra (`.char`) | Não precisa de lib. Para peso variável real (futuro), trocar Space Grotesk estática pela **variable font** e animar `font-variation-settings`. |
| **Glitch** | CSS puro (`text-shadow`, `clip-path`, `::before/::after`, `@keyframes`) | Sem imagens, sem canvas. O scramble é JS mínimo. |
| **Transições entre páginas** | **Astro View Transitions** (`<ClientRouter />`) | Nativo do Astro 5. Costura o "próximo case" e dá continuidade sem virar SPA. É o próximo passo natural depois dos protótipos. |
| **Scroll-driven nativo** | `animation-timeline: view()/scroll()` atrás de `@supports` | Onde houver suporte, anima sem JS; onde não, o IntersectionObserver cobre. Progressive enhancement. |
| **Quando NÃO usar lib** | GSAP / Motion One só se um dia houver timeline complexa | Hoje o vanilla resolve. Adicionar lib é dívida de manutenção; entra só com justificativa. |
| **Por que não WebGL** | Fora de escopo | Impressiona, mas custa caro, envelhece e contraria o DNA. Fica como inspiração (Bruno Simon/Lusion), não meta. |

**Upgrade sugerido:** adotar `@fontsource-variable/space-grotesk` destrava peso/largura animáveis —
o caminho mais "expressionista" sem sair da tipografia.

---

## Performance e acessibilidade

Inegociáveis. Já embutidos nos protótipos:

- **`prefers-reduced-motion: reduce`** zera tudo (reveals viram estado final, glitch some, ticker para,
  contadores saltam direto ao número). Testado.
- **Sem flashes perigosos.** O glitch é **lento e sutil** (sem piscar acima de 3x/s) — respeita o
  critério WCAG 2.3.1. A direção B exige manter essa disciplina.
- **Só compositor.** Animações em `transform`/`opacity`; `will-change` apenas onde necessário; zero
  layout thrash no scroll.
- **Degrada sem JS.** `html.no-js` mantém o conteúdo visível; o `is:inline` troca para `.js` antes do
  paint para evitar flash.
- **LCP protegido.** O hero não bloqueia render: o texto está no HTML; a animação é por cima.
- **Toque e teclado.** Efeito magnético/cursor só em `(hover: hover) and (pointer: fine)`. Foco
  visível preservado (`:focus-visible`). Conteúdo navegável por teclado intacto.
- **`noindex` no `/lab`.** Protótipos não vazam para busca enquanto forem rascunho.

---

## Roadmap de implementação

Cada fase é **entregável sozinha** — dá pra parar em qualquer ponto com o site coerente.

| Fase | Entrega | Risco |
|---|---|---|
| **0 — Fundação** | Tokens de motion + baseline `prefers-reduced-motion` + padrão no-js no layout real | Nenhum |
| **1 — Reveals** | Conteúdo sobe/aparece no scroll; barras verdes se desenham | Baixo (universal) |
| **2 — Cinética** | Hero monta letra a letra; número de impacto em odômetro | Baixo |
| **3 — Acento glitch** | O "snap" cromático no clímax + scramble no "próximo case" | Médio (calibrar dose) |
| **4 — View Transitions** | Continuidade entre cases (`<ClientRouter />`) | Médio |
| **5 — Variable font** | Peso/largura animáveis na tipografia | Baixo |

Sugestão: **0 → 1 → 2** já entrega 80% da sensação "viva" com risco mínimo. As fases 3–5 são a
camada de personalidade.

---

## Como decidir

1. Rode `npm run dev` e abra **`/lab`**. Compare A, B e C **no mesmo conteúdo**.
2. Pergunte de cada uma: *isso ainda parece eu daqui a 2 anos?* e *eu mandaria isso pra um recrutador?*
3. Escolha uma direção (recomendo **C**) — ou um mix (espinha de C + um gesto de B).
4. Defina **um** clímax por página (o número de impacto é o candidato natural).
5. Promova os trechos escolhidos para as páginas reais seguindo o roadmap, fase a fase.

> Os protótipos vivem em `/lab` e **não tocam** o site publicado. Explorar aqui é de graça e reversível.
