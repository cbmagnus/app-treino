# Arquitetura

Documento técnico para manutenção e evolução do app. Sem build step, sem framework — tudo é HTML/CSS/JS vanilla.

## Visão geral

- `treino.html` — casca do app: cabeçalho, container de abas (`#tabs`), container de conteúdo (`#content`) e o markup do modal.
- `assets/css/style.css` — todos os estilos; cores centralizadas em variáveis CSS no `:root`.
- `assets/js/app.js` — dados dos exercícios + toda a lógica (render, modal, animação, timer).

O `app.js` roda no load: monta as abas e os painéis a partir do array `days` e injeta tudo no DOM.

## Modelo de dados (em `app.js`)

### `MEDIA`
Objeto que mapeia a chave do exercício para suas mídias e descrição:

```js
const MEDIA = {
  "chave_do_exercicio": [
    "assets/images/photos/Imagem_0.jpg", // posição inicial
    "assets/images/photos/Imagem_1.jpg", // posição final
    "Texto de execução em português."
  ],
  // ...
};
```

O modal alterna entre a imagem `[0]` e `[1]` para simular o movimento. Entradas extras em `MEDIA` (exercícios fora da rotação) não causam problema — só são usadas quando referenciadas em `days`.

### `days`
Array com os 7 dias da semana, na ordem Segunda → Domingo. Dois formatos:

**Dia de treino:**
```js
{
  label: "Seg", name: "Segunda-feira", focus: "Ombros",
  tags: ["Deltóide Anterior", "Deltóide Medial", "Trapézio"],
  color: "#9b59b6",
  exercises: [
    {
      key: "desenvolvimento_halteres", // deve existir em MEDIA
      num: 1,
      name: "Desenvolvimento com Halteres (Sentado)",
      muscles: "Deltóide anterior/medial · Trapézio · Tríceps",
      sets: "3–4 × 8–12",
      rest: "90s entre séries", // o número em "s" alimenta o timer
      chips: ["3–4 séries", "8–12 reps", "90s descanso"],
      replaceNote: "..." // opcional; exibe selo "novo" e nota no modal
    },
    // ...
  ],
  tips: ["...", "..."]
}
```

**Dia de descanso:**
```js
{ label: "Dom", name: "Domingo", focus: "Descanso Completo", rest: true, color: "#2ecc71", tips: ["..."] }
```

### `EX_DATA`
Preenchido automaticamente a partir de `days` (nome, músculos, chips, replaceNote por chave). O modal lê daqui + de `MEDIA`.

## Fluxo de renderização

1. `todayIndex` calcula o dia atual (Seg=0 … Dom=6) e marca a aba ativa.
2. Para cada dia, cria uma aba (`.tab`) e um painel (`.day-panel`). Clicar na aba troca o painel visível.
3. Cada card de exercício chama `openModal(key)` no clique.
4. `openModal` carrega imagens/descrição, inicia a animação (`startAnim`) e configura o timer (`setupTimer`).
5. O timer de descanso extrai os segundos do campo `rest` via `parseRestSeconds` (regex `\d+s`).

## Como adicionar um exercício

1. Baixe as duas imagens (início/final) para `assets/images/photos/`.
2. Adicione a entrada em `MEDIA` com as duas imagens e o texto de execução.
3. Referencie a `key` dentro de `exercises` no dia desejado.

> Ao criar/mover exercícios, verifique o descanso de 48h: nenhum músculo (primário **ou** secundário) deve ser treinado em dias consecutivos. Ombros/Peito recrutam tríceps; Costas recruta bíceps.

## Como reordenar ou trocar um dia

Basta reordenar/editar os objetos no array `days` (a ordem do array = ordem Seg→Dom). Mantenha `label`/`name` coerentes com a posição e revalide a regra de 48h.

## Timer de descanso

O botão no modal dispara `startTimer`, que anima um anel SVG (circunferência ≈ 175.9) e emite 3 bips via Web Audio API ao terminar. O tempo vem do campo `rest` do exercício.
