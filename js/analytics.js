// Analítica anónima (GA4). Nunca se envía el texto de las respuestas.
//
// Solo se activa si CONFIG.gaId tiene valor (montar.py lo deja a null fuera del
// dominio de publicación). Si la web que aloja el recurso tiene gestor de
// consentimiento, CONFIG.consentimiento indica sus scripts: se cargan antes que
// gtag y la analítica queda denegada hasta que la persona acepta. Sin gestor de
// consentimiento declarado, NO se carga la analítica.

import { CONFIG } from './config.js';

const enviadosUnaVez = new Set();
const cola = [];
let listo = false;

const cargarScript = (src) => new Promise((resolver, rechazar) => {
  const s = document.createElement('script');
  s.src = src;
  s.onload = resolver;
  s.onerror = rechazar;
  document.head.append(s);
});

export async function iniciarAnalitica() {
  if (typeof window.gtag === 'function') {
    // La página que aloja el recurso ya carga gtag.
    marcarListo();
    return;
  }
  if (!CONFIG.gaId) {
    marcarListo();
    return;
  }
  const cm = CONFIG.consentimiento;
  if (!cm || !cm.script) {
    marcarListo();
    return;
  }
  try {
    await cargarScript(cm.script); // consentimiento por defecto: denegado
  } catch {
    // Sin gestor de consentimiento no se carga la analítica.
    marcarListo();
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', CONFIG.gaId);
  cargarScript(`https://www.googletagmanager.com/gtag/js?id=${CONFIG.gaId}`).catch(() => {});

  if (cm.css) {
    const estilos = document.createElement('link');
    estilos.rel = 'stylesheet';
    estilos.href = cm.css;
    document.head.append(estilos);
  }
  if (cm.banner) cargarScript(cm.banner).catch(() => {});

  marcarListo();
}

function marcarListo() {
  listo = true;
  cola.splice(0).forEach(([evento, datos]) => enviar(evento, datos));
}

function enviar(evento, datos) {
  if (typeof window.gtag === 'function') window.gtag('event', evento, datos);
}

/**
 * Registra un evento. Con { unaVez: true } solo se envía la primera vez
 * por sesión para la misma combinación evento + parámetros.
 */
export function track(evento, params = {}, { unaVez = false } = {}) {
  if (unaVez) {
    const clave = evento + JSON.stringify(params);
    if (enviadosUnaVez.has(clave)) return;
    enviadosUnaVez.add(clave);
  }
  const datos = { recurso: CONFIG.idRecurso, ...params };
  if (CONFIG.depurar) console.info('[analítica]', evento, datos);
  if (listo) enviar(evento, datos);
  else cola.push([evento, datos]);
}
