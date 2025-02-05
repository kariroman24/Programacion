export default class Cl_equipo {
    constructor(){
        this.contGanados = 0;
        this.contPartidos = 0; 
    }
    procesarJuego(j) {
        this.contPartidos++;
    if (j.resultado == 1) {
        this.contGanados++;
    }
    }
    porcentajeGanados(){
        return (this.contGanados * 100) / this.contPartidos;
    }
}