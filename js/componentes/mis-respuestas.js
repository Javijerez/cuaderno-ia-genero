// Recordatorio de respuestas que el alumnado dio en otra pantalla.
// Si no hay ninguna, no se muestra nada.
// { tipo: 'mis-respuestas', etiqueta, respuestas: [ { id, etiqueta } ] }
// (No se llama «campos» para que el dossier no los cuente dos veces.)

import { h, icono } from '../dom.js';
import { store } from '../store.js';

export function misRespuestas(def) {
  const respondidas = def.respuestas.filter((c) => store.respuesta(c.id).trim());
  if (!respondidas.length) return h('span', { hidden: true });
  return h('details', { class: 'mis-respuestas' },
    h('summary', { class: 'mis-respuestas__rotulo' }, icono('carpeta'), def.etiqueta),
    h('dl', { class: 'mis-respuestas__lista' }, respondidas.map((c) => [
      h('dt', {}, c.etiqueta),
      h('dd', {}, store.respuesta(c.id)),
    ])));
}
