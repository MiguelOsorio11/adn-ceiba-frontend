import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { PuntoTrabajoDeGrado } from '../model/puntotrabajodegrado';

@Injectable({
  providedIn: 'root'
})
export class PuntotrabajodegradoService {

  constructor(protected http : HttpService) {}

  consultar() {
    return this.http.doGet<PuntoTrabajoDeGrado[]>(`${environment.endpoint}/puntostrabajodegrado`, this.http.optsName('consultar los puntos de un trabajo de grado'));
  }
}
