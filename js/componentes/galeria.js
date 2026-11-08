// Rejilla de fotos ampliables. { tipo: 'galeria', imagenes: [ { src, alt } ] }

import { h, icono } from '../dom.js';
import { abrirVisor } from './imagen.js';

export function galeria(def) {
  return h('ul', { class: 'galeria', role: 'list' },
    def.imagenes.map((im) =>
      h('li', { class: 'galeria__item' },
        h('button', { type: 'button', class: 'galeria__boton', 'aria-label': `Ampliar: ${im.alt}`, onClick: () => abrirVisor(im.src, im.alt) },
          h('img', { src: im.src, alt: im.alt, width: 800, height: 600, loading: 'lazy', decoding: 'async' }),
          h('span', { class: 'galeria__lupa', 'aria-hidden': 'true' }, icono('ampliar'))))));
}
