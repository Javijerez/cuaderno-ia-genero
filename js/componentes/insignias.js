// Fila de insignias con icono. Si repiten algo que ya dice el texto, se marcan
// como decorativas para que no se lean dos veces.
// { tipo: 'insignias', decorativo?: true, items: [ { icono, texto } ] }

import { h, icono } from '../dom.js';

export const insignias = (def) =>
  h('ul', { class: 'insignias', role: 'list', 'aria-hidden': def.decorativo ? 'true' : null },
    def.items.map((it, i) =>
      h('li', { class: 'insignia', 'data-acento': it.acento ?? (i % 2 ? 'secundario' : 'principal') }, icono(it.icono), it.texto)));
