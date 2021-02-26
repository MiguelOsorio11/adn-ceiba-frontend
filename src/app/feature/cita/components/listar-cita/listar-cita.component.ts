import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { EstadoTrabajoDeGrado } from 'src/app/feature/trabajodegrado/shared/model/EstadoTrabajoDeGrado';
import { TrabajoDeGrado } from 'src/app/feature/trabajodegrado/shared/model/TrabajoDeGrado';
import { TrabajodegradoService } from 'src/app/feature/trabajodegrado/shared/service/trabajodegrado.service';
import { Cita } from '../../shared/model/Cita';
import { CitaService } from '../../shared/service/cita.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent implements OnInit {

  citasPorUsuario : Observable<Cita[]>;
  idUsuario = 1;
  today = new Date().toISOString().slice(0,10);

  trabajoDeGrado : TrabajoDeGrado;

  constructor(
    private citaService : CitaService,
    private trabajoDeGradoService : TrabajodegradoService,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.citasPorUsuario = this.citaService.consultar(this.idUsuario,this.today);
  }

  abrirModalAtenderCita(nombreModal, idTrabajoDeGrado : number){
   
    this.trabajoDeGradoService.obtenerTrabajoDeGrado(idTrabajoDeGrado).subscribe(
      response => {
        this.trabajoDeGrado = response

        this.modalService.open((nombreModal), { centered: true }).result.then(
          () =>{

            let fechaConfirmacionString = new Date().toISOString().slice(0, 16).toString();
            var fechaSinT = fechaConfirmacionString.replace("T", " ").concat(":00"); 
            
             this.trabajoDeGrado.fechaConfirmacion = fechaSinT;
             this.trabajoDeGrado.estado = EstadoTrabajoDeGrado.EN_PROGRESO;
            
             this.trabajoDeGradoService.actualizar(this.trabajoDeGrado).subscribe(
               () => swal.fire('¡Enhorabuena!', `El trabajo de grado esta en progreso`)
             );
          }
        ,() =>{
          console.log("FINALIZADO")
          this.trabajoDeGrado.estado = EstadoTrabajoDeGrado.FINALIZADO;
          this.trabajoDeGradoService.actualizar(this.trabajoDeGrado).subscribe(
            () => swal.fire('Sera en otra Ocasión', `El trabajo de grado se ha finalizado`)
          );;
        });
      
      
      
      }
    );


  }

}