/*FÚTBOL 
Conociendo los resultados de varios juegos de tu equipo de fútbol, donde 1 es ganar y 0 es 
perder, hacer un programa que indique el porcentaje de juegos que ganaste. 
Ej. Resultados de 6 juegos: 1, 1, 0, 1, 0, 1, 1 
la salida requerida presenta el siguiente formato: 
Ganaste el 66.67% de los juegos */

import Cl_mEquipo from "./Cl_mEquipo.js"; 
import Cl_vEquipo from "./Cl_vEquipo.js"; 
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_principal {
    constructor(){
        let vista = new Cl_vEquipo();
        let modelo = new Cl_mEquipo();
        this.controlador = new Cl_controlador(vista, modelo);
        vista.controlador = this.controlador;
    }
    }