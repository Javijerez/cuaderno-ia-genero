// Lista de comprobación que se guarda (array JSON de índices marcados).
// { tipo: 'checklist', id, etiqueta, ayuda?, items: [ 'Texto.' ], repaso?: true }
// repaso: repite un checklist de otra pantalla (mismo id); no se cuenta dos veces.

import { h, icono, idUnico } from '../dom.js';
import { store } from '../store.js';
import { track } from '../analytics.js';
import { sinCierreDeLista } from './tarjetas.js';

export function leerMarcados(id) {
  try {
    const v = JSON.parse(store.respuesta(id) || '[]');
    return Array.isArray(v) ? v.filter(Number.isInteger) : [];
  } catch {
    return [];
  }
}

export function checklist(def, ctx) {
  const marcados = new Set(leerMarcados(def.id));
  const total = def.items.length;
  const contador = h('p', { class: 'checklist__contador', 'aria-live': 'polite' });
  const barra = h('span', { class: 'checklist__relleno' });

  function pintarContador() {
    contador.textContent = `${marcados.size} de ${total}`;
    barra.style.width = `${(marcados.size / total) * 100}%`;
  }

  const lista = h('ul', { class: 'checklist__lista', role: 'list' },
    def.items.map((texto, i) => {
      const id = idUnico(`check-${def.id}`);
      const casilla = h('input', { type: 'checkbox', id, class: 'checklist__casilla' });
      casilla.checked = marcados.has(i);
      casilla.addEventListener('change', () => {
        if (casilla.checked) marcados.add(i);
        else marcados.delete(i);
        const valores = [...marcados].sort((a, b) => a - b);
        store.guardarRespuesta(def.id, valores.length ? JSON.stringify(valores) : '');
        track('recurso_respuesta', { campo: def.id, pantalla: ctx.ruta }, { unaVez: true });
        pintarContador();
      });
      return h('li', { class: 'checklist__item', 'data-acento': i % 2 ? 'secundario' : 'principal' },
        casilla,
        h('label', { for: id, class: 'checklist__texto' },
          h('span', { class: 'checklist__marca', 'aria-hidden': 'true' }, icono('check')),
          sinCierreDeLista(texto)));
    }));

  pintarContador();
  return h('section', { class: 'checklist', 'aria-label': def.etiqueta },
    h('div', { class: 'checklist__cabecera' },
      def.ayuda && h('p', { class: 'checklist__ayuda' }, def.ayuda),
      h('div', { class: 'checklist__progreso' }, h('span', { class: 'checklist__barra' }, barra), contador)),
    lista);
}
