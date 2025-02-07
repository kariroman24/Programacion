export default class Cl_empresa { 
    constructor()  {
        this.contMujeresMayores = 0;
        this.menorEdad = 100;
        this.contClientes = 0;
        this.acumEdad = 0;
}
procesarCliente(c)  {
    this.contClientes++;
    if (c.sexo == 2 && c.edad >= 18) {
        this.contMujeresMayores++;
    }
    if (c.edad < this.menorEdad) {
        this.menorEdad = c.edad;
    }
    this.acumEdad += c.edad;
}
TotalMujeresMayores()  {
    return this.contMujeresMayores;
}
MenorEdad()  {
    return this.menorEdad;
}
promedioEdad()  {
    return this.acumEdad / this.contClientes;
}
}