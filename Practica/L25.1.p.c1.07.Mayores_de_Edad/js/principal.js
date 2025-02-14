/* MAYORES DE EDAD 
Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y 
reporte al final el porcentaje de personas que son mayores de edad. 
Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18), 
José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16); la salida requerida 
presenta el siguiente formato: 
Cantidad de personas: 12 
Cantidad de personas mayor de edad: 7 
Porcentaje de personas mayor de edad: 58.33% */ 

import Cl_grupo from "./Cl_grupo.js";
import Cl_persona from "./Cl_persona.js";

let persona1 = new Cl_persona("Luis", 15);
let persona2 = new Cl_persona("Ana", 19);
let persona3 = new Cl_persona("José", 21);
let persona4 = new Cl_persona("Carmen", 17);
let persona5 = new Cl_persona("Rosa", 18);
let persona6 = new Cl_persona("José", 22);
let persona7 = new Cl_persona("María", 17);
let persona8 = new Cl_persona("Luz", 19);
let persona9 = new Cl_persona("Rafael", 23);
let persona10 = new Cl_persona("Liz", 15);
let persona11 = new Cl_persona("Marcos", 20);
let persona12 = new Cl_persona("Leo", 16);

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

let salida=document.getElementById("salida");
salida.innerHTML=`Cantidad de personas: ${grupo.contPersonas} <br>
Cantidad de personas mayor de edad: ${grupo.contMayoresEdad} <br>
Porcentaje de personas mayor de edad: ${grupo.procentajeMayoresEdad()}%`;