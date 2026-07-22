# 🏋️ Meu Plano de Treino

App web (PWA) de plano de treino semanal focado em **hipertrofia**. Funciona como um guia visual interativo: o usuário abre o dia da semana, toca em um exercício e vê como executá-lo, com séries, repetições, descanso e um timer embutido.

**Demo:** https://cbmagnus.github.io/app-treino/treino.html

---

## ✨ Funcionalidades

- Navegação por abas (dias da semana), abrindo automaticamente no dia atual
- Cards de exercício com número, músculos trabalhados, séries/reps e descanso
- Modal com animação início ↔ final e barra de progresso
- Timer de descanso com anel animado e alerta sonoro
- Dias de descanso com layout dedicado e dicas
- Design responsivo (mobile-first), tema escuro
- Imagens locais — funciona **offline**, sem depender de rede
- Acessibilidade: `aria-label`, `role="tablist"`, `alt` nas imagens

---

## 🗓️ Lógica do treino (1 grupo muscular por dia)

O programa treina **um grupo muscular por dia, 3 exercícios cada**, com a ordem otimizada para garantir **no mínimo 48h de descanso para todos os músculos** — incluindo os secundários (o dia de ombros/peito recruta tríceps; o dia de costas recruta bíceps).

| Dia     | Grupo             |
|---------|-------------------|
| Segunda | Ombros            |
| Terça   | Abdômen           |
| Quarta  | Tríceps           |
| Quinta  | Costas            |
| Sexta   | Peito             |
| Sábado  | Bíceps            |
| Domingo | Descanso completo |

A sequência intercala os grupos de propósito: treinar Costas seguido de Bíceps (ou Peito seguido de Tríceps) reintroduziria fadiga em <48h, porque esses músculos já atuam como secundários. A ordem atual evita qualquer sobreposição em dias consecutivos.

**Princípios:** compostos antes de isoladores · zona de hipertrofia (8–12 reps, 3–4 séries, descanso 60–90s) · progressão de carga semanal.

---

## 🚀 Como rodar localmente

Não há build step. Basta um servidor estático:

```bash
# Python
python -m http.server 8000
# ou Node
npx serve .
```

Depois abra `http://localhost:8000/treino.html`. Também é possível abrir o `treino.html` direto no navegador (as imagens são locais).

---

## 📁 Estrutura de pastas

```
app-treino/
├── treino.html            # HTML principal
├── manifest.json          # Metadados PWA
├── assets/
│   ├── css/style.css      # Estilos (variáveis CSS no :root)
│   ├── js/app.js          # Lógica + dados dos exercícios
│   ├── icons/             # Ícones do PWA
│   └── images/photos/     # Fotos dos exercícios (domínio público)
└── docs/
    └── ARQUITETURA.md     # Modelo de dados e como estender o app
```

Detalhes de implementação e como adicionar exercícios/dias estão em [`docs/ARQUITETURA.md`](docs/ARQUITETURA.md).

---

## 🛠️ Stack

HTML5 + CSS3 + JavaScript vanilla (multi-arquivo, sem dependências). Fontes Bebas Neue + Inter (Google Fonts). Tema escuro com variáveis CSS.

---

## 🖼️ Créditos das imagens

Imagens dos exercícios da **[Free Exercise DB](https://github.com/yuhonas/free-exercise-db)** (domínio público), baixadas localmente para funcionamento offline.

---

## 🔭 Roadmap

- [ ] Registro de treino (carga e reps por dia) com persistência local
- [ ] Tela de progresso semanal por exercício
- [ ] GIFs/vídeos reais de execução
- [ ] Service worker para uso 100% offline instalável
- [ ] Notificação de treino (push via PWA)
