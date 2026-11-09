// Inicio
// Generado por montar.py desde guion.json. No editar: cambiar el guion y volver a montar.
// «PROVISIONAL» = texto que no está en el material del cliente: pendiente de su validación.
export const b_inicio = [
  {
    id: 'portada',
    tipo: 'portada',
    antetitulo: 'Cuaderno de la jornada formativa',
    titulo: 'IA con perspectiva de género aplicada a la atención social',
    tituloHtml: 'IA con perspectiva de género <span class="t-secundario">aplicada a la atención social</span>',
    subtitulo: 'Tu cuaderno para repasar, practicar y llevar al día a día lo que trabajamos en la jornada: contenidos, simulaciones, casos resueltos, actividades interactivas, el banco de casos y el banco de prompts.',
    imagen: 'img/portada.webp',
    imagenAlt: '',
  },
  {
    id: 'como-usar',
    titulo: 'Cómo usar este cuaderno',
    icono: 'brujula',
    bloques: [
      {
        tipo: 'entradilla',
        html: 'Siete unidades, una por módulo, y todas con las mismas siete partes.',
      },
      {
        tipo: 'tarjetas',
        estilo: 'numeradas',
        items: [
          {
            texto: '<strong>Lo esencial.</strong> Las ideas clave del módulo, en tarjetas.', // PROVISIONAL
          },
          {
            texto: '<strong>Simulación paso a paso.</strong> Una conversación con la IA, paso a paso.', // PROVISIONAL
          },
          {
            texto: '<strong>Caso práctico resuelto.</strong> Un ejemplo completo con su solución comentada.', // PROVISIONAL
          },
          {
            texto: '<strong>Buenas prácticas y errores frecuentes.</strong> Qué hacer y qué evitar.', // PROVISIONAL
          },
          {
            texto: '<strong>Practica.</strong> Una actividad interactiva con corrección inmediata.', // PROVISIONAL
          },
          {
            texto: '<strong>Tu misión.</strong> Un reto para tu puesto, con sus pasos.', // PROVISIONAL
          },
          {
            texto: '<strong>Comprueba lo aprendido.</strong> Un test breve para ver lo que has aprendido.', // PROVISIONAL
          },
        ],
      },
      {
        tipo: 'destacado',
        icono: 'lapiz',
        html: '<p>En «Tu misión» y en las prácticas de aula puedes escribir: tus respuestas se guardan en este navegador y al final las descargas en PDF desde «Mi proyecto».</p>', // PROVISIONAL
      },
      {
        tipo: 'subtitulo',
        texto: 'Seis buenas prácticas para todo el cuaderno',
      },
      {
        tipo: 'tarjetas',
        estilo: 'lista',
        items: [
          {
            texto: '<strong>La IA propone, la profesional decide.</strong> Todo resultado se revisa antes de usarlo. La responsabilidad profesional no se delega.', // PROVISIONAL
          },
          {
            texto: '<strong>Nada personal en la herramienta.</strong> Semáforo de datos y anonimización en tres pasos, siempre.', // PROVISIONAL
          },
          {
            texto: '<strong>Igualdad en cada prompt.</strong> Cláusula de igualdad y revisión con la lista de verificación de género.', // PROVISIONAL
          },
          {
            texto: '<strong>Fuente oficial y fecha.</strong> Cualquier dato sobre ayudas, normas o recursos se comprueba en su texto vigente.', // PROVISIONAL
          },
          {
            texto: '<strong>Accesible para todo el mundo.</strong> Lenguaje claro, lectura fácil y varios canales para quien tiene brecha digital.', // PROVISIONAL
          },
          {
            texto: '<strong>Compartir lo que funciona.</strong> Los prompts útiles se guardan y se comparten con el equipo por áreas.', // PROVISIONAL
          },
        ],
      },
      {
        tipo: 'texto',
        html: '<p>Tus respuestas se guardan solo en este navegador. Todos los casos son ficticios.</p>',
      },
    ],
  },
  {
    id: 'mi-area',
    titulo: 'Elige tu área',
    icono: 'diana',
    bloques: [
      {
        tipo: 'entradilla',
        html: 'Elige tu área. Para cada dinámica tienes dos casos, A y B, para practicar después de la jornada.',
      },
      {
        tipo: 'ejercicio',
        id: 'inicio-mi-area',
        titulo: 'Mi área', // PROVISIONAL
        enunciado: '<p>¿En qué área de Prodiversa trabajas?</p>', // PROVISIONAL
        campos: [
          {
            tipo: 'opciones',
            id: 'mi-area',
            etiqueta: 'Mi área', // PROVISIONAL
            opciones: [
              {
                letra: 'A',
                texto: 'Acción social',
              },
              {
                letra: 'B',
                texto: 'Igualdad de género',
              },
              {
                letra: 'C',
                texto: 'Personas migrantes',
              },
              {
                letra: 'D',
                texto: 'Empleo y formación',
              },
              {
                letra: 'E',
                texto: 'Economía social',
              },
              {
                letra: 'F',
                texto: 'Educación para la Ciudadanía Global',
              },
              {
                letra: 'G',
                texto: 'Cooperación internacional',
              },
              {
                letra: 'H',
                texto: 'Centros de protección de menores',
              },
            ],
          },
        ],
      },
      {
        tipo: 'ir-a',
        texto: 'Ver los casos de mi área', // PROVISIONAL
        destino: 'banco/casos',
        icono: 'carpeta',
      },
    ],
  },
  {
    id: 'aula-d0',
    titulo: 'En el aula · D0: ¿Desde dónde partimos con la IA?', // PROVISIONAL
    icono: 'personas',
    bloques: [
      {
        tipo: 'texto',
        html: '<p><em>D0 · Gran grupo · 09:00 · Diapositiva 3</em></p>', // PROVISIONAL
      },
      {
        tipo: 'entradilla',
        html: 'Sitúate del 0 al 10 y responde en voz alta a tres preguntas.', // PROVISIONAL
      },
      {
        tipo: 'tarjetas',
        estilo: 'compactas',
        items: [
          {
            texto: '<strong>0</strong> · No la he usado nunca', // PROVISIONAL
          },
          {
            texto: '<strong>5</strong> · La uso a veces, sin método', // PROVISIONAL
          },
          {
            texto: '<strong>10</strong> · Es parte de mi trabajo diario', // PROVISIONAL
          },
        ],
      },
      {
        tipo: 'tarjetas',
        estilo: 'lista',
        columnas: 1,
        items: [
          {
            texto: '<strong>¿Quién soy?</strong> Mi nombre y mi área en Prodiversa', // PROVISIONAL
          },
          {
            texto: '<strong>¿En qué me ayudaría?</strong> Una tarea de mi puesto que me gustaría hacer con IA', // PROVISIONAL
          },
          {
            texto: '<strong>¿Qué me preocupa?</strong> Una palabra sobre lo que me inquieta de la IA', // PROVISIONAL
          },
        ],
      },
      {
        tipo: 'ejercicio',
        id: 'aula-d0-ej',
        titulo: 'Lo que hacemos', // PROVISIONAL
        enunciado: '<p>¿Desde dónde partimos con la IA?</p>',
        campos: [
          {
            tipo: 'opciones',
            id: 'aula-d0-escala',
            etiqueta: 'Del 0 al 10, ¿desde dónde parto con la IA?', // PROVISIONAL
            opciones: [
              {
                letra: 'A',
                texto: '0',
              },
              {
                letra: 'B',
                texto: '1',
              },
              {
                letra: 'C',
                texto: '2',
              },
              {
                letra: 'D',
                texto: '3',
              },
              {
                letra: 'E',
                texto: '4',
              },
              {
                letra: 'F',
                texto: '5',
              },
              {
                letra: 'G',
                texto: '6',
              },
              {
                letra: 'H',
                texto: '7',
              },
              {
                letra: 'I',
                texto: '8',
              },
              {
                letra: 'J',
                texto: '9',
              },
              {
                letra: 'K',
                texto: '10',
              },
            ],
          },
          {
            tipo: 'texto-libre',
            id: 'aula-d0-ayudaria',
            etiqueta: '¿En qué me ayudaría? Una tarea de mi puesto que me gustaría hacer con IA', // PROVISIONAL
            filas: 2,
          },
          {
            tipo: 'texto-libre',
            id: 'aula-d0-preocupa',
            etiqueta: '¿Qué me preocupa? Una palabra sobre lo que me inquieta de la IA', // PROVISIONAL
            filas: 1,
          },
        ],
      },
    ],
  },
  {
    id: 'programa',
    titulo: 'Programa de la jornada',
    icono: 'reloj',
    bloques: [
      {
        tipo: 'entradilla',
        html: 'Lunes 9 de noviembre de 2026 · 09:00–15:00 y 16:00–18:00 · La Noria (Málaga)',
      },
      {
        tipo: 'subtitulo',
        texto: 'Bloque A · La IA como herramienta profesional',
      },
      {
        tipo: 'texto',
        html: '<p><em>09:00–12:15 · 3 horas</em> · Qué es la IA, cómo darle instrucciones precisas, cómo usarla en las tareas del día a día y cómo proteger los datos.</p>', // PROVISIONAL
      },
      {
        tipo: 'tabla-datos',
        columnas: [
          'Hora',
          'Módulo y dinámicas', // PROVISIONAL
        ],
        ancha: true,
        filas: [
          [
            '09:00',
            'Bienvenida y elige tu área · D0 · ¿Desde dónde partimos con la IA?',
          ],
          [
            '09:20',
            'M1 · Fundamentos de la IA generativa · D1 · La misma pregunta, dos respuestas',
          ],
          [
            '10:00',
            'M2 · El prompt profesional · D2 · Tu primer prompt profesional',
          ],
          [
            '10:45',
            'M3 · Aplicaciones en la atención social y protección de datos · D3 · La mesa de trabajo · D3b · ¿Lo pego o no lo pego?',
          ],
          [
            '11:45',
            'Pausa',
          ],
        ],
      },
      {
        tipo: 'subtitulo',
        texto: 'Bloque B · IA y enfoque de género en la intervención social',
      },
      {
        tipo: 'texto',
        html: '<p><em>12:15–18:00 · 4 h 45 min</em> · Detectar los sesgos de la IA y usarla para hacer CV, entrevistas, actividades y contenidos más justos e igualitarios.</p>', // PROVISIONAL
      },
      {
        tipo: 'tabla-datos',
        columnas: [
          'Hora',
          'Módulo y dinámicas', // PROVISIONAL
        ],
        ancha: true,
        filas: [
          [
            '12:15',
            'M4 · Sesgos de género en la IA · D5 · La caza del sesgo · Cláusula de igualdad',
          ],
          [
            '13:30',
            'M5 · Orientación sociolaboral: el CV · D6 · El CV que cuenta toda la historia',
          ],
          [
            '14:20',
            'M5 · Orientación sociolaboral: la entrevista · D7 · La entrevista ensayada',
          ],
          [
            '15:00',
            'Comida',
          ],
          [
            '16:00',
            'M6 · Coeducación y educación emocional · E1 · ¿Persona o máquina? · D8 · Una actividad, dos edades · D9 · Emociones sin mandatos',
          ],
          [
            '16:55',
            'M7 · Comunicación inclusiva de derechos, prestaciones y normativa · D4 · Explícalo para que lo entienda todo el mundo · D10 · Gafas de género',
          ],
          [
            '17:40',
            'Cierre y evaluación · Lo que te llevas · Me llevo, dejo, cambio · Evaluación con la mano',
          ],
        ],
      },
    ],
  },
];
