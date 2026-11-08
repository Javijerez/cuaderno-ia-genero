// Niveles encadenados de arriba abajo (p. ej. Antes → Intervención → Después).
// { tipo: 'niveles', items: [ { etiqueta, texto, acento } ] }

import { h } from '../dom.js';

export const niveles = (def) =>
  h('ol', { class: 'niveles' },
    def.items.map((n) =>
      h('li', { class: 'nivel', 'data-acento': n.acento },
        h('span', { class: 'nivel__punto', 'aria-hidden': 'true' }),
        h('span', { class: 'nivel__etiqueta' }, n.etiqueta),
        h('span', { class: 'nivel__texto' }, n.texto))));
