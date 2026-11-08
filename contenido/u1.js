// 1. Fundamentos de la IA generativa
// Generado por montar.py desde guion.json. No editar: cambiar el guion y volver a montar.
// «PROVISIONAL» = texto que no está en el material del cliente: pendiente de su validación.
export const b_u1 = [
  {
    id: 'esencial',
    titulo: 'Lo esencial',
    icono: 'bombilla',
    bloques: [
      {
        tipo: 'entradilla',
        html: 'Unidad 1 · Bloque A · M1 · Diapositivas 7–11. Entender qué es la IA generativa, en qué ayuda y en qué no se puede confiar.', // PROVISIONAL
      },
      {
        tipo: 'tarjetas',
        estilo: 'numeradas',
        columnas: 1,
        items: [
          {
            texto: '<b>La IA generativa no sabe: predice</b> la palabra más probable a partir de lo que ha leído. Por eso escribe con soltura y a veces se inventa cosas (alucinaciones).',
          },
          {
            texto: '<b>Repite lo que ha visto:</b> reproduce los patrones de sus datos, también sus errores y sus sesgos.',
          },
          {
            texto: '<b>Te ayuda a</b> redactar borradores, resumir, pasar textos a lenguaje claro, traducir y generar ideas.',
          },
          {
            texto: '<b>No confíes en ella</b> para datos, plazos y requisitos sin verificar, recursos concretos de Málaga, decidir sobre personas o guardar datos personales.',
          },
          {
            texto: '<b>Lo importante no es la herramienta</b> (ChatGPT, Claude, Gemini, Copilot), sino saber pedir y saber revisar. En el trabajo, usa solo las que autorice la entidad.',
          },
        ],
      },
    ],
  },
  {
    id: 'simulacion',
    titulo: 'Simulación paso a paso',
    icono: 'bocadillo',
    bloques: [
      {
        tipo: 'entradilla',
        html: '<b>Comprobar una respuesta antes de usarla.</b> Una profesional de Acción social pregunta a la IA por recursos para una familia. Así se conversa con la IA para separar lo útil de lo inventado.', // PROVISIONAL
      },
      {
        tipo: 'destacado',
        icono: 'bocadillo',
        variante: 'principal',
        html: '<p><strong>Tú:</strong> ¿Qué ayudas hay en Málaga para una familia con riesgo de perder su vivienda?</p>', // PROVISIONAL
      },
      {
        tipo: 'ejemplo',
        titulo: 'IA',
        html: '<p>Puede solicitar la «Ayuda Municipal Urgente al Alquiler 2026» llamando al 952 000 000, el ingreso mínimo vital y acudir a servicios sociales comunitarios.</p><p><em>Suena seguro, pero hay que comprobarlo todo.</em></p>',
      },
      {
        tipo: 'destacado',
        icono: 'bocadillo',
        variante: 'principal',
        html: '<p><strong>Tú:</strong> Para cada ayuda que has citado, dime la fuente oficial donde puedo comprobarla y la fecha de la información. Si no la conoces, dímelo.</p><p><em>Pedir fuente y fecha obliga a la IA a mostrar sus límites.</em></p>', // PROVISIONAL (en parte)
      },
      {
        tipo: 'ejemplo',
        titulo: 'IA',
        html: '<p>No puedo confirmar la ayuda municipal ni el teléfono: compruébalo en la web del Ayuntamiento. El ingreso mínimo vital lo gestiona la Seguridad Social (seg-social.es). Los servicios sociales comunitarios dependen del Ayuntamiento.</p>',
      },
      {
        tipo: 'destacado',
        icono: 'bocadillo',
        variante: 'principal',
        html: '<p><strong>Tú (comprobación):</strong> En la web del Ayuntamiento no existe esa ayuda ni ese teléfono. El ingreso mínimo vital sí existe.</p><p><em>Se descarta lo inventado y se usa la guía de recursos de la entidad.</em></p>', // PROVISIONAL (en parte)
      },
    ],
  },
  {
    id: 'resuelto',
    titulo: 'Caso práctico resuelto',
    icono: 'llave',
    bloques: [
      {
        tipo: 'subtitulo',
        texto: 'Ficha comparativa',
      },
      {
        tipo: 'texto',
        html: '<p><em>Caso práctico resuelto · D1 · Acción social · Diapositiva 11</em></p><p>Pregunta a dos herramientas: «¿Qué ayudas hay en Málaga para una familia con riesgo de perder su vivienda?»</p>',
      },
      {
        tipo: 'ejemplo',
        titulo: 'Ficha comparativa',
        html: '<p><strong>Lo que dice la IA:</strong> «Existe un programa municipal de ayuda al alquiler 2026; llame al 952…»</p><p><em>No aparece en la web del Ayuntamiento: <b>inventado, se descarta</b>.</em></p><p><strong>Lo que dice la IA:</strong> «Puede solicitar el ingreso mínimo vital.»</p><p><em>Existe y lo gestiona la Seguridad Social: <b>real, pero hay que verificar requisitos</b>.</em></p><p><strong>Lo que dice la IA:</strong> «Acuda a los servicios sociales comunitarios.»</p><p><em>Recurso real y adecuado: <b>útil</b>.</em></p><p><strong>Segunda herramienta:</strong> Cita ayudas de 2021.</p><p><em>Fecha de la convocatoria: <b>desactualizado</b>.</em></p>', // PROVISIONAL (en parte)
      },
      {
        tipo: 'destacado',
        icono: 'llave',
        html: '<p><strong>Clave:</strong> La IA redacta bien, pero no es una guía de recursos. Lo que se aprende es el método: web oficial, guía de recursos de la entidad y fecha.</p>',
      },
      {
        tipo: 'ir-a',
        texto: 'Volver a tu misión', // PROVISIONAL
        destino: 'u1/mision',
        icono: 'flecha-izq',
      },
    ],
  },
  {
    id: 'buenas',
    titulo: 'Buenas prácticas y errores frecuentes',
    icono: 'check',
    bloques: [
      {
        tipo: 'columnas',
        columnas: [
          [
            {
              tipo: 'subtitulo',
              texto: 'Haz',
            },
            {
              tipo: 'tarjetas',
              estilo: 'lista',
              columnas: 1,
              items: [
                {
                  texto: 'Pregunta a la IA por la fuente y la fecha de cualquier dato.',
                },
                {
                  texto: 'Usa la IA para redactar y ordenar, no como guía de recursos.',
                },
                {
                  texto: 'Compara la respuesta de dos herramientas cuando el tema sea importante.',
                },
                {
                  texto: 'Usa solo las herramientas que autorice tu entidad.',
                },
                {
                  texto: 'Ante la duda, consulta la fuente oficial: BOE, BOJA o la web del organismo.',
                },
              ],
            },
          ],
          [
            {
              tipo: 'subtitulo',
              texto: 'Evita',
            },
            {
              tipo: 'tarjetas',
              estilo: 'lista',
              columnas: 1,
              items: [
                {
                  texto: 'Dar por buena una respuesta porque está bien escrita.',
                },
                {
                  texto: 'Copiar teléfonos, direcciones o plazos sin comprobarlos.',
                },
                {
                  texto: 'Pedir a la IA que decida sobre una persona.',
                },
                {
                  texto: 'Usar la IA como si fuera un buscador.',
                },
              ],
            },
          ],
        ],
      },
    ],
  },
  {
    id: 'practica',
    titulo: 'Practica: ¿Se lo pido a la IA o no?', // PROVISIONAL
    icono: 'puzle',
    bloques: [
      {
        tipo: 'ejercicio',
        id: 'u1-practica',
        titulo: '¿Se lo pido a la IA o no?',
        enunciado: '<p>Decide si cada tarea es buena para la IA o si no debes pedírsela.</p>',
        campos: [
          {
            tipo: 'clasificar',
            id: 'u1-practica-clasificar',
            etiqueta: '¿Se lo pido a la IA o no?',
            categorias: [
              {
                id: 'c0',
                texto: 'Buena tarea para la IA',
              },
              {
                id: 'c1',
                texto: 'No se la pidas',
              },
            ],
            items: [
              {
                texto: 'Redactar el borrador de una carta a una familia, sin datos personales.',
                correcta: 'c0',
                explicacion: 'Redactar y ordenar es su punto fuerte. Después revisas el texto.',
              },
              {
                texto: 'Decidir si una familia cumple los requisitos de una ayuda.',
                correcta: 'c1',
                explicacion: 'Decidir sobre personas es una responsabilidad profesional que no se delega.',
              },
              {
                texto: 'Resumir una norma cuyo texto oficial le pegas en el prompt.',
                correcta: 'c0',
                explicacion: 'Trabaja sobre un texto fiable que tú le das, no de memoria.',
              },
              {
                texto: 'Darte la lista actualizada de recursos sociales de Málaga.',
                correcta: 'c1',
                explicacion: 'Inventa o da datos desactualizados. Usa la guía de recursos de la entidad.',
              },
              {
                texto: 'Pasar un aviso a lenguaje claro para revisarlo después.',
                correcta: 'c0',
                explicacion: 'Es una buena ayuda, siempre con revisión final.',
              },
              {
                texto: 'Valorar el riesgo de una niña o un niño.',
                correcta: 'c1',
                explicacion: 'Es una valoración profesional. Además, nunca se introducen datos de menores.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'mision',
    titulo: 'Tu misión',
    icono: 'lapiz',
    bloques: [
      {
        tipo: 'ejercicio',
        id: 'u1-mision',
        titulo: 'Tu misión · en tu puesto',
        enunciado: '<p>Elige la pregunta D1 de tu área en el banco de casos, hazla en dos herramientas y rellena tu propia ficha comparativa: lo que dice la IA, cómo lo compruebas y el resultado.</p>',
        bloques: [
          {
            tipo: 'tarjetas',
            estilo: 'numeradas',
            columnas: 1,
            items: [
              {
                texto: 'Elige la pregunta D1 de tu área en el banco de casos.',
              },
              {
                texto: 'Hazla en dos herramientas distintas.',
              },
              {
                texto: 'Marca en cada respuesta lo real, lo inventado, lo desactualizado y lo que falta.',
              },
              {
                texto: 'Comprueba cada dato en la fuente oficial o en la guía de recursos.',
              },
            ],
          },
          {
            tipo: 'mis-respuestas',
            etiqueta: 'Tu área',
            respuestas: [
              {
                id: 'mi-area',
                etiqueta: 'Mi área', // PROVISIONAL
              },
            ],
          },
        ],
        campos: [
          {
            tipo: 'texto-libre',
            id: 'u1-mision-pregunta',
            etiqueta: 'La pregunta D1 de mi área', // PROVISIONAL
            filas: 2,
          },
          {
            tipo: 'tabla',
            id: 'u1-mision-ficha',
            columnas: [
              'Dato',
              'Lo que dice la IA',
              'Cómo lo compruebo', // PROVISIONAL
              'Resultado',
            ],
            sufijos: [
              'dice',
              'compruebo',
              'resultado',
            ],
            filas: [
              {
                id: 'u1-mision-ficha-1',
                texto: 'Dato 1', // PROVISIONAL
              },
              {
                id: 'u1-mision-ficha-2',
                texto: 'Dato 2', // PROVISIONAL
              },
              {
                id: 'u1-mision-ficha-3',
                texto: 'Dato 3', // PROVISIONAL
              },
              {
                id: 'u1-mision-ficha-4',
                texto: 'Dato 4', // PROVISIONAL
              },
            ],
          },
        ],
      },
      {
        tipo: 'columnas',
        columnas: [
          [
            {
              tipo: 'ir-a',
              texto: 'Ver el modelo resuelto',
              destino: 'u1/resuelto',
              icono: 'llave',
            },
          ],
          [
            {
              tipo: 'ir-a',
              texto: 'Ver los casos de mi área', // PROVISIONAL
              destino: 'banco/casos',
              icono: 'carpeta',
            },
          ],
        ],
      },
    ],
  },
  {
    id: 'test',
    titulo: 'Comprueba lo aprendido',
    icono: 'diana',
    bloques: [
      {
        tipo: 'entradilla',
        html: 'Elige una respuesta en cada pregunta.',
      },
      {
        tipo: 'ejercicio',
        id: 'u1-test-1',
        titulo: 'Pregunta 1',
        enunciado: '<p>Una herramienta te da un teléfono y una ayuda municipal con total seguridad. ¿Qué haces?</p>',
        campos: [
          {
            tipo: 'opciones',
            id: 'u1-test-1-r',
            etiqueta: 'Mi respuesta',
            opciones: [
              {
                letra: 'a',
                texto: 'Se lo doy a la familia, porque lo ha dicho con seguridad.',
              },
              {
                letra: 'b',
                texto: 'Lo compruebo en la web oficial o en la guía de recursos antes de darlo.',
              },
              {
                letra: 'c',
                texto: 'Lo pregunto a otra IA y, si coincide, lo doy por bueno.',
              },
            ],
          },
        ],
      },
      {
        tipo: 'revelar',
        boton: 'Ver la solución', // PROVISIONAL
        bloques: [
          {
            tipo: 'texto',
            html: '<p><strong>Solución: Lo compruebo en la web oficial o en la guía de recursos antes de darlo.</strong> La seguridad con la que escribe no garantiza que sea verdad. Dos herramientas también pueden equivocarse a la vez.</p>', // PROVISIONAL
          },
        ],
      },
      {
        tipo: 'ejercicio',
        id: 'u1-test-2',
        titulo: 'Pregunta 2',
        enunciado: '<p>¿Por qué la IA reproduce estereotipos?</p>',
        campos: [
          {
            tipo: 'opciones',
            id: 'u1-test-2-r',
            etiqueta: 'Mi respuesta',
            opciones: [
              {
                letra: 'a',
                texto: 'Porque está programada para discriminar.',
              },
              {
                letra: 'b',
                texto: 'Porque predice a partir de textos e imágenes en los que están los estereotipos de nuestra sociedad.',
              },
              {
                letra: 'c',
                texto: 'Porque no entiende bien el español.',
              },
            ],
          },
        ],
      },
      {
        tipo: 'revelar',
        boton: 'Ver la solución', // PROVISIONAL
        bloques: [
          {
            tipo: 'texto',
            html: '<p><strong>Solución: Porque predice a partir de textos e imágenes en los que están los estereotipos de nuestra sociedad.</strong> Aprende de lo que escribimos y publicamos, con nuestros sesgos incluidos.</p>', // PROVISIONAL
          },
        ],
      },
      {
        tipo: 'ejercicio',
        id: 'u1-test-3',
        titulo: 'Pregunta 3',
        enunciado: '<p>La IA generativa…</p>',
        campos: [
          {
            tipo: 'opciones',
            id: 'u1-test-3-r',
            etiqueta: 'Mi respuesta',
            opciones: [
              {
                letra: 'a',
                texto: 'busca la respuesta en una base de datos oficial.',
              },
              {
                letra: 'b',
                texto: 'predice la palabra más probable a partir de lo que ha leído.',
              },
              {
                letra: 'c',
                texto: 'comprueba los datos antes de responder.',
              },
            ],
          },
        ],
      },
      {
        tipo: 'revelar',
        boton: 'Ver la solución', // PROVISIONAL
        bloques: [
          {
            tipo: 'texto',
            html: '<p><strong>Solución: predice la palabra más probable a partir de lo que ha leído.</strong> Por eso escribe con soltura y a veces se inventa cosas: las «alucinaciones».</p>', // PROVISIONAL
          },
        ],
      },
    ],
  },
];
