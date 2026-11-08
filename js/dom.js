// Utilidades mínimas para construir DOM sin dependencias.

/**
 * Crea un elemento. Props especiales: class, html (innerHTML de contenido propio,
 * nunca de datos del alumnado), dataset, on<Evento>.
 */
export function h(etiqueta, props = {}, ...hijos) {
  const el = document.createElement(etiqueta);
  for (const [clave, valor] of Object.entries(props ?? {})) {
    if (valor == null || valor === false) continue;
    if (clave === 'class') el.className = valor;
    else if (clave === 'html') el.innerHTML = valor;
    else if (clave === 'dataset') Object.assign(el.dataset, valor);
    else if (clave.startsWith('on') && typeof valor === 'function') {
      el.addEventListener(clave.slice(2).toLowerCase(), valor);
    } else if (valor === true) el.setAttribute(clave, '');
    else el.setAttribute(clave, valor);
  }
  anadirHijos(el, hijos);
  return el;
}

function anadirHijos(el, hijos) {
  for (const hijo of hijos.flat(Infinity)) {
    if (hijo == null || hijo === false) continue;
    el.append(hijo instanceof Node ? hijo : document.createTextNode(String(hijo)));
  }
}

const SVG = 'http://www.w3.org/2000/svg';

/** Icono del sprite de index.html (#i-<nombre>). Decorativo. */
export function icono(nombre, clase = 'icono') {
  const svg = document.createElementNS(SVG, 'svg');
  svg.setAttribute('class', clase);
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  const use = document.createElementNS(SVG, 'use');
  use.setAttribute('href', `#i-${nombre}`);
  svg.append(use);
  return svg;
}

let contador = 0;
/** Id único para asociar etiquetas y controles. */
export const idUnico = (prefijo = 'id') => `${prefijo}-${++contador}`;

/** Texto plano a partir de un fragmento HTML de contenido. */
export function textoPlano(html = '') {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent.replace(/\s+/g, ' ').trim();
}
