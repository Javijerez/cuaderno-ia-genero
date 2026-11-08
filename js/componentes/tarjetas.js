// Lista presentada como rejilla de tarjetas con icono o número.
//
// { tipo: 'tarjetas', intro?: html, estilo?: 'iconos' | 'lista' | 'numeradas' | 'compactas' | 'destacadas',
//   columnas?: 1, items: [ { texto (html), icono? } ] }
//
// El texto de los items se guarda tal cual en /contenido; al mostrarlo en
// tarjetas se omite solo el signo de cierre de lista (; o .) del final,
// salvo el punto de una abreviatura como «etc.».

import { h, icono } from '../dom.js';

export const sinCierreDeLista = (html) => html.replace(/(?<!\betc)\s*[;.]\s*$/, '');

export function tarjetas(def) {
  const estilo = def.estilo ?? 'iconos';
  return h('div', { class: 'tarjetas-bloque' },
    def.intro && h('p', { class: 'tarjetas__intro', html: def.intro }),
    h('ul', { class: `tarjetas tarjetas--${estilo}${def.columnas === 1 ? ' tarjetas--una-columna' : ''}`, role: 'list' },
      def.items.map((item, i) =>
        h('li', { class: 'tarjeta', 'data-acento': item.acento ?? (i % 2 ? 'secundario' : 'principal') },
          estilo === 'numeradas'
            ? h('span', { class: 'tarjeta__marca', 'aria-hidden': 'true' }, String(i + 1))
            : item.icono && h('span', { class: 'tarjeta__marca' }, icono(item.icono)),
          h('span', { class: 'tarjeta__texto', html: sinCierreDeLista(item.texto) })))));
}
