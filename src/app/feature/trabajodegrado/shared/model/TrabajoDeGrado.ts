import { EstadoTrabajoDeGrado } from "./EstadoTrabajoDeGrado";

export class TrabajoDeGrado {

    public id: number;
    public idUsuario :number; 
    public nombre : string;
    public descripcion: string;
    public estado: EstadoTrabajoDeGrado;
    public valor: number;
    public fechaConfirmacion : string;

    constructor(){ }
    
}