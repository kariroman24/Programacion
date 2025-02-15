export default class Cl_seccion {
    constructor(){
        this.contEstudiantes = 0;
        this.acumNotas = 0;
        this.contReprobados = 0;
        this.contAprobados = 0;
    }

    procesarEstudiante(estudiante){
        this.contEstudiantes++;
        this.acumNotas += estudiante.nota;
        if(estudiante.nota < 48){
            this.contReprobados++;
        }else{
            this.contAprobados++;
        }
    }
    promedioSeccion(){
        return this.acumNotas / this.contEstudiantes;
    }
}