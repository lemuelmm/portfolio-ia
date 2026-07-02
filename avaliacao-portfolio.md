# Avaliação do Portfólio × Referências

Avaliação do estado atual do portfólio (site Astro neste repo) contra as referências de [referencias-pesquisa.md](referencias-pesquisa.md) e [REFERENCES.md](REFERENCES.md), seguida de um mapa de como essas referências informam os próximos passos já previstos. Pensado para guiar a **evolução** do site, não para reescrevê-lo.

> **Base da avaliação:** li o código-fonte do site (`src/`), o conteúdo final ([portfolio-conteudo.md](portfolio-conteudo.md)), a arquitetura ([arquitetura-site.md](arquitetura-site.md)) e o log de mídias ([log.md](log.md)). **Não consegui abrir o site publicado nem as referências ao vivo** (a política de rede da sessão bloqueia acesso externo), então a avaliação visual é inferida do código + descrições — confirme navegando.

---

## Onde o site já está forte (alinhado às referências)

O portfólio **já implementa o DNA** decidido a partir dos 4 favoritos — não é um rascunho, é um site coeso.

| Sinal | Onde está | Referência que valida |
|---|---|---|
| **Tipografia carrega a identidade** | `tokens.css` (Space Grotesk display + Inter, escala `--fs-hero` até 80px) | Ed Chao, Lauren Lang |
| **Coluna única + divisores finos** | `index.astro`, `work/youse.astro` (`DividerBar`, `--content-max: 700px`) | DNA inteiro (princípio 1–2 do `identidade-visual.md`) |
| **Número de impacto isolado e grande** | `ImpactBlock` (60%, >90% no Youse), `--fs-impact-number: 120px` | Padrão transversal nº 4; régua de case study |
| **Case como história** (contexto→problema→decisão→rollout→impacto) | `work/youse.astro` estruturado em Partes | Padrão nº 1 (Case = história) |
| **Cases viram URLs compartilháveis** | multi-page `/work/{slug}` | Decisão correta para público recrutador |
| **Voz pessoal + trilha temática** | "trilha consistente em sustentabilidade", verde floresta como acento | Seán Halpin (tom), DNA |
| **Meta-case "Sobre este site"** | `index.astro` + `/work/portfolio` | Brian Lovin (juntar trabalho + processo + stack) |
| **Bilíngue com hreflang correto** | `Base.astro`, `/en/*` | Acima da média de portfólio de PD |

**Resumo:** a fundação está sólida e fiel ao Grupo A. Os ganhos agora são de **acabamento, narrativa e dosagem de movimento** — exatamente onde as novas referências entram.

---

## Pontos a melhorar (priorizados)

Cada item traz a referência que inspira e um nível: 🟢 ganho rápido · 🟡 médio · 🔴 estrutural.

### 1. 🟢 Link "Ler mais" quebrado na home
`src/pages/index.astro:64` — o `→ Ler mais` do bloco Sobre aponta para `href="#"` em vez de `/sobre`. Recrutador clica e não vai a lugar nenhum. (Conferir a contraparte em `/en`.) Correção de um minuto, alto impacto.

### 2. 🟡 Narrativa: falta o "porquê" antes do "o quê"
Os cases hoje vão direto a problema→decisão. Os melhores (ver **Case Study Club**, e o tom de **Seán Halpin**) abrem com uma tensão humana — *quem sofria, o que estava em jogo* — antes da solução. No Youse e no Geopark, uma ou duas linhas de abertura ("um cliente que não consegue entrar no app no momento do sinistro…") dariam mais peso. Conteúdo já é bom; falta o gancho inicial.

### 3. 🟡 Acabamento de microinterações
Hoje os hovers são bons mas uniformes (sublinhado verde). **Rauno Freiberg** e **Josh Comeau** mostram que microdetalhe — transição de entrada de seção, foco de teclado visível, um respiro no hover do `CaseCard` — eleva a percepção de craft sem virar enfeite. Compatível com Astro estático (CSS puro + `prefers-reduced-motion`).

### 4. 🟡 Imagem como apoio ainda inconsistente
O log mostra mídias reais já aplicadas, mas misturando registros (foto de time, telas flat, polaroid, CDN do Webflow, iframe). As referências de **arquitetura/foto** (30X40, grids minimais) ensinam disciplina: um **tratamento visual único** para todos os slots (mesma proporção, mesmo fundo, mesma borda) faz o conjunto parecer curado, não montado. Hoje cada case tem um "sotaque" visual diferente.

### 5. 🟡 Hero do Sienge depende de iframe
`/work/starian` embeda o protótipo HTML num `<iframe>` (log.md). É ousado e demonstra a competência "IA como ferramenta" — mas pesa, não gera OG image e pode falhar no mobile. **Lusion/Aristide** ensinam o oposto do que parece: a experiência impressiona *porque é controlada*. Sugestão: screenshot estático como hero + botão "interagir com o protótipo" abaixo (progressive enhancement).

### 6. 🟡 Falta um norte de movimento
O `identidade-visual.md` prega "sem animação ornamental" — correto como princípio. Mas **Lusion** (que você curtiu) e **Corentin Bernadou** mostram um meio-termo: motion *funcional* (revelar conteúdo no scroll, transição entre páginas) que dá sensação premium sem trair o brutalismo. Definir 2–3 movimentos canônicos evita decisão ad-hoc depois.

### 7. 🔴 Números sensíveis vs. NDA ainda em aberto
`portfolio-planejamento.md` marcou isto e segue valendo: 60%, 80%, >90% aparecem firmes no site (`ImpactBlock`). Antes de divulgar, resolver a cláusula de não publicidade — ou migrar para linguagem qualitativa onde for sensível. É risco, não estética.

### 8. 🔴 Identidade editorial / "marca pessoal"
**Tobias van Schneider** (que você curtiu) trata o portfólio como uma marca com voz: blog, produtos, um ponto de vista. Hoje o site é um currículo bem-feito. A evolução madura é adicionar uma camada de **autoria** — notas curtas, um "agora", um ponto de vista sobre design+sustentabilidade — que diferencia de qualquer outro PD. Estrutural porque muda o escopo (vira algo vivo, não estático).

---

## Próximos passos previstos × como as referências os informam

Os planos atuais (em `arquitetura-site.md`, `identidade-visual.md`, `portfolio-planejamento.md`, `log.md`) já apontam etapas. Abaixo, como as referências — antigas e novas — informam cada uma, pensando na **evolução**.

### Etapa A — Fechar conteúdo e números (curto prazo)
*Previsto: revisar Youse/Geopark vs. NDA; rodar discovery do Sienge.*
- **Case Study Club / Seán Halpin** → adicionar o gancho narrativo de abertura (ponto 2).
- **Frank Chimero** → tratar cada case como um pequeno ensaio com começo, meio e fim, não um relatório.
- Decisão de número (qualitativo vs. quantitativo) é pré-requisito de divulgação.

### Etapa B — Produção de assets visuais ("Parkes-flirt")
*Previsto: previews de case, GIF Youse, foto Geopark, galeria /fora-do-trabalho.*
- **Tom Parkes** → o destino: mesma estrutura, densidade visual maior, mídia rica.
- **Arquitetura/foto (30X40, grids minimais)** → disciplina de tratamento único dos slots (ponto 4); imagem domina, interface some.
- **Pedro Aquino (UX motion BR)** → se for fazer GIFs de fluxo, referência de como animar interface com clareza.
- Entregável concreto: um **spec de slot** (proporção, fundo, borda, formato) aplicado a todos os cases de uma vez.

### Etapa C — Acabamento e movimento (craft)
*Previsto: polimento; "sem animação ornamental".*
- **Rauno Freiberg** → microcraft: foco de teclado, estados, detalhe de tipografia.
- **Josh Comeau** → microinterações de recompensa, com parcimônia.
- **Lusion + Corentin Bernadou** → definir 2–3 movimentos canônicos (scroll-reveal, transição de página) — motion funcional, não enfeite (pontos 3 e 6).
- **Aristide Benoist** → referência de "feeling premium" para calibrar o teto (aspiracional, não meta).

### Etapa D — Deploy, SEO e compartilhamento
*Previsto: push Cloudflare; OG image; fallback do iframe Sienge.*
- Multi-page + hreflang já estão certos.
- **Falta OG image por case** (log marca o iframe do Sienge como problema) — cada `/work/{slug}` precisa de imagem de preview para cair bem em LinkedIn/WhatsApp, que é exatamente o canal do público-alvo. Resolver junto do ponto 5.

### Etapa E — Camada editorial / marca pessoal (médio/longo prazo)
*Não previsto ainda — proposta de evolução.*
- **Tobias van Schneider** → portfólio como marca viva: seção de notas/escrita, um ponto de vista.
- **Brian Lovin** → arquitetura para abrigar trabalho + escrita + stack sem virar bagunça (você já começou com o meta-case "Sobre este site").
- **Design do Brasil** → submeter o site quando estiver no ar; benchmark contra pares brasileiros e visibilidade.

---

## Sequência recomendada

1. **Agora (1 dia):** ponto 1 (link quebrado) + decisão de números (ponto 7) — destrava divulgar.
2. **Próxima leva (Etapa A+B):** gancho narrativo nos 2 cases fundos + spec único de slot de imagem + OG images.
3. **Polimento (Etapa C+D):** 2–3 movimentos canônicos + fallback do hero Sienge + deploy.
4. **Evolução (Etapa E):** camada editorial/marca pessoal — o que vai diferenciar de verdade.

Os pontos 1–3 atacam o que recrutador percebe em 10 segundos (link morto, leitura do case, sensação de acabamento). A camada editorial é o que constrói posicionamento ao longo do tempo — alinhada ao "alternativa ao LinkedIn" do [CONTEXT.md](CONTEXT.md).
