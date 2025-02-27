/* EDAD PERSONAS 
 Conociendo la edad de varias personas, indicar la edad promedio. 
Ej. Edades de las personas es: 15, 14, 19, 20, 16 y 18 
La salida requerida presenta el siguiente formato: 
La edad promedio es 17 
*/

import Cl_controlador from "./Cl_controlador.js";
import Cl_mGrupo from "./Cl_mGrupo.js";
import Cl_vGrupo from "./Cl_vGrupo.js";

export default class Cl_principal {
    constructor() {
        let vista = new Cl_vGrupo();
        let modelo = new Cl_mGrupo();
        let controlador = new Cl_controlador(modelo, vista);
        vista.controlador = controlador;
    }
}