// Estructura del recurso: bloques y pantallas en orden de navegación. Generado por montar.py.

import { b_inicio } from './inicio.js';
import { b_u1 } from './u1.js';
import { b_u2 } from './u2.js';
import { b_u3 } from './u3.js';
import { b_u4 } from './u4.js';
import { b_u5 } from './u5.js';
import { b_u6 } from './u6.js';
import { b_u7 } from './u7.js';
import { b_banco } from './banco.js';
import { b_herramientas } from './herramientas.js';
import { b_cierre } from './cierre.js';

export const INDICE = [
  { ...{
    id: 'inicio',
    titulo: 'Inicio',
    acento: 'principal',
  }, pantallas: b_inicio },
  { ...{
    id: 'u1',
    titulo: '1. Fundamentos de la IA generativa', // PROVISIONAL
    acento: 'principal',
  }, pantallas: b_u1 },
  { ...{
    id: 'u2',
    titulo: '2. El prompt profesional', // PROVISIONAL
    acento: 'principal',
  }, pantallas: b_u2 },
  { ...{
    id: 'u3',
    titulo: '3. Aplicaciones en la atención social y protección de datos', // PROVISIONAL
    acento: 'principal',
  }, pantallas: b_u3 },
  { ...{
    id: 'u4',
    titulo: '4. Sesgos de género en la IA', // PROVISIONAL
    acento: 'secundario',
  }, pantallas: b_u4 },
  { ...{
    id: 'u5',
    titulo: '5. Orientación sociolaboral con enfoque de género', // PROVISIONAL
    acento: 'secundario',
  }, pantallas: b_u5 },
  { ...{
    id: 'u6',
    titulo: '6. Coeducación y educación emocional', // PROVISIONAL
    acento: 'secundario',
  }, pantallas: b_u6 },
  { ...{
    id: 'u7',
    titulo: '7. Comunicación inclusiva de derechos, prestaciones y normativa', // PROVISIONAL
    acento: 'secundario',
  }, pantallas: b_u7 },
  { ...{
    id: 'banco',
    titulo: 'Banco de casos y de prompts', // PROVISIONAL
    acento: 'principal',
  }, pantallas: b_banco },
  { ...{
    id: 'herramientas',
    titulo: 'Herramientas',
    acento: 'secundario',
  }, pantallas: b_herramientas },
  { ...{
    id: 'cierre',
    titulo: 'Cierre',
    acento: 'principal',
  }, pantallas: b_cierre },
];
