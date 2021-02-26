import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
    console.log(trabajoDeGrado);
    return this.http.doPut<TrabajoDeGrado, any>(`${environment.endpoint}/trabajodegrado`, trabajoDeGrado,
                                                this.http.optsName('actualizacion trabajo de grado'));
  }

  public eliminar(idTrabajoDeGrado: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/trabajodegrado/${idTrabajoDeGrado}`,
                                          this.http.optsName('eliminar trabajos'));
  }

  public cancelar(trabajoDeGrado : TrabajoDeGrado) {
    return this.http.doPut<TrabajoDeGrado, any>(`${environment.endpoint}/trabajodegrado/cancelar`, trabajoDeGrado,
                                                this.http.optsName('cancelar trabajo de grado'));
  }

  public obtenerTrabajoDeGrado(id: number) : Observable<TrabajoDeGrado> {
    return this.http.doGet<TrabajoDeGrado>(`${environment.endpoint}/trabajodegrado/obtener/${id}`, 
                                              this.http.optsName('consulta trabajo de grado por id'))
                                              .pipe( map( response => response as TrabajoDeGrado));
  }

  public consultarTrabajosDeGradoSinCita() {
    return this.http.doGet<TrabajoDeGrado[]>(`${environment.endpoint}/trabajodegrado/sinCita`, 
                                              this.http.optsName('consultar trabajos de grado sin asignación de citas'));
  }

}
