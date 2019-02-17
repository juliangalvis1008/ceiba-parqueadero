import { TestBed } from '@angular/core/testing';

import { SacarVehiculoService } from './sacar-vehiculo.service';

describe('SacarVehiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SacarVehiculoService = TestBed.get(SacarVehiculoService);
    expect(service).toBeTruthy();
  });
});
