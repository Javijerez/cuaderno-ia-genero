// Acordeón de apartados largos. { tipo: 'desplegables', abierto?: índice,
//   items: [ { titulo, resumen?, icono?, acento?: 'principal' | 'secundario', bloques: [...] } ] }
// resumen: frase breve que se ve también con el apartado cerrado.

import { h, icono } from '../dom.js';
import { renderBloque } from './index.js';

export function desplegables(def, ctx) {
  return h('div', { class: 'desplegables' },
    def.items.map((item, i) =>
      h('details', { class: 'desplegable', open: def.abierto === i, 'data-acento': item.acento ?? null },
        h('summary', { class: 'desplegable__titulo' },
          item.icono && h('span', { class: 'desplegable__marca' }, icono(item.icono)),
          h('span', { class: 'desplegable__texto' }, item.titulo,
            item.resumen && h('span', { class: 'desplegable__resumen' }, item.resumen)),
          icono('desplegar', 'icono desplegable__flecha')),
        h('div', { class: 'desplegable__cuerpo' }, item.bloques.map((b) => renderBloque(b, ctx))))));
}
