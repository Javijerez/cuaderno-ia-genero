// Reparto secreto de roles al azar, pasando el dispositivo de mano en mano.
// { tipo: 'reparto', roles: [ { id, icono, titulo, html } ],
//   prioridad: [ids], relleno: id }
// Se reparten primero los roles de «prioridad» (tantos como personas haya);
// el resto de personas recibe el rol «relleno». No se guarda nada.

import { h, icono } from '../dom.js';

const MINIMO = 3;
const MAXIMO = 12;

function barajar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

export function reparto(def) {
  const porId = new Map(def.roles.map((r) => [r.id, r]));
  let personas = 6;
  let asignados = [];
  let turno = 0;

  const escena = h('div', { class: 'reparto__escena', 'aria-live': 'polite' });

  function repartir() {
    const unicos = def.prioridad.slice(0, personas);
    const resto = Array(personas - unicos.length).fill(def.relleno);
    asignados = barajar([...unicos, ...resto]).map((id) => porId.get(id));
    turno = 0;
    pintarTurno();
  }

  function pintarConfiguracion() {
    const numero = h('output', { class: 'reparto__numero' }, String(personas));
    const menos = h('button', { type: 'button', class: 'boton-icono', 'aria-label': 'Una persona menos' }, icono('menos'));
    const mas = h('button', { type: 'button', class: 'boton-icono', 'aria-label': 'Una persona más' }, icono('mas'));
    const actualizar = (paso) => {
      personas = Math.min(MAXIMO, Math.max(MINIMO, personas + paso));
      numero.textContent = String(personas);
      menos.disabled = personas === MINIMO;
      mas.disabled = personas === MAXIMO;
    };
    menos.addEventListener('click', () => actualizar(-1));
    mas.addEventListener('click', () => actualizar(1));
    actualizar(0);
    escena.replaceChildren(
      h('p', { class: 'reparto__titulo' }, icono('azar'), 'Reparto de roles al azar'),
      h('div', { class: 'reparto__personas' },
        h('span', {}, 'Personas en el grupo'),
        h('span', { class: 'reparto__contador' }, menos, numero, mas)),
      h('button', { type: 'button', class: 'boton boton--primario', onClick: repartir }, icono('azar'), 'Repartir roles'));
  }

  function pintarTurno() {
    const ver = h('button', { type: 'button', class: 'boton boton--primario', onClick: pintarRol }, icono('ojo'), 'Ver mi rol');
    escena.replaceChildren(
      h('p', { class: 'reparto__titulo' }, `Persona ${turno + 1} de ${asignados.length}`),
      h('p', { class: 'reparto__indicacion' }, 'Mira tu rol sin que nadie más lo vea. Después, ocúltalo y pasa el dispositivo.'),
      ver);
    ver.focus({ preventScroll: true });
  }

  function pintarRol() {
    const rol = asignados[turno];
    const ultimo = turno === asignados.length - 1;
    const seguir = h('button', {
      type: 'button', class: 'boton',
      onClick: () => { if (ultimo) pintarFin(); else { turno += 1; pintarTurno(); } },
    }, icono('candado'), ultimo ? 'Ocultar y terminar' : 'Ocultar y pasar');
    escena.replaceChildren(
      h('div', { class: 'reparto__rol', 'data-acento': turno % 2 ? 'secundario' : 'principal' },
        h('span', { class: 'reparto__icono' }, icono(rol.icono)),
        h('p', { class: 'reparto__nombre' }, h('span', { class: 'reparto__antetitulo' }, 'Tu rol'), rol.titulo),
        h('p', { class: 'reparto__descripcion', html: rol.html })),
      seguir);
    seguir.focus({ preventScroll: true });
  }

  function pintarFin() {
    escena.replaceChildren(
      h('p', { class: 'reparto__titulo' }, icono('check'), 'Roles repartidos'),
      h('p', { class: 'reparto__indicacion' }, 'Cada persona conoce ya su rol. Guardad el secreto durante la dinámica.'),
      h('button', { type: 'button', class: 'boton', onClick: pintarConfiguracion }, icono('reiniciar'), 'Volver a repartir'));
  }

  pintarConfiguracion();
  return h('section', { class: 'reparto', 'aria-label': 'Reparto de roles' }, escena);
}
