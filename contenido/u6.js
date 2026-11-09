// 6. Coeducación y educación emocional
// Generado por montar.py desde guion.json. No editar: cambiar el guion y volver a montar.
// «PROVISIONAL» = texto que no está en el material del cliente: pendiente de su validación.
export const b_u6 = [
  {
    id: 'esencial',
    titulo: 'Lo esencial',
    icono: 'bombilla',
    bloques: [
      {
        tipo: 'entradilla',
        html: 'Unidad 6 · Bloque B · M6 · Diapositivas 38–44. Adaptar actividades y recursos emocionales para la infancia y la adolescencia, sin estereotipos ni riesgo de revictimizar.', // PROVISIONAL
      },
      {
        tipo: 'tarjetas',
        estilo: 'numeradas',
        columnas: 1,
        items: [
          {
            texto: '<b>Cinco filtros antes de usar una actividad:</b> edad y momento evolutivo, coeducación, historia de vida, diversidad y participación.',
          },
          {
            texto: '<b>En un centro de protección,</b> una actividad sobre la familia o los recuerdos puede reabrir heridas: el filtro de historia de vida es responsabilidad profesional.',
          },
          {
            texto: '<b>Mandatos de género sobre las emociones:</b> «los chicos no lloran», «las chicas no se enfadan», «los celos son amor», «cuidar es cosa de chicas».',
          },
          {
            texto: '<b>La IA ayuda a crear</b> cuentos, tarjetas y role-plays. El acompañamiento emocional y el vínculo siempre son humanos.', // PROVISIONAL
          },
        ],
      },
    ],
  },
  {
    id: 'aula-e1',
    titulo: 'En el aula · E1: ¿Persona o máquina?', // PROVISIONAL
    icono: 'personas',
    bloques: [
      {
        tipo: 'texto',
        html: '<p><em>E1 · De pie · 16:00 · Diapositiva 38</em></p>', // PROVISIONAL
      },
      {
        tipo: 'tarjetas',
        estilo: 'lista',
        columnas: 1,
        items: [
          {
            texto: '<strong>Izquierda:</strong> Si crees que el texto lo ha escrito una persona', // PROVISIONAL
          },
          {
            texto: '<strong>Derecha:</strong> Si crees que lo ha escrito la IA', // PROVISIONAL
          },
          {
            texto: '<strong>Y después:</strong> ¿En cuáles había un estereotipo?', // PROVISIONAL
          },
        ],
      },
      {
        tipo: 'ejercicio',
        id: 'aula-e1-ej',
        titulo: 'Lo que hacemos', // PROVISIONAL
        enunciado: '<p>¿Persona o máquina?</p>',
        campos: [
          {
            tipo: 'texto-libre',
            id: 'aula-e1-estereotipos',
            etiqueta: '¿En cuáles había un estereotipo?', // PROVISIONAL
            filas: 3,
          },
        ],
      },
    ],
  },
  {
    id: 'aula-d8',
    titulo: 'En el aula · D8: Una actividad, dos edades', // PROVISIONAL
    icono: 'personas',
    bloques: [
      {
        tipo: 'texto',
        html: '<p><em>D8 · Grupos de 3 · 16:00 · Diapositiva 40</em></p>', // PROVISIONAL
      },
      {
        tipo: 'ejemplo',
        titulo: 'Fragmento del prompt', // PROVISIONAL
        html: '<p>«…para un centro de protección. No pidas hablar de la familia ni de recuerdos personales. Incluye referentes de mujeres en ciencia y oficios y de hombres en cuidados. Que todas y todos puedan elegir cualquier rol.»</p>', // PROVISIONAL
      },
      {
        tipo: 'tarjetas',
        estilo: 'numeradas',
        columnas: 1,
        items: [
          {
            texto: 'Pedid a la IA una dinámica sobre profesiones para niñas y niños de 8 a 11 años, sin más indicaciones.', // PROVISIONAL
          },
          {
            texto: 'Pasadla por los cinco filtros. ¿Qué profesiones asocia a cada sexo? ¿Da por hecho una familia?', // PROVISIONAL
          },
          {
            texto: 'Reescribid el prompt con los filtros y la cláusula de igualdad.', // PROVISIONAL
          },
          {
            texto: 'Adaptadla a adolescentes de 14 a 17 años que preparan su vida adulta.', // PROVISIONAL
          },
        ],
      },
      {
        tipo: 'ejercicio',
        id: 'aula-d8-ej',
        titulo: 'Lo que hacemos', // PROVISIONAL
        enunciado: '<p>Una actividad, dos edades</p>',
        campos: [
          {
            tipo: 'texto-libre',
            id: 'aula-d8-inicial',
            etiqueta: 'La dinámica que propone la IA sin más indicaciones', // PROVISIONAL
            filas: 4,
          },
          {
            tipo: 'opciones-multiples',
            id: 'aula-d8-filtros',
            etiqueta: 'Filtros que falla', // PROVISIONAL
            opciones: [
              {
                letra: 'A',
                texto: 'Edad y momento evolutivo',
              },
              {
                letra: 'B',
                texto: 'Coeducación',
              },
              {
                letra: 'C',
                texto: 'Historia de vida',
              },
              {
                letra: 'D',
                texto: 'Diversidad',
              },
              {
                letra: 'E',
                texto: 'Participación',
              },
            ],
          },
          {
            tipo: 'texto-libre',
            id: 'aula-d8-prompt',
            etiqueta: 'Nuestro prompt reescrito', // PROVISIONAL
            filas: 6,
          },
          {
            tipo: 'texto-libre',
            id: 'aula-d8-1417',
            etiqueta: 'La versión para 14–17 años', // PROVISIONAL
            filas: 4,
          },
        ],
      },
      {
        tipo: 'ir-a',
        texto: 'Ver el modelo resuelto',
        destino: 'u6/resuelto',
        icono: 'llave',
      },
    ],
  },
  {
    id: 'aula-d9',
    titulo: 'En el aula · D9: Emociones sin mandatos', // PROVISIONAL
    icono: 'personas',
    bloques: [
      {
        tipo: 'texto',
        html: '<p><em>D9 · Grupos de 3 · 16:00 · Diapositiva 43</em></p>', // PROVISIONAL
      },
      {
        tipo: 'tarjetas',
        estilo: 'lista',
        columnas: 1,
        items: [
          {
            texto: '<strong>Un cuento:</strong> Un chico que aprende a pedir ayuda cuando está triste (8–11 años)', // PROVISIONAL
          },
          {
            texto: '<strong>Tarjetas:</strong> Diez situaciones para nombrar emociones, con protagonistas diversos', // PROVISIONAL
          },
          {
            texto: '<strong>Un role-play:</strong> Detectar el control en una pareja adolescente por el móvil (14–17)', // PROVISIONAL
          },
        ],
      },
      {
        tipo: 'ejercicio',
        id: 'aula-d9-ej',
        titulo: 'Lo que hacemos', // PROVISIONAL
        enunciado: '<p>Emociones sin mandatos</p>',
        campos: [
          {
            tipo: 'opciones',
            id: 'aula-d9-recurso',
            etiqueta: 'El recurso que hemos elegido', // PROVISIONAL
            opciones: [
              {
                letra: 'A',
                texto: 'Un cuento',
              },
              {
                letra: 'B',
                texto: 'Tarjetas',
              },
              {
                letra: 'C',
                texto: 'Un role-play',
              },
            ],
          },
          {
            tipo: 'texto-libre',
            id: 'aula-d9-texto',
            etiqueta: 'Nuestro recurso', // PROVISIONAL
            filas: 7,
          },
        ],
      },
      {
        tipo: 'checklist',
        id: 'aula-d9-revision',
        etiqueta: 'Revisión antes de usarlo', // PROVISIONAL
        items: [
          '¿Rompe algún mandato de género?',
          '¿Es seguro para su historia de vida?',
          '¿El lenguaje es adecuado a la edad?',
          '¿Lo usaría yo mañana en el centro?', // PROVISIONAL
        ],
      },
      {
        tipo: 'ir-a',
        texto: 'Ver el modelo resuelto',
        destino: 'u6/resuelto',
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
        html: '<b>Adaptar una actividad con los cinco filtros.</b> Una educadora necesita una dinámica sobre las emociones para un grupo de 8 a 11 años de un centro de protección.', // PROVISIONAL
      },
      {
        tipo: 'destacado',
        icono: 'bocadillo',
        variante: 'principal',
        html: '<p><strong>Tú:</strong> Propón una dinámica sobre las emociones para niñas y niños de 8 a 11 años.</p>', // PROVISIONAL
      },
      {
        tipo: 'ejemplo',
        titulo: 'IA',
        html: '<p>«El árbol de mi familia»: cada niño dibuja a su familia y cuenta un recuerdo feliz con ellos.</p><p><em>Falla en historia de vida y usa el masculino genérico.</em></p>',
      },
      {
        tipo: 'destacado',
        icono: 'bocadillo',
        variante: 'principal',
        html: '<p><strong>Tú:</strong> Es para un centro de protección: no pidas hablar de la familia ni de recuerdos personales. Aplica coeducación, diversidad y participación, y añade la cláusula de igualdad.</p>', // PROVISIONAL
      },
      {
        tipo: 'ejemplo',
        titulo: 'IA',
        html: '<p>«El semáforo de las emociones»: cada niña y niño elige una tarjeta con una situación del día a día (perder un partido, que te quiten el turno) y la coloca en verde, ámbar o rojo según cómo se sentiría. Se habla de qué ayuda a calmarse. Nadie tiene que contar nada personal.</p><p><em>Situaciones cotidianas, sin historia personal y sin estereotipos.</em></p>',
      },
      {
        tipo: 'destacado',
        icono: 'bocadillo',
        variante: 'principal',
        html: '<p><strong>Tú (revisión):</strong> ¿Rompe algún mandato de género? ¿Es seguro para su historia de vida? ¿El lenguaje es adecuado a la edad? ¿Lo usaría mañana en el centro?</p><p><em>Las cuatro preguntas de la D9.</em></p>', // PROVISIONAL (en parte)
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
        texto: '«¿Qué quiero ser?»',
      },
      {
        tipo: 'texto',
        html: '<p><em>Caso práctico resuelto · D8 · Centros de protección · Diapositiva 41</em></p><p>Actividad sobre profesiones propuesta por la IA sin indicaciones.</p>',
      },
      {
        tipo: 'ejemplo',
        titulo: '«¿Qué quiero ser?»',
        html: '<p><strong>Propuesta inicial:</strong> «Cada niño dibuja a su papá o su mamá en el trabajo. Los niños pueden ser bomberos o policías; las niñas, enfermeras o maestras.»</p><p><em>Falla en historia de vida y en coeducación.</em></p><p><strong>Versión 8–11 años:</strong> Ruleta de profesiones: cada niña y niño saca una tarjeta (bombera, enfermero, programadora, cocinero), la representa con mímica y el grupo adivina. Cierre: ¿hay trabajos de chicos y de chicas?</p><p><strong>Versión 14–17 años:</strong> Mi plan de futuro: investigan con el móvil dos profesiones, la formación que piden y una referente real de cada una. Lo presentan en dos minutos al grupo.</p>', // PROVISIONAL (en parte)
      },
      {
        tipo: 'destacado',
        icono: 'llave',
        html: '<p><strong>Clave:</strong> Las versiones corregidas no mencionan a la familia, rompen estereotipos y dan protagonismo a niñas y niños.</p>',
      },
      {
        tipo: 'subtitulo',
        texto: 'Tres tarjetas de emociones',
      },
      {
        tipo: 'texto',
        html: '<p><em>Caso práctico resuelto · D9 · Emociones sin mandatos · Diapositiva 44</em></p><p>Tarjetas breves, con nombres diversos y una pregunta abierta.</p>',
      },
      {
        tipo: 'ejemplo',
        titulo: 'Tres tarjetas de emociones',
        html: '<p><strong>Tristeza · 8–11:</strong> Marcos ha perdido el partido y tiene ganas de llorar. ¿Qué siente? ¿Qué le dirías?</p><p><em>Rompe «los chicos no lloran».</em></p><p><strong>Rabia · 8–11:</strong> A Lucía le han quitado su turno en el juego y está muy enfadada. ¿Cómo puede decirlo sin hacer daño?</p><p><em>Rompe «las chicas no se enfadan».</em></p><p><strong>Control · 14–17:</strong> Su pareja le pide la contraseña del móvil «para estar tranquilo». ¿Qué señal ves? ¿Qué harías?</p><p><em>Rompe «los celos son amor». Preventiva y sin violencia explícita.</em></p>', // PROVISIONAL (en parte)
      },
      {
        tipo: 'destacado',
        icono: 'llave',
        html: '<p><strong>Clave:</strong> La persona educadora debe tener previsto cómo actuar si alguna o alguno se reconoce en la situación.</p>',
      },
      {
        tipo: 'ir-a',
        texto: 'Volver a tu misión', // PROVISIONAL
        destino: 'u6/mision',
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
                  texto: 'Aplica los cinco filtros antes de usar cualquier actividad.',
                },
                {
                  texto: 'Evita las actividades sobre la familia o los recuerdos en centros de protección.',
                },
                {
                  texto: 'Usa nombres diversos y rompe los mandatos de género en los ejemplos.',
                },
                {
                  texto: 'Haz los role-plays preventivos y sin violencia explícita.',
                },
                {
                  texto: 'Ten previsto cómo actuar si alguien se reconoce en una situación.',
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
                  texto: 'Usar sin revisar una actividad «estándar» de internet o de la IA.',
                },
                {
                  texto: 'Repartir juegos o profesiones por sexo.',
                },
                {
                  texto: 'Usar la IA como «terapeuta» con menores.',
                },
                {
                  texto: 'Introducir datos de menores en la herramienta.',
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
    titulo: 'Practica: ¿Pasa los cinco filtros?', // PROVISIONAL
    icono: 'puzle',
    bloques: [
      {
        tipo: 'ejercicio',
        id: 'u6-practica',
        titulo: '¿Pasa los cinco filtros?',
        enunciado: '<p>Edad, coeducación, historia de vida, diversidad y participación. ¿Se puede usar o hay que adaptarla?</p>',
        campos: [
          {
            tipo: 'clasificar',
            id: 'u6-practica-clasificar',
            etiqueta: '¿Pasa los cinco filtros?',
            categorias: [
              {
                id: 'c0',
                texto: 'Se puede usar',
              },
              {
                id: 'c1',
                texto: 'Hay que adaptarla',
              },
            ],
            items: [
              {
                texto: '«Dibuja a tu familia y cuenta tu mejor recuerdo», en un centro de protección.',
                correcta: 'c1',
                explicacion: 'Falla el filtro de historia de vida: puede revictimizar.',
              },
              {
                texto: '«Las niñas preparan la merienda y los niños montan el escenario.»',
                correcta: 'c1',
                explicacion: 'Falla el filtro de coeducación: reparte tareas por sexo.',
              },
              {
                texto: '«El semáforo de las emociones» con situaciones del día a día.',
                correcta: 'c0',
                explicacion: 'Situaciones cotidianas, sin historia personal y sin estereotipos.',
              },
              {
                texto: 'Juego de profesiones con tarjetas: bombera, enfermero, ingeniera, cuidador.',
                correcta: 'c0',
                explicacion: 'Rompe los estereotipos de las profesiones.',
              },
              {
                texto: 'Role-play «Los chicos no lloran: aprende a ser fuerte».',
                correcta: 'c1',
                explicacion: 'Refuerza un mandato de género sobre las emociones.',
              },
              {
                texto: 'Debate en el que solo habla quien levanta antes la mano.',
                correcta: 'c1',
                explicacion: 'Falla el filtro de participación: deja fuera a quien es más tímida o tímido.',
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
        id: 'u6-mision',
        titulo: 'Tu misión · en tu puesto',
        enunciado: '<p>Toma la actividad D8 o el recurso D9 de tu área, pídelo a la IA sin indicaciones, pásalo por los cinco filtros y reescribe el prompt.</p>',
        bloques: [
          {
            tipo: 'tarjetas',
            estilo: 'numeradas',
            columnas: 1,
            items: [
              {
                texto: 'Toma la actividad D8 o el recurso D9 de tu área.',
              },
              {
                texto: 'Pídelo a la IA sin indicaciones.',
              },
              {
                texto: 'Pásalo por los cinco filtros y anota qué falla.',
              },
              {
                texto: 'Reescribe el prompt con los filtros y la cláusula de igualdad.',
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
            id: 'u6-mision-actividad',
            etiqueta: 'La actividad D8 o el recurso D9 que he elegido', // PROVISIONAL
            filas: 2,
          },
          {
            tipo: 'opciones-multiples',
            id: 'u6-mision-filtros',
            etiqueta: 'Filtros que falla la primera versión de la IA', // PROVISIONAL
            opciones: [
              {
                letra: 'A',
                texto: 'Edad y momento evolutivo',
              },
              {
                letra: 'B',
                texto: 'Coeducación',
              },
              {
                letra: 'C',
                texto: 'Historia de vida',
              },
              {
                letra: 'D',
                texto: 'Diversidad',
              },
              {
                letra: 'E',
                texto: 'Participación',
              },
            ],
          },
          {
            tipo: 'texto-libre',
            id: 'u6-mision-prompt',
            etiqueta: 'Mi prompt reescrito con los filtros y la cláusula de igualdad', // PROVISIONAL
            filas: 7,
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
              destino: 'u6/resuelto',
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
            titulo: 'Prompt 10: Actividad para infancia y adolescencia', // PROVISIONAL
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Diseña una actividad sobre [tema] para niñas y niños de [edad] años de un centro de protección. No pidas hablar de la familia ni de recuerdos personales. Incluye referentes de mujeres en ciencia y oficios y de hombres en cuidados. Que todas y todos puedan elegir cualquier rol. Adapta el lenguaje y la duración a la edad. [Añadir cláusula de igualdad].</p>',
              },
            ],
          },
          {
            titulo: 'Prompt 11: Recurso de educación emocional', // PROVISIONAL
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Crea [un cuento / diez tarjetas de situaciones / un role-play preventivo] para [edad] años sobre [emoción o situación], con protagonistas diversos y sin mandatos de género. Sin violencia explícita y sin preguntas sobre la historia personal. [Añadir cláusula de igualdad].</p>',
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
        id: 'u6-test-1',
        titulo: 'Pregunta 1',
        enunciado: '<p>¿Cuáles son los cinco filtros para adaptar una actividad?</p>',
        campos: [
          {
            tipo: 'opciones',
            id: 'u6-test-1-r',
            etiqueta: 'Mi respuesta',
            opciones: [
              {
                letra: 'a',
                texto: 'Edad, coeducación, historia de vida, diversidad y participación.',
              },
              {
                letra: 'b',
                texto: 'Edad, sexo, curso, nota y asistencia.',
              },
              {
                letra: 'c',
                texto: 'Tiempo, material, espacio, grupo y coste.',
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
            html: '<p><strong>Solución: Edad, coeducación, historia de vida, diversidad y participación.</strong> Los cinco filtros de la diapositiva 39.</p>', // PROVISIONAL
          },
        ],
      },
      {
        tipo: 'ejercicio',
        id: 'u6-test-2',
        titulo: 'Pregunta 2',
        enunciado: '<p>¿Por qué «dibuja a tu familia» no es adecuada en un centro de protección?</p>',
        campos: [
          {
            tipo: 'opciones',
            id: 'u6-test-2-r',
            etiqueta: 'Mi respuesta',
            opciones: [
              {
                letra: 'a',
                texto: 'Porque es demasiado infantil.',
              },
              {
                letra: 'b',
                texto: 'Porque puede revictimizar al reabrir la historia personal.',
              },
              {
                letra: 'c',
                texto: 'Porque necesita mucho material.',
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
            html: '<p><strong>Solución: Porque puede revictimizar al reabrir la historia personal.</strong> El filtro de historia de vida lo aplica la profesional: la IA no lo hace sola.</p>', // PROVISIONAL
          },
        ],
      },
      {
        tipo: 'ejercicio',
        id: 'u6-test-3',
        titulo: 'Pregunta 3',
        enunciado: '<p>¿Puede la IA hacer de terapeuta con una niña o un niño?</p>',
        campos: [
          {
            tipo: 'opciones',
            id: 'u6-test-3-r',
            etiqueta: 'Mi respuesta',
            opciones: [
              {
                letra: 'a',
                texto: 'Sí, si la herramienta es buena.',
              },
              {
                letra: 'b',
                texto: 'No: las emociones se acompañan en persona y nunca se introducen datos de menores.',
              },
              {
                letra: 'c',
                texto: 'Solo con adolescentes.',
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
            html: '<p><strong>Solución: No: las emociones se acompañan en persona y nunca se introducen datos de menores.</strong> La IA sirve para preparar materiales, no para acompañar.</p>', // PROVISIONAL
          },
        ],
      },
    ],
  },
];
