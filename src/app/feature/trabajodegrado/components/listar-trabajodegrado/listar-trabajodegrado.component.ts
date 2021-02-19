import { Component, OnInit } from '@angular/core';
import { TrabajoDeGrado } from '../../shared/model/TrabajoDeGrado';
import { TrabajodegradoService } from '../../shared/service/trabajodegrado.service';
import swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listar-trabajodegrado',
  templateUrl: './listar-trabajodegrado.component.html',
  styleUrls: ['./listar-trabajodegrado.component.css']
})
export class ListarTrabajodegradoComponent implements OnInit {

  trabajoDeGrado: TrabajoDeGrado;

  idUsuario = 1; //POR EL MOMENTO

  trabajosDeGradoPorUsuario : TrabajoDeGrado[];

  constructor(
    private modalService : NgbModal,
    private trabajoDeGradoService : TrabajodegradoService
  ) { }

  ngOnInit(): void {
    this.listarTrabajosDeGradoPorUsuario();
  }

  private listarTrabajosDeGradoPorUsuario(){
    this.trabajoDeGradoService.consultar(this.idUsuario).subscribe(
      listaTrabajosDeGrado => {
         this.trabajosDeGradoPorUsuario = listaTrabajosDeGrado
        }
    );
  }

  abrirModalActualizacion(trabajoDeGradoSeleccionado : TrabajoDeGrado, actualizarTrabajoDeGradoModal){
    this.trabajoDeGrado = trabajoDeGradoSeleccionado;
    this.modalService.open(actualizarTrabajoDeGradoModal, { centered: true }).result.then(
      () =>{
         this.actualizar();
      });
  }

  private actualizar(){
    this.trabajoDeGradoService.actualizar(this.trabajoDeGrado).subscribe(
      () => swal.fire('¡Actualización exitosa!', `El trabajo de grado se ha actualizado satisfactoriamente`)
                .then( 
                        () => this.listarTrabajosDeGradoPorUsuario()
                      ),
      error => { this.listarTrabajosDeGradoPorUsuario() 
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.mensaje
        })
      }
    )
  }

  eliminar(id:number, nombre :string){
    this.trabajoDeGradoService.eliminar(id).subscribe(
        () => swal.fire('¡Eliminacion exitosa!', `El trabajo de grado ${nombre} se ha eliminado satisfactoriamente `)
    );
  }

  cancelar(trabajoDeGrado : TrabajoDeGrado){
    this.trabajoDeGradoService.cancelar(trabajoDeGrado).subscribe(
      () => swal.fire('¡Cancelación exitosa!', `El trabajo de grado ${trabajoDeGrado.nombre} ha sido cancelado satisfactoriamente`),
      error => { 
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.mensaje
        })
      }
    )
  }

}
