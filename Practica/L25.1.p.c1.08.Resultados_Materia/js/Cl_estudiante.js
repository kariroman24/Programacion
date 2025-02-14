export default class Cl_estudiante {
constructor(cedula, notaFinal) {
this.cedula = cedula;
this.notaFinal = notaFinal;
}
set Cedula(cedula) {
this.cedula = +cedula;
}
set NotaFinal(notaFinal) {
this.notaFinal = +notaFinal;
}
get Cedula() {
return this.cedula;
}
get NotaFinal() {
return this.notaFinal; 
}
}