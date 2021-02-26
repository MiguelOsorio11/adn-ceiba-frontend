import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Cita } from '../model/Cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http : HttpService) { }

  public guardar(cita: Cita) {
    return this.http.doPost<Cita, any>(`${environment.endpoint}/cita`, cita,
                                         this.http.optsName('crear cita'));
  }

  consultar(idUsuario: number, fechaActual: string) {
    return this.http.doGet<Cita[]>(`${environment.endpoint}/cita/${idUsuario}/${fechaActual}`, this.http.optsName('consultar las citas del usuario por el dia actual'));
  }
}
