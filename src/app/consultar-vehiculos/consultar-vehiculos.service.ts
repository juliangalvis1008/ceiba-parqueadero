import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Vehiculo } from '../modelo/vehiculo';


const url = 'http://localhost:8081';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ConsultarVehiculosService {
  private tipoVehiculo;
  constructor(private http:HttpClient) { }

  public consultaVehiculos(tipoVehiculo:string):Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(url+'/listarVehiculosParqueados/'+tipoVehiculo);
  }

  public consultaVehiculosLiquidados(tipoVehiculo:string):Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(url+'/listarVehiculosLiquidados/'+tipoVehiculo);
  }
}
