export default class Cl_mPartido {
    constructor(resultadoPartido) {
        this.resultadoPartido = resultadoPartido;
    }
    set resultadoPartido(resultadoPartido) {
        this._resultadoPartido = +resultadoPartido;
    }
    get resultadoPartido() {
        return this._resultadoPartido;
    }
}