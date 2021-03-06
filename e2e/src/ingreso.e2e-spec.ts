import { IngresoPage } from './ingreso.po';
import { browser, logging } from 'protractor';
import { element } from '@angular/core/src/render3';

describe('workspace-project App', () => {
  let page: IngresoPage;

  beforeEach(() => {
    page = new IngresoPage();
  });

  it('should display page name', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Estacionamiento');
  });

  it('should display ingreso exitoso', async () => {
    page.ingresaCampos();

    expect(page.getPlaca()).toBe(page.placa);
    expect(page.getTipoVehiculo()).toBe(page.tipoVehiculo);

    page.getButton();

    expect(page.getRespuesta()).toContain(page.mensaje);

  });

 
});
