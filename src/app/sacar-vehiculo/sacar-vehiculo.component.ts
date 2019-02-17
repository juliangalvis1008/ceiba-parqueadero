import { Component, OnInit } from '@angular/core';
import { SacarVehiculoService } from './sacar-vehiculo.service';
import { ConsultarVehiculosService } from '../consultar-vehiculos/consultar-vehiculos.service';
import { Vehiculo } from '../modelo/vehiculo';
import { Mensaje } from '../modelo/mensaje';
import { DialogRegistrarComponent } from '../dialog-registrar/dialog-registrar.component';
import {  MatDialogConfig,MatDialog } from '@angular/material';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sacar-vehiculo',
  templateUrl: './sacar-vehiculo.component.html',
  styleUrls: ['./sacar-vehiculo.component.css']
})
export class SacarVehiculoComponent implements OnInit {
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
    this.listaVehiculosLiquidados();
    this.listaVehiculosMotosLiquidadas();
  }
  
  public listaVehiculosLiquidados(){
    this.consultarVehiculos.consultaVehiculosLiquidados(this.tipoVehiculo)
    .subscribe(data =>  {
      console.log(data);
      this.vehiculos = data
    });

  }

  public listaVehiculosMotosLiquidadas(){
    this.consultarVehiculos.consultaVehiculosLiquidados(this.tipoVehiculoMoto)
    .subscribe(dataMotos =>  {
      console.log(dataMotos);
      this.vehiculosMoto = dataMotos
    });

  }

  loadResponse(message: any) {
    const dialogConfig = new MatDialogConfig();


    dialogConfig.data = {
      message: message
    };
    this.dialog.open(DialogRegistrarComponent, dialogConfig);
  }
  
}
