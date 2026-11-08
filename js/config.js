// Generado por montar.py desde recurso.json. No editar: cambiar recurso.json y volver a montar.

const enDominio = /(^|\.)claude\.ai\ \(artefacto\ compartido\ con\ «Cualquiera\ con\ el\ enlace»\)$/.test(location.hostname);

export const CONFIG = {
  idRecurso: "cuaderno-ia-genero",
  claveAlmacen: null,
  titulo: "IA con perspectiva de género aplicada a la atención social",
  organizacion: "Forprocer",
  consentimiento: null,
  dossier: {"titulo": "Mi cuaderno de la jornada", "pie": "Cuaderno de la jornada «IA con perspectiva de género aplicada a la atención social» · Forprocer · formate@forprocer.es"},
  enfoques: [{"icono": "diana", "texto": ""}, {"icono": "corazon", "texto": ""}],
  enlaces: {},
  // Analítica solo en el dominio de publicación (claude.ai (artefacto compartido con «Cualquiera con el enlace»)), nunca en desarrollo.
  gaId: null,
  depurar: new URLSearchParams(location.search).has('debug'),
};
