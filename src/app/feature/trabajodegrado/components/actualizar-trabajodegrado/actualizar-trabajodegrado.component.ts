import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrabajoDeGrado } from '../../shared/model/TrabajoDeGrado';
import { TrabajodegradoService } from '../../shared/service/trabajodegrado.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-trabajodegrado',
  templateUrl: './actualizar-trabajodegrado.component.html',
  styleUrls: ['./actualizar-trabajodegrado.component.css']
})
export class ActualizarTrabajodegradoComponent implements OnInit {

  trabajoDeGrado : TrabajoDeGrado;

  constructor
  (
    private route : ActivatedRoute, 
    private router : Router,
    private trabajoDeGradoService : TrabajodegradoService
  ) {
     
   }

  ngOnInit(): void {
    //this.route.queryParams.subscribe( (params : any) => {
    //  console.log(params)
    //  this.trabajoDeGrado = JSON.parse(params["trabajodegrado"])
    //})
    this.route.data.subscribe( d => console.log(d))

    //this.trabajoDeGrado =  JSON.parse(this.route.snapshot.paramMap.get('trabajo'));
  }

  actualizar(){
    this.trabajoDeGradoService.actualizar(this.trabajoDeGrado).subscribe(
      () => swal.fire('¿Actualización exitosa!', `El trabajo de grado se ha actualizado satisfactoriamente`)
                .then( () => this.router.navigate ['/listar'])
    )
  }

}
