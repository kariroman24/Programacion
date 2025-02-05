/* AUMENTA SUELDO 
En una empresa se asignará un aumento del 20% a todo el personal obrero y un 10% al 
personal administrativo. Se conoce de cada empleado su cédula, sueldo actual y el tipo de 
empleado (1-Obrero, 2-Administrativo). Al procesar todos los empleados, la empresa desea 
saber: a) el nuevo sueldo de cada empleado, por la empresa: b) el monto total que deberá 
pagar sólo por concepto de incremento de sueldo a todo el personal y c) el porcentaje de 
personal obrero. 
La empresa entrega la siguiente información como referencia del reporte de salida requerido: 
La cédula 555 tiene nuevo sueldo de $220 
La cédula 888 tiene nuevo sueldo de $600 
La cédula 777 tiene nuevo sueldo de $440 
La cédula 666 tiene nuevo sueldo de $720 
La cédula 444 tiene nuevo sueldo de $960 
Total a pagar sólo por aumento de sueldo: $440 
Porcentaje de personal obrero: 60% 
Aclarando que la cédula 555 es de un administrativo con sueldo actual de 200, el 888 es 
obrero con sueldo actual de 500, el 777 administrativo con 400, el 666 es obrero con sueldo 
actual de 600, y el 444 es obrero con 800 // */

import Cl_Personal from "./Cl_Personal.js";
import Cl_Empresa from "./Cl_Empresa.js";

let personal1 = new Cl_Personal(555, 200, 2);
let personal2 = new Cl_Personal(888, 500, 1);
let personal3 = new Cl_Personal(777, 400, 2);
let personal4 = new Cl_Personal(666, 600, 1);
let personal5 = new Cl_Personal(444, 800, 1); 

let empresa = new Cl_Empresa();

empresa.procesarPersonal(personal1);
empresa.procesarPersonal(personal2);
empresa.procesarPersonal(personal3);
empresa.procesarPersonal(personal4);
empresa.procesarPersonal(personal5);

alert(`La cedula ${personal1.cedula} tiene nuevo sueldo de ${personal1.sueldo}
La cedula ${personal2.cedula} tiene nuevo sueldo de ${personal2.sueldo}
La cedula ${personal3.cedula} tiene nuevo sueldo de ${personal3.sueldo}
La cedula ${personal4.cedula} tiene nuevo sueldo de ${personal4.sueldo}
La cedula ${personal5.cedula} tiene nuevo sueldo de ${personal5.sueldo}
Total a pagar solo por aumento de sueldo: ${empresa.acumMontoTotal}
Porcentaje de personal obrero: ${empresa.contObrero * 100 / empresa.contPersonal}%`);