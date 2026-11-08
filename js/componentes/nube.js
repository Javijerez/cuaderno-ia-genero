// Nube de palabras individual (conocimientos previos).
// { tipo: 'nube', grupos: [ { id, etiqueta, icono, acento, ayuda? } ] }
// Cada grupo guarda un array JSON de palabras (con repeticiones) en su id.

import { h, icono, idUnico } from '../dom.js';
import { store } from '../store.js';
import { track } from '../analytics.js';

export const leerPalabras = (id) => {
  try {
    const v = JSON.parse(store.respuesta(id) || '[]');
    return Array.isArray(v) ? v.filter((p) => typeof p === 'string') : [];
  } catch {
    return [];
  }
};

/** Agrupa por palabra (sin distinguir mayúsculas) y cuenta repeticiones. */
function frecuencias(palabras) {
  const mapa = new Map();
  for (const p of palabras) {
    const clave = p.toLocaleLowerCase('es');
    const previo = mapa.get(clave);
    mapa.set(clave, { texto: previo?.texto ?? p, n: (previo?.n ?? 0) + 1 });
  }
  return [...mapa.values()];
}

function grupo(def, ctx) {
  const idEntrada = idUnico(`nube-${def.id}`);
  let palabras = leerPalabras(def.id);

  const entrada = h('input', { id: idEntrada, class: 'campo__entrada', type: 'text', autocomplete: 'off', maxlength: '60', placeholder: 'Una palabra o idea' });
  const nube = h('div', { class: 'nube__nube', 'aria-live': 'polite' });

  function guardar() {
    store.guardarRespuesta(def.id, palabras.length ? JSON.stringify(palabras) : '');
    if (palabras.length) track('recurso_respuesta', { campo: def.id, pantalla: ctx.ruta }, { unaVez: true });
  }

  function pintar() {
    const lista = frecuencias(palabras);
    const max = Math.max(1, ...lista.map((p) => p.n));
    nube.replaceChildren(...(lista.length
      ? lista.map((p, i) => h('span', {
        class: 'nube__palabra',
        style: `--peso: ${0.95 + (p.n / max) * 1.3}; --giro: ${((i * 37) % 7) - 3}deg`,
      },
      p.texto,
      h('button', {
        type: 'button', class: 'nube__quitar', 'aria-label': `Quitar «${p.texto}»`,
        onClick: () => {
          const clave = p.texto.toLocaleLowerCase('es');
          palabras = palabras.filter((x) => x.toLocaleLowerCase('es') !== clave);
          guardar();
          pintar();
          entrada.focus();
        },
      }, icono('cerrar'))))
      : [h('span', { class: 'nube__vacia' }, 'Aquí aparecerán tus palabras.')]));
  }

  function anadir(e) {
    e.preventDefault();
    const nuevas = entrada.value.split(/[,;\n]/).map((t) => t.trim()).filter(Boolean);
    if (!nuevas.length) return;
    palabras = [...palabras, ...nuevas];
    entrada.value = '';
    guardar();
    pintar();
    entrada.focus();
  }

  pintar();
  return h('section', { class: 'nube', 'data-acento': def.acento },
    h('h3', { class: 'nube__titulo' }, h('span', { class: 'nube__icono' }, icono(def.icono)), def.etiqueta),
    h('form', { class: 'nube__formulario', onSubmit: anadir },
      h('label', { class: 'campo__etiqueta', for: idEntrada }, def.ayuda ?? 'Escribe palabras o ideas'),
      h('div', { class: 'nube__fila' }, entrada, h('button', { type: 'submit', class: 'boton boton--primario' }, icono('mas'), 'Añadir'))),
    nube);
}

export const nube = (def, ctx) => h('div', { class: 'nubes' }, def.grupos.map((g) => grupo(g, ctx)));

/** Muestra (solo lectura) las palabras que la persona escribió en una nube. */
export function misPalabras(def) {
  const palabras = [...new Set(leerPalabras(def.campo))];
  if (!palabras.length) return h('span', { hidden: true });
  return h('div', { class: 'mis-palabras', 'data-acento': def.acento },
    h('p', { class: 'mis-palabras__rotulo' }, def.etiqueta),
    h('ul', { class: 'mis-palabras__lista', role: 'list' }, palabras.map((p) => h('li', {}, p))));
}
