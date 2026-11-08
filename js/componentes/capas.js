// Capas de preguntas que se activan y desactivan (p. ej. género y cuidados).
// Varias pueden estar activas a la vez.
// { tipo: 'capas', items: [ { etiqueta, icono, acento, preguntas: [texto] } ] }

import { h, icono, idUnico } from '../dom.js';

export function capas(def) {
  const paneles = def.items.map((capa) =>
    h('div', { class: 'capa', id: idUnico('capa'), 'data-acento': capa.acento, hidden: true },
      h('p', { class: 'capa__titulo' }, icono(capa.icono), capa.etiqueta),
      h('ul', { class: 'capa__preguntas', role: 'list' }, capa.preguntas.map((p) => h('li', {}, p)))));

  const botones = def.items.map((capa, i) => {
    const boton = h('button', {
      type: 'button',
      class: 'capas__boton',
      'data-acento': capa.acento,
      'aria-pressed': 'false',
      'aria-controls': paneles[i].id,
      onClick: () => {
        const activa = boton.getAttribute('aria-pressed') !== 'true';
        boton.setAttribute('aria-pressed', String(activa));
        paneles[i].hidden = !activa;
      },
    },
    h('span', { class: 'capas__interruptor', 'aria-hidden': 'true' }),
    icono(capa.icono),
    capa.etiqueta);
    return boton;
  });

  return h('div', { class: 'capas' },
    h('div', { class: 'capas__botones' }, botones),
    h('div', { class: 'capas__paneles' }, paneles));
}
