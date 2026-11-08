// Herramientas
// Generado por montar.py desde guion.json. No editar: cambiar el guion y volver a montar.
// «PROVISIONAL» = texto que no está en el material del cliente: pendiente de su validación.
export const b_herramientas = [
  {
    id: 'formula-semaforo',
    titulo: 'Fórmula del prompt y semáforo de datos', // PROVISIONAL
    icono: 'llave',
    bloques: [
      {
        tipo: 'subtitulo',
        texto: 'Fórmula del prompt',
      },
      {
        tipo: 'tarjetas',
        estilo: 'compactas',
        columnas: 1,
        items: [
          {
            texto: '<strong>R · Rol:</strong> «Actúa como profesional de la inserción sociolaboral»',
          },
          {
            texto: '<strong>C · Contexto:</strong> para quién, en qué situación y con qué fin',
          },
          {
            texto: '<strong>T · Tarea:</strong> qué tiene que hacer, con un verbo claro',
          },
          {
            texto: '<strong>F · Formato:</strong> extensión, estructura y tono',
          },
          {
            texto: '<strong>L · Límites:</strong> qué evitar: tecnicismos, datos inventados…',
          },
        ],
      },
      {
        tipo: 'subtitulo',
        texto: 'Semáforo de datos',
      },
      {
        tipo: 'tarjetas',
        estilo: 'lista',
        columnas: 1,
        items: [
          {
            texto: '<strong>Verde · Sí:</strong> Información general, normativa, plantillas y materiales de talleres.',
          },
          {
            texto: '<strong>Ámbar · Solo anonimizado:</strong> Casos para pedir orientación, informes sin datos identificativos y notas de reuniones.',
          },
          {
            texto: '<strong>Rojo · Nunca:</strong> Nombre, DNI o NIE, dirección, teléfono, salud, situación administrativa, datos de menores, violencia de género y fotos de personas usuarias.',
          },
        ],
      },
    ],
  },
  {
    id: 'clausula',
    titulo: 'Cláusula de igualdad',
    icono: 'balanza',
    bloques: [
      {
        tipo: 'destacado',
        icono: 'balanza',
        grande: true,
        html: '<p>Usa un lenguaje no sexista e inclusivo, claro y accesible; evita las barras, las arrobas y la «x». Visibiliza a las mujeres y su aportación, con referentes y ejemplos diversos. Evita estereotipos y cualquier discriminación por sexo, origen racial o étnico, edad, discapacidad, religión, orientación o identidad sexual, expresión de género, situación socioeconómica o lengua, y ten en cuenta que estas desigualdades se suman. No des por hecho que los cuidados corresponden a las mujeres ni que el empleo y la toma de decisiones corresponden a los hombres. Si el tema es la violencia de género, nómbrala así, sitúa la responsabilidad en el agresor y nunca culpabilices a la víctima. Muestra a las personas con dignidad y como protagonistas de su vida, sin revictimizar. Si ves un sesgo en lo que te pido, avísame.</p>',
      },
      {
        tipo: 'texto',
        html: '<p><em>Base: LO 3/2007, arts. 14.6, 14.11 y 28.4 · Ley 15/2022, arts. 2 y 23 · Ley 12/2007 de Andalucía, art. 9.</em></p>',
      },
    ],
  },
  {
    id: 'lista-verificacion',
    titulo: 'Lista de verificación de género',
    icono: 'check',
    bloques: [
      {
        tipo: 'checklist',
        id: 'lista-verificacion',
        etiqueta: 'Marca cada comprobación antes de usar un contenido hecho con IA.',
        items: [
          'Nombra a todas las personas, sin masculino genérico',
          'Sin barras, arrobas ni «x»: legible y accesible',
          'Roles no estereotipados en textos e imágenes',
          'Diversidad de origen, edad, discapacidad, orientación e identidad sexual',
          'Referentes de mujeres en el ámbito tratado',
          'No da por hecho quién cuida, trabaja o decide',
          'Tiene en cuenta la conciliación y la brecha digital',
          'No revictimiza ni muestra a las personas como pasivas',
          'Datos verificados en la fuente oficial',
          'Ningún dato personal introducido en la IA',
        ],
      },
    ],
  },
  {
    id: 'lenguaje',
    titulo: 'Lenguaje inclusivo: qué evitar y qué usar',
    icono: 'bocadillo',
    bloques: [
      {
        tipo: 'tabla-datos',
        ancha: true,
        columnas: [
          'Recurso',
          'Evitar',
          'Preferir',
        ],
        filas: [
          [
            'Genéricos reales',
            'los usuarios, los alumnos',
            'las personas usuarias, el alumnado',
          ],
          [
            'Colectivos',
            'los trabajadores, los vecinos',
            'la plantilla, el vecindario',
          ],
          [
            'Reformular',
            'Bienvenidos todos',
            'Os damos la bienvenida',
          ],
          [
            'Profesiones en femenino',
            'la médico, la técnico',
            'la médica, la técnica',
          ],
          [
            'Desdoblar con medida',
            'alumn@s, todxs, trabajadores/as',
            '«mujeres y hombres», sin repetirlo en cada frase',
          ],
          [
            'Personas con discapacidad',
            'discapacitados, minusválidos, disminuidos',
            'personas con discapacidad',
          ],
          [
            'Imágenes e iconos',
            'siempre él dirige, ella cuida',
            'roles intercambiados y diversidad real',
          ],
        ],
      },
      {
        tipo: 'texto',
        html: '<p>La arroba, la «x» y las barras dificultan la lectura, y los lectores de pantalla no las leen bien. Los desdoblamientos sirven, con medida.</p>',
      },
    ],
  },
  {
    id: 'decalogo',
    titulo: 'Decálogo para el equipo',
    icono: 'insignia',
    bloques: [
      {
        tipo: 'tarjetas',
        estilo: 'numeradas',
        items: [
          {
            texto: 'La IA propone, la profesional decide',
          },
          {
            texto: 'Contexto antes que pregunta: R-C-T-F-L',
          },
          {
            texto: 'La cláusula de igualdad, en cada prompt', // PROVISIONAL
          },
          {
            texto: 'Semáforo de datos: nada personal',
          },
          {
            texto: 'Revisa todo con la lista de verificación',
          },
          {
            texto: 'Verifica cada dato en la fuente oficial',
          },
          {
            texto: 'Adapta el acceso, no rebajes el objetivo',
          },
          {
            texto: 'Con menores, primero su historia de vida',
          },
          {
            texto: 'Las emociones se acompañan en persona',
          },
          {
            texto: 'Comparte tus prompts con el equipo',
          },
        ],
      },
    ],
  },
];
