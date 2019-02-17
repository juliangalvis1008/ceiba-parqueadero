import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarVehiculosComponent } from './consultar-vehiculos/consultar-vehiculos.component';
import { RegistrarVehiculoComponent } from './registrar-vehiculo/registrar-vehiculo.component';
import { SacarVehiculoComponent } from './sacar-vehiculo/sacar-vehiculo.component';


const routes: Routes = [{ path: 'listarparqueados', component: ConsultarVehiculosComponent},
{ path: 'registrarvehiculo', component: RegistrarVehiculoComponent },
{ path: 'sacarvehiculo', component: SacarVehiculoComponent },
{path: '',   redirectTo: '/registrarvehiculo', pathMatch: 'full' },
{path:'**', component:RegistrarVehiculoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
