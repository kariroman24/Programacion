export default class Cl_vArticulo{
    constructor(){
    this.vista = documet.getElementById("articuloForm");
    this.inCosto = document.getElementById("articuloForm_inCosto");
    this.aceptar = document.getElementById("articuloForm_aceptar"); }
    
    get costo() {
        return this.inCosto.value;
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}
