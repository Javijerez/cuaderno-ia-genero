// Dinámica de aula por pasos, en pestanas.
// { tipo: 'dinamica', pasos: [ { icono, titulo, bloques: [...] } ] }
//
// Y el selector de acciones para proyectar:
// { tipo: 'acciones', intro?, boton, items: [ 'Acción.' ] }

import { h, icono, idUnico } from '../dom.js';
import { renderBloque } from './index.js';
import { sinCierreDeLista } from './tarjetas.js';

export function dinamica(def, ctx) {
  const base = idUnico('dinamica');
  const pestanas = [];
  const paneles = [];

  function activar(i, enfocar = false) {
    pestanas.forEach((p, j) => {
      const activa = i === j;
      p.setAttribute('aria-selected', String(activa));
      p.tabIndex = activa ? 0 : -1;
      paneles[j].hidden = !activa;
    });
    if (enfocar) pestanas[i].focus();
  }

  def.pasos.forEach((paso, i) => {
    const idTab = `${base}-tab-${i}`;
    const idPanel = `${base}-panel-${i}`;
    const tab = h('button', {
      type: 'button', role: 'tab', id: idTab, class: 'dinamica__pestana',
      'aria-controls': idPanel, 'data-acento': i % 2 ? 'secundario' : 'principal',
      onClick: () => activar(i),
    }, h('span', { class: 'dinamica__icono' }, icono(paso.icono)), h('span', {}, paso.titulo));
    tab.addEventListener('keydown', (e) => {
      const n = def.pasos.length;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); activar((i + 1) % n, true); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); activar((i - 1 + n) % n, true); }
      if (e.key === 'Home') { e.preventDefault(); activar(0, true); }
      if (e.key === 'End') { e.preventDefault(); activar(n - 1, true); }
    });
    pestanas.push(tab);

    const siguiente = def.pasos[i + 1];
    paneles.push(h('div', { role: 'tabpanel', id: idPanel, class: 'dinamica__panel', 'aria-labelledby': idTab, tabindex: '0' },
      paso.bloques.map((b) => renderBloque(b, ctx)),
      siguiente && h('button', { type: 'button', class: 'boton boton--pequeno dinamica__siguiente', onClick: () => activar(i + 1, true) },
        `Ir al ${siguiente.titulo.split('.')[0].toLowerCase()}`, icono('flecha-der'))));
  });

  activar(0);
  return h('div', { class: 'dinamica' },
    h('div', { class: 'dinamica__pestanas', role: 'tablist', 'aria-label': 'Pasos de la dinámica' }, pestanas),
    paneles);
}

export function acciones(def) {
  let actual = -1;
  const destacada = h('p', { class: 'acciones__destacada', 'aria-live': 'polite' });
  const fichas = def.items.map((t) => h('li', { class: 'acciones__ficha' }, sinCierreDeLista(t)));

  function otra() {
    let i;
    do { i = Math.floor(Math.random() * def.items.length); } while (def.items.length > 1 && i === actual);
    actual = i;
    fichas.forEach((f, j) => f.classList.toggle('es-activa', j === i));
    destacada.textContent = def.items[i];
    destacada.classList.remove('es-nueva');
    void destacada.offsetWidth; // reinicia la animación
    destacada.classList.add('es-nueva');
  }

  return h('div', { class: 'acciones' },
    def.intro && h('p', { class: 'acciones__intro' }, def.intro),
    h('ul', { class: 'acciones__fichas', role: 'list' }, fichas),
    h('div', { class: 'acciones__ruleta' },
      h('button', { type: 'button', class: 'boton boton--primario', onClick: otra }, icono('azar'), def.boton),
      destacada));
}
