import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistrarVehiculoComponent } from './registrar-vehiculo/registrar-vehiculo.component';
import { SacarVehiculoComponent } from './sacar-vehiculo/sacar-vehiculo.component';
import {HttpClientModule} from '@angular/common/http';
import { ConsultarVehiculosComponent } from './consultar-vehiculos/consultar-vehiculos.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrarVehiculoService } from './registrar-vehiculo/registrar-vehiculo.service';
import { ConsultarVehiculosService } from './consultar-vehiculos/consultar-vehiculos.service';
import { SacarVehiculoService } from './sacar-vehiculo/sacar-vehiculo.service';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogRegistrarComponent } from './dialog-registrar/dialog-registrar.component';
import {MatButtonModule, MatCheckboxModule,MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    RegistrarVehiculoComponent,
    SacarVehiculoComponent,
    ConsultarVehiculosComponent,
    DialogRegistrarComponent,
    DialogComponent 
  ],
  entryComponents: [
    DialogRegistrarComponent,
    DialogComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatTabsModule  
  ],
  providers: [
    RegistrarVehiculoService,
    ConsultarVehiculosService,
    SacarVehiculoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
