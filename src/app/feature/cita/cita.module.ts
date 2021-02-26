import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CitaService } from './shared/service/cita.service';
import { CitaComponent } from './components/cita/cita.component';
import { ListarCitaComponent } from './components/listar-cita/listar-cita.component';
import { TrabajodegradoService } from '../trabajodegrado/shared/service/trabajodegrado.service';
import { CitaRoutingModule } from './cita-routing.module';

@NgModule({
    declarations: [
    CitaComponent,
    ListarCitaComponent],
    imports: [
      CitaRoutingModule,
      SharedModule     
     ],
    providers: [CitaService, TrabajodegradoService]
  })

export class CitaModule{ }