// 4. Sesgos de género en la IA
// Generado por montar.py desde guion.json. No editar: cambiar el guion y volver a montar.
// «PROVISIONAL» = texto que no está en el material del cliente: pendiente de su validación.
export const b_u4 = [
  {
    id: 'esencial',
    titulo: 'Lo esencial',
    icono: 'bombilla',
    bloques: [
      {
        tipo: 'entradilla',
        html: 'Unidad 4 · Bloque B · M4 · Diapositivas 24–31. Detectar por qué y dónde la IA reproduce sesgos de género, y corregirlos.', // PROVISIONAL
      },
      {
        tipo: 'tarjetas',
        estilo: 'numeradas',
        columnas: 1,
        items: [
          {
            texto: '<b>Ante cualquier resultado, tres preguntas:</b> ¿quién la ha diseñado?, ¿con qué datos ha aprendido?, ¿a quién beneficia y a quién deja fuera?',
          },
          {
            texto: '<b>Cuatro conceptos:</b> sexo y género, estereotipos, reparto de roles y masculino como norma.',
          },
          {
            texto: '<b>El sesgo se cuela</b> en el lenguaje, en las imágenes, en las recomendaciones y en las decisiones automatizadas. Se suma a otros: origen, edad, discapacidad (interseccionalidad).',
          },
          {
            texto: '<b>La cláusula de igualdad reduce el sesgo, pero no lo elimina:</b> la revisión final siempre es de la profesional.',
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
        html: '<b>El mismo encargo, con y sin cláusula de igualdad.</b> Una técnica de Empleo prepara el texto de un cartel para un taller de mantenimiento básico del hogar.', // PROVISIONAL
      },
      {
        tipo: 'destacado',
        icono: 'bocadillo',
        variante: 'principal',
        html: '<p><strong>Tú (sin cláusula):</strong> Escribe el texto de un cartel para un taller de mantenimiento básico del hogar.</p>', // PROVISIONAL
      },
      {
        tipo: 'ejemplo',
        titulo: 'IA',
        html: '<p>¿Eres un manitas? Ven al taller y aprende a arreglar enchufes y grifos como un profesional. ¡Te esperamos, chicos!</p><p><em>Masculino genérico y destinatario masculino por defecto.</em></p>',
      },
      {
        tipo: 'destacado',
        icono: 'bocadillo',
        variante: 'principal',
        html: '<p><strong>Tú (con cláusula):</strong> Repite el texto añadiendo la cláusula de igualdad. El taller se dirige a todas las personas del itinerario, con especial interés en que participen mujeres.</p>', // PROVISIONAL
      },
      {
        tipo: 'ejemplo',
        titulo: 'IA',
        html: '<p>Aprende a cambiar un enchufe, arreglar un grifo o colgar una estantería. Taller práctico y gratuito para todas las personas que quieran ganar autonomía en casa y abrirse a nuevos empleos. ¡Las mujeres sois especialmente bienvenidas!</p><p><em>Nombra a todas las personas y rompe el estereotipo.</em></p>',
      },
      {
        tipo: 'destacado',
        icono: 'bocadillo',
        variante: 'principal',
        html: '<p><strong>Tú (revisión):</strong> Comprueba el texto con la lista de verificación: sin barras, sin estereotipos, con referentes de mujeres.</p><p><em>La cláusula reduce el sesgo; la revisión final es tuya.</em></p>', // PROVISIONAL (en parte)
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
        texto: 'Del prompt sesgado al prompt corregido',
      },
      {
        tipo: 'texto',
        html: '<p><em>Caso práctico resuelto · D5 · La caza del sesgo · Diapositiva 29</em></p><p>Tres escenas pedidas a una herramienta de imágenes.</p>',
      },
      {
        tipo: 'ejemplo',
        titulo: 'Del prompt sesgado al prompt corregido',
        html: '<p><strong>«Una persona experta en fontanería»:</strong> Suele aparecer: hombre de mediana edad con mono y herramientas.</p><p><em>Corregido: «…una fontanera de unos 45 años reparando una tubería, en primer plano y con seguridad».</em></p><p><strong>«Una familia que pide ayuda en servicios sociales»:</strong> Suele aparecer: madre sola, triste, en un entorno degradado.</p><p><em>Corregido: «…una familia diversa conversando con una profesional, en actitud activa y digna».</em></p><p><strong>«Una persona que dirige una ONG»:</strong> Suele aparecer: hombre con traje en un despacho.</p><p><em>Corregido: «…una mujer de unos 50 años dirigiendo una reunión de un equipo diverso».</em></p>', // PROVISIONAL (en parte)
      },
      {
        tipo: 'destacado',
        icono: 'llave',
        html: '<p><strong>Clave:</strong> Dos estrategias: especificar o pedir diversidad sin fijar el sexo. Lo que no sirve es no pedir nada.</p>',
      },
      {
        tipo: 'subtitulo',
        texto: 'La lista del personal',
      },
      {
        tipo: 'texto',
        html: '<p><em>Caso práctico resuelto · Prueba rápida del M4 · Diapositiva 26</em></p><p>«Haz la lista del personal de un centro de menores y de una empresa de construcción, con sus puestos».</p>', // PROVISIONAL (en parte)
      },
      {
        tipo: 'ejemplo',
        titulo: 'La lista del personal',
        html: '<p><strong>Resultado habitual:</strong> Centro de menores: directora, educadoras, psicóloga, cocinera, limpiadora.<br>Empresa de construcción: jefe de obra, encargado, oficiales, peones, administrativa.</p><p><em>Cuidados para ellas, oficios y mando para ellos; la única mujer en construcción es administrativa.</em></p><p><strong>Prompt corregido:</strong> «Haz la lista del personal de un centro de menores y de una empresa de construcción. Usa denominaciones inclusivas, reparte los puestos sin estereotipos y no des por hecho el sexo de cada persona.»</p><p><strong>Resultado corregido:</strong> Centro: dirección, equipo educativo, psicología, cocina, limpieza.<br>Construcción: jefatura de obra, encargada, personal oficial y de peonaje, administración.</p><p><em>Genéricos reales y profesiones en femenino donde se nombra a una persona.</em></p>', // PROVISIONAL (en parte)
      },
      {
        tipo: 'destacado',
        icono: 'llave',
        html: '<p><strong>Clave:</strong> Lo que no se nombra no existe: la IA repite el reparto de roles que encuentra en sus datos.</p>',
      },
      {
        tipo: 'ir-a',
        texto: 'Volver a tu misión', // PROVISIONAL
        destino: 'u4/mision',
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
                  texto: 'Añade la cláusula de igualdad a cada prompt.',
                },
                {
                  texto: 'Pregunta siempre: ¿quién falta en este texto o en esta imagen?',
                },
                {
                  texto: 'Pide diversidad de sexo, edad y origen, y personas con y sin discapacidad, en las imágenes.',
                },
                {
                  texto: 'Usa genéricos reales y colectivos antes que desdoblar en cada frase.',
                },
                {
                  texto: 'Revisa todo con la lista de verificación de género.',
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
                  texto: 'Usar la arroba, la «x» o las barras: dificultan la lectura y los lectores de pantalla.',
                },
                {
                  texto: 'Confiar en que la cláusula elimina todos los sesgos.',
                },
                {
                  texto: 'Publicar imágenes de familias en actitud pasiva o triste.',
                },
                {
                  texto: 'Dar por hecho que quien cuida es la madre.',
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
    titulo: 'Practica: ¿Evitar o preferir?', // PROVISIONAL
    icono: 'puzle',
    bloques: [
      {
        tipo: 'ejercicio',
        id: 'u4-practica',
        titulo: '¿Evitar o preferir?',
        enunciado: '<p>Clasifica cada expresión según la guía de lenguaje inclusivo de la jornada.</p>',
        campos: [
          {
            tipo: 'clasificar',
            id: 'u4-practica-clasificar',
            etiqueta: '¿Evitar o preferir?',
            categorias: [
              {
                id: 'c0',
                texto: 'Evitar',
              },
              {
                id: 'c1',
                texto: 'Preferir',
              },
            ],
            items: [
              {
                texto: 'los usuarios',
                correcta: 'c0',
                explicacion: 'Mejor «las personas usuarias».',
              },
              {
                texto: 'el alumnado',
                correcta: 'c1',
                explicacion: 'Genérico real: nombra a todas las personas.',
              },
              {
                texto: 'tod@s',
                correcta: 'c0',
                explicacion: 'La arroba dificulta la lectura y los lectores de pantalla no la leen bien.',
              },
              {
                texto: 'la plantilla',
                correcta: 'c1',
                explicacion: 'Colectivo: evita el masculino genérico «los trabajadores».',
              },
              {
                texto: 'chicxs',
                correcta: 'c0',
                explicacion: 'La «x» no es legible ni accesible.',
              },
              {
                texto: 'la persona solicitante',
                correcta: 'c1',
                explicacion: '«Persona» + adjetivo: inclusivo y claro.',
              },
              {
                texto: 'los/las trabajadores/as',
                correcta: 'c0',
                explicacion: 'Las barras entorpecen la lectura. Mejor «la plantilla» o «el personal».',
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
        id: 'u4-mision',
        titulo: 'Tu misión · en tu puesto',
        enunciado: '<p>Pide a la IA las cuatro imágenes D5 de tu área, anota quién aparece y cómo, y corrige el prompt con la cláusula de igualdad.</p>',
        bloques: [
          {
            tipo: 'tarjetas',
            estilo: 'numeradas',
            columnas: 1,
            items: [
              {
                texto: 'Pide a la IA las cuatro imágenes D5 de tu área, sin más indicaciones.',
              },
              {
                texto: 'Anota quién aparece, qué hace y quién falta.',
              },
              {
                texto: 'Repite la petición con la cláusula de igualdad.',
              },
              {
                texto: 'Compara las dos tandas con la lista de verificación de género.',
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
            tipo: 'tabla',
            id: 'u4-mision-imagenes',
            columnas: [
              'Imagen',
              'Quién aparece y qué hace', // PROVISIONAL
              'Quién falta',
              'Prompt corregido',
            ],
            sufijos: [
              'aparece',
              'falta',
              'corregido',
            ],
            filas: [
              {
                id: 'u4-mision-img-1',
                texto: 'Imagen 1', // PROVISIONAL
              },
              {
                id: 'u4-mision-img-2',
                texto: 'Imagen 2', // PROVISIONAL
              },
              {
                id: 'u4-mision-img-3',
                texto: 'Imagen 3', // PROVISIONAL
              },
              {
                id: 'u4-mision-img-4',
                texto: 'Imagen 4', // PROVISIONAL
              },
            ],
          },
          {
            tipo: 'texto-libre',
            id: 'u4-mision-conclusion',
            etiqueta: 'Al comparar las dos tandas con la lista de verificación…', // PROVISIONAL
            filas: 3,
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
              destino: 'u4/resuelto',
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
      {
        tipo: 'desplegables',
        items: [
          {
            titulo: 'Prompt 1: Cláusula de igualdad', // PROVISIONAL
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Usa un lenguaje no sexista e inclusivo, claro y accesible; evita las barras, las arrobas y la «x». Visibiliza a las mujeres y su aportación, con referentes y ejemplos diversos. Evita estereotipos y cualquier discriminación por sexo, origen racial o étnico, edad, discapacidad, religión, orientación o identidad sexual, expresión de género, situación socioeconómica o lengua, y ten en cuenta que estas desigualdades se suman. No des por hecho que los cuidados corresponden a las mujeres ni que el empleo y la toma de decisiones corresponden a los hombres. Si el tema es la violencia de género, nómbrala así, sitúa la responsabilidad en el agresor y nunca culpabilices a la víctima. Muestra a las personas con dignidad y como protagonistas de su vida, sin revictimizar. Si ves un sesgo en lo que te pido, avísame.</p>',
              },
            ],
          },
          {
            titulo: 'Prompt 7: Imagen sin estereotipos', // PROVISIONAL
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Crea una imagen de [escena]. Muestra diversidad de sexo, edad y origen, con personas con y sin discapacidad, sin estereotipos, con las personas en actitud activa y digna.</p>',
              },
            ],
          },
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
        id: 'u4-test-1',
        titulo: 'Pregunta 1',
        enunciado: '<p>¿Por dónde se cuela el sesgo de género en la IA?</p>',
        campos: [
          {
            tipo: 'opciones',
            id: 'u4-test-1-r',
            etiqueta: 'Mi respuesta',
            opciones: [
              {
                letra: 'a',
                texto: 'Solo por las imágenes.',
              },
              {
                letra: 'b',
                texto: 'Por el lenguaje, las imágenes, las recomendaciones y las decisiones automatizadas.',
              },
              {
                letra: 'c',
                texto: 'Solo cuando el prompt es machista.',
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
            html: '<p><strong>Solución: Por el lenguaje, las imágenes, las recomendaciones y las decisiones automatizadas.</strong> Por eso se revisa todo lo que produce, no solo los textos.</p>', // PROVISIONAL
          },
        ],
      },
      {
        tipo: 'ejercicio',
        id: 'u4-test-2',
        titulo: 'Pregunta 2',
        enunciado: '<p>¿Por qué no usamos la arroba ni la «x»?</p>',
        campos: [
          {
            tipo: 'opciones',
            id: 'u4-test-2-r',
            etiqueta: 'Mi respuesta',
            opciones: [
              {
                letra: 'a',
                texto: 'Porque no son oficiales.',
              },
              {
                letra: 'b',
                texto: 'Porque dificultan la lectura y los lectores de pantalla no las leen bien.',
              },
              {
                letra: 'c',
                texto: 'Porque la IA no las entiende.',
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
            html: '<p><strong>Solución: Porque dificultan la lectura y los lectores de pantalla no las leen bien.</strong> No son accesibles. Mejor genéricos reales, colectivos y desdoblamientos con medida.</p>', // PROVISIONAL
          },
        ],
      },
      {
        tipo: 'ejercicio',
        id: 'u4-test-3',
        titulo: 'Pregunta 3',
        enunciado: '<p>Si añades la cláusula de igualdad al prompt…</p>',
        campos: [
          {
            tipo: 'opciones',
            id: 'u4-test-3-r',
            etiqueta: 'Mi respuesta',
            opciones: [
              {
                letra: 'a',
                texto: 'el sesgo desaparece del todo.',
              },
              {
                letra: 'b',
                texto: 'el sesgo se reduce, pero la revisión final sigue siendo tuya.',
              },
              {
                letra: 'c',
                texto: 'ya no hace falta la lista de verificación.',
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
            html: '<p><strong>Solución: el sesgo se reduce, pero la revisión final sigue siendo tuya.</strong> La cláusula ayuda; la lista de verificación y tu criterio cierran el trabajo.</p>', // PROVISIONAL
          },
        ],
      },
    ],
  },
];
