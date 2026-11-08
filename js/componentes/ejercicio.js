// EJERCICIO: siempre con la misma apariencia (azul tinta, lápiz, enunciado en
// cursiva) y, si se indica, una pausa con temporizador.
//
// { tipo: 'ejercicio', id, titulo?, enunciado (html), pausa?: minutos,
//   bloques?: [...],   ← contenido dentro del ejercicio (dinámicas, nubes…)
//   campos: [ { tipo: 'texto-libre', id, etiqueta, ayuda?, filas? } ] }

import { h, icono, idUnico } from '../dom.js';
import { temporizador } from './temporizador.js';
import { renderCampo } from './campos.js';
import { renderBloque } from './index.js';

export function ejercicio(def, ctx) {
  const idTitulo = idUnico('ejercicio');
  return h('section', { class: 'ejercicio', 'aria-labelledby': idTitulo },
    h('div', { class: 'ejercicio__cabecera' },
      h('span', { class: 'etiqueta etiqueta--ejercicio', id: def.titulo ? null : idTitulo }, icono('lapiz'), 'Ejercicio'),
      def.titulo && h('h3', { class: 'ejercicio__titulo', id: idTitulo }, def.titulo)),
    def.enunciado && h('div', { class: 'ejercicio__enunciado', html: def.enunciado }),
    def.pausa && temporizador({ minutos: def.pausa, id: def.id }, ctx),
    def.bloques?.length > 0 && h('div', { class: 'ejercicio__bloques' }, def.bloques.map((b) => renderBloque(b, ctx))),
    def.campos?.length > 0 && h('div', { class: 'ejercicio__campos' }, def.campos.map((c) => renderCampo(c, ctx))));
}
