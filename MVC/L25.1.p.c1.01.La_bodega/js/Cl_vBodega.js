import Cl_vArticulo from "./Cl_vArticulo.js";
import Cl_mArticulo from "./Cl_mArticulo.js";

export default class Cl_vBodega {
    constructor() {
        this.controlador = null;
        this.mArticulo = null;
        this.vArticulo = new Cl_vArticulo();
        this.btAgregar = document.getElementById("Agregar");
        this.btSalida = document.getElementById("Salida");
        this.btAgregar.onclick = () => this.controlador.agregarArticulo();
    }
    agregarArticulo() {
        this.mArticulo = new Cl_mArticulo( {
            costo: this.vArticulo.costo,
        })
        return this.mArticulo;
    }
    reportarArticulo(totalGanancia){
        this.salida.innerHTML += `La ganancia sera de Bs.${totalGanancia}`
    }
}