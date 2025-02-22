import Cl_mPartido from "./Cl_mPartido.js"; 
import Cl_vPartido from "./Cl_vPartido.js"; 

export default class Cl_mEquipo {
    constructor() {
        this.controlador = null;
        this.tabla = document.getElementById("mainForm_tabla");
        this.salida = document.getElementById("salida");
        this.vPartido = new Cl_vPartido();
        this.vPartido.btProcesar.onclick = () => this.controlador.procesarPartido();
    }
    procesarPartido() {
        this.mPartido = new Cl_mPartido({
            resultadoPartido: this.vPartido.resultadoPartido,
        })
        return this.mPartido;
    }
    reportarPartido(resultadoPartido, porcentajeGanados) {
        this.tabla.innerHTML += `<tr>
        <td>${resultadoPartido}</td>
        <td>${porcentajeGanados}</td>
   </tr>`;
        this.salida.innerHTML = `
        <br> Ganaste el ${porcentajeGanados}% de los juegos`;

    }
}