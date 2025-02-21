export default class Cl_mArticulo {
  constructor({costo}) {
      this.costo = costo;
  }
  set costo(costo) {
      this._costo = +costo;
  }
  get costo() {
      return this._costo;
  }
  ganancia() {
      return this._costo * 0.5;
  }
}