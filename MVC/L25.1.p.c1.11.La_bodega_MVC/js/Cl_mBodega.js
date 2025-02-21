export default class Cl_mBodega {
  constructor() {
     this.acumGanancias = 0;
  }
  procesarArticulo(articulo) {
      this.acumGanancias += articulo.ganancia();
  }
  totalGanancias() {
      return this.acumGanancias;
  }
}