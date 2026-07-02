# Arquitetura do Site

Decisões de estrutura do novo portfólio. Complementa o [portfolio-conteudo.md](portfolio-conteudo.md) (texto final) e o [portfolio-planejamento.md](portfolio-planejamento.md) (decisões editoriais).

---

## Abordagem

Multi-page, não single-page. Razão principal: cada case vira URL isolada e compartilhável, o que é crítico para enviar em candidatura de vaga ou mensagem de prospecção.

---

## Mapa do site

```
/                       Home
├── /work/starian       Case Sienge (Starian)
├── /work/geopark       Case Geopark
├── /work/youse         Case Youse
├── /work/paguru        Case Paguru
├── /work/portfolio     Meta-case "Sobre este site"
├── /sobre              Sobre + competências + como trabalho + educação
└── /fora-do-trabalho   Vida pessoal
```

Cada página tem contraparte em inglês sob `/en` (ex.: `/en/work/youse`, `/en/about`), com seletor de idioma no topo e `hreflang` no `<head>`.

Total: 8 páginas em PT + 8 em EN. Footer com contato presente em todas. (O slug do case do Sienge é `starian`, não `sienge`.)

---

## Navegação

**Topo**: `Lemuel Monteiro` (logo texto, linka para home) · `Trabalhos` · `Sobre` · `Fora do trabalho`

**Footer** (em todas as páginas):
- E-mail: lemuelmonteirom@gmail.com
- LinkedIn
- Localização: Juazeiro do Norte, CE
- Ano

Sem menu hambúrguer, sem modal de contato. O footer é o contato.

---

## Ordem dos cases (cronológica, do mais recente)

1. **Sienge · Starian** (2025 a atual): case curto
2. **Geopark Araripe** (2024): case completo
3. **Youse Seguros** (2022 a 2024): case completo
4. **Paguru Digital Solutions** (2020 a 2022): case compacto

Essa ordem aparece na home e determina a leitura sequencial.

---

## Conteúdo por página

### / (Home)

- **Hero**: nome, role ("Product Designer"), tagline, localização
- **Sobre resumo**: versão curta do "Sobre mim", com link para /sobre
- **Trabalhos**: grid/lista dos 4 cases em ordem cronológica. Cada card com:
  - Preview visual (placeholder até ter imagem final)
  - Nome do case
  - Tagline de uma linha
  - Ano
- **Footer**: contato

### /work/{slug}

Conteúdo completo de cada case, como está em [portfolio-conteudo.md](portfolio-conteudo.md).

### /sobre

- Sobre (versão longa)
- Como trabalho (4 hábitos)
- Competências (4)
- Educação (formação + certificações)

### /fora-do-trabalho

- Frase de abertura: *"Tentando descobrir meu lugar em um mundo novo todo dia, com curiosidade e resiliência."*
- Lista dos 7 interesses
- Espaço reservado para galeria de fotos e registros no futuro

---

## Preview de card na home

Formato proposto:

```
[Placeholder de imagem]
SIENGE · STARIAN
Discovery de IA para criação de títulos em lote.
2025 a atual.
→
```

Cards sem parágrafo ou bullet. Tudo que importa fica dentro do /work/{slug}.

---

## Decisões tomadas

- Multi-page (não single-page): cases viram URLs compartilháveis.
- Ordem cronológica (não por peso).
- /sobre e /fora-do-trabalho separados, dando espaço ao pessoal.
- Contato só no footer. Sem página /contato.
- **Stack: Astro** (estático), com tokens em `src/styles/tokens.css`. Decisão fechada.
- **Bilíngue (PT/EN)** com i18n próprio e seletor de idioma. Implementado.
- **Meta-case "Sobre este site"** (`/work/portfolio`) adicionado como 5ª entrada de trabalho.

---

## Assets pendentes

(Tokens, layout e mídias principais já estão implementados — ver [log.md](log.md).)

- Foto de campo do Geopark (hoje usa imagem da CDN do Webflow)
- Galeria de /fora-do-trabalho — hoje só a lista de interesses, sem grid de fotos
- OG image por case (compartilhamento em LinkedIn/WhatsApp)
- Fallback estático do hero do Sienge (hoje depende de `<iframe>`)

---

## Próximos passos sugeridos

Tokens, wireframe e stack (Astro) já estão fechados e o site está implementado. Os próximos passos passam a ser de **evolução**, detalhados e priorizados em [avaliacao-portfolio.md](avaliacao-portfolio.md):

1. Ganhos rápidos: corrigir o link "Ler mais" da home (aponta para `#`) e decidir números sensíveis vs. NDA.
2. Narrativa: gancho de abertura nos cases fundos (Youse, Geopark).
3. Assets: tratamento visual único dos slots + OG images + galeria de /fora-do-trabalho.
4. Acabamento: 2–3 movimentos canônicos e fallback do hero do Sienge.
