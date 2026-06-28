const MEDIA = {"supino_inclinado_barra": ["assets/images/photos/Barbell_Incline_Bench_Press_-_Medium_Grip_0.jpg", "assets/images/photos/Barbell_Incline_Bench_Press_-_Medium_Grip_1.jpg", "Deite no banco inclinado. Segure a barra com pegada um pouco mais larga que os ombros. Des\u00e7a at\u00e9 o peito superior e empurre para cima, estendendo os bra\u00e7os sem travar os cotovelos."], "supino_reto_halteres": ["assets/images/photos/Dumbbell_Bench_Press_0.jpg", "assets/images/photos/Dumbbell_Bench_Press_1.jpg", "Deite no banco plano, halteres na altura do peito. Empurre para cima at\u00e9 quase estender os bra\u00e7os. Controle a descida em 2-3 segundos."], "crossover_cabo": ["assets/images/photos/Cable_Crossover_0.jpg", "assets/images/photos/Cable_Crossover_1.jpg", "De p\u00e9 entre as polias, puxe os cabos para frente e para baixo em arco. Espreme o peito na posi\u00e7\u00e3o final. Retorne com controle."], "triceps_testa": ["assets/images/photos/Lying_Triceps_Press_0.jpg", "assets/images/photos/Lying_Triceps_Press_1.jpg", "Deitado no banco, barra W na testa. Mantenha os cotovelos fixos e apontados para o teto. Estenda os bra\u00e7os e retorne devagar."], "extensao_triceps_halter": ["assets/images/photos/Tricep_Dumbbell_Kickback_0.jpg", "assets/images/photos/Tricep_Dumbbell_Kickback_1.jpg", "De p\u00e9 ou sentado, segure o halter com uma m\u00e3o atr\u00e1s da cabe\u00e7a. Estenda o bra\u00e7o para cima sem mover o cotovelo. Retorne lentamente."], "puxada_supinada": ["assets/images/photos/Underhand_Cable_Pulldowns_0.jpg", "assets/images/photos/Underhand_Cable_Pulldowns_1.jpg", "Sentado na m\u00e1quina de puxada, pegada supinada (palmas para cima) com m\u00e3os na largura dos ombros. Puxe a barra at\u00e9 o queixo, levando os cotovelos para baixo e atr\u00e1s. Controle a subida em 2\u20133 segundos. Ativa fortemente a parte baixa do lat\u00edssimo e o b\u00edceps."], "puxada_alta": ["assets/images/photos/Wide-Grip_Lat_Pulldown_0.jpg", "assets/images/photos/Wide-Grip_Lat_Pulldown_1.jpg", "Sentado na m\u00e1quina, pegada larga. Puxe a barra at\u00e9 a altura do queixo, levando os cotovelos para baixo. Pense em 'levar cotovelos ao ch\u00e3o'."], "remada_sentada": ["assets/images/photos/Seated_Cable_Rows_0.jpg", "assets/images/photos/Seated_Cable_Rows_1.jpg", "Sentado, coluna reta. Puxe o cabo at\u00e9 o abd\u00f4men retraindo as esc\u00e1pulas. N\u00e3o curve a lombar. Retorne controlando a extens\u00e3o."], "remada_unilateral": ["assets/images/photos/One-Arm_Dumbbell_Row_0.jpg", "assets/images/photos/One-Arm_Dumbbell_Row_1.jpg", "Apoie joelho e m\u00e3o no banco. Costas paralelas ao ch\u00e3o. Puxe o halter at\u00e9 o quadril, retrai a esc\u00e1pula no topo. N\u00e3o tor\u00e7a o tronco."], "rosca_barra_w": ["assets/images/photos/Barbell_Curl_0.jpg", "assets/images/photos/Barbell_Curl_1.jpg", "Em p\u00e9, barra W com pegada supinada. Mantenha cotovelos fixos ao lado do corpo. Suba a barra contraindo o b\u00edceps. Des\u00e7a lentamente."], "rosca_concentrada_banco": ["assets/images/photos/Preacher_Curl_0.jpg", "assets/images/photos/Preacher_Curl_1.jpg", "Cotovelo apoiado no banco Scott. Suba o halter ou barra contraindo o b\u00edceps at\u00e9 o topo. Des\u00e7a controlando o peso. Foca no pico da contra\u00e7\u00e3o."], "desenvolvimento_halteres": ["assets/images/photos/Seated_Dumbbell_Press_0.jpg", "assets/images/photos/Seated_Dumbbell_Press_1.jpg", "Sentado, halteres na altura dos ombros. Empurre para cima at\u00e9 quase estender os bra\u00e7os. Cotovelos alinhados lateralmente. Des\u00e7a controlando."], "elevacao_lateral": ["assets/images/photos/Side_Lateral_Raise_0.jpg", "assets/images/photos/Side_Lateral_Raise_1.jpg", "Em p\u00e9, halteres ao lado do corpo. Eleve lateralmente at\u00e9 a altura dos ombros. Mantenha leve flex\u00e3o no cotovelo. Des\u00e7a devagar."], "elevacao_frontal": ["assets/images/photos/Front_Dumbbell_Raise_0.jpg", "assets/images/photos/Front_Dumbbell_Raise_1.jpg", "Em p\u00e9, halteres \u00e0 frente das coxas. Eleve um bra\u00e7o por vez at\u00e9 a altura dos ombros. Mantenha o bra\u00e7o quase estendido. Des\u00e7a controlando."], "rosca_alternada": ["assets/images/photos/Dumbbell_Alternate_Bicep_Curl_0.jpg", "assets/images/photos/Dumbbell_Alternate_Bicep_Curl_1.jpg", "Em p\u00e9, halteres ao lado do corpo. Suba alternando os bra\u00e7os, girando o pulso no topo (supina\u00e7\u00e3o). Mantenha cotovelos fixos ao lado do tronco."], "crucifixo_halteres": ["assets/images/photos/Dumbbell_Flyes_0.jpg", "assets/images/photos/Dumbbell_Flyes_1.jpg", "Deitado, halteres sobre o peito. Abra os bra\u00e7os em arco at\u00e9 sentir o alongamento do peitoral. Retorne como se abra\u00e7asse uma \u00e1rvore grande."], "cable_pushdown": ["assets/images/photos/Triceps_Pushdown_0.jpg", "assets/images/photos/Triceps_Pushdown_1.jpg", "Em p\u00e9 na polia, cotovelos fixos ao lado do corpo. Empurre o cabo para baixo estendendo os bra\u00e7os. Aperte os tr\u00edceps no final. Retorne controlado."], "rosca_concentrada_sentada": ["assets/images/photos/Concentration_Curls_0.jpg", "assets/images/photos/Concentration_Curls_1.jpg", "Sentado, cotovelo apoiado na coxa interna. Suba o halter contraindo o b\u00edceps. Mantenha o bra\u00e7o superior im\u00f3vel. Foco m\u00e1ximo no m\u00fasculo."], "puxada_braco_estendido": ["assets/images/photos/Straight-Arm_Pulldown_0.jpg", "assets/images/photos/Straight-Arm_Pulldown_1.jpg", "De p\u00e9 na polia alta, segure a barra com os bra\u00e7os quase estendidos. Mantendo os cotovelos levemente flexionados e fixos, puxe a barra para baixo em arco at\u00e9 a altura dos quadris, contraindo o lat\u00edssimo. Retorne controlando o movimento. N\u00e3o curve a coluna."]};
const EX_DATA = {};

let animTimer = null;
let currentPhase = 0;
let progress = 0;
const PHASE_MS = 1500;
const FPS_INTERVAL = 16;

function openModal(key) {
  const d = EX_DATA[key];
  const m = MEDIA[key];
  if (!d || !m) return;

  const img0 = document.getElementById('modal-img0');
  const img1 = document.getElementById('modal-img1');
  const bar  = document.getElementById('anim-bar');
  const lbl  = document.getElementById('phase-label');

  // Load images
  img0.src = m[0];
  img1.src = m[1];
  img0.alt = `${d.name} — posição inicial`;
  img1.alt = `${d.name} — posição final`;
  img0.classList.remove('hidden');
  img1.classList.add('hidden');
  bar.style.transition = 'none';
  bar.style.width = '0%';
  lbl.textContent = 'INÍCIO';

  document.getElementById('modal-exname').textContent = d.name;
  document.getElementById('modal-muscles').textContent = d.muscles;
  document.getElementById('modal-desc').textContent = m[2];

  const setsEl = document.getElementById('modal-sets');
  setsEl.innerHTML = d.chips.map(c => `<span class="modal-set-chip">${c}</span>`).join('');

  const noteEl = document.getElementById('modal-replace-note');
  if (d.replaceNote) {
    noteEl.innerHTML = d.replaceNote;
    noteEl.style.display = 'block';
  } else {
    noteEl.style.display = 'none';
  }

  setupTimer(d.rest);

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  startAnim(img0, img1, bar, lbl);
}

function startAnim(img0, img1, bar, lbl) {
  stopAnim();
  currentPhase = 0;
  progress = 0;
  const inc = (FPS_INTERVAL / PHASE_MS) * 100;

  animTimer = setInterval(() => {
    progress += inc;
    bar.style.transition = 'width .06s linear';
    bar.style.width = Math.min(progress, 100) + '%';

    if (progress >= 100) {
      progress = 0;
      // reset bar instantly
      bar.style.transition = 'none';
      bar.style.width = '0%';
      void bar.offsetWidth; // force reflow

      currentPhase = 1 - currentPhase;
      if (currentPhase === 1) {
        img0.classList.add('hidden');
        img1.classList.remove('hidden');
        lbl.textContent = 'FINAL';
      } else {
        img1.classList.add('hidden');
        img0.classList.remove('hidden');
        lbl.textContent = 'INÍCIO';
      }
    }
  }, FPS_INTERVAL);
}

function stopAnim() {
  if (animTimer) { clearInterval(animTimer); animTimer = null; }
}

function closeModal() {
  stopAnim();
  stopTimer();
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ——— REST TIMER ———
let timerInterval = null;
let timerTotal    = 0;
let timerLeft     = 0;

function parseRestSeconds(restStr) {
  const m = restStr && restStr.match(/(\d+)s/);
  return m ? parseInt(m[1], 10) : 60;
}

function setupTimer(restStr) {
  stopTimer();
  timerTotal = parseRestSeconds(restStr);
  timerLeft  = timerTotal;
  const wrap  = document.getElementById('modal-timer');
  const ring  = document.getElementById('timer-ring-fill');
  const btn   = document.getElementById('timer-btn');
  const label = document.getElementById('timer-label');
  const cd    = document.getElementById('timer-countdown');
  const ringWrap = wrap.querySelector('.timer-ring-wrap');
  wrap.style.display = 'flex';
  ringWrap.classList.remove('visible');
  ring.classList.remove('done');
  ring.style.strokeDashoffset = '0';
  btn.classList.remove('running');
  label.textContent = `Descanso ${timerTotal}s`;
  cd.textContent = '';
}

function toggleTimer() {
  if (timerInterval) { stopTimer(); return; }
  startTimer();
}

function startTimer() {
  const ring  = document.getElementById('timer-ring-fill');
  const btn   = document.getElementById('timer-btn');
  const label = document.getElementById('timer-label');
  const cd    = document.getElementById('timer-countdown');
  const ringWrap = document.querySelector('.timer-ring-wrap');
  const circumference = 175.9;

  timerLeft = timerTotal;
  ringWrap.classList.add('visible');
  btn.classList.add('running');
  ring.classList.remove('done');

  function tick() {
    if (timerLeft <= 0) {
      ring.classList.add('done');
      ring.style.strokeDashoffset = '0';
      label.textContent = '✓ Descansado!';
      cd.textContent = '0';
      btn.classList.remove('running');
      beep();
      clearInterval(timerInterval);
      timerInterval = null;
      return;
    }
    const ratio  = timerLeft / timerTotal;
    ring.style.strokeDashoffset = String(circumference * (1 - ratio));
    cd.textContent = String(timerLeft);
    label.textContent = `Descansando…`;
    timerLeft--;
  }

  tick();
  timerInterval = setInterval(tick, 1000);
}

function stopTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
  const btn   = document.getElementById('timer-btn');
  const label = document.getElementById('timer-label');
  const ring  = document.getElementById('timer-ring-fill');
  const ringWrap = document.querySelector('.timer-ring-wrap');
  if (!btn) return;
  btn.classList.remove('running');
  ring.classList.remove('done');
  ring.style.strokeDashoffset = '0';
  if (ringWrap) ringWrap.classList.remove('visible');
  label.textContent = timerTotal ? `Descanso ${timerTotal}s` : 'Iniciar descanso';
}

function beep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    [0, 0.15, 0.3].forEach(delay => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.frequency.value = 880;
      g.gain.setValueAtTime(0.25, ctx.currentTime + delay);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.12);
      o.start(ctx.currentTime + delay);
      o.stop(ctx.currentTime + delay + 0.13);
    });
  } catch(_) {}
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ——— DAYS DATA ———
const days = [
  {
    label:"Seg", name:"Segunda-feira", focus:"Peito + Tríceps",
    tags:["Peito","Tríceps","Deltóide Anterior"], color:"#e63946",
    exercises:[
      {key:"supino_inclinado_barra", num:1, name:"Supino Inclinado com Barra", muscles:"Peitoral superior · Tríceps · Deltóide anterior", sets:"3–4 × 8–12", rest:"90s entre séries", chips:["3–4 séries","8–12 reps","90s descanso"]},
      {key:"supino_reto_halteres", num:2, name:"Supino Reto com Halteres", muscles:"Peitoral médio · Tríceps · Estabilizadores", sets:"3 × 10–12", rest:"90s entre séries", chips:["3 séries","10–12 reps","90s descanso"]},
      {key:"crossover_cabo", num:3, name:"Crossover / Voador no Cabo", muscles:"Peitoral (adução) · Deltóide anterior", sets:"3 × 12–15", rest:"60s entre séries", chips:["3 séries","12–15 reps","60s descanso"]},
      {key:"triceps_testa", num:4, name:"Tríceps Testa (Skullcrusher)", muscles:"Tríceps (todas as cabeças) · Antebraço", sets:"3 × 10–12", rest:"75s entre séries", chips:["3 séries","10–12 reps","75s descanso"]},
      {key:"extensao_triceps_halter", num:5, name:"Extensão de Tríceps com Halter", muscles:"Tríceps (cabeça longa) · Ombro estabilizador", sets:"3 × 10–12 cada", rest:"60s entre séries", chips:["3 séries","10–12 reps cada","60s descanso"]},
    ],
    tips:["Aqueça com 1 série leve antes de cada exercício principal.","No supino, mantenha as escápulas retraídas e o peito expandido.","Controle a descida (2–3 seg) para maior estímulo de hipertrofia.","Descanso muscular do peito: ao menos 48h antes do próximo treino de peito."]
  },
  {
    label:"Ter", name:"Terça-feira", focus:"Costas + Bíceps",
    tags:["Latíssimo","Trapézio","Bíceps","Romboides"], color:"#3498db",
    exercises:[
      {key:"puxada_supinada", num:1, name:"Puxada Supinada no Cabo", muscles:"Latíssimo do dorso (porção inferior) · Bíceps braquial · Redondo maior", sets:"3–4 × 10–12", rest:"75s entre séries", chips:["3–4 séries","10–12 reps","75s descanso"]},
      {key:"puxada_alta", num:2, name:"Puxada Alta (Lat Pulldown)", muscles:"Latíssimo do dorso · Bíceps · Deltóide posterior", sets:"3 × 10–12", rest:"90s entre séries", chips:["3 séries","10–12 reps","90s descanso"]},
      {key:"remada_sentada", num:3, name:"Remada Sentada no Cabo", muscles:"Latíssimo · Trapézio · Redondo maior/menor · Braquial", sets:"3 × 10–12", rest:"90s entre séries", chips:["3 séries","10–12 reps","90s descanso"]},
      {key:"remada_unilateral", num:4, name:"Remada Unilateral com Halter", muscles:"Latíssimo · Infra-espinhal · Deltóide posterior", sets:"3 × 10–12 cada lado", rest:"75s entre séries", chips:["3 séries","10–12 reps cada","75s descanso"]},
      {key:"rosca_barra_w", num:5, name:"Rosca Direta com Barra W", muscles:"Bíceps braquial · Braquiorradial", sets:"3 × 10–12", rest:"75s entre séries", chips:["3 séries","10–12 reps","75s descanso"]},
      {key:"rosca_concentrada_banco", num:6, name:"Rosca no Banco Scott", muscles:"Bíceps braquial (pico) · Braquial", sets:"3 × 12 cada lado", rest:"60s entre séries", chips:["3 séries","12 reps cada","60s descanso"]},
    ],
    tips:["Na puxada supinada, palmas viradas para cima — isso recruta mais a parte baixa do lat e o bíceps.","Na puxada alta, pense em 'levar os cotovelos ao chão' para ativar melhor o lat.","Na remada, retraia a escápula antes de puxar — não compense com lombar.","Descanso muscular das costas: mínimo 48h antes de repetir."]
  },
  {
    label:"Qua", name:"Quarta-feira", focus:"Descanso Ativo", rest:true, color:"#2ecc71",
    tips:["Continue com a caminhada de 30 minutos (recuperação ativa).","Alongamento geral: 10–15 min focando peito, costas e ombros.","Hidratação e alimentação proteica são essenciais neste dia.","Você pode fazer mobilidade articular ou yoga leve."]
  },
  {
    label:"Qui", name:"Quinta-feira", focus:"Ombros",
    tags:["Deltóide","Trapézio","Manguito Rotador"], color:"#9b59b6",
    exercises:[
      {key:"desenvolvimento_halteres", num:1, name:"Desenvolvimento com Halteres (Sentado)", muscles:"Deltóide anterior/medial · Trapézio · Tríceps", sets:"3–4 × 8–12", rest:"90s entre séries", chips:["3–4 séries","8–12 reps","90s descanso"]},
      {key:"elevacao_lateral", num:2, name:"Elevação Lateral com Halteres", muscles:"Deltóide medial (porção lateral)", sets:"3 × 12–15", rest:"60s entre séries", chips:["3 séries","12–15 reps","60s descanso"]},
      {key:"elevacao_frontal", num:3, name:"Elevação Frontal Alternada", muscles:"Deltóide anterior · Trapézio superior", sets:"3 × 12 cada lado", rest:"60s entre séries", chips:["3 séries","12 reps cada","60s descanso"]},
    ],
    tips:["No desenvolvimento, não leve os cotovelos para frente — mantenha alinhados lateralmente.","Na elevação lateral, suba até a altura do ombro (não acima).","Cargas leves com execução perfeita > cargas altas com compensação.","Descanso muscular do ombro: 48h antes de repetir."]
  },
  {
    label:"Sex", name:"Sexta-feira", focus:"Costas + Tríceps (B)",
    tags:["Latíssimo","Tríceps","Trapézio"], color:"#3498db",
    exercises:[
      {key:"puxada_alta", num:1, name:"Puxada Alta (Lat Pulldown)", muscles:"Latíssimo do dorso · Bíceps · Deltóide posterior", sets:"4 × 10–12", rest:"90s entre séries", chips:["4 séries","10–12 reps","90s descanso"]},
      {key:"remada_sentada", num:2, name:"Remada Sentada no Cabo", muscles:"Latíssimo · Trapézio · Redondo maior/menor", sets:"3 × 10–12", rest:"90s entre séries", chips:["3 séries","10–12 reps","90s descanso"]},
      {key:"cable_pushdown", num:3, name:"Puxada de Tríceps (Cable Pushdown)", muscles:"Tríceps (todas as cabeças)", sets:"3 × 12", rest:"60s entre séries", chips:["3 séries","12 reps","60s descanso"]},
      {key:"extensao_triceps_halter", num:4, name:"Extensão de Tríceps com Halter", muscles:"Tríceps (cabeça longa) · Ombro estabilizador", sets:"3 × 10–12 cada", rest:"60s entre séries", chips:["3 séries","10–12 reps cada","60s descanso"]},
    ],
    tips:["Aumente a carga progressivamente a cada semana (+1–2 kg quando completar todas as reps).","No cable pushdown, mantenha os cotovelos fixos ao lado do corpo — não deixe subirem.","Na extensão com halter, desça devagar para maximizar o alongamento da cabeça longa.","Beba proteína pós-treino em até 30–60 min."]
  },
  {
    label:"Sáb", name:"Sábado", focus:"Peito + Bíceps (B)",
    tags:["Peito","Bíceps","Deltóide Anterior"], color:"#e63946",
    exercises:[
      {key:"supino_reto_halteres", num:1, name:"Supino Reto com Halteres", muscles:"Peitoral médio · Tríceps · Estabilizadores", sets:"4 × 8–12", rest:"90s entre séries", chips:["4 séries","8–12 reps","90s descanso"]},
      {key:"crucifixo_halteres", num:2, name:"Crucifixo com Halteres", muscles:"Peitoral (adução/alongamento) · Deltóide anterior", sets:"3 × 12–15", rest:"60s entre séries", chips:["3 séries","12–15 reps","60s descanso"]},
      {key:"supino_inclinado_barra", num:3, name:"Supino Inclinado com Barra", muscles:"Peitoral superior · Tríceps", sets:"3 × 10–12", rest:"90s entre séries", chips:["3 séries","10–12 reps","90s descanso"]},
      {key:"rosca_alternada", num:4, name:"Rosca Alternada com Halteres", muscles:"Bíceps braquial · Braquiorradial", sets:"3 × 10–12 cada", rest:"75s entre séries", chips:["3 séries","10–12 reps cada","75s descanso"]},
      {key:"rosca_concentrada_sentada", num:5, name:"Rosca Concentrada (Sentado)", muscles:"Bíceps (cabeça curta/pico) · Braquiorradial", sets:"3 × 12 cada lado", rest:"60s entre séries", chips:["3 séries","12 reps cada","60s descanso"]},
    ],
    tips:["No crucifixo, desça até sentir o alongamento — mas sem dor no ombro.","Foque na conexão mente-músculo no supino: 'aperte' o peitoral em cada repetição.","Na rosca, mantenha os cotovelos fixos — não balance o tronco para ganhar impulso.","Anote suas cargas para ter referência na semana seguinte."]
  },
  {
    label:"Dom", name:"Domingo", focus:"Descanso Completo", rest:true, color:"#2ecc71",
    tips:["Descanso total é quando o músculo efetivamente cresce (síntese proteica).","Durma 7–9 horas: o GH (hormônio do crescimento) é liberado no sono.","Refeições ricas em proteína (1,6–2,2g por kg de peso corporal/dia).","Prepare sua mente e equipamentos para a semana seguinte."]
  }
];

// Register exercise data
days.forEach(day => {
  if (day.exercises) {
    day.exercises.forEach(ex => {
      EX_DATA[ex.key] = { name: ex.name, muscles: ex.muscles, chips: ex.chips, replaceNote: ex.replaceNote || null };
    });
  }
});

const tabsEl = document.getElementById('tabs');
const contentEl = document.getElementById('content');

// 0=Dom,1=Seg...6=Sáb → mapeia para índice do array (Seg=0...Dom=6)
const todayIndex = (new Date().getDay() + 6) % 7;

days.forEach((day, i) => {
  const isToday = i === todayIndex;
  const tab = document.createElement('div');
  tab.className = 'tab' + (isToday ? ' active' : '');
  tab.setAttribute('role', 'tab');
  tab.setAttribute('aria-selected', isToday ? 'true' : 'false');
  tab.setAttribute('aria-controls', 'panel-' + i);
  tab.setAttribute('aria-label', day.name);
  tab.setAttribute('tabindex', isToday ? '0' : '-1');
  tab.innerHTML = `<span class="day-dot" style="background:${day.color}"></span>${day.label}`;
  tab.onclick = () => {
    document.querySelectorAll('.tab').forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
    });
    document.querySelectorAll('.day-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    tab.setAttribute('tabindex', '0');
    document.getElementById('panel-' + i).classList.add('active');
  };
  tabsEl.appendChild(tab);

  const panel = document.createElement('div');
  panel.className = 'day-panel' + (isToday ? ' active' : '');
  panel.id = 'panel-' + i;

  if (day.rest) {
    panel.innerHTML = `
      <div class="rest-day">
        <div class="rest-icon">${day.focus.includes('Ativo') ? '🚶' : '😴'}</div>
        <h2>${day.focus}</h2>
        <p>${day.focus.includes('Ativo') ? 'Continue a caminhada de 30 minutos. Sem musculação hoje — seu corpo está se reconstruindo.' : 'Descanso total. A hipertrofia acontece na recuperação, não no treino.'}</p>
      </div>
      <div class="tips"><h4>💡 Dicas para hoje</h4><ul>${day.tips.map(t=>`<li>${t}</li>`).join('')}</ul></div>`;
  } else {
    panel.innerHTML = `
      <div class="day-header">
        <div>
          <div class="day-title" style="color:${day.color}">${day.name}</div>
          <div class="muscle-tags">${day.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        </div>
        <div class="rest-badge">🕒 ~20 min</div>
      </div>
      <div class="summary">
        <div class="stat"><div class="stat-val">${day.exercises.length}</div><div class="stat-lbl">exercícios</div></div>
        <div class="stat"><div class="stat-val">~${day.exercises.length*3}</div><div class="stat-lbl">séries totais</div></div>
        <div class="stat"><div class="stat-val">60–90s</div><div class="stat-lbl">descanso</div></div>
        <div class="stat"><div class="stat-val">48h</div><div class="stat-lbl">recuperação</div></div>
      </div>
      <div class="section-label">Toque em qualquer exercício para ver como executar</div>
      <div class="exercise-list">
        ${day.exercises.map(ex => `
          <div class="exercise-card" onclick="openModal('${ex.key}')">
            <div class="ex-num">${String(ex.num).padStart(2,'0')}</div>
            <div class="ex-body">
              <div class="ex-name">${ex.name}${ex.replaceNote ? '<span class="new-badge">novo</span>' : ''}</div>
              <div class="ex-muscles">${ex.muscles}</div>
              <div class="ex-hint">▶ Toque para ver o exercício</div>
              <div class="rest-info"><span class="rest-dot">●</span> Descanso: ${ex.rest}</div>
            </div>
            <div class="ex-sets">
              <div class="sets-val">${ex.sets.split('×')[0].trim()}</div>
              <div class="sets-label">séries</div>
              <div class="sets-label" style="color:#ccc;font-size:.7rem">${(ex.sets.split('×')[1]||'').trim()} reps</div>
            </div>
          </div>`).join('')}
      </div>
      <div class="tips" style="margin-top:20px"><h4>💡 Dicas de execução</h4><ul>${day.tips.map(t=>`<li>${t}</li>`).join('')}</ul></div>`;
  }
  contentEl.appendChild(panel);
});