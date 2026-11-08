// Figura de los dos enfoques del recurso (p. ej. «Perspectiva de género» + «Pedagogía
// de los cuidados»): dos insignias con icono, en los colores principal y secundario.
// Opcionalmente acompaña a un párrafo de texto. Las etiquetas e iconos por defecto
// salen de CONFIG.enfoques; cada bloque puede sobrescribirlos.
// { tipo: 'enfoques', html?, enfoques?: [{ icono, texto }, { icono, texto }] }

import { h, icono } from '../dom.js';
import { CONFIG } from '../config.js';

function figura(par) {
  const [a, b] = par;
  return h('div', { class: 'enfoques__figura', 'aria-hidden': 'true' },
    h('span', { class: 'enfoques__insignia enfoques__insignia--principal' }, icono(a.icono),
      h('span', {}, a.texto)),
    h('span', { class: 'enfoques__mas' }, '+'),
    h('span', { class: 'enfoques__insignia enfoques__insignia--secundario' }, icono(b.icono),
      h('span', {}, b.texto)));
}

export const enfoques = (def) =>
  h('div', { class: `enfoques${def.html ? ' enfoques--con-texto' : ''}` },
    def.html && h('div', { class: 'texto', html: def.html }),
    figura(def.enfoques ?? CONFIG.enfoques));
