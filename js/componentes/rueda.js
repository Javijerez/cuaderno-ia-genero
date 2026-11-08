// Rueda en SVG con porciones iguales y un texto central.
// { tipo: 'rueda', centro: '¿Quién cuida?', items: [ 'infancia', … ] }

import { h } from '../dom.js';

const NS = 'http://www.w3.org/2000/svg';
const svg = (tag, attrs = {}, ...hijos) => {
  const el = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  hijos.forEach((c) => el.append(c));
  return el;
};

const COLORES = ['var(--principal)', 'var(--secundario)', 'var(--principal-700)', 'var(--secundario-700)', 
  // tonos intermedios siempre más oscuros que el color base: el texto blanco mantiene el contraste
  'color-mix(in srgb, var(--principal) 55%, var(--principal-900))', 'color-mix(in srgb, var(--secundario) 55%, var(--secundario-900))'];

/** Parte un texto en líneas de como mucho ~12 caracteres. */
function lineas(texto) {
  const palabras = texto.split(' ');
  const res = [];
  for (const p of palabras) {
    const ultima = res[res.length - 1];
    if (ultima && (ultima + ' ' + p).length <= 12) res[res.length - 1] = `${ultima} ${p}`;
    else res.push(p);
  }
  return res;
}

export function rueda(def) {
  const n = def.items.length;
  const R = 160;
  const r = 62;
  const cx = 180;
  const cy = 180;
  const punto = (ang, radio) => [cx + radio * Math.cos(ang), cy + radio * Math.sin(ang)];

  const porciones = def.items.map((texto, i) => {
    const a0 = (i / n) * 2 * Math.PI - Math.PI / 2;
    const a1 = ((i + 1) / n) * 2 * Math.PI - Math.PI / 2;
    const [x0, y0] = punto(a0, R);
    const [x1, y1] = punto(a1, R);
    const [x2, y2] = punto(a1, r);
    const [x3, y3] = punto(a0, r);
    const d = `M${x0} ${y0} A${R} ${R} 0 0 1 ${x1} ${y1} L${x2} ${y2} A${r} ${r} 0 0 0 ${x3} ${y3} Z`;
    const [tx, ty] = punto((a0 + a1) / 2, (R + r) / 2);
    const ls = lineas(texto);
    const etiqueta = svg('text', { x: tx, y: ty - ((ls.length - 1) * 8), class: 'rueda__texto', 'text-anchor': 'middle', 'dominant-baseline': 'middle' },
      ...ls.map((l, j) => { const t = svg('tspan', { x: tx, dy: j ? 16 : 0 }); t.textContent = l; return t; }));
    return svg('g', { class: 'rueda__porcion', style: `--color: ${COLORES[i % COLORES.length]}; --i: ${i}` },
      svg('path', { d }), etiqueta);
  });

  const centro = svg('text', { x: cx, y: cy, class: 'rueda__centro-texto', 'text-anchor': 'middle', 'dominant-baseline': 'middle' });
  lineas(def.centro).forEach((l, j, arr) => {
    const t = svg('tspan', { x: cx, dy: j ? 18 : -((arr.length - 1) * 9) });
    t.textContent = l;
    centro.append(t);
  });

  const grafico = svg('svg', { viewBox: '0 0 360 360', class: 'rueda__svg', role: 'img', 'aria-labelledby': 'rueda-desc' },
    ...porciones, svg('circle', { cx, cy, r: r - 6, class: 'rueda__centro' }), centro);

  return h('figure', { class: 'rueda' },
    grafico,
    h('figcaption', { class: 'visualmente-oculto', id: 'rueda-desc' }, `${def.centro} ${def.items.join(', ')}.`));
}
