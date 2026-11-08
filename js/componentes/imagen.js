// Imagen con opción de ampliar a pantalla completa.
// { tipo: 'imagen', src, alt, ancho?, alto?, ampliable?: true }

import { h, icono } from '../dom.js';
import { prepararDialogo } from '../player.js';
import { track } from '../analytics.js';

let visor = null;

/** Muestra una imagen ampliada en un diálogo (se crea una sola vez). */
export function abrirVisor(src, alt) {
  if (!visor) {
    visor = h('dialog', { class: 'dialogo visor', 'aria-label': 'Imagen ampliada' },
      h('button', { type: 'button', class: 'boton-icono visor__cerrar', 'data-cerrar': true, 'aria-label': 'Cerrar' }, icono('cerrar')),
      h('img', { class: 'visor__imagen', alt: '' }));
    document.body.append(visor);
    prepararDialogo(visor);
    visor.addEventListener('click', (e) => { if (e.target.classList.contains('visor__imagen')) visor.close(); });
  }
  const img = visor.querySelector('img');
  img.src = src;
  img.alt = alt;
  visor.showModal();
  track('recurso_imagen', { imagen: src.split('/').pop() });
}

export function imagen(def) {
  const img = h('img', { src: def.src, alt: def.alt, width: def.ancho, height: def.alto, loading: 'lazy', decoding: 'async' });
  if (def.ampliable === false) return h('figure', { class: 'imagen' }, img);
  return h('figure', { class: 'imagen imagen--ampliable' },
    h('button', { type: 'button', class: 'imagen__boton', 'aria-label': `Ampliar imagen: ${def.alt}`, onClick: () => abrirVisor(def.src, def.alt) },
      img,
      h('span', { class: 'imagen__ampliar', 'aria-hidden': 'true' }, icono('ampliar'), 'Ampliar')));
}
