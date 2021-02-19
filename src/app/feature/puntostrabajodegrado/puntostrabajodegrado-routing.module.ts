import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPuntostrabajodegradoComponent } from './components/listar-puntostrabajodegrado/listar-puntostrabajodegrado.component';
import { PuntotrabajodegradoComponent } from './components/puntotrabajodegrado/puntotrabajodegrado.component';

const routes: Routes = [
    {
      path: '',
      component: PuntotrabajodegradoComponent,
      children: [
        {
          path: 'listar',
          component: ListarPuntostrabajodegradoComponent
        }
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class puntosTrabajoDeGradoRoutingModule { }