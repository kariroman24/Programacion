export default class Cl_Tienda{

    constructor() {
        this.mayorPrecio = 0;
        this.acumCosto = 0;
        this.acumPrecioVenta = 0;
        this.auxCodigo = 0;
    }
    procesarArticulo(articulo) {
        
    this.acumCosto += articulo.costo;
    this.acumPrecioVenta += articulo.precioVenta;

    if (articulo.precioVenta > this.mayorPrecio) {
        this.mayorPrecio = articulo.precioVenta;
        this.auxCodigo = articulo.codigo;
    }
}
gananciaTotal() {
    return this.acumPrecioVenta - this.acumCosto;
}
codigoPrecioMayor() {
    return this.auxCodigo;
}
}
