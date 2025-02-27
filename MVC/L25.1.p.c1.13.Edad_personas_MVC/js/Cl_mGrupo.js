export default class Cl_mGrupo{
    constructor(){
        this.acumEdad = 0;
        this.contPersonas = 0;
    }
    procesarPersona(persona){
        this.acumEdad = this.acumEdad + persona.edad;
        this.contPersonas = this.contPersonas + 1;
}
    promedioEdad(){
        return this.acumEdad / this.contPersonas;
    } 
}