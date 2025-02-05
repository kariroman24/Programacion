export default class Cl_articulo {
    constructor(costo) {
        this.costo = costo;
    }
    set costo(costo) {
        this._costo = costo;
    }
    get costo() {
        return this._costo;
    }
}