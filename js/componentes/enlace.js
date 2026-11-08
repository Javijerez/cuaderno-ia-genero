// Enlace externo destacado. Si todavía no hay dirección, se muestra el texto
// sin enlace (y un aviso en la consola para no olvidarlo).
// { tipo: 'enlace', texto, url, icono? }

import { h, icono } from '../dom.js';

export function enlace(def) {
  const contenido = [def.icono && icono(def.icono), h('span', {}, def.texto)];
  if (!def.url) {
    console.warn('Enlace sin dirección:', def.texto);
    return h('p', { class: 'enlace enlace--pendiente' }, contenido);
  }
  return h('p', { class: 'enlace' },
    h('a', { href: def.url, target: '_blank', rel: 'noopener' }, contenido,
      h('span', { class: 'visualmente-oculto' }, ' (se abre en otra pestaña)'), icono('enlace')));
}
