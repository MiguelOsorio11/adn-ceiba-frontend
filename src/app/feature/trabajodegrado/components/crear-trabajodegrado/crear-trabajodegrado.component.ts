import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cita } from 'src/app/feature/cita/shared/model/Cita';
import { ListarPuntostrabajodegradoComponent } from 'src/app/feature/puntostrabajodegrado/components/listar-puntostrabajodegrado/listar-puntostrabajodegrado.component';
import { EstadoTrabajoDeGrado } from '../../shared/model/EstadoTrabajoDeGrado';
import { TrabajoDeGrado } from '../../shared/model/TrabajoDeGrado';
import { TrabajodegradoService } from '../../shared/service/trabajodegrado.service';
import swal from 'sweetalert2';
import { CitaService } from 'src/app/feature/cita/shared/service/cita.service';

@Component({
  selector: 'app-crear-trabajodegrado',
  templateUrl: './crear-trabajodegrado.component.html',
  styleUrls: ['./crear-trabajodegrado.component.css']
})
export class CrearTrabajodegradoComponent implements OnInit {

  respuesta = {
    valor : 0
  }

  trabajoDeGrado: TrabajoDeGrado = new TrabajoDeGrado();
  citaTrabajoDeGrado : Cita = new Cita();
  fechaCitaDefault : number;

  @ViewChild(ListarPuntostrabajodegradoComponent)
  listarPuntoTrabajoDeGrado : ListarPuntostrabajodegradoComponent;


    constructor
    (
      protected trabajoDeGradoService: TrabajodegradoService,
      private citaService : CitaService,
      private modalService : NgbModal
    ) { }

  ngOnInit(): void { 
    let today = new Date();
    this.fechaCitaDefault = Date.parse(today.toISOString().split('T')[0]);
  }

  crear(citaModal, primeraEntrada){
    
    if(primeraEntrada){

      this.trabajoDeGrado.idUsuario = 1; //POR EL MOMENTO
      this.trabajoDeGrado.estado = EstadoTrabajoDeGrado.EN_ESPERA;
      this.trabajoDeGradoService.guardar(this.trabajoDeGrado).subscribe(
        response => {
          
          swal.fire('Creación del trabajo de grado con exito', `Trabajo de grado creado con id ${response.valor}`).then(
            () =>{ this.citaTrabajoDeGrado.idTrabajoDeGrado = response.valor;
            //open dialog to create an appointment
            this.openVerticallyCentered(citaModal) 
          })
          
        },
        error => { 
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.error.mensaje
          })
        }
      );
    }else{
      //open dialog to create an appointment
      this.openVerticallyCentered(citaModal) 
    }
  }

  obtenerCotizacion(valorCotizacion : number){
    this.trabajoDeGrado.valor = valorCotizacion;
  }


  openVerticallyCentered(citaModal) {
    this.modalService.open(citaModal, { centered: true }).result.then(
      () =>{
         this.guardarCita(citaModal);
      });
  }

  private guardarCita(citaModal){

    let fechaCitaString = this.citaTrabajoDeGrado.fechaCita.toString();
    var fechaSinT = fechaCitaString.replace("T", " ").concat(":00"); 
    this.citaTrabajoDeGrado.fechaCita = fechaSinT;
    this.citaService.guardar(this.citaTrabajoDeGrado).subscribe(
      result => {
        swal.fire('Cita agendada', `Se crea la cita con identificador ${result.valor}`);
      },
      error => { 
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.mensaje
        }).then( () => this.crear(citaModal,false))
      }
    )
  }


}
