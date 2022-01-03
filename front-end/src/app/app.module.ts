
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";
//componentes
import { AppComponent } from './app.component';
import { CrearAerolineaComponent } from './components/crear-aerolinea/crear-aerolinea.component';
import { ListarAerolineaComponent } from './components/listar-aerolinea/listar-aerolinea.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListarAeropuertoComponent } from './components/listar-aeropuerto/listar-aeropuerto.component';
import { ListarAvionComponent } from './components/listar-avion/listar-avion.component';
import { CrearAeropuertoComponent } from './components/crear-aeropuerto/crear-aeropuerto.component';
import { CrearAvionComponent } from './components/crear-avion/crear-avion.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    CrearAerolineaComponent,
    ListarAerolineaComponent,
    DashboardComponent,
    ListarAeropuertoComponent,
    ListarAvionComponent,
    CrearAeropuertoComponent,
    CrearAvionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule ,
    NgxSpinnerModule,
    NgxPaginationModule,
    ToastrModule.forRoot(), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
