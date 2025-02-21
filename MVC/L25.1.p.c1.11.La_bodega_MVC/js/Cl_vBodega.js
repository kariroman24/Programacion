import Cl_mArticulo from "./Cl_mArticulo.js";
import Cl_vArticulo from "./Cl_vArticulo.js";
export default class Cl_vBodega {
    constructor() {
        this.controlador = null;
        this.salida = document.getElementById("mainForm_salida");
        this.vArticulo = new Cl_vArticulo();
        this.vArticulo.btProcesar.onclick = () => this.controlador.procesarArticulo();
    }
    procesarArticulo() {
        this.mArticulo = new Cl_mArticulo({
            costo: this.vArticulo.costo 
        });
        return this.mArticulo;
    }
    reportarArticulo(totalGanancias) {
        this.salida.innerHTML = `La ganancia sera de Bs.${totalGanancias}`;
    }
}