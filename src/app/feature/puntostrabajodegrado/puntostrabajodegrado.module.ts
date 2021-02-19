import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ListarPuntostrabajodegradoComponent } from './components/listar-puntostrabajodegrado/listar-puntostrabajodegrado.component';
import { PuntotrabajodegradoComponent } from './components/puntotrabajodegrado/puntotrabajodegrado.component';
import { puntosTrabajoDeGradoRoutingModule } from './puntostrabajodegrado-routing.module';
import { PuntotrabajodegradoService } from './shared/service/puntotrabajodegrado.service';


@NgModule({
    declarations: [
        ListarPuntostrabajodegradoComponent,
        PuntotrabajodegradoComponent
    ],
    imports: [
      puntosTrabajoDeGradoRoutingModule,
      SharedModule
    ],
    providers: [PuntotrabajodegradoService]
  })

export class PuntosTrabajoDeGradoModule{ }