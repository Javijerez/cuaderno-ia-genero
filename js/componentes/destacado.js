// Recuadro destacado con icono, para frases clave del texto.
// { tipo: 'destacado', icono, html, variante?: 'principal' | 'secundario', grande?: true }

import { h, icono } from '../dom.js';

// Aviso breve en una línea (p. ej. «Lectura opcional»). { tipo: 'aviso', icono?, html }
export const aviso = (def) =>
  h('p', { class: 'aviso' }, def.icono && icono(def.icono), h('span', { html: def.html }));

export const destacado = (def) =>
  h('div', { class: `destacado${def.grande ? ' destacado--grande' : ''}`, 'data-acento': def.variante ?? null },
    def.icono && h('span', { class: 'destacado__icono' }, icono(def.icono)),
    h('div', { class: 'destacado__texto', html: def.html }));
