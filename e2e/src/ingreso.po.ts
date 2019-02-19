import { browser, by, element } from 'protractor';

export class IngresoPage {
  
    placa = 'VGH564';
    tipoVehiculo = 'CARRO';  
    mensaje = 'El vehiculo con placa VGH564 fue ingresado correctamente';

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

}