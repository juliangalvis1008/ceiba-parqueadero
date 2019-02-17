import { TestBed } from '@angular/core/testing';

import { ConsultarVehiculosService } from './consultar-vehiculos.service';

describe('ConsultarVehiculosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultarVehiculosService = TestBed.get(ConsultarVehiculosService);
    expect(service).toBeTruthy();
  });
});
