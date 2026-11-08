// Diagrama de pasos encadenados (p. ej. las cuatro fases de un proyecto).
// { tipo: 'fases', intro?: html, columnas?: 2, items: [ { texto, icono, destino? } ] }
// destino: id de una pantalla del mismo bloque; el paso enlaza a ella.
// Con cinco pasos o más se dibuja como itinerario (estaciones sobre una línea).
// columnas: 2 → cuadrícula 2×2 con tarjetas horizontales, para pasos de texto largo.

import { h, icono } from '../dom.js';
import { sinCierreDeLista } from './tarjetas.js';

export function fases(def, ctx) {
  const ruta = def.items.length >= 5;
  return h('div', { class: 'fases-bloque' },
    def.intro && h('p', { class: 'tarjetas__intro', html: def.intro }),
    h('ol', { class: ruta ? 'fases fases--ruta' : def.columnas === 2 ? 'fases fases--dos' : 'fases', style: ruta ? `--pasos: ${def.items.length}` : null },
      def.items.map((item, i) => {
        const partes = [
          h('span', { class: 'fase__icono' }, icono(item.icono)),
          h('span', { class: 'fase__numero', 'aria-hidden': 'true' }, String(i + 1)),
          h('span', { class: 'fase__texto' }, sinCierreDeLista(item.texto)),
        ];
        const destino = item.destino && ctx && `${ctx.bloque.id}/${item.destino}`;
        return h('li', { class: 'fase', 'data-acento': item.acento ?? (i % 2 ? 'secundario' : 'principal') },
          destino && ctx.existe(destino)
            ? h('a', { class: 'fase__enlace', href: `#/${destino}` }, partes)
            : partes);
      })));
}
