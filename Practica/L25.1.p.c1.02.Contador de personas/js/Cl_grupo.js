export default class Cl_grupo {
    constructor() { 
        this.contHombres = 0;
        this.contMujeres = 0;
    }
    procesarPersona(p) {
        if (p.sexo === "M") {
            this.contHombres++;
        } else {
            this.contMujeres++;
        }
    }
    cantidadPersonas() {
        return this.contHombres + this.contMujeres;
    }
    cantidadMujeres() {
        return this.contMujeres;
    }
    cantidadHombres() {
        return this.contHombres;
    }
}