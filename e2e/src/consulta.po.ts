import { browser, by, element } from 'protractor';

export class ConsultaPage {
  
    placa = 'VGH664';
    tipoVehiculo = 'CARRO';  
    mensaje = 'El vehiculo con placa VGH664 fue ingresado correctamente';
    url = 'http://localhost:4200/listarparqueados';

    ingresaCampos(){
        element(by.css('[name="placa"]')).sendKeys(this.placa);
        element(by.css('[name="tipoVehiculo"]')).sendKeys(this.tipoVehiculo);
    }

    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getTitleText() {
        return element(by.css('app-root h1')).getText() ;
    }

    getPlaca() {
        return element(by.css('[name="placa"]')).getAttribute("value") ;
    }

    getTipoVehiculo() {
        return element(by.css('[name="tipoVehiculo"]')).getAttribute("value") ;
    }

    getRespuesta() {
        return element(by.css('[name="respuesta"]')).getAttribute("value") ;
    }

    getButton() {
        return element(by.id('registrarbutton')).click();
    }
    getNav() {
        browser.get(this.url);
        
    }

    countTable(){
        return element.all(by.css('.table tr')).count();
    }
}