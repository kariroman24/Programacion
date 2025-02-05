export default class Cl_Personal {
    constructor(cedula, sueldo, tipo) {
        this.cedula = cedula;
        this.sueldo = sueldo;
        this.tipo = tipo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    get sueldo() {
        return this._sueldo;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }
}