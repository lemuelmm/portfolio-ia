# Portfólio — Lemuel Monteiro

Site pessoal e portfólio profissional. Alternativa ao LinkedIn: cada case tem URL própria, compartilhável em candidaturas e prospecção.

## Stack

- **[Astro](https://astro.build/)** — gerador de site estático
- **Space Grotesk** + **Inter** via `@fontsource`
- **Shiki** para highlight de código
- **i18n próprio** (PT/EN) com seletor de idioma e `hreflang` — ver `src/i18n/`

## Estrutura de páginas

```
/                       Home (hero + lista de cases)
/work/starian           Case Starian · Sienge
/work/geopark           Case Geopark Araripe
/work/youse             Case Youse Seguros
/work/paguru            Case Paguru Digital Solutions
/work/portfolio         Meta-case "Sobre este site"
/sobre                  Sobre, competências, educação
/fora-do-trabalho       Vida pessoal e interesses
/en/...                 Versão em inglês de todas as páginas acima
```

Cada página PT tem contraparte em `/en` (seletor de idioma no topo, `hreflang` no `<head>`).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:4321`.

## Build

```bash
npm run build    # gera em /dist
npm run preview  # serve o build localmente
```

## Identidade visual

Brutalismo minimalista. Tipografia pesada, paleta neutra com acento verde:

| Token        | Valor      |
|--------------|------------|
| Fundo        | `#FAFAF7`  |
| Texto        | `#0A0A0A`  |
| Texto muted  | `#666666`  |
| Divisores    | `#E0E0E0`  |
| Acento       | `#2D4A2B`  |

Detalhes em [`identidade-visual.md`](identidade-visual.md) e arquitetura em [`arquitetura-site.md`](arquitetura-site.md).

## Documentos de apoio

- [`referencias-pesquisa.md`](referencias-pesquisa.md) — curadoria ampla de portfólios de referência
- [`avaliacao-portfolio.md`](avaliacao-portfolio.md) — avaliação do site atual × referências e próximos passos

## Estado dos assets

**Aplicados** (ver [`log.md`](log.md)): thumbnails de todos os cases na home, hero e telas do Youse (foto de time, telas da Calculadora de CO2, vídeo-mock), protótipo HTML embedado no Sienge, imagens do Paguru, hero do meta-case.

**Pendentes:**
- Foto de campo do Geopark (hoje usa imagem da CDN do Webflow)
- Galeria de `/fora-do-trabalho` (hoje só a lista de interesses)
- OG image por case (para compartilhamento em LinkedIn/WhatsApp)
- Fallback estático do hero do Sienge (hoje depende de `<iframe>`)
