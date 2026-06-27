# Log de versão — Atualização de mídias

**Data:** 13 de junho de 2026

---

## O que foi feito

### Paguru Digital Solutions (`/work/paguru`)
- Substituído `<ImageSlot>` do hero pela imagem completa do Ludus (`/paguru/ludus.webp`)
- Projeto 01 (Sistema para escolas de dança): imagem do Ludus
- Projeto 02 (PlantON): imagem com mockup PlantON + Extrajud (`/paguru/planton-extrajud.png`)
- Projeto 03 (Extrajud): slot ocultado (imagem coberta pelo Projeto 02)
- Import do `ImageSlot` removido do arquivo

### Youse Seguros (`/work/youse`)
- Hero: foto do time em reunião (`/youse/foto-com-time.png`)
- Calculadora de CO2 — slot 1: telas flat do fluxo de km e emissões (`/youse/telas-co2-1.png`)
- Calculadora de CO2 — slot 2: foto polaroid estilizada com 8 telas (`/youse/telas-co2-2.png`)
- Adicionado espaço para vídeo-mock (`/youse/video-mock.mp4`) com `<video>` e controles
- Import do `ImageSlot` removido do arquivo

### Starian · Sienge (`/work/starian`)
- Hero: protótipo HTML funcional embedado via `<iframe>` (`/sienge/titulos-ia.html`)
- O protótipo cobre o fluxo completo de criação de títulos com IA: grid de validação, drawer de detalhes, parcelas, validação de formulário, modal de alterações não salvas e snackbar
- Legenda abaixo do frame: "Protótipo funcional criado com IA — interaja diretamente no frame"
- Import do `ImageSlot` removido do arquivo

### Este Portfólio (`/work/portfolio`)
- Hero: screenshot do site (`/portfolio/hero.png`)
- Import do `ImageSlot` removido do arquivo

### Home (`/`)
- Componente `CaseCard` atualizado para aceitar prop `image` opcional
- Thumbnails aplicadas em todos os cards:
  - Starian · Sienge → `/sienge/desk.png`
  - Geopark Araripe → CDN Webflow (mesma fonte usada na página do case)
  - Youse Seguros → `/youse/telas-co2-2.png`
  - Paguru Digital Solutions → `/paguru/ludus.webp`
  - Este Portfólio → `/portfolio/hero.png`

---

## Arquivos novos em `/public`

| Arquivo | Uso |
|---|---|
| `public/paguru/ludus.webp` | Hero + thumbnail Paguru |
| `public/paguru/planton-extrajud.png` | Projeto 02 Paguru |
| `public/youse/foto-com-time.png` | Hero Youse |
| `public/youse/telas-co2-1.png` | CO2 slot 1 |
| `public/youse/telas-co2-2.png` | CO2 slot 2 + thumbnail home |
| `public/youse/video-mock.mp4` | Vídeo-mock Youse |
| `public/sienge/titulos-ia.html` | Protótipo embedado Starian |
| `public/sienge/desk.png` | Thumbnail Starian na home |
| `public/portfolio/hero.png` | Hero + thumbnail Portfólio |

---

## Componentes modificados

- `src/components/CaseCard.astro` — nova prop `image`, estilo `card__img`
- `src/pages/index.astro` — imagens passadas para todos os `CaseCard`
- `src/pages/work/paguru.astro` — mídias reais, `ImageSlot` removido
- `src/pages/work/youse.astro` — mídias reais, vídeo, `ImageSlot` removido
- `src/pages/work/starian.astro` — iframe + legenda, `ImageSlot` removido
- `src/pages/work/portfolio.astro` — hero real, `ImageSlot` removido

---

## Pendente

- Push para o Cloudflare (rodar `git push origin main` após resolver conflito de lock do git)
- Slot do hero do Starian ainda usa iframe — considerar screenshot estático como fallback para OG image

---

# Atualização — 27 de junho de 2026

## Estado atual do site

- **Implementado e bilíngue.** Estrutura completa em Astro: home, `/sobre`, `/fora-do-trabalho`, 4 cases + meta-case `/work/portfolio`, com contraparte em `/en` para todas as páginas (seletor de idioma + `hreflang`).
- **DNA brutalista aplicado**: tokens em `src/styles/tokens.css` (Space Grotesk + Inter, paleta creme/preto/verde), coluna única, `DividerBar`, `ImpactBlock` para números de impacto.
- **Mídias reais** já aplicadas (ver entrada de 13/jun acima).

## Documentos adicionados

- `referencias-pesquisa.md` — curadoria ampla de portfólios de referência (2 grupos + 5 campos).
- `avaliacao-portfolio.md` — avaliação do site × referências e mapa de próximos passos.

## Pendências de evolução (detalhe em `avaliacao-portfolio.md`)

- 🟢 Link "Ler mais" da home aponta para `#` (deveria ir a `/sobre`).
- Decidir números sensíveis vs. NDA.
- Gancho narrativo nos cases fundos; tratamento único dos slots; OG images; galeria de `/fora-do-trabalho`.
- 2–3 movimentos canônicos e fallback estático do hero do Sienge.
