import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { TrabajoDeGrado } from '../model/TrabajoDeGrado';

@Injectable({
  providedIn: 'root'
})
export class TrabajodegradoService {

  constructor(private http: HttpService) { }

  public consultar(idUsuario: number) {
    return this.http.doGet<TrabajoDeGrado[]>(`${environment.endpoint}/trabajodegrado/${idUsuario}`, 
                                              this.http.optsName('consultar trabajos de grado por usuario'));
  }

  public guardar(trabajoDeGrado: TrabajoDeGrado)  {
    return this.http.doPost<TrabajoDeGrado, any>(`${environment.endpoint}/trabajodegrado`, trabajoDeGrado,
                                                this.http.optsName('crear trabajo de grado'));
  }

  public actualizar(trabajoDeGrado : TrabajoDeGrado) {
    return this.http.doPut<TrabajoDeGrado, any>(`${environment.endpoint}/trabajodegrado`, trabajoDeGrado,
                                                this.http.optsName('put trabajo de grado'));
  }

  public eliminar(idTrabajoDeGrado: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/trabajodegrado/${idTrabajoDeGrado}`,
                                          this.http.optsName('eliminar trabajos'));
  }

}
