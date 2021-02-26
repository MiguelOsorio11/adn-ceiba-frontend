import { by, element } from "protractor";

export class TrabajoDeGradoPage{
    private linkCrearTrabajoDeGrado = element(by.id('linkCrearTrabajoDeGrado'));
    private linkListarTrabajoDeGrado = element(by.id('linkListarTrabajoDeGrado'));
    private listaTrabajosDeGrado = element.all(by.css('tbody.listaTrabajosDeGrado tr'));
    private inputNombreTrabajoDeGrado= element(by.id('nombreTrabajoDeGrado'));
    private inputDescripcionTrabajoDeGrado= element(by.id('descripcionTrabajoDeGrado'));
    
    private botonCotizarTG =element(by.id('botonCalcularValorTG'));
    private buttonCrearTrabajoDeGrado = element(by.id('buttonCrearTrabajoDeGrado'));
    //private checkPuntoTrabajoGrado = element(by.id('checkPuntoTrabajoGrado'));
    //private checkboxListaPuntos = element.all(by.css('tbody.listarPuntosTrabajoDeGrado tr.checkPuntoTrabajoGrado'));
    private listaPuntosTrabajo = element.all(by.css('tbody.listarPuntosTrabajoDeGrado tr td'));
    private checkBoxTrabajo0 = this.listaPuntosTrabajo.all(by.id('checkPuntoTrabajoGrado'));//tagName('input')); 

    //.all(by.id('checkPuntoTrabajoGrado'));

    private botonAbrirModalActualizacionTG = this.listaTrabajosDeGrado.all(by.id('botonAbrirModalActualizacion'));
    private inputActualizarDescripcionTG = element(by.id('descripcionActualizarTrabajo'));
    private botonActualizarTrabajoDeGrado = element(by.id('botonActualizarTrabajoDeGrado'));
    private obtenerTagDescripcionTG =  this.listaTrabajosDeGrado.all(by.tagName("td")).get(1);

    async clickLinkCrearTrabajosDeGrado(){
        await this.linkCrearTrabajoDeGrado.click();
    }

    async clickLinkListarTrabajosDeGrado() {
        await this.linkListarTrabajoDeGrado.click();
    }

    async contarTrabajosDeGrado() {
        return this.listaTrabajosDeGrado.count();
    }

    async ingresarNombreTrabajoDeGrado(nombre) {
        await this.inputNombreTrabajoDeGrado.sendKeys(nombre);
    }

    async ingresarDescripcionTrabajoDeGrado(descripcion) {
        await this.inputDescripcionTrabajoDeGrado.sendKeys(descripcion);
    }

    async clickBotonCotizarTrabajoDeGrado(){
        await this.botonCotizarTG.click();
    }

    async clickBotonCrearTrabajoDeGrado(){
        await this.buttonCrearTrabajoDeGrado.click();
    }

    async clickCheckBoxPuntosTrabajoDeGrado(){
        await this.checkBoxTrabajo0.click();
    }

    async clickBotonAbrirModalActualizacionTG(){
        await this.botonAbrirModalActualizacionTG.get(0).click();
    }

    async obtenerDescripcionActualizacionTG(){
        await this.inputActualizarDescripcionTG.getText();
    }

    async ingresarDescripcionActualizacionTG(descripcion){
        await this.inputActualizarDescripcionTG.sendKeys(descripcion);
    }

    async clickBotonActualizarTrabajoDeGrado(){
        await this.botonActualizarTrabajoDeGrado.click();
    }

    async obtenerTextPrimeraFilaTGDEscripcion(){
        return this.obtenerTagDescripcionTG.getText();
    }

}