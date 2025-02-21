/* GANANCIA ARTÍCULOS 
Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se 
desea hacer un procesamiento que determine la ganancia total que tendría la empresa al 
venderlos todos, y también el código del artículo con mayor precio de venta. 
El encargado de la tienda informa que dispone de los siguientes artículos: 888 (costo $10, 
precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 666 ($25, $35), 111 ($50, $70), 
333 ($40, $50), 444 ($80, $100) y 222 ($5, $10) */

import Cl_articulo from "./Cl_Tienda.js";
import Cl_Tienda from "./Cl_Tienda.js";

let articulo1= new Cl_articulo(888, 10, 15);
let articulo2= new Cl_articulo(777, 20, 25);
let articulo3= new Cl_articulo(999, 15, 25);
let articulo4= new Cl_articulo(666, 25, 35);
let articulo5= new Cl_articulo(111, 50, 70);
let articulo6= new Cl_articulo(333, 40, 50);
let articulo7= new Cl_articulo(444, 80, 100);
let articulo8= new Cl_articulo(222, 5, 10);

let Tienda= new Cl_Tienda();

Tienda.procesarArticulo(articulo1);
Tienda.procesarArticulo(articulo2);
Tienda.procesarArticulo(articulo3);
Tienda.procesarArticulo(articulo4); 
Tienda.procesarArticulo(articulo5);
Tienda.procesarArticulo(articulo6);
Tienda.procesarArticulo(articulo7);
Tienda.procesarArticulo(articulo8);

let salida=document.getElementById("salida");
salida.innerHTML = `
La ganancia sera de Bs: ${Tienda.gananciaTotal()}<br>
El codigo del articulo con mayor precio de venta es ${Tienda.codigoPrecioMayor()}<br>
`