import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { TrabajoDeGradoPage } from '../page/trabajodegrado/trabajodegrado.po';

describe('Workspace-project trabajo de grado', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let trabajoDeGradoPage: TrabajoDeGradoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        trabajoDeGradoPage = new TrabajoDeGradoPage();
    });

    it('Should create a trabajo de grado', () => {
        
         const NAME = 'My TG '+ Math.random() * (100);
         const DESCRIPTION ="Description tg";
         const titleSwapMessage = 'Creación del trabajo de grado con exito';
         //Creación del trabajo de grado con exito    id =swal2-title
         page.navigateTo();
         navBar.clickBotonTrabajosDeGrado();
         trabajoDeGradoPage.clickLinkCrearTrabajosDeGrado();
 
         trabajoDeGradoPage.ingresarNombreTrabajoDeGrado(NAME);
         trabajoDeGradoPage.ingresarDescripcionTrabajoDeGrado(DESCRIPTION);
         trabajoDeGradoPage.clickCheckBoxPuntosTrabajoDeGrado();
         trabajoDeGradoPage.clickBotonCotizarTrabajoDeGrado();
         trabajoDeGradoPage.clickBotonCrearTrabajoDeGrado();
 
         let textSwalModal = element(by.id('swal2-title'));
         expect(textSwalModal.getText()).toEqual(titleSwapMessage);
 
     });

    it('Should list trabajos de grado', () => {
        page.navigateTo();
        navBar.clickBotonTrabajosDeGrado();
        trabajoDeGradoPage.clickLinkListarTrabajosDeGrado();

        expect(trabajoDeGradoPage.contarTrabajosDeGrado()).toBeGreaterThan(0);
    });

    /*it('Should update a trabajo de grado', () => {

        const DESCRIPTION = "NUEVA DESCRIPCION";
        page.navigateTo();
        navBar.clickBotonTrabajosDeGrado();
        trabajoDeGradoPage.clickLinkListarTrabajosDeGrado();
        trabajoDeGradoPage.clickBotonAbrirModalActualizacionTG();
        trabajoDeGradoPage.ingresarDescripcionActualizacionTG(DESCRIPTION);
        trabajoDeGradoPage.clickBotonActualizarTrabajoDeGrado();

        expect(trabajoDeGradoPage.obtenerTextPrimeraFilaTGDEscripcion()).toEqual(DESCRIPTION);
    }); */



})