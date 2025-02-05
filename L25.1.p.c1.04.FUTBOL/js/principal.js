/* FÚTBOL 
 * Conociendo los resultados de varios juegos de tu equipo de fútbol, donde 1 es ganar y 0 es 
 * perder, hacer un programa que indique el porcentaje de juegos que ganaste. 
 * Ej. Resultados de 6 juegos: 1, 1, 0, 1, 0, 1 
 * la salida requerida presenta el siguiente formato:  
 * Ganaste el 66.67% de los juegos */

import Cl_juego from "./Cl_juego.js";
import Cl_equipo from "./Cl_equipo.js";

let juego1 = new Cl_juego(1);
let juego2 = new Cl_juego(1);
let juego3 = new Cl_juego(0);
let juego4 = new Cl_juego(1);
let juego5 = new Cl_juego(0);
let juego6 = new Cl_juego(1);

let equipo = new Cl_equipo();

equipo.procesarJuego(juego1);
equipo.procesarJuego(juego2);
equipo.procesarJuego(juego3);
equipo.procesarJuego(juego4);  
equipo.procesarJuego(juego5);
equipo.procesarJuego(juego6);

alert(`Ganaste el ${equipo.porcentajeGanados()}%`)