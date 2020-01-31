import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvinciaComponent } from './components/provincia/provincia.component';
import { ProvinciasArgentinasComponent } from './components/provincias-argentinas/provincias-argentinas.component';
import { ProvinciaDetalleComponent } from './components/provincia-detalle/provincia-detalle.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProvinciasService } from './service/provincias.service';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvinciaComponent,
    ProvinciasArgentinasComponent,
    ProvinciaDetalleComponent,
    NavbarComponent,
    HomeComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProvinciasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
