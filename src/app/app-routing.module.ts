import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'trabajodegrado', 
     loadChildren: () => import('./feature/trabajodegrado/trabajodegrado.module')
    .then(mod => mod.TrabajoDeGradoModule) },
  { path: 'cita', loadChildren : () => import('./feature/cita/cita.module').then( mod => mod.CitaModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
