export default class Cl_estudiante {
    constructor(cedula, nota) {
        this.cedula = cedula;
        this.nota = nota;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set nota(nota) {
        this._nota = nota;
    }
    get nota() {
        return this._nota;
    }
}