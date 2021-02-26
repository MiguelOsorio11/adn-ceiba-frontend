import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { TrabajoDeGrado } from 'src/app/feature/trabajodegrado/shared/model/TrabajoDeGrado';
import { Cita } from '../../shared/model/Cita';
import { CitaService } from '../../shared/service/cita.service';
import swal from 'sweetalert2';
import { TrabajodegradoService } from 'src/app/feature/trabajodegrado/shared/service/trabajodegrado.service';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  trabajosDeGradoSinCitas : Observable<TrabajoDeGrado[]>
  cita : Cita  = new Cita();

  constructor
  ( 
    private citaService : CitaService,
    private trabajoDeGradoService : TrabajodegradoService,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.listarTrabajosDeGradoSinCitas();
  }

  listarTrabajosDeGradoSinCitas(){
    this.trabajosDeGradoSinCitas = this.trabajoDeGradoService.consultarTrabajosDeGradoSinCita();
  }

  abrirModalCrearCita(citaModal,nombreTrabajo, idTrabajoDeGrado){
    this.modalService.open(citaModal, { centered: true }).result.then(
      () =>{
         this.guardarCita(nombreTrabajo,idTrabajoDeGrado);
      });
  }

  
  private guardarCita(nombreTrabajo, idTrabajoDeGrado){

    const fechaCitaString = this.cita.fechaCita.toString();
    const fechaSinT = fechaCitaString.replace("T", " ").concat(":00"); 
    this.cita.fechaCita = fechaSinT;
    this.cita.idTrabajoDeGrado = idTrabajoDeGrado;
    this.citaService.guardar(this.cita).subscribe(
      () => { 
        swal.fire(' Cita agendada', ` Se agendo la cita para el trabajo de grado ${nombreTrabajo}`); 
        this.listarTrabajosDeGradoSinCitas();
      }
    );
  }

}
