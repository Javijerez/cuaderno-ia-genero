// Tabla de datos de solo lectura (p. ej. un presupuesto).
// { tipo: 'tabla-datos', columnas: [..], filas: [ [..] ], pie?: [..], numericas?: [índices],
//   ancha?: true }   ← ocupa todo el ancho (tablas de varias columnas con texto)

import { h } from '../dom.js';

export function tablaDatos(def) {
  const clase = (i) => (def.numericas?.includes(i) ? 'numerica' : null);
  return h('div', { class: def.ancha ? 'tabla-datos tabla-datos--ancha' : 'tabla-datos' },
    h('table', {},
      h('thead', {}, h('tr', {}, def.columnas.map((c, i) => h('th', { scope: 'col', class: clase(i) }, c)))),
      h('tbody', {}, def.filas.map((fila) =>
        h('tr', {}, fila.map((c, i) => (i === 0 ? h('th', { scope: 'row' }, c) : h('td', { class: clase(i) }, c)))))),
      def.pie && h('tfoot', {}, h('tr', {}, def.pie.map((c, i) => (i === 0 ? h('th', { scope: 'row' }, c) : h('td', { class: clase(i) }, c)))))));
}
