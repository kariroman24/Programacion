export default class Cl_mVenta {
    constructor({cliente, factura, costo, cnArticulos}) {
        this.cliente = cliente;
        this.factura = factura;
        this.costo = costo;
        this.cnArticulos = cnArticulos;
    }

set cliente(cliente) {
    this._cliente = cliente;
}
get cliente() {
    return this._cliente; 
}
set factura(factura) {
    this._factura = +factura;
}
get factura(){
    return this._factura;
}
set costo(costo){
    this._costo = +costo;
}
get costo(){
    return this._costo;
}
set cnArticulos(cnArticulos){
    this._cnArticulos = +cnArticulos;
}
get cnArticulos(){
    return this._cnArticulos;
}
}