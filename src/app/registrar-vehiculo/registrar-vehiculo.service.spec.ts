import { TestBed } from '@angular/core/testing';

import { RegistrarVehiculoService } from './registrar-vehiculo.service';

describe('RegistrarVehiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrarVehiculoService = TestBed.get(RegistrarVehiculoService);
    expect(service).toBeTruthy();
  });
});
