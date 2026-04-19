# Iteração 02 — Prompt para Lovable

Para colar no Lovable como mensagem de follow-up. Curto e específico, não refaz nada que já está bom.

---

Boa, a estrutura está exatamente onde queremos. Vamos iterar em duas frentes: **uso de cor mais expressivo** (sem adicionar cores novas) e **correção da nav no mobile**.

## 1. Cor: do "acento parcimonioso" para "cor estrutural"

Mantenha exatamente a paleta atual:

- `--bg` `#FAFAF7` (creme)
- `--text` `#0A0A0A` (preto)
- `--text-muted` `#666666`
- `--divider` `#E0E0E0`
- `--accent` `#2D4A2B` (verde floresta)
- `--slot-empty` `#F0F0EC`

O que muda é **a frequência e o peso** com que o verde floresta aparece. Aplique:

1. **Labels uppercase** (`SOBRE`, `TRABALHOS`, `CONTEXTO`, `IMPACTO`, etc.) → cor `--accent`. Eram cinza, agora são verde floresta. Isso amarra a hierarquia inteira numa cor quente.

2. **Métrica de impacto isolada** (ex: o `80%` da página do Geopark) → cor `--accent`. Texto descritivo embaixo continua preto.

3. **Footer com fundo `--accent`**, texto em `--bg` (creme) e meta em `rgba(250,250,247,0.6)`. O footer vira um bloco visual forte que fecha a página. Links no footer ficam sublinhados sempre (não só no hover) já que estão sobre cor.

4. **Setas `→` dos cards de case e do "próximo case"** → cor `--accent`. As setas viram o sinal visual de ação em todo o site.

5. **Hover de qualquer link** continua mudando para `--accent`, e adiciona um underline com 2px de espessura.

6. **Slot de imagem vazio**: troca o fundo de `--slot-empty` para uma borda 1px em `--accent` com fundo `--bg`. Vira um bloco geométrico verde, ainda discreto, mas presente. (Quando a imagem real entrar, a borda some.)

Não use gradientes, não use sombras coloridas, não pinte títulos grandes (Hero, nome do case). Os títulos continuam pretos — o verde é estrutural, não decorativo.

## 2. Nav no mobile: liberar espaço

No desktop está bom. No mobile (<768px), o nome `LEMUEL MONTEIRO` ocupa muita largura e empurra o menu, fazendo `Fora do trabalho` quebrar linha.

Aplique no mobile:

- Trocar o texto `LEMUEL MONTEIRO` por um **mark quadrado de 32x32px**: fundo `--accent`, texto `LM` em `--bg`, Space Grotesk Bold, centralizado. O mark linka para `/`. (Considere isso um placeholder de logo — vai ser refinado depois.)
- Os três itens do menu (`Trabalhos`, `Sobre`, `Fora do trabalho`) ficam todos visíveis em uma linha à direita do mark, sem hambúrguer. Inter Medium 13px, separados por ` · `.
- Padding vertical do nav cai para 16–20px no mobile.

No desktop, mantém como está (texto `LEMUEL MONTEIRO` à esquerda, menu à direita).

## O que NÃO mudar

- Tipografia (Space Grotesk + Inter, escala atual).
- Estrutura de coluna única.
- Espaçamento entre seções.
- Conteúdo da home e do case Geopark.
- Princípio de zero animação ornamental.
