export default class Cl_bodega {
    constructor() {
        this.acumGanancias = 0;
    }
    procesarArticulo(a) {
        this.acumGanancias += a.costo * 0.5;
    }
    ganancias() {
        return this.acumGanancias;
    }
}