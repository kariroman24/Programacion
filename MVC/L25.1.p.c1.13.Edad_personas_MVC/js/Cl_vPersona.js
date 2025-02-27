export default class Cl_vPersona {
    constructor(){
        this.inEdad = document.getElementById("personaForm_inEdad");
        this.btProcesar = document.getElementById("personaForm_btProcesar");
    }
    get edad(){
        return +this.inEdad.value;
    }
}