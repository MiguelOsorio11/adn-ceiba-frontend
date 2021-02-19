import { NgModule } from '@angular/core';

import { CrearTrabajodegradoComponent } from './components/crear-trabajodegrado/crear-trabajodegrado.component';
import { TrabajodegradoComponent } from './components/trabajodegrado/trabajodegrado.component';
import { SharedModule } from '@shared/shared.module';
import { TrabajodegradoService } from './shared/service/trabajodegrado.service';
import { TrabajoDeGradoRoutingModule } from './trabajodegrado-routing.module';
import { ListarPuntostrabajodegradoComponent } from '../puntostrabajodegrado/components/listar-puntostrabajodegrado/listar-puntostrabajodegrado.component';
import { CrearCitaComponent } from '../cita/components/crear-cita/crear-cita.component';
import { CitaService } from '../cita/shared/service/cita.service';
import { ListarTrabajodegradoComponent } from './components/listar-trabajodegrado/listar-trabajodegrado.component';
import { ActualizarTrabajodegradoComponent } from './components/actualizar-trabajodegrado/actualizar-trabajodegrado.component';

@NgModule({
    declarations: [
      CrearCitaComponent,
      ListarPuntostrabajodegradoComponent,
      CrearTrabajodegradoComponent,
      TrabajodegradoComponent,
      ListarTrabajodegradoComponent,
      ActualizarTrabajodegradoComponent
    ],
    imports: [
      TrabajoDeGradoRoutingModule,
      SharedModule
    ],
    providers: [TrabajodegradoService, CitaService]
  })

export class TrabajoDeGradoModule{ }
