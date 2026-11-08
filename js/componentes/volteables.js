// Tarjetas que se giran: delante icono y título; detrás definición y ejemplos.
// { tipo: 'volteables', items: [ { icono, titulo, html, ejemplos } ] }
// «ejemplos» se muestra en negrita, como todos los ejemplos del recurso.

import { h, icono } from '../dom.js';

export function volteables(def) {
  return h('ul', { class: 'volteables', role: 'list' },
    def.items.map((it, i) => {
      const tarjeta = h('button', {
        type: 'button', class: 'volteable', 'aria-pressed': 'false',
        'data-acento': it.acento ?? (i % 2 ? 'secundario' : 'principal'),
      },
      h('span', { class: 'volteable__cara volteable__cara--frente' },
        h('span', { class: 'volteable__icono' }, icono(it.icono)),
        h('span', { class: 'volteable__titulo' }, it.titulo),
        h('span', { class: 'volteable__pista', 'aria-hidden': 'true' }, icono('reiniciar'), 'Girar')),
      h('span', { class: 'volteable__cara volteable__cara--dorso' },
        h('span', { class: 'volteable__titulo-dorso' }, it.titulo),
        h('span', { class: 'volteable__texto', html: it.html }),
        it.ejemplos && h('span', { class: 'volteable__ejemplos' }, it.ejemplos)));
      tarjeta.addEventListener('click', () => {
        const girada = tarjeta.getAttribute('aria-pressed') === 'true';
        tarjeta.setAttribute('aria-pressed', String(!girada));
      });
      return h('li', { class: 'volteables__item' }, tarjeta);
    }));
}
