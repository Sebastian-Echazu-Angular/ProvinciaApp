import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProvinciasArgentinasComponent } from './components/provincias-argentinas/provincias-argentinas.component';
import { ProvinciaComponent } from './components/provincia/provincia.component';
import { ProvinciaDetalleComponent } from './components/provincia-detalle/provincia-detalle.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'provincias-argentinas',component:ProvinciasArgentinasComponent},
  {path:'provincia/:nombreProvincia',component:ProvinciaComponent},
  {path:'provincia-detalle/:nombreProvincia',component:ProvinciaDetalleComponent},
  {path:'buscador/:superficie',component:BuscadorComponent},
  //comodin
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
