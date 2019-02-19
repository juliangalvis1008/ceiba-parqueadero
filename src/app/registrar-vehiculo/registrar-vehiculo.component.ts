import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../modelo/vehiculo';
import { Mensaje } from '../modelo/mensaje';
import { RegistrarVehiculoService } from './registrar-vehiculo.service';
import { DialogRegistrarComponent } from '../dialog-registrar/dialog-registrar.component';
import {  MatDialogConfig,MatDialog } from '@angular/material';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-registrar-vehiculo',
  templateUrl: './registrar-vehiculo.component.html',
  styleUrls: ['./registrar-vehiculo.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class RegistrarVehiculoComponent {
  private vehiculo = new Vehiculo(); 
  private respuesta:string;
  private mensaje:string; 
  constructor(private registravehiculo:RegistrarVehiculoService, public dialog: MatDialog) { }
  

  public registroVehiculo(){
    this.vehiculo.placa =  this.vehiculo.placa.toUpperCase(); 
    this.registravehiculo.registrarEntrada(this.vehiculo)
    .subscribe((data:Mensaje) => {
         this.setRespuesta( data.mensaje) ,
         this.loadResponse(data.mensaje)
        });
  }
  
  setRespuesta(message: any){
    this.respuesta = message;
  }

  loadResponse(message: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      message: message
    };
    this.dialog.open(DialogRegistrarComponent, dialogConfig);
  }

}
