// Punto de entrada.

import { iniciarAnalitica } from './analytics.js';
import { iniciarPlayer } from './player.js';
import { iniciarMiProyecto } from './mi-proyecto.js';

iniciarAnalitica();
const player = iniciarPlayer();
iniciarMiProyecto(player);
