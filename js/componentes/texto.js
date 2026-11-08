// Bloques de texto: párrafos/listas (html), subtítulos y entradilla.

import { h } from '../dom.js';

export const texto = (def) => h('div', { class: 'texto', html: def.html });

export const subtitulo = (def) => h('h2', { class: 'subtitulo' }, def.texto);

export const subsubtitulo = (def) => h('h3', { class: 'subsubtitulo' }, def.texto);

export const entradilla = (def) => h('p', { class: 'entradilla', html: def.html });
