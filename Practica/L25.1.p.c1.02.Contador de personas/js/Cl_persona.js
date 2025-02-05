export default class Cl_persona { 
    constructor(nombre, sexo) {
        this.nombre = nombre;
        this.sexo = sexo;
    }
    set sexo(s) {
        this._sexo = s.toUpperCase();
}
    get sexo() {
        return this._sexo;}
    }