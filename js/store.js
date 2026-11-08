// Almacenamiento local de respuestas y progreso (solo en este navegador).

import { CONFIG } from './config.js';

const CLAVE = CONFIG.claveAlmacen ?? `${CONFIG.idRecurso}:v1`;
const VERSION = 1;

const vacio = () => ({
  version: VERSION,
  alumno: { nombre: '', grupo: '' },
  respuestas: {},
  visitadas: [],
  ultima: null,
  actualizado: null,
});

let estado = cargar();
let disponible = true;
const oyentes = new Set();

function cargar() {
  try {
    const bruto = localStorage.getItem(CLAVE);
    if (bruto) return normalizar(JSON.parse(bruto));
  } catch {
    // localStorage bloqueado o datos corruptos: se empieza de cero.
  }
  return vacio();
}

/** Valida y completa un objeto de estado (de localStorage o de un fichero importado). */
function normalizar(datos) {
  if (!datos || typeof datos !== 'object' || Array.isArray(datos)) {
    throw new Error('El archivo no tiene el formato esperado.');
  }
  const base = vacio();
  const respuestas = {};
  if (datos.respuestas && typeof datos.respuestas === 'object') {
    for (const [id, valor] of Object.entries(datos.respuestas)) {
      if (typeof valor === 'string') respuestas[id] = valor;
    }
  }
  return {
    ...base,
    alumno: {
      nombre: typeof datos.alumno?.nombre === 'string' ? datos.alumno.nombre : '',
      grupo: typeof datos.alumno?.grupo === 'string' ? datos.alumno.grupo : '',
    },
    respuestas,
    visitadas: Array.isArray(datos.visitadas) ? datos.visitadas.filter((v) => typeof v === 'string') : [],
    ultima: typeof datos.ultima === 'string' ? datos.ultima : null,
    actualizado: typeof datos.actualizado === 'string' ? datos.actualizado : null,
  };
}

function persistir() {
  estado.actualizado = new Date().toISOString();
  try {
    localStorage.setItem(CLAVE, JSON.stringify(estado));
    disponible = true;
  } catch {
    disponible = false;
  }
  oyentes.forEach((fn) => fn(estado));
  return disponible;
}

export const store = {
  /** false si el navegador no permite guardar (modo privado estricto, cuota llena…). */
  get disponible() { return disponible; },

  respuesta: (id) => estado.respuestas[id] ?? '',
  guardarRespuesta(id, valor) {
    if (valor.trim() === '') delete estado.respuestas[id];
    else estado.respuestas[id] = valor;
    return persistir();
  },
  numRespuestas: () => Object.keys(estado.respuestas).length,

  alumno: () => ({ ...estado.alumno }),
  guardarAlumno(datos) {
    estado.alumno = { ...estado.alumno, ...datos };
    return persistir();
  },

  visitada: (ruta) => estado.visitadas.includes(ruta),
  marcarVisitada(ruta) {
    const nueva = !estado.visitadas.includes(ruta);
    if (nueva) estado.visitadas.push(ruta);
    if (nueva || estado.ultima !== ruta) {
      estado.ultima = ruta;
      persistir();
    }
  },
  ultima: () => estado.ultima,
  actualizado: () => estado.actualizado,

  exportar() {
    return JSON.stringify({ app: CLAVE, exportado: new Date().toISOString(), ...estado }, null, 2);
  },
  importar(texto) {
    let datos;
    try {
      datos = JSON.parse(texto);
    } catch {
      throw new Error('El archivo no es una copia válida de «Mi proyecto».');
    }
    if (datos?.app && datos.app !== CLAVE) {
      throw new Error('Este archivo pertenece a otro recurso.');
    }
    estado = normalizar(datos);
    return persistir();
  },
  borrar() {
    estado = vacio();
    try { localStorage.removeItem(CLAVE); } catch { /* sin almacenamiento */ }
    oyentes.forEach((fn) => fn(estado));
  },

  suscribir(fn) {
    oyentes.add(fn);
    return () => oyentes.delete(fn);
  },
};
