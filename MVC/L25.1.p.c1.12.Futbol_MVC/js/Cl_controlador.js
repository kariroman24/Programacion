export default class Cl_controlador {
    constructor(vista, modelo){
        this.vista = vista;
        this.modelo = modelo;
    }
    procesarPartido() {
        this.modelo.procesarPartido(this.vista.procesarPartido());
        this.vista.reportarPartido(
            this.modelo.porcentajeGanados()
        );
}
}