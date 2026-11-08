// 2. El prompt profesional
// Generado por montar.py desde guion.json. No editar: cambiar el guion y volver a montar.
// «PROVISIONAL» = texto que no está en el material del cliente: pendiente de su validación.
export const b_u2 = [
  {
    id: 'esencial',
    titulo: 'Lo esencial',
    icono: 'bombilla',
    bloques: [
      {
        tipo: 'entradilla',
        html: 'Unidad 2 · Bloque A · M2 · Diapositivas 12–15. Aprender a pedir: instrucciones completas que den resultados profesionales.', // PROVISIONAL
      },
      {
        tipo: 'tarjetas',
        estilo: 'numeradas',
        columnas: 1,
        items: [
          {
            texto: '<b>Un buen prompt tiene cinco piezas:</b> Rol, Contexto, Tarea, Formato y Límites (R-C-T-F-L).', // PROVISIONAL
          },
          {
            texto: '<b>El contexto es lo que más mejora el resultado:</b> la IA no conoce a la entidad ni a la persona si no se lo contamos, siempre sin datos personales.',
          },
          {
            texto: '<b>Cuatro técnicas para afinar:</b> conversar en dos o tres vueltas, dar un ejemplo de estilo, pedir que la IA pregunte antes de empezar y pedir varias versiones.',
          },
          {
            texto: '<b>Cada prompt que funciona se guarda</b> en el banco de prompts con tres datos: tarea, prompt y qué hay que revisar.',
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
        html: '<b>Mejorar un mensaje en tres vueltas.</b> Una profesional de Atención social necesita recordar una cita a una familia por WhatsApp.', // PROVISIONAL
      },
      {
        tipo: 'destacado',
        icono: 'bocadillo',
        variante: 'principal',
        html: '<p><strong>Tú:</strong> Escribe un mensaje para recordar una cita.</p><p><em>Prompt pobre: sin rol, sin contexto, sin límites.</em></p>', // PROVISIONAL (en parte)
      },
      {
        tipo: 'ejemplo',
        titulo: 'IA',
        html: '<p>Estimado/a usuario/a: Le recordamos que tiene una cita programada. Rogamos puntualidad. Atentamente.</p><p><em>Frío, con barras y sin datos útiles.</em></p>',
      },
      {
        tipo: 'destacado',
        icono: 'bocadillo',
        variante: 'principal',
        html: '<p><strong>Tú:</strong> Actúa como profesional de la atención social de una ONG de Málaga. Escribe un WhatsApp para recordar a una familia su cita del jueves a las 10:00 en nuestra sede. Tono cercano, tuteo, máximo 50 palabras. Sin barras ni tecnicismos. Ofrece cambiar la cita si no puede venir.</p><p><em>Se añaden las cinco piezas: R-C-T-F-L.</em></p>', // PROVISIONAL (en parte)
      },
      {
        tipo: 'ejemplo',
        titulo: 'IA',
        html: '<p>¡Hola! Te recordamos tu cita el jueves a las 10:00 en nuestra sede. Si no puedes venir, escríbenos y buscamos otro momento. ¡Hasta el jueves!</p>',
      },
      {
        tipo: 'destacado',
        icono: 'bocadillo',
        variante: 'principal',
        html: '<p><strong>Tú:</strong> Añade que pueden venir con sus hijas e hijos y la dirección: [dirección].</p><p><em>Segunda vuelta: se ajusta lo que falta.</em></p>', // PROVISIONAL (en parte)
      },
      {
        tipo: 'ejemplo',
        titulo: 'IA',
        html: '<p>¡Hola! Te recordamos tu cita el jueves a las 10:00 en [dirección]. Puedes venir con tus hijas e hijos. Si no puedes venir, escríbenos y buscamos otro momento. ¡Hasta el jueves!</p><p><em>Listo para guardarlo en el banco de prompts.</em></p>',
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
        texto: 'Del prompt pobre al profesional',
      },
      {
        tipo: 'texto',
        html: '<p><em>Caso práctico resuelto · D2 · Inserción sociolaboral · Diapositiva 13</em></p><p>Tarea: oferta de empleo inclusiva de mantenimiento de edificios para el itinerario.</p>', // PROVISIONAL (en parte)
      },
      {
        tipo: 'ejemplo',
        titulo: 'Del prompt pobre al profesional',
        html: '<p><strong>Antes:</strong> «Escribe una oferta de trabajo de mantenimiento.»</p><p><em>Resultado: «Se busca oficial de mantenimiento con experiencia, fuerte y con carnet…». Masculino genérico y un requisito que no hace falta.</em></p><p><strong>Después:</strong> «Actúa como profesional de la inserción sociolaboral. Redacta una oferta de empleo para un puesto de mantenimiento de edificios dirigida a un itinerario con muchas mujeres. 120 palabras, tono claro. Nombra el puesto de forma inclusiva, no incluyas requisitos físicos que el puesto no exija y anima expresamente a presentarse a mujeres. Añade la cláusula de igualdad.»</p><p><em>Resultado: «Buscamos una persona para el mantenimiento de edificios: pequeñas reparaciones, revisión de instalaciones… Valoramos experiencia en tareas de mantenimiento, también la adquirida en el hogar. Animamos especialmente a mujeres a presentar su candidatura.»</em></p>', // PROVISIONAL (en parte)
      },
      {
        tipo: 'destacado',
        icono: 'llave',
        html: '<p><strong>Clave:</strong> El contexto (quién leerá la oferta) y los límites (sin requisitos innecesarios) cambian el resultado.</p>',
      },
      {
        tipo: 'ir-a',
        texto: 'Volver a tu misión', // PROVISIONAL
        destino: 'u2/mision',
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
                  texto: 'Escribe siempre las cinco piezas: rol, contexto, tarea, formato y límites.',
                },
                {
                  texto: 'Da contexto sin datos personales: perfil, situación y finalidad.',
                },
                {
                  texto: 'Conversa: mejora el resultado en dos o tres vueltas.',
                },
                {
                  texto: 'Pide a la IA que te pregunte lo que necesita antes de empezar.',
                },
                {
                  texto: 'Guarda cada prompt que funcione con la tarea y lo que hay que revisar.',
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
                  texto: 'Escribir una sola línea y esperar un resultado profesional.',
                },
                {
                  texto: 'Olvidar los límites: así aparecen tecnicismos y datos inventados.',
                },
                {
                  texto: 'Aceptar el primer resultado sin pedir mejoras.',
                },
                {
                  texto: 'Reescribir desde cero en vez de afinar lo que ya funciona.',
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
    titulo: 'Practica: Pon cada pieza en su sitio', // PROVISIONAL
    icono: 'puzle',
    bloques: [
      {
        tipo: 'ejercicio',
        id: 'u2-practica',
        titulo: 'Pon cada pieza en su sitio',
        enunciado: '<p>Cada fragmento es una pieza de un prompt profesional. ¿Cuál es?</p>',
        campos: [
          {
            tipo: 'clasificar',
            id: 'u2-practica-clasificar',
            etiqueta: 'Pon cada pieza en su sitio',
            categorias: [
              {
                id: 'c0',
                texto: 'Rol',
              },
              {
                id: 'c1',
                texto: 'Contexto',
              },
              {
                id: 'c2',
                texto: 'Tarea',
              },
              {
                id: 'c3',
                texto: 'Formato',
              },
              {
                id: 'c4',
                texto: 'Límites',
              },
            ],
            items: [
              {
                texto: '«Actúa como técnica de inserción sociolaboral de una ONG de Málaga.»',
                correcta: 'c0',
                explicacion: 'Rol: desde qué profesión responde la IA.',
              },
              {
                texto: '«Es para mujeres de un itinerario de empleo que vuelven a trabajar tras años de cuidados.»',
                correcta: 'c1',
                explicacion: 'Contexto: para quién, en qué situación y con qué fin, sin datos personales.',
              },
              {
                texto: '«Redacta la oferta de un curso de mantenimiento de edificios.»',
                correcta: 'c2',
                explicacion: 'Tarea: qué tiene que hacer, con un verbo claro.',
              },
              {
                texto: '«Máximo 120 palabras, en tres párrafos y con tono cercano.»',
                correcta: 'c3',
                explicacion: 'Formato: extensión, estructura y tono.',
              },
              {
                texto: '«Sin tecnicismos, sin barras y sin requisitos innecesarios.»',
                correcta: 'c4',
                explicacion: 'Límites: lo que debe evitar.',
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
        id: 'u2-mision',
        titulo: 'Tu misión · en tu puesto',
        enunciado: '<p>Toma la tarea D2 de tu área, escribe primero el prompt pobre y después el profesional. Guarda los dos en tu banco de prompts con lo que has tenido que corregir.</p>',
        bloques: [
          {
            tipo: 'tarjetas',
            estilo: 'numeradas',
            columnas: 1,
            items: [
              {
                texto: 'Toma la tarea D2 de tu área en el banco de casos.',
              },
              {
                texto: 'Escribe primero el prompt pobre, de una sola línea.',
              },
              {
                texto: 'Reescríbelo con las cinco piezas R-C-T-F-L y compara los resultados.',
              },
              {
                texto: 'Guarda el bueno en tu banco de prompts con lo que has tenido que corregir.',
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
            id: 'u2-mision-tarea',
            etiqueta: 'La tarea D2 de mi área', // PROVISIONAL
            filas: 2,
          },
          {
            tipo: 'texto-libre',
            id: 'u2-mision-pobre',
            etiqueta: 'Mi prompt pobre, de una sola línea', // PROVISIONAL
            filas: 2,
          },
          {
            tipo: 'texto-libre',
            id: 'u2-mision-profesional',
            etiqueta: 'Mi prompt profesional (R-C-T-F-L)', // PROVISIONAL
            filas: 7,
          },
          {
            tipo: 'texto-libre',
            id: 'u2-mision-corregir',
            etiqueta: 'Lo que he tenido que corregir', // PROVISIONAL
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
              destino: 'u2/resuelto',
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
            titulo: 'Prompt 2: Plantilla R-C-T-F-L', // PROVISIONAL
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Actúa como [rol profesional]. [Contexto: para quién es, en qué situación y con qué fin, sin datos personales]. [Tarea con un verbo claro]. [Formato: extensión, estructura y tono]. [Límites: qué evitar, por ejemplo tecnicismos o datos inventados].</p>',
              },
            ],
          },
          {
            titulo: 'Prompt 3: Carta a una familia', // PROVISIONAL
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Actúa como profesional del trabajo social de una ONG de Málaga. Una familia de un barrio vulnerable, con poco tiempo y nivel medio de lectura, está en un programa de acompañamiento. Redacta una carta que la invite a una reunión de seguimiento el [día] a las [hora]. Máximo 120 palabras, tono cercano y respetuoso, frases cortas. No uses tecnicismos, termina con un teléfono de contacto y ofrece cambiar la hora si no les viene bien.</p>',
              },
            ],
          },
          {
            titulo: 'Prompt 4: Técnicas para afinar', // PROVISIONAL
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Antes de empezar, hazme las preguntas que necesites para hacerlo bien.</p><p>Dame tres versiones: una formal, una cercana y una en lectura fácil.</p><p>Escríbelo con el estilo de este texto: [pegar texto de la entidad].</p>',
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
        id: 'u2-test-1',
        titulo: 'Pregunta 1',
        enunciado: '<p>¿Qué cinco piezas tiene un prompt profesional?</p>',
        campos: [
          {
            tipo: 'opciones',
            id: 'u2-test-1-r',
            etiqueta: 'Mi respuesta',
            opciones: [
              {
                letra: 'a',
                texto: 'Rol, contexto, tarea, formato y límites.',
              },
              {
                letra: 'b',
                texto: 'Rol, carta, tono, fecha y lista.',
              },
              {
                letra: 'c',
                texto: 'Resumen, contexto, tema, fuente y lenguaje.',
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
            html: '<p><strong>Solución: Rol, contexto, tarea, formato y límites.</strong> R-C-T-F-L: la fórmula de la diapositiva 12.</p>', // PROVISIONAL
          },
        ],
      },
      {
        tipo: 'ejercicio',
        id: 'u2-test-2',
        titulo: 'Pregunta 2',
        enunciado: '<p>¿Qué pieza mejora más el resultado?</p>',
        campos: [
          {
            tipo: 'opciones',
            id: 'u2-test-2-r',
            etiqueta: 'Mi respuesta',
            opciones: [
              {
                letra: 'a',
                texto: 'El formato.',
              },
              {
                letra: 'b',
                texto: 'El contexto, dado sin datos personales.',
              },
              {
                letra: 'c',
                texto: 'El rol.',
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
            html: '<p><strong>Solución: El contexto, dado sin datos personales.</strong> El contexto cambia la respuesta: perfil, situación y finalidad, sin nombres ni datos identificativos.</p>', // PROVISIONAL
          },
        ],
      },
      {
        tipo: 'ejercicio',
        id: 'u2-test-3',
        titulo: 'Pregunta 3',
        enunciado: '<p>El primer resultado no te convence. ¿Qué haces?</p>',
        campos: [
          {
            tipo: 'opciones',
            id: 'u2-test-3-r',
            etiqueta: 'Mi respuesta',
            opciones: [
              {
                letra: 'a',
                texto: 'Lo descarto y escribo otro prompt desde cero.',
              },
              {
                letra: 'b',
                texto: 'Converso con la IA y pido mejoras concretas en dos o tres vueltas.',
              },
              {
                letra: 'c',
                texto: 'Lo acepto, porque la IA sabe más.',
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
            html: '<p><strong>Solución: Converso con la IA y pido mejoras concretas en dos o tres vueltas.</strong> Afinar lo que ya funciona es más rápido y da mejores resultados.</p>', // PROVISIONAL
          },
        ],
      },
    ],
  },
];
