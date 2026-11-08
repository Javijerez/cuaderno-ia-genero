// Cierre
// Generado por montar.py desde guion.json. No editar: cambiar el guion y volver a montar.
// «PROVISIONAL» = texto que no está en el material del cliente: pendiente de su validación.
export const b_cierre = [
  {
    id: 'lo-que-te-llevas',
    titulo: 'Lo que te llevas de la jornada',
    icono: 'maletin',
    bloques: [
      {
        tipo: 'entradilla',
        html: 'Dos productos que se anuncian al empezar (diapositiva 4) y se repasan en el cierre (diapositivas 51 a 55).',
      },
      {
        tipo: 'tarjetas',
        estilo: 'destacadas',
        items: [
          {
            texto: '<strong>Te llevas 1 · Tu banco de prompts profesionales.</strong> Trece prompts listos para copiar, con la cláusula de igualdad incluida.', // PROVISIONAL
            icono: 'bocadillo',
          },
          {
            texto: '<strong>Te llevas 2 · Materiales reales revisados con perspectiva de género.</strong> Lo que produces en las dinámicas con los casos de tu área.', // PROVISIONAL
            icono: 'maletin',
          },
        ],
      },
      {
        tipo: 'tarjetas',
        estilo: 'lista',
        columnas: 1,
        items: [
          {
            texto: '<strong>D2.</strong> Tu primer prompt profesional, del antes al después. Modelo resuelto: Del prompt pobre al profesional.', // PROVISIONAL
          },
          {
            texto: '<strong>D3.</strong> Un informe, un acta o una convocatoria resueltos y revisados. Modelo resuelto: De notas sueltas a informe.', // PROVISIONAL
          },
          {
            texto: '<strong>D6.</strong> Un CV que reconoce los cuidados y la trayectoria real. Modelo resuelto: El CV de Rosa.', // PROVISIONAL
          },
          {
            texto: '<strong>D7.</strong> Un guion de entrevista ensayado, con respuesta asertiva. Modelo resuelto: Simulación de entrevista.', // PROVISIONAL
          },
          {
            texto: '<strong>D8.</strong> Una actividad coeducativa adaptada a dos edades. Modelo resuelto: «¿Qué quiero ser?».', // PROVISIONAL
          },
          {
            texto: '<strong>D9.</strong> Un recurso de educación emocional sin mandatos de género. Modelo resuelto: Tres tarjetas de emociones.', // PROVISIONAL
          },
          {
            texto: '<strong>D4 + D10.</strong> Tres piezas sobre un derecho, una prestación o una norma, verificadas y revisadas. Modelo resuelto: El ingreso mínimo vital y Gafas de género.', // PROVISIONAL
          },
        ],
      },
      {
        tipo: 'texto',
        html: '<p>También te llevas la lista de verificación de género, el decálogo para el equipo y el semáforo de datos, en Herramientas.</p>',
      },
    ],
  },
  {
    id: 'me-llevo',
    titulo: 'Me llevo, dejo, cambio… y nos comprometemos', // PROVISIONAL
    icono: 'corazon',
    bloques: [
      {
        tipo: 'ejercicio',
        id: 'cierre-me-llevo',
        titulo: 'Me llevo, dejo, cambio',
        enunciado: '<p>Individual y por áreas.</p>', // PROVISIONAL
        campos: [
          {
            tipo: 'texto-libre',
            id: 'cierre-me-llevo-1',
            etiqueta: 'Me llevo',
            ayuda: 'Un prompt o una idea que usaré esta semana', // PROVISIONAL
            filas: 3,
          },
          {
            tipo: 'texto-libre',
            id: 'cierre-dejo',
            etiqueta: 'Dejo',
            ayuda: 'Una costumbre con la IA que voy a abandonar', // PROVISIONAL
            filas: 3,
          },
          {
            tipo: 'texto-libre',
            id: 'cierre-cambio',
            etiqueta: 'Cambio',
            ayuda: 'Un contenido que revisaré con perspectiva de género', // PROVISIONAL
            filas: 3,
          },
          {
            tipo: 'texto-libre',
            id: 'cierre-compromiso',
            etiqueta: 'Compromiso de área', // PROVISIONAL
            ayuda: 'Cada área acuerda un cambio para su equipo', // PROVISIONAL
            filas: 3,
          },
        ],
      },
    ],
  },
  {
    id: 'marco',
    titulo: 'Marco normativo',
    icono: 'balanza',
    bloques: [
      {
        tipo: 'entradilla',
        html: 'Normas que sustentan la jornada y los casos prácticos, con lo que dicen y para qué se usan. Las ayudas y los requisitos cambian: comprueba siempre el texto vigente en el BOE, el BOJA o la web del organismo antes de informar a una persona.',
      },
      {
        tipo: 'desplegables',
        items: [
          {
            titulo: 'Inteligencia artificial',
            bloques: [
              {
                tipo: 'enlace',
                texto: 'Reglamento (UE) 2024/1689 de Inteligencia Artificial, art. 4',
                url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj',
              },
              {
                tipo: 'texto',
                html: '<p>Alfabetización en IA. Tal como queda tras el Reglamento (UE) 2026/1744, quienes proveen y despliegan sistemas de IA deben adoptar medidas para apoyar la alfabetización en IA de su personal, sin que se exija un nivel concreto.</p><p><em>Fundamenta la jornada como formación del equipo en el uso de la IA.</em></p>',
              },
              {
                tipo: 'enlace',
                texto: 'Reglamento (UE) 2026/1744, de 8 de julio de 2026 (Ómnibus digital sobre IA)',
                url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj',
              },
              {
                tipo: 'texto',
                html: '<p>Modifica el Reglamento de IA: simplifica obligaciones y aplaza plazos de aplicación. Publicado en el DOUE el 24 de julio de 2026 y en vigor desde el 27 de julio de 2026.</p><p><em>Versión vigente del art. 4 que se cita en la jornada.</em></p>',
              },
              {
                tipo: 'enlace',
                texto: 'Proyecto de Ley Orgánica para el buen uso y la gobernanza de la inteligencia artificial (en tramitación)',
                url: 'https://www.congreso.es/public_oficiales/L15/CONG/BOCG/A/BOCG-15-A-97-1.PDF',
              },
              {
                tipo: 'texto',
                html: '<p>Adapta el Reglamento europeo de IA en España: designa a la AESIA como autoridad de supervisión y fija el régimen de sanciones. Publicado en el Boletín de las Cortes el 12 de junio de 2026; aún no es ley.</p><p><em>Para estar al día: no se aplica todavía.</em></p>',
              },
            ],
          },
          {
            titulo: 'Igualdad y no discriminación',
            bloques: [
              {
                tipo: 'enlace',
                texto: 'Ley 15/2022, integral para la igualdad de trato y la no discriminación, arts. 2.1 y 23',
                url: 'https://www.boe.es/buscar/pdf/2022/BOE-A-2022-11589-consolidado.pdf',
              },
              {
                tipo: 'texto',
                html: '<p>Art. 2.1: causas de discriminación (sexo, origen racial o étnico, edad, discapacidad, religión, orientación o identidad sexual, expresión de género, situación socioeconómica, lengua…). Art. 23: minimización de sesgos, transparencia y rendición de cuentas en los algoritmos.</p><p><em>Base de la cláusula de igualdad y del M4.</em></p>',
              },
              {
                tipo: 'enlace',
                texto: 'Ley Orgánica 3/2007, para la igualdad efectiva de mujeres y hombres, arts. 14.6, 14.11 y 28.4',
                url: 'https://www.boe.es/eli/es/lo/2007/03/22/3/con',
              },
              {
                tipo: 'texto',
                html: '<p>Atención a las mujeres de colectivos de especial vulnerabilidad (14.6); lenguaje no sexista en lo administrativo y su fomento en todas las relaciones sociales (14.11); lenguaje y contenidos no sexistas en proyectos TIC con financiación pública (28.4).</p><p><em>Lenguaje inclusivo (M4 y M7) e interseccionalidad.</em></p>',
              },
              {
                tipo: 'enlace',
                texto: 'Ley 12/2007, para la promoción de la igualdad de género en Andalucía, art. 9',
                url: 'https://www.boe.es/eli/es-an/l/2007/11/26/12/con',
              },
              {
                tipo: 'texto',
                html: '<p>Las administraciones andaluzas garantizan un uso no sexista del lenguaje y un tratamiento igualitario de contenidos e imágenes, también en lo que producen a través de entidades.</p><p><em>Materiales que las entidades elaboran en programas públicos.</em></p>',
              },
              {
                tipo: 'enlace',
                texto: 'Ley 4/2023, para la igualdad real y efectiva de las personas trans y para la garantía de los derechos de las personas LGTBI',
                url: 'https://www.boe.es/eli/es/l/2023/02/28/4/con',
              },
              {
                tipo: 'texto',
                html: '<p>Igualdad de trato por orientación sexual, identidad y expresión de género.</p><p><em>Diversidad en la cláusula de igualdad y en la lista de verificación.</em></p>',
              },
            ],
          },
          {
            titulo: 'Discapacidad y accesibilidad',
            bloques: [
              {
                tipo: 'enlace',
                texto: 'Constitución Española, art. 49 (reforma de 17 de febrero de 2024)',
                url: 'https://www.boe.es/boe/dias/2024/02/17/pdfs/BOE-A-2024-3099.pdf',
              },
              {
                tipo: 'texto',
                html: '<p>Sustituye «disminuidos» por «personas con discapacidad» y reconoce sus derechos en condiciones de libertad e igualdad reales y efectivas.</p><p><em>Término adecuado: «personas con discapacidad».</em></p>',
              },
              {
                tipo: 'enlace',
                texto: 'Real Decreto Legislativo 1/2013 (Ley General de derechos de las personas con discapacidad), art. 5 bis, añadido por la Ley 6/2022',
                url: 'https://www.boe.es/eli/es/l/2022/03/31/6',
              },
              {
                tipo: 'texto',
                html: '<p>Reconoce la accesibilidad cognitiva, que incluye la lectura fácil. Referencia técnica: norma UNE 153101:2018 EX.</p><p><em>Lectura fácil en el M3 y el M7.</em></p>', // PROVISIONAL (en parte)
              },
            ],
          },
          {
            titulo: 'Protección de datos',
            bloques: [
              {
                tipo: 'enlace',
                texto: 'Reglamento (UE) 2016/679 (RGPD), arts. 5 y 9 y considerando 26',
                url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
              },
              {
                tipo: 'texto',
                html: '<p>Principios de minimización y confidencialidad (art. 5); categorías especiales de datos, como salud u origen étnico (art. 9); los datos anonimizados quedan fuera del Reglamento (considerando 26). Sobre cómo anonimizar, el Comité Europeo de Protección de Datos tiene en consulta pública sus Directrices 02/2026 (julio de 2026).</p><p><em>Semáforo de datos y anonimización (M3).</em></p>',
              },
              {
                tipo: 'enlace',
                texto: 'Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales',
                url: 'https://www.boe.es/eli/es/lo/2018/12/05/3/con',
              },
              {
                tipo: 'texto',
                html: '<p>Adapta el RGPD en España. Art. 7: el consentimiento de menores de 14 años requiere a quien tenga la patria potestad o la tutela. El proyecto de Ley Orgánica de protección de las personas menores de edad en los entornos digitales, en tramitación en el Congreso, elevaría esa edad a 16 años; hoy sigue en 14.</p><p><em>Especial cuidado con datos de menores (M3 y M6).</em></p>',
              },
            ],
          },
          {
            titulo: 'Violencia de género e infancia',
            bloques: [
              {
                tipo: 'enlace',
                texto: 'Ley Orgánica 1/2004, de Medidas de Protección Integral contra la Violencia de Género',
                url: 'https://www.boe.es/eli/es/lo/2004/12/28/1/con',
              },
              {
                tipo: 'texto',
                html: '<p>Derecho de las víctimas a la información (art. 18), entre otros derechos. El proyecto de Ley Orgánica de medidas en materia de violencia vicaria, aprobado por el Gobierno en julio de 2026 y en tramitación, la modificará.</p><p><em>Casos del área de Igualdad (D4) y protección de datos de víctimas.</em></p>',
              },
              {
                tipo: 'enlace',
                texto: 'Ley Orgánica 8/2021, de protección integral a la infancia y la adolescencia frente a la violencia',
                url: 'https://www.boe.es/eli/es/lo/2021/06/04/8/con',
              },
              {
                tipo: 'texto',
                html: '<p>Prevención, detección y protección de niñas, niños y adolescentes; derecho a ser escuchados.</p><p><em>Filtro de historia de vida y recursos emocionales (M6).</em></p>',
              },
              {
                tipo: 'enlace',
                texto: 'Ley 4/2021, de Infancia y Adolescencia de Andalucía',
                url: 'https://www.boe.es/eli/es-an/l/2021/07/27/4/con',
              },
              {
                tipo: 'texto',
                html: '<p>Marco andaluz de derechos y protección de la infancia y la adolescencia.</p><p><em>Casos del área de Centros de protección.</em></p>',
              },
            ],
          },
          {
            titulo: 'Ayudas y empleo',
            bloques: [
              {
                tipo: 'enlace',
                texto: 'Ley 19/2021, por la que se establece el ingreso mínimo vital',
                url: 'https://www.boe.es/eli/es/l/2021/12/20/19/con',
              },
              {
                tipo: 'texto',
                html: '<p>Prestación de la Seguridad Social para personas y familias con pocos ingresos. Comprobar el texto vigente antes de usarlo.</p><p><em>Caso resuelto de la D4.</em></p>', // PROVISIONAL (en parte)
              },
              {
                tipo: 'enlace',
                texto: 'Decreto-ley 3/2017, que regula la Renta Mínima de Inserción Social en Andalucía',
                url: 'https://www.boe.es/eli/es-an/dl/2017/12/19/3/con',
              },
              {
                tipo: 'texto',
                html: '<p>Prestación autonómica de inserción social.</p><p><em>Alternativa en la D4 del área de Acción social.</em></p>',
              },
              {
                tipo: 'enlace',
                texto: 'Real Decreto-ley 2/2024, de reforma del subsidio por desempleo',
                url: 'https://www.boe.es/eli/es/rdl/2024/05/21/2/con',
              },
              {
                tipo: 'texto',
                html: '<p>Nuevo modelo de subsidio por desempleo, en vigor desde el 1 de noviembre de 2024.</p><p><em>D4 del área de Empleo.</em></p>',
              },
              {
                tipo: 'enlace',
                texto: 'Estatuto de los Trabajadores (RDLeg 2/2015), arts. 11 y 48.4',
                url: 'https://www.boe.es/eli/es/rdlg/2015/10/23/2/con',
              },
              {
                tipo: 'texto',
                html: '<p>Contrato formativo en alternancia (art. 11) y suspensión por nacimiento y cuidado del menor (art. 48.4).</p><p><em>Segundo caso de la D4 en Empleo e Igualdad.</em></p>',
              },
              {
                tipo: 'enlace',
                texto: 'Ley 44/2007, para la regulación del régimen de las empresas de inserción, modificada por la Ley 1/2026',
                url: 'https://www.boe.es/eli/es/l/2007/12/13/44/con',
              },
              {
                tipo: 'texto',
                html: '<p>Qué son las empresas de inserción y quién puede trabajar en ellas. La Ley 1/2026 redefine los colectivos en situación de vulnerabilidad o exclusión y regula el contrato de transición al empleo ordinario.</p><p><em>D4 del área de Economía social.</em></p>',
              },
              {
                tipo: 'enlace',
                texto: 'Ley 5/2011, de Economía Social, modificada por la Ley 1/2026',
                url: 'https://www.boe.es/eli/es/l/2011/03/29/5/con',
              },
              {
                tipo: 'texto',
                html: '<p>Define las entidades de la economía social. Desde 2026 incluye los centros especiales de empleo de iniciativa social y el concepto de empresa social.</p><p><em>Segundo caso de la D4 en Economía social.</em></p>',
              },
              {
                tipo: 'enlace',
                texto: 'Ley 1/2026, de 8 de abril, integral de impulso de la economía social',
                url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2026-7967',
              },
              {
                tipo: 'texto',
                html: '<p>En vigor desde el 10 de abril de 2026. Modifica la Ley 5/2011 y la Ley 44/2007 para impulsar la economía social y las empresas de inserción.</p><p><em>Texto de referencia actualizado para la D4 de Economía social.</em></p>',
              },
            ],
          },
          {
            titulo: 'Extranjería y cooperación',
            bloques: [
              {
                tipo: 'enlace',
                texto: 'Real Decreto 1155/2024, Reglamento de Extranjería, modificado por el Real Decreto 316/2026',
                url: 'https://www.boe.es/eli/es/rd/2024/11/19/1155/con',
              },
              {
                tipo: 'texto',
                html: '<p>En vigor desde el 20 de mayo de 2025. Regula, entre otras, las figuras de arraigo (segunda oportunidad, sociolaboral, social, socioformativo y familiar). El Real Decreto 316/2026, de 14 de abril (BOE de 15 de abril), lo modifica para regular una regularización extraordinaria.</p><p><em>D4 del área de Personas migrantes. Comprobar siempre la versión consolidada.</em></p>',
              },
              {
                tipo: 'enlace',
                texto: 'Ley 1/2023, de Cooperación para el Desarrollo Sostenible y la Solidaridad Global',
                url: 'https://www.boe.es/eli/es/l/2023/02/20/1/con',
              },
              {
                tipo: 'texto',
                html: '<p>Marco de la cooperación española, con la igualdad de género como principio.</p><p><em>D4 del área de Cooperación.</em></p>',
              },
            ],
          },
          {
            titulo: 'Educación',
            bloques: [
              {
                tipo: 'enlace',
                texto: 'Ley Orgánica 3/2020 (LOMLOE)',
                url: 'https://www.boe.es/eli/es/lo/2020/12/29/3/con',
              },
              {
                tipo: 'texto',
                html: '<p>Incorpora la coeducación y la igualdad entre mujeres y hombres en el sistema educativo.</p><p><em>Segundo caso de la D4 en Ciudadanía Global.</em></p>',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'diapositivas',
    titulo: 'Las diapositivas de la jornada',
    icono: 'proyector',
    bloques: [
      {
        tipo: 'entradilla',
        html: 'Toca cualquier diapositiva para verla a pantalla completa.',
      },
      {
        tipo: 'galeria',
        imagenes: [
          {
            src: 'img/diapositivas/d01.webp',
            alt: 'Diapositiva 1: Portada',
          },
          {
            src: 'img/diapositivas/d02.webp',
            alt: 'Diapositiva 2: Agenda',
          },
          {
            src: 'img/diapositivas/d03.webp',
            alt: 'Diapositiva 3: D0 · ¿Desde dónde partimos?',
          },
          {
            src: 'img/diapositivas/d04.webp',
            alt: 'Diapositiva 4: El objetivo de hoy',
          },
          {
            src: 'img/diapositivas/d05.webp',
            alt: 'Diapositiva 5: Elige tu área',
          },
          {
            src: 'img/diapositivas/d06.webp',
            alt: 'Diapositiva 6: Bloque A',
          },
          {
            src: 'img/diapositivas/d07.webp',
            alt: 'Diapositiva 7: La IA no sabe: predice',
          },
          {
            src: 'img/diapositivas/d08.webp',
            alt: 'Diapositiva 8: En qué ayuda y en qué no',
          },
          {
            src: 'img/diapositivas/d09.webp',
            alt: 'Diapositiva 9: Herramientas',
          },
          {
            src: 'img/diapositivas/d10.webp',
            alt: 'Diapositiva 10: D1 · La misma pregunta, dos respuestas',
          },
          {
            src: 'img/diapositivas/d11.webp',
            alt: 'Diapositiva 11: Resuelto D1',
          },
          {
            src: 'img/diapositivas/d12.webp',
            alt: 'Diapositiva 12: Fórmula R-C-T-F-L',
          },
          {
            src: 'img/diapositivas/d13.webp',
            alt: 'Diapositiva 13: Antes y después',
          },
          {
            src: 'img/diapositivas/d14.webp',
            alt: 'Diapositiva 14: Técnicas para afinar',
          },
          {
            src: 'img/diapositivas/d15.webp',
            alt: 'Diapositiva 15: D2 · Tu primer prompt',
          },
          {
            src: 'img/diapositivas/d16.webp',
            alt: 'Diapositiva 16: Semáforo de datos',
          },
          {
            src: 'img/diapositivas/d17.webp',
            alt: 'Diapositiva 17: Anonimizar',
          },
          {
            src: 'img/diapositivas/d18.webp',
            alt: 'Diapositiva 18: Seis tareas',
          },
          {
            src: 'img/diapositivas/d19.webp',
            alt: 'Diapositiva 19: Seis usos más',
          },
          {
            src: 'img/diapositivas/d20.webp',
            alt: 'Diapositiva 20: D3 · La mesa de trabajo',
          },
          {
            src: 'img/diapositivas/d21.webp',
            alt: 'Diapositiva 21: Resuelto D3',
          },
          {
            src: 'img/diapositivas/d22.webp',
            alt: 'Diapositiva 22: D3b · ¿Lo pego o no lo pego?',
          },
          {
            src: 'img/diapositivas/d23.webp',
            alt: 'Diapositiva 23: Cierre del Bloque A',
          },
          {
            src: 'img/diapositivas/d24.webp',
            alt: 'Diapositiva 24: Bloque B',
          },
          {
            src: 'img/diapositivas/d25.webp',
            alt: 'Diapositiva 25: Tres preguntas',
          },
          {
            src: 'img/diapositivas/d26.webp',
            alt: 'Diapositiva 26: Lo que no se nombra',
          },
          {
            src: 'img/diapositivas/d27.webp',
            alt: 'Diapositiva 27: Dónde se cuela el sesgo',
          },
          {
            src: 'img/diapositivas/d28.webp',
            alt: 'Diapositiva 28: D5 · La caza del sesgo',
          },
          {
            src: 'img/diapositivas/d29.webp',
            alt: 'Diapositiva 29: Resuelto D5',
          },
          {
            src: 'img/diapositivas/d30.webp',
            alt: 'Diapositiva 30: Cláusula de igualdad',
          },
          {
            src: 'img/diapositivas/d31.webp',
            alt: 'Diapositiva 31: Evitar y preferir',
          },
          {
            src: 'img/diapositivas/d32.webp',
            alt: 'Diapositiva 32: CV: cinco claves',
          },
          {
            src: 'img/diapositivas/d33.webp',
            alt: 'Diapositiva 33: D6 · El CV que cuenta toda la historia',
          },
          {
            src: 'img/diapositivas/d34.webp',
            alt: 'Diapositiva 34: Resuelto D6',
          },
          {
            src: 'img/diapositivas/d35.webp',
            alt: 'Diapositiva 35: La IA entrevistadora',
          },
          {
            src: 'img/diapositivas/d36.webp',
            alt: 'Diapositiva 36: D7 · La entrevista ensayada',
          },
          {
            src: 'img/diapositivas/d37.webp',
            alt: 'Diapositiva 37: Resuelto D7',
          },
          {
            src: 'img/diapositivas/d38.webp',
            alt: 'Diapositiva 38: E1 · ¿Persona o máquina?',
          },
          {
            src: 'img/diapositivas/d39.webp',
            alt: 'Diapositiva 39: Cinco filtros',
          },
          {
            src: 'img/diapositivas/d40.webp',
            alt: 'Diapositiva 40: D8 · Una actividad, dos edades',
          },
          {
            src: 'img/diapositivas/d41.webp',
            alt: 'Diapositiva 41: Resuelto D8',
          },
          {
            src: 'img/diapositivas/d42.webp',
            alt: 'Diapositiva 42: Emociones sin mandatos',
          },
          {
            src: 'img/diapositivas/d43.webp',
            alt: 'Diapositiva 43: D9 · Emociones sin mandatos',
          },
          {
            src: 'img/diapositivas/d44.webp',
            alt: 'Diapositiva 44: Resuelto D9',
          },
          {
            src: 'img/diapositivas/d45.webp',
            alt: 'Diapositiva 45: De la norma al mensaje',
          },
          {
            src: 'img/diapositivas/d46.webp',
            alt: 'Diapositiva 46: Plantilla para divulgar',
          },
          {
            src: 'img/diapositivas/d47.webp',
            alt: 'Diapositiva 47: D4 · Explícalo para todo el mundo',
          },
          {
            src: 'img/diapositivas/d48.webp',
            alt: 'Diapositiva 48: Resuelto D4',
          },
          {
            src: 'img/diapositivas/d49.webp',
            alt: 'Diapositiva 49: Lista de verificación',
          },
          {
            src: 'img/diapositivas/d50.webp',
            alt: 'Diapositiva 50: D10 · Gafas de género',
          },
          {
            src: 'img/diapositivas/d51.webp',
            alt: 'Diapositiva 51: Lo que te llevas',
          },
          {
            src: 'img/diapositivas/d52.webp',
            alt: 'Diapositiva 52: Banco de prompts 1',
          },
          {
            src: 'img/diapositivas/d53.webp',
            alt: 'Diapositiva 53: Banco de prompts 2',
          },
          {
            src: 'img/diapositivas/d54.webp',
            alt: 'Diapositiva 54: Banco de prompts 3',
          },
          {
            src: 'img/diapositivas/d55.webp',
            alt: 'Diapositiva 55: Banco de prompts 4',
          },
          {
            src: 'img/diapositivas/d56.webp',
            alt: 'Diapositiva 56: Decálogo',
          },
          {
            src: 'img/diapositivas/d57.webp',
            alt: 'Diapositiva 57: Me llevo, dejo, cambio',
          },
          {
            src: 'img/diapositivas/d58.webp',
            alt: 'Diapositiva 58: Evaluación',
          },
          {
            src: 'img/diapositivas/d59.webp',
            alt: 'Diapositiva 59: Gracias',
          },
        ],
      },
    ],
  },
  {
    id: 'glosario',
    titulo: 'Glosario',
    icono: 'libro',
    bloques: [
      {
        tipo: 'volteables',
        items: [
          {
            icono: 'libro',
            titulo: 'Alfabetización en IA',
            html: '<p>Conocimientos y capacidades para usar la IA con criterio, conociendo sus posibilidades, sus límites y sus riesgos.</p>',
          },
          {
            icono: 'libro',
            titulo: 'Alucinación',
            html: '<p>Respuesta de la IA que parece segura y convincente, pero es falsa o inventada.</p>',
          },
          {
            icono: 'libro',
            titulo: 'Anonimizar',
            html: '<p>Quitar o transformar los datos de un texto de forma que nadie pueda identificar a la persona. Los datos anonimizados quedan fuera del RGPD.</p>',
          },
          {
            icono: 'libro',
            titulo: 'Brecha digital de género',
            html: '<p>Diferencias entre mujeres y hombres en el acceso, el uso y la confianza en las tecnologías.</p>',
          },
          {
            icono: 'libro',
            titulo: 'Cláusula de igualdad',
            html: '<p>Texto que se añade a un prompt para pedir a la IA un resultado inclusivo y sin sesgos.</p>',
          },
          {
            icono: 'libro',
            titulo: 'Coeducación',
            html: '<p>Educación que trata a niñas y niños como iguales y combate activamente los estereotipos de género.</p>',
          },
          {
            icono: 'libro',
            titulo: 'Estereotipo de género',
            html: '<p>Idea rígida sobre cómo son o deben ser mujeres y hombres.</p>',
          },
          {
            icono: 'libro',
            titulo: 'IA generativa',
            html: '<p>Sistema que crea textos, imágenes o audio nuevos a partir de lo que ha aprendido de grandes cantidades de datos.</p>',
          },
          {
            icono: 'libro',
            titulo: 'Interseccionalidad',
            html: '<p>Suma de discriminaciones: el sexo se combina con el origen, la edad, la discapacidad u otras circunstancias.</p>',
          },
          {
            icono: 'libro',
            titulo: 'Lectura fácil',
            html: '<p>Forma de escribir y validar textos para que los entienda todo el mundo, en especial personas con dificultades de comprensión lectora.</p>',
          },
          {
            icono: 'libro',
            titulo: 'Lenguaje claro',
            html: '<p>Comunicación que la persona destinataria entiende a la primera: frases cortas, palabras comunes y orden lógico.</p>',
          },
          {
            icono: 'libro',
            titulo: 'Masculino genérico',
            html: '<p>Uso del masculino para referirse a mujeres y hombres. Invisibiliza a las mujeres.</p>',
          },
          {
            icono: 'libro',
            titulo: 'Prompt',
            html: '<p>Instrucción que se da a una IA.</p>',
          },
          {
            icono: 'libro',
            titulo: 'Revictimización',
            html: '<p>Daño añadido que sufre una persona cuando se la expone, se le hace revivir lo sucedido o se la muestra como pasiva.</p>',
          },
          {
            icono: 'libro',
            titulo: 'Sesgo algorítmico',
            html: '<p>Error sistemático de un sistema de IA que favorece o perjudica a un grupo de personas.</p>',
          },
          {
            icono: 'libro',
            titulo: 'Seudonimizar',
            html: '<p>Sustituir los datos identificativos por códigos. Sigue siendo un dato personal, porque se puede revertir.</p>',
          },
        ],
      },
    ],
  },
];
