// Registro de componentes: tipos de bloque dentro de una pantalla y
// plantillas de pantalla completa. Para añadir un componente nuevo, se
// importa aquí y se registra con el nombre que se usará en /contenido.

import { h } from '../dom.js';
import { texto, subtitulo, subsubtitulo, entradilla } from './texto.js';
import { ejemplo } from './ejemplo.js';
import { ejercicio } from './ejercicio.js';
import { destacado, aviso } from './destacado.js';
import { tarjetas } from './tarjetas.js';
import { fases } from './fases.js';
import { enfoques } from './enfoques.js';
import { revelar } from './revelar.js';
import { desplegables } from './desplegables.js';
import { columnas } from './columnas.js';
import { imagen } from './imagen.js';
import { galeria } from './galeria.js';
import { insignias } from './insignias.js';
import { dinamica, acciones } from './dinamica.js';
import { volteables } from './volteables.js';
import { rueda } from './rueda.js';
import { nube, misPalabras } from './nube.js';
import { checklist } from './checklist.js';
import { portada } from './portada.js';
import { contenido } from './contenido.js';
import { capas } from './capas.js';
import { misRespuestas } from './mis-respuestas.js';
import { camposDeTabla, renderCampo } from './campos.js';
import { niveles } from './niveles.js';
import { tablaDatos } from './tabla-datos.js';
import { enlace } from './enlace.js';
import { reparto } from './reparto.js';
import { carteles } from './carteles.js';
import { resumenFases, fichaProyecto, irA } from './resumen-fases.js';

const BLOQUES = {
  texto, subtitulo, subsubtitulo, entradilla, ejemplo, ejercicio,
  destacado, aviso, tarjetas, fases, enfoques,
  revelar, desplegables, columnas, imagen, galeria, insignias,
  dinamica, acciones, volteables, rueda, nube, 'mis-palabras': misPalabras, checklist,
  capas, 'mis-respuestas': misRespuestas, niveles, 'tabla-datos': tablaDatos, enlace,
  reparto, carteles, 'resumen-fases': resumenFases, 'ficha-proyecto': fichaProyecto, 'ir-a': irA,
  // Campos intercalados entre otros bloques de un ejercicio.
  campos: (def, ctx) => h('div', { class: 'ejercicio__campos' }, def.campos.map((c) => renderCampo(c, ctx))),
};

export const PLANTILLAS = { portada, contenido };

export function renderBloque(def, ctx) {
  const fn = BLOQUES[def.tipo];
  if (!fn) {
    console.warn('Bloque desconocido', def);
    return h('p', { class: 'aviso-dev' }, `Bloque desconocido: ${def.tipo}`);
  }
  return fn(def, ctx);
}

// Bloques que guardan respuestas sin declarar «campos».
const CAMPOS_PROPIOS = {
  nube: (def) => def.grupos.map((g) => ({ tipo: 'palabras', id: g.id, etiqueta: g.etiqueta })),
  // repaso: el mismo checklist mostrado otra vez; ya cuenta donde aparece primero.
  checklist: (def) => (def.repaso ? [] : [{ tipo: 'checklist', id: def.id, etiqueta: def.etiqueta, items: def.items }]),
};

function recoger(nodo, ejercicioActual, salida) {
  if (Array.isArray(nodo)) {
    nodo.forEach((n) => recoger(n, ejercicioActual, salida));
    return;
  }
  if (!nodo || typeof nodo !== 'object') return;
  const titulo = nodo.tipo === 'ejercicio' ? (nodo.titulo ?? ejercicioActual) : ejercicioActual;
  CAMPOS_PROPIOS[nodo.tipo]?.(nodo).forEach((c) => salida.push({ ...c, ejercicio: titulo }));
  for (const [clave, valor] of Object.entries(nodo)) {
    if (clave === 'campos') {
      valor.flatMap((c) => (c.tipo === 'tabla' ? camposDeTabla(c) : [c]))
        .forEach((c) => salida.push({ ...c, ejercicio: titulo }));
    }
    else if (valor && typeof valor === 'object') recoger(valor, titulo, salida);
  }
}

/**
 * Lista de campos de respuesta de una pantalla, en orden, incluidos los que
 * están dentro de desplegables, pasos o contenido revelable. La usa el dossier.
 */
export function camposDePantalla(pantalla) {
  const campos = [];
  recoger(pantalla.bloques ?? [], null, campos);
  return campos;
}
