# Arquitetura do Site

Decisões de estrutura do novo portfólio. Complementa o [portfolio-conteudo.md](portfolio-conteudo.md) (texto final) e o [portfolio-planejamento.md](portfolio-planejamento.md) (decisões editoriais).

---

## Abordagem

Multi-page, não single-page. Razão principal: cada case vira URL isolada e compartilhável, o que é crítico para enviar em candidatura de vaga ou mensagem de prospecção.

---

## Mapa do site

```
/                       Home
├── /work/sienge        Case Sienge (Starian)
├── /work/geopark       Case Geopark
├── /work/youse         Case Youse
├── /work/paguru        Case Paguru
├── /sobre              Sobre + competências + como trabalho + educação
└── /fora-do-trabalho   Vida pessoal
```

Total: 7 páginas. Footer com contato presente em todas.

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
- Placeholder para imagens até ter assets finais.
- /sobre e /fora-do-trabalho separados, dando espaço ao pessoal.
- Contato só no footer. Sem página /contato.

---

## Assets pendentes

- Preview visual de cada case (4 imagens)
- GIF do login Youse
- Foto do Geopark
- Galeria para /fora-do-trabalho (fotografia, trilha, cozinha, etc.)

---

## Próximos passos sugeridos

1. Definir tokens visuais (tipografia, paleta, espaçamento) alinhados ao brutalismo das referências em [REFERENCES.md](REFERENCES.md).
2. Esboço de layout (wireframe ou direto no Figma).
3. Decisão de stack de desenvolvimento. Sugestões: Astro (estático, bom para portfólio), 11ty (minimalista), ou HTML/CSS puro.
4. Produção dos assets pendentes.
