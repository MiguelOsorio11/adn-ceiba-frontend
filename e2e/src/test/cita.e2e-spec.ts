import { AppPage } from "../app.po";
import { CitaPage } from "../page/cita/cita.po";
import { NavbarPage } from "../page/navbar/navbar.po";

describe('Workspace-project cita', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let citaPage: CitaPage;

    //var modal_title = element(by.css('.modal-header h3'));
    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        citaPage = new CitaPage();
    });

    it('Should create cita', () => {

        const fechaHoraCita = '02-24-2021T10:30:00';
        page.navigateTo();
        navBar.clickBotonCita();
        citaPage.clickLinkCrearCitasAtrabajosDeGrado();
        citaPage.clickBotonAbrirModalAgendarCita();
        citaPage.ingresarFechaHoraCita(fechaHoraCita);
        citaPage.clickCrearCita();
    });

})