import { by, element } from "protractor";

export class CitaPage{
    private linkListarTrabajoDeGradoSinCitas = element(by.id('linkCrearCita'));

    private listaTrabajosDeGradoSinAgendar= element.all(by.css('tbody.listaTrabajosDeGradoSinAgendar tr'));
    private botonAbrirModalAgendarCita = this.listaTrabajosDeGradoSinAgendar.all(by.id('botonAbrirModalAgendarCita'));
    private inputFechaHoraCita = element(by.id('fechaHoraCita'));
    private botonCrearCita = element(by.id('botonCrearCita'));

    async clickLinkCrearCitasAtrabajosDeGrado(){
        await this.linkListarTrabajoDeGradoSinCitas.click();
    }

    async clickBotonAbrirModalAgendarCita(){
        await this.botonAbrirModalAgendarCita.get(0).click();
    }

    async ingresarFechaHoraCita(fechaHora){
        await this.inputFechaHoraCita.sendKeys(fechaHora)
    }

    async clickCrearCita(){
        await this.botonCrearCita.click();
    }

}