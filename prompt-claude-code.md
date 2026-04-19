# Brief para Claude Code — MVP do portfólio

Sessão de código para gerar o MVP navegável do portfólio de Lemuel Monteiro, a partir da documentação já existente no repo.

---

## Contexto do repo

Este repositório contém **apenas documentação** até aqui. Nenhuma linha de código ainda. Branch de trabalho: `claude/plan-deployment-strategy-R05iq`.

Fontes da verdade (leia antes de começar):

- `prompt-prototipagem.md` → **especificação visual completa** (tokens, tipografia, paleta, wireframes ASCII, componentes, critérios de aceitação, o que evitar). Siga à risca, exceto onde esta sessão sobrepõe abaixo.
- `portfolio-conteudo.md` → **texto final** de cada seção. Copiar exatamente, sem reescrever.
- `arquitetura-site.md` → mapa de URLs e estrutura de páginas.
- `identidade-visual.md` → detalhes adicionais de tokens.

---

## Escopo desta sessão

Entregar, em Astro, apenas:

1. Scaffold do projeto + configuração de build.
2. Tokens CSS (paleta, tipografia, espaçamento) em `src/styles/tokens.css`.
3. Layout base (nav + main + footer) reutilizável.
4. **Home** (`/`) — hero, sobre resumo, 4 cards de case, footer.
5. **Case Geopark** (`/work/geopark`) — estrutura completa como no wireframe.

**Fora de escopo:** páginas `/sobre`, `/fora-do-trabalho`, cases Sienge/Youse/Paguru. Os links para esses URLs podem existir mas apontar para `#` ou página 404 padrão.

---

## Stack

- **Astro** (SSG puro, sem islands React/Vue a menos que precise).
- **CSS nativo** com variáveis. **Não use Tailwind, styled-components, CSS-in-JS ou UI libraries.**
- **MDX ou .astro** para conteúdo do case — sua escolha, o importante é que texto corrido fique legível no source.
- Fontes self-hosted via `@fontsource/space-grotesk` e `@fontsource/inter`, pesos 400 (Inter), 500 (Inter), 700 (Space Grotesk).
- Node 20, `npm`.

---

## Sobreposição visual: cor ainda mais expressiva

O `prompt-prototipagem.md` já trata verde floresta como cor estrutural. Esta sessão **empurra mais a expressão de cor**, sempre aplicada como **bloco** (brutalismo = cor em área sólida, nunca decoração).

Adicione, além do que já está especificado lá:

1. **Divisores em barra verde**: os divisores entre seções viram barras sólidas `--accent` de **2px full-width** (até as bordas laterais do container de conteúdo, não da viewport). Substituem o cinza `--divider` em todas as páginas. O token `--divider` continua existindo mas só é usado entre cards de case na home.

2. **Barra vertical no abertura de página**: na home e no case, uma barra `--accent` de **4px de largura** à esquerda do bloco hero (nome / título do case), da altura total do bloco. Marca a entrada de cada página.

3. **Hover de card na home = flood**: ao passar mouse num card de case, o card inteiro ganha fundo `--accent` e texto em `--bg`. Transição `background 150ms ease-out`. No mobile (`hover: none`), não aplica — o card fica estático e o tap leva direto.

4. **Números de capítulo grandes**: na seção "HISTÓRICO DO PROJETO" do case, os `01`, `02`, `03` ficam em Space Grotesk **72–96px bold em `--accent`**, ocupando peso visual de subtítulo. O título da fase (ex: "Graduação (NexTI)") continua em 24–28px preto.

5. **Seção IMPACTO com fundo verde**: a seção de impacto do case vira um **bloco full-bleed** (edge-to-edge da viewport) com fundo `--accent`. Dentro:
   - Label "IMPACTO" em `--bg`, uppercase 14px.
   - Número "80%" em Space Grotesk **96–120px bold**, cor `--bg`.
   - Texto descritivo em `rgba(250,250,247,0.85)`, Inter 18–20px.
   - Padding vertical 120–160px.
   - É o momento mais pesado visualmente da página. Único bloco colorido full-bleed do conteúdo (além do footer).

6. **Link "PRÓXIMO CASE" em hover**: texto fica `--accent` + underline `--accent` 3px com offset 6px.

---

## O que permanece inalterado

- Paleta: **exatamente** os 5 tokens em `prompt-prototipagem.md` (nada de cor nova, nem neutro extra).
- Títulos grandes (hero, nome do case): **sempre pretos**, nunca pintados.
- Tipografia: Space Grotesk + Inter, só isso.
- Princípios: coluna única, sem sombras, sem gradientes, sem animação ornamental, sem ícones decorativos.
- Toda a lista "O que evitar" do `prompt-prototipagem.md` continua valendo.

---

## Estrutura de arquivos sugerida

```
src/
  pages/
    index.astro            # home
    work/
      geopark.astro        # ou .mdx — escolha o que der conteúdo mais limpo
  layouts/
    Base.astro             # nav + <slot/> + footer
  components/
    Nav.astro
    Footer.astro
    CaseCard.astro
    DividerBar.astro       # a barra verde 2px
    HeroBar.astro          # a barra verde vertical 4px
    ImpactBlock.astro      # bloco full-bleed verde da seção IMPACTO
  styles/
    tokens.css             # :root com as variáveis
    global.css             # reset, body, tipografia base
public/
  favicon.svg              # quadrado verde 32x32 com "LM" creme (placeholder)
astro.config.mjs
package.json
```

Ajuste à vontade se houver organização melhor — o que importa é que tokens fiquem centralizados e nav/footer sejam componentes reais.

---

## Conteúdo: de onde vem cada pedaço

- **Tagline, sobre curto** → `portfolio-conteudo.md` linhas 7–19.
- **Case Geopark** (contexto, histórico, desafio, abordagem, solução, impacto) → `portfolio-conteudo.md` linhas 138–176.
- **Cards de case na home** → `arquitetura-site.md` linhas 86–96 para formato, `portfolio-conteudo.md` para taglines.
- **Footer**: email `lemuelmonteirom@gmail.com`, LinkedIn (deixe `https://linkedin.com/in/lemuel` como placeholder — Lemuel confirma o slug depois), `Juazeiro do Norte · CE`, `2026`.

**Não invente texto.** Se faltar conteúdo para alguma seção, deixe um `<!-- TODO: ... -->` e siga em frente.

---

## Critérios de pronto

Antes de considerar a sessão concluída:

1. `npm run dev` roda sem warning, `/` e `/work/geopark` navegam com visual coerente.
2. `npm run build` gera HTML estático em `dist/` sem erros.
3. Testar visualmente em 1440px (desktop) e 375px (mobile) — layout se reorganiza sem quebra.
4. Nav mobile usa mark `LM` 32×32 verde, três itens de menu em uma linha.
5. Seção IMPACTO full-bleed, contrastante, pesada — lê como o momento alto da página.
6. Barras verdes (2px horizontais entre seções, 4px vertical ao lado do hero) presentes e consistentes.
7. Lighthouse no build: ≥ 95 Performance, 100 Accessibility. Contraste `#2D4A2B` sobre `#FAFAF7` ≥ 7:1 (AAA), contraste `#FAFAF7` sobre `#2D4A2B` idem.
8. Zero JS shippado além do inevitável do Astro (verificar na aba Network).
9. Todos os commits na branch `claude/plan-deployment-strategy-R05iq`. Commits pequenos e descritivos.

---

## Deploy (contexto, não faça ainda)

Host de destino: **Cloudflare Pages**. Build command `npm run build`, output `dist/`, Node 20. Domínio final: `lemueldesign.com`. Lemuel conecta o repo ao Pages manualmente após revisar o branch.

Não abrir PR automaticamente. Lemuel revisa o branch localmente, pede ajustes se precisar, e só então mergeia.

---

## Se algo estiver ambíguo

Pergunte antes de assumir — especialmente em decisões de estrutura de pastas, nomenclatura de componentes, ou se um detalhe visual não está coberto nem aqui nem em `prompt-prototipagem.md`. Não invente conteúdo nem sobrescreva decisões já tomadas nos `.md` existentes.
