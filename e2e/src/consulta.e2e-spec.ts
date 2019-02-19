import { ConsultaPage } from './consulta.po';
import { browser, logging } from 'protractor';
import { element } from '@angular/core/src/render3';

describe('workspace-project App', () => {
  let page: ConsultaPage;

  beforeEach(() => {
    page = new ConsultaPage();
  });

  it('should display page name', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Estacionamiento');
  });

  it('should display consulta exitosa', async () => {
    page.ingresaCampos();

    expect(page.getPlaca()).toBe(page.placa);
    expect(page.getTipoVehiculo()).toBe(page.tipoVehiculo);

    page.getButton();

    expect(page.getRespuesta()).toContain(page.mensaje);

    page.getNav();

    let list = page.countTable();

    expect(list).toBeGreaterThan(0);




  });

 
});
