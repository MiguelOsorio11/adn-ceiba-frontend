import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualizarTrabajodegradoComponent } from './components/actualizar-trabajodegrado/actualizar-trabajodegrado.component';
import { CrearTrabajodegradoComponent } from './components/crear-trabajodegrado/crear-trabajodegrado.component';
import { ListarTrabajodegradoComponent } from './components/listar-trabajodegrado/listar-trabajodegrado.component';
import { TrabajodegradoComponent } from './components/trabajodegrado/trabajodegrado.component';

const routes: Routes = [
    {
      path: '',
      component: TrabajodegradoComponent,
      children: [
        {
          path: 'crear',
          component: CrearTrabajodegradoComponent
        },
        {
          path: 'listar',
          component: ListarTrabajodegradoComponent
        },
        {
          path: 'actualizar',
          component: ActualizarTrabajodegradoComponent
        }
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class TrabajoDeGradoRoutingModule { }