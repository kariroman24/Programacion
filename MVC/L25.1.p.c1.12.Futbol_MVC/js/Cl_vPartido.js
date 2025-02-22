export default class Cl_vPartido {
    constructor(){
        this._inResultadoPartido = document.getElementById("partidoForm_inResultadoPartido");
        this.btProcesar = document.getElementById("partidoForm_btProcesar");
    }
    get inResultadoPartido() {
        return +this._inResultadoPartido.value;
    }
}