/** 
 * CONTADOR DE PERSONAS 
 * Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos 
 * datos y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas. 
 * Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, 
 * Liz, Marcos y Leo; la salida requerida presenta el siguiente formato: 
 * Cantidad de personas: 12 
 * Cantidad de hombres: 5 
 * Cantidad de mujeres: 7 
 */ 
import Cl_grupo from "./Cl_grupo.js";
import Cl_persona from "./Cl_persona.js";

let persona1 = new Cl_persona("Luisa", "F");
let persona2 = new Cl_persona("Ana", "F");
let persona3 = new Cl_persona("José", "M");
let persona4 = new Cl_persona("Carmen", "F");
let persona5 = new Cl_persona("Rosa", "F");
let persona6 = new Cl_persona("José", "M");
let persona7 = new Cl_persona("María", "F");
let persona8 = new Cl_persona("Luz", "F");
let persona9 = new Cl_persona("Rafael", "M");
let persona10 = new Cl_persona("Liz", "F");
let persona11 = new Cl_persona("Marcos", "M");
let persona12 = new Cl_persona("Leo", "M");

let grupo = new Cl_grupo();

grupo.procesarPersona(persona1);
grupo.procesarPersona(persona2);
grupo.procesarPersona(persona3);
grupo.procesarPersona(persona4);
grupo.procesarPersona(persona5);
grupo.procesarPersona(persona6);
grupo.procesarPersona(persona7); 
grupo.procesarPersona(persona8);
grupo.procesarPersona(persona9);
grupo.procesarPersona(persona10);
grupo.procesarPersona(persona11);
grupo.procesarPersona(persona12);

alert(`Cantidad de personas: ${grupo.cantidadPersonas()}\nCantidad de hombres: ${grupo.cantidadHombres()}\nCantidad de mujeres: ${grupo.cantidadMujeres()}`);