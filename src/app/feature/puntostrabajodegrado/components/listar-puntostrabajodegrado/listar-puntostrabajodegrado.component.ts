import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { PuntoTrabajoDeGrado } from '../../shared/model/puntotrabajodegrado';
import { PuntotrabajodegradoService } from '../../shared/service/puntotrabajodegrado.service';

@Component({
  selector: 'app-listar-puntostrabajodegrado',
  templateUrl: './listar-puntostrabajodegrado.component.html',
  styleUrls: ['./listar-puntostrabajodegrado.component.css']
})
export class ListarPuntostrabajodegradoComponent implements OnInit {

  public listarPuntoTrabajoDeGrado : Observable<PuntoTrabajoDeGrado[]>;

  valor : number;
  @Output() notificarValorCotizacion = new EventEmitter<Number>();

  constructor(protected puntoTrabajoDeGradoService: PuntotrabajodegradoService) { 
    this.valor = 0;
  }

  ngOnInit(): void {
    this.listarPuntoTrabajoDeGrado = this.puntoTrabajoDeGradoService.consultar();
  }

  realizarCotizacion( event ,valor: number){
    
    if(event.target.checked)
      this.valor += valor;
    else  
      this.valor -= valor;
  }
  
}
