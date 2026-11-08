// Campos de respuesta que se autoguardan en el navegador.
// Cada campo necesita un id estable y único en todo el recurso: es la clave
// con la que se guarda la respuesta y aparece en el dossier.

import { h, icono, idUnico } from '../dom.js';
import { store } from '../store.js';
import { track } from '../analytics.js';

const ESPERA_GUARDADO = 600;

/** Área de texto con autoguardado y su línea de estado. */
function areaGuardada(def, ctx, idControl, props = {}) {
  const area = h('textarea', {
    id: idControl,
    class: 'campo__area',
    rows: def.filas ?? 4,
    placeholder: def.placeholder ?? 'Escribe aquí tu respuesta…',
    spellcheck: 'true',
    ...props,
  });
  area.value = store.respuesta(def.id);

  const estado = h('p', { class: 'campo__estado' });
  let pendiente = null;

  function pintarEstado(ok) {
    estado.classList.toggle('campo__estado--error', !ok);
    estado.replaceChildren(
      ...(ok
        ? [icono('check'), 'Guardado en este navegador']
        : ['No se ha podido guardar. Descarga una copia desde «Mi proyecto».']),
    );
    if (ok) estado.removeAttribute('role');
    else estado.setAttribute('role', 'alert');
  }

  function guardar() {
    if (pendiente === null) return;
    clearTimeout(pendiente);
    pendiente = null;
    const ok = store.guardarRespuesta(def.id, area.value);
    pintarEstado(ok);
    if (ok && area.value.trim()) {
      track('recurso_respuesta', { campo: def.id, pantalla: ctx.ruta }, { unaVez: true });
    }
  }

  area.addEventListener('input', () => {
    estado.classList.remove('campo__estado--error');
    estado.textContent = 'Guardando…';
    clearTimeout(pendiente);
    pendiente = setTimeout(guardar, ESPERA_GUARDADO);
  });
  area.addEventListener('blur', guardar);
  window.addEventListener('pagehide', guardar);
  ctx.alDesmontar(() => {
    guardar();
    window.removeEventListener('pagehide', guardar);
  });

  return [area, estado];
}

export function textoLibre(def, ctx) {
  const idControl = idUnico(`campo-${def.id}`);
  const idAyuda = def.ayuda ? `${idControl}-ayuda` : null;
  return h('div', { class: 'campo', 'data-acento': def.acento ?? null },
    h('label', { class: 'campo__etiqueta', for: idControl },
      def.icono && h('span', { class: 'campo__marca' }, icono(def.icono)), def.etiqueta),
    def.ayuda && h('p', { class: 'campo__ayuda', id: idAyuda }, def.ayuda),
    areaGuardada(def, ctx, idControl, { 'aria-describedby': idAyuda }));
}

// Tabla para rellenar. Si las filas tienen «texto», la primera columna es su
// rótulo; si no, todas las columnas son de respuesta. Cada celda se guarda
// aparte: con una sola columna de respuesta, con el id de la fila; con varias,
// con «<id de la fila>-<sufijo de la columna>».
// { tipo: 'tabla', columnas: [ 'texto' | { texto, acento } ], sufijos?: [...],
//   filas: [ { id, texto? } ], placeholder? }
const textoColumna = (c) => (typeof c === 'string' ? c : c.texto);

function celdasDeTabla(def) {
  const conRotulo = def.filas.some((f) => f.texto);
  const respuestas = conRotulo ? def.columnas.slice(1) : def.columnas;
  return def.filas.map((fila, i) => ({
    fila,
    rotulo: fila.texto ?? `${i + 1}`,
    celdas: respuestas.map((col, k) => ({
      id: respuestas.length === 1 ? fila.id : `${fila.id}-${def.sufijos[k]}`,
      columna: textoColumna(col),
    })),
  }));
}

export function tabla(def, ctx) {
  const conRotulo = def.filas.some((f) => f.texto);
  const filas = celdasDeTabla(def);
  const unaRespuesta = filas[0].celdas.length === 1;
  return h('div', { class: `tabla-campos${unaRespuesta ? '' : ' tabla-campos--varias'}` },
    h('table', {},
      h('thead', {}, h('tr', {}, def.columnas.map((c) =>
        h('th', { scope: 'col', 'data-acento': c.acento ?? null }, textoColumna(c))))),
      h('tbody', {}, filas.map(({ rotulo, celdas }) => {
        const ids = celdas.map((c) => idUnico(`campo-${c.id}`));
        return h('tr', {},
          conRotulo && h('th', { scope: 'row' },
            unaRespuesta ? h('label', { for: ids[0] }, rotulo) : rotulo),
          celdas.map((c, k) => h('td', {},
            !unaRespuesta && h('span', { class: 'tabla-campos__columna', 'aria-hidden': 'true' }, c.columna),
            areaGuardada({ id: c.id, filas: 2, placeholder: def.placeholder }, ctx, ids[k],
              unaRespuesta && conRotulo ? {} : { 'aria-label': conRotulo ? `${rotulo}: ${c.columna}` : `${c.columna} (fila ${rotulo})` }))));
      }))));
}

/** Celdas de una tabla como campos sueltos, para el resumen y el dossier. */
export const camposDeTabla = (def) =>
  celdasDeTabla(def).flatMap(({ fila, rotulo, celdas }) => celdas.map((c) => ({
    tipo: 'texto-libre',
    id: c.id,
    etiqueta: celdas.length === 1 && fila.texto ? fila.texto : fila.texto ? `${rotulo}: ${c.columna}` : `${c.columna} (${rotulo})`,
  })));

/** Guarda en el acto (clic, cambio de opción) y pinta el estado. */
function guardarYa(id, valor, estado, ctx) {
  const ok = store.guardarRespuesta(id, valor);
  estado.classList.toggle('campo__estado--error', !ok);
  estado.replaceChildren(...(ok
    ? [icono('check'), 'Guardado en este navegador']
    : ['No se ha podido guardar. Descarga una copia desde «Mi proyecto».']));
  if (ok) track('recurso_respuesta', { campo: id, pantalla: ctx.ruta }, { unaVez: true });
}

const leerJSON = (id, porDefecto) => {
  try { return JSON.parse(store.respuesta(id)) ?? porDefecto; } catch { return porDefecto; }
};

// Elegir una opción. Una opción con «otra: true» lleva un campo de texto.
// Se guarda como JSON: { opcion: 'C', otra?: '…' }.
// { tipo: 'opciones', id, etiqueta, opciones: [ { letra, texto, otra? } ] }
export function opciones(def, ctx) {
  const guardado = leerJSON(def.id, {});
  const nombre = idUnico(`opciones-${def.id}`);
  const estado = h('p', { class: 'campo__estado' });
  let otraEntrada = null;

  const guardar = () => {
    const marcada = def.opciones.find((o) => radios.get(o.letra).checked);
    if (!marcada) return;
    const valor = { opcion: marcada.letra };
    if (marcada.otra) valor.otra = otraEntrada.value;
    guardarYa(def.id, JSON.stringify(valor), estado, ctx);
  };

  const radios = new Map();
  const lista = def.opciones.map((o) => {
    const radio = h('input', { type: 'radio', name: nombre, value: o.letra, class: 'opcion__radio', onChange: guardar });
    radio.checked = guardado.opcion === o.letra;
    radios.set(o.letra, radio);
    let extra = null;
    if (o.otra) {
      otraEntrada = h('input', {
        type: 'text', class: 'campo__entrada opcion__otra', 'aria-label': o.texto, placeholder: 'Escribe tu opción…',
        onFocus: () => { if (!radio.checked) { radio.checked = true; guardar(); } },
        onInput: guardar,
      });
      otraEntrada.value = guardado.otra ?? '';
      extra = otraEntrada;
    }
    return h('div', { class: 'opcion' },
      h('label', { class: 'opcion__etiqueta' },
        radio,
        h('span', { class: 'opcion__letra', 'aria-hidden': 'true' }, o.letra),
        h('span', { class: 'opcion__texto' }, h('span', { class: 'visualmente-oculto' }, `${o.letra}. `), o.texto)),
      extra);
  });

  return h('fieldset', { class: 'campo opciones' },
    h('legend', { class: 'campo__etiqueta' }, def.etiqueta),
    h('div', { class: 'opciones__lista' }, lista),
    estado);
}

// Ordenar elementos con botones de subir y bajar. Se guarda el orden de letras.
// { tipo: 'ordenar', id, etiqueta, items: [ { letra, texto } ] }
export function ordenar(def, ctx) {
  const porLetra = new Map(def.items.map((it) => [it.letra, it]));
  const guardado = leerJSON(def.id, []);
  let orden = guardado.length === def.items.length && guardado.every((l) => porLetra.has(l))
    ? guardado : def.items.map((it) => it.letra);
  const idEtiqueta = idUnico('ordenar');
  const lista = h('ol', { class: 'ordenar__lista', 'aria-labelledby': idEtiqueta });
  const estado = h('p', { class: 'campo__estado' });
  const aviso = h('p', { class: 'visualmente-oculto', role: 'status' });

  function mover(i, paso, enfocar) {
    const j = i + paso;
    if (j < 0 || j >= orden.length) return;
    orden = [...orden];
    [orden[i], orden[j]] = [orden[j], orden[i]];
    pintar();
    guardarYa(def.id, JSON.stringify(orden), estado, ctx);
    aviso.textContent = `${orden[j]} pasa al puesto ${j + 1}`;
    lista.children[j].querySelector(`[data-accion="${enfocar}"]`)?.focus()
      ?? lista.children[j].querySelector('button:not(:disabled)')?.focus();
  }

  function pintar() {
    lista.replaceChildren(...orden.map((letra, i) => {
      const it = porLetra.get(letra);
      return h('li', { class: 'ordenar__item' },
        h('span', { class: 'ordenar__puesto', 'aria-hidden': 'true' }, String(i + 1)),
        h('span', { class: 'ordenar__texto' }, h('strong', {}, `${letra}. `), it.texto),
        h('span', { class: 'ordenar__botones' },
          h('button', { type: 'button', class: 'boton-icono', 'data-accion': 'subir', disabled: i === 0,
            'aria-label': `Subir ${letra}`, onClick: () => mover(i, -1, 'subir') }, icono('flecha-arriba')),
          h('button', { type: 'button', class: 'boton-icono', 'data-accion': 'bajar', disabled: i === orden.length - 1,
            'aria-label': `Bajar ${letra}`, onClick: () => mover(i, 1, 'bajar') }, icono('desplegar'))));
    }));
  }
  pintar();

  return h('div', { class: 'campo ordenar' },
    h('p', { class: 'campo__etiqueta', id: idEtiqueta }, def.etiqueta),
    lista, estado, aviso);
}

// Elegir varias opciones. Se guarda el array de letras marcadas.
// { tipo: 'opciones-multiples', id, etiqueta, opciones: [ { letra, texto } ] }
export function opcionesMultiples(def, ctx) {
  const marcadas = new Set(leerJSON(def.id, []));
  const estado = h('p', { class: 'campo__estado' });
  const lista = def.opciones.map((o) => {
    const casilla = h('input', { type: 'checkbox', value: o.letra, class: 'opcion__radio' });
    casilla.checked = marcadas.has(o.letra);
    casilla.addEventListener('change', () => {
      if (casilla.checked) marcadas.add(o.letra);
      else marcadas.delete(o.letra);
      const valor = def.opciones.map((x) => x.letra).filter((l) => marcadas.has(l));
      guardarYa(def.id, valor.length ? JSON.stringify(valor) : '', estado, ctx);
    });
    return h('div', { class: 'opcion opcion--multiple' },
      h('label', { class: 'opcion__etiqueta' },
        casilla,
        h('span', { class: 'opcion__letra', 'aria-hidden': 'true' }, o.letra),
        h('span', { class: 'opcion__texto' }, h('span', { class: 'visualmente-oculto' }, `${o.letra}. `), o.texto),
        h('span', { class: 'opcion__check', 'aria-hidden': 'true' }, icono('check'))));
  });
  return h('fieldset', { class: 'campo opciones' },
    h('legend', { class: 'campo__etiqueta' }, def.etiqueta),
    h('div', { class: 'opciones__lista' }, lista),
    estado);
}

// Elegir elementos en orden de prioridad tocándolos; al desmarcar uno, el resto
// se renumera. Se guarda el array de índices en el orden elegido.
// { tipo: 'priorizar', id, etiqueta, items: [ 'texto' ] }
export function priorizar(def, ctx) {
  let orden = leerJSON(def.id, []).filter((i) => Number.isInteger(i) && def.items[i] != null);
  const idEtiqueta = idUnico('priorizar');
  const estado = h('p', { class: 'campo__estado' });
  const aviso = h('p', { class: 'visualmente-oculto', role: 'status' });
  const resumen = h('ol', { class: 'priorizar__orden' });
  const contador = h('span', { class: 'priorizar__contador' });
  const reiniciar = h('button', { type: 'button', class: 'boton boton--pequeno', onClick: () => {
    orden = [];
    pintar();
    guardarYa(def.id, '', estado, ctx);
    aviso.textContent = 'Orden borrado';
  } }, icono('reiniciar'), 'Empezar de nuevo');

  const fichas = def.items.map((texto, i) => h('button', {
    type: 'button', class: 'priorizar__ficha',
    onClick: () => {
      const puesto = orden.indexOf(i);
      orden = puesto === -1 ? [...orden, i] : orden.filter((x) => x !== i);
      pintar();
      guardarYa(def.id, orden.length ? JSON.stringify(orden) : '', estado, ctx);
      aviso.textContent = puesto === -1 ? `${texto}: puesto ${orden.length}` : `${texto}: quitado`;
    },
  }, h('span', { class: 'priorizar__puesto', 'aria-hidden': 'true' }), texto));

  function pintar() {
    fichas.forEach((f, i) => {
      const puesto = orden.indexOf(i) + 1;
      f.setAttribute('aria-pressed', String(puesto > 0));
      f.firstChild.textContent = puesto || '';
      f.setAttribute('aria-label', puesto ? `${def.items[i]}, puesto ${puesto}` : def.items[i]);
    });
    contador.textContent = orden.length ? `${orden.length} de ${def.items.length}` : '';
    resumen.replaceChildren(...orden.map((i) => h('li', {}, def.items[i])));
    resumen.hidden = !orden.length;
    reiniciar.disabled = !orden.length;
  }
  pintar();

  return h('div', { class: 'campo priorizar' },
    h('p', { class: 'campo__etiqueta', id: idEtiqueta }, def.etiqueta),
    h('div', { class: 'priorizar__fichas', role: 'group', 'aria-labelledby': idEtiqueta }, fichas),
    h('div', { class: 'priorizar__pie' }, contador, reiniciar),
    resumen, estado, aviso);
}

// Plantilla con filas que se añaden y se quitan (p. ej. un registro de
// incidencias). Se guarda el array de filas: [ { <id de columna>: valor } ].
// { tipo: 'registro', id, etiqueta, columnas: [ { id, texto, tipo?: 'fecha', opciones?: [...] } ] }
export function registro(def, ctx) {
  const leidas = leerJSON(def.id, []);
  let filas = Array.isArray(leidas) && leidas.length ? leidas : [{}];
  const estado = h('p', { class: 'campo__estado' });
  const lista = h('ol', { class: 'registro__filas' });
  let pendiente = null;

  const hayDatos = (f) => def.columnas.some((c) => (f[c.id] ?? '').trim());
  function guardar() {
    clearTimeout(pendiente);
    pendiente = null;
    const conDatos = filas.filter(hayDatos);
    guardarYa(def.id, conDatos.length ? JSON.stringify(conDatos) : '', estado, ctx);
  }
  const guardarLuego = () => {
    estado.textContent = 'Guardando…';
    clearTimeout(pendiente);
    pendiente = setTimeout(guardar, ESPERA_GUARDADO);
  };
  ctx.alDesmontar(() => { if (pendiente !== null) guardar(); });

  function control(col, fila, n) {
    const id = idUnico(`registro-${def.id}-${col.id}`);
    const comun = { id, onInput: (e) => { fila[col.id] = e.target.value; guardarLuego(); } };
    let el;
    if (col.opciones) {
      el = h('select', { ...comun, class: 'campo__entrada', onChange: comun.onInput },
        h('option', { value: '' }, 'Elige…'),
        col.opciones.map((o) => h('option', { value: o }, o)));
    } else if (col.tipo === 'fecha') {
      el = h('input', { ...comun, type: 'date', class: 'campo__entrada' });
    } else {
      el = h('textarea', { ...comun, class: 'campo__area', rows: 2, placeholder: 'Escribe aquí…' });
    }
    el.value = fila[col.id] ?? '';
    return h('div', { class: `registro__celda registro__celda--${col.tipo ?? (col.opciones ? 'opciones' : 'texto')}` },
      h('label', { for: id, class: 'registro__rotulo' }, col.texto, h('span', { class: 'visualmente-oculto' }, ` (registro ${n})`)),
      el);
  }

  function pintar(enfocar) {
    lista.replaceChildren(...filas.map((fila, i) => h('li', { class: 'registro__fila' },
      h('span', { class: 'registro__numero', 'aria-hidden': 'true' }, String(i + 1)),
      h('div', { class: 'registro__celdas' }, def.columnas.map((c) => control(c, fila, i + 1))),
      h('button', {
        type: 'button', class: 'boton-icono registro__quitar', 'aria-label': `Quitar el registro ${i + 1}`,
        disabled: filas.length === 1 && !hayDatos(fila),
        onClick: () => {
          filas = filas.filter((f) => f !== fila);
          if (!filas.length) filas = [{}];
          pintar();
          guardar();
        },
      }, icono('papelera')))));
    if (enfocar) lista.lastElementChild.querySelector('input, select, textarea').focus();
  }
  pintar();

  return h('div', { class: 'campo registro' },
    h('p', { class: 'campo__etiqueta' }, def.etiqueta),
    lista,
    h('div', { class: 'registro__pie' },
      h('button', { type: 'button', class: 'boton boton--pequeno', onClick: () => { filas = [...filas, {}]; pintar(true); } },
        icono('mas'), 'Añadir registro'),
      estado));
}

// Clasificar frases en categorías, con respuesta inmediata. Se puede reintentar.
// Se guarda como JSON { índice: id de categoría }.
// { tipo: 'clasificar', id, etiqueta, categorias: [ { id, texto } ],
//   items: [ { texto, correcta: id de categoría, explicacion } ] }
export function clasificar(def, ctx) {
  const elegidas = leerJSON(def.id, {});
  const estado = h('p', { class: 'campo__estado' });
  const marcador = h('p', { class: 'clasificar__marcador', 'aria-live': 'polite' });
  const idEtiqueta = idUnico('clasificar');

  const pintarMarcador = () => {
    const aciertos = def.items.filter((it, i) => elegidas[i] === it.correcta).length;
    marcador.replaceChildren(icono('check'), `${aciertos} de ${def.items.length} correctas`);
    marcador.classList.toggle('clasificar__marcador--completo', aciertos === def.items.length);
  };

  const filas = def.items.map((it, i) => {
    const respuesta = h('p', { class: 'clasificar__respuesta', 'aria-live': 'polite' });
    const botones = def.categorias.map((cat) => h('button', {
      type: 'button', class: 'clasificar__opcion', 'aria-pressed': 'false',
      onClick: () => {
        elegidas[i] = cat.id;
        guardarYa(def.id, JSON.stringify(elegidas), estado, ctx);
        pintar();
        pintarMarcador();
      },
    }, cat.texto));

    function pintar() {
      const elegida = elegidas[i];
      const acierto = elegida === it.correcta;
      botones.forEach((b, j) => {
        const pulsado = def.categorias[j].id === elegida;
        b.setAttribute('aria-pressed', String(pulsado));
        b.dataset.resultado = pulsado ? (acierto ? 'bien' : 'mal') : '';
      });
      fila.dataset.resultado = elegida ? (acierto ? 'bien' : 'mal') : '';
      respuesta.replaceChildren(...(!elegida ? []
        : acierto ? [h('strong', {}, '¡Correcto! '), it.explicacion ?? '']
          : [h('strong', {}, 'No es esa. '), 'Piénsalo otra vez y prueba con otra opción.']));
    }

    const fila = h('li', { class: 'clasificar__item' },
      h('p', { class: 'clasificar__texto' }, it.texto),
      h('div', { class: 'clasificar__opciones', role: 'group', 'aria-label': `Clasifica: ${it.texto}` }, botones),
      respuesta);
    pintar();
    return fila;
  });
  pintarMarcador();

  return h('div', { class: 'campo clasificar' },
    h('div', { class: 'clasificar__cabecera' },
      h('p', { class: 'campo__etiqueta', id: idEtiqueta }, def.etiqueta), marcador),
    h('ol', { class: 'clasificar__lista', 'aria-labelledby': idEtiqueta }, filas),
    estado);
}

const fechaLegible = (v) => (/^\d{4}-\d{2}-\d{2}$/.test(v) ? v.split('-').reverse().join('/') : v);

export const CAMPOS = {
  'texto-libre': textoLibre, tabla, opciones, ordenar,
  'opciones-multiples': opcionesMultiples, priorizar, registro, clasificar,
};

/** Texto legible de una respuesta guardada, para el resumen y el dossier. */
export function formatearRespuesta(campo, valor) {
  if (!valor) return '';
  try {
    if (campo.tipo === 'palabras') return [...new Set(JSON.parse(valor))].join(', ');
    if (campo.tipo === 'checklist') {
      const marcados = new Set(JSON.parse(valor));
      return campo.items.map((t, i) => `${marcados.has(i) ? '✓' : '○'} ${t}`).join('\n');
    }
    if (campo.tipo === 'opciones') {
      const { opcion, otra } = JSON.parse(valor);
      const o = campo.opciones.find((x) => x.letra === opcion);
      return o ? `${o.letra}. ${o.texto}${o.otra && otra ? ` ${otra}` : ''}` : '';
    }
    if (campo.tipo === 'opciones-multiples') {
      const marcadas = JSON.parse(valor);
      return campo.opciones.filter((o) => marcadas.includes(o.letra)).map((o) => `${o.letra}. ${o.texto}`).join('\n');
    }
    if (campo.tipo === 'priorizar') {
      return JSON.parse(valor).map((i, n) => `${n + 1}. ${campo.items[i] ?? ''}`).join('\n');
    }
    if (campo.tipo === 'registro') {
      return JSON.parse(valor).map((fila, n) => [
        `${n + 1}.`,
        ...campo.columnas.filter((c) => (fila[c.id] ?? '').trim())
          .map((c) => `${c.texto}: ${c.tipo === 'fecha' ? fechaLegible(fila[c.id]) : fila[c.id]}`),
      ].join('\n')).join('\n\n');
    }
    if (campo.tipo === 'clasificar') {
      const elegidas = JSON.parse(valor);
      const nombre = (id) => campo.categorias.find((c) => c.id === id)?.texto ?? '';
      return campo.items.map((it, i) => (elegidas[i] == null ? `○ ${it.texto}`
        : `${elegidas[i] === it.correcta ? '✓' : '✗'} ${it.texto} → ${nombre(elegidas[i])}`)).join('\n');
    }
    if (campo.tipo === 'ordenar') {
      return JSON.parse(valor).map((letra, i) =>
        `${i + 1}. ${letra}. ${campo.items.find((it) => it.letra === letra)?.texto ?? ''}`).join('\n');
    }
  } catch {
    return '';
  }
  return valor;
}

export function renderCampo(def, ctx) {
  const fn = CAMPOS[def.tipo];
  if (!fn) return h('p', { class: 'aviso-dev' }, `Tipo de campo desconocido: ${def.tipo}`);
  return fn(def, ctx);
}
