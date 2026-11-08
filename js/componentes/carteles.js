// Carteles de ejemplo para analizar (maquetados en HTML, sin fotos).
// { tipo: 'carteles', items: [ { letra, estilo: 'rosa' | 'verde' | 'azul' | 'tierra',
//   icono, titulo, texto, imagen (descripción de la foto), datos, medio } ] }

import { h, icono } from '../dom.js';

export function carteles(def) {
  return h('ul', { class: 'carteles', role: 'list' },
    def.items.map((c) => h('li', { class: 'carteles__item' },
      h('article', { class: `cartel cartel--${c.estilo}`, 'aria-label': `Cartel ${c.letra}: ${c.titulo}` },
        h('span', { class: 'cartel__letra' }, c.letra),
        h('h3', { class: 'cartel__titulo' }, c.titulo),
        h('p', { class: 'cartel__texto' }, c.texto),
        h('figure', { class: 'cartel__imagen' },
          h('span', { class: 'cartel__icono' }, icono(c.icono)),
          h('figcaption', {}, h('span', { class: 'cartel__rotulo' }, 'Imagen: '), c.imagen)),
        h('p', { class: 'cartel__datos' }, c.datos),
        h('p', { class: 'cartel__medio' }, icono('documento'), c.medio)))));
}
