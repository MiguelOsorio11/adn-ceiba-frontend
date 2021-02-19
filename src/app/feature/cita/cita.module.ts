import { NgModule } from '@angular/core';
import {  MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule, } from '@angular/material/card';
import { MatDialogModule, } from '@angular/material/dialog';
import { SharedModule } from '@shared/shared.module';
import { CitaService } from './shared/service/cita.service';
import { CitaComponent } from './components/cita/cita.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
    CitaComponent],
    imports: [
      MatFormFieldModule,
      MatButtonModule,
      MatFormFieldModule,
      MatCardModule,
      MatDatepickerModule, 
      MatDialogModule,  
      SharedModule     
     ],
    providers: [CitaService]
  })

export class CitaModule{ }