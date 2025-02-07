export default class Cl_cliente {
    constructor(nombre,tipo_Servicio,edad,sexo) {
        this.nombre = nombre;
        this.tipo_Servicio = tipo_Servicio;
        this.edad = edad;
        this.sexo = sexo;
    }
    set nombre (nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set tipo_Servicio (tipo_Servicio) {
        this._tipo_Servicio = tipo_Servicio;
    }
    get tipo_Servicio() {
        return this._tipo_Servicio;
    }
    set edad (edad) {
        this._edad = edad;
    }
    get edad() {
        return this._edad;
    }
    set sexo (sexo) {
        this._sexo = sexo;
    }
    get sexo() {
        return this._sexo;
    }
}