export default class Cl_mBodega{
    constructor(){
        this.acumGanancias = 0;
    }
    procesarArticulo(a){
        this.acumGanancia += a.costo * 0.5;
    }
    totalGanancia(){
        return this.acumGanancia;
    }
}