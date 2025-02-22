export default class Cl_mEquipo {
    constructor() {
        this.contPartidos = 0;
        this.contGanados = 0;
    }
    procesarPartido(partido){
        this.contPartidos++;
        if(partido.resultadoPartido == 1){
            this.contGanados++;
        }
    }
    porcentajeGanados(){
        return (this.contGanados / this.contPartidos) * 100;
    }
}