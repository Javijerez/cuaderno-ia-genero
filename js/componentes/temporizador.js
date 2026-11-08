// Temporizador del tiempo para hacer los ejercicios: el profesorado ajusta los minutos
// y lo inicia cuando quiere dejar tiempo para trabajar; el alumnado ve cuánto queda.

import { h, icono } from '../dom.js';
import { track } from '../analytics.js';

const MIN_MINUTOS = 1;
const MAX_MINUTOS = 60;

const formatear = (s) =>
  `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

const leerEnVoz = (s) => {
  const m = Math.floor(s / 60);
  const seg = s % 60;
  return `${m} ${m === 1 ? 'minuto' : 'minutos'}${seg ? ` y ${seg} segundos` : ''}`;
};

export function temporizador({ minutos = 5, id }, ctx) {
  let total = minutos * 60;
  let restante = total;
  let fin = 0;
  let intervalo = null;

  const tiempo = h('span', { class: 'temporizador__tiempo', role: 'timer' });
  const aviso = h('p', { class: 'temporizador__aviso', 'aria-live': 'polite' });

  const txtPlay = h('span', {}, 'Empezar');
  const icoPlay = icono('play');
  const btnPlay = h('button', { type: 'button', class: 'boton boton--primario boton--pequeno', onClick: alternar }, icoPlay, txtPlay);
  const btnReiniciar = h('button', { type: 'button', class: 'boton-icono', 'aria-label': 'Reiniciar temporizador', title: 'Reiniciar', onClick: reiniciar }, icono('reiniciar'));
  const btnMenos = h('button', { type: 'button', class: 'boton-icono', 'aria-label': 'Un minuto menos', title: 'Un minuto menos', onClick: () => ajustar(-1) }, icono('menos'));
  const btnMas = h('button', { type: 'button', class: 'boton-icono', 'aria-label': 'Un minuto más', title: 'Un minuto más', onClick: () => ajustar(1) }, icono('mas'));

  const raiz = h('div', { class: 'temporizador' },
    h('span', { class: 'temporizador__rotulo' }, icono('reloj'), 'Tiempo para el ejercicio'),
    tiempo,
    h('div', { class: 'temporizador__controles' }, btnMenos, btnMas, btnReiniciar, btnPlay),
    aviso);

  function pintar() {
    tiempo.textContent = formatear(restante);
    tiempo.setAttribute('aria-label', `Tiempo restante: ${leerEnVoz(restante)}`);
    raiz.style.setProperty('--avance', `${((total - restante) / total) * 100}%`);
    const enMarcha = intervalo !== null;
    btnMenos.disabled = enMarcha || total <= MIN_MINUTOS * 60;
    btnMas.disabled = enMarcha || total >= MAX_MINUTOS * 60;
    txtPlay.textContent = enMarcha ? 'Pausar' : restante < total && restante > 0 ? 'Continuar' : 'Empezar';
    icoPlay.firstChild.setAttribute('href', enMarcha ? '#i-pausa' : '#i-play');
  }

  function tick() {
    restante = Math.max(0, Math.ceil((fin - Date.now()) / 1000));
    if (restante === 0) terminar();
    pintar();
  }

  function alternar() {
    if (intervalo !== null) {
      detener();
    } else {
      if (restante === 0) restante = total;
      raiz.classList.remove('es-fin');
      aviso.textContent = '';
      fin = Date.now() + restante * 1000;
      intervalo = setInterval(tick, 250);
      track('recurso_temporizador', { ejercicio: id, minutos: total / 60 }, { unaVez: true });
    }
    pintar();
  }

  function detener() {
    clearInterval(intervalo);
    intervalo = null;
  }

  function terminar() {
    detener();
    raiz.classList.add('es-fin');
    aviso.textContent = '¡Tiempo! Podéis poner en común vuestras respuestas.';
    sonar();
  }

  function reiniciar() {
    detener();
    restante = total;
    raiz.classList.remove('es-fin');
    aviso.textContent = '';
    pintar();
  }

  function ajustar(delta) {
    const nuevos = Math.min(MAX_MINUTOS, Math.max(MIN_MINUTOS, total / 60 + delta));
    total = nuevos * 60;
    restante = total;
    raiz.classList.remove('es-fin');
    aviso.textContent = '';
    pintar();
  }

  ctx.alDesmontar(detener);
  pintar();
  return raiz;
}

/** Aviso sonoro breve (dos tonos). Si el navegador no lo permite, se omite. */
function sonar() {
  try {
    const Audio = window.AudioContext || window.webkitAudioContext;
    if (!Audio) return;
    const ac = new Audio();
    [0, 0.22].forEach((retardo, i) => {
      const osc = ac.createOscillator();
      const vol = ac.createGain();
      osc.type = 'sine';
      osc.frequency.value = i ? 880 : 660;
      vol.gain.setValueAtTime(0.0001, ac.currentTime + retardo);
      vol.gain.exponentialRampToValueAtTime(0.25, ac.currentTime + retardo + 0.02);
      vol.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + retardo + 0.35);
      osc.connect(vol).connect(ac.destination);
      osc.start(ac.currentTime + retardo);
      osc.stop(ac.currentTime + retardo + 0.4);
    });
    setTimeout(() => ac.close(), 1000);
  } catch {
    // Sin audio: el aviso visual y el aria-live son suficientes.
  }
}
