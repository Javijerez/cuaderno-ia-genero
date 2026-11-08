// Resumen interactivo de las fases del proyecto (pantalla de conclusiones).
// { tipo: 'resumen-fases', fases: [ id de bloque, … ] }
// De cada fase toma los textos de su portada (entradilla y pasos) y cuenta
// cuántas preguntas ha respondido el alumnado en sus pantallas.
//
// La ficha del proyecto: reúne, por apartados, lo que el alumnado ha escrito
// sobre su propio proyecto a lo largo del recurso.
// { tipo: 'ficha-proyecto', secciones: [ { titulo, ruta, prefijos: [ id o prefijo de id ] } ] }
//
// Y un botón para ir a otra pantalla del recurso:
// { tipo: 'ir-a', texto, destino: '<bloque>/<pantalla>', icono? }

import { INDICE } from '../../contenido/indice.js';
import { h, icono, idUnico } from '../dom.js';
import { store } from '../store.js';
import { camposDePantalla } from './index.js';
import { formatearRespuesta } from './campos.js';
import { sinCierreDeLista } from './tarjetas.js';

function datosDeFase(bloque) {
  const [portada, ...resto] = bloque.pantallas;
  const bloques = portada.bloques ?? [];
  const [numero, ...nombre] = bloque.titulo.split('. ');
  const campos = resto.flatMap(camposDePantalla);
  return {
    bloque,
    numero,
    nombre: nombre.join('. '),
    icono: portada.icono,
    entradilla: bloques.find((b) => b.tipo === 'entradilla')?.html,
    pasos: bloques.find((b) => b.tipo === 'fases')?.items ?? [],
    portada: `${bloque.id}/${portada.id}`,
    total: campos.length,
    respondidas: campos.filter((c) => store.respuesta(c.id).trim()).length,
  };
}

export function resumenFases(def, ctx) {
  const fases = def.fases
    .map((id) => INDICE.find((b) => b.id === id))
    .filter((b) => b?.pantallas?.length)
    .map(datosDeFase);
  const base = idUnico('resumen');
  const pestanas = [];
  const paneles = [];

  function activar(i, enfocar = false) {
    pestanas.forEach((p, j) => {
      p.setAttribute('aria-selected', String(i === j));
      p.tabIndex = i === j ? 0 : -1;
      paneles[j].hidden = i !== j;
    });
    if (enfocar) pestanas[i].focus();
  }

  fases.forEach((f, i) => {
    const idTab = `${base}-tab-${i}`;
    const idPanel = `${base}-panel-${i}`;
    const tab = h('button', {
      type: 'button', role: 'tab', id: idTab, class: 'resumen-fases__pestana',
      'aria-controls': idPanel, 'data-acento': f.bloque.acento, onClick: () => activar(i),
    },
    h('span', { class: 'resumen-fases__icono' }, icono(f.icono)),
    h('span', { class: 'resumen-fases__numero' }, f.numero),
    h('span', { class: 'resumen-fases__nombre' }, f.nombre));
    tab.addEventListener('keydown', (e) => {
      const n = fases.length;
      const destino = { ArrowRight: i + 1, ArrowDown: i + 1, ArrowLeft: i - 1, ArrowUp: i - 1, Home: 0, End: n - 1 }[e.key];
      if (destino === undefined) return;
      e.preventDefault();
      activar((destino + n) % n, true);
    });
    pestanas.push(tab);

    const pasos = f.pasos.map((p) => {
      const ruta = p.destino && `${f.bloque.id}/${p.destino}`;
      const partes = [icono(p.icono), h('span', {}, sinCierreDeLista(p.texto))];
      return h('li', {}, ruta && ctx.existe(ruta)
        ? h('a', { class: 'resumen-fases__paso', href: `#/${ruta}` }, partes)
        : h('span', { class: 'resumen-fases__paso' }, partes));
    });

    paneles.push(h('div', {
      role: 'tabpanel', id: idPanel, class: 'resumen-fases__panel',
      'aria-labelledby': idTab, 'data-acento': f.bloque.acento, tabindex: '0',
    },
    h('h2', { class: 'resumen-fases__titulo' }, f.bloque.titulo),
    f.entradilla && h('p', { class: 'resumen-fases__entradilla', html: f.entradilla }),
    pasos.length > 0 && h('ul', { class: 'resumen-fases__pasos', role: 'list' }, pasos),
    h('div', { class: 'resumen-fases__pie' },
      f.total > 0 && h('p', { class: 'resumen-fases__respuestas' },
        h('span', { class: 'resumen-fases__barra', 'aria-hidden': 'true' },
          h('span', { style: `width: ${(f.respondidas / f.total) * 100}%` })),
        `Has respondido ${f.respondidas} de ${f.total} preguntas`),
      h('a', { class: 'boton boton--pequeno', href: `#/${f.portada}` }, `Revisar la ${f.numero.toLowerCase()}`, icono('flecha-der')))));
  });

  activar(0);
  return h('div', { class: 'resumen-fases' },
    h('div', { class: 'resumen-fases__pestanas', role: 'tablist', 'aria-label': 'Fases del proyecto' }, pestanas),
    paneles);
}

/** Todos los campos del recurso, en orden de aparición. */
const todosLosCampos = () => INDICE.flatMap((b) => (b.pantallas ?? []).flatMap(camposDePantalla));

export function fichaProyecto(def) {
  const campos = todosLosCampos();
  let completas = 0;
  const secciones = def.secciones.map((sec) => {
    const propios = campos.filter((c) => sec.prefijos.some((p) => c.id === p || c.id.startsWith(p)));
    const respondidos = propios
      .map((c) => ({ c, texto: formatearRespuesta(c, store.respuesta(c.id)).trim() }))
      .filter((r) => r.texto);
    if (respondidos.length) completas += 1;
    return h('section', { class: 'ficha__seccion', 'data-completa': String(respondidos.length > 0) },
      h('div', { class: 'ficha__cabecera' },
        h('h3', { class: 'ficha__titulo' }, icono(respondidos.length ? 'check' : 'lapiz'), sec.titulo),
        h('a', { class: 'ficha__enlace', href: `#/${sec.ruta}` }, respondidos.length ? 'Revisar' : 'Completar', icono('flecha-der'))),
      respondidos.length
        ? h('dl', { class: 'ficha__lista' }, respondidos.map(({ c, texto }) => [h('dt', {}, c.etiqueta), h('dd', {}, texto)]))
        : h('p', { class: 'ficha__vacio' }, 'Todavía sin completar.'));
  });
  return h('div', { class: 'ficha' },
    h('p', { class: 'ficha__progreso' },
      h('span', { class: 'resumen-fases__barra', 'aria-hidden': 'true' },
        h('span', { style: `width: ${(completas / def.secciones.length) * 100}%` })),
      `Has completado ${completas} de ${def.secciones.length} apartados`),
    secciones);
}

export function irA(def) {
  return h('p', { class: 'ir-a' },
    h('a', { class: 'boton boton--primario', href: `#/${def.destino}` }, def.icono && icono(def.icono), def.texto));
}
