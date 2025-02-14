export default class Cl_grupo {

    constructor() {
        this.contPersonas = 0;
        this.contMayoresEdad = 0;
    }
    procesarPersona(p) {
        this.contPersonas++;
        if (p.edad >= 18) {
            this.contMayoresEdad++;
        }
    }
    procentajeMayoresEdad() {
        return (this.contMayoresEdad*100)/this.contPersonas;
    }
    }