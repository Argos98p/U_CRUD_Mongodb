import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAerolineaComponent } from './components/crear-aerolinea/crear-aerolinea.component';
import { CrearAeropuertoComponent } from './components/crear-aeropuerto/crear-aeropuerto.component';
import { CrearAvionComponent } from './components/crear-avion/crear-avion.component';
import { ListarAerolineaComponent } from './components/listar-aerolinea/listar-aerolinea.component';
import { ListarAeropuertoComponent } from './components/listar-aeropuerto/listar-aeropuerto.component';
import { ListarAvionComponent } from './components/listar-avion/listar-avion.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path:'',component:ListarAerolineaComponent},
  { path: 'crear-aerolinea', component:CrearAerolineaComponent },
  { path: 'crear-aeropuerto', component:CrearAeropuertoComponent },
  { path: 'crear-avion', component:CrearAvionComponent },
  { path: 'listar-aerolinea',component:ListarAerolineaComponent},
  { path: 'listar-avion',component:ListarAvionComponent},
  { path: 'listar-aeropuerto',component:ListarAeropuertoComponent},
  { path: 'editar-aerolinea/:id', component:CrearAerolineaComponent },
  { path: 'editar-avion/:id', component:CrearAvionComponent },
  { path: 'editar-aeropuerto/:id', component:CrearAeropuertoComponent },
  { path: 'home',component:DashboardComponent},
  { path: '**', redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
