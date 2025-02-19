import Cl_mBodega from "./Cl_mBodega";
import Cl_vBodega from "./Cl_vBodega";
import Cl_controlador from "./Cl_controlador";

export default class Cl_index {
    contructor() {
        let vista = new Cl_vBodega();
        let modelo = new Cl_mBodega();
        vista.controlador = controlador;
    }
}