// EJEMPLO: siempre con la misma apariencia (ámbar, bombilla, texto en negrita).
//
// { tipo: 'ejemplo', titulo?, html }                       → ejemplo simple
// { tipo: 'ejemplo', titulo?, comparacion: [               → comparación
//     { etiqueta: 'Sin enfoque…', texto, variante: 'neutro' },
//     { etiqueta: 'Con enfoque…', texto, variante: 'enfoque' } ] }
// { tipo: 'ejemplo', titulo?, bloques: [...] }             → otros bloques (p. ej. una tabla)

import { h, icono } from '../dom.js';
import { renderBloque } from './index.js';

export function ejemplo(def, ctx) {
  const cuerpo = def.comparacion
    ? h('div', { class: 'ejemplo__comparacion' },
        def.comparacion.map((caso) =>
          h('div', { class: `ejemplo__caso ejemplo__caso--${caso.variante ?? 'neutro'}` },
            h('p', { class: 'ejemplo__caso-etiqueta' }, caso.etiqueta),
            h('p', { class: 'ejemplo__texto' }, caso.texto))))
    : def.bloques
      ? h('div', { class: 'ejemplo__bloques' }, def.bloques.map((b) => renderBloque(b, ctx)))
      : h('div', { class: 'ejemplo__texto', html: def.html });

  return h('div', { class: 'ejemplo', role: 'note', 'aria-label': 'Ejemplo' },
    h('span', { class: 'etiqueta etiqueta--ejemplo' }, icono('bombilla'), 'Ejemplo'),
    def.titulo && h('p', { class: 'ejemplo__titulo' }, def.titulo),
    cuerpo);
}
