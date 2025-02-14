export default class Cl_seccion {
    contructor() {
        this.contEstudiantes = 0;
        this.acumNotas = 0;
        this.contAprobados = 0;
        this.contReprobados = 0;
    }
    procesarEstudiante(estudiante) {
        this.contEstudiantes++;
        this.acumNotas += estudiante.NotaFinal;
        if(estudiante.NotaFinal >= 49) {
            this.contAprobados++;
        }
        else {
            this.contReprobados++;
        }
    }
    promedioSeccion() {
        return this.acumNotas / this.contEstudiantes;
    }
    totalAprobados() {
        return this.contAprobados;
    }
    totalReprobados() {
        return this.contReprobados;
    }
}