// 3. Aplicaciones en la atención social y protección de datos
// Generado por montar.py desde guion.json. No editar: cambiar el guion y volver a montar.
// «PROVISIONAL» = texto que no está en el material del cliente: pendiente de su validación.
export const b_u3 = [
  {
    id: 'esencial',
    titulo: 'Lo esencial',
    icono: 'bombilla',
    bloques: [
      {
        tipo: 'entradilla',
        html: 'Unidad 3 · Bloque A · M3 · Diapositivas 16–23. Aplicar la IA a las tareas del día a día sin poner en riesgo los datos de las personas atendidas.', // PROVISIONAL
      },
      {
        tipo: 'tarjetas',
        estilo: 'numeradas',
        columnas: 1,
        items: [
          {
            texto: '<b>Doce usos:</b> informes, actas, comunicaciones, resúmenes, traducción, lectura fácil, planificación, dictado, hojas de cálculo, presentaciones, imágenes e ideas.',
          },
          {
            texto: '<b>Semáforo de datos.</b> <span class=\'sem v\'>Verde</span> información pública, normativa, plantillas. <span class=\'sem a\'>Ámbar</span> solo anonimizado. <span class=\'sem r\'>Rojo</span> nunca: nombre, DNI/NIE, dirección, teléfono, salud, situación administrativa, datos de menores, violencia de género y fotos de personas usuarias.', // PROVISIONAL
          },
          {
            texto: '<b>Anonimizar en tres pasos:</b> quitar identificadores, generalizar edades, lugares y diagnósticos, y comprobar que nadie podría reconocer a la persona.',
          },
          {
            texto: '<b>La IA tiende a añadir valoraciones</b> que nadie ha hecho: en un informe social, la IA ordena y la profesional valora.',
          },
        ],
      },
    ],
  },
  {
    id: 'aula-d3',
    titulo: 'En el aula · D3: La mesa de trabajo', // PROVISIONAL
    icono: 'personas',
    bloques: [
      {
        tipo: 'texto',
        html: '<p><em>D3 · Parejas · 10:45 · Diapositiva 20</em></p>', // PROVISIONAL
      },
      {
        tipo: 'tabla-datos',
        ancha: true,
        columnas: [
          'Perfil',
          'Reto (con un caso ficticio)', // PROVISIONAL
        ],
        filas: [
          [
            'Inserción',
            'Resumir una convocatoria de curso y crear el mensaje para el grupo del itinerario', // PROVISIONAL
          ],
          [
            'Atención social',
            'Convertir notas anonimizadas de una visita en un informe de seguimiento', // PROVISIONAL
          ],
          [
            'Centros',
            'Pasar las notas de una reunión de equipo a acta con tareas y responsables', // PROVISIONAL
          ],
          [
            'Cualquier perfil', // PROVISIONAL
            'Traducir un recordatorio de cita y pasarlo a lectura fácil', // PROVISIONAL
          ],
        ],
      },
      {
        tipo: 'ejercicio',
        id: 'aula-d3-ej',
        titulo: 'Lo que hacemos', // PROVISIONAL
        enunciado: '<p>La mesa de trabajo</p>',
        campos: [
          {
            tipo: 'opciones',
            id: 'aula-d3-reto',
            etiqueta: 'El reto que hemos elegido', // PROVISIONAL
            opciones: [
              {
                letra: 'A',
                texto: 'Resumir una convocatoria de curso y crear el mensaje para el grupo del itinerario', // PROVISIONAL
              },
              {
                letra: 'B',
                texto: 'Convertir notas anonimizadas de una visita en un informe de seguimiento', // PROVISIONAL
              },
              {
                letra: 'C',
                texto: 'Pasar las notas de una reunión de equipo a acta con tareas y responsables', // PROVISIONAL
              },
              {
                letra: 'D',
                texto: 'Traducir un recordatorio de cita y pasarlo a lectura fácil', // PROVISIONAL
              },
            ],
          },
          {
            tipo: 'texto-libre',
            id: 'aula-d3-prompt',
            etiqueta: 'El prompt que hemos usado', // PROVISIONAL
            filas: 4,
          },
          {
            tipo: 'texto-libre',
            id: 'aula-d3-resultado',
            etiqueta: 'El resultado, ya revisado', // PROVISIONAL
            filas: 7,
          },
          {
            tipo: 'texto-libre',
            id: 'aula-d3-tiempo',
            etiqueta: 'Cuánto tiempo liberaría a la semana y a qué lo dedicaría con las personas', // PROVISIONAL
            filas: 2,
          },
        ],
      },
      {
        tipo: 'checklist',
        id: 'aula-d3-revision',
        etiqueta: 'Antes de darlo por bueno', // PROVISIONAL
        items: [
          '¿Es correcto y completo?', // PROVISIONAL
          '¿Sin datos personales?', // PROVISIONAL
          '¿Tono claro y respetuoso?', // PROVISIONAL
          '¿Lo firmarías tal cual?', // PROVISIONAL
        ],
      },
      {
        tipo: 'ir-a',
        texto: 'Ver el modelo resuelto',
        destino: 'u3/resuelto',
        icono: 'llave',
      },
    ],
  },
  {
    id: 'aula-d3b',
    titulo: 'En el aula · D3b: ¿Lo pego o no lo pego?', // PROVISIONAL
    icono: 'personas',
    bloques: [
      {
        tipo: 'texto',
        html: '<p><em>D3b · Gran grupo · 10:45 · Diapositiva 22</em></p>', // PROVISIONAL
      },
      {
        tipo: 'entradilla',
        html: 'Para cada fragmento: ¿verde, ámbar o rojo?', // PROVISIONAL
      },
      {
        tipo: 'ejercicio',
        id: 'aula-d3b-ej',
        titulo: 'Lo que hacemos', // PROVISIONAL
        enunciado: '<p>¿Lo pego o no lo pego?</p>',
        campos: [
          {
            tipo: 'tabla',
            id: 'aula-d3b-votos',
            columnas: [
              'Fragmento',
              'Mi voto: verde, ámbar o rojo', // PROVISIONAL
            ],
            filas: [
              {
                id: 'aula-d3b-1',
                texto: '1 · Acción social. «Familia de cuatro miembros, con deuda de alquiler, pide orientación sobre ayudas»', // PROVISIONAL
              },
              {
                id: 'aula-d3b-2',
                texto: '2 · Igualdad. «Informe de M. L. G., víctima de violencia de género, con orden de protección»', // PROVISIONAL
              },
              {
                id: 'aula-d3b-3',
                texto: '3 · Migrantes. «Hombre de 28 años, sin permiso, pregunta por el arraigo; vive en [calle], tel. […]»', // PROVISIONAL
              },
              {
                id: 'aula-d3b-4',
                texto: '4 · Empleo. «Notas de entrevista: experiencia en hostelería, carné de manipulación de alimentos»', // PROVISIONAL
              },
              {
                id: 'aula-d3b-5',
                texto: '5 · Economía social. «Borrador del plan de negocio de una cooperativa de limpieza ecológica»', // PROVISIONAL
              },
              {
                id: 'aula-d3b-6',
                texto: '6 · Ciudadanía Global. «Guion del taller de igualdad para 3.º de ESO»', // PROVISIONAL
              },
              {
                id: 'aula-d3b-7',
                texto: '7 · Cooperación. «Fotos de las mujeres de la cooperativa socia, con sus nombres»', // PROVISIONAL
              },
              {
                id: 'aula-d3b-8',
                texto: '8 · Menores. «El chico de 15 años que llegó la semana pasada tiene problemas de sueño y conducta»', // PROVISIONAL
              },
            ],
          },
        ],
      },
      {
        tipo: 'ir-a',
        texto: 'Ver la solución', // PROVISIONAL
        destino: 'u3/resuelto',
        icono: 'llave',
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
        html: '<b>Anonimizar y pedir un acta.</b> Una educadora de un centro de protección quiere convertir sus notas de una reunión de equipo en un acta.', // PROVISIONAL
      },
      {
        tipo: 'destacado',
        icono: 'documento',
        variante: 'secundario',
        html: '<p><strong>Notas originales:</strong> «Reunión 3/11. Laura, Pedro y Ana. Y. (15 años) sigue faltando a clase; hablar con su tutora del IES Martiricos. M. (12) mejora con la logopeda.»</p><p><em>Contienen nombres, edades exactas, centro educativo y datos de salud: rojo.</em></p>', // PROVISIONAL (en parte)
      },
      {
        tipo: 'destacado',
        icono: 'documento',
        variante: 'secundario',
        html: '<p><strong>Notas anonimizadas:</strong> «Reunión de equipo. Tres profesionales. Un adolescente sigue faltando a clase; coordinar con su centro educativo. Una niña mejora con el apoyo especializado.»</p><p><em>Se quitan nombres y centro, y se generalizan edades y apoyos: ámbar, ya se puede usar.</em></p>', // PROVISIONAL (en parte)
      },
      {
        tipo: 'destacado',
        icono: 'bocadillo',
        variante: 'principal',
        html: '<p><strong>Tú:</strong> Convierte estas notas en un acta con tres apartados: asistentes, temas tratados y acuerdos con responsable y fecha. No añadas nada que no esté en las notas. Notas: [notas anonimizadas].</p>', // PROVISIONAL
      },
      {
        tipo: 'ejemplo',
        titulo: 'IA',
        html: '<p>Asistentes: tres profesionales del equipo. Temas: absentismo de un adolescente; evolución positiva de una niña con apoyo especializado. Acuerdos: coordinar con el centro educativo (responsable: [por asignar], fecha: [por asignar]).</p><p><em>La IA deja los responsables por asignar en lugar de inventarlos.</em></p>',
      },
      {
        tipo: 'destacado',
        icono: 'bocadillo',
        variante: 'principal',
        html: '<p><strong>Tú (revisión):</strong> Se completan los responsables y la fecha fuera de la IA, en el documento interno.</p><p><em>Los datos reales se añaden después, nunca en la herramienta.</em></p>', // PROVISIONAL (en parte)
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
        texto: 'De notas sueltas a informe de seguimiento',
      },
      {
        tipo: 'texto',
        html: '<p><em>Caso práctico resuelto · D3 · Atención social · Diapositiva 21</em></p><p>Notas anonimizadas: «visita martes · familia: adulta y 2 menores (7 y 10) · 2 meses de retraso en el alquiler · el mayor falta al colegio · interés en curso de cocina · próxima cita en 15 días».</p>',
      },
      {
        tipo: 'ejemplo',
        titulo: 'De notas sueltas a informe de seguimiento',
        html: '<p><strong>Prompt:</strong> «Ordena estas notas en un informe de seguimiento con 4 apartados. No añadas valoraciones que no estén en las notas.»</p><p><strong>Informe revisado:</strong> 1. Situación: unidad familiar con dos menores en edad escolar.<br>2. Áreas: vivienda (dos mensualidades pendientes), educación (absentismo del hijo mayor), empleo (interés formativo en cocina).<br>3. Acuerdos: orientar sobre ayudas al alquiler, coordinar con el centro educativo, informar de cursos.<br>4. Próxima cita: en 15 días.</p><p><strong>Corrección hecha:</strong> La IA añadió «situación de riesgo grave», que no estaba en las notas.</p><p><em>Se elimina: la IA no valora, la profesional sí.</em></p>', // PROVISIONAL (en parte)
      },
      {
        tipo: 'destacado',
        icono: 'llave',
        html: '<p><strong>Clave:</strong> La IA tiende a completar con valoraciones o diagnósticos que nadie ha hecho.</p>',
      },
      {
        tipo: 'subtitulo',
        texto: '¿Lo pego o no lo pego?',
      },
      {
        tipo: 'texto',
        html: '<p><em>Caso práctico resuelto · D3b · Ocho fragmentos · Diapositiva 22</em></p><p>Semáforo aplicado a ocho fragmentos de las áreas de Prodiversa.</p>',
      },
      {
        tipo: 'ejemplo',
        titulo: '¿Lo pego o no lo pego?',
        html: '<p><strong>1 · Acción social:</strong> «Familia de cuatro miembros, con deuda de alquiler, pide orientación sobre ayudas»</p><p><em><span class=\'sem a\'>Ámbar</span> ya está anonimizado, se puede usar.</em></p><p><strong>2 · Igualdad:</strong> «Informe de M. L. G., víctima de violencia de género, con orden de protección»</p><p><em><span class=\'sem r\'>Rojo</span> nunca.</em></p><p><strong>3 · Migrantes:</strong> «Hombre de 28 años, sin permiso, pregunta por el arraigo; vive en [calle], tel. […]»</p><p><em><span class=\'sem r\'>Rojo</span> ámbar si se quitan dirección, teléfono y situación administrativa.</em></p><p><strong>4 · Empleo:</strong> «Notas de entrevista: experiencia en hostelería, carné de manipulación de alimentos»</p><p><em><span class=\'sem a\'>Ámbar</span></em></p><p><strong>5 · Economía social:</strong> «Borrador del plan de negocio de una cooperativa de limpieza ecológica»</p><p><em><span class=\'sem v\'>Verde</span></em></p><p><strong>6 · Ciudadanía Global:</strong> «Guion del taller de igualdad para 3.º de ESO»</p><p><em><span class=\'sem v\'>Verde</span></em></p><p><strong>7 · Cooperación:</strong> «Fotos de las mujeres de la cooperativa socia, con sus nombres»</p><p><em><span class=\'sem r\'>Rojo</span></em></p><p><strong>8 · Menores:</strong> «El chico de 15 años que llegó la semana pasada tiene problemas de sueño y conducta»</p><p><em><span class=\'sem r\'>Rojo</span></em></p>', // PROVISIONAL (en parte)
      },
      {
        tipo: 'destacado',
        icono: 'llave',
        html: '<p><strong>Clave:</strong> Proteger los datos es proteger a las personas que atendemos.</p>',
      },
      {
        tipo: 'ir-a',
        texto: 'Volver a tu misión', // PROVISIONAL
        destino: 'u3/mision',
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
                  texto: 'Aplica el semáforo antes de pegar cualquier texto.',
                },
                {
                  texto: 'Anonimiza en tres pasos: quitar, generalizar y comprobar.',
                },
                {
                  texto: 'Pide a la IA que no añada nada que no esté en tus notas.',
                },
                {
                  texto: 'Completa los datos reales después, en tu documento interno.',
                },
                {
                  texto: 'Haz revisar las traducciones por alguien que hable el idioma.',
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
                  texto: 'Pegar un informe entero con nombres, DNI o diagnósticos.',
                },
                {
                  texto: 'Creer que quitar el nombre basta: la calle o el número de hijas e hijos también identifican.',
                },
                {
                  texto: 'Dejar que la IA añada valoraciones como «riesgo grave».',
                },
                {
                  texto: 'Dictar notas de una visita con datos identificativos.',
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
    titulo: 'Practica: El semáforo de datos', // PROVISIONAL
    icono: 'puzle',
    bloques: [
      {
        tipo: 'ejercicio',
        id: 'u3-practica',
        titulo: 'El semáforo de datos',
        enunciado: '<p>¿De qué color es cada información antes de pegarla en una herramienta de IA?</p>',
        campos: [
          {
            tipo: 'clasificar',
            id: 'u3-practica-clasificar',
            etiqueta: 'El semáforo de datos',
            categorias: [
              {
                id: 'c0',
                texto: 'Verde',
              },
              {
                id: 'c1',
                texto: 'Ámbar',
              },
              {
                id: 'c2',
                texto: 'Rojo',
              },
            ],
            items: [
              {
                texto: 'El texto del BOE de una ayuda.',
                correcta: 'c0',
                explicacion: 'Información pública: se puede usar.',
              },
              {
                texto: 'Una plantilla de acta vacía.',
                correcta: 'c0',
                explicacion: 'No contiene datos de ninguna persona.',
              },
              {
                texto: '«Mujer de unos 40 años, con dos menores a cargo, busca empleo en hostelería.»',
                correcta: 'c1',
                explicacion: 'Está anonimizado: sin nombre, sin lugar y con datos generalizados.',
              },
              {
                texto: 'Las notas de una visita con el nombre y la dirección de la familia.',
                correcta: 'c2',
                explicacion: 'Identifica a la familia. Hay que anonimizar antes.',
              },
              {
                texto: 'La situación administrativa de una persona migrante con su NIE.',
                correcta: 'c2',
                explicacion: 'Dato especialmente protegido y un número identificativo: nunca.',
              },
              {
                texto: 'Una foto de un taller en la que se reconoce a las personas usuarias.',
                correcta: 'c2',
                explicacion: 'La imagen identifica a las personas: nunca.',
              },
              {
                texto: 'El guion de un taller de igualdad para 3.º de ESO.',
                correcta: 'c0',
                explicacion: 'Material didáctico sin datos personales.',
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
        id: 'u3-mision',
        titulo: 'Tu misión · en tu puesto',
        enunciado: '<p>Escribe unas notas ficticias de tu área, anonimízalas con los tres pasos y pide a la IA un informe o un acta. Marca en el resultado lo que la IA haya añadido por su cuenta.</p>',
        bloques: [
          {
            tipo: 'tarjetas',
            estilo: 'numeradas',
            columnas: 1,
            items: [
              {
                texto: 'Escribe unas notas ficticias de tu área.',
              },
              {
                texto: 'Anonimízalas en tres pasos: quitar, generalizar y comprobar.',
              },
              {
                texto: 'Pide a la IA un informe o un acta sin añadir nada que no esté en las notas.',
              },
              {
                texto: 'Subraya lo que la IA haya añadido por su cuenta y bórralo.',
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
            id: 'u3-mision-notas',
            etiqueta: 'Mis notas ficticias, ya anonimizadas', // PROVISIONAL
            filas: 5,
          },
          {
            tipo: 'texto-libre',
            id: 'u3-mision-prompt',
            etiqueta: 'El prompt que he usado', // PROVISIONAL
            filas: 4,
          },
          {
            tipo: 'texto-libre',
            id: 'u3-mision-resultado',
            etiqueta: 'El informe o el acta que he dado por bueno', // PROVISIONAL
            filas: 7,
          },
          {
            tipo: 'texto-libre',
            id: 'u3-mision-anadido',
            etiqueta: 'Lo que la IA añadió por su cuenta (y he borrado)', // PROVISIONAL
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
              destino: 'u3/resuelto',
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
            titulo: 'Prompt 5: Informe de seguimiento', // PROVISIONAL
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Ordena estas notas anonimizadas en un informe de seguimiento con cuatro apartados: situación, áreas, acuerdos y próxima cita. No añadas valoraciones que no estén en las notas. Notas: [pegar notas sin datos identificativos].</p>',
              },
            ],
          },
          {
            titulo: 'Prompt 6: Traducción y lectura fácil', // PROVISIONAL
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Traduce este recordatorio de cita al [idioma] y después escríbelo en lectura fácil en español: frases cortas, una idea por frase, sin tecnicismos. No cambies la fecha, la hora ni el lugar. Texto: [pegar texto].</p>',
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
        id: 'u3-test-1',
        titulo: 'Pregunta 1',
        enunciado: '<p>¿De qué color son «las notas de una reunión de equipo con nombres de menores»?</p>',
        campos: [
          {
            tipo: 'opciones',
            id: 'u3-test-1-r',
            etiqueta: 'Mi respuesta',
            opciones: [
              {
                letra: 'a',
                texto: 'Verde',
              },
              {
                letra: 'b',
                texto: 'Ámbar',
              },
              {
                letra: 'c',
                texto: 'Rojo',
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
            html: '<p><strong>Solución: Rojo</strong> Rojo. Solo se podrían usar anonimizadas, y entonces pasarían a ámbar.</p>', // PROVISIONAL
          },
        ],
      },
      {
        tipo: 'ejercicio',
        id: 'u3-test-2',
        titulo: 'Pregunta 2',
        enunciado: '<p>¿Basta con quitar el nombre para anonimizar?</p>',
        campos: [
          {
            tipo: 'opciones',
            id: 'u3-test-2-r',
            etiqueta: 'Mi respuesta',
            opciones: [
              {
                letra: 'a',
                texto: 'Sí, sin nombre ya es anónimo.',
              },
              {
                letra: 'b',
                texto: 'No: hay que generalizar edades, lugares y diagnósticos y comprobar que nadie reconocería a la persona.',
              },
              {
                letra: 'c',
                texto: 'Solo si también se quitan los apellidos.',
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
            html: '<p><strong>Solución: No: hay que generalizar edades, lugares y diagnósticos y comprobar que nadie reconocería a la persona.</strong> Anonimizar tiene tres pasos: quitar, generalizar y comprobar.</p>', // PROVISIONAL
          },
        ],
      },
      {
        tipo: 'ejercicio',
        id: 'u3-test-3',
        titulo: 'Pregunta 3',
        enunciado: '<p>La IA escribe «riesgo grave» en un informe y tú no lo habías valorado así. ¿Qué haces?</p>',
        campos: [
          {
            tipo: 'opciones',
            id: 'u3-test-3-r',
            etiqueta: 'Mi respuesta',
            opciones: [
              {
                letra: 'a',
                texto: 'Lo dejo, porque parece razonable.',
              },
              {
                letra: 'b',
                texto: 'Lo borro: la IA no valora; la valoración es profesional.',
              },
              {
                letra: 'c',
                texto: 'Le pido que lo justifique y lo dejo.',
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
            html: '<p><strong>Solución: Lo borro: la IA no valora; la valoración es profesional.</strong> La IA tiende a completar con valoraciones que nadie ha hecho.</p>', // PROVISIONAL
          },
        ],
      },
    ],
  },
];
