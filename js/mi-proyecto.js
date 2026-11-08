// Panel «Mi proyecto»: datos del alumnado, resumen de respuestas, dossier
// imprimible (PDF) y copia de seguridad en archivo.

import { INDICE } from '../contenido/indice.js';
import { CONFIG } from './config.js';
import { h, icono } from './dom.js';
import { store } from './store.js';
import { track } from './analytics.js';
import { camposDePantalla } from './componentes/index.js';
import { formatearRespuesta } from './componentes/campos.js';
import { prepararDialogo } from './player.js';

/** Pantallas con campos de respuesta, agrupadas por bloque, en orden. */
function estructuraRespuestas() {
  return INDICE.map((bloque) => ({
    bloque,
    pantallas: (bloque.pantallas ?? [])
      .map((p) => ({ pantalla: p, ruta: `${bloque.id}/${p.id}`, campos: camposDePantalla(p) }))
      .filter((p) => p.campos.length > 0),
  })).filter((b) => b.pantallas.length > 0);
}

/**
 * Reparte los trozos del dossier en hojas, cada una con su cabecera y su pie.
 *
 * El navegador no sabe repetir una cabecera en todas las páginas de forma
 * fiable (ver el comentario de `imprimir`), así que la paginación se hace aquí:
 * se mide el alto real de cada trozo renderizándolo fuera de pantalla con los
 * estilos del dossier, y se van llenando hojas hasta agotar el alto útil.
 *
 * @param trozos  [{ el, juntarConSiguiente? }] en orden; `el` es indivisible.
 * @returns array de `<section class="dossier__hoja">`.
 */
function repartirEnHojas(trozos, marca, pie, contenedor) {
  // 1. Medir, en un bloque normal fuera de la vista: sin flex ni recorte, para
  //    que cada trozo tenga su alto natural.
  const cabeceraRegla = marca();
  const pieRegla = pie();
  const sonda = h('div', { class: 'dossier__sonda' });
  const regla = h('div', { class: 'dossier dossier__regla' },
    sonda, cabeceraRegla, ...trozos.map((t) => t.el), pieRegla);
  contenedor.replaceChildren(regla);
  contenedor.classList.add('impresion--midiendo');

  const alto = (el) => {
    const s = window.getComputedStyle(el);
    return el.getBoundingClientRect().height + parseFloat(s.marginTop) + parseFloat(s.marginBottom);
  };
  const util = sonda.offsetHeight - alto(cabeceraRegla) - alto(pieRegla);
  const altos = trozos.map(({ el }) => alto(el));

  contenedor.classList.remove('impresion--midiendo');
  contenedor.replaceChildren();

  // 2. Repartir. Si un trozo no cabe ni en una hoja vacía, va solo en la suya:
  //    más vale que se corte a que se pierda.
  const hojas = [[]];
  let usado = 0;
  for (let i = 0; i < trozos.length; i++) {
    let bloque = [i];
    // un encabezado viaja con el trozo siguiente
    while (trozos[bloque[bloque.length - 1]].juntarConSiguiente && bloque[bloque.length - 1] + 1 < trozos.length) {
      bloque.push(bloque[bloque.length - 1] + 1);
    }
    const alto = bloque.reduce((n, j) => n + altos[j], 0);
    if (usado > 0 && usado + alto > util) { hojas.push([]); usado = 0; }
    hojas[hojas.length - 1].push(...bloque);
    usado += alto;
    i = bloque[bloque.length - 1];
  }

  return hojas.map((indices) => h('section', { class: 'dossier__hoja' },
    marca(),
    h('div', { class: 'dossier__cuerpo' }, ...indices.map((j) => trozos[j].el)),
    pie()));
}

const fechaLarga = (iso) =>
  new Date(iso ?? Date.now()).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

const nombreArchivo = () => {
  const nombre = store.alumno().nombre
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const fecha = new Date().toISOString().slice(0, 10);
  return `mi-proyecto-social${nombre ? `-${nombre}` : ''}-${fecha}.json`;
};

export function iniciarMiProyecto(player) {
  const dialogo = document.getElementById('dlg-proyecto');
  const cuerpo = document.getElementById('contenido-proyecto');
  const impresion = document.getElementById('impresion');
  prepararDialogo(dialogo);

  document.getElementById('btn-proyecto').addEventListener('click', () => {
    pintar();
    dialogo.showModal();
    track('recurso_mi_proyecto', { accion: 'abrir' });
  });

  function pintar(mensaje) {
    const estructura = estructuraRespuestas();
    const total = estructura.reduce((n, b) => n + b.pantallas.reduce((m, p) => m + p.campos.length, 0), 0);
    const respondidas = estructura.reduce((n, b) =>
      n + b.pantallas.reduce((m, p) => m + p.campos.filter((c) => store.respuesta(c.id).trim()).length, 0), 0);

    const alumno = store.alumno();
    const campoDato = (clave, etiqueta, placeholder) => {
      const entrada = h('input', { class: 'campo__entrada', id: `alumno-${clave}`, type: 'text', autocomplete: 'off', placeholder });
      entrada.value = alumno[clave];
      entrada.addEventListener('input', () => store.guardarAlumno({ [clave]: entrada.value }));
      return h('div', { class: 'campo' }, h('label', { class: 'campo__etiqueta', for: `alumno-${clave}` }, etiqueta), entrada);
    };

    const entradaArchivo = h('input', { type: 'file', accept: 'application/json,.json', hidden: true });
    entradaArchivo.addEventListener('change', async () => {
      const archivo = entradaArchivo.files[0];
      if (!archivo) return;
      try {
        store.importar(await archivo.text());
        track('recurso_mi_proyecto', { accion: 'importar' });
        pintar({ tipo: 'ok', texto: 'Copia cargada. Ya puedes seguir trabajando.' });
        const ultima = store.ultima();
        if (ultima) player.irA(ultima);
        else player.recargar();
      } catch (err) {
        pintar({ tipo: 'error', texto: err.message });
      }
    });

    cuerpo.replaceChildren(h('div', { class: 'proyecto' },
      h('div', { class: 'proyecto__aviso' }, icono('check'),
        h('p', {},
          'Tus respuestas se guardan ', h('strong', {}, 'solo en este navegador'),
          ' y nadie más puede verlas. Para entregarlas, guarda el dossier en PDF y envíalo a tu profesorado. ',
          'Si vas a cambiar de ordenador, descarga una copia y cárgala en el otro.')),
      mensaje && h('p', {
        class: mensaje.tipo === 'error' ? 'campo__estado campo__estado--error' : 'campo__estado',
        role: mensaje.tipo === 'error' ? 'alert' : 'status',
      }, mensaje.texto),
      h('div', { class: 'proyecto__datos' },
        campoDato('nombre', 'Nombre y apellidos', 'Opcional, aparece en el dossier'),
        campoDato('grupo', 'Grupo o centro', 'Opcional')),
      h('div', { class: 'proyecto__acciones' },
        h('button', { type: 'button', class: 'boton boton--primario', onClick: imprimir }, icono('imprimir'), 'Guardar en PDF / imprimir'),
        h('button', { type: 'button', class: 'boton', onClick: exportar }, icono('descargar'), 'Descargar copia'),
        h('button', { type: 'button', class: 'boton', onClick: () => entradaArchivo.click() }, icono('subir'), 'Cargar copia'),
        h('button', { type: 'button', class: 'boton boton--peligro', onClick: borrar }, icono('papelera'), 'Borrar mis respuestas'),
        entradaArchivo),
      h('h3', { class: 'proyecto__resumen-titulo' }, 'Tus respuestas'),
      h('p', { class: 'proyecto__recuento' }, `Has respondido ${respondidas} de ${total} preguntas.`),
      estructura.length === 0
        ? h('p', { class: 'proyecto__vacio' }, 'Todavía no hay ejercicios con respuesta en el recurso.')
        : estructura.flatMap(({ bloque, pantallas }) => pantallas.map(({ pantalla, ruta, campos }) =>
          h('section', { class: 'proyecto__pantalla', 'data-acento': pantalla.acento ?? bloque.acento },
            h('div', { class: 'proyecto__pantalla-cabecera' },
              h('h4', {}, pantalla.titulo),
              h('a', { href: `#/${ruta}`, onClick: () => dialogo.close() }, 'Ir a la pantalla')),
            campos.map((c) => {
              const valor = formatearRespuesta(c, store.respuesta(c.id));
              return h('div', { class: 'proyecto__campo' },
                c.etiqueta !== pantalla.titulo && h('p', { class: 'proyecto__pregunta' }, c.etiqueta),
                h('p', { class: `proyecto__respuesta${valor ? '' : ' proyecto__respuesta--vacia'}` }, valor || 'Sin responder'));
            })))),
    ));
  }

  function exportar() {
    const blob = new Blob([store.exportar()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = h('a', { href: url, download: nombreArchivo() });
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    track('recurso_mi_proyecto', { accion: 'exportar' });
  }

  function borrar() {
    const ok = window.confirm('¿Seguro que quieres borrar todas tus respuestas de este navegador? Esta acción no se puede deshacer. Si quieres conservarlas, descarga antes una copia.');
    if (!ok) return;
    store.borrar();
    track('recurso_mi_proyecto', { accion: 'borrar' });
    dialogo.close();
    player.irA('inicio/portada');
  }

  function imprimir() {
    const alumno = store.alumno();
    const logos = document.querySelector('.marca');
    const estructura = estructuraRespuestas();
    const total = estructura.reduce((n, b) => n + b.pantallas.reduce((m, p) => m + p.campos.length, 0), 0);
    const respondidas = estructura.reduce((n, b) =>
      n + b.pantallas.reduce((m, p) => m + p.campos.filter((c) => store.respuesta(c.id).trim()).length, 0), 0);

    // El dossier se pagina a mano: se mide cada trozo y se reparte en «hojas»,
    // cada una con su propia copia de la cabecera de logos. Es la única forma de
    // que los logos salgan en TODAS las páginas en cualquier navegador. Ya se
    // probaron y fallaron las dos alternativas que dependen del motor:
    //   · `position: fixed` -> cae en el margen de página y Chrome lo recorta;
    //   · tabla con `<thead>` -> Safari (WebKit) no lo repite al paginar.
    const marca = () => h('div', { class: 'dossier__marca' },
      ...[...logos.querySelectorAll('.patrocinio')].map((n) => n.cloneNode(true)));
    const pie = () => h('p', { class: 'dossier__pie' }, CONFIG.dossier.pie);

    // Trozos indivisibles, en orden. `juntarConSiguiente` evita que un encabezado
    // se quede solo al final de una hoja.
    const trozos = [
      { el: h('div', { class: 'dossier__portada' },
        h('h1', { class: 'dossier__titulo' }, CONFIG.dossier.titulo),
        h('p', { class: 'dossier__subtitulo' }, CONFIG.titulo),
        h('dl', { class: 'dossier__datos' },
          h('dt', {}, 'Nombre'), h('dd', {}, alumno.nombre || '—'),
          h('dt', {}, 'Grupo o centro'), h('dd', {}, alumno.grupo || '—'),
          h('dt', {}, 'Fecha'), h('dd', {}, fechaLarga()),
          h('dt', {}, 'Respondidas'), h('dd', {}, `${respondidas} de ${total} preguntas`))) },

      ...estructura.flatMap(({ bloque, pantallas }) => [
        { el: h('h2', { class: 'dossier__bloque' }, bloque.titulo), juntarConSiguiente: true },
        ...pantallas.flatMap(({ pantalla, campos }) => [
          { el: h('h3', { class: 'dossier__pantalla' }, pantalla.titulo), juntarConSiguiente: true },
          ...campos.map((c) => {
            const valor = formatearRespuesta(c, store.respuesta(c.id));
            return { el: h('div', { class: 'dossier__campo' },
              c.etiqueta !== pantalla.titulo && h('p', { class: 'dossier__pregunta' }, c.etiqueta),
              h('p', { class: `dossier__respuesta${valor ? '' : ' dossier__respuesta--vacia'}` },
                valor || 'Sin responder')) };
          }),
        ]),
      ]),
    ];

    impresion.replaceChildren(...repartirEnHojas(trozos, marca, pie, impresion));

    dialogo.close();
    document.body.classList.add('imprimiendo-dossier');
    const limpiar = () => {
      document.body.classList.remove('imprimiendo-dossier');
      window.removeEventListener('afterprint', limpiar);
    };
    window.addEventListener('afterprint', limpiar);
    track('recurso_mi_proyecto', { accion: 'imprimir' });
    window.print();
  }
}
