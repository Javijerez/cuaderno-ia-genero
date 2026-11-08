// Banco de casos y de prompts
// Generado por montar.py desde guion.json. No editar: cambiar el guion y volver a montar.
// «PROVISIONAL» = texto que no está en el material del cliente: pendiente de su validación.
export const b_banco = [
  {
    id: 'casos',
    titulo: 'Banco de casos por áreas',
    icono: 'carpeta',
    bloques: [
      {
        tipo: 'entradilla',
        html: 'Elige tu área. Para cada dinámica tienes dos casos, A y B, para practicar después de la jornada. Todos son ficticios: nunca se trabaja con datos de personas usuarias reales. Las normas de la D4 se comprueban siempre en su texto oficial vigente.',
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
      {
        tipo: 'desplegables',
        items: [
          {
            titulo: 'Acción social',
            bloques: [
              {
                tipo: 'subtitulo',
                texto: 'D1 · Pregunta',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> «¿Qué ayudas hay en Málaga para una familia con riesgo de perder su vivienda?»', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> «¿Qué hace falta para pedir una ayuda de emergencia social en Málaga si se corta la luz por impago?»', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D2 · Tarea',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Carta a una familia del programa de acompañamiento para invitarla a una reunión de seguimiento.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Mensaje de WhatsApp para recordar a una familia la documentación que debe traer a su próxima cita.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D3 · Reto',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Convertir notas anonimizadas de una visita a domicilio en un informe de seguimiento con apartados.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Ordenar en una tabla los recursos de alimentación, ropa y material escolar del barrio a partir de notas sueltas del equipo.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D4 · Norma',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Ingreso mínimo vital (Ley 19/2021) o Renta Mínima de Inserción Social en Andalucía.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Bono social eléctrico: qué es, quién puede pedirlo y dónde se tramita.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D5 · Imágenes',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> «Una familia que pide ayuda», «una trabajadora social en una visita», «un barrio vulnerable», «una persona que cuida de sus mayores».', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> «Una persona mayor que vive sola», «una familia en la cola de un banco de alimentos», «un padre que cuida de su bebé», «vecinas y vecinos organizados en su barrio».', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D6 · CV',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Lucía, 28 años, madre sola de dos hijos, con experiencia informal en venta ambulante y en el comercio familiar.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Manuel, 54 años, diez años en paro tras el cierre de su taller de carpintería, cuida de su padre; quiere trabajar en mantenimiento de instalaciones municipales.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D9 · Recurso',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Tarjetas para que las familias hablen de emociones en casa, con padres y madres que cuidan por igual.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Cuento corto para leer en familia sobre un niño que ayuda en casa y una niña que juega al fútbol, para 6–8 años.', // PROVISIONAL
                  },
                ],
              },
            ],
          },
          {
            titulo: 'Igualdad de género',
            bloques: [
              {
                tipo: 'subtitulo',
                texto: 'D1 · Pregunta',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> «¿Qué recursos hay en Málaga para una mujer que sufre violencia de género y tiene hijos?»', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> «¿Qué es la violencia económica y cómo se puede detectar?»', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D2 · Tarea',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Publicación para redes sociales del 25 de noviembre que interpele también a los hombres.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Cartel para el 8 de marzo que muestre a mujeres diversas en profesiones poco visibles.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D3 · Reto',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Resumir una guía de recursos contra la violencia de género en una tarjeta de bolsillo discreta.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Convertir las notas de una reunión de coordinación con el punto de igualdad municipal en un acta con acuerdos.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D4 · Norma',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Derechos de las víctimas de violencia de género (Ley Orgánica 1/2004) y el servicio 016.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Permiso por nacimiento y cuidado del menor (Estatuto de los Trabajadores, art. 48.4), explicado para promover la corresponsabilidad.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D5 · Imágenes',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> «Una víctima de violencia de género», «un hombre que cuida», «una mujer que dirige un equipo», «una pareja feliz».', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> «Una mujer que dirige una empresa», «un padre en una reunión del colegio», «una mujer mayor que aprende informática», «una pareja que reparte las tareas de casa».', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D8 · Actividad',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Juego cooperativo para el 8 de marzo con niñas y niños de 8–11 años.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Dinámica sobre el reparto de tareas en casa para niñas y niños de 10–12 años, sin dar por hecho un modelo de familia.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D9 · Recurso',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Role-play preventivo para detectar el control a través del móvil en una pareja adolescente.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Tarjetas sobre relaciones sanas en redes sociales para adolescentes de 14–17 años.', // PROVISIONAL
                  },
                ],
              },
            ],
          },
          {
            titulo: 'Personas migrantes',
            bloques: [
              {
                tipo: 'subtitulo',
                texto: 'D1 · Pregunta',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> «¿Qué necesita una persona extranjera para pedir el arraigo en España?»', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> «¿Puede empadronarse en Málaga una persona que no tiene contrato de alquiler?»', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D2 · Tarea',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Convocatoria de un taller Informa-T sobre derechos de las personas extranjeras residentes.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Aviso en tres idiomas sobre el horario de atención del servicio jurídico.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D3 · Reto',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Explicar en lenguaje claro qué documentos se necesitan para un trámite y traducirlo al árabe y al francés.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Traducir al inglés y al árabe un recordatorio de cita y pasarlo después a lectura fácil en español.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D4 · Norma',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Reglamento de Extranjería (Real Decreto 1155/2024, modificado por el Real Decreto 316/2026): las figuras de arraigo.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Reglamento de Extranjería (Real Decreto 1155/2024): el arraigo para la formación (arraigo socioformativo).', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D5 · Imágenes',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> «Una persona migrante», «una familia migrante que llega a Málaga», «una mujer migrante en su trabajo», «una persona refugiada».', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> «Un hombre migrante que cuida de sus hijas», «una abogada de origen marroquí», «una familia recién llegada en una oficina», «una estudiante con hiyab en la universidad».', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D6 · CV',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Aminata, 31 años, maestra en Senegal con el título sin homologar; trabaja como interna cuidando de una persona mayor y quiere trabajar en mediación o educación.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Karim, 26 años, electricista en Marruecos sin título homologado, trabaja en la recogida de fruta; quiere trabajar como ayudante de electricista.', // PROVISIONAL
                  },
                ],
              },
            ],
          },
          {
            titulo: 'Empleo y formación',
            bloques: [
              {
                tipo: 'subtitulo',
                texto: 'D1 · Pregunta',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> «¿Qué cursos gratuitos hay en Málaga para mujeres que quieren trabajar en oficios técnicos?»', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> «¿Qué derechos tiene una trabajadora del hogar contratada por horas?»', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D2 · Tarea',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Oferta de empleo inclusiva de mantenimiento de edificios para difundir en el itinerario de inserción.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Correo a una empresa de logística para presentar a una candidata para un puesto de carretillera.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D3 · Reto',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Resumir la convocatoria de un curso y redactar el mensaje para el grupo de WhatsApp del itinerario.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Preparar con IA un plan semanal de búsqueda de empleo para una persona con poco tiempo por cuidados.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D4 · Norma',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Reforma del subsidio por desempleo (Real Decreto-ley 2/2024).', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Contrato para la formación en alternancia (Estatuto de los Trabajadores, art. 11), explicado a jóvenes del itinerario.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D5 · Imágenes',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> «Una persona experta en fontanería», «una persona que limpia oficinas», «una persona jefa de obra», «una persona que busca empleo».', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> «Una persona que conduce un camión», «una persona que trabaja en una guardería», «una persona que programa», «una persona en una entrevista de trabajo».', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D6 · CV',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Rosa, 45 años, diez años cuidando de sus hijos y de su madre y cinco en hostelería; quiere trabajar en mantenimiento de edificios.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Fátima, 33 años, cinco años cuidando de su hija con discapacidad, estudios de administración sin terminar; quiere trabajar en atención al público.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D6 · CV de contraste',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Andrés, 38 años, mozo de almacén; quiere trabajar como técnico en educación infantil.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Javier, 41 años, conductor de reparto; quiere reorientarse hacia la atención sociosanitaria a domicilio.', // PROVISIONAL
                  },
                ],
              },
            ],
          },
          {
            titulo: 'Economía social',
            bloques: [
              {
                tipo: 'subtitulo',
                texto: 'D1 · Pregunta',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> «¿Qué ayudas hay en Andalucía para crear una cooperativa?»', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> «¿Qué diferencia hay entre una cooperativa y una asociación?»', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D2 · Tarea',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Correo a una empresa para proponerle colaborar con una empresa de inserción.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Publicación para redes sociales que presente una empresa de inserción de jardinería.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D3 · Reto',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Convertir las notas de una asamblea de una cooperativa en acta con acuerdos y responsables.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Resumir las bases de una convocatoria de subvenciones para el emprendimiento social en una ficha de una página.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D4 · Norma',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Empresas de inserción (Ley 44/2007, modificada por la Ley 1/2026): qué son y quién puede trabajar en ellas.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Ley 5/2011 de Economía Social, actualizada por la Ley 1/2026: qué entidades forman parte de ella, explicado a un grupo de emprendimiento.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D5 · Imágenes',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> «Una persona cooperativista», «una persona que emprende», «una empresa de inserción», «un equipo de dirección».', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> «Una mujer que emprende en el campo», «un equipo de una cooperativa de limpieza», «una persona gerente», «personas trabajando en una empresa de inserción».', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D6 · CV',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Carmen, 52 años, socia de una cooperativa de limpieza que cerró; quiere montar un servicio de lavandería ecológica.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Rocío, 39 años, diez años vendiendo en mercadillos y llevando la contabilidad del puesto familiar; quiere crear una cooperativa de comercio justo.', // PROVISIONAL
                  },
                ],
              },
            ],
          },
          {
            titulo: 'Educación para la Ciudadanía Global',
            bloques: [
              {
                tipo: 'subtitulo',
                texto: 'D1 · Pregunta',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> «Propón un taller de igualdad de 50 minutos para 3.º de ESO.»', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> «¿Qué son los Objetivos de Desarrollo Sostenible y cuál trata la igualdad de género?»', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D2 · Tarea',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Invitación a los institutos para participar en un taller de artivismo y teatro de calle feminista.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Correo al profesorado de un instituto para preparar un taller sobre consumo responsable.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D3 · Reto',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Adaptar el guion de un taller de 90 minutos a una sesión de 50.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Convertir la evaluación escrita de un taller en un resumen con tres aprendizajes y tres mejoras.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D4 · Norma',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Ley Orgánica 8/2021 de protección integral a la infancia y la adolescencia frente a la violencia, explicada a adolescentes.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> LOMLOE (Ley Orgánica 3/2020): la coeducación y la igualdad en los centros educativos, explicada a familias.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D5 · Imágenes',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> «Un aula de secundaria aprendiendo igualdad», «una científica», «una persona activista», «adolescentes con el móvil».', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> «Una persona que investiga el clima», «un grupo de adolescentes en una manifestación», «una maestra en África», «una persona joven con discapacidad liderando un proyecto».', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D8 · Actividad',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Taller sobre publicidad sexista para 1.º de ESO.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Dinámica para 2.º de ESO sobre los estereotipos en los videojuegos.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D9 · Recurso',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Dinámica sobre la rabia y la asertividad que no reproduzca «la chica enfadada es una histérica».', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Role-play sobre cómo pedir ayuda ante el acoso escolar, sin estereotipos sobre quién agrede y quién sufre.', // PROVISIONAL
                  },
                ],
              },
            ],
          },
          {
            titulo: 'Cooperación internacional',
            bloques: [
              {
                tipo: 'subtitulo',
                texto: 'D1 · Pregunta',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> «¿Qué es la soberanía alimentaria y qué papel tienen las mujeres en ella?»', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> «¿Qué es el enfoque de género en un proyecto de cooperación?»', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D2 · Tarea',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Noticia para la web sobre un proyecto de soberanía alimentaria con una cooperativa de mujeres agricultoras.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Mensaje de agradecimiento al voluntariado tras una campaña de sensibilización.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D3 · Reto',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Resumir un informe técnico de seguimiento de proyecto en una página para la entidad financiadora.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Redactar la justificación de un proyecto a partir de una lista de indicadores y resultados.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D4 · Norma',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Ley 1/2023, de 20 de febrero, de Cooperación para el Desarrollo Sostenible y la Solidaridad Global, explicada al voluntariado.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Ley 1/2023 de Cooperación: la igualdad de género como principio de la cooperación española, explicada al voluntariado.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D5 · Imágenes',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> «Una comunidad del Sur Global», «una agricultora africana», «una persona cooperante», «una escuela en un país del Sur». Clave: vigilar la mirada asistencialista o colonial.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> «Mujeres que lideran una cooperativa agrícola», «una persona técnica de un país del Sur», «una comunidad que celebra una cosecha», «una niña que va a la escuela».', // PROVISIONAL
                  },
                ],
              },
            ],
          },
          {
            titulo: 'Centros de protección de menores',
            bloques: [
              {
                tipo: 'subtitulo',
                texto: 'D1 · Pregunta',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> «¿Qué derechos tiene una o un adolescente que vive en un centro de protección en Andalucía?»', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> «¿Qué apoyos hay en Andalucía para jóvenes que salen de un centro de protección al cumplir 18 años?»', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D2 · Tarea',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Normas de convivencia explicadas a niñas y niños de 8–11 años.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Explicación del horario de fin de semana del centro para adolescentes de 14–17 años.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D3 · Reto',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Convertir las notas de una reunión del equipo educativo en acta con tareas y responsables.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Preparar un plan semanal de tareas de la casa repartidas sin estereotipos para el grupo de convivencia.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D4 · Norma',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Ley 4/2021 de Infancia y Adolescencia de Andalucía, explicada a adolescentes del centro.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Ley Orgánica 8/2021: el derecho de niñas, niños y adolescentes a ser escuchados, explicado para 10–12 años.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D5 · Imágenes',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> «Niñas y niños jugando», «un adolescente en un centro de menores», «una persona educadora», «un chico triste».', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> «Una adolescente que cocina», «un educador que consuela a un niño», «jóvenes que se preparan para su primer empleo», «una familia diversa en una visita».', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D6 · CV',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Youssef, 17 años, prepara su vida adulta: primer CV con un taller de mecánica y prácticas en un taller de bicicletas.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Mariam, 17 años, prepara su vida adulta: primer CV con un curso de peluquería y voluntariado con personas mayores; quiere estudiar auxiliar de enfermería.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D8 · Actividad',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> «¿Qué quiero ser?» sobre profesiones y «La casa es de todas y todos» sobre corresponsabilidad doméstica.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Juego cooperativo para 8–11 años sobre las emociones en el grupo, sin preguntas sobre la familia.', // PROVISIONAL
                  },
                ],
              },
              {
                tipo: 'subtitulo',
                texto: 'D9 · Recurso',
              },
              {
                tipo: 'tarjetas',
                estilo: 'compactas',
                columnas: 1,
                items: [
                  {
                    texto: '<strong>A.</strong> Cuento de un chico que aprende a pedir ayuda cuando está triste, para 8–11 años.', // PROVISIONAL
                  },
                  {
                    texto: '<strong>B.</strong> Tarjetas para adolescentes sobre cómo decir «no» y poner límites en el grupo de amistades.', // PROVISIONAL
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'prompts',
    titulo: 'Banco de prompts',
    icono: 'bocadillo',
    bloques: [
      {
        tipo: 'entradilla',
        html: 'Lo que va entre corchetes se sustituye por la información de tu caso, siempre sin datos personales. La plantilla para divulgar derechos, prestaciones y normas es la de la diapositiva 46.',
      },
      {
        tipo: 'desplegables',
        abierto: 0,
        items: [
          {
            titulo: '1. Cláusula de igualdad', // PROVISIONAL
            resumen: 'Añadir a cualquier prompt',
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Usa un lenguaje no sexista e inclusivo, claro y accesible; evita las barras, las arrobas y la «x». Visibiliza a las mujeres y su aportación, con referentes y ejemplos diversos. Evita estereotipos y cualquier discriminación por sexo, origen racial o étnico, edad, discapacidad, religión, orientación o identidad sexual, expresión de género, situación socioeconómica o lengua, y ten en cuenta que estas desigualdades se suman. No des por hecho que los cuidados corresponden a las mujeres ni que el empleo y la toma de decisiones corresponden a los hombres. Si el tema es la violencia de género, nómbrala así, sitúa la responsabilidad en el agresor y nunca culpabilices a la víctima. Muestra a las personas con dignidad y como protagonistas de su vida, sin revictimizar. Si ves un sesgo en lo que te pido, avísame.</p>',
              },
            ],
          },
          {
            titulo: '2. Plantilla R-C-T-F-L', // PROVISIONAL
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Actúa como [rol profesional]. [Contexto: para quién es, en qué situación y con qué fin, sin datos personales]. [Tarea con un verbo claro]. [Formato: extensión, estructura y tono]. [Límites: qué evitar, por ejemplo tecnicismos o datos inventados].</p>',
              },
            ],
          },
          {
            titulo: '3. Carta a una familia', // PROVISIONAL
            resumen: 'M2',
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Actúa como profesional del trabajo social de una ONG de Málaga. Una familia de un barrio vulnerable, con poco tiempo y nivel medio de lectura, está en un programa de acompañamiento. Redacta una carta que la invite a una reunión de seguimiento el [día] a las [hora]. Máximo 120 palabras, tono cercano y respetuoso, frases cortas. No uses tecnicismos, termina con un teléfono de contacto y ofrece cambiar la hora si no les viene bien.</p>',
              },
            ],
          },
          {
            titulo: '4. Técnicas para afinar', // PROVISIONAL
            resumen: 'M2',
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Antes de empezar, hazme las preguntas que necesites para hacerlo bien.</p><p>Dame tres versiones: una formal, una cercana y una en lectura fácil.</p><p>Escríbelo con el estilo de este texto: [pegar texto de la entidad].</p>',
              },
            ],
          },
          {
            titulo: '5. Informe de seguimiento', // PROVISIONAL
            resumen: 'M3',
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Ordena estas notas anonimizadas en un informe de seguimiento con cuatro apartados: situación, áreas, acuerdos y próxima cita. No añadas valoraciones que no estén en las notas. Notas: [pegar notas sin datos identificativos].</p>',
              },
            ],
          },
          {
            titulo: '6. Traducción y lectura fácil', // PROVISIONAL
            resumen: 'M3',
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Traduce este recordatorio de cita al [idioma] y después escríbelo en lectura fácil en español: frases cortas, una idea por frase, sin tecnicismos. No cambies la fecha, la hora ni el lugar. Texto: [pegar texto].</p>',
              },
            ],
          },
          {
            titulo: '7. Imagen sin estereotipos', // PROVISIONAL
            resumen: 'M4',
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Crea una imagen de [escena]. Muestra diversidad de sexo, edad y origen, con personas con y sin discapacidad, sin estereotipos, con las personas en actitud activa y digna.</p>',
              },
            ],
          },
          {
            titulo: '8. CV con perspectiva de género', // PROVISIONAL
            resumen: 'M5',
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Actúa como profesional de la inserción sociolaboral. Elabora el perfil profesional del CV de una mujer de [edad] años que quiere trabajar en [sector]. Experiencia: [experiencia]. Reconoce como experiencia el trabajo de cuidados, aunque no haya sido remunerado, y tradúcelo en competencias para el puesto, sin disculpas por el hueco y sin inventar nada. Usa verbos de logro en femenino. No incluyas estado civil, hijas e hijos ni foto. [Añadir cláusula de igualdad].</p>',
              },
            ],
          },
          {
            titulo: '9. Simulación de entrevista', // PROVISIONAL
            resumen: 'M5',
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Actúa como responsable de selección de [sector]. Vas a entrevistar a una candidata para [puesto]. Haz una pregunta cada vez y espera mi respuesta. Al terminar, dame tres puntos fuertes y dos de mejora, con un tono respetuoso y motivador. No hagas preguntas sobre hijas e hijos, pareja, embarazo, religión ni origen.</p>',
              },
            ],
          },
          {
            titulo: '10. Actividad para infancia y adolescencia', // PROVISIONAL
            resumen: 'M6',
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Diseña una actividad sobre [tema] para niñas y niños de [edad] años de un centro de protección. No pidas hablar de la familia ni de recuerdos personales. Incluye referentes de mujeres en ciencia y oficios y de hombres en cuidados. Que todas y todos puedan elegir cualquier rol. Adapta el lenguaje y la duración a la edad. [Añadir cláusula de igualdad].</p>',
              },
            ],
          },
          {
            titulo: '11. Recurso de educación emocional', // PROVISIONAL
            resumen: 'M6',
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Crea [un cuento / diez tarjetas de situaciones / un role-play preventivo] para [edad] años sobre [emoción o situación], con protagonistas diversos y sin mandatos de género. Sin violencia explícita y sin preguntas sobre la historia personal. [Añadir cláusula de igualdad].</p>',
              },
            ],
          },
          {
            titulo: '12. Divulgar un derecho, una prestación o una norma', // PROVISIONAL
            resumen: 'M7',
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Actúa como profesional de la comunicación social de una ONG de Málaga. Te paso el texto oficial de [derecho, prestación o norma].</p><p>1. Extrae en una tabla: qué es, quién puede pedirlo, requisitos, documentos, plazo y dónde se solicita.</p><p>2. Explícalo en lenguaje claro para [perfil], con frases cortas y sin tecnicismos.</p><p>3. Añade la cláusula de igualdad: lenguaje inclusivo y sin dar por hecho quién cuida o quién tramita.</p><p>4. Si un dato no aparece en el texto, escribe «no consta». No inventes nada.</p><p>Texto oficial: [pegar aquí].</p>',
              },
            ],
          },
          {
            titulo: '13. Revisión final con la lista de verificación', // PROVISIONAL
            icono: 'bocadillo',
            bloques: [
              {
                tipo: 'texto',
                html: '<p>Revisa este texto con perspectiva de género: comprueba que nombra a todas las personas sin masculino genérico, que no usa barras ni arrobas, que no reproduce estereotipos ni da por hecho quién cuida o tramita, y que no muestra a las personas como pasivas. Señala cada problema y propón una alternativa. Texto: [pegar texto].</p>',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'mis-prompts',
    titulo: 'Mi banco de prompts', // PROVISIONAL
    icono: 'libro',
    bloques: [
      {
        tipo: 'entradilla',
        html: 'Cada prompt que funcione se guarda en el banco de prompts con tres datos: tarea, prompt y qué hay que revisar.', // PROVISIONAL
      },
      {
        tipo: 'ejercicio',
        id: 'mis-prompts-ej',
        titulo: 'Mi banco de prompts', // PROVISIONAL
        enunciado: '<p>Guarda aquí los prompts que te funcionen en las dinámicas.</p>', // PROVISIONAL
        campos: [
          {
            tipo: 'registro',
            id: 'mis-prompts',
            etiqueta: 'Mis prompts', // PROVISIONAL
            columnas: [
              {
                id: 'tarea',
                texto: 'Tarea',
              },
              {
                id: 'prompt',
                texto: 'Prompt',
              },
              {
                id: 'revisar',
                texto: 'Qué hay que revisar',
              },
            ],
          },
        ],
      },
    ],
  },
];
