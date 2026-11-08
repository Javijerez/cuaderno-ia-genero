// Dos columnas en escritorio, una en móvil.
// { tipo: 'columnas', proporcion?: '3-2', columnas: [ [bloques], [bloques] ] }

import { h } from '../dom.js';
import { renderBloque } from './index.js';

export function columnas(def, ctx) {
  const [a, b] = (def.proporcion ?? '1-1').split('-');
  return h('div', { class: 'columnas', style: `--col-a: ${a}fr; --col-b: ${b}fr` },
    def.columnas.map((bloques) => h('div', { class: 'columnas__col' }, bloques.map((bl) => renderBloque(bl, ctx)))));
}
