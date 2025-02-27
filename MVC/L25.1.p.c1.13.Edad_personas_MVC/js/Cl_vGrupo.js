import Cl_mPersona from "./Cl_mPersona.js";
import Cl_vPersona from "./Cl_vPersona.js";

export default class Cl_vGrupo{
    constructor(){
        this.controlador = null;
        this.inEdad = document.getElementById("mainForm_inEdad");
        this.tabla = document.getElementById("mainForm_tabla");
        this.salida = document.getElementById("mainForm_salida");
        this.vPersona = new Cl_vPersona();
        this.vPersona.btProcesar.onclick = () => this.controlador.procesarPersona();
        this.vPersona.btProcesar = true;
        
    }
    procesarPersona(){
        this.mPersona = new Cl_mPersona({
            edad: this.vPersona.edad
        });
        return this.mPersona;
    }
    reportarPersona(promedioEdad){
        this.tabla.innerHTML += `<tr>
            <td>${this.mPersona.edad}</td>
            </tr>`;
        this.salida.innerHTML = `
        <br>La edad promedio es ${promedioEdad}`;
    }
}