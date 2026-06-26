# 📋 Contexto do Projeto — App de Plano de Treino

**Criado em:** Junho/2026  
**Autor:** Darlan Magnus Evaldt  
**Status atual:** Projeto refatorado e organizado — estrutura multi-arquivo, imagens locais, features implementadas  
**Próximo passo:** Transformar em PWA (Progressive Web App)

---

## ⚠️ Regra obrigatória para assistentes de IA

> **Antes de executar qualquer alteração neste projeto:**
> 1. **Analisar** o que precisa ser feito
> 2. **Elaborar um plano** sequencial detalhado com todas as etapas
> 3. **Apresentar o plano ao usuário** e aguardar aprovação explícita
> 4. **Somente após aprovação** iniciar a execução, fase por fase
>
> Nunca executar diretamente sem planejamento prévio aprovado, independentemente do tamanho da alteração.

---

## 🎯 Objetivo do projeto

Criar um app de plano de treino semanal personalizado focado em **hipertrofia muscular**, respeitando uma rotina de **30 minutos de caminhada + 20 minutos de musculação por dia**.

O app deve funcionar como um guia visual interativo — o usuário consulta a sequência do dia, toca no exercício e vê como executá-lo corretamente.

---

## 🏋️ Estrutura do treino (lógica Push/Pull)

| Dia       | Foco                   | Grupos musculares              |
|-----------|------------------------|-------------------------------|
| Segunda   | Peito + Tríceps        | Peitoral, Tríceps, Deltóide anterior |
| Terça     | Costas + Bíceps        | Latíssimo, Trapézio, Bíceps, Romboides |
| Quarta    | Descanso Ativo         | Caminhada + mobilidade |
| Quinta    | Ombros                 | Deltóide, Trapézio, Manguito |
| Sexta     | Costas + Bíceps (B)    | Latíssimo, Bíceps, Trapézio |
| Sábado    | Peito + Tríceps (B)    | Peitoral, Tríceps, Deltóide |
| Domingo   | Descanso Completo      | Recuperação total |

**Princípios aplicados:**
- Cada grupo muscular descansa mínimo 48h entre sessões
- Exercícios compostos (multi-articulares) sempre antes dos isoladores
- Zona de hipertrofia: 8–12 reps, 3–4 séries, descanso 60–90s
- Progressão de carga semanal (+1–2 kg ao completar todas as reps)

---

## 📋 Lista completa de exercícios (com chave interna)

| Chave interna (`key`)        | Nome PT                              | Grupo muscular principal |
|-----------------------------|--------------------------------------|--------------------------|
| `supino_inclinado_barra`    | Supino Inclinado com Barra           | Peito superior, Tríceps  |
| `supino_reto_halteres`      | Supino Reto com Halteres             | Peito médio, Tríceps     |
| `crossover_cabo`            | Crossover / Voador no Cabo           | Peito (adução)           |
| `triceps_testa`             | Tríceps Testa (Skullcrusher)         | Tríceps (todas cabeças)  |
| `extensao_triceps_halter`   | Extensão de Tríceps com Halter       | Tríceps (cabeça longa)   |
| `puxada_supinada`           | Puxada Supinada no Cabo              | Latíssimo inferior, Bíceps · ⚠️ substituiu `puxada_braco_estendido` (que substituiu `barra_fixa`) |
| `puxada_alta`               | Puxada Alta (Lat Pulldown)           | Latíssimo, Bíceps        |
| `remada_sentada`            | Remada Sentada no Cabo               | Latíssimo, Trapézio      |
| `remada_unilateral`         | Remada Unilateral com Halter         | Latíssimo, Infra-espinhal|
| `rosca_barra_w`             | Rosca Direta com Barra W             | Bíceps, Braquiorradial   |
| `rosca_concentrada_banco`   | Rosca no Banco Scott                 | Bíceps (pico)            |
| `desenvolvimento_halteres`  | Desenvolvimento com Halteres (Sentado) | Deltóide anterior/medial |
| `elevacao_lateral`          | Elevação Lateral com Halteres        | Deltóide medial          |
| `elevacao_frontal`          | Elevação Frontal Alternada           | Deltóide anterior        |
| `rosca_alternada`           | Rosca Alternada com Halteres         | Bíceps braquial          |
| `crucifixo_halteres`        | Crucifixo com Halteres               | Peito (adução/alongam.)  |
| `cable_pushdown`            | Puxada de Tríceps (Cable Pushdown)   | Tríceps (todas cabeças)  |
| `rosca_concentrada_sentada` | Rosca Concentrada (Sentado)          | Bíceps (cabeça curta)    |

---

## 📁 Estrutura de arquivos do projeto

```
app_exercicio/
├── treino.html                        ← HTML principal (~39 linhas, limpo)
├── CONTEXTO_PROJETO_TREINO.md         ← Este arquivo
└── assets/
    ├── css/
    │   └── style.css                  ← Todos os estilos (extraído do HTML)
    ├── js/
    │   └── app.js                     ← Toda a lógica + dados dos exercícios
    └── images/
        ├── exercises/                 ← Reservado para SVGs anatômicos futuros
        └── photos/                    ← 39 imagens JPG locais dos exercícios
```

**Importante:** o projeto foi refatorado de um único arquivo de 156 KB para estrutura multi-arquivo. O `app.js` ficou em ~24 KB após remoção de imagens base64 embutidas.

---

## 🖼️ Imagens dos exercícios

### Fonte
**Free Exercise DB** — repositório público de domínio público no GitHub  
`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/`

Todas as imagens foram **baixadas localmente** para `assets/images/photos/`. O app não depende de conexão para exibir as imagens.

### Mapeamento exercício → arquivo local

| Chave                        | Arquivo(s) em `assets/images/photos/`                          |
|-----------------------------|----------------------------------------------------------------|
| `supino_inclinado_barra`    | `Barbell_Incline_Bench_Press_-_Medium_Grip_0.jpg` / `_1.jpg`  |
| `supino_reto_halteres`      | `Dumbbell_Bench_Press_0.jpg` / `_1.jpg`                       |
| `crossover_cabo`            | `Cable_Crossover_0.jpg` / `_1.jpg`                            |
| `triceps_testa`             | `Lying_Triceps_Press_0.jpg` / `_1.jpg`                        |
| `extensao_triceps_halter`   | `Tricep_Dumbbell_Kickback_0.jpg` / `_1.jpg`                   |
| `puxada_supinada`           | `Underhand_Cable_Pulldowns_0.jpg` / `_1.jpg`                  |
| `puxada_alta`               | `Wide-Grip_Lat_Pulldown_0.jpg` / `_1.jpg`                     |
| `remada_sentada`            | `Seated_Cable_Rows_0.jpg` / `_1.jpg`                          |
| `remada_unilateral`         | `One-Arm_Dumbbell_Row_0.jpg` / `_1.jpg`                       |
| `rosca_barra_w`             | `Barbell_Curl_0.jpg` / `_1.jpg`                               |
| `rosca_concentrada_banco`   | `Preacher_Curl_0.jpg` / `_1.jpg`                              |
| `desenvolvimento_halteres`  | `Seated_Dumbbell_Press_0.jpg` / `_1.jpg`                      |
| `elevacao_lateral`          | `Side_Lateral_Raise_0.jpg` / `_1.jpg`                         |
| `elevacao_frontal`          | `Front_Dumbbell_Raise_0.jpg` / `_1.jpg`                       |
| `rosca_alternada`           | `Dumbbell_Alternate_Bicep_Curl_0.jpg` / `_1.jpg`              |
| `crucifixo_halteres`        | `Dumbbell_Flyes_0.jpg` / `_1.jpg`                             |
| `cable_pushdown`            | `Triceps_Pushdown_0.jpg` / `_1.jpg`                           |
| `rosca_concentrada_sentada` | `Concentration_Curls_0.jpg` / `_1.jpg`                        |

---

## 🛠️ Stack atual

- **HTML5 + CSS3 + JavaScript vanilla** (multi-arquivo, sem dependências de build)
- **Fontes:** Bebas Neue (títulos) + Inter (corpo) via Google Fonts
- **Design:** dark theme — variáveis CSS centralizadas em `:root`
- **Animação do modal:** alternância img0 ↔ img1 com barra de progresso (~60fps)
- **Sem framework, sem build step** — abre direto no browser

### Variáveis CSS disponíveis (`style.css`)

```css
--bg, --surface, --card, --border
--accent (#e63946), --accent2 (#ff6b35)
--text, --muted, --text-dim, --text-secondary, --text-subtle
--green, --yellow, --blue, --purple
--header-gradient-start, --modal-bg, --modal-border, --modal-img-bg
```

---

## ✅ Funcionalidades implementadas

- [x] Navegação por abas (dias da semana)
- [x] **Aba do dia atual selecionada automaticamente** ao abrir o app
- [x] Cards de exercício com número, nome, músculos, séries/reps e descanso
- [x] Modal ao clicar/tocar no exercício com animação img0 ↔ img1
- [x] Barra de progresso animada no modal
- [x] Descrição de execução em português
- [x] Chips de séries, reps e descanso no modal
- [x] **Timer de descanso** no modal — contagem regressiva com anel animado + 3 bips ao terminar
- [x] Dias de descanso com layout dedicado
- [x] Resumo estatístico por dia
- [x] Tips/dicas de execução por dia
- [x] Design responsivo (mobile-first)
- [x] Fechar modal com ESC ou clique fora
- [x] Acessibilidade: `aria-label`, `role="tablist"`, `aria-selected`, `alt` nas imagens
- [x] Imagens locais (offline, sem CORS)

---

## 📱 Evolução planejada: transformar em app

### Opção 1 — PWA (Progressive Web App) ⭐ Recomendado
- Mantém o HTML/JS como base
- Adiciona `manifest.json` + Service Worker para funcionar offline e instalar como app
- Pode ser hospedado no GitHub Pages (gratuito) ou Vercel
- **Vantagem:** sem App Store, funciona no iPhone e Android

### Opção 2 — React Native / Expo
- Reescrever os componentes em React Native
- Expo facilita build para iOS e Android

### Opção 3 — Flutter
- Alternativa ao React Native, ótima performance

### Recomendação
Dado o perfil técnico (gestor, não dev full-time), **PWA é o caminho mais rápido** para ter algo instalável no iPhone sem precisar publicar na App Store. O protótipo atual está ~85% do caminho.

---

## 🔜 Melhorias para próximas versões

### Alta prioridade
- [ ] **GIFs animados reais** de cada exercício (em vez de alternância de fotos estáticas)
- [ ] **Registro de treino** — salvar carga e reps realizadas por dia (localStorage)
- [ ] **Progresso semanal** — tela mostrando evolução de carga por exercício

### Média prioridade
- [ ] **Notificação de treino** — push notification via PWA às 7h/manhã
- [ ] **Vídeo em loop** no modal — substituir par de fotos por vídeo MP4 mudo
- [ ] **Modo dark/light** toggle
- [ ] **Perfil do usuário** — peso, altura, objetivo, dias disponíveis

### Baixa prioridade
- [ ] **Geração de treino por IA** com base nos equipamentos disponíveis
- [ ] **Integração com Apple Health / Google Fit**
- [ ] **Compartilhamento social** do progresso

---

## 📝 Histórico de alterações

| Data     | Alteração |
|----------|-----------|
| Jun/2026 | Criação do protótipo inicial (arquivo único `treino.html`, 156 KB) |
| Jun/2026 | Substituição de **Barra Fixa (Assistida)** → **Straight-Arm Pulldown** na Terça |
| Jun/2026 | **Refatoração completa:** estrutura de pastas `assets/css/js/images`, CSS extraído para `style.css`, JS extraído para `app.js` |
| Jun/2026 | **Download local das imagens:** 39 JPGs baixados do Free Exercise DB para `assets/images/photos/` — app funciona offline |
| Jun/2026 | **Padronização de código:** variáveis CSS para todas as cores, `aria-label`/`role`/`alt` para acessibilidade, `lang="pt-BR"` no HTML |
| Jun/2026 | **Timer de descanso:** botão no modal com contagem regressiva, anel SVG animado e bips sonoros ao finalizar |
| Jun/2026 | **Aba do dia atual automática:** app abre sempre no dia da semana correto |
| Jun/2026 | Substituição de **Straight-Arm Pulldown** → **Puxada Supinada no Cabo** na Terça |
| Jun/2026 | Correção das imagens de **Desenvolvimento com Halteres** e **Rosca Alternada** — removidos base64 embutidos (~120 KB), substituídos por `Seated_Dumbbell_Press` e `Dumbbell_Alternate_Bicep_Curl` locais |

---

*Para retomar o projeto, compartilhe este arquivo no início da conversa.*
