// Contenido oculto tras un botón (p. ej. «Después aparece: …»).
// { tipo: 'revelar', boton: 'texto del botón', bloques: [...] }
// Los campos que haya dentro se guardan igual y aparecen en el dossier.

import { h, icono } from '../dom.js';
import { renderBloque } from './index.js';

export function revelar(def, ctx) {
  const contenido = h('div', { class: 'revelar__contenido', hidden: true, tabindex: '-1' });
  const boton = h('button', { type: 'button', class: 'boton revelar__boton', 'aria-expanded': 'false' },
    icono('ojo'), def.boton);

  boton.addEventListener('click', () => {
    if (!contenido.childElementCount) contenido.append(...def.bloques.map((b) => renderBloque(b, ctx)));
    contenido.hidden = false;
    boton.hidden = true;
    boton.setAttribute('aria-expanded', 'true');
    contenido.focus({ preventScroll: true });
    contenido.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  return h('div', { class: 'revelar' }, boton, contenido);
}
