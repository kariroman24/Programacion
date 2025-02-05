export default class Cl_Personal {
        constructor()  {
            this.contPersonal = 0;
            this.contObrero = 0;
            this.acumMontoTotal = 0;
            this.sueldoNuevo = 0;
        }
        procesarPersonal(p) {
            this.contPersonal++; 
            if (p.tipo == 1) {
                this.contObrero++; 
                this.sueldoNuevo = p.sueldo + (p.sueldo * 0.2);
                this.acumMontoTotal += p.sueldo * 0.2;
            } else if (p.tipo == 2) {
                this.sueldoNuevo = p.sueldo + (p.sueldo * 0.1);
                this.acumMontoTotal += p.sueldo * 0.1;
            }
        }
        porcentajeObrero() {
            return (this.contObrero / this.contPersonal) * 100;
        }

        
    }