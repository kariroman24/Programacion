export default class Cl_mTienda {
    constructor(montoCaja, porcIncremento){
        this.montoCaja = montoCaja;
        this.porcIncremento = porcIncremento;
        this.acumCosto = 0;
        this.mayorCosto = 0;
        this.auxNombre = "";
        this.contClientes1Articulo = 0;
    }
    set montoCaja(montoCaja){
        this._montoCaja = +montoCaja;
    }
    get montoCaja(){
        return this._montoCaja;
    }
    set porcIncremento(porcIncremento) {
        this._porcIncremento = +porcIncremento;
    }
    get porcIncremento() {
        return this._porcIncremento;
    }
    procesarVenta(venta) {
        this.acumCosto += venta.costo + ((venta.costo * this.porcIncremento) / 100);
        if (venta.costo > this.mayorCosto) {
            this.mayorMonto = venta.costo;
            this.auxNombre = venta.cliente;
        }
        if (venta.cnArticulos === 1) {
            this.contClientes1Articulo++;
        }
        else {
            return 0;
        }
    }
    totalCaja(){
        return this.acumCosto + this.montoCaja;
    }
    clienteMayorPago(){
        return this.auxNombre;
    }
    clientes1Articulo(){
        return this.contClientes1Articulo;
    }
}