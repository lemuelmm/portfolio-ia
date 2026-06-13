# Portfólio — Lemuel Monteiro

Site pessoal e portfólio profissional. Alternativa ao LinkedIn: cada case tem URL própria, compartilhável em candidaturas e prospecção.

## Stack

- **[Astro](https://astro.build/)** — gerador de site estático
- **Space Grotesk** + **Inter** via `@fontsource`
- **Shiki** para highlight de código

## Estrutura de páginas

```
/                       Home (hero + lista de cases)
/work/starian           Case Starian · Sienge
/work/geopark           Case Geopark Araripe
/work/youse             Case Youse Seguros
/work/paguru            Case Paguru Digital Solutions
/sobre                  Sobre, competências, educação
/fora-do-trabalho       Vida pessoal e interesses
```

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

## Assets pendentes

- Preview visual de cada case (4 imagens)
- GIF do login Youse
- Foto do Geopark
- Galeria para `/fora-do-trabalho`
