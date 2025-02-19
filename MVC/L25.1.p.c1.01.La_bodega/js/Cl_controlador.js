export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarArticulo() {
        this.modelo.agregarArticulo(this.vista.agregarArticulo);
        this.vista.agregarArticulo(
            this.modelo.totalGanancia(),
        );
    }
}