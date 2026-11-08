// Reproductor: navegación pantalla a pantalla (router por hash), barra,
// progreso, índice y modo proyector.

import { INDICE } from '../contenido/indice.js';
import { CONFIG } from './config.js';
import { h, icono } from './dom.js';
import { store } from './store.js';
import { track } from './analytics.js';
import { PLANTILLAS } from './componentes/index.js';

const $ = (id) => document.getElementById(id);

export function iniciarPlayer() {
  const el = {
    recuadro: $('recuadro'),
    pantalla: $('pantalla'),
    bloque: $('bloque-actual'),
    anterior: $('btn-anterior'),
    siguiente: $('btn-siguiente'),
    progreso: $('progreso'),
    relleno: $('progreso-relleno'),
    progresoTexto: $('progreso-texto'),
    dlgIndice: $('dlg-indice'),
    listaIndice: $('lista-indice'),
    btnIndice: $('btn-indice'),
    btnProyector: $('btn-proyector'),
  };

  const pantallas = INDICE.flatMap((bloque) =>
    (bloque.pantallas ?? []).map((p) => ({
      ...p,
      bloque,
      acento: p.acento ?? bloque.acento ?? 'principal',
      ruta: `${bloque.id}/${p.id}`,
    })));
  const indicePorRuta = new Map(pantallas.map((p, i) => [p.ruta, i]));

  let actual = -1;
  let limpiezas = [];

  // --- Navegación --------------------------------------------------------

  const rutaDelHash = () => decodeURIComponent(location.hash.replace(/^#\/?/, ''));

  function irA(ruta) {
    if (!indicePorRuta.has(ruta)) return;
    if (rutaDelHash() === ruta) mostrar(indicePorRuta.get(ruta));
    else location.hash = `/${ruta}`; // → hashchange → mostrar()
  }
  const irAIndice = (i) => pantallas[i] && irA(pantallas[i].ruta);
  const siguiente = () => irAIndice(actual + 1);
  const anterior = () => irAIndice(actual - 1);

  window.addEventListener('hashchange', () => {
    const ruta = rutaDelHash();
    if (indicePorRuta.has(ruta)) mostrar(indicePorRuta.get(ruta));
    else history.replaceState(null, '', `#/${pantallas[actual].ruta}`);
  });

  function mostrar(i, { enfocar = true } = {}) {
    limpiezas.forEach((fn) => {
      try { fn(); } catch (e) { console.error(e); }
    });
    limpiezas = [];

    actual = i;
    const p = pantallas[i];
    const ctx = {
      ruta: p.ruta,
      pantalla: p,
      bloque: p.bloque,
      alDesmontar: (fn) => limpiezas.push(fn),
      siguiente,
      anterior,
      irA,
      existe: (ruta) => indicePorRuta.has(ruta),
    };

    const plantilla = PLANTILLAS[p.tipo ?? 'contenido'];
    el.pantalla.replaceChildren(plantilla(p, ctx));
    el.pantalla.scrollTop = 0;
    window.scrollTo({ top: 0 });

    el.recuadro.dataset.acento = p.acento;
    el.recuadro.dataset.tipo = p.tipo ?? 'contenido';
    el.bloque.replaceChildren(h('span', {}, p.bloque.titulo));
    document.title = i === 0 ? `${CONFIG.titulo} · ${CONFIG.organizacion}` : `${p.titulo} · ${CONFIG.titulo}`;

    el.anterior.disabled = i === 0;
    el.siguiente.disabled = i === pantallas.length - 1;

    const porcentaje = Math.round(((i + 1) / pantallas.length) * 100);
    el.relleno.style.width = `${porcentaje}%`;
    el.progreso.setAttribute('aria-valuenow', porcentaje);
    el.progresoTexto.textContent = `${i + 1} de ${pantallas.length}`;

    store.marcarVisitada(p.ruta);
    actualizarIndice();
    track('recurso_pantalla', { bloque: p.bloque.id, pantalla: p.id, posicion: i + 1 });

    if (enfocar) {
      const titulo = el.pantalla.querySelector('#pantalla-titulo') ?? el.pantalla;
      titulo.focus({ preventScroll: true });
    }
  }

  el.anterior.addEventListener('click', anterior);
  el.siguiente.addEventListener('click', siguiente);

  // Flechas del teclado (útil al proyectar), salvo mientras se escribe.
  document.addEventListener('keydown', (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    if (document.querySelector('dialog[open]')) return;
    if (e.target.closest('input, textarea, select, [contenteditable], button, a')) return;
    if (e.key === 'ArrowRight') siguiente();
    else if (e.key === 'ArrowLeft') anterior();
  });

  // --- Índice ------------------------------------------------------------

  const enlacesIndice = new Map();
  const desplegablesIndice = new Map();   // id de bloque -> <details>

  function construirIndice() {
    desplegablesIndice.clear();
    el.listaIndice.replaceChildren(...INDICE.map((bloque) => {
      const pendiente = !bloque.pantallas?.length;
      // El punto de color lo pone el ::before del título; la flecha va al final,
      // a la derecha, para no amontonarla con el punto.
      const titulo = (etiqueta) => h(etiqueta, { class: 'indice__bloque-titulo' },
        h('span', {}, bloque.titulo),
        pendiente
          ? h('span', { class: 'indice__pendiente' }, icono('candado'), 'En preparación')
          : icono('desplegar', 'icono indice__flecha'));

      // Un bloque «En preparación» no tiene nada que desplegar: se queda plano.
      if (pendiente) {
        return h('li', {
          class: 'indice__bloque indice__bloque--pendiente',
          'data-acento': bloque.acento ?? 'principal',
        }, titulo('p'));
      }

      const lista = h('ol', {}, bloque.pantallas.map((p) => {
        const ruta = `${bloque.id}/${p.id}`;
        const enlace = h('a', { class: 'indice__enlace', href: `#/${ruta}` },
          h('span', {}, p.titulo));
        enlace.addEventListener('click', () => el.dlgIndice.close());
        enlacesIndice.set(ruta, enlace);
        return h('li', {}, enlace);
      }));

      const desplegable = h('details', { class: 'indice__desplegable' }, titulo('summary'), lista);
      desplegablesIndice.set(bloque.id, desplegable);
      return h('li', {
        class: 'indice__bloque',
        'data-acento': bloque.acento ?? 'principal',
      }, desplegable);
    }));
  }

  /** Deja abierto solo el bloque de la pantalla actual. */
  function abrirBloqueActual() {
    const idActual = pantallas[actual]?.bloque.id;
    for (const [id, desplegable] of desplegablesIndice) desplegable.open = id === idActual;
  }

  function actualizarIndice() {
    const rutaActual = pantallas[actual]?.ruta;
    for (const [ruta, enlace] of enlacesIndice) {
      if (ruta === rutaActual) enlace.setAttribute('aria-current', 'page');
      else enlace.removeAttribute('aria-current');
      const visto = store.visitada(ruta);
      const marca = enlace.querySelector('.indice__visto');
      if (visto && !marca) {
        enlace.append(icono('check', 'icono indice__visto'), h('span', { class: 'visualmente-oculto' }, ' (vista)'));
      } else if (!visto && marca) {
        marca.nextSibling?.remove();
        marca.remove();
      }
    }
  }

  construirIndice();
  store.suscribir(() => actualizarIndice());
  prepararDialogo(el.dlgIndice);
  el.btnIndice.addEventListener('click', () => {
    // Se recalcula en cada apertura: así siempre se ve dónde estás, aunque se
    // hayan plegado bloques antes. Y hay que abrirlo ANTES de enfocar, porque
    // dentro de un <details> cerrado el enlace no es enfocable.
    abrirBloqueActual();
    el.dlgIndice.showModal();
    enlacesIndice.get(pantallas[actual].ruta)?.focus();
  });

  // --- Modo proyector ----------------------------------------------------

  function aplicarProyector(activo) {
    document.documentElement.classList.toggle('modo-proyector', activo);
    el.btnProyector.setAttribute('aria-pressed', String(activo));
  }
  el.btnProyector.addEventListener('click', async () => {
    const activo = !document.documentElement.classList.contains('modo-proyector');
    aplicarProyector(activo);
    try {
      if (activo && !document.fullscreenElement) await document.documentElement.requestFullscreen?.();
      if (!activo && document.fullscreenElement) await document.exitFullscreen?.();
    } catch {
      // Pantalla completa no disponible (p. ej. dentro de un iframe): solo letra grande.
    }
    if (activo) track('recurso_proyector', {}, { unaVez: true });
  });
  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) aplicarProyector(false);
  });

  // --- Arranque ----------------------------------------------------------

  const inicial = rutaDelHash();
  const i = indicePorRuta.has(inicial) ? indicePorRuta.get(inicial) : 0;
  history.replaceState(null, '', `#/${pantallas[i].ruta}`);
  mostrar(i, { enfocar: false });

  return { irA, recargar: () => mostrar(actual, { enfocar: false }) };
}

/** Cierre por botón [data-cerrar] y al pulsar fuera del diálogo. */
export function prepararDialogo(dialogo) {
  dialogo.addEventListener('click', (e) => {
    if (e.target === dialogo || e.target.closest('[data-cerrar]')) dialogo.close();
  });
}
