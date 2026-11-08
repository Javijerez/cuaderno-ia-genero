// Plantilla estándar de pantalla: antetítulo (bloque), título y bloques.
// Con `imagen: { src, alt }`, el título y la entradilla (si es el primer bloque)
// van a la izquierda y la foto, ampliable, a la derecha.

import { h, icono } from '../dom.js';
import { renderBloque } from './index.js';
import { abrirVisor } from './imagen.js';

export function contenido(p, ctx) {
  const cabecera = [
    p.antetitulo !== false && h('p', { class: 'antetitulo' }, p.antetitulo ?? ctx.bloque.titulo),
    p.icono
      ? h('div', { class: 'pantalla__cabecera' },
        h('span', { class: 'pantalla__icono', 'aria-hidden': 'true' }, icono(p.icono)),
        h('h1', { class: 'pantalla__titulo', id: 'pantalla-titulo', tabindex: '-1' }, p.titulo))
      : h('h1', { class: 'pantalla__titulo', id: 'pantalla-titulo', tabindex: '-1' }, p.titulo),
  ];
  let bloques = p.bloques ?? [];

  if (p.imagen) {
    const conEntradilla = bloques[0]?.tipo === 'entradilla';
    const { src, alt } = p.imagen;
    cabecera.splice(0, cabecera.length,
      h('div', { class: 'pantalla__intro' },
        h('div', { class: 'pantalla__intro-texto' }, cabecera, conEntradilla && renderBloque(bloques[0], ctx)),
        h('figure', { class: 'pantalla__foto' },
          h('button', { type: 'button', class: 'galeria__boton', 'aria-label': `Ampliar: ${alt}`, onClick: () => abrirVisor(src, alt) },
            h('img', { src, alt, width: 800, height: 600, decoding: 'async' }),
            h('span', { class: 'galeria__lupa', 'aria-hidden': 'true' }, icono('ampliar'))))));
    if (conEntradilla) bloques = bloques.slice(1);
  }

  return h('div', { class: 'pantalla__interior' },
    cabecera,
    bloques.map((b) => renderBloque(b, ctx)));
}
