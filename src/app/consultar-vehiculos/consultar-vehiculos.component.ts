import { Component, OnInit } from '@angular/core';
import { ConsultarVehiculosService } from './consultar-vehiculos.service';
import { Vehiculo } from '../modelo/vehiculo';
import { SacarVehiculoService } from '../sacar-vehiculo/sacar-vehiculo.service';
import { Mensaje } from '../modelo/mensaje';
import { DialogComponent } from '../dialog/dialog.component';
import {  MatDialogConfig,MatDialog } from '@angular/material';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-consultar-vehiculos',
  templateUrl: './consultar-vehiculos.component.html',
  styleUrls: ['./consultar-vehiculos.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ConsultarVehiculosComponent implements OnInit  {
  vehiculos: Vehiculo[];
  vehiculosMoto: Vehiculo[];
  respuesta: string;
  tipoVehiculo: string;
  tipoVehiculoMoto: string;

  constructor(private consultarVehiculos: ConsultarVehiculosService,
    private sacarVehiculo: SacarVehiculoService,public dialog: MatDialog) { }
  ngOnInit(){
    this.tipoVehiculo = "CARRO";
    this.tipoVehiculoMoto = "MOTO";
    this.listaVehiculos();
    this.listaVehiculosMotos();
  }
  
  public listaVehiculos(){
    this.consultarVehiculos.consultaVehiculos(this.tipoVehiculo)
    .subscribe(data =>  {
      console.log(data);
      this.vehiculos = data
    });

  }

  public listaVehiculosMotos(){
    this.consultarVehiculos.consultaVehiculos(this.tipoVehiculoMoto)
    .subscribe(dataMotos =>  {
      console.log(dataMotos);
      this.vehiculosMoto = dataMotos
    });

  }

  public salidaVehiculo(vehiculo:Vehiculo){
       
    this.sacarVehiculo.sacarVehiculo(vehiculo)
    .subscribe((data:Mensaje) => {
          this.respuesta  = data.mensaje ;
         this.loadResponse(data.mensaje);
         this.listaVehiculos();
         this.listaVehiculosMotos();
        });
    
    
  }
  
  loadResponse(message: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      message: message
    };
    this.dialog.open(DialogComponent, dialogConfig);
  }
  
}
