// Plantilla de portada del recurso.

import { h, icono } from '../dom.js';
import { store } from '../store.js';

export function portada(p, ctx) {
  const ultima = store.ultima();
  const puedeContinuar = ultima && ultima !== ctx.ruta && ctx.existe(ultima);

  return h('div', { class: 'portada' },
    h('div', { class: 'portada__texto' },
      p.antetitulo && h('p', { class: 'portada__antetitulo' }, p.antetitulo),
      h('h1', { class: 'portada__titulo', id: 'pantalla-titulo', tabindex: '-1', html: p.tituloHtml ?? p.titulo }),
      p.subtitulo && h('p', { class: 'portada__subtitulo' }, p.subtitulo),
      h('div', { class: 'portada__acciones' },
        h('button', { type: 'button', class: 'boton boton--primario', onClick: ctx.siguiente },
          puedeContinuar ? 'Empezar desde el principio' : 'Empezar', icono('flecha-der')),
        puedeContinuar && h('button', { type: 'button', class: 'boton', onClick: () => ctx.irA(ultima) },
          'Continuar donde lo dejé')),
      h('p', { class: 'portada__nota' }, icono('check'),
        'Tus respuestas se guardan automáticamente en este navegador. Al terminar podrás descargarlas desde «Mi proyecto» para entregarlas.')),
    p.imagen && h('figure', { class: 'portada__imagen' },
      h('img', { src: p.imagen, alt: p.imagenAlt ?? '', width: 720, height: 720 })));
}
